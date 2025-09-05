import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Settings, 
  Brain, 
  Network, 
  Cloud, 
  Globe, 
  Shield, 
  Building, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  BookOpen, 
  Zap, 
  Video, 
  Users, 
  Rocket, 
  MessageSquare, 
  Phone, 
  FileText,
  BarChart3,
  Cpu,
  Car,
  Code
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain, count: '80+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '60+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '100+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '240+' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Shield,
    children: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Zap },
      { name: 'Cloud Migration', href: '/solutions/cloud-migration', icon: Cloud },
      { name: 'AI Implementation', href: '/solutions/ai-implementation', icon: Brain },
      { name: 'Cybersecurity', href: '/solutions/cybersecurity', icon: Shield },
      { name: 'Data Analytics', href: '/solutions/data-analytics', icon: BarChart3 },
      { name: 'IoT Solutions', href: '/solutions/iot', icon: Cpu }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building,
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: DollarSign },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { name: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Government', href: '/industries/government', icon: Building },
      { name: 'Energy', href: '/industries/energy', icon: Zap },
      { name: 'Transportation', href: '/industries/transportation', icon: Car }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    children: [
      { name: 'White Papers', href: '/white-papers', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video },
      { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'API Reference', href: '/api-docs', icon: Code }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Users,
    children: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Rocket },
      { name: 'Partners', href: '/partners', icon: Network },
      { name: 'News', href: '/news', icon: MessageSquare },
      { name: 'Contact', href: '/contact', icon: Phone }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: DollarSign
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onMouseEnter={() => setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.children && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <div className="grid grid-cols-2 gap-4 p-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                <child.icon className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{child.name}</div>
                                {child.count && (
                                  <div className="text-sm text-gray-500">{child.count} projects</div>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                    {item.children && (
                      <div className="ml-6 mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-1 rounded-md text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <child.icon className="w-3 h-3" />
                            <span>{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-center transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}