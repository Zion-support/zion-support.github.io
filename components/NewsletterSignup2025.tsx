'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, Star, Users, TrendingUp, Sparkles, Zap, Brain } from 'lucide-react';

const NewsletterSignup2025 = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      console.log('Newsletter signup:', email);
    }
  };

  const benefits = [
    {
      icon: Star,
      title: 'Exclusive Content',
      description: 'Get access to premium articles and insights'
    },
    {
      icon: TrendingUp,
      title: 'Latest Trends',
      description: 'Stay updated with cutting-edge technology trends'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Join our network of industry professionals'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Be the first to know about new features and releases'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Subscribers' },
    { number: '99%', label: 'Satisfaction' },
    { number: '24/7', label: 'Support' },
    { number: '100%', label: 'Free' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-purple-300 font-medium">Stay Connected</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
                Join Our Newsletter
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Get the latest insights, breakthroughs, and exclusive content delivered 
                directly to your inbox. Join thousands of professionals staying ahead 
                of the technology curve.
              </p>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-white/5 rounded-lg border border-white/10"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-white/5 rounded-lg border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Newsletter Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <AnimatePresence mode="wait">
                  {!isSubscribed ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Get Started Today
                        </h3>
                        <p className="text-gray-300">
                          Enter your email to join our community
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="email" className="block text-white font-medium mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                            required
                          />
                        </div>

                        <motion.button
                          type="submit"
                          className="w-full group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Subscribe Now</span>
                          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <p className="text-gray-400 text-sm text-center">
                          We respect your privacy. Unsubscribe at any time.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <Check className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Welcome Aboard! 🎉
                      </h3>
                      
                      <p className="text-gray-300 mb-6">
                        Thank you for subscribing! You'll receive our latest updates and 
                        exclusive content in your inbox soon.
                      </p>
                      
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="flex items-center justify-center space-x-2 text-green-400">
                          <Check className="w-5 h-5" />
                          <span className="font-medium">Subscription Confirmed</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsletterSignup2025;