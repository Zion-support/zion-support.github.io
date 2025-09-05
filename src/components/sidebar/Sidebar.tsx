import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  Home,
  Brain,
  Cloud,
  Code,
  Shield,
  Database,
  BarChart3,
  Users,
  Settings,
  Network,
  Zap,
  Book,
  MessageCircle,
  Calendar,
  FileText,
  ChevronRight,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const navigationSections = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: MessageCircle }
      ]
    },
    {
      title: 'Services',
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Cloud },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
        { name: 'Cloud Solutions', href: '/services/cloud', icon: Database },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 }
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Shield },
        { name: 'SMB Solutions', href: '/solutions/smb', icon: Users },
        { name: 'Startup Solutions', href: '/solutions/startup', icon: Zap },
        { name: 'Industry Solutions', href: '/solutions/industry', icon: Settings },
        { name: 'Custom Development', href: '/solutions/custom', icon: Code },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Network }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Documentation', href: '/docs', icon: Book },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'Support', href: '/support', icon: MessageCircle },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'Webinars', href: '/webinars', icon: Calendar },
        { name: 'White Papers', href: '/whitepapers', icon: FileText }
      ]
    }
  ];

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-0 h-full w-80 bg-gray-900 text-white z-50 lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          {navigationSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="p-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={itemIndex}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 group ${
                          isActive(item.href)
                            ? 'bg-cyan-600 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <IconComponent className="w-5 h-5 flex-shrink-0" />
                        <span className="flex-1">{item.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700 bg-gray-800">
          <div className="text-sm text-gray-400 space-y-2">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>+1 (302) 464-0950</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;