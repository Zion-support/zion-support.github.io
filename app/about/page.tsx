'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
  Play,
  MessageCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, innovation, mission, values" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
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
                <MessageCircle className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To democratize advanced AI and IT solutions, making cutting-edge technology accessible to businesses of all sizes while fostering innovation and sustainable growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pioneering the future of AI and IT solutions</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">We maintain the highest ethical standards in all our interactions and business practices.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We continuously push boundaries and explore new possibilities in technology.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Heart className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
                <p className="text-gray-300">We are passionate about technology and its potential to transform the world.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Teamwork</h3>
                <p className="text-gray-300">We believe in the power of collaboration and diverse perspectives.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Zap className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for excellence in every project and deliver outstanding results.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">We aim to make a positive impact on businesses and communities worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">By the Numbers</h2>
              <p className="text-xl text-gray-300">Our impact in numbers</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-gray-300">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Your Project</span>
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
