'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, Star, Zap, TrendingUp } from 'lucide-react';

const NewsletterSignup2025 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');
    }, 2000);
  };

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      text: "Exclusive AI insights and breakthroughs"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      text: "Latest industry trends and predictions"
    },
    {
      icon: <Star className="w-6 h-6 text-purple-400" />,
      text: "Early access to new features and tools"
    }
  ];

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Check className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Future!</h3>
        <p className="text-gray-300 mb-6">
          You're now subscribed to our exclusive newsletter. Check your email for confirmation.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-green-400 hover:text-green-300 font-medium"
        >
          Subscribe Another Email
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 border border-purple-500/20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
            <Mail className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-sm font-medium text-blue-200">Stay Updated</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get exclusive access to the latest AI breakthroughs, industry insights, 
            and cutting-edge technology updates delivered straight to your inbox.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg"
            >
              {benefit.icon}
              <span className="text-gray-300 text-sm">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  Subscribe
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
          
          <p className="text-sm text-gray-400">
            By subscribing, you agree to our privacy policy. Unsubscribe at any time.
          </p>
        </motion.form>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">50K+</div>
            <div className="text-sm text-gray-400">Subscribers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">99%</div>
            <div className="text-sm text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-1">Weekly</div>
            <div className="text-sm text-gray-400">Updates</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsletterSignup2025;