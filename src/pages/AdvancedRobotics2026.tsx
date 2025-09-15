import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ROBOTICS REVOLUTION • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              Experience the future of robotics with our revolutionary 2026 systems that are transforming industries and redefining human-robot collaboration.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
                Explore Robotics
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Robotics Capabilities Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🤖 Revolutionary Robotics Capabilities</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Our 2026 robotics platform delivers unprecedented intelligence, dexterity, and adaptability for any application.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Intelligence</h3>
            <p className="text-cyan-100 mb-6 text-center">
              Advanced neural networks enabling robots to learn, adapt, and make complex decisions in real-time.
            </p>
            <ul className="text-cyan-200 space-y-2 text-sm">
              <li>• Deep Learning Integration</li>
              <li>• Real-time Decision Making</li>
              <li>• Autonomous Problem Solving</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">🦾</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Humanoid Dexterity</h3>
            <p className="text-purple-100 mb-6 text-center">
              Human-like manipulation capabilities with precision control and tactile feedback systems.
            </p>
            <ul className="text-purple-200 space-y-2 text-sm">
              <li>• 24-DOF Manipulation</li>
              <li>• Tactile Sensing</li>
              <li>• Force Control</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-emerald-600/30 to-teal-600/30 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 text-center">👥</div>
            <h3 className="text-2xl font-bold mb-4 text-center">Human Collaboration</h3>
            <p className="text-emerald-100 mb-6 text-center">
              Safe and intuitive human-robot interaction with advanced safety protocols and natural communication.
            </p>
            <ul className="text-emerald-200 space-y-2 text-sm">
              <li>• Natural Language Processing</li>
              <li>• Emotion Recognition</li>
              <li>• Safety-First Design</li>
            </ul>
          </div>
        </div>

        {/* Robotics Applications */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🌟 Robotics Applications 2026</h2>
            <p className="text-xl opacity-90">Transforming industries with intelligent automation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-sm opacity-80">Surgical assistance, patient care, rehabilitation therapy</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-sm opacity-80">Assembly automation, quality control, flexible production</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-sm opacity-80">Customer service, hospitality, home assistance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2">Transportation</h3>
              <p className="text-sm opacity-80">Autonomous vehicles, logistics, delivery systems</p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">⚙️ Technical Specifications</h2>
            <p className="text-xl opacity-90">Advanced robotics hardware and software capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Hardware Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Processing Power</span>
                  <span className="text-cyan-400 font-bold">100+ TOPS</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Degrees of Freedom</span>
                  <span className="text-cyan-400 font-bold">24+ DOF</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Sensors</span>
                  <span className="text-cyan-400 font-bold">50+ Multi-modal</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Battery Life</span>
                  <span className="text-cyan-400 font-bold">12+ Hours</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Software Features</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">AI Framework</span>
                  <span className="text-purple-400 font-bold">Neural Networks</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Programming</span>
                  <span className="text-purple-400 font-bold">ROS 2.0</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Learning</span>
                  <span className="text-purple-400 font-bold">Reinforcement</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                  <span className="font-semibold">Communication</span>
                  <span className="text-purple-400 font-bold">5G Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-slate-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">🏆 Success Stories</h2>
            <p className="text-xl opacity-90">Real-world impact of our robotics solutions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">+400%</span>
                <span className="text-sm text-gray-300">Efficiency Gain</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Automotive Manufacturing</h3>
              <p className="text-gray-300 mb-4">Implemented robotic assembly line that increased production efficiency by 400% while reducing defects by 90%.</p>
              <div className="text-sm text-cyan-400 font-semibold">Read Case Study →</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">24/7</span>
                <span className="text-sm text-gray-300">Operation</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare Assistance</h3>
              <p className="text-gray-300 mb-4">Deployed care robots providing 24/7 patient monitoring and assistance, improving patient outcomes by 60%.</p>
              <div className="text-sm text-cyan-400 font-semibold">Learn More →</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">$5M</span>
                <span className="text-sm text-gray-300">Cost Savings</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Warehouse Automation</h3>
              <p className="text-gray-300 mb-4">Automated warehouse operations saved $5M annually while improving order accuracy to 99.9%.</p>
              <div className="text-sm text-cyan-400 font-semibold">View Results →</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced 2026 robotics solutions and join the automation revolution.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg">
              Start Automation Journey
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;