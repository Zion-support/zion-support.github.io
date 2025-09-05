import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ChevronDown, 
  ChevronRight,
  Clock,
  ArrowRight
} from 'lucide-react';

const helpSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Everything you need to know to get started with our services.',
    items: [
      {
        title: 'Understanding Our Services',
        description: 'Overview of all available services and solutions',
        readTime: '7 min read',
        type: 'Overview'
      },
      {
        title: 'Account Setup',
        description: 'How to create and configure your account',
        readTime: '5 min read',
        type: 'Setup'
      },
      {
        title: 'First Steps',
        description: 'Getting started with your first project',
        readTime: '10 min read',
        type: 'Tutorial'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Everything about our AI and machine learning solutions.',
    items: [
      {
        title: 'AI Model Training',
        description: 'How to train and deploy AI models',
        readTime: '15 min read',
        type: 'Technical'
      },
      {
        title: 'API Integration',
        description: 'Integrating AI services into your applications',
        readTime: '12 min read',
        type: 'Integration'
      },
      {
        title: 'Best Practices',
        description: 'Best practices for AI implementation',
        readTime: '8 min read',
        type: 'Guide'
      }
    ]
  },
  {
    id: 'billing',
    title: 'Billing & Pricing',
    description: 'Information about our pricing plans and billing.',
    items: [
      {
        title: 'Pricing Plans',
        description: 'Overview of available pricing plans',
        readTime: '5 min read',
        type: 'Overview'
      },
      {
        title: 'Payment Methods',
        description: 'Accepted payment methods and billing cycles',
        readTime: '3 min read',
        type: 'Billing'
      },
      {
        title: 'Usage Tracking',
        description: 'How to monitor your usage and costs',
        readTime: '6 min read',
        type: 'Monitoring'
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions.',
    items: [
      {
        title: 'Common Issues',
        description: 'Frequently encountered problems and solutions',
        readTime: '10 min read',
        type: 'Troubleshooting'
      },
      {
        title: 'Error Codes',
        description: 'Understanding error codes and messages',
        readTime: '8 min read',
        type: 'Reference'
      },
      {
        title: 'Performance Issues',
        description: 'Optimizing performance and resolving slowdowns',
        readTime: '12 min read',
        type: 'Optimization'
      }
    ]
  },
  {
    id: 'api-documentation',
    title: 'API Documentation',
    description: 'Technical documentation for our APIs.',
    items: [
      {
        title: 'API Reference',
        description: 'Complete API reference documentation',
        readTime: '20 min read',
        type: 'Technical'
      },
      {
        title: 'Authentication',
        description: 'API authentication and security',
        readTime: '8 min read',
        type: 'Security'
      },
      {
        title: 'Rate Limits',
        description: 'Understanding API rate limits and quotas',
        readTime: '5 min read',
        type: 'Limits'
      }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Get help from our support team.',
    items: [
      {
        title: 'Contact Support',
        description: 'How to reach our support team',
        readTime: '2 min read',
        type: 'Contact'
      },
      {
        title: 'Support Hours',
        description: 'When our support team is available',
        readTime: '1 min read',
        type: 'Schedule'
      },
      {
        title: 'Video Tutorials',
        description: 'Step-by-step video guides',
        readTime: '4 min read',
        type: 'Video'
      }
    ]
  }
];

export default function HelpPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = helpSections.filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    section.items.some(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Help Center</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Find answers to your questions and get the support you need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Help Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-4">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Search help articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <nav className="space-y-2">
                    {helpSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-100 text-blue-900'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {filteredSections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-lg p-6 mb-6"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-gray-600 mb-6">{section.description}</p>
                    
                    <div className="space-y-4">
                      {section.items.map((item, index) => (
                        <div key={index} className="border-l-4 border-blue-500 pl-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{item.readTime}</span>
                            <span className="mx-2">•</span>
                            <span>{item.type}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold inline-flex items-center justify-center"
              >
                <FileText className="w-5 h-5 mr-2" />
                View Documentation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}