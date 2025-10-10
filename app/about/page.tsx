'use client';
import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Zap, Shield, Brain, Cloud, Cpu, ArrowRight, Phone, Mail, MapPin, Sparkles, TrendingUp, Users, Globe, Lock, Target, BarChart, Settings, Code, Database, Smartphone, Monitor, Server, Link as LinkIcon, Heart, DollarSign, Package, MessageCircle, FileText, Calendar, CheckSquare, Award, Rocket, Lightbulb, Target as TargetIcon, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon, Brain as BrainIcon, Cloud as CloudIcon, Cpu as CpuIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '99.9%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Shield },
    { number: '10+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Countries Served', icon: Globe }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI, cloud, and emerging technologies to deliver cutting-edge solutions.',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and compliance standards.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to your specific needs, ensuring maximum value and return on investment.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, from small micro SAAS solutions to enterprise transformations.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      image: '👨‍💼',
      description: 'Leading AI researcher and technology entrepreneur with expertise in machine learning and business transformation.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      expertise: 'Cloud Architecture',
      experience: '12+ years',
      image: '👩‍💻',
      description: 'Cloud infrastructure expert specializing in scalable, secure, and cost-effective solutions for enterprise clients.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      expertise: 'Deep Learning',
      experience: '10+ years',
      image: '👨‍🔬',
      description: 'AI research scientist with deep expertise in neural networks, computer vision, and natural language processing.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      expertise: 'Cybersecurity',
      experience: '8+ years',
      image: '👩‍🔒',
      description: 'Cybersecurity specialist focused on protecting enterprise systems and ensuring compliance with industry standards.'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine Learning, Deep Learning, NLP, Computer Vision' },
    { name: 'Cloud Computing', icon: Cloud, description: 'AWS, Azure, GCP, Kubernetes, Docker' },
    { name: 'Blockchain', icon: LinkIcon, description: 'Smart Contracts, DeFi, NFT Platforms' },
    { name: 'Quantum Computing', icon: Cpu, description: 'Quantum Algorithms, Optimization, Cryptography' },
    { name: '5G & IoT', icon: Smartphone, description: '5G Networks, Edge Computing, IoT Solutions' },
    { name: 'Cybersecurity', icon: Shield, description: 'Threat Detection, Compliance, Security Auditing' }
  ];

  const achievements = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize advanced technology solutions.'
    },
    {
      year: '2021',
      title: 'First AI Product Launch',
      description: 'Launched our flagship AI analytics platform, serving 100+ enterprise clients.'
    },
    {
      year: '2022',
      title: 'Cloud Migration Success',
      description: 'Successfully migrated 500+ applications to cloud infrastructure, saving clients $50M+ annually.'
    },
    {
      year: '2023',
      title: 'Quantum Computing Initiative',
      description: 'Partnered with leading quantum computing providers to offer cutting-edge solutions.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations to 50+ countries with 24/7 support capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      {/* Header */}
      <div className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Leading Technology Innovation
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent holographic-text">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We are a leading technology company specializing in AI, cloud computing, and emerging technologies. 
              Our mission is to transform businesses through innovative solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="cyber-card text-center group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="cyber-card">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <TargetIcon className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To democratize advanced technology solutions and empower businesses of all sizes to leverage 
                cutting-edge AI, cloud computing, and emerging technologies for sustainable growth and innovation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Make advanced technology accessible to all businesses</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Drive innovation through cutting-edge solutions</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Ensure security and compliance in all solutions</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="cyber-card">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                To be the world's leading technology partner, recognized for our innovation, reliability, 
                and commitment to transforming businesses through advanced technology solutions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Global leader in AI and cloud solutions</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Pioneer in emerging technologies</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span>Trusted partner for enterprise transformation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            These principles guide everything we do and shape our culture of excellence and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="p-8 text-center">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Meet Our Leadership Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our expert team brings together decades of experience in AI, cloud computing, and emerging technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise} • {member.experience}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technologies We Master</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We stay at the forefront of technology, constantly learning and implementing the latest innovations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                  </div>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From startup to industry leader, here's how we've grown and evolved over the years.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <div className="cyber-card">
                    <div className="p-6">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{achievement.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-slate-900 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="cyber-card text-center">
          <div className="p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our 
              cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;