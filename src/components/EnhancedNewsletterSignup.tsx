import React from 'react';

const EnhancedNewsletterSignup: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-8">Get the latest insights and updates from Zion Tech Group</p>
        <div className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedNewsletterSignup;
