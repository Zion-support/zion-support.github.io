import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, StarIcon, FireIcon, BoltIcon } from '@heroicons/react/24/outline';

const NewContentShowcase2025PromotionBanner = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <FireIcon className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold">NEW 2025 CONTENT</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Revolutionary
              <span className="block text-yellow-400">AI Solutions</span>
              <span className="block">Now Available</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Discover cutting-edge AI automation, quantum computing, and neural interface technologies that are transforming industries worldwide. Get exclusive access to our latest innovations.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-2">
                <BoltIcon className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <FireIcon className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Trending Now</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25 flex items-center justify-center">
                Explore New Content
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-sm text-blue-100">New AI Models</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-sm text-blue-100">Success Rate</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-sm text-blue-100">Support</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10x</div>
              <div className="text-sm text-blue-100">Performance Boost</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Limited Time: Get 50% Off Your First Month
            </h3>
            <p className="text-blue-100 mb-6">
              Join thousands of businesses already transforming with our AI solutions. Offer expires in 7 days.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25">
              Claim Your Discount Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025PromotionBanner;