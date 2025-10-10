'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group - Learn about our use of cookies and similar technologies." />
        <meta name="keywords" content="cookie policy, cookies, tracking, web analytics, privacy" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies</h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit our website. They help us provide you with a better experience.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use cookies to analyze website traffic, personalize content, and improve our services. 
                We also use cookies for security and authentication purposes.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies</h2>
              <p className="text-gray-300 mb-6">
                We use both session cookies (which expire when you close your browser) and persistent 
                cookies (which stay on your device for a set period of time).
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies through your browser settings. However, disabling 
                cookies may affect the functionality of our website.
              </p>
              
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about our use of cookies, please contact us at 
                privacy@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiesPage;