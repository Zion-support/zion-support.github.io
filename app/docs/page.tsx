import React, { useState } from 'react';
import { Search, Book, Code, Shield, Cloud, Brain, ChevronRight, ChevronDown, ExternalLink, Download } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['getting-started', 'ai-services']));

  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Book className="w-5 h-5" />,
      items: [
        { title: 'Quick Start Guide', path: '/docs/quick-start', description: 'Get up and running in minutes' },
        { title: 'Installation', path: '/docs/installation', description: 'Step-by-step installation guide' },
        { title: 'Configuration', path: '/docs/configuration', description: 'Configure your environment' },
        { title: 'First Project', path: '/docs/first-project', description: 'Create your first AI project' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      items: [
        { title: 'AI Analytics API', path: '/docs/ai-analytics', description: 'Real-time analytics and insights' },
        { title: 'Content Generation', path: '/docs/content-generation', description: 'AI-powered content creation' },
        { title: 'Customer Support AI', path: '/docs/customer-support', description: 'Intelligent customer service' },
        { title: 'Marketing Automation', path: '/docs/marketing-automation', description: 'Automated marketing campaigns' },
        { title: 'Cybersecurity AI', path: '/docs/cybersecurity-ai', description: 'AI-powered security solutions' }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: <Code className="w-5 h-5" />,
      items: [
        { title: 'Cloud Infrastructure', path: '/docs/cloud-infrastructure', description: 'Scalable cloud solutions' },
        { title: 'Web Development', path: '/docs/web-development', description: 'Modern web applications' },
        { title: 'Mobile Development', path: '/docs/mobile-development', description: 'Cross-platform mobile apps' },
        { title: 'Database Management', path: '/docs/database-management', description: 'Optimized database solutions' },
        { title: 'Cybersecurity', path: '/docs/cybersecurity', description: 'Comprehensive security services' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: <Cloud className="w-5 h-5" />,
      items: [
        { title: 'Zion Analytics Pro', path: '/docs/zion-analytics-pro', description: 'Advanced analytics dashboard' },
        { title: 'Security Shield', path: '/docs/security-shield', description: 'Enterprise-grade security' },
        { title: 'Cloud Vault', path: '/docs/cloud-vault', description: 'Secure cloud storage' },
        { title: 'Content Studio', path: '/docs/content-studio', description: 'AI content creation suite' },
        { title: 'Project Master', path: '/docs/project-master', description: 'Project management tools' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code className="w-5 h-5" />,
      items: [
        { title: 'Authentication', path: '/docs/api/auth', description: 'API authentication methods' },
        { title: 'Endpoints', path: '/docs/api/endpoints', description: 'Complete API endpoint reference' },
        { title: 'SDKs', path: '/docs/api/sdks', description: 'Software development kits' },
        { title: 'Webhooks', path: '/docs/api/webhooks', description: 'Real-time event notifications' },
        { title: 'Rate Limits', path: '/docs/api/rate-limits', description: 'API usage limits and quotas' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Shield className="w-5 h-5" />,
      items: [
        { title: 'Security Overview', path: '/docs/security/overview', description: 'Our security approach' },
        { title: 'Data Protection', path: '/docs/security/data-protection', description: 'How we protect your data' },
        { title: 'Compliance', path: '/docs/security/compliance', description: 'GDPR, SOC2, and more' },
        { title: 'Best Practices', path: '/docs/security/best-practices', description: 'Security recommendations' },
        { title: 'Incident Response', path: '/docs/security/incident-response', description: 'Security incident procedures' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Documentation', path: '/docs/api', icon: <Code className="w-4 h-4" /> },
    { title: 'SDK Downloads', path: '/docs/sdks', icon: <Download className="w-4 h-4" /> },
    { title: 'Code Examples', path: '/docs/examples', icon: <Book className="w-4 h-4" /> },
    { title: 'Community Forum', path: '/community', icon: <ExternalLink className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and tutorials to help you get the most out of Zion Tech Group's solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-lg font-semibold text-white mb-6">Documentation</h2>
              <nav className="space-y-2">
                {documentationSections.map((section) => (
                  <div key={section.id}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center">
                        <span className="mr-3 text-cyan-400">{section.icon}</span>
                        <span className="font-medium">{section.title}</span>
                      </div>
                      {expandedSections.has(section.id) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.has(section.id) && (
                      <div className="ml-8 mt-2 space-y-1">
                        {section.items.map((item, index) => (
                          <a
                            key={index}
                            href={item.path}
                            className="block p-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 rounded transition-colors"
                          >
                            <div className="font-medium">{item.title}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mr-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {link.title}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Getting Started Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">New to Zion Tech Group?</h3>
                  <p className="text-gray-300 mb-4">
                    Start with our quick start guide to get up and running in minutes.
                  </p>
                  <a
                    href="/docs/quick-start"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Read Quick Start Guide
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">API Integration</h3>
                  <p className="text-gray-300 mb-4">
                    Integrate our APIs into your applications with our comprehensive API documentation.
                  </p>
                  <a
                    href="/docs/api"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View API Docs
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Popular Topics</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">AI Analytics</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Learn how to implement AI-powered analytics in your applications.
                  </p>
                  <a href="/docs/ai-analytics" className="text-cyan-400 hover:text-cyan-300 text-sm">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Content Generation</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Create high-quality content using our AI content generation tools.
                  </p>
                  <a href="/docs/content-generation" className="text-purple-400 hover:text-purple-300 text-sm">
                    Learn More →
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Security Best Practices</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Implement security best practices for your applications and data.
                  </p>
                  <a href="/docs/security/best-practices" className="text-green-400 hover:text-green-300 text-sm">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Contact Support</span>
                </a>
                <a
                  href="/community"
                  className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold border border-gray-600"
                >
                  <span>Community Forum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;