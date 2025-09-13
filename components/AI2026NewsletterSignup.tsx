'use client';

import React, { useState } from 'react';

export default function AI2026NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-4">Welcome to the AI Revolution!</h3>
        <p className="text-lg opacity-90 mb-6">
          You're now subscribed to our AI 2026 breakthrough newsletter. Get ready for exclusive content, case studies, and implementation guides.
        </p>
        <div className="bg-white/20 rounded-lg p-4">
          <div className="text-sm font-semibold mb-2">What you'll receive:</div>
          <div className="text-sm opacity-90 space-y-1">
            <div>• Weekly AI breakthrough updates</div>
            <div>• Exclusive case studies with ROI data</div>
            <div>• Implementation guides and templates</div>
            <div>• Early access to new tools and resources</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📧</div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Join the AI 2026 Revolution
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get exclusive access to breakthrough AI content, case studies, and implementation guides that are transforming businesses worldwide.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Subscribing...
            </div>
          ) : (
            'Subscribe to AI Breakthroughs'
          )}
        </button>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl mb-2">🚀</div>
          <div className="font-semibold text-gray-900">Weekly Updates</div>
          <div className="text-sm text-gray-600">Latest AI breakthroughs</div>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold text-gray-900">Exclusive Case Studies</div>
          <div className="text-sm text-gray-600">Real ROI success stories</div>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">🛠️</div>
          <div className="font-semibold text-gray-900">Implementation Guides</div>
          <div className="text-sm text-gray-600">Step-by-step tutorials</div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          Join 10,000+ business leaders already transforming with AI
        </p>
      </div>
    </div>
  );
}