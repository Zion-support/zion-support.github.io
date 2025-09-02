import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock } from 'lucide-react';
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
            with cutting-edge AI, quantum-ready security, blockchain infrastructure, and innovative development services. 
            From AI-powered micro SaaS applications to enterprise-grade autonomous systems, we deliver measurable results 
            that drive growth, efficiency, and competitive advantage.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From AI-powered micro SaaS applications to quantum-ready security solutions and autonomous systems development, 
              we provide cutting-edge technology solutions that drive measurable business results and future-proof competitive advantages.
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
                AI-powered micro SaaS solutions including meeting summarization, sentiment analysis, code review automation, 
                and workflow optimization. Starting from $12/month, our intelligent applications deliver immediate ROI and scale with your business.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">15+ Solutions</div>
              </div>
            </div>

            {/* IT Services */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">IT Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Next-generation IT infrastructure including edge computing, quantum-ready security, 5G optimization, 
                and blockchain solutions. From $2,000 to $200,000, our advanced IT services ensure your infrastructure is future-proof and optimized.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/it-services" className="text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">16+ Services</div>
              </div>
            </div>

            {/* AI Services */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">AI Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Revolutionary AI solutions including drug discovery, climate modeling, autonomous systems, and personalized medicine. 
                From $4,000 to $400,000, our advanced AI services transform industries with cutting-edge machine learning and automation.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/ai-services" className="text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">18+ Solutions</div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 1000+ successful businesses that have transformed their operations with our cutting-edge technology solutions. 
            From AI-powered automation to quantum-ready security, get a free consultation and discover how we can accelerate your growth and future-proof your business.
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