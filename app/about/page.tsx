'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Users, CheckCircle, Star, Shield, Brain, Cloud, Zap, Award, Globe, Target, TrendingUp, Code, BarChart, Lock, Clock, Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="About Zion Tech Group - AI & IT Solutions Leader"
        description="Learn about Zion Tech Group's mission to transform businesses with cutting-edge AI and IT solutions. Discover our team, values, and commitment to innovation."
        keywords="about zion tech group, AI company, IT solutions, team, mission, values"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are pioneers in AI-powered enterprise solutions, quantum computing, and digital transformation. 
              Our mission is to revolutionize how businesses operate through cutting-edge technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-white">50+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white">100+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white">300% Average ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize advanced AI and IT solutions, making cutting-edge technology accessible 
                to businesses of all sizes. We believe every organization deserves access to tools that 
                can transform their operations and drive unprecedented growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Innovation First</h3>
                    <p className="text-gray-300">We stay at the forefront of technological advancement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Client Success</h3>
                    <p className="text-gray-300">Your success is our primary measure of achievement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Ethical AI</h3>
                    <p className="text-gray-300">We develop responsible AI that benefits humanity</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-2xl p-8 cyber-card">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To create a future where AI and advanced technology seamlessly integrate into every 
                aspect of business operations, enabling organizations to achieve their full potential 
                while maintaining the highest standards of security, ethics, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 cyber-card">
              <Brain className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">We constantly push the boundaries of what's possible with AI and technology</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 cyber-card">
              <Shield className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Security</h3>
              <p className="text-gray-300">Enterprise-grade security is built into every solution we deliver</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 cyber-card">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300">We work closely with our clients as true partners in their success</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 cyber-card">
              <Zap className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">We deliver exceptional quality in every project and interaction</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-xl p-6 cyber-card">
              <Globe className="w-12 h-12 text-indigo-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
              <p className="text-gray-300">We're committed to making a positive impact on businesses worldwide</p>
            </div>
            <div className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 rounded-xl p-6 cyber-card">
              <Target className="w-12 h-12 text-teal-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Results-Driven</h3>
              <p className="text-gray-300">We focus on delivering measurable, impactful results for our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The experts behind our innovative solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kleber Santos</h3>
              <p className="text-cyan-400 mb-3">CEO & Founder</p>
              <p className="text-gray-300 text-sm">
                Visionary leader with 15+ years in AI and enterprise solutions. 
                Passionate about transforming businesses through technology.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Research Team</h3>
              <p className="text-purple-400 mb-3">Machine Learning Engineers</p>
              <p className="text-gray-300 text-sm">
                World-class AI researchers and engineers developing cutting-edge 
                machine learning models and algorithms.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 cyber-card">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development Team</h3>
              <p className="text-green-400 mb-3">Full-Stack Developers</p>
              <p className="text-gray-300 text-sm">
                Expert developers building scalable, secure, and high-performance 
                applications and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can help you achieve your goals. 
            Get a free consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}