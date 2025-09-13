import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Brain, Cpu, Database, Shield, Globe } from 'lucide-react';

const RevolutionaryTech2025PromotionBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-teal-500/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-cyan-500/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/4 w-12 h-12 bg-emerald-500/10 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Technology 2025
            </span>
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most advanced technological breakthroughs that are reshaping industries, 
            transforming businesses, and creating unprecedented opportunities for growth and innovation.
          </p>

          {/* Technology highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-lg mb-4 mx-auto">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Automation</h3>
              <p className="text-gray-300 text-sm">Intelligent systems that automate complex processes with human-level decision making</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-lg mb-4 mx-auto">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Edge Computing</h3>
              <p className="text-gray-300 text-sm">Ultra-fast processing at the edge for real-time applications and IoT devices</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mb-4 mx-auto">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Databases</h3>
              <p className="text-gray-300 text-sm">Next-generation data storage and retrieval with quantum-enhanced performance</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-lg mb-4 mx-auto">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zero-Trust Security</h3>
              <p className="text-gray-300 text-sm">Advanced security frameworks that protect against evolving cyber threats</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-lg mb-4 mx-auto">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Distributed Systems</h3>
              <p className="text-gray-300 text-sm">Scalable architectures that work seamlessly across global networks</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mb-4 mx-auto">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
              <p className="text-gray-300 text-sm">Ultra-low latency systems for mission-critical applications</p>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/revolutionary-tech-2025" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5 mr-2" />
              Explore Revolutionary Tech
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link 
              to="/tech-implementation-guide" 
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Implementation Guide
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Impact metrics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">85%</div>
              <div className="text-gray-300">Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">10x</div>
              <div className="text-gray-300">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech2025PromotionBanner;