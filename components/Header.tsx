import React, { useState, useEffect } from 'react';
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
  FileText as Docs
} from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    </header>
  );
}