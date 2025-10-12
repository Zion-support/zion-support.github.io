import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Code, Api, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DocsPage() {
  const docSections = [
    {
      icon: <Book className="w-8 h-8 text-blue-500" />,
      title: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      links: [
        { name: 'Quick Start Guide', href: '/docs/quick-start' },
        { name: 'Installation', href: '/docs/installation' },
        { name: 'Configuration', href: '/docs/configuration' }
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      links: [
        { name: 'Authentication', href: '/docs/api/auth' },
        { name: 'Endpoints', href: '/docs/api/endpoints' },
        { name: 'Error Codes', href: '/docs/api/errors' }
      ]
    },
    {
      icon: <Api className="w-8 h-8 text-purple-500" />,
      title: 'SDKs & Libraries',
      description: 'Client libraries and SDKs for different languages',
      links: [
        { name: 'JavaScript SDK', href: '/docs/sdk/javascript' },
        { name: 'Python SDK', href: '/docs/sdk/python' },
        { name: 'REST API', href: '/docs/api/rest' }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Guides & Tutorials',
      description: 'Step-by-step guides and best practices',
      links: [
        { name: 'Best Practices', href: '/docs/guides/best-practices' },
        { name: 'Tutorials', href: '/docs/guides/tutorials' },
        { name: 'Examples', href: '/docs/guides/examples' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete documentation for Zion Tech Group services including API reference, guides, and tutorials." />
        <meta name="keywords" content="documentation, API reference, guides, tutorials, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Documentation
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know to get started with our services.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docSections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-300 mb-6">{section.description}</p>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Need More Help?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/support"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}