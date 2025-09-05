<<<<<<< HEAD
import { 
  Menu, 
  X, 
  Search, 
  Sun, 
  Moon, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ChevronDown,
  Brain,
  Network,
  Cloud,
  Users,
  FileText,
  HelpCircle,
  Settings,
} from 'lucide-react';

      },
      {
        name: 'Cybersecurity',
        href: '/services/cybersecurity',
      },
      {
        name: 'Data Analytics',
        href: '/services/data-analytics',
      }
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import NextLink from 'next/link';

const navLinks: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/micro-saas', label: 'Micro SaaS' },
  { href: '/it-services', label: 'IT Services' },
  { href: '/ai-services', label: 'AI Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            <NextLink href="/">
              Zion Tech Group
            </NextLink>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NextLink
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
=======
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  ShoppingCart, 
  Bell, 
  Settings, 
  LogOut, 
  Home, 
  Brain, 
  Server, 
  Cloud, 
  Users, 
  Building, 
  FileText, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
<<<<<<< HEAD
  FileText as Docs
} from 'lucide-react';

=======
  FileText,
  BarChart3,
  Cpu,
  Car,
  Code,
  HelpCircle,
  Clock
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '80+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '60+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '100+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '240+' }
>>>>>>> main
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap },
<<<<<<< HEAD
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud }
    children: [
      { name: 'Enterprise', href: '/solutions/enterprise', description: 'Enterprise solutions' },
      { name: 'Healthcare', href: '/solutions/healthcare', description: 'Healthcare technology' },
      { name: 'Finance', href: '/solutions/finance', description: 'Financial services' },
      { name: 'Education', href: '/solutions/education', description: 'Educational technology' },
      { name: 'Government', href: '/solutions/government', description: 'Government solutions' }
    type: 'dropdown',
    children: [
      {
        name: 'All Solutions',
        href: '/solutions',
        description: 'Complete solution portfolio'
      },
      {
        name: 'Enterprise',
        href: '/solutions/enterprise',
        description: 'Large-scale business solutions'
      },
      {
        name: 'Healthcare',
        href: '/solutions/healthcare',
        description: 'Healthcare technology solutions'
      },
      {
        name: 'Finance',
        href: '/solutions/finance',
        description: 'Financial technology solutions'
      },
      {
        name: 'Retail',
        href: '/solutions/retail',
        description: 'Retail technology solutions'
      },
      {
        name: 'Education',
        href: '/solutions/education',
        description: 'Educational technology solutions'
      },
      {
        name: 'Government',
        href: '/solutions/government',
        description: 'Government and public sector solutions'
      }
=======
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'AI Implementation', href: '/solutions/ai-implementation', icon: Brain },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/solutions/data-analytics', icon: BarChart3 },
      { name: 'IoT Solutions', href: '/solutions/iot', icon: Cpu }
>>>>>>> main
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
<<<<<<< HEAD
=======
    icon: Building,
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: DollarSign },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Government', href: '/industries/government', icon: Building },
      { name: 'Energy', href: '/industries/energy', icon: Zap },
      { name: 'Transportation', href: '/industries/transportation', icon: Car }
>>>>>>> main
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
<<<<<<< HEAD
=======
    icon: FileText,
    children: [
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video },
      { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'API Reference', href: '/api-docs', icon: Code },
      { name: 'Help Center', href: '/help', icon: HelpCircle },
      { name: 'Community', href: '/community', icon: Users }
>>>>>>> main
    ]
  },
  {
    name: 'Company',
    href: '/about',
<<<<<<< HEAD
    ]
  },
  { name: 'Support', href: '/support' }
    type: 'dropdown',
    children: [
      {
        name: 'About Us',
        href: '/about',
        description: 'Learn about our company'
      },
      {
        name: 'Our Team',
        href: '/team',
        description: 'Meet our experts'
      },
      {
        name: 'Careers',
        href: '/careers',
        description: 'Join our team'
      },
      {
        name: 'Blog',
        href: '/blog',
        description: 'Latest insights and news'
      },
      {
        name: 'Press',
        href: '/press',
        description: 'Press releases and media'
      },
      {
        name: 'Partners',
        href: '/partners',
        description: 'Our partner network'
      }
=======
    icon: Users,
    children: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Rocket },
      { name: 'Partners', href: '/partners', icon: Network },
      { name: 'News', href: '/news', icon: MessageSquare },
      { name: 'Contact', href: '/contact', icon: Phone }
>>>>>>> main
    ]
  },
  {
    name: 'Support',
    href: '/help',
    icon: HelpCircle,
    children: [
<<<<<<< HEAD
      {
        name: 'Documentation',
        href: '/docs',
        description: 'Technical documentation'
      },
      {
        name: 'Help Center',
        href: '/help',
        description: 'Support and help resources'
      },
      {
        name: 'Community',
        href: '/community',
        description: 'Join our community'
      },
      {
        name: 'Tutorials',
        href: '/tutorials',
        description: 'Learning resources and guides'
      },
      {
        name: 'Case Studies',
        href: '/case-studies',
        description: 'Success stories and examples'
      },
      {
      }
=======
      { name: 'Help Center', href: '/help', icon: HelpCircle },
      { name: 'FAQ', href: '/faq', icon: HelpCircle },
      { name: 'Community', href: '/community', icon: Users },
      { name: 'Contact Support', href: '/contact', icon: Phone },
      { name: 'Status Page', href: '/status', icon: Clock }
>>>>>>> main
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

<<<<<<< HEAD
const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };
=======
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
>>>>>>> main

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Menu, X, Search, Sun, Moon, Phone, Mail, Clock, ChevronDown, DollarSign } from 'lucide-react';

