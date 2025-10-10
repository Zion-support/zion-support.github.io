'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Users,
  Target,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support' },
    { number: '99%', label: 'Success Rate' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We prioritize security and compliance in all our solutions to protect your business and data.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality solutions that exceed expectations and drive results.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        {/* Mission & Vision Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, secure, and 
                  transformative for organizations of all sizes.
                </p>
                <p className="text-gray-300">
                  Our team of experts combines deep technical knowledge with industry experience 
                  to deliver solutions that not only meet current needs but also prepare 
                  you for future challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading provider of AI and IT solutions, recognized for our innovation, 
                  reliability, and commitment to client success. We envision a future where technology 
                  seamlessly integrates with business operations to create unprecedented value.
                </p>
              </div>
            </div>
          </div>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We constantly push the boundaries of what's possible with technology, 
                  always seeking new and better ways to solve complex problems.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners, ensuring their success 
                  is our success and building long-term relationships.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, delivering high-quality 
                  solutions that exceed expectations and drive real business value.
                </p>
              </div>
            </div>
          </div>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              cloud computing, cybersecurity, and software development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Specialists</h3>
                <p className="text-gray-300">Machine learning engineers and data scientists</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Architects</h3>
                <p className="text-gray-300">Infrastructure and cloud solution experts</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-cyan-500/20">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Security Experts</h3>
                <p className="text-gray-300">Cybersecurity and compliance specialists</p>
              </div>
            </div>
          </div>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how we can help transform your business with AI and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutPage;