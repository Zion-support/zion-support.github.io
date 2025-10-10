'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services." />
        <meta name="keywords" content="about us, AI solutions, IT services, Zion Tech Group, company, team, mission" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI-powered solutions, 
            quantum computing, and digital transformation services.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, powerful, 
                and transformative.
              </p>
              <p className="text-gray-300 mb-6">
                Our team of experts combines deep technical knowledge with business acumen to 
                deliver solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Brain className="h-8 w-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">AI Innovation</h3>
                <p className="text-gray-300 text-sm">Cutting-edge artificial intelligence solutions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade security and compliance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Zap className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                <p className="text-gray-300 text-sm">Rapid deployment and implementation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Globe className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
                <p className="text-gray-300 text-sm">Worldwide support and deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, delivering solutions that exceed expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
              <p className="text-gray-300">
                We believe in the power of collaboration and work closely with our clients as partners.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously innovate and stay ahead of technology trends to serve our clients better.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;