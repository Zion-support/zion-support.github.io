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
      cookies: ['Session cookies', 'Security cookies', 'Load balancing cookies']
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: ['Google Analytics', 'Performance monitoring', 'User behavior tracking']
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      cookies: ['Language preferences', 'Theme settings', 'User preferences']
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to track visitors across websites for marketing purposes.',
      necessary: false,
      cookies: ['Advertising cookies', 'Social media cookies', 'Retargeting cookies']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
              when you visit our website.
            </p>
          </div>

          {/* Last Updated */}
          <div className="bg-gray-800 rounded-lg p-6 mb-12">
            <p className="text-gray-300">
              <strong className="text-white">Last Updated:</strong> December 2024
            </p>
          </div>

          {/* What are Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">What are Cookies?</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              </p>
            </div>
          </section>

          {/* Cookie Categories */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-8">Types of Cookies We Use</h2>
            <div className="grid gap-6">
              {cookieCategories.map((category, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <category.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {category.title}
                        {category.necessary && (
                          <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded">
                            Necessary
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-300 mb-4">{category.description}</p>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-200 mb-2">Cookies used:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                          {category.cookies.map((cookie, cookieIndex) => (
                            <li key={cookieIndex}>{cookie}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-white mb-6">Managing Your Cookie Preferences</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Use your browser settings to block or delete cookies</li>
                <li>Use our cookie consent banner to manage preferences</li>
                <li>Contact us directly to discuss your preferences</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-100 mb-6">
                If you have any questions about our cookie policy, please contact us at kleber@ziontechgroup.com
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPage;
