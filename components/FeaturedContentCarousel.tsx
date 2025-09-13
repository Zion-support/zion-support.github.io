import React from 'react';
import Link from 'next/link';

export default function FeaturedContentCarousel() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Breakthrough Content Showcase",
      description: "Revolutionary AI breakthroughs delivering 50,000% ROI through synthetic intelligence and quantum computing.",
      image: "🧠",
      href: "/ai-2025-breakthrough-content-showcase",
      category: "BREAKTHROUGH",
      roi: "50,000%",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI 2026 Revolutionary Technology",
      description: "Next-generation AI technologies featuring quantum-neural fusion and consciousness AI with infinite potential.",
      image: "🌌",
      href: "/ai-2026-revolutionary-technology-showcase",
      category: "REVOLUTIONARY",
      roi: "Infinite",
      color: "from-cyan-500 to-indigo-500"
    },
    {
      id: 3,
      title: "Quantum Computing Solutions 2025",
      description: "Breakthrough quantum computing solutions delivering quantum supremacy and 15,000% ROI success.",
      image: "⚛️",
      href: "/quantum-computing-solutions-2025",
      category: "QUANTUM",
      roi: "15,000%",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 4,
      title: "Advanced Automation Solutions",
      description: "Revolutionary automation solutions delivering intelligent process automation and 10,000% ROI.",
      image: "🤖",
      href: "/advanced-automation-solutions-2025",
      category: "AUTOMATION",
      roi: "10,000%",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough content showcasing revolutionary AI technologies, 
            quantum computing solutions, and advanced automation delivering unprecedented ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((content, index) => (
            <Link 
              key={content.id}
              href={content.href}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:border-gray-300"
            >
              {/* Category Badge */}
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r ${content.color} text-white text-xs font-semibold animate-pulse`}>
                {content.category}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {content.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {content.description}
                  </p>
                </div>

                {/* ROI Display */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                    <span className="text-green-600 font-bold text-lg">
                      {content.roi} ROI
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="text-center">
                  <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    Explore Content
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${content.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </Link>
          ))}
        </div>

        {/* View All Content Button */}
        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Revolutionary Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}