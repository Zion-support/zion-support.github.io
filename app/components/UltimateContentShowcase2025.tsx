'use client';

import React from 'react';
import Link from 'next/link';
import { Star, Zap, Target, Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const UltimateContentShowcase2025: React.FC = () => {
  const featuredContent = [
    {
      title: "AI 2025 Ultimate Automation Revolution",
      description: "The complete guide to achieving 10,000% ROI through intelligent automation",
      type: "Blog Post",
      category: "AI Innovation",
      readTime: "8 min read",
      link: "/blog/ai-2025-ultimate-automation-revolution",
      icon: Zap,
      featured: true
    },
    {
      title: "Global Enterprise AI Transformation Success",
      description: "How a Fortune 100 company achieved $15B ROI in 12 months",
      type: "Case Study",
      category: "Success Stories",
      readTime: "12 min read",
      link: "/case-studies/global-enterprise-ai-transformation-2025-ultimate-success",
      icon: Award,
      featured: true
    },
    {
      title: "AI 2025 Implementation Master Guide",
      description: "The complete blueprint for AI transformation success",
      type: "Resource Guide",
      category: "Implementation",
      readTime: "15 min read",
      link: "/resources/ai-2025-implementation-guide",
      icon: BookOpen,
      featured: false
    }
  ];

  const stats = [
    { label: "Content Pieces", value: "500+", icon: BookOpen },
    { label: "Success Stories", value: "200+", icon: Users },
    { label: "Average ROI", value: "10,000%", icon: TrendingUp },
    { label: "Expert Rating", value: "5.0★", icon: Star }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-yellow-500 mr-2" />
            <span className="text-lg font-semibold text-purple-600 uppercase tracking-wide">
              Ultimate Content Showcase 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Now Available
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest breakthroughs in AI automation, quantum computing, and neural consciousness. 
            Access exclusive content that's transforming businesses worldwide.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Content
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  content.featured ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {content.featured && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-center font-bold">
                    ⭐ FEATURED
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <content.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <div>
                      <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {content.type}
                      </span>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full ml-2">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                    
                    <Link
                      href={content.link}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                    >
                      Read More
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies achieving 10,000% ROI through AI transformation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/resources/ai-2025-implementation-guide"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Get Implementation Guide
              </Link>
              
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <Users className="mr-2 h-5 w-5" />
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2025;