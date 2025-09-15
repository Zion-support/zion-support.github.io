import React from 'react';
import Link from 'next/link';
import { 
  CpuChipIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const QuantumAIRevolution2025PromotionalBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
      {/* Quantum Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <SparklesIcon className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="text-sm font-medium">🌌 QUANTUM AI REVOLUTION</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Quantum AI Revolution
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2025 Enterprise Breakthrough
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the future of computing with <strong>Quantum AI</strong>. 
            Discover how quantum computing and AI converge to solve impossible problems and unlock <strong>$65B market opportunities</strong>.
          </p>
        </div>

        {/* Quantum Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <CpuChipIcon className="w-8 h-8 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold">1000x Speed</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Quantum algorithms solve complex optimization problems in seconds instead of years.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <BoltIcon className="w-8 h-8 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold">95% Accuracy</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Quantum machine learning achieves unprecedented accuracy in complex scenarios.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="w-8 h-8 text-pink-400 mr-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold">Unbreakable</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Quantum cryptography provides perfect security for sensitive business data.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="w-8 h-8 text-yellow-400 mr-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold">$65B Market</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Massive market opportunity with quantum computing projected to reach $65B by 2030.
            </p>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
          <h3 className="text-2xl font-bold mb-8 text-center">Industry Applications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Financial Services</h4>
              <p className="text-gray-300 text-sm">
                Quantum portfolio optimization, risk assessment, and algorithmic trading with 340% higher returns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Healthcare</h4>
              <p className="text-gray-300 text-sm">
                Quantum drug discovery, molecular simulation, and personalized medicine with 70% faster development.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h4 className="text-xl font-bold mb-2">Manufacturing</h4>
              <p className="text-gray-300 text-sm">
                Quantum optimization for supply chains, production scheduling, and quality control with 45% efficiency gains.
              </p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">78%</div>
            <div className="text-sm text-gray-300">Banks Exploring Quantum AI</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">65%</div>
            <div className="text-sm text-gray-300">Pharma Companies Using Quantum</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-pink-400 mb-2">72%</div>
            <div className="text-sm text-gray-300">Manufacturers Optimizing</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">85%</div>
            <div className="text-sm text-gray-300">Tech Giants Investing</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/quantum-ai-revolution-2025-enterprise-breakthrough"
              className="group bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                Explore Quantum AI Guide
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link
              href="/services/quantum-ai-consulting"
              className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Get Quantum Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
          
          <p className="text-gray-300 text-sm">
            Join the quantum revolution. The future of computing is quantum, and the future is now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuantumAIRevolution2025PromotionalBanner;