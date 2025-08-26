import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Phone, Mail, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/',
      hasDropdown: false
    },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Services', path: '/services/ai', description: 'Advanced AI solutions and platforms' },
        { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure and automation' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Enterprise IT infrastructure' },
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation services' },
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology consulting' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Space Tech', path: '/space-tech', description: 'Space technology innovations' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' },
        { name: 'Financial Solutions', path: '/financial-solutions', description: 'Financial technology services' },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Manufacturing technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Retail technology solutions' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology services' }
      ]
    },
    { 
      name: 'Talent', 
      path: '/talent',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
        { name: 'Talent Directory', path: '/talent', description: 'Comprehensive talent database' },
        { name: 'AI Matcher', path: '/match', description: 'AI-powered talent matching' },
        { name: 'Hire Now', path: '/contact', description: 'Get in touch to hire' }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      hasDropdown: false
    },
    { 
      name: 'Resources', 
      path: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'White Papers', path: '/white-papers', description: 'Research and insights' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'Training', path: '/training', description: 'Professional training programs' },
        { name: 'Events', path: '/events', description: 'Industry events and conferences' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Press', path: '/press', description: 'Press releases and media' }
      ]
    },
    { 
      name: 'Support', 
      path: '/support',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Help Center', path: '/help', description: 'Self-service help and guides' },
        { name: 'Contact Support', path: '/support', description: 'Get help from our team' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      hasDropdown: false
    }
  ];

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <UserMenu />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleDropdownToggle(item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                          activeDropdown === item.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                        }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                              onClick={closeDropdowns}
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-sm text-gray-500">{subItem.description}</div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`py-2 px-3 rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-screen overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 px-4 text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          • {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            {/* Mobile Action Buttons */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}