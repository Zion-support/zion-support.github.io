import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentShowcase2026() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Experience the most revolutionary AI breakthrough delivering 5,000% guaranteed ROI with quantum-neural fusion.",
      href: "/ai-2025-ultimate-breakthrough-revolution",
      category: "Breakthrough",
      roi: "5,000%",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "AI 2026 Quantum-Neural Fusion",
      description: "The future of AI with quantum consciousness, neural synthesis, and transcendent intelligence delivering 15,000% ROI.",
      href: "/ai-2026-quantum-neural-fusion-breakthrough",
      category: "Quantum",
      roi: "15,000%",
      badge: "REVOLUTIONARY",
      color: "from-cyan-500 to-purple-500"
    },
    {
      title: "Global Transformation Success Story",
      description: "How a Fortune 500 company achieved 10,000% ROI in just 8 months using our revolutionary AI technology.",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      category: "Case Study",
      roi: "10,000%",
      badge: "SUCCESS",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "AI 2027 Future Predictions",
      description: "Revolutionary predictions for AI 2027 including neural synthesis breakthrough and 99.7% accuracy achievements.",
      href: "/ai-2027-future-predictions-revolutionary",
      category: "Predictions",
      roi: "8,000%",
      badge: "FUTURE",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "AI 2028 Automotive Transformation",
      description: "Revolutionary automotive AI breakthrough delivering 3,000% ROI through autonomous vehicle optimization.",
      href: "/case-studies/ai-2028-automotive-transformation-breakthrough",
      category: "Automotive",
      roi: "3,000%",
      badge: "INNOVATION",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI 2029 Singularity Breakthrough",
      description: "The singularity is here. Experience AI 2029 breakthrough with consciousness upload and 5,000% ROI.",
      href: "/blog/ai-2029-singularity-breakthrough",
      category: "Singularity",
      roi: "5,000%",
      badge: "SINGULARITY",
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full mb-6 animate-pulse">
            <span className="text-sm font-bold">🚀 REVOLUTIONARY CONTENT SHOWCASE 2026</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary AI Content Library
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive library of revolutionary AI breakthroughs, case studies, 
            and implementation guides delivering unprecedented ROI and transformation results.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                  {item.badge}
                </span>
                <span className="text-xs text-gray-400">{item.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* ROI */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-400">{item.roi}</div>
                <div className="text-xs text-gray-400">Guaranteed ROI</div>
              </div>

              {/* CTA */}
              <Link
                href={item.href}
                className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${item.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105`}
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/30 text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Implementation Guides</h3>
            <p className="text-sm text-gray-300 mb-4">Step-by-step guides for AI transformation</p>
            <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">
              View Guides →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-blue-400/30 text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="text-lg font-bold text-blue-300 mb-2">Case Studies</h3>
            <p className="text-sm text-gray-300 mb-4">Real success stories with proven ROI</p>
            <Link href="/case-studies" className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold">
              View Cases →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-400/30 text-center">
            <div className="text-3xl mb-3">🔮</div>
            <h3 className="text-lg font-bold text-purple-300 mb-2">Future Predictions</h3>
            <p className="text-sm text-gray-300 mb-4">AI trends and predictions 2025-2030</p>
            <Link href="/blog" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold">
              Read Predictions →
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-pink-400/30 text-center">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="text-lg font-bold text-pink-300 mb-2">Tools & Calculators</h3>
            <p className="text-sm text-gray-300 mb-4">ROI calculators and assessment tools</p>
            <Link href="/tools" className="text-pink-400 hover:text-pink-300 transition-colors text-sm font-semibold">
              Use Tools →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-xl p-8 border border-cyan-400/30">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of companies already experiencing revolutionary AI transformation. 
            Get started with our comprehensive implementation guide today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources/ai-2025-ultimate-implementation-guide"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-bold hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              Get Implementation Guide
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-300 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-white transition-all"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}