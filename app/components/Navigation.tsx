'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, MapPin, Brain, Cpu, Zap, Shield, Globe, ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: null
    },
    {
      label: 'Services',
      href: '/services',
      icon: null,
      dropdown: [
        {
          label: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'Advanced AI solutions'
        },
        {
          label: 'IT Services',
          href: '/it-services',
          icon: Cpu,
          description: 'Comprehensive IT solutions'
        },
        {
          label: 'Micro SAAS',
          href: '/micro-saas',
          icon: Zap,
          description: 'AI-powered tools'
        },
        {
          label: 'Security',
          href: '/security',
          icon: Shield,
          description: 'Cybersecurity solutions'
        }
      ]
    },
    {
      label: 'AI Solutions',
      href: '/ai-solutions',
      icon: Brain,
      dropdown: [
        {
          label: 'AI Project Manager',
          href: '/ai-project-manager',
          icon: null,
          description: 'Intelligent project planning'
        },
        {
          label: 'AI Analytics',
          href: '/ai-analytics',
          icon: null,
          description: 'Data insights & analytics'
        },
        {
          label: 'AI Automation',
          href: '/ai-automation',
          icon: null,
          description: 'Process automation'
        },
        {
          label: 'AI Customer Support',
          href: '/ai-customer-support',
          icon: null,
          description: '24/7 AI support'
        },
        {
          label: 'AI Email Marketing',
          href: '/ai-email-marketing',
          icon: null,
          description: 'Smart email campaigns'
        },
        {
          label: 'AI Social Media',
          href: '/ai-social-media-manager',
          icon: null,
          description: 'Social media automation'
        }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: null
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: null
    }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-purple-900 border-b border-cyan-400/20">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-0">
              <a 
                href="tel:+13024640950" 
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Middletown, DE 19709
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/30' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a 
                href="/" 
                className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="neon-text">Zion Tech Group</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-xl z-50">
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-cyan-400 mb-3">{item.label}</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <a
                                  key={dropdownIndex}
                                  href={dropdownItem.href}
                                  onClick={closeDropdown}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-400/10 transition-colors group"
                                >
                                  {dropdownItem.icon && (
                                    <dropdownItem.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                                  )}
                                  <div>
                                    <div className="text-white group-hover:text-cyan-300 font-medium">
                                      {dropdownItem.label}
                                    </div>
                                    <div className="text-xs text-gray-400 group-hover:text-gray-300">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors py-2"
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="/contact"
                className="cyber-button px-6 py-2 text-sm font-medium"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/30">
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-4">
                  {navigationItems.map((item, index) => (
                    <div key={index}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.label)}
                            className="flex items-center justify-between w-full text-left text-white hover:text-cyan-400 transition-colors py-2"
                          >
                            <span className="flex items-center space-x-2">
                              {item.icon && <item.icon className="w-4 h-4" />}
                              <span>{item.label}</span>
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {activeDropdown === item.label && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                <a
                                  key={dropdownIndex}
                                  href={dropdownItem.href}
                                  onClick={() => {
                                    closeDropdown();
                                    setIsOpen(false);
                                  }}
                                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors py-2"
                                >
                                  {dropdownItem.icon && (
                                    <dropdownItem.icon className="w-4 h-4" />
                                  )}
                                  <div>
                                    <div className="font-medium">{dropdownItem.label}</div>
                                    <div className="text-xs text-gray-400">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors py-2"
                        >
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.label}</span>
                        </a>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-cyan-400/20">
                    <a
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="cyber-button w-full text-center py-3"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;