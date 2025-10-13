import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  Users, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  Sparkles,
  Search,
  User,
  Settings,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  TrendingUp,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    {
      name: 'Home',
      path: '/',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'About',
      path: '/about',
      icon: <Users className="w-4 h-4" />
    },
    {
      name: 'AI Services',
      path: '/ai-services',
      icon: <Brain className="w-4 h-4" />
    },
    {
      name: 'IT Services',
      path: '/services',
      icon: <Shield className="w-4 h-4" />
    },
    {
      name: 'Micro SAAS',
      path: '/micro-saas',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: '5G Solutions',
      path: '/5g-solutions',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: <Phone className="w-4 h-4" />
    }
  ], []);

  const quickLinks = [
    { label: 'Pricing', href: '/pricing', icon: <BarChart3 className="w-4 h-4" /> },
    { label: 'Demo', href: '/demo', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> },
    { label: 'Consultation', href: '/consultation', icon: <Users className="w-4 h-4" /> }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const Sidebar = () => (
    <div className={`fixed inset-0 z-50 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-sm border-l border-white/10">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="space-y-4">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'hover:bg-white/10 text-gray-300 hover:text-cyan-400'
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span className="text-gray-300 text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-white group">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 transition-colors duration-300 relative group ${
                    isActive(item.path) 
                      ? 'text-cyan-400' 
                      : 'text-gray-300 hover:text-cyan-400'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Quick Links & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="hidden lg:flex space-x-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105 flex"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-white/10">
              <div className="space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 transition-colors duration-300 py-2 ${
                      isActive(item.path) 
                        ? 'text-cyan-400' 
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-white/10">
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar />
    </>
  );
};

export default Navigation;