'use client';
import React from 'react';
import { Brain, Users, Award, Target, Globe, Shield, Zap, CheckCircle, Phone, Mail, MapPin, ArrowRight, Star, TrendingUp, Users as People, Building, Cpu, BarChart, MessageSquare, Eye, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '95%', label: 'Process Automation', icon: Zap },
    { number: '50M+', label: 'Annual Savings', icon: DollarSign },
    { number: '24/7', label: 'Support Available', icon: Clock3 },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.',
      color: 'text-purple-400'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Bank-level security and compliance are built into every solution we deliver, ensuring your data is always protected.',
      color: 'text-cyan-400'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the growth and transformation of our clients.',
      color: 'text-green-400'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We serve clients worldwide, bringing advanced AI and IT solutions to businesses across all industries.',
      color: 'text-blue-400'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      description: 'PhD in Machine Learning, leading our AI research and development.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      description: 'Technology architect with expertise in cloud computing and enterprise systems.',
      image: '/team/michael.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      description: 'Quantum computing specialist and AI ethics expert.',
      image: '/team/emily.jpg'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and make advanced technology accessible to all businesses.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first enterprise client, delivering a comprehensive AI automation solution that increased their efficiency by 300%.'
    },
    {
      year: '2022',
      title: 'Quantum Computing Division',
      description: 'Launched our quantum computing research division, positioning us as leaders in next-generation computing solutions.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations internationally, serving clients across North America, Europe, and Asia-Pacific regions.'
    },
    {
      year: '2024',
      title: 'AI Platform Launch',
      description: 'Launched our comprehensive AI platform, offering micro SAAS solutions to businesses of all sizes.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI and IT solutions. Meet our team of experts and discover our company values."
        keywords={['about us', 'company', 'team', 'mission', 'AI experts', 'technology company', 'leadership']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="About Zion Tech Group">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Pioneering the Future of AI and Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              We are a leading technology company dedicated to transforming businesses through innovative AI solutions, 
              quantum computing, and cutting-edge IT services. Our mission is to make advanced technology accessible 
              and beneficial for organizations of all sizes.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Mission</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To democratize artificial intelligence and advanced technology, making it accessible and beneficial 
                  for businesses of all sizes. We believe that every organization, regardless of size or industry, 
                  should have access to cutting-edge AI solutions that can transform their operations and drive growth.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Make AI accessible to all businesses</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Drive innovation through technology</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Ensure ethical and responsible AI development</span>
                  </li>
                </ul>
              </div>

              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Our Vision</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To be the global leader in AI and technology solutions, creating a world where every business 
                  can leverage the power of artificial intelligence to achieve unprecedented success and growth. 
                  We envision a future where technology serves humanity and drives positive change.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Global leadership in AI innovation</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Technology that serves humanity</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Positive impact on society</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <value.icon className={`w-16 h-16 ${value.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                  <p className="text-cyan-400 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start mb-8">
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-lg font-bold text-lg">
                      {event.year}
                    </div>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{event.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6">
                <Award className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven Track Record</h3>
                <p className="text-gray-300">300% average ROI for our clients with measurable business impact and success stories.</p>
              </div>
              <div className="cyber-card p-6">
                <Brain className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Expert Team</h3>
                <p className="text-gray-300">World-class AI researchers, engineers, and consultants with decades of combined experience.</p>
              </div>
              <div className="cyber-card p-6">
                <Shield className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Security First</h3>
                <p className="text-gray-300">Bank-level security and compliance built into every solution we deliver.</p>
              </div>
              <div className="cyber-card p-6">
                <Zap className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Rapid Implementation</h3>
                <p className="text-gray-300">Quick deployment and integration with minimal disruption to your business operations.</p>
              </div>
              <div className="cyber-card p-6">
                <Globe className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Global Reach</h3>
                <p className="text-gray-300">Serving clients worldwide with 24/7 support and multi-language capabilities.</p>
              </div>
              <div className="cyber-card p-6">
                <Target className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">Custom Solutions</h3>
                <p className="text-gray-300">Tailored AI and IT solutions designed specifically for your business needs and goals.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join hundreds of satisfied clients who have transformed their businesses with our AI and IT solutions. 
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;