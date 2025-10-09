import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cookie, Settings, Shield, Eye, Database, Users } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      icon: Shield,
      color: 'bg-red-100 text-red-800',
      examples: [
        'Authentication and login status',
        'Shopping cart and checkout process',
        'Security and fraud prevention',
        'Load balancing and performance',
        'User preferences and settings'
      ],
      retention: 'Session or up to 1 year',
      purpose: 'Essential for website functionality'
    },
    {
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      icon: Database,
      color: 'bg-blue-100 text-blue-800',
      examples: [
        'Google Analytics tracking',
        'Page views and user behavior',
        'Performance metrics and statistics',
        'Error tracking and debugging',
        'A/B testing and experiments'
      ],
      retention: 'Up to 2 years',
      purpose: 'Website analytics and improvement'
    },
    {
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      icon: Settings,
      color: 'bg-green-100 text-green-800',
      examples: [
        'Language preferences',
        'Theme and display settings',
        'Remembered form data',
        'Location-based features',
        'Social media integration'
      ],
      retention: 'Up to 1 year',
      purpose: 'Enhanced user experience'
    },
    {
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      icon: Users,
      color: 'bg-purple-100 text-purple-800',
      examples: [
        'Social media advertising',
        'Remarketing campaigns',
        'Interest-based advertising',
        'Email marketing tracking',
        'Affiliate program tracking'
      ],
      retention: 'Up to 1 year',
      purpose: 'Marketing and advertising'
    }
  ];

  const cookieDetails = [
    {
      name: '_ga',
      type: 'Analytics',
      provider: 'Google Analytics',
      purpose: 'Distinguishes unique users',
      retention: '2 years',
      category: 'Analytics'
    },
    {
      name: '_ga_*',
      type: 'Analytics',
      provider: 'Google Analytics 4',
      purpose: 'Stores user session data',
      retention: '2 years',
      category: 'Analytics'
    },
    {
      name: '_gid',
      type: 'Analytics',
      provider: 'Google Analytics',
      purpose: 'Distinguishes unique users',
      retention: '24 hours',
      category: 'Analytics'
    },
    {
      name: 'session_id',
      type: 'Essential',
      provider: 'Zion Tech Group',
      purpose: 'Maintains user session',
      retention: 'Session',
      category: 'Essential'
    },
    {
      name: 'user_preferences',
      type: 'Functional',
      provider: 'Zion Tech Group',
      purpose: 'Stores user preferences',
      retention: '1 year',
      category: 'Functional'
    },
    {
      name: 'marketing_consent',
      type: 'Marketing',
      provider: 'Zion Tech Group',
      purpose: 'Tracks marketing consent',
      retention: '1 year',
      category: 'Marketing'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your experience and provide our services." />
        <meta name="keywords" content="cookie policy, cookies, tracking, privacy, data collection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Learn about how we use cookies and similar technologies
              </p>
              <p className="text-sm text-blue-200">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                This Cookie Policy explains how Zion Tech Group ("we", "us", or "our") uses cookies and similar technologies when you visit our website or use our services.
              </p>
              <p className="text-lg text-gray-600">
                By continuing to use our website, you consent to our use of cookies in accordance with this policy. You can manage your cookie preferences at any time using the settings below.
              </p>
            </div>
          </div>
        </section>

        {/* What Are Cookies */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Cookie className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are stored on your device when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How Cookies Work</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cookies are created when you visit a website</li>
                    <li>• They are stored on your device's browser</li>
                    <li>• They are sent back to the website on future visits</li>
                    <li>• They help websites remember your preferences</li>
                    <li>• They can be temporary (session) or permanent (persistent)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• First-party cookies (set by our website)</li>
                    <li>• Third-party cookies (set by other websites)</li>
                    <li>• Session cookies (temporary)</li>
                    <li>• Persistent cookies (stored longer)</li>
                    <li>• Secure cookies (encrypted transmission)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Types of Cookies We Use</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <type.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${type.color}`}>
                        {type.purpose}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Retention: {type.retention}</span>
                    <span>Purpose: {type.purpose}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Specific Cookies We Use</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{cookie.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            cookie.category === 'Essential' ? 'bg-red-100 text-red-800' :
                            cookie.category === 'Analytics' ? 'bg-blue-100 text-blue-800' :
                            cookie.category === 'Functional' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {cookie.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cookie.provider}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{cookie.purpose}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{cookie.retention}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-600 mb-4">
                    You can control cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies only</li>
                    <li>• Delete existing cookies</li>
                    <li>• Set preferences for specific websites</li>
                    <li>• Receive notifications when cookies are set</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Cookie Settings</h3>
                  <p className="text-gray-600 mb-4">
                    You can manage your cookie preferences using our cookie settings tool:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-gray-900">Essential Cookies</span>
                      <span className="text-sm text-gray-500">Always Active</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-gray-900">Analytics Cookies</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-medium text-gray-900">Functional Cookies</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Marketing Cookies</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-xl mb-8 text-blue-100">
              If you have any questions about our use of cookies, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@ziontechgroup.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Privacy Team
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                General Contact
              </a>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              <p>Zion Tech Group</p>
              <p>364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>Email: privacy@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CookiesPage;