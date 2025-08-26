#!/usr/bin/env python3
"""
Simple Website Analysis Script for Zion Tech Group
Uses only built-in Python libraries to analyze website links and content
"""

import urllib.request
import urllib.parse
import urllib.error
import html.parser
import re
import json
import time
import logging
from collections import defaultdict
import sys
from typing import Dict, List, Set, Tuple

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('zion-website-simple-analysis.log'),
        logging.StreamHandler(sys.stdout)
    ]
)

class SimpleHTMLParser(html.parser.HTMLParser):
    """Simple HTML parser to extract links and content"""
    
    def __init__(self):
        super().__init__()
        self.links = []
        self.title = ""
        self.meta_description = ""
        self.headings = []
        self.text_content = []
        self.images = []
        self.forms = []
        
    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        if tag == 'a' and 'href' in attrs_dict:
            self.links.append(attrs_dict['href'])
        elif tag == 'title':
            self.in_title = True
        elif tag == 'meta' and attrs_dict.get('name') == 'description':
            self.meta_description = attrs_dict.get('content', '')
        elif tag.startswith('h') and tag[1].isdigit():
            self.in_heading = True
            self.current_heading = tag
        elif tag == 'img' and 'src' in attrs_dict:
            self.images.append(attrs_dict['src'])
        elif tag == 'form' and 'action' in attrs_dict:
            self.forms.append(attrs_dict['action'])
    
    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag.startswith('h') and tag[1].isdigit():
            self.in_heading = False
    
    def handle_data(self, data):
        if hasattr(self, 'in_title') and self.in_title:
            self.title += data
        elif hasattr(self, 'in_heading') and self.in_heading:
            self.headings.append(data.strip())
        else:
            self.text_content.append(data)

