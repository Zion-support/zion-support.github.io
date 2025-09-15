import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-zinc-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-600 to-zinc-600 rounded-full text-sm font-bold mb-6 text-white">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-zinc-800 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Revolutionary robotics solutions powered by AI, machine learning, and advanced automation technologies
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-slate-600 to-zinc-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Solutions →
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-100 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Advanced Robotics Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of robotics technologies designed to revolutionize automation and human-robot collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
            <div className="text-5xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Industrial Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced industrial robots for manufacturing, assembly, and production automation
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Precision manufacturing</li>
              <li>• Quality control</li>
              <li>• Assembly automation</li>
              <li>• Material handling</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
            <div className="text-5xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">AI-Powered Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Intelligent robots with advanced AI capabilities for complex decision-making and learning
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Machine learning integration</li>
              <li>• Adaptive behavior</li>
              <li>• Predictive maintenance</li>
              <li>• Autonomous operation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200">
            <div className="text-5xl mb-4 text-center">🤝</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Human-Robot Collaboration</h3>
            <p className="text-gray-600 mb-6 text-center">
              Safe and efficient collaboration between humans and robots in shared workspaces
            </p>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li>• Safety protocols</li>
              <li>• Intuitive interfaces</li>
              <li>• Collaborative workflows</li>
              <li>• Real-time communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;