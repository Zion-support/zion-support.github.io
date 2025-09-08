import React, { useState } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { 
  Menu, 
  X 

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  ];

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">;
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;
              <span className="text-white font-bold text-lg">Z</span>;
            </div>;
            <span className="text-white text-xl font-bold">Zion Tech Group</span>;
          </Link>;
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">;
            {navigation.map((item) => (<div key={item.name} className="relative">;
                {item.dropdown ? (<div className="relative">;
                    <button;
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center text-gray-300 hover:text-white transition-colors";
                    >;
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />;
                    </button>;
                    <AnimatePresence>;
                      {activeDropdown === item.name && (<motion.div;
                          initial={ opacity: 0, y: -10 }
                          animate={ opacity: 1, y: 0 }
                          exit={ opacity: 0, y: -10 }
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50";
                        >;
                          {item.dropdown.map((dropdownItem) => (<Link;
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors";
                              onClick={() => setActiveDropdown(null)}
                            >;
                              {dropdownItem.name}
                            </Link>;
                          ))}
                        </motion.div>;
                      )}
                    </AnimatePresence>;
                  </div>;
                ) : (<Link;
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors";
                  >;
                    {item.name}
                  </Link>;
                )}
              </div>;
            ))}
=======
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Building,
  Calculator,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  Clock,
  Cloud,
  Code,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Gamepad2,
  Globe,
  Heart,
  Home,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Music,
  Network,
  Phone,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
  X,
  Zap
} from 'lucide-react';

const navigationItems = [
  {
    title: 'Services',
    href: '/services',
    icon: Settings,
    submenu: [
      {
        title: 'AI Services',
        href: '/ai-services',
        icon: Brain,
        description: '30+ cutting-edge AI solutions',
        popular: true
      },
      {
        title: 'IT Services',
        href: '/it-services',
        icon: Network,
        description: '25+ comprehensive IT services',
        popular: true
      },
      {
        title: 'Micro SaaS',
        href: '/micro-saas',
        icon: Cloud,
        description: '40+ innovative micro SaaS solutions',
        popular: true
      },
      {
        title: 'Cybersecurity',
        href: '/cybersecurity',
        icon: Shield,
        description: 'Enterprise security solutions',
        popular: false
      },
      {
        title: 'Cloud Solutions',
        href: '/cloud-solutions',
        icon: Cloud,
        description: 'Scalable cloud infrastructure',
        popular: false
      },
      {
        title: 'Data Analytics',
        href: '/data-analytics',
        icon: BarChart3,
        description: 'Advanced analytics platform',
        popular: false
      }
    ]
  },
  {
    title: 'Solutions',
    href: '/solutions',
    icon: Target,
    submenu: [
      {
        title: 'Enterprise Solutions',
        href: '/solutions/enterprise',
        icon: Building,
        description: 'Comprehensive enterprise solutions'
      },
      {
        title: 'Startup Solutions',
        href: '/solutions/startup',
        icon: Rocket,
        description: 'Rapid deployment for startups'
      },
      {
        title: 'Industry Solutions',
        href: '/solutions/industry',
        icon: BarChart3,
        description: 'Industry-specific solutions'
      },
      {
        title: 'Custom Solutions',
        href: '/solutions/custom',
        icon: Settings,
        description: 'Tailored custom solutions'
      }
    ]
  },
  {
    title: 'Industries',
    href: '/industries',
    icon: Building,
    submenu: [
      {
        title: 'Healthcare',
        href: '/industries/healthcare',
        icon: Heart,
        description: 'Medical AI and health tech'
      },
      {
        title: 'Finance',
        href: '/industries/finance',
        icon: DollarSign,
        description: 'Fintech and financial services'
      },
      {
        title: 'Manufacturing',
        href: '/industries/manufacturing',
        icon: Settings,
        description: 'Industrial automation'
      },
      {
        title: 'Retail',
        href: '/industries/retail',
        icon: ShoppingCart,
        description: 'E-commerce and retail tech'
      },
      {
        title: 'Education',
        href: '/industries/education',
        icon: BookOpen,
        description: 'EdTech solutions'
      },
      {
        title: 'Real Estate',
        href: '/industries/real-estate',
        icon: Home,
        description: 'PropTech innovations'
      }
    ]
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: FileText,
    submenu: [
      {
        title: 'Blog',
        href: '/blog',
        icon: FileText,
        description: 'Latest insights and trends'
      },
      {
        title: 'Case Studies',
        href: '/case-studies',
        icon: BarChart3,
        description: 'Success stories and results'
      },
      {
        title: 'White Papers',
        href: '/white-papers',
        icon: Document,
        description: 'In-depth research reports'
      },
      {
        title: 'Tutorials',
        href: '/tutorials',
        icon: BookOpen,
        description: 'Step-by-step guides'
      },
      {
        title: 'Documentation',
        href: '/docs',
        icon: FileText,
        description: 'Technical documentation'
      }
    ]
  },
  {
    title: 'Company',
    href: '/about',
    icon: Building,
    submenu: [
      {
        title: 'About Us',
        href: '/about',
        icon: Building,
        description: 'Our story and mission'
      },
      {
        title: 'Team',
        href: '/team',
        icon: Users,
        description: 'Meet our experts'
      },
      {
        title: 'Careers',
        href: '/careers',
        icon: Users,
        description: 'Join our team'
      },
      {
        title: 'Partners',
        href: '/partners',
        icon: Globe,
        description: 'Our partnerships'
      },
      {
        title: 'News',
        href: '/news',
        icon: FileText,
        description: 'Company updates'
      },
      {
        title: 'Press',
        href: '/press',
        icon: FileText,
        description: 'Press releases and media'
      }
    ]
  }
];

