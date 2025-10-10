'use client';
import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, Brain, ChevronLeft, ChevronRight } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions for modern businesses.',
      features: [
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: [
        'Auto-scaling capabilities',
        '99.9% uptime guarantee',
        'Advanced security',
        'Cost optimization'
      ],
      icon: Cloud,
      color: 'from-green-500 to-blue-600',
    },
    {
      id: 3,
      title: 'AI Automation',
      description: 'Automate complex business processes with intelligent AI systems.',
      features: [
        'Process automation',
        'Workflow optimization',
        'Smart decision making',
        'Performance monitoring'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 4,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with comprehensive AI-powered security solutions.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Automated response',
        'Compliance management'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600',
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-16 px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        {/* Header */}
        <div className="text-center mb-12"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Discover our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative"></div>
          <div className="overflow-hidden rounded-2xl"></div>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100,}%)` }}
            ></div>
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0"></div>
                  <div className={`bg-gradient-to-br ${slide.color} p-8 md: p-12`,}></div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"></div>
                      {/* Content */}
                      <div className="text-white"></div>
                        <div className="flex items-center mb-6"></div>
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4"></div>
                            <slide.icon className="w-8 h-8" />
                          </div>
                          <h3 className="text-3xl font-bold"></h3>{slide.title}</h3>
                        </div>
                        <p className="text-xl text-white/90 mb-6"></p>{slide.description}</p>
                        <ul className="space-y-3">
                          {slide.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-white rounded-full mr-3"></div></div>
                              <span className="text-white/90">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visual */}
                      <div className="flex justify-center"></div>
                        <div className="w-80 h-80 bg-white/10 rounded-2xl flex items-center justify-center"></div>
                          <slide.icon className="w-32 h-32 text-white/80" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          ></button>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          ></button>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2"></div>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() =></button> setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;