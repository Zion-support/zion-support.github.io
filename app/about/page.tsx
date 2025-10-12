'use client';
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Zap, Brain, Cloud, Shield, Code, ArrowRight, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
=======
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Shield, Globe, Brain, Cloud, CheckCircle, Award, Zap, Code, Star
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

>>>>>>> cursor/fix-errors-and-merge-to-main-1443
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

<<<<<<< HEAD
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
=======
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and drive innovation.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced security measures to protect your digital assets and ensure compliance.'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed specifically for your unique requirements.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide presence with local expertise to serve clients across all continents.'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast and efficient implementation of solutions to accelerate your time to market.'
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
    }
  ];

  const team = [
    {
<<<<<<< HEAD
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Leadership',
      image: '/team/alex-johnson.jpg'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Technology Architecture',
      image: '/team/sarah-chen.jpg'
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
=======
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'AI & Machine Learning',
      image: '/images/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Cybersecurity',
      expertise: 'Security & Compliance',
      image: '/images/team/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Lead Data Scientist',
      expertise: 'Data Analytics & AI',
      image: '/images/team/priya-patel.jpg'
    },
    {
      name: 'James Wilson',
      role: 'Cloud Architecture Director',
      expertise: 'Cloud & Infrastructure',
      image: '/images/team/james-wilson.jpg'
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading technology company providing AI solutions, cloud infrastructure, cybersecurity, and custom software development services." />
        <meta name="keywords" content="about us, company, team, AI solutions, technology company, IT services, cloud computing, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            </div>
          </div>
        </section>

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
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
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
                    {value.icon}
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
      </div>
    </>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI, cybersecurity, cloud solutions, and custom software development. Discover our commitment to innovation and client success." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions provider, cybersecurity experts, cloud solutions, custom software development" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading provider of AI and IT solutions with expertise in cybersecurity, cloud infrastructure, and custom development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions, 
              cybersecurity, cloud infrastructure, and custom software development. 
              Our mission is to transform businesses through innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance security, and create sustainable competitive advantages in the digital age.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in the transformative power of technology and are committed to 
                delivering solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Innovation-driven approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Client-centric solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  <span className="text-gray-700">Continuous learning and adaptation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Proven track record of successful project delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Expert team with deep industry knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Cutting-edge technology and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <span>24/7 support and maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in delivering comprehensive technology solutions across multiple domains
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-12 w-12 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, ensuring their success is our success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty, transparency, and ethical conduct.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously push the boundaries of what's possible with technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our expertise can help you achieve your technology goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-1443
  );
};

export default AboutPage;