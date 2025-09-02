import React from
  'react';
import type { NextPage } from
  'next';
import MainLayout from
  '../components/layout/MainLayout';
import { Book, Code, Database, Cloud, Shield, Zap, Download, ExternalLink } from
  'lucide-react';
import Link from
  'next/link';const Documentation: NextPage = () => {
  const docCategories = [
    {
icon: Book, title:,
  Getting Started', '
      description: 'Quick start guides and basic setup instructions,'
      articles: [
        { title:, Introduction to Zion Tech Group', href: '/docs/introduction }, { title:,
  Account Setup', href: '/docs/account-setup },
        { title:, First Steps', href: '/docs/first-steps }, { title:,
  Basic Configuration', href: '/docs/basic-config }]
    }, {
      icon: Code,
title:, API Reference','
      description: 'Complete API documentation and examples, 'articles: [
        { title:,
  Authentication', href: '/docs/api/auth },
        { title:, Endpoints', href: '/docs/api/endpoints }, { title:,
  SDKs', href: '/docs/api/sdks },
        { title:, Rate Limits', href: '/docs/api/rate-limits }
      ]
    }, {
      icon: Database,
title:, Data Management','
      description: Data handling, storage, and processing guides,  ,articles: [
        { title:
  'Data Models, href:,'
  /docs/data/models' }, '
        { title: 'Data Import/Export, href:, '
  /docs/data/import-export' },'
        { title: 'Data Security, href:,'
  /docs/data/security' }, '
        { title: 'Backup & Recovery, href: '
  '/docs/data/backup' }
      ]
    }, {
      icon: Cloud,
title:, Cloud Services','
      description: 'Cloud infrastructure and deployment guides, 'articles: [
        { title:,
  Cloud Setup', href: '/docs/cloud/setup },
        { title:, Deployment', href: '/docs/cloud/deployment }, { title:,
  Scaling', href: '/docs/cloud/scaling },
        { title:, Monitoring', href: '/docs/cloud/monitoring }
      ]
    }, {
      icon: Shield,
title:, Security','
      description: 'Security best practices and implementation, 'articles: [
        { title:,
  Security Overview', href: '/docs/security/overview },
        { title:, Authentication', href: '/docs/security/auth }, { title:,
  Authorization', href: '/docs/security/authorization },
        { title:, Compliance', href: '/docs/security/compliance }
      ]
    }, {
      icon: Zap,
title:, Advanced Features','
      description: 'Advanced functionality and customization, 'articles: [
        { title:,
  Custom Integrations', href: '/docs/advanced/integrations },
        { title:, Workflow Automation', href: '/docs/advanced/automation }, { title:,
  Performance Optimization', href: '/docs/advanced/performance },
        { title:, Troubleshooting', href: '/docs/advanced/troubleshooting }
      ]
    }
  ]

  const quickLinks = [
{ title:, API Playground', href: '/api-playground, icon: Code },
    { title:, Status Page', href: '/status, icon: Zap },
    { title:, Support', href: '/help, icon: Book },
    { title:, Community', href: '/community, icon: ExternalLink }];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services. Find guides, API references, tutorials, and technical resources to help you succeed."
      keywords="documentation, API reference, guides, tutorials, technical documentation, developer resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md: text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive guides, API references, and technical resources to help you 
              make the most of our services and build amazing solutions.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center px-4 py-2 bg-gray-100 hover: bg-gray-200 rounded-lg transition-colors"
                >
                  <link.icon className="w-4 h-4 mr-2" />
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Categories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Browse our documentation organized by topic and complexity level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover: shadow-lg transition-shadow">
                  <category.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <Link href={article.href} className="text-blue-600 hover: text-blue-700 text-sm flex items-center">
                          {article.title}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                New to our platform? Start here with our essential guides and tutorials.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-1 md: grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Start Guide</h3>
                    <p className="text-gray-600 mb-4">
                      Get up and running in minutes with our step-by-step quick start guide.
                    </p>
                    <Link href="/docs/quick-start" className="text-blue-600 font-semibold hover:text-blue-700">
                      Start Here →
                    </Link>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">API Overview</h3>
                    <p className="text-gray-600 mb-4">
                      Learn about our API capabilities and how to integrate with our services.
                    </p>
                    <Link href="/docs/api/overview" className="text-blue-600 font-semibold hover:text-blue-700">
                      View API Docs →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore additional resources to enhance your development experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SDKs & Libraries</h3>
                <p className="text-gray-600 text-sm mb-4">Download our official SDKs and libraries</p>
                <Link href="/docs/sdks" className="text-blue-600 font-semibold hover:text-blue-700">
                  Download →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Examples</h3>
                <p className="text-gray-600 text-sm mb-4">Browse code examples and samples</p>
                <Link href="/docs/examples" className="text-blue-600 font-semibold hover:text-blue-700">
                  View Examples →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tutorials</h3>
                <p className="text-gray-600 text-sm mb-4">Step-by-step tutorials and guides</p>
                <Link href="/docs/tutorials" className="text-blue-600 font-semibold hover:text-blue-700">
                  Start Learning →
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
                <p className="text-gray-600 text-sm mb-4">Join our developer community</p>
                <Link href="/community" className="text-blue-600 font-semibold hover:text-blue-700">
                  Join Community →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
Can
  't find what you&apos;re looking for? Our support team is here to help.</p>
            <div className="flex flex-col sm: flex-row justify-center gap-4">
              <Link
                href="/help"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/faq"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Documentation;