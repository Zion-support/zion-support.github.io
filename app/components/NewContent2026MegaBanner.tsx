import React from 'react';
import Link from 'next/link';

export default function NewContent2026MegaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-32"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-semibold flex items-center gap-2">
              🚀 NEW 2026 CONTENT
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionary AI 2026 Content
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              {' '}Now Available
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the most comprehensive collection of AI 2026 content, case studies, and solutions. 
            From quantum computing breakthroughs to neural interface revolutions - everything you need to transform your enterprise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/blog/ai-2026-comprehensive-trends"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore AI 2026 Trends
            </Link>
            <Link
              href="/case-studies/ai-2026-mega-transformation-success"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Stories
            </Link>
          </div>
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Guides</h3>
            <p className="text-blue-100 mb-4">
              In-depth articles covering quantum AI, neural interfaces, and autonomous systems
            </p>
            <Link href="/blog" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
              Read Articles →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-3">Success Stories</h3>
            <p className="text-blue-100 mb-4">
              Real case studies showing $100M ROI and 500% efficiency gains
            </p>
            <Link href="/case-studies" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
              View Case Studies →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-3">AI Solutions</h3>
            <p className="text-blue-100 mb-4">
              Revolutionary AI 2026 solutions with 300% ROI guarantee
            </p>
            <Link href="/services/ai-2026-revolutionary-solutions" className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">
              Explore Solutions →
            </Link>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-blue-100">New Articles</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
            <div className="text-blue-100">Case Studies</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
            <div className="text-blue-100">AI Solutions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-yellow-400 mb-2">300%</div>
            <div className="text-blue-100">Guaranteed ROI</div>
          </div>
        </div>
      </div>
    </section>
  );
}