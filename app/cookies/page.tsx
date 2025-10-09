import React from 'react';
import Link from 'next/link';
import { Shield, Cookie, Settings, Eye, Database, Lock } from 'lucide-react';

const CookiesPage: React.FC = () => {
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
              How we use cookies and similar technologies to enhance your experience
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Essential Cookies</h3>
                </div>
                <p className="text-gray-600">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Settings className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Functional Cookies</h3>
                </div>
                <p className="text-gray-600">
                  These cookies enable enhanced functionality and personalization features.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Analytics Cookies</h3>
                </div>
                <p className="text-gray-600">
                  These cookies help us understand how visitors interact with our website.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Marketing Cookies</h3>
                </div>
                <p className="text-gray-600">
                  These cookies are used to deliver relevant advertisements and marketing campaigns.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
            <p className="text-gray-600 mb-6">
              You can control and manage cookies in various ways. Please note that removing or blocking cookies 
              can impact your user experience and parts of our website may no longer be fully accessible.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 302 464 0950
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiesPage;

