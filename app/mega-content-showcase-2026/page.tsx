import React from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';

export default function MegaContentShowcase2026() {
  const featuredContent = [
    {
      title: "AI 2026 Enterprise Automation Mastery",
      description: "Complete implementation guide with proven strategies for achieving 600% ROI through enterprise AI automation. Includes frameworks, checklists, and real-world case studies.",
      type: "Blog Post",
      url: "/blog/ai-2026-enterprise-automation-mastery",
      badge: "FEATURED",
      color: "blue",
      readTime: "15 min",
      category: "Enterprise AI",
      stats: "600% ROI strategies"
    },
    {
      title: "Fortune 500 Transformation Breakthrough",
      description: "Detailed case study of how a Fortune 500 manufacturing giant achieved 600% ROI within 18 months through comprehensive AI automation implementation.",
      type: "Case Study",
      url: "/case-studies/ai-2026-fortune-500-transformation-breakthrough",
      badge: "HOT",
      color: "green",
      readTime: "12 min",
      category: "Success Stories",
      stats: "600% ROI achieved"
    },
    {
      title: "AI 2026 Implementation Toolkit Ultimate",
      description: "The most comprehensive AI implementation toolkit for 2026. Contains 47 templates, 23 frameworks, and 15 assessment tools for successful enterprise transformation.",
      type: "Resource",
      url: "/resources/ai-2026-implementation-toolkit-ultimate",
      badge: "ULTIMATE",
      color: "purple",
      readTime: "20 min",
      category: "Implementation",
      stats: "47 templates included"
    },
    {
      title: "AI ROI Calculator 2026",
      description: "Interactive calculator to project your AI investment returns. Get detailed projections for cost savings, revenue growth, and productivity gains based on 2026 benchmarks.",
      type: "Tool",
      url: "/tools/ai-roi-calculator-2026",
      badge: "INTERACTIVE",
      color: "orange",
      readTime: "5 min",
      category: "Calculators",
      stats: "Instant ROI projections"
    }
  ];

  const contentCategories = [
    {
      title: "Enterprise AI Strategy",
      description: "Strategic frameworks and implementation guides for enterprise AI transformation",
      count: 12,
      icon: "🏢",
      color: "blue"
    },
    {
      title: "Success Stories",
      description: "Real-world case studies and transformation success stories",
      count: 8,
      icon: "📊",
      color: "green"
    },
    {
      title: "Implementation Tools",
      description: "Practical tools, templates, and checklists for AI implementation",
      count: 15,
      icon: "🛠️",
      color: "purple"
    },
    {
      title: "Interactive Calculators",
      description: "ROI calculators, assessment tools, and interactive resources",
      count: 6,
      icon: "🧮",
      color: "orange"
    },
    {
      title: "Technical Guides",
      description: "Deep-dive technical guides and architecture blueprints",
      count: 20,
      icon: "⚙️",
      color: "indigo"
    },
    {
      title: "Industry Insights",
      description: "Industry-specific AI strategies and market analysis",
      count: 10,
      icon: "📈",
      color: "pink"
    }
  ];

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colors[color] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      green: "from-green-50 to-green-100 border-green-200",
      purple: "from-purple-50 to-purple-100 border-purple-200",
      orange: "from-orange-50 to-orange-100 border-orange-200",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200",
      pink: "from-pink-50 to-pink-100 border-pink-200"
    };
    return colors[color] || "from-gray-50 to-gray-100 border-gray-200";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Mega Content Showcase 2026 - Ultimate AI Resources Collection"
        description="Explore our comprehensive collection of AI resources for 2026. Enterprise guides, case studies, implementation tools, and interactive calculators for successful AI transformation."
        keywords="AI resources 2026, enterprise AI content, AI implementation guides, AI case studies, AI tools, AI calculators"
        url="/mega-content-showcase-2026"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Mega Content Showcase 2026
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The ultimate collection of AI resources for enterprise transformation. 
              Discover comprehensive guides, real-world case studies, implementation tools, 
              and interactive calculators to accelerate your AI journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">71+ Resources</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">47 Templates</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">23 Frameworks</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">6 Interactive Tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600">
            Our most popular and impactful resources for AI transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredContent.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">
                      {item.type === "Blog Post" ? "📝" : 
                       item.type === "Case Study" ? "📊" : 
                       item.type === "Resource" ? "📚" : "🛠️"}
                    </span>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeColor(item.color)}`}>
                        {item.badge}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">{item.type}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{item.readTime}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">{item.category}</span>
                    <span className="font-semibold text-green-600">{item.stats}</span>
                  </div>
                  <Link
                    href={item.url}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Categories */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Content Categories
            </h2>
            <p className="text-xl text-gray-600">
              Explore resources organized by topic and use case
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCategories.map((category, index) => (
              <div key={index} className={`bg-gradient-to-br ${getCategoryColor(category.color)} rounded-xl p-8 border hover:shadow-lg transition-shadow cursor-pointer`}>
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-500">
                    {category.count} resources
                  </span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Content Impact Statistics
            </h2>
            <p className="text-xl text-gray-300">
              Real results from our comprehensive resource library
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">300%+</div>
              <div className="text-gray-300">Average ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50,000+</div>
              <div className="text-gray-300">Downloads This Year</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Implementation Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">Fortune 500</div>
              <div className="text-gray-300">Companies Using Our Resources</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert guidance and support to implement these resources and achieve 
            similar results in your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              Get Expert Consultation
            </Link>
            <Link
              href="/resources"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg border border-blue-500"
            >
              Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}