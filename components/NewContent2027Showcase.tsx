import React from 'react';
import Link from 'next/link';
import Card from './ui/Card';
import FeatureCard from './FeatureCard';

export default function NewContent2027Showcase() {
  const newContent = [
    {
      title: "AI 2027: Revolutionary Predictions & Future Trends",
      description: "Discover the groundbreaking AI trends and predictions for 2027. From quantum AI to neural interfaces, explore the future of artificial intelligence.",
      href: "/blog/ai-2027-future-predictions",
      type: "Blog Post",
      category: "Predictions",
      icon: "🔮",
      features: [
        "Quantum-Enhanced AI Systems",
        "Neural Interface Breakthroughs", 
        "Autonomous AI Ecosystems",
        "Multimodal AI Convergence"
      ],
      readTime: "15 min read",
      isNew: true
    },
    {
      title: "AI 2027: Automotive Industry Transformation Breakthrough",
      description: "How a leading automotive manufacturer achieved 500% ROI through AI transformation. Complete case study with implementation details and results.",
      href: "/case-studies/ai-2027-automotive-transformation-breakthrough",
      type: "Case Study",
      category: "Automotive",
      icon: "🚗",
      features: [
        "500% ROI Achievement",
        "Autonomous Manufacturing",
        "AI-Powered Quality Control",
        "Supply Chain Intelligence"
      ],
      readTime: "12 min read",
      isNew: true
    },
    {
      title: "AI 2027: Complete Implementation Master Guide",
      description: "The ultimate guide to implementing AI in 2027. Step-by-step instructions, best practices, and proven strategies for AI transformation success.",
      href: "/resources/ai-2027-implementation-master-guide",
      type: "Resource",
      category: "Implementation",
      icon: "📚",
      features: [
        "AI Readiness Assessment",
        "Business Case Development",
        "Technology Selection Guide",
        "Implementation Roadmap"
      ],
      readTime: "25 min read",
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-4">
            🚀 NEW: 2027 Content
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI 2027 Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI 2027 predictions, case studies, and implementation guides. 
            Stay ahead of the curve with cutting-edge insights and proven strategies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{content.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {content.type}
                          </span>
                          {content.isNew && (
                            <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded animate-pulse">
                              NEW
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{content.category}</span>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{content.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {content.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {content.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                      Read More →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Our 2027 Content Matters
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500%</div>
              <div className="text-sm text-gray-600">Average ROI Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-sm text-gray-600">Months to ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">$2.3B</div>
              <div className="text-sm text-gray-600">Average Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI 2027?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Don't wait for the future - create it. Our AI experts can help you implement 
              these revolutionary technologies today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/mega-content-showcase-2026" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}