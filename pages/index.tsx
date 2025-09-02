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
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300 rounded-full animate-pulse opacity-50"></div>
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient hover:scale-105 transition-transform duration-300 cursor-default"> Zion Tech Group</span>
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
                Innovative, focused software solutions that solve specific business problems with minimal overhead and maximum impact.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/micro-saas" className="text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">8+ Solutions</div>
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
                Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions for modern businesses.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/it-services" className="text-purple-600 hover:text-purple-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">12+ Services</div>
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
                Cutting-edge artificial intelligence solutions to automate processes and gain competitive advantages.
              </p>
              <div className="flex items-center justify-between">
                <Link href="/services/ai-services" className="text-indigo-600 hover:text-indigo-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Learn More →
                </Link>
                <div className="text-sm text-gray-400">10+ Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our cutting-edge technology through interactive demos and live examples.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Demo Card */}
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Content Generator</h3>
              <p className="text-gray-300 mb-4">Try our AI-powered content generation tool</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Try Demo
              </button>
            </div>

            {/* Performance Test Card */}
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Speed Test</h3>
              <p className="text-gray-300 mb-4">Test your website's performance</p>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Run Test
              </button>
            </div>

            {/* Security Scan Card */}
            <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Security Scan</h3>
              <p className="text-gray-300 mb-4">Check your website's security status</p>
              <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                Scan Now
              </button>
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