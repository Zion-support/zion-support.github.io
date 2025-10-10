'use client'
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer'
import SEOOptimizer from './components/SEOOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import { ServiceCardSkeleton, StatsSkeleton } from './components/EnhancedLoadingStates'
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText } from 'lucide-react'
// Dynamically import heavy components for better performance
const ContentPromotionBanner = lazy(() => import('./components/ContentPromotionBanner'))
const ContentCarousel = lazy(() => import('./components/ContentCarousel'))
const DynamicContentShowcase = lazy(() => import('./components/DynamicContentShowcase'))
const ContentStatistics = lazy(() => import('./components/ContentStatistics'))
const ContentNewsletterSignup = lazy(() => import('./components/ContentNewsletterSignup'))
// Preload critical components
const preloadComponents = () => {
  if (typeof window !== 'undefined') {
    // Preload critical components after initial render
    setTimeout(() => {
      import('./components/ContentPromotionBanner')
      import('./components/ContentCarousel')
    }, 100)
  }
}
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
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
    // Trigger visibility animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
  // Analytics tracking for phone clicks - optimized
  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
      gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'main_phone_number'
      })
    }
  }, [])
  return (
    <React.Fragment>
      <SEOOptimizer
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology."
        keywords={['AI solutions', 'quantum computing', 'autonomous systems', 'digital transformation', 'enterprise AI', 'machine learning', 'automation', 'cloud services']}
        canonicalUrl="https://ziontechgroup.com"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'TechCompany',
          name: 'Zion Tech Group',
          url: 'https://ziontechgroup.com',
          description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.',
          foundingDate: '2020',
          numberOfEmployees: '50-100',
          industry: 'Technology',
          services: [
            'AI Solutions',
            'Quantum Computing',
            'Autonomous Systems',
            'Digital Transformation',
            'Cloud Services',
            'Cybersecurity'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-0123',
            contactType: 'customer service',
            availableLanguage: 'English'
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'US',
            addressLocality: 'San Francisco',
            addressRegion: 'CA'
          }
        }}
      />
      
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        {/* Content Promotion Banner */}
        <Suspense fallback={<div className="h-16 bg-gray-100 animate-pulse"></div>}>
          <ContentPromotionBanner />

        <main id="main-content" className="container mx-auto px-4 py-16 pt-24" role="main">
          {/* Hero Section */}
          <section
            className={`text-center mb-16 transition-all duration-1000 cyber-scan-line ${
              isLoaded && isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            aria-labelledby="hero-heading"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-12">
                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI Innovation</h3>
                  <p className="text-sm text-gray-300">Cutting-edge AI solutions</p>

                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">⚡</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                  <p className="text-sm text-gray-300">Next-gen processing power</p>

                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-3">🔒</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                  <p className="text-sm text-gray-300">Advanced protection</p>

                <div className="cyber-card hologram-card p-4 sm:p-6 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1 xl:col-span-1">
                  <div className="text-2xl sm:text-3xl mb-3">🌐</div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cloud Solutions</h3>
                  <p className="text-sm text-gray-300">Scalable infrastructure</p>


              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
                  aria-label="Get started with our AI solutions"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />

                <a
                  href="tel:+15550123"
                  onClick={handlePhoneClick}
                  className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
                  aria-label="Call us for immediate assistance"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 0123</span>


              <div className="mt-8 text-center">
                <p className="text-gray-300 text-sm sm:text-base">
                  Trusted by 500+ companies worldwide • 99.9% uptime guarantee • 24/7 support




          {/* Services Section */}
          <section className="mb-16" aria-labelledby="services-heading">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI-Powered Solutions

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence and advanced technology solutions


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12">
              <Suspense fallback={<ServiceCardSkeleton />}>
                <div className="quantum-card p-4 sm:p-6 energy-pulse">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">🤖</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">AI Services</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                    Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.

                  <div className="text-center">
                    <div className="mb-8">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Trusted by 500+ Companies Worldwide


                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                        Advanced AI & IT Solutions

                      <br />
                      <span className="text-3xl md:text-5xl lg:text-6xl">
                        for the Future


                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                      Transform your business with cutting-edge artificial intelligence, quantum computing, 
                      and autonomous systems. We deliver enterprise-grade solutions that drive innovation and growth.

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                      <a
                        href="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
                        aria-label="Get started with our AI solutions"
                      >
                        <span>Get Started Today</span>
                        <ArrowRight className="w-5 h-5" />

                      <a
                        href="tel:+15550123"
                        onClick={handlePhoneClick}
                        className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
                        aria-label="Call us for immediate assistance"
                      >
                        <Phone className="w-5 h-5" />
                        <span>+1 (555) 0123</span>


                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                        <div className="text-sm text-gray-300">Projects Delivered</div>

                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                        <div className="text-sm text-gray-300">Uptime Guarantee</div>

                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-300">Support Available</div>

                      <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5★</div>
                        <div className="text-sm text-gray-300">Client Rating</div>



                  {/* Quick Contact Form */}
                  <div className="cyber-card hologram-card p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get Free Consultation</h3>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name

                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                          placeholder="Enter your full name"
                          required
                        />

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address

                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                          placeholder="Enter your email"
                          required
                        />

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          Company

                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                          placeholder="Your company name"
                        />

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Project Details

                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                          placeholder="Tell us about your project..."
                        ></textarea>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Get Free Consultation







          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: '500+', label: 'Projects Delivered' },
                  { number: '99.9%', label: 'Uptime Guarantee' },
                  { number: '24/7', label: 'Support Available' },
                  { number: '5★', label: 'Client Rating' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>

                ))}



          {/* Services Grid */}
          <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Solutions</span>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI and technology services designed to transform your business


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                {[
                  {
                    icon: <Brain className="w-8 h-8 text-white" />,
                    title: 'AI Development',
                    description: 'Custom AI solutions tailored to your business needs',
                    features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
                  },
                  {
                    icon: <Cloud className="w-8 h-8 text-white" />,
                    title: 'Cloud Infrastructure',
                    description: 'Scalable and secure cloud solutions',
                    features: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Cloud']
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-white" />,
                    title: 'Cybersecurity',
                    description: 'Advanced security solutions for your digital assets',
                    features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response']
                  }
                ].map((service, index) => (
                  <article key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group" role="listitem">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" aria-hidden="true">
                      {service.icon}

                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}

                      ))}


                ))}



          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
                <h2 id="cta-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?

                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our AI solutions can drive your success

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project

                  <a
                    href="tel:+15550123"
                    className="bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                  >
                    Call Us Now








  )
}
HomePage.displayName = 'HomePage'
export default HomePage