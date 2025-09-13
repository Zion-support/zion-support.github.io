import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Award, Globe } from 'lucide-react';

const AI2025_2030UltimateContentRevolutionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-400/30 mb-6">
            <Brain className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-300 font-semibold">AI 2025-2030 Ultimate Content Revolution</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Ultimate AI Content Revolution
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2025-2030
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most comprehensive collection of AI predictions, quantum computing breakthroughs, 
            and revolutionary automation solutions that will transform your business and shape the future.
          </p>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">2,500%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">50M+</div>
              <div className="text-sm text-gray-300">Users Impacted</div>
            </div>
          </div>
        </div>

        {/* Content Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">AI Predictions 2025-2030</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Comprehensive predictions covering neural synthesis, quantum-AI fusion, and transcendent intelligence breakthroughs.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Neural Synthesis Revolution</li>
              <li>• Quantum-AI Fusion Breakthroughs</li>
              <li>• Transcendent Intelligence Systems</li>
              <li>• Autonomous Decision Networks</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Quantum Computing</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Revolutionary quantum computing solutions including error-corrected quantum computers and quantum internet.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Error-Corrected Quantum Computers</li>
              <li>• Quantum Internet Infrastructure</li>
              <li>• Quantum Machine Learning</li>
              <li>• Quantum Supremacy Achievements</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Automation Solutions</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Advanced automation solutions delivering unprecedented efficiency and intelligent process automation.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Intelligent Process Automation</li>
              <li>• Autonomous Decision Systems</li>
              <li>• Predictive Maintenance AI</li>
              <li>• Smart Resource Management</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/ai-2025-ultimate-content-revolution" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Explore Ultimate Content Revolution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-2025-2030-predictions" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50 flex items-center justify-center"
            >
              View AI Predictions
              <Globe className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <p className="text-gray-400 text-sm">
            Join 50M+ users already experiencing the future of AI and automation
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2025_2030UltimateContentRevolutionBanner;