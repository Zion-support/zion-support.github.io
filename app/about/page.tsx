'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Brain, Cloud, Shield, Code, ArrowRight, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships through exceptional service and measurable results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Trust',
      description: 'Your data security is our top priority. We implement enterprise-grade security measures to protect your business.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: 'Scalable Solutions',
      description: 'We design solutions that grow with your business, ensuring long-term value and adaptability.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Software Architect',
      expertise: 'Full-Stack Development',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Data Science',
      expertise: 'Data Analytics & AI',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Kim',
      role: 'Security Specialist',
      expertise: 'Cybersecurity & Compliance',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge AI and IT solutions that transform businesses worldwide." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, company values" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions and innovative IT services. 
              Our mission is to transform businesses through cutting-edge technology and exceptional service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/services" 
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with innovative AI and IT solutions that drive growth, efficiency, and competitive advantage. 
                We believe technology should be accessible, reliable, and transformative.
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-gray-300">
                To be the global leader in AI-powered business solutions, creating a future where technology seamlessly 
                integrates with human potential to solve the world's most complex challenges.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-400/30">
                <Code className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Innovation at Scale</h3>
                <p className="text-gray-300">
                  We combine cutting-edge AI research with practical business applications to deliver solutions 
                  that make a real difference in your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our culture of excellence and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, software development, 
              and business strategy to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;