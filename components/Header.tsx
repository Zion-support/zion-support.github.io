import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  Brain,
  Network,
  Cloud,
  Users,
  Shield,
  BarChart3,
  Settings,
  Globe,
  FileText,
  MessageSquare,
  Rocket,
  Building,
  Heart,
  DollarSign,
  ShoppingCart,
  BookOpen,
  Zap,
  Video,
  Car,
  Search,
  Sprout,
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react';

const navigation = [
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'AI Solutions', href: '/ai-services', icon: Brain },
      { name: 'IT Services', href: '/it-services', icon: Network },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      { name: 'Cloud Migration', href: '/solutions/cloud', icon: Cloud },
      { name: 'Cybersecurity', href: '/solutions/security', icon: Shield },
      { name: 'Data Analytics', href: '/solutions/analytics', icon: BarChart3 }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: DollarSign },
      { name: 'E-commerce', href: '/industries/ecommerce', icon: ShoppingCart }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    children: [
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Case Studies', href: '/case-studies', icon: FileText },
      { name: 'Webinars', href: '/webinars', icon: Video }
    ]
  }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="text-sm">
              <span>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === item.name && item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        <child.icon className="w-4 h-4" />
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="pt-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <child.icon className="w-4 h-4" />
                          <span>{child.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}