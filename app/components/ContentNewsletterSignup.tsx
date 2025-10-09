'use client';
import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-green-100">You've been successfully subscribed to our newsletter.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Latest AI Innovations
        </h2>
        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
          Get exclusive insights, case studies, and updates on the latest AI and IT solutions delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <button
            type="submit"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="text-indigo-200 text-sm mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;