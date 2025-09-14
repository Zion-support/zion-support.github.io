'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Users, DollarSign, Clock, Star, ArrowRight, CheckCircle } from 'lucide-react';

interface SuccessMetric {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  trend?: string;
}

interface ContentShowcase {
  id: string;
  title: string;
  type: string;
  url: string;
  excerpt: string;
  metrics: {
    roi: string;
    impact: string;
    timeline: string;
  };
  featured: boolean;
}

const AI2026SuccessShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const successMetrics: SuccessMetric[] = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '400%',
      label: 'Average ROI',
      description: 'Within 90 days of AI implementation',
      trend: '+25% vs 2025'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: '$5.2B',
      label: 'Revenue Impact',
      description: 'Fortune 500 transformation success',
      trend: '+180% vs 2025'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '500+',
      label: 'Enterprises Transformed',
      description: 'Successful AI implementations',
      trend: '+150% vs 2025'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: '90 Days',
      label: 'Time to Value',
      description: 'From implementation to ROI',
      trend: '-60% vs 2025'
    }
  ];

  const contentShowcase: ContentShowcase[] = [
    {
      id: 'enterprise-automation-breakthrough',
      title: 'AI 2026: Enterprise Automation Breakthrough',
      type: 'Blog Post',
      url: '/blog/ai-2026-enterprise-automation-breakthrough',
      excerpt: 'Discover how Fortune 500 companies are achieving unprecedented 400% ROI through next-generation AI automation systems.',
      metrics: {
        roi: '400%',
        impact: '90 Days',
        timeline: '2026'
      },
      featured: true
    },
    {
      id: 'fortune-500-transformation',
      title: 'Fortune 500 AI Transformation Success',
      type: 'Case Study',
      url: '/case-studies/fortune-500-ai-transformation-2026-success',
      excerpt: 'How a Fortune 500 manufacturing company achieved $5.2B in additional revenue through comprehensive AI transformation.',
      metrics: {
        roi: '450%',
        impact: '18 Months',
        timeline: '2026'
      },
      featured: true
    },
    {
      id: 'implementation-master-guide',
      title: 'AI Implementation Master Guide 2026',
      type: 'Resource',
      url: '/resources/ai-implementation-master-guide-2026',
      excerpt: 'The definitive guide to implementing AI in your organization. Step-by-step roadmap to achieve 400% ROI within 90 days.',
      metrics: {
        roi: '400%',
        impact: '90 Days',
        timeline: '2026'
      },
      featured: true
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group's AI implementation delivered 450% ROI in just 18 months. The transformation has been nothing short of revolutionary.",
      author: "Sarah Chen",
      title: "CTO, Global Manufacturing Corp",
      company: "Fortune 500"
    },
    {
      quote: "The AI automation system reduced our operational costs by 60% while improving customer satisfaction by 90%. Incredible results.",
      author: "Michael Rodriguez",
      title: "VP Operations, Tech Solutions Inc",
      company: "Enterprise Client"
    },
    {
      quote: "We achieved $5.2B in additional revenue through AI transformation. The implementation was flawless and the results exceeded expectations.",
      author: "Jennifer Walsh",
      title: "CEO, Industrial Solutions Group",
      company: "Fortune 500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate testimonials every 6 seconds
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            AI 2026 SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Results: 400% ROI in 90 Days
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 500+ enterprises that have transformed their operations with our AI solutions. 
            Real results, real impact, real success.
          </p>
        </div>

        {/* Success Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                  {metric.icon}
                </div>
                {metric.trend && (
                  <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {metric.trend}
                  </span>
                )}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-600">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Content Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Latest AI 2026 Content & Case Studies
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contentShowcase.map((content, index) => (
              <div
                key={content.id}
                className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {content.type}
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full animate-pulse">
                      NEW 2026
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {content.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {content.excerpt}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center p-2 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">
                        {content.metrics.roi}
                      </div>
                      <div className="text-xs text-green-700">ROI</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">
                        {content.metrics.impact}
                      </div>
                      <div className="text-xs text-blue-700">Timeline</div>
                    </div>
                    <div className="text-center p-2 bg-purple-50 rounded-lg">
                      <div className="text-lg font-bold text-purple-600">
                        {content.metrics.timeline}
                      </div>
                      <div className="text-xs text-purple-700">Year</div>
                    </div>
                  </div>

                  <Link
                    href={content.url}
                    className="inline-flex items-center space-x-2 w-full justify-center bg-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-6xl text-purple-100 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-sm text-purple-600 font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Achieve 400% ROI with AI?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join 500+ enterprises that have transformed their operations. 
              Start your AI journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026SuccessShowcase;