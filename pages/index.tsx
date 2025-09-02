<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import MainLayout from '../src/components/layout/MainLayout';
import { ArrowRight, Brain, Code, Network, Zap, Shield, Globe, Users, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Award } from 'lucide-react';
=======
import React from
  'react';
import Head from
  'next/head';
>>>>>>> origin/main

export default function Home() {
  const featuredServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions including custom models, computer vision, NLP, and predictive analytics.',
      link: '/services/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Micro SaaS Solutions',
      description: 'Innovative micro SaaS applications for business automation, productivity, and growth.',
      link: '/services/micro-saas',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'IT Services & Infrastructure',
      description: 'Comprehensive IT services including cloud migration, cybersecurity, and infrastructure management.',
      link: '/services/it-services',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '150+', label: 'Services & Solutions', icon: Zap },
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Expert Support', icon: Shield }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven Results',
      description: 'Track record of successful implementations with measurable ROI across all industries.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Implementation',
      description: 'Rapid deployment and implementation with minimal downtime and maximum efficiency.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced threat protection.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: '24/7 support from experienced developers, engineers, and AI specialists.'
    }
  ];

  return (
    <MainLayout
      title="Zion Tech Group - Leading Technology Solutions Provider"
      description="Leading provider of revolutionary technology solutions, AI services, micro SaaS applications, and cutting-edge innovations. Transform your business with our comprehensive technology services."
      keywords="AI services, micro SaaS, IT services, technology solutions, artificial intelligence, machine learning, cloud computing, cybersecurity"
      url="https://ziontechgroup.com"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Leading provider of revolutionary technology solutions, AI services, micro SaaS applications, 
                and cutting-edge innovations. Transform your business with our comprehensive technology services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105 hover:shadow-xl">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center hover:scale-105">
                  Explore Our Services
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology services designed to transform your business and drive innovation across all industries.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <Link key={index} href={service.link} className="group">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200 group-hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results with proven methodologies, cutting-edge technology, and expert implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Contact us today to discuss your technology needs and discover how our solutions can drive your success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <p className="text-gray-200 text-lg">+1 302 464 0950</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <p className="text-gray-200 text-lg">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Address</h3>
                <p className="text-gray-200 text-lg">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}