'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Home, Settings, Brain, Cpu, BarChart, MessageSquare, PieChart, Bot, Code, Video, Mic, Zap, TrendingUp, FileText, DollarSign, Eye, Box, Shield, Cloud, Database, Smartphone, Lock, X, Menu, Users, Palette, Music, Heart, Globe, Building, Car, Plane, ShoppingCart, BookOpen, Calendar, Clock, Truck, Link, HardDrive, FileCheck } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cpu },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Real Estate Analyzer', href: '/ai-real-estate-analyzer', icon: Building },
    { name: 'AI Crypto Trading Bot', href: '/ai-crypto-trading-bot', icon: DollarSign },
    { name: 'AI Stock Predictor', href: '/ai-stock-predictor', icon: TrendingUp },
    { name: 'AI Language Learning', href: '/ai-language-learning', icon: Globe },
    { name: 'AI Personal Chef', href: '/ai-personal-chef', icon: Users },
    { name: 'AI Travel Planner', href: '/ai-travel-planner', icon: Plane },
    { name: 'AI Home Automation', href: '/ai-home-automation', icon: Home },
    { name: 'AI Personal Trainer', href: '/ai-personal-trainer', icon: Heart },
    { name: 'AI Dating Assistant', href: '/ai-dating-assistant', icon: Users },
    { name: 'AI Pet Care', href: '/ai-pet-care', icon: Heart },
    { name: 'AI Garden Planner', href: '/ai-garden-planner', icon: Palette },
    { name: 'AI Sleep Optimizer', href: '/ai-sleep-optimizer', icon: Users },
    { name: 'AI Personal Shopper', href: '/ai-personal-shopper', icon: ShoppingCart },
    { name: 'AI Study Buddy', href: '/ai-study-buddy', icon: BookOpen },
    { name: 'AI Meditation Guide', href: '/ai-meditation-guide', icon: Users },
    { name: 'AI Car Maintenance', href: '/ai-car-maintenance', icon: Car },
    { name: 'AI Event Planner', href: '/ai-event-planner', icon: Calendar },
    { name: 'AI Personal Finance', href: '/ai-personal-finance', icon: DollarSign },
    { name: 'AI Time Management', href: '/ai-time-management', icon: Clock },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics', icon: PieChart },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation', icon: Code },
    { name: 'AI Video Generator', href: '/ai-video-generation', icon: Video },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: TrendingUp },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Financial Advisor', href: '/ai-financial-analyzer', icon: DollarSign },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield },
    { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Palette },
    { name: 'AI Music Composition', href: '/ai-music-composition', icon: Music },
    { name: 'AI Fitness Coach', href: '/ai-fitness-coach', icon: Heart },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain },
    { name: 'Quantum AI Computing', href: '/quantum-ai', icon: Cpu },
    { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicles', icon: Car },
    { name: 'AI Drug Discovery', href: '/ai-drug-discovery', icon: Heart },
    { name: 'AI Climate Modeling', href: '/ai-climate', icon: Globe },
    { name: 'AI Space Exploration', href: '/ai-space', icon: Plane },
    { name: 'AI Cybersecurity Shield', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Financial Trading', href: '/ai-trading', icon: DollarSign },
    { name: 'AI Manufacturing', href: '/ai-manufacturing', icon: Building },
    { name: 'AI Agriculture', href: '/ai-agriculture', icon: Heart },
    { name: 'AI Energy Management', href: '/ai-energy', icon: Zap },
    { name: 'AI Logistics', href: '/ai-logistics', icon: Truck },
    { name: 'AI Content Intelligence', href: '/ai-content', icon: FileText },
    { name: 'AI Customer Intelligence', href: '/ai-customer', icon: Users },
    { name: 'AI Research Assistant', href: '/ai-research', icon: Search },
    { name: 'AI Legal Intelligence', href: '/ai-legal', icon: FileCheck },
    { name: 'Natural Language Processing', href: '/nlp', icon: MessageSquare },
    { name: 'Computer Vision', href: '/computer-vision', icon: Eye },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box },
    { name: 'AI Voice Cloning', href: '/ai-voice-cloning', icon: Mic },
    { name: 'AI Fraud Detection', href: '/ai-fraud-detection', icon: Shield },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Edge Computing', href: '/edge-computing', icon: Cpu },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Brain },
    { name: 'AI Infrastructure', href: '/ai-infrastructure', icon: Settings },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock },
    { name: 'IoT & Smart Cities', href: '/iot-solutions', icon: Globe },
    { name: '5G Networks', href: '/5g-networks', icon: Zap },
    { name: 'Digital Twins', href: '/digital-twins', icon: Box },
    { name: 'AR/VR Development', href: '/ar-vr', icon: Eye },
    { name: 'RPA Solutions', href: '/rpa', icon: Bot },
    { name: 'Data Center Modernization', href: '/data-centers', icon: Database },
    { name: 'Microservices Architecture', href: '/microservices', icon: Code },
    { name: 'Zero Trust Security', href: '/zero-trust', icon: Shield },
    { name: 'Hybrid Cloud', href: '/hybrid-cloud', icon: Cloud },
    { name: 'API Management', href: '/api-management', icon: Link },
    { name: 'Real-time Analytics', href: '/real-time-analytics', icon: BarChart },
    { name: 'Content Delivery Network', href: '/cdn', icon: Globe },
    { name: 'Disaster Recovery', href: '/disaster-recovery', icon: HardDrive },
    { name: 'IT Governance', href: '/it-governance', icon: FileCheck },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'IT Consulting', href: '/it-consulting', icon: Settings },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings },
    { name: 'Database Services', href: '/database', icon: Database },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Globe },
    { name: 'IT Support', href: '/it-support', icon: Users },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>{item.name}</span>
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-1">
                <Settings className="w-4 h-4" />
                <span>Services</span>
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-400/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Micro SAAS Services */}
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-2 text-sm">Micro SAAS Solutions</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {microSAASServices.slice(0, 4).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                          >
                            <service.icon className="w-3 h-3" />
                            <span className="text-xs">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* AI Services */}
                    <div>
                      <h3 className="text-purple-400 font-semibold mb-2 text-sm">AI Services</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {aiServices.slice(0, 4).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                          >
                            <service.icon className="w-3 h-3" />
                            <span className="text-xs">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    {/* IT Services */}
                    <div>
                      <h3 className="text-green-400 font-semibold mb-2 text-sm">IT Services</h3>
                      <div className="grid grid-cols-1 gap-1">
                        {itServices.map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                          >
                            <service.icon className="w-3 h-3" />
                            <span className="text-xs">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <a
                      href="/services"
                      className="block text-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                    >
                      View All Services →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </a>
              ))}
              
              {/* Mobile Services Section */}
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-cyan-400 font-semibold mb-3">Micro SAAS Solutions</h3>
                <div className="grid grid-cols-1 gap-2">
                  {microSAASServices.slice(0, 6).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-purple-400 font-semibold mb-3">AI Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  {aiServices.slice(0, 4).map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <h3 className="text-green-400 font-semibold mb-3">IT Services</h3>
                <div className="grid grid-cols-1 gap-2">
                  {itServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200 py-1 px-2 rounded hover:bg-slate-700/50"
                      onClick={() => setIsOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-600">
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-3 rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5" />
                  <span>Call +1 302 464 0950</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;