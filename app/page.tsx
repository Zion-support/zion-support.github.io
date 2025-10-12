'use client';

import React, { Suspense } from 'react';


import { Brain, ArrowRight, MessageSquare, Users, Star, Globe, TrendingUp, Shield, CheckCircle, BarChart3, FileText, Mic, Mail, Box, FlaskConical, Cloud, Settings, Smartphone, CheckSquare, Receipt, Key, FileSpreadsheet, Heart } from 'lucide-react';
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
      description: 'Transform your content strategy with our advanced AI-powered content generation tools. Generate high-quality, SEO-optimized content in 50+ languages.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-content-generator',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support', 'Plagiarism detection'],
      price: 'Starting at $99/month',
      category: 'AI Services'
    },
    {
      title: 'AI CRM Assistant',
      description: 'Boost sales by 45% with AI-powered lead scoring, email automation, and predictive analytics. Complete customer relationship management solution.',
      icon: <Users className="w-8 h-8 text-purple-400" />,
      link: '/ai-crm-assistant',
      features: ['AI lead scoring', 'Email automation', 'Predictive analytics', 'Sales forecasting'],
      price: 'Starting at $49/month',
      category: 'AI Services'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Increase engagement by 200% with AI-powered social media automation and content generation across all platforms.',
      icon: <MessageSquare className="w-8 h-8 text-pink-400" />,
      link: '/ai-social-media-manager',
      features: ['AI content generation', 'Smart scheduling', 'Analytics insights', 'Brand monitoring'],
      price: 'Starting at $29/month',
      category: 'AI Services'
    },
    {
      title: 'AI Cybersecurity Suite',
      description: 'Protect your business with 99.9% threat detection accuracy using advanced AI security and zero-trust architecture.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/ai-cybersecurity-suite',
      features: ['AI threat detection', 'Zero trust security', 'Automated response', 'Compliance monitoring'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      title: 'AI Smart City Solutions',
      description: 'Transform urban infrastructure with AI-powered smart city technologies and IoT integration for sustainable development.',
      icon: <Globe className="w-8 h-8 text-green-400" />,
      link: '/ai-smart-city-solutions',
      features: ['Traffic optimization', 'Energy management', 'IoT integration', 'Environmental monitoring'],
      price: 'Starting at $50,000/project',
      category: 'IT Services'
    },
    {
      title: '5G Implementation',
      description: 'Leverage the power of 5G technology for ultra-fast connectivity and IoT solutions with edge computing capabilities.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      link: '/5g-implementation',
      features: ['Ultra-fast speeds', 'IoT connectivity', 'Edge computing', 'Private networks'],
      price: 'Starting at $5,000/project',
      category: 'IT Services'
    },
    {
      title: 'AI Business Intelligence Pro',
      description: 'Transform data into actionable insights with our advanced AI-powered business intelligence platform and predictive analytics.',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      link: '/ai-business-intelligence-pro',
      features: ['Predictive analytics', 'Real-time dashboards', 'Data visualization', 'Custom reports'],
      price: 'Starting at $299/month',
      category: 'AI Services'
    },
    {
      title: 'AI Document Processing',
      description: 'Automate document workflows with AI-powered OCR, data extraction, and intelligent document classification.',
      icon: <FileText className="w-8 h-8 text-indigo-400" />,
      link: '/ai-document-processing',
      features: ['OCR technology', 'Data extraction', 'Document classification', 'Workflow automation'],
      price: 'Starting at $149/month',
      category: 'AI Services'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Build intelligent voice interfaces with our AI-powered voice assistant platform supporting multiple languages.',
      icon: <Mic className="w-8 h-8 text-orange-400" />,
      link: '/ai-voice-assistant',
      features: ['Natural language processing', 'Multi-language support', 'Voice synthesis', 'Custom commands'],
      price: 'Starting at $199/month',
      category: 'AI Services'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Maximize email campaign performance with AI-powered personalization, send-time optimization, and content generation.',
      icon: <Mail className="w-8 h-8 text-teal-400" />,
      link: '/ai-email-marketing-automation',
      features: ['AI personalization', 'Send-time optimization', 'Content generation', 'A/B testing'],
      price: 'Starting at $79/month',
      category: 'AI Services'
    },
    {
      title: 'AI 3D Generation',
      description: 'Create stunning 3D models and animations with our AI-powered 3D generation platform for gaming, AR/VR, and design.',
      icon: <Box className="w-8 h-8 text-violet-400" />,
      link: '/ai-3d-generation',
      features: ['3D model generation', 'Animation creation', 'AR/VR support', 'Game asset creation'],
      price: 'Starting at $399/month',
      category: 'AI Services'
    },
    {
      title: 'AI Drug Discovery Pro',
      description: 'Accelerate pharmaceutical research with AI-powered drug discovery, molecular analysis, and clinical trial optimization.',
      icon: <FlaskConical className="w-8 h-8 text-emerald-400" />,
      link: '/ai-drug-discovery-pro',
      features: ['Molecular analysis', 'Drug design', 'Clinical trial optimization', 'Safety prediction'],
      price: 'Starting at $2,999/month',
      category: 'AI Services'
    },
    {
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services and optimization.',
      icon: <Cloud className="w-8 h-8 text-sky-400" />,
      link: '/cloud-migration',
      features: ['AWS/Azure/GCP migration', 'Cost optimization', 'Security compliance', 'Performance tuning'],
      price: 'Starting at $2,500/project',
      category: 'IT Services'
    },
    {
      title: 'DevOps Solutions',
      description: 'Streamline your development workflow with our comprehensive DevOps solutions including CI/CD, monitoring, and automation.',
      icon: <Settings className="w-8 h-8 text-amber-400" />,
      link: '/devops',
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Monitoring & logging', 'Security automation'],
      price: 'Starting at $1,500/month',
      category: 'IT Services'
    },
    {
      title: 'Mobile App Development',
      description: 'Create powerful mobile applications for iOS and Android with our expert mobile development team and modern frameworks.',
      icon: <Smartphone className="w-8 h-8 text-rose-400" />,
      link: '/mobile-development',
      features: ['iOS & Android apps', 'Cross-platform development', 'UI/UX design', 'App store optimization'],
      price: 'Starting at $5,000/project',
      category: 'IT Services'
    },
    {
      title: 'AI Task Manager',
      description: 'Boost productivity with our AI-powered task management system that learns from your work patterns and optimizes schedules.',
      icon: <CheckSquare className="w-8 h-8 text-lime-400" />,
      link: '/ai-task-manager',
      features: ['Smart scheduling', 'Priority optimization', 'Team collaboration', 'Progress tracking'],
      price: 'Starting at $19/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Expense Tracker Pro',
      description: 'Simplify expense management with AI-powered receipt scanning, categorization, and automated reporting for businesses.',
      icon: <Receipt className="w-8 h-8 text-cyan-400" />,
      link: '/ai-expense-tracker-pro',
      features: ['Receipt scanning', 'Auto-categorization', 'Tax preparation', 'Expense analytics'],
      price: 'Starting at $39/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Password Manager',
      description: 'Secure your digital life with our AI-powered password manager featuring advanced encryption and breach monitoring.',
      icon: <Key className="w-8 h-8 text-red-400" />,
      link: '/ai-password-manager',
      features: ['Advanced encryption', 'Breach monitoring', 'Password generation', 'Multi-device sync'],
      price: 'Starting at $9/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Invoice Generator',
      description: 'Create professional invoices instantly with our AI-powered invoice generator that adapts to your business needs.',
      icon: <FileSpreadsheet className="w-8 h-8 text-green-400" />,
      link: '/ai-invoice-generator',
      features: ['Auto-generation', 'Custom templates', 'Payment tracking', 'Tax calculations'],
      price: 'Starting at $29/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Health Tracker',
      description: 'Monitor your health and wellness with our AI-powered health tracking platform that provides personalized insights.',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      link: '/ai-health-tracker',
      features: ['Health monitoring', 'AI insights', 'Goal tracking', 'Medical integration'],
      price: 'Starting at $15/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Meeting Transcriber',
      description: 'Transform your meetings with AI-powered transcription, note-taking, and action item extraction for better productivity.',
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      link: '/ai-meeting-transcriber',
      features: ['Real-time transcription', 'Action item extraction', 'Meeting summaries', 'Multi-language support'],
      price: 'Starting at $49/month',
      category: 'Micro SAAS'
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
        <meta name="description" content="Zion Tech Group: Premier AI solutions, IT services, 5G implementation & micro SAAS platforms. 99.8% client satisfaction, 24/7 support. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, artificial intelligence, IT services, 5G implementation, micro SAAS, cloud migration, cybersecurity, mobile development, machine learning, enterprise technology, digital transformation, Zion Tech Group, Delaware technology company" />
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
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:secure_url" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered solutions, IT services, 5G implementation, and micro SAAS platforms. 99.8% client satisfaction, 24/7 support." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
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
              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
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
              <h2 id="services-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Comprehensive Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Cutting-edge AI, IT, and Micro SAAS solutions designed to accelerate your digital transformation and drive business growth
              </p>
            </div>
            
            {/* Service Categories */}
            {['AI Services', 'IT Services', 'Micro SAAS'].map((category) => (
              <div key={category} className="mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                    {category === 'AI Services' && <Brain className="w-6 h-6 text-cyan-400 mr-2" />}
                    {category === 'IT Services' && <Shield className="w-6 h-6 text-green-400 mr-2" />}
                    {category === 'Micro SAAS' && <Box className="w-6 h-6 text-purple-400 mr-2" />}
                    {category}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
                </div>
                
                <Suspense fallback={
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services
                      .filter(service => service.category === category)
                      .map((service, index) => (
                        <FuturisticCard
                          key={index}
                          variant="service"
                          className="h-full group hover:scale-105 transition-all duration-300"
                          onClick={() => window.open(service.link, '_blank')}
                        >
                          <div className="mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                          <div className="text-cyan-400 font-semibold mb-4 text-sm bg-cyan-400/10 px-3 py-1 rounded-full inline-block">
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
                          <div className="mt-6 flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </FuturisticCard>
                      ))}
                  </div>
                </Suspense>
              </div>
            ))}
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