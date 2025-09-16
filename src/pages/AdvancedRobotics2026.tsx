import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-gray-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-700 bg-clip-text text-transparent">
              Advanced Robotics Revolution
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Experience the future of robotics with our cutting-edge autonomous systems, 
              human-robot collaboration, and intelligent automation solutions that are 
              transforming industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Robotics →
              </a>
              <a href="/pages/AdvancedTechSolutions2026" className="border border-slate-600 text-slate-600 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors">
                View All Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Revolutionary Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-700">Autonomous Systems</h3>
            <p className="text-gray-600 mb-6">
              Self-operating robots that can navigate complex environments, make decisions, 
              and adapt to changing conditions without human intervention.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>• Advanced AI decision-making</li>
              <li>• Real-time environment mapping</li>
              <li>• Predictive maintenance</li>
              <li>• Multi-sensor fusion</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-700">Human-Robot Collaboration</h3>
            <p className="text-gray-600 mb-6">
              Safe and intuitive interaction between humans and robots, enabling 
              seamless teamwork in manufacturing and service industries.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>• Force-sensitive control</li>
              <li>• Voice command integration</li>
              <li>• Gesture recognition</li>
              <li>• Safety monitoring systems</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-700">Intelligent Automation</h3>
            <p className="text-gray-600 mb-6">
              Smart automation systems that learn from experience and optimize 
              processes for maximum efficiency and productivity.
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>• Machine learning algorithms</li>
              <li>• Process optimization</li>
              <li>• Quality control automation</li>
              <li>• Performance analytics</li>
            </ul>
          </motion.div>
        </div>

        {/* Advanced Capabilities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-100 to-gray-100 rounded-3xl p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced robotics systems feature cutting-edge technologies that 
              push the boundaries of what's possible in automation and human-robot interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-slate-700">Neural Network Integration</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our robots are powered by advanced neural networks that enable them to 
                learn, adapt, and make complex decisions in real-time. This technology 
                allows for unprecedented levels of autonomy and intelligence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-gray-600">Deep learning algorithms for pattern recognition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-gray-600">Real-time decision making and adaptation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-gray-600">Continuous learning from experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  <span className="text-gray-600">Multi-modal sensor data processing</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-500/20 to-gray-500/20 p-8 rounded-2xl border border-slate-500/30">
              <div className="text-6xl mb-4 text-center">🧠</div>
              <h4 className="text-xl font-bold text-center text-slate-700 mb-4">AI-Powered Intelligence</h4>
              <p className="text-gray-600 text-center">
                Advanced artificial intelligence that enables robots to understand 
                context, learn from interactions, and make intelligent decisions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Industry Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-gray-700 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our robotics solutions are transforming industries across the globe, 
              from manufacturing to healthcare, logistics to agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Automated assembly lines, quality control, and precision manufacturing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Healthcare</h3>
              <p className="text-gray-600 text-sm">
                Surgical assistance, patient care, and medical device automation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Logistics</h3>
              <p className="text-gray-600 text-sm">
                Warehouse automation, package sorting, and delivery systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-200">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold mb-3 text-slate-700">Agriculture</h3>
              <p className="text-gray-600 text-sm">
                Precision farming, crop monitoring, and automated harvesting.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-3xl p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join the robotics revolution and discover how our advanced automation 
            solutions can revolutionize your business operations and drive unprecedented growth.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="/contact" className="bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg">
              Start Your Journey
            </a>
            <a href="/pages/ComprehensiveTechInsights2026" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-orange-600 transition-colors font-semibold text-lg">
              Learn More
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;