import React, { useState, useCallback, memo } from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Sidebar from '../src/components/Sidebar';
import SEOHead from '../src/components/seo/SEOHead';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Menu, Rocket, Code, MessageSquare, Bot } from 'lucide-react';

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
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      icon: Brain,
      href: '/services#ai'
    },
    {
      title: 'Cloud Platforms',
      description: 'Scalable cloud infrastructure and platforms',
      icon: Cloud,
      href: '/services#cloud'
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions',
      icon: Shield,
      href: '/services#cybersecurity'
    },
    {
      title: 'Micro SaaS',
      description: 'Custom software as a service solutions',
      icon: Code,
      href: '/services#saas'
    },
    {
      title: 'Innovative Solutions',
      description: 'Latest micro SaaS and AI innovations',
      icon: Rocket,
      href: '/innovative-micro-saas'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting',
      icon: Network,
      href: '/services#consulting'
    }
  ];

  const features = [
  {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise'
    }
  ];

  return (
    <>
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
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
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
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Innovative Services Highlight */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Rocket className="h-8 w-8 text-purple-600 mr-3" />
                <span className="text-lg font-semibold text-purple-600">Latest Innovations</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Revolutionary Micro SaaS & AI Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our cutting-edge micro SaaS platforms and AI-powered tools designed to solve specific business challenges with maximum efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Email Responder</h3>
                </div>
                <p className="text-gray-600 mb-4">Intelligent email automation with 95% accuracy</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Starting from:</span>
                    <span className="font-semibold text-blue-600">$29/month</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Market Price:</span>
                    <span className="text-gray-600">$30-50/month</span>
                  </div>
                </div>
                <Link href="/innovative-micro-saas#ai-email-responder" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Mobile Survey Platform</h3>
                </div>
                <p className="text-gray-600 mb-4">Adaptive questioning with real-time analytics</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Starting from:</span>
                    <span className="font-semibold text-green-600">$19/month</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Market Price:</span>
                    <span className="text-gray-600">$20-40/month</span>
                  </div>
                </div>
                <Link href="/innovative-micro-saas#mobile-survey-tool" className="text-green-600 hover:text-green-700 font-medium text-sm">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Chatbot Platform</h3>
                </div>
                <p className="text-gray-600 mb-4">Advanced conversational AI with NLP</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Starting from:</span>
                    <span className="font-semibold text-purple-600">$99/month</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Market Price:</span>
                    <span className="text-gray-600">$100-300/month</span>
                  </div>
                </div>
                <Link href="/innovative-micro-saas#ai-chatbot-platform" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/innovative-micro-saas" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Explore All Innovative Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Information Banner */}
        <section className="py-12 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-200 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Globe className="h-5 w-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
});

Home.displayName = 'Home';

export default Home;