import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Settings, Eye, Lock, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      purpose: 'Enable basic functions like page navigation, access to secure areas, and authentication.',
      examples: ['Session cookies', 'Authentication tokens', 'Security cookies'],
      required: true,
      retention: 'Session or 30 days'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
      purpose: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Google Analytics', 'Page view tracking', 'User behavior analysis'],
      required: false,
      retention: '2 years'
    },
    {
      name: 'Functional Cookies',
      description: 'These cookies enable the website to provide enhanced functionality and personalization.',
      purpose: 'Remember your preferences and choices to provide a more personalized experience.',
      examples: ['Language preferences', 'Theme settings', 'User preferences'],
      required: false,
      retention: '1 year'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests.',
      purpose: 'Show you relevant adverts on other sites and measure the effectiveness of our advertising campaigns.',
      examples: ['Social media cookies', 'Advertising cookies', 'Retargeting pixels'],
      required: false,
      retention: '1 year'
    }
  ];

  const cookieSettings = [
    {
      category: 'Essential Cookies',
      description: 'Required for basic website functionality',
      enabled: true,
      required: true
    },
    {
      category: 'Analytics Cookies',
      description: 'Help us understand website usage and performance',
      enabled: false,
      required: false
    },
    {
      category: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      enabled: false,
      required: false
    },
    {
      category: 'Marketing Cookies',
      description: 'Used for advertising and marketing purposes',
      enabled: false,
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              How we use cookies and similar technologies on our website
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Manage Cookie Preferences
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-xl text-gray-600">
              Understanding cookies and how they work
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Definition</h3>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-600 mb-6">
                Cookies allow a website to recognize a user's device and remember information about their visit, such as 
                their preferred language and other settings. This can make your next visit easier and the site more useful to you.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">To ensure our website functions properly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">To remember your preferences and settings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">To analyze how our website is used</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">To improve our services and user experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">To provide personalized content and advertising</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600">
              Detailed information about each type of cookie
            </p>
          </div>
          <div className="space-y-8">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-semibold text-gray-900 mr-4">{cookie.name}</h3>
                      {cookie.required ? (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          Required
                        </span>
                      ) : (
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{cookie.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                      <p className="text-gray-600">{cookie.purpose}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {cookie.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex}>{example}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Retention Period:</h4>
                      <p className="text-gray-600">{cookie.retention}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-xl text-gray-600">
              You have control over which cookies you accept
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
            <div className="space-y-6">
              {cookieSettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{setting.category}</h3>
                    <p className="text-gray-600 text-sm">{setting.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    {setting.required && (
                      <span className="text-sm text-gray-500">Required</span>
                    )}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={setting.enabled || setting.required}
                        disabled={setting.required}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Save Preferences
              </button>
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                Accept All
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Reject All
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Settings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browser Cookie Settings
            </h2>
            <p className="text-xl text-gray-600">
              How to manage cookies in your web browser
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Chrome</h3>
              <p className="text-gray-600 text-sm mb-4">Settings → Privacy and security → Cookies and other site data</p>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🦊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Firefox</h3>
              <p className="text-gray-600 text-sm mb-4">Options → Privacy & Security → Cookies and Site Data</p>
              <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safari</h3>
              <p className="text-gray-600 text-sm mb-4">Preferences → Privacy → Manage Website Data</p>
              <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Edge</h3>
              <p className="text-gray-600 text-sm mb-4">Settings → Cookies and site permissions → Cookies and site data</p>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Our Cookie Policy?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            If you have any questions about our use of cookies, please contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:privacy@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📧 privacy@ziontechgroup.com
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              📞 +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>Last updated: December 15, 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;