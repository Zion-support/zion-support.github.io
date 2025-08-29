import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Truck, RefreshCw, AlertTriangle, BarChart3, Server, Key, Network, Sparkles, Crown, Flame, Eye, Video } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'Innovative Micro SAAS 2025', 
      href: '/innovative-micro-saas-services-2025', 
      icon: Rocket, 
      description: 'Cutting-edge AI Services',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'AI Legal Document Analysis', 
      href: '/services/ai-legal-document-analysis', 
      icon: Scale, 
      description: 'Legal AI & Document Review',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Supply Chain Optimization', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Truck, 
      description: 'Supply Chain AI & Optimization',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI Healthcare Analytics', 
      href: '/services/ai-healthcare-analytics', 
      icon: Heart, 
      description: 'Healthcare AI & Analytics',
      featured: true,
      color: 'from-pink-500 to-red-500'
    },
    { 
      name: 'AI Financial Trading', 
      href: '/services/ai-financial-trading', 
      icon: TrendingUp, 
      description: 'Financial AI & Trading',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'AI Energy Management', 
      href: '/services/ai-energy-management', 
      icon: Zap, 
      description: 'Energy AI & Optimization',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'AI Autonomous Research', 
      href: '/services/ai-autonomous-research-assistant', 
      icon: Search, 
      description: 'Research AI & Automation',
      featured: true,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'AI Metaverse Builder', 
      href: '/services/ai-metaverse-builder-platform', 
      icon: Globe, 
      description: 'Metaverse AI & Creation',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Space Tech Platform', 
      href: '/services/ai-space-tech-platform', 
      icon: Rocket, 
      description: 'Space AI & Technology',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Quantum ML Platform', 
      href: '/services/ai-quantum-machine-learning', 
      icon: Atom, 
      description: 'Quantum AI & Machine Learning',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Neural Interface', 
      href: '/services/ai-neural-interface-platform', 
      icon: Brain, 
      description: 'Neural AI & Brain Interface',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Holographic Workspace', 
      href: '/services/ai-holographic-workspace', 
      icon: Eye, 
      description: 'Holographic AI & 3D Workspace',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'AI BioDigital Twin', 
      href: '/services/ai-biodigital-twin', 
      icon: Heart, 
      description: 'Digital Twin AI & Healthcare',
      featured: true,
      color: 'from-pink-500 to-red-500'
    },
    { 
      name: 'AI Space Debris Tracking', 
      href: '/services/ai-space-debris-tracking', 
      icon: Rocket, 
      description: 'Space Safety AI & Tracking',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Ethics Guardian', 
      href: '/services/ai-ethics-guardian', 
      icon: Shield, 
      description: 'AI Ethics & Governance',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Zero-Trust Network Access', 
      href: '/services/zero-trust-network-access', 
      icon: Lock, 
      description: 'Zero-Trust Security & Access',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Edge Computing Orchestration', 
      href: '/services/edge-computing-orchestration', 
      icon: Cpu, 
      description: 'Edge Computing & Orchestration',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'Quantum-Safe Cryptography', 
      href: '/services/quantum-safe-cryptography', 
      icon: Shield, 
      description: 'Quantum-Safe Security & Encryption',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Data Center Management', 
      href: '/services/ai-data-center-management', 
      icon: Server, 
      description: 'Data Center AI & Management',
      featured: true,
      color: 'from-slate-500 to-gray-500'
    },
    { 
      name: 'Blockchain Identity Management', 
      href: '/services/blockchain-identity-management', 
      icon: Key, 
      description: 'Blockchain Identity & Security',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'AI Network Optimization', 
      href: '/services/ai-network-optimization', 
      icon: Network, 
      description: 'Network AI & Optimization',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Sustainable Green Data Center', 
      href: '/services/sustainable-green-data-center', 
      icon: Leaf, 
      description: 'Green Technology & Sustainability',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'AI Disaster Recovery', 
      href: '/services/ai-disaster-recovery', 
      icon: Shield, 
      description: 'Disaster Recovery AI & Continuity',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'AI Autonomous Business Operations', 
      href: '/services/ai-autonomous-business-operations-2030', 
      icon: Building, 
      description: 'Autonomous Business AI & Operations',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Quantum AI Cybersecurity', 
      href: '/services/quantum-ai-cybersecurity-2030', 
      icon: Shield, 
      description: 'Quantum AI Security & Defense',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Content Creation Studio', 
      href: '/services/ai-content-creation-studio-2030', 
      icon: PenTool, 
      description: 'Content Creation AI & Studio',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Biometric Authentication', 
      href: '/services/biometric-authentication-platform', 
      icon: Shield, 
      description: 'Biometric Security & Authentication',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'AI Predictive Analytics', 
      href: '/services/ai-predictive-analytics-platform', 
      icon: BarChart3, 
      description: 'Predictive AI & Analytics',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Voice Recognition', 
      href: '/services/ai-voice-recognition-platform', 
      icon: MessageCircle, 
      description: 'Voice AI & Recognition',
      featured: true,
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'AI Computer Vision', 
      href: '/services/ai-computer-vision-platform', 
      icon: Eye, 
      description: 'Computer Vision AI & Analysis',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'AI NLP Platform', 
      href: '/services/ai-nlp-platform', 
      icon: MessageCircle, 
      description: 'Natural Language AI & Processing',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const solutions = [
    { 
      name: 'Cloud & DevOps Solutions', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'Cloud Infrastructure & DevOps',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Solutions', 
      href: '/services/digital-twin', 
      icon: RefreshCw, 
      description: 'Digital Twin & Simulation',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Data Analytics Solutions', 
      href: '/services/data-analytics', 
      icon: BarChart3, 
      description: 'Data Analytics & Business Intelligence',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IT Infrastructure Solutions', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'IT Infrastructure & Management',
      featured: true,
      color: 'from-slate-500 to-gray-500'
    },
    { 
      name: 'Cybersecurity Solutions', 
      href: '/services/cybersecurity', 
      icon: Shield, 
      description: 'Cybersecurity & Threat Protection',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Green IT Solutions', 
      href: '/services/green-it', 
      icon: Leaf, 
      description: 'Green Technology & Sustainability',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'Incident Response Platform', 
      href: '/services/incident-response-platform', 
      icon: AlertTriangle, 
      description: 'Incident Response & Management',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'Interview Assessment AI', 
      href: '/services/interview-assessment-ai', 
      icon: Users, 
      description: 'AI Interview & Assessment',
      featured: true,
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      name: 'Micro CRM Solutions', 
      href: '/services/micro-crm', 
      icon: Users, 
      description: 'Micro CRM & Customer Management',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Quantum Computing Solutions', 
      href: '/services/quantum-computing-solutions', 
      icon: Atom, 
      description: 'Quantum Computing & Optimization',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Space Technology Solutions', 
      href: '/services/space-tech', 
      icon: Rocket, 
      description: 'Space Technology & Innovation',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Sustainable Technology Solutions', 
      href: '/services/sustainable-technology', 
      icon: Leaf, 
      description: 'Sustainable Technology & Green Tech',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'Robotics Automation Solutions', 
      href: '/services/robotics-automation', 
      icon: Cpu, 
      description: 'Robotics & Automation',
      featured: true,
      color: 'from-slate-500 to-gray-500'
    },
    { 
      name: 'Website Analytics Solutions', 
      href: '/services/website-analytics', 
      icon: BarChart3, 
      description: 'Website Analytics & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Zero Trust Network Access', 
      href: '/services/zero-trust-network-access', 
      icon: Lock, 
      description: 'Zero Trust Security & Access',
      featured: true,
      color: 'from-red-500 to-orange-500'
    }
  ];

  const resources = [
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future of Technology Services',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Innovative Services 2025', 
      href: '/services/innovative-2025', 
      icon: Sparkles, 
      description: 'Innovative Technology Services',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Comprehensive Services 2030', 
      href: '/services/comprehensive-2030', 
      icon: Crown, 
      description: 'Comprehensive Technology Solutions',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'Enhanced Services Landing', 
      href: '/services/enhanced', 
      icon: Star, 
      description: 'Enhanced Technology Services',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Comprehensive Services Showcase 2030', 
      href: '/services/showcase-2030', 
      icon: Flame, 
      description: 'Showcase of Future Technology',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Innovative Services Overview', 
      href: '/services/overview', 
      icon: Eye, 
      description: 'Overview of Innovative Services',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Comprehensive Pricing Guide 2027', 
      href: '/pricing-guide-2027', 
      icon: DollarSign, 
      description: 'Pricing Guide for 2027',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'Comprehensive Pricing Guide 2025', 
      href: '/pricing-guide-2025', 
      icon: DollarSign, 
      description: 'Pricing Guide for 2025',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Comprehensive Pricing Guide 2030', 
      href: '/pricing-guide-2030', 
      icon: DollarSign, 
      description: 'Pricing Guide for 2030',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: FileText, 
      description: 'Success Stories & Case Studies',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'White Papers', 
      href: '/white-papers', 
      icon: BookOpen, 
      description: 'Technology White Papers',
      featured: true,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      name: 'Webinars', 
      href: '/webinars', 
      icon: Video, 
      description: 'Educational Webinars',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Documentation', 
      href: '/docs', 
      icon: BookOpen, 
      description: 'Technical Documentation',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'FAQ', 
      href: '/faq', 
      icon: HelpCircle, 
      description: 'Frequently Asked Questions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: PenTool, 
      description: 'Technology Blog & Insights',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Community', 
      href: '/community', 
      icon: Users, 
      description: 'Technology Community',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Developers', 
      href: '/developers', 
      icon: Code, 
      description: 'Developer Resources',
      featured: true,
      color: 'from-slate-500 to-gray-500'
    },
    { 
      name: 'Marketplace', 
      href: '/marketplace', 
      icon: ShoppingCart, 
      description: 'Technology Marketplace',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'Partners', 
      href: '/partners', 
      icon: HeartHandshake, 
      description: 'Strategic Partnerships',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Careers', 
      href: '/careers', 
      icon: Users, 
      description: 'Career Opportunities',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (item.name === 'Services') {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                            setSolutionsDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Solutions') {
                            setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            setServicesDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Resources') {
                            setResourcesDropdownOpen(!resourcesDropdownOpen);
                            setServicesDropdownOpen(false);
                            setSolutionsDropdownOpen(false);
                          }
                        }}
                        className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          (item.name === 'Services' && servicesDropdownOpen) ||
                          (item.name === 'Solutions' && solutionsDropdownOpen) ||
                          (item.name === 'Resources' && resourcesDropdownOpen)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    service.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                      {React.createElement(service.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {service.description}
                                      </p>
                                      {service.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    solution.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                                      {React.createElement(solution.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {solution.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {solution.description}
                                      </p>
                                      {solution.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    resource.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                                      {React.createElement(resource.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {resource.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {resource.description}
                                      </p>
                                      {resource.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side - Search, Actions, Mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                </div>
              </form>

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/request-quote"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Quote
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="container-responsive py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                            else if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            else if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                          }}
                          className="flex items-center justify-between w-full text-left text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Resources' && resourcesDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Services Dropdown */}
                        {item.name === 'Services' && servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block text-cyan-400 hover:text-cyan-300 py-1 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}

                        {/* Mobile Solutions Dropdown */}
                        {item.name === 'Solutions' && solutionsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Mobile Resources Dropdown */}
                        {item.name === 'Resources' && resourcesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {resource.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-slate-700/50 space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {contactInfo.email}
                </a>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  to="/request-quote"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Your Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || solutionsDropdownOpen || resourcesDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesDropdownOpen(false);
            setSolutionsDropdownOpen(false);
            setResourcesDropdownOpen(false);
          }}
        />
      )}
    </>
  );
}
