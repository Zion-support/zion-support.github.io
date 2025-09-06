#!/usr/bin/env python3
"""
Comprehensive Website Analysis Script for Zion Tech Group
Analyzes the website for broken links, missing content, and other issues
"""

import requests
import time
import json
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import logging
from collections import defaultdict
import re

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class WebsiteAnalyzer:
    def __init__(self, base_url):
        self.base_url = base_url
        self.visited_urls = set()
        self.broken_links = []
        self.working_links = []
        self.missing_content = []
        self.analysis_results = {
            'base_url': base_url,
            'total_pages_analyzed': 0,
            'total_links_found': 0,
            'broken_links': [],
            'working_links': [],
            'missing_content': [],
            'performance_issues': [],
            'seo_issues': [],
            'accessibility_issues': []
        }
        
        # Headers to mimic a real browser
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        # Rate limiting
        self.delay = 1  # seconds between requests
        
    def analyze_website(self, max_depth=3):
        """Main analysis function"""
        logger.info(f"Starting analysis of {self.base_url}")
        logger.info(f"Maximum depth: {max_depth}")
        
        try:
            # Start with the homepage
            self._analyze_page(self.base_url, depth=0, max_depth=max_depth)
            
            # Generate report
            self._generate_report()
            
        except Exception as e:
            logger.error(f"Analysis failed: {e}")
            
    def _analyze_page(self, url, depth, max_depth):
        """Analyze a single page and recursively analyze linked pages"""
        if depth > max_depth or url in self.visited_urls:
            return
            
        self.visited_urls.add(url)
        logger.info(f"Analyzing page {depth + 1}/{max_depth + 1}: {url}")
        
        try:
            # Fetch the page
            response = requests.get(url, headers=self.headers, timeout=30)
            response.raise_for_status()
            
            # Parse HTML
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Analyze page content
            self._analyze_page_content(url, soup, response)
            
            # Find and analyze links
            if depth < max_depth:
                links = self._extract_links(soup, url)
                for link in links:
                    if self._should_analyze_link(link, url):
                        time.sleep(self.delay)  # Rate limiting
                        self._analyze_page(link, depth + 1, max_depth)
                        
        except requests.exceptions.RequestException as e:
            logger.error(f"Failed to fetch {url}: {e}")
            self.broken_links.append({
                'url': url,
                'error': str(e),
                'depth': depth
            })
        except Exception as e:
            logger.error(f"Error analyzing {url}: {e}")
            
    def _analyze_page_content(self, url, soup, response):
        """Analyze the content of a single page"""
        self.analysis_results['total_pages_analyzed'] += 1
        
        # Check for missing content
        self._check_missing_content(url, soup)
        
        # Check performance
        self._check_performance(url, response)
        
        # Check SEO
        self._check_seo(url, soup)
        
        # Check accessibility
        self._check_accessibility(url, soup)
        
    def _check_missing_content(self, url, soup):
        """Check for missing or empty content"""
        issues = []
        
        # Check for empty pages
        text_content = soup.get_text(strip=True)
        if len(text_content) < 100:
            issues.append("Page has very little text content")
            
        # Check for missing titles
        title = soup.find('title')
        if not title or not title.get_text(strip=True):
            issues.append("Missing page title")
            
        # Check for missing meta descriptions
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if not meta_desc or not meta_desc.get('content'):
            issues.append("Missing meta description")
            
        # Check for missing headings
        headings = soup.find_all(['h1', 'h2', 'h3'])
        if not headings:
            issues.append("No headings found")
            
        # Check for missing main content
        main_content = soup.find(['main', 'article', 'section']) or soup.find('div', class_=re.compile(r'content|main|body', re.I))
        if not main_content:
            issues.append("No main content area identified")
            
        if issues:
            self.missing_content.append({
                'url': url,
                'issues': issues
            })
            
    def _check_performance(self, url, response):
        """Check for performance issues"""
        issues = []
        
        # Check response time
        if response.elapsed.total_seconds() > 3:
            issues.append(f"Slow response time: {response.elapsed.total_seconds():.2f}s")
            
        # Check content size
        content_size = len(response.content)
        if content_size > 1024 * 1024:  # 1MB
            issues.append(f"Large page size: {content_size / (1024*1024):.2f}MB")
            
        if issues:
            self.analysis_results['performance_issues'].append({
                'url': url,
                'issues': issues
            })
            
    def _check_seo(self, url, soup):
        """Check for SEO issues"""
        issues = []
        
        # Check for multiple H1 tags
        h1_tags = soup.find_all('h1')
        if len(h1_tags) > 1:
            issues.append(f"Multiple H1 tags found: {len(h1_tags)}")
            
        # Check for missing alt text on images
        images = soup.find_all('img')
        images_without_alt = [img for img in images if not img.get('alt')]
        if images_without_alt:
            issues.append(f"Images without alt text: {len(images_without_alt)}")
            
        # Check for missing canonical URLs
        canonical = soup.find('link', attrs={'rel': 'canonical'})
        if not canonical:
            issues.append("Missing canonical URL")
            
        if issues:
            self.analysis_results['seo_issues'].append({
                'url': url,
                'issues': issues
            })
            
    def _check_accessibility(self, url, soup):
        """Check for accessibility issues"""
        issues = []
        
        # Check for missing alt text on images
        images = soup.find_all('img')
        images_without_alt = [img for img in images if not img.get('alt')]
        if images_without_alt:
            issues.append(f"Images without alt text: {len(images_without_alt)}")
            
        # Check for missing form labels
        forms = soup.find_all('form')
        for form in forms:
            inputs = form.find_all(['input', 'textarea', 'select'])
            for input_elem in inputs:
                if input_elem.get('type') not in ['hidden', 'submit', 'button']:
                    label = form.find('label', attrs={'for': input_elem.get('id')})
                    if not label:
                        issues.append(f"Form input without label: {input_elem.get('name', 'unnamed')}")
                        
        if issues:
            self.analysis_results['accessibility_issues'].append({
                'url': url,
                'issues': issues
            })
            
    def _extract_links(self, soup, base_url):
        """Extract all links from a page"""
        links = []
        
        for a_tag in soup.find_all('a', href=True):
            href = a_tag['href']
            absolute_url = urljoin(base_url, href)
            
            # Only include HTTP/HTTPS links
            if absolute_url.startswith(('http://', 'https://')):
                links.append(absolute_url)
                
        return links
        
    def _should_analyze_link(self, link, base_url):
        """Determine if a link should be analyzed"""
        # Only analyze links from the same domain
        base_domain = urlparse(base_url).netloc
        link_domain = urlparse(link).netloc
        
        return base_domain == link_domain
        
    def _generate_report(self):
        """Generate a comprehensive analysis report"""
        logger.info("Generating analysis report...")
        
        # Update final counts
        self.analysis_results['total_links_found'] = len(self.working_links) + len(self.broken_links)
        self.analysis_results['broken_links'] = self.broken_links
        self.analysis_results['working_links'] = self.working_links
        self.analysis_results['missing_content'] = self.missing_content
        
        # Save report to file
        with open('zion-website-analysis-report.json', 'w') as f:
            json.dump(self.analysis_results, f, indent=2)
            
        # Generate markdown report
        self._generate_markdown_report()
        
        logger.info("Analysis complete! Check the generated reports.")
        
    def _generate_markdown_report(self):
        """Generate a markdown report"""
        report = f"""# Zion Tech Group Website Analysis Report

## Summary
- **Base URL**: {self.analysis_results['base_url']}
- **Total Pages Analyzed**: {self.analysis_results['total_pages_analyzed']}
- **Total Links Found**: {self.analysis_results['total_links_found']}
- **Broken Links**: {len(self.analysis_results['broken_links'])}
- **Working Links**: {len(self.analysis_results['working_links'])}

## Broken Links
"""
        
        if self.analysis_results['broken_links']:
            for link in self.analysis_results['broken_links']:
                report += f"- **{link['url']}** - Error: {link['error']} (Depth: {link['depth']})\n"
        else:
            report += "✅ No broken links found!\n"
            
        report += "\n## Missing Content Issues\n"
        
        if self.analysis_results['missing_content']:
            for content in self.analysis_results['missing_content']:
                report += f"- **{content['url']}**\n"
                for issue in content['issues']:
                    report += f"  - {issue}\n"
        else:
            report += "✅ No missing content issues found!\n"
            
        report += "\n## Performance Issues\n"
        
        if self.analysis_results['performance_issues']:
            for perf in self.analysis_results['performance_issues']:
                report += f"- **{perf['url']}**\n"
                for issue in perf['issues']:
                    report += f"  - {issue}\n"
        else:
            report += "✅ No performance issues found!\n"
            
        report += "\n## SEO Issues\n"
        
        if self.analysis_results['seo_issues']:
            for seo in self.analysis_results['seo_issues']:
                report += f"- **{seo['url']}**\n"
                for issue in seo['issues']:
                    report += f"  - {issue}\n"
        else:
            report += "✅ No SEO issues found!\n"
            
        report += "\n## Accessibility Issues\n"
        
        if self.analysis_results['accessibility_issues']:
            for acc in self.analysis_results['accessibility_issues']:
                report += f"- **{acc['url']}**\n"
                for issue in acc['issues']:
                    report += f"  - {issue}\n"
        else:
            report += "✅ No accessibility issues found!\n"
            
        # Save markdown report
        with open('zion-website-analysis-report.md', 'w') as f:
            f.write(report)

def main():
    """Main function"""
    base_url = "https://ziontechgroup.com"
    
    analyzer = WebsiteAnalyzer(base_url)
    analyzer.analyze_website(max_depth=3)
    
if __name__ == "__main__":
    main()