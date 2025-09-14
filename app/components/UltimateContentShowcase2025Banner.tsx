import React from 'react';
import Link from 'next/link';

const UltimateContentShowcase2025Banner = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-bold">✨ ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary AI Content
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of cutting-edge AI insights, case studies, and revolutionary business transformation guides
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Blog Post 1 */}
          <div className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl mr-4">
                🧠
              </div>
              <div>
                <span className="text-sm font-semibold text-cyan-400">BLOG POST</span>
                <div className="text-xs opacity-70">15 min read</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
              Next-Generation Autonomous Enterprise Systems
            </h3>
            
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Discover how autonomous enterprise systems are revolutionizing business operations with unprecedented efficiency and intelligence.
            </p>
            
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/ai-2025-next-generation-autonomous-enterprise-systems-ultimate-breakthrough"
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center"
              >
                Read Article →
              </Link>
              <div className="text-xs opacity-60">Jan 15, 2025</div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl mr-4">
                ⚛️
              </div>
              <div>
                <span className="text-sm font-semibold text-purple-400">COMPREHENSIVE GUIDE</span>
                <div className="text-xs opacity-70">18 min read</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
              Quantum AI Business Transformation Guide
            </h3>
            
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Complete guide to revolutionizing business operations with quantum AI technologies and achieving unprecedented competitive advantages.
            </p>
            
            <div className="flex items-center justify-between">
              <Link 
                href="/blog/quantum-ai-2025-business-transformation-revolutionary-guide"
                className="text-purple-400 hover:text-purple-300 font-semibold flex items-center"
              >
                Explore Guide →
              </Link>
              <div className="text-xs opacity-60">Jan 15, 2025</div>
            </div>
          </div>

          {/* Case Study */}
          <div className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-2xl mr-4">
                🏆
              </div>
              <div>
                <span className="text-sm font-semibold text-green-400">CASE STUDY</span>
                <div className="text-xs opacity-70">20 min read</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 group-hover:text-green-300 transition-colors">
              Fortune 500 Quantum AI Success
            </h3>
            
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              How a Fortune 500 company achieved unprecedented 5000% ROI through comprehensive quantum AI transformation.
            </p>
            
            <div className="flex items-center justify-between">
              <Link 
                href="/case-studies/fortune-500-quantum-ai-transformation-5000-roi-ultimate-success"
                className="text-green-400 hover:text-green-300 font-semibold flex items-center"
              >
                View Success Story →
              </Link>
              <div className="text-xs opacity-60">Jan 15, 2025</div>
            </div>
          </div>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
            <div className="text-3xl mb-3">📚</div>
            <div className="text-lg font-semibold mb-2">Blog Posts</div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">150+</div>
            <div className="text-xs opacity-70">AI & Technology Insights</div>
          </div>
          
          <div className="text-center p-6 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
            <div className="text-3xl mb-3">📊</div>
            <div className="text-lg font-semibold mb-2">Case Studies</div>
            <div className="text-2xl font-bold text-purple-400 mb-1">75+</div>
            <div className="text-xs opacity-70">Real Success Stories</div>
          </div>
          
          <div className="text-center p-6 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
            <div className="text-3xl mb-3">🎯</div>
            <div className="text-lg font-semibold mb-2">ROI Achievements</div>
            <div className="text-2xl font-bold text-green-400 mb-1">5000%</div>
            <div className="text-xs opacity-70">Maximum ROI Recorded</div>
          </div>
          
          <div className="text-center p-6 bg-white bg-opacity-5 rounded-xl border border-white border-opacity-10">
            <div className="text-3xl mb-3">⚡</div>
            <div className="text-lg font-semibold mb-2">Performance Gains</div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">1000x</div>
            <div className="text-xs opacity-70">Speed Improvements</div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-white border-opacity-20">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that have revolutionized their operations with our AI and quantum computing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold mb-8">Additional Resources</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/resources/ai-implementation-guide" className="group">
              <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <div className="text-2xl mb-3">📖</div>
                <h5 className="font-semibold mb-2 group-hover:text-cyan-300 transition-colors">AI Implementation Guide</h5>
                <p className="text-sm opacity-70">Step-by-step guide to implementing AI in your organization</p>
              </div>
            </Link>
            
            <Link href="/resources/quantum-computing-primer" className="group">
              <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <div className="text-2xl mb-3">🔬</div>
                <h5 className="font-semibold mb-2 group-hover:text-purple-300 transition-colors">Quantum Computing Primer</h5>
                <p className="text-sm opacity-70">Understanding quantum computing fundamentals for business leaders</p>
              </div>
            </Link>
            
            <Link href="/resources/roi-calculator" className="group">
              <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300">
                <div className="text-2xl mb-3">🧮</div>
                <h5 className="font-semibold mb-2 group-hover:text-green-300 transition-colors">ROI Calculator</h5>
                <p className="text-sm opacity-70">Calculate potential ROI for your AI transformation project</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025Banner;