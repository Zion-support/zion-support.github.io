<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, User, Bell, Award, GraduationCap, LifeBuoy, BarChart3, Server, Satellite, Gauge, Workflow, Truck, Eye, Smartphone, Database, Network, Clock, PanelLeft, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { Sidebar } from '../components/Sidebar';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Cpu, Rocket, Lock, Globe, Heart, Code, Users, Network } from 'lucide-react';
=======
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Cpu, Rocket, Lock, Globe, Heart, Code, Users, Network } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-f8ab
>>>>>>> merge-all-prs-20250904-105408

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
<<<<<<< HEAD

  const handleSearch = (e: Reac t.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

// Organized Services Categories
  const servicesCategories = [{
      title: 'AI & Machine Learning',
icon: Brai n,
      color: 'from-zion-cyan to-zion-purple',
=======
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Shield, 
  Users, 
  Sparkles,
  Phone,
  Mail
} from 'lucide-react';

const AppHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'AI Solutions',
      href: '/ai-solutions',
      icon: Brain,
      color: 'from-cyan-400 to-purple-500',
>>>>>>> origin/main
      dropdown: [
        { name: 'Machine Learning', href: '/ai-solutions/machine-learning' },
        { name: 'Computer Vision', href: '/ai-solutions/computer-vision' },
        { name: 'NLP & Chatbots', href: '/ai-solutions/nlp-chatbots' },
        { name: 'Predictive Analytics', href: '/ai-solutions/predictive-analytics' }
      ]
    },
<<<<<<< HEAD
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
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Quantum Computing, Neural Interfaces & Space Tech',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Pricing Guide 2026', 
      href: '/comprehensive-pricing-guide-2026', 
      icon: DollarSign, 
      description: 'Complete Pricing & ROI Analysis',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Pricing Guide 2030', 
      href: '/comprehensive-pricing-guide-2030', 
      icon: DollarSign, 
      description: 'Revolutionary 2030 Services Pricing',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: false,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: false,
      color: 'from-green-500 to-emerald-500'
=======
    {
      name: 'Cloud Services',
      href: '/cloud-services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-400',
      dropdown: [
        { name: 'Infrastructure', href: '/cloud-services/infrastructure' },
        { name: 'DevOps', href: '/cloud-services/devops' },
        { name: 'Migration', href: '/cloud-services/migration' },
        { name: 'Monitoring', href: '/cloud-services/monitoring' }
      ]
    },
    {
      name: 'Security',
      href: '/security',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      dropdown: [
        { name: 'Cybersecurity', href: '/security/cybersecurity' },
        { name: 'Compliance', href: '/security/compliance' },
        { name: 'Penetration Testing', href: '/security/penetration-testing' },
        { name: 'Security Audits', href: '/security/audits' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'Innovation',
      href: '/innovation',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500'
>>>>>>> origin/main
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

<<<<<<< HEAD
  const closeAllDropdowns = (...args: unknow n[]): unknown => {
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};

  return ()
    <>`
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10'
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>
        <div className="container-responsive">"
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}"
            <div className="flex items-center">"
              <Link to="/" className="flex-shrink-0 group">"
                <div className="flex items-center space-x-3">"
                  <div className="relative">"
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-300">"
                      <Zap className="w-6 h-6 text-white"   />
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover: opacit y-75 transition-opacity duration-300"></div>
                  </div>"
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover: scal e-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}            <nav className="hidden lg: flex items-center space-x-8">
              {navigation.map((item) => ("
                <div key={item.name} className="relative">
                  {item.hasDropdown ? ("
                    <div className="relative">
                      <button
                        onClick={() => {
<AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover: b g-zion-slate/50 transition-colors group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover: scal e-110 transition-transform`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover: tex t-zion-cyan transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover: tex t-zion-cyan hover: b g-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'solutions'}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`}  />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover: b g-zion-slate/50 transition-colors group"
                          >
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover: scal e-110 transition-transform`}>
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover: tex t-zion-cyan transition-colors">
                                {solution.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {solution.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover: tex t-zion-cyan hover: b g-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'resources'}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}  />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover: b g-zion-slate/50 transition-colors group"
                          >
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover: scal e-110 transition-transform" />
                            <span className="text-white group-hover: tex t-zion-cyan transition-colors">
                              {resource.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover: tex t-zion-cyan hover: b g-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'company'}
                aria-haspopup="true"
              >
                Company
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`}  />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover: b g-zion-slate/50 transition-colors group"
                          >
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover: scal e-110 transition-transform" />
                            <span className="text-white group-hover: tex t-zion-cyan transition-colors">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md: bloc k">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan/50 focus: borde r-zion-cyan transition-all duration-200 ${
                    searchFocused ? 'w-80' : ''
                  }`}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light"  />
              </form>
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover: b g-zion-cyan/10 transition-colors"
                  aria-expanded={activeDropdown === 'user'}
                  aria-haspopup="true"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white"  />
                  </div>
                  <span className="text-white text-sm hidden lg: bloc k">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-zion-slate-light"  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md"
                    >
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover: b g-zion-slate/50 transition-colors text-white hover: tex t-zion-cyan"
                        >
                          <PanelLeft className="w-4 h-4 mr-3"  />
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover: b g-zion-slate/50 transition-colors text-white hover: tex t-zion-cyan"
                        >
                          <User className="w-4 h-4 mr-3"  />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover: b g-zion-slate/50 transition-colors text-white hover: tex t-zion-cyan"
                        >
                          <Settings className="w-4 h-4 mr-3"  />
                          Settings
                        </Link>
                        <hr className="border-zion-slate/20 my-2"  />
                        <button
                          onClick={() => {
                            logout();
                            setActiveDropdown(null);
                          }}
                          className="flex items-center w-full p-3 rounded-lg hover: b g-zion-slate/50 transition-colors text-white hover: tex t-zion-cyan"
                        >
                          <LogOut className="w-4 h-4 mr-3"  />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md: flex relative">  const navigation = [
    { name: 'Home', href: '/', current: tru e },
    { name: 'About', href: '/about', current: fals e },
    { name: 'Contact', href: '/contact', current: fals e },
  ];

  const services = [
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },
  ];
