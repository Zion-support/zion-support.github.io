import React from 'react';
import type { NextPage } from 'next';
import { Cookie, Settings, Shield, Eye, Database } from 'lucide-react';

const Cookies: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Cookie className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Learn about how we use cookies and similar technologies on our website.
            </p>
            <p className="text-sm text-gray-300">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies for several purposes to improve your experience on our website:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Settings className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Essential Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Eye className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Analytics Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    These cookies help us understand how visitors interact with our website.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Shield className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Security Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    These cookies help protect against security threats and fraud.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Database className="w-6 h-6 text-orange-600 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900">Preference Cookies</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    These cookies remember your preferences and settings.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Cookies</h2>
              <p className="text-gray-600 mb-6">
                You can control and manage cookies in several ways:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Use your browser settings to block or delete cookies</li>
                <li>Use our cookie preference center (if available)</li>
                <li>Opt out of specific tracking technologies</li>
                <li>Contact us to request changes to your cookie preferences</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
              <p className="text-gray-600 mb-6">
                We may use third-party services that set their own cookies. These services include:
              </p>
              
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing features</li>
                <li>Advertising networks for targeted advertising</li>
                <li>Customer support tools for live chat functionality</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our use of cookies, please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">kleber@ziontechgroup.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>
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

export default Cookies;