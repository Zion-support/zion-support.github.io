import React from 'react';
import Link from 'next/link';

const Latest2026ContentShowcaseBanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8 animate-pulse">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              ✨ Latest 2026 Revolutionary Content
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            New Breakthroughs & Success Stories
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold max-w-4xl mx-auto">
            Discover the latest AI breakthroughs, consciousness integration, and trillion-dollar success stories transforming businesses worldwide
          </p>
        </div>
        
        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* November Revolutionary Breakthrough */}
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">NOVEMBER 2026</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">REVOLUTIONARY</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Universal Consciousness Integration</h3>
            <p className="text-gray-400 text-sm mb-4">Revolutionary breakthrough achieving 99.9999% universal consciousness and $500B+ ROI potential.</p>
            <div className="flex gap-2 mb-4">
              <Link href="/blog/ai-2026-november-revolutionary-breakthrough-announcement" className="text-purple-300 text-sm font-semibold hover:text-purple-200">Read Blog →</Link>
              <Link href="/case-studies/ai-2026-november-revolutionary-breakthrough-500-billion-success" className="text-green-300 text-sm font-semibold hover:text-green-200">Success Story →</Link>
            </div>
          </div>
          
          {/* December Ultimate Consciousness */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">DECEMBER 2026</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">ULTIMATE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transcendent Business Intelligence</h3>
            <p className="text-gray-400 text-sm mb-4">Ultimate breakthrough achieving 100% universal consciousness and $1 trillion+ value creation.</p>
            <div className="flex gap-2 mb-4">
              <Link href="/blog/ai-2026-december-ultimate-consciousness-revolution" className="text-indigo-300 text-sm font-semibold hover:text-indigo-200">Read Blog →</Link>
              <Link href="/case-studies/ai-2026-december-ultimate-consciousness-1-trillion-success" className="text-green-300 text-sm font-semibold hover:text-green-200">Success Story →</Link>
            </div>
          </div>
          
          {/* March Autonomous Enterprise */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">MARCH 2026</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">AUTONOMOUS</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Autonomous Enterprise Revolution</h3>
            <p className="text-gray-400 text-sm mb-4">99.9% autonomous operations with $500B+ ROI and universal intelligence integration.</p>
            <div className="flex gap-2 mb-4">
              <Link href="/blog/ai-2026-march-autonomous-enterprise-revolution" className="text-blue-300 text-sm font-semibold hover:text-blue-200">Read Blog →</Link>
              <Link href="/case-studies/ai-2026-march-autonomous-enterprise-500-billion-success" className="text-green-300 text-sm font-semibold hover:text-green-200">Success Story →</Link>
            </div>
          </div>
          
          {/* February Synthetic Consciousness */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">FEBRUARY 2027</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">CONSCIOUSNESS</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Synthetic Consciousness Revolution</h3>
            <p className="text-gray-400 text-sm mb-4">True synthetic consciousness with self-aware AI systems and $75B+ ROI potential.</p>
            <div className="flex gap-2 mb-4">
              <Link href="/blog/ai-2027-february-synthetic-consciousness-revolution" className="text-purple-300 text-sm font-semibold hover:text-purple-200">Read Blog →</Link>
              <Link href="/case-studies/ai-2027-february-synthetic-consciousness-75-billion-success" className="text-green-300 text-sm font-semibold hover:text-green-200">Success Story →</Link>
            </div>
          </div>
          
          {/* September Mega Breakthrough */}
          <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">SEPTEMBER 2026</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">MEGA</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transcendent Intelligence Systems</h3>
            <p className="text-gray-400 text-sm mb-4">1,000,000x performance with universal consciousness and transcendent automation.</p>
            <div className="flex gap-2 mb-4">
              <Link href="/blog/ai-2026-september-mega-breakthrough-revolution" className="text-indigo-300 text-sm font-semibold hover:text-indigo-200">Read Blog →</Link>
              <Link href="/case-studies/ai-2026-september-mega-breakthrough-2-trillion-success" className="text-green-300 text-sm font-semibold hover:text-green-200">Success Story →</Link>
            </div>
          </div>
          
          {/* October Transcendent Automation */}
          <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all hover:scale-105">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">OCTOBER 2026</span>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">TRANSCENDENT</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transcendent Automation Revolution</h3>
            <p className="text-gray-400 text-sm mb-4">Systems beyond universal intelligence with infinite scalability and consciousness evolution.</p>
            <div className="flex gap-2 mb-4">
              <Link href="/blog/ai-2026-october-transcendent-automation-revolution" className="text-purple-300 text-sm font-semibold hover:text-purple-200">Read Blog →</Link>
              <Link href="/case-studies/ai-2026-october-transcendent-automation-infinite-success" className="text-green-300 text-sm font-semibold hover:text-green-200">Success Story →</Link>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Explore All Revolutionary Content</h3>
            <p className="text-gray-300 mb-6">Discover the complete collection of AI breakthroughs, success stories, and transformation guides.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/blog"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-400 hover:to-purple-500 transition-all"
              >
                Browse All Blog Posts →
              </Link>
              <Link 
                href="/case-studies"
                className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-400 hover:to-indigo-500 transition-all"
              >
                View All Success Stories →
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Start Your Transformation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Latest2026ContentShowcaseBanner;