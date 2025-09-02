import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies Worldwide
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient"> Zion Tech Group</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Leading technology solutions provider helping businesses transform their digital presence 
            with cutting-edge AI, cloud architecture, and innovative development services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link href="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/services" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg">
              <span className="flex items-center justify-center">
                Explore Services
                <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center group">
              <div className="text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-300 font-medium">Projects Completed</div>
              <div className="text-sm text-gray-400 mt-1">Successfully delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-300 font-medium">Expert Team</div>
              <div className="text-sm text-gray-400 mt-1">Certified professionals</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-indigo-400 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-gray-300 font-medium">Client Satisfaction</div>
              <div className="text-sm text-gray-400 mt-1">5-star rated</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-300 font-medium">Support Available</div>
              <div className="text-sm text-gray-400 mt-1">Always here for you</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 border border-blue-200">
                <TrendingUp className="w-4 h-4 mr-2" />
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age with cutting-edge innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Micro SaaS Services */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Micro SaaS Solutions</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Innovative, focused software solutions including AI Code Reviewer, Smart Contract Auditor, Blockchain Analytics, and IoT Device Management.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">20+ Solutions</div>
              </div>
            </div>

            {/* IT Services */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Advanced IT Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cutting-edge IT solutions including Edge Computing, Quantum Computing Readiness, Zero Trust Security, and 5G Network Implementation.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/it-services" className="text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">18+ Services</div>
              </div>
            </div>

            {/* AI Services */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary AI solutions including Drug Discovery, Climate Modeling, Autonomous Systems, and Personalized Medicine platforms.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/ai-services" className="text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">22+ Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Clock className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid development cycles with agile methodologies</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Enterprise-grade security and 99.9% uptime</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <Users className="w-10 h-10 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of experience</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-200 transition-colors">
                <Star className="w-10 h-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">98% client satisfaction and 500+ successful projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Innovative Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most cutting-edge solutions that are transforming industries and driving digital innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Drug Discovery */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Drug Discovery Platform</h3>
              <p className="text-gray-600 mb-4 text-sm">Revolutionary AI-powered drug discovery using machine learning for molecular design and clinical trial optimization.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600">$50K+</span>
                <span className="text-sm text-gray-500">Starting Price</span>
              </div>
              <Link href="/services/ai-drug-discovery" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn More →
              </Link>
            </div>

            {/* Quantum Computing */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quantum Computing Readiness</h3>
              <p className="text-gray-600 mb-4 text-sm">Future-proof your technology infrastructure with quantum computing readiness assessment and preparation services.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-purple-600">$25K+</span>
                <span className="text-sm text-gray-500">Starting Price</span>
              </div>
              <Link href="/services/quantum-computing-readiness" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn More →
              </Link>
            </div>

            {/* Smart Contract Auditor */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Contract Security Auditor</h3>
              <p className="text-gray-600 mb-4 text-sm">AI-powered smart contract auditing platform for blockchain security analysis and vulnerability detection.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-orange-600">$199+</span>
                <span className="text-sm text-gray-500">Starting Price</span>
              </div>
              <Link href="/services/smart-contract-auditor" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn More →
              </Link>
            </div>

            {/* Edge Computing */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Edge Computing Solutions</h3>
              <p className="text-gray-600 mb-4 text-sm">Comprehensive edge computing implementation for low-latency applications, IoT, and real-time processing.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-blue-600">$12K+</span>
                <span className="text-sm text-gray-500">Starting Price</span>
              </div>
              <Link href="/services/edge-computing-solutions" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn More →
              </Link>
            </div>

            {/* AI Climate Modeling */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Climate Modeling</h3>
              <p className="text-gray-600 mb-4 text-sm">Advanced AI climate modeling system for weather prediction, climate change analysis, and environmental impact assessment.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-teal-600">$30K+</span>
                <span className="text-sm text-gray-500">Starting Price</span>
              </div>
              <Link href="/services/ai-climate-modeling" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn More →
              </Link>
            </div>

            {/* Zero Trust Security */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Trust Security</h3>
              <p className="text-gray-600 mb-4 text-sm">Complete zero trust security architecture implementation with identity verification and continuous monitoring.</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-red-600">$15K+</span>
                <span className="text-sm text-gray-500">Starting Price</span>
              </div>
              <Link href="/services/zero-trust-security" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-200">+1 302 464 0950</p>
              <p className="text-sm text-blue-300 mt-1">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-200">kleber@ziontechgroup.com</p>
              <p className="text-sm text-blue-300 mt-1">24/7 Support Available</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-200">364 E Main St STE 1008</p>
              <p className="text-sm text-blue-300 mt-1">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business with cutting-edge technology solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link href="/about" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg">
              <span className="flex items-center justify-center">
                Learn More About Us
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;