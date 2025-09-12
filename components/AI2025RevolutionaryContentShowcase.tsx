import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Award, BookOpen, TrendingUp, Users, Clock, Star } from 'lucide-react';

export default function AI2025RevolutionaryContentShowcase() {
  const featuredContent = [
    {
      title: "AI 2025 Revolutionary Breakthrough Announcement",
      description: "Discover the most significant AI breakthrough of 2025 that is transforming industries worldwide with unprecedented results.",
      href: "/blog/ai-2025-revolutionary-breakthrough-announcement",
      type: "Blog Post",
      icon: Zap,
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500",
      stats: "2000%+ ROI",
      readTime: "8 min read"
    },
    {
      title: "Revolutionary Breakthrough Success Stories",
      description: "Real case studies showing how enterprises achieved 2000%+ ROI and transformed their operations with our AI breakthrough.",
      href: "/case-studies/ai-2025-revolutionary-breakthrough-success",
      type: "Case Study",
      icon: Award,
      badge: "SUCCESS STORY",
      badgeColor: "from-green-500 to-emerald-500",
      stats: "500+ Clients",
      readTime: "12 min read"
    },
    {
      title: "Revolutionary Implementation Guide",
      description: "Complete step-by-step guide to implementing our AI breakthrough and achieving unprecedented results in your organization.",
      href: "/resources/ai-2025-revolutionary-implementation-guide",
      type: "Resource",
      icon: BookOpen,
      badge: "IMPLEMENTATION",
      badgeColor: "from-blue-500 to-purple-500",
      stats: "4-12 Weeks",
      readTime: "15 min read"
    }
  ];

  const additionalContent = [
    {
      title: "AI 2025 Comprehensive Trends Analysis",
      description: "Deep dive into AI trends and predictions for 2025",
      href: "/blog/ai-2025-comprehensive-trends-analysis",
      type: "Blog Post",
      stats: "NEW"
    },
    {
      title: "Global Enterprise Transformation Success",
      description: "How Fortune 500 companies achieved breakthrough results",
      href: "/case-studies/ai-2025-global-enterprise-transformation-breakthrough",
      type: "Case Study",
      stats: "1200% ROI"
    },
    {
      title: "Ultimate Implementation Toolkit",
      description: "Complete toolkit for AI implementation success",
      href: "/resources/ai-2025-ultimate-implementation-toolkit",
      type: "Resource",
      stats: "ESSENTIAL"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            REVOLUTIONARY BREAKTHROUGH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most significant AI breakthrough of 2025. Explore our comprehensive 
            content library featuring real success stories, implementation guides, and industry insights.
          </p>
        </div>

        {/* Featured Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((item, index) => (
            <div key={index} className="group">
              <Link href={item.href} className="block">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-500">{item.type}</span>
                      </div>
                      <div className={`inline-flex items-center gap-1 bg-gradient-to-r ${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                        <Star className="w-3 h-3" />
                        {item.badge}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {item.stats}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalContent.map((item, index) => (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-200 hover:border-blue-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-500">{item.type}</span>
                    <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {item.stats}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of enterprises already benefiting from our revolutionary AI breakthrough.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Get Started Today
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthrough"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">2000%+</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">99.7%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">10x</div>
            <div className="text-gray-600">Faster Processing</div>
          </div>
        </div>
      </div>
    </div>
  );
}