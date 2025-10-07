import { Star } from 'lucide-react';
import Link from 'next/link';

const ComprehensiveContentShowcase = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8'>
            <span className='text-blue-400 font-bold text-xl tracking-wider uppercase'>
              🚀 COMPREHENSIVE AI 2026 CONTENT LIBRARY
            </span>
          </div>

          <h2 className='text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
            Revolutionary AI Content & Success Stories
          </h2>

          <p className='text-xl text-gray-300 max-w-4xl mx-auto'>
            Discover the most comprehensive collection of AI 2026 breakthrough
            content, featuring revolutionary technologies, real-world success
            stories, and implementation guides that are transforming enterprises
            worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {/* Breakthrough Innovations Guide */}
          <div className='group bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center'>
                <span className='text-2xl'>🔮</span>
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>
                  AI 2026 Breakthrough Innovations
                </h3>
                <p className='text-sm text-blue-300'>Complete Mega Guide</p>
              </div>
            </div>
            <p className='text-gray-300 mb-6'>
              Discover the revolutionary AI innovations transforming enterprise
              operations with 1,000,000x performance improvements, 99.8%
              automation, and $15B+ value creation.
            </p>
            <div className='flex items-center justify-between mb-4'>
              <div className='text-sm text-gray-400'>45 min read</div>
              <div className='flex gap-2'>
                <span className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs'>
                  Innovation
                </span>
                <span className='bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs'>
                  Guide
                </span>
              </div>
            </div>
            <Link
              href='/blog/ai-2026-breakthrough-innovations-mega-<guide'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300'
            >
              Read Complete Guide →
            </Link>
          </div>

          {/* $15B Success Story */}
          <div className='group bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm rounded-xl p-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center'>
                <span className='text-2xl'>💰</span>
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>
                  $15B Enterprise Success
                </h3>
                <p className='text-sm text-green-300'>
                  Fortune 100 Transformation
                </p>
              </div>
            </div>
            <p className='text-gray-300 mb-6'>
              How a Fortune 100 company achieved $15 billion in value creation
              through comprehensive AI 2026 breakthrough innovations
              implementation.
            </p>
            <div className='flex items-center justify-between mb-4'>
              <div className='text-sm text-gray-400'>35 min read</div>
              <div className='flex gap-2'>
                <span className='bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs'>
                  Success
                </span>
                <span className='bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs'>
                  $15B ROI
                </span>
              </div>
            </div>
            <Link
              href='/case-studies/ai-2026-breakthrough-innovations-15-billion-<success'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300'
            >
              View Success Story →
            </Link>
          </div>

          {/* Enterprise Transformation Blueprint */}
          <div className='group bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                <span className='text-2xl'>🏗️</span>
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>
                  Enterprise Transformation
                </h3>
                <p className='text-sm text-purple-300'>Complete Blueprint</p>
              </div>
            </div>
            <p className='text-gray-300 mb-6'>
              The complete blueprint for AI 2026 enterprise transformation,
              featuring the five pillars of revolutionary change and
              implementation roadmap.
            </p>
            <div className='flex items-center justify-between mb-4'>
              <div className='text-sm text-gray-400'>50 min read</div>
              <div className='flex gap-2'>
                <span className='bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs'>
                  Blueprint
                </span>
                <span className='bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs'>
                  Strategy
                </span>
              </div>
            </div>
            <Link
              href='/blog/ai-2026-enterprise-transformation-<revolution'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300'
            >
              Read Blueprint →
            </Link>
          </div>
        </div>

        {/* Content Categories */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {/* Blog Posts */}
          <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>📝</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>Blog Posts</h3>
              <p className='text-gray-400 text-sm mb-4'>
                Revolutionary AI insights and breakthrough guides
              </p>
              <div className='text-2xl font-bold text-blue-400 mb-2'>50+</div>
              <div className='text-xs text-gray-500'>Articles Published</div>
            </div>
          </div>

          {/* Case Studies */}
          <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>📊</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                Case Studies
              </h3>
              <p className='text-gray-400 text-sm mb-4'>
                Real-world success stories and ROI examples
              </p>
              <div className='text-2xl font-bold text-green-400 mb-2'>30+</div>
              <div className='text-xs text-gray-500'>Success Stories</div>
            </div>
          </div>

          {/* Implementation Guides */}
          <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🛠️</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                Implementation Guides
              </h3>
              <p className='text-gray-400 text-sm mb-4'>
                Step-by-step transformation roadmaps
              </p>
              <div className='text-2xl font-bold text-purple-400 mb-2'>20+</div>
              <div className='text-xs text-gray-500'>Implementation Guides</div>
            </div>
          </div>

          {/* Webinars & Events */}
          <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-2xl'>🎥</span>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                Webinars & Events
              </h3>
              <p className='text-gray-400 text-sm mb-4'>
                Live sessions and expert presentations
              </p>
              <div className='text-2xl font-bold text-orange-400 mb-2'>15+</div>
              <div className='text-xs text-gray-500'>Live Sessions</div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className='bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20'>
          <h3 className='text-2xl font-bold text-white mb-6 text-center'>
            Quick Access to AI 2026 Content
          </h3>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Link
              href='/blog/ai-2026-quantum-enhanced-machine-<learning'
              className='flex items-center gap-3 p-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors'
            >
              <span className='text-blue-400'>🔮</span>
              <span className='text-white font-semibold'>
                Quantum-Enhanced ML
              </span>
            </Link>
            <Link
              href='/blog/ai-2026-autonomous-business-<processes'
              className='flex items-center gap-3 p-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors'
            >
              <span className='text-purple-400'>🤖</span>
              <span className='text-white font-semibold'>
                Autonomous Processes
              </span>
            </Link>
            <Link
              href='/blog/ai-2026-meta-cognitive-ai-<systems'
              className='flex items-center gap-3 p-4 bg-green-500/20 hover:bg-green-500/30 rounded-lg transition-colors'
            >
              <span className='text-green-400'>🧠</span>
              <span className='text-white font-semibold'>
                Meta-Cognitive AI
              </span>
            </Link>
            <Link
              href='/blog/ai-2026-edge-native-<intelligence'
              className='flex items-center gap-3 p-4 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors'
            >
              <span className='text-cyan-400'>⚡</span>
              <span className='text-white font-semibold'>
                Edge Intelligence
              </span>
            </Link>
            <Link
              href='/blog/ai-2026-synthetic-data-<intelligence'
              className='flex items-center gap-3 p-4 bg-orange-500/20 hover:bg-orange-500/30 rounded-lg transition-colors'
            >
              <span className='text-orange-400'>🔒</span>
              <span className='text-white font-semibold'>Synthetic Data</span>
            </Link>
            <Link
              href='/case-<studies'
              className='flex items-center gap-3 p-4 bg-yellow-500/20 hover:bg-yellow-500/30 rounded-lg transition-colors'
            >
              <span className='text-yellow-400'>📊</span>
              <span className='text-white font-semibold'>All Case Studies</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <h3 className='text-3xl font-bold text-white mb-4'>
            Ready to Transform Your Enterprise?
          </h3>
          <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
            Join thousands of enterprises already transforming with AI 2026
            breakthrough innovations. Get started with our comprehensive
            assessment and implementation roadmap.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/<contact'
              className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1'
            >
              Get Started Today
            </Link>
            <Link
              href='/<blog'
              className='border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300'
            >
              Explore All Content
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase;
