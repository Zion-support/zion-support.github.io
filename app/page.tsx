'use client';

import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from './components/FuturisticBackground';
import { NeonCard, NeonText, NeonButton } from './components/NeonEffects';
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
  Loader2,
  DollarSign
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
      title: 'AI Smart Calendar',
      description: 'Revolutionary AI-powered calendar management with natural language processing and intelligent scheduling.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-smart-calendar',
      features: ['AI-powered scheduling', 'Natural language processing', 'Team collaboration', 'Analytics & insights'],
      price: 'From $29/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Expense Tracker',
      description: 'Smart financial management with AI-powered receipt scanning, budget optimization, and analytics.',
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      link: '/ai-expense-tracker',
      features: ['AI receipt scanning', 'Budget management', 'Real-time analytics', 'Multi-currency support'],
      price: 'From $9.99/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Password Manager',
      description: 'Advanced password security with zero-knowledge architecture, biometric authentication, and AI monitoring.',
      icon: <Lock className="w-8 h-8 text-red-400" />,
      link: '/ai-password-manager',
      features: ['AI password generation', 'Zero-knowledge architecture', 'Biometric authentication', 'Security monitoring'],
      price: 'From $4.99/month',
      category: 'Micro SAAS'
    },
    {
      title: 'AI Content Generation Pro',
      description: 'Transform your content strategy with advanced AI-powered content generation and optimization tools.',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      link: '/ai-content-generation-pro',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support', 'Brand voice training'],
      price: 'From $49/month',
      category: 'AI Services'
    },
    {
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered cybersecurity solutions with threat detection and automated response.',
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      link: '/ai-cybersecurity-suite',
      features: ['Threat detection', 'Automated response', 'Security audits', 'Compliance management'],
      price: 'From $199/month',
      category: 'AI Services'
    },
    {
      title: '5G Edge Computing',
      description: 'Ultra-fast 5G edge computing solutions for IoT, real-time applications, and autonomous systems.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      link: '/5g-edge-computing',
      features: ['Ultra-low latency', 'IoT connectivity', 'Real-time processing', 'Autonomous systems'],
      price: 'From $299/month',
      category: '5G Solutions'
    },
    {
      title: 'AI Data Analytics Platform',
      description: 'Advanced AI-powered analytics platform with predictive modeling and real-time insights.',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      link: '/ai-data-analytics',
      features: ['Predictive modeling', 'Real-time analytics', 'Custom dashboards', 'Machine learning insights'],
      price: 'From $99/month',
      category: 'AI Services'
    },
    {
      title: 'AI Voice Assistant Pro',
      description: 'Enterprise-grade AI voice assistant with natural language processing and multi-platform integration.',
      icon: <MessageSquare className="w-8 h-8 text-pink-400" />,
      link: '/ai-voice-assistant-pro',
      features: ['Natural language processing', 'Multi-platform support', 'Custom voice training', 'API integration'],
      price: 'From $79/month',
      category: 'AI Services'
    },
    {
      title: 'AI 3D Generation Studio',
      description: 'Revolutionary AI-powered 3D content creation with automated modeling and rendering.',
      icon: <Camera className="w-8 h-8 text-indigo-400" />,
      link: '/ai-3d-generation',
      features: ['Automated 3D modeling', 'AI rendering', 'Texture generation', 'Animation creation'],
      price: 'From $149/month',
      category: 'AI Services'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Cutting-edge quantum computing services for complex problem solving and optimization.',
      icon: <Cpu className="w-8 h-8 text-teal-400" />,
      link: '/quantum-computing-solutions',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research collaboration'],
      price: 'From $999/month',
      category: 'Advanced IT'
    },
    {
      title: 'AI Climate Solutions Pro',
      description: 'AI-powered climate monitoring and prediction platform for environmental sustainability.',
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      link: '/ai-climate-solutions-pro',
      features: ['Climate prediction', 'Carbon tracking', 'Sustainability analytics', 'Environmental monitoring'],
      price: 'From $199/month',
      category: 'AI Services'
    },
    {
      title: 'AI Drug Discovery Pro',
      description: 'Advanced AI platform for pharmaceutical research and drug discovery acceleration.',
      icon: <Database className="w-8 h-8 text-violet-400" />,
      link: '/ai-drug-discovery-pro',
      features: ['Molecular modeling', 'Drug interaction analysis', 'Clinical trial optimization', 'Research automation'],
      price: 'From $2,999/month',
      category: 'AI Services'
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
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20 relative z-10" role="banner" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <NeonText size="6xl" glowColor="cyan" className="mb-4 sm:mb-6">
                Advanced AI & IT Solutions
              </NeonText>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. 
                Join 1,200+ satisfied clients with 99.8% satisfaction rate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.location.href = '/about'}
                  className="flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </NeonButton>
                <NeonButton 
                  variant="secondary" 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="flex items-center justify-center"
                >
                  Get Started
                </NeonButton>
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10" role="region" aria-labelledby="services-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <NeonText size="4xl" glowColor="purple" className="mb-4 px-4">
                Our Core Services
              </NeonText>
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
                  <NeonCard 
                    key={index} 
                    glowColor={service.category === 'Micro SAAS' ? 'cyan' : service.category === 'AI Services' ? 'purple' : service.category === '5G Solutions' ? 'yellow' : 'green'}
                    hover={true}
                    className="group cursor-pointer"
                    onClick={() => window.location.href = service.link}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                          {service.icon}
                        </div>
                        <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                      </div>
                      
                      <ul className="space-y-2 mb-6" role="list">
                        {service.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                  </NeonCard>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5 relative z-10" role="region" aria-labelledby="testimonials-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <NeonText size="4xl" glowColor="pink" className="mb-4 px-4">
                What Our Clients Say
              </NeonText>
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
        <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10" role="region" aria-labelledby="cta-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <NeonCard glowColor="purple" className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-8 lg:p-12">
                <NeonText size="4xl" glowColor="white" className="mb-4 px-4">
                  Ready to Transform Your Business?
                </NeonText>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI and IT solutions can drive your success. Join 1,200+ satisfied clients today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NeonButton 
                    variant="accent" 
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                    className="bg-white text-purple-600 hover:bg-gray-100"
                  >
                    Get Started Today
                  </NeonButton>
                  <NeonButton 
                    variant="secondary" 
                    size="lg"
                    onClick={() => window.location.href = '/about'}
                    className="border-2 border-white text-white hover:bg-white/10"
                  >
                    Learn More
                  </NeonButton>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ Free consultation • ✓ 24/7 support • ✓ 99.8% satisfaction rate</p>
                </div>
              </NeonCard>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}