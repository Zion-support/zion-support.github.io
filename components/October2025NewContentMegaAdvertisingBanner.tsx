// import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Rocket, ArrowRight, Star } from 'lucide-react';

export default function October2025NewContentMegaAdvertisingBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white py-20 px-6 rounded-3xl shadow-2xl overflow-hidden my-12"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-8 py-4 mb-8 shadow-lg"
          >
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-bold uppercase tracking-wider">🎉 BREAKING: THREE NEW REVOLUTIONARY SOLUTIONS!</span>
            <Sparkles className="w-6 h-6 text-yellow-300" />
          </motion.div>

          <h2 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 bg-clip-text text-transparent leading-tight">
            NEW CONTENT ALERT
            <br />
            October 2025 Revolution
          </h2>
          
          <p className="text-2xl md:text-3xl text-purple-100 max-w-5xl mx-auto mb-6 font-semibold">
            Three Game-Changing AI Solutions Just Launched
          </p>

          <p className="text-xl text-purple-200 max-w-4xl mx-auto">
            Combined Value: <span className="text-3xl font-bold text-yellow-300">$55.9B</span> in Proven Results
          </p>
        </div>

        {/* Three New Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-gradient-to-br from-emerald-800 to-teal-800 rounded-2xl p-8 border-2 border-emerald-400/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-4 bg-emerald-500/20 rounded-xl">
                <Star className="w-8 h-8 text-emerald-300" />
              </div>
              <div>
                <div className="text-sm text-emerald-300 font-semibold uppercase">Solution #1</div>
                <h3 className="text-2xl font-bold text-white">Sustainable AI Operations</h3>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">Value Created</span>
                <span className="text-2xl font-bold text-white">$12.8B</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">Carbon Reduction</span>
                <span className="text-2xl font-bold text-emerald-300">92%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-emerald-200">ROI</span>
                <span className="text-2xl font-bold text-yellow-300">4,280%</span>
              </div>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-gradient-to-br from-cyan-800 to-blue-800 rounded-2xl p-8 border-2 border-cyan-400/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-4 bg-cyan-500/20 rounded-xl">
                <Star className="w-8 h-8 text-cyan-300" />
              </div>
              <div>
                <div className="text-sm text-cyan-300 font-semibold uppercase">Solution #2</div>
                <h3 className="text-2xl font-bold text-white">Predictive Analytics</h3>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-cyan-200">Value Created</span>
                <span className="text-2xl font-bold text-white">$18.4B</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200">Accuracy</span>
                <span className="text-2xl font-bold text-cyan-300">97.8%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-cyan-200">ROI</span>
                <span className="text-2xl font-bold text-yellow-300">5,247%</span>
              </div>
            </div>
            <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-gradient-to-br from-red-800 to-orange-800 rounded-2xl p-8 border-2 border-red-400/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-4 bg-red-500/20 rounded-xl">
                <Star className="w-8 h-8 text-red-300" />
              </div>
              <div>
                <div className="text-sm text-red-300 font-semibold uppercase">Solution #3</div>
                <h3 className="text-2xl font-bold text-white">Security Orchestration</h3>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-red-200">Assets Protected</span>
                <span className="text-2xl font-bold text-white">$24.7B</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-200">Detection Rate</span>
                <span className="text-2xl font-bold text-red-300">99.97%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-red-200">Response Time</span>
                <span className="text-2xl font-bold text-yellow-300">&lt;10μs</span>
              </div>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-2xl font-bold mb-4">
              Combined Impact: <span className="text-yellow-300 text-4xl">$55.9B</span> in Enterprise Value
            </p>
            <p className="text-lg text-purple-200 mb-6">
              Join 1,247+ Fortune 500 companies already leveraging these breakthrough solutions
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all inline-flex items-center gap-3 text-xl"
            >
              <Rocket className="w-6 h-6" />
              <span>Explore All Three Solutions</span>
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
