'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, CheckCircle, Star, Shield, Brain, Cloud, Zap, Award, Target, Globe, TrendingUp, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Leading the future of technology with AI-powered solutions, quantum computing, 
              and digital transformation services that drive real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/10 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">50+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/10 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">100+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/10 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">300% Average ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To democratize advanced technology and make AI, quantum computing, and cutting-edge 
                  solutions accessible to businesses of all sizes. We believe technology should empower, 
                  not complicate.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our team of expert engineers, data scientists, and technology strategists work 
                  tirelessly to deliver solutions that not only meet today's needs but anticipate 
                  tomorrow's challenges.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Enterprise-Grade Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Scalable Solutions</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 cyber-card">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Brain className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">AI Innovation</h3>
                      <p className="text-sm text-gray-300">Cutting-edge AI solutions</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cloud className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Cloud Excellence</h3>
                      <p className="text-sm text-gray-300">Scalable cloud infrastructure</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
                      <p className="text-sm text-gray-300">Enterprise-grade protection</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8 text-orange-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
                      <p className="text-sm text-gray-300">Rapid deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our approach to technology and client relationships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 rounded-xl p-8 cyber-card hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  We strive for perfection in every project, delivering solutions that exceed expectations 
                  and drive measurable business value.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 cyber-card hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
                <p className="text-gray-300 leading-relaxed">
                  We work closely with our clients as partners, ensuring every solution is tailored 
                  to their unique needs and business goals.
                </p>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-8 cyber-card hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We stay at the forefront of technology, constantly exploring new ways to solve 
                  complex problems and create competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how our AI and technology solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}