'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Shield, Settings, BarChart, User } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      necessary: true,
      cookies: [
        'Session cookies for user authentication',
        'Security cookies for CSRF protection',
        'Load balancing cookies for performance'
      ]
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: [
        'Google Analytics for traffic analysis',
        'Heat mapping cookies for user behavior',
        'Performance monitoring cookies'
      ]
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      cookies: [
        'Language preference cookies',
        'Theme selection cookies',
        'User preference cookies'
      ]
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to track visitors across websites for marketing purposes.',
      necessary: false,
      cookies: [
        'Social media tracking cookies',
        'Advertising platform cookies',
        'Retargeting cookies'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-300">
              Learn about how we use cookies to enhance your experience on our website.
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use cookies responsibly and in accordance with applicable privacy laws. This policy explains what cookies we use, 
                why we use them, and how you can control them.
              </p>
            </div>
          </section>

          {/* Cookie Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Types of Cookies We Use</h2>
            <div className="grid gap-6">
              {cookieCategories.map((category, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        {category.necessary && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                            Necessary
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-4">{category.description}</p>
                      <ul className="space-y-2">
                        {category.cookies.map((cookie, cookieIndex) => (
                          <li key={cookieIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                            {cookie}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Manage Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Managing Your Cookie Preferences</h2>
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Browser Settings</h3>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                  Block all cookies
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                  Block third-party cookies only
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                  Delete existing cookies
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                  Set up notifications when cookies are set
                </li>
              </ul>
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <p className="text-yellow-200 text-sm">
                  <strong>Note:</strong> Disabling cookies may affect the functionality of our website and your user experience.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Questions About Our Cookie Policy?</h2>
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <p className="text-gray-300 mb-6">
                If you have any questions about our cookie policy or how we use cookies, please don't hesitate to contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Email: <a href="mailto:info@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">info@ziontechgroup.com</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">(302) 464-0950</a></span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;