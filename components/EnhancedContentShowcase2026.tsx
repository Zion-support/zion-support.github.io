import React from 'react';
import Link from 'next/link';

export default function EnhancedContentShowcase2026() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2026: Revolutionary Trends That Will Transform Everything",
      description: "Discover the groundbreaking AI trends for 2026 that will revolutionize industries, from quantum AI to neural interfaces and autonomous systems.",
      category: "Blog Post",
      readTime: "15 min read",
      image: "/images/ai-2026-trends-hero.jpg",
      href: "/blog/ai-2026-revolutionary-trends",
      badge: "TRENDING",
      badgeColor: "bg-red-500",
      tags: ["AI Trends", "2026 Predictions", "Technology"]
    },
    {
      id: 2,
      title: "Global Retail Giant AI Transformation: $2.3B Revenue Increase",
      description: "How a Fortune 500 retail company achieved unprecedented growth through comprehensive AI transformation, revolutionizing every aspect of their business operations.",
      category: "Case Study",
      readTime: "12 min read",
      image: "/images/retail-ai-transformation.jpg",
      href: "/case-studies/ai-transformation-global-retail-giant-2026",
      badge: "SUCCESS STORY",
      badgeColor: "bg-green-500",
      tags: ["Retail", "AI Transformation", "ROI"]
    },
    {
      id: 3,
      title: "AI 2026 Implementation Master Guide: Complete Blueprint for Success",
      description: "The definitive guide to implementing AI in 2026. Complete blueprint with frameworks, checklists, templates, and step-by-step implementation strategies.",
      category: "Resource",
      readTime: "45 min read",
      image: "/images/ai-implementation-guide.jpg",
      href: "/resources/ai-2026-implementation-master-guide",
      badge: "MASTER GUIDE",
      badgeColor: "bg-blue-500",
      tags: ["Implementation", "Guide", "Framework"]
    },
    {
      id: 4,
      title: "Quantum AI Breakthrough: The Future of Machine Learning",
      description: "Explore how quantum computing is revolutionizing machine learning algorithms and enabling solutions to previously impossible problems.",
      category: "Blog Post",
      readTime: "18 min read",
      image: "/images/quantum-ai-breakthrough.jpg",
      href: "/blog/ai-2026-quantum-machine-learning-revolution",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-purple-500",
      tags: ["Quantum AI", "Machine Learning", "Breakthrough"]
    },
    {
      id: 5,
      title: "Neural Interface Revolution: Brain-Computer Interfaces in 2026",
      description: "Discover the latest developments in brain-computer interface technology and how it's transforming healthcare, communication, and human-AI interaction.",
      category: "Blog Post",
      readTime: "20 min read",
      image: "/images/neural-interface-revolution.jpg",
      href: "/blog/ai-2026-neural-interface-breakthrough",
      badge: "REVOLUTIONARY",
      badgeColor: "bg-orange-500",
      tags: ["Neural Interfaces", "BCI", "Healthcare"]
    },
    {
      id: 6,
      title: "Fortune 500 Manufacturing AI Breakthrough: 60% Efficiency Gains",
      description: "How a manufacturing giant achieved unprecedented efficiency gains through AI automation, predictive maintenance, and intelligent supply chain optimization.",
      category: "Case Study",
      readTime: "14 min read",
      image: "/images/manufacturing-ai-breakthrough.jpg",
      href: "/case-studies/ai-transformation-fortune-500-breakthrough-2025",
      badge: "EFFICIENCY",
      badgeColor: "bg-teal-500",
      tags: ["Manufacturing", "Automation", "Efficiency"]
    }
  ];

  const categories = [
    { name: "All", count: featuredContent.length, active: true },
    { name: "Blog Posts", count: featuredContent.filter(c => c.category === "Blog Post").length, active: false },
    { name: "Case Studies", count: featuredContent.filter(c => c.category === "Case Study").length, active: false },
    { name: "Resources", count: featuredContent.filter(c => c.category === "Resource").length, active: false }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 NEW CONTENT 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge insights, implementation guides, and success stories that will transform your understanding of AI in 2026
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${content.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {content.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {content.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {content.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{content.readTime}</span>
                  <span>January 2025</span>
                </div>

                {/* CTA */}
                <Link
                  href={content.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with AI?</h3>
            <p className="text-lg mb-6 text-blue-100">
              Get expert guidance and support for your AI transformation journey. Our team of AI specialists can help you implement these strategies successfully.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Expert Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Our AI Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}