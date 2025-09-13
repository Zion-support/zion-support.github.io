import React from 'react';
import { Link } from 'react-router-dom';

const FutureTechnologiesShowcaseBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-cyan-600 to-blue-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-cyan-600/90 to-blue-600/90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <span className="text-white text-sm font-medium">🚀 FUTURE TECHNOLOGIES 2030-2035</span>
            </div>

            {/* Main Content */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Future Technologies Showcase
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Experience the future of technology with revolutionary AI breakthroughs, quantum AI fusion, advanced neural synthesis, and singularity achievements that will reshape our world.
            </p>

            {/* Technology Categories */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🧠</span>
                </div>
                <span className="text-white font-medium">Neural Synthesis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <span className="text-white font-medium">Singularity</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">⚛️</span>
                </div>
                <span className="text-white font-medium">Quantum Fusion</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🔮</span>
                </div>
                <span className="text-white font-medium">Predictions</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/future-technologies-2030-2035-showcase"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Future Tech
              </Link>
              <Link 
                to="/contact"
                className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30 text-center"
              >
                Get Early Access
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {/* Technology Cards */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI 2030 Neural Synthesis</h3>
                  <p className="text-purple-100 text-sm">
                    Revolutionary neural synthesis technology creating AI with human-like reasoning, creativity, and emotional intelligence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI 2035 Singularity</h3>
                  <p className="text-purple-100 text-sm">
                    The ultimate achievement where AI surpasses human intelligence and accelerates beyond human comprehension.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚛️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quantum AI Fusion 2029</h3>
                  <p className="text-purple-100 text-sm">
                    Revolutionary fusion of quantum computing and AI enabling processing speeds beyond current limitations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Advanced Automation 2030</h3>
                  <p className="text-purple-100 text-sm">
                    Fully autonomous systems that operate without human intervention, making complex decisions and adapting to any environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Timeline */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Technology Development Roadmap</h3>
            <p className="text-purple-100 text-sm">2025 → 2027 → 2029 → 2030 → 2035</p>
          </div>
          
          {/* Timeline Preview */}
          <div className="grid grid-cols-5 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">2025</div>
              <div className="text-purple-200 text-xs">AI Revolution</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">2027</div>
              <div className="text-purple-200 text-xs">Quantum Integration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">2029</div>
              <div className="text-purple-200 text-xs">Quantum AI Fusion</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">2030</div>
              <div className="text-purple-200 text-xs">Neural Synthesis</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-lg font-bold text-white mb-1">2035</div>
              <div className="text-purple-200 text-xs">Singularity</div>
            </div>
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">100K%</div>
              <div className="text-purple-200 text-sm">Performance Gain</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.99%</div>
              <div className="text-purple-200 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">∞</div>
              <div className="text-purple-200 text-sm">Problem Solving</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">🌍</div>
              <div className="text-purple-200 text-sm">Global Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTechnologiesShowcaseBanner;