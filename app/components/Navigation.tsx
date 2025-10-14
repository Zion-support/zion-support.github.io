import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { 
  Menu, 
  X, 
  Brain, 
  Shield, 
  Zap, 
  Globe,
  ChevronDown
} from "lucide-react";

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isAIServicesOpen, setIsAIServicesOpen] = useState(false);
  const [isITServicesOpen, setIsITServicesOpen] = useState(false);
  const [isMicroSaasOpen, setIsMicroSaasOpen] = useState(false);
  const [is5GServicesOpen, setIs5GServicesOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Globe },
    { name: 'About', href: '/about', icon: Brain },
    {
      name: 'Services',
      href: '/services',
      icon: Shield,
      submenu: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
        { name: 'IT Solutions', href: '/it-solutions', icon: Shield },
        { name: 'Micro SaaS', href: '/micro-saas-solutions', icon: Globe },
        { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Globe },
        { name: '5G Solutions', href: '/5g-solutions', icon: Zap }
      ]
    },
    { name: 'Contact', href: '/contact', icon: Globe }
  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={onSidebarToggle}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;