import React from 'react';
import Link from 'next/link';

const QuantumAI2025RevolutionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 relative overflow-hidden">
      {/* Quantum-inspired background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-pink-400 rounded-full opacity-12 animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-cyan-300 rounded-full opacity-25 animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8 backdrop-blur-sm border border-white border-opacity-30">
            <span className="text-lg font-bold">⚛️ QUANTUM AI REVOLUTION 2025</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            The Future is Quantum AI
          </h2>
          <p className="text-2xl md:text-3xl opacity-90 mb-10 max-w-5xl mx-auto leading-relaxed">
            Experience the revolutionary convergence of quantum computing and artificial intelligence that's reshaping the business landscape
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Quantum AI Features */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🚀</div>
                <h3 className="text-2xl font-bold">Exponential Processing Power</h3>
              </div>
              <p className="text-gray-200 text-lg">
                Quantum AI can process complex optimization problems 1000x faster than classical computers, enabling breakthrough solutions in real-time.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🧠</div>
                <h3 className="text-2xl font-bold">Revolutionary Machine Learning</h3>
              </div>
              <p className="text-gray-200 text-lg">
                Quantum neural networks and quantum machine learning algorithms unlock unprecedented pattern recognition and decision-making capabilities.
              </p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">🔐</div>
                <h3 className="text-2xl font-bold">Quantum-Safe Security</h3>
              </div>
              <p className="text-gray-200 text-lg">
                Post-quantum cryptography and quantum key distribution provide unbreakable security for the quantum computing era.
              </p>
            </div>
          </div>

          {/* Right Column - Industry Impact */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Industry Transformations</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
                  <span className="text-lg">Financial Services: Portfolio optimization and risk modeling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
                  <span className="text-lg">Healthcare: Drug discovery and genomic analysis</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
                  <span className="text-lg">Manufacturing: Supply chain optimization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3"></div>
                  <span className="text-lg">Energy: Grid optimization and renewable management</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quantum AI Benefits</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">1000x</div>
                  <div className="text-sm">Faster Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                  <div className="text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">65B$</div>
                  <div className="text-sm">Market Size 2025</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">340%</div>
                  <div className="text-sm">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Content */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-12 border border-white border-opacity-20 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold mb-4">Complete Quantum AI Guide</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Master the revolutionary technology that's reshaping business operations. Our comprehensive guide covers everything from quantum principles to real-world implementation strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-xl font-bold mb-2">Complete Guide</h4>
              <p className="text-gray-300">15-minute comprehensive overview of quantum AI applications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏗️</div>
              <h4 className="text-xl font-bold mb-2">Implementation</h4>
              <p className="text-gray-300">Step-by-step implementation strategies and best practices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-xl font-bold mb-2">Case Studies</h4>
              <p className="text-gray-300">Real-world success stories and ROI examples</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/blog/quantum-ai-2025-business-transformation-complete-guide"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 shadow-lg"
            >
              Read Complete Guide →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-gray-800 mb-6">
              Join the quantum AI revolution and gain unprecedented competitive advantages
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Get Quantum AI Consultation
              </Link>
              <Link
                href="/services/quantum-ai"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                Explore Quantum AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumAI2025RevolutionBanner;