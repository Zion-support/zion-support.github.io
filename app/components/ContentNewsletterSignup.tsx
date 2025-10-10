'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsSubmitting(false);
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Subscribing!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              You'll receive our latest insights on AI and IT solutions directly in your inbox.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to our latest AI and IT solutions, industry insights, and expert tips delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Subscribing...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 text-sm text-gray-400">
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Weekly</div>
              <div className="text-gray-300">Insights & Updates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Exclusive</div>
              <div className="text-gray-300">Content & Resources</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">No Spam</div>
              <div className="text-gray-300">Quality Content Only</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;