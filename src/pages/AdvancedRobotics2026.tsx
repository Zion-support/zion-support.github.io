import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  const [activeRobot, setActiveRobot] = useState('autonomous');

  const robotTypes = [
    {
      id: 'autonomous',
      name: 'Autonomous Robots',
      icon: '🤖',
      description: 'Fully autonomous robots with advanced AI and self-learning capabilities',
      features: [
        'Self-navigation and mapping',
        'Object recognition and manipulation',
        'Adaptive learning algorithms',
        'Human-robot collaboration'
      ],
      applications: [
        'Manufacturing automation',
        'Service industry',
        'Healthcare assistance',
        'Logistics and delivery'
      ]
    },
    {
      id: 'humanoid',
      name: 'Humanoid Robots',
      icon: '👤',
      description: 'Advanced humanoid robots with human-like appearance and movement',
      features: [
        'Bipedal locomotion',
        'Facial expression recognition',
        'Natural language processing',
        'Emotional intelligence'
      ],
      applications: [
        'Customer service',
        'Education and tutoring',
        'Elderly care',
        'Entertainment industry'
      ]
    },
    {
      id: 'industrial',
      name: 'Industrial Robots',
      icon: '🏭',
      description: 'High-precision industrial robots for manufacturing and production',
      features: [
        'Sub-millimeter precision',
        'Heavy payload capacity',
        '24/7 operation capability',
        'Quality control integration'
      ],
      applications: [
        'Automotive manufacturing',
        'Electronics assembly',
        'Food processing',
        'Pharmaceutical production'
      ]
    },
    {
      id: 'medical',
      name: 'Medical Robots',
      icon: '🏥',
      description: 'Specialized robots for medical procedures and patient care',
      features: [
        'Surgical precision',
        'Sterile operation',
        'Real-time monitoring',
        'Minimally invasive procedures'
      ],
      applications: [
        'Surgical assistance',
        'Rehabilitation therapy',
        'Diagnostic imaging',
        'Patient monitoring'
      ]
    }
  ];

  const currentRobot = robotTypes.find(robot => robot.id === activeRobot) || robotTypes[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full text-white text-sm font-bold mb-6">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionary robotics solutions that are transforming industries and reshaping human-robot collaboration
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-slate-500 to-gray-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Robotics →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                View Demo
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