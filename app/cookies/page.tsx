'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group. Learn about how we use cookies on our website." />
        <meta name="keywords" content="cookie policy, cookies, website tracking, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Cookie Policy
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies to improve your experience on our website, analyze site traffic, personalize content, and provide relevant advertisements. We may use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device until you delete them).
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-gray-900">Essential Cookies:</strong>
                      <span className="text-gray-700 ml-2">These cookies are necessary for the website to function properly and cannot be disabled.</span>
                    </li>
                    <li>
                      <strong className="text-gray-900">Analytics Cookies:</strong>
                      <span className="text-gray-700 ml-2">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</span>
                    </li>
                    <li>
                      <strong className="text-gray-900">Functional Cookies:</strong>
                      <span className="text-gray-700 ml-2">These cookies enable enhanced functionality and personalization, such as remembering your preferences.</span>
                    </li>
                    <li>
                      <strong className="text-gray-900">Marketing Cookies:</strong>
                      <span className="text-gray-700 ml-2">These cookies are used to track visitors across websites to display relevant and engaging advertisements.</span>
                    </li>
                  </ul>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                <p className="text-gray-700 mb-6">
                  You can control and/or delete cookies as you wish through your browser settings. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                <p className="text-gray-700 mb-6">
                  Some cookies on our website are set by third-party services that appear on our pages. We do not control these cookies and you should check the relevant third-party website for more information about these cookies.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-gray-100 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Website:</strong> ziontechgroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;