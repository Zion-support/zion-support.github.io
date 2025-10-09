'use client';

import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest News
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Get the latest insights, updates, and exclusive content delivered to your inbox.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-600"
                required
              />
              <button
                type="submit"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <div className="text-white">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-xl">Thank you for subscribing!</p>
            </div>
          )}
          
          <p className="text-white opacity-75 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;