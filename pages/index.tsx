import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Sidebar from '../components/Sidebar';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Menu, TreePine, Cpu, Car, Satellite, Heart } from 'lucide-react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      href: '/services/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services',
      icon: Network,
      href: '/services/it-services'
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions',
      icon: Cloud,
      href: '/services/micro-saas'
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
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <Navigation />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600"> Cutting-Edge Technology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                From quantum computing and neural interfaces to autonomous systems and climate AI - 
                we deliver innovative solutions that drive digital transformation and competitive advantage.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Innovative Services</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-green-600 mb-2">$99-$1M+</div>
                    <div className="text-sm text-gray-600">Flexible Pricing</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-2">1-48</div>
                    <div className="text-sm text-gray-600">Weeks Delivery</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Services
                </Link>
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
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

        {/* Innovative Services Showcase */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cutting-Edge Innovation</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our most innovative services that are shaping the future of technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 w-fit mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Neural Interface Development</h3>
                <p className="text-gray-600 mb-4">Brain-computer interface development for medical and consumer applications with EEG signal processing and neural pattern recognition.</p>
                <div className="text-sm text-gray-500 mb-4">Starting at $15,000/month</div>
                <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-teal-600 w-fit mb-6">
                  <TreePine className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Climate Change Modeling</h3>
                <p className="text-gray-600 mb-4">Advanced climate prediction and environmental impact analysis using AI for sustainability and disaster risk assessment.</p>
                <div className="text-sm text-gray-500 mb-4">Starting at $15,000/month</div>
                <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 w-fit mb-6">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quantum Computing Integration</h3>
                <p className="text-gray-600 mb-4">Quantum computing infrastructure and hybrid classical-quantum system integration for complex problem solving.</p>
                <div className="text-sm text-gray-500 mb-4">Starting at $50,000/month</div>
                <Link href="/it-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 w-fit mb-6">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Autonomous Vehicle Fleet Management</h3>
                <p className="text-gray-600 mb-4">AI-driven fleet coordination and optimization platform for autonomous vehicles with real-time traffic adaptation.</p>
                <div className="text-sm text-gray-500 mb-4">Starting at $50,000/month</div>
                <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 w-fit mb-6">
                  <Satellite className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Space Mission Planning AI</h3>
                <p className="text-gray-600 mb-4">Intelligent space mission design and optimization using advanced AI algorithms for trajectory and resource optimization.</p>
                <div className="text-sm text-gray-500 mb-4">Starting at $50,000/month</div>
                <Link href="/ai-services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 w-fit mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Drug Discovery Platform</h3>
                <p className="text-gray-600 mb-4">Machine learning-driven pharmaceutical research and drug development platform with molecular structure analysis.</p>
                <div className="text-sm text-gray-500 mb-4">Starting at $25,000/month</div>
                <Link href="/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can drive your success. 
              From quantum computing to neural interfaces, we deliver the future of technology today.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white">
                <div>
                  <div className="text-lg font-semibold mb-1">Call Us</div>
                  <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-1">Email Us</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <div className="text-lg font-semibold mb-1">Visit Us</div>
                  <div className="text-blue-100 text-sm">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}