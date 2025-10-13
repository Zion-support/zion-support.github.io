'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI and IT solutions for modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with cutting-edge AI and IT solutions that drive innovation and growth.
            </p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in AI and IT solutions, transforming how businesses operate and compete.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of experienced professionals in AI, machine learning, and IT solutions.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We stay at the forefront of technology, constantly innovating and improving our solutions.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Support</h3>
              <p className="text-gray-300">
                We provide comprehensive support and maintenance for all our solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
=======
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
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Trust",
      description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Success",
      description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading provider of AI solutions, cybersecurity, cloud services, and 5G technology. Meet our expert team and discover our mission." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to transforming businesses through innovative AI solutions, 
            robust cybersecurity, scalable cloud services, and cutting-edge 5G technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To democratize access to advanced technology by providing businesses of all sizes with 
              AI-powered solutions, robust security measures, and scalable cloud infrastructure that 
              drive growth and innovation.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be the global leader in technology solutions, empowering organizations worldwide 
              to harness the full potential of AI, cloud computing, and next-generation connectivity 
              to create a more connected and intelligent future.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center group hover:bg-white/20 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-3">{member.expertise}</p>
                <p className="text-gray-400 text-xs">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
