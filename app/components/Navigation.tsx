'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Link as LinkIcon, 
  Server, 
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  CheckCircle, 
  ShoppingCart,
  Home,
  Info,
  Briefcase,
  BookOpen,
  HelpCircle,
  Star,
  Award,
  Trophy,
  Gift,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PieChart,
  BarChart as BarChartIcon,
  LineChart,
  TrendingDown,
  Minus,
  Plus,
  X as XIcon,
  Check,
  AlertCircle,
  Lightbulb,
  GraduationCap,
  Building,
  Factory,
  Store,
  ShoppingBag,
  Truck,
  Plane,
  Car,
  Bike,
  Train,
  Ship,
  Rocket,
  Satellite,
  Bluetooth,
  Radio,
  Signal,
  Battery,
  Power,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  TreePine,
  Flower,
  Leaf,
  Sprout,
  Tree,
  Mountain,
  Waves,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Mouse,
  Bug,
  Spider,
  Butterfly,
  Bee,
  Ant,
  Ladybug,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Flamingo,
  Toucan,
  Hummingbird,
  Robin,
  Sparrow,
  Crow,
  Raven,
  Dove,
  Pigeon,
  Chicken,
  Rooster,
  Duck,
  Goose,
  Swan,
  Turkey
} from 'lucide-react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aiServicesOpen, setAiServicesOpen] = useState(false)
  const [itServicesOpen, setItServicesOpen] = useState(false)
  const [microSaasOpen, setMicroSaasOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false)
    setAiServicesOpen(false)
    setMicroSaasOpen(false)
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
  }, [microSaasOpen]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
  }, [])

  // Service data
  const aiServices = [
    { name: 'AI Chatbots', href: '/ai-services', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI Analytics', href: '/ai-services', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-services', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Computer Vision', href: '/ai-services', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Content Generation', href: '/ai-services', icon: FileText, description: 'Automated content' },
    { name: 'AI Cybersecurity', href: '/ai-services', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Healthcare', href: '/ai-services', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-services', icon: DollarSign, description: 'Financial technology' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/it-services', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity', href: '/it-services', icon: Shield, description: 'Advanced security' },
    { name: 'Database Management', href: '/it-services', icon: Database, description: 'Data optimization' },
    { name: 'DevOps & CI/CD', href: '/it-services', icon: Settings, description: 'Automated deployment' },
    { name: 'IT Consulting', href: '/it-services', icon: Users, description: 'Strategic guidance' },
    { name: 'Network Infrastructure', href: '/it-services', icon: Wifi, description: 'Network solutions' },
    { name: 'Server Management', href: '/it-services', icon: Server, description: 'Server administration' },
    { name: 'IT Support', href: '/it-services', icon: Monitor, description: '24/7 technical support' }
  ];

  const microSaasServices = [
    { name: 'Analytics Intelligence', href: '/micro-saas', icon: BarChart, description: 'Business intelligence' },
    { name: 'AI Chat Pro', href: '/micro-saas', icon: MessageCircle, description: 'Customer support' },
    { name: 'Content Studio', href: '/micro-saas', icon: FileText, description: 'Content creation' },
    { name: 'Security Shield', href: '/micro-saas', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Project Master', href: '/micro-saas', icon: Target, description: 'Project management' },
    { name: 'CRM Intelligence', href: '/micro-saas', icon: Users, description: 'Customer relationship' },
    { name: 'Email Marketing', href: '/micro-saas', icon: Mail, description: 'Email automation' },
    { name: 'Invoice Genius', href: '/micro-saas', icon: DollarSign, description: 'Invoice management' }
  ];

  const mainServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence Solutions' },
    { name: 'IT Services', href: '/it-services', icon: Settings, description: 'Information Technology' },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Code, description: 'Software as a Service' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-cyan-400">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-white neon-text-enhanced">
              Zion Tech Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-2xl border border-cyan-400/20 shadow-2xl z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 neon-text-enhanced">Our Services</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {mainServices.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </div>
                            <div className="text-gray-400 text-sm">{service.description}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            
            <Link 
              to="/blog" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mobile-menu bg-slate-900/95 backdrop-blur-lg border-t border-cyan-400/20">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Mobile Services */}
            <div className="space-y-2">
              <div className="text-white font-semibold py-2">Services</div>
              {mainServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="flex items-center space-x-3 py-2 pl-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  onClick={closeAllMenus}
                >
                  <service.icon className="w-5 h-5" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>

            <Link 
              to="/pricing" 
              className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            
            <Link 
              to="/blog" 
              className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className="block text-white hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="block bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center mt-4"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;