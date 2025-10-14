'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, TrendingUp } from 'lucide-react';

interface Slide {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  stats?: {
    value: string;
    label: string;
  }[];
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
      ]
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
      ]
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
      ]
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
      ]
    }
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
  }, [nextSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900via-purple-900to-slate-900py-20px-4"></div>
      <div className="max-w-7xl mx-auto"></div>
        {/* Header */}
        <div className="text-center mb-16"></div>
          <h2 className="text-3xl md:text-4xlfont-boldtext-whitemb-6">
            Discover Our <span className="text-transparent bg-clip-textbg-gradient-to-rfrom-blue-400to-purple-400">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300max-w-3xlmx-auto">
            Explore our comprehensive suite of AI and IT solutions designed to transform your business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative"></div>
          <div className="bg-white/10 backdrop-blur-lgrounded-2xlp-8md:p-12borderborder-white/20overflow-hidden"></div>
            <div className="grid grid-cols-1lg:grid-cols-2gap-12items-center"></div>
              {/* Content */}
              <div className="space-y-8"></div>
                <div className="flex items-centergap-4"></div>
                  <div className="w-16 h-16bg-gradient-to-rfrom-purple-500to-blue-500rounded-fullflexitems-centerjustify-center"></div>
                    <currentSlideData.icon className="w-8 h-8text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-2xl md:text-3xlfont-boldtext-whitemb-2">
                      {currentSlideData.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {currentSlideData.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4"></div>
                  <h4 className="text-lg font-semiboldtext-whitemb-4">Key Features:</h4>
                  <div className="grid grid-cols-1sm:grid-cols-2gap-3"></div>
                    {currentSlideData.features.map((feature, index) => (
                      <div key={index} className="flex items-centerspace-x-3"></div>
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */},
    {currentSlideData.stats && (
                  <div className="grid grid-cols-3gap-6"></div>
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="text-center"></div>
                        <div className="text-2xl font-boldtext-whitemb-1">{stat.value}</div>
                        <div className="text-gray-400 text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )},
    {/* CTA */}
                <div className="flex flex-colsm:flex-rowgap-4"></div>
                  <button className="inline-flex items-centergap-2bg-gradient-to-rfrom-purple-500to-blue-500text-whitepx-6py-3rounded-lgfont-semiboldhover:from-purple-600hover:to-blue-600transition-allduration-300transformhover:scale-105">
                    <Zap className="w-5 h-5" />
                    Get Started
                  </button>
                  <button className="inline-flex items-centergap-2bg-white/10text-whitepx-6py-3rounded-lgfont-semiboldborderborder-white/20hover:bg-white/20transition-allduration-300">
                    <ArrowRight className="w-5 h-5" />
                    Learn More
                  </button>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative"></div>
                <div className="aspect-square bg-gradient-to-brfrom-purple-500/20to-blue-500/20rounded-2xlflexitems-centerjustify-center"></div>
                  <div className="text-center"></div>
                    <div className="w-32 h-32bg-gradient-to-rfrom-purple-500to-blue-500rounded-fullmx-automb-6flexitems-centerjustify-center"></div>
                      <currentSlideData.icon className="w-16 h-16text-white" />
                    </div>
                    <div className="text-4xl font-boldtext-whitemb-2">
                      {currentSlideData.title}
                    </div>
                    <div className="text-gray-300">
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
            className="absolute left-4top-1/2transform-translate-y-1/2bg-white/10hover:bg-white/20text-whitep-3rounded-fulltransition-colorsduration-200backdrop-blur-lgborderborder-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4top-1/2transform-translate-y-1/2bg-white/10hover:bg-white/20text-whitep-3rounded-fulltransition-colorsduration-200backdrop-blur-lgborderborder-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-centermt-8space-x-2"></div>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center"></div>
          <div className="grid grid-cols-1md:grid-cols-3gap-8max-w-4xlmx-auto"></div>
            <div className="flex items-centerjustify-centergap-3text-white"></div>
              <Star className="w-6 h-6text-yellow-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
            </div>
            <div className="flex items-centerjustify-centergap-3text-white"></div>
              <Users className="w-6 h-6text-blue-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
            </div>
            <div className="flex items-centerjustify-centergap-3text-white"></div>
              <TrendingUp className="w-6 h-6text-green-400" />
              <div className="text-left"></div>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;