import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Settings,
  Users,
  Phone,
  FileText,
  HelpCircle,
  Globe,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Cpu,
  Lock,
  Heart,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  DollarSign,
  Star,
  TrendingUp,
  Award,
  MapPin,
  Mail,
  Search
} from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnhancedMobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const location = useLocation();
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setActiveSubmenu(null);
      setSearchQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    // Close mobile menu on route change
    onClose();
  }, [location.pathname, onClose]);

  const mainMenuItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      submenu: null
    },
    {
      label: 'Services',
      href: '/services-overview',
      icon: Settings,
      submenu: [
        {
          label: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'Artificial Intelligence Solutions'
        },
        {
          label: 'IT Services',
          href: '/it-services',
          icon: Cpu,
          description: 'Information Technology Solutions'
        },
        {
          label: 'Cloud & DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Cloud Infrastructure & Automation'
        },
        {
          label: 'Cybersecurity',
          href: '/services/zero-trust-network-architecture',
          icon: Shield,
          description: 'Advanced Security Solutions'
        },
        {
          label: 'Digital Innovation',
          href: '/services/digital-twin',
          icon: Rocket,
          description: 'Cutting-edge Technology'
        }
      ]
    },
    {
      label: 'AI Solutions',
      href: '/ai-services',
      icon: Brain,
      submenu: [
        {
          label: 'AI Business Intelligence',
          href: '/services/ai-business-intelligence',
          icon: TrendingUp,
          description: 'Advanced Analytics & Insights'
        },
        {
          label: 'AI Sales Copilot',
          href: '/services/ai-sales-copilot',
          icon: MessageCircle,
          description: 'Sales Automation'
        },
        {
          label: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          icon: Lock,
          description: 'Regulatory Compliance'
        },
        {
          label: 'LLM Content Studio',
          href: '/services/llm-content-studio',
          icon: FileText,
          description: 'AI-Powered Content Creation'
        }
      ]
    },
    {
      label: 'Micro SaaS',
      href: '/micro-saas',
      icon: Globe,
      submenu: [
        {
          label: 'AI Lead Scoring',
          href: '/services/ai-lead-scoring',
          icon: Star,
          description: 'Intelligent Lead Management'
        },
        {
          label: 'Website AI Chatbot',
          href: '/services/website-ai-chatbot',
          icon: MessageCircle,
          description: 'Smart Customer Support'
        },
        {
          label: 'RAG Search',
          href: '/services/rag-search',
          icon: Search,
          description: 'Advanced Search Solutions'
        },
        {
          label: 'E-commerce Personalization',
          href: '/services/ecommerce-personalization',
          icon: ShoppingCart,
          description: 'Personalized Shopping Experience'
        }
      ]
    },
    {
      label: 'Pricing',
      href: '/pricing-guide',
      icon: DollarSign,
      submenu: null
    },
    {
      label: 'About',
      href: '/about',
      icon: Users,
      submenu: null
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Phone,
      submenu: null
    }
  ];

  const quickActions = [
    { label: 'Request Quote', href: '/request-quote', icon: DollarSign },
    { label: 'Support', href: '/support', icon: HelpCircle },
    { label: 'Blog', href: '/blog', icon: FileText },
    { label: 'Careers', href: '/careers', icon: Award },
    { label: 'Partners', href: '/partners', icon: Users }
  ];

  const handleSubmenuToggle = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />

          {/* Navigation Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 max-w-full bg-slate-900 border-l border-slate-700 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-white font-semibold">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-slate-700">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services, articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-zion-purple focus:ring-1 focus:ring-zion-purple"
                />
              </form>
            </div>

            {/* Main Navigation */}
            <nav className="p-4">
              <div className="space-y-2">
                {mainMenuItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => item.submenu ? handleSubmenuToggle(item.label) : null}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        isActiveRoute(item.href)
                          ? 'bg-zion-purple/20 text-zion-purple border border-zion-purple/40'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        {item.submenu ? (
                          <span className="font-medium">{item.label}</span>
                        ) : (
                          <Link to={item.href} className="font-medium">
                            {item.label}
                          </Link>
                        )}
                      </div>
                      {item.submenu && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeSubmenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Submenu */}
                    <AnimatePresence>
                      {item.submenu && activeSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-8 mt-2 space-y-1 overflow-hidden"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              className={`block p-3 rounded-lg transition-all duration-200 ${
                                isActiveRoute(subItem.href)
                                  ? 'bg-zion-purple/10 text-zion-purple'
                                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <subItem.icon className="w-4 h-4" />
                                <div>
                                  <div className="font-medium text-sm">{subItem.label}</div>
                                  <div className="text-xs text-slate-500">{subItem.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </nav>

            {/* Quick Actions */}
            <div className="p-4 border-t border-slate-700">
              <h3 className="text-sm font-semibold text-slate-300 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.href}
                    to={action.href}
                    className="flex items-center gap-3 p-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors"
                  >
                    <action.icon className="w-4 h-4" />
                    <span className="text-sm">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-4 border-t border-slate-700">
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>Global Operations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}