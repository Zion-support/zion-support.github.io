import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';

export default function AI2026ContentShowcase() {
  const newContent = [
    {
      title: "AI 2026 Breakthrough Innovations",
      description: "Discover the revolutionary AI breakthroughs that will transform industries in 2026. From quantum-enhanced AI to neural interfaces, explore the cutting-edge innovations shaping our future.",
      href: "/blog/ai-2026-breakthrough-innovations",
      type: "Blog Post",
      icon: "🧠",
      readTime: "15 min read",
      category: "Innovation",
      featured: true,
      stats: {
        accuracy: "99.9%",
        speedup: "1000x",
        efficiency: "95%"
      }
    },
    {
      title: "Energy Sector Transformation: 4000% ROI",
      description: "How a major energy company achieved 4000% ROI through AI transformation, reducing costs by $2.8B while increasing renewable energy efficiency by 85%.",
      href: "/case-studies/ai-2026-energy-sector-transformation-breakthrough",
      type: "Case Study",
      icon: "⚡",
      readTime: "12 min read",
      category: "Transformation",
      featured: true,
      stats: {
        roi: "4000%",
        savings: "$2.8B",
        efficiency: "85%"
      }
    },
    {
      title: "Ultimate Implementation Master Guide",
      description: "The most comprehensive AI implementation guide for 2026. Step-by-step blueprint covering strategy, technology, governance, and ROI optimization for enterprise AI transformation.",
      href: "/resources/ai-2026-ultimate-implementation-master-guide",
      type: "Master Guide",
      icon: "📚",
      readTime: "45 min read",
      category: "Implementation",
      featured: true,
      stats: {
        pages: "200+",
        frameworks: "20+",
        templates: "50+"
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-indigo-800">🚀 NEW CONTENT SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary AI 2026 Content
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our latest breakthrough content covering AI innovations, transformation case studies, 
            and comprehensive implementation guides for 2026.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {newContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-200 bg-white">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{content.icon}</div>
                    <div>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {content.type}
                      </span>
                    </div>
                  </div>
                  {content.featured && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 animate-pulse">
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>

                {/* Stats */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(content.stats).map(([key, value]) => (
                      <div key={key} className="bg-gray-100 rounded-full px-3 py-1">
                        <span className="text-xs font-medium text-gray-700">
                          {key}: <span className="text-indigo-600 font-semibold">{value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span className="text-indigo-600 group-hover:text-indigo-800 font-medium">
                    Read More →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Content Preview */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            More Revolutionary Content Coming Soon
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-semibold text-gray-900 mb-2">Autonomous Systems</h4>
              <p className="text-sm text-gray-600">Next-gen robotics and automation</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h4 className="font-semibold text-gray-900 mb-2">Edge Computing</h4>
              <p className="text-sm text-gray-600">Distributed AI at the edge</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-semibold text-gray-900 mb-2">AI Security</h4>
              <p className="text-sm text-gray-600">Advanced threat protection</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">Industry Solutions</h4>
              <p className="text-sm text-gray-600">Vertical-specific AI applications</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Get personalized guidance for your AI implementation journey. Our experts can help you 
              achieve similar results with a customized strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/content-showcase"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View All Content
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}