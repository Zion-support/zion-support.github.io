#!/usr/bin/env python3
import re

def add_routes_to_app():
    """Add missing routes to App.tsx"""
    app_file = '/workspace/App.tsx'
    
    with open(app_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # List of routes to add (only the most important ones for now)
    routes_to_add = [
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
    
    # Find existing routes
    existing_routes = re.findall(r'path="([^"]+)"', content)
    
    # Add lazy imports for new routes
    import_section = "// Lazy load pages for better performance\n"
    for route in routes_to_add:
        if route not in existing_routes:
            component_name = ''.join(word.capitalize() for word in route.replace('/', '').replace('-', ' ').split()) + 'Page'
            import_section += f"const {component_name} = React.lazy(() => import('./app{route}/page'));\n"
    
    # Find where to insert imports
    import_end = content.find('// Lazy load pages for better performance')
    if import_end != -1:
        import_end = content.find('\n', import_end) + 1
        # Insert new imports
        content = content[:import_end] + import_section + content[import_end:]
    
    # Add routes to the Routes section
    routes_to_add_text = ""
    for route in routes_to_add:
        if route not in existing_routes:
            component_name = ''.join(word.capitalize() for word in route.replace('/', '').replace('-', ' ').split()) + 'Page'
            routes_to_add_text += f"                            <Route path=\"{route}\" element={{<{component_name} />}} />\n"
    
    # Find the Routes section and add new routes
    routes_end = content.find('</Routes>')
    if routes_end != -1 and routes_to_add_text:
        content = content[:routes_end] + routes_to_add_text + content[routes_end:]
    
    # Write back to file
    with open(app_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Added {len(routes_to_add)} routes to App.tsx")

if __name__ == "__main__":
    add_routes_to_app()