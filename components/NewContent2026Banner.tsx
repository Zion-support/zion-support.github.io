import React from 'react';
import Link from 'next/link';

export const NewContent2026Banner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🚀</span>
            <span>New 2026 Content</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover cutting-edge AI insights, sustainability solutions, and workplace transformation strategies 
            that are reshaping industries in 2026.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-future-workplace-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/80">New Article</div>
                  <div className="text-xs text-white/60">25 min read</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Future Workplace 2026
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Complete transformation guide to AI-powered productivity, automation, and workforce innovation.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-sustainability-green-tech-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/80">New Article</div>
                  <div className="text-xs text-white/60">22 min read</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                AI Sustainability & Green Tech 2026
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Complete guide to eco-friendly AI solutions, carbon reduction, and sustainable business practices.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>

          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💚</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/80">New Case Study</div>
                  <div className="text-xs text-white/60">18 min read</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-200 transition-colors">
                $8M ROI Sustainability Case Study
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                See how GreenCorp achieved 75% carbon reduction and $8M ROI with AI sustainability transformation.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All New Content
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContent2026Banner;