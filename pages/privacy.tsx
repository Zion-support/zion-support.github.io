import React from 'react';
import type { NextPage } from 'next';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: NextPage = () => {
  const lastUpdated = "January 1, 2025";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <Shield className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-300">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Service usage data</li>
                <li>Device information</li>
                <li>IP address and location data</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services.
              </p>
              
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our services and develop new features</li>
                <li>Monitor and analyze usage and trends</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-600 mb-6">
                You have the right to access, update, or delete your personal information. 
                You may also opt out of certain communications from us.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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

export default Privacy;