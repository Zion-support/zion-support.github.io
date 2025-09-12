import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Zap, CheckCircle, Clock, Target } from 'lucide-react';

export default function AI2025RevolutionaryContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthrough Announcement",
      description: "Discover the most revolutionary AI breakthrough of 2025 that is transforming industries worldwide.",
      href: "/blog/ai-2025-revolutionary-breakthrough-announcement",
      type: "Blog Post",
      category: "Breakthrough",
      readTime: "8 min read",
      featured: true,
      stats: { roi: "2000%", accuracy: "99.7%" }
    },
    {
      title: "Revolutionary Breakthrough Success Stories",
      description: "Real results from our AI 2025 breakthrough. See how enterprises achieved 2000%+ ROI.",
      href: "/case-studies/ai-2025-revolutionary-breakthrough-success",
      type: "Case Study",
      category: "Success Story",
      readTime: "12 min read",
      featured: true,
      stats: { clients: "500+", savings: "$200M+" }
    },
    {
      title: "Revolutionary Implementation Guide",
      description: "Complete step-by-step guide to implementing our revolutionary AI breakthrough.",
      href: "/resources/ai-2025-revolutionary-implementation-guide",
      type: "Resource",
      category: "Implementation",
      readTime: "15 min read",
      featured: true,
      stats: { timeline: "8 weeks", success: "99%" }
    }
  ];

  const additionalContent = [
    {
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "Complete analysis of AI trends and predictions for 2025.",
      href: "/blog/ai-2025-comprehensive-trends-analysis",
      type: "Blog Post",
      category: "Analysis"
    },
    {
      title: "Global Enterprise Transformation",
      description: "How global enterprises achieved breakthrough results with AI.",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      category: "Transformation"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete toolkit for implementing AI solutions in your organization.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      category: "Toolkit"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive collection of AI breakthrough content, 
            featuring real success stories, implementation guides, and proven strategies.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      content.category === 'Breakthrough' ? 'bg-red-100 text-red-800' :
                      content.category === 'Success Story' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {content.category}
                    </span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                </div>

                {/* Stats */}
                <div className="p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(content.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  <Link 
                    href={content.href}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    Read {content.type}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content, index) => (
              <Link 
                key={index}
                href={content.href}
                className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-blue-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    content.type === 'Blog Post' ? 'bg-blue-100 text-blue-800' :
                    content.type === 'Case Study' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {content.type}
                  </span>
                  <span className="text-xs text-gray-500">{content.category}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {content.title}
                </h4>
                <p className="text-gray-600 text-sm">{content.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Content Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">2000%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$500M+</div>
              <div className="text-gray-300">Total Savings</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already benefiting from our revolutionary AI breakthrough content and implementation guides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthrough"
              className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}