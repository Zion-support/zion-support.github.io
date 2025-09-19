import React from 'react';
const Sidebar = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-4">Sidebar</h1>,
          <p className="text-lg opacity-90">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  );
  };
export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {,
  Brain;
  Code;
  Cloud;
  Shield;
  Database;
  Building2;
  Rocket;
  Factory;
  Network;
  Users;
  Award;
  CheckCircle;
  ArrowRight;
  Phone;
  Clock;
  ChevronDown;
  ChevronRight;
  Mail;
  MapPin,
} from 'lucide-react';
interface SidebarProps {,
  isOpen: boolean;
  onClose?: () => void;
  className?: string,
}
const navigationSections = [,
  {,
    id: 'services';
    title: 'Our Services';
    icon: Code;
    items: [,
      { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' ,};
      { name: 'IT Services', href: '/it-services', icon: Code, description: 'Comprehensive IT solutions' ,};
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, description: 'Scalable SaaS applications' ,};
      { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' ,};
      { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud infrastructure & services' ,};
      { name: 'Database Solutions', href: '/database-solutions', icon: Database, description: 'Database management & optimization' ,}
    ],
  };
    id: 'solutions';
    title: 'Solutions';
    icon: Building2;
      { name: 'Enterprise Solutions', href: '/enterprise-solutions', icon: Building2, description: 'Large-scale business solutions' ,};
      { name: 'Startup Solutions', href: '/startup-solutions', icon: Rocket, description: 'Scalable startup solutions' ,};
      { name: 'Industry Solutions', href: '/industries', icon: Factory, description: 'Industry-specific solutions' ,};
      { name: 'Custom Development', href: '/custom-development', icon: Code, description: 'Tailored software development' ,};
      { name: 'Digital Transformation', href: '/digital-transformation', icon: Network, description: 'Complete digital transformation' ,};
      { name: 'Technology Consulting', href: '/consulting', icon: Users, description: 'Strategic technology consulting' ,}
    id: 'company';
    title: 'Company';
      { name: 'About Us', href: '/about', icon: Building2, description: 'Learn about our company' ,};
      { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our expert team' ,};
      { name: 'Careers', href: '/careers', icon: Award, description: 'Join our team' ,};
      { name: 'Case Studies', href: '/case-studies', icon: CheckCircle, description: 'Success stories' ,};
      { name: 'News & Updates', href: '/news', icon: ArrowRight, description: 'Latest news' ,};
      { name: 'Partners', href: '/partners', icon: Users, description: 'Our partners' ,}
  }
];
const quickLinks = [,
  { name: 'Get Quote', href: '/contact', icon: Phone, highlight: true ,};
  { name: 'Schedule Call', href: '/contact', icon: Clock ,};
  { name: 'View Portfolio', href: '/case-studies', icon: Award ,};
  { name: 'Download Brochure', href: '/resources', icon: ArrowRight ,}
const contactInfo = {,
  phone: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008, Middletown DE 19709',
};
export default function Sidebar({ isOpen, onClose, className = '' }: SidebarProps) {,
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const toggleSection = (sectionId: string) => {,
    setExpandedSections(prev =>,
      prev.includes(sectionId),
        ? prev.filter(id => id !== sectionId),
        : [...prev, sectionId],
    );
  const handleLinkClick = (href: string) => {,
    if (onClose) onClose();
    // In a real app, you'd use router.push(href) here,
    window.location.href = href;
    <motion.aside,
      initial={false}
      animate={{ x: isOpen ? 0 : -320 ,}}
      transition={{ duration: 0.3, ease: 'easeInOut' ,}}
      className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto ${className}`}
    >,
      <div className="p-6">,
        {/* Header */}
        <div className="flex items-center justify-between mb-8">,
          <Link href="/" className="flex items-center space-x-2" onClick={() => onClose?.()}>,
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">,
              <Brain className="w-5 h-5 text-white" />,
            </div>,
            <span className="text-lg font-bold text-gray-900">Zion Tech</span>,
          </Link>,
          {onClose && (,
            <button,
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover: bg-gray-100 transition-colors",
            >,
              ×,
            </button>,
          ),}
        {/* Quick Links */}
        <div className="mb-8">,
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</h3>,
          <div className="space-y-2">,
            {quickLinks.map((link) => {,
              const IconComponent = link.icon;
              return (,
                <button,
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${,
                    link.highlight,
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: shadow-lg',
                      : 'text-gray-700 hover:bg-gray-100',}`}
                >,
                  <IconComponent className="w-5 h-5" />,
                  <span className="font-medium">{link.name}</span>,
                </button>,
              );
            })}
          </div>,
        {/* Navigation Sections */}
        <div className="space-y-6">,
          {navigationSections.map((section) => {,
            const isExpanded = expandedSections.includes(section.id);
            const IconComponent = section.icon;
            return (,
              <div key={section.id}>,
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover: bg-gray-100 rounded-lg transition-colors",
                  <div className="flex items-center space-x-3">,
                    <IconComponent className="w-5 h-5" />,
                    <span className="font-medium">{section.title,}</span>,
                  </div>,
                  {isExpanded ? (,
                    <ChevronDown className="w-4 h-4" />,
                  ) : (,
                    <ChevronRight className="w-4 h-4" />,
                  )}
                {isExpanded && (,
                  <motion.div,
                    initial={{ opacity: 0, height: 0 ,}}
                    animate={{ opacity: 1, height: 'auto' ,}}
                    exit={{ opacity: 0, height: 0 ,}}
                    className="mt-2 space-y-1",
                  >,
                    {section.items.map((item) => {,
                      const ItemIconComponent = item.icon;
                      return (,
                        <button,
                          key={item.name}
                          onClick={() => handleLinkClick(item.href)}
                          className="w-full flex items-start space-x-3 px-6 py-3 text-left text-gray-600 hover: bg-gray-50 rounded-lg transition-colors group",
                        >,
                          <ItemIconComponent className="w-4 h-4 mt-0.5 text-gray-400 group-hover:text-blue-600" />,
                          <div className="flex-1 min-w-0">,
                            <div className="font-medium text-sm group-hover:text-blue-600">{item.name,}</div>,
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>,
                          </div>,
                        </button>,
                      );
                    })}
                  </motion.div>,
                )}
              </div>,
            );
          })}
        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">,
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Contact Info</h3>,
          <div className="space-y-3">,
            <div className="flex items-center space-x-3 text-sm text-gray-600">,
              <Phone className="w-4 h-4 text-blue-600" />,
              <span>{contactInfo.phone}</span>,
              <Mail className="w-4 h-4 text-blue-600" />,
              <span className="truncate">{contactInfo.email}</span>,
            <div className="flex items-start space-x-3 text-sm text-gray-600">,
              <MapPin className="w-4 h-4 text-blue-600 mt-0.5" />,
              <span className="text-xs">{contactInfo.address}</span>,
        {/* Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200">,
          <div className="grid grid-cols-2 gap-4">,
            <div className="text-center">,
              <div className="text-lg font-bold text-blue-600">99.9%</div>,
              <div className="text-xs text-gray-500">Uptime</div>,
              <div className="text-lg font-bold text-green-600">500+</div>,
              <div className="text-xs text-gray-500">Projects</div>,
              <div className="text-lg font-bold text-purple-600">50+</div>,
              <div className="text-xs text-gray-500">Experts</div>,
              <div className="text-lg font-bold text-yellow-600">24/7</div>,
              <div className="text-xs text-gray-500">Support</div>,
    </motion.aside>,
}}]