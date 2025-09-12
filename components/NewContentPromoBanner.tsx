<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

interface NewContentPromoBannerProps {
  variant?: 'featured' | 'default' | 'minimal';
  maxItems?: number;
  className?: string;
}

const newContent = [
  {
    title: "AI Advanced Automation 2025: Complete Implementation Guide",
    description: "Master advanced AI automation with comprehensive strategies, best practices, and real-world case studies for enterprise success.",
    href: "/blog/ai-2025-advanced-automation",
    icon: "🤖",
    category: "AI Automation",
    readTime: "25 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true
  },
  {
    title: "AI Cybersecurity Threats 2025: Complete Defense Guide",
    description: "Protect your organization from emerging AI cybersecurity threats with advanced defense strategies and security best practices.",
    href: "/blog/ai-2025-cybersecurity-threats",
    icon: "🛡️",
    category: "Cybersecurity",
    readTime: "22 min read",
    date: "Jan 30, 2025",
    badge: "NEW",
    featured: true
  },
  {
    title: "$200M Manufacturing Success: Autonomous AI Systems Case Study",
    description: "How a Fortune 500 manufacturing company achieved $200M savings, 60% faster processing, and 99.7% uptime with autonomous AI.",
    href: "/case-studies/ai-autonomous-manufacturing-success-2025",
    icon: "💰",
    category: "Case Study",
    readTime: "18 min read",
    date: "Jan 28, 2025",
    badge: "SUCCESS",
    featured: true
  },
  {
    title: "AI Implementation Checklist 2025: 150+ Actionable Items",
    description: "Complete checklist covering every aspect of AI implementation with 150+ actionable items across 7 key categories.",
    href: "/resources/ai-implementation-checklist-2025",
    icon: "📋",
    category: "Free Resource",
    readTime: "35 min read",
    date: "Feb 8, 2025",
    badge: "FREE",
    featured: true
  },
  {
    title: "AI Breakthrough Innovations 2025: Revolutionary Technologies",
    description: "Discover the most groundbreaking AI innovations reshaping industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-breakthrough-innovations",
    icon: "🚀",
    category: "AI Innovations",
    readTime: "25 min read",
    date: "Jan 28, 2025",
    badge: "TRENDING",
    featured: false
  },
  {
    title: "AI Sustainability & Green Tech 2025: Building Eco-Friendly Systems",
    description: "Learn how AI is driving sustainability initiatives and reducing carbon footprints across industries.",
    href: "/blog/ai-sustainability-green-tech-2025",
    icon: "🌱",
    category: "Sustainability",
    readTime: "20 min read",
    date: "Jan 28, 2025",
    badge: "NEW",
    featured: false
  }
];

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
        </div>
      </div>
    );
  }

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
=======
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'webinar' | 'whitepaper';
  featured: boolean;
  readTime: string;
  date: string;
  category: string;
}

