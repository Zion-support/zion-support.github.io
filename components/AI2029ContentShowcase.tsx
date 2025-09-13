import React from 'react';
import Link from 'next/link';

export default function AI2029ContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2029: The Quantum Computing Revolution",
      description: "Discover how quantum computing will revolutionize AI in 2029. Explore breakthrough technologies, implementation strategies, and ROI projections for enterprise adoption.",
      href: "/blog/ai-2029-quantum-computing-revolution",
      type: "Blog Post",
      readTime: "15 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "🔮"
    },
    {
      title: "AI 2029 Enterprise Transformation: 4,000% ROI Breakthrough",
      description: "Real case study showing how Fortune 500 companies achieved unprecedented 4,000% ROI through comprehensive AI 2029 transformation.",
      href: "/case-studies/ai-2029-enterprise-transformation-breakthrough",
      type: "Case Study",
      readTime: "12 min read",
      badge: "BREAKTHROUGH",
      badgeColor: "bg-red-500",
      icon: "💰"
    },
    {
      title: "AI 2029 Implementation Master Guide",
      description: "Complete roadmap for AI 2029 implementation. Step-by-step guide with best practices, ROI calculations, and proven strategies for enterprise success.",
      href: "/resources/ai-2029-implementation-master-guide",
      type: "Master Guide",
      readTime: "45 min read",
      badge: "COMPREHENSIVE",
      badgeColor: "bg-blue-500",
      icon: "📚"
    }
  ];

  const additionalContent = [
    {
      title: "Quantum AI Financial Optimization",
      description: "How quantum computing is revolutionizing financial services with 2,000% ROI.",
      href: "/case-studies/quantum-ai-financial-optimization-breakthrough-2026",
      type: "Case Study",
      icon: "⚛️"
    },
    {
      title: "AI 2028 Future Predictions",
      description: "What to expect in AI development leading up to 2029.",
      href: "/blog/ai-2028-future-predictions",
      type: "Blog Post",
      icon: "🔮"
    },
    {
      title: "AI 2028 Implementation Guide",
      description: "Previous year's comprehensive implementation guide.",
      href: "/resources/ai-2028-implementation-master-guide",
      type: "Guide",
      icon: "📖"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-4">
            <span>🚀</span>
            <span>AI 2029 REVOLUTION</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Exclusive AI 2029 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get exclusive access to breakthrough AI 2029 content, featuring quantum computing 
            insights, enterprise case studies, and comprehensive implementation guides.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            🌟 Featured Content
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{content.icon}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${content.badgeColor}`}>
                      {content.badge}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{content.type}</span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                  <Link 
                    href={content.href}
                    className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                  >
                    Read Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            📚 Related Content
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Link 
                key={index}
                href={content.href}
                className="block bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-purple-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{content.icon}</span>
                  <span className="text-sm text-gray-500">{content.type}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {content.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {content.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Lead the AI 2029 Revolution?
          </h3>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Get personalized guidance and support for your AI 2029 implementation. 
            Our experts can help you achieve breakthrough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Expert Consultation
            </Link>
            <Link 
              href="/tools/ai-roi-calculator-2029"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}