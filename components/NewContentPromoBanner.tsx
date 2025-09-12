import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'service';
  featured: boolean;
}

const NewContentPromoBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced AI Architecture 2025: Building Scalable Enterprise Systems',
      description: 'Comprehensive guide to designing and implementing advanced AI architectures for enterprise-scale applications with microservices and MLOps.',
      href: '/blog/ai-2025-advanced-ai-architecture',
      type: 'blog',
      featured: true
    },
    {
      id: '2',
      title: 'AI Multimodal Revolution 2025: The Future of Human-Computer Interaction',
      description: 'Explore groundbreaking advances in multimodal AI systems that can see, hear, understand, and respond like humans.',
      href: '/blog/ai-2025-multimodal-revolution',
      type: 'blog',
      featured: true
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025: The Next Frontier of AI Computing',
      description: 'Discover how quantum computing is revolutionizing machine learning with exponential speedups and breakthrough capabilities.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      featured: true
    },
    {
      id: '4',
      title: 'AI Enterprise Transformation Success: 300% ROI in 6 Months',
      description: 'Real case study: How a Fortune 500 company achieved 300% ROI through strategic AI implementation, reducing costs by 60%.',
      href: '/case-studies/ai-enterprise-transformation-success-2025',
      type: 'case-study',
      featured: true
    },
    {
      id: '5',
      title: 'AI Automation Services',
      description: 'Transform your business with cutting-edge AI automation solutions. 90% faster processing, 60% cost reduction.',
      href: '/services/ai-automation',
      type: 'service',
      featured: true
    },
    {
      id: '6',
      title: 'AI Healthcare Diagnosis Breakthrough 2025',
      description: 'Revolutionary AI innovations achieving 98.7% accuracy in medical diagnosis, saving lives and reducing costs.',
      href: '/blog/ai-healthcare-diagnosis-breakthrough-2025',
      type: 'blog',
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newContent.length);
    }, 4000); // Faster rotation for better engagement

    return () => clearInterval(interval);
  }, [newContent.length]);

  // Add click tracking for analytics
  const handleContentClick = (content: ContentItem) => {
    // Track content engagement
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'content_click', {
        content_title: content.title,
        content_type: content.type,
        content_id: content.id
      });
    }
  };

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

  const getUrgencyText = (index: number) => {
    const urgencyTexts = [
      '🔥 Trending Now',
      '✨ Just Published',
      '🚀 Must Read',
      '💡 Latest Insights',
      '🎯 Featured Content',
      '⭐ Editor\'s Choice'
    ];
    return urgencyTexts[index % urgencyTexts.length];
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
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{getTypeIcon(currentContent.type)}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {currentContent.type === 'case-study' ? 'Case Study' : 
                     currentContent.type === 'service' ? 'Service' : 'New Article'}
                  </span>
                </div>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  {getUrgencyText(currentIndex)}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 hover:text-indigo-100 transition-colors">
                {currentContent.title}
              </h3>
              <p className="text-lg text-indigo-100 mb-4">
                {currentContent.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link 
                  href={currentContent.href}
                  onClick={() => handleContentClick(currentContent)}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Read More
                </Link>
                <Link 
                  href="/content-showcase"
                  className="text-white hover:text-indigo-200 transition-colors border border-white/30 px-4 py-2 rounded-lg hover:bg-white/10"
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

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((currentIndex + 1) / newContent.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default NewContentPromoBanner;