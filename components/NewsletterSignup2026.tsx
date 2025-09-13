import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, CheckCircleIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const NewsletterSignup2026 = () => {
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
    "Industry reports and case studies",
    "Special offers and discounts",
    "Weekly tech newsletter"
  ];

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur-lg rounded-3xl p-12 border border-white/30"
          >
            <CheckCircleIcon className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome to the Future!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              You've successfully subscribed to our newsletter. Check your email for confirmation and exclusive content.
            </p>
            <button
              onClick={() => setIsSubscribed(false)}
              className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Subscribe Another Email
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <SparklesIcon className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">NEWSLETTER 2026</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stay Ahead with
              <span className="block text-yellow-400">Exclusive Insights</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Get the latest AI breakthroughs, quantum computing advances, and neural interface developments delivered directly to your inbox. Join 50,000+ tech leaders.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-4 text-sm text-blue-100">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span>50,000+ subscribers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  <span>No spam, ever</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Join the Revolution
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 text-yellow-400 bg-white/20 border-white/30 rounded focus:ring-yellow-400"
                  required
                />
                <label htmlFor="terms" className="text-sm text-blue-100">
                  I agree to receive marketing emails and understand that I can unsubscribe at any time.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Subscribe Now
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </div>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-blue-100">
                🔒 Your email is safe with us. We never share your data.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-blue-100 mb-6">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
            <div className="text-white font-bold text-lg">TechCorp</div>
            <div className="text-white font-bold text-lg">FinanceFlow</div>
            <div className="text-white font-bold text-lg">HealthTech</div>
            <div className="text-white font-bold text-lg">AutoDrive</div>
            <div className="text-white font-bold text-lg">CloudScale</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSignup2026;