'use client';

import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Code, 
  Smartphone, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Cpu,
  Wifi,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Loader2
} from 'lucide-react';

// Note: Lazy loading components will be implemented in future iterations

export default function HomePage() {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Users className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '48hr', label: 'Response Time', icon: <MessageSquare className="w-6 h-6" /> }
  ];

  const services = [
    {
      title: 'AI Content Generation Pro',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools. Create engaging, SEO-optimized content at scale.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-content-generation-pro',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support', 'Brand voice consistency', 'Content calendar automation'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity solutions with real-time threat detection, automated response, and compliance management.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/ai-cybersecurity-suite',
      features: ['AI threat detection', 'Automated incident response', 'Compliance automation', '24/7 monitoring', 'Zero-trust architecture'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    {
      title: 'AI Business Intelligence',
      description: 'Comprehensive AI-driven business intelligence platform with predictive analytics, automated reporting, and real-time insights.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/ai-business-intelligence',
      features: ['Predictive analytics', 'Automated reporting', 'Real-time dashboards', 'Custom KPI tracking', 'Data visualization'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing, multi-channel support, and seamless human handoff.',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      link: '/ai-customer-support-chatbot',
      features: ['24/7 availability', 'Multi-language support', 'Sentiment analysis', 'Knowledge base integration', 'Human escalation'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      title: 'AI Document Intelligence',
      description: 'Revolutionary document processing with AI-powered extraction, analysis, and automation for maximum efficiency.',
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      link: '/ai-document-intelligence',
      features: ['OCR & text extraction', 'Smart categorization', 'Automated workflows', 'Compliance checking', 'Version control'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Boost your online sales with AI-powered product recommendations, pricing optimization, and customer behavior analysis.',
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      link: '/ai-ecommerce-optimizer',
      features: ['Smart recommendations', 'Dynamic pricing', 'Inventory optimization', 'Customer segmentation', 'Sales forecasting'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      title: 'Cloud Infrastructure Pro',
      description: 'Enterprise-grade cloud infrastructure with auto-scaling, global CDN, and 99.99% uptime guarantee.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services',
      features: ['Auto-scaling', 'Global CDN', '99.99% uptime', 'Multi-region deployment', 'Disaster recovery'],
      price: 'Starting at $299/month',
      category: 'IT Services'
    },
    {
      title: '5G Network Solutions',
      description: 'Cutting-edge 5G implementation with ultra-low latency, massive IoT connectivity, and edge computing capabilities.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      link: '/5g-implementation',
      features: ['Ultra-low latency', 'Massive IoT support', 'Edge computing', 'Network slicing', 'Private 5G networks'],
      price: 'Starting at $5,000/project',
      category: '5G Solutions'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, automated scheduling, and productivity insights.',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      link: '/ai-task-manager',
      features: ['Smart prioritization', 'Automated scheduling', 'Team collaboration', 'Progress tracking', 'Productivity analytics'],
      price: 'Starting at $29/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Expense Tracker',
      description: 'Smart expense management with receipt scanning, categorization, and automated expense reporting.',
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      link: '/ai-expense-tracker',
      features: ['Receipt scanning', 'Auto-categorization', 'Expense reports', 'Budget tracking', 'Tax preparation'],
      price: 'Starting at $19/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Password Manager',
      description: 'Advanced password security with AI-powered breach detection, secure sharing, and multi-factor authentication.',
      icon: <Lock className="w-8 h-8 text-red-400" />,
      link: '/ai-password-manager',
      features: ['Breach monitoring', 'Secure sharing', 'MFA support', 'Password generation', 'Dark web scanning'],
      price: 'Starting at $9/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates, payment tracking, and integrated accounting features.',
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      link: '/ai-invoice-generator',
      features: ['Smart templates', 'Payment tracking', 'Tax calculations', 'Multi-currency', 'Automated reminders'],
      price: 'Starting at $39/month',
      category: 'Micro SAAS'
    }
  ];

  const additionalServices = [
    { name: 'Web Development', link: '/web-development' },
    { name: 'Mobile Development', link: '/mobile-development' },
    { name: 'DevOps', link: '/devops' },
    { name: 'IT Consulting', link: '/it-consulting' },
    { name: 'Blockchain Solutions', link: '/blockchain' },
    { name: 'IoT Development', link: '/iot' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'Their cloud infrastructure is rock-solid. We\'ve had zero downtime since implementation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'The cybersecurity services gave us peace of mind. Our data has never been more secure.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. Transform your business with cutting-edge technology from Zion Tech Group. 99.8% client satisfaction, 24/7 support." />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, artificial intelligence, machine learning, Zion Tech Group, enterprise technology" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no,address=no,email=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://ziontechgroup.com/" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company" />
        <meta property="og:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms.",
            "foundingDate": "2020",
            "founder": {
              "@type": "Person",
              "name": "Dr. Kleber Santos"
            },
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
              "https://twitter.com/ziontechgroup",
              "https://github.com/ziontechgroup"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "offerCount": "50+",
              "lowPrice": "99",
              "highPrice": "2999",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 relative z-10" role="banner" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              {/* Animated Title with Glow Effect */}
              <div className="relative mb-4 sm:mb-6">
                <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 relative z-10">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    Advanced AI & IT Solutions
                  </span>
                </h1>
                {/* Glow effect behind title */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-2xl animate-pulse"></div>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 relative z-10">
                Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
                Join 1,200+ satisfied clients with 99.8% satisfaction rate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link 
                  to="/about" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-500/50 relative overflow-hidden"
                  aria-label="Learn more about our services and company"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" aria-hidden="true" />
                </Link>
                <Link 
                  to="/contact" 
                  className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 relative overflow-hidden"
                  aria-label="Get started with our services"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Started</span>
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <Suspense fallback={
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {[...Array(8)].map((_, index) => (
                  <div key={index} className="text-center px-2">
                    <div className="animate-pulse">
                      <div className="h-8 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20" role="region" aria-label="Company statistics">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center px-2" role="img" aria-label={`${stat.number} ${stat.label}`}>
                    <div className="flex items-center justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="services-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="services-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-pulse">
                    <div className="h-8 w-8 bg-gray-600 rounded mb-4"></div>
                    <div className="h-6 bg-gray-600 rounded mb-4"></div>
                    <div className="h-4 bg-gray-600 rounded mb-6"></div>
                    <div className="space-y-2 mb-6">
                      <div className="h-4 bg-gray-600 rounded"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-4 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    to={service.link} 
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-cyan-500/30 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 relative overflow-hidden"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.category === 'AI Services' ? 'bg-cyan-500/20 text-cyan-300' :
                        service.category === 'IT Services' ? 'bg-green-500/20 text-green-300' :
                        service.category === '5G Solutions' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {service.category}
                      </span>
                    </div>
                    
                    {/* Icon with glow effect */}
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 relative" aria-hidden="true">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    {/* Price with highlight */}
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-3 mb-4 border border-cyan-500/20">
                      <div className="text-cyan-400 font-bold text-lg">
                        {service.price}
                      </div>
                    </div>
                    
                    {/* Features list */}
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-gray-400 ml-6">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                    
                    {/* CTA with animation */}
                    <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors font-semibold">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5" role="region" aria-labelledby="testimonials-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 id="testimonials-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't just take our word for it - hear from businesses that have transformed with our solutions
              </p>
            </div>

            <Suspense fallback={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20 animate-pulse">
                    <div className="flex items-center mb-4">
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded mr-1"></div>
                      <div className="h-4 w-4 bg-gray-600 rounded"></div>
                    </div>
                    <div className="h-4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded mb-4"></div>
                    <div className="h-4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded"></div>
                  </div>
                ))}
              </div>
            }>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((testimonial, index) => (
                  <article key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20" role="article">
                    <div className="flex items-center mb-4" role="img" aria-label={`${testimonial.rating} star rating`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400" aria-hidden="true">★</span>
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-4 italic">
                      <p>"{testimonial.content}"</p>
                    </blockquote>
                    <footer>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </footer>
                  </article>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="cta-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                
                <div className="relative z-10">
                  <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                    Let's discuss how our AI and IT solutions can drive your success. Join 1,200+ satisfied clients today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      to="/contact" 
                      className="group bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 relative overflow-hidden"
                      aria-label="Get started with our services today"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Get Started Today</span>
                    </Link>
                    <Link 
                      to="/about" 
                      className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 relative overflow-hidden"
                      aria-label="Learn more about our company and services"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">Learn More</span>
                    </Link>
                  </div>
                  <div className="mt-8 text-white/80 text-sm">
                    <p>✓ Free consultation • ✓ 24/7 support • ✓ 99.8% satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}