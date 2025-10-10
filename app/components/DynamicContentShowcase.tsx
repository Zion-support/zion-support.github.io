'use client';
import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, Users, TrendingUp, Shield, Zap } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('testimonials');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Their cloud migration service was flawless and saved us thousands.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'Their micro SAAS tools are exactly what we needed. Easy to use, powerful, and affordable. Game changer for our startup.',
      rating: 5,
      image: '👩‍🚀'
    },
    {
      id: 4,
      name: 'David Wilson',
      company: 'SecureNet Solutions',
      role: 'Security Director',
      content: 'The cybersecurity suite they provided has been outstanding. Zero breaches since implementation and 24/7 monitoring.',
      rating: 5,
      image: '👨‍🔬'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers worldwide'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for clients'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service delivery'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'
    }
  ];

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that adapts to your business needs',
      icon: '🤖'
    },
    {
      title: 'Cloud Excellence',
      description: 'Scalable cloud infrastructure with enterprise-grade security',
      icon: '☁️'
    },
    {
      title: 'Micro SAAS Tools',
      description: '50+ ready-to-use business tools for immediate productivity',
      icon: '⚡'
    },
    {
      title: 'Expert Support',
      description: '24/7 technical support from certified professionals',
      icon: '🛠️'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const tabs = [
    { id: 'testimonials', label: 'Testimonials', icon: Quote },
    { id: 'stats', label: 'Statistics', icon: TrendingUp },
    { id: 'features', label: 'Features', icon: Star }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'testimonials':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">What Our Clients Say</h3>
              <p className="text-gray-300">Real feedback from satisfied customers</p>
            </div>
            
            <div className="relative">
              <div className="quantum-card hologram-card p-8 text-center">
                <div className="text-6xl mb-4">{testimonials[currentTestimonial].image}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 mb-6 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="text-white">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-cyan-400">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}</div>
                </div>
              </div>
              
              {/* Testimonial dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-gray-400 hover:bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Impact</h3>
              <p className="text-gray-300">Numbers that speak for themselves</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="quantum-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 font-semibold mb-2">{stat.label}</div>
                  <div className="text-gray-300 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
              <p className="text-gray-300">Key features that set us apart</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-white cyber-glow'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-96">
          {renderContent()}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="cyber-card hologram-card p-8 max-w-2xl mx-auto border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Experience the Difference?</h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services/enhanced"
                className="cyber-button inline-flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicContentShowcase;