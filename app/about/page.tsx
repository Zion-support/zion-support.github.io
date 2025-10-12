'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, BarChart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data security is our priority. We implement enterprise-grade security measures to protect your business.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We build lasting relationships with our clients, understanding their unique needs and delivering tailored solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and AI system design.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Specialist in machine learning and natural language processing.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert ensuring enterprise-grade protection.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company providing cutting-edge AI solutions, cloud infrastructure, and cybersecurity services." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, company culture" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading technology company providing AI solutions, cloud infrastructure, and cybersecurity services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid matrix-bg">
          <div className="quantum-particles absolute inset-0"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company dedicated to transforming businesses through 
                innovative AI solutions, robust cloud infrastructure, and comprehensive cybersecurity services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 energy-pulse">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  enhance security, and accelerate growth in the digital age.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                  We believe technology should be accessible, secure, and transformative. Our team of 
                  experts works tirelessly to deliver solutions that not only meet today's challenges 
                  but anticipate tomorrow's opportunities.
                </p>
                <Link
                  to="/contact"
                  className="futuristic-btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl neon-glow-purple"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="cyber-card bg-gray-800 rounded-xl p-8 scan-line">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      <span>15+ years of industry experience</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      <span>Certified AI and cloud experts</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      <span>24/7 support and monitoring</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      <span>Enterprise-grade security</span>
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                      <span>Scalable and future-proof solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900 holographic">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="cyber-card bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 scan-line">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg mb-4 energy-pulse`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 quantum-particles">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="cyber-card bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700 scan-line text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 energy-pulse"></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-purple-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900 matrix-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and IT solutions can transform your business and drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="futuristic-btn inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl neon-glow-purple"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="futuristic-btn inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 glassmorphism"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
