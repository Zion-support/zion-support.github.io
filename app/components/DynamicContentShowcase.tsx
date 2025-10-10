'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight, Star, Quote, ChevronLeft, ChevronRight, Zap, Shield, Brain, Globe, Users, TrendingUp } from 'lucide-react';

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
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

const DynamicContentShowcase: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const features: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      stats: [
        { value: '95%', label: 'Accuracy' },
        { value: '10x', label: 'Faster Processing' },
        { value: '24/7', label: 'Monitoring' }
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Protect your business with military-grade security and compliance frameworks.',
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: 'Zero', label: 'Breaches' },
        { value: 'SOC 2', label: 'Compliant' }
      ]
    },
    {
      icon: Globe,
      title: 'Global Infrastructure',
      description: 'Scale your operations worldwide with our distributed cloud infrastructure.',
      stats: [
        { value: '50+', label: 'Countries' },
        { value: '99.9%', label: 'SLA' },
        { value: 'Global', label: 'CDN' }
      ]
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhance productivity with our integrated collaboration and project management tools.',
      stats: [
        { value: '40%', label: 'Efficiency Gain' },
        { value: '100%', label: 'Team Adoption' },
        { value: 'Real-time', label: 'Sync' }
      ]
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'TechCorp Solutions',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented increased our efficiency by 60% and reduced costs by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'InnovateLabs',
      content: 'Outstanding service and support. Their team helped us migrate to the cloud seamlessly and the results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP of Operations',
      company: 'Global Dynamics',
      content: 'The cybersecurity solutions provided by Zion Tech Group gave us peace of mind. Zero breaches since implementation.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Founder',
      company: 'StartupXYZ',
      content: 'From day one, Zion Tech Group understood our needs and delivered solutions that scaled with our growth.',
      rating: 5
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [isPlaying, features.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-20">
      {/* Features Showcase */}
      <section className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Capabilities</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful features that make our solutions stand out in the market.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentFeature * 100}%)` }}
          >
            {features.map((feature, index) => (
              <div key={index} className="w-full flex-shrink-0 p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mr-4">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold">{feature.title}</h3>
                    </div>
                    
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {feature.description}
                    </p>

                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>

                  {feature.stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {feature.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                          <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                          <div className="text-gray-300 text-sm">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <button
              onClick={prevFeature}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextFeature}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Next feature"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Play/Pause Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              ) : (
                <ArrowRight className="w-4 h-4 ml-0.5" />
              )}
            </button>
          </div>
        </div>

        {/* Feature Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFeature(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentFeature
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex justify-center mb-6">
                    <Quote className="w-12 h-12 text-cyan-400" />
                  </div>
                  
                  <blockquote className="text-2xl text-gray-300 mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex justify-center mb-4">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <div className="text-white">
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                    <div className="text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DynamicContentShowcase;
