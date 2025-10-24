'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function ContentNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-green-600">
          Thank you for subscribing to our newsletter.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Stay Updated
      </h3>
      <p className="text-gray-600 mb-4">
        Get the latest insights and updates from Zion Tech Group.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
        >
          Subscribe
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}