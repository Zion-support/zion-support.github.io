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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/robot-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-bold mb-6">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Revolutionary robotics technology with AI-powered autonomous systems, humanoid robots, and advanced industrial automation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Robotics →
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors font-semibold">
                View Applications
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Robot Types Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-300">🤖 Advanced Robot Types</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Cutting-edge robotics technology across multiple domains and applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {robotTypes.map((robot, index) => (
              <motion.div
                key={robot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-gradient-to-br from-blue-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeRobot === robot.id ? 'ring-2 ring-blue-400' : ''
                }`}
                onClick={() => setActiveRobot(robot.id)}
              >
                <div className="text-5xl mb-6 text-center">{robot.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center text-blue-300">{robot.name}</h3>
                <p className="text-blue-100 mb-6 text-center text-sm">{robot.description}</p>
                <div className="text-center">
                  <div className="text-sm text-blue-200">Click to explore</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Robot Details */}
          <motion.div
            key={activeRobot}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30"
          >
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">{currentRobot.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-blue-300 mb-2">{currentRobot.name}</h3>
                <p className="text-blue-100">{currentRobot.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-blue-300 mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {currentRobot.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-blue-100">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-300 mb-4">Applications:</h4>
                <ul className="space-y-2">
                  {currentRobot.applications.map((application, index) => (
                    <li key={index} className="flex items-center text-blue-100">
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900/50 to-purple-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-purple-300">🔬 Advanced Technologies</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Cutting-edge technologies powering the next generation of robotics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30"
            >
              <div className="text-5xl mb-6 text-center">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">AI-Powered Intelligence</h3>
              <p className="text-purple-100 mb-6 text-center">
                Advanced artificial intelligence enabling autonomous decision-making and adaptive learning
              </p>
              <ul className="text-purple-200 space-y-2 text-sm">
                <li>• Machine learning algorithms</li>
                <li>• Computer vision systems</li>
                <li>• Natural language processing</li>
                <li>• Predictive analytics</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30"
            >
              <div className="text-5xl mb-6 text-center">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-cyan-300">Advanced Sensors</h3>
              <p className="text-cyan-100 mb-6 text-center">
                State-of-the-art sensor technology for precise perception and interaction
              </p>
              <ul className="text-cyan-200 space-y-2 text-sm">
                <li>• LiDAR and radar systems</li>
                <li>• High-resolution cameras</li>
                <li>• Tactile sensors</li>
                <li>• Environmental sensors</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30"
            >
              <div className="text-5xl mb-6 text-center">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-emerald-300">Precision Mechanics</h3>
              <p className="text-emerald-100 mb-6 text-center">
                Advanced mechanical systems with unprecedented precision and reliability
              </p>
              <ul className="text-emerald-200 space-y-2 text-sm">
                <li>• High-precision actuators</li>
                <li>• Advanced materials</li>
                <li>• Modular design</li>
                <li>• Self-healing systems</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Deploy Advanced Robotics?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Transform your operations with cutting-edge robotics technology and AI-powered automation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Implementation →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedRobotics2026;