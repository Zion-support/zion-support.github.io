import React from 'react';
import Head from 'next/head';
import { Header } from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Book, Code, FileText, ArrowRight, Search, Download } from 'lucide-react';

export default function Documentation() {
  const docCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      description: 'Quick start guides and setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', href: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', href: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', href: '/docs/configuration' },
        { title: 'First Project', description: 'Create your first project', href: '/docs/first-project' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and endpoints',
      docs: [
        { title: 'API Overview', description: 'Introduction to our APIs', href: '/docs/api/overview' },
        { title: 'Authentication', description: 'API authentication methods', href: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', href: '/docs/api/endpoints' },
        { title: 'Rate Limits', description: 'API usage limits and quotas', href: '/docs/api/rate-limits' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: Code,
      description: 'Client libraries and SDKs for various languages',
      docs: [
        { title: 'JavaScript SDK', description: 'Node.js and browser SDK', href: '/docs/sdks/javascript' },
        { title: 'Python SDK', description: 'Python client library', href: '/docs/sdks/python' },
        { title: 'Java SDK', description: 'Java client library', href: '/docs/sdks/java' },
        { title: 'PHP SDK', description: 'PHP client library', href: '/docs/sdks/php' }
      ]
    },
    {
      title: 'Tutorials',
      icon: FileText,
      description: 'Step-by-step tutorials and examples',
      docs: [
        { title: 'Basic Integration', description: 'Integrate our services into your app', href: '/docs/tutorials/integration' },
        { title: 'Advanced Features', description: 'Learn advanced functionality', href: '/docs/tutorials/advanced' },
        { title: 'Best Practices', description: 'Recommended implementation patterns', href: '/docs/tutorials/best-practices' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', href: '/docs/tutorials/troubleshooting' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get started in 5 minutes', views: '12.5k' },
    { title: 'API Authentication', description: 'Learn how to authenticate', views: '8.9k' },
    { title: 'JavaScript SDK', description: 'Node.js and browser integration', views: '7.2k' },
    { title: 'Error Handling', description: 'Handle errors gracefully', views: '5.8k' }
  ];

  const resources = [
    {
      title: 'API Postman Collection',
      description: 'Import our API collection into Postman',
      icon: Download,
      href: '/docs/postman-collection'
    },
    {
      title: 'OpenAPI Specification',
      description: 'Download our OpenAPI 3.0 specification',
      icon: FileText,
      href: '/docs/openapi-spec'
    },
    {
      title: 'Code Examples',
      description: 'Browse code examples and samples',
      icon: Code,
      href: '/docs/examples'
    }
  ];

  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's APIs, SDKs, and services. Get started with our developer resources and guides." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-white pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Developer Documentation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to integrate and use our AI services, IT solutions, 
                and micro SaaS platforms effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Popular Documentation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Documentation</h2>
              <p className="text-lg text-gray-600">
                Most viewed guides and tutorials
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDocs.map((doc, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{doc.views} views</span>
                    <a
                      href={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Read →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Categories</h2>
              <p className="text-lg text-gray-600">
                Browse our comprehensive documentation by category
              </p>
            </div>
            
            <div className="space-y-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.docs.map((doc, docIndex) => (
                      <a
                        key={docIndex}
                        href={doc.href}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">{doc.title}</h4>
                        <p className="text-gray-600 text-sm">{doc.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Developer Resources</h2>
              <p className="text-lg text-gray-600">
                Additional tools and resources for developers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <resource.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <a
                    href={resource.href}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <span>Download</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Help?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/support" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Support Center
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}