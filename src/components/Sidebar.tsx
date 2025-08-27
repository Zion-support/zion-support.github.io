import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Shield, 
  Handshake, 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  Palette, 
  Target, 
  Rocket, 
  Eye, 
  DollarSign, 
  ShoppingCart, 
  Clock, 
  Cloud, 
  Search, 
  Building, 
  Zap, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  BarChart3, 
  Lock, 
  AlertTriangle, 
  Server, 
  CheckCircle, 
  Truck, 
  Car, 
  TestTube, 
  PenTool, 
  Building2, 
  Atom, 
  FileText, 
  Quote, 
  Newspaper, 
  Calendar, 
  Video, 
  HelpCircle, 
  LifeBuoy, 
  Store, 
  PieChart, 
  Share2, 
  Monitor, 
  Smartphone,
  Github, 
  Youtube,
  GraduationCap,
  Activity,
  DollarSign as DollarSignIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Sidebar({ isOpen, onClose, className }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Close sidebar when location changes
  React.useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const navigationItems = [
    {
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Solutions', path: '/solutions', icon: Rocket, description: 'Industry solutions' },
        // Pricing page currently not implemented
        { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Analytics',
      icon: Brain,
      items: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      items: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud, description: 'Cloud migration and DevOps' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building, description: 'Enterprise infrastructure' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'AI-Powered Security' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      items: [
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Transform data into insights' }
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: Monitor,
      items: []
    },
    {
      title: 'Business Solutions',
      icon: Building,
      items: []
    },
    {
      title: 'Quantum Technology',
      icon: Atom,
      items: []
    },
    {
      title: 'Space Technology',
      icon: Rocket,
      items: []
    },
    {
      title: 'Resources & Insights',
      icon: FileText,
      items: [
        { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest insights and news' },
        { name: 'Research & Development', path: '/research-development', icon: TestTube, description: 'R&D projects' }
      ]
    },
    {
      title: 'Company & Team',
      icon: Users,
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
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
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Zion Tech Group
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-6 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {section.title}
                      </span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        expandedSections.includes(section.title) ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 mt-2 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={onClose}
                            className={`flex items-center space-x-3 p-2 rounded-lg text-sm transition-colors ${
                              location.pathname === item.path
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                            }`}
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{item.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-500 truncate">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>© 2025 Zion Tech Group</p>
                  <p>Innovating the future</p>
                </div>
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 hover:text-blue-400 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
