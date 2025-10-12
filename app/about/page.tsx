'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Zap, Brain, Cloud, Shield, Code, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart, BarChart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and business security are our top priorities. We implement enterprise-grade security measures.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to your specific needs. We listen, understand, and deliver exactly what you need.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We measure success by the impact we create for your business, not just the technology we deliver.',
      color: 'from-green-500 to-emerald-500'
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
      role: 'Head of AI',
      description: 'Leading AI researcher and machine learning specialist.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity expert with enterprise security background.',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company providing cutting-edge AI solutions, cloud infrastructure, and cybersecurity services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced 
                  technology and make AI accessible to businesses of all sizes. What started as a 
                  small team of passionate technologists has grown into a comprehensive technology 
                  solutions provider.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Today, we serve clients across various industries, from startups to Fortune 500 
                  companies, helping them harness the power of artificial intelligence, cloud computing, 
                  and cybersecurity to drive innovation and growth.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-slate-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  To empower businesses with cutting-edge technology solutions that drive innovation, 
                  enhance security, and accelerate growth in the digital age.
                </p>
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300">
                  To be the global leader in AI and IT solutions, creating a future where technology 
                  seamlessly integrates with business operations to unlock unlimited potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.color} rounded-lg mb-4`}>
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

        {/* Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The brilliant minds behind our innovative solutions and exceptional service delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;