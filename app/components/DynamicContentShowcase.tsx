'use client';
import React, { useState, useEffect } from 'react';
import { Play, Pause, ArrowRight, Star, Users, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showcaseItems = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      image: '/images/showcase/ai-analytics.jpg',
      features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards'],
      rating: 4.9,
      users: '10,000+'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable, secure, and reliable cloud infrastructure for your business needs.',
      image: '/images/showcase/cloud-infrastructure.jpg',
      features: ['99.9% Uptime', 'Auto-scaling', 'Security First'],
      rating: 4.8,
      users: '5,000+'
    },
    {
      id: 3,
      title: 'Micro SAAS Applications',
      description: 'Ready-to-use AI tools that solve specific business problems efficiently.',
      image: '/images/showcase/micro-saas.jpg',
      features: ['50+ Tools', 'Easy Integration', 'Affordable Pricing'],
      rating: 4.9,
      users: '25,000+'
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, showcaseItems.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = showcaseItems[currentIndex];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and innovative solutions
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-300 text-sm">
                    {currentItem.rating} ({currentItem.users} users)
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {currentItem.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {currentItem.description}
                </p>

                <div className="space-y-2 mb-6">
                  {currentItem.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">
                      {currentItem.title.charAt(0)}
                    </div>
                    <div className="text-gray-300">{currentItem.title}</div>
                  </div>
                </div>

                <button
                  onClick={togglePlayPause}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-cyan-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;