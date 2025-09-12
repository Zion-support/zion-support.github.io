import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Star, Calendar, BookOpen, FileText, Lightbulb } from 'lucide-react';

const NewContentPromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const newContent = [
    {
      title: 'AI 2025: Revolutionary Trends',
      description: 'Discover the groundbreaking AI trends shaping the future',
      type: 'Blog Post',
      href: '/blog/ai-2025-revolutionary-trends',
      icon: <Lightbulb className="w-6 h-6" />,
      badge: 'Trending',
      badgeColor: 'bg-red-500'
    },
    {
      title: 'Fortune 500 AI Success Story',
      description: '300% ROI and $50M savings through AI transformation',
      type: 'Case Study',
      href: '/case-studies/ai-transformation-fortune-500-success-2025',
      icon: <Star className="w-6 h-6" />,
      badge: 'Featured',
      badgeColor: 'bg-blue-500'
    },
    {
      title: 'AI Implementation Master Guide',
      description: 'Complete guide to implementing AI in your organization',
      type: 'Resource',
      href: '/resources/ai-implementation-master-guide-2026',
      icon: <BookOpen className="w-6 h-6" />,
      badge: 'New',
      badgeColor: 'bg-green-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  if (!isVisible) return null;

  const currentContent = newContent[currentSlide];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4 flex-1">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">New Content Available</span>
            </div>
            
            <div className="flex items-center space-x-4 flex-1">
              <div className="flex items-center space-x-3">
                <div className="text-blue-200">
                  {currentContent.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${currentContent.badgeColor} text-white`}>
                      {currentContent.badge}
                    </span>
                    <span className="text-sm text-blue-200">{currentContent.type}</span>
                  </div>
                  <h3 className="font-semibold text-sm">{currentContent.title}</h3>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <p className="text-sm text-blue-100 max-w-md">{currentContent.description}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href={currentContent.href}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors flex items-center space-x-2"
            >
              <span>Read Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <button
              onClick={() => setIsVisible(false)}
              className="text-blue-200 hover:text-white transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 pb-2">
          {newContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-blue-300'
              }`}
            />
          ))}
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, TrendingUp } from 'lucide-react';

export default function NewContentPromoBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content Just Released
          </h2>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Discover breakthrough insights, real-world case studies, and comprehensive guides 
            that will transform your understanding of AI in 2025.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-semibold mb-2">AI 2025 Breakthroughs</h3>
            <p className="text-blue-100 text-sm mb-4">
              Revolutionary AI innovations reshaping industries and creating unprecedented opportunities.
            </p>
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">🏭</div>
            <h3 className="text-xl font-semibold mb-2">$2.3B Manufacturing Success</h3>
            <p className="text-blue-100 text-sm mb-4">
              How a Fortune 500 company achieved massive cost savings through AI transformation.
            </p>
            <Link 
              href="/case-studies/ai-manufacturing-transformation-2025"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              View Case Study
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="text-xl font-semibold mb-2">200-Page AI Playbook</h3>
            <p className="text-blue-100 text-sm mb-4">
              Complete implementation guide with templates, checklists, and proven strategies.
            </p>
            <Link 
              href="/resources/ai-enterprise-transformation-playbook-2025"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              Get Playbook
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Zap className="w-4 h-4 mr-2" />
              Explore All New Content
            </Link>
            <Link 
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Get Updates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromoBanner;
}
