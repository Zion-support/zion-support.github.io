import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Advanced Robotics 2026
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Next-generation robotic systems powered by AI, machine learning, and advanced automation technologies.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Revolutionary Robotics Features</h2>
            <p className="text-xl text-gray-300">Cutting-edge capabilities that redefine what robots can do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">AI-Powered Navigation</h3>
              <p className="text-gray-300">
                Advanced pathfinding and obstacle avoidance using machine learning algorithms for seamless movement in complex environments.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Precision Manipulation</h3>
              <p className="text-gray-300">
                High-precision robotic arms with haptic feedback and force sensing for delicate operations and complex assembly tasks.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Autonomous Learning</h3>
              <p className="text-gray-300">
                Self-improving systems that learn from experience and adapt to new tasks without human intervention.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how advanced robotics can transform your business operations and increase efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </a>
              <a href="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedRobotics2026;