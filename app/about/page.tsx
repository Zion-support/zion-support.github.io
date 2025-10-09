'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Users, Award, Target, Globe, Phone, Mail, MapPin, CheckCircle, Star, TrendingUp, Shield, Zap, Brain, Cloud, Code } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and enterprise technology',
      image: '/images/team/kleber.jpg',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      description: 'PhD in Machine Learning, former Google AI researcher',
      image: '/images/team/sarah.jpg',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Research']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      description: 'Technology architect with expertise in cloud and infrastructure',
      image: '/images/team/michael.jpg',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of AI Solutions',
      description: 'AI implementation specialist with Fortune 500 experience',
      image: '/images/team/emily.jpg',
      expertise: ['AI Implementation', 'Business Intelligence', 'Data Science']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build and deliver.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients. We\'re committed to delivering real business value.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more efficient, and more connected.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Delivered', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '50+', label: 'AI Experts', icon: Brain }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for enterprise clients worldwide."
        keywords={['about us', 'AI company', 'IT solutions', 'enterprise technology', 'team', 'mission']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Pioneering the Future of AI and IT Solutions
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Founded in 2020, Zion Tech Group has been at the forefront of AI innovation, 
                helping enterprises transform their operations through cutting-edge technology 
                and intelligent automation.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    To democratize AI technology and make it accessible to businesses of all sizes, 
                    enabling them to achieve unprecedented growth, efficiency, and innovation.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    We believe that artificial intelligence should augment human capabilities, 
                    not replace them. Our solutions are designed to empower teams, streamline 
                    processes, and unlock new possibilities for growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="cyber-button flex items-center justify-center space-x-2"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Get in Touch</span>
                    </a>
                    <a
                      href="/case-studies"
                      className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      View Our Work
                    </a>
                  </div>
                </div>
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                  <p className="text-gray-300 mb-6">
                    To be the world's leading provider of AI-powered enterprise solutions, 
                    transforming how businesses operate and compete in the digital age.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Ethical AI Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Sustainable Technology</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Client-Centric Approach</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Continuous Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 neon-text">{value.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Meet Our Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                    <div className="space-y-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="inline-block px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded mr-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Achievements
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {achievement.number}
                    </div>
                    <div className="text-gray-300 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="cyber-card p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                  Ready to Work With Us?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Join hundreds of companies that trust Zion Tech Group to transform their business with AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Start Your Project</span>
                  </a>
                  <a
                    href="/consultation"
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Free Consultation
                  </a>
                </div>
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
