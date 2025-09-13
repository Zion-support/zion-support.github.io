import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Zap, Brain, Rocket } from 'lucide-react';

const AI2025UltimateBreakthroughAnnouncementBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span className="text-red-300 text-sm font-medium">BREAKING: Ultimate AI 2025 Breakthrough</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI 2025
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ultimate Breakthrough
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most advanced AI breakthrough of 2025: Neural Synthesis, Quantum Processing, and Autonomous Operations delivering unprecedented results
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-lg px-4 py-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">10,000x Faster Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-lg px-4 py-2">
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">99.9% Accuracy Rate</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-lg px-4 py-2">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">5,000% ROI Increase</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Neural Synthesis Technology</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary brain-computer interface technology that enables direct neural processing, 
              accelerating AI operations by unprecedented magnitudes.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Real-time neural pattern recognition
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Quantum-enhanced processing cores
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Autonomous decision-making algorithms
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Quantum Processing Breakthrough</h3>
            <p className="text-gray-300 mb-6">
              Next-generation quantum computing integration that processes complex algorithms 
              in microseconds, revolutionizing computational capabilities.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Quantum entanglement processing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Superposition state optimization
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Zero-latency quantum gates
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/ai-2025-ultimate-breakthrough" 
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Ultimate Breakthrough
            </Link>
            <Link 
              to="/ai-2025-case-studies" 
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm"
            >
              View Success Stories
            </Link>
          </div>
          
          <p className="text-gray-400 mt-6 text-sm">
            Join 10,000+ companies already experiencing the AI 2025 revolution
          </p>
        </div>
      </div>
    </section>
  );
};

export default AI2025UltimateBreakthroughAnnouncementBanner;