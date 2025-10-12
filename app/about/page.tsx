'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Target, Award, Globe, Phone, Mail, MapPin, ArrowRight, CheckCircle, Star, Brain, Cloud, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/api/placeholder/300/300',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      expertise: ['AI Strategy', 'Leadership', 'Innovation']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/api/placeholder/300/300',
      bio: 'Technical architect specializing in scalable AI solutions.',
      expertise: ['AI Architecture', 'Cloud Computing', 'DevOps']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      image: '/api/placeholder/300/300',
      bio: 'Leading researcher in machine learning and neural networks.',
      expertise: ['Machine Learning', 'Research', 'Data Science']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      image: '/api/placeholder/300/300',
      bio: 'Cybersecurity expert ensuring enterprise-grade security.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by yours.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and complete transparency in everything we do.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building solutions that make a positive difference worldwide.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are a leading provider of AI and IT solutions, dedicated to transforming businesses through innovative technology and exceptional service.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To democratize AI and advanced technology, making it accessible and beneficial for businesses of all sizes. We believe that every company should have access to cutting-edge AI solutions that drive real business value.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Founded in 2014, Zion Tech Group has been at the forefront of AI innovation, helping over 500 companies worldwide transform their operations and achieve unprecedented growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center"
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300 mb-6">
                  To be the world's most trusted partner for AI and technology transformation, enabling every business to thrive in the digital age.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Ethical AI Development</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Sustainable Technology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Global Accessibility</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we work with our clients and partners.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, technology, and business innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with cutting-edge AI and technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-8 justify-center text-gray-400">
                <div className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutPage;