import React from 'react';
import Link from 'next/link';

const NewestContent2025Banner = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-16">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">🚀</span>
            <span className="text-purple-600 font-semibold text-lg">
              BREAKING: 3 REVOLUTIONARY ARTICLES JUST PUBLISHED!
            </span>
            <span className="text-2xl">⚡</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            September 30, 2025 — Cutting-Edge AI Insights
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Edge Computing • Neural Networks • Quantum Security — The future of enterprise AI starts here
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Article 1: AI Edge Computing */}
          <Link href="/blog/ai-edge-computing-real-time-2025" className="group block">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-xs font-bold rounded-full">
                    🔥 HOT
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Edge Computing Real-Time Processing 2025
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Revolutionary edge AI processing delivering 99.9% uptime, 50ms response times, and autonomous decision-making at the network edge.
                </p>

                {/* Category & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                    Edge Computing
                  </span>
                  <span className="text-blue-600 text-sm font-semibold">Read More →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 2: Neural Networks */}
          <Link href="/blog/ai-neural-networks-breakthrough-2025" className="group block">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold rounded-full">
                    🚀 NEW
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Neural Networks Breakthrough 2025
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Advanced neural architectures achieving 95% accuracy improvements, 10x faster training, and autonomous learning capabilities.
                </p>

                {/* Category & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                    Neural Networks
                  </span>
                  <span className="text-purple-600 text-sm font-semibold">Read More →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Article 3: Quantum Security */}
          <Link href="/blog/quantum-security-ai-2025" className="group block">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 h-full">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              <div className="relative">
                {/* Icon & Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-2xl">
                    🔐
                  </div>
                  <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                    🛡️ SECURE
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  Quantum Security AI 2025
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Quantum-resistant AI security protocols protecting against next-generation cyber threats with 99.99% encryption strength.
                </p>

                {/* Category & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                    Quantum Security
                  </span>
                  <span className="text-green-600 text-sm font-semibold">Read More →</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-gray-600 mb-6">
              Get exclusive access to cutting-edge AI insights and implementation strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Articles
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestContent2025Banner;