=======
  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };
>>>>>>> origin/main

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
<<<<<<< HEAD
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md: flex ml-8 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-300 hover: tex t-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className="flex items-center text-slate-300 hover: tex t-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}  />
              </button>
              
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover: b g-slate-700/50 transition-colors duration-200 group"
                        >
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover: tex t-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.description}
                            </div>
                          </div>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <Link
                        to="/services"
                        className="block text-center text-cyan-400 hover: tex t-cyan-300 text-sm font-medium transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
=======
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl font-bold text-white">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                ZION TECH GROUP
              </h1>
              <p className="text-xs text-gray-500">Innovation • Intelligence • Impact</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => item.dropdown ? handleDropdownToggle(item.name) : null}
                  className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200/50 py-2 z-50"
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-300"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
>>>>>>> origin/main
                )}
              </div>
            ))}
          </nav>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">Call Us</span>
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
<<<<<<< HEAD
        </div>
=======
>>>>>>> origin/main

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-cyan-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200/50 py-4"
          >
<<<<<<< HEAD
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus: outlin e-none focus: rin g-2 focus: rin g-zion-cyan/50 focus: borde r-zion-cyan"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light"  />
              </form>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover: tex t-zion-cyan hover: b g-zion-cyan/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <div className="text-sm font-medium text-zion-slate-light mb-2">Services</div>
                  <div className="space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md: hidde n">
            <div className="px-2 pt-2 pb-3 space-y-1 sm: p x-3 bg-slate-800/95 border-t border-slate-700/20">
