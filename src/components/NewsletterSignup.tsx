<<<<<<< HEAD
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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
=======
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
>>>>>>> cursor/create-and-deploy-new-content-abae
  };

  if (isSubscribed) {
    return (
<<<<<<< HEAD
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center"
      >
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-4">Successfully Subscribed!</h3>
        <p className="text-lg opacity-90">
          Thank you for subscribing! You'll receive our latest tech insights and updates.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📧</div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
            Stay Ahead of the Tech Curve
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get exclusive access to our latest technology insights, breakthrough research, 
            and future predictions delivered directly to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
=======
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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
>>>>>>> cursor/create-and-deploy-new-content-abae
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
<<<<<<< HEAD
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-600"
=======
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
>>>>>>> cursor/create-and-deploy-new-content-abae
              required
            />
            <button
              type="submit"
<<<<<<< HEAD
              disabled={isLoading}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                'Subscribe Now'
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm opacity-80">
            Join 50,000+ tech enthusiasts who trust our insights
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Exclusive Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;
=======
              disabled={isSubmitting}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe Free'}
            </button>
          </div>
          <p className="text-sm opacity-75 mt-3 text-center">
            Join 25,000+ professionals. Unsubscribe anytime.
          </p>
        </form>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 p-6 rounded-lg border ${className}`}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-1">Get AI insights delivered weekly</h3>
            <p className="text-sm text-gray-600">Join 25,000+ professionals getting breakthrough AI content</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
          </form>
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
>>>>>>> cursor/create-and-deploy-new-content-abae
