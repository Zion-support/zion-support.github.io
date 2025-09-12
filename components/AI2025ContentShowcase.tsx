import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Star, TrendingUp, Brain, Target, BookOpen, BarChart3 } from 'lucide-react';

export default function AI2025ContentShowcase() {
  const featuredContent = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Trends: The Ultimate Breakthrough Guide",
      description: "Discover the revolutionary AI trends that will transform industries in 2025. Expert insights on breakthrough technologies, implementation strategies, and real-world applications.",
      type: "Blog Post",
      category: "Trends & Predictions",
      readTime: "15 min read",
      author: "Zion Tech Group",
      date: "January 17, 2025",
      href: "/blog/ai-2025-revolutionary-trends-breakthrough",
      featured: true,
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "AI 2025 Financial Services Revolution: 2500% ROI Success Story",
      description: "Discover how a leading financial institution achieved unprecedented 2500% ROI through revolutionary AI implementation. Complete case study with strategies, metrics, and actionable insights.",
      type: "Case Study",
      category: "Success Stories",
      readTime: "12 min read",
      author: "Zion Tech Group",
      date: "January 17, 2025",
      href: "/case-studies/ai-2025-financial-services-revolution",
      featured: true,
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "AI 2025 Ultimate Implementation Master Guide - Complete Toolkit",
      description: "The most comprehensive AI implementation guide for 2025. Includes templates, checklists, best practices, and step-by-step strategies for successful AI transformation.",
      type: "Resource Guide",
      category: "Implementation",
      readTime: "25 min read",
      author: "Zion Tech Group",
      date: "January 17, 2025",
      href: "/resources/ai-2025-ultimate-implementation-master-guide",
      featured: true,
      icon: Target,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200"
    }
  ];

  const additionalContent = [
    {
      id: 4,
      title: "AI 2025 Manufacturing Revolution: 800% Efficiency Gains",
      description: "Learn how AI transformed manufacturing operations with unprecedented efficiency improvements and cost reductions.",
      type: "Case Study",
      category: "Manufacturing",
      readTime: "10 min read",
      href: "/case-studies/ai-2025-manufacturing-revolution",
      icon: BarChart3,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "AI 2025 Healthcare Breakthrough: Patient Care Transformation",
      description: "Discover how AI is revolutionizing healthcare with improved patient outcomes and operational efficiency.",
      type: "Case Study",
      category: "Healthcare",
      readTime: "14 min read",
      href: "/case-studies/ai-2025-healthcare-breakthrough",
      icon: BookOpen,
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 6,
      title: "AI 2025 Retail Innovation: Customer Experience Revolution",
      description: "Explore how AI is transforming retail with personalized experiences and operational excellence.",
      type: "Case Study",
      category: "Retail",
      readTime: "11 min read",
      href: "/case-studies/ai-2025-retail-innovation",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
              FEATURED CONTENT
            </span>
            <Star className="w-6 h-6 text-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI 2025 Revolutionary Content
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Now Available
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover breakthrough content that's transforming how organizations implement and leverage AI. 
            Get expert insights, proven strategies, and real-world success stories.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content) => {
            const IconComponent = content.icon;
            return (
              <div 
                key={content.id}
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${content.borderColor} hover:scale-105`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${content.color} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.color} text-white`}>
                        {content.type}
                      </span>
                      {content.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{content.category}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {content.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{content.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{content.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{content.author}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link 
                  href={content.href}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${content.color} hover:shadow-lg transition-all duration-300`}
                >
                  {content.type === "Resource Guide" ? "Download Guide" : content.type === "Case Study" ? "View Case Study" : "Read Article"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Additional Content */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Revolutionary Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalContent.map((content) => {
              const IconComponent = content.icon;
              return (
                <Link 
                  key={content.id}
                  href={content.href}
                  className="block bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gray-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${content.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${content.color} text-white`}>
                        {content.type}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{content.category}</p>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {content.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {content.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{content.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Content Impact Metrics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Implementation Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Downloads</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              View All Content
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}