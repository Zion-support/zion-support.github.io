<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Shield, Globe, Brain, Cloud
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Zap, Brain, Cloud, Shield, Code, ArrowRight, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Zap, Brain, Cloud, Shield, Code, ArrowRight, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Innovation First',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
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
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and IT solutions, passionate about transforming businesses through technology.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
      description: 'Visionary leader with 15+ years in AI and enterprise technology',
      image: '/team/kleber.jpg'
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
      expertise: 'AI Strategy & Leadership',
      image: '/team/alex-johnson.jpg'
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      image: '/team/sarah.jpg',
      bio: 'Technical expert specializing in AI architecture and cloud infrastructure, leading our development teams.'
=======
      expertise: 'Technology Architecture',
      image: '/team/sarah-chen.jpg'
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI',
      expertise: 'Machine Learning & AI',
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Engineering',
      expertise: 'Software Development',
      image: '/team/emily-watson.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and the expert team behind our innovative technology services." />
        <meta name="keywords" content="about zion tech group, ai solutions company, it services team, technology experts, company mission" />
      </Helmet>

<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
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
=======
      description: 'Expert in cloud architecture and AI system design',
      image: '/team/sarah.jpg'
=======
      image: '/team/sarah.jpg',
      bio: 'Technical visionary with expertise in AI, machine learning, and cloud architecture.',
      expertise: ['AI/ML', 'Cloud Architecture', 'Technical Strategy']
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      image: '/team/michael.jpg',
      bio: 'AI specialist focused on developing cutting-edge machine learning solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Research']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'AI Solutions' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through AI and IT solutions. Meet our expert team and discover our values." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values" />
      </Helmet>

      <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a cutting-edge technology company specializing in AI and IT solutions that transform businesses and drive innovation across industries.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
=======
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
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

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize AI and IT solutions, making cutting-edge technology accessible to businesses of all sizes. 
                  We believe that every organization deserves access to the tools that will define the future.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our mission is to bridge the gap between complex technology and practical business solutions, 
                  ensuring that our clients not only survive but thrive in the digital age.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">AI Innovation</h3>
                      <p className="text-gray-300 text-sm">Cutting-edge AI solutions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cloud className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Cloud Solutions</h3>
                      <p className="text-gray-300 text-sm">Scalable cloud infrastructure</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Security First</h3>
                      <p className="text-gray-300 text-sm">Enterprise-grade security</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-orange-400" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Fast Delivery</h3>
                      <p className="text-gray-300 text-sm">Rapid implementation</p>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
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
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                The principles that guide our work and define our culture
=======
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
                These core values guide everything we do and shape our culture of excellence and innovation.
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
<<<<<<< HEAD
                <div key={index} className="text-center group">
<<<<<<< HEAD
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, IT, and business transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with our innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize advanced AI and IT technologies, making them accessible to businesses of all sizes while maintaining the highest standards of security, performance, and innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe that every organization, regardless of size or industry, should have access to cutting-edge technology solutions that can transform their operations and drive growth.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
<<<<<<< HEAD
            <div className="mt-8 text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our AI and IT solutions.
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/30">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies that have already revolutionized their operations with our AI and IT solutions.
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center border border-purple-500 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">AI Innovation</h3>
                    <p className="text-gray-300 text-sm">Advanced AI solutions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Cloud Solutions</h3>
                    <p className="text-gray-300 text-sm">Scalable cloud infrastructure</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Security First</h3>
                    <p className="text-gray-300 text-sm">Enterprise-grade security</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Custom Development</h3>
                    <p className="text-gray-300 text-sm">Tailored solutions</p>
                  </div>
                </div>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture of excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions and exceptional service delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success and accelerate your growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
=======
            </div>
          </div>
        </section>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
    </div>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default AboutPage;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default AboutPage;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-b8e9
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-8e2b
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-7d13
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-f614
=======
export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a44d
=======
export default AboutPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-0b2b
