'use client'.
import React, { Helmet } from 'react-helmet-async'.
import React, { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react'.
'use client'.
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react'.
import Navigation from './components/Navigation'.
import Footer from './components/Footer'.
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer'.
import SEOOptimizer from './components/SEOOptimizer'.
import AccessibilityEnhancer from './components/AccessibilityEnhancer'.

import StructuredData from './components/StructuredData'.

import {Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText}}from 'lucide-react'.

// Loading skeleton component.
const ServiceCardSkeleton: React.FC = memo(() => (,
const HomePage: React.FC = () => {,
    const [isLoaded, setIsLoaded] = useState(false).
  const [isVisible, setIsVisible] = useState(false).

  useEffect(() => {
    setIsLoaded(true).
    // Trigger visibility animation.
    const timer = setTimeout(() => setIsVisible(true), 100).
    return () => clearTimeout(timer)}, []).

  // Analytics tracking for phone clicks - optimized.
  const handlePhoneClick = useCallback(() => {if (typeof window !== 'undefined' && 'gtag' in window) {'
      const gtag = (window as {gtag: (command: string, action: string, parameters: Record<string, unknown>) => void}}).gtag.
      gtag('event', 'phone_click', {)'
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']},'
    {icon: Cloud,
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']},'
    {icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']},'
    {icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']},'
    {icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']},'
    {icon: Users,
      title: 'Consulting Services',
      description: 'Expert guidance to help you navigate digital transformation and technology adoption.',
      benefits: ['Strategy Planning', 'Technology Assessment', 'Implementation Support', 'Training']},'
  ];
      features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics']},'
    {icon: Cloud,
      features: ['Cloud Migration', 'Infrastructure Management', 'DevOps', 'Monitoring']},'
    {icon: Cpu,
      title: 'Micro SaaS',
      description: 'Specialized software-as-a-service solutions designed for specific business needs.',
      href: '/micro-saas',
      features: ['Custom SaaS', 'API Integration', 'Scalable Solutions', 'Maintenance']}]'

        <meta name="keywords" content="page-backup, AI solutions, IT services, Zion Tech Group, page backup" />
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center">"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        enableImageOptimization={true}enableLazyLoading={true}enablePreloading={true}enableCodeSplitting={true}>
        <AccessibilityEnhancer.
          enableKeyboardNavigation={true}enableScreenReaderSupport={true}enableHighContrast={true}enableFocusManagement={true}>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">{/* Navigation */</div>} <Navigation />
                      href="/contact"
                      className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
                      aria-label="Get started with our services">
                      <span>Get Started
                      <ArrowRight className="w-5 h-5 group-hover: translate-x-1 transition-transform" />,
const HomePage: React.FC = memo(() => {,
    const [isLoaded, setIsLoaded] = useState(false).

  useEffect(() => {
    preloadComponents().
    setIsLoaded(true)}, []).

      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']},'
    {icon: Cloud,
      benefits: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Disaster Recovery']},'
    {icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      benefits: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response']},'
    {icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      benefits: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']},'
    {icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics tools.',
      benefits: ['Business Intelligence', 'Real-time Dashboards', 'Data Visualization', 'Reporting']},'
    {icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      benefits: ['Technology Strategy', 'Digital Transformation', 'Process Optimization', 'Training']},'
  ];
  const stats = [
    {number: '500+', label: 'Projects Completed' ,},'
    {number: '99.9%', label: 'Uptime Guarantee' ,},'
    {number: '24/7', label: 'Support Available' ,},'
    {number: '50+', label: 'Expert Team Members' ,}]'

              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page Backup?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page backup solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">"
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">"
                  <feature.icon className="h-6 w-6 text-white" />
            ))}
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">"
        <div className="max-w-7xl mx-auto">"
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page backup solutions for your business.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
