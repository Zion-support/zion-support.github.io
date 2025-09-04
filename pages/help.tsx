import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, MessageCircle, Phone, Mail } from 'lucide-react';

export default function Help() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const helpCategories = [
    {
      title: "Getting Started",
      icon: "🚀",
      articles: [
        {
          title: "How to Get Started with Our Services",
          description: "Step-by-step guide to begin your technology journey"
        },
        {
          title: "Account Setup and Configuration",
          description: "Learn how to set up your account and configure settings"
        },
        {
          title: "Understanding Our Service Portfolio",
          description: "Overview of all available services and solutions"
        },
        {
          title: "Initial Consultation Process",
          description: "What to expect during your first consultation"
        }
      ]
    },
    {
      title: "Technical Support",
      icon: "🔧",
      articles: [
        {
          title: "Troubleshooting Common Issues",
          description: "Solutions to frequently encountered problems"
        },
        {
          title: "System Requirements and Compatibility",
          description: "Technical specifications and compatibility information"
        },
        {
          title: "Performance Optimization",
          description: "Tips for improving system performance"
        },
        {
          title: "Integration and API Documentation",
          description: "Technical documentation for integrations"
        }
      ]
    },
    {
      title: "Billing & Account",
      icon: "💳",
      articles: [
        {
          title: "Understanding Your Bill",
          description: "How to read and understand your service charges"
        },
        {
          title: "Payment Methods and Billing Cycles",
          description: "Available payment options and billing schedules"
        },
        {
          title: "Upgrading or Downgrading Services",
          description: "How to modify your service plan"
        },
        {
          title: "Cancellation and Refund Policy",
          description: "Information about service cancellation and refunds"
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: "🛡️",
      articles: [
        {
          title: "Security Best Practices",
          description: "Guidelines for maintaining security"
        },
        {
          title: "Data Privacy and Protection",
          description: "How we protect your data and privacy"
        },
        {
          title: "Two-Factor Authentication Setup",
          description: "How to enable 2FA for your account"
        },
        {
          title: "Reporting Security Issues",
          description: "How to report security concerns"
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's services. Find answers to common questions and contact our support team." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Help Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to your questions and get the support you need for our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">
                        {article.title}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        {article.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you with any questions or issues you may have.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Start Chat
                </Link>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-green-100 rounded-full p-4 mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
                <a href={`tel:${contact.phone}`} className="text-green-600 hover:text-green-800 font-semibold">
                  {contact.phone}
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-purple-100 rounded-full p-4 mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <a href={`mailto:${contact.email}`} className="text-purple-600 hover:text-purple-800 font-semibold">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}