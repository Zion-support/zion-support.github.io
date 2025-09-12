import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Star, TrendingUp, Users, Award, CheckCircle, BookOpen } from 'lucide-react';

export default function AI2025RevolutionaryContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthrough Announcement",
      description: "Discover the most revolutionary AI breakthrough of 2025 that is transforming industries worldwide.",
      href: "/blog/ai-2025-revolutionary-breakthrough-announcement",
      type: "Blog Post",
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500",
      icon: Zap,
      stats: "2000%+ ROI"
    },
    {
      title: "Revolutionary Breakthrough Success Stories",
      description: "Real results from our AI 2025 breakthrough. See how enterprises achieved unprecedented success.",
      href: "/case-studies/ai-2025-revolutionary-breakthrough-success",
      type: "Case Study",
      badge: "SUCCESS",
      badgeColor: "from-green-500 to-emerald-500",
      icon: Award,
      stats: "500+ Clients"
    },
    {
      title: "Revolutionary Implementation Guide",
      description: "Complete step-by-step guide to implement our revolutionary AI breakthrough and achieve results.",
      href: "/resources/ai-2025-revolutionary-implementation-guide",
      type: "Resource",
      badge: "GUIDE",
      badgeColor: "from-blue-500 to-purple-500",
      icon: BookOpen,
      stats: "Step-by-Step"
    }
  ];

  const additionalContent = [
    {
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "In-depth analysis of AI trends and predictions for 2025.",
      href: "/blog/ai-2025-comprehensive-trends-analysis",
      type: "Blog Post",
      stats: "Trending"
    },
    {
      title: "Fortune 500 Transformation Success",
      description: "How Fortune 500 companies achieved 1500% ROI with AI.",
      href: "/case-studies/ai-2025-fortune-500-transformation-breakthrough",
      type: "Case Study",
      stats: "1500% ROI"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete toolkit for implementing AI solutions in your organization.",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      stats: "Complete"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            REVOLUTIONARY CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI 2025 Revolutionary Breakthrough Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most revolutionary AI breakthrough content. Learn how to achieve 
            unprecedented results with our cutting-edge technology.
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Content</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.badgeColor} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.badgeColor} text-white`}>
                        {item.badge}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{item.type}</div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-green-600">
                      {item.stats}
                    </div>
                    <Link 
                      href={item.href}
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <Link 
                key={index}
                href={item.href}
                className="block bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600">{item.type}</span>
                  <span className="text-sm font-semibold text-green-600">{item.stats}</span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Revolutionary Impact</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2000%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">99.7%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises already benefiting from our revolutionary AI breakthrough.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center gap-2 text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthrough"
              className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 text-lg"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}