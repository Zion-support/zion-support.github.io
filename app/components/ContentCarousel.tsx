import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Users, Shield, Zap } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  users: number;
  features: string[];
}

const ContentCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items: CarouselItem[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      image: '/images/solutions/analytics.jpg',
      category: 'Analytics',
      rating: 4.9,
      users: 12500,
      features: ['Real-time insights', 'Predictive analytics', 'Custom dashboards', 'API integration']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions designed for modern businesses.',
      image: '/images/solutions/cloud.jpg',
      category: 'Cloud Services',
      rating: 4.8,
      users: 8900,
      features: ['Auto-scaling', '99.9% uptime', 'Global CDN', 'Security compliance']
    },
    {
      id: 3,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions to protect your digital assets.',
      image: '/images/solutions/security.jpg',
      category: 'Security',
      rating: 4.9,
      users: 15600,
      features: ['Threat detection', 'Real-time monitoring', 'Compliance reporting', 'Incident response']
    },
    {
      id: 4,
      title: 'Automation Platform',
      description: 'Streamline your workflows with intelligent automation solutions.',
      image: '/images/solutions/automation.jpg',
      category: 'Automation',
      rating: 4.7,
      users: 7200,
      features: ['Workflow automation', 'Process optimization', 'Integration tools', 'Custom triggers']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Solutions
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered solutions designed to transform your business.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                            {item.category}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-semibold">{item.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{item.users.toLocaleString()}+ users</span>
                          </div>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {item.title}
                        </h3>
                        
                        <p className="text-lg text-purple-100 mb-6">
                          {item.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {item.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="relative">
                        <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              {item.category === 'Analytics' && <Zap className="w-12 h-12" />}
                              {item.category === 'Cloud Services' && <Shield className="w-12 h-12" />}
                              {item.category === 'Security' && <Shield className="w-12 h-12" />}
                              {item.category === 'Automation' && <Zap className="w-12 h-12" />}
                            </div>
                            <p className="text-lg font-semibold">{item.title}</p>
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
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;