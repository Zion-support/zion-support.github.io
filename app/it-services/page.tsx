'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Heart, 
  BarChart, Cpu, Server, Wifi, Package, Monitor, Wrench, Activity, Eye, 
  Search, Filter, Download, Upload, Share, Timer, Battery, Signal, Bluetooth, 
  Camera, Mic, Headphones, Speaker, Volume2, Play, Pause, SkipForward, SkipBack, 
  Repeat, Shuffle, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, 
  HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, 
  RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, 
  Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, 
  Angry, Surprised, Confused, Wink, Kiss, Tongue, Package, DollarSign 
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $2,999/month',
      features: ['Cloud migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost optimization'],
      benefits: ['99.9% uptime guarantee', '50% cost reduction', '24/7 monitoring'],
      link: '/cloud-infrastructure',
      category: 'infrastructure'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $1,999/month',
      features: ['Security audits', 'Threat detection', 'Compliance management', 'Incident response'],
      benefits: ['Zero security breaches', '100% compliance', 'Real-time monitoring'],
      link: '/cybersecurity-solutions',
      category: 'security'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      price: 'Starting at $3,999/project',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      benefits: ['50% faster load times', 'Mobile-first design', 'SEO optimized'],
      link: '/web-development',
      category: 'development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $4,999/project',
      features: ['iOS & Android', 'Cross-platform', 'App store optimization', 'Push notifications'],
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store ready'],
      link: '/mobile-development',
      category: 'development'
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,
      title: 'Database Management',
      description: 'Optimize and secure your database infrastructure for peak performance',
      price: 'Starting at $1,499/month',
      features: ['Database optimization', 'Backup & recovery', 'Security hardening', 'Performance tuning'],
      benefits: ['99.9% availability', '50% performance boost', 'Automated backups'],
      link: '/database-management',
      category: 'infrastructure'
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment pipelines',
      price: 'Starting at $2,499/month',
      features: ['CI/CD pipelines', 'Container orchestration', 'Infrastructure automation', 'Monitoring & logging'],
      benefits: ['90% faster deployments', 'Zero-downtime updates', 'Automated testing'],
      link: '/devops-cicd',
      category: 'automation'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: <BarChart className="w-5 h-5" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Server className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'development', name: 'Development', icon: <Code className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Settings className="w-5 h-5" /> }
  ];

  const stats = [
    { number: '200+', label: 'IT Projects Delivered', icon: <CheckCircle className="w-6 h-6 text-cyan-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '24/7', label: 'IT Support', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { number: '100+', label: 'IT Experts', icon: <Users className="w-6 h-6 text-purple-400" /> }
  ];

  const filteredServices = activeTab === 'overview' 
    ? itServices 
    : itServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Cloud, Security, Development & DevOps Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and DevOps solutions. Transform your technology stack." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, database management, DevOps, infrastructure" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Server className="w-4 h-4" />
              <span>Comprehensive IT Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                IT Infrastructure
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              From cloud migration to cybersecurity, we provide comprehensive IT services 
              that modernize your infrastructure and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Get IT Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View IT Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Tabs */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to modernize your infrastructure
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="text-cyan-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-semibold text-sm">Business Benefits:</h4>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Modernize Your IT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT solutions can transform your technology stack 
                  and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get IT Consultation
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Call +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-gray-400">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;