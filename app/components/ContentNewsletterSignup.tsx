'use client';
import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

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
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-cyan-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cyber-card p-8">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-gray-300 text-lg">
              You'll receive our latest updates and exclusive content directly in your inbox.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cyber-card p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-12 h-12 text-cyan-400 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              Stay Updated
            </h2>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights, updates, and exclusive content about AI technology, 
            business automation, and digital transformation delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 border border-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="cyber-button flex items-center justify-center space-x-2 px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm text-gray-400">
            <p>Join 10,000+ subscribers. No spam, unsubscribe at any time.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Weekly</div>
              <div className="text-gray-300">AI Insights</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Exclusive</div>
              <div className="text-gray-300">Content</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Free</div>
              <div className="text-gray-300">Resources</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;
