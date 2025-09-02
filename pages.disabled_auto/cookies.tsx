import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Eye, Shield, Database, Globe } from 'lucide-react';

const Cookies: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      examples: [
        'Authentication cookies to keep you logged in',
        'Security cookies to protect against fraud',
        'Load balancing cookies for website performance',
        'Session cookies to maintain your preferences'
      ],
      purpose: 'Website functionality and security'
    },
    {
      name: 'Analytics Cookies',
      icon: Eye,
      description: 'These cookies help us understand how visitors interact with our website.',
      examples: [
        'Google Analytics to track page views and user behavior',
        'Heat mapping tools to understand user interactions',
        'Performance monitoring to identify technical issues',
        'A/B testing to improve user experience'
      ],
      purpose: 'Website analytics and improvement'
    },
    {
      name: 'Marketing Cookies',
      icon: Globe,
      description: 'These cookies are used to deliver relevant advertisements and track marketing campaigns.',
      examples: [
        'Social media tracking pixels',
        'Advertising platform cookies',
        'Email marketing tracking',
        'Retargeting and remarketing cookies'
      ],
      purpose: 'Marketing and advertising'
    },
    {
      name: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies remember your preferences and settings for a better user experience.',
      examples: [
        'Language and region preferences',
        'Theme and display settings',
        'Form data and user inputs',
        'Customized content preferences'
      ],
      purpose: 'Personalization and user experience'
    }
  ];

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies on our website."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Cookie className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Learn about how we use cookies and similar technologies to enhance your experience.
          </p>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
            <p className="text-lg text-gray-600">
              We use cookies and similar technologies to improve functionality, analyze usage patterns, 
              and provide personalized content. This policy explains what cookies we use and how you can control them.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Types of Cookies We Use</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {cookieTypes.map((cookie, index) => {
              const IconComponent = cookie.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{cookie.name}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{cookie.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                    <p className="text-gray-600 text-sm">{cookie.purpose}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Block all cookies or only third-party cookies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Delete existing cookies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Set preferences for specific websites
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Receive notifications when cookies are set
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Consent</h3>
              <p className="text-gray-600 mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Accept all cookies for the best experience
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Customize your preferences by category
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Reject non-essential cookies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  Change your preferences at any time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <p className="text-lg text-gray-600 mb-6">
              We may use third-party services that set their own cookies. These include:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Analytics Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Google Analytics</li>
                  <li>• Hotjar</li>
                  <li>• Mixpanel</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Social Media</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Facebook Pixel</li>
                  <li>• LinkedIn Insight Tag</li>
                  <li>• Twitter Analytics</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mt-6">
              These third-party services have their own privacy policies and cookie practices. 
              We recommend reviewing their policies for more information.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
            <p className="text-lg text-gray-600 mb-8">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="space-y-4 text-gray-700">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cookies;