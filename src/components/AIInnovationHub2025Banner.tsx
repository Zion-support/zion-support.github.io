import React from 'react';
import { Link } from 'react-router-dom';

const AIInnovationHub2025Banner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 via-purple-600/90 to-pink-600/90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <span className="text-white text-sm font-medium">🚀 AI INNOVATION HUB 2025</span>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              AI Innovation Hub 2025
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Welcome to the ultimate destination for revolutionary AI breakthroughs, quantum computing solutions, and cutting-edge automation technologies that are reshaping the future.
            </p>

            {/* Innovation Categories */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🧠</span>
                </div>
                <span className="text-white font-medium">AI Breakthroughs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚛️</span>
                </div>
                <span className="text-white font-medium">Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🤖</span>
                </div>
                <span className="text-white font-medium">Automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🔮</span>
                </div>
                <span className="text-white font-medium">Future Tech</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/ai-innovation-hub-2025"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Innovation Hub
              </Link>
              <Link 
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30 text-center"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {/* Innovation Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Breakthroughs</h3>
                  <p className="text-indigo-100 text-sm">
                    Revolutionary AI technologies including neural synthesis, machine learning advances, and intelligent automation systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                  <p className="text-indigo-100 text-sm">
                    Next-generation quantum computing solutions that solve complex problems impossible for classical computers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Automation Solutions</h3>
                  <p className="text-indigo-100 text-sm">
                    Advanced automation platforms that streamline business processes and enable autonomous operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔮</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Future Technologies</h3>
                  <p className="text-indigo-100 text-sm">
                    Cutting-edge technologies and predictions for the future of AI, including singularity breakthroughs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Innovations */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Featured Innovations</h3>
            <p className="text-indigo-100 text-sm">Revolutionary AI breakthroughs and cutting-edge technologies</p>
          </div>
          
          {/* Innovation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
              <div className="text-lg font-bold text-white mb-1">🚀</div>
              <div className="text-indigo-200 text-sm">Ultimate Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
              <div className="text-lg font-bold text-white mb-1">⚛️</div>
              <div className="text-indigo-200 text-sm">Quantum AI Fusion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
              <div className="text-lg font-bold text-white mb-1">🧠</div>
              <div className="text-indigo-200 text-sm">Neural Synthesis</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
              <div className="text-lg font-bold text-white mb-1">🤖</div>
              <div className="text-indigo-200 text-sm">Autonomous Systems</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
              <div className="text-lg font-bold text-white mb-1">⚡</div>
              <div className="text-indigo-200 text-sm">Singularity AI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
              <div className="text-lg font-bold text-white mb-1">🎯</div>
              <div className="text-indigo-200 text-sm">AI Services</div>
            </div>
          </div>
        </div>

        {/* Innovation Metrics */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">100K%</div>
              <div className="text-indigo-200 text-sm">Performance Gain</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.99%</div>
              <div className="text-indigo-200 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">500+</div>
              <div className="text-indigo-200 text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">98%</div>
              <div className="text-indigo-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInnovationHub2025Banner;