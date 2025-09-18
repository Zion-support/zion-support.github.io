import React from 'react';

const AdvancedTechShowcase2026: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-full text-sm font-bold mb-6">
            🚀 ADVANCED TECH 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Next-Generation Technology Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Experience the future of technology with our cutting-edge solutions in AI, quantum computing, 
            neural interfaces, and advanced automation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* AI & Machine Learning */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-cyan-400/50">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI & ML</h3>
            <p className="text-slate-300 mb-6">
              Advanced artificial intelligence and machine learning solutions for enterprise applications.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div>• Autonomous Systems</div>
              <div>• Predictive Analytics</div>
              <div>• Natural Language Processing</div>
              <div>• Computer Vision</div>
            </div>
          </div>

          {/* Quantum Computing */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-purple-400/50">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Quantum Computing</h3>
            <p className="text-slate-300 mb-6">
              Revolutionary quantum computing solutions for complex problem solving.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div>• Quantum Algorithms</div>
              <div>• Cryptography</div>
              <div>• Optimization</div>
              <div>• Simulation</div>
            </div>
          </div>

          {/* Neural Interfaces */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-green-400/50">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-400">Neural Interfaces</h3>
            <p className="text-slate-300 mb-6">
              Direct brain-computer interfaces for enhanced human capabilities.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div>• BCI Technology</div>
              <div>• Neural Decoding</div>
              <div>• Medical Applications</div>
              <div>• Augmented Reality</div>
            </div>
          </div>

          {/* Advanced Automation */}
          <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-orange-400/50">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Automation</h3>
            <p className="text-slate-300 mb-6">
              Intelligent automation systems for seamless operations.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div>• Process Automation</div>
              <div>• Smart Workflows</div>
              <div>• Robotic Systems</div>
              <div>• IoT Integration</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-12 mb-16 border border-slate-700/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-slate-300">AI Models Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-slate-300">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-slate-300">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-slate-300">Countries Served</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our advanced technology solutions to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechShowcase2026;