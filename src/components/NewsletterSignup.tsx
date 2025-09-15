import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterSignup: React.FC = () => {
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
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-center text-white"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2">Welcome to the Future!</h3>
        <p className="text-lg opacity-90">
          You're now subscribed to our revolutionary technology newsletter. 
          Get ready for mind-blowing updates!
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">📧</div>
          <h3 className="text-3xl font-bold mb-2">Stay Ahead of the Revolution</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get exclusive access to the latest breakthroughs in AI, Quantum Computing, 
            Neural Interfaces, and Synthetic Intelligence. Be the first to know about 
            revolutionary technologies that will change the world.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe Now'}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm opacity-80">
            Join 50,000+ innovators already subscribed. No spam, just pure innovation.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold">50K+</div>
            <div className="text-sm opacity-80">Subscribers</div>
          </div>
          <div>
            <div className="text-2xl font-bold">99%</div>
            <div className="text-sm opacity-80">Open Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Weekly</div>
            <div className="text-sm opacity-80">Updates</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Free</div>
            <div className="text-sm opacity-80">Forever</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;