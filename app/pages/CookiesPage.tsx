import React from 'react';
import { Helmet } from 'react-helmet-async';

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookies Policy - Zion Tech Group</title>
        <meta name="description" content="Learn about our cookie policy and how we use cookies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookies Policy</h1>
          <div className="prose max-w-4xl">
            <p className="text-lg text-gray-600 mb-6">
              This page explains how we use cookies and similar technologies on our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What are cookies?</h2>
            <p className="text-gray-600 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and enabling certain functionality.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How we use cookies</h2>
            <p className="text-gray-600 mb-6">
              We use cookies to improve your browsing experience, analyze website traffic, and personalize content. 
              We do not use cookies to collect personally identifiable information without your consent.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Managing cookies</h2>
            <p className="text-gray-600 mb-6">
              You can control and manage cookies through your browser settings. However, disabling cookies may 
              affect the functionality of our website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiesPage;