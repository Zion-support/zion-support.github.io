import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, Shield, Zap } from 'lucide-react';

const October2025NewContentMegaLaunchBanner3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 px-6"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
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
            JUST PUBLISHED: OCTOBER 1, 2025 - BREAKTHROUGH AI CONTENT
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🚀 The Ultimate AI Revolution 🚀
          </h2>
          
          <p className="text-2xl text-gray-200 mb-4">
            3 Revolutionary Guides + 2 Billion-Dollar Success Stories
          </p>
          
          <div className="inline-flex items-center gap-8 text-3xl font-bold text-yellow-400">
            <span>$11.3B+ Combined Value</span>
            <span className="text-gray-400">|</span>
            <span>96%+ Accuracy</span>
            <span className="text-gray-400">|</span>
            <span>340%+ ROI</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Agentic Workflow Automation */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-purple-400"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Agentic Workflow Automation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Master enterprise-scale autonomous AI agents. 94% automation rates, $4.2B in measurable ROI.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Automation Rate:</span>
                <span className="font-bold text-green-400">94%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Annual Savings:</span>
                <span className="font-bold text-green-400">$4.2B</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">ROI:</span>
                <span className="font-bold text-green-400">340%</span>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-oct-agentic-workflow-automation-enterprise-mastery"
              className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Read Complete Guide →
            </Link>
          </motion.div>

          {/* Vision-Language Models */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-blue-400"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">Vision-Language Models</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Revolutionary multimodal AI for documents. 15M+ docs daily with 98.7% accuracy, $3.2B savings.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Accuracy:</span>
                <span className="font-bold text-green-400">98.7%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Documents/Day:</span>
                <span className="font-bold text-green-400">15M+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Annual Savings:</span>
                <span className="font-bold text-green-400">$3.2B</span>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-oct-vision-language-models-enterprise-applications"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Discover Technology →
            </Link>
          </motion.div>

          {/* Federated Machine Learning */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border-2 border-green-400"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-bold text-white">Federated Learning</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Privacy-preserving enterprise AI. 150+ orgs collaborate, 96% accuracy, $5.7B value unlocked.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Enterprises:</span>
                <span className="font-bold text-green-400">150+</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Privacy:</span>
                <span className="font-bold text-green-400">100%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Value Unlocked:</span>
                <span className="font-bold text-green-400">$5.7B</span>
              </div>
            </div>
            <Link
              to="/blog/ai-2025-oct-federated-machine-learning-enterprise-privacy"
              className="block text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Learn Privacy AI →
            </Link>
          </motion.div>
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Retail Success */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-lg rounded-xl p-8 border border-purple-400"
          >
            <div className="text-yellow-400 font-bold text-sm mb-3">🏆 BILLION-DOLLAR SUCCESS STORY</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Global Retail Consortium: $4.2B Value Creation
            </h3>
            <p className="text-gray-200 mb-6">
              2,400+ stores across 85 brands achieve unprecedented results through federated AI collaboration 
              while maintaining 100% data sovereignty and competitive independence.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-green-400">$4.2B</div>
                <div className="text-sm text-gray-300">Annual Value</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">96.8%</div>
                <div className="text-sm text-gray-300">Forecast Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">4,920%</div>
                <div className="text-sm text-gray-300">3-Year ROI</div>
              </div>
            </div>
            <Link
              to="/case-studies/ai-2025-oct-global-retail-federated-learning-4-2-billion-success"
              className="block text-center bg-white text-purple-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Read Success Story →
            </Link>
          </motion.div>

          {/* Manufacturing Success */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-lg rounded-xl p-8 border border-blue-400"
          >
            <div className="text-yellow-400 font-bold text-sm mb-3">🏆 ENTERPRISE TRANSFORMATION</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Manufacturing: $2.4B with Agentic Automation
            </h3>
            <p className="text-gray-200 mb-6">
              450 facilities, 847 autonomous agents, 94% workflow automation. The future of manufacturing 
              operations is here with measurable billion-dollar impact.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-green-400">$2.4B</div>
                <div className="text-sm text-gray-300">Annual Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">94%</div>
                <div className="text-sm text-gray-300">Automation</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">69%</div>
                <div className="text-sm text-gray-300">Cycle Reduction</div>
              </div>
            </div>
            <Link
              to="/case-studies/ai-2025-oct-manufacturing-agentic-automation-2-4-billion-success"
              className="block text-center bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Transformation →
            </Link>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-200 mb-6">
            Ready to achieve similar results for your organization?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg border-2 border-white transition-colors text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025NewContentMegaLaunchBanner3;
