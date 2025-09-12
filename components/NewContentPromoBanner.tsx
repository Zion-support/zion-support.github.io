import React, { useState, useEffect } from 'react';
import Link from 'next/link';

<<<<<<< HEAD
interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service';
  featured: boolean;
=======
interface NewContentPromoBannerProps {
  variant?: 'featured' | 'default' | 'minimal';
  maxItems?: number;
  className?: string;
>>>>>>> 5fabaa3cc47e5546458c55a46baa6ab5d50bae79
}

const NewContentPromoBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

<<<<<<< HEAD
  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI Enterprise Automation Revolution 2025',
      description: 'Discover how AI is transforming enterprise operations with 300% ROI and unprecedented efficiency gains.',
      href: '/blog/ai-2025-enterprise-automation-revolution',
      type: 'blog',
      featured: true
    },
    {
      id: '2',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      featured: true
    },
    {
      id: '3',
      title: 'AI Financial Services Transformation Success',
      description: 'Complete case study: How a major bank achieved 300% ROI through strategic AI implementation.',
      href: '/case-studies/ai-financial-services-transformation-2025',
      type: 'case-study',
      featured: true
    },
    {
      id: '4',
      title: 'AI Automation Services',
      description: 'Transform your business with cutting-edge AI automation solutions. 90% faster processing, 60% cost reduction.',
      href: '/services/ai-automation',
      type: 'service',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [newContent.length]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'case-study':
        return '📊';
      case 'service':
        return '🚀';
      default:
        return '✨';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'from-blue-500 to-cyan-500';
      case 'case-study':
        return 'from-green-500 to-emerald-500';
      case 'service':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  if (!isVisible) return null;

  const currentContent = newContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            {/* Content */}
            <div className="flex-1 pr-8">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">{getTypeIcon(currentContent.type)}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  {currentContent.type === 'case-study' ? 'Case Study' : 
                   currentContent.type === 'service' ? 'Service' : 'New Article'}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {currentContent.title}
              </h3>
              <p className="text-lg text-indigo-100 mb-4">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href={currentContent.href}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                >
                  Read More
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors"
                >
                  View All Content →
                </Link>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-col space-y-2">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          </div>
=======
export default function NewContentPromoBanner({ 
  variant = 'default', 
  maxItems = 4,
  className = ''
}: NewContentPromoBannerProps) {
  const featuredContent = newContent.filter(item => item.featured).slice(0, maxItems);
  const displayContent = variant === 'featured' ? featuredContent : newContent.slice(0, maxItems);

  if (variant === 'minimal') {
    return (
      <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">🔥 Fresh Content Just Dropped</h3>
          <p className="text-gray-600 text-sm mb-4">
            New AI guides, case studies, and resources to accelerate your success in 2025.
          </p>
          <Link
            href="/content-showcase"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Explore All Content
            <span>→</span>
          </Link>
>>>>>>> 5fabaa3cc47e5546458c55a46baa6ab5d50bae79
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/75 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

<<<<<<< HEAD
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((currentIndex + 1) / newContent.length) * 100}%` }}
        />
=======
  return (
    <section className={`py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 MEGA CONTENT DROP - JANUARY 2025</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            🚀 25+ New AI Resources Just Released!
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover our biggest content update yet: Advanced AI Automation, Cybersecurity Defense, 
            Manufacturing Success Stories, and comprehensive implementation guides. Everything you need 
            to succeed with AI in 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className="bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              🎯 Explore All New Content
            </Link>
            <Link
              href="/resources/ai-implementation-master-guide-2026"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-lg"
            >
              📚 Download Master Guide
            </Link>
          </div>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.badge === 'NEW' ? 'bg-green-500 text-white' :
                    item.badge === 'FREE' ? 'bg-blue-500 text-white' :
                    item.badge === 'SUCCESS' ? 'bg-yellow-500 text-white' :
                    item.badge === 'TRENDING' ? 'bg-red-500 text-white' :
                    'bg-gray-500 text-white'
                  }`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm opacity-90 mb-3 line-clamp-2">{item.description}</p>
                <div className="flex items-center justify-between text-xs opacity-75">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Quick Links */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              📚 All Articles
            </Link>
            <Link
              href="/case-studies"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              📊 Case Studies
            </Link>
            <Link
              href="/resources"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              📋 Free Resources
            </Link>
            <Link
              href="/webinars"
              className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-30 transition-colors"
            >
              🎥 Webinars
            </Link>
          </div>
        </div>
>>>>>>> 5fabaa3cc47e5546458c55a46baa6ab5d50bae79
      </div>
    </div>
  );
};

export default NewContentPromoBanner;