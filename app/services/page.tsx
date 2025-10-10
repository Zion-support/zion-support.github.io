'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, Zap, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TrendingUp, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, MessageSquare, Eye, Sparkles } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business needs',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $5,000'
    },
    {
      icon: Cpu,
      title: 'Quantum Computing',
      description: 'Next-generation quantum algorithms and solutions',
      features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization', 'Cryptography'],
      price: 'Starting at $10,000'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
      price: 'Starting at $3,000'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions and consulting',
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'Starting at $2,500'
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Reporting'],
      price: 'Starting at $4,000'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Bespoke software solutions for unique requirements',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development'],
      price: 'Starting at $6,000'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and understand your business goals'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project plan with timelines and milestones'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your solution using cutting-edge technologies'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous testing ensures quality and performance'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'We deploy your solution and provide ongoing support'
    }
  ];

  const benefits = [
    '300% average ROI increase',
    '50% faster time to market',
    '99.9% uptime guarantee',
    '24/7 expert support',
    'Scalable solutions',
    'Enterprise security'
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Quantum Computing & IT Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI, quantum computing, and IT services. From custom development to cloud solutions, we help businesses transform with technology." />
        <meta name="keywords" content="AI services, quantum computing, cloud solutions, cybersecurity, data analytics, custom software, IT consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Our
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to transform your business. 
                From AI development to quantum computing, we deliver results that matter.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge solutions powered by the latest technologies
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results and exceptional service delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-lg text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get a Quote</span>
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;