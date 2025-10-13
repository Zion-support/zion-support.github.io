<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import React from 'react;

import { Helmet } from 'react-helmet-async;

import {
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users } from 'lucide-react';

=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain } from "lucide-react";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
export default function AboutPage() {
  // Team members data (for future use)
  // const teamMembers = [
  //   {
  //     name: "Sarah Chen",
  //     role: "CEO & Co-Founder",
  //     expertise: "AI Strategy & Business Development",
  //     image: "/images/team/sarah-chen.jpg",
  //     bio: "15+ years in AI and machine learning, former Google AI researcher."
  //   },
  //   {
  //     name: "Michael Rodriguez",
  //     role: "CTO & Co-Founder",
  //     expertise: "Cloud Architecture & Security",
  //     image: "/images/team/michael-rodriguez.jpg",
  //     bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience."
  //   },
  //   {
  //     name: "Emily Johnson",
  //     role: "Head of AI Research",
  //     expertise: "Machine Learning & Data Science",
  //     image: "/images/team/emily-johnson.jpg",
  //     bio: "PhD in Computer Science, specializing in deep learning and NLP."
  //   },
  //   {
  //     name: "David Kim",
  //     role: "Head of Engineering",
  //     expertise: "5G Technology & IoT",
  //     image: "/images/team/david-kim.jpg",
  //     bio: "Telecommunications expert with extensive experience in 5G implementation."
  //   }
  // ];

  // Company values (for future use)
  // const values = [
  //   {
  //     icon: <Brain className="w-8 h-8" />,
  //     title: "Innovation First",
  //     description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Security & Trust",
  //     description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Client Success",
  //     description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     title: "Excellence",
  //     description: "We maintain the highest standards of quality in everything we do, from code to customer service."
  //   }
  // ];

  // Company stats (for future use)
  // const stats = [
  //   { number: "500+", label: "Projects Completed" },
  //   { number: "150+", label: "Happy Clients" },
  //   { number: "99.9%", label: "Uptime Guarantee" },
  //   { number: "24/7", label: "Support Available" }
  // ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Target, Lightbulb, Heart, Globe, Clock, DollarSign, BarChart, Settings, MessageSquare, FileText, Phone, MapPin, Sparkles, Cpu, Lock, TrendingUp, Calendar, CheckSquare, MessageCircle, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, ShoppingCart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, always staying ahead of the curve.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is driven by a genuine passion for technology and a commitment to delivering exceptional results.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty, transparency, and ethical business practices in everything we do.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring our solutions exceed expectations and deliver real value.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber.jpg',
      description: 'Visionary leader with 15+ years in AI and enterprise solutions.',
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        twitter: 'https://twitter.com/kleber_santos'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah.jpg',
      description: 'Technical architect specializing in cloud infrastructure and AI systems.',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        github: 'https://github.com/sarah-johnson'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      image: '/team/michael.jpg',
      description: 'AI research lead with expertise in machine learning and neural networks.',
      social: {
        linkedin: 'https://linkedin.com/in/michael-chen',
        twitter: 'https://twitter.com/michael_chen'
      }
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
      description: 'Successfully delivered our first enterprise AI solution, helping a Fortune 500 company optimize their operations.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ experts and expanded our service offerings to include comprehensive IT solutions.'
    },
    {
      year: '2023',
      title: 'AI Innovation Lab',
      description: 'Launched our AI Innovation Lab to research and develop cutting-edge solutions for emerging technologies.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations internationally and launched our micro SAAS product suite for small and medium businesses.'
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37

=======
import React from 'react'
import { Helmet } from 'react-helmet-async'

const AboutPage: React.FC = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  </>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-white font-semibold">Innovation First</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
                  <Brain className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                  <p className="text-gray-200">
                    Our advanced AI technologies are designed to solve complex business challenges 
                    and unlock new opportunities for growth and efficiency.
=======
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about us, team, mission, AI company, IT solutions, technology leadership" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're a team of passionate technologists, AI researchers, and business strategists 
                dedicated to transforming how organizations leverage technology for growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  To democratize artificial intelligence and advanced technology, making it accessible 
                  and beneficial for businesses of all sizes. We believe that every organization, 
                  regardless of size or industry, should have access to cutting-edge AI solutions 
                  that can transform their operations and drive growth.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our approach combines deep technical expertise with a deep understanding of business 
                  challenges, ensuring that our solutions not only work technically but also deliver 
                  real, measurable value to our clients.
                </p>
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Work With Us
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 text-center">
                  <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
                  <p className="text-gray-300 text-sm">Cutting-edge AI research and development</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 text-center">
                  <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Cloud Solutions</h3>
                  <p className="text-gray-300 text-sm">Scalable and secure cloud infrastructure</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
                  <p className="text-gray-300 text-sm">Enterprise-grade security and compliance</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl p-6 text-center">
                  <Code className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
                  <p className="text-gray-300 text-sm">Tailored solutions for unique needs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
                  </p>
                </div>
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate about transforming businesses through cutting-edge AI and IT solutions.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To empower businesses with innovative AI and IT solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe technology should be accessible, powerful, and transformative. 
                Our team of experts works tirelessly to deliver solutions that not only meet 
                today's needs but anticipate tomorrow's challenges.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pioneering the future of AI and IT solutions</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
                  <
                <
              <
            <
          <
<
                These principles guide everything we do and shape our approach to innovation and client success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions and solutions.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their success journey.
                </p>
        {/* Team Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                software development, and business transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Research Team</h3>
                <p className="text-gray-400">Leading AI researchers and engineers</p>
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="w-6 h-6 text-purple-400 mr-3" />
                <span>Expert Team Support</span>
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's start a conversation about your goals and how we can help.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </div>
            ))}
    </div>
  );
}
=======
        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
=======
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">About Zion Tech Group</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading the future of AI and IT solutions with cutting-edge technology and innovative approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                We are dedicated to transforming businesses through advanced AI and IT solutions. 
                Our mission is to empower organizations with cutting-edge technology that drives 
                innovation, efficiency, and growth.
              </p>
              <p className="text-gray-300">
                With over 500+ successful projects and a team of expert professionals, 
                we deliver solutions that exceed expectations and deliver measurable results.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Innovation and Excellence
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Client-Centric Approach
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Continuous Learning
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Ethical Technology
                </li>
              </ul>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Key milestones in our company's growth and evolution
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{event.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help transform your business with cutting-edge AI and IT solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                  </Link>
                  <Link 
                    to="/services"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
=======
        <meta name="description" content="About Us services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced About Us solutions by Zion Tech Group
            </p>
          </div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
      </div>
    </>
  )
}
=======
        
        <Footer />
      </div>
    </>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

<<<<<<< HEAD
export default AboutPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
export default AboutPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
