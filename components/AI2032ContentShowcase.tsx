import React from 'react';
import Link from 'next/link';

export default function AI2032ContentShowcase() {
  const ai2032Content = [
    {
      title: "AI 2032 Breakthrough Showcase",
      description: "Discover the most revolutionary AI breakthroughs predicted for 2032. From quantum consciousness to autonomous cities.",
      href: "/ai-2032-breakthrough-showcase",
      icon: "🚀",
      category: "Showcase",
      featured: true,
      badge: "BREAKTHROUGH"
    },
    {
      title: "20,000% ROI Quantum AI Case Study",
      description: "How QuantumTech Industries achieved unprecedented returns using AI 2032 quantum neural networks.",
      href: "/case-studies/ai-2032-quantum-ai-breakthrough-20000-roi",
      icon: "⚛️",
      category: "Case Study",
      featured: true,
      badge: "20,000% ROI"
    },
    {
      title: "AI 2032 Ultimate Implementation Guide",
      description: "Complete roadmap to implementing revolutionary AI 2032 technologies. Step-by-step strategies and best practices.",
      href: "/resources/ai-2032-ultimate-implementation-master-guide",
      icon: "📚",
      category: "Guide",
      featured: true,
      badge: "MASTER GUIDE"
    },
    {
      title: "AI 2032 Future Predictions",
      description: "Revolutionary breakthrough technologies that will reshape our world by 2032. Expert predictions and analysis.",
      href: "/blog/ai-2032-future-predictions-breakthrough",
      icon: "🔮",
      category: "Blog",
      featured: true,
      badge: "PREDICTIONS"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-500 text-white rounded-full px-6 py-2 mb-6 text-sm font-bold animate-pulse">
            🚀 AI 2032 BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI 2032 Content
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore the most advanced AI content showcasing breakthrough technologies 
            that will transform our world by 2032.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ai2032Content.map((content, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 ${
                content.featured ? 'ring-2 ring-purple-500/30' : ''
              }`}
            >
              {/* Badge */}
              {content.badge && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                  {content.badge}
                </div>
              )}
              
              {/* Icon and Category */}
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{content.icon}</div>
                <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-bold">
                  {content.category}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
                {content.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.description}
              </p>
              
              {/* CTA Button */}
              <Link
                href={content.href}
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                Explore Content
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gradient-to-br from-purple-800/30 to-blue-800/30 border border-purple-500/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Lightning Fast</h3>
            <p className="text-gray-300">
              Quantum-powered content delivery for instant access to breakthrough insights
            </p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-green-800/30 to-teal-800/30 border border-green-500/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">Precision Focused</h3>
            <p className="text-gray-300">
              Expert-curated content targeting the most impactful AI 2032 technologies
            </p>
          </div>
          
          <div className="text-center bg-gradient-to-br from-orange-800/30 to-red-800/30 border border-orange-500/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Future Ready</h3>
            <p className="text-gray-300">
              Stay ahead with cutting-edge predictions and implementation strategies
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Lead the AI 2032 Revolution?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Join thousands of forward-thinking organizations already implementing 
              these breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Your AI 2032 Journey
              </Link>
              <Link
                href="/ai-2032-breakthrough-showcase"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                🔍 Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}