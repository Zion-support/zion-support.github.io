<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function MicroSaaS() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
<<<<<<< HEAD
    return () => clearTimeout(timer);
=======
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
export default function MicroSaaS() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return () => clearTimeout(timer)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
<<<<<<< HEAD
    site: 'https://ziontechgroup.com',
=======
    site: 'https://ziontechgroup.com'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    site: 'https://ziontechgroup.com'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };

  const categories = [
    { id: 'all', name: 'All Products', count: 150 },
    { id: 'ai', name: 'AI-Powered', count: 45 },
    { id: 'analytics', name: 'Analytics', count: 30 },
    { id: 'automation', name: 'Automation', count: 25 },
    { id: 'security', name: 'Security', count: 20 },
    { id: 'productivity', name: 'Productivity', count: 15 },
<<<<<<< HEAD
<<<<<<< HEAD
    { id: 'marketing', name: 'Marketing', count: 15 },
=======
    { id: 'marketing', name: 'Marketing', count: 15 }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    { id: 'marketing', name: 'Marketing', count: 15 }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ];

  const products = [
    {
      id: 1,
      name: 'AI-Powered Video Clip Maker',
<<<<<<< HEAD
<<<<<<< HEAD
      description:
        'Automatically create engaging video clips from long-form content using advanced AI algorithms.',
=======
      description: 'Automatically create engaging video clips from long-form content using advanced AI algorithms.',
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      category: 'ai',
      features: ['AI Content AnalysisAuto-EditingMultiple FormatsCloud Processing'],
      price: '$29/month',
      popular: true
    };
    {
      id: 2,
      name: 'Smart Contract Analyzer',
      description: 'Comprehensive analysis and security auditing for blockchain smart contracts.',
      category: 'security',
      features: ['Vulnerability DetectionGas OptimizationCode ReviewAudit Reports'],
      price: '$99/month',
      popular: false
    };
    {
      id: 3,
      name: 'Cybersecurity Threat Intelligence',
      description: 'Real-time threat monitoring and intelligence gathering for enhanced security.',
      category: 'security',
      features: ['Threat DetectionRisk AssessmentIncident ResponseCompliance Monitoring'],
      price: '$149/month',
      popular: true
    };
    {
      id: 4,
      name: 'Multi-Language Website Translator',
      description: 'Automatically translate websites into multiple languages with context awareness.',
      category: 'automation',
      features: ['100+ LanguagesContext TranslationSEO OptimizationReal-time Updates'],
      price: '$49/month',
      popular: false
    };
    {
      id: 5,
      name: 'Predictive Inventory Optimizer',
      description: 'AI-driven inventory management with demand forecasting and optimization.',
      category: 'analytics',
      features: ['Demand ForecastingStock OptimizationCost AnalysisIntegration APIs'],
      price: '$79/month',
      popular: true
    };
    {
      id: 6,
      name: 'Real-Time Analytics Dashboard',
      description: 'Comprehensive business intelligence dashboard with real-time data visualization.',
      category: 'analytics',
      features: ['Real-time DataCustom DashboardsAlert SystemExport Capabilities'],
      price: '$59/month',
      popular: false
    };
    {
      id: 7,
      name: 'Automated Customer Support',
      description: 'AI-powered customer support system with natural language processing.',
      category: 'ai',
      features: ['Chatbot IntegrationTicket ManagementKnowledge BaseMulti-channel Support'],
      price: '$89/month',
      popular: true
    };
    {
      id: 8,
      name: 'Blockchain Transaction Monitor',
      description: 'Monitor and analyze blockchain transactions across multiple networks.',
      category: 'analytics',
      features: ['Multi-chain SupportTransaction TrackingAlert SystemAPI Access'],
      price: '$69/month',
      popular: false
    };
    {
      id: 9,
      name: 'Social Media Scheduler',
      description: 'Advanced social media management with AI-powered content optimization.',
      category: 'marketing',
      features: ['Multi-platformContent CalendarAnalyticsAuto-posting'],
      price: '$39/month',
      popular: false
    };
    {
      id: 10,
      name: 'Document Processing AI',
      description: 'Intelligent document processing with OCR and data extraction capabilities.',
      category: 'ai',
      features: ['OCR TechnologyData ExtractionFormat ConversionBatch Processing'],
      price: '$59/month',
      popular: true
    };
    {
      id: 11,
      name: 'Workflow Automation Engine',
      description: 'Create and manage complex business workflows with drag-and-drop interface.',
      category: 'automation',
      features: ['Visual BuilderIntegration HubConditional LogicMonitoring'],
      price: '$79/month',
      popular: false
    };
    {
      id: 12,
      name: 'Email Marketing Optimizer',
      description: 'AI-powered email marketing with personalization and performance optimization.',
      category: 'marketing',
      features: ['PersonalizationA/B TestingAnalyticsTemplate Library'],
      price: '$49/month',
      popular: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Micro SaaS Products - Zion Tech Group</title>
        <meta name="description" content="Explore our 150+ innovative micro SaaS products including AI-powered tools, analytics dashboards, automation solutions, and security services." />
        <meta name="keywords" content="micro SaaS, SaaS products, AI tools, analytics, automation, security, productivity, marketing tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/micro-saas`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
<<<<<<< HEAD
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1
=======
      description: 'Automatically create engaging video clips from long-form content using advanced AI algorithms.',
      category: 'ai',
      features: ['AI Content AnalysisAuto-EditingMultiple FormatsCloud Processing'],
      price: '$29/month',
      popular: true
    };
    {
      id: 2,
      name: 'Smart Contract Analyzer',
      description: 'Comprehensive analysis and security auditing for blockchain smart contracts.',
      category: 'security',
      features: ['Vulnerability DetectionGas OptimizationCode ReviewAudit Reports'],
      price: '$99/month',
      popular: false
    };
    {
      id: 3,
      name: 'Cybersecurity Threat Intelligence',
      description: 'Real-time threat monitoring and intelligence gathering for enhanced security.',
      category: 'security',
      features: ['Threat DetectionRisk AssessmentIncident ResponseCompliance Monitoring'],
      price: '$149/month',
      popular: true
    };
    {
      id: 4,
      name: 'Multi-Language Website Translator',
      description: 'Automatically translate websites into multiple languages with context awareness.',
      category: 'automation',
      features: ['100+ LanguagesContext TranslationSEO OptimizationReal-time Updates'],
      price: '$49/month',
      popular: false
    };
    {
      id: 5,
      name: 'Predictive Inventory Optimizer',
      description: 'AI-driven inventory management with demand forecasting and optimization.',
      category: 'analytics',
      features: ['Demand ForecastingStock OptimizationCost AnalysisIntegration APIs'],
      price: '$79/month',
      popular: true
    };
    {
      id: 6,
      name: 'Real-Time Analytics Dashboard',
      description: 'Comprehensive business intelligence dashboard with real-time data visualization.',
      category: 'analytics',
      features: ['Real-time DataCustom DashboardsAlert SystemExport Capabilities'],
      price: '$59/month',
      popular: false
    };
    {
      id: 7,
      name: 'Automated Customer Support',
      description: 'AI-powered customer support system with natural language processing.',
      category: 'ai',
      features: ['Chatbot IntegrationTicket ManagementKnowledge BaseMulti-channel Support'],
      price: '$89/month',
      popular: true
    };
    {
      id: 8,
      name: 'Blockchain Transaction Monitor',
      description: 'Monitor and analyze blockchain transactions across multiple networks.',
      category: 'analytics',
      features: ['Multi-chain SupportTransaction TrackingAlert SystemAPI Access'],
      price: '$69/month',
      popular: false
    };
    {
      id: 9,
      name: 'Social Media Scheduler',
      description: 'Advanced social media management with AI-powered content optimization.',
      category: 'marketing',
      features: ['Multi-platformContent CalendarAnalyticsAuto-posting'],
      price: '$39/month',
      popular: false
    };
    {
      id: 10,
      name: 'Document Processing AI',
      description: 'Intelligent document processing with OCR and data extraction capabilities.',
      category: 'ai',
      features: ['OCR TechnologyData ExtractionFormat ConversionBatch Processing'],
      price: '$59/month',
      popular: true
    };
    {
      id: 11,
      name: 'Workflow Automation Engine',
      description: 'Create and manage complex business workflows with drag-and-drop interface.',
      category: 'automation',
      features: ['Visual BuilderIntegration HubConditional LogicMonitoring'],
      price: '$79/month',
      popular: false
    };
    {
      id: 12,
      name: 'Email Marketing Optimizer',
      description: 'AI-powered email marketing with personalization and performance optimization.',
      category: 'marketing',
      features: ['PersonalizationA/B TestingAnalyticsTemplate Library'],
      price: '$49/month',
      popular: true
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Micro SaaS Products - Zion Tech Group</title>
        <meta name="description" content="Explore our 150+ innovative micro SaaS products including AI-powered tools, analytics dashboards, automation solutions, and security services." />
        <meta name="keywords" content="micro SaaS, SaaS products, AI tools, analytics, automation, security, productivity, marketing tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/micro-saas`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Micro SaaS Products
              </h1>
<<<<<<< HEAD
<<<<<<< HEAD
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                150+ Innovative Solutions for Modern Businesses
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Discover our comprehensive collection of micro SaaS products
                designed to solve specific business challenges with focused,
                efficient, and cost-effective solutions.
=======
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                150+ Innovative Solutions for Modern Businesses
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Discover our comprehensive collection of micro SaaS products designed to solve specific business challenges 
                with focused, efficient, and cost-effective solutions.
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                150+ Innovative Solutions for Modern Businesses
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Discover our comprehensive collection of micro SaaS products designed to solve specific business challenges 
                with focused, efficient, and cost-effective solutions.
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </p>
            </div>
          </section>

          {/* Category Filter */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          <section className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Products Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredProducts.map((product, index) => (
                  <div
=======
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div 
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <div 
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                    key={product.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {product.popular && (
<<<<<<< HEAD
<<<<<<< HEAD
                      <div className='absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
=======
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {product.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0'></span>
=======
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                      <ul className="text-slate-400 text-sm space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD

                    <div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {product.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {product.category}
                      </span>
                    </div>

                    <button className='w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors'>
=======
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{product.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{product.category}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-400">{product.price}</span>
                      <span className="text-xs text-slate-500 capitalize">{product.category}</span>
                    </div>
                    
                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
=======
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Why Choose Our Micro SaaS Products?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-slate-400">Quick setup and deployment in minutes, not months</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
                  <p className="text-slate-400">Affordable pricing with no hidden costs or long-term contracts</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Focused Solutions</h3>
                  <p className="text-slate-400">Specialized tools that solve specific business problems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
<<<<<<< HEAD
                  <h3 className='text-xl font-bold mb-2'>Easy Integration</h3>
                  <p className='text-slate-400'>
                    Seamless integration with your existing tools and workflows
                  </p>
=======
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Choose Our Micro SaaS Products?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                  <p className="text-slate-400">Quick setup and deployment in minutes, not months</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
                  <p className="text-slate-400">Affordable pricing with no hidden costs or long-term contracts</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Focused Solutions</h3>
                  <p className="text-slate-400">Specialized tools that solve specific business problems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
                  <p className="text-slate-400">Seamless integration with your existing tools and workflows</p>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
                  <p className="text-slate-400">Seamless integration with your existing tools and workflows</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
          <section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
=======
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our experts to discuss which micro SaaS products are right for your business 
                and get started with a free trial.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get Free Trial
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
<<<<<<< HEAD
                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'
=======
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our experts to discuss which micro SaaS products are right for your business 
                and get started with a free trial.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get Free Trial
                </Link>
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
                  Email Us
                </a>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Micro SaaS Solutions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Focused, powerful solutions that address specific business challenges with AI and automation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasSolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{solution.pricing}</span>
                    {solution.marketPrice && (
                      <span className="text-gray-500 ml-2">(Market: {solution.marketPrice})</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={solution.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our micro SaaS solutions are designed for various industries and business types.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy Your Micro SaaS?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our micro SaaS solutions can solve your specific business challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );

=======
            </div>
=======
            </div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
          </section>
        </main>
      </ErrorBoundary>
    </>
  )
<<<<<<< HEAD
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
