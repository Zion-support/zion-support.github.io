import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronRight, 
  ChevronDown,
  Home,
  Info,
  Briefcase,
  Users,
  FileText,
  Building2,
  HelpCircle,
  DollarSign,
  Brain,
  Zap,
  Cloud,
  Shield,
  BarChart3,
  Target,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Heart,
  Settings,
  LogOut,
  Search,
  Bell,
  ShoppingCart,
  User,
  Eye,
  Lock,
  Database,
  Globe,
  CpuIcon,
  Server,
  Laptop,
  Smartphone,
  Code,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  const navigation = [
    {
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      label: 'About',
      href: '/about',
      icon: Info
    },
    {
      label: 'Services',
      href: '/services',
      icon: Briefcase,
      hasSubmenu: true,
      submenu: [
        { label: 'AI Services', href: '/ai-services', icon: Brain },
        { label: 'IT Services', href: '/it-services', icon: Server },
        { label: 'Micro SaaS', href: '/micro-saas', icon: Zap },
        { label: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { label: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { label: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Target,
      hasSubmenu: true,
      submenu: [
        { label: 'Enterprise', href: '/solutions/enterprise', icon: Building2 },
        { label: 'Startups', href: '/solutions/startups', icon: Rocket },
        { label: 'SMBs', href: '/solutions/smb', icon: Users }
      ]
    },
    {
      label: 'Resources',
      href: '/resources',
      icon: FileText,
      hasSubmenu: true,
      submenu: [
        { label: 'Blog', href: '/blog' },
        { label: 'White Papers', href: '/white-papers' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Help Center', href: '/help' },
        { label: 'FAQ', href: '/faq' }
      ]
    },
    {
      label: 'Company',
      href: '/about',
      icon: Building2,
      hasSubmenu: true,
      submenu: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
        { label: 'News', href: '/news' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ];

  const quickLinks = [
    { label: 'Get Started', href: '/contact', icon: ChevronRight },
    { label: 'Pricing', href: '/pricing', icon: DollarSign },
    { label: 'Support', href: '/support', icon: HelpCircle },
    { label: 'Documentation', href: '/docs', icon: FileText }
  ];

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white z-50 lg:translate-x-0 lg:static lg:block ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="px-6 space-y-2">
            {navigation.map((item, index) => (
              <div key={index}>
                {item.hasSubmenu ? (
                  <div className="space-y-1">
                    <div className="flex items-center justify-between py-2 px-3 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                    <div className="ml-8 space-y-1">
                      {item.submenu?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`flex items-center space-x-3 py-2 px-3 text-sm rounded-lg transition-colors ${
                            isActive(subItem.href)
                              ? 'bg-blue-600 text-white'
                              : 'text-gray-400 hover:text-white hover:bg-gray-700'
                          }`}
                          onClick={onClose}
                        >
                          {subItem.icon && <subItem.icon className="w-4 h-4" />}
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 py-2 px-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                    onClick={onClose}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="px-6 mt-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 py-2 px-3 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={onClose}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-6 mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-700">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2">
              © 2024 Zion Tech Group
            </p>
            <p className="text-xs text-gray-500">
              AI & Technology Solutions
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export { Sidebar };