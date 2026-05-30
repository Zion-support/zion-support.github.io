#!/usr/bin/env python3
"""
AI Performance Optimizer for Next.js
Analyzes the codebase and suggests performance improvements.
Usage: python3 scripts/ai_perf_optimizer.py
"""

import os
import re
import sys
import json
from datetime import datetime

class NextJSPerfOptimizer:
    def __init__(self, root_dir="."):
        self.root_dir = root_dir
        self.suggestions = []
        self.stats = {
            "files_scanned": 0,
            "components_found": 0,
            "pages_found": 0,
            "api_routes_found": 0,
        }
    
    def scan(self):
        for root, dirs, files in os.walk(self.root_dir):
            dirs[:] = [d for d in dirs if d not in ['node_modules', '__pycache__', '.git', '.next']]
            for file in files:
                if file.endswith(('.tsx', '.ts', '.jsx', '.js')):
                    file_path = os.path.join(root, file)
                    self._analyze_file(file_path)
                    self.stats["files_scanned"] += 1
    
    def _analyze_file(self, file_path):
        with open(file_path, 'r') as f:
            content = f.read()
        
        rel_path = os.path.relpath(file_path, self.root_dir)
        
        # Check for client component patterns
        if "'use client'" in content or '"use client"' in content:
            self.stats["components_found"] += 1
            self._check_client_component(rel_path, content)
        
        # Check for page files
        if file_path.endswith('page.tsx'):
            self.stats["pages_found"] += 1
            self._check_page(rel_path, content)
        
        # Check for API routes
        if '/api/' in file_path:
            self.stats["api_routes_found"] += 1
            self._check_api_route(rel_path, content)
    
    def _check_client_component(self, path, content):
        # Check for missing dynamic import
        if "import" in content and "dynamic" not in content:
            if re.search(r'<(Image|img)\s', content):
                self.suggestions.append({
                    "file": path,
                    "severity": "high",
                    "type": "performance",
                    "message": "Component uses Image/img but may need next/image optimization",
                    "fix": "Use next/image Image component with proper width/height",
                })
        
        # Check for large inline data
        if re.search(r'const\s+\w+\s*=\s*\[\s*\{', content):
            self.suggestions.append({
                "file": path,
                "severity": "medium",
                "type": "bundle-size",
                "message": "Large inline data array detected - may increase bundle size",
                "fix": "Move data to separate JSON/TS file or fetch from API",
            })
        
        # Check for missing error boundaries
        if "useEffect" in content and "try" not in content:
            self.suggestions.append({
                "file": path,
                "severity": "medium",
                "type": "reliability",
                "message": "useEffect without error boundary - add try/catch for async operations",
                "fix": "Wrap async operations in try/catch or use react-error-boundary",
            })
    
    def _check_page(self, path, content):
        # Check for metadata export
        if "export const metadata" not in content and "export async function generateMetadata" not in content:
            # Check if it's a sub-page that might need metadata
            if not os.path.basename(os.path.dirname(path)) == 'api':
                self.suggestions.append({
                    "file": path,
                    "severity": "high",
                    "type": "seo",
                    "message": "Page missing metadata export - may hurt SEO",
                    "fix": "Add 'export const metadata: Metadata = { title: ..., description: ... }'",
                })
        
        # Check for proper error handling
        if "try" not in content and "catch" not in content:
            if "await " in content:
                self.suggestions.append({
                    "file": path,
                    "severity": "medium",
                    "type": "reliability",
                    "message": "Async page without try/catch - may cause unhandled errors",
                    "fix": "Wrap async data fetching in try/catch or add error.tsx",
                })
        
        # Check for loading state
        if "Suspense" not in content and "loading" not in content:
            if "await " in content:
                self.suggestions.append({
                    "file": path,
                    "severity": "low",
                    "type": "ux",
                    "message": "Async page without loading state - consider adding loading.tsx",
                    "fix": "Add loading.tsx in the same route segment",
                })
    
    def _check_api_route(self, path, content):
        # Check for response caching
        if "revalidate" not in content and "Cache-Control" not in content:
            if "export async function GET" in content:
                self.suggestions.append({
                    "file": path,
                    "severity": "medium",
                    "type": "caching",
                    "message": "API route without caching strategy - may cause unnecessary DB/API hits",
                    "fix": "Add revalidate export or Cache-Control headers",
                })
        
        # Check for input validation
        if "POST" in content and "zod" not in content and "joi" not in content:
            self.suggestions.append({
                "file": path,
                "severity": "high",
                "type": "security",
                "message": "POST endpoint without input validation - security risk",
                "fix": "Add Zod schema validation for request body",
            })
    
    def generate_report(self):
        report = {
            "timestamp": datetime.now().isoformat(),
            "stats": self.stats,
            "suggestions": self.suggestions,
            "summary": {
                "high": len([s for s in self.suggestions if s["severity"] == "high"]),
                "medium": len([s for s in self.suggestions if s["severity"] == "medium"]),
                "low": len([s for s in self.suggestions if s["severity"] == "low"]),
            }
        }
        return report

def main():
    root_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    
    print(f"⚡ Next.js Performance Analyzer")
    print(f"📁 Scanning: {os.path.abspath(root_dir)}")
    print(f"{'='*60}\n")
    
    optimizer = NextJSPerfOptimizer(root_dir)
    optimizer.scan()
    
    report = optimizer.generate_report()
    
    if not report["suggestions"]:
        print("✅ No performance issues found! Your app is optimized. 🚀")
    else:
        # Group by severity
        for severity in ["high", "medium", "low"]:
            items = [s for s in report["suggestions"] if s["severity"] == severity]
            if items:
                emoji = {"high": "🔴", "medium": "🟡", "low": "🟢"}[severity]
                print(f"{emoji} {severity.upper()} ({len(items)} issues):")
                for item in items:
                    filter_type = item['type']
                    print(f"\n  📄 {item['file']}")
                    print(f"     [{filter_type}] {item['message']}")
                    print(f"     💡 Fix: {item['fix']}")
                print()
    
    print(f"\n{'='*60}")
    print(f"📊 Scan Complete:")
    print(f"   Files scanned: {report['stats']['files_scanned']}")
    print(f"   Components found: {report['stats']['components_found']}")
    print(f"   Pages found: {report['stats']['pages_found']}")
    print(f"   API routes found: {report['stats']['api_routes_found']}")
    print(f"   Issues found: {len(report['suggestions'])}")
    print(f"   High: {report['summary']['high']} | Medium: {report['summary']['medium']} | Low: {report['summary']['low']}")
    
    # Save report
    report_path = os.path.join(root_dir, "performance_report.json")
    with open(report_path, "w") as f:
        json.dump(report, f, indent=2)
    print(f"\n📄 Full report saved to: {report_path}")

if __name__ == "__main__":
    main()
