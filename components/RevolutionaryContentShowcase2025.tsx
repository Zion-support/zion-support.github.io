import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2025() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/50 to-purple-900/50"></div>
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-10 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-400"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-sm font-bold rounded-full mb-6 shadow-lg animate-pulse">
            🌟 REVOLUTIONARY CONTENT SHOWCASE 2025
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Breakthrough AI Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400 mt-2">
              Revolution 2025
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Explore our revolutionary AI content that's transforming industries and delivering 
            unprecedented results. From quantum computing to consciousness AI - discover the future today.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured Content 1 */}
          <Link 
            href="/blog/ai-2025-ultimate-trends-breakthrough"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔮</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              AI 2025 Ultimate Trends
            </h3>
            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              Revolutionary AI trends transforming every industry with quantum-neural fusion, 
              consciousness AI, and breakthrough innovations.
            </p>
            <div className="flex items-center justify-between">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                BREAKTHROUGH
              </div>
              <div className="text-yellow-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read More →
              </div>
            </div>
          </Link>

          {/* Featured Content 2 */}
          <Link 
            href="/case-studies/ai-2025-global-transformation-breakthrough"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏆</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              15,000% ROI Success
            </h3>
            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              Fortune 500 company achieved unprecedented ROI through revolutionary AI transformation 
              in just 6 months with quantum-neural systems.
            </p>
            <div className="flex items-center justify-between">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                SUCCESS STORY
              </div>
              <div className="text-yellow-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read More →
              </div>
            </div>
          </Link>

          {/* Featured Content 3 */}
          <Link 
            href="/resources/ai-2025-ultimate-implementation-toolkit"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              Implementation Toolkit
            </h3>
            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              Complete step-by-step guide with frameworks, templates, and proven strategies 
              for achieving breakthrough AI transformation results.
            </p>
            <div className="flex items-center justify-between">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                ESSENTIAL
              </div>
              <div className="text-yellow-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read More →
              </div>
            </div>
          </Link>

          {/* Additional Content 4 */}
          <Link 
            href="/blog/ai-2025-quantum-computing-breakthrough"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              Quantum Computing Revolution
            </h3>
            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              Breakthrough quantum computing solutions delivering 10,000x faster processing 
              and infinite scalability for enterprise applications.
            </p>
            <div className="flex items-center justify-between">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                QUANTUM
              </div>
              <div className="text-yellow-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read More →
              </div>
            </div>
          </Link>

          {/* Additional Content 5 */}
          <Link 
            href="/blog/ai-2025-neural-interface-revolution"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              Neural Interface Revolution
            </h3>
            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              Direct brain-computer interfaces achieving 99.7% accuracy in healthcare 
              and enterprise decision making systems.
            </p>
            <div className="flex items-center justify-between">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                NEURAL
              </div>
              <div className="text-yellow-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read More →
              </div>
            </div>
          </Link>

          {/* Additional Content 6 */}
          <Link 
            href="/blog/ai-2025-autonomous-systems"
            className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              Autonomous Business Systems
            </h3>
            <p className="text-purple-100 mb-4 text-sm leading-relaxed">
              Fully autonomous business operations that operate 24/7 without human intervention, 
              achieving 95% efficiency improvements.
            </p>
            <div className="flex items-center justify-between">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                AUTONOMOUS
              </div>
              <div className="text-yellow-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Read More →
              </div>
            </div>
          </Link>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already achieving breakthrough results with our 
            revolutionary AI solutions and content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              💬 Start Your Transformation
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              📚 Get Implementation Guide
            </Link>
            <Link 
              href="/blog"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-500 hover:to-orange-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}