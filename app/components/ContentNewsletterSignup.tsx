'use client';
import React from 'react';

const ContentNewsletterSignup: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
      <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest AI and IT insights</p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;