class ZionWebsiteAnalyzer:
    def __init__(self, base_url: str = "https://ziontechgroup.com"):
        self.base_url = base_url
        
        # Analysis results
        self.visited_urls: Set[str] = set()
        self.broken_links: List[Dict] = []
        self.missing_content: List[Dict] = []
        self.working_links: List[str] = []
        self.page_analysis: Dict[str, Dict] = {}
        self.link_hierarchy: Dict[str, List[str]] = defaultdict(list)
        
        # Statistics
        self.total_pages = 0
        self.total_links = 0
        self.start_time = time.time()
        
    def is_valid_url(self, url: str) -> bool:
        """Check if URL is valid and belongs to the same domain"""
        try:
            parsed = urllib.parse.urlparse(url)
            return (
                parsed.scheme in ['http', 'https'] and
                parsed.netloc in ['ziontechgroup.com', 'www.ziontechgroup.com'] and
                not url.startswith('#') and
                not url.startswith('mailto:') and
                not url.startswith('tel:')
            )
        except:
            return False
    
    def get_page_content(self, url: str) -> Tuple[bool, str, int]:
        """Fetch page content and return status"""
        try:
            # Set up request headers
            req = urllib.request.Request(url)
            req.add_header('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
            
            with urllib.request.urlopen(req, timeout=30) as response:
                content = response.read().decode('utf-8', errors='ignore')
                return True, content, response.getcode()
        except urllib.error.HTTPError as e:
            return False, f"HTTP Error: {e.code}", e.code
        except urllib.error.URLError as e:
            return False, f"URL Error: {e.reason}", 0
        except Exception as e:
            return False, str(e), 0
    
    def extract_links(self, html_content: str, base_url: str) -> List[str]:
        """Extract all links from HTML content"""
        parser = SimpleHTMLParser()
        parser.feed(html_content)
        
        links = []
        for href in parser.links:
            absolute_url = urllib.parse.urljoin(base_url, href)
            if self.is_valid_url(absolute_url):
                links.append(absolute_url)
        
        # Add form actions
        for action in parser.forms:
            absolute_url = urllib.parse.urljoin(base_url, action)
            if self.is_valid_url(absolute_url):
                links.append(absolute_url)
        
        return list(set(links))  # Remove duplicates
    
    def analyze_page_content(self, html_content: str, url: str) -> Dict:
        """Analyze page content for completeness and quality"""
        parser = SimpleHTMLParser()
        parser.feed(html_content)
        
        # Get text content
        text_content = ' '.join(parser.text_content)
        
        # Analysis metrics
        analysis = {
            'url': url,
            'title': parser.title.strip() if parser.title else 'No title',
            'meta_description': parser.meta_description,
            'content_length': len(text_content.strip()),
            'has_navigation': bool(re.search(r'<nav|<header', html_content, re.IGNORECASE)),
            'has_footer': bool(re.search(r'<footer', html_content, re.IGNORECASE)),
            'has_main_content': bool(re.search(r'<main|<article|<section', html_content, re.IGNORECASE)),
            'image_count': len(parser.images),
            'form_count': len(parser.forms),
            'link_count': len(parser.links),
            'headings': parser.headings,
            'content_issues': []
        }
        
        # Check for content issues
        if analysis['content_length'] < 100:
            analysis['content_issues'].append('Very short content')
        
        if not analysis['has_navigation']:
            analysis['content_issues'].append('Missing navigation')
        
        if not analysis['has_main_content']:
            analysis['content_issues'].append('Missing main content area')
        
        if analysis['image_count'] == 0:
            analysis['content_issues'].append('No images found')
        
        return analysis
    
    def analyze_page(self, url: str, depth: int = 0, max_depth: int = 3) -> None:
        """Analyze a single page and its links recursively"""
        if depth > max_depth or url in self.visited_urls:
            return
        
        self.visited_urls.add(url)
        self.total_pages += 1
        
        logging.info(f"🔍 Analyzing page {self.total_pages}: {url} (depth: {depth})")
        
        # Get page content
        success, content, status_code = self.get_page_content(url)
        
        if not success:
            self.broken_links.append({
                'url': url,
                'error': content,
                'status_code': status_code,
                'depth': depth
            })
            logging.error(f"❌ Failed to fetch {url}: {content}")
            return
        
        if status_code != 200:
            self.broken_links.append({
                'url': url,
                'error': f"HTTP {status_code}",
                'status_code': status_code,
                'depth': depth
            })
            logging.warning(f"⚠️  HTTP {status_code} for {url}")
            return
        
        # Analyze page content
        page_analysis = self.analyze_page_content(content, url)
        self.page_analysis[url] = page_analysis
        
        # Check for missing content
        if page_analysis['content_issues']:
            self.missing_content.append({
                'url': url,
                'issues': page_analysis['content_issues'],
                'depth': depth
            })
        
        # Extract and analyze links
        links = self.extract_links(content, url)
        self.link_hierarchy[url] = links
        self.total_links += len(links)
        
        # Add to working links
        self.working_links.append(url)
        
        # Recursively analyze linked pages (limited depth for performance)
        for link in links:
            if link not in self.visited_urls and depth < max_depth:
                time.sleep(1)  # Be respectful to the server
                self.analyze_page(link, depth + 1, max_depth)
    
    def generate_report(self) -> Dict:
        """Generate comprehensive analysis report"""
        end_time = time.time()
        duration = end_time - self.start_time
        
        report = {
            'analysis_summary': {
                'base_url': self.base_url,
                'total_pages_analyzed': self.total_pages,
                'total_links_found': self.total_links,
                'analysis_duration_seconds': round(duration, 2),
                'start_time': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(self.start_time)),
                'end_time': time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(end_time))
            },
            'broken_links': {
                'count': len(self.broken_links),
                'details': self.broken_links
            },
            'missing_content': {
                'count': len(self.missing_content),
                'details': self.missing_content
            },
            'working_links': {
                'count': len(self.working_links),
                'urls': self.working_links
            },
            'page_analysis': self.page_analysis,
            'link_hierarchy': dict(self.link_hierarchy),
            'recommendations': self.generate_recommendations()
        }
        
        return report
    
    def generate_recommendations(self) -> List[str]:
        """Generate actionable recommendations based on analysis"""
        recommendations = []
        
        if self.broken_links:
            recommendations.append(f"Fix {len(self.broken_links)} broken links to improve user experience")
        
        if self.missing_content:
            recommendations.append(f"Address {len(self.missing_content)} pages with missing content")
        
        # Content quality recommendations
        short_content_pages = [url for url, analysis in self.page_analysis.items() 
                             if analysis['content_length'] < 200]
        if short_content_pages:
            recommendations.append(f"Enhance content on {len(short_content_pages)} pages with minimal content")
        
        no_nav_pages = [url for url, analysis in self.page_analysis.items() 
                       if not analysis['has_navigation']]
        if no_nav_pages:
            recommendations.append(f"Add navigation to {len(no_nav_pages)} pages")
        
        no_images_pages = [url for url, analysis in self.page_analysis.items() 
                          if analysis['image_count'] == 0]
        if no_images_pages:
            recommendations.append(f"Consider adding images to {len(no_images_pages)} pages for better visual appeal")
        
        return recommendations
    
    def save_report(self, filename: str = 'zion-website-simple-analysis-report.json') -> None:
        """Save analysis report to file"""
        report = self.generate_report()
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        logging.info(f"📊 Report saved to {filename}")
    
    def print_summary(self) -> None:
        """Print analysis summary to console"""
        report = self.generate_report()
        
        print("\n" + "="*80)
        print("🌐 ZION TECH GROUP WEBSITE SIMPLE ANALYSIS REPORT")
        print("="*80)
        
        summary = report['analysis_summary']
        print(f"📊 Analysis Summary:")
        print(f"   • Base URL: {summary['base_url']}")
        print(f"   • Total Pages Analyzed: {summary['total_pages_analyzed']}")
        print(f"   • Total Links Found: {summary['total_links_found']}")
        print(f"   • Analysis Duration: {summary['analysis_duration_seconds']} seconds")
        print(f"   • Start Time: {summary['start_time']}")
        print(f"   • End Time: {summary['end_time']}")
        
        print(f"\n🔗 Link Analysis:")
        print(f"   • Broken Links: {report['broken_links']['count']}")
        print(f"   • Missing Content Issues: {report['missing_content']['count']}")
        print(f"   • Working Links: {report['working_links']['count']}")
        
        if report['broken_links']['count'] > 0:
            print(f"\n❌ Broken Links Found:")
            for link in report['broken_links']['details'][:10]:  # Show first 10
                print(f"   • {link['url']} - {link['error']}")
            if len(report['broken_links']['details']) > 10:
                print(f"   ... and {len(report['broken_links']['details']) - 10} more")
        
        if report['missing_content']['count'] > 0:
            print(f"\n⚠️  Content Issues Found:")
            for issue in report['missing_content']['details'][:10]:  # Show first 10
                print(f"   • {issue['url']} - {', '.join(issue['issues'])}")
            if len(report['missing_content']['details']) > 10:
                print(f"   ... and {len(report['missing_content']['details']) - 10} more")
        
        if report['recommendations']:
            print(f"\n💡 Recommendations:")
            for rec in report['recommendations']:
                print(f"   • {rec}")
        
        print("\n" + "="*80)

def main():
    """Main execution function"""
    print("🚀 Starting Zion Tech Group Website Simple Analysis...")
    print("This will analyze all pages, links, and content using built-in libraries.")
    print("Please be patient as this may take several minutes.\n")
    
    # Initialize analyzer
    analyzer = ZionWebsiteAnalyzer()
    
    try:
        # Start analysis from the main page
        analyzer.analyze_page(analyzer.base_url)
        
        # Generate and save report
        analyzer.save_report()
        
        # Print summary
        analyzer.print_summary()
        
        print(f"\n✅ Analysis completed successfully!")
        print(f"📊 Detailed report saved to: zion-website-simple-analysis-report.json")
        print(f"📝 Log file saved to: zion-website-simple-analysis.log")
        
    except KeyboardInterrupt:
        print("\n⚠️  Analysis interrupted by user")
        analyzer.save_report('zion-website-simple-analysis-report-interrupted.json')
    except Exception as e:
        print(f"\n❌ Analysis failed with error: {e}")
        logging.error(f"Analysis failed: {e}")
        analyzer.save_report('zion-website-simple-analysis-report-error.json')

if __name__ == "__main__":
    main()