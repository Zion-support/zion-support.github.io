import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Eye, Brain, DollarSign, Zap } from 'lucide-react';

const October2025MultimodalIntelligenceRevolutionBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-16 px-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-6"
          >
            <Sparkles className="w-5 h-5" />
            🔥🔥🔥 BREAKING: OCTOBER 1, 2025 - MULTIMODAL AI REVOLUTION - ABSOLUTE #1 TOP PRIORITY! 🔥🔥🔥
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            💎 Multimodal Enterprise Intelligence 💎
          </h2>
          
          <p className="text-2xl text-gray-200 mb-4">
            Revolutionary AI Transformation Guide + Fortune 100 Success Story
          </p>
          
          <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 text-2xl md:text-3xl font-bold text-yellow-400">
            <span>$8.7B Success Story</span>
            <span className="text-gray-400">|</span>
            <span>96% Quality Improvement</span>
            <span className="text-gray-400">|</span>
            <span>450% ROI</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Main Guide Card */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            className="bg-gradient-to-br from-emerald-800 to-teal-800 rounded-2xl p-8 border-4 border-yellow-400 shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-yellow-400 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-gray-900" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <Zap className="w-3 h-3" />
                  COMPLETE GUIDE
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Multimodal Enterprise Intelligence Revolution
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  The definitive guide to transforming your business with multimodal AI systems
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white">
                <Eye className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">Vision, Language & Audio Processing</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <TrendingUp className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">96% Accuracy Improvements</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <DollarSign className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">$8.7B Proven Value Creation</span>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
              <h4 className="text-white font-bold mb-3">What You'll Learn:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Complete implementation framework (3 phases)</li>
                <li>✅ Enterprise applications across industries</li>
                <li>✅ Technology architecture & best practices</li>
                <li>✅ ROI analysis with 450% returns</li>
                <li>✅ Future trends & emerging capabilities</li>
              </ul>
            </div>

            <Link
              to="/blog/ai-2025-oct-01-multimodal-enterprise-intelligence-revolution"
              className="block w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-6 rounded-xl text-center transition-all transform hover:scale-105"
            >
              📖 Read Complete Guide →
            </Link>
          </motion.div>

          {/* Success Story Card */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            className="bg-gradient-to-br from-cyan-800 to-blue-800 rounded-2xl p-8 border-4 border-emerald-400 shadow-2xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-emerald-400 p-3 rounded-xl">
                <TrendingUp className="w-8 h-8 text-gray-900" />
              </div>
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <Sparkles className="w-3 h-3" />
                  FORTUNE 100 SUCCESS
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  $8.7B Manufacturing Transformation
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  How a Fortune 100 leader achieved unprecedented results with multimodal AI
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">$8.7B</div>
                <div className="text-gray-300 text-xs">Total Value</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">450%</div>
                <div className="text-gray-300 text-xs">ROI</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">96%</div>
                <div className="text-gray-300 text-xs">Quality Gains</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">847</div>
                <div className="text-gray-300 text-xs">Facilities</div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
              <h4 className="text-white font-bold mb-3">Key Achievements:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>🏆 78% operational cost reduction</li>
                <li>🏆 99.7% defect detection accuracy</li>
                <li>🏆 18-month implementation timeline</li>
                <li>🏆 340,000+ employees trained</li>
                <li>🏆 94% safety incident reduction</li>
              </ul>
            </div>

            <Link
              to="/case-studies/ai-2025-oct-global-manufacturing-multimodal-intelligence-8-7-billion-success"
              className="block w-full bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-bold py-4 px-6 rounded-xl text-center transition-all transform hover:scale-105"
            >
              📊 View Full Case Study →
            </Link>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl p-8 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            🚀 Ready to Transform Your Enterprise with Multimodal AI?
          </h3>
          <p className="text-gray-900 text-lg mb-6">
            Join 847+ organizations achieving breakthrough results. Get expert guidance from Zion Tech Group.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services"
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Explore Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">96%</div>
            <div className="text-gray-300 text-sm">Accuracy Improvement</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">450%</div>
            <div className="text-gray-300 text-sm">Average ROI</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">78%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400 mb-2">18</div>
            <div className="text-gray-300 text-sm">Months to Results</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default October2025MultimodalIntelligenceRevolutionBanner;
