import React from 'react';

const ContentNewsletterSignup: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
      <p className="text-gray-300 mb-6">Get the latest news and updates from Zion Tech Group</p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        />
        <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;
