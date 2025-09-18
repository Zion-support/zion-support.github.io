<<<<<<< HEAD
"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail
  CheckCircle
  X
  Sparkles,
  Bell,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Brain,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const NewsletterSignup2026 = () => {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);
  const [errorsetError] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }[]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(', ');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve2000));
      
      // Simulate success
      setIsSubscribed(true);
      setEmail(', ');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const benefits = [
    {
      icon: Brain,
      title: 'AI Breakthrough Alerts',
      description: 'Get notified about the latest AI breakthroughs and research'
    },
    {
      icon: TrendingUp,
      title: 'Trending Content',
      description: 'Weekly digest of the most popular and trending articles'
    },
    {
      icon: Target,
      title: 'Personalized Recommendations',
      description: 'AI-powered content recommendations based on your interests'
    },
    {
      icon: Zap,
      title: 'Exclusive Early Access',
      description: 'Be the first to access new content and features'
    }
  ];

  const stats = [
    { number: '50K+'label: 'Subscribers' },
    { number: '4.9/5'label: 'Rating' },
    { number: '24/7'label: 'Updates' },
    { number: '100%'label: 'Free' }
  ];

  if (!isVisible || isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-purple-500/20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/600')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            animate={{
              x: [0Math.random() * 200 - 100],
              y: [0Math.random() * 200 - 100],
              scale: [010],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0x: -30 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
              <Bell className="w-4 h-4 mr-2" />
              NEWSLETTER 2026
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Ahead of the
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 50,000+ innovatorsresearchersand technology leaders who get exclusive access 
              to the latest AI breakthroughsautomation insightsand future predictions.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefitindex) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((statindex) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0scale: 0.8 }}
                  animate={{ opacity: 1scale: 1 }}
                  transition={{ duration: 0.6delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Newsletter Form */}
          <motion.div
            initial={{ opacity: 0x: 30 }}
            animate={{ opacity: 1x: 0 }}
            transition={{ duration: 0.8delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0scale: 0.9 }}
                  animate={{ opacity: 1scale: 1 }}
                  exit={{ opacity: 0scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Get Started Today
                    </h3>
                    <p className="text-gray-300">
                      Enter your email to join our exclusive community
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm"
                      >
                        {error}
                      </motion.div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Rocket className="w-5 h-5 mr-2" />
                          Subscribe Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center text-sm text-gray-400">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>We respect your privacy. Unsubscribe at any time.</span>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0scale: 0.9 }}
                  animate={{ opacity: 1scale: 1 }}
                  exit={{ opacity: 0scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Welcome to the Future! 🚀
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    'You', 're now part of our exclusive community. Check your email for a confirmation 
                    and get ready for amazing content delivered to your inbox.
                  </p>

                  <div className="bg-white/10 rounded-lg p-4 mb-6">
                    <h4 className="text-white font-medium mb-2">'What', 's Next?</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Confirmation email within 5 minutes</li>
                      <li>• First newsletter tomorrow morning</li>
                      <li>• Access to exclusive content library</li>
                      <li>• Invitation to our private Discord</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                  >
                    Subscribe another email
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join the AI Revolution Today
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              'Don', 't miss out on the most important technological shift of our lifetime. 
              Be part of the community 'that', 's shaping the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                4.9/5 rating from subscribers
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1 text-blue-400" />
                50,000+ active subscribers
              </div>
              <div className="flex items-center">
                <Lightbulb className="w-4 h-4 mr-1 text-purple-400" />
                Weekly exclusive insights
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup2026;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
