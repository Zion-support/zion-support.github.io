import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FuturisticHero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Futuristic Hero - Zion Tech Group</title>
        <meta name="description" content="Experience the future of technology with our cutting-edge AI and IT solutions." />
      </Helmet>
      
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  Welcome to the{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Experience cutting-edge AI and IT solutions that transform businesses and drive innovation.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <Brain className="w-6 h-6 text-cyan-400" />
                  <span className="text-white font-medium">AI Powered</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <span className="text-white font-medium">Lightning Fast</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <Shield className="w-6 h-6 text-green-400" />
                  <span className="text-white font-medium">Secure</span>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Floating cards */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-6">
                  <Brain className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                  <p className="text-sm text-gray-300">Machine Learning & Analytics</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-32 left-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-6">
                  <Shield className="w-8 h-8 text-purple-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                  <p className="text-sm text-gray-300">Cybersecurity & Compliance</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-64 h-40 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-green-500/30"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="p-6">
                  <Zap className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="text-lg font-bold text-white mb-2">Performance</h3>
                  <p className="text-sm text-gray-300">Optimized & Scalable</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FuturisticHero;