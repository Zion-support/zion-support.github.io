import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  Brain, Settings, Code, Cloud, Shield, Database, Building2, Rocket, Factory, Network, Users, Award, CheckCircle, ArrowRight, Phone, Clock, Mail, MapPin, ChevronDown, ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
}

const navigationSections = [
  {
    id: 'services',
    title: 'Services',
    icon: Brain,
    items: [
      { name: 'AI & Machine Learning', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Settings },
      { name: 'Micro SaaS Products', href: '/micro-saas', icon: Code },
      { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/data-analytics', icon: Database },
    ]
  },
  {
    id: 'solutions',
    title: 'Solutions',
    icon: Building2,
    items: [
      { name: 'Enterprise Solutions', href: '/enterprise', icon: Building2 },
      { name: 'Startup Solutions', href: '/startup', icon: Rocket },
      { name: 'Manufacturing', href: '/manufacturing', icon: Factory },
      { name: 'Healthcare', href: '/healthcare', icon: Shield },
      { name: 'Finance', href: '/finance', icon: Database },
      { name: 'E-commerce', href: '/ecommerce', icon: Network },
    ]
  },
  {
    id: 'company',
    title: 'Company',
    icon: Users,
    items: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Award },
      { name: 'Careers', href: '/careers', icon: CheckCircle },
      { name: 'News', href: '/news', icon: ArrowRight },
    ]
  }
];

const quickLinks = [
  { name: 'Pricing', href: '/pricing', icon: Award },
  { name: 'Contact', href: '/contact', icon: Phone },
  { name: 'Support', href: '/support', icon: Settings },
  { name: 'Documentation', href: '/docs', icon: Code },
];

const contactInfo = {
  phone: '+1 (555) 123-4567',
  email: 'info@ziontechgroup.com',
  address: '123 Tech Street, Innovation City, IC 12345',
  hours: 'Mon-Fri 9AM-6PM EST'
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, className = '' }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleLinkClick = (href: string) => {
    router.push(href);
    if (onClose) onClose();
  };

  return (
    <motion.aside
      initial={false}
      animate={{ x: isOpen ? 0 : -320 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          )}
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-4">
          {navigationSections.map((section) => (
            <div key={section.id} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full text-left py-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                <div className="flex items-center">
                  <section.icon className="h-5 w-5 mr-3" />
                  {section.title}
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {expandedSections.includes(section.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-8 space-y-2 mt-2"
                >
                  {section.items.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleLinkClick(item.href)}
                      className="flex items-center w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <div className="space-y-2">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.href)}
                className="flex items-center w-full text-left py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <link.icon className="h-4 w-4 mr-3" />
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-3" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-3" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-3" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-3" />
              <span>{contactInfo.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};