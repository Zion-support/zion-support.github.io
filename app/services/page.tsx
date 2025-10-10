'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Code, 
  Zap, 
  Shield, 
  Target, 
  BarChart, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Cpu, 
  Database, 
  Smartphone, 
  Search, 
  Bot, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  ShoppingCart, 
  CreditCard, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation, 
  PieChart, 
  TrendingDown, 
  Activity, 
  Zap as Lightning, 
  Target as Crosshair, 
  Shield as Security, 
  Users as People, 
  Star as StarIcon, 
  CheckCircle as Check, 
  ArrowRight as Arrow, 
  Phone as PhoneIcon, 
  Mail as MailIcon, 
  MapPin as Location, 
  Cube, 
  Mic, 
  DollarSign, 
  Truck, 
  Link, 
  HardDrive, 
  FileCheck, 
  Rocket, 
  Sprout, 
  Scale 
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Advanced artificial intelligence solutions for enterprise applications',
      services: [
        {
          name: 'AI Drug Discovery Pro',
          description: 'Accelerate pharmaceutical research with AI-powered molecular analysis',
          price: '$4,500/mo',
          features: ['Molecular Modeling', 'Drug Interaction Analysis', 'Clinical Trial Optimization'],
          icon: Stethoscope,
          category: 'Healthcare AI',
          link: '/ai-drug-discovery-pro'
        },
        {
          name: 'AI Climate Solutions Pro',
          description: 'Combat climate change with intelligent environmental monitoring',
          price: '$3,200/mo',
          features: ['Carbon Footprint Analysis', 'Weather Prediction', 'Sustainability Planning'],
          icon: Globe,
          category: 'Environmental AI',
          link: '/ai-climate-solutions-pro'
        },
        {
          name: 'AI Space Technology Pro',
          description: 'Advanced space exploration and satellite management solutions',
          price: '$5,500/mo',
          features: ['Satellite Operations', 'Space Mission Planning', 'Astronomical Data Analysis'],
          icon: Rocket,
          category: 'Space Technology',
          link: '/ai-space-technology-pro'
        },
        {
          name: 'AI Financial Crime Detection Pro',
          description: 'Real-time fraud detection and financial security monitoring',
          price: '$2,800/mo',
          features: ['Fraud Detection', 'Risk Assessment', 'Compliance Monitoring'],
          icon: Shield,
          category: 'Financial AI',
          link: '/ai-financial-crime-detection-pro'
        }
      ]
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Comprehensive IT infrastructure and cloud solutions',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless cloud migration and infrastructure setup',
          price: 'Custom',
          features: ['AWS/Azure/GCP Migration', 'Infrastructure Design', 'Security Implementation'],
          icon: Cloud,
          category: 'Cloud Services',
          link: '/cloud-migration'
        },
        {
          name: 'Enterprise Cybersecurity Suite',
          description: 'Comprehensive security solutions for enterprise environments',
          price: 'Custom',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring'],
          icon: Shield,
          category: 'Cybersecurity',
          link: '/cybersecurity'
        },
        {
          name: 'IT Infrastructure Design',
          description: 'Scalable infrastructure architecture and implementation',
          price: 'Custom',
          features: ['Network Design', 'Server Configuration', 'Performance Optimization'],
          icon: Settings,
          category: 'Infrastructure',
          link: '/it-infrastructure'
        },
        {
          name: '24/7 IT Support & Monitoring',
          description: 'Round-the-clock technical support and system monitoring',
          price: 'Custom',
          features: ['24/7 Support', 'Proactive Monitoring', 'Rapid Response'],
          icon: Clock,
          category: 'Support',
          link: '/it-support'
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      description: 'Powerful micro SAAS applications for modern businesses',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning with predictive analytics',
          price: '$199/mo',
          features: ['Project Planning', 'Resource Management', 'Progress Tracking'],
          icon: BarChart,
          category: 'Productivity',
          link: '/ai-project-manager'
        },
        {
          name: 'AI Social Media Manager Pro',
          description: 'Automated social media management and content creation',
          price: '$99/mo',
          features: ['Content Creation', 'Scheduling', 'Analytics'],
          icon: Smartphone,
          category: 'Marketing',
          link: '/ai-social-media-manager'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'AI-powered business intelligence and analytics',
          price: '$149/mo',
          features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Insights'],
          icon: BarChart,
          category: 'Analytics',
          link: '/ai-analytics-dashboard'
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Intelligent email campaigns and automation',
          price: '$79/mo',
          features: ['Campaign Automation', 'A/B Testing', 'Performance Analytics'],
          icon: Mail,
          category: 'Marketing',
          link: '/ai-email-marketing'
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Sparkles,
      color: 'from-pink-500 to-purple-600',
      description: 'Cutting-edge technologies for the future',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Next-generation quantum computing applications',
          price: 'Custom',
          features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization'],
          icon: Cpu,
          category: 'Quantum Computing',
          link: '/ai-quantum-computing'
        },
        {
          name: 'Autonomous Systems',
          description: 'Self-managing systems and intelligent automation',
          price: 'Custom',
          features: ['Autonomous Operations', 'Self-Healing Systems', 'Adaptive Learning'],
          icon: Settings,
          category: 'Autonomous Systems',
          link: '/autonomous-systems'
        },
        {
          name: 'Blockchain & Web3',
          description: 'Decentralized solutions and blockchain integration',
          price: 'Custom',
          features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms'],
          icon: Lock,
          category: 'Blockchain',
          link: '/blockchain-web3'
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Connected devices and edge computing solutions',
          price: 'Custom',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing'],
          icon: Globe,
          category: 'IoT',
          link: '/iot-edge-computing'
        }
      ]
    }
  ];

  const filteredServices = serviceCategories.map(category => ({
    ...category,
    services: category.services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => 
    activeCategory === 'all' || category.id === activeCategory
  );

  const stats = [
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business operations 
              and drive unprecedented growth and efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Grade</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === 'all'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredServices.map((category) => (
            <div key={category.id} className="mb-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">{category.name}</h2>
                </div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.services.map((service, index) => (
                  <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <Link
                          to={service.link}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
