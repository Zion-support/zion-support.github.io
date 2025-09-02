import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye, Database, Globe } from 'lucide-react';

const CookiesPage: NextPage = () => {
  const cookieTypes = [
    {
      icon: <Cookie className="w-8 h-8" />,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas.',
      examples: ['Session management', 'Security tokens', 'Load balancing', 'User authentication']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      examples: ['Language preferences', 'User interface settings', 'Accessibility options', 'Customized content']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'Time on site', 'Traffic sources', 'User behavior patterns']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Cookies',
      description: 'These cookies help protect against security threats and ensure the integrity of our services.',
      examples: ['CSRF protection', 'Rate limiting', 'Fraud detection', 'Security monitoring']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Performance Cookies',
      description: 'These cookies collect information about how you use our website to help us improve performance and user experience.',
      examples: ['Load times', 'Error tracking', 'Performance metrics', 'Resource optimization']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.',
      examples: ['Ad targeting', 'Campaign tracking', 'Conversion measurement', 'Retargeting']
    }
  ];

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your experience on our website and provide better services."
      keywords="cookie policy, cookies, tracking, privacy, website analytics, user preferences"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Learn about how we use cookies and similar technologies to enhance your experience.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies to provide you with the best possible experience on our website.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="space-y-1">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling various website functions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>To ensure our website functions properly and securely</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze how our website is used and improve performance</li>
              <li>To provide personalized content and recommendations</li>
              <li>To deliver relevant advertisements and measure their effectiveness</li>
              <li>To protect against security threats and fraud</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookie Duration</h2>
            <p className="text-gray-600 mb-6">
              Cookies may be either "session" cookies or "persistent" cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Session cookies:</strong> These are temporary and are deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> These remain on your device for a set period or until you delete them</li>
              <li><strong>First-party cookies:</strong> Set by our website directly</li>
              <li><strong>Third-party cookies:</strong> Set by other services we use (like analytics providers)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may use third-party services that set their own cookies. These include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
              <li><strong>Advertising Networks:</strong> For delivering relevant advertisements</li>
              <li><strong>Customer Support Tools:</strong> For providing chat and support services</li>
              <li><strong>Content Delivery Networks:</strong> For faster website loading</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-6">
              You have several options for managing cookies:
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Browser Settings</h3>
            <p className="text-gray-600 mb-6">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for specific websites</li>
              <li>Receive notifications when cookies are set</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cookie Consent</h3>
            <p className="text-gray-600 mb-6">
              When you first visit our website, you'll see a cookie consent banner. You can:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your preferences by category</li>
              <li>Change your preferences at any time</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact of Disabling Cookies</h2>
            <p className="text-gray-600 mb-6">
              If you choose to disable cookies, some features of our website may not work properly:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>You may need to re-enter information on each visit</li>
              <li>Personalized content and recommendations may not be available</li>
              <li>Some interactive features may not function correctly</li>
              <li>We may not be able to remember your preferences</li>
              <li>Analytics and performance monitoring may be limited</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Posting the updated policy on our website</li>
              <li>Updating the "Last updated" date</li>
              <li>Sending you an email notification if you have an account with us</li>
              <li>Showing a notice on our website for significant changes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights</h2>
            <p className="text-gray-600 mb-6">
              Under applicable data protection laws, you have certain rights regarding cookies and your personal data:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Right to information:</strong> You have the right to know what cookies we use and why</li>
              <li><strong>Right to consent:</strong> You have the right to give or withdraw consent for non-essential cookies</li>
              <li><strong>Right to access:</strong> You can request information about the cookies we have set</li>
              <li><strong>Right to deletion:</strong> You can request that we delete cookies associated with your data</li>
              <li><strong>Right to portability:</strong> You can request a copy of your data in a portable format</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Cookie Settings</h3>
              <p className="text-blue-800 mb-4">
                You can manage your cookie preferences at any time using the settings below:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Essential Cookies</span>
                  <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded">Always Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Functional Cookies</span>
                  <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Manage
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Analytics Cookies</span>
                  <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Manage
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-800">Marketing Cookies</span>
                  <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CookiesPage;