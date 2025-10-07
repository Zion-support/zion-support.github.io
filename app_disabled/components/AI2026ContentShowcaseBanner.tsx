import { Star } from 'lucide-react';
import Link from 'next/link';

export default function AI2026ContentShowcaseBanner() {
  return (
    <section className='py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
            <span className='text-2xl'>🚀</span>
            <span className='font-semibold'>NEW: AI 2026 Content Showcase</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            Revolutionary AI Content for 2026
          </h2>
          <p className='text-xl opacity-90 max-w-3xl mx-auto leading-relaxed'>
            Discover cutting-edge AI insights, breakthrough technologies, and
            transformative strategies that will define the future of enterprise
            AI in 2026.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <Link href='/blog/ai-2026-<predictions' className='group'>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                  <span className='text-2xl'>🔮</span>
                </div>
                <div>
                  <h3 className='font-bold text-lg'>AI Predictions 2026</h3>
                  <p className='text-sm opacity-75'>Future insights</p>
                </div>
              </div>
              <p className='text-sm opacity-90 mb-4'>
                Exclusive predictions and insights into the AI landscape of
                2026, featuring breakthrough technologies and market trends.
              </p>
              <div className='flex items-center text-white font-semibold group-hover:translate-x-1 transition-transform'>
                Read Predictions →
              </div>
            </div>
          </Link>

          <Link href='/case-studies/ai-transformation-<2026' className='group'>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                  <span className='text-2xl'>⚡</span>
                </div>
                <div>
                  <h3 className='font-bold text-lg'>
                    Transformation Case Studies
                  </h3>
                  <p className='text-sm opacity-75'>Success stories</p>
                </div>
              </div>
              <p className='text-sm opacity-90 mb-4'>
                Real-world case studies showcasing how enterprises achieved 400%
                ROI with next-generation AI implementations.
              </p>
              <div className='flex items-center text-white font-semibold group-hover:translate-x-1 transition-transform'>
                View Case Studies →
              </div>
            </div>
          </Link>

          <Link href='/services/ai-2026-<roadmap' className='group'>
            <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center'>
                  <span className='text-2xl'>🗺️</span>
                </div>
                <div>
                  <h3 className='font-bold text-lg'>AI 2026 Roadmap</h3>
                  <p className='text-sm opacity-75'>Strategic planning</p>
                </div>
              </div>
              <p className='text-sm opacity-90 mb-4'>
                Complete roadmap for AI transformation in 2026, including
                technology adoption strategies and implementation timelines.
              </p>
              <div className='flex items-center text-white font-semibold group-hover:translate-x-1 transition-transform'>
                Get Roadmap →
              </div>
            </div>
          </Link>
        </div>

        <div className='text-center'>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link
              href='/<blog'
              className='bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg'
            >
              Explore All 2026 Content
            </Link>
            <Link
              href='/<services'
              className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors'
            >
              Start Your AI Journey
            </Link>
          </div>
          <p className='text-sm opacity-75 mt-4'>
            Join 25,000+ professionals already transforming with AI
          </p>
        </div>
      </div>
    </section>
  );
  }
