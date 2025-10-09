'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Brain, Zap, Shield, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';
=======
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link } from 'lucide-react';
import Header from '../components/Header';
>>>>>>> main
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Transform your business with intelligent automation and AI-powered solutions',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/ai-services'
    },
    {
      icon: Zap,
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and support for modern businesses',
      features: ['Cloud Migration', 'System Administration', 'Network Security', 'Database Management'],
      href: '/it-services'
    },
    {
      icon: Globe,
      title: 'Micro SaaS',
      description: 'Purpose-built applications that solve specific business challenges',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'User Management'],
      href: '/micro-saas'
    }
  ];

<<<<<<< HEAD
=======
  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      icon: Cloud,
      features: ['AWS/Azure/GCP Migration', 'Auto-scaling', 'Disaster Recovery', 'Cost Optimization'],
      path: '/cloud-infrastructure'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
      path: '/cybersecurity'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services.',
      icon: Settings,
      features: ['Remote Support', 'System Monitoring', 'Proactive Maintenance', 'Help Desk'],
      path: '/it-support'
    },
    {
      title: 'Database Management',
      description: 'Optimize and secure your database infrastructure.',
      icon: Database,
      features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      path: '/database-management'
    }
  ];

  const microSaasServices = [
    {
      title: 'Custom Micro SAAS',
      description: 'Build tailored software solutions for your specific business needs.',
      icon: Code,
      features: ['Custom Development', 'User Management', 'Payment Integration', 'Analytics Dashboard'],
      path: '/micro-saas'
    }
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: 'Middletown, DE 19709'
  };

>>>>>>> main
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services designed to transform your business. From AI solutions to infrastructure management, we have you covered." />
        <meta name="keywords" content="AI services, IT services, business solutions, digital transformation, technology consulting" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-24">
>>>>>>> main
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                From AI-powered automation to robust IT infrastructure, we provide end-to-end 
                solutions that drive measurable business outcomes and sustainable growth.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="container mx-auto px-4 py-16">
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
=======
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Brain className="w-10 h-10 text-cyan-400 mr-3" />
                AI Services
              </h2>
              <p className="text-xl text-gray-300">Cutting-edge artificial intelligence solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
>>>>>>> main
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={service.href}
                    className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

<<<<<<< HEAD
          {/* Why Choose Us */}
          <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-600">
                  We combine cutting-edge technology with deep industry expertise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <Star className="w-8 h-8" />
=======
          {/* IT Services */}
          <section className="container mx-auto px-4 py-16 bg-white/5">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Cloud className="w-10 h-10 text-blue-400 mr-3" />
                IT Services
              </h2>
              <p className="text-xl text-gray-300">Reliable and scalable technology infrastructure</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                  <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                    <service.icon className="w-12 h-12" />
>>>>>>> main
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Expertise</h3>
                  <p className="text-gray-600">Years of experience delivering successful projects</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                  <p className="text-gray-600">Bank-grade security and compliance standards</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                  <p className="text-gray-600">Quick implementation and time-to-value</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Round-the-clock expert support and monitoring</p>
                </div>
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* CTA Section */}
          <section className="bg-blue-600 py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our experts help you choose the right solutions for your business needs.
              </p>
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Contact Our Experts
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </section>
        </main>
        
=======
          {/* Micro SAAS Services */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                <Code className="w-10 h-10 text-green-400 mr-3" />
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300">Custom software solutions for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
                  <div className="text-green-400 mb-4 group-hover:text-green-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.path}
                    className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">The advantages that set us apart</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Star className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven Expertise</h3>
                <p className="text-gray-300">20+ years of experience in AI and IT solutions</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security and compliance standards</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
                <p className="text-gray-300">300% average ROI for our implementations</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Clock className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business. 
                Get a free consultation and custom solution recommendation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
>>>>>>> main
        <Footer />
      </div>
    </>
  );
};

<<<<<<< HEAD
export default ServicesPage;
=======
export default ServicesPage;
>>>>>>> main
