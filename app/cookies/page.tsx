'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      icon: Shield,
      required: true
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: Eye,
      required: false
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: Settings,
      required: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to improve your experience." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cookie
              </span>
              <br />
              <span className="text-white">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Learn about how we use cookies to enhance your experience on our website.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
                <p className="text-gray-300 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <cookie.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-white">{cookie.name}</h3>
                          {cookie.required && (
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-gray-300">{cookie.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies 
                  can negatively impact your user experience and parts of our website may no longer be fully accessible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Cookie className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Browser settings: Most browsers allow you to refuse cookies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Cookie consent: Use our cookie banner to manage preferences</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: privacy@ziontechgroup.com</p>
                  <p>Phone: (302) 464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPage;