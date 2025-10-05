import React from 'react';
import { motion } from 'framer-motion';

const October2025CognitiveAutomationPlatformBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 rounded-2xl p-8 my-8 shadow-2xl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.3),rgba(255,255,255,0))]"</div>

      <div className="relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6"
        >
          <span className="text-2xl">🧠🤖</span>
          <span className="text-emerald-200 font-semibold text-sm">ENTERPRISE REVOLUTION: OCTOBER 1, 2025</span>
          <span className="text-2xl">🚀💎</span>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Cognitive Automation Platform 3.0
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mt-2">
                The Enterprise Operating System
              </span>
            </h2>
            
            <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
              Next-generation cognitive automation achieves <strong className="text-white">96% automation rate</strong> with 
              <strong className="text-white"> 99.94% accuracy</strong>, creating <strong className="text-white">$15.7B in enterprise value</strong> across 
              <strong className="text-white"> 12,500+ automated processes</strong>.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-800/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20">
                <div className="text-3xl font-bold text-emerald-300">$15.7B</div>
                <div className="text-emerald-200 text-sm">Total Value Created</div>
              </div>
              <div className="bg-emerald-800/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20">
                <div className="text-3xl font-bold text-emerald-300">96%</div>
                <div className="text-emerald-200 text-sm">Automation Rate</div>
              </div>
              <div className="bg-emerald-800/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20">
                <div className="text-3xl font-bold text-emerald-300">12,500+</div>
                <div className="text-emerald-200 text-sm">Processes Automated</div>
              </div>
              <div className="bg-emerald-800/30 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/20">
                <div className="text-3xl font-bold text-emerald-300">4,200%</div>
                <div className="text-emerald-200 text-sm">ROI Over 3 Years</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/blog/ai-2025-october-cognitive-automation-platform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg shadow-lg hover:shadow-emerald-500/50 transition-all"
              >
                Explore Platform 3.0 →
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Start Automation
              </motion.a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,",
      ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl p-8 border border-emerald-400/30"
              >
                <h3 className="text-2xl font-bold text-white mb-4">Platform Features:</h3>
                <ul className="space-y-3 text-emerald-100">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <span><strong>Cognitive Understanding:</strong> Natural language & visual intelligence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚙️</span>
                    <span><strong>Autonomous Decisions:</strong> 99.94% accuracy without human input</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📈</span>
                    <span><strong>Continuous Learning:</strong> Real-time adaptation & optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌍</span>
                    <span><strong>Global Scale:</strong> 67 countries, 95 departments, 84,000 employees</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 pt-6 border-t border-emerald-400/30 text-center"
        >
          <p className="text-emerald-200 text-sm">
            🏆 <strong className="text-white">ENTERPRISE TRANSFORMATION:</strong> Fortune 50 Success Story | 87% Cost Reduction | 25x Faster Processing
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default October2025CognitiveAutomationPlatformBanner;
