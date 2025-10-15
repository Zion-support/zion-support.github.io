#!/usr/bin/env python3
import os
import glob

def create_clean_page_template(page_name, title, description):
    """Create a clean page template"""
    return f'''import {{ Helmet }} from 'react-helmet-async';

export default function {page_name}() {{
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="{description}" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {description}
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700">
                This page is currently under development. Please check back later for more content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}}'''

def main():
    # Define all the pages that need to be fixed
    pages = [
        ('HelpPage', 'Help Center', 'Get help and support for our services'),
        ('AboutPage', 'About Us', 'Learn about Zion Tech Group and our mission'),
        ('ServicesPage', 'Our Services', 'Discover our comprehensive AI and IT solutions'),
        ('AIServicesPage', 'AI Services', 'Explore our advanced AI solutions and services'),
        ('AISolutionsPage', 'AI Solutions', 'Comprehensive AI solutions for your business'),
        ('AIContentGeneratorPage', 'AI Content Generator', 'Generate high-quality content with AI'),
        ('ITServicesPage', 'IT Services', 'Professional IT services and solutions'),
        ('WebDevelopmentPage', 'Web Development', 'Custom web development services'),
        ('MobileDevelopmentPage', 'Mobile Development', 'Mobile app development solutions'),
        ('CloudInfrastructurePage', 'Cloud Infrastructure', 'Cloud infrastructure and migration services'),
        ('NetworkInfrastructurePage', 'Network Infrastructure', 'Network design and infrastructure solutions'),
        ('DatabaseManagementPage', 'Database Management', 'Database design and management services'),
        ('DataAnalyticsPage', 'Data Analytics', 'Data analysis and business intelligence solutions'),
        ('DigitalTransformationPage', 'Digital Transformation', 'Transform your business with digital solutions'),
        ('FiveGSolutionsPage', '5G Solutions', 'Next-generation 5G technology solutions'),
        ('MicroSAASSolutionsPage', 'Micro SaaS Solutions', 'Small-scale SaaS applications and tools'),
        ('CaseStudiesPage', 'Case Studies', 'Success stories and client case studies'),
        ('TeamPage', 'Our Team', 'Meet the talented team behind Zion Tech Group'),
        ('CareersPage', 'Careers', 'Join our team and build the future'),
        ('PartnershipsPage', 'Partnerships', 'Partner with us for mutual success'),
        ('PricingPage', 'Pricing', 'Transparent pricing for all our services'),
        ('ContactPage', 'Contact Us', 'Get in touch with our team'),
        ('BlogPage', 'Blog', 'Latest insights and updates from our team'),
        ('APIDocsPage', 'API Documentation', 'Comprehensive API documentation and guides'),
        ('PrivacyPage', 'Privacy Policy', 'Our privacy policy and data protection practices'),
        ('TermsPage', 'Terms of Service', 'Terms and conditions for our services'),
        ('CookiesPage', 'Cookie Policy', 'Information about our use of cookies')
    ]
    
    files_fixed = 0
    
    for page_name, title, description in pages:
        # Convert page name to file path
        file_path = f"app/{page_name.lower().replace('page', '')}/page.tsx"
        
        # Handle special cases
        if page_name == 'FiveGSolutionsPage':
            file_path = "app/5g-solutions/page.tsx"
        elif page_name == 'MicroSAASSolutionsPage':
            file_path = "app/micro-saas-solutions/page.tsx"
        elif page_name == 'AIServicesPage':
            file_path = "app/ai-services/page.tsx"
        elif page_name == 'AISolutionsPage':
            file_path = "app/ai-solutions/page.tsx"
        elif page_name == 'AIContentGeneratorPage':
            file_path = "app/ai-content-generator/page.tsx"
        elif page_name == 'ITServicesPage':
            file_path = "app/it-services/page.tsx"
        elif page_name == 'WebDevelopmentPage':
            file_path = "app/web-development/page.tsx"
        elif page_name == 'MobileDevelopmentPage':
            file_path = "app/mobile-development/page.tsx"
        elif page_name == 'CloudInfrastructurePage':
            file_path = "app/cloud-infrastructure/page.tsx"
        elif page_name == 'NetworkInfrastructurePage':
            file_path = "app/network-infrastructure/page.tsx"
        elif page_name == 'DatabaseManagementPage':
            file_path = "app/database-management/page.tsx"
        elif page_name == 'DataAnalyticsPage':
            file_path = "app/data-analytics/page.tsx"
        elif page_name == 'DigitalTransformationPage':
            file_path = "app/digital-transformation/page.tsx"
        elif page_name == 'CaseStudiesPage':
            file_path = "app/case-studies/page.tsx"
        elif page_name == 'TeamPage':
            file_path = "app/team/page.tsx"
        elif page_name == 'CareersPage':
            file_path = "app/careers/page.tsx"
        elif page_name == 'PartnershipsPage':
            file_path = "app/partnerships/page.tsx"
        elif page_name == 'PricingPage':
            file_path = "app/pricing/page.tsx"
        elif page_name == 'ContactPage':
            file_path = "app/contact/page.tsx"
        elif page_name == 'BlogPage':
            file_path = "app/blog/page.tsx"
        elif page_name == 'APIDocsPage':
            file_path = "app/api-docs/page.tsx"
        elif page_name == 'PrivacyPage':
            file_path = "app/privacy/page.tsx"
        elif page_name == 'TermsPage':
            file_path = "app/terms/page.tsx"
        elif page_name == 'CookiesPage':
            file_path = "app/cookies/page.tsx"
        elif page_name == 'AboutPage':
            file_path = "app/about/page.tsx"
        elif page_name == 'ServicesPage':
            file_path = "app/services/page.tsx"
        elif page_name == 'HelpPage':
            file_path = "app/help/page.tsx"
        
        # Create the directory if it doesn't exist
        os.makedirs(os.path.dirname(file_path), exist_ok=True)
        
        # Write the clean file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(create_clean_page_template(page_name, title, description))
        
        files_fixed += 1
        print(f"Fixed: {file_path}")
    
    print(f"Fixed {files_fixed} page files")

if __name__ == "__main__":
    main()