'use client';
import React, { useState } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      category: 'Infrastructure',
      link: '/cloud-infrastructure'
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
      category: 'Security',
      link: '/cybersecurity-solutions'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications',
      price: 'Starting at $2,500',
      features: [
        'Responsive design',
        'Performance optimization',
        'SEO optimization',
        'Content management',
        'E-commerce solutions',
        'Mobile-first approach'
      ],
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      category: 'Development',
      link: '/web-development'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $4,000',
      features: [
        'iOS and Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development',
      link: '/mobile-development'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      price: 'Starting at $1,500',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation',
        'Rate limiting',
        'Authentication & authorization',
        'API testing & monitoring'
      ],
      icon: LinkIcon,
      color: 'from-blue-500 to-indigo-500',
      category: 'Development',
      link: '/api-development'
    },
    {
      title: 'Database Management',
      description: 'Optimized database solutions for performance and scalability',
      price: 'Starting at $2,000',
      features: [
        'Database design & optimization',
        'Data migration',
        'Backup & recovery',
        'Performance tuning',
        'Security hardening',
        'Monitoring & maintenance'
      ],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure',
      link: '/database-management'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      price: 'Starting at $3,500',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring & logging',
        'Deployment automation',
        'Performance optimization'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'Infrastructure',
      link: '/devops-cicd'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      price: 'Starting at $1,000/month',
      features: [
        '24/7 technical support',
        'Remote monitoring',
        'System maintenance',
        'Troubleshooting',
        'Software updates',
        'Hardware support'
      ],
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      category: 'Support',
      link: '/it-support'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'Infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { id: 'Security', name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { id: 'Development', name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { id: 'Support', name: 'Support', count: itServices.filter(s => s.category === 'Support').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '1000+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Expert Engineers', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>IT Services - Zion Tech Group | Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and more. Expert technology solutions for your business." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, IT support" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions to power your business. 
              From cloud infrastructure to cybersecurity, we deliver IT excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 group-hover:scale-105"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our IT services can optimize your technology stack and drive efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your IT Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center px-8 py-3 border border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;