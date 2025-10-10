'use client'
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer'
import SEOOptimizer from './components/SEOOptimizer'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
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
    // Preload components
    preloadComponents()
    return () => clearTimeout(timer)
  }, [])
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])
  return (
    <React.Fragment>
      <PerformanceOptimizer>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Navigation />
            
            <main className="min-h-screen">
              {/* Hero Section */}
              <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="absolute inset-0 bg-black opacity-50">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      Advanced AI & IT Solutions
                    <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                      Transform your business with cutting-edge artificial intelligence, quantum computing, and digital transformation services.
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => scrollToSection('services')}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                      >
                        <Sparkles className="mr-2 h-5 w-5" />
                        Explore Services
                      <button 
                        onClick={() => scrollToSection('contact')}
                        className="border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Get Started
              {/* Services Section */}
              <section id="services" className="py-16 bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Our Services
                  <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                    Comprehensive AI and IT solutions designed to transform your business operations
                  {/* Primary Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4 text-center">🤖
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">AI Services
                      <p className="text-gray-600 mb-4 text-center">
                        Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
                      <div className="text-center">
                        <button className="text-cyan-600 hover:text-cyan-700 font-semibold">
                          Learn More <ArrowRight className="inline h-4 w-4 ml-1" />
                    <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4 text-center">☁️
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cloud Infrastructure
                      <p className="text-gray-600 mb-4 text-center">
                        Scalable and secure cloud solutions for modern businesses with 99.9% uptime guarantee.
                      <div className="text-center">
                        <button className="text-cyan-600 hover:text-cyan-700 font-semibold">
                          Learn More <ArrowRight className="inline h-4 w-4 ml-1" />
                    <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4 text-center">🔒
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cybersecurity
                      <p className="text-gray-600 mb-4 text-center">
                        Advanced security solutions to protect your digital assets and ensure compliance.
                      <div className="text-center">
                        <button className="text-cyan-600 hover:text-cyan-700 font-semibold">
                          Learn More <ArrowRight className="inline h-4 w-4 ml-1" />
                    <article className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-4xl mb-4 text-center">⚡
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Digital Transformation
                      <p className="text-gray-600 mb-4 text-center">
                        Complete digital transformation services to modernize your business processes.
                      <div className="text-center">
                        <button className="text-cyan-600 hover:text-cyan-700 font-semibold">
                          Learn More <ArrowRight className="inline h-4 w-4 ml-1" />
              {/* Contact Section */}
              <section id="contact" className="py-16 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">Get In Touch
                  <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                    Ready to transform your business? Contact us today for a free consultation.
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4">
                        <Phone className="h-6 w-6 text-cyan-400" />
                        <div>
                          <p className="text-gray-300 text-sm">Phone
                          <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                            +1 (302) 464-0950
                      <div className="flex items-center space-x-4">
                        <Mail className="h-6 w-6 text-cyan-400" />
                        <div>
                          <p className="text-gray-300 text-sm">Email
                          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                            kleber@ziontechgroup.com
                      <div className="flex items-center space-x-4">
                        <MapPin className="h-6 w-6 text-cyan-400" />
                        <div>
                          <p className="text-gray-300 text-sm">Address
                          <p className="text-white font-semibold">
                            364 E Main St STE 1008<br />
                            Middletown, DE 19709
                      <div className="flex items-center space-x-4">
                        <Clock className="h-6 w-6 text-cyan-400" />
                        <div>
                          <p className="text-gray-300 text-sm">Business Hours
                          <p className="text-white font-semibold">
                            Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                            24/7 Emergency Support Available
                    {/* Contact Form */}
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        />
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interest
                        <select
                          id="service"
                          name="service"
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select a service
                          <option value="ai">AI Services
                          <option value="cloud">Cloud Infrastructure
                          <option value="security">Cybersecurity
                          <option value="transformation">Digital Transformation
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                      <button
                        type="submit"
                        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 px-6 rounded-lg font-semibold transition-colors duration-300"
                      >
                        Send Message
            <Footer />
  )
}
HomePage.displayName = 'HomePage'
export default HomePage