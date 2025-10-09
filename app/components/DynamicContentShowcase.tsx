'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: 'Latest AI Breakthrough',
      description: 'Revolutionary machine learning algorithm that processes data 10x faster than traditional methods.',
      category: 'AI Innovation',
      date: '2024-01-15',
      readTime: '5 min read',
      author: 'Dr. Sarah Chen',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      link: '/blog/ai-breakthrough-2024'
    },
    {
      id: 2,
      title: 'Quantum Computing Milestone',
      description: 'Achieved quantum supremacy in optimization problems, opening new possibilities for enterprise solutions.',
      category: 'Quantum Computing',
      date: '2024-01-12',
      readTime: '7 min read',
      author: 'Prof. Michael Zhang',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
      link: '/blog/quantum-milestone-2024'
    },
    {
      id: 3,
      title: 'Autonomous Systems Update',
      description: 'New self-managing infrastructure reduces operational costs by 60% while improving reliability.',
      category: 'Autonomous Systems',
      date: '2024-01-10',
      readTime: '6 min read',
      author: 'Alex Rodriguez',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      link: '/blog/autonomous-systems-update'
    },
    {
      id: 4,
      title: 'Cybersecurity Innovation',
      description: 'AI-powered threat detection system prevents 99.9% of cyber attacks in real-time.',
      category: 'Cybersecurity',
      date: '2024-01-08',
      readTime: '4 min read',
      author: 'Lisa Thompson',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      link: '/blog/cybersecurity-innovation'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [contentItems.length]);

  const currentItem = contentItems[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900/40 to-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Latest Insights & Innovations
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our latest research, case studies, and technological breakthroughs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentItem.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {currentItem.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {currentItem.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-400 mb-6 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(currentItem.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentItem.readTime}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {currentItem.author}
                  </div>
                </div>
                
                <a
                  href={currentItem.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Content Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
