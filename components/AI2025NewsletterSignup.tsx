'use client';

import React, { useState } from 'react';

export default function AI2025NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-3xl font-bold mb-4">Welcome to the Revolution!</h3>
        <p className="text-xl opacity-90 mb-6">
          You're now part of the AI 2025 breakthrough community. Get ready for exclusive content and updates.
        </p>
        <div className="bg-white/20 rounded-lg p-4">
          <p className="text-sm">
            Check your email for confirmation and exclusive access to our revolutionary AI resources.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🚀</div>
        <h3 className="text-3xl font-bold mb-4">Join the AI 2025 Revolution</h3>
        <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
          Get exclusive access to breakthrough AI content, success stories, and revolutionary insights 
          that are transforming businesses worldwide.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Joining...' : 'Join Revolution'}
          </button>
        </div>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">📧</div>
          <h4 className="font-semibold mb-2">Exclusive Content</h4>
          <p className="text-sm opacity-90">
            Get access to breakthrough AI content before anyone else
          </p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">🎯</div>
          <h4 className="font-semibold mb-2">Success Stories</h4>
          <p className="text-sm opacity-90">
            Real case studies and ROI success stories from our clients
          </p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">🛠️</div>
          <h4 className="font-semibold mb-2">Tools & Resources</h4>
          <p className="text-sm opacity-90">
            Interactive tools and implementation guides for your business
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm opacity-75">
          Join 10,000+ business leaders already transforming with AI 2025
        </p>
      </div>
    </div>
  );
}