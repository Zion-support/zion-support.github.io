import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Cookie, Settings, Shield, Eye } from 'lucide-react';

const Cookies: NextPage = () => {
  const cookieTypes = [
    {
      icon: <Cookie className="w-8 h-8 text-blue-600" />,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality and security',
      examples: ['Authentication', 'Security', 'Load balancing']
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: 'Functional Cookies',
      description: 'Remember your preferences and improve user experience',
      examples: ['Language settings', 'Theme preferences', 'Form data']
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website',
      examples: ['Page views', 'User behavior', 'Performance metrics']
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and content',
      examples: ['Ad targeting', 'Social media integration', 'Campaign tracking']
    }
  ];

  return (
    <MainLayout
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your experience."
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
            Learn about how we use cookies and similar technologies to improve your experience on our website.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
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
          
          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {type.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{type.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies for several purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>To ensure our website functions properly</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze how visitors use our website</li>
              <li>To improve our services and user experience</li>
              <li>To provide personalized content and advertisements</li>
              <li>To ensure security and prevent fraud</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <p className="text-gray-600 mb-6">
              We may also use third-party services that set their own cookies, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for sharing features</li>
              <li>Advertising networks for targeted advertising</li>
              <li>Customer support tools for live chat functionality</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-6">
              You have several options for managing cookies:
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete existing cookies</li>
                <li>Set preferences for specific websites</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Consent</h3>
              <p className="text-gray-600">
                When you first visit our website, you'll see a cookie consent banner where you can 
                choose which types of cookies you want to accept. You can change your preferences 
                at any time by clicking the cookie settings link in our footer.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
            <p className="text-gray-600 mb-6">
              Please note that disabling certain cookies may affect the functionality of our website:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Some features may not work properly</li>
              <li>You may need to re-enter information more frequently</li>
              <li>Personalized content may not be available</li>
              <li>Website performance may be affected</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this cookie policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              significant changes by posting the updated policy on our website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1-302-464-0950</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Cookies;