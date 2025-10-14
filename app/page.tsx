'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from './components/SEO';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
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
        url="/"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Floating Elements with Neon Effects */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-15 floating" style={{animationDelay: '3s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Empowering businesses through innovative AI and IT solutions that drive digital transformation and accelerate growth.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              From cutting-edge AI implementations to robust cybersecurity solutions, we help organizations 
              leverage technology to achieve unprecedented success in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                <CpuChipIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Harness the power of artificial intelligence with our custom machine learning models, 
                natural language processing, and intelligent automation solutions.
              </p>
              <Link to="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Protect your digital assets with our comprehensive security solutions, 
                including threat detection, vulnerability assessments, and compliance management.
              </p>
              <Link to="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Cloud Infrastructure */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CloudIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scale your operations with our cloud migration, infrastructure management, 
                and DevOps solutions designed for modern businesses.
              </p>
              <Link to="/cloud-solutions" className="text-green-400 hover:text-green-300 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
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
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
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
      </div>
    </>
  );
}