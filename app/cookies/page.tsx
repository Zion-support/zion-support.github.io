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
        'Social media tracking',
        'Advertising networks',
        'Remarketing pixels',
        'Conversion tracking'
      ],
      required: false
    }
  ];

  const cookieSettings = [
    {
      category: 'Essential Cookies',
      description: 'Required for basic website functionality',
      enabled: true,
      disabled: true
    },
    {
      category: 'Analytics Cookies',
      description: 'Help us improve our website performance',
      enabled: false,
      disabled: false
    },
    {
      category: 'Functional Cookies',
      description: 'Enable personalized features and preferences',
      enabled: false,
      disabled: false
    },
    {
      category: 'Marketing Cookies',
      description: 'Used for targeted advertising and marketing',
      enabled: false,
      disabled: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Zion Tech Group - Cookie Usage & Management</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies on our website. Understand different cookie types and manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, cookies, website tracking, privacy settings, data collection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cookie className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies on our website and how you can manage your cookie preferences.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: {lastUpdated}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Info className="w-6 h-6 mr-3 text-cyan-400" />
                What Are Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain website features.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use cookies to improve our website's functionality, analyze how visitors use our site, and provide personalized content and advertisements.
              </p>
            </div>

            {/* Cookie Types */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Types of Cookies We Use
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <cookie.icon className="w-6 h-6 text-cyan-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">{cookie.type}</h3>
                      {cookie.required && (
                        <span className="ml-auto px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{cookie.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {cookie.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-gray-300 text-sm flex items-start">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cookie Management */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-cyan-400" />
                Manage Your Cookie Preferences
              </h2>
              <p className="text-gray-300 mb-6">
                You can control which cookies you accept. Note that disabling certain cookies may affect the functionality of our website.
              </p>
              <div className="space-y-4">
                {cookieSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{setting.category}</h3>
                      <p className="text-gray-300 text-sm">{setting.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          setting.enabled
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                        }`}
                        disabled={setting.disabled}
                      >
                        {setting.enabled ? 'Enabled' : 'Disabled'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Browser Settings */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                Browser Cookie Settings
              </h2>
              <p className="text-gray-300 mb-6">
                You can also manage cookies through your browser settings. Here's how to do it in popular browsers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Chrome</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Settings → Privacy and security → Cookies and other site data
                  </p>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Learn more →
                  </a>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Firefox</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Learn more →
                  </a>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Safari</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Preferences → Privacy → Manage Website Data
                  </p>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Learn more →
                  </a>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Edge</h3>
                  <p className="text-gray-300 text-sm mb-3">
                    Settings → Cookies and site permissions → Cookies and site data
                  </p>
                  <a
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 text-sm"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                Questions About Cookies?
              </h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Email</h3>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    privacy@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Phone</h3>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;