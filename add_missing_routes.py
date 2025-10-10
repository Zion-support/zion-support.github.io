#!/usr/bin/env python3
import re

def add_missing_routes():
    """Add missing routes to App.tsx"""
    app_file = '/workspace/App.tsx'
    
    with open(app_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # List of missing routes that need to be added
    missing_routes = [
        '/ai-marketing', '/ai-customer-support', '/ai-data-analytics', '/ai-content-generation',
        '/ai-healthcare', '/ai-fintech', '/ai-ecommerce-solutions', '/ai-cybersecurity',
        '/ai-mobile-app-development', '/ai-sales-automation', '/ai-workflow-automation',
        '/ai-data-visualization', '/ai-lead-generation', '/ai-document-processing',
        '/ai-automation', '/ai-voice-assistant', '/ai-predictive-maintenance',
        '/ai-supply-chain', '/ai-quality-control', '/ai-energy-management',
        '/ai-legal-analysis', '/ai-real-estate', '/ai-hr-assistant', '/ai-insurance',
        '/ai-education', '/ai-transportation', '/ai-environmental', '/ai-retail',
        '/ai-sports', '/ai-mental-health', '/cloud-services', '/cloud-migration',
        '/devops', '/database', '/cybersecurity', '/security-monitoring',
        '/penetration-testing', '/it-infrastructure', '/managed-it', '/it-consulting',
        '/data-analytics', '/mobile-development', '/web-development', '/process-automation',
        '/cloud-infrastructure', '/network-security', '/data-backup', '/it-asset-management',
        '/website-hosting', '/mobile-device-management', '/compliance-services',
        '/it-performance-monitoring', '/it-training', '/it-project-management',
        '/vulnerability-assessment', '/hybrid-cloud', '/data-migration', '/api-development',
        '/it-governance', '/ai-analytics-dashboard', '/ai-crm', '/ai-content-studio',
        '/ai-chatbot-builder', '/ai-email-marketing', '/ai-mobile-app-builder',
        '/ai-seo-optimizer', '/ai-invoice-generator', '/ai-writing-assistant',
        '/smart-analytics', '/ai-scheduler', '/expense-tracker', '/task-manager-pro',
        '/crm-lite', '/email-optimizer', '/social-media-manager', '/ai-design-studio',
        '/landing-page-builder', '/seo-optimizer', '/ad-campaign-manager',
        '/code-assistant', '/api-builder', '/bug-tracker-pro', '/doc-generator',
        '/ai-recruitment-assistant', '/medical-records-manager', '/ai-accounting-assistant',
        '/property-management-ai', '/legal-document-manager', '/online-learning-platform',
        '/supply-chain-optimizer', '/quantum-computing', '/robotics', '/iot-edge-computing',
        '/blockchain-web3', '/business-intelligence', '/autonomous-systems',
        '/5g-implementation', '/ai-3d-generation', '/ai-holographic-workspace'
    ]
    
    # Find the Routes section
    routes_start = content.find('<Routes>')
    routes_end = content.find('</Routes>')
    
    if routes_start == -1 or routes_end == -1:
        print("Could not find Routes section")
        return
    
    # Extract existing routes
    routes_section = content[routes_start:routes_end]
    existing_routes = re.findall(r'path="([^"]+)"', routes_section)
    
    # Add missing routes
    new_routes = []
    for route in missing_routes:
        if route not in existing_routes:
            # Convert route to component name
            component_name = ''.join(word.capitalize() for word in route.replace('/', '').replace('-', ' ').split()) + 'Page'
            
            # Add lazy import
            import_line = f"const {component_name} = React.lazy(() => import('./app{route}/page'));"
            if import_line not in content:
                # Find where to insert the import
                import_end = content.find('// Lazy load pages for better performance')
                if import_end != -1:
                    import_end = content.find('\n', import_end) + 1
                    content = content[:import_end] + import_line + '\n' + content[import_end:]
            
            # Add route
            new_routes.append(f'                            <Route path="{route}" element={<{component_name} />} />')
    
    # Insert new routes before the closing </Routes> tag
    routes_end_pos = content.find('</Routes>')
    if new_routes:
        new_routes_text = '\n' + '\n'.join(new_routes) + '\n'
        content = content[:routes_end_pos] + new_routes_text + content[routes_end_pos:]
    
    # Write back to file
    with open(app_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Added {len(new_routes)} missing routes to App.tsx")

if __name__ == "__main__":
    add_missing_routes()