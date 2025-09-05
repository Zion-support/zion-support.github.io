<<<<<<< HEAD
=======
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> main
import { 
  X, 
  ChevronDown, 
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
  Settings,
  User,
  LogOut,
  Search
=======
import { useRouter } from 'next/router';
import {
  Home,
  Briefcase,
  Target,
  Building2,
  FileText,
  HelpCircle,
  Search,
  X,
  ChevronRight,
  Brain,
  Shield,
  Cloud,
  Heart,
<<<<<<< HEAD
=======
  DollarSign,
  ShoppingCart,
  GraduationCap,
  Globe
>>>>>>> main
>>>>>>> main
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
<<<<<<< HEAD
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Target,
=======

<<<<<<< HEAD
export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
=======
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
>>>>>>> main
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigationItems = [
    {
      label: "Home",
      href: "/",
      icon: Home
    },
    {
<<<<<<< HEAD
      label: 'AI Services',
      href: '/ai-services',
      icon: Brain,
>>>>>>> main
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
<<<<<<< HEAD
        { label: 'All Industries', href: '/industries' },
        { label: 'Healthcare', href: '/industries/healthcare', icon: Heart },
        { label: 'Finance', href: '/industries/finance', icon: DollarSign },
        { label: 'Education', href: '/industries/education', icon: GraduationCap },
        { label: 'Government', href: '/industries/government', icon: Globe },
        { label: 'Manufacturing', href: '/industries/manufacturing', icon: Building2 },
        { label: 'Retail', href: '/industries/retail', icon: ShoppingCart },
=======
        { label: 'Cloud Infrastructure Management', href: '/it-services#cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
        { label: 'Network Infrastructure', href: '/it-services#network-infrastructure' },
        { label: 'Database Management', href: '/it-services#database-management' },
        { label: 'System Administration', href: '/it-services#system-administration' },
        { label: 'IT Consulting', href: '/it-services#it-consulting' }
      ]
>>>>>>> main
    },
    {
      label: 'Micro SaaS',
      href: '/micro-saas',
      icon: Cloud,
      hasSubmenu: true,
      submenu: [
<<<<<<< HEAD
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' },
=======
        { label: 'Cloud Cost Guard', href: '/micro-saas#cloud-cost-guard' },
        { label: 'LLM Evaluation Suite', href: '/micro-saas#llm-evaluation' },
        { label: 'Customer Feedback App', href: '/micro-saas#customer-feedback' },
        { label: 'API Rate Limiting', href: '/micro-saas#api-rate-limiting' },
        { label: 'Content Moderation AI', href: '/micro-saas#content-moderation' },
        { label: 'Workflow Automation', href: '/micro-saas#workflow-automation' }
      ]
>>>>>>> main
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
<<<<<<< HEAD
        { label: 'Contact', href: '/contact' },

  const quickLinks = [
    { label: 'Get Started', href: '/contact', icon: ChevronRight },
    { label: 'Pricing', href: '/pricing', icon: DollarSign },
    { label: 'Support', href: '/support', icon: HelpCircle },
    { label: 'Documentation', href: '/docs', icon: FileText },
  ];

  const isActive = (href: string) => {
    return router.pathname === href;
  };
=======
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
    },
    {
      label: 'Support',
      href: '/support',
      icon: HelpCircle,
      hasSubmenu: true,
      submenu: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Support', href: '/contact' },
        { label: 'Documentation', href: '/docs' },
        { label: 'FAQ', href: '/faq' }
=======
      label: "Services",
      href: "/services",
      icon: Briefcase,
      hasSubmenu: true,
      submenu: [
        { label: "All Services", href: "/services" },
        { label: "AI Services", href: "/ai-services", icon: Brain },
        { label: "IT Services", href: "/it-services", icon: Shield },
        { label: "Micro SaaS", href: "/micro-saas", icon: Cloud },
        { label: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { label: "Cybersecurity", href: "/services/cybersecurity", icon: Shield },
        { label: "Data Analytics", href: "/services/data-analytics", icon: Brain }
      ]
    },
    {
      label: "Solutions",
      href: "/solutions",
      icon: Target,
      hasSubmenu: true,
      submenu: [
        { label: "All Solutions", href: "/solutions" },
        { label: "Enterprise", href: "/solutions/enterprise", icon: Building2 },
        { label: "Healthcare", href: "/solutions/healthcare", icon: Heart },
        { label: "Finance", href: "/solutions/finance", icon: DollarSign },
        { label: "Retail", href: "/solutions/retail", icon: ShoppingCart },
        { label: "Education", href: "/solutions/education", icon: GraduationCap },
        { label: "Government", href: "/solutions/government", icon: Globe }
      ]
    },
    {
      label: "Industries",
      href: "/industries",
      icon: Building2,
      hasSubmenu: true,
      submenu: [
        { label: "All Industries", href: "/industries" },
        { label: "Healthcare", href: "/industries/healthcare", icon: Heart },
        { label: "Finance", href: "/industries/finance", icon: DollarSign },
        { label: "Education", href: "/industries/education", icon: GraduationCap },
        { label: "Government", href: "/industries/government", icon: Globe },
        { label: "Manufacturing", href: "/industries/manufacturing", icon: Building2 },
        { label: "Retail", href: "/industries/retail", icon: ShoppingCart }
      ]
    },
    {
      label: "Resources",
      href: "/resources",
      icon: FileText,
      hasSubmenu: true,
      submenu: [
        { label: "Blog", href: "/blog" },
        { label: "White Papers", href: "/white-papers" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Webinars", href: "/webinars" },
        { label: "Help Center", href: "/help" },
        { label: "FAQ", href: "/faq" }
      ]
    },
    {
      label: "Company",
      href: "/about",
      icon: Building2,
      hasSubmenu: true,
      submenu: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Careers", href: "/careers" },
        { label: "News", href: "/news" },
        { label: "Contact", href: "/contact" }
>>>>>>> main
      ]
    }
  ];

<<<<<<< HEAD
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.sidebar')) {
        onClose();
      }
    };
=======
  const quickLinks = [
    { label: "Get Started", href: "/contact", icon: ChevronRight },
    { label: "Pricing", href: "/pricing", icon: DollarSign },
    { label: "Support", href: "/support", icon: HelpCircle },
    { label: "Documentation", href: "/docs", icon: FileText }
  ];
>>>>>>> main
>>>>>>> main

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
<<<<<<< HEAD
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
=======
<<<<<<< HEAD
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="sidebar fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6">
              <div className="px-6 space-y-2">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          onClick={() => toggleSection(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                          </div>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${
                              openSections.includes(item.label) ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openSections.includes(item.label) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-8 mt-2 space-y-1">
                                {item.submenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    onClick={onClose}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                  >
                                    {subItem.label}
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
                        onClick={onClose}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6">
              <div className="space-y-4">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                
                <div className="flex space-x-4">
                  <Link
                    href="/help"
                    onClick={onClose}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    <span className="text-sm">Help</span>
                  </Link>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">Contact</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
=======
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 lg:static lg:block`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
>>>>>>> main
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <div className="p-6">
            {navigationItems.map((item, index) => (
              <div key={index} className="mb-2">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                    onClick={() => !item.hasSubmenu && onClose()}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  {item.hasSubmenu && (
                    <button
                      onClick={() => toggleSection(item.label)}
                      className="p-2 hover:bg-gray-800 rounded-lg"
                    >
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          expandedSections.includes(item.label) ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.hasSubmenu && expandedSections.includes(item.label) && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                          isActive(subItem.href)
                            ? "bg-blue-600 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                        }`}
                        onClick={onClose}
                      >
                        {subItem.icon && <subItem.icon className="w-4 h-4" />}
                        <span>{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Quick Links */}
        <div className="p-6 border-t border-gray-700">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <div className="space-y-2">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center space-x-3 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6 border-t border-gray-700">
          <div className="text-sm text-gray-400">
            <p className="mb-2">Need help?</p>
            <p className="text-blue-400">kleber@ziontechgroup.com</p>
            <p className="text-blue-400">+1 302 464 0950</p>
          </div>
        </div>
      </div>
    </>
>>>>>>> main
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> main
