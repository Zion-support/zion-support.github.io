import React from 'react';
import Link from 'next/link';

export default function NewContent2025Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🔥</span>
            NEW 2025 Content Available Now
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI Innovations & Insights
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, real-world case studies, and expert insights 
            that are shaping the future of business and technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/blog/ai-edge-computing-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <span className="bg-blue-500/30 text-blue-200 px-2 py-1 rounded-full text-xs font-semibold">
                    NEW ARTICLE
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-200 transition-colors">
                AI Edge Computing 2025
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Achieve sub-50ms response times with AI processing at the edge. Perfect for autonomous vehicles and IoT.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-blue-200 font-semibold text-sm">
                  Read More →
                </div>
                <div className="text-white/60 text-xs">12 min read</div>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-cybersecurity-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <span className="bg-red-500/30 text-red-200 px-2 py-1 rounded-full text-xs font-semibold">
                    NEW ARTICLE
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-200 transition-colors">
                AI Cybersecurity 2025
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Revolutionary threat detection with 99.7% accuracy and autonomous incident response.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-red-200 font-semibold text-sm">
                  Read More →
                </div>
                <div className="text-white/60 text-xs">15 min read</div>
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/fintech-ai-risk-compliance-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500/30 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <span className="bg-green-500/30 text-green-200 px-2 py-1 rounded-full text-xs font-semibold">
                    NEW CASE STUDY
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-200 transition-colors">
                FinTech Risk Compliance
              </h3>
              <p className="text-white/80 text-sm mb-4">
                See how a fintech achieved 70% risk reduction and $2.5M savings with AI automation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-green-200 font-semibold text-sm">
                  View Case Study →
                </div>
                <div className="text-white/60 text-xs">8 min read</div>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">📚</span>
            Explore All Content
          </Link>
        </div>
      </div>
    </section>
  );
}