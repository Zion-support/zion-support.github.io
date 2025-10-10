'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle, AlertTriangle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly.',
      purpose: 'Authentication, security, and basic functionality',
      retention: 'Session or 1 year'
    },
    {
      name: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website analytics and performance monitoring',
      retention: '2 years'
    },
    {
      name: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your preferences and settings.',
      purpose: 'User preferences and customization',
      retention: '1 year'
    },
    {
      name: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements.',
      purpose: 'Targeted advertising and marketing',
      retention: '1 year'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Information</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Our cookie policy explains the types of cookies we use and how to manage them." />
        <meta name="keywords" content="cookie policy, cookies, website cookies, privacy, data collection" />
        <meta property="og:title" content="Cookie Policy - Zion Tech Group" />
        <meta property="og:description" content="Information about our use of cookies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              This policy explains how we use cookies and similar technologies on our website.
            </p>
          </div>
        </section>

        {/* Cookie Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((cookie, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <cookie.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{cookie.name}</h3>
                      <p className="text-gray-300 mb-4">{cookie.description}</p>
                      <div className="space-y-2">
                        <div>
                          <span className="text-cyan-400 font-medium">Purpose: </span>
                          <span className="text-gray-300">{cookie.purpose}</span>
                        </div>
                        <div>
                          <span className="text-cyan-400 font-medium">Retention: </span>
                          <span className="text-gray-300">{cookie.retention}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Managing Your Cookie Preferences</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <p className="text-gray-300 mb-6">
                You can control and manage cookies in several ways:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Use your browser settings to block or delete cookies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Use our cookie consent banner to manage preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Contact us if you have questions about our cookie use</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Questions About Cookies?</h2>
              <p className="text-gray-300 mb-8">
                If you have any questions about our use of cookies, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  <Cookie className="w-5 h-5" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPage;