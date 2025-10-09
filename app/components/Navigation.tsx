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
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'All Services', href: '/services', icon: Settings },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Micro SAAS', href: '/micro-saas', icon: BarChart },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Brain },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Brain },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Settings },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Settings },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Settings },
  ];

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cyan-400 neon-text">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Services</h3>
                      <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        All Services
                      </Link>
                      <Link href="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Services
                      </Link>
                      <Link href="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        IT Services
                      </Link>
                      <Link href="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Micro SAAS
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">AI Solutions</h3>
                      <Link href="/ai-marketing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Marketing
                      </Link>
                      <Link href="/ai-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Automation
                      </Link>
                      <Link href="/ai-healthcare" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Healthcare
                      </Link>
                      <Link href="/ai-fintech" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        AI Fintech
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Advanced Tech</h3>
                      <Link href="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Quantum Computing
                      </Link>
                      <Link href="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Autonomous Systems
                      </Link>
                      <Link href="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Blockchain & Web3
                      </Link>
                      <Link href="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Cybersecurity
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Business</h3>
                      <Link href="/business-intelligence" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Business Intelligence
                      </Link>
                      <Link href="/iot-edge-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        IoT & Edge Computing
                      </Link>
                      <Link href="/services-advertising" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Advertising Services
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Case Studies
            </Link>
            <Link href="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Enterprise
            </Link>
            <Link href="/team" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Team
            </Link>
            <Link href="/contact" className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link href="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    All Services
                  </Link>
                  <Link href="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Services
                  </Link>
                  <Link href="/ai-marketing" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Marketing
                  </Link>
                  <Link href="/ai-automation" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Automation
                  </Link>
                  <Link href="/ai-healthcare" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Healthcare
                  </Link>
                  <Link href="/ai-fintech" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    AI Fintech
                  </Link>
                  <Link href="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    IT Services
                  </Link>
                  <Link href="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Micro SAAS
                  </Link>
                  <Link href="/quantum-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Quantum Computing
                  </Link>
                  <Link href="/autonomous-systems" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Autonomous Systems
                  </Link>
                  <Link href="/blockchain-web3" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Blockchain & Web3
                  </Link>
                  <Link href="/cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Cybersecurity
                  </Link>
                  <Link href="/business-intelligence" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Business Intelligence
                  </Link>
                  <Link href="/iot-edge-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    IoT & Edge Computing
                  </Link>
                  <Link href="/services-advertising" className="block text-gray-400 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                    Advertising Services
                  </Link>
                </div>
              </div>
              
              <Link href="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link href="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Enterprise
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Team
              </Link>
              <Link href="/contact" className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors text-center" onClick={closeAllMenus}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
