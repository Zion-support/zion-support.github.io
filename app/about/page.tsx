'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Link as LinkIcon } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: 'Security & Trust',
      description: 'Your data and business operations are protected with enterprise-grade security measures and compliance standards.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Client-Centric',
      description: 'We prioritize your success and work closely with you to understand your unique challenges and goals.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Performance Excellence',
      description: 'We deliver high-performance solutions that scale with your business and exceed your expectations.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/api/placeholder/300/300',
      bio: 'AI and Machine Learning expert with 15+ years of experience in enterprise solutions.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Software Architect',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer specializing in scalable cloud architectures and microservices.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      image: '/api/placeholder/300/300',
      bio: 'Data science leader with expertise in predictive analytics and business intelligence.'
    },
    {
      name: 'James Thompson',
      role: 'Security Director',
      image: '/api/placeholder/300/300',
      bio: 'Cybersecurity expert ensuring our solutions meet the highest security standards.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our team of experts delivers innovative technology solutions for businesses worldwide." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, team, expertise" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-slate-900"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, 
                  reliable, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of experts combines deep technical knowledge with business acumen 
                  to deliver solutions that not only meet your current needs but also scale 
                  with your future ambitions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="bg-slate-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Proven track record of successful projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Expert team with deep industry knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Cutting-edge technology and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                These core values guide everything we do and shape our approach to delivering exceptional solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                software development, data science, and cybersecurity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-500 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;