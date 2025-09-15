"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center p-8 bg-green-50 border border-green-200 rounded-lg ${className}`}
      >
        <div className="text-green-600 text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Successfully Subscribed!</h3>
        <p className="text-green-600">Thank you for joining our newsletter.</p>
      </motion.div>
    );
  }

  const baseClasses = "w-full max-w-md mx-auto";
  const variantClasses = {
    default: "p-8 bg-white border border-gray-200 rounded-lg shadow-lg",
    compact: "p-4 bg-gray-50 border border-gray-200 rounded-md",
    hero: "p-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl shadow-2xl"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="text-center mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${variant === 'hero' ? 'text-white' : 'text-gray-900'}`}>
          Stay Updated
        </h2>
        <p className={`${variant === 'hero' ? 'text-purple-100' : 'text-gray-600'}`}>
          Get the latest news and updates delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              variant === 'hero' 
                ? 'bg-white/20 border-white/30 text-white placeholder-white/70 focus:border-white focus:ring-white/50' 
                : 'border-gray-300 focus:border-purple-500 focus:ring-purple-500/20'
            } focus:outline-none focus:ring-2 transition-colors`}
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
            variant === 'hero'
              ? 'bg-white text-purple-600 hover:bg-purple-50'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
              Subscribing...
            </div>
          ) : (
            'Subscribe Now'
          )}
        </motion.button>
      </form>

      <p className={`text-xs mt-4 text-center ${variant === 'hero' ? 'text-purple-100' : 'text-gray-500'}`}>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  );
}