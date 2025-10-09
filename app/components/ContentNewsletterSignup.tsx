'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 2000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center mb-16">
        <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-green-100 text-lg">
          You've successfully subscribed to our newsletter. Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Mail className="w-12 h-12 text-cyan-400 mr-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stay Updated
          </h2>
        </div>
        
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest insights on AI technology, industry trends, and exclusive offers 
          delivered directly to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-600 text-white placeholder-gray-400 border border-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-sm text-gray-400">
          <p>Join 10,000+ subscribers. Unsubscribe at any time.</p>
          <p className="mt-2">
            We respect your privacy and will never share your email address.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📧</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Weekly Updates</h4>
            <p className="text-gray-400 text-sm">Latest AI trends and insights</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🎁</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Exclusive Offers</h4>
            <p className="text-gray-400 text-sm">Special discounts and promotions</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📚</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Expert Resources</h4>
            <p className="text-gray-400 text-sm">Guides, whitepapers, and case studies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;