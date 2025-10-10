'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, TrendingUp, Award } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showcaseItems = [
    {
      title: 'AI-Powered Business Transformation',
      description: 'See how our AI solutions have helped businesses achieve 300% ROI and 95% process automation.',
      image: '/api/placeholder/800/400',
      stats: [
        { label: 'ROI Increase', value: '300%' },
        { label: 'Process Automation', value: '95%' },
        { label: 'Cost Savings', value: '$50M+' }
      ],
      link: '/case-studies',
      cta: 'View Success Stories'
    },
    {
      title: 'Micro SaaS Solutions Suite',
      description: 'Discover our comprehensive collection of 50+ AI-powered micro SaaS tools for modern businesses.',
      image: '/api/placeholder/800/400',
      stats: [
        { label: 'Available Tools', value: '50+' },
        { label: 'Active Users', value: '10K+' },
        { label: 'Satisfaction Rate', value: '98%' }
      ],
      link: '/micro-saas',
      cta: 'Explore Tools'
    },
    {
      title: 'Enterprise AI Implementation',
      description: 'Learn about our enterprise-grade AI solutions that scale with your business needs.',
      image: '/api/placeholder/800/400',
      stats: [
        { label: 'Enterprise Clients', value: '500+' },
        { label: 'Uptime Guarantee', value: '99.9%' },
        { label: 'Support Response', value: '<1hr' }
      ],
      link: '/ai-services',
      cta: 'Learn More'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [showcaseItems.length]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Success in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI and IT solutions are transforming businesses across industries.
          </p>
        </div>

        <div className="relative">
          <div className="cyber-card hologram-card p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {showcaseItems[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-300 mb-8">
                  {showcaseItems[currentSlide].description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {showcaseItems[currentSlide].stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={showcaseItems[currentSlide].link}
                  className="cyber-button inline-flex items-center group"
                >
                  {showcaseItems[currentSlide].cta}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative">
                <img
                  src={showcaseItems[currentSlide].image}
                  alt={showcaseItems[currentSlide].title}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white">
                    <Play className="w-5 h-5" />
                    <span className="text-sm">Watch Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1000+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500%</div>
            <div className="text-gray-400">Average ROI</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Awards Won</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;