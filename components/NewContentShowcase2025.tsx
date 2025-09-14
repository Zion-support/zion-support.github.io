import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, StarIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  featured: boolean;
  url: string;
  publishDate: string;
  tags: string[];
}

const NewContentShowcase2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const featuredContent: ContentItem[] = [
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation in 2025: A Practical Guide for Business Leaders',
      excerpt: 'Learn how to successfully implement AI solutions in your organization with our comprehensive practical guide covering strategy, technology selection, and change management.',
      category: 'AI Implementation',
      readTime: '12 min read',
      featured: true,
      url: '/blog/ai-2025-practical-implementation-guide',
      publishDate: '2025-01-15',
      tags: ['AI', 'Business Strategy', 'Implementation', 'ROI']
    },
    {
      id: 'quantum-computing-applications',
      title: 'Quantum Computing Business Applications: Real-World Use Cases for 2025',
      excerpt: 'Discover how quantum computing is revolutionizing business operations across industries with real-world applications and practical implementation strategies.',
      category: 'Quantum Computing',
      readTime: '15 min read',
      featured: true,
      url: '/blog/quantum-computing-business-applications-2025',
      publishDate: '2025-01-15',
      tags: ['Quantum Computing', 'Business Applications', 'Optimization']
    },
    {
      id: 'ai-roi-calculator',
      title: 'AI Automation ROI Calculator: Measure Your Investment Returns',
      excerpt: 'Learn how to calculate and maximize your AI automation ROI with our comprehensive guide and interactive calculator tools.',
      category: 'AI ROI',
      readTime: '10 min read',
      featured: true,
      url: '/blog/ai-automation-roi-calculator-guide',
      publishDate: '2025-01-15',
      tags: ['AI ROI', 'Automation', 'ROI Calculator', 'Business Metrics']
    },
    {
      id: 'manufacturing-case-study',
      title: 'Manufacturing AI Transformation: 340% ROI in 18 Months',
      excerpt: 'How a mid-size manufacturing company achieved 340% ROI through comprehensive AI implementation, reducing costs by $2.8M annually.',
      category: 'Case Study',
      readTime: '8 min read',
      featured: true,
      url: '/case-studies/manufacturing-ai-transformation',
      publishDate: '2025-01-15',
      tags: ['Manufacturing', 'AI Transformation', 'ROI', 'Automation']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-4">
            <StarIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">NEW CONTENT 2025</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our newest content featuring practical AI implementation guides, 
            real-world case studies, and cutting-edge technology insights.
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                      {/* Content Info */}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-center mb-4">
                          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="ml-3 text-sm text-gray-500 flex items-center">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {item.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {item.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <UserGroupIcon className="w-4 h-4 mr-2" />
                            <span>Zion Tech Group</span>
                            <span className="mx-2">•</span>
                            <span>{item.publishDate}</span>
                          </div>
                          
                          <Link
                            href={item.url}
                            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                          >
                            Read More
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                          </Link>
                        </div>
                      </div>

                      {/* Visual Element */}
                      <div className="relative">
                        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8 h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-3xl font-bold text-white">
                                {item.category === 'AI Implementation' ? '🤖' : 
                                 item.category === 'Quantum Computing' ? '⚛️' :
                                 item.category === 'AI ROI' ? '📊' : '📈'}
                              </span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">
                              {item.category}
                            </h4>
                            <p className="text-gray-600">
                              {item.category === 'AI Implementation' ? 'Strategic AI Planning' :
                               item.category === 'Quantum Computing' ? 'Next-Gen Computing' :
                               item.category === 'AI ROI' ? 'ROI Optimization' : 'Success Stories'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-900 p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredContent.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? 'bg-purple-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get personalized AI strategy recommendations and implementation guidance 
              tailored to your specific industry and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Explore Our Services
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2025;