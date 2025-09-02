import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';
import { ArrowRight, Book, Code, FileText, HelpCircle, Search, Settings, Users } from 'lucide-react';

export default function Documentation() {
  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and onboarding resources',
      icon: Book,
      docs: [
        { title: 'Welcome to Zion Tech Group', description: 'Introduction to our services and platform', href: '/docs/getting-started' },
        { title: 'Account Setup', description: 'How to create and configure your account', href: '/docs/account-setup' },
        { title: 'First Project', description: 'Step-by-step guide to your first project', href: '/docs/first-project' },
        { title: 'API Overview', description: 'Introduction to our API and integration options', href: '/docs/api-overview' }
      ]
    },
    {
      title: 'AI Services',
      description: 'Documentation for AI and machine learning services',
      icon: Code,
      docs: [
        { title: 'AI Model Integration', description: 'How to integrate AI models into your applications', href: '/docs/ai-integration' },
        { title: 'Machine Learning APIs', description: 'Complete API reference for ML services', href: '/docs/ml-apis' },
        { title: 'Data Processing', description: 'Data preparation and processing guidelines', href: '/docs/data-processing' },
        { title: 'Model Training', description: 'Custom model training and optimization', href: '/docs/model-training' }
      ]
    },
    {
      title: 'IT Services',
      description: 'Infrastructure and IT service documentation',
      icon: Settings,
      docs: [
        { title: 'Cloud Migration', description: 'Step-by-step cloud migration guide', href: '/docs/cloud-migration' },
        { title: 'Security Configuration', description: 'Security setup and best practices', href: '/docs/security-config' },
        { title: 'DevOps Pipeline', description: 'CI/CD pipeline setup and management', href: '/docs/devops-pipeline' },
        { title: 'Monitoring & Alerts', description: 'System monitoring and alerting setup', href: '/docs/monitoring' }
      ]
    },
    {
      title: 'Micro SaaS',
      description: 'Micro SaaS development and deployment guides',
      icon: FileText,
      docs: [
        { title: 'SaaS Architecture', description: 'Best practices for micro SaaS architecture', href: '/docs/saas-architecture' },
        { title: 'Multi-tenancy', description: 'Implementing multi-tenant applications', href: '/docs/multi-tenancy' },
        { title: 'Subscription Management', description: 'Billing and subscription handling', href: '/docs/subscription-mgmt' },
        { title: 'Deployment Guide', description: 'Production deployment best practices', href: '/docs/deployment' }
      ]
    },
    {
      title: 'Support & Help',
      description: 'Support resources and troubleshooting guides',
      icon: HelpCircle,
      docs: [
        { title: 'FAQ', description: 'Frequently asked questions and answers', href: '/docs/faq' },
        { title: 'Troubleshooting', description: 'Common issues and their solutions', href: '/docs/troubleshooting' },
        { title: 'Contact Support', description: 'How to get help from our support team', href: '/docs/contact-support' },
        { title: 'Status Page', description: 'Service status and incident reports', href: '/docs/status' }
      ]
    }
  ];

  const quickLinks = [
    { title: 'API Reference', description: 'Complete API documentation', href: '/docs/api', icon: Code },
    { title: 'SDKs & Libraries', description: 'Client libraries and SDKs', href: '/docs/sdks', icon: Book },
    { title: 'Code Examples', description: 'Sample code and tutorials', href: '/docs/examples', icon: FileText },
    { title: 'Community Forum', description: 'Connect with other developers', href: '/docs/community', icon: Users }
  ];

  return (
    <>
      <Head>
        <title>Documentation — Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group services. Find guides, API references, and support resources for AI, IT, and micro SaaS solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Documentation & <span className="text-blue-600">Resources</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive guides, API references, and support resources to help you 
                get the most out of our technology solutions.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-gray-600">Popular resources and tools</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.href} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-4">
                      <link.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Categories</h2>
              <p className="text-lg text-gray-600">
                Browse our comprehensive documentation by category
              </p>
            </div>
            
            <div className="space-y-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-blue-100 mr-4">
                      <category.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.docs.map((doc, docIndex) => (
                      <Link key={docIndex} href={doc.href} className="group">
                        <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                            {doc.title}
                          </h4>
                          <p className="text-sm text-gray-600">{doc.description}</p>
                          <div className="flex items-center mt-3 text-blue-600 text-sm font-medium">
                            Read more
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
              <p className="text-lg text-gray-600">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <HelpCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Center</h3>
                <p className="text-gray-600 mb-4">Browse our knowledge base and FAQ</p>
                <Link href="/help" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Visit Support Center
                </Link>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Support</h3>
                <p className="text-gray-600 mb-4">Get help from our expert support team</p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Contact Us
                </Link>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Book className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Resources</h3>
                <p className="text-gray-600 mb-4">Learn with our training materials</p>
                <Link href="/training" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Training
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}