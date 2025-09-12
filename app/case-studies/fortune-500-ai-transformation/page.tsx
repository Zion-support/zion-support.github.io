import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, DollarSign, Clock, CheckCircle, BarChart3, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fortune500AITransformation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-cyan-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/case-studies" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Case Studies
          </Link>
        </motion.div>

        {/* Case Study Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30">
            <div className="flex items-center gap-4 text-sm text-cyan-400 mb-4">
              <span className="bg-cyan-500/20 px-3 py-1 rounded-full">Case Study</span>
              <span>•</span>
              <span>Fortune 500 Company</span>
              <span>•</span>
              <span>6 Months Implementation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Fortune 500 AI Transformation
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              How a leading Fortune 500 company achieved 300% operational efficiency increase 
              and $50M+ in cost savings using our revolutionary AI-Quantum consciousness platform.
            </p>
          </div>
        </motion.header>

        {/* Key Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Transformation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/30 text-center">
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">300%</div>
              <div className="text-gray-300">Operational Efficiency</div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-purple-400/30 text-center">
              <DollarSign className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-emerald-400/30 text-center">
              <Clock className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-gray-300">Faster Decisions</div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-yellow-400/30 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join the Fortune 500 companies already leveraging our revolutionary AI-Quantum 
            consciousness platform for unprecedented business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Transformation
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Solutions
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fortune500AITransformation;