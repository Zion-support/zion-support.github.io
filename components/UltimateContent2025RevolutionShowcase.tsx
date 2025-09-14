import React from 'react';
import Link from 'next/link';

const UltimateContent2025RevolutionShowcase = () => {
  const featuredContent = [
    {
      title: "AI 2025: Ultimate Autonomous Enterprise Revolution",
      description: "Complete guide to achieving 2500% ROI through AI-driven autonomous enterprise transformation",
      category: "Complete Guide",
      readTime: "25 min read",
      roi: "2500% ROI",
      image: "/images/ai-2025-autonomous-enterprise-revolution.jpg",
      href: "/content/ai-2025-ultimate-autonomous-enterprise-revolution-complete-guide",
      featured: true
    },
    {
      title: "Fortune 500 AI Transformation Success Story",
      description: "How a Fortune 500 company achieved 2500% ROI through complete AI transformation",
      category: "Case Study",
      readTime: "15 min read",
      roi: "2500% ROI",
      image: "/images/ai-2025-autonomous-enterprise-success.jpg",
      href: "/case-studies/ai-2025-autonomous-enterprise-transformation-ultimate-success-story",
      featured: true
    },
    {
      title: "AI 2025 Implementation: Ultimate Master Guide",
      description: "Step-by-step implementation guide for achieving 2500% ROI through AI transformation",
      category: "Implementation Guide",
      readTime: "30 min read",
      roi: "2500% ROI",
      image: "/images/ai-2025-implementation-master-guide.jpg",
      href: "/resources/ai-2025-implementation-ultimate-master-guide-2500-roi",
      featured: true
    }
  ];

  const additionalContent = [
    {
      title: "Advanced Neural Architectures 2026",
      description: "Next-generation AI architectures for enterprise applications",
      category: "Technical Guide",
      readTime: "20 min read",
      href: "/content/ai-2026-advanced-neural-architectures"
    },
    {
      title: "Quantum AI Business Applications",
      description: "Quantum computing applications in business transformation",
      category: "Emerging Tech",
      readTime: "18 min read",
      href: "/content/ai-2025-quantum-ai-business-applications"
    },
    {
      title: "Edge Computing Revolution 2025",
      description: "Edge computing strategies for real-time AI applications",
      category: "Infrastructure",
      readTime: "22 min read",
      href: "/content/ai-2025-edge-computing-revolution"
    },
    {
      title: "Predictive Analytics Mastery",
      description: "Advanced predictive analytics for business intelligence",
      category: "Analytics",
      readTime: "16 min read",
      href: "/content/ai-2025-predictive-analytics-mastery"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">🔥 FEATURED CONTENT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ultimate AI 2025 Content Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI transformation resources, 
            proven methodologies, and real-world success stories for achieving unprecedented ROI.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {content.roi}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {content.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                    <span className="text-sm font-semibold text-purple-600">{content.category}</span>
                  </div>
                  
                  <Link
                    href={content.href}
                    className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Revolutionary Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalContent.map((content, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="mb-4">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {content.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{content.readTime}</span>
                    <Link
                      href={content.href}
                      className="text-purple-600 text-sm font-semibold hover:text-purple-800 transition-colors"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies achieving 2500% ROI through AI transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore All Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContent2025RevolutionShowcase;