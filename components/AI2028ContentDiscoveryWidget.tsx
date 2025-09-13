import React from 'react';
import Link from 'next/link';

export default function AI2028ContentDiscoveryWidget() {
  const featuredContent = [
    {
      title: "AI 2028 Future Predictions: Revolutionary Breakthroughs",
      description: "Explore the revolutionary AI breakthroughs predicted for 2028, including AGI and autonomous systems.",
      href: "/blog/ai-2028-future-predictions-breakthrough",
      category: "Predictions",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-red-500",
      icon: "🚀"
    },
    {
      title: "AI 2027 Quantum-AI Fusion: 8000% ROI Breakthrough",
      description: "Discover how quantum computing and AI fusion is revolutionizing industries with unprecedented ROI.",
      href: "/blog/ai-2027-quantum-ai-fusion-revolution",
      category: "Technology",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-purple-500",
      icon: "⚛️"
    },
    {
      title: "AI 2026 Neural Interface Revolution",
      description: "Learn about the neural interface revolution enabling direct brain-computer communication.",
      href: "/blog/ai-2026-neural-interface-revolution",
      category: "Innovation",
      badge: "NEW",
      badgeColor: "bg-blue-500",
      icon: "🧠"
    },
    {
      title: "Neural Interface Healthcare: 95% Recovery Success",
      description: "How neural interface technology achieved 95% patient recovery rates in spinal cord injury treatment.",
      href: "/case-studies/ai-2026-neural-interface-healthcare-breakthrough",
      category: "Case Study",
      badge: "SUCCESS",
      badgeColor: "bg-green-500",
      icon: "🏥"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🔮 Discover Revolutionary AI Content
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore cutting-edge AI breakthroughs, case studies, and predictions that are 
          transforming industries and achieving unprecedented ROI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {featuredContent.map((content, index) => (
          <Link 
            key={index}
            href={content.href}
            className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
          >
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{content.icon}</div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`${content.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold mr-2`}>
                    {content.badge}
                  </span>
                  <span className="text-sm text-gray-500">{content.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {content.description}
                </p>
              </div>
              <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link 
          href="/content-showcase"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Explore All Content
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
}