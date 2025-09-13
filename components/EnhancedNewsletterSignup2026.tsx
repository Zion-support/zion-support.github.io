'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  Rocket, 
  Target,
  Award,
  Users,
  Globe,
  TrendingUp,
  Bell,
  Gift,
  Shield,
  Lock,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';

const EnhancedNewsletterSignup2026 = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [showInterests, setShowInterests] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const interests = [
    { id: 'ai-breakthroughs', name: 'AI Breakthroughs', icon: <Brain className="w-5 h-5" />, color: 'from-purple-600 to-pink-600' },
    { id: 'quantum-computing', name: 'Quantum Computing', icon: <Zap className="w-5 h-5" />, color: 'from-blue-600 to-cyan-600' },
    { id: 'enterprise-solutions', name: 'Enterprise Solutions', icon: <Rocket className="w-5 h-5" />, color: 'from-green-600 to-emerald-600' },
    { id: 'future-predictions', name: 'Future Predictions', icon: <TrendingUp className="w-5 h-5" />, color: 'from-orange-600 to-red-600' },
    { id: 'neural-interfaces', name: 'Neural Interfaces', icon: <Target className="w-5 h-5" />, color: 'from-indigo-600 to-purple-600' },
    { id: 'automation', name: 'AI Automation', icon: <Award className="w-5 h-5" />, color: 'from-pink-600 to-rose-600' }
  ];

  const benefits = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Weekly AI Insights',
      description: 'Get the latest breakthrough news delivered to your inbox'
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Exclusive Content',
      description: 'Access to premium content and early releases'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Community',
      description: 'Join 2.3M+ AI professionals and enthusiasts'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Privacy Protected',
      description: 'Your data is secure and never shared'
    }
  ];

  const stats = [
    { number: '2.3M+', label: 'Subscribers', icon: <Users className="w-5 h-5" /> },
    { number: '99.9%', label: 'Satisfaction', icon: <Star className="w-5 h-5" /> },
    { number: '24/7', label: 'AI Support', icon: <Globe className="w-5 h-5" /> },
    { number: '10K+', label: 'Content Pieces', icon: <Brain className="w-5 h-5" /> }
  ];

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (!isVisible) return null;

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="w-8 h-8 text-green-600" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to the Future!
          </h3>
          <p className="text-gray-600 mb-6">
            You're now part of our exclusive AI community. Get ready for breakthrough insights and revolutionary content.
          </p>
          
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 text-white mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Welcome Bonus</span>
            </div>
            <p className="text-sm opacity-90">
              Get instant access to our premium AI implementation guide worth $2,997
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVisible(false)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold"
          >
            Start Exploring
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white rounded-2xl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-white/20 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              Join 2.3M+ AI Professionals
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Stay Ahead of the{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-200 leading-relaxed"
            >
              Get exclusive access to breakthrough AI technologies, future predictions, 
              and enterprise solutions that are transforming the world.
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="p-2 bg-white/20 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Get Started Today
              </h3>
              <p className="text-gray-200">
                Join our exclusive community and unlock the future of AI
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-6">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>

              {/* Interest Selection */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowInterests(!showInterests)}
                  className="w-full flex items-center justify-between p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white hover:bg-white/30 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Select Your Interests ({selectedInterests.length})
                  </span>
                  <ArrowRight className={`w-5 h-5 transition-transform ${showInterests ? 'rotate-90' : ''}`} />
                </button>

                <AnimatePresence>
                  {showInterests && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-2"
                    >
                      {interests.map((interest) => (
                        <motion.button
                          key={interest.id}
                          type="button"
                          onClick={() => handleInterestToggle(interest.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                            selectedInterests.includes(interest.id)
                              ? 'bg-white/30 text-white'
                              : 'bg-white/10 text-gray-300 hover:bg-white/20'
                          }`}
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${interest.color}`}>
                            {interest.icon}
                          </div>
                          <span className="font-medium">{interest.name}</span>
                          {selectedInterests.includes(interest.id) && (
                            <CheckCircle className="w-5 h-5 text-green-400 ml-auto" />
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Privacy Notice */}
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  We respect your privacy. Unsubscribe at any time. 
                  <span className="text-yellow-400"> No spam, ever.</span>
                </span>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading || !email}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Join the Revolution
                  </>
                )}
              </motion.button>
            </form>

            {/* Stats */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-yellow-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedNewsletterSignup2026;