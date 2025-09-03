<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
>>>>>>> main
import type { NextPage } from 'next';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Users, Award, Zap } from 'lucide-react';
=======
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
=======
<<<<<<< HEAD
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
=======
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import dynamic from 'next/dynamic';
import Navigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';
import SEOHead from '../components/SEOHead';
=======
<<<<<<< HEAD
const React = dynamic(() => import('react'), { ssr: false });;
const Head = dynamic(() => import('next/head'), { ssr: false });;
const Link = dynamic(() => import('next/link'), { ssr: false });;
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail } from 'lucide-react';
<<<<<<< HEAD

export default function Home() {
  const stats = ['
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
=======
<<<<<<< HEAD
;
export default function Home() {;
  const stats = [;
    { number: '500+', label: 'Projects Completed' },;
    { number: '50+', label: 'Happy Clients' },;
    { number: '99.9%', label: 'Uptime Guarantee' },;
>>>>>>> main
    { number: '24/7', label: 'Support Available' }
  ];
  const services = [;
    {;
      title: 'AI Services',;
      description: 'Cutting-edge artificial intelligence solutions and automation tools',;
      icon: Brain,;
      href: '/services#ai',;
      features: ['Content Creation', 'Email Automation', 'Customer Support', 'Business Intelligence'];
    },;
    {;
      title: 'IT Services',;
      description: 'Enterprise-grade infrastructure and development services',;
      icon: Network,;
      href: '/services#cloud',;
      features: ['DevOps Automation', 'Cloud Migration', 'Security Assessment', 'API Management'];
    },;
    {;
      title: 'Micro SaaS',;
      description: 'Specialized software solutions for business challenges',;
      icon: Cloud,;
      href: '/services#saas',;
      features: ['Project Management', 'Analytics Dashboard', 'HR Management', 'Financial Tracking'];
    }
  ];
  return (;
    <>;
      <Head>;
        <title>Zion Tech Group</title>;
        <meta name='description' content='Leading technology solutions provider' />;
        <meta name='viewport' content='width=device-width, initial-scale=1' />;
      </Head>;
      <main className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50'>;
        {/* Hero Section */}
        <section className='relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32'>;
            <div className='text-center'>;
              <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6'>;
                Welcome to Zion Tech Group;
              </h1>;
              <p className='text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8'>;
                Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
                <Link href='/services'>;
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>;
                    Explore Our Services;
                    <ArrowRight className='w-5 h-5 ml-2' />;
                  </Button>;
                </Link>;
                <Link href='/contact'>;
                  <Button variant='outline' className='border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold'>;
                    Get Started Today;
                  </Button>;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;

        {/* Stats Section */}
        <section className='py-16 bg-white'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>;
              {stats.map((stat, index) => (;
                <div key={index} className='text-center'>;
                  <div className='text-3xl sm:text-4xl font-bold text-blue-600 mb-2'>{stat.number}</div>;
                  <div className='text-sm sm:text-base text-gray-600'>{stat.label}</div>;
                </div>;
=======
=======
import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Sidebar from '../components/Sidebar';
<<<<<<< HEAD
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Award,
  Clock,
  Brain,
  Cloud,
  Database,
  Network,
  Target,
  Phone,
  Mail,
  Menu,
} from 'lucide-react';
=======
import SEOHead from '../src/components/SEOHead';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Menu } from 'lucide-react';
>>>>>>> main
>>>>>>> main

<<<<<<< HEAD
// Dynamically import performance monitor to avoid SSR issues
const PerformanceMonitor = dynamic(() => import('../components/PerformanceMonitor'), {
  ssr: false,
});

>>>>>>> main
export default function Home() {
=======
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
>>>>>>> main
  const stats = [
  { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  const services = [
<<<<<<< HEAD
    {'
=======
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
>>>>>>> main
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including autonomous systems, machine learning, and intelligent automation',
      icon: Brain,
<<<<<<< HEAD
      href: '/services/ai-services',
=======
      href: '/ai-services',
      features: ['AI-Powered Email Responder', 'Computer Vision Solutions', 'Predictive Analytics Platform', 'AI Chatbot & Virtual Assistant']
>>>>>>> main
    },
    {'
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and network management',
      icon: Network,
<<<<<<< HEAD
      href: '/services/it-services',
=======
      href: '/it-services',
      features: ['Cloud Infrastructure & Migration', 'Cybersecurity & Compliance', 'Network Infrastructure', 'IT Support & Helpdesk']
>>>>>>> main
    },
    {'
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to your business needs with rapid deployment',
      icon: Cloud,
<<<<<<< HEAD
      href: '/services/micro-saas',
    },
=======
      href: '/micro-saas',
      features: ['AI-Powered Email Responder', 'Mobile-First Survey Platform', 'Event Management Dashboard', 'Customer Support Platform']
>>>>>>> main
    }
>>>>>>> main
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
<<<<<<< HEAD
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards',
    },
    {
      icon: Users,
      title: 'Expert Team',
<<<<<<< HEAD
      description: 'Experienced professionals with proven track records'
=======
      description: 'Dedicated professionals with years of experience',
>>>>>>> main
    },
    {
      icon: Globe,
      title: 'Global Reach',
<<<<<<< HEAD
      description: 'Serving clients worldwide with 24/7 support'
=======
      description: 'Serving clients worldwide with local expertise',
    },
=======
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
>>>>>>> main
    }
>>>>>>> main
  ];
>>>>>>> main

  return (
<<<<<<< HEAD
    <MainLayout 
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Leading technology solutions provider helping businesses transform their digital presence 
              with cutting-edge AI, cloud architecture, and innovative development services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <Link href="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Development</h3>
              <p className="text-gray-600 mb-4">
                Custom AI solutions and machine learning models tailored to your business needs.
              </p>
              <Link href="/services/ai-model-development-chat" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Architecture</h3>
              <p className="text-gray-600 mb-4">
                Scalable cloud solutions and infrastructure design for modern applications.
              </p>
              <Link href="/services/cloud-migration-services-chat" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                End-to-end digital transformation services to modernize your business.
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Expertise</h3>
              <p className="text-gray-600">Years of experience in cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Agile development processes for quick results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support and maintenance services</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and quality control processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our technology solutions can help you achieve your business goals.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};
=======
    <>
<<<<<<< HEAD
      <SEOHead
        title="Zion Tech Group - AI & Technology Solutions"
        description="Leading provider of AI-powered solutions, micro SaaS applications, and enterprise IT services. Transform your business with cutting-edge technology."
        keywords="AI services, micro SaaS, IT services, DevOps, cybersecurity, cloud solutions, digital transformation, enterprise software, automation, machine learning"
        url="https://ziontechgroup.com/"
      />
      
=======
<<<<<<< HEAD
      <Head>
<<<<<<< HEAD
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>'
        <meta name="description" content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation." />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />"
=======
<<<<<<< HEAD
        <title>Zion Tech Group - AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Empowering businesses with cutting-edge AI, cloud solutions, cybersecurity, and innovative technology services. Expert IT consulting and digital transformation." />
        <meta name="keywords" content="AI services, cloud solutions, cybersecurity, IT consulting, digital transformation, blockchain, IoT, machine learning, data analytics" />
>>>>>>> main
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Navigation */}
      <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </Link>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link href="/" className="text-zion-slate-light hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="text-zion-slate-light hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="text-zion-slate-light hover:text-white transition-colors">Contact</Link>
              <a href="tel:+13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Businesses with
                <span className="text-zion-cyan"> AI & Technology</span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with cutting-edge AI solutions, cloud infrastructure, 
                and innovative technology services. We deliver results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/services" 
                  className="inline-flex items-center px-8 py-4 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
                >
                  Get Started
=======
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https: //ziontechgroup.com" />
      </Head>
>>>>>>> main

>>>>>>> main
      <Navigation />
<<<<<<< HEAD
      "
      <main className="min-h-screen bg-white">
        {/* Hero Section */}"
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center">"
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with"
                <span className="text-blue-600"> Technology</span>
              </h1>"
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>"
              <div className="flex flex-col sm: flex-row gap-4 justify-center">"
=======
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
=======
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
>>>>>>> main
            <div className="text-center">
              <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600"> Technology</span>
>>>>>>> main
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and
                micro SaaS development. We help businesses innovate, scale, and
                succeed in the digital age.
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
=======
<<<<<<< HEAD
              <div className='flex flex-col sm: flex-row gap-4 justify-center items-center'>
                <Link href='/services'>
                  <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>
                    Explore Our Services
                    <ArrowRight className='w-5 h-5 ml-2' />
                  </Button>
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
>>>>>>> main
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
>>>>>>> main
                  Get Started
<<<<<<< HEAD
                </Link>"
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-blue-600 hove,
    r:text-white transition-colors">
=======
>>>>>>> main
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                >
>>>>>>> main
                  View Services
>>>>>>> main
                </Link>
<<<<<<< HEAD
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover: bg-gray-50 transition-colors flex items-center justify-center"
=======
                <button 
                  onClick={handleSidebarToggle}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                  aria-label="Open navigation menu"
                  aria-expanded={sidebarOpen}
>>>>>>> main
                >
                  <Menu className="w-4 h-4 mr-2" />
                  Explore Menu
                </button>
              </div>
            </div>
<<<<<<< HEAD
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-zion-cyan mb-2">{stat.number}</div>
                      <div className="text-sm text-zion-slate-light">{stat.label}</div>
=======
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}"
        <section className="py-20 bg-white">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8">"
            <div className="grid grid-cols-2 m,
    d:grid-cols-4 gap-8">
              {stats.map((stat, index) => ("
                <div key={index} className="text-center">"
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>"
=======
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
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
>>>>>>> main
                  <div className="text-gray-600">{stat.label}</div>
>>>>>>> main
                </div>
>>>>>>> main
              ))}
            </div>;
          </div>;
        </section>;

<<<<<<< HEAD
        {/* Services Section */}"
        <section className="py-20 bg-gray-50">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 l,
    g:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>"
=======
        {/* Services Section */}
<<<<<<< HEAD
        <section className='py-20 sm:py-32'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>;
            <div className='text-center mb-16'>;
              <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-6'>;
                Our Core Services;
              </h2>;
              <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto'>;
                Comprehensive technology solutions designed to transform your business and drive growth.;
              </p>;
            </div>;
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>;
              {services.map((service, index) => (;
                <Card key={index} className='p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg'>;
                  <div className='p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6'>;
                    <service.icon className='w-8 h-8 text-white' />;
                  </div>;
                  <h3 className='text-2xl font-bold text-gray-900 mb-4 text-center'>{service.title}</h3>;
                  <p className='text-gray-600 mb-6 text-center'>{service.description}</p>;
                  <div className='mb-6'>;
                    <h4 className='text-sm font-semibold text-gray-900 mb-3'>Key Features:</h4>;
                    <div className='grid grid-cols-2 gap-2'>;
                      {service.features.map((feature, featureIndex) => (;
                        <div key={featureIndex} className='flex items-center text-sm text-gray-600'>;
                          <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' />;
=======
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
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
>>>>>>> main
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
<<<<<<< HEAD
                Comprehensive technology solutions designed to drive your
                business forward
=======
                Comprehensive technology solutions designed to drive your business forward
>>>>>>> main
>>>>>>> main
              </p>
            </div>
<<<<<<< HEAD
            "
            <div className="grid grid-cols-1 m,
    d:grid-cols-3 gap-8">
              {services.map((service, index) => ("
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">"
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">"
                    <service.icon className="w-8 h-8 text-white" />
                  </div>"
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>"
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>"
                  <Link href={service.href} className="block">"
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
                      Learn More"
=======

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
<<<<<<< HEAD
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-sm hover: shadow-md transition-shadow"
                >
=======
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
>>>>>>> main
                          {feature}
                        </div>;
                      ))}
<<<<<<< HEAD
                    </div>;
                  </div>;
                  <Link href={service.href}>;
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'>;
                      Learn More;
                      <ArrowRight className='w-4 h-4 ml-2' />;
                    </Button>;
                  </Link>;
                </Card>;
              ))}
            </div>;
          </div>;
        </section>;
=======
                    </div>
                  </div>
                  <Link href={service.href}>
                    <Button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white'>
=======
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
>>>>>>> main
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
>>>>>>> main
                      Learn More
>>>>>>> main
                      <ArrowRight className="w-4 h-4 ml-2" />
>>>>>>> main
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-zion-blue-light/20 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
<<<<<<< HEAD
                </div>
              );
            })}
=======
<<<<<<< HEAD
                </Card>
              ))}
            </div>
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan text-zion-blue-dark rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get in Touch
            </Link>
            <a 
              href="tel:+13024640950" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zion-blue-dark border-t border-zion-blue-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <p className="text-zion-slate-light text-sm mb-4 max-w-md">
                Empowering businesses with cutting-edge AI, cloud solutions, and innovative technology services.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-zion-slate-light text-sm">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                    info@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/ai-services" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">AI Services</Link></li>
                <li><Link href="/services/it-services" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">IT Services</Link></li>
                <li><Link href="/services/cloud" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/services/cybersecurity" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Cybersecurity</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Contact</Link></li>
                <li><Link href="/blog" className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors">Blog</Link></li>
              </ul>
