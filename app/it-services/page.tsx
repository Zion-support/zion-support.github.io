'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Clock, Award, TrendingUp, Shield, 
  Cloud, Code, Database, Smartphone, Server, Lock, Workflow, Zap, 
  Globe, Users, Cpu, Target, Settings, BarChart, FileText, MessageCircle, 
  Heart, DollarSign, Monitor, Link as LinkIcon, Package, Mic, Eye, 
  Search, Filter, Download, Upload, Share, Timer, Battery, Wifi2, 
  Signal, Bluetooth, Camera, Headphones, Speaker, Volume2, VolumeX, 
  Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, ThumbsUp, 
  ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, 
  Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, 
  RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, 
  Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, 
  Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, 
  Rocket, Lightbulb, CircuitBoard, Atom, Satellite, Wrench, PieChart, 
  LineChart, Activity
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Infrastructure & Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with cost optimization and security compliance.',
      price: 'Starting at $5,000',
      features: ['Zero-downtime migration', 'Security compliance', 'Cost optimization', '24/7 support'],
      benefits: ['50% cost reduction', '99.9% uptime', 'Enhanced security'],
      link: '/cloud-infrastructure',
      category: 'cloud'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and monitoring to protect your digital assets.',
      price: 'Starting at $3,000',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security policies', 'Staff training'],
      benefits: ['100% compliance', 'Real-time monitoring', 'Zero breaches'],
      link: '/cybersecurity-solutions',
      category: 'security'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Custom Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      price: 'Starting at $8,000',
      features: ['Responsive design', 'SEO optimization', 'Performance tuning', 'Maintenance support'],
      benefits: ['Mobile-first design', 'Fast loading times', 'SEO optimized'],
      link: '/web-development',
      category: 'development'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      price: 'Starting at $4,500',
      features: ['Data visualization', 'Predictive analytics', 'Custom dashboards', 'Real-time reporting'],
      benefits: ['Data-driven decisions', 'Increased efficiency', 'Competitive advantage'],
      link: '/data-analytics',
      category: 'analytics'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX.',
      price: 'Starting at $12,000',
      features: ['iOS & Android apps', 'Cross-platform solutions', 'App store optimization', 'Push notifications'],
      benefits: ['Native performance', 'App store ready', 'User-friendly design'],
      link: '/mobile-development',
      category: 'mobile'
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-orange-400" />,
      title: 'API Development & Integration',
      description: 'RESTful APIs, microservices, and third-party integrations to connect your systems.',
      price: 'Starting at $6,500',
      features: ['RESTful APIs', 'Microservices', 'Third-party integrations', 'API documentation'],
      benefits: ['Scalable architecture', 'Easy integration', 'Comprehensive docs'],
      link: '/api-development',
      category: 'integration'
    }
  ];

  const categories = [
    { id: 'overview', name: 'Overview', icon: BarChart },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'integration', name: 'Integration', icon: LinkIcon }
  ];

  const filteredServices = activeTab === 'overview' 
    ? itServices 
    : itServices.filter(service => service.category === activeTab);

  const technologies = [
    { name: 'AWS', icon: <Cloud className="w-6 h-6" />, color: 'text-orange-400' },
    { name: 'Azure', icon: <Cloud className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Google Cloud', icon: <Cloud className="w-6 h-6" />, color: 'text-green-400' },
    { name: 'React', icon: <Code className="w-6 h-6" />, color: 'text-cyan-400' },
    { name: 'Node.js', icon: <Server className="w-6 h-6" />, color: 'text-green-400' },
    { name: 'Python', icon: <Code className="w-6 h-6" />, color: 'text-yellow-400' },
    { name: 'Docker', icon: <Package className="w-6 h-6" />, color: 'text-blue-400' },
    { name: 'Kubernetes', icon: <Settings className="w-6 h-6" />, color: 'text-blue-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Cloud, Security, Development & More</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, custom development, data analytics, and mobile apps. Expert solutions for your business." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, web development, mobile apps, data analytics, API development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, we provide end-to-end IT solutions 
              that scale with your business and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                View Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <Star className="h-4 w-4 text-yellow-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use the latest technologies and frameworks to build robust, scalable, and secure solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                <div className={`${tech.color} mb-2 flex justify-center`}>
                  {tech.icon}
                </div>
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our IT experts help you build a robust, secure, and scalable technology foundation 
              that grows with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItServicesPage;