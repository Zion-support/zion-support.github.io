<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, MapPin, Clock, Star, Zap, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 'ai-development',
      category: 'ai',
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions including machine learning models, natural language processing, and computer vision applications.',
      features: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
      price: 'From $5,000',
      duration: '4-12 weeks'
    },
    {
      id: 'cloud-solutions',
      category: 'cloud',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud migration, architecture design, and optimization services for AWS, Azure, and GCP.',
      features: ['Cloud Migration', 'Architecture Design', 'DevOps', 'Security', 'Cost Optimization'],
      price: 'From $3,000',
      duration: '2-8 weeks'
    },
    {
      id: 'web-development',
      category: 'web',
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.',
      features: ['React/Next.js', 'TypeScript', 'Responsive Design', 'SEO Optimization', 'Performance'],
      price: 'From $2,000',
      duration: '2-6 weeks'
    },
    {
      id: 'mobile-development',
      category: 'mobile',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern frameworks.',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization', 'Push Notifications'],
      price: 'From $4,000',
      duration: '6-16 weeks'
    },
    {
      id: 'data-analytics',
      category: 'data',
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization solutions.',
      features: ['Data Visualization', 'Business Intelligence', 'Predictive Analytics', 'Dashboard Design', 'Data Mining'],
      price: 'From $3,500',
      duration: '3-10 weeks'
    },
    {
      id: 'cybersecurity',
      category: 'security',
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including vulnerability assessments, penetration testing, and security audits.',
      features: ['Security Audits', 'Penetration Testing', 'Vulnerability Assessment', 'Security Training', 'Compliance'],
      price: 'From $2,500',
      duration: '1-4 weeks'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'web', name: 'Web', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'data', name: 'Data', icon: BarChart },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '15+', label: 'Years Experience', icon: Award }
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Atom, Link } from 'lucide-react';
import Header from '../components/Header';
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
>>>>>>> origin/main
  ];

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: 'Middletown, DE 19709'
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI, cloud, web, mobile, and data solutions. Expert development services for modern businesses."
        keywords="AI development, cloud solutions, web development, mobile apps, data analytics, cybersecurity"
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
            Comprehensive technology solutions designed to transform your business. 
            From AI development to cloud solutions, we deliver excellence in every project.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Price</span>
                    <span className="text-purple-400 font-semibold">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Duration</span>
                    <span className="text-gray-300">{service.duration}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Learn More
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your requirements and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
=======
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services designed to transform your business. From AI solutions to infrastructure management, we have you covered." />
        <meta name="keywords" content="AI services, IT services, business solutions, digital transformation, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-cyan-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive solutions designed to accelerate your digital transformation
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                From AI-powered automation to robust IT infrastructure, we provide end-to-end 
                solutions that drive measurable business outcomes and sustainable growth.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <service.icon className="w-12 h-12 text-cyan-400 mr-4 group-hover:text-cyan-300 transition-colors" />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white/5 py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-300">
                  We combine cutting-edge technology with deep industry expertise
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <Star className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Proven Expertise</h3>
                  <p className="text-gray-400">Years of experience delivering successful projects</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
                  <p className="text-gray-400">Bank-grade security and compliance standards</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                  <p className="text-gray-400">Quick implementation and time-to-value</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
                Let's discuss how our services can help transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </>
  );
};

export default ServicesPage;
>>>>>>> origin/main
