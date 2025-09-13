'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  Star,
  Sparkles,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Zap
} from 'lucide-react';

const NewsletterSignup2025 = () => {
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
  };

  const benefits = [
    "Exclusive AI insights and trends",
    "Early access to new features",
    "Weekly success stories and case studies",
    "Free AI tools and resources",
    "Expert tips and best practices",
    "Invitation to exclusive webinars"
  ];

  const stats = [
    { label: "Subscribers", value: "50K+", icon: Users },
    { label: "Open Rate", value: "68%", icon: TrendingUp },
    { label: "Satisfaction", value: "4.9/5", icon: Star },
    { label: "Weekly Content", value: "3x", icon: Zap }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

  if (isSubscribed) {
    return (
      <motion.div
        className="relative py-20 px-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              You've successfully joined our exclusive community. Get ready for 
              revolutionary AI insights delivered straight to your inbox.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSubscribed(false)}
            >
              Subscribe Another Email
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-pink-600/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-white"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">AI Newsletter 2025</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Stay Ahead of the
              <span className="block text-yellow-300">
                AI Revolution
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get exclusive access to the latest AI insights, breakthrough technologies, 
              and success stories from industry leaders. Join 50,000+ professionals 
              who are already transforming their businesses.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <Mail className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-white mb-2">
                  Join the AI Revolution
                </h3>
                <p className="text-white/80">
                  Get started with our exclusive newsletter today
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                  {isLoading ? 'Subscribing...' : 'Subscribe Now'}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </motion.button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-white/70">
                  By subscribing, you agree to our privacy policy. 
                  Unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup2025;