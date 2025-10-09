'use client';
import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Zap, Star, TrendingUp, Users } from 'lucide-react';

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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Exclusive AI insights and tips"
    },
    {
      icon: <Star className="w-5 h-5" />,
      text: "Early access to new features"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Industry trends and analysis"
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Join our community of innovators"
    }
  ];

  if (isSubscribed) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-2xl p-8 cyber-card">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Welcome to the Future!
              </h3>
              <p className="text-gray-300 mb-6">
                You've successfully subscribed to our newsletter. Get ready for exclusive AI insights, 
                industry trends, and early access to our latest innovations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 text-green-400">
                    {benefit.icon}
                    <span className="text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 md:p-12 cyber-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white neon-text">
                    Stay Ahead of the Curve
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Get exclusive access to the latest AI innovations, industry insights, 
                    and cutting-edge solutions delivered directly to your inbox.
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-300 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">10K+</div>
                    <div className="text-xs text-gray-400">Subscribers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-400">Weekly</div>
                    <div className="text-xs text-gray-400">Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">Free</div>
                    <div className="text-xs text-gray-400">Forever</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center space-x-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cyber-button inline-flex items-center justify-center py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe Now
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>

                <div className="text-center">
                  <p className="text-xs text-gray-400">
                    By subscribing, you agree to our{' '}
                    <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Privacy Policy
                    </a>
                    {' '}and{' '}
                    <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Terms of Service
                    </a>
                    . Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;