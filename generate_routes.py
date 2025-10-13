#!/usr/bin/env python3
"""
Script to generate all missing routes for the Zion Tech Group website
"""
import os
import re
from pathlib import Path

def extract_page_paths():
    """Extract all page paths from the app directory"""
    app_dir = Path('/workspace/app')
    page_paths = []
    
    for page_file in app_dir.rglob('page.tsx'):
        # Get relative path from app directory
        rel_path = page_file.relative_to(app_dir)
        # Remove 'page.tsx' and convert to route path
        route_path = str(rel_path.parent).replace('\\', '/')
        if route_path == '.':
            route_path = '/'
        else:
            route_path = '/' + route_path
        
        page_paths.append({
            'path': route_path,
            'file_path': str(rel_path),
            'component_name': generate_component_name(route_path)
        })
    
    return sorted(page_paths, key=lambda x: x['path'])

def generate_component_name(route_path):
    """Generate a component name from route path"""
    if route_path == '/':
        return 'HomePage'
    
    # Remove leading slash and convert to PascalCase
    path_parts = route_path.strip('/').split('/')
    component_name = ''.join(word.capitalize() for word in path_parts)
    component_name = re.sub(r'[^a-zA-Z0-9]', '', component_name)
    
    return component_name + 'Page'

def generate_imports(page_paths):
    """Generate import statements for all pages"""
    imports = []
    
    for page in page_paths:
        if page['path'] == '/':
            continue  # HomePage is already imported
        
        import_path = f"./{page['file_path'].replace('page.tsx', 'page')}"
        component_name = page['component_name']
        
        imports.append(f"const {component_name} = lazy(() => import(\"{import_path}\"));")
    
    return imports

def generate_routes(page_paths):
    """Generate route definitions"""
    routes = []
    
    for page in page_paths:
        path = page['path']
        component_name = page['component_name']
        
        if path == '/':
            routes.append('              <Route path="/" element={<HomePage />} />')
        else:
            routes.append(f'              <Route path="{path}" element={{<{component_name} />}} />')
    
    return routes

def main():
    """Generate the complete App.tsx with all routes"""
    page_paths = extract_page_paths()
    
    print(f"Found {len(page_paths)} pages to generate routes for")
    
    # Generate imports
    imports = generate_imports(page_paths)
    
    # Generate routes
    routes = generate_routes(page_paths)
    
    # Read the current App.tsx
    with open('/workspace/app/App.tsx', 'r') as f:
        current_content = f.read()
    
    # Find the existing routes section
    routes_start = current_content.find('<Routes>')
    routes_end = current_content.find('</Routes>') + len('</Routes>')
    
    # Create new routes section
    new_routes_section = '''            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/cookies" element={<CookiesPage />} />

              {/* AI Services */}
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/ai-analytics" element={<AiAnalyticsPage />} />
              <Route path="/ai-automation" element={<AiAutomationPage />} />
              <Route path="/ai-content-generation" element={<AiContentGenerationPage />} />
              <Route path="/ai-customer-service" element={<AiCustomerServicePage />} />
              <Route path="/ai-cybersecurity" element={<AiCybersecurityPage />} />
              <Route path="/ai-data-analytics" element={<AiDataAnalyticsPage />} />
              <Route path="/ai-marketing" element={<AiMarketingPage />} />
              <Route path="/ai-solutions" element={<AiSolutionsPage />} />

              {/* 5G Solutions */}
              <Route path="/5g-solutions" element={<FiveGSolutionsPage />} />
              <Route path="/5g-data-analytics" element={<FiveGDataAnalyticsPage />} />
              <Route path="/5g-edge-computing" element={<FiveGEdgeComputingPage />} />
              <Route path="/5g-implementation" element={<FiveGImplementationPage />} />
              <Route path="/5g-iot-solutions" element={<FiveGIoTSolutionsPage />} />
              <Route path="/5g-mobile-applications" element={<FiveGMobileApplicationsPage />} />
              <Route path="/5g-network-infrastructure" element={<FiveGNetworkInfrastructurePage />} />
              <Route path="/5g-private-networks" element={<FiveGPrivateNetworksPage />} />
              <Route path="/5g-smart-city-solutions" element={<FiveGSmartCitySolutionsPage />} />

              {/* Micro SAAS */}
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/zion-analytics-pro" element={<ZionAnalyticsProPage />} />
              <Route path="/zion-security-shield" element={<ZionSecurityShieldPage />} />
              <Route path="/zion-cloud-vault" element={<ZionCloudVaultPage />} />

              {/* All Other Pages */}
''' + '\n'.join(routes[20:]) + '''
            </Routes>'''
    
    # Replace the routes section
    new_content = current_content[:routes_start] + new_routes_section + current_content[routes_end:]
    
    # Write the new App.tsx
    with open('/workspace/app/App.tsx', 'w') as f:
        f.write(new_content)
    
    print("Generated new App.tsx with all routes")
    
    # Also generate a separate file with just the imports for easier management
    with open('/workspace/generated_imports.txt', 'w') as f:
        f.write('\n'.join(imports))
    
    print(f"Generated {len(imports)} import statements")
    print(f"Generated {len(routes)} route definitions")

if __name__ == "__main__":
    main()