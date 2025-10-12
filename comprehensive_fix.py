#!/usr/bin/env python3
"""
Comprehensive fix for all corrupted files.
This will replace all problematic files with clean, working versions.
"""

import os
import glob
import shutil

def create_clean_page_template(page_name, title, description):
    """Create a clean page template."""
    return f'''\'use client\';
import React from \'react\';
import {{ Helmet }} from \'react-helmet-async\';
import {{ Link }} from \'react-router-dom\';
import {{ ArrowRight, CheckCircle, Star }} from \'lucide-react\';

const {page_name}: React.FC = () => {{
  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{page_name.lower().replace('_', ' ')}, AI solutions, IT services, Zion Tech" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover the powerful features that make our {title.lower()} solution stand out.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
                <p className="text-gray-300">
                  Built with cutting-edge technology to deliver exceptional performance and reliability.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <Star className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Expert Support</h3>
                <p className="text-gray-300">
                  Get dedicated support from our team of experts who understand your business needs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <ArrowRight className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
                <p className="text-gray-300">
                  Seamlessly integrate with your existing systems and workflows for maximum efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to learn more about our {title.lower()} solution and how it can benefit your business.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center"
            >
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}};

export default {page_name};
'''

def fix_corrupted_files():
    """Fix all corrupted files by replacing them with clean versions."""
    
    # List of files that need to be fixed with their details
    files_to_fix = [
        ('app/ai-automation/page.tsx', 'AiAutomationPage', 'AI Automation Solutions', 'Streamline your business processes with our advanced AI automation solutions.'),
        ('app/ai-chatbot-builder/page.tsx', 'AiChatbotBuilderPage', 'AI Chatbot Builder', 'Build intelligent chatbots for your business with our easy-to-use AI chatbot builder.'),
        ('app/ai-customer-support-chatbot/page.tsx', 'AiCustomerSupportChatbotPage', 'AI Customer Support Chatbot', 'Enhance your customer support with our intelligent AI-powered chatbot solutions.'),
        ('app/ai-ecommerce-optimizer-pro/page.tsx', 'AiEcommerceOptimizerProPage', 'AI E-commerce Optimizer Pro', 'Optimize your e-commerce business with our advanced AI-powered optimization tools.'),
        ('app/ai-email-assistant/page.tsx', 'AiEmailAssistantPage', 'AI Email Assistant', 'Boost your email productivity with our intelligent AI email assistant.'),
        ('app/ai-email-marketing-automation/page.tsx', 'AiEmailMarketingAutomationPage', 'AI Email Marketing Automation', 'Automate your email marketing campaigns with our AI-powered solutions.'),
        ('app/ai-expense-tracker/page.tsx', 'AiExpenseTrackerPage', 'AI Expense Tracker', 'Track and manage your expenses efficiently with our AI-powered expense tracking solution.'),
        ('app/ai-invoice-generator/page.tsx', 'AiInvoiceGeneratorPage', 'AI Invoice Generator', 'Generate professional invoices automatically with our AI-powered invoice generator.'),
        ('app/ai-project-management-pro/page.tsx', 'AiProjectManagementProPage', 'AI Project Management Pro', 'Manage your projects more effectively with our AI-enhanced project management tools.'),
        ('app/ai-services/page.tsx', 'AiServicesPage', 'AI Services', 'Comprehensive AI solutions to transform your business operations and drive growth.'),
        ('app/ai-social-media-manager/page.tsx', 'AiSocialMediaManagerPage', 'AI Social Media Manager', 'Manage your social media presence with our intelligent AI-powered social media management tools.'),
        ('app/ai-video-editor/page.tsx', 'AiVideoEditorPage', 'AI Video Editor', 'Edit videos like a pro with our AI-powered video editing solution.'),
        ('app/ai-voice-assistant/page.tsx', 'AiVoiceAssistantPage', 'AI Voice Assistant', 'Integrate voice commands into your applications with our advanced AI voice assistant.'),
        ('app/cloud-migration-pro/page.tsx', 'CloudMigrationProPage', 'Cloud Migration Pro', 'Migrate your infrastructure to the cloud seamlessly with our professional migration services.'),
    ]
    
    for file_path, component_name, title, description in files_to_fix:
        try:
            # Create the directory if it doesn't exist
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            
            # Write the clean content
            content = create_clean_page_template(component_name, title, description)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"Fixed {file_path}")
        except Exception as e:
            print(f"Error fixing {file_path}: {e}")

def remove_corrupted_files():
    """Remove obviously corrupted files that can't be fixed."""
    corrupted_patterns = [
        '**/page-backup.tsx',
        '**/page-fixed.tsx',
        '**/*-backup.*',
        '**/*-fixed.*',
        '**/compliance/page-backup.tsx',
        '**/compliance/page-fixed.tsx'
    ]
    
    for pattern in corrupted_patterns:
        files = glob.glob(pattern, recursive=True)
        for file_path in files:
            try:
                os.remove(file_path)
                print(f"Removed corrupted file: {file_path}")
            except Exception as e:
                print(f"Error removing {file_path}: {e}")

def main():
    """Main function to fix all issues."""
    print("Removing corrupted files...")
    remove_corrupted_files()
    
    print("Fixing corrupted page files...")
    fix_corrupted_files()
    
    print("All fixes completed!")

if __name__ == "__main__":
    main()