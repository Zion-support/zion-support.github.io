import React from 'react';
import Link from 'next/link';

const LatestContent2025PromotionBanner = () => {
  const featuredContent = [
    {
      title: "AI 2025 Enterprise Integration Mastery",
      description: "Complete implementation guide for enterprise AI integration with 340% average ROI increase",
      category: "AI Implementation",
      readingTime: "12 min read",
      href: "/blog/ai-2025-enterprise-integration-mastery",
      featured: true,
      new: true
    },
    {
      title: "Quantum AI Business Revolution 2025",
      description: "Discover how quantum AI is revolutionizing business operations with exponential improvements",
      category: "Quantum Technology",
      readingTime: "15 min read",
      href: "/blog/quantum-ai-business-revolution-2025",
      featured: true,
      new: true
    },
    {
      title: "AI Autonomous Business Operations 2025",
      description: "The future of self-managing enterprises with 500% productivity increases",
      category: "AI Automation",
      readingTime: "18 min read",
      href: "/blog/ai-autonomous-business-operations-2025",
      featured: true,
      new: true
    },
    {
      title: "AI Implementation Enterprise Guide 2025",
      description: "Complete roadmap for enterprise AI implementation with real-world case studies",
      category: "Implementation Guide",
      readingTime: "25 min read",
      href: "/resources/ai-implementation-enterprise-guide-2025",
      featured: true,
      new: true
    }
  ];

  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI & Technology Insights
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI strategies, enterprise solutions, and technology breakthroughs 
            that are transforming businesses in 2025
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredContent.map((content, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300 group border border-white border-opacity-20"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  NEW
                </span>
                <span className="text-sm opacity-75">{content.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">
                {content.title}
              </h3>
              
              <p className="text-sm opacity-90 mb-4 leading-relaxed">
                {content.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {content.category}
                </span>
                <Link
                  href={content.href}
                  className="text-yellow-300 hover:text-yellow-200 font-semibold text-sm group-hover:underline transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Join thousands of enterprises already leveraging our AI solutions to achieve 
              unprecedented growth and efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-900 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
            <div className="text-sm opacity-75">AI Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">340%</div>
            <div className="text-sm opacity-75">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">98%</div>
            <div className="text-sm opacity-75">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
            <div className="text-sm opacity-75">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestContent2025PromotionBanner;