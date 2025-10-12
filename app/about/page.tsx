'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Target, 
  Shield, 
  Zap, 
  Globe, 
  Brain, 
  Cloud, 
  Code,
  Smartphone,
  Database,
  BarChart3,
  MessageSquare,
  FileText,
  Camera,
  Cpu,
  Wifi,
  Lock,
  Heart,
  TrendingUp
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, staying ahead of industry trends.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Security',
      description: 'Security is paramount in everything we do. We implement industry-leading security measures to protect your data and systems.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration. We work closely with our clients as partners, not just service providers.'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      position: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology, driving innovation in enterprise solutions.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'CTO',
      description: 'Technical leader specializing in cloud architecture and AI implementation.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      position: 'Head of AI Research',
      description: 'Expert in machine learning and neural networks with a focus on practical applications.',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Security',
      description: 'Cybersecurity expert with extensive experience in enterprise security and compliance.',
      image: '/team/emily-rodriguez.jpg'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in healthcare and finance sectors'
    },
    {
      year: '2023',
      title: 'Best IT Services Provider',
      description: 'Awarded by TechCrunch for exceptional cloud migration and cybersecurity services'
    },
    {
      year: '2023',
      title: '5G Implementation Excellence',
      description: 'Leading provider of 5G network solutions for enterprise clients'
    },
    {
      year: '2022',
      title: 'Micro SAAS Innovation',
      description: 'Pioneered the development of AI-powered micro SAAS solutions'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> }
  ];

  const services = [
    {
      name: 'AI Services',
      description: 'Advanced artificial intelligence solutions including content generation, chatbots, and analytics',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      count: '25+'
    },
    {
      name: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and mobile development',
      icon: <Code className="w-8 h-8 text-green-400" />,
      count: '15+'
    },
    {
      name: 'Micro SAAS',
      description: 'AI-powered micro SAAS tools for specific business needs and productivity',
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      count: '18+'
    },
    {
      name: '5G Solutions',
      description: 'Next-generation 5G implementation and network infrastructure services',
      icon: <Wifi className="w-8 h-8 text-yellow-400" />,
      count: '8+'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our expert team delivers innovative technology solutions to businesses worldwide." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, Zion Tech Group, team, mission, values" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                We are a leading technology company specializing in AI solutions, IT services, and digital transformation. 
                Our mission is to empower businesses with cutting-edge technology that drives growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize access to advanced AI and IT solutions, enabling businesses of all sizes to leverage 
                  cutting-edge technology for growth, efficiency, and innovation. We believe technology should be 
                  accessible, powerful, and transformative.
                </p>
                <p className="text-lg text-gray-300">
                  Our commitment extends beyond delivering solutions – we're building partnerships that drive 
                  long-term success and digital transformation for our clients.
                </p>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the world's leading provider of AI-powered solutions and IT services, recognized for 
                  innovation, reliability, and transformative impact on businesses across industries.
                </p>
                <p className="text-lg text-gray-300">
                  We envision a future where every business, regardless of size, has access to enterprise-grade 
                  AI and IT solutions that drive meaningful growth and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Core Values</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What We Offer</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{service.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{service.count}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Meet Our Team</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experienced professionals dedicated to delivering exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Achievements</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Recognition and awards that reflect our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{achievement.title}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Work With Us?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our expertise can help transform your business with cutting-edge technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start a Project
                  </Link>
                  <Link 
                    to="/services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}