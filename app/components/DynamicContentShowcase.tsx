'use client'
import React, { useState, useEffect } from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Star, Users, Clock, Award, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
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
const [currentIndex, setCurrentIndex] = useState(0)
const [isPlaying, setIsPlaying] = useState(true)
const features: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence','
      description: 'Advanced AI algorithms that learn and adapt to your business needs in real-time','
      stats: [
        { value: '95%', label: 'Accuracy' },'
    { value: '10x', label: 'Faster' },'
    { value: '24/7', label: 'Learning' }'
  ]
    },
    {
      icon: Zap,
      title: 'Lightning Fast Performance','
      description: 'Optimized for speed with sub-second response times and seamless user experience','
      stats: [
        { value: '< 100ms', label: 'Response' },'
    { value: '99.9%', label: 'Uptime' },'
    { value: '10M+', label: 'Requests' }'
  ]
    },
    {
      icon: Shield,
      title: 'Enterprise Security','
      description: 'Bank-level security with end-to-end encryption and compliance standards','
      stats: [
        { value: '256-bit', label: 'Encryption' },'
    { value: 'SOC 2', label: 'Compliance' },'
    { value: 'Zero', label: 'Breaches' }'
  ]
    },
    {
      icon: Globe,
      title: 'Global Scalability','
      description: 'Scale effortlessly across multiple regions with automatic load balancing','
      stats: [
        { value: '50+', label: 'Countries' },'
    { value: '15+', label: 'Languages' },'
    { value: '24/7', label: 'Support' }'
  ]
    }
  ]
const benefits = [
    'Advanced AI technology integration','
    'Real-time processing and analytics','
    'Enterprise-grade security and compliance','
    'Scalable and flexible solutions','
    '24/7 technical support','
    'Easy integration with existing systems','
    'Cost-effective pricing plans','
    'Proven track record of success'
  ]
const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson','
      company: 'TechCorp Inc.','
      role: 'CTO','
      content: 'This solution transformed our operations completely. The AI insights are incredible and have helped us make data-driven decisions that increased our efficiency by 300%.','
      rating: 5
    },
    {
      name: 'Michael Chen','
      company: 'DataFlow Systems','
      role: 'CEO','
      content: 'Outstanding performance and reliability. Our team productivity increased by 300% and we\'ve seen a 50% reduction in operational costs.','
      rating: 5
    },
    {
      name: 'Emily Rodriguez','
      company: 'InnovateLab','
      role: 'Product Manager','
      content: 'The best investment we made this year. ROI was evident within the first month, and the support team is absolutely fantastic.','
      rating: 5
    },
    {
      name: 'David Kim','
      company: 'CloudFirst Solutions','
      role: 'VP Engineering','
      content: 'Seamless integration with our existing systems. The scalability and performance exceeded our expectations.','
      rating: 5
    }
  ];
  useEffect(() => {
    if (!isPlaying) return;
const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
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
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">"
      {/* Hero Section */}
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto text-center"> " <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
            Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Content Showcase </span>"
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">"
            Experience the power of our cutting-edge solutions with real-time demonstrations
            and interactive showcases that bring your business to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"> " <Play className="w-5 h-5" />"
              Start Demo
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">"
              <ArrowRight className="w-5 h-5" /> "
              Learn More </button>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 px-4">"
        <div className="max-w-7xl mx-auto"> " <div className="text-center mb-16">"
            <h2 className="text-3xl font-bold text-white mb-6"> "
              Why Choose Our Solutions? </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"> "
              Our solutions deliver unmatched performance, security, and scalability for modern businesses. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">"
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group"> " <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">"
                  <feature.icon className="w-8 h-8 text-white" /> " </div>"
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">"
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>"
                {feature.stats && (
                  <div className="grid grid-cols-3 gap-4">"
                    {feature.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">}}"
                        <div className="text-lg font-bold text-white">{stat.value}</div>"
                        <div className="text-gray-400 text-xs">{stat.label}</div>"
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4"> " <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16"> " <h2 className="text-4xl font-bold text-white mb-4">"
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Discover the advantages that make our solutions the preferred choice for businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">"
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">}}"
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" /> " <span className="text-gray-300">{benefit}</span> " </div>"
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4">"
        <div className="max-w-4xl mx-auto"> " <div className="text-center mb-16">"
            <h2 className="text-4xl font-bold text-white mb-4"> "
              What Our Clients Say </h2>
            <p className="text-xl text-gray-300"> "
              Real feedback from real businesses that have transformed with our solutions. </p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">"
            <div className="text-center"> " <div className="flex justify-center mb-4">"
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />"
                ))}
              </div>
              <p className="text-xl text-white mb-6 italic">"
                "{testimonials[currentIndex].content}"
              </p>
              <div className="text-cyan-400 font-semibold">"
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-300">"
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default DynamicContentShowcase;