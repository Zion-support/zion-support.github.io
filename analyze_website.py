#!/usr/bin/env python3
"""
Script to analyze the Zion Tech Group website for broken links and missing content
"""
import requests
import time
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import json
from collections import defaultdict

class WebsiteAnalyzer:
    def __init__(self, base_url="https://ziontechgroup.com"):
        self.base_url = base_url
        self.visited_urls = set()
        self.broken_links = []
        self.missing_pages = []
        self.found_pages = []
        self.link_structure = defaultdict(list)
        
    def is_valid_url(self, url):
        """Check if URL is valid and belongs to the same domain"""
        try:
            parsed = urlparse(url)
            return parsed.netloc == urlparse(self.base_url).netloc or parsed.netloc == ''
        except:
            return False
    
    def check_url_status(self, url):
        """Check if a URL returns a valid response"""
        try:
            response = requests.get(url, timeout=10, allow_redirects=True)
            return response.status_code, response.url
        except requests.exceptions.RequestException as e:
            return None, str(e)
    
    def extract_links(self, html_content, current_url):
        """Extract all links from HTML content"""
        soup = BeautifulSoup(html_content, 'html.parser')
        links = []
        
        # Extract all href attributes
        for link in soup.find_all('a', href=True):
            href = link['href']
            full_url = urljoin(current_url, href)
            
            if self.is_valid_url(full_url):
                links.append({
                    'url': full_url,
                    'text': link.get_text(strip=True),
                    'source': current_url
                })
        
        return links
    
    def analyze_page(self, url):
        """Analyze a single page"""
        if url in self.visited_urls:
            return
        
        print(f"Analyzing: {url}")
        self.visited_urls.add(url)
        
        try:
            response = requests.get(url, timeout=10)
            if response.status_code == 200:
                self.found_pages.append(url)
                
                # Extract links from this page
                links = self.extract_links(response.text, url)
                self.link_structure[url] = links
                
                # Check each link
                for link_info in links:
                    link_url = link_info['url']
                    if link_url not in self.visited_urls:
                        status, final_url = self.check_url_status(link_url)
                        if status is None or status >= 400:
                            self.broken_links.append({
                                'url': link_url,
                                'source': url,
                                'text': link_info['text'],
                                'error': final_url if status is None else f"HTTP {status}"
                            })
                        else:
                            # Recursively analyze if it's a new page
                            if link_url not in self.visited_urls:
                                time.sleep(0.5)  # Be respectful
                                self.analyze_page(link_url)
            else:
                self.broken_links.append({
                    'url': url,
                    'source': 'direct',
                    'text': '',
                    'error': f"HTTP {response.status_code}"
                })
        except Exception as e:
            self.broken_links.append({
                'url': url,
                'source': 'direct',
                'text': '',
                'error': str(e)
            })
    
    def generate_report(self):
        """Generate analysis report"""
        report = {
            'summary': {
                'total_pages_found': len(self.found_pages),
                'total_broken_links': len(self.broken_links),
                'total_links_analyzed': len(self.visited_urls)
            },
            'found_pages': self.found_pages,
            'broken_links': self.broken_links,
            'link_structure': dict(self.link_structure)
        }
        
        return report
    
    def run_analysis(self):
        """Run the complete website analysis"""
        print(f"Starting analysis of {self.base_url}")
        self.analyze_page(self.base_url)
        
        # Generate report
        report = self.generate_report()
        
        # Save report
        with open('/workspace/website_analysis_report.json', 'w') as f:
            json.dump(report, f, indent=2)
        
        print(f"\nAnalysis complete!")
        print(f"Found {len(self.found_pages)} working pages")
        print(f"Found {len(self.broken_links)} broken links")
        
        return report

def main():
    analyzer = WebsiteAnalyzer()
    report = analyzer.run_analysis()
    
    # Print broken links
    if report['broken_links']:
        print("\nBroken Links Found:")
        for link in report['broken_links']:
            print(f"  - {link['url']} (from {link['source']}) - {link['error']}")

if __name__ == "__main__":
    main()