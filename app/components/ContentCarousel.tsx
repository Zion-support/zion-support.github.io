'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  icon: React.ComponentType<any></any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string})
}[]})
}

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: [
        { value: '95%', label: 'Accuracy Rate' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Automation' }
      ]})
},
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
      features: ['Real-time Processing', 'Scalable Architecture', 'Optimized Performance', 'Low Latency'],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '< 100ms', label: 'Response Time' },
        { value: '10M+', label: 'Requests/Day' }
      ]})
},
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      features: ['End-to-End Encryption', 'Compliance Standards', 'Security Audits', '24/7 Monitoring'],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Security Breaches' }
      ]})
},
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
      features: ['Multi-Region Support', 'Local Compliance', 'Global CDN', 'International Support'],
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Global Support' }
      ]})
}
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)})
};

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)})
};

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer)})
}, []);

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4"></di></div>
      <div className="max-w-7xl mx-auto"></di></div>
        {/* Header */}
        <div className="text-center mb-16"></di></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></spa>Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative"></di></div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 overflow-hidden"></di></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></di></div>
              {/* Content */}
              <div className="space-y-8"></di></div>
                <div className="flex items-center gap-4"></di></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center"></di></div>
                    <currentSlideData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div></di></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2"></h3>
                      {currentSlideData.title}
                    </h3>
                    <p className="text-gray-300 text-lg"></p>
                      {currentSlideData.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4"></di></div>
                  <h4 className="text-lg font-semibold text-white mb-4"></h>Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3"></di></div>
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3"></di></div>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300"></spa>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                {currentSlideData.stats && (
                  <div className="grid grid-cols-3 gap-6"></di></div>
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="text-center"></di></div>
                        <div className="text-2xl font-bold text-white mb-1"></di>{stat.value}</div>
                        <div className="text-gray-400 text-sm"></di>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4"></di></div>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"></button>
                    <Zap className="w-5 h-5" />
                    Get Started
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"></button>
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative"></di></div>
                <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center"></di></div>
                  <div className="text-center"></di></div>
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></di></div>
                      <currentSlideData.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2"></di></div>
                      {currentSlideData.title}
                    </div>
                    <div className="text-gray-300"></di></div>
                      Slide {currentSlide + 1} of {slides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          ></button>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 backdrop-blur-lg border border-white/20"
          ></button>
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2"></di></div>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() =></button> setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'})
}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center"></di></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></di></div>
            <div className="flex items-center justify-center gap-3 text-white"></di></div>
              <Star className="w-6 h-6 text-yellow-400" />
              <div className="text-left"></di></div>
                <div className="text-2xl font-bold"></di>4.9/5</div>
                <div className="text-gray-400 text-sm"></di>Customer Rating</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white"></di></div>
              <Users className="w-6 h-6 text-blue-400" />
              <div className="text-left"></di></div>
                <div className="text-2xl font-bold"></di>10,000+</div>
                <div className="text-gray-400 text-sm"></di>Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white"></di></div>
              <TrendingUp className="w-6 h-6 text-green-400" />
              <div className="text-left"></di></div>
                <div className="text-2xl font-bold"></di>99.9%</div>
                <div className="text-gray-400 text-sm"></di>Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )})
};

export default ContentCarousel;