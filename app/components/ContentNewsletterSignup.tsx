'use client';
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Subscribe to our newsletter for the latest tech insights and company updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-900 flex-1"
          />
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;