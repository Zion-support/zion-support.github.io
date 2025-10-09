import React from 'react';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
        <div className="bg-white rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            This website uses cookies to enhance your browsing experience and provide personalized content.
          </p>
          <p className="text-gray-600">
            By continuing to use this site, you consent to our use of cookies as described in our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