=======
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
=======
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-f8ab

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
<<<<<<< HEAD
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false },
    { name: 'AI Solutions', href: '/ai-solutions', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Partners', href: '/partners', current: false },
    { name: 'News', href: '/news', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Help', href: '/help', current: false },
    { name: 'FAQ', href: '/faq', current: false },
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Marketplace', href: '/marketplace', current: false },
  ];

  // Enhanced services by category with better organization and working links
  const services = [
<<<<<<< HEAD
    // Featured & New Services
    { name: '2029 Cutting-Edge Services', href: '/zion-cutting-edge-services-2029', icon: Star, description: 'Future-ready Technology Solutions', category: 'Featured', featured: true, color: 'from-indigo-500 to-purple-500' },
    { name: '2027 Services Overview', href: '/comprehensive-services-showcase-2027', icon: Star, description: 'Cutting-edge Innovation & Emerging Tech', category: 'Featured', featured: true, color: 'from-purple-500 to-pink-500' },
    { name: '2026 Services Overview', href: '/ultimate-services-showcase-2026', icon: Star, description: 'Revolutionary AI & Quantum Solutions', category: 'Featured', featured: true, color: 'from-yellow-500 to-orange-500' },
    
    // AI & Machine Learning
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Advanced analytics & ML insights', category: 'AI & ML', color: 'from-blue-500 to-indigo-500' },
    { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield, description: 'Automated regulatory compliance', category: 'AI & ML', color: 'from-green-500 to-emerald-500' },
    { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: Users, description: 'Intelligent sales optimization', category: 'AI & ML', color: 'from-purple-500 to-pink-500' },
    { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', icon: Search, description: 'Machine learning SEO optimization', category: 'AI & ML', color: 'from-orange-500 to-red-500' },
    { name: 'Interview Assessment AI', href: '/services/interview-assessment-ai', icon: Users, description: 'AI-powered candidate evaluation', category: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Content Marketing Suite', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'Automated content creation', category: 'AI & ML', color: 'from-green-500 to-teal-500' },
    { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: 'Intelligent support automation', category: 'AI & ML', color: 'from-indigo-500 to-purple-500' },
    { name: 'AI Project Management', href: '/services/ai-project-management', icon: Target, description: 'AI-driven project optimization', category: 'AI & ML', color: 'from-blue-500 to-indigo-500' },
    { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: BarChart3, description: 'Intelligent financial insights', category: 'AI & ML', color: 'from-green-500 to-emerald-500' },
    
    // Cloud & DevOps
    { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure automation & scaling', category: 'Cloud & DevOps', color: 'from-blue-500 to-cyan-500' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server, description: 'Enterprise infrastructure solutions', category: 'Cloud & DevOps', color: 'from-gray-500 to-slate-500' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization', category: 'Cloud & DevOps', color: 'from-green-500 to-emerald-500' },
    { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', icon: BarChart3, description: 'Financial operations automation', category: 'Cloud & DevOps', color: 'from-blue-500 to-indigo-500' },
    
    // Cybersecurity
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Advanced AI-powered security', category: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
    { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock, description: 'Web security hardening', category: 'Cybersecurity', color: 'from-red-500 to-pink-500' },
    { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield, description: 'GDPR/CCPA compliance', category: 'Cybersecurity', color: 'from-purple-500 to-indigo-500' },
    { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock, description: 'Modern security architecture', category: 'Cybersecurity', color: 'from-red-500 to-orange-500' },
    
    // Digital Transformation
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye, description: 'Virtual system replicas', category: 'Digital Transformation', color: 'from-cyan-500 to-blue-500' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Strategic technology consulting', category: 'Digital Transformation', color: 'from-yellow-500 to-orange-500' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Cpu, description: 'Technology strategy & planning', category: 'Digital Transformation', color: 'from-gray-500 to-slate-500' },
    
    // Emerging Technologies
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, description: 'Next-gen computational power', category: 'Emerging Tech', color: 'from-indigo-500 to-purple-500' },
    { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network, description: 'Smart device networks', category: 'Emerging Tech', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom, description: 'Quantum-AI integration', category: 'Emerging Tech', color: 'from-indigo-500 to-purple-500' },
    { name: 'Space Technology', href: '/space-tech', icon: Satellite, description: 'Space-based solutions', category: 'Emerging Tech', color: 'from-blue-500 to-indigo-500' },
    
    // Data & Analytics
    { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3, description: 'Business intelligence & insights', category: 'Data & Analytics', color: 'from-blue-500 to-indigo-500' },
    { name: 'Business Intelligence', href: '/services/ai-business-intelligence', icon: TrendingUp, description: 'Performance metrics & reporting', category: 'Data & Analytics', color: 'from-green-500 to-teal-500' },
    
    // Micro SaaS Solutions
    { name: 'Micro SaaS Platform', href: '/micro-saas', icon: ShoppingCart, description: 'Niche software solutions', category: 'Micro SaaS', color: 'from-purple-500 to-pink-500' },
    { name: 'Micro CRM', href: '/services/micro-crm', icon: Users, description: 'Customer relationship management', category: 'Micro SaaS', color: 'from-green-500 to-emerald-500' },
    { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', icon: MessageCircle, description: 'Customer support system', category: 'Micro SaaS', color: 'from-green-500 to-emerald-500' },
    { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3, description: 'Performance tracking & insights', category: 'Micro SaaS', color: 'from-blue-500 to-indigo-500' },
=======
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Analytics', 
      href: '/services/ai-healthcare-analytics-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity-threat-detection', 
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
      href: '/services/iot-edge', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Data Analytics', 
      href: '/services/data-analytics', 
      icon: BarChart3, 
      description: 'Business Intelligence & Analytics',
      featured: false,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'IT Infrastructure', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'Enterprise IT Solutions',
      featured: false,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'Green IT Solutions', 
      href: '/services/green-it', 
      icon: Leaf, 
      description: 'Sustainable Technology',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Space Technology', 
      href: '/services/space-tech', 
      icon: Satellite, 
      description: 'Aerospace & Space Tech',
      featured: false,
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions',
      icon: Building2,
      description: 'Large-scale business transformations',
      featured: true
    },
    {
      name: 'AI Solutions',
      href: '/solutions',
      icon: Brain,
      description: 'Artificial Intelligence & Machine Learning',
      featured: true
    },
    {
      name: 'Cybersecurity Solutions',
      href: '/solutions',
      icon: Shield,
      description: 'Advanced security & threat protection',
      featured: true
    },
    {
      name: 'Cloud Solutions',
      href: '/solutions',
      icon: Cloud,
      description: 'Cloud infrastructure & migration',
      featured: false
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true
    },
    {
      name: 'Financial Solutions',
      href: '/solutions',
      icon: TrendingUp,
      description: 'Fintech innovation & compliance',
      featured: true
    }
  ];
  const resources = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: true
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: true
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: Code,
      description: 'Technical guides and APIs',
      featured: true
    },
    {
      name: 'FAQ & Support',
      href: '/faq',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: true
    },
    {
      name: 'Pricing Guide',
      href: '/pricing',
      icon: DollarSign,
      description: 'Complete pricing information',
      featured: true
    }
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-fc73
  ];

  const quickLinks = [
<<<<<<< HEAD
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Request Quote', href: '/contact', icon: MessageCircle },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Star },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Help Center', href: '/help', icon: HelpCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'News', href: '/news', icon: BookOpen },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
=======
    { name: 'Services Overview', href: '/services', icon: Star, description: 'All our services' },
    { name: 'AI Solutions', href: '/services/ai-business-intelligence', icon: Brain, description: 'AI-powered solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas', icon: ShoppingCart, description: 'SaaS solutions' },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent pricing' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
  ];
  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Help Center', href: '/help', icon: MessageCircle },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Training', href: '/training', icon: GraduationCap },
    { name: 'Support', href: '/help', icon: LifeBuoy },
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-fc73
  ];

  // Enhanced futuristic background component
  const FuturisticBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid with neon effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Enhanced floating particles with neon glow */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40 shadow-lg shadow-cyan-400/30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced gradient orbs with neon glow */}
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      {/* Enhanced Animated Background */}
      <FuturisticBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Innovation Hub</div>
              </div>
