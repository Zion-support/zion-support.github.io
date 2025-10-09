'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Award, Users, TrendingUp, Shield, Globe, Brain, Cloud, Code, Target, BarChart, MessageSquare, FileText, Headphones, DollarSign, Clock, ArrowRight, CheckCircle, Star, Zap, Sparkles, Lightbulb, Rocket, Layers, Activity, Bot, Server, Network, HardDrive, Wifi, Monitor, Microphone, Volume2, Play, Pause, Stop, SkipForward, SkipBack, Repeat, Shuffle, VolumeX, Maximize, Minimize, X, Plus, Minus, Edit, Trash2, Save, Download, Upload, Share, Copy, Link, ExternalLink, Info, AlertTriangle, Check, XCircle, HelpCircle, MessageCircle, Bell, BellOff, User, UserPlus, UserMinus, Users2, UserCheck, UserX, UserCog, UserSearch, UserEdit, UserShield, UserLock, UserUnlock, UserKey, UserHeart, UserStar } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      image: '👨‍💼',
      description: 'Visionary leader with expertise in AI research and enterprise solutions'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Cloud Architecture',
      experience: '12+ years',
      image: '👩‍💻',
      description: 'Technical architect specializing in scalable cloud solutions'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI',
      expertise: 'Deep Learning',
      experience: '10+ years',
      image: '🧠',
      description: 'AI researcher and machine learning expert'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of IT',
      expertise: 'Cybersecurity',
      experience: '8+ years',
      image: '🛡️',
      description: 'Cybersecurity specialist and infrastructure expert'
    }
  ];

  const achievements = [
    { icon: Award, number: '50+', label: 'Successful Projects', description: 'Delivered across various industries' },
    { icon: Users, number: '100+', label: 'Happy Clients', description: 'From startups to Fortune 500' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI', description: 'Guaranteed return on investment' },
    { icon: Shield, number: '99.9%', label: 'Uptime', description: 'Reliable service delivery' },
    { icon: Globe, number: '25+', label: 'Countries', description: 'Global presence and support' },
    { icon: Brain, number: '1000+', label: 'AI Models', description: 'Deployed and optimized' }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, staying ahead of industry trends.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security and compliance are at the core of everything we build and deliver.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their success is our success.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology for businesses of all sizes.'
    },
    {
      year: '2021',
      title: 'First AI Platform',
      description: 'Launched our flagship AI business intelligence platform, serving 50+ enterprise clients.'
    },
    {
      year: '2022',
      title: 'Cloud Expansion',
      description: 'Expanded to multi-cloud infrastructure services, achieving 99.9% uptime across all platforms.'
    },
    {
      year: '2023',
      title: 'Micro SAAS Launch',
      description: 'Introduced our micro SAAS solutions, making AI accessible to small and medium businesses.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to 25+ countries with dedicated support teams and local partnerships.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Pioneering quantum computing integration and next-generation AI technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses with AI and IT solutions. Meet our team and discover our commitment to innovation and excellence." />
        <meta name="keywords" content="about us, team, mission, vision, AI company, IT solutions, technology leadership" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute inset-0 cyber-grid"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-text">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are pioneers in AI and IT solutions, dedicated to transforming businesses through cutting-edge technology, 
            innovative thinking, and unwavering commitment to excellence.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="relative py-20 px-4 neural-network-bg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="quantum-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To democratize artificial intelligence and advanced technology, making it accessible and beneficial 
                for businesses of all sizes. We believe that every organization, regardless of size or industry, 
                should have access to the transformative power of AI and modern IT solutions.
              </p>
            </div>
            
            <div className="quantum-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the global leader in AI-powered business transformation, creating a future where technology 
                seamlessly integrates with human potential to solve complex challenges and unlock unprecedented 
                opportunities for growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="relative py-20 px-4 particle-field">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Our Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="quantum-card p-8 text-center energy-pulse">
                <achievement.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-cyan-400 mb-2">{achievement.label}</div>
                <div className="text-gray-300">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="relative py-20 px-4 matrix-rain">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="quantum-card p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                <div className="text-gray-300 text-sm mb-2">{member.expertise}</div>
                <div className="text-gray-400 text-sm mb-3">{member.experience}</div>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="relative py-20 px-4 neural-network-bg">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="quantum-card p-8 text-center">
                <value.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative py-20 px-4 particle-field">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Our Journey
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 quantum-card p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="relative py-20 px-4 cyber-grid">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            Our Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="quantum-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Brain className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">AI & Machine Learning</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">TensorFlow & PyTorch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Natural Language Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Computer Vision</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Predictive Analytics</span>
                </li>
              </ul>
            </div>
            
            <div className="quantum-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Cloud className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Cloud & Infrastructure</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">AWS, Azure, Google Cloud</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Kubernetes & Docker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">Microservices Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">DevOps & CI/CD</span>
                </li>
              </ul>
            </div>
            
            <div className="quantum-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-red-400" />
                <h3 className="text-2xl font-bold text-white">Security & Compliance</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">SOC 2 Type II</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">ISO 27001</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">HIPAA Compliance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300">End-to-End Encryption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}