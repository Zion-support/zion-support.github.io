import React from 'react';
import { Helmet } from 'react-helmet-async';

function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Cookie policy and information about how we use cookies on our website" />
        <meta name="keywords" content="cookies, policy, privacy, zion tech group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-gray-300">
              <p className="text-lg mb-6">
                This cookie policy explains how Zion Tech Group uses cookies and similar technologies on our website.
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">What are cookies?</h2>
              <p className="mb-6">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
              </p>
              <h2 className="text-2xl font-semibold text-white mb-4">How we use cookies</h2>
              <p className="mb-6">
                We use cookies to analyze website traffic, personalize content, and improve our services. By continuing to use our website, you consent to our use of cookies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CookiesPage;