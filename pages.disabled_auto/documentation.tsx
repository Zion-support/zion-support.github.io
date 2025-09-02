import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Book, Code, Database, Cloud, Shield, Smartphone, Search, Download } from 'lucide-react';
import Link from 'next/link';

const Documentation: NextPage = () => {
  const docCategories = [
    {
      title: 'API Documentation',
      icon: Code,
      description: 'Complete API reference and integration guides',
      docs: [
        { title: 'Getting Started', description: 'Quick start guide for API integration' },
        { title: 'Authentication', description: 'API keys, tokens, and security' },
        { title: 'Endpoints Reference', description: 'Complete API endpoint documentation' },
        { title: 'SDKs & Libraries', description: 'Client libraries for popular languages' },
        { title: 'Rate Limits', description: 'API usage limits and best practices' },
        { title: 'Error Handling', description: 'Error codes and troubleshooting' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      description: 'Cloud infrastructure and deployment guides',
      docs: [
        { title: 'AWS Integration', description: 'Amazon Web Services setup and configuration' },
        { title: 'Azure Deployment', description: 'Microsoft Azure deployment guides' },
        { title: 'Google Cloud', description: 'Google Cloud Platform integration' },
        { title: 'Docker & Kubernetes', description: 'Container orchestration and deployment' },
        { title: 'CI/CD Pipelines', description: 'Continuous integration and deployment' },
        { title: 'Monitoring & Logging', description: 'Application monitoring and log management' }
      ]
    },
    {
      title: 'Database Management',
      icon: Database,
      description: 'Database setup, optimization, and management',
      docs: [
        { title: 'Database Setup', description: 'Initial database configuration' },
        { title: 'Performance Tuning', description: 'Database optimization techniques' },
        { title: 'Backup & Recovery', description: 'Data backup and disaster recovery' },
        { title: 'Security Best Practices', description: 'Database security guidelines' },
        { title: 'Migration Guides', description: 'Database migration procedures' },
        { title: 'Troubleshooting', description: 'Common database issues and solutions' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Security implementation and best practices',
      docs: [
        { title: 'Authentication', description: 'User authentication and authorization' },
        { title: 'Data Encryption', description: 'Encrypting data at rest and in transit' },
        { title: 'SSL/TLS Setup', description: 'Secure communication configuration' },
        { title: 'Security Headers', description: 'HTTP security headers implementation' },
        { title: 'Vulnerability Assessment', description: 'Security testing and assessment' },
        { title: 'Compliance', description: 'Regulatory compliance guidelines' }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      description: 'Mobile app development and deployment',
      docs: [
        { title: 'React Native Setup', description: 'Cross-platform mobile development' },
        { title: 'iOS Development', description: 'Native iOS app development' },
        { title: 'Android Development', description: 'Native Android app development' },
        { title: 'App Store Deployment', description: 'Publishing to app stores' },
        { title: 'Push Notifications', description: 'Implementing push notifications' },
        { title: 'Offline Support', description: 'Building offline-capable apps' }
      ]
    },
    {
      title: 'Web Development',
      icon: Book,
      description: 'Web application development guides',
      docs: [
        { title: 'Frontend Development', description: 'React, Vue, and Angular guides' },
        { title: 'Backend Development', description: 'Node.js, Python, and Java APIs' },
        { title: 'Full-Stack Integration', description: 'Connecting frontend and backend' },
        { title: 'Performance Optimization', description: 'Web performance best practices' },
        { title: 'SEO Implementation', description: 'Search engine optimization' },
        { title: 'Testing Strategies', description: 'Unit, integration, and E2E testing' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', href: '/docs/api', icon: Code },
    { title: 'SDK Downloads', href: '/docs/sdk', icon: Download },
    { title: 'Code Examples', href: '/docs/examples', icon: Book },
    { title: 'Tutorials', href: '/docs/tutorials', icon: Book },
    { title: 'Changelog', href: '/docs/changelog', icon: Book },
    { title: 'Support', href: '/help', icon: Book }
  ];

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services, APIs, and development tools."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Book className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive guides, API references, and tutorials to help you build amazing solutions 
            with our technology stack.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="text-blue-600 mb-2">
                      <IconComponent className="w-6 h-6 mx-auto" />
                    </div>
                    <span className="text-sm font-medium text-gray-900">{link.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Browse Documentation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="text-blue-600 mr-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        <p className="text-gray-600 text-sm">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {category.docs.map((doc, docIndex) => (
                        <Link
                          key={docIndex}
                          href="#"
                          className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-medium text-gray-900 text-sm mb-1">{doc.title}</h4>
                          <p className="text-gray-600 text-xs">{doc.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Getting Started</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">1️⃣</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Your Service</h3>
                <p className="text-gray-600 mb-6">
                  Select the Zion Tech Group service that best fits your needs and requirements.
                </p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Browse Services →
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">2️⃣</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your API Key</h3>
                <p className="text-gray-600 mb-6">
                  Sign up for an account and obtain your API credentials to start integrating.
                </p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  Get Started →
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">3️⃣</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Start Building</h3>
                <p className="text-gray-600 mb-6">
                  Follow our guides and tutorials to integrate our services into your application.
                </p>
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  View Tutorials →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/help"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Visit Help Center
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Documentation;