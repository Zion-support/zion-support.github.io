#!/usr/bin/env python3
"""
Script to fix all AI service pages
"""

import os

def create_ai_page(page_name, title, description):
    """Create an AI service page component"""
    return f'''import React from 'react';
import {{ Helmet }} from 'react-helmet-async';
import {{ Link }} from 'react-router-dom';
import {{ ArrowRight }} from 'lucide-react';

export default function {page_name}() {{
  return (
    <>
      <Helmet>
        <title>{title} - Zion Tech Group</title>
        <meta name="description" content="{description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">{title}</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-services"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}}'''

def main():
    """Fix all AI service pages"""
    ai_pages = [
        ('AiAnalyticsPage', 'AI Analytics', 'Advanced analytics powered by artificial intelligence'),
        ('AiAutomationPage', 'AI Automation', 'Automate your business processes with AI'),
        ('AiChatbotBuilderPage', 'AI Chatbot Builder', 'Build intelligent chatbots for your business'),
        ('AiCybersecurityPage', 'AI Cybersecurity', 'AI-powered cybersecurity solutions'),
        ('AiCrmPage', 'AI CRM', 'Smart customer relationship management'),
        ('AiDataAnalyticsPage', 'AI Data Analytics', 'Transform your data with AI insights'),
        ('AiHealthcarePage', 'AI Healthcare', 'AI solutions for healthcare industry'),
        ('AiFinancialServicesPage', 'AI Financial Services', 'AI-powered financial solutions'),
        ('AiComputerVisionPage', 'AI Computer Vision', 'Advanced computer vision solutions'),
        ('AiVoiceSolutionsPage', 'AI Voice Solutions', 'Voice recognition and synthesis'),
        ('AiEcommerceSolutionsPage', 'AI E-commerce Solutions', 'AI-powered e-commerce solutions'),
        ('AiHrSolutionsPage', 'AI HR Solutions', 'AI solutions for human resources'),
        ('AiContentGenerationPage', 'AI Content Generation', 'Automated content creation with AI'),
        ('AiWorkflowAutomationPage', 'AI Workflow Automation', 'Streamline workflows with AI'),
        ('AiDocumentProcessingPage', 'AI Document Processing', 'Intelligent document processing'),
        ('AiPredictiveAnalyticsPage', 'AI Predictive Analytics', 'Predict future trends with AI')
    ]
    
    for page_name, title, description in ai_pages:
        page_path = f'app/{page_name.lower().replace("page", "")}/page.tsx'
        if os.path.exists(page_path):
            print(f"Fixing {page_path}")
            content = create_ai_page(page_name, title, description)
            with open(page_path, 'w', encoding='utf-8') as f:
                f.write(content)
    
    print("All AI pages fixed!")

if __name__ == "__main__":
    main()