=======
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
>>>>>>> main

<<<<<<< HEAD
        {/* Features Section */}"
        <section className="py-20 bg-white">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 l,
    g:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>"
              <p className="text-lg text-gray-600">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            "
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {features.map((feature, index) => ("
                <div key={index} className="text-center">"
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">"
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>"
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>"
=======
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
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional results through innovation, expertise,
                and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
>>>>>>> main
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
>>>>>>> main
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">"
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
            </p>'
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>"
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hove,
    r:bg-white hove,
    r:text-blue-600 transition-colors">
                Learn More About Us
              </Link>
=======
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication to your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Fast Delivery</h3>
                <p className="text-gray-600 text-center mb-4">
                  Quick turnaround times without compromising quality. Most projects delivered in 2-8 weeks.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Rapid prototyping and MVP development</li>
                  <li>• Agile development methodology</li>
                  <li>• 24/7 development team availability</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Enterprise Security</h3>
                <p className="text-gray-600 text-center mb-4">
                  Bank-level security and compliance standards with SOC 2, GDPR, and HIPAA compliance.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• End-to-end encryption and data protection</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Compliance with industry standards</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Expert Team</h3>
                <p className="text-gray-600 text-center mb-4">
                  Dedicated professionals with years of experience in cutting-edge technologies.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Certified AI and ML engineers</li>
                  <li>• Full-stack developers and architects</li>
                  <li>• DevOps and cloud specialists</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Globe className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Global Reach</h3>
                <p className="text-gray-600 text-center mb-4">
                  Serving clients worldwide with local expertise and 24/7 support across all time zones.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Multi-timezone development teams</li>
                  <li>• Local compliance and regulations</li>
                  <li>• International deployment expertise</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Scalable Solutions</h3>
                <p className="text-gray-600 text-center mb-4">
                  Built to grow with your business from startup to enterprise scale.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Auto-scaling cloud infrastructure</li>
                  <li>• Microservices architecture</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Proven Results</h3>
                <p className="text-gray-600 text-center mb-4">
                  Track record of successful projects with measurable ROI and client satisfaction.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• 500+ successful projects delivered</li>
                  <li>• 99.9% uptime guarantee</li>
                  <li>• 50+ satisfied enterprise clients</li>
=======
<<<<<<< HEAD
        {/* Contact CTA Section */}
<<<<<<< HEAD
        <section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>;
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>;
            <h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Business?;
            </h2>;
            <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>;
              Contact us today for a free consultation and discover how our solutions can drive your success.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
              <a href='tel:+13024640950' className='flex items-center text-white hover:text-blue-200 transition-colors'>;
                <Phone className='w-5 h-5 mr-2' />;
                +1 302 464 0950;
              </a>;
              <a href='mailto:kleber@ziontechgroup.com' className='flex items-center text-white hover:text-blue-200 transition-colors'>;
                <Mail className='w-5 h-5 mr-2' />;
                kleber@ziontechgroup.com;
              </a>;
            </div>;
            <div className='mt-8'>;
              <Link href='/contact'>;
                <Button className='bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold'>;
                  Get Free Consultation;
                  <ArrowRight className='w-5 h-5 ml-2' />;
                </Button>;
              </Link>;
            </div>;
          </div>;
        </section>;
      </main>;
    </>;
=======
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
>>>>>>> main
                </ul>
              </div>
>>>>>>> main
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
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

>>>>>>> main
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
>>>>>>> main
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can drive your
              success. Get started with a free consultation.'
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
=======
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
>>>>>>> main
                Get Free Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More About Us
>>>>>>> main
              </Link>
>>>>>>> main
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Phone</p>
                <a href="tel:+13024640950" className="text-white hover:text-blue-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-blue-200 mb-3" />
                <p className="text-blue-100 font-semibold">Website</p>
                <a href="https://ziontechgroup.com" className="text-white hover:text-blue-200 transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="border-t border-zion-blue-light/30 mt-8 pt-8 text-center">
            <p className="text-zion-slate-light text-sm">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
=======
        </section>
      </main>
<<<<<<< HEAD

=======
<<<<<<< HEAD
</>
=======
      
>>>>>>> main
      <Footer />
      <PerformanceMonitor />
>>>>>>> main
    </>
<<<<<<< HEAD
  )
=======
>>>>>>> main
>>>>>>> main
  );
<<<<<<< HEAD
}"
=======
<<<<<<< HEAD
>>>>>>> main
}
=======
});

Home.displayName = 'Home';

export default Home;
>>>>>>> main
>>>>>>> main
