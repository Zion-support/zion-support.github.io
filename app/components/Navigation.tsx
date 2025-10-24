'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Cloud, 
  BarChart, 
  Zap, 
  Globe, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  MessageCircle, 
  Mic, 
  Eye,
  Brain
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)}, []);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false)}, []);

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Chatbots', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Conversational AI' },
    { name: 'Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image recognition' },
    { name: 'Predictive Analytics', href: '/ai-predictive-analytics', icon: TrendingUp, description: 'Forecasting' },
    { name: 'Voice AI', href: '/ai-voice-assistant', icon: Mic, description: 'Voice technology' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-architecture', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Lock, description: 'Security solutions' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'Development operations' },
    { name: 'Data Analytics', href: '/data-analytics', icon: BarChart, description: 'Data insights' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="containermx-autopx-4">
        <div className="flexitems-centerjustify-betweenh-16">
          {/* Logo */}
          <Link href="/" className="flexitems-centerspace-x-2">
            <div className="w-8h-8bg-gradient-to-rfrom-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5h-5text-white" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hiddenlg:flexitems-centerspace-x-8">
            <Link 
              href="/" 
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors`}>
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relativegroup">
              <button className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors`}>
                <span>AI Services</span>
                <ChevronDown className="w-4h-4" />
              </button>
              <div className="absolutetop-fullleft-0mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-lgfont-semiboldmb-4">AI Services</h3>
                  <div className="gridgrid-cols-1gap-3">
                    {aiServices.map(service => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flexitems-centerspace-x-3p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}>
                        <service.icon className="w-5h-5text-blue-600" />
                        <div>
                          <div className="font-mediumtext-gray-900">{service.name}</div>
                          <div className="text-smtext-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* IT Services Dropdown */}
            <div className="relativegroup">
              <button className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors`}>
                <span>IT Services</span>
                <ChevronDown className="w-4h-4" />
              </button>
              <div className="absolutetop-fullleft-0mt-2 w-80 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-6">
                  <h3 className="text-lgfont-semiboldmb-4">IT Services</h3>
                  <div className="gridgrid-cols-1gap-3">
                    {itServices.map(service => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="flexitems-centerspace-x-3p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}>
                        <service.icon className="w-5h-5text-blue-600" />
                        <div>
                          <div className="font-mediumtext-gray-900">{service.name}</div>
                          <div className="text-smtext-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link 
              href="/about" 
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors`}>
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'} transition-colors`}>
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hiddenlg:flexitems-centerspace-x-4">
            <Link
              href="/contact"
              className="bg-blue-600text-whitepx-6py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hiddenp-2"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6h-6" /> : <Menu className="w-6h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hiddenbg-whiteborder-tborder-gray-200">
            <div className="px-4py-6space-y-4">
              <Link
                href="/"
                className="blocktext-gray-700hover:text-blue-600transition-colors"
                onClick={closeAllMenus}>
                Home
              </Link>
              <Link
                href="/about"
                className="blocktext-gray-700hover:text-blue-600transition-colors"
                onClick={closeAllMenus}>
                About
              </Link>
              <Link
                href="/contact"
                className="blocktext-gray-700hover:text-blue-600transition-colors"
                onClick={closeAllMenus}>
                Contact
              </Link>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="blockbg-blue-600text-whitepx-6 py-2 rounded-lg text-center hover:bg-blue-700 transition-colors"
                  onClick={closeAllMenus}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )};

export default Navigation;
