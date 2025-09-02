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
    { number: '1000+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
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
            with cutting-edge AI, cloud architecture, and innovative development services. From micro SaaS solutions 
            to enterprise AI platforms, we deliver real results with measurable ROI.
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
              <div className="text-4xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-gray-300 font-medium">Happy Clients</div>
              <div className="text-sm text-gray-400 mt-1">Satisfied customers</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-indigo-400 group-hover:scale-110 transition-transform duration-300">99.9%</div>
              <div className="text-gray-300 font-medium">Uptime Guarantee</div>
              <div className="text-sm text-gray-400 mt-1">Reliable service</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-300 font-medium">Support Available</div>
              <div className="text-sm text-gray-400 mt-1">Always here to help</div>
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

      {/* Service Portfolio Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From innovative micro SaaS applications to enterprise-grade AI solutions, we offer a complete range of technology services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">{microSaasServices.length}+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Micro SaaS Solutions</div>
              <div className="text-gray-600">Innovative, focused applications solving specific business challenges</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">{itServices.length}+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">IT Services</div>
              <div className="text-gray-600">Enterprise infrastructure, security, and cloud solutions</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{aiServices.length}+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">AI Services</div>
              <div className="text-gray-600">Cutting-edge artificial intelligence and machine learning solutions</div>
            </div>
          </div>

          {/* Featured Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Meeting Transcriber Pro</h3>
              <p className="text-gray-600 text-sm mb-3">Real-time transcription with action items extraction. Save 2+ hours per meeting with 99% accuracy.</p>
              <div className="text-blue-600 font-semibold">Starting at $25/month</div>
              <div className="text-xs text-gray-500 mt-1">Trusted by 500+ teams</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero Trust Security</h3>
              <p className="text-gray-600 text-sm mb-3">Complete security architecture implementation. Reduce security incidents by 85% with enterprise-grade protection.</p>
              <div className="text-purple-600 font-semibold">Starting at $12,000</div>
              <div className="text-xs text-gray-500 mt-1">SOC 2 compliant</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Generative AI Platform</h3>
              <p className="text-gray-600 text-sm mb-3">Custom AI for content creation and automation. Increase productivity by 300% with intelligent automation.</p>
              <div className="text-indigo-600 font-semibold">Starting at $15,000</div>
              <div className="text-xs text-gray-500 mt-1">ROI in 3 months</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Contract Auditor</h3>
              <p className="text-gray-600 text-sm mb-3">AI-powered blockchain security auditing. Prevent costly breaches with automated vulnerability detection.</p>
              <div className="text-green-600 font-semibold">Starting at $150/month</div>
              <div className="text-xs text-gray-500 mt-1">80% faster audits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Position & Competitive Advantages */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results and measurable ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven ROI</h3>
              <p className="text-gray-600 mb-4">Our clients see average ROI of 300% within 6 months, with measurable improvements in efficiency, cost savings, and revenue growth.</p>
              <div className="text-sm text-blue-600 font-semibold">✓ 98% client satisfaction rate</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Rapid Deployment</h3>
              <p className="text-gray-600 mb-4">Get your solutions up and running in days, not months. Our agile development process ensures quick time-to-market.</p>
              <div className="text-sm text-purple-600 font-semibold">✓ 50% faster deployment</div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 mb-4">Bank-level security with SOC 2 compliance, end-to-end encryption, and 24/7 monitoring to protect your data.</p>
              <div className="text-sm text-indigo-600 font-semibold">✓ 99.9% uptime guarantee</div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Competitive Pricing & Value</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$25-399</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Micro SaaS Solutions</div>
                <div className="text-gray-600">Affordable, focused tools that solve specific business problems with immediate ROI</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">$8,500-180,000</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">IT Services</div>
                <div className="text-gray-600">Enterprise-grade infrastructure and security solutions with comprehensive support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">$12,000-400,000</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">AI Services</div>
                <div className="text-gray-600">Cutting-edge AI solutions that transform business operations and drive innovation</div>
              </div>
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
            Join 500+ companies that have transformed their operations with our cutting-edge technology solutions. 
            Get a free consultation and discover how we can drive measurable ROI for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              View All Services
            </Link>
            <Link href="/about" className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg">
              <span className="flex items-center justify-center">
                Learn More About Us
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </span>
>>>>>>> 3a0dfffd7985721e0c3f08f0ab92fe452b501ae8
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;