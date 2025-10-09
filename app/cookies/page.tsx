import React from 'react';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            This website uses cookies to enhance your browsing experience and provide personalized content.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
          <p className="text-gray-300 mb-6">
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us understand how you use our site and improve your experience.
          </p>
          <h2 className="text-2xl font-semibold mb-4">How we use cookies</h2>
          <p className="text-gray-300 mb-6">
            We use cookies for analytics, personalization, and to remember your preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;

