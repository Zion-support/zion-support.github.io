#!/usr/bin/env python3
"""
Analyze the local development version of the website
"""
import requests
import json
import re
from urllib.parse import urljoin

def analyze_local_site():
    """Analyze the local development site"""
    base_url = "http://localhost:3003"
    
    # Common routes that should exist based on the App.tsx file
    routes_to_check = [
        "/",
        "/about",
        "/contact", 
        "/services",
        "/pricing",
        "/blog",
        "/ai-services",
        "/tutorials",
        "/demo",
        "/support",
        "/privacy",
        "/terms",
        "/cookies",
        "/sitemap",
        "/team",
        "/careers",
        "/case-studies",
        "/ai-analytics",
        "/ai-automation",
        "/ai-business-intelligence",
        "/ai-content-generation",
        "/ai-customer-service",
        "/ai-data-analytics",
        "/ai-email-automation",
        "/ai-fraud-detection",
        "/ai-healthcare",
        "/ai-marketing",
        "/ai-predictive-analytics",
        "/ai-project-management",
        "/ai-recommendation-engine",
        "/ai-sales-automation",
        "/ai-workflow-automation",
        "/cloud-infrastructure",
        "/cybersecurity-solutions",
        "/web-development",
        "/mobile-development",
        "/database-management",
        "/custom-software",
        "/network-infrastructure",
        "/cloud-native-development",
        "/blockchain-development",
        "/e-commerce-development",
        "/data-engineering",
        "/cybersecurity-advanced",
        "/cloud-migration-advanced",
        "/machine-learning-ops",
        "/enterprise-integration",
        "/performance-optimization",
        "/disaster-recovery-advanced",
        "/compliance-automation",
        "/cloud-cost-optimization",
        "/security-automation",
        "/data-visualization",
        "/workflow-automation",
        "/cloud-native-security",
        "/data-analytics",
        "/iot-solutions",
        "/devops-solutions",
        "/machine-learning",
        "/quantum-computing",
        "/robotics",
        "/zion-analytics-pro",
        "/zion-security-shield",
        "/zion-cloud-vault",
        "/zion-content-studio",
        "/zion-data-sync",
        "/zion-lead-magnet",
        "/zion-project-master",
        "/zion-email-automation",
        "/zion-social-scheduler",
        "/zion-workflow-automation",
        "/zion-invoice-genius",
        "/zion-inventory-smart",
        "/zion-compliance-manager",
        "/zion-performance-monitor",
        "/5g-data-analytics",
        "/5g-edge-computing",
        "/5g-implementation",
        "/5g-mobile-applications",
        "/5g-network-infrastructure",
        "/5g-private-networks",
        "/5g-smart-city-solutions",
        "/5g-solutions",
        "/5g-iot-solutions"
    ]
    
    working_routes = []
    broken_routes = []
    
    print("Analyzing local development site...")
    print(f"Base URL: {base_url}")
    
    for route in routes_to_check:
        url = urljoin(base_url, route)
        try:
            response = requests.get(url, timeout=5)
            if response.status_code == 200:
                working_routes.append(route)
                print(f"✅ {route} - Working")
            else:
                broken_routes.append({
                    'route': route,
                    'status': response.status_code,
                    'error': f"HTTP {response.status_code}"
                })
                print(f"❌ {route} - HTTP {response.status_code}")
        except requests.exceptions.RequestException as e:
            broken_routes.append({
                'route': route,
                'status': 'ERROR',
                'error': str(e)
            })
            print(f"❌ {route} - {str(e)}")
    
    # Generate report
    report = {
        'summary': {
            'total_routes_checked': len(routes_to_check),
            'working_routes': len(working_routes),
            'broken_routes': len(broken_routes)
        },
        'working_routes': working_routes,
        'broken_routes': broken_routes
    }
    
    # Save report
    with open('local_analysis_report.json', 'w') as f:
        json.dump(report, f, indent=2)
    
    print(f"\n=== ANALYSIS COMPLETE ===")
    print(f"Total routes checked: {len(routes_to_check)}")
    print(f"Working routes: {len(working_routes)}")
    print(f"Broken routes: {len(broken_routes)}")
    
    if broken_routes:
        print(f"\n=== BROKEN ROUTES ===")
        for route in broken_routes:
            print(f"❌ {route['route']} - {route['error']}")
    
    return report

if __name__ == "__main__":
    analyze_local_site()