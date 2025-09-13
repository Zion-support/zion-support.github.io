'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

const NewsletterSignup2025 = () => {
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

  const benefits = [
    {
      icon: Star,
      title: "Exclusive AI Insights",
      description: "Get early access to breakthrough AI research and predictions"
    },
    {
      icon: Zap,
      title: "Weekly Tech Updates",
      description: "Stay informed with the latest technology trends and innovations"
    },
    {
      icon: TrendingUp,
      title: "Success Stories",
      description: "Learn from real case studies and implementation strategies"
    }
  ];

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Welcome to the Future!</h3>
        <p className="text-gray-300 mb-6">
          You've successfully subscribed to our newsletter. Get ready for exclusive AI insights and breakthrough updates!
        </p>
        <div className="flex items-center justify-center space-x-2 text-green-400">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">Subscription Confirmed</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
          <Mail className="w-8 h-8 text-purple-400" />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">
          Stay Ahead of the AI Revolution
        </h3>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Get exclusive access to breakthrough AI insights, predictions, and success stories. 
          Join 50,000+ professionals who trust our expertise.
        </p>
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-3">
              <benefit.icon className="w-6 h-6 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
            <p className="text-gray-300 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Newsletter Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Trust Indicators */}
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>50,000+ Subscribers</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>No Spam</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Unsubscribe Anytime</span>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm mb-4">Trusted by leading companies worldwide</p>
        <div className="flex items-center justify-center space-x-8 opacity-60">
          <div className="text-2xl font-bold text-white">TechCorp</div>
          <div className="text-2xl font-bold text-white">FinanceFlow</div>
          <div className="text-2xl font-bold text-white">HealthTech</div>
          <div className="text-2xl font-bold text-white">RetailMax</div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup2025;