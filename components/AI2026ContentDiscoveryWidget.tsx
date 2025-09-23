import React from 'react';
import Link from 'next/link';

export default function AI2026ContentDiscoveryWidget() {
  const featuredContent = [
    {
      title: "Advanced Automation Mastery",
      description: "Master cutting-edge AI automation techniques for enterprise transformation",
      href: "/ai-2026-advanced-automation-mastery",
      icon: "🤖",
      category: "Automation",
      color: "emerald"
    },
    {
      title: "Neural Interface Revolution",
      description: "Explore revolutionary brain-computer interface technology",
      href: "/ai-2026-neural-interface-revolution",
      icon: "🧠",
      category: "Neural Tech",
      color: "purple"
    },
    {
      title: "Breakthrough Content Showcase",
      description: "Discover revolutionary AI breakthroughs and case studies",
      href: "/ai-2026-breakthrough-content-showcase",
      icon: "🚀",
      category: "Showcase",
      color: "blue"
    },
    {
      title: "AI Innovation Hub",
      description: "Access cutting-edge AI tools and resources",
      href: "/ai-innovation-hub",
      icon: "💡",
      category: "Innovation",
      color: "indigo"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest breakthrough contentcutting-edge technologiesand revolutionary AI solutions for 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((contentindex) => (
            <Link 
              key={index}
              href={content.href}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r from-${content.color}-500 to-${content.color}-600 rounded-lg flex items-center justify-center text-white text-xl`}>
                  {content.icon}
                </div>
                <span className={`px-3 py-1 bg-${content.color}-100 text-${content.color}-600 text-sm font-semibold rounded-full`}>
                  {content.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {content.description}
              </p>
              
              <div className={`inline-flex items-center text-${content.color}-600 font-semibold text-sm group-hover:text-${content.color}-700 transition-colors`}>
                Explore Now
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-12">
          <Link 
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}