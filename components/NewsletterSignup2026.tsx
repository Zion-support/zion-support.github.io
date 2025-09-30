import React, { useState } from 'react';

export default function NewsletterSignup2026() {
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
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Successfully Subscribed!</h3>
        <p className="text-green-700">
          Thank you for subscribing! You'll receive our latest AI insights and updates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Stay Ahead with AI Insights</h3>
        <p className="text-indigo-100">
          Get the latest AI trends, implementation guides, and success stories delivered to your inbox
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2 mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-indigo-200 mb-2">
            Join 10,000+ AI professionals getting our weekly insights
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-indigo-200">
            <span>✓ No spam, ever</span>
            <span>✓ Unsubscribe anytime</span>
            <span>✓ Free resources included</span>
          </div>
        </div>
      </form>
    </div>
  );
}