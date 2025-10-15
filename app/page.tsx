'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from './components/SEOHead';
import { getFeaturedServices } from './data/services';
import { CpuChipIcon, ShieldCheckIcon, CloudIcon, RocketLaunchIcon, CheckCircleIcon, ArrowRightIcon, SparklesIcon, UserGroupIcon, CodeBracketIcon, CurrencyDollarIcon, ClockIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [, setCurrentService] = useState(0);
  const featuredServices = getFeaturedServices();

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate featured services
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % featuredServices.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredServices.length]);

  const stats = [
    { label: 'Active Services', value: '50+', icon: RocketLaunchIcon },
    { label: 'Happy Clients', value: '1000+', icon: UserGroupIcon },
    { label: 'Projects Completed', value: '5000+', icon: CheckCircleIcon },
    { label: 'Uptime', value: '99.9%', icon: ShieldCheckIcon }
  ];

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning ',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Comprehensive cybersecurity and data protection ',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: CodeBracketIcon,
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific business needs',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI-powered solutions, cloud infrastructure, and enterprise IT . Transform your business with cutting-edge technology."
        keywords="AI solutions, cloud infrastructure, IT artificial intelligence, machine learning, cybersecurity, software development"
      />
      
      {/* Enhanced Animated Background */}
      <div className="futuristic-bg"></div>
      <div className="cyber-grid-enhanced"></div>
      <div className="quantum-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="quantum-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${20 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="scan-lines"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-glitch" data-text="ZION TECH GROUP">
              ZION TECH GROUP
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 matrix-text">
              Advanced AI & IT Solutions for the Modern World
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence, cloud infrastructure, 
              and enterprise-grade IT solutions. We help companies innovate, scale, and succeed in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                to="/" 
                className="btn-neon hover-glow focus-neon px-8 py-4 text-lg font-semibold"
              >
                Explore Services
                <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/contact" 
                className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
              >
                Get Started
                <SparklesIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`glass-card p-6 text-center hover-lift transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3 icon-bounce" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our most popular AI and IT solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service: any, index: number) => (
              <div 
                key={service.id}
                className={`glass-card p-8 card-hover transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} p-4 mb-6 icon-bounce`}>
                  <CpuChipIcon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-cyan-400">
                    <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                    <span className="text-2xl font-bold">${service.pricing.basic}</span>
                    <span className="text-sm ml-1">/month</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    <span className="text-sm">Active</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.slice(0, 3).map((feature: any, featureIndex: number) => (
                    <span 
                      key={featureIndex}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full border border-cyan-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link 
                    to={service.route}
                    className="flex-1 btn-neon text-center py-3 text-sm font-semibold"
                  >
                    Learn More
                  </Link>
                  <Link 
                    to={service.demoUrl || '#'}
                    className="px-4 py-3 glass-card text-cyan-400 hover:text-white transition-colors border border-cyan-400/30"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/"
              className="btn-neon hover-glow px-8 py-4 text-lg font-semibold"
            >
              View All Services
              <ArrowRightIcon className="ml-2 h-5 w-5 inline" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`glass-card p-8 text-center hover-lift transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.gradient} p-6 mx-auto mb-6 icon-bounce`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 holographic-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of companies already using our AI and IT solutions to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="btn-neon hover-glow focus-neon px-8 py-4 text-lg font-semibold"
              >
                Start Your Project
                <RocketLaunchIcon className="ml-2 h-5 w-5 inline" />
              </Link>
              <Link 
                to="/pricing" 
                className="glass-card hover-lift px-8 py-4 text-lg font-semibold text-cyan-400 border-cyan-400/30"
              >
                View Pricing
                <CurrencyDollarIcon className="ml-2 h-5 w-5 inline" />
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;