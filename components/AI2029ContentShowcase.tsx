import React from 'react';
import Link from 'next/link';

export default function AI2029ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2029 Future Predictions",
      description: "Revolutionary AI trends and breakthroughs predicted for 2029. From quantum AI to neural interfaces.",
      href: "/blog/ai-2029-future-predictions",
      category: "Blog",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🔮"
    },
    {
      title: "AI 2029 Space Exploration Breakthrough",
      description: "5000% ROI success story through AI-powered autonomous space mission systems.",
      href: "/case-studies/ai-2029-space-exploration-breakthrough",
      category: "Case Study",
      badge: "5000% ROI",
      badgeColor: "bg-green-500",
      icon: "🚀"
    },
    {
      title: "AI 2029 Ultimate Implementation Master Guide",
      description: "Complete roadmap with 500+ pages, 50+ tools, and 25+ case studies for AI 2029 implementation.",
      href: "/resources/ai-2029-ultimate-implementation-master-guide",
      category: "Resource",
      badge: "ULTIMATE GUIDE",
      badgeColor: "bg-purple-500",
      icon: "📚"
    }
  ];

  const trendingContent = [
    {
      title: "Quantum AI Breakthroughs 2029",
      description: "How quantum computing will revolutionize AI capabilities",
      href: "/blog/quantum-ai-breakthroughs-2029",
      category: "Blog",
      icon: "⚛️"
    },
    {
      title: "Neural Interface Revolution",
      description: "Brain-computer interfaces transforming human-AI interaction",
      href: "/blog/neural-interface-revolution-2029",
      category: "Blog",
      icon: "🧠"
    },
    {
      title: "Autonomous Systems Mastery",
      description: "Complete guide to fully autonomous AI systems",
      href: "/resources/autonomous-systems-mastery-2029",
      category: "Resource",
      icon: "🤖"
    },
    {
      title: "AI 2029 Healthcare Transformation",
      description: "2000% ROI case study in medical AI implementation",
      href: "/case-studies/ai-2029-healthcare-transformation",
      category: "Case Study",
      icon: "🏥"
    }
  ];

  const latestContent = [
    {
      title: "AI 2029 Economic Impact Analysis",
      description: "How AI will reshape the global economy by 2029",
      href: "/blog/ai-2029-economic-impact-analysis",
      category: "Blog",
      icon: "💰"
    },
    {
      title: "AI Governance Framework 2029",
      description: "Essential governance and ethics guidelines for AI 2029",
      href: "/resources/ai-governance-framework-2029",
      category: "Resource",
      icon: "⚖️"
    },
    {
      title: "AI 2029 Manufacturing Revolution",
      description: "4000% ROI through autonomous manufacturing systems",
      href: "/case-studies/ai-2029-manufacturing-revolution",
      category: "Case Study",
      icon: "🏭"
    },
    {
      title: "AI 2029 Readiness Calculator",
      description: "Assess your organization's AI 2029 preparation level",
      href: "/tools/ai-2029-readiness-calculator",
      category: "Tool",
      icon: "🧮"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2029 Content Showcase
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Discover the future of artificial intelligence with our comprehensive AI 2029 content library
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">
              BREAKTHROUGH CONTENT
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              500+ PAGES
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
              5000% ROI CASE STUDIES
            </span>
          </div>
        </div>

        {/* Featured Content */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured AI 2029 Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex space-x-2">
                      <span className={`${item.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">
                      {item.category}
                    </span>
                    <span className="text-blue-600 group-hover:text-blue-800 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Content */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📈 Trending AI 2029 Topics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingContent.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-blue-600 group-hover:text-blue-800 transition-colors text-sm">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Content */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🆕 Latest AI 2029 Content
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestContent.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="group bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-blue-600 group-hover:text-blue-800 transition-colors text-sm">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Prepare for AI 2029?
          </h3>
          <p className="text-xl opacity-90 mb-6">
            Get instant access to our complete AI 2029 content library and start 
            your transformation journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/resources/ai-2029-ultimate-implementation-master-guide"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Master Guide
            </Link>
            <Link 
              href="/blog/ai-2029-future-predictions"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Read Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2029-space-exploration-breakthrough"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              View 5000% ROI Case Study
            </Link>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Join 10,000+ organizations already preparing for AI 2029
          </p>
        </div>
      </div>
    </div>
  );
}