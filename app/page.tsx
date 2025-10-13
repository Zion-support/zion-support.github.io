'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions"
        url="/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden cyber-grid">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-orange rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-neon-green to-neon-cyan rounded-full opacity-15 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-neon-yellow to-neon-orange rounded-full opacity-25 animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-in-up" style={{animationDelay: '0.4s'}}>
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-up" style={{animationDelay: '0.6s'}}>
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 neon-border"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group glass-morphism border-2 border-neon-purple text-neon-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-purple hover:text-white transition-all duration-300 hover-lift flex items-center gap-2"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text animate-fade-in">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="group glass-morphism p-8 rounded-xl border border-glass-border hover:border-neon-purple transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-pink rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link to="/ai-solutions" className="text-neon-purple hover:text-neon-pink font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover-glow">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="group glass-morphism p-8 rounded-xl border border-glass-border hover:border-neon-cyan transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link to="/cybersecurity" className="text-neon-cyan hover:text-neon-blue font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover-glow">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group glass-morphism p-8 rounded-xl border border-glass-border hover:border-neon-green transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-neon-cyan rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions and infrastructure management to optimize 
                performance and reduce operational costs.
              </p>
              <Link to="/cloud-solutions" className="text-neon-green hover:text-neon-cyan font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover-glow">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="group glass-morphism p-8 rounded-xl border border-glass-border hover:border-neon-orange transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-orange to-neon-yellow rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Strategic digital transformation services to modernize your business 
                processes and enhance customer experiences.
              </p>
              <Link to="/digital-transformation" className="text-neon-orange hover:text-neon-yellow font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover-glow">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="group glass-morphism p-8 rounded-xl border border-glass-border hover:border-neon-pink transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: '0.5s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Custom micro SaaS solutions designed to solve specific business 
                challenges with scalable, cost-effective applications.
              </p>
              <Link to="/micro-saas-solutions" className="text-neon-pink hover:text-neon-purple font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover-glow">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* 5G Solutions */}
            <div className="group glass-morphism p-8 rounded-xl border border-glass-border hover:border-neon-blue transition-all duration-300 hover-lift animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform animate-pulse-glow">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">5G Solutions</h3>
              <p className="text-gray-300 mb-6">
                Next-generation 5G technology solutions for enhanced connectivity, 
                IoT applications, and ultra-low latency services.
              </p>
              <Link to="/5g-solutions" className="text-neon-blue hover:text-neon-purple font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover-glow">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-neon-purple/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text animate-fade-in">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              With over 4 years of experience in cutting-edge technology solutions, 
              we've helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center glass-morphism p-6 rounded-xl animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-bold text-neon-purple mb-2 animate-pulse-glow">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center glass-morphism p-6 rounded-xl animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="text-4xl font-bold text-neon-cyan mb-2 animate-pulse-glow">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center glass-morphism p-6 rounded-xl animate-scale-in" style={{animationDelay: '0.5s'}}>
                <div className="text-4xl font-bold text-neon-green mb-2 animate-pulse-glow">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 glass-morphism border-2 border-neon-purple text-neon-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-purple hover:text-white transition-all duration-300 hover-lift animate-slide-in-up"
              style={{animationDelay: '0.6s'}}
            >
              Learn More About Us <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 gradient-text animate-fade-in">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 animate-slide-in-up" style={{animationDelay: '0.2s'}}>
              Let's discuss how our technology solutions can drive your business forward
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300 glass-morphism p-4 rounded-xl animate-scale-in" style={{animationDelay: '0.3s'}}>
                <PhoneIcon className="w-6 h-6 text-neon-purple animate-pulse-glow" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300 glass-morphism p-4 rounded-xl animate-scale-in" style={{animationDelay: '0.4s'}}>
                <EnvelopeIcon className="w-6 h-6 text-neon-cyan animate-pulse-glow" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300 glass-morphism p-4 rounded-xl animate-scale-in" style={{animationDelay: '0.5s'}}>
                <MapPinIcon className="w-6 h-6 text-neon-green animate-pulse-glow" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up" style={{animationDelay: '0.6s'}}>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow neon-border"
              >
                Get In Touch
              </Link>
              <Link 
                to="/demo" 
                className="glass-morphism border-2 border-neon-purple text-neon-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neon-purple hover:text-white transition-all duration-300 hover-lift"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}