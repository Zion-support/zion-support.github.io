'use client';
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles } from 'lucide-react';

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
    }, 1500);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-slate-800 via-purple-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-cyan-400 mr-3 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              Stay Updated
            </h2>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest AI insights, industry trends, and exclusive offers delivered to your inbox. 
            Join 10,000+ professionals who trust our expertise.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-cyan-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="cyber-button px-6 py-3 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Subscribe</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="cyber-card p-8 max-w-md mx-auto">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-bold text-white mb-2">Successfully Subscribed!</h3>
              <p className="text-gray-300">
                Thank you for subscribing! You'll receive our latest updates and insights soon.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>10,000+ subscribers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;
