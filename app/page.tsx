'use client';

import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticCard from './components/FuturisticCard';
import NeonButton from './components/NeonButton';
import AnimatedText from './components/AnimatedText';
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
  Activity
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
      title: 'AI Code Reviewer',
      description: 'Revolutionary AI-powered code review tool with 99.7% bug detection accuracy and automated security scanning.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-code-reviewer',
      features: ['99.7% bug detection accuracy', 'Security scanning', 'Performance analysis'],
      price: 'Starting at $29/month'
    },
    {
      title: 'AI Video Editor',
      description: 'Create professional videos in minutes with AI-powered editing, form analysis, and smart automation.',
      icon: <Camera className="w-8 h-8 text-purple-400" />,
      link: '/ai-video-editor',
      features: ['95% time saved on editing', 'Smart cut detection', 'Auto music sync'],
      price: 'Starting at $19/month'
    },
    {
      title: 'Quantum Cloud Computing',
      description: 'Experience the future of computing with our quantum cloud platform. Process complex problems 10,000x faster.',
      icon: <Cpu className="w-8 h-8 text-blue-400" />,
      link: '/quantum-cloud-computing',
      features: ['10,000x faster processing', 'Quantum algorithms', 'AI integration'],
      price: 'Starting at $2,999/month'
    },
    {
      title: 'AI Data Scientist',
      description: 'Democratize data science with our AI-powered platform. Build, train, and deploy ML models without coding.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/ai-data-scientist',
      features: ['95% model accuracy', 'AutoML pipeline', 'Predictive analytics'],
      price: 'Starting at $99/month'
    },
    {
      title: 'AI Personal Trainer',
      description: 'Your personal AI fitness coach that adapts to your goals, analyzes your form, and helps you achieve results 30% faster.',
      icon: <Activity className="w-8 h-8 text-pink-400" />,
      link: '/ai-personal-trainer',
      features: ['30% faster results', 'Form analysis', 'Health monitoring'],
      price: 'Starting at $9.99/month'
    },
    {
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/it-services',
      features: ['Cloud Migration', 'Cybersecurity', 'Mobile Development', 'Data Analytics'],
      price: 'Starting at $2,500/project'
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20" role="banner" aria-labelledby="hero-title">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 relative z-10">
              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <AnimatedText 
                  text="Advanced AI & IT Solutions" 
                  variant="glitch" 
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                />
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                <AnimatedText 
                  text="Transform your business with cutting-edge artificial intelligence, 5G implementation, and enterprise-grade IT solutions. Join 1,200+ satisfied clients with 99.8% satisfaction rate." 
                  variant="fade" 
                  delay={500}
                />
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NeonButton variant="primary" size="lg" className="group w-full sm:w-auto">
                  <Link to="/about" className="flex items-center justify-center w-full">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </NeonButton>
                <NeonButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link to="/contact" className="w-full text-center">
                    Get Started
                  </Link>
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
                  <div key={index} className="text-center px-2 group hover:scale-105 transition-transform duration-300" role="img" aria-label={`${stat.number} ${stat.label}`}>
                    <div className="flex items-center justify-center mb-2 group-hover:animate-pulse">
                      {stat.icon}
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300">{stat.number}</div>
                    <div className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    to={service.link} 
                    className="group focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <FuturisticCard variant="glow" hover={true} className="h-full">
                      <div className="mb-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
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
                      <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </div>
                    </FuturisticCard>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <FuturisticCard variant="neon" className="p-6 sm:p-8 lg:p-12">
                <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">
                  <AnimatedText 
                    text="Ready to Transform Your Business?" 
                    variant="glitch"
                    className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  />
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  <AnimatedText 
                    text="Let's discuss how our AI and IT solutions can drive your success. Join 1,200+ satisfied clients today." 
                    variant="fade"
                    delay={300}
                  />
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <NeonButton variant="accent" size="lg" className="w-full sm:w-auto">
                    <Link to="/contact" className="w-full text-center">
                      Get Started Today
                    </Link>
                  </NeonButton>
                  <NeonButton variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Link to="/about" className="w-full text-center">
                      Learn More
                    </Link>
                  </NeonButton>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ Free consultation • ✓ 24/7 support • ✓ 99.8% satisfaction rate</p>
                </div>
              </FuturisticCard>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}