import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { REVOLUTIONARY_BLOG_POSTS_2027, REVOLUTIONARY_CASE_STUDIES_2027, REVOLUTIONARY_SERVICES_2027 } from '../data/revolutionaryContent2026';

const RevolutionaryContentCarousel2027: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'case-studies' | 'services'>('blog');
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCurrentItems = () => {
    switch (activeTab) {
      case 'blog':
        return REVOLUTIONARY_BLOG_POSTS_2027;
      case 'case-studies':
        return REVOLUTIONARY_CASE_STUDIES_2027;
      case 'services':
        return REVOLUTIONARY_SERVICES_2027;
      default:
        return REVOLUTIONARY_BLOG_POSTS_2027;
    }
  };

  const currentItems = getCurrentItems();
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= currentItems.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? Math.max(0, currentItems.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, currentItems.length]);

  const renderBlogPost = (post: any) => (
    <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
      <div className="flex items-center gap-2 mb-4">
        {post.isNew && (
          <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
            NEW
          </span>
        )}
        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold border border-purple-500/30">
          {post.urgency}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
        {post.title}
      </h3>
      
      <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
        {post.excerpt}
      </p>
      
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <span>{post.author}</span>
        <span>{post.readTime}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>👁️ {post.views.toLocaleString()}</span>
          <span>❤️ {post.likes}</span>
        </div>
        <Link
          to={`/blog/${post.id}`}
          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  );

  const renderCaseStudy = (caseStudy: any) => (
    <div key={caseStudy.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
      <div className="flex items-center gap-2 mb-4">
        {caseStudy.isNew && (
          <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
            NEW
          </span>
        )}
        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
          Featured
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-white line-clamp-2">
        {caseStudy.title}
      </h3>
      
      <p className="text-blue-300 mb-3 text-sm">
        {caseStudy.company} • {caseStudy.industry}
      </p>
      
      <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
        {caseStudy.challenge}
      </p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-1">Key Results:</h4>
        <ul className="text-gray-300 text-xs space-y-1">
          {caseStudy.results.slice(0, 2).map((result: string, index: number) => (
            <li key={index} className="flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              {result}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="text-xs text-gray-400">
        Duration: {caseStudy.duration}
      </div>
    </div>
  );

  const renderService = (service: any) => (
    <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
      <div className="flex items-center gap-2 mb-4">
        {service.isNew && (
          <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-semibold border border-red-500/30">
            NEW
          </span>
        )}
        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold border border-indigo-500/30">
          {service.urgency}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
        {service.title}
      </h3>
      
      <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
        {service.description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {service.features.slice(0, 3).map((feature: string, index: number) => (
            <li key={index} className="flex items-start text-gray-300 text-xs">
              <span className="text-indigo-400 mr-2">→</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-indigo-300">
          {service.pricing}
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold text-sm hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
          Learn More
        </button>
      </div>
    </div>
  );

  const renderItem = (item: any) => {
    switch (activeTab) {
      case 'blog':
        return renderBlogPost(item);
      case 'case-studies':
        return renderCaseStudy(item);
      case 'services':
        return renderService(item);
      default:
        return renderBlogPost(item);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Revolutionary Content 2027
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the latest breakthroughs in AI, quantum computing, and emerging technologies
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-2 border border-white/20">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'case-studies'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {currentItems.map((item, index) => (
                <div key={item.id} className="w-1/3 flex-shrink-0 px-4">
                  {renderItem(item)}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 backdrop-blur-lg rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 backdrop-blur-lg rounded-full p-3 hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(currentItems.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? 'bg-purple-400'
                    : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            to="/revolutionary-content-2027"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View All 2027 Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2027;