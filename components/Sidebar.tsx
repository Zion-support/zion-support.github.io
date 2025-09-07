'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { 
  X;
  Building2;
  Code;
  Smartphone;
  Cloud;
  Shield;
  Zap;
  ShoppingCart;
  Heart;
  GraduationCap;
  Factory;
  Truck;
  CreditCard;
  Phone;
  Mail;
=======
import {
  X
  Building2
  Code
  Smartphone
  Cloud
  Shield
  Zap
  ShoppingCart
  Heart
  GraduationCap
  Factory
  Truck
  CreditCard
  Phone
  Mail
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  ExternalLink
} from 'lucide-react';
interface SidebarProps {
  isOpen: boolean, onClose: () => void
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const handleDropdownToggle = (title: string) => {
    setOpenDropdowns(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title];
    );
<<<<<<< HEAD
  };

  const navigation = null;
  };

  const quickLinks = null;
=======
  }
  const navigation = {
    'Services': [
      { name: 'Web Development', href: '/services/web-development', icon: Code }
      { name: 'Mobile Development', href: '/services/mobile-development', icon: Smartphone }
      { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: Cloud }
      { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield }
      { name: 'Performance Optimization', href: '/services/performance', icon: Zap }
    ]
    'Solutions': [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 }
      { name: 'E-commerce Platforms', href: '/solutions/ecommerce', icon: ShoppingCart }
      { name: 'Healthcare Technology', href: '/solutions/healthcare', icon: Heart }
      { name: 'Educational Platforms', href: '/solutions/education', icon: GraduationCap }
    ]
    'Industries': [
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory }
      { name: 'Logistics', href: '/industries/logistics', icon: Truck }
      { name: 'Finance', href: '/industries/finance', icon: CreditCard }
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart }
      { name: 'Education', href: '/industries/education', icon: GraduationCap }
    ];
  }
  const quickLinks = [
    { name: 'About Us', href: '/about' }
    { name: 'Our Team', href: '/team' }
    { name: 'Case Studies', href: '/case-studies' }
    { name: 'Blog', href: '/blog' }
    { name: 'Careers', href: '/careers' }
    { name: 'Contact', href: '/contact' }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
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
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
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
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Navigation */}
              <nav className="space-y-4">
                {Object.entries(navigation).map(([title, links]) => (
                  <div key={title}>
                    <button
                      onClick={() => handleDropdownToggle(title)}
                      className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 py-2 hover: text-blue-600 transition-colors"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
                <div className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <contact.icon className="w-4 h-4" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
export default Sidebar;