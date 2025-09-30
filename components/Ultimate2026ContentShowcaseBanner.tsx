import React from 'react';
import Link from 'next/link';

export default function Ultimate2026ContentShowcaseBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-25">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-pink-500/20 border border-indigo-500/30 mb-8 animate-pulse">
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">
              🌟 Ultimate 2026 Content Showcase
            </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              REVOLUTIONARY
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Revolutionary AI Content & Breakthroughs
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the Latest AI Innovations, Success Stories, and Revolutionary Technologies
          </p>
          
          {/* Content Categories */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Latest Breakthroughs</h3>
              <p className="text-sm text-gray-300 mb-4">Revolutionary AI technologies and innovations</p>
              <Link 
                href="/blog/ai-2026-december-mega-breakthrough-revolution" 
                className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Read More →
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-white mb-2">Success Stories</h3>
              <p className="text-sm text-gray-300 mb-4">$50B+ in proven value generation</p>
              <Link 
                href="/case-studies/ai-2026-december-mega-breakthrough-50-billion-success" 
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                View Success →
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum AI</h3>
              <p className="text-sm text-gray-300 mb-4">Quantum consciousness and superintelligence</p>
              <Link 
                href="/blog/ai-2026-quantum-consciousness-fusion" 
                className="inline-block bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-400 hover:to-red-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Explore Quantum →
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous Ops</h3>
              <p className="text-sm text-gray-300 mb-4">99.95% autonomous enterprise operations</p>
              <Link 
                href="/blog/ai-2026-autonomous-enterprise-operations" 
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
              >
                Learn More →
              </Link>
            </div>
          </div>
          
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-6 border border-indigo-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  NEW
                </span>
                <span className="text-indigo-400 font-semibold">December 2026</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mega Breakthrough Revolution</h3>
              <p className="text-sm text-gray-300 mb-4">15,000x performance, 99.95% autonomous, $50B value</p>
              <Link 
                href="/blog/ai-2026-december-mega-breakthrough-revolution" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm"
              >
                Read Full Article →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  SUCCESS
                </span>
                <span className="text-purple-400 font-semibold">$50B ROI</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fortune 500 Success Story</h3>
              <p className="text-sm text-gray-300 mb-4">50 enterprises, 6 months, $50B value generation</p>
              <Link 
                href="/case-studies/ai-2026-december-mega-breakthrough-50-billion-success" 
                className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
              >
                View Case Study →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-red-500/10 backdrop-blur-lg rounded-xl p-6 border border-pink-500/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  CONSULTING
                </span>
                <span className="text-pink-400 font-semibold">Get Started</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mega Breakthrough Consulting</h3>
              <p className="text-sm text-gray-300 mb-4">Transform your enterprise with revolutionary AI</p>
              <Link 
                href="/services/ai-2026-december-mega-breakthrough-consulting" 
                className="text-pink-400 hover:text-pink-300 font-semibold text-sm"
              >
                Get Consulting →
              </Link>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-8 border border-indigo-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the AI revolution with Zion Tech Group. Get your free consultation and discover how our 
              revolutionary technologies can deliver unprecedented results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="/content-hub" 
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Explore Content Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}