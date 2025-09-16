import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function AI2025ContentShowcase() {
  const contentItems = [
    {
      title: "AI 2025 Ultimate Breakthrough Revolution",
      description: "Revolutionary AI technologies delivering unprecedented 10,000% ROI and transforming entire industries.",
      link: "/ai-2025-ultimate-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      color: "from-red-500 to-pink-500",
      icon: "🚀",
      stats: "10,000% ROI"
    },
    {
      title: "Global Transformation Case Study",
      description: "How a Fortune 500 company achieved 10,000% ROI through our revolutionary AI breakthrough technologies.",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS STORY",
      color: "from-green-500 to-emerald-500",
      icon: "🏆",
      stats: "10,000% ROI"
    },
    {
      title: "AI 2025 Revolutionary Trends & Predictions",
      description: "Comprehensive analysis of AI trends and predictions for 2025. Discover the breakthrough technologies reshaping our world.",
      link: "/blog/ai-2025-revolutionary-trends-predictions",
      badge: "FUTURE PREDICTIONS",
      color: "from-purple-500 to-blue-500",
      icon: "🔮",
      stats: "95% Accuracy"
    },
    {
      title: "Quantum-Neural Fusion Technology",
      description: "Revolutionary fusion of quantum computing and neural networksdelivering 15,000% ROI through unprecedented processing power.",
      link: "/quantum-computing-solutions-2025",
      badge: "REVOLUTIONARY",
      color: "from-indigo-500 to-purple-500",
      icon: "⚛️",
      stats: "15,000% ROI"
    },
    {
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling seamless human-AI collaborationrevolutionizing healthcare and productivity.",
      link: "/neural-interface-solutions",
      badge: "BREAKTHROUGH",
      color: "from-pink-500 to-rose-500",
      icon: "🧠",
      stats: "5,000% ROI"
    },
    {
      title: "Autonomous Decision Systems",
      description: "Self-evolving AI systems that make complex decisions with 99.9% accuracyreducing costs by 90% and increasing efficiency by 500%.",
      link: "/autonomous-systems-2025",
      badge: "AUTONOMOUS",
      color: "from-orange-500 to-red-500",
      icon: "🤖",
      stats: "99.9% Accuracy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-600 font-semibold text-sm">🚀 NEW CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most advanced AI technologies and breakthrough innovations that are reshaping the future of business and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((itemindex) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{item.icon}</div>
                  <span className={`bg-gradient-to-r ${item.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">
                    {item.stats}
                  </div>
                  <a
                    href={item.link}
                    className={`bg-gradient-to-r ${item.color} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                  >
                    Explore →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}