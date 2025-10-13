import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BookOpenIcon,
  CodeBracketIcon,
  CloudIcon,
  CpuChipIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function DocsPage() {
  const documentationSections = [
    {
      title: "API Documentation",
      description: "Complete API reference for all our services and endpoints",
      icon: CodeBracketIcon,
      topics: [
        "Authentication",
        "Endpoints",
        "Rate Limits",
        "Error Codes",
        "SDKs & Libraries"
      ]
    },
    {
      title: "AI Services Guide",
      description: "Comprehensive guide to using our AI-powered services",
      icon: CpuChipIcon,
      topics: [
        "Getting Started",
        "Model Training",
        "Data Processing",
        "Deployment",
        "Monitoring"
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Documentation for cloud setup and management",
      icon: CloudIcon,
      topics: [
        "Cloud Migration",
        "Security Configuration",
        "Scaling",
        "Monitoring",
        "Backup & Recovery"
      ]
    },
    {
      title: "Integration Guides",
      description: "Step-by-step integration tutorials",
      icon: BookOpenIcon,
      topics: [
        "Third-party Integrations",
        "Webhook Setup",
        "Data Synchronization",
        "Custom Workflows",
        "Testing"
      ]
    }
  ];

  const quickStartSteps = [
    {
      step: "1",
      title: "Get API Key",
      description: "Sign up and obtain your API credentials"
    },
    {
      step: "2",
      title: "Choose Service",
      description: "Select the AI service that fits your needs"
    },
    {
      step: "3",
      title: "Make First Request",
      description: "Send your first API request to test the service"
    },
    {
      step: "4",
      title: "Scale & Optimize",
      description: "Scale your implementation and optimize performance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and technology services. API guides, tutorials, and integration resources." />
        <meta name="keywords" content="documentation, API docs, tutorials, integration guides, AI services documentation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Everything you need to get started with our services
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive guides, API documentation, and tutorials to help you 
              integrate and use our AI and technology solutions effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running in minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation Sections
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive documentation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {documentationSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {section.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-gray-400 flex items-center">
                        <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group">
                    View Documentation
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              API Reference
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete API documentation with examples
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Authentication</h3>
              <p className="text-gray-300 mb-6">
                All API requests require authentication using your API key. Include it in the Authorization header.
              </p>
              
              <div className="bg-slate-900 p-4 rounded-lg mb-6">
                <pre className="text-green-400 text-sm overflow-x-auto">
{`curl -X GET "https://api.ziontechgroup.com/v1/ai/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                </pre>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Example Response</h3>
              <div className="bg-slate-900 p-4 rounded-lg">
                <pre className="text-blue-400 text-sm overflow-x-auto">
{`{
  "status": "success",
  "data": {
    "analysis": "Your AI analysis results here",
    "confidence": 0.95,
    "timestamp": "2024-01-15T10:30:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our support team is here to help you succeed
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/support" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Support
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Custom Help
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>support@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}