import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Zap, Award } from 'lucide-react';

const UltimateContentPromotionBanner2025: React.FC = () => {
  return (
    <motion.section 
      className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Revolutionary Content Hub</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover the Future of
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Technology</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Access cutting-edge insights, breakthrough technologies, and expert guidance that will transform your business in 2025 and beyond. Join the technology revolution today.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Latest AI & Quantum Breakthroughs</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">50K+ Active Professionals</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Instant Access & Updates</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">Expert-Curated Content</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Ultimate Content Hub</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Access
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center">
                  <Sparkles className="w-6 h-6 mr-2" />
                  <div>
                    <div className="text-sm font-bold">NEW</div>
                    <div className="text-xs opacity-90">AI Breakthrough</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <div>
                    <div className="text-sm font-bold">TRENDING</div>
                    <div className="text-xs opacity-90">Quantum Tech</div>
                  </div>
                </div>
              </motion.div>

              {/* Main Content Card */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Ultimate Content Hub 2025</h3>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm mr-1">★</span>
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">AI</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">AI Revolution 2025</div>
                      <div className="text-gray-400 text-sm">Latest breakthroughs & insights</div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">Q</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Quantum Computing</div>
                      <div className="text-gray-400 text-sm">Future-ready solutions</div>
                    </div>
                  </div>

                  <div className="flex items-center p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-3">
                      <span className="text-white font-bold">B</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Blockchain & Web3</div>
                      <div className="text-gray-400 text-sm">Decentralized innovations</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>200+ Expert Articles</span>
                    <span>50K+ Downloads</span>
                    <span>95% Success Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default UltimateContentPromotionBanner2025;