'use client';
import React from 'react';
import { Brain, Users, Target, CheckCircle, Phone, Clock, Zap, Shield, Eye, Building, BookOpen, Navigation, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, CheckCircle as Check, Phone as PhoneIcon, DollarSign } from 'lucide-react';;
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
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation, driving Zion Tech Group\'s mission to democratize AI solutions.',
      image: '/team/kleber-santos.jpg',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with PhD in Machine Learning, specializing in neural networks and deep learning applications.',
      image: '/team/sarah-chen.jpg',
      expertise: ['Machine Learning', 'Neural Networks', 'Research']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Technology architect with expertise in cloud infrastructure, DevOps, and scalable AI system design.',
      image: '/team/michael-rodriguez.jpg',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      bio: 'Data science expert with focus on predictive analytics, business intelligence, and data-driven decision making.',
      image: '/team/emily-watson.jpg',
      expertise: ['Data Science', 'Analytics', 'Business Intelligence']
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.',
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the value we deliver to our clients.',
      icon: Target,
      color: 'text-cyan-400'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions responsibly, ensuring fairness, transparency, and ethical considerations.',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay at the forefront of technology through continuous learning and adaptation.',
      icon: BookOpen,
      color: 'text-yellow-400'
    }
  ];

  const achievements = [
    { metric: '300%', label: 'Average ROI for Clients', icon: TrendingUp },
    { metric: '95%', label: 'Process Automation Rate', icon: Zap },
    { metric: '$50M+', label: 'Annual Client Savings', icon: DollarSign },
    { metric: '500+', label: 'Successful Projects', icon: CheckCircle },
    { metric: '50+', label: 'Enterprise Clients', icon: Building },
    { metric: '24/7', label: 'Support Availability', icon: Clock }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide."
        keywords={['about zion tech group', 'AI company', 'technology team', 'company mission', 'AI experts', 'IT solutions provider']
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
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
              Founded in 2020, Zion Tech Group has emerged as a leading provider of AI-powered enterprise solutions, 
              quantum computing, autonomous systems, and digital transformation services. We're committed to 
              democratizing advanced technology and making it accessible to businesses of all sizes.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white neon-text">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To democratize artificial intelligence and advanced technology, making cutting-edge AI solutions 
                  accessible to businesses of all sizes while maintaining the highest standards of ethics, security, 
                  and innovation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Make AI accessible to every business</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Drive innovation through ethical AI</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>Deliver measurable business value</span>
                  </li>
                </ul>
              </div>

              <div className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-12 h-12 text-purple-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white neon-text">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To be the world's most trusted partner in AI transformation, empowering organizations to 
                  achieve unprecedented growth and efficiency through intelligent automation and data-driven insights.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Global leader in AI solutions</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Trusted by Fortune 500 companies</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>Pioneering next-generation AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Values */}
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

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{achievement.metric}</div>
                  <div className="text-sm text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                  <div className="text-cyan-400 font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Company Story */}
          <section className="mb-16">
            <div className="cyber-card p-8 max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-8 text-center neon-text">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-300">
                <p className="text-lg leading-relaxed mb-6">
                  Zion Tech Group was founded in 2020 by a team of passionate technologists who recognized the 
                  transformative potential of artificial intelligence. What started as a small group of AI 
                  enthusiasts has grown into a global leader in AI solutions and digital transformation.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our journey began with a simple mission: to make advanced AI technology accessible to businesses 
                  of all sizes. We believed that every company, regardless of its size or industry, should have 
                  access to the same cutting-edge AI tools that were previously available only to tech giants.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Today, we're proud to serve over 50 enterprise clients worldwide, helping them achieve an 
                  average ROI of 300% through our AI-powered solutions. Our team of 50+ experts continues to 
                  push the boundaries of what's possible with AI, constantly innovating and adapting to meet 
                  the evolving needs of our clients.
                </p>
                <p className="text-lg leading-relaxed">
                  As we look to the future, we remain committed to our founding principles: innovation, 
                  integrity, and client success. We're excited to continue pioneering the next generation 
                  of AI solutions that will transform industries and create new possibilities for businesses 
                  around the world.
                </p>
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
                Join the hundreds of companies that have transformed their business with Zion Tech Group's 
                AI and IT solutions. Let's discuss how we can help you achieve your goals.
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