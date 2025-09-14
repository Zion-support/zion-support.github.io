import React from 'react';
import Link from 'next/link';

export default function NewContent2026Showcase() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            🚀 NEW CONTENT SHOWCASE - AI 2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Revolutionary AI 2026
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Content Collection
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest breakthrough content featuring neural consciousness, quantum computing, 
            and revolutionary AI technologies delivering unprecedented results.
          </p>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Neural Consciousness Breakthrough */}
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">Neural Consciousness Breakthrough</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Revolutionary AI 2026 neural consciousness breakthrough achieving 99.9% accuracy and 50,000% ROI 
              in healthcare, education, and enterprise applications.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">50,000% ROI</span>
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">99.9% Accuracy</span>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">Breakthrough</span>
            </div>
<<<<<<< HEAD
=======
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">NEW</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">BREAKTHROUGH</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">AI 2026 Advanced Automation Solutions</h4>
              <p className="text-gray-600 mb-4">
                Transform your business with neural networks, quantum computing integration, and autonomous systems. 
                Achieve 85% cost reduction and 300% efficiency increase.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Neural Networks</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Quantum Computing</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Autonomous Systems</span>
              </div>
              <Link 
                href="/ai-2026-advanced-automation-solutions"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Explore Solutions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Neural Consensus AI */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Neural Consensus</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">REVOLUTIONARY</span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">BREAKTHROUGH</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Neural Consensus AI 2026</h4>
              <p className="text-gray-600 mb-4">
                Experience multiple AI systems working in perfect harmony. Achieve 99.97% decision accuracy 
                with 50ms response time and 1000x faster processing than traditional AI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Multi-Perspective</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Lightning Fast</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Adaptive Learning</span>
              </div>
              <Link 
                href="/neural-consensus-ai-2026"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                Experience Technology
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quantum AI Breakthrough */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quantum AI</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">QUANTUM</span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">REVOLUTIONARY</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quantum AI Breakthrough 2026</h4>
              <p className="text-gray-600 mb-4">
                Revolutionary fusion of quantum computing and AI. Experience 10,000x faster processing, 
                99.99% accuracy rate, and 50x energy efficiency compared to classical computers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Quantum Neural</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Financial Modeling</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Drug Discovery</span>
              </div>
              <Link 
                href="/quantum-ai-breakthrough-2026"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
              >
                Explore Technology
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <Link 
              href="/blog/ai-2026-neural-consciousness-breakthrough"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Explore Neural Consciousness →
            </Link>
          </div>
          
          {/* Healthcare Case Study */}
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏥</div>
            <h3 className="text-xl font-bold text-white mb-3">Healthcare Revolution Case Study</h3>
            <p className="text-gray-300 mb-4 text-sm">
              How neural consciousness achieved 50,000% ROI in healthcare with 99.9% diagnostic accuracy 
              and 95% patient recovery improvement across 2M+ patients.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">50,000% ROI</span>
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">2M+ Patients</span>
              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">95% Recovery</span>
            </div>
            <Link 
              href="/case-studies/ai-2026-neural-consciousness-healthcare-breakthrough"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
            >
              View Healthcare Case Study →
            </Link>
          </div>
          
          {/* Implementation Guide */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-xl font-bold text-white mb-3">Complete Implementation Guide</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Step-by-step guide to implement AI 2026 neural consciousness breakthrough. 
              Achieve 99.9% accuracy and 50,000% ROI with our proven 4-week methodology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded text-xs">4 Weeks</span>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">99.9% Success</span>
              <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-xs">Complete Guide</span>
            </div>
            <Link 
              href="/resources/ai-2026-neural-consciousness-implementation-guide"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Download Implementation Guide →
            </Link>
          </div>
        </div>
        
        {/* Additional Content Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">⚛️</div>
            <h4 className="text-lg font-bold text-white mb-2">Quantum Computing</h4>
            <p className="text-gray-300 text-sm mb-3">
              Revolutionary quantum computing solutions with 15,000% ROI and breakthrough performance.
            </p>
            <Link href="/quantum-computing-solutions-2025" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
              Explore Quantum Solutions →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="text-lg font-bold text-white mb-2">Autonomous Systems</h4>
            <p className="text-gray-300 text-sm mb-3">
              Next-generation autonomous systems delivering 10,000% ROI and 99.9% reliability.
            </p>
            <Link href="/automation-solutions-2026" className="text-green-400 hover:text-green-300 text-sm font-semibold">
              View Automation Solutions →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🌌</div>
            <h4 className="text-lg font-bold text-white mb-2">Future Predictions</h4>
            <p className="text-gray-300 text-sm mb-3">
              AI 2026-2030 future predictions and breakthrough technology forecasts.
            </p>
            <Link href="/ai-2026-2030-future-predictions-breakthrough" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
              Read Predictions →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🛠️</div>
            <h4 className="text-lg font-bold text-white mb-2">Tools & Resources</h4>
            <p className="text-gray-300 text-sm mb-3">
              Comprehensive tools, calculators, and resources for AI implementation.
            </p>
            <Link href="/tools" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Browse Tools →
            </Link>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with AI 2026 Breakthroughs</h3>
          <p className="text-gray-300 mb-6">
            Get exclusive access to the latest neural consciousness breakthroughs, case studies, and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Join 10,000+ professionals getting breakthrough AI insights
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Quick Access to All Content</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📝 All Blog Posts
            </Link>
            <Link 
              href="/case-studies"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📊 Case Studies
            </Link>
            <Link 
              href="/resources"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📚 Resources
            </Link>
            <Link 
              href="/webinars"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📺 Webinars
            </Link>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Proven Results Across All Technologies</h3>
            <p className="text-lg text-gray-600">Combined performance metrics from our revolutionary AI solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.99%</div>
              <div className="text-lg text-gray-700 mb-1">Average Accuracy</div>
              <div className="text-sm text-gray-500">Across all AI systems</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10,000x</div>
              <div className="text-lg text-gray-700 mb-1">Performance Boost</div>
              <div className="text-sm text-gray-500">Quantum AI advantage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-lg text-gray-700 mb-1">Cost Reduction</div>
              <div className="text-sm text-gray-500">Advanced automation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">50ms</div>
              <div className="text-lg text-gray-700 mb-1">Response Time</div>
              <div className="text-sm text-gray-500">Neural consensus</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already benefiting from our revolutionary AI technologies. 
            Start your transformation journey today with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> main
            <Link 
              href="/blog/ai-2026-neural-consciousness-breakthrough"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Explore Neural Consciousness →
            </Link>
          </div>
          
          {/* Healthcare Case Study */}
          <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏥</div>
            <h3 className="text-xl font-bold text-white mb-3">Healthcare Revolution Case Study</h3>
            <p className="text-gray-300 mb-4 text-sm">
              How neural consciousness achieved 50,000% ROI in healthcare with 99.9% diagnostic accuracy 
              and 95% patient recovery improvement across 2M+ patients.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">50,000% ROI</span>
              <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">2M+ Patients</span>
              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">95% Recovery</span>
            </div>
            <Link 
              href="/case-studies/ai-2026-neural-consciousness-healthcare-breakthrough"
              className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
            >
              View Healthcare Case Study →
            </Link>
          </div>
          
          {/* Implementation Guide */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-xl p-8 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📚</div>
            <h3 className="text-xl font-bold text-white mb-3">Complete Implementation Guide</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Step-by-step guide to implement AI 2026 neural consciousness breakthrough. 
              Achieve 99.9% accuracy and 50,000% ROI with our proven 4-week methodology.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded text-xs">4 Weeks</span>
              <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">99.9% Success</span>
              <span className="bg-pink-500/20 text-pink-400 px-2 py-1 rounded text-xs">Complete Guide</span>
            </div>
            <Link 
              href="/resources/ai-2026-neural-consciousness-implementation-guide"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Download Implementation Guide →
            </Link>
          </div>
        </div>
        
        {/* Additional Content Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">⚛️</div>
            <h4 className="text-lg font-bold text-white mb-2">Quantum Computing</h4>
            <p className="text-gray-300 text-sm mb-3">
              Revolutionary quantum computing solutions with 15,000% ROI and breakthrough performance.
            </p>
            <Link href="/quantum-computing-solutions-2025" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
              Explore Quantum Solutions →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h4 className="text-lg font-bold text-white mb-2">Autonomous Systems</h4>
            <p className="text-gray-300 text-sm mb-3">
              Next-generation autonomous systems delivering 10,000% ROI and 99.9% reliability.
            </p>
            <Link href="/automation-solutions-2026" className="text-green-400 hover:text-green-300 text-sm font-semibold">
              View Automation Solutions →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🌌</div>
            <h4 className="text-lg font-bold text-white mb-2">Future Predictions</h4>
            <p className="text-gray-300 text-sm mb-3">
              AI 2026-2030 future predictions and breakthrough technology forecasts.
            </p>
            <Link href="/ai-2026-2030-future-predictions-breakthrough" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
              Read Predictions →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-3">🛠️</div>
            <h4 className="text-lg font-bold text-white mb-2">Tools & Resources</h4>
            <p className="text-gray-300 text-sm mb-3">
              Comprehensive tools, calculators, and resources for AI implementation.
            </p>
            <Link href="/tools" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
              Browse Tools →
            </Link>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with AI 2026 Breakthroughs</h3>
          <p className="text-gray-300 mb-6">
            Get exclusive access to the latest neural consciousness breakthroughs, case studies, and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            Join 10,000+ professionals getting breakthrough AI insights
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Quick Access to All Content</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📝 All Blog Posts
            </Link>
            <Link 
              href="/case-studies"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📊 Case Studies
            </Link>
            <Link 
              href="/resources"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📚 Resources
            </Link>
            <Link 
              href="/webinars"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              📺 Webinars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}