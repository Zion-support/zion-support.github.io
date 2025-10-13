import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Brain, Shield, Globe, Star, Sparkles } from 'lucide-react';

const FuturisticNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = {
    'AI Services': [
      { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard-pro', icon: <Brain className="w-4 h-4" /> },
      { name: 'AI Content Generation', path: '/ai-content-generation-pro', icon: <Sparkles className="w-4 h-4" /> },
      { name: 'AI Cybersecurity Suite', path: '/ai-cybersecurity-suite-pro', icon: <Shield className="w-4 h-4" /> },
      { name: 'AI Business Intelligence', path: '/ai-business-intelligence-pro', icon: <Zap className="w-4 h-4" /> },
      { name: 'AI Code Assistant Pro', path: '/ai-code-assistant-pro', icon: <Brain className="w-4 h-4" /> },
      { name: 'AI Customer Support Bot', path: '/ai-customer-support-chatbot', icon: <Sparkles className="w-4 h-4" /> }
    ],
    'IT Services': [
      { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', icon: <Globe className="w-4 h-4" /> },
      { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', icon: <Shield className="w-4 h-4" /> },
      { name: 'Web Development', path: '/web-development', icon: <Zap className="w-4 h-4" /> },
      { name: 'Mobile Development', path: '/mobile-development', icon: <Globe className="w-4 h-4" /> },
      { name: 'Database Management', path: '/database-management', icon: <Brain className="w-4 h-4" /> },
      { name: 'Custom Software', path: '/custom-software', icon: <Zap className="w-4 h-4" /> }
    ],
    'Micro SAAS': [
      { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', icon: <Brain className="w-4 h-4" /> },
      { name: 'Zion Security Shield', path: '/zion-security-shield', icon: <Shield className="w-4 h-4" /> },
      { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', icon: <Globe className="w-4 h-4" /> },
      { name: 'Zion Content Studio', path: '/zion-content-studio', icon: <Sparkles className="w-4 h-4" /> },
      { name: 'Zion Data Sync', path: '/zion-data-sync', icon: <Zap className="w-4 h-4" /> },
      { name: 'Zion Project Master', path: '/zion-project-master', icon: <Star className="w-4 h-4" /> }
    ],
    '5G Solutions': [
      { name: '5G Data Analytics', path: '/5g-data-analytics', icon: <Brain className="w-4 h-4" /> },
      { name: '5G Edge Computing', path: '/5g-edge-computing', icon: <Zap className="w-4 h-4" /> },
      { name: '5G Implementation', path: '/5g-implementation', icon: <Globe className="w-4 h-4" /> },
      { name: '5G Smart Cities', path: '/5g-smart-city-solutions', icon: <Star className="w-4 h-4" /> },
      { name: '5G Private Networks', path: '/5g-private-networks', icon: <Shield className="w-4 h-4" /> }
    ]
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-strong backdrop-blur-xl border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold holographic neon-glow hover:scale-105 transition-transform duration-300"
          >
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'neon-cyan neon-glow bg-cyan-500/20' 
                  : 'text-gray-300 hover:text-cyan-400 hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'neon-purple neon-glow bg-purple-500/20' 
                  : 'text-gray-300 hover:text-purple-400 hover:bg-white/10'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center px-3 py-2 rounded-lg text-gray-300 hover:text-pink-400 hover:bg-white/10 transition-all duration-300"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 glass rounded-xl p-4 border border-white/20 shadow-2xl"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-sm font-semibold text-cyan-400 mb-2">{category}</h3>
                        <div className="space-y-1">
                          {items.slice(0, 3).map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="flex items-center space-x-2 px-2 py-1 rounded text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                            >
                              {item.icon}
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/pricing" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/pricing') 
                  ? 'neon-green neon-glow bg-green-500/20' 
                  : 'text-gray-300 hover:text-green-400 hover:bg-white/10'
              }`}
            >
              Pricing
            </Link>
            
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/contact') 
                  ? 'neon-orange neon-glow bg-orange-500/20' 
                  : 'text-gray-300 hover:text-orange-400 hover:bg-white/10'
              }`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="neon-button neon-cyan px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden glass rounded-xl mt-4 p-4 border border-white/20">
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-cyan-400 px-3 py-2">AI Services</div>
                {services['AI Services'].slice(0, 3).map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center space-x-2 px-5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <div className="text-sm font-semibold text-purple-400 px-3 py-2">Micro SAAS</div>
                {services['Micro SAAS'].slice(0, 3).map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center space-x-2 px-5 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.icon}
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>

              <Link 
                to="/pricing" 
                className="block px-3 py-2 rounded-lg text-gray-300 hover:text-green-400 hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-white/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default FuturisticNavigation;
