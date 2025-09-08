import React, { useState, useEffect } from 'react';
import Link from 'next/link';
<<<<<<< HEAD
=======
import { motion, AnimatePresence } from 'framer-motion';
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronDown,
  Home,
Briefcase
  Users,
FileText
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Building2,
  Brain,
  Server,
  Zap,
  Shield,
  Cloud,
  Code,
  Network,
  Rocket,
  Target,
  Atom,
  Lock,
  TrendingUp,
  Workflow,
  MessageCircle,
  DollarSign,
  ArrowUp,
  Sparkles,
  Truck,
  Factory,
  Heart,
  BookOpen,
  BarChart3,
  Cpu,
  Leaf,
  Satellite
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Server },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const services = [
    {
      name: 'AI & Automation',
      href: '/ai-services',
      icon: Brain,
      description: 'Machine learning and AI solutions'
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Server,
      description: 'Cloud computing and cybersecurity'
    },
    {
      name: 'Micro SaaS',
      href: '/micro-saas',
      icon: Zap,
      description: 'Custom software solutions'
    }
  ];

  const handleLinkClick = (href: string) => {
    router.push(href);
    onClose();
  };

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    };
  }, [isOpen]);

  return (
    <AnimatePresence>{isOpen && (
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
            className="fixed left-0 top-0 h-full w-80 bg-gray-900 text-white z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Brain className="w-8 h-8 text-blue-400" />
                  <span className="text-xl font-bold">Zion Tech Group</span>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleLinkClick(item.href)}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>

              {/* Services Section */}
              <div className="mt-8">
                <button
                  onClick={() => toggleSection('services')}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <span className="font-semibold">Our Services</span>
                  {activeSection === 'services' ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5 transform rotate-180" />
                  )}
                </button>

                <AnimatePresence>
                  {activeSection === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 space-y-1"
                    >
                      {services.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleLinkClick(service.href)}
                          className="w-full flex items-center space-x-3 px-8 py-2 text-left text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                        >
                          <service.icon className="w-4 h-4" />
                          <div>
                            <div className="font-medium">{service.name}</div>
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </div>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
                <button className="flex items-center space-x-3 w-full px-3 py-2 text-gray-700 hover: bg-gray-100 rounded-lg transition-colors">
                  <LogOut className="h-5 w-5" />
                  <span className="font-medium">Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )};
    </AnimatePresence>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
