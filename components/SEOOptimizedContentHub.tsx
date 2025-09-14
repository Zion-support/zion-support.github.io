import React from 'react';
import Link from 'next/link';
ArrowRightSearchFilterTrendingUpStar

const SEOOptimizedContentHub = () => {
  const contentCategories = [
    {
      title: "AI Innovation 2025-2030",
      description: "Cutting-edge AI technologies and breakthrough innovations",
      icon: "🤖",
      link: "/ai-innovation-hub-2025",
      keywords: ["AI innovation"artificial intelligence"machine learning"2025"2030"]
    },
    {
      title: "Quantum Computing Solutions",
      description: "Revolutionary quantum computing breakthroughs and applications",
      icon: "⚛️",
      link: "/quantum-computing-solutions-2025",
      keywords: ["quantum computing"quantum supremacy"quantum algorithms"2025"]
    },
    {
      title: "Autonomous Business Operations",
      description: "Complete automation solutions for enterprise transformation",
      icon: "🚀",
      link: "/autonomous-business-operations-2025",
      keywords: ["business automation"autonomous operations"enterprise AI"ROI"]
    },
    {
      title: "Revolutionary Tech Showcase",
      description: "Latest technological breakthroughs and future predictions",
      icon: "✨",
      link: "/revolutionary-tech-showcase-2025",
      keywords: ["technology trends"future tech"innovation"breakthrough"]
    }
  ];

  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Automation Breakthrough",
      excerpt: "Discover how Fortune 500 companies achieved 15,000% ROI with our revolutionary AI automation solutions.",
      link: "/case-studies/fortune-500-ai-transformation-2025-breakthrough",
      category: "Case Study",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Quantum-Neural Fusion: The Next Frontier",
      excerpt: "Explore the convergence of quantum computing and neural networks for unprecedented computational power.",
      link: "/blog/quantum-ai-hybrid-systems-2026-breakthrough",
      category: "Blog Post",
      readTime: "12 min read",
      featured: true
    },
    {
      title: "Edge Computing Revolution 2025",
      excerpt: "Next-generation edge computing solutions for real-time AI processing and decision making.",
      link: "/blog/ai-2025-edge-computing-revolution-next-generation",
      category: "Technical Guide",
      readTime: "10 min read",
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ultimate Content Discovery Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI insightscase studiesand revolutionary technology showcases.
            Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contentcase studiesor technologies..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 inline mr-1" />
                All Categories
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                Case Studies
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                Technical Guides
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
                AI Innovation
              </button>
            </div>
          </div>
        </div>

        {/* Content Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contentCategories.map((categoryindex) => (
            <Link
              key={index}
              href={category.link}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Content Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              Featured Content
            </h3>
            <Link
              href="/featured-content"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredContent.map((contentindex) => (
              <Link
                key={index}
                href={content.link}
                className={`group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  content.featured ? 'ring-2 ring-blue-200' : ''
                }`}
              >
                {content.featured && (
                  <div className="flex items-center mb-3">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium text-yellow-600">Featured</span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                  <span className="text-sm text-gray-500">{content.readTime}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  {content.excerpt}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Case Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-blue-100">Technical Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">AI Tools & Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15,000%</div>
              <div className="text-blue-100">Average ROI</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of companies already using our AI solutions to achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOOptimizedContentHub;