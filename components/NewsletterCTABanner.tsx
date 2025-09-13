import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterCTABanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Ahead of the AI Revolution
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get exclusive access to breakthrough technologies, implementation guides, and early beta programs. Join 50,000+ innovators transforming their industries.
          </p>
        </motion.div>

        {!isSubscribed ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Get Early Access'}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto"
          >
            <div className="text-green-400 text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-white mb-2">Welcome to the Future!</h3>
            <p className="text-gray-300">
              You're now part of our exclusive community. Check your email for next steps.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">50,000+</div>
            <div className="text-white text-sm">Innovators</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">Weekly</div>
            <div className="text-white text-sm">Updates</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">Exclusive</div>
            <div className="text-white text-sm">Beta Access</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsletterCTABanner;