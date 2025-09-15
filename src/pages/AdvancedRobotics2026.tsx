import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-gray-600/20"></div>
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
            <h1 className="text-6xl font-bold text-white mb-6">
              Advanced Robotics Revolution
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of robotics with intelligent machines that work alongside humans, 
              transforming industries and revolutionizing how we live and work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Robotics →
              </button>
              <button className="border-2 border-slate-400 text-slate-400 px-8 py-4 rounded-lg hover:bg-slate-400 hover:text-gray-900 transition-colors font-semibold">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Robotics Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">🤖 Robotics Categories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary robotics systems transforming industries and human-robot collaboration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🏭</div>
              <h3 className="text-xl font-bold mb-3 text-center">Industrial Robots</h3>
              <p className="text-gray-300 text-center text-sm mb-4">
                Advanced manufacturing robots with AI-powered precision and efficiency
              </p>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-300">99.9%</div>
                <div className="text-xs text-gray-400">Accuracy Rate</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🏥</div>
              <h3 className="text-xl font-bold mb-3 text-center">Medical Robots</h3>
              <p className="text-gray-300 text-center text-sm mb-4">
                Surgical and care robots with human-like dexterity and precision
              </p>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-300">0.1mm</div>
                <div className="text-xs text-gray-400">Precision</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-center">Service Robots</h3>
              <p className="text-gray-300 text-center text-sm mb-4">
                Domestic and service robots that assist in daily life and work
              </p>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-300">24/7</div>
                <div className="text-xs text-gray-400">Operation</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-400/30 hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-center">🚗</div>
              <h3 className="text-xl font-bold mb-3 text-center">Autonomous Vehicles</h3>
              <p className="text-gray-300 text-center text-sm mb-4">
                Self-driving cars, trucks, and drones with advanced AI navigation
              </p>
              <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-slate-300">Level 5</div>
                <div className="text-xs text-gray-400">Autonomy</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-gray-800/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">⚡ Advanced Robotics Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies powering the next generation of intelligent robots
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-start space-x-4"
              >
                <div className="text-4xl">🧠</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">AI-Powered Intelligence</h3>
                  <p className="text-gray-300">
                    Advanced artificial intelligence that enables robots to learn, adapt, and make decisions 
                    in real-time with human-level cognitive capabilities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="text-4xl">🤲</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Human-Like Dexterity</h3>
                  <p className="text-gray-300">
                    Robotic hands and limbs with unprecedented dexterity and tactile sensitivity, 
                    enabling complex manipulation tasks.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="text-4xl">👁️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Advanced Vision Systems</h3>
                  <p className="text-gray-300">
                    Computer vision with 360-degree awareness, object recognition, and depth perception 
                    surpassing human visual capabilities.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-start space-x-4"
              >
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Ultra-Fast Processing</h3>
                  <p className="text-gray-300">
                    Quantum-enhanced processors that enable real-time decision making and 
                    response times measured in microseconds.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="text-4xl">🌐</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Cloud Robotics</h3>
                  <p className="text-gray-300">
                    Seamless integration with cloud computing for shared intelligence, 
                    continuous learning, and massive computational power.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="text-4xl">🔋</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Advanced Power Systems</h3>
                  <p className="text-gray-300">
                    Revolutionary battery technology and wireless charging enabling 
                    continuous operation for days without interruption.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">🚀 Revolutionary Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How advanced robotics is transforming industries and improving human life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30"
            >
              <div className="text-6xl mb-6 text-center">🏭</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Manufacturing Revolution</h3>
              <p className="text-gray-300 text-center mb-6">
                Fully automated factories with intelligent robots that can adapt to new products and optimize production in real-time
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-slate-300">95%</div>
                <div className="text-sm text-gray-400">Efficiency Increase</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30"
            >
              <div className="text-6xl mb-6 text-center">🏥</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Healthcare Transformation</h3>
              <p className="text-gray-300 text-center mb-6">
                Robotic surgeons, nurses, and care assistants providing 24/7 medical support with superhuman precision
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-slate-300">99.7%</div>
                <div className="text-sm text-gray-400">Surgery Success Rate</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30"
            >
              <div className="text-6xl mb-6 text-center">🏠</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Smart Home Integration</h3>
              <p className="text-gray-300 text-center mb-6">
                Intelligent home robots that manage everything from cleaning and cooking to security and entertainment
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-slate-300">24/7</div>
                <div className="text-sm text-gray-400">Home Management</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-600 to-gray-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">🌟 The Future of Robotics</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              By 2030, we envision a world where humans and robots work together seamlessly, 
              creating a more efficient, productive, and innovative society.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-slate-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Explore Robotics Solutions →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-slate-600 transition-colors font-semibold">
                Download Robotics Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedRobotics2026;