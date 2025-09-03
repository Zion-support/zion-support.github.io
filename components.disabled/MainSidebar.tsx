import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Briefcase,
  Users,
  Phone,
  Mail,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Shield,
  Handshake,
  ChevronDown,
  ChevronRight,
  Brain,
  Cpu,
  Database,
  Network,
  Code,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
}

const MainSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const sidebarItems: SidebarItem[] = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      children: [
        { name: 'AI Development', href: '/services/ai', icon: Brain },
        { name: 'Cloud Services', href: '/services/cloud', icon: Cloud },
        { name: 'Web Development', href: '/services/web', icon: Code },
        { name: 'Mobile Development', href: '/services/mobile', icon: Smartphone },
        { name: 'Blockchain', href: '/services/blockchain', icon: Shield },
        { name: 'IoT Solutions', href: '/services/iot', icon: Network }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Users,
      children: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { name: 'Startup', href: '/solutions/startup', icon: Rocket },
        { name: 'Consulting', href: '/solutions/consulting', icon: Handshake }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: Globe
    }
  ];

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.name);
    const Icon = item.icon;

    return (
      <div key={item.name}>
        <div
          className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer ${
            level > 0 ? 'pl-8' : ''
          }`}
          onClick={() => {
            if (hasChildren) {
              toggleExpanded(item.name);
            }
          }}
        >
          <div className="flex items-center">
            <Icon className="h-5 w-5 mr-3" />
            <span className="font-medium">{item.name}</span>
          </div>
          {hasChildren && (
            <div className="ml-auto">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </div>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="bg-gray-50">
            {item.children!.map(child => (
              <Link
                key={child.name}
                href={child.href}
                className={`flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 ${
                  level > 0 ? 'pl-12' : 'pl-8'
                }`}
              >
                <child.icon className="h-4 w-4 mr-3" />
                <span>{child.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-800">Zion Tech</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {sidebarItems.map(item => renderSidebarItem(item))}
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-4 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
            <div className="text-xs text-gray-500">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default MainSidebar;