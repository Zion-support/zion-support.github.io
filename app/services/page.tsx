'use client';

import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, MapPin, Clock, Star, Zap, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions including machine learning models, natural language processing, and computer vision applications.',
      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $5,000',
      duration: '4-12 weeks'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations.',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps', 'Containerization', 'Auto-scaling'],
      price: 'Starting at $3,000',
      duration: '2-8 weeks'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Data Mining', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'ETL Processes'],
      price: 'Starting at $4,000',
      duration: '3-10 weeks'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Bespoke software solutions tailored to your specific business requirements and workflows.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration', 'Legacy Modernization'],
      price: 'Starting at $2,500',
      duration: '2-16 weeks'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response', 'Security Training'],
      price: 'Starting at $3,500',
      duration: '1-6 weeks'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.',
      features: ['Technology Strategy', 'Architecture Review', 'Process Optimization', 'Vendor Selection', 'Digital Transformation'],
      price: 'Starting at $2,000',
      duration: '1-4 weeks'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Stethoscope, description: 'AI-powered diagnostics and patient care solutions' },
    { name: 'Finance', icon: BarChart, description: 'Fraud detection and algorithmic trading systems' },
    { name: 'Manufacturing', icon: Factory, description: 'Predictive maintenance and quality control' },
    { name: 'Education', icon: GraduationCap, description: 'Personalized learning and intelligent tutoring' },
    { name: 'Retail', icon: Building, description: 'Customer analytics and inventory optimization' },
    { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business requirements and current technology stack to understand your needs.',
      icon: Target
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and project plan tailored to your specific goals.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Our expert team builds and implements the solution using cutting-edge technologies.',
      icon: Code
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'We thoroughly test the solution and optimize it for maximum performance and reliability.',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support to ensure continued success.',
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Our Services - Zion Tech Group | AI & IT Solutions"
        description="Discover our comprehensive range of AI and IT services including AI development, cloud solutions, data analytics, and custom software development."
        keywords="AI services, IT consulting, cloud solutions, data analytics, custom development, cybersecurity"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive AI and IT solutions designed to transform your business 
            and drive sustainable growth through innovative technology.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive suite of services covers every aspect of modern technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{service.price}</span>
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work across diverse industries, bringing AI solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <industry.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and explore how our services can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;