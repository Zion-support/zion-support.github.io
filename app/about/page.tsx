'use client';
import React from 'react';
import { Phone, Mail, MapPin, Brain, Users, Award, Clock, Globe, Shield, Zap, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Star, Building, Cpu, Cloud, Database, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Lock, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI & Quantum Computing',
      experience: '15+ years',
      image: '👨‍💼',
      description: 'Visionary leader with expertise in artificial intelligence, quantum computing, and enterprise transformation.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Machine Learning & Cloud Architecture',
      experience: '12+ years',
      image: '👩‍💻',
      description: 'Technical architect specializing in scalable AI systems and cloud infrastructure.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Deep Learning & Neural Networks',
      experience: '10+ years',
      image: '👨‍🔬',
      description: 'Leading researcher in advanced AI algorithms and neural network architectures.'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Product',
      expertise: 'Product Strategy & UX',
      experience: '8+ years',
      image: '👩‍💼',
      description: 'Product strategist focused on creating intuitive AI-powered solutions for businesses.'
    }
  ];

  const achievements = [
    {
      title: 'AI Innovation Awards',
      count: '25+',
      description: 'Industry recognition for breakthrough AI solutions'
    },
    {
      title: 'Enterprise Clients',
      count: '500+',
      description: 'Fortune 500 companies transformed with our solutions'
    },
    {
      title: 'AI Models Deployed',
      count: '10,000+',
      description: 'Production AI models serving millions of users'
    },
    {
      title: 'Cost Savings Delivered',
      count: '$2.5B+',
      description: 'Total cost savings achieved for our clients'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      icon: Sparkles,
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      title: 'Client Success',
      icon: Target,
      description: 'Our success is measured by the transformative impact we create for our clients\' businesses.'
    },
    {
      title: 'Ethical AI',
      icon: Shield,
      description: 'We develop AI solutions that are fair, transparent, and beneficial to society.'
    },
    {
      title: 'Continuous Learning',
      icon: Brain,
      description: 'We stay at the forefront of technology through continuous research and development.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide."
        keywords={['about zion tech group', 'AI company', 'IT solutions provider', 'artificial intelligence team', 'technology leadership']}
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
            <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
              Pioneering the Future of AI and Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Founded in 2020, Zion Tech Group has emerged as a global leader in artificial intelligence and IT solutions, 
              transforming businesses through cutting-edge technology and innovative thinking.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize artificial intelligence and advanced technology, making it accessible and beneficial 
                  for businesses of all sizes. We believe in the power of AI to solve complex problems, drive innovation, 
                  and create a better future for humanity.
                </p>
              </div>
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's most trusted partner in AI transformation, leading the charge toward a future 
                  where intelligent systems enhance human capabilities and create unprecedented opportunities for growth 
                  and prosperity.
                </p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center neon-text">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text">{achievement.count}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center neon-text">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-2">{member.expertise}</p>
                  <p className="text-gray-400 text-xs mb-4">{member.experience}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center neon-text">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 neon-text">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Company Stats */}
          <section className="mb-16">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-8 neon-text">Company Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">2020</div>
                  <div className="text-gray-300">Founded</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">Global</div>
                  <div className="text-gray-300">Presence</div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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