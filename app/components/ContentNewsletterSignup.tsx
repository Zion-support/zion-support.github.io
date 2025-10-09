'use client';

import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email.includes('@')) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to Our Content Community!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            You'll receive our latest AI insights, enterprise transformation guides, and breakthrough content directly in your inbox.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Next?</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li>✅ Weekly AI trend reports</li>
              <li>✅ Exclusive enterprise case studies</li>
              <li>✅ Early access to new content</li>
              <li>✅ Invitation to expert webinars</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-6">📧</div>
        <h2 className="text-4xl font-bold text-white mb-4">
          Stay Ahead with AI Insights
        </h2>
        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Get exclusive access to our latest AI breakthroughs, enterprise transformation guides, 
          and cutting-edge content that's transforming businesses worldwide.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Join 10,000+ Enterprise Leaders
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Get Free Content'}
              </button>
            </div>
            
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
          </form>

          <div className="mt-6 text-sm text-gray-600">
            <p>🔒 We respect your privacy. Unsubscribe at any time.</p>
          </div>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🚀</div>
              <div>
                <h4 className="font-semibold text-gray-900">Latest AI Trends</h4>
                <p className="text-sm text-gray-600">Weekly insights on breakthrough technologies</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">💼</div>
              <div>
                <h4 className="font-semibold text-gray-900">Enterprise Guides</h4>
                <p className="text-sm text-gray-600">Proven strategies from Fortune 500 companies</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🎯</div>
              <div>
                <h4 className="font-semibold text-gray-900">Exclusive Content</h4>
                <p className="text-sm text-gray-600">Early access to premium resources</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-indigo-100 mb-4">Trusted by leading enterprises</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-white font-bold text-lg">Fortune 500</div>
            <div className="text-white font-bold text-lg">Global 2000</div>
            <div className="text-white font-bold text-lg">Enterprise</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;