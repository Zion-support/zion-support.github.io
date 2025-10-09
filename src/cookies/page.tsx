'use client';
import React, { useState } from 'react';
import { Cookie, Settings, Shield, Eye, CheckCircle, X } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  const cookieTypes = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      required: true,
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Load balancing cookies for website performance',
        'Session cookies for shopping cart functionality'
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      required: false,
      examples: [
        'Google Analytics to track page views and user behavior',
        'Heat mapping tools to understand user interactions',
        'Performance monitoring to identify technical issues',
        'A/B testing cookies to improve user experience'
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver advertisements more relevant to you and your interests.',
      required: false,
      examples: [
        'Social media advertising cookies',
        'Retargeting cookies for personalized ads',
        'Conversion tracking for marketing campaigns',
        'Third-party advertising network cookies'
      ]
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies enable the website to remember choices you make and provide enhanced, more personal features.',
      required: false,
      examples: [
        'Language preference settings',
        'Theme and display preferences',
        'Location-based content settings',
        'User interface customization options'
      ]
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      type: 'Analytics',
      purpose: 'Google Analytics - distinguishes users',
      duration: '2 years',
      provider: 'Google'
    },
    {
      name: '_gid',
      type: 'Analytics',
      purpose: 'Google Analytics - distinguishes users',
      duration: '24 hours',
      provider: 'Google'
    },
    {
      name: '_gat',
      type: 'Analytics',
      purpose: 'Google Analytics - throttles request rate',
      duration: '1 minute',
      provider: 'Google'
    },
    {
      name: 'session_id',
      type: 'Essential',
      purpose: 'Maintains user session',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: 'csrf_token',
      type: 'Essential',
      purpose: 'Cross-site request forgery protection',
      duration: 'Session',
      provider: 'Zion Tech Group'
    },
    {
      name: 'user_preferences',
      type: 'Preferences',
      purpose: 'Stores user interface preferences',
      duration: '1 year',
      provider: 'Zion Tech Group'
    },
    {
      name: 'marketing_consent',
      type: 'Marketing',
      purpose: 'Tracks marketing consent status',
      duration: '1 year',
      provider: 'Zion Tech Group'
    }
  ];

  const handlePreferenceChange = (cookieType: string, enabled: boolean) => {
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: enabled
    }));
  };

  const savePreferences = () => {
    // In a real implementation, this would save preferences to localStorage and update cookie settings
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Cookie preferences saved successfully!');
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
  };

  const rejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookiePreferences(onlyEssential);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies to enhance your experience on our website.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Introduction */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Cookie className="w-8 h-8 text-cyan-400 mr-3" />
              What Are Cookies?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use both first-party cookies (set by us) and third-party cookies (set by other services we use) to 
              improve functionality, analyze usage, and deliver personalized content.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Cookie className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{type.name}</h3>
                        <p className="text-gray-300 text-sm">{type.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {type.required ? (
                        <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm font-medium">
                          Required
                        </span>
                      ) : (
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={cookiePreferences[type.id as keyof typeof cookiePreferences]}
                            onChange={(e) => handlePreferenceChange(type.id, e.target.checked)}
                            className="sr-only"
                          />
                          <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            cookiePreferences[type.id as keyof typeof cookiePreferences] 
                              ? 'bg-cyan-400' 
                              : 'bg-gray-600'
                          }`}>
                            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              cookiePreferences[type.id as keyof typeof cookiePreferences] 
                                ? 'translate-x-6' 
                                : 'translate-x-1'
                            }`} />
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookie Details Table */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Settings className="w-8 h-8 text-cyan-400 mr-3" />
              Specific Cookies We Use
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-cyan-400">Cookie Name</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Type</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Purpose</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Duration</th>
                    <th className="text-left py-3 px-4 text-cyan-400">Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieDetails.map((cookie, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-3 px-4 text-white font-mono">{cookie.name}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          cookie.type === 'Essential' 
                            ? 'bg-green-400/20 text-green-400'
                            : cookie.type === 'Analytics'
                            ? 'bg-blue-400/20 text-blue-400'
                            : cookie.type === 'Marketing'
                            ? 'bg-purple-400/20 text-purple-400'
                            : 'bg-yellow-400/20 text-yellow-400'
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
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Settings className="w-8 h-8 text-cyan-400 mr-3" />
              Managing Your Cookie Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Browser Settings</h3>
                <p className="text-gray-300 mb-4">
                  Most web browsers allow you to control cookies through their settings preferences. 
                  You can set your browser to refuse cookies or delete certain cookies.
                </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                    <li>• <strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                    <li>• <strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                    <li>• <strong>Edge:</strong> Settings &gt; Cookies and site permissions</li>
                  </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Our Cookie Controls</h3>
                <p className="text-gray-300 mb-4">
                  You can manage your cookie preferences using our cookie consent tool below. 
                  You can change your preferences at any time.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={acceptAll}
                    className="w-full cyber-button py-2 px-4 text-sm"
                  >
                    Accept All Cookies
                  </button>
                  <button
                    onClick={rejectAll}
                    className="w-full border border-gray-600 text-gray-300 py-2 px-4 rounded-lg text-sm hover:bg-gray-800"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={savePreferences}
                    className="w-full bg-cyan-400 text-slate-900 py-2 px-4 rounded-lg text-sm font-medium hover:bg-cyan-500"
                  >
                    Save My Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-8 h-8 text-cyan-400 mr-3" />
              Third-Party Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Some cookies on our site are set by third-party services that appear on our pages. 
              We have no control over these cookies and they are subject to the third party's privacy policy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Google Analytics</h3>
                <p className="text-gray-300 text-sm mb-2">
                  We use Google Analytics to understand how visitors interact with our website.
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
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Social Media</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Social media platforms may set cookies when you interact with their content on our site.
                </p>
                <a 
                  href="https://www.facebook.com/policies/cookies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 text-sm"
                >
                  Facebook Cookie Policy →
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              Questions About Cookies?
            </h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="cyber-button px-6 py-3 text-sm font-medium inline-flex items-center"
              >
                Email Us
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                Call Us
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;