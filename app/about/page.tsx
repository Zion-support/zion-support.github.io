'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, 
  Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, 
  Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, 
  Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, 
  Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, 
  Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, 
  RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, 
  Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, 
  Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, 
  Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, 
  Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, 
  Kiss10, Tongue10, FileText, Package, DollarSign, Database, Cloud, Code, 
  Smartphone, Server, Lock, Eye, Workflow, Settings, BarChart, FileText as FileTextIcon
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Zap, Brain, Cloud, Shield, Code, ArrowRight, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Trust',
      description: 'Your data security is our top priority. We implement enterprise-grade security measures to protect your business.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Client Success',
      description: 'We measure our success by your success. Our dedicated team ensures every project exceeds expectations.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and 24/7 support across all time zones.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service and measurable results.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We implement enterprise-grade security measures and maintain the highest standards of data protection and compliance.'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'We deliver solutions quickly and efficiently, adapting to your changing needs with flexible development methodologies.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and IT solutions, passionate about transforming businesses through technology.'
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
      description: 'Visionary leader with 15+ years in AI and enterprise technology',
      image: '/team/kleber.jpg'
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah.jpg',
      bio: 'Technical expert specializing in AI architecture and cloud infrastructure, leading our development teams.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      image: '/team/michael.jpg',
      bio: 'AI researcher and practitioner with expertise in machine learning, natural language processing, and computer vision.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      image: '/team/emily.jpg',
      bio: 'Cybersecurity expert ensuring our solutions meet the highest security standards and compliance requirements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about, company, team, AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pioneering the future of AI and IT solutions with cutting-edge technology, 
              expert consulting, and unwavering commitment to your success.
            </p>
      image: '/images/team/sarah.jpg',
      bio: 'Technical architect specializing in AI and cloud infrastructure solutions.',
      expertise: ['AI Engineering', 'Cloud Architecture', 'System Design']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      image: '/images/team/michael.jpg',
      bio: 'AI researcher and machine learning expert with PhD in Computer Science.',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Research']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      image: '/images/team/emily.jpg',
      bio: 'Cybersecurity expert with extensive experience in enterprise security solutions.',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Compliance']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and migration',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions',
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology company providing AI solutions, cloud infrastructure, cybersecurity, and custom software development services." />
        <meta name="keywords" content="about us, company, team, AI solutions, technology company, IT services, cloud computing, cybersecurity" />
      description: 'Expert in cloud architecture and AI system design',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Specialist in machine learning and natural language processing',
      image: '/team/michael.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI and IT solutions. Meet our expert team and discover our values." />
        <meta name="keywords" content="about zion tech group, AI company, IT services team, technology leadership" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                About
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                We are a leading technology company dedicated to transforming businesses through 
                innovative AI solutions, cloud infrastructure, and cybersecurity services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-xl text-gray-300 mb-6">
                  To empower businesses worldwide with cutting-edge AI and IT solutions that drive 
                  innovation, efficiency, and growth. We believe technology should be accessible, 
                  secure, and transformative.
                </p>
                <p className="text-lg text-gray-400">
                  Our mission is to bridge the gap between complex technology and business needs, 
                  making advanced AI and IT solutions accessible to companies of all sizes.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-xl text-gray-300 mb-6">
                  To be the world's leading provider of AI-powered business solutions, recognized 
                  for our innovation, reliability, and commitment to client success.
                </p>
                <p className="text-lg text-gray-400">
                  We envision a future where every business can leverage the power of AI and 
                  advanced technology to achieve unprecedented growth and success.
                </p>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are a team of passionate technologists dedicated to transforming businesses through innovative AI and IT solutions. 
                Our mission is to bridge the gap between cutting-edge technology and real-world business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Work With Us
                </Link>
                <Link 
                  to="/ai-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To democratize access to advanced AI and IT technologies, enabling businesses of all sizes to compete 
                  in the digital economy. We believe technology should be a force for good, driving innovation, efficiency, 
                  and growth while maintaining the highest standards of security and ethics.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our vision is a world where every business can leverage the power of artificial intelligence and 
                  modern IT infrastructure to achieve their goals and serve their customers better.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-400 text-sm">Cutting-edge AI solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Cloud Excellence</h3>
                  <p className="text-gray-400 text-sm">Scalable cloud infrastructure</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                  <p className="text-gray-400 text-sm">Enterprise-grade security</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Custom Solutions</h3>
                  <p className="text-gray-400 text-sm">Tailored development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and define our culture
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The talented individuals behind our success, dedicated to delivering exceptional results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className="text-center mb-4">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-purple-400 font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      {member.expertise.map((skill, idx) => (
                        <span key={idx} className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded mr-2 mb-2">
                          {skill}
                        </span>
                      ))}
                    </div>
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The experts behind our innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Users className="w-16 h-16 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions to transform your business and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              ))}
        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Our Services
                </Link>
              </div>
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Link>
                <Link 
                  to="/ai-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
export default AboutPage;
