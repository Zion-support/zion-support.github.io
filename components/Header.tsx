import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Search,
  User,
  ShoppingCart,
  Heart,
  Bell,
  Settings,
  LogOut,
  Home,
  Building2,
  Target,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  Info,
  Zap,
  Cloud,
  Shield,
  BarChart3,
  CpuIcon,
  Database,
  Globe,
  Lock,
  Eye,
  Brain,
  Code,
  Smartphone,
  Laptop,
  Server,
  Heart as HeartIcon,
  Star,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'About',
    href: '/about',
    icon: Info
  },
  {
    name: 'Services',
    href: '/services',
    icon: Briefcase,
    children: [
      {
        name: 'AI Services',
        href: '/ai-services',
        icon: Brain,
        description: 'Artificial intelligence and machine learning solutions'
      },
      {
        name: 'IT Services',
        href: '/it-services',
        icon: Server,
        description: 'Comprehensive IT infrastructure and support'
      },
      {
        name: 'Micro SaaS',
        href: '/micro-saas',
        icon: Zap,
        description: 'Scalable software-as-a-service solutions'
      },
      {
        name: 'Cloud & DevOps',
        href: '/services/cloud-devops',
        icon: Cloud,
        description: 'Cloud infrastructure and DevOps automation'
      },
      {
        name: 'Cybersecurity',
        href: '/services/cybersecurity',
        icon: Shield,
        description: 'Advanced security solutions and compliance'
      },
      {
        name: 'Data Analytics',
        href: '/services/data-analytics',
        icon: BarChart3,
        description: 'Business intelligence and data insights'
      },
      {
        name: 'Quantum Computing',
        href: '/services/quantum-computing',
        icon: CpuIcon,
        description: 'Next-generation quantum computing solutions'
      }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Target,
    children: [
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        icon: Building2,
        description: 'Enterprise-grade solutions for large organizations'
      },
      {
        name: 'Startups',
        href: '/solutions/startups',
        icon: Rocket,
        description: 'Scalable solutions for growing startups'
      },
      {
        name: 'SMBs',
        href: '/solutions/smb',
        icon: Users,
        description: 'Cost-effective solutions for small and medium businesses'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      {
        name: 'Blog',
        href: '/blog',
        icon: FileText,
        description: 'Latest insights and industry trends'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        icon: Award,
        description: 'Success stories and project showcases'
      },
      {
        name: 'White Papers',
        href: '/white-papers',
        icon: FileText,
        description: 'In-depth technical documentation'
      },
      {
        name: 'Webinars',
        href: '/webinars',
        icon: Users,
        description: 'Educational sessions and demos'
      }
    ]
  },
  {
    name: 'Company',
    href: '/company',
    icon: Building2,
    children: [
      {
        name: 'About Us',
        href: '/about',
        icon: Info,
        description: 'Learn about our mission and values'
      },
      {
        name: 'Our Team',
        href: '/team',
        icon: Users,
        description: 'Meet our talented professionals'
      },
      {
        name: 'Careers',
        href: '/careers',
        icon: Briefcase,
        description: 'Join our growing team'
      },
      {
        name: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Get in touch with us'
      }
    ]
  }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Free Consultation Available</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
                <p className="text-sm text-gray-600">AI & Technology Solutions</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                          >
                            <div className="grid grid-cols-1 gap-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                                  onClick={closeDropdowns}
                                >
                                  <child.icon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <div className="font-medium text-gray-900">{child.name}</div>
                                    <div className="text-sm text-gray-600">{child.description}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-4 mt-2 space-y-2"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="flex items-start space-x-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                    onClick={() => {
                                      closeDropdowns();
                                      setIsMenuOpen(false);
                                    }}
                                  >
                                    <child.icon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium">{child.name}</div>
                                      <div className="text-sm text-gray-500">{child.description}</div>
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center space-x-2 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="flex items-center space-x-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services, solutions, or topics..."
                    className="flex-1 outline-none text-gray-900 placeholder-gray-500"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;