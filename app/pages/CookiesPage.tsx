import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie Policy for Zion Tech Group website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Cookie Policy
          </h1>
          <div className="max-w-4xl mx-auto text-gray-300">
            <p className="text-lg mb-6">
              This website uses cookies to enhance your browsing experience and provide personalized content.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">What are cookies?</h2>
            <p className="mb-6">
              Cookies are small text files that are stored on your device when you visit our website.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">How we use cookies</h2>
            <p className="mb-6">
              We use cookies to analyze website traffic, personalize content, and improve user experience.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Managing cookies</h2>
            <p className="mb-6">
              You can control cookie settings through your browser preferences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;