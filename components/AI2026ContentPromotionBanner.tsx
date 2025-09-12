import React from 'react';
import Link from 'next/link';

export default function AI2026ContentPromotionBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-medium">🚀 NEW AI 2026 CONTENT DROP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧠 Revolutionary AI 2026 Content Just Released!
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
            Discover our latest AI 2026 content: Next-Generation AI Systems, Enterprise Transformation Case Studies, 
            AI Readiness Assessment Tool, and exclusive webinars. Everything you need to stay ahead of the AI revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/blog/ai-2026-next-generation-ai-systems"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🧠 Explore AI 2026 Systems
            </Link>
            <Link
              href="/tools/ai-2026-readiness-assessment"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              🎯 Take Readiness Assessment
            </Link>
            <Link
              href="/webinars/ai-2026-revolutionary-breakthroughs"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              🔥 Join Webinar
            </Link>
          </div>
          
          {/* Featured Content Preview */}
          <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link href="/blog/ai-2026-next-generation-ai-systems" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-2">🧠</div>
                <h3 className="text-sm font-semibold mb-1">Next-Gen AI Systems</h3>
                <p className="text-xs opacity-90">Revolutionary architectures</p>
              </div>
            </Link>
            <Link href="/case-studies/ai-2026-enterprise-transformation-breakthrough" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-2">🏢</div>
                <h3 className="text-sm font-semibold mb-1">Enterprise Success</h3>
                <p className="text-xs opacity-90">2000% ROI breakthrough</p>
              </div>
            </Link>
            <Link href="/tools/ai-2026-readiness-assessment" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="text-sm font-semibold mb-1">Readiness Assessment</h3>
                <p className="text-xs opacity-90">Evaluate your AI readiness</p>
              </div>
            </Link>
            <Link href="/webinars/ai-2026-revolutionary-breakthroughs" className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-2xl mb-2">🔥</div>
                <h3 className="text-sm font-semibold mb-1">Live Webinar</h3>
                <p className="text-xs opacity-90">Exclusive insights</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}