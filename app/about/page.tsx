'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users, Award, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      expertise: "AI Strategy & Business Development",
      image: "/images/team/sarah-chen.jpg",
      bio: "15+ years in AI and machine learning, former Google AI researcher."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      expertise: "Cloud Architecture & Security",
      image: "/images/team/michael-rodriguez.jpg",
      bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience."
    },
    {
      name: "Emily Johnson",
      role: "Head of AI Research",
      expertise: "Machine Learning & Data Science",
      image: "/images/team/emily-johnson.jpg",
      bio: "PhD in Computer Science, specializing in deep learning and NLP."
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      expertise: "5G Technology & IoT",
      image: "/images/team/david-kim.jpg",
      bio: "Telecommunications expert with extensive experience in 5G implementation."
    }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI and technology."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Enterprise-grade security is at the core of everything we build."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project and solution we deliver."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "AI Solutions" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading AI and IT solutions company with expert team and innovative approach." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a leading technology company specializing in AI and IT solutions for modern businesses. 
            Our mission is to empower organizations with cutting-edge technology that drives innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300">
              To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
              efficiency, and sustainable growth in the digital age.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300">
              To be the global leader in AI and IT solutions, transforming how businesses operate, 
              compete, and thrive in an increasingly connected world.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-300 mb-3">{member.expertise}</p>
                <p className="text-sm text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of experienced professionals in AI, machine learning, cloud computing, 
                and IT solutions with proven track records.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We stay at the forefront of technology, constantly innovating and improving our solutions 
                to meet evolving business needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
              <p className="text-gray-300">
                We provide comprehensive support and maintenance for all our solutions, ensuring your 
                success every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}