const quickLinks = [
  { title: 'Pricing', href: '/pricing', icon: DollarSign },
  { title: 'Contact', href: '/contact', icon: Phone },
  { title: 'Support', href: '/support', icon: MessageSquare },
  { title: 'Status', href: '/status', icon: BarChart3 },
  { title: 'Quote', href: '/quote', icon: FileText },
  { title: 'API Docs', href: '/api-docs', icon: Code }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="hover:text-blue-200 transition-colors">
                View Pricing
              </Link>
            </div>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
          </div>

<<<<<<< HEAD
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">;
            <Link;
              href="/contact";
              className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors";
            >;
              Get Started;
              <ArrowRight className="ml-2 h-4 w-4" />;
            </Link>;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden">;
            <button;
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors";
            >;
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>;
          </div>;
        </div>;
        {/* Mobile Navigation */}
        <AnimatePresence>;
          {isOpen && (<motion.div;
              initial={ opacity: 0, height: 0 }
              animate={ opacity: 1, height: 'auto' }
              exit={ opacity: 0, height: 0 }
              className="md:hidden border-t border-gray-800";
            >;
              <div className="py-4 space-y-2">;
                {navigation.map((item) => (<div key={item.name}>;
                    {item.dropdown ? (<div>;
                        <button;
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-300 hover:text-white transition-colors";
                        >;
                          {item.name}
                          <ChevronDown className="h-4 w-4" />;
                        </button>;
                        {activeDropdown === item.name && (<div className="pl-4 space-y-1">;
                            {item.dropdown.map((dropdownItem) => (<Link;
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-gray-400 hover:text-white transition-colors";
                                onClick={() => {setIsOpen(false)setActiveDropdown(null)}
                              >;
                                {dropdownItem.name}
                              </Link>;
                            ))}
                          </div>;
                        )}
                      </div>;
                    ) : (<Link;
                        href={item.href}
                        className="block px-4 py-2 text-gray-300 hover:text-white transition-colors";
                        onClick={() => setIsOpen(false)}
                      >;
                        {item.name}
                      </Link>;
                    )}
                  </div>;
                ))}
                <div className="pt-4 border-t border-gray-800">;
                  <Link;
                    href="/contact";
                    className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg text-center hover:bg-blue-700 transition-colors";
                    onClick={() => setIsOpen(false)}
                  >;
                    Get Started;
                  </Link>;
                </div>;
              </div>;
            </motion.div>;
          )}
        </AnimatePresence>
=======
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
              <div className="text-sm text-gray-500">AI & Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {/* Submenu */}
                {activeSubmenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <subItem.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{subItem.title}</span>
                              {subItem.popular && (
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{subItem.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Quick Links */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                  <div className="ml-7 space-y-2 mt-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span>{subItem.title}</span>
                        {subItem.popular && (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
      </div>
    </nav>
  )
};

export default Navigation;import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
origin/automation-improvements-final

  Menu
  X
  ChevronDown
  ChevronRight
  Phone
  Mail
  MapPin
  Facebook
  Twitter
  Linkedin
  Instagram
  Github
  ArrowRight
  Building
  Users
  ShoppingCart
  Shield
  Zap
  Globe
  BarChart3
  Search
} from "lucide-react";
import SearchModal from "./SearchModal";

export default function Navigation() {
export default function Navigation() {;
export default function Navigation() {;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
    {
      name: "Blockchain"
      href: "/blockchain"
      description: "Smart Contracts, DeFi, NFTs"
      icon: Building
    }
    {
      name: "IoT Solutions"
      href: "/iot"
      description: "Connected Devices, Edge Computing"
      icon: Globe
    }
    {
      name: "Cybersecurity"
      href: "/cybersecurity"
      description: "Security Audits, Compliance"
      icon: Shield
    }
  ];
    {
      name: "Startup Solutions"
      href: "/startup"
      description: "Scalable startup platforms"
      icon: Zap
    }
    {
    {
      name: "Training"
      href: "/training"
      description: "Professional development"
    }
    {
      name: "Events"
      href: "/events"
      description: "Webinars and conferences"
    }
    { name: "News", href: "/news", description: "Industry news and updates" }
  ];
  return (
    <>;
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">;
        <div className="container mx-auto px-4">;
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">;
            <div className="flex items-center space-x-6 mb-2 md:mb-0">;
              <div className="flex items-center">;
                <Phone className="w-4 h-4 mr-2" />;
                <a href="tel:+13024640950" className="hover:text-blue-300">;
                  +1 302 464 0950;
                </a>;
              </div>;
              <div className="flex items-center">;
                <Mail className="w-4 h-4 mr-2" />;
                <a
                </a>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div><div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
                <div className="text-xs text-gray-500">Technology Solutions</div>
              </div>
            </Link>
              {/* Services Dropdown */}
              <div className="relative group">
                <button,
className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>{isServicesOpen && (
                    <motion.div,
initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="grid grid-cols-2 gap-4 px-6">
                        {services && services.map((service, index) => {
                          const IconComponent = service && service.icon
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">;
              <Link;
                href="/";
                className="text - gray - 700 hover:text - blue - 600 font-medium transition-colors";
              >;
                Home;
              </Link>;
              {/* Services Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font-medium transition-colors";
                  onMouseEnter={() => setIsServicesOpen (true)}
                  onMouseLeave={() => setIsServicesOpen (false)}
                >;
                  Services;
                  <ChevronDown className="w - 4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isServicesOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - lg shadow - xl border border - gray-200 py-4";
                      onMouseEnter={() => setIsServicesOpen (true)}
                      onMouseLeave={() => setIsServicesOpen (false)}
                    >;
                      <div className="grid grid - cols - 2 gap-4 px-6">;
                        {services.map ((service, index) => {
                          const IconComponent = service.icon
                          return (
                            <Link,
key={index}
                              href={service.href}
                              className="p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <div className="flex items-center mb-2">
                                <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {service.name}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">
                                {service.description}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                        <Link,
href="/services"
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Solutions Dropdown */}
              <div className="relative group">
                <button,
className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  Solutions
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>{isSolutionsOpen && (
                    <motion.div,
initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsSolutionsOpen(true)}
                      onMouseLeave={() => setIsSolutionsOpen(false)}
                    >;
                      <div className="grid grid-cols-2 gap-4 px-6">;
                        {solutions && solutions.map((solution, index) => {;
                          const IconComponent = solution && solution.icon;
                              href={service.href}
                              className="p - 3 rounded - lg hover:bg - blue-50 transition-colors group";
                            >;
                              <div className="flex items-center mb-2">;
                                <IconComponent className="w - 5 h - 5 text - blue-600 mr-2" />;
                                <div className="font - medium text - gray - 900 group - hover:text-blue-600">;
                                  {service.name}
                                </div>;
                              </div>;
                              <div className="text - sm text-gray-500">;
                                {service.description}
                              </div>;
                            </Link>);
                        })}
                      </div>;
                      <div className="border - t border - gray - 200 mt - 4 pt-4 px-6">;
                        <Link;
                          href="/services";
                          className="flex items - center text - blue - 600 hover:text - blue-700 font-medium";
                        >;
                          View All Services;
                          <ArrowRight className="w - 4 h-4 ml-2" />;
                        </Link>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>;
              {/* Solutions Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font-medium transition-colors";
                  onMouseEnter={() => setIsSolutionsOpen (true)}
                  onMouseLeave={() => setIsSolutionsOpen (false)}
                >;
                  Solutions;
                  <ChevronDown className="w - 4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isSolutionsOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 96 bg - white rounded - lg shadow - xl border border - gray-200 py-4";
                      onMouseEnter={() => setIsSolutionsOpen (true)}
                      onMouseLeave={() => setIsSolutionsOpen (false)}
                    >;
                      <div className="grid grid - cols - 2 gap-4 px-6">;
                        {solutions.map ((solution, index) => {
                          const IconComponent = solution.icon;
                          return (
                            <Link,
key={index}
                              href={solution.href}
                              className="p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                            >
                              <div className="flex items-center mb-2">
                                <IconComponent className="w-5 h-5 text-blue-600 mr-2" />
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {solution.name}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">
                                {solution.description}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                        <Link,
href="/solutions"
                          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View All Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Industries Dropdown */}
              <div className="relative group">
                <button,
className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  Industries
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>{isIndustriesOpen && (
                    <motion.div,
initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsIndustriesOpen(true)}
                      onMouseLeave={() => setIsIndustriesOpen(false)}
                    >
                      <div className="px-6">
                        {industries.map((industry, index) => (
                          <Link,
key={index}
                            href={industry.href}
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {industry && industry.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {industry && industry.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion && motion.div>
                  )}
              {/* Resources Dropdown */}
              <div className="relative group">
                <button,
className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onMouseEnter={() => setIsResourcesOpen(true)}
                  onMouseLeave={() => setIsResourcesOpen(false)}
                >
                  Resources
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>{isResourcesOpen && (
                    <motion.div,
initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                      onMouseEnter={() => setIsResourcesOpen(true)}
                      onMouseLeave={() => setIsResourcesOpen(false)}
                    >
                      <div className="px-6">
                        {resources.map((resource, index) => (
                          <Link,
key={index}
                            href={resource.href}
                            className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                          >
                            <div className="font-medium text-gray-900 group-hover:text-blue-600">
                              {resource && resource.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {resource && resource.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion && motion.div>
                  )}

                </AnimatePresence>;
              </div>;

              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </Link>
            </div>
            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link,
href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
              <a,
href="tel:+13024640950"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Call Now
              </a>
            </div>
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Get Started
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Call Now
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button,
className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
          {/* Mobile Menu */}
          <AnimatePresence>{isMenuOpen && (
              <motion.div,
initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border-t border-gray-200"
              >
                <div className="py-4 space-y-2">
                  <Link,
href="/"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  {/* Mobile Services */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">
                      Services
                    </div>
                    <div className="space-y-1 ml-4">
                      {services.map((service, index) => (
                        <Link,
key={index}
                          href={service.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service && service.name}
                        </Link>
                      ))}
                  {/* Mobile Solutions */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">
                      Solutions
                    </div>
                    <div className="space-y-1 ml-4">
                      {solutions.map((solution, index) => (
                        <Link,
key={index}
                          href={solution.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {solution && solution.name}
                        </Link>
                      ))}
                  {/* Mobile Industries */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">
                      Industries
                    </div>
                    <div className="space-y-1 ml-4">
                      {industries.map((industry, index) => (
                        <Link,
key={index}
                          href={industry.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {industry && industry.name}
                        </Link>
                      ))}
                  {/* Mobile Resources */}
                  <div className="px-4 py-2">
                    <div className="font-medium text-gray-900 mb-2">
                      Resources
                    </div>
                    <div className="space-y-1 ml-4">
                      {resources.map((resource, index) => (
                        <Link,
key={index}
                          href={resource.href}
                          className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {resource && resource.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link,
href="/pricing"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <div className="px-4 py-2 space-y-2">
                    <Link,
href="/contact"
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                    <a,
href="tel:+13024640950"
                      className="block bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                              href={solution.href}
                              className="p - 3 rounded - lg hover:bg - blue-50 transition-colors group";
                            >;
                              <div className="flex items-center mb-2">;
                                <IconComponent className="w - 5 h - 5 text - blue-600 mr-2" />;
                                <div className="font - medium text - gray - 900 group - hover:text-blue-600">;
                                  {solution.name}
                                </div>;
                              </div>;
                              <div className="text - sm text-gray-500">;
                                {solution.description}
                              </div>
                            </Link>)
                        })}
                      </div>;
                      <div className="border - t border - gray - 200 mt - 4 pt-4 px-6">;
                        <Link;
                          href="/solutions";
                          className="flex items - center text - blue - 600 hover:text - blue-700 font-medium";
                        >;
                          View All Solutions;
                          <ArrowRight className="w - 4 h-4 ml-2" />;
                        </Link>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>
              </div>
              {/* Industries Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font-medium transition-colors";
                  onMouseEnter={() => setIsIndustriesOpen (true)}
                  onMouseLeave={() => setIsIndustriesOpen (false)}
                >;
                  Industries;
                  <ChevronDown className="w - 4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isIndustriesOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray-200 py-4";
                      onMouseEnter={() => setIsIndustriesOpen (true)}
                      onMouseLeave={() => setIsIndustriesOpen (false)}
                    >;
                      <div className="px-6">;
                        {industries.map ((industry, index) => (
                          <Link
                            key={index}
                            href={industry.href}
                            className="block p - 3 rounded - lg hover:bg - blue-50 transition-colors group";
                          >;
                            <div className="font - medium text - gray - 900 group - hover:text-blue-600">;
                              {industry.name}
                            </div>;
                            <div className="text - sm text-gray-500">;
                              {industry.description}
                            </div>
                          </Link>))}
                      </div>
                    </motion.div>)}
                </AnimatePresence>
              </div>
              {/* Resources Dropdown */}
              <div className="relative group">;
                <button;
                  className="flex items - center text - gray - 700 hover:text - blue - 600 font-medium transition-colors";
                  onMouseEnter={() => setIsResourcesOpen (true)}
                  onMouseLeave={() => setIsResourcesOpen (false)}
                >;
                  Resources;
                  <ChevronDown className="w - 4 h-4 ml-1" />;
                </button>;
                <AnimatePresence>;
                  {isResourcesOpen && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: 10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: 10 }}
                      className="absolute top - full left - 0 mt - 2 w - 80 bg - white rounded - lg shadow - xl border border - gray-200 py-4";
                      onMouseEnter={() => setIsResourcesOpen (true)}
                      onMouseLeave={() => setIsResourcesOpen (false)}
                    >;
                      <div className="px-6">;
                        {resources.map ((resource, index) => (
                          <Link
                            key={index}
                            href={resource.href}
                            className="block p - 3 rounded - lg hover:bg - blue-50 transition-colors group";
                          >;
                            <div className="font - medium text - gray - 900 group - hover:text-blue-600">;
                              {resource.name}
                            </div>;
                            <div className="text - sm text-gray-500">;
                              {resource.description}
                            </div>
                          </Link>))}
                      </div>
                    </motion.div>)}
                </AnimatePresence>;
              </div>;
              <Link;
                href="/pricing";
                className="text - gray - 700 hover:text - blue - 600 font-medium transition-colors";
              >;
                Pricing;
              </Link>;
            </div>;
            {/* Search and CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">;
              <button;
                on_click={() => setIsSearchOpen (true)}
                className="p - 2 text - gray - 700 hover:text - blue-600 transition-colors";
                aria - label="Search";
              >;
                <Search className="w-5 h-5" />;
              </button>;
              <Link;
                href="/contact";
                className="bg - blue - 600 hover:bg - blue - 700 text - white px - 6 py - 2 rounded - lg font-medium transition-colors";
              >;
                Get Started;
              </Link>;
              <a;
                href="tel:+13024640950";
                className="bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 6 py - 2 rounded - lg font-medium transition-colors";
              >;
                Call Now;
              </a>;
            </div>;
            {/* Mobile Menu Button */}
            <button;
              className="lg:hidden p-2";
              on_click={() => setIsMenuOpen (!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />) : (
                <Menu className="w-6 h-6" />)}
            </button>;
          </div>;
          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div;
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden border - t border-gray-200";
              >;
                <div className="py-4 space-y-2">;
                  <Link;
                    href="/";
                    className="block px - 4 py - 2 text - gray - 700 hover:bg - blue - 50 hover:text - blue-600 rounded-lg";
                    on_click={() => setIsMenuOpen (false)}
                  >
                    Home
                  </Link>
                  {/* Mobile Services */}
                  <div className="px-4 py-2">;
                    <div className="font - medium text - gray-900 mb-2">;
                      Services;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {services.map ((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text-blue-600";
                          on_click={() => setIsMenuOpen (false)}
                        >
                          {service.name}
                        </Link>))}
                    </div>
                  </div>
                  {/* Mobile Solutions */}
                  <div className="px-4 py-2">;
                    <div className="font - medium text - gray-900 mb-2">;
                      Solutions;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {solutions.map ((solution, index) => (
                        <Link
                          key={index}
                          href={solution.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text-blue-600";
                          on_click={() => setIsMenuOpen (false)}
                        >
                          {solution.name}
                        </Link>))}
                    </div>
                  </div>
                  {/* Mobile Industries */}
                  <div className="px-4 py-2">;
                    <div className="font - medium text - gray-900 mb-2">;
                      Industries;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {industries.map ((industry, index) => (
                        <Link
                          key={index}
                          href={industry.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text-blue-600";
                          on_click={() => setIsMenuOpen (false)}
                        >
                          {industry.name}
                        </Link>))}
                    </div>
                  </div>
                  {/* Mobile Resources */}
                  <div className="px-4 py-2">;
                    <div className="font - medium text - gray-900 mb-2">;
                      Resources;
                    </div>;
                    <div className="space-y-1 ml-4">;
                      {resources.map ((resource, index) => (
                        <Link
                          key={index}
                          href={resource.href}
                          className="block py - 1 text - sm text - gray - 600 hover:text-blue-600";
                          on_click={() => setIsMenuOpen (false)}
                        >
                          {resource.name}
                        </Link>))}
                    </div>;
                  </div>;
                  <Link;
                    href="/pricing";
                    className="block px - 4 py - 2 text - gray - 700 hover:bg - blue - 50 hover:text - blue-600 rounded-lg";
                    on_click={() => setIsMenuOpen (false)}
                  >;
                    Pricing;
                  </Link>;
                  <div className="px - 4 py-2 space-y-2">;
                    <Link;
                      href="/contact";
                      className="block bg - blue - 600 hover:bg - blue - 700 text - white px - 4 py - 2 rounded - lg font-medium text-center";
                      on_click={() => setIsMenuOpen (false)}
                    >;
                      Get Started;
                    </Link>;
                    <a;
                      href="tel:+13024640950";
                      className="block bg - transparent border - 2 border - blue - 600 text - blue - 600 hover:bg - blue - 600 hover:text - white px - 4 py - 2 rounded - lg font-medium text-center";
                      on_click={() => setIsMenuOpen (false)}
                    >
                      Call Now
                    </a>
                  </div>
                </div>
      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  )
              </motion.div>)}
          </AnimatePresence>;
        </div>;
      </nav>;
      {/* Search Modal */}
      <SearchModal;
        is_open={isSearchOpen}
        on_close={() => setIsSearchOpen (false)}
      />;
    </>);
}
