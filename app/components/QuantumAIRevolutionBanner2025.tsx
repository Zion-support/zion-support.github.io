import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, TrendingUp, Shield, Users } from 'lucide-react';

const QuantumAIRevolutionBanner2025 = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">🚀 QUANTUM AI BREAKTHROUGH 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            The Quantum-AI Revolution
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how quantum computing and AI are transforming enterprise operations with 
            <span className="font-bold text-yellow-400"> 10,000x faster processing</span> and 
            <span className="font-bold text-cyan-400"> $150M+ annual savings</span>
          </p>
        </div>

        {/* Key Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold">Quantum Intelligence</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Leverage quantum computing for exponential problem-solving capabilities and unprecedented AI performance.
            </p>
            <div className="text-2xl font-bold text-yellow-400">10,000x Faster</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-cyan-400 mr-3" />
              <h3 className="text-xl font-bold">Massive ROI</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Achieve extraordinary returns with quantum-powered optimization and AI-driven efficiency gains.
            </p>
            <div className="text-2xl font-bold text-cyan-400">1,000%+ ROI</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold">Future-Proof</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Build competitive advantages that will define the next decade of business success.
            </p>
            <div className="text-2xl font-bold text-green-400">2025-2035</div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Featured Quantum-AI Content</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                <h4 className="font-bold">Generative AI Revolution</h4>
              </div>
              <p className="text-sm text-gray-200 mb-4">
                How Generative AI is transforming enterprise operations with 340% productivity gains.
              </p>
              <Link 
                href="/blog/ai-2025-generative-ai-revolution-enterprise-transformation"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold text-sm"
              >
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <Brain className="w-6 h-6 text-cyan-400 mr-2" />
                <h4 className="font-bold">Quantum Computing Guide</h4>
              </div>
              <p className="text-sm text-gray-200 mb-4">
                Complete implementation guide for enterprise quantum computing and AI integration.
              </p>
              <Link 
                href="/resources/ai-2025-quantum-implementation-complete-guide"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
              >
                Download Guide <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-6 h-6 text-green-400 mr-2" />
                <h4 className="font-bold">$150M Success Story</h4>
              </div>
              <p className="text-sm text-gray-200 mb-4">
                Fortune 500 manufacturing company achieves massive savings with quantum optimization.
              </p>
              <Link 
                href="/case-studies/ai-2025-manufacturing-transformation-quantum-optimization-success"
                className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold text-sm"
              >
                View Case Study <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Quantum Journey
            </Link>
            <Link
              href="/resources/ai-2025-quantum-implementation-complete-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Download Complete Guide
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>500+ Companies Transformed</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span>1,000%+ Average ROI</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              <span>Quantum-Safe Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAIRevolutionBanner2025;