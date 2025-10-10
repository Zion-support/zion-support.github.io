'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Shield, Settings, Eye, Database, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';
  
  const cookieTypes = [
    {
      type: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies',
        'User interface customization'
      ],
      required: true
    },
    {
      type: 'Analytics Cookies',
      icon: Database,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      required: false
    },
    {
      type: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preferences',
        'Theme settings',
        'User preferences',
        'Form data storage'
      ],
      required: false
    },
    {
      type: 'Marketing Cookies',
      icon: Eye,
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      examples: [
        'Advertising targeting',
        'Social media integration',
        'Email marketing tracking',
        'Campaign performance'
      ],
      required: false
    }
  ];

  const purposes = [
    {
      title: 'Website Functionality',
      description: 'Ensure the website works correctly and securely',
      icon: Shield
    },
    {
      title: 'User Experience',
      description: 'Remember your preferences and settings',
      icon: Settings
    },
    {
      title: 'Analytics',
      description: 'Understand how users interact with our site',
      icon: Database
    },
    {
      title: 'Marketing',
      description: 'Deliver relevant content and advertisements',
      icon: Eye
    }
  ];

  const cookieDetails = [
    {
      name: 'session_id',
      type: 'Essential',
      purpose: 'Maintains your session while browsing',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: '_ga',
      type: 'Analytics',
      purpose: 'Distinguishes unique users',
      duration: '2 years',
      provider: 'Google Analytics'
    },
    {
      name: '_gid',
      type: 'Analytics',
      purpose: 'Distinguishes unique users',
      duration: '24 hours',
      provider: 'Google Analytics'
    },
    {
      name: 'preferences',
      type: 'Functional',
      purpose: 'Stores user preferences',
      duration: '1 year',
      provider: 'Zion Tech Group'
    },
    {
      name: 'marketing_consent',
      type: 'Marketing',
      purpose: 'Tracks marketing consent',
      duration: '1 year',
      provider: 'Zion Tech Group'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and provide personalized services." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, user preferences, analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">
                Cookie Policy
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies when you visit our website.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Info className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">What Are Cookies?</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Cookies allow a website to recognize a user's device and remember information about their visit, such as their preferred language and other settings. This can make your next visit easier and the site more useful to you.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to enhance your experience on our website, analyze site usage, and assist in our marketing efforts.
            </p>
          </div>

          {/* Types of Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <type.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{type.type}</h3>
                      {type.required && (
                        <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs rounded ml-2">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{type.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Purposes */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Why We Use Cookies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {purposes.map((purpose, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 text-center">
                  <purpose.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{purpose.title}</h3>
                  <p className="text-gray-300 text-sm">{purpose.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Details */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-4 text-white font-semibold">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Type</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Duration</th>
                    <th className="text-left py-3 px-4 text-white font-semibold">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-slate-800/50">
                      <td className="py-3 px-4 text-cyan-400 font-mono">{cookie.name}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs ${
                          cookie.type === 'Essential' ? 'bg-red-600 text-white' :
                          cookie.type === 'Analytics' ? 'bg-blue-600 text-white' :
                          cookie.type === 'Functional' ? 'bg-green-600 text-white' :
                          'bg-purple-600 text-white'
                        }`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-300">{cookie.purpose}</td>
                      <td className="py-3 px-4 text-gray-300">{cookie.duration}</td>
                      <td className="py-3 px-4 text-gray-300">{cookie.provider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Managing Your Cookie Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                </p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Chrome:</strong> Settings > Privacy and security > Cookies and other site data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Firefox:</strong> Options > Privacy & Security > Cookies and Site Data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Safari:</strong> Preferences > Privacy > Manage Website Data</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Edge:</strong> Settings > Cookies and site permissions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Cookie Consent</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  When you first visit our website, you'll see a cookie consent banner. You can choose which types of cookies to accept or reject.
                </p>
                <div className="bg-slate-800 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Cookie Categories:</h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center">
                      <Shield className="w-4 h-4 text-red-400 mr-2" />
                      <span>Essential (Always Active)</span>
                    </li>
                    <li className="flex items-center">
                      <Database className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Analytics (Optional)</span>
                    </li>
                    <li className="flex items-center">
                      <Settings className="w-4 h-4 text-green-400 mr-2" />
                      <span>Functional (Optional)</span>
                    </li>
                    <li className="flex items-center">
                      <Eye className="w-4 h-4 text-purple-400 mr-2" />
                      <span>Marketing (Optional)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h2>
            <p className="text-gray-300 mb-6">
              Some cookies on our website are set by third-party services that appear on our pages. We do not control these cookies and you should check the relevant third party's website for more information about their cookies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Google Analytics</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies.
                </p>
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  Google Privacy Policy →
                </a>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Our website may include social media features that may set cookies. These features are provided by third-party social media platforms.
                </p>
                <a 
                  href="/privacy" 
                  className="text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  Our Privacy Policy →
                </a>
              </div>
            </div>
          </div>

          {/* Impact of Disabling Cookies */}
          <div className="cyber-card-enhanced p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Impact of Disabling Cookies</h2>
            <div className="bg-slate-800 rounded-lg p-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-4">Important Notice</h3>
              <p className="text-gray-300 mb-4">
                If you choose to disable cookies, some features of our website may not function properly. Here's what you might experience:
              </p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>You may need to re-enter information each time you visit</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Personalized content and recommendations may not be available</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Some interactive features may not work correctly</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                  <span>We won't be able to remember your preferences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Questions About Cookies?</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Settings className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">privacy@ziontechgroup.com</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Cookie className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 (302) 464-0950</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <Database className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;