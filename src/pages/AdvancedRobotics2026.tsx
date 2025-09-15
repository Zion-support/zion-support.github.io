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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 REVOLUTIONARY ROBOTICS • 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Advanced Robotics Revolution 2026
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Transforming industries with autonomous robots, humanoid assistants, 
            and intelligent automation systems that work alongside humans
          </p>
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

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace the Robotics Revolution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Discover how advanced robotics can transform your business and daily life
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/pages/AdvancedAITransformation2026" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore AI Integration →
            </a>
            <a href="/pages/QuantumComputingRevolution2026" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Learn Quantum Computing →
            </a>
            <a href="/pages/NeuralInterfaceRevolution2026" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Discover Neural Interfaces →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;