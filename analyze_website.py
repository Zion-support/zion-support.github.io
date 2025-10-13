#!/usr/bin/env python3
"""
Comprehensive website analysis script to check all links and identify issues.
"""

import requests
import time
import re
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
import json

class WebsiteAnalyzer:
    def __init__(self, base_url="https://ziontechgroup.com"):
        self.base_url = base_url
        self.visited_urls = set()
        self.broken_links = []
        self.missing_pages = []
        self.working_links = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })

    def is_valid_url(self, url):
        """Check if URL is valid and belongs to the same domain."""
        try:
            parsed = urlparse(url)
            return parsed.netloc == urlparse(self.base_url).netloc or parsed.netloc == ''
        except:
            return False

    def normalize_url(self, url):
        """Normalize URL to absolute format."""
        if url.startswith('/'):
            return urljoin(self.base_url, url)
        elif url.startswith('http'):
            return url
        else:
            return urljoin(self.base_url, url)

    def check_url(self, url):
        """Check if a URL is accessible."""
        try:
            response = self.session.get(url, timeout=10, allow_redirects=True)
            if response.status_code == 200:
                return True, response
            else:
                return False, response
        except Exception as e:
            return False, str(e)

    def extract_links(self, html_content, current_url):
        """Extract all links from HTML content."""
        soup = BeautifulSoup(html_content, 'html.parser')
        links = []
        
        # Extract all href attributes
        for link in soup.find_all('a', href=True):
            href = link['href']
            if self.is_valid_url(href):
                normalized_url = self.normalize_url(href)
                links.append({
                    'url': normalized_url,
                    'text': link.get_text(strip=True),
                    'source': current_url
                })
        
        return links

    def analyze_page(self, url):
        """Analyze a single page."""
        if url in self.visited_urls:
            return
        
        print(f"Analyzing: {url}")
        self.visited_urls.add(url)
        
        is_working, response = self.check_url(url)
        
        if is_working:
            self.working_links.append(url)
            # Extract links from this page
            if hasattr(response, 'text'):
                links = self.extract_links(response.text, url)
                return links
        else:
            self.broken_links.append({
                'url': url,
                'status': response.status_code if hasattr(response, 'status_code') else 'Error',
                'error': str(response) if not hasattr(response, 'status_code') else None
            })
        
        return []

    def get_expected_pages(self):
        """Get list of expected pages based on the codebase."""
        return [
            "/",
            "/about",
            "/contact",
            "/services",
            "/blog",
            "/privacy",
            "/terms",
            "/ai-services",
            "/micro-saas",
            "/5g-solutions",
            "/tutorials",
            "/demo",
            "/support",
            # AI Services
            "/ai-analytics",
            "/ai-content-generation",
            "/ai-customer-support",
            "/ai-cybersecurity",
            "/ai-data-analytics",
            "/ai-document-processing",
            "/ai-marketing-automation",
            "/ai-predictive-analytics",
            "/ai-voice-assistant",
            "/ai-workflow-automation",
            # IT Services
            "/cloud-migration",
            "/devops-services",
            "/it-consulting",
            "/network-security",
            "/software-development",
            "/system-integration",
            "/web-development",
            # 5G Services
            "/5g-data-analytics",
            "/5g-edge-computing",
            "/5g-implementation",
            "/5g-mobile-applications",
            "/5g-network-infrastructure",
            "/5g-private-networks",
            "/5g-smart-city-solutions",
            "/5g-iot-solutions",
            # Micro SAAS
            "/micro-saas-services",
            "/project-management-tool",
            "/customer-relationship-manager",
            "/inventory-management-system",
            "/financial-reporting-tool",
            "/employee-time-tracker",
            "/social-media-scheduler",
            "/email-marketing-platform",
            "/website-analytics-tool",
            "/task-automation-workflow",
        ]

    def run_analysis(self):
        """Run comprehensive website analysis."""
        print("Starting comprehensive website analysis...")
        
        # Start with the homepage
        homepage_links = self.analyze_page(self.base_url)
        
        # Analyze expected pages
        expected_pages = self.get_expected_pages()
        
        for page in expected_pages:
            full_url = urljoin(self.base_url, page)
            self.analyze_page(full_url)
            time.sleep(0.5)  # Be respectful to the server
        
        # Follow links from homepage
        if homepage_links:
            for link in homepage_links[:20]:  # Limit to first 20 links
                if link['url'] not in self.visited_urls:
                    self.analyze_page(link['url'])
                    time.sleep(0.5)
        
        return self.generate_report()

    def generate_report(self):
        """Generate analysis report."""
        report = {
            'total_pages_checked': len(self.visited_urls),
            'working_links': len(self.working_links),
            'broken_links': len(self.broken_links),
            'missing_pages': [],
            'broken_links_details': self.broken_links,
            'working_links_list': self.working_links,
            'visited_urls': list(self.visited_urls)
        }
        
        # Check for missing expected pages
        expected_pages = self.get_expected_pages()
        for page in expected_pages:
            full_url = urljoin(self.base_url, page)
            if full_url not in self.working_links:
                report['missing_pages'].append(page)
        
        return report

def main():
    analyzer = WebsiteAnalyzer()
    report = analyzer.run_analysis()
    
    print("\n" + "="*50)
    print("WEBSITE ANALYSIS REPORT")
    print("="*50)
    print(f"Total pages checked: {report['total_pages_checked']}")
    print(f"Working links: {report['working_links']}")
    print(f"Broken links: {report['broken_links']}")
    print(f"Missing pages: {len(report['missing_pages'])}")
    
    if report['broken_links'] > 0:
        print("\nBROKEN LINKS:")
        for link in report['broken_links_details']:
            print(f"  - {link['url']} (Status: {link['status']})")
    
    if report['missing_pages']:
        print("\nMISSING PAGES:")
        for page in report['missing_pages']:
            print(f"  - {page}")
    
    # Save report to file
    with open('website_analysis_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    
    print(f"\nDetailed report saved to: website_analysis_report.json")

if __name__ == "__main__":
    main()