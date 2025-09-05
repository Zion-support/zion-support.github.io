import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function CookiePolicyPage() {
  return (
    <MainLayout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies on our website."
    >
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Cookie Policy
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How We Use Cookies
                </h2>
                <p className="text-gray-600 mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Essential cookies: Required for the website to function properly</li>
                  <li>Analytics cookies: Help us understand how visitors use our website</li>
                  <li>Functional cookies: Remember your preferences and settings</li>
                  <li>Marketing cookies: Used to deliver relevant advertisements</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Managing Cookies
                </h2>
                <p className="text-gray-600 mb-6">
                  You can control and manage cookies through your browser settings. However, please note that disabling 
                  certain cookies may affect the functionality of our website.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}