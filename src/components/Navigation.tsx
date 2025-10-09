'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ArrowRight } from 'lucide-react';

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

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const handlePhoneClick = useCallback(() => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone'
      });
    }
  }, []);

  const navigationItems = [
    {
      title: 'Services',
      href: '/services',
      dropdown: [
        { title: 'AI Services', href: '/ai-services', description: 'Advanced AI solutions' },
        { title: 'IT Services', href: '/it-services', description: 'Comprehensive IT solutions' },
        { title: 'Micro SAAS', href: '/micro-saas', description: 'Affordable business tools' },
        { title: 'Cloud Services', href: '/cloud-services', description: 'Cloud migration & setup' },
        { title: 'Cybersecurity', href: '/cybersecurity', description: 'Security solutions' },
        { title: 'DevOps', href: '/devops', description: 'Development & deployment' }
      ]
    },
    {
      title: 'AI Solutions',
      href: '/ai-solutions',
      dropdown: [
        { title: 'Machine Learning', href: '/machine-learning', description: 'Custom ML models' },
        { title: 'Natural Language Processing', href: '/nlp', description: 'Text analysis & understanding' },
        { title: 'Computer Vision', href: '/computer-vision', description: 'Image & video analysis' },
        { title: 'AI Automation', href: '/ai-automation', description: 'Intelligent automation' },
        { title: 'Quantum AI', href: '/quantum-ai', description: 'Next-gen computing' },
        { title: 'Autonomous Systems', href: '/autonomous-systems', description: 'Self-managing systems' }
      ]
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      dropdown: [
        { title: 'AI Project Manager', href: '/ai-project-manager', description: 'Intelligent project planning' },
        { title: 'AI Social Media Manager', href: '/ai-social-media-manager', description: 'Automated social media' },
        { title: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', description: 'Data insights & analytics' },
        { title: 'AI Email Marketing', href: '/ai-email-marketing', description: 'Automated email campaigns' },
        { title: 'AI Customer Support Bot', href: '/ai-customer-support-bot', description: '24/7 customer support' },
        { title: 'AI Workflow Automation', href: '/ai-workflow-automation', description: 'Process automation' }
      ]
    },
    {
      title: 'Company',
      href: '/company',
      dropdown: [
        { title: 'About Us', href: '/about', description: 'Our story & mission' },
        { title: 'Team', href: '/team', description: 'Meet our experts' },
        { title: 'Careers', href: '/careers', description: 'Join our team' },
        { title: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { title: 'Blog', href: '/blog', description: 'Latest insights' },
        { title: 'News', href: '/news', description: 'Company updates' }
      ]
    },
    {
      title: 'Resources',
      href: '/resources',
      dropdown: [
        { title: 'Documentation', href: '/docs', description: 'Technical documentation' },
        { title: 'API Reference', href: '/api-docs', description: 'API documentation' },
        { title: 'Tutorials', href: '/tutorials', description: 'Learning resources' },
        { title: 'Support', href: '/support', description: 'Get help & support' },
        { title: 'Status', href: '/status', description: 'System status' },
        { title: 'Pricing', href: '/pricing', description: 'Service pricing' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.title && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {dropdownItem.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {dropdownItem.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-cyan-400 transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => handleDropdownToggle(item.title)}
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.title ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {activeDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a
                  href="/contact"
                  className="block w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:scale-105 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
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