'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const features: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time',
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '10x', label: 'Faster' },
        { value: '24/7', label: 'Learning' }
      ]
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance',
      description: 'Optimized for speed with sub-second response times and seamless user experience',
      stats: [
        { value: '< 100ms', label: 'Response' },
        { value: '99.9%', label: 'Uptime' },
        { value: '10M+', label: 'Requests' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards',
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: 'SOC 2', label: 'Compliance' },
        { value: 'Zero', label: 'Breaches' }
      ]
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing',
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '15+', label: 'Languages' },
        { value: '24/7', label: 'Support' }
      ]
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

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible and have helped us make data-driven decisions that increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding performance and reliability. Our team productivity increased by 300% and we\'ve seen a 50% reduction in operational costs.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Product Manager',
      content: 'The best investment we made this year. ROI was evident within the first month, and the support team is absolutely fantastic.',
      rating: 5
    },
    {
      name: 'David Kim',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.',
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4-00-0);
    
    return () => clearInterval(timer);
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="bg-gradient-to-br from-slate-900via-purple-900to-slate-900min-h-screen"></div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-autotext-center"></div>
          <h1 className="text-4xl md:text-6xlfont-boldtext-whitemb-6">
            Dynamic <span className="text-transparent bg-clip-textbg-gradient-to-rfrom-blue-400to-purple-400">Content Showcase</span>
          </h1>
          <p className="text-xl text-gray-300max-w-3xlmx-automb-8">
            Experience the power of our cutting-edge solutions with real-time demonstrations 
            and interactive showcases that bring your business to life.
          </p>
          <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
            <button className="inline-flex items-centergap-2bg-gradient-to-rfrom-purple-500to-blue-500text-whitepx-8py-4rounded-lgfont-semiboldhover:from-purple-600hover:to-blue-600transition-allduration-300transformhover:scale-105">
              <Play className="w-5 h-5" />
              Start Demo
            </button>
            <button className="inline-flex items-centergap-2bg-white/10text-whitepx-8py-4rounded-lgfont-semiboldborderborder-white/20hover:bg-white/20transition-allduration-300">
              <ArrowRight className="w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-boldtext-whitemb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Our solutions deliver unmatched performance, security, and scalability for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8"></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:border-purple-400transition-allduration-300group"></div>
                <div className="flex items-centerjustify-centerw-16h-16bg-gradient-to-rfrom-purple-500to-blue-500rounded-fullmb-6"></div>
                  <feature.icon className="w-8 h-8text-white" />
                </div>
                <h3 className="text-xl font-boldtext-whitemb-4group-hover:text-purple-400transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                {feature.stats && (
                  <div className="grid grid-cols-3gap-4"></div>
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center"></div>
                        <div className="text-lg font-boldtext-white">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-boldtext-whitemb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="relative"></div>
            <div className="bg-white/10 backdrop-blur-lgrounded-2xlp-12borderborder-white/20"></div>
              <div className="text-center"></div>
                <div className="flex justify-centermb-6"></div>
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6text-yellow-400fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-300mb-8max-w-4xlmx-auto">
                  "{currentTestimonial.content}"
                </blockquote>
                
                <div className="flex items-centerjustify-centergap-4"></div>
                  <div className="w-16 h-16bg-gradient-to-rfrom-purple-500to-blue-500rounded-fullflexitems-centerjustify-center"></div>
                    <Users className="w-8 h-8text-white" />
                  </div>
                  <div className="text-left"></div>
                    <div className="text-lg font-semiboldtext-white">{currentTestimonial.name}</div>
                    <div className="text-gray-400">{currentTestimonial.role}</div>
                    <div className="text-purple-400 text-sm">{currentTestimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-centerjustify-centergap-4mt-8"></div>
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white/10hover:bg-white/20text-whiterounded-fulltransition-colorsduration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={togglePlayPause}
                className="p-3 bg-white/10hover:bg-white/20text-whiterounded-fulltransition-colorsduration-200"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-3 bg-white/10hover:bg-white/20text-whiterounded-fulltransition-colorsduration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-centermt-6space-x-2"></div>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl font-boldtext-whitemb-6">Comprehensive Benefits</h2>
            <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Our solutions provide a complete package of benefits designed to accelerate your business growth.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lgrounded-2xlp-8borderborder-white/20"></div>
            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-6"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-startspace-x-3"></div>
                  <CheckCircle className="w-5 h-5text-green-400flex-shrink-0mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-autotext-center"></div>
          <div className="bg-gradient-to-r from-purple-600to-blue-600rounded-2xlp-12"></div>
            <h2 className="text-3xl font-boldtext-whitemb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-white/90mb-8max-w-2xlmx-auto">
              Join thousands of businesses that have already transformed their operations with our cutting-edge solutions.
            </p>
            <div className="flex flex-colsm:flex-rowgap-4justify-center"></div>
              <button className="bg-white text-purple-600px-8py-4rounded-lgfont-semiboldhover:bg-gray-100transition-colorsduration-200flexitems-centerjustify-centerspace-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border-2 border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colorsduration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;