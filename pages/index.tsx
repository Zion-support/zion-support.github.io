<<<<<<< HEAD
const React = dynamic(() => import('react'), { ssr: false });;
const Head = dynamic(() => import('next/head'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';
=======
import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Sidebar from '../components/Sidebar';
import SEOHead from '../src/components/SEOHead';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Menu } from 'lucide-react';
>>>>>>> main

const Home = memo(() => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleSidebarToggle = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);
  
  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "description": "Leading provider of revolutionary AI services, IT solutions, and micro SaaS development",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ziontechgroup.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };
  const stats = [
  { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
  
  const services = [
    {
<<<<<<< HEAD
      name: 'Sarah Johnson', role: 'CEO, TechCorp', content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    }, {
      name: 'Michael Chen',
      role: 'CTO, InnovateLabs',
      content: 'Outstanding service and cutting-edge technology. They delivered our project on time and within budget.', rating: 5
    },
    {
      name: 'Emily Rodriguez', role: 'Founder, StartupXYZ', content: 'The team at Zion Tech Group is exceptional. Their expertise in cloud infrastructure saved us months of development.',
      rating: 5
=======
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including autonomous systems, machine learning, and intelligent automation',
      icon: Brain,
      href: '/ai-services',
      features: ['AI-Powered Email Responder', 'Computer Vision Solutions', 'Predictive Analytics Platform', 'AI Chatbot & Virtual Assistant']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and network management',
      icon: Network,
      href: '/it-services',
      features: ['Cloud Infrastructure & Migration', 'Cybersecurity & Compliance', 'Network Infrastructure', 'IT Support & Helpdesk']
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your business needs with rapid deployment',
      icon: Cloud,
      href: '/micro-saas',
      features: ['AI-Powered Email Responder', 'Mobile-First Survey Platform', 'Event Management Dashboard', 'Customer Support Platform']
>>>>>>> main
    }
  ];

  const features = [
<<<<<<< HEAD
    {
      icon: Zap, title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technology'
    }, {
      icon: Shield,
      title: 'Secure & Reliable', description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Globe, title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
    }, {
      icon: TrendingUp,
      title: 'Scalable Solutions', description: 'Grow with confidence using our scalable architecture'
    }
  ];
  const services = [
    {
      title: 'AI Services', description: 'Cutting-edge artificial intelligence solutions and automation tools',
      icon: Brain, href: '/services#ai',
      features: ['Content Creation', 'Email Automation', 'Customer Support', 'Business Intelligence']
    }, {
      title: 'IT Services',
      description: 'Enterprise-grade infrastructure and development services', icon: Network,
      href: '/services#cloud', features: ['DevOps Automation', 'Cloud Migration', 'Security Assessment', 'API Management']
    }, {
      title: 'Micro SaaS',
      description: 'Specialized software solutions for business challenges', icon: Cloud,
      href: '/services#saas', features: ['Project Management', 'Analytics Dashboard', 'HR Management', 'Financial Tracking']
=======
  {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Rapid deployment with 2-48 week delivery times depending on complexity'
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description: 'Quantum-resistant encryption, zero-trust architecture, and SOC 2 compliance'
    },
    {
      icon: Users,
      title: 'Elite Expert Team',
      description: 'PhD-level engineers with expertise in AI, quantum computing, and cutting-edge tech'
    },
    {
      icon: Globe,
      title: 'Global Innovation Hub',
      description: 'Serving Fortune 500 companies worldwide with 24/7 support and local expertise'
    },
    {
      icon: Brain,
      title: 'AI-First Approach',
      description: 'Revolutionary AI solutions including quantum computing and autonomous systems'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Average 300% ROI within 12 months with our technology solutions'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions trusted by leading enterprises and government agencies'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support with 99.9% uptime guarantee'
>>>>>>> main
    }
  ];

  return (
    <>
<<<<<<< HEAD
      <SEO
        title="Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider"
        description="Transform your business with Zion Tech Group's cutting-edge AI services, enterprise IT solutions, and innovative Micro SaaS platforms. 500+ projects completed, 99.9% uptime guarantee."
        keywords={[
          'AI services',
          'IT solutions', 'Micro SaaS',
          'cloud computing', 'cybersecurity',
          'business automation', 'technology consulting',
          'enterprise software'
        ]}
      />
        <script type='application/ld+json'>
          {JSON.stringify({
            "@context": "https://schema.org", "@type": "Organization",
            "name": "Zion Tech Group", "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png", "description": "Leading provider of AI services, IT solutions, and Micro SaaS platforms",
            "address": {
              "@type": "PostalAddress", "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown", "addressRegion": "DE",
              "postalCode": "19709", "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint", "telephone": "+1-302-464-0950",
              "contactType": "customer service", "email": "kleber@ziontechgroup.com"
            },
            "sameAs": [
              "https://ziontechgroup.com"
            ]
          })}
        </script>
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32'>
            <div className='text-center'>
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>
                Welcome to Zion Tech Group
=======
      <SEOHead
        title="Zion Tech Group - Leading Technology Solutions Provider"
        description="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation."
        keywords="AI services, IT solutions, micro SaaS, technology consulting, digital transformation, cloud services, cybersecurity"
        structuredData={structuredData}
      />
      
      <Navigation />
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" role="banner" aria-labelledby="hero-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600"> Technology</span>
>>>>>>> main
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>
<<<<<<< HEAD
              <div className='flex flex-col sm: flex-row gap-4 justify-center items-center'>
                <Link href='/services'>
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>
                    Explore Our Services
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </Button>
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
>>>>>>> main
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Services
                </Link>
                <button 
                  onClick={handleSidebarToggle}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                  aria-label="Open navigation menu"
                  aria-expanded={sidebarOpen}
                >
                  <Menu className="w-4 h-4 mr-2" />
                  Explore Menu
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
<<<<<<< HEAD
                <div key={index} className='text-center'>
                  <div className='text-3xl sm: text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>
                  <div className='text-sm sm:text-base text-gray-600'>{stat.label}</div>
=======
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
<<<<<<< HEAD
        <section className='py-20 sm: py-32'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Our Core Services
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive technology solutions designed to transform your business and drive growth.
=======
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
>>>>>>> main
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
<<<<<<< HEAD
                <Card key={index} className='p-8 hover: shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>
                    <service.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>
                  <p className='text-gray-600 mb-6 text-center'>{service.description}</p>
                  <div className='mb-6'>
                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>Key Features:</h4>
                    <div className='grid grid-cols-2 gap-2'>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className='flex items-center text-sm text-gray-600'>
                          <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link href={service.href}>
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white'>
=======
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
>>>>>>> main
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
<<<<<<< HEAD
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                Why Choose Zion Tech Group?
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                We deliver exceptional results through innovation, expertise, and unwavering commitment to excellence.
              </p>
            </div>
            <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <div key={index} className='text-center group'>
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6 group-hover: scale-110 transition-transform duration-300'>
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>{feature.title}</h3>
                  <p className='text-gray-600'>{feature.description}</p>
=======
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Testimonials Section */}
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>
                What Our Clients Say
              </h2>
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>
                Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
              </p>
            </div>
            <div className='grid grid-cols-1 md: grid-cols-3 gap-8'>
              {testimonials.map((testimonial, index) => (
                <Card key={index} className='p-8 bg-white border-0 shadow-lg hover: shadow-xl transition-all duration-300'>
                  <div className='flex items-center mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
                    ))}
=======
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
>>>>>>> main
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact CTA Section */}
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'>
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
=======
        {/* Innovative Services Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Innovative Solutions for Modern Businesses</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our cutting-edge services that are transforming industries and driving digital innovation
              </p>
            </div>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Pricing Highlights */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Pricing Ranges</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Micro SaaS Solutions</span>
                    <span className="font-semibold text-blue-600">$99 - $50,000/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">AI Services</span>
                    <span className="font-semibold text-blue-600">$1,500 - $500,000/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">IT Services</span>
                    <span className="font-semibold text-blue-600">$1,500 - $500,000/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">Enterprise Solutions</span>
                    <span className="font-semibold text-blue-600">Custom Pricing</span>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 mr-4">
                    <Brain className="w-6 h-6 text-white" />
>>>>>>> main
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">AI-Powered Solutions</h3>
                </div>
                <p className="text-gray-600 mb-4">From autonomous systems to predictive analytics, our AI services deliver intelligent automation and insights.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Cybersecurity Threat Detection</li>
                  <li>• Medical Diagnosis Assistant</li>
                  <li>• Financial Risk Assessment</li>
                  <li>• Environmental Monitoring</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 mr-4">
                    <Cloud className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Micro SaaS Platforms</h3>
                </div>
                <p className="text-gray-600 mb-4">Scalable software solutions that grow with your business, from startup to enterprise.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Podcast Transcription Service</li>
                  <li>• Freelancer Portfolio Builder</li>
                  <li>• Local Business CRM</li>
                  <li>• Website Analytics for SMBs</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 mr-4">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Advanced IT Services</h3>
                </div>
                <p className="text-gray-600 mb-4">Next-generation IT infrastructure and services for the digital age.</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Quantum Computing Readiness</li>
                  <li>• 5G Network Integration</li>
                  <li>• Edge Computing Infrastructure</li>
                  <li>• Zero Trust Security Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-blue-100">
                Our proven track record speaks for itself
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
>>>>>>> main
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
            </p>
<<<<<<< HEAD
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <a href='tel:+13024640950' className='flex items-center text-white hover:text-blue-200 transition-colors'>
                <Phone className='w-5 h-5 mr-2' />
                +1 302 464 0950
              </a>
              <a href='mailto:kleber@ziontechgroup.com' className='flex items-center text-white hover:text-blue-200 transition-colors'>
                <Mail className='w-5 h-5 mr-2' />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className='mt-4 text-center text-blue-100'>
              <p className='text-sm'>364 E Main St STE 1008, Middletown DE 19709</p>
              <p className='text-sm mt-1'>Visit us at <a href='https: //ziontechgroup.com' className='underline hover:text-white' target='_blank' rel='noreferrer'>ziontechgroup.com</a></p>
            </div>
            <div className='mt-8'>
              <Link href='/contact'>
                <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>
                  Get Free Consultation
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Button>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More About Us
>>>>>>> main
              </Link>
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
</>
=======
      
      <Footer />
    </>
>>>>>>> main
  );
});

Home.displayName = 'Home';

export default Home;