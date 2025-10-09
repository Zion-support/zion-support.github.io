import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, Briefcase } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = {
    'Services': [
      { name: 'AI Services', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Code },
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { name: 'All Services', href: '/services', icon: Settings }
    ],
    'Solutions': [
      { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
      { name: 'AI Automation', href: '/ai-automation', icon: Zap },
      { name: 'AI Healthcare', href: '/ai-healthcare', icon: Users },
      { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
      { name: 'Micro SAAS', href: '/micro-saas', icon: Cpu }
    ],
    'Company': [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'Contact', href: '/contact', icon: Phone }
    ]
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="relative group">
                <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                  <span>{category}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-lg rounded-xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors group/item"
                      >
                        <item.icon className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300" />
                        <span className="text-white group-hover/item:text-cyan-300">{item.name}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover/item:text-cyan-400 ml-auto opacity-0 group-hover/item:opacity-100 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            
            <Link
              to="/pricing"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Pricing
            </Link>
            
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors py-2"
                  >
                    <span className="font-semibold">{category}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {servicesOpen && (
                    <div className="ml-4 space-y-2">
                      {items.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/pricing"
                className="block text-white hover:text-cyan-400 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              
              <a
                href="tel:+13024640950"
                className="block bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;