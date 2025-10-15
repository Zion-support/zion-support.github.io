import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, BookOpen, Code, Settings, Shield, BarChart3, Users, Globe, Database } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      title: 'Getting Started',
      description: 'Learn how to get started with our AI solutions',
      content: 'Comprehensive guide to implementing AI in your business',
      icon: <Zap className="w-6 h-6" />,
      articles: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', readTime: '5 min' },
        { title: 'Account Setup', description: 'Create and configure your account', readTime: '3 min' },
        { title: 'First Project', description: 'Create your first AI project', readTime: '10 min' },
        { title: 'API Keys', description: 'Generate and manage your API keys', readTime: '2 min' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      content: 'Detailed reference for all available endpoints and parameters',
      icon: <Code className="w-6 h-6" />,
      articles: [
        { title: 'Authentication', description: 'How to authenticate with our API', readTime: '5 min' },
        { title: 'Endpoints', description: 'Complete list of available endpoints', readTime: '15 min' },
        { title: 'Rate Limits', description: 'Understanding rate limits and quotas', readTime: '3 min' },
        { title: 'Error Handling', description: 'How to handle API errors', readTime: '5 min' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      description: 'Official SDKs and community libraries',
      content: 'Pre-built libraries for popular programming languages',
      icon: <BookOpen className="w-6 h-6" />,
      articles: [
        { title: 'JavaScript SDK', description: 'Official JavaScript/Node.js SDK', readTime: '8 min' },
        { title: 'Python SDK', description: 'Official Python SDK', readTime: '8 min' },
        { title: 'React Components', description: 'Ready-to-use React components', readTime: '10 min' },
        { title: 'Community Libraries', description: 'Third-party libraries and tools', readTime: '5 min' }
      ]
    },
    {
      title: 'Configuration',
      description: 'Configure and customize your AI solutions',
      content: 'Advanced configuration options and customization',
      icon: <Settings className="w-6 h-6" />,
      articles: [
        { title: 'Environment Setup', description: 'Configure your development environment', readTime: '7 min' },
        { title: 'Model Configuration', description: 'Customize AI model parameters', readTime: '10 min' },
        { title: 'Webhooks', description: 'Set up webhooks for real-time updates', readTime: '6 min' },
        { title: 'Monitoring', description: 'Monitor your AI solutions performance', readTime: '8 min' }
      ]
    },
    {
      title: 'Security',
      description: 'Security best practices and guidelines',
      content: 'Keep your AI solutions secure and compliant',
      icon: <Shield className="w-6 h-6" />,
      articles: [
        { title: 'Data Privacy', description: 'Protect user data and privacy', readTime: '6 min' },
        { title: 'API Security', description: 'Secure your API endpoints', readTime: '8 min' },
        { title: 'Compliance', description: 'GDPR, HIPAA, and other compliance requirements', readTime: '10 min' },
        { title: 'Audit Logs', description: 'Track and monitor system activity', readTime: '5 min' }
      ]
    },
    {
      title: 'Analytics',
      description: 'Monitor and analyze your AI performance',
      content: 'Comprehensive analytics and reporting tools',
      icon: <BarChart3 className="w-6 h-6" />,
      articles: [
        { title: 'Performance Metrics', description: 'Key performance indicators and metrics', readTime: '7 min' },
        { title: 'Custom Dashboards', description: 'Create custom analytics dashboards', readTime: '10 min' },
        { title: 'Reports', description: 'Generate detailed reports and insights', readTime: '5 min' },
        { title: 'Alerts', description: 'Set up alerts and notifications', readTime: '6 min' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete documentation for Zion Tech Group's AI and IT solutions. Learn how to integrate, configure, and optimize our services." />
        <meta name="keywords" content="documentation, API, SDK, guides, tutorials, AI solutions, IT services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Documentation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Everything you need to know to build amazing AI-powered applications with our comprehensive documentation and guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  API Reference
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{section.description}</p>
                  <div className="space-y-2">
                    {section.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                        <div>
                          <h4 className="text-white font-medium">{article.title}</h4>
                          <p className="text-gray-400 text-sm">{article.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-400 text-sm">{article.readTime}</span>
                          <ArrowRight className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}