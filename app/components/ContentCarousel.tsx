'use client';
import React from 'react';
'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support']
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16"></div>
      <div className="container mx-auto px-4"></div>
        <div className="text-center mb-12"></div>
          <h2 className="text-4xl font-bold text-white mb-4"></h2>
            Our <span className="text-cyan-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Discover how our cutting-edge technology can transform your business operations.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12"></div>
          <div className="overflow-hidden rounded-2xl"></div>
            <div ;
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            ></div>
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0"></div>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
                    <div className="text-center mb-8"></div>
                      <slide.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-white mb-4">{slide.title}</h3>
                      <p className="text-xl text-gray-300 mb-6">{slide.description}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300"></div>
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button;
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
          ></button>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button;
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200"
          ></button>
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2"></div>
            {slides.map((_, index) => (
              <button;
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
          <div className="text-center mb-8"></div>
            <h3 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h3>
            <p className="text-xl text-gray-300"></p>
              We deliver exceptional results through innovative technology and expert support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center"></div>
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"></button>
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;