'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail, ExternalLink } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'navigation_phone',
      });
    }
  };

  const servicesMenu = [
    {
      title: 'AI Services',
      href: '/ai-services',
      description: 'Advanced AI solutions',
      icon: '🤖',
      featured: true
    },
    {
      title: 'Micro SAAS',
      href: '/micro-saas',
      description: '50+ Ready-to-use apps',
      icon: '💻',
      featured: true
    },
    {
      title: 'IT Services',
      href: '/it-services',
      description: 'Enterprise IT solutions',
      icon: '⚙️',
      featured: true
    },
    {
      title: 'AI Marketing',
      href: '/ai-marketing',
      description: 'AI-powered marketing',
      icon: '📧'
    },
    {
      title: 'AI Automation',
      href: '/ai-automation',
      description: 'Process automation',
      icon: '🔄'
    },
    {
      title: 'AI Healthcare',
      href: '/ai-healthcare',
      description: 'Medical AI solutions',
      icon: '🏥'
    },
    {
      title: 'AI Fintech',
      href: '/ai-fintech',
      description: 'Financial AI services',
      icon: '💰'
    },
    {
      title: 'Quantum Computing',
      href: '/quantum-computing',
      description: 'Next-gen computing',
      icon: '⚛️'
    }
  ];

  const solutionsMenu = [
    {
      title: 'Enterprise Solutions',
      href: '/enterprise',
      description: 'Large-scale implementations',
      icon: '🏢'
    },
    {
      title: 'Cloud Services',
      href: '/cloud-services',
      description: 'Cloud infrastructure',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity',
      href: '/cybersecurity',
      description: 'Security solutions',
      icon: '🔒'
    },
    {
      title: 'Data Analytics',
      href: '/business-intelligence',
      description: 'Business intelligence',
      icon: '📊'
    },
    {
      title: 'DevOps',
      href: '/devops',
      description: 'Development operations',
      icon: '⚙️'
    },
    {
      title: 'Blockchain',
      href: '/blockchain',
      description: 'Blockchain solutions',
      icon: '⛓️'
    }
  ];

  const companyMenu = [
    {
      title: 'About Us',
      href: '/about',
      description: 'Our story and mission',
      icon: '👥'
    },
    {
      title: 'Team',
      href: '/team',
      description: 'Meet our experts',
      icon: '👨‍💼'
    },
    {
      title: 'Careers',
      href: '/careers',
      description: 'Join our team',
      icon: '💼'
    },
    {
      title: 'Case Studies',
      href: '/case-studies',
      description: 'Success stories',
      icon: '📈'
    },
    {
      title: 'News',
      href: '/news',
      description: 'Latest updates',
      icon: '📰'
    }
  ];

  const resourcesMenu = [
    {
      title: 'Documentation',
      href: '/docs',
      description: 'API and guides',
      icon: '📚'
    },
    {
      title: 'Blog',
      href: '/blog',
      description: 'Insights and trends',
      icon: '✍️'
    },
    {
      title: 'Support',
      href: '/support',
      description: 'Get help',
      icon: '🎧'
    },
    {
      title: 'Contact',
      href: '/contact',
      description: 'Get in touch',
      icon: '📞'
    },
    {
      title: 'Status',
      href: '/status',
      description: 'System status',
      icon: '📊'
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center cyber-glow group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-xl cyber-text">Zion Tech Group</div>
              <div className="text-cyan-400 text-xs">AI & IT Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'services' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl cyber-glow">
                  <div className="p-6">
                    <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {servicesMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group ${
                            item.featured ? 'bg-cyan-400/10 border border-cyan-400/20' : ''
                          }`}
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-gray-400 text-sm">{item.description}</div>
                          </div>
                          {item.featured && (
                            <span className="ml-auto text-cyan-400 text-xs font-medium">Featured</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'solutions' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl cyber-glow">
                  <div className="p-6">
                    <h3 className="text-white font-semibold mb-4 text-lg">Solutions</h3>
                    <div className="space-y-2">
                      {solutionsMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-gray-400 text-sm">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'company' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl cyber-glow">
                  <div className="p-6">
                    <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
                    <div className="space-y-2">
                      {companyMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-gray-400 text-sm">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 py-2"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'resources' ? 'rotate-180' : ''
                }`} />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl cyber-glow">
                  <div className="p-6">
                    <h3 className="text-white font-semibold mb-4 text-lg">Resources</h3>
                    <div className="space-y-2">
                      {resourcesMenu.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-gray-400 text-sm">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-cyan-400/10"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(302) 464-0950</span>
            </a>
            <a
              href="/contact"
              className="cyber-button px-6 py-2 text-sm font-medium"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200 p-2"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg">Services</h3>
                <div className="space-y-2">
                  {servicesMenu.slice(0, 4).map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-gray-400 text-sm">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Solutions */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-lg">Solutions</h3>
                <div className="space-y-2">
                  {solutionsMenu.slice(0, 3).map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-gray-400 text-sm">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-700">
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    onClick={handlePhoneClick}
                    className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 p-3 rounded-lg hover:bg-cyan-400/10"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 p-3 rounded-lg hover:bg-cyan-400/10"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">kleber@ziontechgroup.com</span>
                  </a>
                  <a
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block w-full cyber-button text-center py-3 mt-4"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;