=======
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigationItems = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      color: 'from-cyan-500 to-blue-500',
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, color: 'from-cyan-500 to-purple-500' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-purple-500 to-red-500' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, color: 'from-blue-500 to-cyan-500' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, color: 'from-green-500 to-cyan-500' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, color: 'from-purple-500 to-cyan-500' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, color: 'from-orange-500 to-purple-500' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, color: 'from-blue-500 to-purple-500' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, color: 'from-green-500 to-blue-500' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, color: 'from-cyan-500 to-blue-500' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, color: 'from-purple-500 to-pink-500' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network, color: 'from-green-500 to-cyan-500' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, color: 'from-purple-500 to-red-500' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, color: 'from-green-500 to-cyan-500' }
      ]
    },
    { name: 'About', href: '/about', icon: Users, color: 'from-blue-500 to-purple-500' },
    { name: 'Blog', href: '/blog', icon: Globe, color: 'from-green-500 to-blue-500' },
    { name: 'Contact', href: '/contact', icon: Heart, color: 'from-pink-500 to-red-500' }
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Zion Tech Group
              </span>
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-f8ab
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
<<<<<<< HEAD
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Main Navigation */}
            <div className="flex items-center space-x-6">
>>>>>>> merge-all-prs-20250904-105408
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
<<<<<<< HEAD
                  className="text-slate-300 hover: tex t-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-slate-300 hover: tex t-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full text-center px-4 py-2 bg-gradient-to-r ${action.color} text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium`}
                    >
                      {action.name}
                    </Link>
                  ))}
                </div>
              </div>
              </div>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover: tex t-zion-cyan transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Solutions */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover: tex t-zion-cyan transition-colors"
                  >
                    {solution.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Resources */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Resources
                </div>
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    to={resource.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover: tex t-zion-cyan transition-colors"
                  >
                    {resource.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Company */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Company
                </div>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover: tex t-zion-cyan transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Auth */}
              {!user ? (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover: b g-zion-cyan hover: tex t-white transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover: b g-zion-cyan/80 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/dashboard"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover: b g-zion-cyan/80 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        closeMobileMenu();
                      }}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover: b g-zion-cyan hover: tex t-white transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
=======
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.dropdown ? handleDropdownToggle(item.name) : null}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-cyan-600 transition-colors duration-300 font-medium py-2"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-6 space-y-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors duration-300 py-1"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact */}
            <div className="mt-6 pt-4 border-t border-gray-200/50 space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-cyan-600 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>info@ziontechgroup.com</span>
              </a>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
>>>>>>> origin/main
            </div>
          </div>
        )}
      </div>
    </header>
  );
<<<<<<< HEAD
}
=======
};

export { AppHeader };
>>>>>>> origin/main
=======
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    item.current 
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/20' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {item.featured && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></span>
                  )}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    item.current 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20' 
                      : 'group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-blue-500/10'
                  }`}></div>
                </Link>
              ))}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  servicesDropdownOpen ? 'rotate-180' : ''
                }`} />
                <div className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
              </button>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-96 bg-zion-slate-dark/95 backdrop-blur-md border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="text-sm font-semibold text-cyan-400 mb-3 px-2">Our Services</div>
                      
                      {/* Featured Services */}
                      <div className="mb-4">
                        <div className="text-xs font-medium text-gray-400 mb-2 px-2">Featured</div>
                        {services.filter(s => s.featured).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                          >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                              <service.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-400">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Service Categories */}
                      <div className="space-y-3">
                        {Array.from(new Set(services.map(s => s.category))).map((category) => (
                          <div key={category}>
                            <div className="text-xs font-medium text-gray-400 mb-2 px-2">{category}</div>
                            {services.filter(s => s.category === category).slice(0, 3).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                              >
                                <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                                  <service.icon className="w-3 h-3 text-white" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-sm text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {service.name}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* View All Services Link */}
                      <div className="mt-4 pt-3 border-t border-cyan-400/20">
                        <Link
                          to="/services"
                          onClick={() => setServicesDropdownOpen(false)}
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 rounded-lg transition-all duration-300"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group"
                >
                  <link.icon className="w-5 h-5" />
                  <div className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                />
              </form>
            </div>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 relative group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <div className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-300"></div>
            </button>

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group">
              <User className="w-5 h-5" />
              <div className="absolute inset-0 rounded-lg group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-md border-t border-cyan-400/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
=======
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className={`w-6 h-6 bg-gradient-to-r ${subItem.color} rounded flex items-center justify-center`}>
                            <subItem.icon className="w-3 h-3 text-white" />
                          </div>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-f8ab
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
<<<<<<< HEAD
                  className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      item.current 
                        ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-400/20' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    {item.featured && (
                      <span className="ml-2 inline-block w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-semibold text-cyan-400">Services</div>
                {services.slice(0, 6).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{service.name}</div>
                      <div className="text-xs text-gray-400">{service.description}</div>
                    </div>
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-center text-cyan-400 font-medium hover:text-white transition-colors duration-300"
                >
                  View All Services →
                </Link>
              </div>

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-cyan-400/20">
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                    >
                      <link.icon className="w-4 h-4" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
=======
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </form>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                  {item.dropdown && (
                    <div className="ml-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <subItem.icon className="w-3 h-3" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-f8ab
            </div>
          </div>
        )}
<<<<<<< HEAD
      </AnimatePresence>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}
=======
      </div>
    </header>
  );
}
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-f8ab
>>>>>>> merge-all-prs-20250904-105408
