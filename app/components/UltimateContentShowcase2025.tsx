'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Users, Award, Clock, CheckCircle } from 'lucide-react';

const UltimateContentShowcase2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentItems = [
    {
      id: 'cybersecurity-revolution',
      title: 'AI 2025: The Cybersecurity Revolution',
      type: 'Blog Post',
      description: 'Protecting enterprises with 99.7% threat detection accuracy and 85% reduction in security incidents.',
      metrics: {
        accuracy: '99.7%',
        reduction: '85%',
        savings: '$4.45M',
        uptime: '99.7%'
      },
      url: '/blog/ai-2025-cybersecurity-revolution',
      featured: true,
      new: true
    },
    {
      id: 'healthcare-transformation',
      title: 'Healthcare AI Transformation: 340% ROI Success',
      type: 'Case Study',
      description: 'How a regional hospital system achieved $15M annual savings and 94% patient satisfaction.',
      metrics: {
        roi: '340%',
        savings: '$15.2M',
        satisfaction: '94%',
        accuracy: '89%'
      },
      url: '/case-studies/healthcare-ai-transformation-2025-success',
      featured: true,
      new: true
    },
    {
      id: 'implementation-guide',
      title: 'AI Implementation Master Guide 2025',
      type: 'Resource',
      description: 'The definitive guide to achieving 400% ROI in 12 months with proven AI strategies.',
      metrics: {
        roi: '400%',
        timeframe: '12 months',
        success: '98%',
        projects: '500+'
      },
      url: '/resources/ai-implementation-master-guide-2025',
      featured: true,
      new: true
    }
  ];

  const stats = [
    { label: 'New Content Pieces', value: '12+', icon: Award },
      { label: 'Success Stories', value: '8+', icon: Star },
      { label: 'Average ROI', value: '340%', icon: TrendingUp },
      { label: 'Client Satisfaction', value: '98%', icon: Users }
    ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {/* Main Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">NEW 2025 CONTENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary AI Content That Drives Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover cutting-edge insights, proven strategies, and real-world success stories 
              that are transforming businesses across industries.
            </p>
          </div>

          {/* Content Carousel */}
          <div className="relative mb-16">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {contentItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <div className="md:flex">
                        {/* Content Info */}
                        <div className="md:w-2/3 p-8 md:p-12">
                          <div className="flex items-center mb-4">
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                              {item.type}
                            </span>
                            {item.new && (
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                NEW
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {item.title}
                          </h3>
                          
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Metrics Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {Object.entries(item.metrics).map(([key, value]) => (
                              <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-purple-600 mb-1">
                                  {value}
                                </div>
                                <div className="text-sm text-gray-600 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>

                          <Link
                            href={item.url}
                            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                          >
                            Explore Content
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                        </div>

                        {/* Visual Element */}
                        <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-blue-100 p-8 md:p-12 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                              <Award className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-2">
                              {item.type}
                            </div>
                            <div className="text-gray-600">
                              Premium Content
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Success Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business with AI?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of successful businesses that have already achieved 
                remarkable results with our proven AI strategies and solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UltimateContentShowcase2025;