'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck, Rocket, Sprout, Scale, DollarSign as Dollar, Clock, Award as AwardIcon, Globe as GlobeIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIconIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIconIcon, Mail as MailIconIcon, MapPin as LocationIcon, Cube as CubeIcon, Mic as MicIcon, DollarSign as DollarIcon, Truck as TruckIcon, Link as LinkIcon, HardDrive as HardDriveIcon, FileCheck as FileCheckIcon, Rocket as RocketIcon, Sprout as SproutIcon, Scale as ScaleIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Contact information
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Cutting-edge artificial intelligence solutions',
      services: [
        {
          name: 'AI Drug Discovery Pro',
          description: 'Revolutionary AI-powered drug discovery platform accelerating pharmaceutical research',
          price: 'Starting at $50,000/month',
          features: ['Molecular Analysis', 'Drug Interaction Prediction', 'Clinical Trial Optimization', 'Regulatory Compliance'],
          link: 'https://ziontechgroup.com/ai-drug-discovery-pro',
          popular: true,
          rating: 4.9
        },
        {
          name: 'AI Climate Solutions Pro',
          description: 'Advanced climate modeling and environmental impact analysis using AI',
          price: 'Starting at $25,000/month',
          features: ['Climate Modeling', 'Carbon Footprint Analysis', 'Sustainability Planning', 'Environmental Monitoring'],
          link: 'https://ziontechgroup.com/ai-climate-solutions-pro',
          popular: true,
          rating: 4.8
        },
        {
          name: 'AI Space Technology Pro',
          description: 'Space exploration and satellite data analysis powered by AI',
          price: 'Starting at $75,000/month',
          features: ['Satellite Data Analysis', 'Space Mission Planning', 'Orbital Mechanics', 'Space Weather Prediction'],
          link: 'https://ziontechgroup.com/ai-space-technology-pro',
          popular: false,
          rating: 4.7
        },
        {
          name: 'AI Financial Crime Detection Pro',
          description: 'Advanced fraud detection and financial crime prevention system',
          price: 'Starting at $30,000/month',
          features: ['Real-time Fraud Detection', 'Transaction Monitoring', 'Risk Assessment', 'Compliance Reporting'],
          link: 'https://ziontechgroup.com/ai-financial-crime-detection-pro',
          popular: true,
          rating: 4.9
        }
      ]
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT infrastructure and support',
      services: [
        {
          name: 'AI Infrastructure Monitoring Pro',
          description: 'Intelligent infrastructure monitoring with predictive analytics',
          price: 'Starting at $5,000/month',
          features: ['Predictive Maintenance', 'Performance Optimization', 'Automated Scaling', 'Security Monitoring'],
          link: 'https://ziontechgroup.com/ai-infrastructure-monitoring',
          popular: true,
          rating: 4.8
        },
        {
          name: 'Blockchain Integration Services Pro',
          description: 'Enterprise blockchain solutions and smart contract development',
          price: 'Starting at $40,000',
          features: ['Smart Contract Development', 'Blockchain Architecture', 'DeFi Solutions', 'NFT Platforms'],
          link: 'https://ziontechgroup.com/blockchain-integration-services',
          popular: true,
          rating: 4.7
        },
        {
          name: 'AI API Management Pro',
          description: 'Intelligent API gateway with AI-powered optimization',
          price: 'Starting at $3,000/month',
          features: ['API Gateway', 'Rate Limiting', 'Analytics', 'Security'],
          link: 'https://ziontechgroup.com/ai-api-management',
          popular: false,
          rating: 4.6
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Powerful micro SaaS tools for business automation',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with AI-powered insights',
          price: '$199/month',
          features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Assessment'],
          link: 'https://ziontechgroup.com/ai-project-manager',
          popular: true,
          rating: 4.8
        },
        {
          name: 'AI Smart Calendar Pro',
          description: 'AI-powered calendar management with smart scheduling',
          price: '$89/month',
          features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Insights'],
          link: 'https://ziontechgroup.com/ai-smart-calendar',
          popular: true,
          rating: 4.7
        },
        {
          name: 'AI Content Writer Pro',
          description: 'Advanced AI content creation with SEO optimization',
          price: '$129/month',
          features: ['SEO Optimization', 'Brand Voice', 'Content Templates', 'Multi-language Support'],
          link: 'https://ziontechgroup.com/ai-content-writer',
          popular: true,
          rating: 4.9
        },
        {
          name: 'AI Video Generator Pro',
          description: 'Create professional videos with AI-powered editing',
          price: '$199/month',
          features: ['Auto Editing', 'Voice Synthesis', 'Visual Effects', 'Template Library'],
          link: 'https://ziontechgroup.com/ai-video-generator',
          popular: false,
          rating: 4.6
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Rocket,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      description: 'Next-generation technology solutions',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum computing applications for complex problem solving',
          price: 'Starting at $100,000/month',
          features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization Problems', 'Cryptography'],
          link: 'https://ziontechgroup.com/quantum-computing',
          popular: true,
          rating: 4.9
        },
        {
          name: 'Autonomous Systems',
          description: 'Self-managing systems with AI decision making',
          price: 'Starting at $60,000/month',
          features: ['Autonomous Vehicles', 'Robotic Process Automation', 'Smart Infrastructure', 'Predictive Maintenance'],
          link: 'https://ziontechgroup.com/autonomous-systems',
          popular: true,
          rating: 4.8
        },
        {
          name: 'AR/VR Solutions',
          description: 'Immersive experiences and virtual reality applications',
          price: 'Starting at $35,000',
          features: ['Virtual Reality', 'Augmented Reality', 'Mixed Reality', '3D Visualization'],
          link: 'https://ziontechgroup.com/ar-vr-solutions',
          popular: false,
          rating: 4.7
        }
      ]
    }
  ];

  const filteredServices = serviceCategories.filter(category => 
    activeCategory === 'all' || category.id === activeCategory
  );

  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({ ...service, category: category.name }))
  );

  const searchResults = allServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI-powered solutions designed to transform your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">500+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Reach</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeCategory === 'all'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {searchTerm ? (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Search Results for "{searchTerm}" ({searchResults.length} found)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((service, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          {service.popular && (
                            <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                              Popular
                            </span>
                          )}
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm font-medium">{service.rating}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredServices.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center space-x-3 mb-8">
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                      <div>
                        <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                          {service.popular && (
                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                              Popular
                            </div>
                          )}
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="ml-1 text-sm font-medium">{service.rating}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                          <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                          <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                          <div className="space-y-2 mb-6">
                            <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <a
                              href={service.link}
                              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                            >
                              Learn More
                            </a>
                            <a
                              href="/contact"
                              className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of enterprises that have already transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
