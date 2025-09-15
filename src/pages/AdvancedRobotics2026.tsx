import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED ROBOTICS • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Revolutionary robotic systems that combine artificial intelligence, advanced mechanics, 
              and human-like capabilities to transform industries and daily life.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-slate-500 to-gray-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Robotics
              </button>
              <button className="border-2 border-slate-400 text-slate-400 px-8 py-4 rounded-lg hover:bg-slate-400 hover:text-white transition-all duration-300 font-semibold text-lg">
                See Robots in Action
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Robotics Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🤖 Revolutionary Robotic Capabilities</h2>
          <p className="text-xl opacity-90">The future of intelligent automation is here</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-600/30 to-gray-600/30 backdrop-blur-sm rounded-xl p-8 border border-slate-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Cognition</h3>
            <p className="text-slate-100 mb-6 text-center">
              Advanced neural networks enabling robots to learn, adapt, and make intelligent decisions in real-time
            </p>
            <ul className="text-slate-200 space-y-2 text-sm">
              <li>• Machine learning integration</li>
              <li>• Real-time decision making</li>
              <li>• Adaptive behavior</li>
              <li>• Contextual understanding</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🦾</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Humanoid Design</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Human-like robots with advanced dexterity, mobility, and interaction capabilities
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Bipedal locomotion</li>
              <li>• Fine motor control</li>
              <li>• Facial expressions</li>
              <li>• Natural gestures</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🔄</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Swarm Intelligence</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Coordinated robot swarms that work together to accomplish complex tasks efficiently
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Distributed coordination</li>
              <li>• Collective problem solving</li>
              <li>• Scalable operations</li>
              <li>• Fault tolerance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-orange-600/30 to-red-600/30 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Industrial Automation</h3>
            <p className="text-orange-100 mb-6 text-center">
              Advanced manufacturing robots that can handle complex assembly, quality control, and production optimization
            </p>
            <ul className="text-orange-200 space-y-2 text-sm">
              <li>• Precision manufacturing</li>
              <li>• Quality inspection</li>
              <li>• Flexible production lines</li>
              <li>• Predictive maintenance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-violet-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-violet-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🏥</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Medical Robotics</h3>
            <p className="text-violet-100 mb-6 text-center">
              Surgical and care robots that assist medical professionals with precision and safety
            </p>
            <ul className="text-violet-200 space-y-2 text-sm">
              <li>• Surgical assistance</li>
              <li>• Patient care</li>
              <li>• Rehabilitation therapy</li>
              <li>• Medical diagnostics</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-rose-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-rose-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Service Robotics</h3>
            <p className="text-rose-100 mb-6 text-center">
              Domestic and commercial service robots that assist with daily tasks and customer service
            </p>
            <ul className="text-rose-200 space-y-2 text-sm">
              <li>• Household assistance</li>
              <li>• Customer service</li>
              <li>• Security monitoring</li>
              <li>• Hospitality services</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Technology Deep Dive */}
      <div className="bg-gradient-to-r from-slate-900/50 to-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">🔬 Advanced Robotic Technology</h2>
            <p className="text-xl opacity-90">Cutting-edge innovations in robotics and automation</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-400">Neural Control Systems</h3>
              <p className="text-gray-200 mb-6">
                Advanced neural control algorithms that enable robots to process sensory information, 
                make decisions, and execute complex movements with human-like precision and adaptability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span className="text-sm">Real-time processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span className="text-sm">Adaptive learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  <span className="text-sm">Multi-sensor fusion</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-400">Haptic Feedback Systems</h3>
              <p className="text-gray-200 mb-6">
                Advanced tactile feedback systems that allow robots to sense and respond to touch, 
                pressure, and texture with unprecedented sensitivity and accuracy.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-sm">Tactile sensing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-sm">Force feedback</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span className="text-sm">Texture recognition</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Applications Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">🌟 Real-World Applications</h2>
          <p className="text-xl opacity-90">Transforming industries with intelligent robotics</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-600/20 to-gray-600/20 backdrop-blur-sm rounded-xl p-6 border border-slate-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-slate-400">Manufacturing</h3>
            <p className="text-gray-200 text-sm mb-4">
              Autonomous production lines with intelligent robots that can adapt to changing requirements, 
              perform quality control, and optimize manufacturing processes in real-time.
            </p>
            <ul className="text-slate-200 space-y-1 text-xs">
              <li>• Flexible production</li>
              <li>• Quality assurance</li>
              <li>• Process optimization</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-cyan-400">Healthcare</h3>
            <p className="text-gray-200 text-sm mb-4">
              Medical robots that assist surgeons with precision procedures, provide patient care, 
              and support rehabilitation with advanced sensing and control capabilities.
            </p>
            <ul className="text-cyan-200 space-y-1 text-xs">
              <li>• Surgical assistance</li>
              <li>• Patient monitoring</li>
              <li>• Rehabilitation support</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-400/30"
          >
            <h3 className="text-xl font-bold mb-3 text-emerald-400">Logistics</h3>
            <p className="text-gray-200 text-sm mb-4">
              Intelligent warehouse and delivery robots that can navigate complex environments, 
              handle packages, and optimize supply chain operations autonomously.
            </p>
            <ul className="text-emerald-200 space-y-1 text-xs">
              <li>• Warehouse automation</li>
              <li>• Last-mile delivery</li>
              <li>• Inventory management</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace the Robotic Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover how advanced robotics can transform your business and daily life. 
            Experience the future of intelligent automation today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-slate-500 to-gray-500 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Robotic Journey
            </button>
            <button className="border-2 border-slate-400 text-slate-400 px-8 py-4 rounded-lg hover:bg-slate-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Robotics Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;