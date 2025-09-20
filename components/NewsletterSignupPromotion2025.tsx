"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
MailArrowRightCheckCircleStarZapTrendingUpUsersAward

const NewsletterSignupPromotion2025 = () => {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isVisiblesetIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log('Email subscribed:'email);
    }
  };

  const benefits = [
    "Exclusive AI insights and trends",
    "Early access to new features",
    "Industry reports and case studies",
    "Expert webinars and workshops",
    "Special offers and discounts"
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />value: "50,000+"label: "Subscribers" },
    { icon: <Star className="w-6 h-6" />value: "4.9/5"label: "Rating" },
    { icon: <TrendingUp className="w-6 h-6" />value: "95%"label: "Open Rate" },
    { icon: <Award className="w-6 h-6" />value: "Weekly"label: "Updates" }
  ];

  if (isSubscribed) {
    return (
      <div className="py-16 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0scale: 0.8 }}
            animate={{ opacity: 1scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              'You', 're now part of our exclusive community. Check your email for a special welcome gift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Explore Our Solutions
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Follow Us on Social
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0x: -30 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              <span>EXCLUSIVE ACCESS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead of the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                AI Revolution
              </span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90">
              Get exclusive insightsearly access to breakthrough technologiesand expert analysis delivered directly to your inbox.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefitindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0x: -20 }}
                  animate={isVisible ? { opacity: 1x: 0 } : {}}
                  transition={{ duration: 0.5delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((statindex) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-white mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Signup Form */}
          <motion.div
            initial={{ opacity: 0x: 30 }}
            animate={isVisible ? { opacity: 1x: 0 } : {}}
            transition={{ duration: 0.8delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Join Our Community
              </h3>
              <p className="text-gray-600">
                Get the latest AI insights and exclusive content
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Subscribe Now
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                By subscribingyou agree to our privacy policy. Unsubscribe at any time.
              </p>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex justify-center items-center gap-6 opacity-60">
                {["Microsoft"Google"Amazon"IBM"].map((companyindex) => (
                  <div key={index} className="text-gray-500 font-semibold text-sm">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupPromotion2025;
