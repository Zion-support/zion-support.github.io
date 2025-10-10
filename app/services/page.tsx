'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck, Rocket, Sprout, Scale } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

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
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Revolutionary AI-powered drug discovery platform' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Advanced climate monitoring and optimization' },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Cutting-edge space technology solutions' },
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced financial security and fraud detection' },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain management' },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy grid optimization' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'AI Infrastructure Monitoring Pro', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring and management' },
        { name: 'Blockchain Integration Services Pro', path: '/blockchain-integration-services', description: 'Complete blockchain integration solutions' },
        { name: 'AI API Management Pro', path: '/ai-api-manager', description: 'Advanced API management and monitoring' },
        { name: 'Intelligent Database Migration Pro', path: '/intelligent-database-migration', description: 'AI-powered database migration services' },
        { name: 'AI Load Testing Pro', path: '/ai-load-testing', description: 'Intelligent load testing and performance optimization' },
        { name: 'Smart Contract Security Audit Pro', path: '/smart-contract-security-audit', description: 'Comprehensive smart contract security auditing' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'AI Smart Calendar Pro', path: '/ai-smart-calendar', description: 'Intelligent calendar management and scheduling' },
        { name: 'AI CRM Assistant Pro', path: '/ai-crm-assistant', description: 'Smart CRM with AI-powered insights' },
        { name: 'AI API Manager Pro', path: '/ai-api-manager', description: 'Advanced API management and monitoring' },
        { name: 'AI Content Writer Pro', path: '/ai-content-writer', description: 'AI-powered content creation and optimization' },
        { name: 'AI Video Generator Pro', path: '/ai-video-generator', description: 'Professional video creation with AI' },
        { name: 'AI Social Media Manager Pro', path: '/ai-social-media-manager', description: 'Automated social media management' }
      ]
    },
    {
      title: 'Infrastructure',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Networking Solutions', path: '/networking', description: 'Enterprise networking design and implementation' },
        { name: 'System Health Monitoring', path: '/health', description: 'Comprehensive system health monitoring' },
        { name: 'Cybersecurity Services', path: '/cybersecurity', description: 'Advanced cybersecurity solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud migration services' },
        { name: 'DevOps Solutions', path: '/devops', description: 'Complete DevOps implementation and management' },
        { name: 'Database Services', path: '/database-services', description: 'Professional database management and optimization' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Our Services - AI & IT Solutions | Zion Tech Group"
        description="Comprehensive AI and IT services including AI solutions, infrastructure monitoring, micro SAAS, and specialized services. Transform your business with our cutting-edge technology."
        keywords="AI services, IT services, micro SAAS, infrastructure monitoring, cybersecurity, cloud migration, business solutions"
      />
      
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
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI and IT services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <a
                        key={serviceIndex}
                        href={service.path}
                        className="block p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-300 group"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your specific needs and discover how our solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
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