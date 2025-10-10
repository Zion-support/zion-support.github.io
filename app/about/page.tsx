'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Users, 
  Target, 
  Award, 
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, team, mission, values, innovation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are a leading technology company dedicated to transforming businesses through innovative AI solutions, 
                comprehensive IT services, and cutting-edge micro SaaS applications.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To empower businesses with cutting-edge AI and IT solutions that drive growth, 
                  efficiency, and innovation. We believe technology should be accessible, powerful, 
                  and transformative for organizations of all sizes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Democratizing AI technology for businesses</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Delivering exceptional IT solutions and support</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">Fostering innovation and continuous improvement</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To be the global leader in AI and IT solutions, recognized for our innovation, 
                  reliability, and commitment to client success. We envision a future where every 
                  business can leverage advanced technology to achieve their goals.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      Innovation & Excellence
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      Client-Centric Approach
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      Integrity & Transparency
                    </li>
                    <li className="flex items-center text-gray-300">
                      <Star className="w-5 h-5 text-yellow-400 mr-3" />
                      Continuous Learning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive technology solutions across three main areas
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence solutions including machine learning, 
                  natural language processing, computer vision, and predictive analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
                <p className="text-gray-300 mb-6">
                  Complete IT infrastructure management, cloud solutions, cybersecurity, 
                  and technical support for modern businesses.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Cloud Infrastructure</li>
                  <li>• Cybersecurity</li>
                  <li>• Data Management</li>
                  <li>• Technical Support</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Micro SaaS</h3>
                <p className="text-gray-300 mb-6">
                  Ready-to-use business tools and applications that solve specific problems 
                  with AI-powered features and modern interfaces.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Business Analytics</li>
                  <li>• CRM Solutions</li>
                  <li>• Content Creation</li>
                  <li>• Process Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experts behind our innovative solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Engineers</h3>
                <p className="text-gray-400 mb-4">Machine Learning & Data Science Experts</p>
                <p className="text-sm text-gray-300">
                  Our AI team specializes in developing cutting-edge machine learning models 
                  and implementing AI solutions across various industries.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Cloud className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">IT Specialists</h3>
                <p className="text-gray-400 mb-4">Infrastructure & Cloud Experts</p>
                <p className="text-sm text-gray-300">
                  Our IT professionals ensure your infrastructure is secure, scalable, 
                  and optimized for peak performance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Product Managers</h3>
                <p className="text-gray-400 mb-4">Strategy & Innovation Leaders</p>
                <p className="text-sm text-gray-300">
                  Our product team ensures our solutions meet real business needs 
                  and deliver measurable value to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your business with our AI and IT solutions?
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-6 h-6 text-cyan-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-6 h-6 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;