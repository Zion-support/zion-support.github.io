import React from 'react';


export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { ArrowLeft, Shield, Settings, BarChart, User } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieCategories = [
    {
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      necessary: true,
      cookies: [
        {
          name: 'session_id',
          purpose: 'Maintains your session state across page requests',
          duration: 'Session',
          type: 'First-party'
        },
        {
          name: 'csrf_token',
          purpose: 'Protects against cross-site request forgery attacks',
          duration: 'Session',
          type: 'First-party'
        },
        {
          name: 'user_preferences',
          purpose: 'Stores your basic preferences and settings',
          duration: '1 year',
          type: 'First-party'
        }
      ]
    },
    {
      title: 'Analytics Cookies',
      icon: BarChart,
      description: 'These cookies help us understand how visitors interact with our website.',
      necessary: false,
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '2 years',
          type: 'Third-party'
        },
        {
          name: '_gid',
          purpose: 'Google Analytics - distinguishes unique users',
          duration: '24 hours',
          type: 'Third-party'
        },
        {
          name: '_gat',
          purpose: 'Google Analytics - throttles request rate',
          duration: '1 minute',
          type: 'Third-party'
        }
      ]
    },
    {
      title: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization.',
      necessary: false,
      cookies: [
        {
          name: 'language_preference',
          purpose: 'Remembers your language preference',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'theme_preference',
          purpose: 'Stores your dark/light mode preference',
          duration: '1 year',
          type: 'First-party'
        },
        {
          name: 'notification_settings',
          purpose: 'Remembers your notification preferences',
          duration: '6 months',
          type: 'First-party'
        }
      ]
    },
    {
      title: 'Marketing Cookies',
      icon: User,
      description: 'These cookies are used to deliver relevant advertisements.',
      necessary: false,
      cookies: [
        {
          name: '_fbp',
          purpose: 'Facebook Pixel - tracks conversions and retargeting',
          duration: '3 months',
          type: 'Third-party'
        },
        {
          name: 'ads_preferences',
          purpose: 'Stores your advertising preferences',
          duration: '1 year',
          type: 'First-party'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link 
              to="/privacy" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Privacy Policy
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cookie Policy</h1>
              <p className="text-gray-600 mt-1">
                Last updated: October 8, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Ensure our website functions properly</li>
                <li>Remember your preferences and settings</li>
                <li>Analyze how our website is used to improve performance</li>
                <li>Provide personalized content and advertisements</li>
                <li>Protect against security threats</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="space-y-8">
                {cookieCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                      {category.necessary && (
                        <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                          Necessary
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="space-y-3">
                      {category.cookies.map((cookie, cookieIndex) => (
                        <div key={cookieIndex} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-gray-900">{cookie.name}</h4>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {cookie.type}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{cookie.purpose}</p>
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Duration: {cookie.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Managing Your Cookie Preferences</h2>
              <p className="text-gray-600 mb-6">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them. Check your browser's help menu for instructions.</li>
                <li><strong>Cookie Banner:</strong> When you first visit our website, you can choose which types of cookies to accept.</li>
                <li><strong>Cookie Settings:</strong> You can change your cookie preferences at any time using our cookie settings tool.</li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Note</h3>
                <p className="text-blue-800">
                  Please note that disabling certain cookies may affect the functionality of our website and your user experience.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-6">
                Some cookies on our website are set by third-party services. We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Facebook Pixel:</strong> For advertising and conversion tracking</li>
                <li><strong>HubSpot:</strong> For customer relationship management and marketing automation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;
