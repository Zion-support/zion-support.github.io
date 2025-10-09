import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, Database, Clock, CheckCircle } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization'
      ],
      retention: 'Session or up to 1 year',
      purpose: 'Website functionality and security'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      retention: 'Up to 2 years',
      purpose: 'Website analytics and improvement'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: Settings,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      examples: [
        'Language preferences',
        'Theme settings',
        'User preferences',
        'Form data storage'
      ],
      retention: 'Up to 1 year',
      purpose: 'Enhanced user experience'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for advertising purposes.',
      icon: Database,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      examples: [
        'Advertising cookies',
        'Social media cookies',
        'Retargeting cookies',
        'Conversion tracking'
      ],
      retention: 'Up to 2 years',
      purpose: 'Marketing and advertising'
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      domain: '.ziontechgroup.com',
      purpose: 'Google Analytics - distinguishes users',
      type: 'Analytics',
      retention: '2 years',
      thirdParty: 'Google'
    },
    {
      name: '_gid',
      domain: '.ziontechgroup.com',
      purpose: 'Google Analytics - distinguishes users',
      type: 'Analytics',
      retention: '24 hours',
      thirdParty: 'Google'
    },
    {
      name: 'session_id',
      domain: '.ziontechgroup.com',
      purpose: 'Maintains user session',
      type: 'Essential',
      retention: 'Session',
      thirdParty: 'No'
    },
    {
      name: 'user_preferences',
      domain: '.ziontechgroup.com',
      purpose: 'Stores user interface preferences',
      type: 'Functional',
      retention: '1 year',
      thirdParty: 'No'
    },
    {
      name: '_fbp',
      domain: '.ziontechgroup.com',
      purpose: 'Facebook Pixel - tracks conversions',
      type: 'Marketing',
      retention: '3 months',
      thirdParty: 'Facebook'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website and how you can manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, privacy, data collection, website tracking" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This policy explains how we use cookies and similar technologies on our website and how you can manage your preferences.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: December 15, 2024
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Cookie className="w-8 h-8 text-purple-600 mr-4" />
              <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
            <p className="text-gray-700">
              We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period of time).
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of Cookies We Use</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${type.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <type.icon className={`w-6 h-6 ${type.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{type.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Purpose:</h4>
                    <p className="text-sm text-gray-600">{type.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Retention:</h4>
                    <p className="text-sm text-gray-600">{type.retention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Specific Cookies We Use</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Third Party</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {cookie.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {cookie.domain}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {cookie.purpose}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :
                          cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                          cookie.type === 'Functional' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {cookie.retention}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {cookie.thirdParty}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Managing Your Cookie Preferences</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">How to Control Cookies</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h4>
                <p className="text-gray-700 mb-4">
                  Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Privacy" or "Security" section of your browser.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Chrome:</strong> Settings > Privacy and security > Cookies and other site data</li>
                  <li>• <strong>Firefox:</strong> Options > Privacy & Security > Cookies and Site Data</li>
                  <li>• <strong>Safari:</strong> Preferences > Privacy > Manage Website Data</li>
                  <li>• <strong>Edge:</strong> Settings > Cookies and site permissions</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Cookie Consent Banner</h4>
                <p className="text-gray-700 mb-4">
                  When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Manage Cookie Preferences
                </button>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Opt-Out Links</h4>
                <p className="text-gray-700 mb-4">
                  For third-party cookies, you can opt out directly from the service providers:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <a href="https://tools.google.com/dlpage/gaoptout" className="text-purple-600 hover:underline">Google Analytics Opt-out</a></li>
                  <li>• <a href="https://www.facebook.com/settings?tab=ads" className="text-purple-600 hover:underline">Facebook Ad Preferences</a></li>
                  <li>• <a href="https://optout.aboutads.info/" className="text-purple-600 hover:underline">Digital Advertising Alliance</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Cookie Policy?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about our use of cookies, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/privacy"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;