import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, Brain, Cloud, Shield, Code, Users, FileText, CreditCard, Calendar, Share2, MessageSquare, BarChart, Camera, Target, Zap, Heart, Globe, Briefcase, BookOpen } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
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
      { name: 'All Services', href: '/services', icon: Briefcase },
      { name: 'AI Services', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Code },
      { name: 'Micro SAAS', href: '/micro-saas', icon: Code },
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield }
    ],
    'Micro SAAS': [
      { name: 'AI Content Generator', href: '/ai-content-generator', icon: FileText },
      { name: 'AI CRM Automation', href: '/ai-crm-automation', icon: Users },
      { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: CreditCard },
      { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar },
      { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Share2 },
      { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail }
    ],
    'AI Solutions': [
      { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageSquare },
      { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart },
      { name: 'AI Image Recognition', href: '/ai-image-recognition', icon: Camera },
      { name: 'AI Marketing', href: '/ai-marketing', icon: Target },
      { name: 'AI Automation', href: '/ai-automation', icon: Zap },
      { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart }
    ],
    'Company': [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Briefcase },
      { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Contact', href: '/contact', icon: MessageSquare }
    ]
  };

  const isActive = (path: string) => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === path;
    }
    return false;
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
          <div className="hidden lg:flex space-x-8">
            {Object.entries(navigation).map(([category, items]) => (
              <div
                key={category}
                className="relative group"
                onMouseEnter={() => setServicesOpen(category === 'Services' || category === 'Micro SAAS' || category === 'AI Solutions')}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2">
                  <span>{category}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {servicesOpen && (category === 'Services' || category === 'Micro SAAS' || category === 'AI Solutions') && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 py-2 z-50">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 text-sm hover:bg-slate-700/50 transition-colors ${
                          isActive(item.href) ? 'text-cyan-400 bg-slate-700/30' : 'text-gray-300'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4">
            <div className="space-y-4">
              {Object.entries(navigation).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-cyan-400 font-semibold mb-2 px-4">{category}</h3>
                  <div className="space-y-1">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className={`flex items-center space-x-3 px-4 py-2 text-sm hover:bg-slate-700/50 transition-colors ${
                          isActive(item.href) ? 'text-cyan-400 bg-slate-700/30' : 'text-gray-300'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="border-t border-white/10 pt-4 px-4">
                <div className="space-y-2">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="block mt-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;