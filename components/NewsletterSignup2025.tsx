'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Check, 
  X, 
  Bell, 
  Star, 
  Users, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Gift,
  Shield,
  Clock
} from 'lucide-react';

const NewsletterSignup2025 = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    } else {
      setError('Please enter a valid email address');
    }

    setIsLoading(false);
  };

  const benefits = [
    {
      icon: Bell,
      title: 'Weekly Updates',
      description: 'Get the latest content delivered to your inbox every week'
    },
    {
      icon: Star,
      title: 'Exclusive Content',
      description: 'Access to premium articles and early access to new features'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our exclusive community of professionals and experts'
    },
    {
      icon: TrendingUp,
      title: 'Industry Insights',
      description: 'Stay ahead with curated industry trends and analysis'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Subscribers' },
    { number: '95%', label: 'Open Rate' },
    { number: '4.9/5', label: 'Rating' },
    { number: '24h', label: 'Response Time' }
  ];

  if (!isVisible) return null;

  if (isSubscribed) {
    return (
      <div className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Our Community! 🎉
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              Thank you for subscribing! You'll receive our weekly newsletter with the latest insights, tutorials, and industry updates.
            </p>
            
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 mb-2">What's Next?</h3>
              <ul className="text-green-700 space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-600" />
                  Check your email for a confirmation link
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-600" />
                  Follow us on social media for daily updates
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-600" />
                  Explore our content library
                </li>
              </ul>
            </div>
            
            <button
              onClick={() => setIsSubscribed(false)}
              className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              Subscribe Another Email
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            >
              <Gift className="w-4 h-4 mr-2 text-yellow-400" />
              Free Weekly Newsletter
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Stay Ahead with Our
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Weekly Newsletter
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Get exclusive access to the latest AI insights, automation strategies, cloud solutions, and security innovations. Join thousands of professionals staying ahead of the curve.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="p-2 rounded-lg bg-white/10 mr-4 flex-shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-blue-200 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Join Our Community</h3>
              <p className="text-blue-200">Get started in less than 30 seconds</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                {error && (
                  <div className="flex items-center mt-2 text-red-400 text-sm">
                    <X className="w-4 h-4 mr-2" />
                    {error}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              <div className="flex items-center text-blue-200 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                <span>We respect your privacy. Unsubscribe at any time.</span>
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center space-x-6 text-blue-200 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Weekly delivery</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1" />
                  <span>Secure & private</span>
                </div>
                <div className="flex items-center">
                  <X className="w-4 h-4 mr-1" />
                  <span>Easy unsubscribe</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup2025;