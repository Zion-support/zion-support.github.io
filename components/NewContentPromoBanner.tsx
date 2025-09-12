<<<<<<< HEAD
<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

<<<<<<< HEAD
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
  type: 'blog' | 'case-study' | 'service';
  featured: boolean;
}

const NewContentPromoBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
  const newContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025 Breakthrough Innovations',
      description: 'Discover revolutionary AI technologies reshaping industries: quantum AI, autonomous systems, and edge intelligence.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
<<<<<<< HEAD
<<<<<<< HEAD
      featured: true,
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      category: 'Advanced AI'
=======
      featured: true
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
      featured: true
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
    },
    {
      id: '2',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'Learn how to build eco-friendly AI systems that reduce environmental impact while maintaining performance.',
      href: '/blog/ai-sustainability-green-tech-2025',
      type: 'blog',
<<<<<<< HEAD
<<<<<<< HEAD
      featured: true,
      readTime: '28 min read',
      date: 'Jan 28, 2025',
      category: 'Multimodal AI'
=======
      featured: true
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
    },
    {
      id: '3',
      title: 'Quantum Machine Learning 2025',
      description: 'Discover quantum computing breakthroughs in machine learning, enabling exponential speedups for complex problems.',
      href: '/blog/ai-2025-quantum-machine-learning',
      type: 'blog',
<<<<<<< HEAD
      featured: true,
      readTime: '32 min read',
      date: 'Jan 28, 2025',
      category: 'Quantum AI'
=======
      featured: true
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
    },
    {
      id: '4',
      title: 'AI Autonomous Manufacturing: $200M Success',
      description: 'Complete case study: How a Fortune 500 manufacturer achieved $200M savings and 300% productivity gains.',
      href: '/case-studies/ai-2025-autonomous-manufacturing-revolution',
      type: 'case-study',
<<<<<<< HEAD
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
=======
=======
      featured: true
    },
    {
      id: '3',
      title: '$200M Manufacturing Success Case Study',
      description: 'Complete case study: How a Fortune 500 company achieved $200M savings through autonomous AI systems.',
      href: '/case-studies/ai-autonomous-manufacturing-success-2025',
      type: 'case-study',
      featured: true
    },
    {
      id: '4',
      title: 'AI Robotics & Automation 2025',
      description: 'Explore the future of intelligent machines transforming manufacturing, healthcare, and service industries.',
      href: '/blog/ai-robotics-automation-2025',
      type: 'blog',
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
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
      title: 'AI Implementation Master Guide 2026',
      description: 'Download our comprehensive 200+ page AI implementation guide with templates and best practices.',
      href: '/resources/ai-implementation-master-guide-2026',
      type: 'blog',
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
<<<<<<< HEAD
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
<<<<<<< HEAD
<<<<<<< HEAD
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
        </div>
      </div>
    </section>
=======
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
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
<<<<<<< HEAD
>>>>>>> b7b21f2b72e9c22f7eacaa47bad99ca4b1a2b245
=======
>>>>>>> 6d58bbd2221ec2e3b32c98ab54b0c4aecc83a7e7
  );
};

export default NewContentPromoBanner;