'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  BarChart, FileText, MessageCircle, Target, CheckSquare, DollarSign, Box, 
  Settings, Heart, Eye, Mic, Workflow, Link as LinkIcon, Wifi, Package, 
  TrendingUp, Calendar, ShoppingCart, Sparkles, Cpu, Globe, Database, 
  Smartphone, Lock, Monitor, Server, Mail, Phone, MapPin, Clock
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $3,000',
      features: [
        'Security assessment',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Staff training'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'
    },
    {
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: 'Starting at $8,000',
      features: [
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'Maintenance support',
        'Analytics integration'
      ],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $12,000',
      features: [
        'iOS & Android apps',
        'Cross-platform solutions',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'Database Management',
      description: 'Optimize and secure your database infrastructure for peak performance',
      price: 'Starting at $2,500',
      features: [
        'Database optimization',
        'Performance tuning',
        'Backup strategies',
        'Security hardening',
        'Migration services',
        '24/7 monitoring'
      ],
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamline your development workflow with automated deployment pipelines',
      price: 'Starting at $4,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & alerting',
        'Version control',
        'Deployment strategies'
      ],
      icon: Workflow,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    }
  ];

  const stats = [
    { number: '200+', label: 'IT Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Cloud, Security & Development Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps solutions. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile apps, DevOps, database management" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Expert IT services to modernize and secure your technology infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 pt-20">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Comprehensive
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform your technology infrastructure with our expert IT services. 
                From cloud migration to cybersecurity, we provide end-to-end solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive IT solutions to help your business thrive in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {service.category}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable technology foundation 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;