'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, DollarSign as Dollar, Award as Trophy, Rocket as Launch, Layers as Stack, Workflow as Process, BarChart3 as Analytics, MessageSquare as Chat, Headphones as Support, Monitor as Screen, HardDrive as Storage, Wifi as Network, Printer as Print, Router as Gateway, Package as Box, Eye, Mic } from 'lucide-react';

// Loading component for lazy-loaded sections
const SectionLoader = memo(() => (
  <div className="animate-pulse">
    <div className="h-64 bg-white/10 rounded-2xl"></div>
  </div>
));

SectionLoader.displayName = 'SectionLoader';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Performance optimization: Preload critical resources
  useEffect(() => {
    const preloadResources = async () => {
      try {
        // Preload critical images and fonts
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = '/fonts/inter-var.woff2';
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      } catch (error) {
        console.warn('Failed to preload resources:', error);
      }
    };

    preloadResources();
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
            <Brain className="w-8 h-8 text-slate-900" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Loading Zion Tech Group...</h2>
          <p className="text-gray-400">Preparing your digital transformation experience</p>
        </div>
      </div>
    );
  }

  return (
    <PerformanceOptimizer>
      <SEOOptimizer
        title="Zion Tech Group - AI & IT Solutions | Digital Transformation Experts"
        description="Leading provider of AI and IT solutions for modern businesses. Transform your operations with cutting-edge technology, AI automation, cloud infrastructure, and cybersecurity services."
        keywords={['AI solutions', 'IT services', 'digital transformation', 'cloud computing', 'cybersecurity', 'automation', 'machine learning', 'business intelligence']}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="/og-image.jpg"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading provider of AI and IT solutions for modern businesses",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com"
          },
          "sameAs": [
            "https://linkedin.com/company/ziontechgroup",
            "https://twitter.com/ziontechgroup"
          ]
        }}
      >
        <AccessibilityEnhancer>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Navigation />
            
            <main id="main-content" className="relative">
              {/* Hero Section */}
              <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI-Powered Digital Transformation
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      Transform Your Business with{' '}
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Advanced AI & IT Solutions
                      </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                      Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
                      and digital transformation services. Transform your business with cutting-edge technology.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                      href="/contact"
                      className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center"
                    >
                      <span>Start Your Transformation</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="/services"
                      className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <span>Explore Our Services</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                      <div className="text-gray-400 text-sm">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                      <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                      <div className="text-gray-400 text-sm">Support Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
                      <div className="text-gray-400 text-sm">AI Solutions</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Services Preview */}
              <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Our <span className="text-cyan-400">Services</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Comprehensive AI and IT solutions designed to accelerate your digital transformation and drive business growth.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* AI Services */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-cyan-500/20 group">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">AI Solutions</h3>
                      </div>
                      <p className="text-gray-300 mb-6">Advanced artificial intelligence solutions for business automation and optimization.</p>
                      <ul className="space-y-2 mb-6">
                        {['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'].map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>

                    {/* IT Services */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-cyan-500/20 group">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">IT Services</h3>
                      </div>
                      <p className="text-gray-300 mb-6">Scalable and secure cloud solutions for modern businesses.</p>
                      <ul className="space-y-2 mb-6">
                        {['Cloud Infrastructure', 'Cybersecurity', 'Web Development', 'Mobile Apps'].map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>

                    {/* Micro SAAS */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-cyan-500/20 group">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Micro SAAS</h3>
                      </div>
                      <p className="text-gray-300 mb-6">Powerful, affordable micro SAAS tools designed to streamline your business operations.</p>
                      <ul className="space-y-2 mb-6">
                        {['Business Intelligence', 'AI Chatbots', 'Security Monitoring', 'Content Creation'].map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                      Ready to Get <span className="text-cyan-400">Started?</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                      Let's discuss how our AI and IT solutions can transform your business and drive growth.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                      <p className="text-gray-300 mb-4">Speak with our experts</p>
                      <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                        +1 302 464 0950
                      </a>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                      <p className="text-gray-300 mb-4">Send us a message</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                      <p className="text-gray-300 mb-4">Our headquarters</p>
                      <span className="text-cyan-400 font-medium">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <span>Get Free Consultation</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </div>
                </div>
              </section>
            </main>
            
            <Footer />
          </div>
        </AccessibilityEnhancer>
      </SEOOptimizer>
    </PerformanceOptimizer>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;