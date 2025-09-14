'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, DollarSign, Target, Clock, Users, Award, Zap } from 'lucide-react';

const UltimateAITransformationShowcase2025 = () => {
  const content = [
    {
      id: "ai-2025-ultimate-enterprise-transformation-revolution",
      title: "AI 2025: The Ultimate Enterprise Transformation Revolution",
      description: "Complete Guide to 15,000% ROI - Discover how Fortune 500 companies are achieving unprecedented results through revolutionary AI transformation strategies.",
      type: "blog",
      url: "/blog/ai-2025-ultimate-enterprise-transformation-revolution",
      readingTime: "45 min read",
      metrics: {
        roi: "15,000%",
        savings: "$85.2B+",
        efficiency: "4,200%",
        accuracy: "99.99%"
      },
      featured: true,
      tags: ["AI Revolution", "Enterprise Transformation", "15,000% ROI", "Fortune 500"]
    },
    {
      id: "fortune-100-ai-transformation-15000-roi-ultimate-success",
      title: "Fortune 100 AI Transformation: $85.2B Company Achieves 15,000% ROI",
      description: "Ultimate Success Story - Learn how a Fortune 100 manufacturing conglomerate achieved unprecedented 15,000% ROI through comprehensive AI transformation.",
      type: "case-study",
      url: "/case-studies/fortune-100-ai-transformation-15000-roi-ultimate-success",
      readingTime: "25 min read",
      metrics: {
        roi: "15,000%",
        savings: "$12.8B",
        efficiency: "4,500%",
        accuracy: "99.99%"
      },
      featured: true,
      tags: ["Fortune 100", "AI Transformation", "15,000% ROI", "Success Story"]
    },
    {
      id: "ai-2025-ultimate-transformation-implementation-guide",
      title: "AI 2025 Ultimate Transformation Implementation Guide",
      description: "Complete Roadmap to 15,000% ROI - The definitive guide to achieving extraordinary results through comprehensive AI transformation with proven strategies.",
      type: "resource",
      url: "/resources/ai-2025-ultimate-transformation-implementation-guide",
      readingTime: "60 min read",
      metrics: {
        roi: "15,000%",
        success: "99.7%",
        timeline: "18 months",
        savings: "$85.2B+"
      },
      featured: true,
      tags: ["Implementation Guide", "AI Transformation", "15,000% ROI", "Strategy"]
    }
  ];

  const stats = [
    { label: "Average ROI", value: "15,000%", icon: TrendingUp, color: "text-green-500" },
    { label: "Total Savings", value: "$85.2B+", icon: DollarSign, color: "text-blue-500" },
    { label: "Efficiency Gain", value: "4,200%", icon: Zap, color: "text-purple-500" },
    { label: "Success Rate", value: "99.7%", icon: Award, color: "text-yellow-500" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 mr-2" />
            <span className="font-semibold">ULTIMATE AI TRANSFORMATION 2025</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content That Delivers
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              15,000% ROI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the breakthrough strategies, technologies, and implementation frameworks that are driving unprecedented results for Fortune 500 companies worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {content.map((item, index) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-8">
                {/* Content Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    item.type === 'case-study' 
                      ? 'bg-green-100 text-green-800' 
                      : item.type === 'resource'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Implementation Guide' : 'Blog Post'}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readingTime}
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Read {item.type === 'case-study' ? 'Case Study' : item.type === 'resource' ? 'Guide' : 'Article'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Achieve 15,000% ROI Through AI Transformation?
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join the Fortune 500 companies that are already achieving unprecedented results. Get your personalized AI transformation roadmap and start your journey to extraordinary ROI today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-8">Additional Resources</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h5 className="font-semibold text-gray-900 mb-2">AI Strategy Workshop</h5>
              <p className="text-gray-600 text-sm mb-4">Free 2-hour workshop to develop your AI transformation strategy</p>
              <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-800">
                Schedule Workshop →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Target className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h5 className="font-semibold text-gray-900 mb-2">ROI Calculator</h5>
              <p className="text-gray-600 text-sm mb-4">Calculate your potential ROI from AI transformation</p>
              <Link href="/tools/roi-calculator" className="text-green-600 font-semibold hover:text-green-800">
                Calculate ROI →
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Award className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h5 className="font-semibold text-gray-900 mb-2">Success Stories</h5>
              <p className="text-gray-600 text-sm mb-4">Read more Fortune 500 success stories</p>
              <Link href="/case-studies" className="text-purple-600 font-semibold hover:text-purple-800">
                View Stories →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAITransformationShowcase2025;