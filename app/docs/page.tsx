import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  DocumentTextIcon, 
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const DocsPage: React.FC = () => {
  const docCategories = [
    {
      title: 'API Documentation',
      icon: CodeBracketIcon,
      description: 'Complete API reference and integration guides',
      color: 'from-blue-500 to-cyan-500',
      docs: [
        { title: 'REST API Reference', href: '/docs/api/rest', status: 'Complete' },
        { title: 'GraphQL API Guide', href: '/docs/api/graphql', status: 'Complete' },
        { title: 'Authentication & Security', href: '/docs/api/auth', status: 'Complete' },
        { title: 'Rate Limiting & Quotas', href: '/docs/api/rate-limits', status: 'Complete' },
        { title: 'SDK Libraries', href: '/docs/api/sdk', status: 'In Progress' }
      ]
    },
    {
      title: 'AI Services',
      icon: CpuChipIcon,
      description: 'Documentation for all AI-powered services and tools',
      color: 'from-purple-500 to-pink-500',
      docs: [
        { title: 'AI Chatbot Builder', href: '/docs/ai/chatbot-builder', status: 'Complete' },
        { title: 'Machine Learning Models', href: '/docs/ai/ml-models', status: 'Complete' },
        { title: 'Natural Language Processing', href: '/docs/ai/nlp', status: 'Complete' },
        { title: 'Computer Vision', href: '/docs/ai/computer-vision', status: 'Complete' },
        { title: 'AI Model Training', href: '/docs/ai/training', status: 'In Progress' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      icon: CloudIcon,
      description: 'Cloud deployment and infrastructure management guides',
      color: 'from-cyan-500 to-blue-500',
      docs: [
        { title: 'Cloud Migration Guide', href: '/docs/cloud/migration', status: 'Complete' },
        { title: 'Container Orchestration', href: '/docs/cloud/containers', status: 'Complete' },
        { title: 'Serverless Architecture', href: '/docs/cloud/serverless', status: 'Complete' },
        { title: 'Monitoring & Logging', href: '/docs/cloud/monitoring', status: 'Complete' },
        { title: 'Security Best Practices', href: '/docs/cloud/security', status: 'Complete' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: ShieldCheckIcon,
      description: 'Security implementation and best practices',
      color: 'from-green-500 to-emerald-500',
      docs: [
        { title: 'Security Audit Guide', href: '/docs/security/audit', status: 'Complete' },
        { title: 'Threat Detection', href: '/docs/security/threats', status: 'Complete' },
        { title: 'Data Protection', href: '/docs/security/data-protection', status: 'Complete' },
        { title: 'Compliance Standards', href: '/docs/security/compliance', status: 'In Progress' }
      ]
    },
    {
      title: 'Data Analytics',
      icon: ChartBarIcon,
      description: 'Analytics platform and data processing documentation',
      color: 'from-yellow-500 to-orange-500',
      docs: [
        { title: 'Analytics Dashboard', href: '/docs/analytics/dashboard', status: 'Complete' },
        { title: 'Data Visualization', href: '/docs/analytics/visualization', status: 'Complete' },
        { title: 'Predictive Analytics', href: '/docs/analytics/predictive', status: 'Complete' },
        { title: 'Data Pipeline Setup', href: '/docs/analytics/pipeline', status: 'Complete' }
      ]
    },
    {
      title: 'Development Tools',
      icon: RocketLaunchIcon,
      description: 'Development environment and tooling guides',
      color: 'from-indigo-500 to-purple-500',
      docs: [
        { title: 'Development Environment', href: '/docs/dev/environment', status: 'Complete' },
        { title: 'CI/CD Pipeline', href: '/docs/dev/cicd', status: 'Complete' },
        { title: 'Testing Framework', href: '/docs/dev/testing', status: 'Complete' },
        { title: 'Code Quality Tools', href: '/docs/dev/quality', status: 'In Progress' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Planned': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <SEOHead
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for all Zion Tech Group services, APIs, and development tools."
        keywords="documentation, API docs, developer guides, technical documentation, integration guides"
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Documentation Center
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comprehensive guides, API references, and technical documentation to help you integrate and use our services effectively.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#documentation" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                  Browse Documentation
                </a>
                <a href="/api-docs" className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  API Reference
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section id="documentation" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Documentation <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Find detailed guides and references for all our services and technologies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6 text-sm">
                    {category.description}
                  </p>
                  
                  <div className="space-y-3">
                    {category.docs.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
                        <a 
                          href={doc.href}
                          className="text-white hover:text-purple-300 font-medium text-sm transition-colors"
                        >
                          {doc.title}
                        </a>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(doc.status)}`}>
                          {doc.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Quick <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Start Guides</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Get up and running quickly with our step-by-step quick start guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'API Integration', description: 'Connect to our APIs in 5 minutes', href: '/docs/quick-start/api' },
                { title: 'AI Chatbot Setup', description: 'Deploy your first AI chatbot', href: '/docs/quick-start/chatbot' },
                { title: 'Cloud Deployment', description: 'Deploy to cloud infrastructure', href: '/docs/quick-start/cloud' },
                { title: 'Analytics Dashboard', description: 'Create your first dashboard', href: '/docs/quick-start/analytics' }
              ].map((guide, index) => (
                <a
                  key={index}
                  href={guide.href}
                  className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 group"
                >
                  <DocumentTextIcon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {guide.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Need Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                Contact Support
              </a>
              <a href="/help" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Help Center
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;