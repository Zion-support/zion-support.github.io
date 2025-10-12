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
      description: 'We implement enterprise-grade security measures and maintain the highest standards of data protection and compliance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Agile Delivery',
      description: 'We deliver solutions quickly and efficiently, adapting to your changing needs with flexible development methodologies.'
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
      expertise: 'Cloud Infrastructure',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Data Science',
      expertise: 'Analytics & Insights',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Kim',
      role: 'Security Specialist',
      expertise: 'Cybersecurity',
      image: '/api/placeholder/300/300'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team. We're dedicated to delivering cutting-edge AI and IT solutions that drive business success." />
        <meta name="keywords" content="about us, AI solutions, IT services, technology company, team, mission, values" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are a leading technology company specializing in AI and IT solutions that transform businesses and drive innovation across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive growth, efficiency, and innovation. We believe technology should be accessible, powerful, and transformative.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only meet your current needs but also prepare you for future challenges.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <Cloud className="w-12 h-12 text-white mx-auto mb-4" />
                      <div className="text-white font-semibold">Cloud Solutions</div>
                    </div>
                    <div className="text-center">
                      <Brain className="w-12 h-12 text-white mx-auto mb-4" />
                      <div className="text-white font-semibold">AI Innovation</div>
                    </div>
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-white mx-auto mb-4" />
                      <div className="text-white font-semibold">Security First</div>
                    </div>
                    <div className="text-center">
                      <Code className="w-12 h-12 text-white mx-auto mb-4" />
                      <div className="text-white font-semibold">Custom Development</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our approach to delivering exceptional solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
                  <div className="mb-4">{value.icon}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, cloud computing, and enterprise solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;