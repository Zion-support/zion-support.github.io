'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Zap, Brain, Code, BarChart, Users, Globe, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const services = [
    {
      title: 'AI Services',
      icon: Brain,
      items: [
        { name: 'AI Marketing', href: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', href: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', href: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', href: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', href: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', href: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', href: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Customer Support', href: '/ai-customer-support', description: '24/7 AI support' },
        { name: 'AI Sales Automation', href: '/ai-sales-automation', description: 'Automated sales processes' }
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      items: [
        { name: 'IT Infrastructure', href: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cloud Services', href: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps', href: '/devops', description: 'Development operations' },
        { name: 'Database Services', href: '/database', description: 'Database management' },
        { name: 'Networking', href: '/networking', description: 'Network solutions' },
        { name: 'API Development', href: '/api', description: 'Custom API development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      items: [
        { name: 'All Micro SAAS', href: '/micro-saas', description: '50+ ready-to-use apps' },
        { name: 'Developer Tools', href: '/micro-saas#developer-tools', description: 'AI-powered dev tools' },
        { name: 'Marketing Tools', href: '/micro-saas#marketing', description: 'Marketing automation' },
        { name: 'Business Apps', href: '/business-apps', description: 'Business applications' },
        { name: 'Productivity Tools', href: '/productivity', description: 'Productivity solutions' }
      ]
    },
    {
      title: 'Specialized',
      icon: BarChart,
      items: [
        { name: 'Quantum Computing', href: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', href: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', href: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', href: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', href: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', href: '/robotics', description: 'Robotic solutions' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-cyan-400 transition-colors font-medium">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-2 gap-6 p-6">
                  {services.map((service, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-3">
                        <service.icon className="w-5 h-5 text-cyan-500 mr-2" />
                        <h3 className="font-semibold text-gray-900">{service.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {service.items.slice(0, 4).map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              href={item.href}
                              className="block text-sm text-gray-600 hover:text-cyan-600 hover:bg-gray-50 p-2 rounded transition-colors"
                            >
                              <div className="font-medium">{item.name}</div>
                              <div className="text-xs text-gray-500">{item.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 p-4">
                  <Link
                    href="/services"
                    className="block text-center text-cyan-600 hover:text-cyan-700 font-medium"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Contact
            </Link>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-600">
              <a href="tel:+13024640950" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">+1 302 464 0950</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeMenu}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <div className="px-3 py-2 text-cyan-400 font-semibold mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service, index) => (
                    <div key={index}>
                      <div className="flex items-center text-gray-300 font-medium mb-1">
                        <service.icon className="w-4 h-4 mr-2" />
                        {service.title}
                      </div>
                      <div className="ml-6 space-y-1">
                        {service.items.slice(0, 3).map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.href}
                            className="block text-sm text-gray-400 hover:text-white transition-colors"
                            onClick={closeMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link 
                href="/blog" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeMenu}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <a href="tel:+13024640950" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
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

