'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              This Cookie Policy explains how Zion Tech Group uses cookies and similar technologies on our website.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">What are Cookies?</h2>
            <p className="text-gray-300 mb-6">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies to improve our website's functionality, analyze traffic, and personalize content.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPage;