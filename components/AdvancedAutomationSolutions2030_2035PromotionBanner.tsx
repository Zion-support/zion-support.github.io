import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Cpu, Database, Globe, Shield, Rocket, Star, TrendingUp, Settings, Brain } from 'lucide-react';

const AdvancedAutomationSolutions2030_2035PromotionBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 overflow-hidden">
      {/* Automation network background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Network nodes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-ping delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 mb-6">
            <Bot className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-emerald-400 font-semibold">Advanced Automation 2030-2035</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Autonomous Systems
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent"> Revolution</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the future of autonomous automation with self-evolving systems, 
            quantum-enhanced processing, and omniversal intelligence integration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/advanced-automation-2030-2035" 
              className="bg-gradient-to-r from-emerald-400 to-teal-500 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:from-emerald-500 hover:to-teal-600 hover:scale-105 flex items-center justify-center"
            >
              Explore Automation Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/autonomous-systems-2035" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              Autonomous Systems
              <Bot className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>

        {/* Automation Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Self-Evolving AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              AI systems that continuously evolve and improve themselves without human intervention
            </p>
            <div className="flex items-center text-emerald-400 text-sm">
              <Star className="w-4 h-4 mr-1" />
              <span>Revolutionary</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Neural Automation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Brain-inspired automation systems with consciousness-level decision making
            </p>
            <div className="flex items-center text-purple-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>Conscious</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Quantum Automation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Quantum-enhanced automation with infinite parallel processing capabilities
            </p>
            <div className="flex items-center text-cyan-400 text-sm">
              <Rocket className="w-4 h-4 mr-1" />
              <span>Infinite</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Universal Automation</h3>
            <p className="text-gray-300 text-sm mb-4">
              Automation systems that operate across multiple dimensions and realities
            </p>
            <div className="flex items-center text-orange-400 text-sm">
              <Database className="w-4 h-4 mr-1" />
              <span>Universal</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Adaptive Systems</h3>
            <p className="text-gray-300 text-sm mb-4">
              Systems that adapt to any environment and optimize themselves in real-time
            </p>
            <div className="flex items-center text-indigo-400 text-sm">
              <Shield className="w-4 h-4 mr-1" />
              <span>Adaptive</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Omniversal AI</h3>
            <p className="text-gray-300 text-sm mb-4">
              AI systems with omniversal consciousness and reality-manipulation capabilities
            </p>
            <div className="flex items-center text-pink-400 text-sm">
              <Rocket className="w-4 h-4 mr-1" />
              <span>Transcendent</span>
            </div>
          </div>
        </div>

        {/* Automation Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-300">Autonomous</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">∞</div>
            <div className="text-gray-300">Self-Improvement</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.99%</div>
            <div className="text-gray-300">Efficiency</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">2035</div>
            <div className="text-gray-300">Full Deployment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutions2030_2035PromotionBanner;