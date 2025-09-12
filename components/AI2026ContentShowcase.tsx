import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';

export default function AI2026ContentShowcase() {
  const newContent = [
    {
<<<<<<< HEAD
      title: "Next-Generation AI Systems",
      description: "Discover revolutionary AI architectures that will power the future of artificial intelligence.",
      href: "/blog/ai-2026-next-generation-ai-systems",
      category: "Blog Post",
      icon: "🧠",
      readTime: "15 min read",
      isNew: true
    },
    {
      title: "Enterprise Transformation: 2000% ROI",
      description: "How a Fortune 500 company achieved unprecedented results through AI 2026 implementation.",
      href: "/case-studies/ai-2026-enterprise-transformation-breakthrough",
      category: "Case Study",
      icon: "🏢",
      readTime: "12 min read",
      isNew: true
    },
    {
      title: "AI 2026 Readiness Assessment",
      description: "Evaluate your organization's readiness for next-generation AI systems with our comprehensive tool.",
      href: "/tools/ai-2026-readiness-assessment",
      category: "AI Tool",
      icon: "🎯",
      readTime: "5 min assessment",
      isNew: true
    },
    {
      title: "Revolutionary Breakthroughs Webinar",
      description: "Join our exclusive webinar on AI 2026 breakthroughs and get insights from industry experts.",
      href: "/webinars/ai-2026-revolutionary-breakthroughs",
      category: "Webinar",
      icon: "🔥",
      readTime: "60 min webinar",
      isNew: true
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
<<<<<<< HEAD
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 AI 2026 Content Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our latest AI 2026 content featuring next-generation systems, real-world success stories, 
            assessment tools, and exclusive webinars. Stay ahead of the AI revolution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{content.icon}</div>
                  <div className="flex-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      content.category === 'Blog Post' ? 'bg-blue-100 text-blue-800' :
                      content.category === 'Case Study' ? 'bg-green-100 text-green-800' :
                      content.category === 'AI Tool' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {content.category}
                    </span>
                    {content.isNew && (
                      <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {content.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{content.readTime}</span>
                  <span className="group-hover:text-blue-600 transition-colors">
                    Learn More →
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
<<<<<<< HEAD
        
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-lg"
          >
            🎯 View All AI 2026 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

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