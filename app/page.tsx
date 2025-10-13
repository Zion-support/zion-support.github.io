import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden matrix-bg">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        
        {/* Data Streams */}
        <div className="absolute top-0 left-0 w-full h-full data-stream"></div>
        <div className="absolute top-0 left-0 w-full h-full scan-line"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 holographic-text">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed neon-text">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group futuristic-btn px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="group glass-effect border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Explore Services
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements with Futuristic Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse floating-element neon-border"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000 floating-element neon-border"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500 floating-element neon-border"></div>
        
        {/* Additional Futuristic Elements */}
        <div className="absolute top-1/4 right-20 w-12 h-12 bg-green-500 rounded-full opacity-30 animate-pulse delay-700 floating-element"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-full opacity-25 animate-pulse delay-300 floating-element"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900 hologram-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 holographic-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto neon-text">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="group glass-effect p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform neon-border">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link to="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="group glass-effect p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform neon-border">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link to="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group glass-effect p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform neon-border">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions and infrastructure management to optimize 
                performance and reduce operational costs.
              </p>
              <Link to="/cloud-solutions" className="text-green-400 hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="group glass-effect p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105 neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform neon-border">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Strategic digital transformation services to modernize your business 
                processes and enhance customer experiences.
              </p>
              <Link to="/digital-transformation" className="text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="group glass-effect p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform neon-border">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Custom micro SaaS solutions designed to solve specific business 
                challenges with scalable, cost-effective applications.
              </p>
              <Link to="/micro-saas-solutions" className="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* 5G Solutions */}
            <div className="group glass-effect p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 neon-border">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform neon-border">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">5G Solutions</h3>
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
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 hologram-effect">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 holographic-text">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed neon-text">
              With over 4 years of experience in cutting-edge technology solutions, 
              we've helped businesses across various industries transform their operations 
              and achieve unprecedented growth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center glass-effect p-6 rounded-xl neon-border">
                <div className="text-4xl font-bold text-purple-400 mb-2 neon-text">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center glass-effect p-6 rounded-xl neon-border">
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center glass-effect p-6 rounded-xl neon-border">
                <div className="text-4xl font-bold text-green-400 mb-2 neon-text">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 futuristic-btn px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Learn More About Us <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900 hologram-effect">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 holographic-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 neon-text">
              Let's discuss how our technology solutions can drive your business forward
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300 glass-effect p-4 rounded-xl neon-border">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span className="neon-text">+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300 glass-effect p-4 rounded-xl neon-border">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span className="neon-text">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300 glass-effect p-4 rounded-xl neon-border">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span className="neon-text">Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="futuristic-btn px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Get In Touch
              </Link>
              <Link 
                to="/demo" 
                className="glass-effect border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
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