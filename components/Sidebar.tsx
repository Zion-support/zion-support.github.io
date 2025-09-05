import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Shield,
  Lock,
  Search,
  Brain,
  Network,
  Cloud,
  Globe,
  Code,
  Target,
  Zap,
  Award,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Database,
  Cpu,
  Smartphone,
  Server,
  Building,
  Heart,
  Banknote,
  ShoppingCart,
  Factory,
  Gamepad2,
  Package,
  Truck,
  Rocket,
  Handshake
} from 'lucide-react';

const navigation = [
  {
    name: 'Home',
    href: '/',
    icon: Home,
    description: 'Main landing page'
  },
  {
    name: 'Services',
    href: '/services',
    icon: Settings,
    description: 'Our comprehensive service offerings',
    children: [
      { name: 'AI Services', href: '/ai-services', icon: Brain, count: '20+' },
      { name: 'IT Services', href: '/it-services', icon: Network, count: '20+' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud, count: '25+' },
      { name: 'All Services', href: '/services', icon: Globe, count: '65+' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: Target,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
      { name: 'Startup Solutions', href: '/solutions/startup', icon: Rocket },
      { name: 'Industry Solutions', href: '/solutions/industry', icon: BarChart3 },
      { name: 'Custom Development', href: '/solutions/custom', icon: Code },
      { name: 'All Solutions', href: '/solutions', icon: Globe }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    icon: Building,
    description: 'Industry expertise',
    children: [
      { name: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { name: 'Finance', href: '/industries/finance', icon: Banknote },
      { name: 'E-commerce', href: '/industries/retail', icon: ShoppingCart },
      { name: 'Manufacturing', href: '/industries/manufacturing', icon: Factory },
      { name: 'Education', href: '/industries/education', icon: BookOpen },
      { name: 'Government', href: '/industries/government', icon: Building },
      { name: 'All Industries', href: '/industries', icon: Globe }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: FileText,
    description: 'Knowledge and documentation',
    children: [
      { name: 'Documentation', href: '/docs', icon: FileText },
      { name: 'API Reference', href: '/api-docs', icon: Code },
      { name: 'Tutorials', href: '/tutorials', icon: BookOpen },
      { name: 'Guides', href: '/guides', icon: FileText },
      { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { name: 'Blog', href: '/blog', icon: MessageSquare },
      { name: 'FAQ', href: '/faq', icon: HelpCircle },
      { name: 'Support', href: '/support', icon: Users }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: Users,
    description: 'About our company',
    children: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Users },
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'Events', href: '/events', icon: Calendar },
      { name: 'Contact', href: '/contact', icon: Phone }
    ]
  }
];

const quickLinks = [
  { name: 'Get Quote', href: '/contact', icon: MessageSquare, color: 'blue' },
  { name: 'Free Consultation', href: '/contact', icon: Phone, color: 'green' },
  { name: 'View Case Studies', href: '/case-studies', icon: BarChart3, color: 'purple' },
  { name: 'Download Resources', href: '/resources', icon: FileText, color: 'orange' }
];

const contactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008, Middletown, DE 19709'
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
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
            initial={{ x: -320 }}
            animate={{ x: 0 }}
            exit={{ x: -320 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
                  <div className="text-xs text-gray-600">Technology Solutions</div>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search */}
            <div className="p-6 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="p-6">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon;
                  const isExpanded = expandedItems.includes(item.name);
                  
                  return (
                    <div key={item.name}>
                      <div className="flex items-center">
                        <Link
                          href={item.href}
                          className="flex-1 flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors group"
                          onClick={onClose}
                        >
                          <IconComponent className="w-5 h-5 mr-3 text-gray-500 group-hover:text-blue-600" />
                          <div className="flex-1">
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                        {item.children && (
                          <button
                            onClick={() => toggleExpanded(item.name)}
                            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4" />
                            ) : (
                              <ChevronRight className="w-4 h-4" />
                            )}
                          </button>
                        )}
                      </div>
                      
                      {/* Children */}
                      {item.children && (
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-8 mt-2 space-y-1">
                                {item.children.map((child) => {
                                  const ChildIconComponent = child.icon;
                                  return (
                                    <Link
                                      key={child.name}
                                      href={child.href}
                                      className="flex items-center justify-between p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors group"
                                      onClick={onClose}
                                    >
                                      <div className="flex items-center">
                                        <ChildIconComponent className="w-4 h-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                                        <span>{child.name}</span>
                                      </div>
                                      {child.count && (
                                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                          {child.count}
                                        </span>
                                      )}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Quick Links */}
            <div className="p-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        link.color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                        link.color === 'green' ? 'bg-green-50 text-green-700 hover:bg-green-100' :
                        link.color === 'purple' ? 'bg-purple-50 text-purple-700 hover:bg-purple-100' :
                        'bg-orange-50 text-orange-700 hover:bg-orange-100'
                      }`}
                      onClick={onClose}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-blue-600" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-600" />
                  <span className="text-xs">{contactInfo.address}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}