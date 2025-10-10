'use client';
import React from 'react';
import { Cookie, Settings, Shield, Eye, Database, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const cookieTypes = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Load balancing cookies for website performance',
        'Session cookies to remember your preferences'
      ],
      necessary: true
    },
    {
      title: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      examples: [
        'Google Analytics to understand website usage',
        'Heat mapping tools to see how users interact with pages',
        'Performance monitoring to identify slow pages',
        'A/B testing cookies to optimize user experience'
      ],
      necessary: false
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      examples: [
        'Language preference cookies',
        'Theme and display settings',
        'Form data cookies to prevent data loss',
        'Chat widget cookies for customer support'
      ],
      necessary: false
    },
    {
      title: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: [
        'Social media tracking pixels',
        'Advertising network cookies',
        'Retargeting cookies for personalized ads',
        'Conversion tracking cookies'
      ],
      necessary: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cookie
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This policy explains how we use cookies and similar technologies on our website to enhance your experience.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Cookie className="w-5 h-5 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of Cookies We Use</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((cookieType, index) => (
              <div key={index} className="card-futuristic glass-dark p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mr-4">
                    <cookieType.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cookieType.title}</h3>
                    {cookieType.necessary && (
                      <span className="bg-green-500/20 text-green-400 text-sm px-2 py-1 rounded-full">
                        Necessary
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{cookieType.description}</p>
                
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {cookieType.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="card-futuristic glass-dark p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  You can control and delete cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Block all cookies
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Block third-party cookies
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Delete existing cookies
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Set preferences for specific websites
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Cookie Consent</h3>
                <p className="text-gray-300 mb-4">
                  When you first visit our website, you'll see a cookie consent banner. You can:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Accept all cookies
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Reject non-essential cookies
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    Customize your preferences
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Impact of Disabling Cookies</h3>
                <p className="text-gray-300">
                  Please note that disabling certain cookies may affect the functionality of our website. 
                  Essential cookies cannot be disabled as they are necessary for the website to function properly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Cookies?</h2>
          <p className="text-gray-300 mb-8">
            If you have any questions about our use of cookies, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Contact Us
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Update Preferences
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;