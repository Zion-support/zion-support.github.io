'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Users, Award, Target, Zap, Shield, Brain, Cloud, Code, BarChart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Leading provider of AI and IT solutions. Our mission, team, and commitment to innovation." />
        <meta name="keywords" content="about, Zion Tech Group, AI solutions, IT services, team, mission, innovation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Leading the future of technology with innovative AI and IT solutions that transform businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                efficiency, and growth. We believe technology should be accessible, powerful, and transformative.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Since our founding in 2020, we've helped over 500 companies worldwide achieve their 
                digital transformation goals with our comprehensive suite of AI-powered tools and services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                <Target className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
              <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                We constantly push the boundaries of what's possible with AI and technology, 
                always seeking new ways to solve complex problems.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
              <Shield className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300">
                Your data and systems are protected with enterprise-grade security measures 
                and compliance standards.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
              <Cloud className="w-16 h-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Scalability</h3>
              <p className="text-gray-300">
                Our solutions grow with your business, providing flexible and scalable 
                infrastructure that adapts to your needs.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
              <Code className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards in everything we do, from code quality 
                to customer service.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
              <BarChart className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Results</h3>
              <p className="text-gray-300">
                We focus on delivering measurable results that drive real business value 
                and growth for our clients.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
              <Users className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-white mb-4">Partnership</h3>
              <p className="text-gray-300">
                We work closely with our clients as partners, understanding their unique 
                challenges and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how Zion Tech Group can help transform your business with our 
            innovative AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-2 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>364 E Main St STE 1008, Middletown, DE 19709</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;