const navigation = [
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "AI Services", href: "/ai-services", description: "Cutting-edge AI solutions" },
      { name: "IT Services", href: "/it-services", description: "Comprehensive IT solutions" },
      { name: "Micro SaaS", href: "/micro-saas", description: "Scalable SaaS solutions" }
    ]
  },
<<<<<<< HEAD
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
=======
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" }
>>>>>>> main
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown, DE 19709"
};

>>>>>>> main
interface HeaderProps {
<<<<<<< HEAD
=======
  onMenuClick: () => void;
}

<<<<<<< HEAD
export default function Header({ onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
=======
export default function Header({ className = "", onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [searchQuery, setSearchQuery] = useState("");
>>>>>>> main
  const router = useRouter();
>>>>>>> main

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

<<<<<<< HEAD
  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      hasSubmenu: true,
      submenu: [
        { label: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
        { label: 'Predictive Analytics Platform', href: '/ai-services#predictive-analytics' },
        { label: 'Intelligent Chatbot System', href: '/ai-services#intelligent-chatbot' },
        { label: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
        { label: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
        { label: 'Voice AI Assistant', href: '/ai-services#voice-ai-assistant' }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: Server,
      hasSubmenu: true,
      submenu: [
        { label: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
        { label: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
        { label: 'Database Management', href: '/it-services#database-management' },
        { label: 'System Administration', href: '/it-services#system-administration' },
        { label: 'IT Consulting', href: '/it-services#it-consulting' }
      ]
    },
    {
      label: 'Micro SaaS',
      href: '/micro-saas',
      icon: Cloud,
      hasSubmenu: true,
      submenu: [
        { label: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
        { label: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
        { label: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
        { label: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
        { label: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
        { label: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      icon: Building,
      hasSubmenu: true,
      submenu: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      label: 'Resources',
      href: '/blog',
      icon: FileText,
      hasSubmenu: true,
      submenu: [
        { label: 'Blog', href: '/blog' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'White Papers', href: '/whitepapers' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Documentation', href: '/docs' }
      ]
    }
  ];
=======
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

<<<<<<< HEAD
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{contactInfo.email}</span>
=======
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
>>>>>>> main

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
<<<<<<< HEAD
            <span className={`text-xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.hasSubmenu && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasSubmenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
>>>>>>> main
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <User className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  >
                    <Link
                      href="/profile"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </Link>
                    <Link
                      href="/help"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <HelpCircle className="w-4 h-4 mr-3" />
                      Help
                    </Link>
                    <hr className="my-2" />
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Get Started
            </Link>

=======
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>24/7 Support</span>
              </div>
              <button
                onClick={toggleTheme}
                className="p-1 rounded hover:bg-gray-800 transition-colors"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
>>>>>>> main
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
<<<<<<< HEAD
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 py-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions, or topics..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
=======

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                <span className="text-white font-bold text-sm">Z</span>
<<<<<<< HEAD
=======
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
<<<<<<< HEAD
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
>>>>>>> main
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <child.icon className="w-4 h-4" />
                              <span>{child.name}</span>
                            </div>
                            {child.count && (
                              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                {child.count}
                              </span>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Get Quote
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm font-medium"
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
<<<<<<< HEAD
=======
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  {item.children && openDropdown === item.name && (
                    <div className="ml-4 space-y-1">
=======

>>>>>>> main
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                    onMouseEnter={() => setIsDropdownOpen(item.name)}
                    onMouseLeave={() => setIsDropdownOpen(null)}
                  >
                    <span>{item.name}</span>
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>
<<<<<<< HEAD
=======

                  {/* Dropdown Menu */}
                  {item.children && isDropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                      onMouseEnter={() => setIsDropdownOpen(item.name)}
                      onMouseLeave={() => setIsDropdownOpen(null)}
                    >
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                      {item.children.map((child) => (
>>>>>>> main
                        <Link
                          key={child.name}
                          href={child.href}
<<<<<<< HEAD
                          className="flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="flex items-center space-x-2">
                            <child.icon className="w-4 h-4" />
                            <span>{child.name}</span>
                          </div>
                          {child.count && (
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                              {child.count}
                            </span>
                          )}
                        </Link>
                      ))}
<<<<<<< HEAD
      {/* Main Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
=======
>>>>>>> main
                    </div>
                  )}
                </div>
              ))}
            </div>
<<<<<<< HEAD
              <Link
                href="/contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
          </motion.div>
        )}
      </AnimatePresence>
=======
          </motion.div>
        )}
      </AnimatePresence>
>>>>>>> main
=======
>>>>>>> main
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-sm text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <DollarSign className="w-4 h-4" />
                <span>Get Quote</span>
              </Link>
            </div>
<<<<<<< HEAD

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
    </header>
  );
}
=======
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-none outline-none text-lg"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
    </header>
  );
}
>>>>>>> main
