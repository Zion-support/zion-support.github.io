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
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Next-generation robotics systems with artificial intelligence, advanced sensors, and autonomous capabilities that are revolutionizing industries and daily life
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">🚀 Revolutionary Robotics Technology</h2>
          <p className="text-xl text-gray-600">Intelligent machines that think, learn, and adapt</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
          >
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-slate-600">AI-Powered Autonomy</h3>
            <p className="text-gray-600 mb-6">
              Advanced artificial intelligence enables robots to make complex decisions, learn from experience, and adapt to new environments autonomously.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Machine learning algorithms</li>
              <li>• Real-time decision making</li>
              <li>• Adaptive behavior</li>
              <li>• Continuous learning</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
          >
            <div className="text-5xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-600">Advanced Sensing</h3>
            <p className="text-gray-600 mb-6">
              Multi-modal sensor systems provide robots with human-like perception capabilities including vision, touch, and spatial awareness.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• 3D vision systems</li>
              <li>• Tactile sensors</li>
              <li>• LiDAR mapping</li>
              <li>• Environmental awareness</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-zinc-200"
          >
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold mb-4 text-zinc-600">Human-Robot Collaboration</h3>
            <p className="text-gray-600 mb-6">
              Safe and intuitive human-robot interaction systems that enable seamless collaboration in shared workspaces.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Safety protocols</li>
              <li>• Intuitive interfaces</li>
              <li>• Collaborative workflows</li>
              <li>• Real-time communication</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-indigo-200"
          >
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-indigo-600">Industrial Automation</h3>
            <p className="text-gray-600 mb-6">
              Advanced manufacturing robots that increase productivity, improve quality, and reduce costs through intelligent automation.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Precision manufacturing</li>
              <li>• Quality control</li>
              <li>• Flexible production</li>
              <li>• Predictive maintenance</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-blue-200"
          >
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Medical Robotics</h3>
            <p className="text-gray-600 mb-6">
              Surgical and therapeutic robots that enhance medical procedures with precision, safety, and improved patient outcomes.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Surgical assistance</li>
              <li>• Rehabilitation therapy</li>
              <li>• Diagnostic procedures</li>
              <li>• Patient care</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-green-200"
          >
            <div className="text-5xl mb-4">🌍</div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Service Robotics</h3>
            <p className="text-gray-600 mb-6">
              Intelligent service robots for domestic, commercial, and public applications that enhance daily life and productivity.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Domestic assistance</li>
              <li>• Customer service</li>
              <li>• Security patrol</li>
              <li>• Delivery services</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Applications Section */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🌐 Industry Applications</h2>
            <p className="text-xl text-slate-100">Transforming industries through intelligent automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏭</div>
              <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
              <p className="text-slate-100">Automated production and quality control</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2">Healthcare</h3>
              <p className="text-slate-100">Surgical assistance and patient care</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🚗</div>
              <h3 className="text-xl font-bold mb-2">Transportation</h3>
              <p className="text-slate-100">Autonomous vehicles and logistics</p>
            </div>
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2">Home & Office</h3>
              <p className="text-slate-100">Personal assistance and automation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">⚙️ Advanced Technology Stack</h2>
          <p className="text-xl text-gray-600">Cutting-edge technologies powering next-generation robotics</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold text-blue-600 mb-2">AI & ML</h3>
            <p className="text-sm text-gray-600">Machine learning algorithms and neural networks</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
            <div className="text-3xl mb-3">👁️</div>
            <h3 className="text-lg font-bold text-green-600 mb-2">Computer Vision</h3>
            <p className="text-sm text-gray-600">Advanced image processing and recognition</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-purple-600 mb-2">Robotics</h3>
            <p className="text-sm text-gray-600">Mechanical systems and actuators</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-lg font-bold text-orange-600 mb-2">IoT Integration</h3>
            <p className="text-sm text-gray-600">Connected systems and data exchange</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Automate Your Future?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover how our advanced robotics solutions can transform your operations and unlock new possibilities for growth and innovation
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Get Started →
          </a>
          <a href="/pages/AdvancedTechSolutions2026" className="border border-slate-600 text-slate-600 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors">
            View All Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;