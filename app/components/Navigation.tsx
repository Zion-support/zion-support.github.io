'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  ArrowRight, 
  Brain, 
  Cloud, 
  Zap, 
  Sparkles, 
  Settings, 
  BarChart, 
  Phone, 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  DollarSign, 
  MessageSquare, 
  Shield, 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Target, 
  TrendingUp, 
  Award, 
  Clock, 
  CheckCircle, 
  Play, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Star, 
  Quote, 
  User, 
  Building, 
  GraduationCap, 
  Heart, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  Eye, 
  MousePointer, 
  Volume2, 
  Accessibility, 
  Wrench, 
  Cog, 
  Layers, 
  Network, 
  Server, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Code, 
  Palette, 
  Calendar, 
  FileText as FileTextIcon, 
  MapPin as Location, 
  Truck, 
  ChefHat, 
  Rocket, 
  Sprout, 
  Scale
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
        { name: 'AI Customer Support', href: '/ai-customer-support' },
        { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard' },
        { name: 'AI Content Generation', href: '/ai-content-generation' },
        { name: 'AI Project Manager', href: '/ai-project-manager' },
        { name: 'AI Marketing Automation', href: '/ai-marketing' },
        { name: 'AI Fintech Platform', href: '/ai-fintech' },
        { name: 'AI Computer Vision', href: '/ai-computer-vision' },
        { name: 'AI Machine Learning', href: '/ai-ml-platform' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        { name: 'Quantum Computing Infrastructure', href: '/quantum-computing' },
        { name: '5G Network Implementation', href: '/5g-implementation' },
        { name: 'Cloud Migration', href: '/cloud-migration' },
        { name: 'DevOps & CI/CD', href: '/devops' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Network Infrastructure', href: '/network-infrastructure' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Sparkles,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        { name: 'Blockchain Solutions', href: '/blockchain' },
        { name: 'IoT & Edge Computing', href: '/iot-edge' },
        { name: 'Robotics & Automation', href: '/robotics' },
        { name: 'Quantum AI', href: '/quantum-ai' },
        { name: 'Metaverse Development', href: '/metaverse' },
        { name: 'Web3 Integration', href: '/web3' }
      ]
    }
  ];

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${item.color} hover:${item.bgColor}`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 py-2 z-50">
                    <div className="grid grid-cols-1 gap-1">
                      {item.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="text-sm font-medium">{service.name}</span>
                          <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Additional Links */}
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-colors">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left ${item.color} hover:${item.bgColor}`}
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.title}</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {activeDropdown === item.title && (
                    <div className="ml-4 space-y-1">
                      {item.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="border-t border-slate-700 pt-2">
                <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg">
                  About
                </Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg">
                  Contact
                </Link>
                <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg">
                  Pricing
                </Link>
                <button className="w-full mt-2 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;