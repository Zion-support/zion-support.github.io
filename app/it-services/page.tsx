'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, BarChart, MessageCircle, Target, DollarSign, Settings, TrendingUp, Globe, Database, Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions tailored to your business needs with AWS, Azure, and GCP.',
      features: ['Cloud migration', 'Infrastructure as code', 'Auto-scaling', '24/7 monitoring'],
      price: 'Starting at $2,500/month',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from evolving threats.',
      features: ['Threat detection', 'Security audits', 'Compliance management', 'Incident response'],
      price: 'Starting at $1,800/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management for faster delivery.',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring', 'Scalability'],
      price: 'Starting at $1,200/month',
      icon: Settings,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      features: ['Custom applications', 'API development', 'Database design', 'Quality assurance'],
      price: 'Starting at $3,500/month',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and reporting.',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting'],
      price: 'Starting at $2,200/month',
      icon: BarChart,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'App store deployment'],
      price: 'Starting at $4,000/month',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Faster Deployment',
      description: 'Accelerate your time-to-market with streamlined development processes.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enhanced Security',
      description: 'Protect your business with enterprise-grade security solutions.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: 'Scalable Solutions',
      description: 'Build systems that grow with your business needs.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Expert Support',
      description: 'Get dedicated support from our team of experienced professionals.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and custom software development. Expert technology solutions by Zion Tech Group." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, DevOps, software development, data analytics, mobile apps" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services to support your business growth and digital transformation." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              IT <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive technology solutions to support your business growth and digital transformation. 
              From cloud infrastructure to cybersecurity, we deliver IT that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our IT Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services designed to support your business growth and digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IT solutions deliver reliable, scalable, and secure technology that drives business success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can support your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your IT Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;