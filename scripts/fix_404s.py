#!/usr/bin/env python3
"""
Fix 404 endpoints on GitHub Pages for ziontechgroup.com
Verifies and corrects: /hermes-agents, /documentation, /help, /docs, 
/consultation, /support
"""

import os
import re
import json

# Paths
ROOT_DIR = "/data/data/com.termux/files/home/.hermes/hermes-agent"
REDIRECTS_FILE = os.path.join(ROOT_DIR, "_redirects")
PAGES_404_FILE = os.path.join(ROOT_DIR, "PAGES_404_RECREATED.md")

# Endpoints to check and fix
ENDPOINTS = [
    "/hermes-agents",
    "/documentation",
    "/help",
    "/docs",
    "/consultation",
    "/support"
]

def read_redirects():
    """Read current _redirects file"""
    with open(REDIRECTS_FILE, 'r') as f:
        return f.read()

def save_redirects(content):
    """Save updated _redirects file"""
    with open(REDIRECTS_FILE, 'w') as f:
        f.write(content)

def get_existing_redirects(redirects_content):
    """Extract existing redirect paths"""
    existing = {}
    for line in redirects_content.split('\n'):
        line = line.strip()
        if not line or line.startswith('#'):
            continue
        parts = line.split('|')
        if len(parts) >= 3:
            source = parts[0].strip()
            target = parts[1].strip()
            status = parts[2].strip()
            if source and target:
                existing[source] = {'target': target, 'status': status}
    return existing

def add_redirect(redirects_content, source, target, status='200'):
    """Add a new redirect entry"""
    lines = redirects_content.split('\n')
    
    # Find position to add (before last line or after other 200 entries)
    insert_idx = 0
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped and not stripped.startswith('#'):
            parts = stripped.split('|')
            if len(parts) >= 3:
                insert_idx = i + 1
    
    # Create the redirect line
    redirect_line = f"{source}\t{target}\t{status}"
    
    # Insert at appropriate position
    lines.insert(insert_idx, redirect_line)
    
    return '\n'.join(lines)

def check_and_fix_endpoints():
    """Check each endpoint and create redirect if missing"""
    redirects_content = read_redirects()
    existing = get_existing_redirects(redirects_content)
    
    fixes_applied = []
    
    for endpoint in ENDPOINTS:
        endpoint_with_slash = endpoint + '/'
        
        # Check if endpoint or endpoint/ already exists
        if endpoint in existing or endpoint_with_slash in existing:
            print(f"[OK] {endpoint} - já possui redirecionamento")
            continue
        
        # Determine target based on endpoint
        if 'hermes' in endpoint.lower() or 'agents' in endpoint.lower():
            target = '/agentes-de-ia/index.html'
        elif 'document' in endpoint.lower() or 'docs' in endpoint.lower():
            target = '/documentation/index.html' if os.path.exists(os.path.join(ROOT_DIR, 'documentation')) else '/docs/index.html'
        elif 'help' in endpoint.lower():
            target = '/help/index.html' if os.path.exists(os.path.join(ROOT_DIR, 'help')) else '/support/index.html'
        elif 'consultation' in endpoint.lower():
            target = '/agendar-consulta-gratis/index.html'
        elif 'support' in endpoint.lower():
            target = '/support/index.html'
        else:
            target = '/index.html'
        
        # Check if target exists
        target_path = os.path.join(ROOT_DIR, target.lstrip('/'))
        if not os.path.exists(target_path):
            # Try to find a valid target
            if target != '/index.html':
                target = '/index.html'
                target_path = os.path.join(ROOT_DIR, 'index.html')
        
        # Add redirect
        redirects_content = add_redirect(redirects_content, endpoint, target, '200')
        redirects_content = add_redirect(redirects_content, endpoint_with_slash, target, '200')
        
        fixes_applied.append({
            'endpoint': endpoint,
            'target': target
        })
        print(f"[FIX] {endpoint} → {target}")
    
    # Save updated redirects
    if fixes_applied:
        save_redirects(redirects_content)
        print(f"\n✓ Redirects atualizados em {REDIRECTS_FILE}")
    
    return fixes_applied

def verify_github_pages_endpoints():
    """Verify endpoints by checking if they resolve correctly"""
    import urllib.request
    import urllib.error
    
    results = []
    
    for endpoint in ENDPOINTS:
        url = f"https://ziontechgroup.com{endpoint}"
        if not url.endswith('/'):
            test_url = f"{url}/"
        else:
            test_url = url
        
        try:
            req = urllib.request.Request(test_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=10) as response:
                status = response.status
                results.append({'endpoint': endpoint, 'url': test_url, 'status': status, 'error': None})
        except urllib.error.HTTPError as e:
            results.append({'endpoint': endpoint, 'url': test_url, 'status': e.code, 'error': str(e)})
        except Exception as e:
            results.append({'endpoint': endpoint, 'url': test_url, 'status': None, 'error': str(e)})
    
    return results

def main():
    print("=" * 60)
    print("Fix 404s - GitHub Pages Endpoint Fixer")
    print("=" * 60)
    print()
    
    # Check and fix endpoints
    print("Verificando endpoints...")
    print("-" * 60)
    fixes = check_and_fix_endpoints()
    
    print()
    print("=" * 60)
    print("Resumo das correções:")
    print("-" * 60)
    if fixes:
        for fix in fixes:
            print(f"  {fix['endpoint']:25} → {fix['target']}")
    else:
        print("  Nenhuma correção necessária")
    
    print()
    print("=" * 60)
    print("Status final:", "✓ OK" if not fixes else f"! {len(fixes)} correções aplicadas")
    
    return fixes

if __name__ == "__main__":
    main()