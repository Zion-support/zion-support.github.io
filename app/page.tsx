'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ArrowRightIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';



const HomePage: React.FC = () => {
  

  

  

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, technology consulting, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relativeoverflow-hidden">
        {/* Animated Background */}
        <div className="absoluteinset-0 opacity-20">
          <div className="w-fullh-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Matrix Rain Effect */}
        <div className="matrix-rain"></div>
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolutetop-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating cyber-glow"></div>
        <div className="absolutebottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating cyber-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolutetop-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating cyber-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolutetop-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating cyber-glow" style={{animationDelay: '3s'}}></div>
        
        {/* Cyber Grid Overlay */}
        <div className="absoluteinset-0 cyber-grid opacity-10"></div>
        
        {/* Data Streams */}
        <div className="absolutetop-1/3 left-0 w-full h-1 data-stream"></div>
        <div className="absolutetop-2/3 left-0 w-full h-1 data-stream" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relativez-10 container mx-auto px-4 text-center">
          <div className="max-w-4xlmx-auto">
            <h1 className="text-6xlmd:text-7xl font-bold mb-6 gradient-text neon-text">
              Zion Tech Group
            </h1>
            <p className="text-xlmd:text-2xl text-gray-300 mb-8 leading-relaxed">
              Advanced AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lgtext-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions, 
              cloud infrastructure, and digital transformation services to drive innovation and growth.
            </p>
            
            <div className="flexflex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="groupbg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect">
                Get Started Today
                <ArrowRightIcon className="w-5h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="groupborder-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass">
                Explore Services
                <ArrowRightIcon className="w-5h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20bg-slate-900 particles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow">
              <div className="w-16h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating cyber-glow">
                <CpuChipIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">AI Solutions</h3>
              <p className="text-gray-300mb-6">
                Advanced artificial intelligence services including machine learning, 
                natural language processing, and predictive analytics.
              </p>
              <Link to="/ai-solutions" className="text-purple-400hover:text-purple-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <ShieldCheckIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Cybersecurity</h3>
              <p className="text-gray-300mb-6">
                Comprehensive security solutions to protect your digital assets, 
                data, and infrastructure from evolving threats.
              </p>
              <Link to="/cybersecurity" className="text-cyan-400hover:text-cyan-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <CloudIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Cloud Infrastructure</h3>
              <p className="text-gray-300mb-6">
                Scalable cloud solutions and infrastructure management to optimize 
                performance and reduce operational costs.
              </p>
              <Link to="/cloud-solutions" className="text-green-400hover:text-green-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Digital Transformation */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <ChartBarIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Digital Transformation</h3>
              <p className="text-gray-300mb-6">
                Strategic digital transformation services to modernize your business 
                processes and enhance customer experiences.
              </p>
              <Link to="/digital-transformation" className="text-yellow-400hover:text-yellow-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <GlobeAltIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">Micro SaaS</h3>
              <p className="text-gray-300mb-6">
                Custom micro SaaS solutions designed to solve specific business 
                challenges with scalable, cost-effective applications.
              </p>
              <Link to="/micro-saas" className="text-pink-400hover:text-pink-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>

            {/* 5G Solutions */}
            <div className="groupneon-card p-8 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform cyber-glow">
                <GlobeAltIcon className="w-8h-8 text-white" />
              </div>
              <h3 className="text-2xlfont-bold text-white mb-4 holographic-text">5G Solutions</h3>
              <p className="text-gray-300mb-6">
                Next-generation 5G technology solutions for enhanced connectivity, 
                IoT applications, and ultra-low latency services.
              </p>
              <Link to="/5g-solutions" className="text-indigo-400hover:text-indigo-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all glow-effect">
                Learn More <ArrowRightIcon className="w-4h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xlmx-auto text-center">
            <h2 className="text-4xlmd:text-5xl font-bold text-white mb-8">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions, 
              we&apos;ve helped businesses across various industries transform their operations 
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
      </div>
    
  );
};

export default HomePage;
