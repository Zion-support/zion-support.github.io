<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
=======
import React from 'react';
>>>>>>> cursor/create-and-deploy-new-content-56ca

const AdvancedRobotics2026: React.FC = () => {
  const [activeRobot, setActiveRobot] = useState('humanoid');
  const [animationFrame, setAnimationFrame] = useState(0);

  const robotTypes = {
    'humanoid': {
      title: "Humanoid Robots",
      description: "AI-powered human-like robots for complex tasks",
      icon: "🤖",
      color: "from-blue-500 to-cyan-500",
      capabilities: [
        "Natural human interaction",
        "Complex problem solving",
        "Emotional intelligence",
        "Physical dexterity"
      ]
    },
    'industrial': {
      title: "Industrial Automation",
      description: "Advanced manufacturing and production robots",
      icon: "🏭",
      color: "from-orange-500 to-red-500",
      capabilities: [
        "Precision manufacturing",
        "Quality control",
        "Predictive maintenance",
        "Flexible production"
      ]
    },
    'medical': {
      title: "Medical Robots",
      description: "Surgical and healthcare assistance robots",
      icon: "🏥",
      color: "from-green-500 to-emerald-500",
      capabilities: [
        "Minimally invasive surgery",
        "Patient monitoring",
        "Drug delivery",
        "Rehabilitation therapy"
      ]
    },
    'service': {
      title: "Service Robots",
      description: "Robots for everyday service and assistance",
      icon: "🛎️",
      color: "from-purple-500 to-pink-500",
      capabilities: [
        "Customer service",
        "Household assistance",
        "Elderly care",
        "Education support"
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 60);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
>>>>>>> cursor/create-and-deploy-new-content-56ca
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-bold mb-6">
              🤖 ROBOTICS REVOLUTION • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
              Experience the future of robotics with intelligent machines that work alongside humans, 
              learn from experience, and revolutionize every industry.
            </p>
          </div>

          {/* Robot Type Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {Object.entries(robotTypes).map(([key, robot]) => (
              <button
                key={key}
                onClick={() => setActiveRobot(key)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  activeRobot === key
                    ? 'bg-white/20 backdrop-blur-sm border-2 border-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/15'
                }`}
              >
                <div className="text-3xl mb-2">{robot.icon}</div>
                <div className="text-sm font-semibold">{robot.title}</div>
              </button>
            ))}
          </div>

          {/* Active Robot Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRobot}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`bg-gradient-to-br ${robotTypes[activeRobot as keyof typeof robotTypes].color} rounded-3xl p-12 text-center shadow-2xl`}
            >
              <div className="text-8xl mb-6 animate-pulse">
                {robotTypes[activeRobot as keyof typeof robotTypes].icon}
              </div>
              <h2 className="text-4xl font-bold mb-4">
                {robotTypes[activeRobot as keyof typeof robotTypes].title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {robotTypes[activeRobot as keyof typeof robotTypes].description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {robotTypes[activeRobot as keyof typeof robotTypes].capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      <span className="font-semibold">{capability}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* AI Integration */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">AI-Powered Robotics</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Advanced artificial intelligence enables robots to learn, adapt, and make decisions 
            in real-time, creating truly intelligent machines.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
              <p className="text-sm opacity-90">Robots that learn from experience and improve over time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-2">Computer Vision</h3>
              <p className="text-sm opacity-90">Advanced visual recognition and spatial understanding</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold mb-2">Natural Language</h3>
              <p className="text-sm opacity-90">Seamless human-robot communication and interaction</p>
            </div>
          </div>
        </div>

        {/* Revolutionary Applications */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Applications</h2>
          <p className="text-xl text-blue-200">Robots transforming industries and improving human life</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-6xl mb-6 text-center">🏥</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Medical Robotics</h3>
            <p className="text-lg mb-6 opacity-90">
              Surgical robots performing complex procedures with superhuman precision, 
              reducing recovery times and improving outcomes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Sub-millimeter precision</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Minimally invasive procedures</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Remote surgery capability</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-6xl mb-6 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Smart Manufacturing</h3>
            <p className="text-lg mb-6 opacity-90">
              Intelligent manufacturing systems that adapt to changing demands, 
              optimize production, and ensure perfect quality.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Adaptive production lines</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Predictive maintenance</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Zero-defect manufacturing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-6xl mb-6 text-center">🏠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Home Assistance</h3>
            <p className="text-lg mb-6 opacity-90">
              Personal robots that assist with daily tasks, provide companionship, 
              and enhance quality of life for all ages.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Elderly care support</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Household automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="text-sm">Health monitoring</span>
              </div>
            </div>
=======
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-700 via-gray-700 to-zinc-700 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Revolutionary robotics solutions transforming industries and reshaping the future of work with 
              AI-powered autonomous systems, humanoid robots, and precision manufacturing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Robotics →
              </button>
              <button className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Robotics Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">AI-Powered Autonomous Robots</h3>
            <p className="text-gray-600 mb-6 text-center">
              Intelligent robots with advanced AI capabilities for autonomous operation and decision-making
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Machine learning algorithms</li>
              <li>• Computer vision systems</li>
              <li>• Natural language processing</li>
              <li>• Predictive maintenance</li>
            </ul>
<<<<<<< HEAD
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
>>>>>>> cursor/create-and-deploy-new-content-56ca
          </motion.div>
        </div>

        {/* Future of Robotics */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">The Future of Robotics</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            As robotics technology advances, we're moving toward a future where robots 
            are indistinguishable from humans in their capabilities and intelligence.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Humanoid Robots</h3>
              <p className="text-sm opacity-90">Indistinguishable from humans</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">Artificial Consciousness</h3>
              <p className="text-sm opacity-90">Self-aware and conscious machines</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-2">Robot Networks</h3>
              <p className="text-sm opacity-90">Collaborative robot swarms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Quantum Robotics</h3>
              <p className="text-sm opacity-90">Quantum-enhanced capabilities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Embrace the Robot Revolution</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Discover how advanced robotics is transforming our world and creating 
          new possibilities for human-robot collaboration.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
            Explore Robotics
          </button>
          <button className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg">
            Learn More
          </button>
        </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
            <a href="/pages/AIAutonomousRobots2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore AI Robots →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">👤</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Humanoid Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Advanced humanoid robots designed for human interaction and complex tasks
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Human-like movement</li>
              <li>• Emotional intelligence</li>
              <li>• Social interaction capabilities</li>
              <li>• Service and assistance roles</li>
            </ul>
            <a href="/pages/HumanoidRobotics2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Humanoids →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Industrial Automation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Precision manufacturing robots for industrial applications and production optimization
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Precision manufacturing</li>
              <li>• Quality control systems</li>
              <li>• Assembly line automation</li>
              <li>• Material handling</li>
            </ul>
            <a href="/pages/IndustrialAutomation2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Automation →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🏥</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Medical Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Surgical and medical robots for precision healthcare and patient care
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Surgical precision robots</li>
              <li>• Rehabilitation assistance</li>
              <li>• Diagnostic imaging robots</li>
              <li>• Patient care automation</li>
            </ul>
            <a href="/pages/MedicalRobotics2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Medical →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🌱</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Agricultural Robotics</h3>
            <p className="text-gray-600 mb-6 text-center">
              Smart farming robots for sustainable agriculture and food production
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Precision farming robots</li>
              <li>• Crop monitoring systems</li>
              <li>• Harvesting automation</li>
              <li>• Soil analysis robots</li>
            </ul>
            <a href="/pages/AgriculturalRobotics2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Agriculture →
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🚗</div>
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Autonomous Vehicles</h3>
            <p className="text-gray-600 mb-6 text-center">
              Self-driving vehicles with advanced navigation and safety systems
            </p>
            <ul className="text-gray-700 space-y-2 mb-6 text-sm">
              <li>• Advanced navigation systems</li>
              <li>• Safety and collision avoidance</li>
              <li>• Traffic optimization</li>
              <li>• Electric vehicle integration</li>
            </ul>
            <a href="/pages/AutonomousVehicles2026" className="block w-full bg-gradient-to-r from-slate-600 to-gray-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center">
              Explore Vehicles →
            </a>
          </div>
        </div>

        {/* Technology Stats */}
        <div className="bg-gradient-to-r from-slate-600/10 to-gray-600/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Robotics Impact Statistics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">99.9%</div>
              <div className="text-lg text-gray-700 mb-2">Precision Rate</div>
              <div className="text-sm text-gray-500">Industrial automation accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">50%</div>
              <div className="text-lg text-gray-700 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-500">Manufacturing efficiency gains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-600 mb-2">24/7</div>
              <div className="text-lg text-gray-700 mb-2">Operation</div>
              <div className="text-sm text-gray-500">Continuous production capability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">0%</div>
              <div className="text-lg text-gray-700 mb-2">Error Rate</div>
              <div className="text-sm text-gray-500">AI-powered quality control</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Automate Your Future?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how our advanced robotics solutions can transform your business and revolutionize your industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-slate-600 to-gray-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Automation Journey →
            </button>
            <button className="border-2 border-slate-600 text-slate-600 px-8 py-4 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-300 font-semibold text-lg">
              Contact Our Team
            </button>
          </div>
        </div>
>>>>>>> cursor/create-and-deploy-new-content-8799
>>>>>>> cursor/create-and-deploy-new-content-36c0
>>>>>>> cursor/create-and-deploy-new-content-56ca
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;