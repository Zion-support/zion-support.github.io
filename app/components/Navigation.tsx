import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Zap, Globe, Shield, Users, Award, BarChart3, Cloud, Sparkles, Mail, Smartphone, Monitor, Target, Calendar, TrendingUp, Mic, Phone, Code, Database, Package, Heart, Receipt, Cpu, Network, FileText, Clock, MapPin } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    {
//       label: 'Home',
//       href: '/',
      icon: <Brain className="w-4 h-4" />,
    },
    {
//       label: 'AI Services',
//       href: '/ai-services',
      icon: <Brain className="w-4 h-4" />,
//       dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { label: 'AI Content Generation', href: '/ai-content-generation' },
        { label: 'AI Customer Service', href: '/ai-customer-service' },
        { label: 'AI Data Analytics', href: '/ai-data-analytics' },
        { label: 'AI Email Automation', href: '/ai-email-automation' },
        { label: 'AI Fraud Detection', href: '/ai-fraud-detection' },
        { label: 'AI Healthcare', href: '/ai-healthcare' },
        { label: 'AI Marketing', href: '/ai-marketing' },
        { label: 'AI Cybersecurity', href: '/ai-cybersecurity' },
//       ],
    },
    {
//       label: 'Micro SAAS',
//       href: '/micro-saas',
      icon: <Zap className="w-4 h-4" />,
    },
    {
//       label: '5G Solutions',
//       href: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />,
    },
    {
//       label: 'IT Services',
//       href: '/services',
      icon: <Shield className="w-4 h-4" />,
    },
    {
//       label: 'About',
//       href: '/about',
      icon: <Users className="w-4 h-4" />,
    },
    {
//       label: 'Contact',
//       href: '/contact',
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                  
                  {/* Dropdown for AI Services */}
                  {item.dropdown && (
                    <div className="absolute left-0 mt-2 w-64 bg-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-1">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onSidebarToggle}
              className="text-gray-300 hover:text-cyan-400 p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;