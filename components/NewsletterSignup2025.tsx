'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Star, 
  Users, 
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Rocket,
  Award,
  Globe,
  ArrowRight,
  X
} from 'lucide-react';

const NewsletterSignup2025 = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitting(false);
    setIsSubscribed(true);
    setShowModal(true);
    setEmail('');
  };

  const benefits = [
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Latest AI breakthroughs and trends'
    },
    {
      icon: Rocket,
      title: 'Future Tech',
      description: 'Quantum computing and neural interfaces'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Industry trends and predictions'
    },
    {
      icon: Shield,
      title: 'Security Updates',
      description: 'Cybersecurity and privacy insights'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Subscribers' },
    { number: '99.9%', label: 'Delivery Rate' },
    { number: '4.9/5', label: 'Rating' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-20" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Mail className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">Newsletter 2025</span>
                <Star className="w-4 h-4 text-yellow-400 ml-2" />
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Stay Ahead with <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Future Tech</span> Insights
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Get exclusive access to the latest AI breakthroughs, quantum computing developments, and future technology innovations delivered directly to your inbox.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-1">{benefit.title}</h3>
                        <p className="text-gray-300 text-sm">{benefit.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 pt-6 border-t border-white/10">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join Our Community</h3>
                  <p className="text-gray-300">Get weekly insights and exclusive content</p>
                </div>

                {/* Signup Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        <span>Subscribe Now</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>50K+ Subscribers</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      <span>Trusted</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center"
                >
                  <Zap className="w-8 h-8 text-purple-400" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center"
                >
                  <Globe className="w-6 h-6 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Welcome Aboard!</h3>
                  <p className="text-gray-300 mb-6">
                    You've successfully subscribed to our newsletter. Check your email for a confirmation link.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <span>Got it!</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NewsletterSignup2025;