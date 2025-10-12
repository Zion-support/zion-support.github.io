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
  Loader2,
  Sparkles,
  Target,
  Rocket,
  Layers,
  Activity
} from 'lucide-react';
import FuturisticBackground from './components/FuturisticBackground';
import NeonButton from './components/NeonButton';
import FuturisticCard from './components/FuturisticCard';
import AnimatedText from './components/AnimatedText';

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
      title: 'AI Content Generation',
      description: 'Transform your content strategy with our advanced AI-powered content generation tools. Generate high-quality articles, social media posts, and marketing copy in seconds.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-content-generation',
      features: ['Automated content creation', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Content calendar integration'],
      price: 'From $99/month',
      marketPrice: '$150-300/month',
      savings: 'Save up to 50%'
    },
    {
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development. Enterprise-grade solutions for modern businesses.',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      link: '/it-services',
      features: ['Cloud Migration', 'Cybersecurity', 'Mobile Development', 'Data Analytics', '24/7 Support', 'SLA Guarantee'],
      price: 'From $2,500/project',
      marketPrice: '$5,000-15,000/project',
      savings: 'Save up to 60%'
    },
    {
      title: 'Cloud Services',
      description: 'Scalable, secure, and reliable cloud infrastructure solutions for your business. AWS, Azure, and Google Cloud certified experts.',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      link: '/cloud-services',
      features: ['Scalable infrastructure', '99.9% uptime SLA', 'Global CDN', 'Auto-scaling', 'Disaster recovery', 'Cost optimization'],
      price: 'From $199/month',
      marketPrice: '$400-800/month',
      savings: 'Save up to 50%'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with our comprehensive cybersecurity services and monitoring. Advanced threat detection and response capabilities.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/cybersecurity',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Penetration testing', 'Incident response', 'Security training'],
      price: 'From $499/month',
      marketPrice: '$1,000-2,500/month',
      savings: 'Save up to 70%'
    },
    {
      title: '5G Implementation',
      description: 'Leverage the power of 5G technology for ultra-fast connectivity and IoT solutions. Future-proof your business with next-gen infrastructure.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      link: '/5g-implementation',
      features: ['Ultra-fast speeds', 'IoT connectivity', 'Edge computing', 'Network optimization', 'IoT device management', 'Performance monitoring'],
      price: 'From $5,000/project',
      marketPrice: '$15,000-50,000/project',
      savings: 'Save up to 80%'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics platform. Real-time dashboards and predictive analytics.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/data-analytics',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization', 'Machine learning', 'Business intelligence'],
      price: 'From $299/month',
      marketPrice: '$600-1,200/month',
      savings: 'Save up to 60%'
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
      
      <FuturisticBackground variant="hero" intensity="high">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20" role="banner" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="mb-8">
                <AnimatedText 
                  text="Advanced AI & IT Solutions" 
                  variant="neon" 
                  color="cyan" 
                  as="h1" 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
                />
                <AnimatedText 
                  text="Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions." 
                  variant="fade" 
                  delay={0.5}
                  as="p" 
                  className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4"
                />
                <AnimatedText 
                  text="Join 1,200+ satisfied clients with 99.8% satisfaction rate." 
                  variant="slide" 
                  delay={1}
                  color="purple"
                  as="p" 
                  className="text-lg font-semibold mb-8"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton
                  variant="primary"
                  size="lg"
                  href="/about"
                  className="flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </NeonButton>
                <NeonButton
                  variant="secondary"
                  size="lg"
                  href="/contact"
                  className="flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Get Started
                </NeonButton>
              </div>
            </div>

            {/* Stats Section */}
            <Suspense fallback={
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {[...Array(8)].map((_, index) => (
                  <FuturisticCard key={index} variant="glass" size="sm" delay={index * 0.1}>
                    <div className="animate-pulse">
                      <div className="h-8 bg-gray-700 rounded mb-2"></div>
                      <div className="h-4 bg-gray-600 rounded"></div>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            }>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20" role="region" aria-label="Company statistics">
                {stats.map((stat, index) => (
                  <FuturisticCard 
                    key={index} 
                    variant="glow" 
                    size="sm" 
                    delay={index * 0.1}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                    role="img" 
                    aria-label={`${stat.number} ${stat.label}`}
                  >
                    <div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                        {stat.icon}
                      </div>
                    </div>
                    <AnimatedText 
                      text={stat.number} 
                      variant="fade" 
                      delay={index * 0.1 + 0.5}
                      color="white"
                      as="div" 
                      className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                    />
                    <div className="text-gray-300 text-xs sm:text-sm font-medium">{stat.label}</div>
                  </FuturisticCard>
                ))}
              </div>
            </Suspense>
          </div>
        </section>

        {/* Features Section */}
        <FuturisticBackground variant="section" intensity="medium">
          <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="services-title">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <AnimatedText 
                  text="Our Core Services" 
                  variant="neon" 
                  color="purple" 
                  as="h2" 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4"
                />
                <AnimatedText 
                  text="Comprehensive technology solutions designed to accelerate your digital transformation" 
                  variant="fade" 
                  delay={0.3}
                  as="p" 
                  className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4"
                />
              </div>
              
              <Suspense fallback={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                  {[...Array(6)].map((_, index) => (
                    <FuturisticCard key={index} variant="glass" size="lg" delay={index * 0.1}>
                      <div className="animate-pulse">
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
                    </FuturisticCard>
                  ))}
                </div>
              }>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                  {services.map((service, index) => (
                    <FuturisticCard 
                      key={index} 
                      variant="neon" 
                      size="lg" 
                      delay={index * 0.1}
                      hover={true}
                      className="group cursor-pointer"
                    >
                      <Link 
                        to={service.link} 
                        className="block h-full"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        <div className="mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                          <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 w-fit">
                            {service.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="text-cyan-400 font-bold text-lg bg-cyan-500/10 px-4 py-2 rounded-lg">
                              {service.price}
                            </div>
                            <div className="text-green-400 text-sm font-semibold bg-green-500/10 px-3 py-1 rounded-lg">
                              {service.savings}
                            </div>
                          </div>
                          <div className="text-gray-400 text-sm">
                            Market rate: <span className="line-through">{service.marketPrice}</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-3 mb-6" role="list">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckCircle className="w-3 h-3 text-green-400" />
                              </div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </FuturisticCard>
                  ))}
                </div>
              </Suspense>
            </div>
          </section>
        </FuturisticBackground>

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

        {/* Pricing Section */}
        <FuturisticBackground variant="section" intensity="low">
          <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="pricing-title">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <AnimatedText 
                  text="Transparent Pricing" 
                  variant="neon" 
                  color="cyan" 
                  as="h2" 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4"
                />
                <AnimatedText 
                  text="Competitive rates with no hidden fees. Save up to 80% compared to market rates." 
                  variant="fade" 
                  delay={0.3}
                  as="p" 
                  className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <FuturisticCard variant="glass" size="lg" delay={0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">$99-499</div>
                    <div className="text-gray-400 text-sm mb-6">per month</div>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Content Generation
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Chatbot Development
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Analytics Dashboard
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        24/7 Support
                      </li>
                    </ul>
                  </div>
                </FuturisticCard>
                
                <FuturisticCard variant="neon" size="lg" delay={0.2} className="relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">$2,500-15,000</div>
                    <div className="text-gray-400 text-sm mb-6">per project</div>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Cloud Migration
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Cybersecurity
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Mobile Development
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Data Analytics
                      </li>
                    </ul>
                  </div>
                </FuturisticCard>
                
                <FuturisticCard variant="glow" size="lg" delay={0.3}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">5G Solutions</h3>
                    <div className="text-4xl font-bold text-yellow-400 mb-2">$5,000-50,000</div>
                    <div className="text-gray-400 text-sm mb-6">per project</div>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Network Infrastructure
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        IoT Solutions
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Edge Computing
                      </li>
                      <li className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        Performance Monitoring
                      </li>
                    </ul>
                  </div>
                </FuturisticCard>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-500/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
                      <div className="text-gray-300">Average Savings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-400 mb-2">99.8%</div>
                      <div className="text-gray-300">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                      <div className="text-gray-300">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FuturisticBackground>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4" role="region" aria-labelledby="cta-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <FuturisticCard variant="neon" size="xl" className="bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500/50">
                <AnimatedText 
                  text="Ready to Transform Your Business?" 
                  variant="neon" 
                  color="white" 
                  as="h2" 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4"
                />
                <AnimatedText 
                  text="Let's discuss how our AI and IT solutions can drive your success. Join 1,200+ satisfied clients today." 
                  variant="fade" 
                  delay={0.3}
                  as="p" 
                  className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
                />
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <NeonButton
                    variant="accent"
                    size="lg"
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Started
                  </NeonButton>
                  <NeonButton
                    variant="secondary"
                    size="lg"
                    href="/about"
                    className="flex items-center justify-center"
                  >
                    <Layers className="w-5 h-5 mr-2" />
                    Learn More
                  </NeonButton>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-sm font-medium">Free consultation</span>
                  </div>
                  <div className="flex items-center justify-center text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-sm font-medium">24/7 support</span>
                  </div>
                  <div className="flex items-center justify-center text-white/90">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-sm font-medium">99.8% satisfaction rate</span>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                        <span className="text-white font-semibold">Call Us</span>
                      </div>
                      <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                        +1 (302) 464-0950
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Mail className="w-5 h-5 text-purple-400 mr-2" />
                        <span className="text-white font-semibold">Email Us</span>
                      </div>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <MapPin className="w-5 h-5 text-green-400 mr-2" />
                        <span className="text-white font-semibold">Visit Us</span>
                      </div>
                      <div className="text-green-300 text-sm">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </FuturisticCard>
            </div>
          </div>
        </section>
      </FuturisticBackground>
    </>
  );
}