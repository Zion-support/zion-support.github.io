import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import {
  X,
  ChevronDown,
=======
import { 
  X, 
  ChevronDown, 
<<<<<<< HEAD
  ChevronRight,
>>>>>>> pr-11914
=======
>>>>>>> pr-11935
  Home,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
<<<<<<< HEAD
  LogOut,
  User,
  Search,
  Brain,
  Shield,
  Cloud,
  Code,
  Network,
  Zap
=======
  Phone,
  Mail,
  MapPin,
  Building2,
  User,
  LogOut,
  Search
>>>>>>> pr-11935
} from 'lucide-react';

const navigation = {
  'Services': [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Micro SaaS', href: '/micro-saas' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' },
    { name: 'Quantum Computing', href: '/quantum-computing' },
    { name: 'Blockchain', href: '/blockchain' },
    { name: 'IoT Solutions', href: '/iot-solutions' }
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' }
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' }
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' }
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' }
  ]
};

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' }
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

<<<<<<< HEAD
const navigationItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: Home
  },
  {
    label: 'Services',
    href: '/services',
    icon: Briefcase,
    children: [
      { label: 'AI & Machine Learning', href: '/ai-services', icon: Brain },
      { label: 'Cybersecurity', href: '/it-services', icon: Shield },
      { label: 'Cloud Infrastructure', href: '/it-services', icon: Cloud },
      { label: 'Custom Development', href: '/services', icon: Code },
      { label: 'System Integration', href: '/services', icon: Network },
      { label: 'Digital Transformation', href: '/services', icon: Zap }
    ]
  },
  {
    label: 'Team',
    href: '/team',
    icon: Users
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings
  },
  {
    label: 'Help & Support',
    href: '/help',
    icon: HelpCircle
  }
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };
=======
export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> pr-11935

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

<<<<<<< HEAD
=======
  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

>>>>>>> pr-11935
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
<<<<<<< HEAD
          
=======

>>>>>>> pr-11935
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
<<<<<<< HEAD
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Zion Tech</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
=======
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
>>>>>>> pr-11935
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

<<<<<<< HEAD
              {/* Search */}
              <div className="p-6 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <li key={index}>
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleExpanded(item.label)}
                            className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <item.icon className="h-5 w-5" />
                              <span className="font-medium">{item.label}</span>
                            </div>
                            {expandedItems.includes(item.label) ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {expandedItems.includes(item.label) && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-6 mt-2 space-y-1"
                              >
                                {item.children.map((child, childIndex) => (
                                  <Link
                                    key={childIndex}
                                    href={child.href}
                                    onClick={onClose}
                                    className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                                  >
                                    <child.icon className="h-4 w-4" />
                                    <span>{child.label}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* User Section */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">john@ziontechgroup.com</p>
                  </div>
=======
              {/* Navigation */}
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button
                      onClick={() => handleDropdownToggle(title)}
                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover:text-blue-600 transition-colors"
                    >
                      <span>{title}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${
                        activeDropdown === title ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-4 space-y-2 mt-2"
                      >
                        {links.map((link) => (
                          <Link
                            key={link.name}
                            href={link.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                            onClick={onClose}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Quick Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 mt-1" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
>>>>>>> pr-11935
                </div>
                
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> pr-11914
