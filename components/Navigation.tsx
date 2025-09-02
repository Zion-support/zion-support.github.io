import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Globe,
  Code,
  Database,
  Network,
  Settings,
  BarChart3,
  Target,
  MessageSquare,
  FileText,
  Smartphone,
  Calendar,
  Search,
  Building
} from 'lucide-react';

export default function Navigation() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Home', 
      href: '/' 
    },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { 
          name: 'AI Services', 
          href: '/ai-services', 
          icon: Brain, 
          description: 'Cutting-edge AI solutions' 
        },
        { 
          name: 'IT Services', 
          href: '/it-services', 
          icon: Network, 
          description: 'Comprehensive IT solutions' 
        },
        { 
          name: 'Micro SaaS', 
          href: '/micro-saas', 
          icon: Cloud, 
          description: 'Scalable SaaS solutions' 
        },
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud, 
          description: 'Scalable infrastructure' 
        },
        { 
          name: 'Cybersecurity', 
          href: '/services/cybersecurity', 
          icon: Shield, 
          description: 'Advanced security solutions' 
        },
        { 
          name: 'Data Analytics', 
          href: '/services/data-analytics', 
          icon: BarChart3, 
          description: 'Business intelligence' 
        }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { 
          name: 'Enterprise Solutions', 
          href: '/solutions/enterprise', 
          icon: Building, 
          description: 'Large-scale implementations' 
        },
        { 
          name: 'Startup Solutions', 
          href: '/solutions/startup', 
          icon: Zap, 
          description: 'Rapid growth solutions' 
        },
        { 
          name: 'Healthcare Solutions', 
          href: '/solutions/healthcare', 
          icon: Shield, 
          description: 'HIPAA-compliant solutions' 
        },
        { 
          name: 'Financial Solutions', 
          href: '/solutions/financial', 
          icon: Database, 
          description: 'Secure financial systems' 
        }
      ]
    },
    { 
      name: 'About', 
      href: '/about' 
    },
    { 
      name: 'Contact', 
      href: '/contact' 
    }
  ];

  const contactInfo = [
    { 
      icon: Phone, 
      text: '+1 302 464 0950', 
      href: 'tel:+13024640950' 
    },
    { 
      icon: Mail, 
      text: 'kleber@ziontechgroup.com', 
      href: 'mailto:kleber@ziontechgroup.com' 
    },
    { 
      icon: MapPin, 
      text: '364 E Main St STE 1008, Middletown DE 19709', 
      href: '#' 
    }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
                        <div className="p-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-purple-400/30 transition-all duration-200">
                                <dropdownItem.icon className="w-5 h-5 text-blue-600" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {dropdownItem.name}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2 ${
                      router.pathname === item.href ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {/* Contact Information */}
            <div className="pb-4 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <contact.icon className="w-4 h-4 text-blue-600" />
                    <span>{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={closeMobileMenu}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                              <dropdownItem.icon className="w-4 h-4 text-blue-600" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${
                        router.pathname === item.href
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-center rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}