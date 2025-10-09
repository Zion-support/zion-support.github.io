'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Home, Settings, Brain, Cpu, BarChart, MessageSquare, PieChart, Bot, Code, Video, Mic, Zap, TrendingUp, FileText, DollarSign, Eye, Box, Shield, Cloud, Database, Smartphone, Lock, X, Menu, Users, Palette, Music, Heart, Globe, Building, Truck, Calendar, GraduationCap, Utensils, Hammer, Plane, Sprout, Apple, Moon, Clock, BookOpen, Battery, ChefHat, Dumbbell, ShoppingCart, Wrench, Star, CreditCard, Rocket, Leaf, Trophy, Lightbulb, RefreshCw, Car, ArrowRight, Target, Link, Camera, HardDrive } from 'lucide-react';

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
    { name: 'AI Real Estate Assistant', href: '/ai-real-estate-assistant', icon: Building },
    { name: 'AI Legal Document Analyzer', href: '/ai-legal-analyzer', icon: Shield },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare-assistant', icon: Heart },
    { name: 'AI Trading Bot Pro', href: '/ai-trading-bot', icon: TrendingUp },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer', icon: Truck },
    { name: 'AI Energy Manager', href: '/ai-energy-manager', icon: Zap },
    { name: 'AI Event Planner Pro', href: '/ai-event-planner', icon: Calendar },
    { name: 'AI Learning Management', href: '/ai-learning-management', icon: GraduationCap },
    { name: 'AI Restaurant Manager', href: '/ai-restaurant-manager', icon: Utensils },
    { name: 'AI Insurance Claims', href: '/ai-insurance-claims', icon: Shield },
    { name: 'AI Construction Manager', href: '/ai-construction-manager', icon: Hammer },
    { name: 'AI Travel Planner', href: '/ai-travel-planner', icon: Plane },
    { name: 'AI Agriculture Assistant', href: '/ai-agriculture-assistant', icon: Sprout },
    { name: 'AI Personal Finance', href: '/ai-personal-finance', icon: DollarSign },
    { name: 'AI Language Tutor', href: '/ai-language-tutor', icon: MessageSquare },
    { name: 'AI Home Security', href: '/ai-home-security', icon: Shield },
    { name: 'AI Pet Care', href: '/ai-pet-care', icon: Heart },
    { name: 'AI Wedding Planner', href: '/ai-wedding-planner', icon: Heart },
    { name: 'AI Mental Health Coach', href: '/ai-mental-health-coach', icon: Brain },
    { name: 'AI Job Matching', href: '/ai-job-matching', icon: Briefcase },
    { name: 'AI Home Automation', href: '/ai-home-automation', icon: Home },
    { name: 'AI Nutrition Coach', href: '/ai-nutrition-coach', icon: Apple },
    { name: 'AI Car Maintenance', href: '/ai-car-maintenance', icon: Car },
    { name: 'AI Garden Assistant', href: '/ai-garden-assistant', icon: Sprout },
    { name: 'AI Sleep Optimizer', href: '/ai-sleep-optimizer', icon: Moon },
    { name: 'AI Time Management', href: '/ai-time-management', icon: Clock },
    { name: 'AI Dating Assistant', href: '/ai-dating-assistant', icon: Heart },
    { name: 'AI Study Assistant', href: '/ai-study-assistant', icon: BookOpen },
    { name: 'AI Investment Manager', href: '/ai-investment-manager', icon: TrendingUp },
    { name: 'AI Personal Stylist', href: '/ai-personal-stylist', icon: Palette },
    { name: 'AI Energy Auditor', href: '/ai-energy-auditor', icon: Battery },
    { name: 'AI Personal Chef', href: '/ai-personal-chef', icon: ChefHat },
    { name: 'AI Personal Trainer', href: '/ai-personal-trainer', icon: Dumbbell },
    { name: 'AI Translator Pro', href: '/ai-translator-pro', icon: Globe },
    { name: 'AI Personal Assistant', href: '/ai-personal-assistant-pro', icon: Bot },
    { name: 'AI Weather Intelligence', href: '/ai-weather-intelligence', icon: Cloud },
    { name: 'AI Personal Shopper', href: '/ai-personal-shopper', icon: ShoppingCart },
    { name: 'AI Home Maintenance', href: '/ai-home-maintenance', icon: Wrench },
    { name: 'AI Personal Brand Manager', href: '/ai-personal-brand-manager', icon: Star },
    { name: 'AI Pet Health Monitor', href: '/ai-pet-health-monitor', icon: Heart },
    { name: 'AI Finance Advisor', href: '/ai-finance-advisor', icon: CreditCard },
    { name: 'AI Personal Development', href: '/ai-personal-development', icon: Rocket },
    { name: 'AI Personal Security', href: '/ai-personal-security', icon: Shield },
    { name: 'AI Memory Assistant', href: '/ai-memory-assistant', icon: Brain },
    { name: 'AI Relationship Coach', href: '/ai-relationship-coach', icon: Heart },
    { name: 'AI Creativity Assistant', href: '/ai-creativity-assistant', icon: Palette },
    { name: 'AI Productivity Suite', href: '/ai-productivity-suite', icon: Zap },
    { name: 'AI Wellness Coach', href: '/ai-wellness-coach', icon: Leaf },
    { name: 'AI Learning Accelerator', href: '/ai-learning-accelerator', icon: BookOpen },
    { name: 'AI Success Coach', href: '/ai-success-coach', icon: Trophy },
    { name: 'AI Innovation Lab', href: '/ai-innovation-lab', icon: Lightbulb },
    { name: 'AI Legacy Builder', href: '/ai-legacy-builder', icon: Star },
    { name: 'AI Transformation Engine', href: '/ai-transformation-engine', icon: RefreshCw },
  ];

  const aiServices = [
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain },
    { name: 'Quantum AI Computing', href: '/quantum-ai-computing', icon: Cpu },
    { name: 'Autonomous Systems AI', href: '/autonomous-systems-ai', icon: Car },
    { name: 'AI Drug Discovery', href: '/ai-drug-discovery', icon: Heart },
    { name: 'AI Climate Intelligence', href: '/ai-climate-intelligence', icon: Globe },
    { name: 'AI Space Technology', href: '/ai-space-technology', icon: Plane },
    { name: 'AI Brain-Computer Interface', href: '/ai-brain-computer-interface', icon: Brain },
    { name: 'AI Metaverse Platform', href: '/ai-metaverse-platform', icon: Box },
    { name: 'AI Nanotechnology', href: '/ai-nanotechnology', icon: Settings },
    { name: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting', icon: TrendingUp },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Blockchain Intelligence', href: '/ai-blockchain-intelligence', icon: Lock },
    { name: 'AI Augmented Reality', href: '/ai-augmented-reality', icon: Eye },
    { name: 'AI Virtual Reality', href: '/ai-virtual-reality', icon: Box },
    { name: 'AI Robotics Control', href: '/ai-robotics-control', icon: Settings },
    { name: 'AI Swarm Intelligence', href: '/ai-swarm-intelligence', icon: Users },
    { name: 'AI Cognitive Computing', href: '/ai-cognitive-computing', icon: Brain },
    { name: 'AI Explainable Intelligence', href: '/ai-explainable-intelligence', icon: Eye },
    { name: 'AI Federated Learning', href: '/ai-federated-learning', icon: Database },
    { name: 'AI Transfer Learning', href: '/ai-transfer-learning', icon: ArrowRight },
    { name: 'AI Reinforcement Learning', href: '/ai-reinforcement-learning', icon: Target },
    { name: 'AI Generative Models', href: '/ai-generative-models', icon: Palette },
    { name: 'AI Multimodal Learning', href: '/ai-multimodal-learning', icon: Eye },
    { name: 'AI Self-Supervised Learning', href: '/ai-self-supervised-learning', icon: Brain },
    { name: 'AI Continual Learning', href: '/ai-continual-learning', icon: TrendingUp },
    { name: 'AI Few-Shot Learning', href: '/ai-few-shot-learning', icon: Target },
    { name: 'AI Adversarial Learning', href: '/ai-adversarial-learning', icon: Shield },
    { name: 'AI Neuromorphic Computing', href: '/ai-neuromorphic-computing', icon: Brain },
    { name: 'AI Causal Inference', href: '/ai-causal-inference', icon: ArrowRight },
    { name: 'AI Graph Neural Networks', href: '/ai-graph-neural-networks', icon: Link },
    { name: 'AI Attention Mechanisms', href: '/ai-attention-mechanisms', icon: Eye },
    { name: 'AI Memory Networks', href: '/ai-memory-networks', icon: Database },
    { name: 'AI Capsule Networks', href: '/ai-capsule-networks', icon: Box },
    { name: 'AI Transformer Networks', href: '/ai-transformer-networks', icon: MessageSquare },
    { name: 'AI Diffusion Models', href: '/ai-diffusion-models', icon: Camera },
    { name: 'AI Large Language Models', href: '/ai-large-language-models', icon: FileText },
    { name: 'AI Vision Transformers', href: '/ai-vision-transformers', icon: Eye },
    { name: 'AI Audio Intelligence', href: '/ai-audio-intelligence', icon: Mic },
    { name: 'AI Video Intelligence', href: '/ai-video-intelligence', icon: Video },
    { name: 'AI Sensor Fusion', href: '/ai-sensor-fusion', icon: Settings },
    { name: 'AI Edge Intelligence', href: '/ai-edge-intelligence', icon: Cpu },
    { name: 'AI Cloud Intelligence', href: '/ai-cloud-intelligence', icon: Cloud },
    { name: 'AI Hybrid Intelligence', href: '/ai-hybrid-intelligence', icon: Users },
    { name: 'AI Responsible Intelligence', href: '/ai-responsible-intelligence', icon: Shield },
    { name: 'AI Sustainable Intelligence', href: '/ai-sustainable-intelligence', icon: Globe },
    { name: 'AI Quantum Intelligence', href: '/ai-quantum-intelligence', icon: Cpu },
    { name: 'AI Autonomous Intelligence', href: '/ai-autonomous-intelligence', icon: Brain },
    { name: 'AI Superintelligence', href: '/ai-superintelligence', icon: Star },
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Edge Computing', href: '/edge-computing', icon: Settings },
    { name: '5G Networks', href: '/5g-networks', icon: Globe },
    { name: 'Autonomous Infrastructure', href: '/autonomous-infrastructure', icon: Car },
    { name: 'Smart Cities', href: '/smart-cities', icon: Building },
    { name: 'Space Technology', href: '/space-technology', icon: Plane },
    { name: 'Biometric Security', href: '/biometric-security', icon: Shield },
    { name: 'Holographic Technology', href: '/holographic-technology', icon: Eye },
    { name: 'Neural Interfaces', href: '/neural-interfaces', icon: Brain },
    { name: 'Quantum Internet', href: '/quantum-internet', icon: Lock },
    { name: 'AR Infrastructure', href: '/ar-infrastructure', icon: Eye },
    { name: 'VR Infrastructure', href: '/vr-infrastructure', icon: Box },
    { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure', icon: Lock },
    { name: 'AI Hardware', href: '/ai-hardware', icon: Cpu },
    { name: 'IoT Infrastructure', href: '/iot-infrastructure', icon: Settings },
    { name: 'Digital Twins', href: '/digital-twins', icon: Box },
    { name: 'RPA Infrastructure', href: '/rpa-infrastructure', icon: Settings },
    { name: 'Microservices', href: '/microservices', icon: Code },
    { name: 'Serverless Computing', href: '/serverless-computing', icon: Cloud },
    { name: 'HPC Infrastructure', href: '/hpc-infrastructure', icon: Cpu },
    { name: 'Data Lake', href: '/data-lake', icon: Database },
    { name: 'Real-time Analytics', href: '/real-time-analytics', icon: BarChart },
    { name: 'CDN Infrastructure', href: '/cdn-infrastructure', icon: Globe },
    { name: 'API Management', href: '/api-management', icon: Link },
    { name: 'IAM Infrastructure', href: '/iam-infrastructure', icon: Shield },
    { name: 'Disaster Recovery', href: '/disaster-recovery', icon: HardDrive },
    { name: 'Compliance Infrastructure', href: '/compliance-infrastructure', icon: FileText },
    { name: 'Zero Trust Security', href: '/zero-trust-security', icon: Shield },
    { name: 'Hybrid Cloud', href: '/hybrid-cloud', icon: Cloud },
    { name: 'Multi-Cloud', href: '/multi-cloud', icon: Cloud },
    { name: 'Edge AI', href: '/edge-ai', icon: Cpu },
    { name: 'Quantum Security', href: '/quantum-security', icon: Lock },
    { name: 'Autonomous Infrastructure', href: '/autonomous-infrastructure', icon: Settings },
    { name: 'Sustainable IT', href: '/sustainable-it', icon: Globe },
    { name: 'Next-Gen Data Centers', href: '/next-gen-data-centers', icon: Building },
    { name: 'Space Computing', href: '/space-computing', icon: Plane },
    { name: 'Neuromorphic Computing', href: '/neuromorphic-computing', icon: Brain },
    { name: 'Optical Computing', href: '/optical-computing', icon: Eye },
    { name: 'DNA Storage', href: '/dna-storage', icon: Database },
    { name: 'Holographic Storage', href: '/holographic-storage', icon: Box },
    { name: 'Molecular Computing', href: '/molecular-computing', icon: Settings },
    { name: 'Biological Computing', href: '/biological-computing', icon: Heart },
    { name: 'Quantum Biological Computing', href: '/quantum-biological-computing', icon: Brain },
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
