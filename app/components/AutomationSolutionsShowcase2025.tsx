import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cog, Zap, Target, TrendingUp, Shield, Brain, Clock, Users } from 'lucide-react';

const AutomationSolutionsShowcase2025: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20"
    >
      {/* Automation Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(34,197,94,0.1)_50%,transparent_51%),linear-gradient(-45deg,transparent_49%,rgba(20,184,166,0.1)_50%,transparent_51%)] bg-[length:40px_40px]"></div>
      </div>

      {/* Floating Automation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-green-400 rounded-sm opacity-40"
            animate={{
              x: [0, Math.random() * 150 - 75],
              y: [0, Math.random() * 150 - 75],
              rotate: [0, 180, 360],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mb-6"
          >
            <Cog className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Advanced Automation Solutions 2025
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Intelligent process automation with self-learning algorithms, autonomous decision-making, 
            and predictive maintenance systems that revolutionize operational efficiency.
          </motion.p>

          {/* Automation Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm text-gray-300">Efficiency Gain</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full mb-4 mx-auto">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-gray-300">Autonomous Operation</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-full mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime Guarantee</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-full mb-4 mx-auto">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-sm text-gray-300">Processes Automated</div>
            </div>
          </motion.div>
        </div>

        {/* Automation Solutions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Intelligent Process Automation */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Intelligent Process Automation</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Self-learning automation systems that adapt and optimize processes in real-time, 
              eliminating manual intervention and maximizing efficiency.
            </p>
            <Link
              to="/intelligent-process-automation-2025"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Automate Now
              <Zap className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Autonomous Decision Systems */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Decision Systems</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered decision engines that make complex business decisions autonomously, 
              with full audit trails and continuous learning capabilities.
            </p>
            <Link
              to="/autonomous-decision-systems-2025"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Deploy System
              <Cog className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Predictive Maintenance AI */}
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Predictive Maintenance AI</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Advanced predictive analytics that anticipate equipment failures before they occur, 
              reducing downtime and maintenance costs by up to 80%.
            </p>
            <Link
              to="/predictive-maintenance-ai-2025"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold group-hover:translate-x-1 transition-transform"
            >
              Prevent Failures
              <TrendingUp className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Proven Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">$2.5M</div>
              <div className="text-gray-300">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">3.2x</div>
              <div className="text-gray-300">ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">87%</div>
              <div className="text-gray-300">Faster Implementation</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/automation-solutions-2025"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Automation Journey
            </Link>
            <Link
              to="/automation-case-studies"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              View Case Studies
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            Transform your operations with next-generation automation solutions
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AutomationSolutionsShowcase2025;