import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  isNew: boolean;
  featured: boolean;
}

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'resource' | 'case-study';
  url: string;
  readTime: string;
  category: string;
  featured: boolean;
  publishDate: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI Agents 2025: The Next Generation of Autonomous Intelligence',
    description: 'Discover how advanced AI agents are revolutionizing business operations with autonomous decision-making, multi-modal capabilities, and enterprise-grade reliability.',
    type: 'blog',
    url: '/blog/ai-2025-advanced-ai-agents',
    readTime: '12 min',
    category: 'AI Agents',
    featured: true,
    publishDate: '2025-01-20'
  },
  {
    id: '2',
    title: 'AI Smart Manufacturing Revolution 2025: Industry 4.0 Transformation',
    description: 'Discover how AI is revolutionizing manufacturing with predictive maintenance, quality control, and autonomous production systems achieving 40-60% efficiency gains.',
    type: 'blog',
    url: '/blog/ai-2025-smart-manufacturing-revolution',
    readTime: '15 min',
    category: 'Smart Manufacturing',
    featured: true,
    publishDate: '2025-01-18'
  },
  {
    id: '3',
    title: 'Fortune 500 Financial Services AI Transformation: 450% ROI Success Story',
    description: 'Discover how a major financial services company achieved 450% ROI through comprehensive AI transformation, including fraud detection, customer service automation, and risk management.',
    type: 'case-study',
    url: '/case-studies/ai-2025-financial-services-ai-transformation-success',
    readTime: '20 min',
    category: 'Financial Services',
    featured: true,
    publishDate: '2025-01-16'
  },
  {
    id: '4',
    title: 'AI Implementation Master Checklist 2025: Complete Enterprise Guide',
    description: 'Comprehensive checklist for successful AI implementation in enterprise environments. Step-by-step guide covering strategy, technology, deployment, and optimization.',
    type: 'resource',
    url: '/resources/ai-2025-implementation-master-checklist',
    readTime: '30 min',
    category: 'Implementation',
    featured: true,
    publishDate: '2025-01-15'
  },
  {
    id: '5',
    title: 'AI Advanced Automation 2025: Complete Business Transformation Guide',
    description: 'Discover how advanced AI automation is revolutionizing businesses with real-world case studies and implementation strategies.',
    type: 'blog',
    url: '/blog/ai-2025-advanced-automation',
    readTime: '15 min',
    category: 'AI & Automation',
    featured: true,
    publishDate: '2025-01-15'
  },
  {
    id: '6',
    title: 'Multimodal AI Revolution: Beyond Text and Images',
    description: 'Learn how multimodal AI is creating new possibilities by combining text, images, audio, and video processing.',
    type: 'blog',
    url: '/blog/ai-2025-multimodal-revolution',
    readTime: '12 min',
    category: 'AI Innovation',
    featured: false,
    publishDate: '2025-01-12'
  },
  {
    id: '7',
    title: 'Enterprise AI Security: Advanced Threat Protection',
    description: 'Comprehensive guide to securing AI systems in enterprise environments with advanced threat detection and prevention.',
    type: 'resource',
    url: '/resources/ai-enterprise-security-2025',
    readTime: '30 min',
    category: 'Security',
    featured: false,
    publishDate: '2025-01-11'
  }
];

const EnhancedContentPromotionBanner: React.FC = () => {

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog': return '📝';
    case 'resource': return '📚';
    case 'case-study': return '📊';
    default: return '📄';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog': return 'from-blue-500 to-blue-600';
    case 'resource': return 'from-green-500 to-green-600';
    case 'case-study': return 'from-purple-500 to-purple-600';
    default: return 'from-gray-500 to-gray-600';
  }
};

export default function EnhancedContentPromotionBanner() {
>>>>>>> cursor/create-and-deploy-new-content-2248
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: 'enterprise-ai-transformation',
      title: 'Enterprise AI Transformation 2025',
      description: 'Complete implementation guide with real-world case studies and proven strategies for enterprise AI adoption.',
      href: '/blog/ai-2025-enterprise-ai-transformation',
      category: 'Enterprise AI',
      readTime: '12 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'healthcare-diagnosis-revolution',
      title: 'AI Healthcare Diagnosis Revolution',
      description: 'Discover how AI is transforming medical diagnosis with 67% reduction in errors and 40-60% accuracy improvements.',
      href: '/blog/ai-healthcare-diagnosis-revolution-2025',
      category: 'Healthcare AI',
      readTime: '15 min read',
      isNew: true,
      featured: true
    },
    {
      id: 'ai-automation-guide',
      title: 'AI Automation Enterprise Guide',
      description: 'Master enterprise AI automation with comprehensive strategies, tools, and implementation frameworks.',
      href: '/resources/ai-automation-enterprise-guide-2025',
      category: 'Automation',
      readTime: 'Guide',
      isNew: true,
      featured: true
    },
    {
      id: 'multimodal-ai-revolution',
      title: 'Multimodal AI Revolution 2025',
      description: 'Explore the future of AI with multimodal systems that process text, images, audio, and video simultaneously.',
      href: '/blog/ai-2025-multimodal-revolution',
      category: 'AI Innovation',
      readTime: '10 min read',
      isNew: false,
      featured: true
    },
    {
      id: 'robotics-automation',
      title: 'Advanced Robotics & AI Integration',
      description: 'The future of manufacturing with intelligent robotic systems and autonomous operations.',
      href: '/blog/ai-2025-advanced-robotics',
      category: 'Robotics',
      readTime: '8 min read',
      isNew: false,
      featured: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const currentItem = contentItems[currentIndex];

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - Main content */}
          <div className="flex-1 pr-4">
            <div className="flex items-center mb-3">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mr-4">
                <span className="text-sm font-medium">🚀 NEW CONTENT</span>
              </div>
              <div className="flex space-x-1">
                {contentItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="min-h-[80px]">
              <h2 className="text-xl md:text-2xl font-bold mb-2 transition-all duration-500">
                {currentItem.title}
              </h2>
              <p className="text-sm md:text-base opacity-90 mb-3 max-w-2xl">
                {currentItem.description}
              </p>
              <div className="flex items-center space-x-4 text-sm opacity-75">
                <span className="bg-white/20 px-2 py-1 rounded">{currentItem.category}</span>
                <span>{currentItem.readTime}</span>
                {currentItem.isNew && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    NEW
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={currentItem.href}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center whitespace-nowrap"
            >
              Read Now
            </Link>
            <Link
              href="/content-showcase"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 text-center whitespace-nowrap"
            >
              View All
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
        <div 
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{ width: `${((currentIndex + 1) / contentItems.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner;