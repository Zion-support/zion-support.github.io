import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Database,
  Network,
  Zap,
  Target,
  DollarSign,
  BookOpen,
  Calendar,
  FileText,
  Award,
  Globe,
  Search,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { 
      name: 'Services', 
      href: '/services', 
      icon: Briefcase,
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Information Technology services' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Micro Software as a Service' },
        { name: 'Cybersecurity', href: '/services/ai-autonomous-cybersecurity-platform', icon: Shield, description: 'AI-powered security solutions' },
        { name: 'Customer Experience', href: '/services/ai-customer-experience-platform', icon: Users, description: 'AI-driven customer experience' },
        { name: 'Healthcare AI', href: '/services/ai-healthcare-diagnostics', icon: Brain, description: 'Medical AI diagnostics' }
      ]
    },
    { name: 'About', href: '/about', icon: Users },
    { 
      name: 'Resources', 
      href: '#', 
      icon: BookOpen,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and trends' },
        { name: 'Case Studies', href: '/case-studies', icon: Target, description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research and insights' },
        { name: 'Webinars', href: '/webinars', icon: Calendar, description: 'Expert-led sessions' },
        { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign, description: 'Comprehensive pricing info' }
      ]
    },
    { name: 'Team', href: '/team', icon: Award },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const serviceCategories = [
    { 
      name: 'Micro SaaS', 
      href: '/services/micro-saas',
      description: 'Innovative focused software solutions',
      popular: ['AI Content Generator', 'Social Media Scheduler', 'Invoice Management', 'Time Tracking']
    },
    { 
      name: 'IT Services', 
      href: '/services/it-services',
      description: 'Enterprise infrastructure & security',
      popular: ['Cloud Migration', 'Edge Computing', 'Zero Trust Security', '5G Networks']
    },
    { 
      name: 'AI Services', 
      href: '/services/ai-services',
      description: 'Cutting-edge AI & machine learning',
      popular: ['Quantum ML', 'Autonomous Systems', 'AI Cybersecurity', 'Drug Discovery']
    },
  ];

  return (
    <motion.header 
      className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top bar with contact info */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-blue-300 transition-colors">+1 302 464 0950</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300 transition-colors">kleber@ziontechgroup.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors cursor-pointer"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700 transition-colors group"
                          >
                            <dropdownItem.icon className="w-5 h-5 text-blue-400 mt-0.5 group-hover:text-blue-300" />
                            <div>
                              <div className="text-white font-medium group-hover:text-blue-300">
                                {dropdownItem.name}
                              </div>
                              <div className="text-gray-400 text-sm">
                                {dropdownItem.description}
                              </div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white ml-auto mt-0.5" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-blue-900">Zion Tech Group</div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.name} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                          <Link
                            href={category.href}
                            className="block group/item"
                          >
                            <div className="font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                              {category.name}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">
                              {category.description}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {category.popular.map((service) => (
                                <span key={service} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href="/services"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                      >
                        View All Services
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="lg:hidden border-t border-gray-200 py-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-gray-700 font-medium mb-3">Services</div>
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="mb-4">
                      <Link
                        href={category.href}
                        className="block py-2 text-gray-900 hover:text-blue-600 transition-colors font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                      <div className="text-sm text-gray-600 mb-2">
                        {category.description}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {category.popular.slice(0, 3).map((service) => (
                          <span key={service} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;