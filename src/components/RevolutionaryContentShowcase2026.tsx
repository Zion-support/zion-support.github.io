import React from 'react';
import Link from 'next/link';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const contentItems = [
    {
      title: "AI 2025 Revolutionary Autonomous Systems Breakthrough",
      description: "Discover how revolutionary autonomous systems are delivering 15,000% ROI and transforming entire industries overnight.",
      href: "/blog/ai-2025-revolutionary-autonomous-systems-breakthrough",
      category: "Breakthrough",
      badge: "NEW",
      badgeColor: "bg-red-500",
      icon: "🚀"
    },
    {
      title: "AI 2026 Quantum-Neural Fusion Breakthrough",
      description: "Witness the revolutionary fusion of quantum computing and neural networks delivering 25,000% ROI and unprecedented capabilities.",
      href: "/blog/ai-2026-quantum-neural-fusion-breakthrough",
      category: "Revolutionary",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-purple-500",
      icon: "⚛️"
    },
    {
      title: "AI 2026-2030 Future Predictions",
      description: "Comprehensive predictions for AI evolution from 2026-2030, including revolutionary breakthroughs and transformative technologies.",
      href: "/blog/ai-2026-2030-future-predictions-revolutionary",
      category: "Predictions",
      badge: "EXCLUSIVE",
      badgeColor: "bg-blue-500",
      icon: "🔮"
    },
    {
      title: "AI 2025 Autonomous Systems Case Study",
      description: "How a Fortune 500 company achieved 15,000% ROI through revolutionary AI autonomous systems transformation.",
      href: "/case-studies/ai-2025-autonomous-systems-transformation-breakthrough",
      category: "Case Study",
      badge: "SUCCESS",
      badgeColor: "bg-green-500",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Revolutionary Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our latest breakthrough content featuring revolutionary AI technologies, case studies, and future predictions that are reshaping the world.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contentItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-white text-xs font-semibold ${item.badgeColor} animate-pulse`}>
                  {item.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">
                {item.icon}
              </div>

              {/* Content */}
              <div className="p-6 pt-12">
                <div className="mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold mb-4 animate-pulse">
                🔥 FEATURED BREAKTHROUGH
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                AI 2025 Autonomous Systems: The Most Significant Breakthrough in AI History
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Discover how our revolutionary autonomous systems are delivering unprecedented results across industries, with Fortune 500 companies achieving 15,000% ROI and transforming their operations completely.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  ✅ 15,000% ROI
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  ⚡ 99.9% Accuracy
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                  🎯 Zero Human Intervention
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-2025-revolutionary-autonomous-systems-breakthrough"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
                >
                  Read Full Article
                </Link>
                <Link
                  href="/case-studies/ai-2025-autonomous-systems-transformation-breakthrough"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
                >
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl p-8 text-white">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">15,000%</div>
                  <div className="text-xl font-semibold mb-6">Average ROI Achievement</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-sm opacity-90">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">1000x</div>
                      <div className="text-sm opacity-90">Speed Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated with Revolutionary Content
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get exclusive access to our latest breakthrough content, case studies, and future predictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Explore All Content
            </Link>
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Subscribe for Updates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2026;