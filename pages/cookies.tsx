import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function CookiesPage() {
  return (
    <MainLayout 
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how we use cookies and similar technologies on our website."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies 
                when you visit our website.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit a website. They are widely used to make websites work more efficiently and 
                to provide information to website owners.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 mb-6">
                We use cookies to improve your experience on our website, analyze site traffic, 
                and personalize content and advertisements.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our use of cookies, please contact us at 
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">
                  kleber@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}