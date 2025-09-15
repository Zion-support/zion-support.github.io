import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Next-Generation Robotics
            </h1>
            <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of robotics with autonomous systems that can learn, adapt, 
              and perform complex tasks with human-like precision and intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Robotics Solutions
              </button>
              <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Revolutionary Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Robotics Capabilities</h2>
          <p className="text-xl opacity-90">Discover the breakthrough technologies reshaping automation</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Learning</h3>
            <p className="text-blue-100 mb-6 text-center">
              Robots that continuously learn from their environment and improve their performance 
              through advanced machine learning algorithms and neural networks.
            </p>
            <ul className="text-blue-200 space-y-2 text-sm">
              <li>• Adaptive behavior patterns</li>
              <li>• Real-time skill acquisition</li>
              <li>• Predictive maintenance</li>
              <li>• Autonomous problem solving</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🦾</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Human-Robot Collaboration</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Advanced safety systems and intuitive interfaces that enable seamless collaboration 
              between humans and robots in shared workspaces.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Collision avoidance systems</li>
              <li>• Natural language commands</li>
              <li>• Gesture recognition</li>
              <li>• Emotional intelligence</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4 text-center">🌐</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Swarm Intelligence</h3>
            <p className="text-purple-100 mb-6 text-center">
              Coordinated robot swarms that work together to accomplish complex tasks 
              through distributed intelligence and communication protocols.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• Distributed decision making</li>
              <li>• Self-organizing systems</li>
              <li>• Fault tolerance</li>
              <li>• Scalable coordination</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Industry Applications */}
      <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Transforming Industries</h2>
            <p className="text-xl opacity-90">See how advanced robotics is revolutionizing every sector</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-sm opacity-90">Autonomous production lines with self-optimizing capabilities</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-sm opacity-90">Surgical robots and patient care automation systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Transportation</h3>
              <p className="text-sm opacity-90">Autonomous vehicles and smart logistics systems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">Service Industry</h3>
              <p className="text-sm opacity-90">Personal assistant robots and smart home automation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cutting-Edge Technology</h2>
          <p className="text-xl opacity-90">Explore the advanced technologies powering our robotics solutions</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">Advanced Sensor Fusion</h3>
            <p className="text-lg opacity-90 mb-6">
              Our robots integrate multiple sensor technologies including LiDAR, computer vision, 
              tactile sensors, and environmental monitoring to create a comprehensive understanding 
              of their surroundings.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>360-degree environmental awareness</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>Real-time object recognition and tracking</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>Precise force and tactile feedback</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✓</span>
                <span>Adaptive navigation and path planning</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-400/30"
          >
            <div className="text-6xl mb-4 text-center">🔬</div>
            <h4 className="text-xl font-bold mb-4 text-center">Research & Development</h4>
            <p className="text-center opacity-90">
              Continuous innovation in robotics technology through our dedicated R&D labs, 
              pushing the boundaries of what's possible in autonomous systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join the robotics revolution and transform your operations with our advanced 
            autonomous systems. Experience unprecedented efficiency and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Automation Journey
            </button>
            <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;