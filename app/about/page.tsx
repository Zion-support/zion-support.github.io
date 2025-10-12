'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Brain,
  Cloud,
  BarChart3,
  Star
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.',
      icon: <Zap className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
      icon: <Award className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business relationships.',
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in their digital transformation journey.',
      icon: <Users className="w-8 h-8 text-blue-400" />
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in technology and business strategy.',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technology expert specializing in AI and cloud architecture.',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      description: 'Full-stack developer with expertise in modern web technologies.',
      image: '/team/michael.jpg'
    }
  ];

  const stats = [
    { number: '150+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '1,200+', label: 'Projects Completed', icon: <Target className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> }
  ];

  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services.',
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights.',
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading Technology Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, IT services, and digital transformation. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, technology company, team, mission, values" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI solutions, IT services, and digital transformation. 
                Our mission is to empower businesses with cutting-edge technology.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with innovative AI and IT solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
                <p className="text-gray-300">
                  We believe technology should be accessible, powerful, and transformative. 
                  Our team of experts works tirelessly to deliver solutions that not only meet 
                  current needs but anticipate future challenges.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To be the global leader in AI-powered technology solutions, 
                  recognized for our innovation, reliability, and commitment to client success.
                </p>
                <p className="text-gray-300">
                  We envision a future where every business can leverage the power of 
                  artificial intelligence and advanced technology to achieve their goals 
                  and make a positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What We Do</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let's discuss how we can help transform your business with our technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link
                  to="/it-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Services
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
