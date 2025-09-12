import React from 'react';
import SEO from '../../components/SEO';
import Link from 'next/link';
import TrendingContentWidget from '../../components/TrendingContentWidget';

export const metadata = {
  title: 'Content Showcase - Latest AI Insights, Case Studies & Resources',
  description: 'Explore our comprehensive collection of AI insights, success stories, implementation guides, and cutting-edge research. Stay ahead with the latest in artificial intelligence.',
  keywords: 'AI content, AI insights, AI case studies, AI resources, artificial intelligence, machine learning, 2025',
};

export default function ContentShowcase() {
  const featuredContent = [
    {
      title: "Advanced AI Agents: The Future of Autonomous Business Operations",
      type: "Blog Post",
      category: "AI Technology",
      readTime: "15 min",
      views: "12.5K",
      trending: true,
      href: "/blog/ai-2025-advanced-ai-agents",
      excerpt: "Discover how advanced AI agents are revolutionizing business operations with autonomous decision-making, multi-modal capabilities, and enterprise-grade reliability.",
      image: "🤖",
      featured: true
    },
    {
      title: "Quantum AI Breakthrough: The Next Frontier in Artificial Intelligence",
      type: "Blog Post",
      category: "Quantum Computing",
      readTime: "18 min",
      views: "8.9K",
      trending: true,
      href: "/blog/ai-2025-quantum-ai-breakthrough",
      excerpt: "Explore the revolutionary intersection of quantum computing and AI, unlocking unprecedented computational power and solving previously impossible problems.",
      image: "⚡",
      featured: true
    },
    {
      title: "FinTech Unicorn Transformation: $5.2B Valuation Through AI Innovation",
      type: "Case Study",
      category: "Success Stories",
      readTime: "12 min",
      views: "15.2K",
      trending: true,
      href: "/case-studies/ai-2025-fintech-unicorn-transformation",
      excerpt: "How a traditional financial services company became a $5.2B unicorn through strategic AI implementation, achieving 400% revenue growth in 18 months.",
      image: "💰",
      featured: true
    },
    {
      title: "AI Implementation Success Framework 2025: Complete Guide",
      type: "Resource",
      category: "Implementation",
      readTime: "25 min",
      views: "22.1K",
      trending: true,
      href: "/resources/ai-2025-implementation-success-framework",
      excerpt: "The definitive framework for successful AI implementation in enterprise environments. Proven methodologies and step-by-step guidance.",
      image: "📋",
      featured: true
    }
  ];

  const contentCategories = [
    {
      title: "AI Technology",
      description: "Latest breakthroughs in artificial intelligence technology",
      count: "25+ Articles",
      href: "/blog",
      icon: "🧠",
      color: "blue"
    },
    {
      title: "Success Stories",
      description: "Real-world case studies of AI transformation",
      count: "15+ Case Studies",
      href: "/case-studies",
      icon: "📈",
      color: "green"
    },
    {
      title: "Implementation Guides",
      description: "Practical resources for AI implementation",
      count: "20+ Resources",
      href: "/resources",
      icon: "📚",
      color: "purple"
    },
    {
      title: "Industry Insights",
      description: "Deep dives into AI trends and predictions",
      count: "30+ Insights",
      href: "/blog",
      icon: "🔍",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Content Showcase - Latest AI Insights, Case Studies & Resources"
        description="Explore our comprehensive collection of AI insights, success stories, implementation guides, and cutting-edge research. Stay ahead with the latest in artificial intelligence."
        keywords="AI content, AI insights, AI case studies, AI resources, artificial intelligence, machine learning, 2025"
        url="/content-showcase"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Content Showcase
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
              Discover the latest insights, success stories, and implementation guides 
              that are shaping the future of artificial intelligence in 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#featured"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Featured Content
              </Link>
              <Link
                href="#categories"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
              >
                Browse by Category
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="featured" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Featured Content</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful content, handpicked for their value 
              and relevance to today's AI landscape.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredContent.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{item.image}</span>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.type === 'Blog Post' ? 'bg-blue-100 text-blue-700' :
                        item.type === 'Case Study' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {item.type}
                      </span>
                      {item.trending && (
                        <span className="ml-2 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                          🔥 Trending
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {item.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {item.views} views
                      </span>
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">📚 Content Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our content organized by category to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCategories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className={`group block bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  category.color === 'blue' ? 'hover:border-blue-200' :
                  category.color === 'green' ? 'hover:border-green-200' :
                  category.color === 'purple' ? 'hover:border-purple-200' :
                  'hover:border-orange-200'
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                    category.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    category.color === 'green' ? 'bg-green-100 text-green-700' :
                    category.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {category.count}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Content Widget */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔥 Trending This Week</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what's capturing attention in the AI community right now.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <TrendingContentWidget />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
          <p className="text-xl opacity-90 mb-8">
            Get the latest AI content delivered directly to your inbox. Join 50,000+ 
            professionals staying ahead of the curve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}