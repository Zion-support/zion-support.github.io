'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Star,
  BarChart,
  Settings,
  Globe
} from 'lucide-react';
import ContentPromotionBanner from './components/ContentPromotionBanner';
import ContentStatistics from './components/ContentStatistics';
import ContentCarousel from './components/ContentCarousel';
import DynamicContentShowcase from './components/DynamicContentShowcase';

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
    <div className="h-4 bg-gray-200 rounded mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for modern businesses',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business',
      features: ['Auto-scaling', '99.9% Uptime', 'Advanced Security', 'Cost Optimization'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Threat Detection', 'Real-time Monitoring', 'Automated Response', 'Compliance'],
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence',
      features: ['Real-time Analytics', 'Data Visualization', 'Predictive Modeling', 'Custom Dashboards'],
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const benefits = [
    '24/7 Expert Support',
    'Proven Track Record',
    'Scalable Solutions',
    'Cost-Effective Pricing',
    'Easy Integration',
    'Advanced Security'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our operations with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding service and support. Their cloud infrastructure solution scaled perfectly with our growth.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'The cybersecurity solutions provided by Zion Tech Group gave us peace of mind and robust protection.',
      rating: 5
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-slate-900 animate-spin" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
          <p className="text-gray-300">Please wait while we load the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      {/* Content Promotion Banner */}
      <ContentPromotionBanner />
      
      <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
        {/* Hero Section */}
        <section 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h1 
              id="hero-heading" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Advanced AI and IT Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Content Showcase */}
        <DynamicContentShowcase />

        {/* Statistics Section */}
        <ContentStatistics />

        {/* Content Carousel */}
        <ContentCarousel />

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
              Get started today and see the difference we can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;