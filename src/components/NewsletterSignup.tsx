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
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center"
      >
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-4">Successfully Subscribed!</h3>
        <p className="text-lg opacity-90">
          Thank you for subscribing! You'll receive our latest tech insights and updates.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-8 text-white relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📧</div>
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
            Stay Ahead of the Tech Curve
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Get exclusive access to our latest technology insights, breakthrough research, 
            and future predictions delivered directly to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-600"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                'Subscribe Now'
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm opacity-80">
            Join 50,000+ tech enthusiasts who trust our insights
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Weekly Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Exclusive Content</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              <span>No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;