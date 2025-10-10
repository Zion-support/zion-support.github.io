'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Settings, CheckCircle } from 'lucide-react';

const CookiesPage: React.FC = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly and cannot be disabled.',
      purpose: 'Authentication, security, and basic functionality',
      retention: 'Session or 1 year'
    },
    {
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Website performance and user behavior analysis',
      retention: '2 years'
    },
    {
      name: 'Marketing Cookies',
      description: 'These cookies are used to deliver relevant advertisements and marketing content.',
      purpose: 'Personalized advertising and content delivery',
      retention: '1 year'
    },
    {
      name: 'Preference Cookies',
      description: 'These cookies remember your preferences and settings.',
      purpose: 'User experience customization',
      retention: '1 year'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Zion Tech Group - Privacy & Data Protection</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies to improve your experience on our website. Manage your cookie preferences." />
        <meta name="keywords" content="cookie policy, privacy, data protection, cookies, website analytics, user preferences" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Cookie Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Learn about how we use cookies to improve your experience and protect your privacy.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <p className="text-lg text-gray-600 mb-8">
                We use cookies for various purposes, including improving website functionality, analyzing user behavior, and personalizing content. Below is a detailed breakdown of the types of cookies we use.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="space-y-8">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {cookie.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {cookie.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                        <p className="text-gray-600">{cookie.purpose}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Retention:</h4>
                        <p className="text-gray-600">{cookie.retention}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Managing Your Cookie Preferences</h2>
              <p className="text-lg text-gray-600 mb-8">
                You can control and manage cookies in several ways. Most web browsers allow you to refuse cookies or delete them. However, please note that disabling certain cookies may affect the functionality of our website.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Cookie Settings</h3>
                <p className="text-blue-800 mb-4">
                  You can manage your cookie preferences using our cookie settings tool below.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Manage Cookie Settings
                </button>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-lg text-gray-600 mb-8">
                We may also use third-party services that set their own cookies. These include analytics services, social media platforms, and advertising networks. We do not control these cookies, and you should refer to their respective privacy policies.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
              <p className="text-lg text-gray-600 mb-8">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@ziontechgroup.com.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Our Cookie Policy?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're here to help. Contact us if you have any questions about our use of cookies or privacy practices.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CookiesPage;