import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold mb-6 animate-pulse">
            🤖 ROBOTICS REVOLUTION 2026
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Advanced Robotics 2026
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Revolutionary robotics solutions that are transforming industries and reshaping the future of work
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#solutions" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore Solutions →
            </a>
            <a href="#contact" className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg hover:bg-orange-400 hover:text-gray-900 transition-colors font-semibold text-lg">
              Get Started
            </a>
          </div>
        </motion.div>

        {/* Revolutionary Robotics Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-600/20 via-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-orange-400/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                🤖 Revolutionary Robotics Breakthroughs
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto">
                Experience the future of robotics with our cutting-edge solutions that are making science fiction a reality
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold mb-3 text-orange-300">AI-Powered Robots</h3>
                <p className="text-gray-200 text-sm">Autonomous robots with advanced machine learning capabilities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
                <div className="text-4xl mb-4">🦾</div>
                <h3 className="text-xl font-bold mb-3 text-red-300">Humanoid Robotics</h3>
                <p className="text-gray-200 text-sm">Life-like humanoid robots for complex human interactions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-pink-300">Industrial Automation</h3>
                <p className="text-gray-200 text-sm">Advanced manufacturing robots for precision production</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <motion.section
          id="solutions"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              🤖 Advanced Robotics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of robotics solutions designed to revolutionize industries and enhance human capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-2xl font-bold text-orange-300 mb-4">AI-Powered Autonomous Robots</h3>
              <p className="text-gray-200 mb-6">
                Next-generation robots with advanced AI capabilities for autonomous decision-making and complex task execution.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Machine learning integration</li>
                <li>• Real-time decision making</li>
                <li>• Adaptive behavior</li>
                <li>• Self-learning capabilities</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🦾</div>
              <h3 className="text-2xl font-bold text-red-300 mb-4">Humanoid Robotics</h3>
              <p className="text-gray-200 mb-6">
                Life-like humanoid robots designed for human interaction, service, and complex social environments.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Human-like movement</li>
                <li>• Facial expression recognition</li>
                <li>• Natural language processing</li>
                <li>• Emotional intelligence</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Tech →
              </a>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🏭</div>
              <h3 className="text-2xl font-bold text-pink-300 mb-4">Industrial Automation</h3>
              <p className="text-gray-200 mb-6">
                Advanced manufacturing robots for precision production, quality control, and automated assembly lines.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• High-precision manufacturing</li>
                <li>• Quality inspection systems</li>
                <li>• Collaborative robotics</li>
                <li>• Predictive maintenance</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                View Solutions →
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🏥</div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Medical Robotics</h3>
              <p className="text-gray-200 mb-6">
                Precision medical robots for surgery, rehabilitation, and patient care with enhanced accuracy and safety.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Surgical precision</li>
                <li>• Minimally invasive procedures</li>
                <li>• Rehabilitation assistance</li>
                <li>• Patient monitoring</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Discover More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-green-300 mb-4">Agricultural Robotics</h3>
              <p className="text-gray-200 mb-6">
                Smart farming robots for precision agriculture, crop monitoring, and automated harvesting systems.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Precision farming</li>
                <li>• Crop monitoring</li>
                <li>• Automated harvesting</li>
                <li>• Soil analysis</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-6">🚗</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Autonomous Vehicles</h3>
              <p className="text-gray-200 mb-6">
                Self-driving vehicles and drones with advanced navigation, obstacle avoidance, and route optimization.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-300">
                <li>• Autonomous navigation</li>
                <li>• Obstacle detection</li>
                <li>• Route optimization</li>
                <li>• Safety systems</li>
              </ul>
              <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Explore Vehicles →
              </a>
            </div>
          </div>
        </motion.section>

        {/* Technology Features */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-orange-400/30"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              🔧 Advanced Technology Features
            </h2>
            <p className="text-xl text-gray-200">Cutting-edge technologies powering our robotics solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-bold text-orange-300 mb-3">Neural Networks</h3>
              <p className="text-gray-200 text-sm">Advanced AI algorithms for pattern recognition and decision making</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
              <div className="text-3xl mb-4">👁️</div>
              <h3 className="text-lg font-bold text-red-300 mb-3">Computer Vision</h3>
              <p className="text-gray-200 text-sm">Advanced visual processing for object recognition and navigation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-pink-300 mb-3">Machine Learning</h3>
              <p className="text-gray-200 text-sm">Self-improving algorithms that learn from experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-blue-300 mb-3">Edge Computing</h3>
              <p className="text-gray-200 text-sm">Real-time processing capabilities for instant decision making</p>
            </div>
          </div>
        </motion.section>

        {/* Success Stories */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              🏆 Success Stories
            </h2>
            <p className="text-xl text-gray-200">Real-world impact of our robotics solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full font-semibold">+300%</span>
                <span className="text-sm text-gray-300">Efficiency Gain</span>
              </div>
              <h3 className="text-xl font-bold text-orange-300 mb-3">Manufacturing Automation</h3>
              <p className="text-gray-200 mb-4">
                Implemented robotic assembly lines that increased production efficiency by 300% while reducing defects by 95%.
              </p>
              <div className="text-sm text-orange-400 font-semibold">Read Case Study →</div>
            </div>

            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-8 border border-red-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full font-semibold">99.9%</span>
                <span className="text-sm text-gray-300">Accuracy Rate</span>
              </div>
              <h3 className="text-xl font-bold text-red-300 mb-3">Medical Surgery</h3>
              <p className="text-gray-200 mb-4">
                Robotic surgery systems achieved 99.9% accuracy in complex procedures, reducing recovery time by 50%.
              </p>
              <div className="text-sm text-red-400 font-semibold">View Results →</div>
            </div>

            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-pink-400/30">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full font-semibold">$2M</span>
                <span className="text-sm text-gray-300">Cost Savings</span>
              </div>
              <h3 className="text-xl font-bold text-pink-300 mb-3">Agricultural Automation</h3>
              <p className="text-gray-200 mb-4">
                Automated farming robots saved $2M annually while increasing crop yield by 40% through precision agriculture.
              </p>
              <div className="text-sm text-pink-400 font-semibold">Learn More →</div>
            </div>
          </div>
        </motion.section>

        {/* Future Vision */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
            🤖 The Future of Robotics
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
            We're building the robots of tomorrow that will work alongside humans, enhance our capabilities, and create new possibilities for the future.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-400/30">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-lg font-bold text-orange-300 mb-2">Home Assistant</h3>
              <p className="text-gray-200 text-sm">Intelligent robots for household tasks and elderly care</p>
            </div>
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-red-300 mb-2">Healthcare</h3>
              <p className="text-gray-200 text-sm">Medical robots for surgery and patient care</p>
            </div>
            <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-lg font-bold text-pink-300 mb-2">Industry 4.0</h3>
              <p className="text-gray-200 text-sm">Smart factories with collaborative robots</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-purple-300 mb-2">Space Exploration</h3>
              <p className="text-gray-200 text-sm">Robots for space missions and colonization</p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-2xl p-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Embrace the Robotics Revolution?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join us in building the future of robotics. Let's create intelligent machines that enhance human capabilities and transform industries.
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