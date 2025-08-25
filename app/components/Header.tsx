'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Database, 
  Cpu, 
  Network, 
  Eye, 
  Leaf, 
  Heart, 
  Calendar, 
  ShoppingCart, 
  Building, 
  Factory, 
  Store, 
  Car, 
  Plane, 
  Ship, 
  Home, 
  Hospital, 
  GraduationCap, 
  FileText, 
  BarChart3, 
  Users, 
  CreditCard, 
  MessageSquare, 
  Camera, 
  Video, 
  Music, 
  BookOpen, 
  Target, 
  TrendingUp, 
  PieChart, 
  Activity, 
  Globe, 
  Bot, 
  Settings, 
  Truck 
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      name: "Micro SAAS Services",
      path: "/micro-saas",
      icon: <Zap className="w-4 h-4" />,
      description: "Affordable software solutions for small businesses"
    },
    {
      name: "AI & Machine Learning",
      path: "/ai-services",
      icon: <Brain className="w-4 h-4" />,
      description: "Cutting-edge AI solutions for business automation"
    },
    {
      name: "Cloud & DevOps",
      path: "/cloud-devops",
      icon: <Cloud className="w-4 h-4" />,
      description: "Scalable cloud infrastructure and deployment"
    },
    {
      name: "Cybersecurity",
      path: "/cybersecurity",
      icon: <Shield className="w-4 h-4" />,
      description: "Advanced security and compliance solutions"
    },
    {
      name: "Blockchain Solutions",
      path: "/blockchain",
      icon: <Database className="w-4 h-4" />,
      description: "Distributed ledger and smart contract platforms"
    },
    {
      name: "IoT & Edge Computing",
      path: "/iot-edge",
      icon: <Network className="w-4 h-4" />,
      description: "Connected devices and real-time processing"
    },
    {
      name: "Quantum Computing",
      path: "/quantum-computing",
      icon: <Cpu className="w-4 h-4" />,
      description: "Next-generation quantum processors"
    },
    {
      name: "Event Management",
      path: "/event-tech",
      icon: <Calendar className="w-4 h-4" />,
      description: "Smart event planning and management"
    },
    {
      name: "Supply Chain & Inventory",
      path: "/supply-chain",
      icon: <ShoppingCart className="w-4 h-4" />,
      description: "Intelligent logistics and inventory optimization"
    }
  ];

  const solutions = [
    {
      name: "Enterprise Solutions",
      path: "/enterprise",
      icon: <Building className="w-4 h-4" />,
      description: "Large-scale business transformation"
    },
    {
      name: "Startup Solutions",
      path: "/startup",
      icon: <Zap className="w-4 h-4" />,
      description: "Rapid growth and scaling solutions"
    },
    {
      name: "Manufacturing Tech",
      path: "/manufacturing",
      icon: <Factory className="w-4 h-4" />,
      description: "Industry 4.0 and smart manufacturing"
    },
    {
      name: "Retail Technology",
      path: "/retail-tech",
      icon: <Store className="w-4 h-4" />,
      description: "Omnichannel retail and e-commerce"
    },
    {
      name: "Healthcare Technology",
      path: "/healthcare",
      icon: <Hospital className="w-4 h-4" />,
      description: "Digital health and medical solutions"
    },
    {
      name: "Education Technology",
      path: "/education",
      icon: <GraduationCap className="w-4 h-4" />,
      description: "EdTech platforms and learning systems"
    }
  ];

  const resources = [
    {
      name: "Case Studies",
      path: "/case-studies",
      icon: <FileText className="w-4 h-4" />,
      description: "Success stories and implementations"
    },
    {
      name: "White Papers",
      path: "/white-papers",
      icon: <BookOpen className="w-4 h-4" />,
      description: "In-depth research and insights"
    },
    {
      name: "Webinars",
      path: "/webinars",
      icon: <Video className="w-4 h-4" />,
      description: "Educational sessions and demos"
    },
    {
      name: "News & Updates",
      path: "/news",
      icon: <Activity className="w-4 h-4" />,
      description: "Latest industry news and trends"
    },
    {
      name: "Documentation",
      path: "/docs",
      icon: <FileText className="w-4 h-4" />,
      description: "Technical guides and API docs"
    }
  ];

  const company = [
    {
      name: "About Us",
      path: "/about",
      icon: <Users className="w-4 h-4" />,
      description: "Our story and mission"
    },
    {
      name: "Team",
      path: "/team",
      icon: <Users className="w-4 h-4" />,
      description: "Meet our experts"
    },
    {
      name: "Careers",
      path: "/careers",
      icon: <Target className="w-4 h-4" />,
      description: "Join our team"
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <MessageSquare className="w-4 h-4" />,
      description: "Get in touch"
    }
  ];

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllDropdowns}>
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-sm text-gray-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.path}
                        href={solution.path}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          {solution.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{solution.name}</div>
                          <div className="text-sm text-gray-400">{solution.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {resources.map((resource) => (
                      <Link
                        key={resource.path}
                        href={resource.path}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          {resource.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{resource.name}</div>
                          <div className="text-sm text-gray-400">{resource.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-xl p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {company.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                        onClick={closeAllDropdowns}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-white font-medium">{item.name}</div>
                          <div className="text-sm text-gray-400">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pricing */}
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
              Pricing
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                Get Started
              </Button>
            </Link>
            <Link href="/demo">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Services */}
              <div>
                <h3 className="text-white font-semibold mb-3">Services</h3>
                <div className="space-y-2">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.path}
                      href={service.path}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                      onClick={closeAllDropdowns}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="text-gray-300">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions */}
              <div>
                <h3 className="text-white font-semibold mb-3">Solutions</h3>
                <div className="space-y-2">
                  {solutions.slice(0, 4).map((solution) => (
                    <Link
                      key={solution.path}
                      href={solution.path}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                      onClick={closeAllDropdowns}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        {solution.icon}
                      </div>
                      <span className="text-gray-300">{solution.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 space-y-3">
                <Link href="/contact" className="block w-full">
                  <Button variant="outline" className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                    Get Started
                  </Button>
                </Link>
                <Link href="/demo" className="block w-full">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeAllDropdowns}
        />
      )}
    </header>
  );
};