interface NewContentPromoBannerProps {
  variant?: 'default' | 'featured' | 'minimal';
  maxItems?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const NewContentPromoBanner: React.FC<NewContentPromoBannerProps> = ({
  variant = 'default',
  maxItems = 4,
  autoRotate = true,
  rotationInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'Advanced RAG Systems 2025: Production Guide',
      description: 'Master production-ready RAG systems with advanced patterns, optimization techniques, and real-world implementations.',
      href: '/blog/ai-2025-advanced-rag-systems',
      type: 'blog',
      featured: true,
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      category: 'Advanced AI'
    },
    {
      id: '2',
      title: 'AI Multimodal Revolution 2025',
      description: 'Explore how vision, voice, and text integration is revolutionizing human-computer interaction and AI applications.',
      href: '/blog/ai-2025-multimodal-revolution',
      type: 'blog',
      featured: true,
      readTime: '28 min read',
      date: 'Jan 28, 2025',
      category: 'Multimodal AI'
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025',
      description: 'Discover quantum computing breakthroughs in machine learning, enabling exponential speedups for complex problems.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
      featured: true,
      readTime: '32 min read',
      date: 'Jan 28, 2025',
      category: 'Quantum AI'
    },
    {
      id: '4',
      title: 'AI Autonomous Manufacturing: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M savings and 300% productivity gains.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
      featured: true,
      readTime: '15 min read',
      date: 'Jan 28, 2025',
      category: 'Case Study'
    },
    {
      id: '5',
      title: 'Building Scalable AI Infrastructure',
      description: 'Learn how to design and implement AI infrastructure that scales with your business needs.',
      href: '/blog/scalable-ai-infrastructure',
      type: 'blog',
      featured: false,
      readTime: '20 min read',
      date: 'Jan 25, 2025',
      category: 'AI Infrastructure'
    },
    {
      id: '6',
      title: 'Enterprise AI Security Best Practices',
      description: 'Comprehensive guide to securing AI systems in enterprise environments.',
      href: '/blog/enterprise-ai-security',
      type: 'blog',
      featured: false,
      readTime: '18 min read',
      date: 'Jan 22, 2025',
      category: 'AI Security'
    },
    {
      id: '7',
      title: 'AI Customer Service: 90% Satisfaction',
      description: 'How an e-commerce company achieved 90% customer satisfaction with AI-powered service.',
      href: '/case-studies/ai-customer-service-transformation',
      type: 'case-study',
      featured: false,
      readTime: '12 min read',
      date: 'Jan 20, 2025',
      category: 'Case Study'
    },
    {
      id: '8',
      title: 'AI in Healthcare: Trends and Opportunities',
      description: 'Explore the latest trends in AI healthcare applications and personalized medicine.',
      href: '/blog/ai-healthcare-trends-2025',
      type: 'blog',
      featured: false,
      readTime: '22 min read',
      date: 'Jan 18, 2025',
      category: 'AI Healthcare'
    }
  ];

  const displayedContent = variant === 'featured' 
    ? newContent.filter(item => item.featured).slice(0, maxItems)
    : newContent.slice(0, maxItems);

  useEffect(() => {
    if (autoRotate && !isHovered && displayedContent.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === displayedContent.length - 1 ? 0 : prevIndex + 1
        );
      }, rotationInterval);

      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovered, displayedContent.length, rotationInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === displayedContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayedContent.length - 1 : prevIndex - 1
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'webinar': return '🎥';
      case 'whitepaper': return '📄';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'webinar': return 'bg-purple-100 text-purple-800';
      case 'whitepaper': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (variant === 'minimal') {
    return (
      <section className="py-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Latest Content</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {displayedContent.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 hover:bg-white/30 transition-colors"
                >
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (displayedContent.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {variant === 'featured' ? 'Featured Content' : 'Latest Content'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {variant === 'featured' 
              ? 'Discover our most popular and impactful content, handpicked by our experts.'
              : 'Stay ahead with our latest insights, case studies, and technical guides.'
            }
          </p>
        </div>

        <div className="relative">
          {/* Main Content Display */}
          <div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-96">
              {displayedContent.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                    <div className="h-full flex items-center">
                      <div className="w-1/2 p-12">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">{getTypeIcon(item.type)}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                            {item.type.replace('-', ' ').toUpperCase()}
                          </span>
                          {item.featured && (
                            <span className="ml-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                              FEATURED
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-4 line-clamp-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-indigo-100 mb-6 line-clamp-3">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-indigo-200 mb-6">
                          <div className="flex items-center">
                            <ClockIcon className="h-4 w-4 mr-2" />
                            {item.readTime}
                          </div>
                          <div className="flex items-center">
                            <TagIcon className="h-4 w-4 mr-2" />
                            {item.category}
                          </div>
                          <div>{item.date}</div>
                        </div>
                        
                        <Link
                          href={item.href}
                          className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                        >
                          Read More
                          <ChevronRightIcon className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                      
                      <div className="w-1/2 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                        <div className="text-8xl opacity-20">
                          {getTypeIcon(item.type)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            {displayedContent.length > 1 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-6">
                <div className="flex justify-between">
                  <button
                    onClick={prevSlide}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Dots Indicator */}
            {displayedContent.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {displayedContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content Grid */}
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedContent.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {item.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {item.readTime}
                    </div>
                    <span>{item.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Explore All Content
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Link>
>>>>>>> cursor/create-and-deploy-new-content-3130
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
};

export default NewContentPromoBanner;
>>>>>>> cursor/create-and-deploy-new-content-3130
