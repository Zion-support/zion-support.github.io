import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NEW_BLOG_POSTS_2026, NEW_SERVICES_2026 } from '../data/newContent2026';

const NewContentCarousel2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'services'>('blog');
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerView = 3;
  const blogItems = NEW_BLOG_POSTS_2026;
  const serviceItems = NEW_SERVICES_2026;

  const currentItems = activeTab === 'blog' ? blogItems : serviceItems;
  const maxIndex = Math.max(0, currentItems.length - itemsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Content 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the latest breakthroughs in AI, quantum computing, neural interfaces, and autonomous systems
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'blog'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              📝 Blog Posts
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'services'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              🚀 Services
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {currentItems.map((item, index) => (
                <div key={item.id || index} className="w-1/3 flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                    {/* Image/Header */}
                    <div className={`h-48 bg-gradient-to-br ${
                      activeTab === 'blog' 
                        ? 'from-purple-400 to-blue-500' 
                        : 'from-indigo-500 to-purple-600'
                    } relative`}>
                      <div className="absolute inset-0 bg-black opacity-20"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 ${
                          activeTab === 'blog' 
                            ? 'bg-yellow-400 text-purple-900' 
                            : 'bg-green-400 text-indigo-900'
                        } rounded-full text-sm font-semibold`}>
                          {activeTab === 'blog' ? item.category : `AI Score: ${item.aiScore}`}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.excerpt || item.description}
                      </p>
                      
                      {activeTab === 'blog' ? (
                        <>
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <span>{item.author}</span>
                            <span>{item.readTime}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Link
                            to={`/blog/${item.slug}`}
                            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors"
                          >
                            Read More
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-indigo-600">
                              {item.currency}{item.price.toLocaleString()}
                            </span>
                            <div className="flex items-center">
                              <span className="text-yellow-400">★</span>
                              <span className="ml-1 text-gray-600">{item.reviews.rating}</span>
                              <span className="ml-1 text-gray-500">({item.reviews.count})</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                            Learn More
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            to="/pages/NewContentShowcase2026"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentCarousel2026;