import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye, Database } from 'lucide-react';

const Cookies: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const cookieTypes = [
    {
      icon: Settings,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      examples: [
        'Authentication and login status',
        'Shopping cart functionality',
        'Security and fraud prevention',
        'Load balancing and performance'
      ],
      required: true
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Page views and user behavior',
        'Traffic sources and referrals',
        'Popular content and features',
        'Performance metrics and errors'
      ],
      required: false
    },
    {
      icon: Database,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      examples: [
        'Language preferences',
        'User interface customization',
        'Remembered form data',
        'Location-based features'
      ],
      required: false
    },
    {
      icon: Shield,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements.',
      examples: [
        'Ad targeting and personalization',
        'Campaign performance tracking',
        'Social media integration',
        'Retargeting and remarketing'
      ],
      required: false
    }
  ];

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies to enhance your browsing experience and provide personalized services."
      keywords="cookie policy, cookies, tracking, privacy, website analytics, user preferences"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Cookie className="w-16 h-16 mx-auto mb-6 text-blue-400" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl text-gray-200 mb-4">
                Learn about how we use cookies to improve your experience on our website.
              </p>
              <p className="text-sm text-gray-300">Last updated: {lastUpdated}</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  understanding how you use our site.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies to enhance functionality, analyze site usage, and provide personalized 
                  content. You can control cookie settings through your browser preferences.
                </p>
              </div>

              {/* Cookie Types */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Types of Cookies We Use</h2>
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-start mb-6">
                      <cookie.icon className="w-8 h-8 text-blue-600 mr-4 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 mr-4">{cookie.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            cookie.required 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {cookie.required ? 'Required' : 'Optional'}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{cookie.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {cookie.examples.map((example, exampleIndex) => (
                              <li key={exampleIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cookie Management */}
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Managing Your Cookie Preferences</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Browser Settings</h3>
                    <p className="text-gray-600 mb-2">
                      You can control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">Block all cookies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">Block third-party cookies only</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">Delete existing cookies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">Set preferences for specific websites</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">Cookie Consent</h3>
                    <p className="text-gray-600">
                      When you first visit our website, you'll see a cookie consent banner. You can choose 
                      which types of cookies to accept. You can change your preferences at any time by 
                      clicking the cookie settings link in our footer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may use third-party services that set their own cookies. These include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600"><strong>Google Analytics:</strong> Website analytics and performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600"><strong>Social Media:</strong> Social sharing and integration features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600"><strong>Marketing Tools:</strong> Advertising and campaign tracking</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  These third-party services have their own privacy policies and cookie practices. 
                  We recommend reviewing their policies for more information.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-blue-50 rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Questions About Cookies?</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our use of cookies, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-700"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Cookies;