'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'webinar' | 'whitepaper' | 'service';
  featured: boolean;
  readTime?: string;
  date?: string;
  category?: string;
}

interface NewContentPromoBannerProps {
  variant?: 'default' | 'featured' | 'minimal';
  maxItems?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const NewContentPromoBanner = ({
  variant = 'default',
  maxItems = 4,
  autoRotate = true,
  rotationInterval = 5000
}: NewContentPromoBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const newContent: ContentItem[] = [
    {
      id: 'n1',
      title: 'Foundation Model Fine-Tuning 2025: Practical Guide',
      description: 'PEFT, data curation, evals, guardrails, and cost control for production.',
      href: '/blog/ai-2025-foundation-model-fine-tuning',
      type: 'blog',
      featured: true,
      readTime: '22 min read',
      date: 'Sep 12, 2025',
      category: 'LLMs'
    },
    {
      id: 'n3',
      title: 'Data Governance for LLM Apps in 2025',
      description: 'Lineage, privacy-by-design, access controls, policy engines, and audits.',
      href: '/blog/ai-2025-data-governance-llm-apps',
      type: 'blog',
      featured: true,
      readTime: '18 min read',
      date: 'Sep 12, 2025',
      category: 'Governance'
    },
    {
      id: 'n4',
      title: 'End-to-End Evaluation for AI Systems in 2025',
      description: 'Quality, latency, cost, safety, and reliability—continuous, operational evals.',
      href: '/blog/ai-2025-end-to-end-evaluation',
      type: 'blog',
      featured: true,
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      category: 'Evaluation'
    },
    {
      id: 'n5',
      title: 'Retrieval Augmentation at Scale in 2025',
      description: 'Hybrid search, indexing, routing, chunking, caching, and observability.',
      href: '/blog/ai-2025-retrieval-augmentation-at-scale',
      type: 'blog',
      featured: true,
      readTime: '20 min read',
      date: 'Sep 12, 2025',
      category: 'RAG'
    },
    {
      id: 'n2',
      title: 'Agent Safety & Evals Playbook 2025',
      description: 'Red teaming, jailbreak prevention, policy enforcement, and automated scoring.',
      href: '/blog/ai-2025-agent-safety-evals-playbook',
      type: 'blog',
      featured: true,
      readTime: '19 min read',
      date: 'Sep 12, 2025',
      category: 'Agents'
    },
    {
      id: 'p1',
      title: 'AI 2025 Breakthrough Innovations',
      description: 'Revolutionary AI technologies reshaping industries.',
      href: '/blog/ai-2025-breakthrough-innovations',
      type: 'blog',
      featured: true,
      readTime: '25 min read',
      date: 'Jan 28, 2025',
      category: 'Advanced AI'
    },
    {
      id: 'p2',
      title: 'AI Sustainability & Green Tech 2025',
      description: 'Build eco-friendly AI systems without sacrificing performance.',
      href: '/blog/ai-2025-sustainability-green-tech',
      type: 'blog',
      featured: true,
      readTime: '20 min read',
      date: 'Jan 28, 2025',
      category: 'Sustainability'
    }
  ];

  const displayedContent = variant === 'featured'
    ? newContent.filter(item => item.featured).slice(0, maxItems)
    : newContent.slice(0, maxItems);

  useEffect(() => {
    if (autoRotate && !isHovered && displayedContent.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, isHovered, displayedContent.length, rotationInterval, currentIndex]);

  const nextSlide = () => {
    const nextIndex = currentIndex === displayedContent.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? displayedContent.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'webinar': return '🎥';
      case 'whitepaper': return '📄';
      case 'service': return '🚀';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'webinar': return 'bg-purple-100 text-purple-800';
      case 'whitepaper': return 'bg-orange-100 text-orange-800';
      case 'service': return 'bg-pink-100 text-pink-800';
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
                        <h3 className="text-3xl font-bold mb-4 line-clamp-2">{item.title}</h3>
                        <p className="text-lg text-indigo-100 mb-6 line-clamp-3">{item.description}</p>
                        <div className="flex items-center space-x-6 text-sm text-indigo-200 mb-6">
                          {item.readTime && (
                            <div className="flex items-center">
                              <span className="mr-2">⏱️</span>
                              {item.readTime}
                            </div>
                          )}
                          {item.category && (
                            <div className="flex items-center">
                              <span className="mr-2">🏷️</span>
                              {item.category}
                            </div>
                          )}
                          {item.date && <div>{item.date}</div>}
                        </div>
                        <Link href={item.href} className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                          Read More
                          <span className="ml-2">→</span>
                        </Link>
                      </div>
                      <div className="w-1/2 bg-gradient-to-br from:white/10 to-white/5 flex items-center justify-center">
                        <div className="text-8xl opacity-20">{getTypeIcon(item.type)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {displayedContent.length > 1 && (
              <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-6">
                <div className="flex justify-between">
                  <button onClick={prevSlide} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">◀</button>
                  <button onClick={nextSlide} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors">▶</button>
                </div>
              </div>
            )}

            {displayedContent.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {displayedContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedContent.map((item) => (
              <Link key={item.id} href={item.href} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>{item.type.replace('-', ' ')}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-1">⏱️</span>
                      {item.readTime || '—'}
                    </div>
                    <span>{item.date || ''}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/content-showcase" className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Explore All Content
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromoBanner;