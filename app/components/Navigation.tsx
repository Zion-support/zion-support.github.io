<<<<<<< HEAD
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X,
  Zap,
  Brain,
  Shield,
  Cloud,
  BarChart,
  Bot,
  Cpu,
  Database,
  Globe,
  Lock,
  Users,
  Settings,
  TrendingUp,
  Target,
  Star,
  Heart,
  ShoppingCart,
  Code,
  Smartphone,
  Workflow,
  Activity,
  PieChart,
  LineChart,
  BarChart3,
  TrendingDown,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'AI Marketing', href: '/ai-marketing', icon: TrendingUp },
    { name: 'AI Automation', href: '/ai-automation', icon: Bot },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart3 },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Smartphone },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code },
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cpu },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'DevOps', href: '/devops', icon: Workflow },
    { name: 'Database Services', href: '/database', icon: Database },
    { name: 'Networking', href: '/networking', icon: Globe },
    { name: 'IoT Edge Computing', href: '/iot-edge-computing', icon: Cpu },
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Lock },
    { name: 'Robotics', href: '/robotics', icon: Bot },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Settings },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-container')) {
        setAiServicesOpen(false);
        setItServicesOpen(false);
        setSolutionsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setAiServicesOpen(!aiServicesOpen)}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
>>>>>>> origin/main
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
<<<<<<< HEAD
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center p-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded transition-colors"
                        onClick={closeMenu}
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
=======
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Services</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        All Services
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Services
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        IT Services
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Micro SAAS
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">AI Solutions</h3>
                      <Link to="/ai-marketing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Marketing
                      </Link>
                      <Link to="/ai-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Automation
                      </Link>
                      <Link to="/ai-healthcare" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Healthcare
                      </Link>
                      <Link to="/ai-fintech" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Fintech
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Advanced Tech</h3>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Cybersecurity
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Business</h3>
                      <Link to="/business-intelligence" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Business Intelligence
                      </Link>
                      <Link to="/iot-edge-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        IoT & Edge Computing
                      </Link>
                      <Link to="/services-advertising" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Advertising Services
                      </Link>
                    </div>
>>>>>>> origin/main
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            {/* IT Services Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setItServicesOpen(!itServicesOpen)}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flex items-center p-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded transition-colors"
                        onClick={closeMenu}
                      >
                        <service.icon className="w-4 h-4 mr-3" />
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center text-white hover:text-cyan-400 transition-colors"
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        className="flex items-center p-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-700/50 rounded transition-colors"
                        onClick={closeMenu}
                      >
                        <solution.icon className="w-4 h-4 mr-3" />
                        {solution.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            
            <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
=======
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Team
            </Link>
            <Link to="/contact" className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
>>>>>>> origin/main
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
<<<<<<< HEAD
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
=======
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400"
>>>>>>> origin/main
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

<<<<<<< HEAD
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-cyan-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="tel:+13024640950"
                className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                onClick={closeMenu}
              >
                <Phone className="w-4 h-4 mr-2 inline" />
                (302) 464-0950
=======
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/ai-marketing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Marketing
                  </Link>
                  <Link to="/ai-automation" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Automation
                  </Link>
                  <Link to="/ai-healthcare" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Healthcare
                  </Link>
                  <Link to="/ai-fintech" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Fintech
                  </Link>
                  <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Micro SAAS
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                  <Link to="/business-intelligence" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Business Intelligence
                  </Link>
                  <Link to="/iot-edge-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    IoT & Edge Computing
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Advertising Services
                  </Link>
                </div>
              </div>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Team
              </Link>
              <Link to="/contact" className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-center">
                Contact Us
>>>>>>> origin/main
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;