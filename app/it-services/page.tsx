
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Code, Smartphone, Database, Server, CheckCircle, ArrowRight, Zap, Users, Award } from 'lucide-react';
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Database, Smartphone, Globe, Settings, Monitor, Package, Lock, Calendar, Link as LinkIcon, ShoppingCart, TrendingUp, CheckSquare, Cpu, Wifi, MessageSquare, FileText, Heart, DollarSign, Box, Eye, Mic, Workflow, MessageCircle } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,

      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      features: ['Cloud migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost optimization'],
      price: 'Starting at $2,500/month'

    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',

      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Security audits', 'Penetration testing', 'Compliance management', '24/7 monitoring'],
      price: 'Starting at $1,800/month'

    },
    {
      icon: Code,
      title: 'Web Development',

      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development'],
      price: 'Starting at $3,000',
      color: 'from-green-500 to-emerald-500',
      link: '/web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      price: 'Starting at $4,000',
      color: 'from-purple-500 to-pink-500',
      link: '/mobile-development'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Custom Dashboards'],
      price: 'Starting at $2,000',
      color: 'from-indigo-500 to-purple-500',
      link: '/data-analytics'
    },
    {
      icon: Server,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and infrastructure management.',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: 'Starting at $1,800',
      color: 'from-yellow-500 to-orange-500',
      link: '/devops-cicd'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your current infrastructure and requirements to create a comprehensive plan.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our experts design scalable, secure solutions tailored to your business needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal downtime and maximum efficiency.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing ensures everything works perfectly before going live.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.'
    }
  ];

      description: 'Modern web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'API development'],
      price: 'Starting at $3,000/project'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android applications for all business needs',
      features: ['Native development', 'Cross-platform', 'App store deployment', 'Maintenance'],
      price: 'Starting at $5,000/app'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Data processing, storage, and analytics solutions',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup solutions'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      features: ['CI/CD setup', 'Container orchestration', 'Monitoring', 'Automated testing'],
      price: 'Starting at $2,000/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  return (
    <>
      <Helmet>

        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and more." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, DevOps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions to transform your business with cutting-edge IT services

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"

        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, web development, mobile apps, data analytics, and DevOps solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, web development, mobile development, data analytics, DevOps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive digital transformation. 
                From cloud migration to custom development, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/ai-services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View AI Services
                </Link>
              </div>
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs

              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}

                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">

                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-cyan-400 font-semibold text-sm mb-4">
                    {service.price}
                  </div>
                  <Link 
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Learn More →
                  </Link>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our IT services can drive innovation and growth for your organization.

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"

                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"

                >
                  Start Your Project
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ITServicesPage;

export default ITServicesPage;
