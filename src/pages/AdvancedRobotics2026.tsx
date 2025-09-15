import React from 'react';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-slate-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🤖 ADVANCED ROBOTICS • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Revolutionary robotics systems that are transforming industries, healthcare, and daily life 
              through advanced AI, machine learning, and human-robot collaboration.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-gradient-to-r from-gray-600 to-slate-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Robotics →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-600 transition-all duration-300 font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Features Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">🤖 Revolutionary Robotics Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the groundbreaking robotics features that are reshaping automation and human-robot interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-600/20 to-slate-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🧠</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">AI-Powered Robotics</h3>
              <p className="text-gray-200 mb-6 text-center">
                Advanced AI systems that enable robots to learn, adapt, and make intelligent decisions autonomously
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Machine learning algorithms</li>
                <li>• Computer vision systems</li>
                <li>• Natural language processing</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🤝</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Human-Robot Collaboration</h3>
              <p className="text-blue-200 mb-6 text-center">
                Safe and intuitive collaboration between humans and robots in shared workspaces
              </p>
              <ul className="text-blue-300 space-y-2 text-sm">
                <li>• Collaborative robots (cobots)</li>
                <li>• Safety systems</li>
                <li>• Intuitive interfaces</li>
                <li>• Real-time adaptation</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:scale-105 transition-all duration-300">
              <div className="text-6xl mb-6 text-center">🏭</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Industrial Automation</h3>
              <p className="text-green-200 mb-6 text-center">
                Advanced manufacturing and industrial automation systems for maximum efficiency and precision
              </p>
              <ul className="text-green-300 space-y-2 text-sm">
                <li>• Automated assembly lines</li>
                <li>• Quality control systems</li>
                <li>• Predictive maintenance</li>
                <li>• Flexible manufacturing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">🔬 Technical Specifications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unprecedented robotics capabilities that push the boundaries of automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-gray-600/20 to-slate-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">AI & Processing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Processing Power:</span>
                  <span className="text-white font-bold">100+ TOPS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Learning Speed:</span>
                  <span className="text-white font-bold">Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Decision Time:</span>
                  <span className="text-white font-bold">&lt;1ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Memory Capacity:</span>
                  <span className="text-white font-bold">1TB+</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Physical Capabilities</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Precision:</span>
                  <span className="text-white font-bold">±0.01mm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Payload Capacity:</span>
                  <span className="text-white font-bold">500kg+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Speed:</span>
                  <span className="text-white font-bold">10m/s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Dexterity:</span>
                  <span className="text-white font-bold">Human-level</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">🚀 Revolutionary Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform industries and daily life with these groundbreaking robotics applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-600/20 to-slate-600/20 backdrop-blur-sm rounded-xl p-6 border border-gray-400/30">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-white mb-3">Medical Robotics</h3>
              <p className="text-gray-200 text-sm mb-4">
                Surgical robots and medical assistants that enhance precision and patient care
              </p>
              <div className="text-gray-300 text-xs">
                • Surgical precision • Medical diagnosis • Patient care • Rehabilitation
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-bold text-white mb-3">Manufacturing</h3>
              <p className="text-blue-200 text-sm mb-4">
                Automated manufacturing systems that optimize production and quality control
              </p>
              <div className="text-blue-300 text-xs">
                • Assembly automation • Quality control • Production optimization • Supply chain
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-white mb-3">Service Robotics</h3>
              <p className="text-green-200 text-sm mb-4">
                Service robots that assist with daily tasks and improve quality of life
              </p>
              <div className="text-green-300 text-xs">
                • Home assistance • Elderly care • Cleaning services • Personal assistance
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-white mb-3">Autonomous Vehicles</h3>
              <p className="text-purple-200 text-sm mb-4">
                Self-driving vehicles and transportation systems for safer and more efficient mobility
              </p>
              <div className="text-purple-300 text-xs">
                • Self-driving cars • Autonomous trucks • Delivery robots • Transportation systems
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-white mb-3">Agricultural Robotics</h3>
              <p className="text-yellow-200 text-sm mb-4">
                Farming robots that optimize crop production and sustainable agriculture
              </p>
              <div className="text-yellow-300 text-xs">
                • Precision farming • Crop monitoring • Harvesting automation • Soil analysis
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-red-400/30">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Search & Rescue</h3>
              <p className="text-red-200 text-sm mb-4">
                Emergency response robots that assist in disaster relief and rescue operations
              </p>
              <div className="text-red-300 text-xs">
                • Disaster response • Search operations • Emergency assistance • Hazard detection
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-gray-600 to-slate-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Embrace the Future of Robotics?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join the robotics revolution and discover how our advanced systems can transform 
              your industry, improve efficiency, and enhance human capabilities.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-white text-gray-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Start Your Robotics Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-600 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;