"use client";
import React{ useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

export default function NewsletterSignup({ variant = ', 'default', 'className = ', ' }: NewsletterSignupProps) {
  const [emailsetEmail] = useState('');
  const [isSubmittingsetIsSubmitting] = useState(false);
  const [isSubscribedsetIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail(', ');
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup: React.FC = () => {
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
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
  };

  if (isSubscribed) {
    return (
      <div className={`text-center p-6 bg-green-50 border border-green-200 rounded-lg ${className}`}>
        <div className="text-green-600 text-4xl mb-4">✅</div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Successfully Subscribed!</h3>
        <p className="text-green-700">Thank you for joining our newsletter. 'You', 'll receive our latest AI insights and updates.</p>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl ${className}`}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">🚀 Stay Ahead with AI Insights</h2>
          <p className="text-xl opacity-90 mb-6">
            Get exclusive access to breakthrough AI contentcase studiesand implementation guides.
          </p>
        </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-4">Welcome to the Future!</h3>
        <p className="text-lg opacity-90">
          You're now subscribed to our exclusive newsletter. Get ready for the latest breakthroughs in AI, quantum computing, and neural interfaces.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/50 to-pink-600/50 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4 animate-pulse">
            📧 EXCLUSIVE NEWSLETTER
          </div>
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get exclusive access to the latest breakthroughs in AI, quantum computing, neural interfaces, and space technology. 
            Join 50,000+ innovators who are shaping the future.
          </p>
        </div>

e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe Now →'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm opacity-75">
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🚀</div>
            <div className="font-semibold">Weekly Updates</div>
            <div className="text-sm opacity-75">Latest tech breakthroughs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold">Exclusive Content</div>
            <div className="text-sm opacity-75">Insider insights & analysis</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl mb-2">💡</div>
            <div className="font-semibold">Early Access</div>
            <div className="text-sm opacity-75">Be first to know about new products</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">📧</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Our AI Newsletter</h2>
        <p className="text-gray-600">
          Weekly insights on AI trendscase studiesand implementation strategies. 
          Join 25,000+ professionals transforming their businesses.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
        </button>
        <p className="text-xs text-gray-500 mt-3 text-center">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </form>
    </div>
  );
}
    </motion.div>
  );
};

export default NewsletterSignup;
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
