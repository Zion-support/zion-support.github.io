import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about how Zion Tech Group uses cookies to improve your browsing experience and provide personalized services." />
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies when you visit our website.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Cookies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies to improve your experience on our website, analyze site traffic, and personalize content and advertisements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our Cookie Policy, please contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;