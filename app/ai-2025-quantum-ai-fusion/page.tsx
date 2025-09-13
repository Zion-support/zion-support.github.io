import React from 'react';
import Link from 'next/link';
import SEO from '../../../components/SEO';

const AI2025QuantumAIFusionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <SEO
        title="AI 2025 Quantum AI Fusion - Revolutionary Quantum Intelligence"
        description="Explore the revolutionary fusion of quantum computing and artificial intelligence. Discover quantum AI algorithms, quantum machine learning, and next-gen intelligent systems."
        keywords="quantum AI, quantum machine learning, quantum computing, AI fusion, quantum algorithms, 2025"
      />
      
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-purple-600 text-white animate-pulse">
                  ⚛️ QUANTUM AI FUSION
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                AI 2025 Quantum AI Fusion
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
                Experience the revolutionary fusion of quantum computing and artificial intelligence. 
                Unlock unprecedented computational power and intelligence capabilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="#quantum-solutions"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Quantum AI
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Access Platform
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Solutions Section */}
        <section id="quantum-solutions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary Quantum AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of quantum computing combined with advanced AI algorithms 
                to solve previously impossible problems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quantum Machine Learning */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Machine Learning</h3>
                <p className="text-gray-300 mb-6">
                  Leverage quantum algorithms to accelerate machine learning processes 
                  and achieve exponential speedups in training and inference.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Quantum Neural Networks</li>
                  <li>• Quantum Optimization</li>
                  <li>• Quantum Feature Maps</li>
                  <li>• Quantum Clustering</li>
                </ul>
              </div>

              {/* Quantum Optimization */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Optimization</h3>
                <p className="text-gray-300 mb-6">
                  Solve complex optimization problems with quantum algorithms that 
                  outperform classical methods by orders of magnitude.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Quantum Annealing</li>
                  <li>• QAOA Algorithms</li>
                  <li>• Portfolio Optimization</li>
                  <li>• Supply Chain Optimization</li>
                </ul>
              </div>

              {/* Quantum Cryptography */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-pink-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quantum Cryptography</h3>
                <p className="text-gray-300 mb-6">
                  Implement unbreakable quantum encryption and secure communication 
                  protocols for the quantum era.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Quantum Key Distribution</li>
                  <li>• Post-Quantum Cryptography</li>
                  <li>• Quantum Random Number Generation</li>
                  <li>• Quantum Digital Signatures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quantum AI Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented performance improvements with quantum AI fusion technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">1000x</h3>
                <p className="text-gray-300">Faster Processing</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-gray-300">Accuracy Rate</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">50x</h3>
                <p className="text-gray-300">Energy Efficiency</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🔮</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">∞</h3>
                <p className="text-gray-300">Possibilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum AI fusion is transforming industries and solving 
                previously impossible challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    Q
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Drug Discovery</h4>
                    <p className="text-gray-600">Pharmaceutical Research</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Quantum AI reduced drug discovery time from 10 years to 2 years, 
                  identifying promising compounds 100x faster than traditional methods."
                </p>
                <div className="flex items-center text-cyan-600 font-semibold">
                  <span className="text-2xl mr-2">💊</span>
                  5x Faster Discovery
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    Q
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">Financial Modeling</h4>
                    <p className="text-gray-600">Investment Banking</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Quantum AI portfolio optimization achieved 40% better returns 
                  while reducing risk by 60% compared to classical methods."
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <span className="text-2xl mr-2">📈</span>
                  40% Better Returns
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Quantum AI Revolution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be among the first to experience the power of quantum AI fusion and 
              unlock unlimited possibilities for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Access Quantum AI
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/quantum-computing-2025"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AI2025QuantumAIFusionPage;