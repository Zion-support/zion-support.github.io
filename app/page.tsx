'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Zion Tech Group - Advanced AI and IT Solutions",
    "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide.",
    "url": "https://ziontechgroup.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo192.png",
      "description": "Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-0123",
        "contactType": "customer service",
        "email": "info@ziontechgroup.com"
      },
      "sameAs": [
        "https://linkedin.com/company/ziontechgroup",
        "https://twitter.com/ziontechgroup",
        "https://github.com/ziontechgroup"
      ]
    }
  };

  const features = [
    '24/7 Expert Support',
    'Cutting-edge Technology',
    'Scalable Solutions',
    'Industry Expertise',
    'Proven Results',
    'Custom Implementation'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"
        url="/" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden particles matrix-rain">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid bg-circuit"></div>
        </div>
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating energy-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating energy-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating energy-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating energy-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Holographic Elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-400 rounded-full neon-flicker"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full neon-flicker" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-pink-400 rounded-full neon-flicker" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text text-neon-cyan hologram">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-neon-purple">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group btn-cyber hover-cyber flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass hover-matrix"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 particles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="group card-cyber hover-cyber">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating energy-pulse">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-neon-purple">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link to="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="group card-cyber hover-cyber">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform energy-pulse">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-neon-cyan">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link to="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group card-cyber hover-cyber">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform energy-pulse">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-neon-pink">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions and infrastructure management to optimize 
                performance and reduce operational costs.
              </p>
              <Link to="/cloud-solutions" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="group card-cyber hover-cyber">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform energy-pulse">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-neon-purple">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Strategic digital transformation services to modernize your business 
                processes and enhance customer experiences.
              </p>
              <Link to="/digital-transformation" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="group card-cyber hover-cyber">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform energy-pulse">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-neon-pink">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Custom micro SaaS solutions designed to solve specific business 
                challenges with scalable, cost-effective applications.
              </p>
              <Link to="/micro-saas" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* 5G Solutions */}
            <div className="group card-cyber hover-cyber">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform energy-pulse">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-neon-cyan">5G Solutions</h3>
              <p className="text-gray-300 mb-6">
                Next-generation 5G technology solutions for enhanced connectivity, 
                IoT applications, and ultra-low latency services.
              </p>
              <Link to="/5g-solutions" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions, 
              we've helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can accelerate your growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
