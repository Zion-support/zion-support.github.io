import React from 'react';
import Layout from '../components/Layout';
import { 
  Book, 
  Code, 
  FileText, 
  HelpCircle, 
  Search, 
  Settings, 
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  Database
} from 'lucide-react';

export default function Docs() {
  const sections = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials to get you up and running',
      links: [
        { name: 'Installation Guide', href: '/docs/installation' },
        { name: 'Quick Start', href: '/docs/quick-start' },
        { name: 'Configuration', href: '/docs/configuration' }
      ]
    },
    {
      icon: Code,
      title: 'API Reference',
      description: 'Comprehensive API documentation with examples and guides',
      links: [
        { name: 'REST API', href: '/docs/api/rest' },
        { name: 'GraphQL API', href: '/docs/api/graphql' },
        { name: 'Webhooks', href: '/docs/api/webhooks' }
      ]
    },
    {
      icon: Settings,
      title: 'SDKs & Libraries',
      description: 'Official SDKs and libraries for popular programming languages',
      links: [
        { name: 'JavaScript SDK', href: '/docs/sdk/javascript' },
        { name: 'Python SDK', href: '/docs/sdk/python' },
        { name: 'Node.js SDK', href: '/docs/sdk/nodejs' }
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security best practices and authentication guides',
      links: [
        { name: 'Authentication', href: '/docs/security/auth' },
        { name: 'API Keys', href: '/docs/security/keys' },
        { name: 'Rate Limiting', href: '/docs/security/rate-limiting' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'API Status', href: '/status', icon: Globe },
    { name: 'Support', href: '/support', icon: HelpCircle },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Changelog', href: '/changelog', icon: FileText }
  ];

  return (
    <Layout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group APIs, SDKs, and services. Get started with our developer resources."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Book className="h-8 w-8 text-blue-400 mr-3" />
            <span className="text-lg font-semibold text-blue-400">Developer Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Build with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Confidence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and examples to help you integrate our services into your applications.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Documentation Sections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find everything you need to get started and build amazing applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Quick Links
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential resources and tools for developers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{link.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need Help?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <HelpCircle className="mr-2 h-5 w-5" />
              Get Support
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}