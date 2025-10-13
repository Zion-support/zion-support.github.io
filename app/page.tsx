<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import React, { useState, useEffect, Suspense, memo } from 'react;
=======
=======
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37

import { Navigation } from './components/Navigation;

import { Footer } from './components/Footer;

import { ContentPromotionBanner } from './components/ContentPromotionBanner;

// Preload critical components
if (typeof window !== 'undefined') {
  import('./components/ContentPromotionBanner');
  import('./components/ContentCarousel');
}

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (

  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card>
    <div className="h-4 bg-gray-300 rounded mb-4></div>
    <div className="h-3 bg-gray-300 rounded mb-2></div>
    <div className="h-3 bg-gray-300 rounded></div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton;

const HomePage: React.FC = () => {}

<<<<<<< HEAD
    const timer = setTimeout(() => setIsVisible(true), 100);;
=======
  useEffect(() => {
    // Use requestAnimationFrame for better performance
    const rafId = requestAnimationFrame(() => {
      setIsLoaded(true);
      // Trigger visibility animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    });
    
    return () => cancelAnimationFrame(rafId);
  }, []);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f74

  const handlePhoneClick = () => {;;

    // Analytics tracking
    if (typeof window !== 'undefined && window.gtag) {
      window.gtag('event', 'phone_click, {
        event_category: 'engagement,
        event_label: header_phone
  };

import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
      benefits: ['AI Content Generation - $500/month', 'AI Chatbots - $300/month', 'Process Automation - $800/month', 'AI Analytics - $400/month'],
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import { Brain, Shield, Zap, Globe, ArrowRight, CheckCircle, Star, Users, Award } from "lucide-react";
import ImageOptimizer from "./components/ImageOptimizer";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description:
        "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/5g-solutions"
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Star className="w-6 h-6" /> },
  ];

  const benefits = [
    "Advanced AI and Machine Learning Solutions",
    "Enterprise-grade Security and Compliance",
    "Scalable Cloud Infrastructure",
    "24/7 Technical Support",
    "Custom Development Services",
    "5G Implementation and Optimization"
  ];

  return (
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology."
        keywords={[
          'AI solutions',
          'artificial intelligence',
          'cloud infrastructure',
          'IT services',
          'machine learning',
          'cybersecurity',
          '5G solutions',
          'business automation',
          'digital transformation',
          'enterprise solutions'
        ]}
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/images/og-image.jpg"
=======
import { ArrowRight, Star, Brain, Zap, Globe } from "lucide-react";
=======
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
import EnhancedSEO from "./components/EnhancedSEO";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/logo.svg",
    "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
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
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/ziontechgroup"
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "AI Solutions",
        "description": "Artificial intelligence and machine learning services"
      },
      {
        "@type": "Offer", 
        "name": "Cybersecurity",
        "description": "Advanced cybersecurity solutions and protection"
      },
      {
        "@type": "Offer",
        "name": "Cloud Infrastructure",
        "description": "Scalable cloud computing solutions"
      },
      {
        "@type": "Offer",
        "name": "Micro SAAS",
        "description": "Ready-to-use software solutions for businesses"
      }
    ]
  };

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Advanced artificial intelligence and machine learning services",
      link: "/ai-services",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions and threat protection",
      link: "/cybersecurity",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud computing and infrastructure solutions",
      link: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for modern businesses",
      link: "/micro-saas",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "5G Solutions",
      description: "Next-generation 5G network and IoT solutions",
      link: "/5g-solutions",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "IT Services",
      description: "Comprehensive IT consulting and system integration",
      link: "/services",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Enterprises",
      role: "CTO",
      content: "Outstanding cybersecurity implementation. Our data has never been more secure.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding support and cutting-edge technology. Zion Tech Group is our trusted partner for all digital transformation needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company"
        description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
        keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
        canonical="https://ziontechgroup.com"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
        structuredData={structuredData}
      />
<<<<<<< HEAD
      
<<<<<<< HEAD
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
=======
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enablePreloading={true}
        enableCodeSplitting={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg-enhanced matrix-rain-enhanced futuristic-bg-enhanced quantum-particles neural-connections">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
        {/* Navigation */}
=======
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-primary touch-target mobile-optimized flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              aria-label="Get started with Zion Tech Group services"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              to="/demo"
              className="btn-secondary touch-target mobile-optimized group hover:scale-105"
              aria-label="Watch a demo of our services"
            >
              Watch Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" aria-hidden="true" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f9e

<<<<<<< HEAD
        <Navigation />
        
        {/* Skip to main content for accessibility */}

        <a
          href="#main-content
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50
        >
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
<<<<<<< HEAD
            className={text-center mb-16 transition-all duration-1000 ${
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />
      
      <Navigation />
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
=======
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24 quantum-energy-field" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line holographic-card-enhanced quantum-pulse-enhanced ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch"
                data-text="Zion Tech Group"
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect" role="doc-subtitle">
                Advanced AI and IT Solutions
              </p>
              <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI technology, quantum computing solutions, 
                and comprehensive IT services. We deliver innovation that drives real results.
              </p>
<<<<<<< HEAD
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get Started Today
                </a>
                <a 
                  href="/case-studies" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Our Work
                </a>
=======
      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
                <div className="mt-4 flex items-center justify-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. We deliver results that matter.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
              </div>
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text"
          >
            Zion Tech Group
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle">
        {/* Services Section */}

<<<<<<< HEAD
=======
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
        {/* Navigation */}
        <Navigation />
      
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <main className="relative z-10">
        {/* Hero Section */}
        <section 
          className="relative py-20 px-4 text-center overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h1 
              id="hero-heading" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text"
            >
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
              Transform your business with our cutting-edge technology and achieve unprecedented growth.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button w-full sm:w-auto text-center"
                aria-label="Call us at (302) 464-0950"
              >
                Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        {/* Services Section */}
        <section className="mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          
          {/* Primary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">Starting at $1,500/month</div>
                  <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">📢</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Marketing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered marketing automation, ad optimization, and content generation.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2 neon-text">Starting at $199/month</div>
                  <a href="/ai-marketing" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">⚙️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Automation</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Intelligent automation of business processes with decision-making capabilities and exception handling.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2 neon-text">Starting at $399/month</div>
                  <a href="/ai-automation" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-all duration-300 hover:neon-glow">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Secondary Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🏥</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Healthcare</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">Starting at $1,999/month</div>
                  <a href="/ai-healthcare" className="text-green-400 hover:text-green-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💰</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Fintech</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered financial services including trading, fraud detection, and risk management.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-indigo-400 mb-2">Starting at $1,499/month</div>
                  <a href="/ai-fintech" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚛️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Quantum Computing</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Next-generation quantum computing capabilities for complex problem solving and optimization.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">Custom Pricing</div>
                  <a href="/quantum-computing" className="text-purple-400 hover:text-purple-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Micro SAAS Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">💻</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">Micro SAAS Solutions</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">Starting at $79/month</div>
                  <a href="/micro-saas" className="text-orange-400 hover:text-orange-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">✍️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">AI Content Generation</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Revolutionary AI-powered content creation for blogs, social media, emails, and marketing materials.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-pink-400 mb-2">Starting at $199/month</div>
                  <a href="/ai-content-generation" className="text-pink-400 hover:text-pink-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>

            <Suspense fallback={<ServiceCardSkeleton />}>
              <article className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">☁️</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">IT Infrastructure</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 expert support.
                </p>
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">Starting at $999/month</div>
                  <a href="/it-infrastructure" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                    Learn More →
                  </a>
                </div>
              </article>
            </Suspense>
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <article className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🤖</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Harness the power of artificial intelligence to drive innovation and efficiency in
                your organization.
              </p>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                <li>• Machine Learning Models</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
              </ul>
            </article>

            <article className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔄</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Transform your business processes with cutting-edge technology and expert
                consultation.
              </p>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                <li>• Process Automation</li>
                <li>• Legacy System Modernization</li>
                <li>• Workflow Optimization</li>
                <li>• Change Management</li>
              </ul>
            </article>

            <article className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">☁️</div>
              <h3 className="text-lg sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                Scale your infrastructure with secure, reliable, and efficient cloud solutions.
              </p>
              <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                <li>• Cloud Migration</li>
                <li>• Infrastructure as Code</li>
                <li>• Auto-scaling</li>
                <li>• Disaster Recovery</li>
              </ul>
            </article>
          </div>
        </section>

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6
        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
        </Suspense>

        <section className="mb-16" aria-labelledby="services-heading></section>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text></h2>
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4></p>
            Comprehensive AI and IT solutions designed to transform your business operations
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            aria-label="Get started with Zion Tech Group services"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16" role="region" aria-label="Our Services">
          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 focus-within:ring-4 focus-within:ring-blue-300 focus-within:ring-opacity-50">
            <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white mb-2">AI Solutions</h2>
            <p className="text-gray-300">Advanced artificial intelligence and machine learning solutions</p>
          </article>
          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 focus-within:ring-4 focus-within:ring-green-300 focus-within:ring-opacity-50">
            <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white mb-2">Cybersecurity</h2>
            <p className="text-gray-300">Enterprise-grade security solutions and consulting</p>
          </article>
          <article className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 focus-within:ring-4 focus-within:ring-purple-300 focus-within:ring-opacity-50">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-white mb-2">IT Services</h2>
            <p className="text-gray-300">Comprehensive IT infrastructure and support services</p>
          </article>
        </div>

        {/* Additional Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" role="region" aria-label="Additional Features">
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group">
            <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">5G Solutions</h3>
            <p className="text-gray-300 text-sm">Next-generation connectivity and edge computing</p>
          </article>
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group">
            <Globe className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Cloud Infrastructure</h3>
            <p className="text-gray-300 text-sm">Scalable and secure cloud solutions</p>
          </article>
          <article className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group">
            <Lock className="w-10 h-10 text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Data Protection</h3>
            <p className="text-gray-300 text-sm">Advanced data encryption and privacy solutions</p>
          </article>
        </div>

        {/* Call to Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageOptimizer
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team working on technology solutions"
                className="rounded-xl shadow-2xl"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ed4
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust Zion Tech Group for their technology needs. 
            Let's build the future together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:ring-opacity-50"
            >
              View Demo
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={Sparkles}
              iconPosition="left"
              glowColor="cyan"
              neon={true}
              animated={true}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={Monitor}
              iconPosition="left"
              glowColor="purple"
              neon={true}
              animated={true}
            >
              Watch Demo
            </FuturisticButton>
<<<<<<< HEAD
=======
              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12 px-4">
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI-Powered Solutions</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Transform your business with cutting-edge artificial intelligence, machine learning, and automation technologies</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
                </div>
                <div className="cyber-card-enhanced hologram-card-enhanced p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Global Reach</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Serving clients worldwide with 24/7 support and multi-language capabilities</p>
                </div>
              </div>
              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="cyber-button-enhanced w-full sm:w-auto text-center"
                >
                  📞 Call Now: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-enhanced w-full sm:w-auto text-center"
                >
                  📧 Email Us
                </a>
                <a 
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </React.Fragment>
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0d10
}
      </div>
=======
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to enterprise security, we have everything you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
              >
                <Link
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
=======
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <FuturisticText className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Advanced Technology
                </span>
              </FuturisticText>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading provider of AI-powered solutions, IT services, micro SAAS, 
                and digital transformation for modern businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/demo"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  View Demo
                  <Sparkles className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </div>
            
            <ResponsiveGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <FuturisticCard
                  key={index}
                  as={Link}
                  to={service.link}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </FuturisticCard>
              ))}
            </ResponsiveGrid>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
          </main>
        </div>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fdb
=======
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FuturisticCard className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can accelerate your growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/demo"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  Schedule Demo
                  <Calendar className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </div>
        </section>
      </div>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  );
};

export default HomePage;
      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">300%</div>
              <div className="text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Services */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Services</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence solutions including machine learning, 
                natural language processing, and computer vision.
              </p>
              <Link
                to="/ai-services"
                className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
              <p className="text-gray-300 mb-6">
                Complete IT infrastructure solutions including cloud migration, 
                cybersecurity, and system integration.
              </p>
              <Link
                to="/it-services"
                className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Micro SaaS */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Ready-to-use software solutions for specific business needs, 
                from analytics dashboards to automation tools.
              </p>
              <Link
                to="/micro-saas"
                className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-cyan-400">Zion Tech Group</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional results through cutting-edge technology and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">300% average ROI across all projects</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Quality Assurance</h3>
              <p className="text-gray-300">Rigorous testing and quality control processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and maintenance</p>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI and IT solutions today and see the difference we can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                  Our Services
export default HomePage;
