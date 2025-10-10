'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Target, BarChart, Users, Clock, TrendingUp, Award, Globe, Cpu, Settings, FileText, Bot, Music, Video, CreditCard, ShoppingCart, Smartphone, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Rocket, Microscope, Layers, Server, Network, HardDrive, Wifi, Monitor, Keyboard, Mouse, Headphones, Printer, Scanner, Router, Switch, Firewall, Antivirus, Backup, Recovery, Migration, Integration, Consulting, Support, Maintenance, Upgrade, Security as SecurityIcon, Compliance, Audit, Training, Documentation, Testing, Quality, Performance, Scalability, Reliability, Availability, Monitoring, Alerting, Logging, Analytics, Reporting, Dashboard } from 'lucide-react';

const ContentCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'AI-Powered Business Solutions',
      description: 'Transform your business with cutting-edge AI technology that automates processes and drives growth.',
      features: [
        'Automated workflow management',
        'Intelligent data analysis',
        'Predictive analytics',
        '24/7 AI assistance'
      ],
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      bgColor: 'from-purple-500/20 to-blue-500/20'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure & DevOps',
      description: 'Scalable cloud solutions with automated deployment and monitoring for optimal performance.',
      features: [
        'Cloud migration services',
        'Automated CI/CD pipelines',
        'Infrastructure monitoring',
        'Disaster recovery planning'
      ],
      icon: Cloud,
      color: 'from-cyan-600 to-blue-600',
      bgColor: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      id: 3,
      title: 'Cybersecurity & Compliance',
      description: 'Protect your business with advanced security solutions and compliance management.',
      features: [
        'Threat detection & prevention',
        'Security audits & assessments',
        'Compliance monitoring',
        'Incident response planning'
      ],
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      bgColor: 'from-red-500/20 to-orange-500/20'
    },
    {
      id: 4,
      title: 'Data Analytics & Business Intelligence',
      description: 'Turn your data into actionable insights with advanced analytics and visualization tools.',
      features: [
        'Real-time dashboards',
        'Predictive modeling',
        'Custom reporting',
        'Data visualization'
      ],
      icon: BarChart,
      color: 'from-green-600 to-teal-600',
      bgColor: 'from-green-500/20 to-teal-500/20'
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our comprehensive AI and IT solutions can transform your business
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${slide.color} text-white p-12 rounded-2xl`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className={`w-16 h-16 bg-gradient-to-r ${slide.bgColor} rounded-full flex items-center justify-center mr-4`}>
                            <slide.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold">{slide.title}</h3>
                        </div>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                          {slide.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {slide.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-white/90">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                      <div className="hidden lg:block">
                        <div className={`w-full h-80 bg-gradient-to-br ${slide.bgColor} rounded-2xl flex items-center justify-center`}>
                          <slide.icon className="w-32 h-32 text-white/50" />
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
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCarousel;