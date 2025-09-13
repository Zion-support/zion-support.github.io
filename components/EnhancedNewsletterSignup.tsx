import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  CheckIcon,
  SparklesIcon,
  GiftIcon,
  DocumentTextIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

export default function EnhancedNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const benefits = [
    {
      icon: "📚",
      title: "Free AI Implementation Guide",
      description: "Get our comprehensive 150+ page guide with templates and strategies"
    },
    {
      icon: "🚀",
      title: "Exclusive AI Breakthrough Updates",
      description: "Be the first to know about revolutionary AI innovations and breakthroughs"
    },
    {
      icon: "💰",
      title: "Startup Funding Insights",
      description: "Access to funding opportunities and investor connection strategies"
    },
    {
      icon: "🏆",
      title: "Case Studies & Success Stories",
      description: "Real-world examples of AI transformation and measurable results"
    }
  ];

  const stats = [
    { number: "50K+", label: "Subscribers" },
    { number: "95%", label: "Satisfaction Rate" },
    { number: "24h", label: "Response Time" },
    { number: "Free", label: "Premium Content" }
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to the AI Revolution! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for subscribing! You'll receive our exclusive AI insights, breakthrough updates, 
              and free resources within the next few minutes.
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What's Next?</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  Check your email for the AI Implementation Master Guide (150+ pages)
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  Weekly AI breakthrough updates and industry insights
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  Exclusive access to funding opportunities and investor connections
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-600" />
                  Invitation to our private AI transformation community
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm text-purple-300 rounded-full px-6 py-3 mb-8 border border-purple-500/30"
          >
            <SparklesIcon className="h-5 w-5 mr-2 animate-pulse" />
            <span className="text-sm font-bold">🚀 JOIN THE AI REVOLUTION</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get Exclusive AI Insights & Free Resources
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Join 50,000+ AI professionals and entrepreneurs getting exclusive access to breakthrough insights, 
            implementation guides, and funding opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              What You'll Get as a Subscriber:
            </h3>
            
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GiftIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Get Instant Access
              </h3>
              <p className="text-gray-600">
                Join now and get immediate access to our free AI resources
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Subscribing...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <SparklesIcon className="h-5 w-5" />
                    Join the AI Revolution
                  </div>
                )}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By subscribing, you agree to receive our newsletter and marketing communications. 
              You can unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}