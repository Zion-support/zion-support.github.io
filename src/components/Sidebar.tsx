import React, { useState } from 'react';
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
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    description: 'Welcome to Zion Tech Group'
  },
  {
    name: 'Services',
    href: '/services',
    icon: Briefcase,
    description: 'Our comprehensive service offerings',
    children: [
      { name: 'AI Solutions', href: '/services/ai', icon: Brain },
      { name: 'Cloud & DevOps', href: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
      { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap },
      { name: 'Enterprise IT', href: '/services/enterprise-it', icon: Building },
      { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server },
      { name: 'Consulting', href: '/services/consulting', icon: Handshake },
      { name: 'Blockchain & Web3', href: '/services/blockchain', icon: Globe },
      { name: 'Green IT', href: '/services/green-it', icon: Leaf },
      { name: 'Space Tech', href: '/services/space-tech', icon: Rocket }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Target,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
      { name: 'Finance', href: '/solutions/finance', icon: DollarSign },
      { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Factory },
      { name: 'Education', href: '/solutions/education', icon: GraduationCap },
      { name: 'Retail', href: '/solutions/retail', icon: ShoppingCart }
    ]
  },
  {
    name: 'About',
    href: '/about',
    icon: Users,
    description: 'Learn about our company and team'
  },
  {
    name: 'Careers',
    href: '/careers',
    icon: Briefcase,
    description: 'Join our innovative team'
  },
  {
    name: 'News',
    href: '/news',
    icon: Newspaper,
    description: 'Latest industry insights and updates'
  },
  {
    name: 'Partners',
    href: '/partners',
    icon: Handshake,
    description: 'Strategic partnerships and alliances'
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone,
    description: 'Get in touch with us'
  }
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (href: string) => {
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
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark border-r border-zion-blue-light z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-blue-light">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-zion-slate-dark" />
                </div>
                <span className="text-xl font-bold text-white">Zion Tech</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-blue-light rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors",
                          isActive(item.href)
                            ? "bg-zion-cyan text-zion-slate-dark"
                            : "text-zion-slate-light hover:text-white hover:bg-zion-blue-light"
                        )}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown 
                          className={cn(
                            "w-4 h-4 transition-transform",
                            expandedItems.includes(item.name) && "rotate-180"
                          )} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedItems.includes(item.name) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 space-y-1 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                onClick={onClose}
                                className={cn(
                                  "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                                  isActive(child.href)
                                    ? "bg-zion-cyan/20 text-zion-cyan"
                                    : "text-zion-slate-light hover:text-white hover:bg-zion-blue-light"
                                )}
                              >
                                <child.icon className="w-4 h-4" />
                                <span className="text-sm">{child.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={cn(
                        "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                        isActive(item.href)
                          ? "bg-zion-cyan text-zion-slate-dark"
                          : "text-zion-slate-light hover:text-white hover:bg-zion-blue-light"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto p-6 border-t border-zion-blue-light">
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-zion-slate-light text-sm">
                    Connect with us
                  </p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://linkedin.com/company/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue-light rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue-light rounded-lg transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/ziontechgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue-light rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-zion-slate-light text-xs">
                    © 2024 Zion Tech Group. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
