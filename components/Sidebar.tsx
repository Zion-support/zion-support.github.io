import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  X,
  ChevronDown,
  Home,
  Briefcase,
  Users,
  Settings,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(router.pathname);
  }, [router.pathname]);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const serviceItems = [
    { name: 'AI Services', href: '/ai-services', icon: Star },
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Globe },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="p-6">
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activeItem === item.href
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={onClose}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8">
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Services
                </h3>
                <div className="mt-2 space-y-2">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                          activeItem === item.href
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={onClose}
                      >
                        <Icon className="h-5 w-5 mr-3" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  info@ziontechgroup.com
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  123 Innovation Drive, Tech City
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
<<<<<<< HEAD
}
=======
};

export default Sidebar;
>>>>>>> 7cd1f9a73b20571287d099e6b52b4a284469ba34
