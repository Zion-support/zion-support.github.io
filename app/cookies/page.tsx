'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Shield, Settings, BarChart, User } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      necessary: true,
      cookies: ['session_id', 'user_preferences', 'security_token']
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: ['_ga', '_gid', '_gat', 'analytics_id']
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      cookies: ['language_preference', 'theme_setting', 'user_interface']
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to track visitors across websites for marketing purposes.',
      necessary: false,
      cookies: ['marketing_id', 'ad_preferences', 'campaign_tracking']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
          </div>

          {/* Cookie Categories */}
          <div className="space-y-8 mb-12">
            {cookieCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <category.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      {category.necessary && (
                        <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
                          Necessary
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{category.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400">Cookies used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.cookies.map((cookie, cookieIndex) => (
                          <span 
                            key={cookieIndex}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                          >
                            {cookie}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cookie Management */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Cookie Management</h2>
            <p className="text-gray-300 mb-6">
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                View and delete cookies
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Block cookies from specific websites
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Block third-party cookies
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                Clear all cookies when you close your browser
              </li>
            </ul>
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-cyan-200 text-sm">
                <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@ziontechgroup.com"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Privacy Team
              </a>
              <a 
                href="tel:+13024640950"
                className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Call Us: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;
