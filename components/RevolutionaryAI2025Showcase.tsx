import React from 'react';
import Link from 'next/link';

export default function RevolutionaryAI2025Showcase() {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Trends & Predictions",
      description: "Comprehensive analysis of AI trends, quantum computing breakthroughs, and future predictions that will shape 2025.",
      href: "/blog/ai-2025-ultimate-trends-predictions",
      category: "Trends & Predictions",
      icon: "🔮",
      featured: true,
      stats: "85% Enterprise Adoption"
    },
    {
      title: "1200% ROI Enterprise Transformation",
      description: "Real-world case study of Fortune 500 company achieving unprecedented ROI through comprehensive AI transformation.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      category: "Case Study",
      icon: "🏆",
      featured: true,
      stats: "$2.8B Total Impact"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete guide with templates, frameworks, and step-by-step instructions for successful AI implementation.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      category: "Implementation Guide",
      icon: "🛠️",
      featured: true,
      stats: "60% Faster Implementation"
    },
    {
      title: "Enterprise Automation Mastery",
      description: "Learn how to achieve 95% process automation across all business functions with proven strategies.",
      href: "/blog/ai-2025-enterprise-automation-mastery",
      category: "Automation",
      icon: "🚀",
      featured: false,
      stats: "95% Automation Rate"
    },
    {
      title: "Quantum Computing Breakthroughs",
      description: "Explore the latest quantum computing innovations and their impact on AI development and applications.",
      href: "/blog/ai-2025-quantum-computing-breakthrough",
      category: "Technology",
      icon: "⚛️",
      featured: false,
      stats: "1000x Faster Training"
    },
    {
      title: "Multimodal AI Revolution",
      description: "Discover how multimodal AI systems are revolutionizing human-computer interaction and content understanding.",
      href: "/blog/ai-2025-multimodal-revolution",
      category: "Innovation",
      icon: "🎯",
      featured: false,
      stats: "300% Better Accuracy"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🚀 REVOLUTIONARY AI 2025 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Ultimate AI Content Collection for 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI resources, case studies, and implementation guides 
            that will transform your business and give you a competitive advantage in 2025.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredContent.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  FEATURED
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{item.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                      {item.category}
                    </div>
                    <div className="text-xs text-gray-500">{item.stats}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <Link
                  href={item.href}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            📊 Content Impact Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-sm text-gray-600">New Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$2.8B</div>
              <div className="text-sm text-gray-600">Total Impact</div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="font-semibold text-gray-900 mb-2">Trends & Predictions</h3>
            <p className="text-sm text-gray-600 mb-4">Latest AI trends and future predictions</p>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Explore →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
            <p className="text-sm text-gray-600 mb-4">Real-world success stories and ROI</p>
            <Link href="/case-studies" className="text-green-600 hover:text-green-700 font-semibold text-sm">
              View Cases →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🛠️</div>
            <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
            <p className="text-sm text-gray-600 mb-4">Guides, toolkits, and frameworks</p>
            <Link href="/resources" className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
              Get Tools →
            </Link>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🎥</div>
            <h3 className="font-semibold text-gray-900 mb-2">Webinars</h3>
            <p className="text-sm text-gray-600 mb-4">Expert insights and training</p>
            <Link href="/webinars" className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
              Watch Now →
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            🚀 Ready to Transform Your Business with AI?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Join thousands of successful companies using our proven AI strategies and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/content-showcase"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📚 Explore All Content
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              📞 Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}