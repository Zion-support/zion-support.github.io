<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Zap, Globe, Lock } from 'lucide-react';
=======
'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-029f
import SEOOptimizer from './components/SEOOptimizer';
<<<<<<< HEAD
=======
'use client;
=======
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";
import StructuredData from "./components/StructuredData";
import FuturisticBackground from "./components/FuturisticBackground";
import FuturisticCard from "./components/FuturisticCard";
// import FuturisticButton from "./components/FuturisticButton";
import FuturisticText from "./components/FuturisticText";
import ResponsiveContainer from "./components/ResponsiveContainer";
import ResponsiveGrid from "./components/ResponsiveGrid";
import ResponsiveText from "./components/ResponsiveText";
import LazyImage from "./components/LazyImage";
import EnhancedLoadingSpinner from "./components/EnhancedLoadingSpinner";
import EnhancedAccessibility from "./components/EnhancedAccessibility";
import PerformanceOptimizer from "./components/PerformanceOptimizer";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680

<<<<<<< HEAD
import React, { useState, useEffect, Suspense, memo } from 'react;

import { Navigation } from './components/Navigation;

import { Footer } from './components/Footer;

import { ContentPromotionBanner } from './components/ContentPromotionBanner;

// Loading skeleton component
const ServiceCardSkeleton: React.FC = memo(() => (

  <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" role="status" aria-label="Loading service card>
    <div className="h-4 bg-gray-300 rounded mb-4></div>
    <div className="h-3 bg-gray-300 rounded mb-2></div>
    <div className="h-3 bg-gray-300 rounded></div>
))
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton;

const HomePage: React.FC = () => {}
=======
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import Analytics from './components/Analytics';
import SecurityEnhancer from './components/SecurityEnhancer';

// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'));
const ContentCarousel = lazy(() => import('./components/ContentCarousel'));
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'));
const ContentStatistics = lazy(() => import('./components/ContentStatistics'));
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'));

// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner');
      import('./components/ContentCarousel');
    }, 100);
  }
};

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
  const [isLoaded, setIsLoaded] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3

  useEffect(() => {
=======
  
  useEffect(() => {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    setIsLoaded(true);

    const timer = setTimeout(() => setIsVisible(true), 100);;

    return () => clearTimeout(timer);

  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
  const handlePhoneClick = () => {;;

    // Analytics tracking
    if (typeof window !== 'undefined && window.gtag) {
      window.gtag('event', 'phone_click, {
        event_category: 'engagement,
        event_label: header_phone
=======
  const handlePhoneClick = () => {}
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {}
      window.gtag('event', 'phone_click', {}
        event_category: 'engagement',
        event_label: 'header_phone'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
=======
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Phone Number Click',
        value: 1
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
      });
>>>>>>> origin/cursor/ad-creation-and-management-f267

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zion Tech Group",
    "description": "Leading provider of AI solutions, cloud infrastructure, and IT services. Transform your business with cutting-edge technology.",
    "url": "https://ziontechgroup.com",
    "logo": "https://ziontechgroup.com/images/logo.png",
    "sameAs": [
      "https://twitter.com/ziontechgroup",
      "https://linkedin.com/company/zion-tech-group"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    },
    "offers": {
      "@type": "Offer",
      "name": "AI and IT Solutions",
      "description": "Comprehensive AI solutions, cloud infrastructure, and IT services for modern businesses",
      "category": "Technology Services"
    }
<<<<<<< HEAD
  };

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, Search } from 'lucide-react';
=======
'use client'
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
import React from 'react'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
=======
import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
<<<<<<< HEAD
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
=======
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ]

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
<<<<<<< HEAD
      benefits: ['AI Content Generation - $500/month', 'AI Chatbots - $300/month', 'Process Automation - $800/month', 'AI Analytics - $400/month'],
=======
      benefits: ['AI Content Generation - $500/month', 'AI Chatbots - $300/month', 'AI Automation - $800/month', 'AI Analytics - $400/month'],
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
      link: '/ai-services'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-500" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration - $1,200/month', 'Infrastructure Setup - $3,000', 'Security Solutions - $800/month', 'Cost Optimization - $500/month'],
      link: '/cloud-services'
    },
    {
      icon: <Database className="w-8 h-8 text-red-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      benefits: ['Ultra-Fast Speeds - 10+ Gbps', 'Low Latency - 1ms', 'IoT Integration - 1M+ devices/km²', 'Edge Computing Solutions'],
      link: '/5g-implementation'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation - $2,000/month', 'Digital Workforce - $1,500/month', 'Customer Experience - $1,800/month', 'Data Strategy - $2,500/month'],
      link: '/digital-transformation'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ]
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b

const HomePage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
        structuredData={structuredData}
      />
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
=======

    <>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Navigation */}

        <Navigation />
        
        {/* Skip to main content for accessibility */}

        <a
          href="#main-content
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50
        >
          Skip to main content
        </a>
        
        {/* Content Promotion Banner */}
=======
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section 
            className="relative py-20 px-4 text-center overflow-hidden"
            aria-labelledby="hero-heading"
          >
            <div className="max-w-7xl mx-auto">
              <h1 
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Zion Tech Group
              </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
              Advanced AI and IT Solutions
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200">
                View Our Services
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Proven Results</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Delivering $50M+ annual savings, 95% process automation, and 300% ROI for enterprise clients</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Enterprise Security</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Bank-level security and compliance for your critical data and infrastructure</p>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Rapid Deployment</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Get your AI solutions up and running in weeks, not months</p>
              </div>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e

        <Suspense fallback={<div>Loading...</div>}>
          <ContentPromotionBanner />
        </Suspense>
        
        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main>
          {/* Hero Section */}

          <section
<<<<<<< HEAD
            className={text-center mb-16 transition-all duration-1000 ${
=======
            className={`text-center mb-16 transition-all duration-1000 ${}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0 
                : opacity-0 translate-y-8
            }}

            aria-labelledby="hero-heading
          >
            <div className="max-w-6xl mx-auto>
              <h1 
                id="hero-heading 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6
              >
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium" role="doc-subtitle>
                Advanced AI and IT Solutions
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed>
                Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services.
                Transform your business with our cutting-edge technology and achieve unprecedented growth.
              </p>
=======
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions for businesses worldwide. Transform your operations with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, artificial intelligence, technology consulting, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Advanced AI & IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence and innovative technology solutions. 
              We help companies worldwide achieve digital transformation and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
            </div>
=======
  }, []);

  const handleEmailClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'email_click', {
        event_category: 'Contact',
        event_label: 'Email Click',
        value: 1
      });
    }
  }, []);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <PerformanceOptimizer />
      <SEOOptimizer />
      <AccessibilityEnhancer />
      <Analytics />
      <SecurityEnhancer />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section 
          className={`relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
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
              </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion Tech Group - Advanced AI & IT Solutions | Transform Your Business"
        description="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation. Expert technology consulting for modern businesses. Get started today!"
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, business automation, technology consulting, micro SAAS, 5G technology, IT services, machine learning"
        canonical="https://ziontechgroup.com"
      />
      <FuturisticBackground />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
                <a 
                  href="tel:+1-302-464-0950" 
                  onClick={handlePhoneClick}
                  className="flex items-center justify-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (302) 464-0950</span>
                </a>
                <a 
                  href="mailto:info@ziontechgroup.com" 
                  onClick={handleEmailClick}
                  className="flex items-center justify-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </a>
                <div className="flex items-center justify-center space-x-2 text-cyan-300">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
          </div>
        </section>

        {/* Services Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Core Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300">Advanced artificial intelligence solutions for enterprise automation and optimization.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300">Scalable cloud solutions and infrastructure management for modern businesses.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300">Comprehensive security solutions to protect your digital assets and data.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
                <p className="text-gray-300">Complete digital transformation strategies to modernize your business processes.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantum Computing</h3>
                <p className="text-gray-300">Next-generation quantum computing solutions for complex problem solving.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Systems</h3>
                <p className="text-gray-300">Self-managing systems and intelligent automation for operational efficiency.</p>
=======
        <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Services */}
              <div className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.
                </p>
                <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More →
                </a>
              </div>

              {/* IT Services */}
              <div className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300 mb-6">
                  Complete IT infrastructure, cybersecurity, cloud solutions, and technical support for your business.
                </p>
                <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More →
                </a>
              </div>

              {/* Micro SAAS */}
              <div className="cyber-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS</h3>
                <p className="text-gray-300 mb-6">
                  Powerful, affordable software tools designed to streamline your business operations and boost productivity.
                </p>
                <a href="/micro-saas" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Cutting-edge technology and forward-thinking solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expertise</h3>
                <p className="text-gray-300">Deep technical knowledge and industry experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
                <p className="text-gray-300">Optimized solutions for maximum efficiency and speed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance standards</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* Statistics Section */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentStatistics />
        </Suspense>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e

        <section className="mb-16" aria-labelledby="services-heading></section>
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text></h2>
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4></p>
            Comprehensive AI and IT solutions designed to transform your business operations
>>>>>>> origin/cursor/ad-creation-and-management-f267
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

<<<<<<< HEAD
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
=======
        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our experts to discuss your AI and technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-900 transition-colors">
                Schedule a Demo
              </button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white mb-2">+1 302 464 0950</div>
                <div className="text-gray-300">Phone Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Available Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
=======

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how our AI and IT solutions can accelerate your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a 
                href="tel:+1-302-464-0950" 
                onClick={handlePhoneClick}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Call Now: (302) 464-0950
              </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
          <ContentNewsletterSignup />
        </Suspense>
      </main>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-084e

        {/* Call to Action Section */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">
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
=======
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackground>
          <EnhancedSEO
            title="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company"
            description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
            keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
            canonical="https://ziontechgroup.com"
            structuredData={structuredData}
          />
          
          <StructuredData type="Organization" data={structuredData} />
          
          <StructuredData 
            type="WebSite" 
            data={{
              name: "Zion Tech Group",
              url: "https://ziontechgroup.com",
              potentialAction: {
                "@type": "SearchAction",
                "target": "https://ziontechgroup.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }} 
          />

      {/* Main Content */}
      <main id="main-content" role="main" aria-label="Main content">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">#1 Technology Solutions Provider 2024</span>
          </div>
          
          <FuturisticText
            variant="display"
            size="6xl"
            gradient={true}
            animated={true}
            glow={true}
            neon={true}
            className="mb-6 leading-tight"
          >
            Welcome to Zion Tech Group
          </FuturisticText>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
<<<<<<< HEAD
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
=======
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ai-services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Explore AI Solutions
              <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-09ab
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
              <FuturisticCard
                key={index}
                glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                hoverEffect={true}
                animated={true}
                neon={true}
                className="cursor-pointer"
              >
                <Link
                  to={feature.link}
                  className="block"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {feature.stats}
                    </span>
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Micro SAAS Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions that can transform your business operations immediately.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasHighlights.map((saas, index) => (
              <FuturisticCard
                key={index}
                glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                hoverEffect={true}
                animated={true}
                neon={true}
                className="relative overflow-hidden"
              >
                <Link
                  to={saas.link}
                  className="block"
                >
                  {saas.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {saas.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {saas.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">{saas.price}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {saas.description}
                  </p>
                  <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/micro-saas"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 group"
            >
              View All Micro SAAS Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======

=======
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to accelerate your business growth and innovation.
=======
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, cloud computing, and digital transformation for modern businesses. Expert technology consulting and implementation." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformation, artificial intelligence, machine learning, technology consulting, business automation" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
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
            ]
          })}
        </script>
        </Helmet>
        
        <Suspense fallback={<LoadingSpinner size="lg" text="Loading..." className="min-h-screen" />}>
          <Navigation />
        </Suspense>
        
        <main>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI & IT Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence, cloud computing, and digital transformation services.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>
                <p className="text-gray-300 mb-4">
                  Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                </p>
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more →
                </Link>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Cloud className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Scalable cloud solutions and infrastructure management to support your growing business needs.
                </p>
                <Link to="/cloud-services" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more →
                </Link>
              </div>
              
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security solutions to protect your data and systems from evolving threats.
                </p>
                <Link to="/security" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </>
=======

      <Footer />
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
  );
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
};

<<<<<<< HEAD
export default HomePage;
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Cpu, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of enterprise AI solutions, quantum computing, autonomous systems, 
              and digital transformation services. Achieve 300% ROI with our cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses." />
        <meta name="keywords" content="AI solutions, IT services, cloud computing, digital transformation, 5G implementation, micro SaaS" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>
      
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI & IT Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/about" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
          </div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          
<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
            {features.map((feature, index) => (
              <a key={index} href={feature.link} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI and IT solutions today and see the difference we can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
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
=======
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI and IT solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
=======
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
<<<<<<< HEAD
                  Our Services
=======
                  View Our Services
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0aab
                </Link>
              </div>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-033b
          </div>
        </div>
      </section>
    </div>
=======
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              glowColor="cyan"
              neon={true}
              animated={true}
            >
              Start Your Journey
            </FuturisticButton>
            <FuturisticButton
              href="/services"
              variant="outline"
              size="lg"
              icon={Sparkles}
              iconPosition="right"
              glowColor="purple"
              neon={true}
              animated={true}
            >
              Explore Services
            </FuturisticButton>
          </div>
        </div>
      </section>
      </main>
      </FuturisticBackground>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0680
  );
};

export default HomePage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
        </main>
        
        <Suspense fallback={<LoadingSpinner size="md" text="Loading footer..." />}>
          <Footer />
        </Suspense>
        
        <PerformanceMonitor enabled={true} />
        <AccessibilityEnhancer />
      </div>
    </ErrorBoundary>
  )
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0440
=======
export default HomePage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-08e3
