import React from 'react';

const ContentNewsletterSignup: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-cyan-600 to-purple-700">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-200 mb-8">Get the latest AI insights and updates</p>
        <div className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
            />
            <button className="bg-white text-cyan-600 px-6 py-2 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;
