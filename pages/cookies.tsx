import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye, Database, Globe } from 'lucide-react';

const Cookies: NextPage = () => {
  const cookieTypes = [
    {
      icon: Cookie,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: ['Authentication', 'Security', 'Load balancing', 'User preferences']
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Page views', 'User behavior', 'Traffic sources', 'Performance metrics']
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: ['Language settings', 'Theme preferences', 'Form data', 'Customization options']
    },
    {
      icon: Database,
      title: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Ad targeting', 'Campaign tracking', 'Social media integration', 'Remarketing']
    }
  ];

  const cookiePurposes = [
    {
      icon: Shield,
      title: 'Security',
      description: 'Protect against fraud and ensure secure transactions'
    },
    {
      icon: Globe,
      title: 'Performance',
      description: 'Monitor and improve website performance and user experience'
    },
    {
      icon: Settings,
      title: 'Personalization',
      description: 'Remember your preferences and provide customized content'
    },
    {
      icon: Eye,
      title: 'Analytics',
      description: 'Understand how our website is used to improve our services'
    }
  ];

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and improve our services."
      keywords="cookie policy, cookies, tracking, privacy, data collection, website analytics"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Learn about how we use cookies and similar technologies to enhance your experience on our website.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies to provide you with the best possible experience on our website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={type.title} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <type.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Purposes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We Use Cookies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cookies help us provide you with a better experience and improve our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cookiePurposes.map((purpose, index) => (
              <div key={purpose.title} className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <purpose.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{purpose.title}</h3>
                <p className="text-gray-600">{purpose.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may also use third-party cookies from trusted partners to provide additional functionality and analytics. 
              These may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing functionality</li>
              <li>Advertising networks for relevant advertisements</li>
              <li>Customer support tools for live chat functionality</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-4">
              You have several options for managing cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or delete them</li>
              <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage your preferences</li>
              <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
              <li><strong>Contact Us:</strong> Reach out to us directly to discuss your preferences</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
            <p className="text-gray-600 mb-6">
              If you choose to disable cookies, some features of our website may not function properly. 
              This may include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Inability to remember your preferences</li>
              <li>Reduced functionality of interactive features</li>
              <li>Less personalized content and recommendations</li>
              <li>Potential security and authentication issues</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
              legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cookies;