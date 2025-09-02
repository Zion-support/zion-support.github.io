import React from 'react';
import Link from 'next/link';
import {
  Brain, Cloud,
  Shield, Code,
  Database, Network,
  Users, Award,
  ShoppingCart, HelpCircle,
  ChevronRight,
  Home,
  Phone,
  Mail,
  MapPin,
  Globe,
  Zap,
  BarChart3,
  Settings,
  BookOpen,
  Briefcase,
  MessageSquare
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Solutions', href: '/solutions', icon: Zap },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Careers', href: '/careers', icon: Briefcase }
  ];

  const serviceLinks = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Network },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
    { name: 'Web Development', href: '/services/web-development', icon: Code },
    { name: 'Cloud Services', href: '/services/cloud-services', icon: Cloud },
    { name: 'Database Solutions', href: '/services/database-solutions', icon: Database }
  ];

  const companyLinks = [
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
    { name: 'Partners', href: '/partners', icon: Globe },
    { name: 'Press', href: '/press', icon: MessageSquare }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-gray-900 shadow-xl overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">
              Navigation
            </h3>
            <nav className="space-y-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">
              Services
            </h3>
            <nav className="space-y-2">
              {serviceLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">
              Company
            </h3>
            <nav className="space-y-2">
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wide">
              Contact Information
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-sm text-gray-300 hover:text-cyan-300 transition-colors"
                >
                  <contact.icon className="w-4 h-4 text-cyan-400" />
                  <span>{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4 border-t border-gray-700">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;