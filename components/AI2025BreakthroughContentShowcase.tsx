import React from 'react';
import Link from 'next/link';

export default function AI2025BreakthroughContentShowcase() {
  const breakthroughContent = [
    {
      id: 1,
      title: "AI 2025 Breakthrough Revolution",
      description: "Discover the revolutionary AI breakthroughs of 2025 that are transforming industries and creating unprecedented opportunities for growth and innovation.",
      type: "Featured Page",
      category: "Breakthrough",
      image: "🧠",
      link: "/ai-2025-breakthrough-revolution",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      stats: "5000% ROI"
    },
    {
      id: 2,
      title: "Global Transformation Success Story",
      description: "How a Fortune 500 company achieved 10,000% ROI through AI 2025 breakthrough technologies, transforming their entire operation in just 6 months.",
      type: "Case Study",
      category: "Success Story",
      image: "🏆",
      link: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "10,000% ROI",
      badgeColor: "bg-green-500",
      stats: "Fortune 500"
    },
    {
      id: 3,
      title: "Ultimate Implementation Guide",
      description: "The complete blueprint for successfully implementing AI 2025 breakthrough technologies in your organization with proven strategies and real-world examples.",
      type: "Guide",
      category: "Implementation",
      image: "📚",
      link: "/blog/ai-2025-ultimate-implementation-guide",
      badge: "50+ Pages",
      badgeColor: "bg-blue-500",
      stats: "Step-by-Step"
    },
    {
      id: 4,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces that enable seamless communication between human thought and AI systems, achieving 10x faster decision-making.",
      type: "Technology",
      category: "Breakthrough",
      image: "🧠",
      link: "/blog/neural-interface-revolution-2025",
      badge: "NEW",
      badgeColor: "bg-purple-500",
      stats: "10x Faster"
    },
    {
      id: 5,
      title: "Quantum AI Acceleration",
      description: "Quantum-enhanced machine learning algorithms that process complex data 1000x faster than traditional systems, enabling real-time analysis.",
      type: "Technology",
      category: "Breakthrough",
      image: "⚛️",
      link: "/blog/quantum-ai-acceleration-2025",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-indigo-500",
      stats: "1000x Speed"
    },
    {
      id: 6,
      title: "Autonomous Enterprise Agents",
      description: "Self-managing AI agents that handle complex business processes autonomously, reducing operational costs by 80% while improving accuracy.",
      type: "Solution",
      category: "Automation",
      image: "🤖",
      link: "/blog/autonomous-enterprise-agents-2025",
      badge: "HOT",
      badgeColor: "bg-orange-500",
      stats: "-80% Costs"
    }
  ];

  return (
    <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Breakthrough
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Content Showcase
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI 2025 breakthrough content, 
            featuring revolutionary technologies, success stories, and implementation guides.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {breakthroughContent.map((content) => (
            <div 
              key={content.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Content Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{content.image}</div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${content.badgeColor}`}>
                      {content.badge}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {content.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">{content.type}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded text-xs">{content.category}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-semibold text-gray-500">
                    Impact:
                  </div>
                  <div className="text-sm font-bold text-green-600">
                    {content.stats}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href={content.link}
                  className="w-full block text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI 2025?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of companies already leveraging these breakthrough technologies 
              to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/ai-services-2025"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}