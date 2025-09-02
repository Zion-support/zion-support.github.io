import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Search, Phone, Mail, MapPin, ChevronDown, Brain, Code, Network, Zap, Shield, Globe, Users, Rocket, ShoppingCart, BarChart3, Info, Home } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [router.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    { 
      name: 'Home', 
      href: '/', 
      icon: Home, 
      isMain: true 
    },
    { 
      name: 'AI Services', 
      href: '/services/ai-services', 
      icon: Brain, 
      color: 'from-purple-500 to-pink-500',
      dropdown: [
        { name: 'Custom AI Models', href: '/services/ai-services/custom-models', description: 'Tailored AI solutions for your business' },
        { name: 'Computer Vision', href: '/services/ai-services/computer-vision', description: 'Image recognition and analysis' },
        { name: 'Natural Language Processing', href: '/services/ai-services/nlp', description: 'Text analysis and understanding' },
        { name: 'Predictive Analytics', href: '/services/ai-services/predictive-analytics', description: 'AI-powered forecasting' },
        { name: 'AI Chatbots', href: '/services/ai-services/chatbots', description: 'Intelligent customer support' },
        { name: 'Machine Learning', href: '/services/ai-services/machine-learning', description: 'Advanced ML solutions' }
      ]
    },
    { 
      name: 'Micro SaaS', 
      href: '/services/micro-saas', 
      icon: Code, 
      color: 'from-blue-500 to-cyan-500',
      dropdown: [
        { name: 'AI Content Generator', href: '/services/micro-saas/ai-content-generator', description: 'Automated content creation' },
        { name: 'Social Media Scheduler', href: '/services/micro-saas/social-media-scheduler', description: 'Multi-platform scheduling' },
        { name: 'Email Marketing', href: '/services/micro-saas/email-marketing', description: 'Advanced email automation' },
        { name: 'Project Management', href: '/services/micro-saas/project-management', description: 'Smart project tracking' },
        { name: 'CRM System', href: '/services/micro-saas/crm', description: 'Customer relationship management' },
        { name: 'Time Tracking', href: '/services/micro-saas/time-tracking', description: 'Productivity monitoring' }
      ]
    },
    { 
      name: 'IT Services', 
      href: '/services/it-services', 
      icon: Network, 
      color: 'from-green-500 to-emerald-500',
      dropdown: [
        { name: 'Cloud Migration', href: '/services/it-services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Cybersecurity', href: '/services/it-services/cybersecurity', description: 'Advanced threat protection' },
        { name: 'DevOps', href: '/services/it-services/devops', description: 'Automated deployment' },
        { name: 'Infrastructure', href: '/services/it-services/infrastructure', description: 'IT infrastructure management' },
        { name: 'Database Optimization', href: '/services/it-services/database', description: 'Performance optimization' },
        { name: 'Network Security', href: '/services/it-services/network-security', description: 'Network protection' }
      ]
    },
    { 
      name: 'Services', 
      href: '/services', 
      icon: BarChart3, 
      color: 'from-indigo-500 to-purple-500',
      isMain: true 
    },
    { 
      name: 'About', 
      href: '/about', 
      icon: Info, 
      isMain: true 
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: Phone, 
      isMain: true 
    }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <Link href="/pricing" className="hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link href="/support" className="hover:text-blue-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ZION
                </div>
                <div className="text-xs text-gray-600 font-medium">TECH GROUP</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        router.pathname === item.href
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        router.pathname === item.href
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                {item.icon && <item.icon className="w-4 h-4 text-blue-600" />}
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                  {dropdownItem.name}
                                </div>
                                <div className="text-sm text-gray-500 mt-1">
                                  {dropdownItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Search and Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </form>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                            router.pathname === item.href
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon && <item.icon className="w-4 h-4" />}
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="ml-6 mt-2 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          router.pathname === item.href
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon && <item.icon className="w-4 h-4" />}
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center block hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;