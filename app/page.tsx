'use client';

import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  BarChart3,
  MessageSquare
} from 'lucide-react';
import FuturisticBackground from './components/FuturisticBackground';
import FuturisticCard from './components/FuturisticCard';
import FuturisticButton from './components/FuturisticButton';

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
      description: 'Advanced AI-powered content creation with GPT-4, Claude, and custom models. Generate blogs, social media, marketing copy, and technical documentation.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-content-generation-pro',
      features: ['GPT-4 & Claude integration', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Content scheduling'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      title: 'AI Business Intelligence Suite',
      description: 'Comprehensive BI platform with predictive analytics, automated reporting, and real-time dashboards for data-driven decision making.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/ai-business-intelligence-pro',
      features: ['Predictive analytics', 'Automated reporting', 'Real-time dashboards', 'Custom KPI tracking', 'Data visualization'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      title: 'AI Cybersecurity Matrix',
      description: 'Advanced AI-powered cybersecurity platform with threat detection, automated response, and compliance management.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/ai-cyber-defense-matrix',
      features: ['AI threat detection', 'Automated response', 'Compliance management', '24/7 monitoring', 'Incident response'],
      price: 'Starting at $799/month',
      category: 'AI Services'
    },
    {
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI scheduling, priority optimization, and team collaboration features.',
      icon: <Users className="w-8 h-8 text-purple-400" />,
      link: '/ai-task-manager-pro',
      features: ['AI scheduling', 'Priority optimization', 'Team collaboration', 'Progress tracking', 'Deadline management'],
      price: 'Starting at $29/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Smart expense management with receipt scanning, categorization, and financial insights powered by AI.',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      link: '/ai-expense-tracker-pro',
      features: ['Receipt scanning', 'AI categorization', 'Financial insights', 'Budget tracking', 'Tax preparation'],
      price: 'Starting at $19/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Smart Invoice Generator',
      description: 'Automated invoice generation with AI-powered pricing, client management, and payment tracking.',
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      link: '/ai-smart-invoice',
      features: ['Automated generation', 'AI pricing', 'Client management', 'Payment tracking', 'Multi-currency'],
      price: 'Starting at $39/month',
      category: 'Micro SAAS'
    },
    {
      title: 'Cloud Infrastructure Pro',
      description: 'Enterprise-grade cloud solutions with auto-scaling, disaster recovery, and 99.99% uptime guarantee.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services-pro',
      features: ['Auto-scaling', 'Disaster recovery', '99.99% uptime', 'Global CDN', '24/7 support'],
      price: 'Starting at $499/month',
      category: 'IT Services'
    },
    {
      title: '5G Edge Computing Platform',
      description: 'Ultra-low latency computing platform for IoT, autonomous vehicles, and real-time applications.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      link: '/5g-edge-computing',
      features: ['Ultra-low latency', 'IoT connectivity', 'Edge AI processing', 'Real-time analytics', 'Global deployment'],
      price: 'Starting at $2,999/month',
      category: '5G Solutions'
    },
    {
      title: 'AI Health Tracker Pro',
      description: 'Comprehensive health monitoring with AI insights, medication reminders, and telemedicine integration.',
      icon: <Users className="w-8 h-8 text-pink-400" />,
      link: '/ai-health-tracker-pro',
      features: ['Health monitoring', 'AI insights', 'Medication reminders', 'Telemedicine', 'Wearable integration'],
      price: 'Starting at $49/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Climate Solutions Pro',
      description: 'Advanced climate monitoring and prediction platform for environmental management and sustainability.',
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      link: '/ai-climate-solutions-pro',
      features: ['Climate monitoring', 'Predictive modeling', 'Sustainability tracking', 'Carbon footprint', 'Environmental reports'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      title: 'AI Drug Discovery Platform',
      description: 'Revolutionary AI platform for pharmaceutical research, molecular analysis, and drug development.',
      icon: <Brain className="w-8 h-8 text-indigo-400" />,
      link: '/ai-drug-discovery-pro',
      features: ['Molecular analysis', 'Drug discovery', 'Clinical trials', 'Regulatory compliance', 'Research automation'],
      price: 'Starting at $9,999/month',
      category: 'AI Services'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models, animations, and virtual environments using advanced AI technology.',
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      link: '/ai-3d-generation',
      features: ['3D model generation', 'Animation creation', 'Virtual environments', 'AR/VR support', 'Real-time rendering'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    }
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
      
      <FuturisticBackground variant="hero">
        {/* Hero Section */}
        <section id="main-content" className="pt-20 px-4 py-12 sm:py-16 lg:py-20" role="banner" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
                Join 1,200+ satisfied clients with 99.8% satisfaction rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/about', '_blank')}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </FuturisticButton>
                <FuturisticButton
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Get Started
                </FuturisticButton>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {[...Array(6)].map((_, index) => (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {services.map((service, index) => (
                  <FuturisticCard
                    key={index}
                    variant="service"
                    className="h-full"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <div className="mb-4" aria-hidden="true">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold mb-4 text-sm">
                      {service.price}
                    </div>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex items-center text-blue-400">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </div>
                  </FuturisticCard>
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
                  <FuturisticCard
                    key={index}
                    variant="testimonial"
                    className="h-full"
                  >
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
                  </FuturisticCard>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="cta-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <FuturisticCard variant="feature" className="text-center">
                <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success. Join 1,200+ satisfied clients today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
                    variant="primary"
                    size="lg"
                    onClick={() => window.open('/contact', '_blank')}
                  >
                    Get Started Today
                  </FuturisticButton>
                  <FuturisticButton
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('/about', '_blank')}
                  >
                    Learn More
                  </FuturisticButton>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ Free consultation • ✓ 24/7 support • ✓ 99.8% satisfaction rate</p>
                </div>
              </FuturisticCard>
            </div>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}