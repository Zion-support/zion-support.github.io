import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const AI2025QuantumBreakthroughPromotionBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220%200%2060%2060%22 xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E%3Cg fill="%23ffffff" fill-opacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            AI 2025 Quantum Computing
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Breakthrough Revolution
            </span>
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how quantum computing is transforming AI capabilities and revolutionizing business operations. 
            Learn about practical applications and implementation strategies that are reshaping industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">1000x Speed Improvements</h3>
            <p className="text-gray-200 mb-4">
              Quantum algorithms solving complex optimization problems 1000x faster than classical systems
            </p>
            <div className="text-2xl font-bold text-yellow-400">1000x</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">Quantum Machine Learning</h3>
            <p className="text-gray-200 mb-4">
              Enhanced pattern recognition processing massive datasets previously impossible to analyze
            </p>
            <div className="text-2xl font-bold text-green-400">∞</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Real-Time Decision Making</h3>
            <p className="text-gray-200 mb-4">
              Complex strategic decisions made in real-time using quantum-enhanced AI systems
            </p>
            <div className="text-2xl font-bold text-blue-400">Real-Time</div>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Transform Your Business Today</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">40-60%</div>
                <div className="text-gray-200">Computational Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">30-50%</div>
                <div className="text-gray-200">Faster Time-to-Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">25-40%</div>
                <div className="text-gray-200">Operational Overhead Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">20-35%</div>
                <div className="text-gray-200">Revenue Growth</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/blog/ai-2025-quantum-computing-breakthrough"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Read Full Article →
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="text-sm text-gray-300">
            <p>🚀 Join thousands of businesses already transforming with quantum-AI technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2025QuantumBreakthroughPromotionBanner;