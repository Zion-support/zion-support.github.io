'use client';
import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

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
      <section className="py-16 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-800/50 rounded-2xl p-12 border border-green-500/20">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Thank you for subscribing! You'll receive our latest AI insights, tech updates, and exclusive offers.
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-400">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">You're all set!</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/50 rounded-2xl p-12 border border-cyan-500/20 text-center">
          <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Ahead with AI Insights
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest AI trends, tech updates, and exclusive insights delivered to your inbox. 
            Join 10,000+ professionals who trust us for cutting-edge technology news.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">No spam, ever</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Unsubscribe anytime</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-sm">Weekly insights</span>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>
              By subscribing, you agree to our{' '}
              <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Privacy Policy
              </a>
              {' '}and{' '}
              <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;