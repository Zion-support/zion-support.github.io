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
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
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
                  </div>
                </div>
              )}
            </div>

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
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;