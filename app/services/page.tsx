'use client';
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, MapPin, Clock, Star, Zap, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
description: 'Cutting-edge artificial intelligence solutions to transform your business',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      pricing: 'Starting at $5,000/month',
      path: '/ai-solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Auto-scaling'],
      pricing: 'Starting at $3,000/month',
      path: '/cloud-computing'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
      pricing: 'Starting at $2,500/month',
      path: '/cybersecurity'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design'],
      pricing: 'Starting at $8,000/project',
      path: '/custom-development'

    },
    {
      icon: Database,
      title: 'Data Analytics',
description: 'Turn your data into actionable insights with advanced analytics platforms.',
      features: ['Real-time Dashboards', 'Data Visualization', 'Business Intelligence', 'Custom Reports'],
      price: 'From $3,000/month'

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services | Zion Tech Group</title>
        <meta name="description" content="Professional Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, Zion Tech Group, services" />
      </Helmet>
<<<<<<< HEAD

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
=======
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Our <span className="text-cyan-400">Services</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business and drive growth.
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
=======
          {/* Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (</div>
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"></div>
                  <div className="flex items-center mb-6"></div>
                    <service.icon className="w-12 h-12 text-cyan-400 mr-4 group-hover:text-cyan-300 transition-colors" />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how our services can help transform your business.
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced services solutions. 
              Powered by cutting-edge AI technology and industry expertise.
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>
=======
          {/* Why Choose Us */}
          <section className="bg-white/5 py-20">
            <div className="container mx-auto px-4"></div>
              <div className="text-center mb-16"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300">
                  We combine cutting-edge technology with deep industry expertise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                <div className="text-center"></div>
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div>
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
                  <p className="text-gray-400">Years of experience delivering successful projects</p>
                </div>
                
                <div className="text-center"></div>
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div>
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-400">Bank-grade security and compliance standards</p>
                </div>
                
                <div className="text-center"></div>
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div>
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-gray-400">Quick implementation and time-to-value</p>
                </div>
                
                <div className="text-center"></div>
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div>
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                  <p className="text-gray-400">Round-the-clock expert support and monitoring</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-purple-600 py-20">
            <div className="container mx-auto px-4 text-center"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      </div>
    </>
);
}
=======
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our services solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our services solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your services needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-efd4
