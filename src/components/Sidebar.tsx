import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Home, 
  Info, 
  Phone, 
  Brain, 
  Code, 
  Network, 
  Rocket, 
  ShoppingCart, 
  BarChart3,
  FileText,
  Users,
  DollarSign,
  BookOpen,
  TrendingUp,
  Calendar,
  Shield,
  ChevronRight,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Services', href: '/services', icon: BarChart3 },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const serviceNavigation = [
    { name: 'AI Services', href: '/services/ai-services', icon: Brain },
    { name: 'IT Services', href: '/services/it-services', icon: Network },
    { name: 'Micro SaaS', href: '/services/micro-saas', icon: Code },
    { name: 'Emerging Tech', href: '/emerging-tech', icon: Rocket },
  ];

  const resourceNavigation = [
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },
    { name: 'White Papers', href: '/white-papers', icon: FileText },
    { name: 'Webinars', href: '/webinars', icon: Calendar },
    { name: 'Documentation', href: '/documentation', icon: FileText },
  ];

  const businessNavigation = [
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
  ];

  const legalNavigation = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Sitemap', href: '/sitemap', icon: FileText },
  ];

  const NavigationSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                router.pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-slate-800'
              }`}
              onClick={onClose}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-slate-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ZION
                </div>
                <div className="text-xs text-blue-400 font-medium">TECH GROUP</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <NavigationSection title="Main" items={mainNavigation} />
            <NavigationSection title="Services" items={serviceNavigation} />
            <NavigationSection title="Resources" items={resourceNavigation} />
            <NavigationSection title="Business" items={businessNavigation} />
            <NavigationSection title="Legal" items={legalNavigation} />
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-800">
            <div className="text-center">
              <div className="text-blue-400 font-semibold mb-2">Contact Us</div>
              <div className="text-sm text-gray-400 space-y-1">
                <div>+1 302 464 0950</div>
                <div>kleber@ziontechgroup.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;