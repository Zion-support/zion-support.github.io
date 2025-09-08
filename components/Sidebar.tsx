import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  Users,
  FileText,
  HelpCircle,
  LogOut,
  User,
  Search,
  Brain,
  Shield,
  Cloud,
  Code,
  Network,
  Zap,
  Phone,
  Mail,
  MapPin,
  Building2,
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
    { name: 'IoT Solutions', href: '/iot-solutions' },
  ],
  'Solutions': [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    { name: 'Custom Development', href: '/solutions/custom' },
  ],
  'Industries': [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Government', href: '/industries/government' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Energy', href: '/industries/energy' },
  ],
  'Resources': [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Documentation', href: '/docs/api' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'Training', href: '/training' },
    { name: 'FAQ', href: '/faq' },
  ],
  'Company': [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'News', href: '/news' },
    { name: 'Partners', href: '/partners' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

const quickLinks = [
  { name: 'Free Consultation', href: '/consultation' },
  { name: 'Get Quote', href: '/quote' },
  { name: 'Support', href: '/support' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
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
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
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
                      onClick={onClose}>{link.name}
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
                </div>
                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={onClose}><span>Get Started</span>
                    <ExternalLink className="w-4 h-4" />
                  </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}