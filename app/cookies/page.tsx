'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, CheckCircle, AlertCircle, Info, Shield, Eye, Lock } from 'lucide-react';

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
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      required: true,
      icon: Shield,
      color: 'text-green-400'
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      required: false,
      icon: Eye,
      color: 'text-blue-400'
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and marketing campaigns.',
      required: false,
      icon: Settings,
      color: 'text-purple-400'
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'These cookies remember your choices and preferences for a better experience.',
      required: false,
      icon: Settings,
      color: 'text-cyan-400'
    }
  ];

  const handlePreferenceChange = (cookieType: string) => {
    if (cookieType === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }));
  };

  const savePreferences = () => {
    // Save preferences to localStorage or send to server
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    alert('Your cookie preferences have been saved!');
  };

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      marketing: false,
      preferences: false
    });
    savePreferences();
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group | Cookie Settings and Preferences</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and manage your cookie preferences for our website and services." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy settings, website preferences" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Learn about how we use cookies and manage your preferences
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cookie className="w-6 h-6 text-cyan-400" />
                  What Are Cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
              </div>

              {/* Cookie Types */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  {cookieTypes.map((cookie) => (
                    <div key={cookie.id} className="bg-slate-700/30 rounded-xl p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-slate-600 flex items-center justify-center`}>
                            <cookie.icon className={`w-5 h-5 ${cookie.color}`} />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{cookie.name}</h3>
                            <p className="text-gray-300 text-sm">{cookie.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {cookie.required ? (
                            <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                              Required
                            </span>
                          ) : (
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={cookiePreferences[cookie.id as keyof typeof cookiePreferences]}
                                onChange={() => handlePreferenceChange(cookie.id)}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Detailed Cookie Information</h2>
                <div className="space-y-6">
                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      Essential Cookies
                    </h3>
                    <p className="text-gray-300 mb-3">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Session management and security</li>
                      <li>Authentication and login status</li>
                      <li>Shopping cart functionality</li>
                      <li>Form data and user preferences</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-400" />
                      Analytics Cookies
                    </h3>
                    <p className="text-gray-300 mb-3">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Google Analytics for website traffic analysis</li>
                      <li>Page views and user behavior tracking</li>
                      <li>Performance monitoring and optimization</li>
                      <li>Error tracking and debugging</li>
                    </ul>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-purple-400" />
                      Marketing Cookies
                    </h3>
                    <p className="text-gray-300 mb-3">
                      These cookies are used to deliver relevant advertisements and marketing campaigns.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                      <li>Social media integration and sharing</li>
                      <li>Advertising network tracking</li>
                      <li>Remarketing and retargeting</li>
                      <li>Campaign performance measurement</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may use third-party services that set their own cookies. These include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Google Analytics</h3>
                    <p className="text-gray-300 text-sm">Website traffic and user behavior analysis</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Social Media</h3>
                    <p className="text-gray-300 text-sm">Facebook, Twitter, LinkedIn integration</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Advertising</h3>
                    <p className="text-gray-300 text-sm">Google Ads, Facebook Ads tracking</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Customer Support</h3>
                    <p className="text-gray-300 text-sm">Live chat and support tools</p>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    You can control and manage cookies in several ways:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Use the cookie settings panel on this page</li>
                    <li>Configure your browser settings to block or delete cookies</li>
                    <li>Use browser extensions to manage cookie preferences</li>
                    <li>Opt out of specific third-party tracking services</li>
                  </ul>
                </div>
              </div>

              {/* Browser Settings */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Browser Cookie Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Chrome</h3>
                    <p className="text-gray-300 text-sm">Settings → Privacy and security → Cookies and other site data</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Firefox</h3>
                    <p className="text-gray-300 text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Safari</h3>
                    <p className="text-gray-300 text-sm">Preferences → Privacy → Manage Website Data</p>
                  </div>
                  <div className="bg-slate-700/30 rounded-xl p-4">
                    <h3 className="font-semibold text-white mb-2">Edge</h3>
                    <p className="text-gray-300 text-sm">Settings → Cookies and site permissions → Cookies and site data</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={acceptAll}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Accept All Cookies
                </button>
                <button
                  onClick={rejectAll}
                  className="border border-red-500 text-red-400 hover:bg-red-500/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <AlertCircle className="w-5 h-5" />
                  Reject All Non-Essential
                </button>
                <button
                  onClick={savePreferences}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Settings className="w-5 h-5" />
                  Save Preferences
                </button>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-700/30 rounded-xl p-6 text-center">
                <h2 className="text-xl font-bold text-white mb-4">Questions About Cookies?</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
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