import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  Network, 
  Cloud, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Users,
  Settings,
  BarChart3,
  Shield,
  Code,
  Zap,
  Globe,
  Home,
  Building,
  FileText,
  MessageSquare,
  Calendar,
  ShoppingCart,
  BookOpen,
  Camera,
  Music,
  Gamepad2,
  Heart,
  Truck,
  Calculator,
  CreditCard,
  Lock,
  Eye,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Cpu,
  Rocket
} from 'lucide-react';

const navigationItems = [
  {
    title: 'Services',
    href: '/services',
    icon: Settings,
    submenu: [
      {
        title: 'AI Services',
        href: '/ai-services',
        icon: Brain,
        description: '80+ cutting-edge AI solutions',
        popular: true
      },
      {
        title: 'IT Services',
        href: '/it-services',
        icon: Network,
        description: '70+ comprehensive IT services',
        popular: true
      },
      {
        title: 'Micro SaaS',
        href: '/micro-saas',
        icon: Cloud,
        description: '85+ innovative micro SaaS solutions',
        popular: true
      },
      {
        title: 'Cybersecurity',
        href: '/cybersecurity',
        icon: Shield,
        description: 'Advanced security solutions',
        popular: false
      },
      {
        title: 'Cloud Solutions',
        href: '/cloud-solutions',
        icon: Cloud,
        description: 'Cloud infrastructure & migration',
        popular: false
      },
      {
        title: 'Quantum Computing',
        href: '/quantum-computing',
        icon: Cpu,
        description: 'Next-gen quantum solutions',
        popular: false
      }
    ]
  },
  {
    title: 'Solutions',
    href: '/solutions',
    icon: Target,
    submenu: [
      {
        title: 'Enterprise Solutions',
        href: '/enterprise',
        icon: Building,
        description: 'Large-scale business solutions',
        popular: false
      },
      {
        title: 'Startup Solutions',
        href: '/startup',
        icon: Rocket,
        description: 'Scalable startup platforms',
        popular: false
      },
      {
        title: 'E-commerce',
        href: '/ecommerce',
        icon: ShoppingCart,
        description: 'Online store solutions',
        popular: false
      },
      {
        title: 'Healthcare',
        href: '/healthcare',
        icon: Heart,
        description: 'Medical technology solutions',
        popular: false
      },
      {
        title: 'Finance',
        href: '/finance',
        icon: DollarSign,
        description: 'Fintech and banking solutions',
        popular: false
      },
      {
        title: 'Education',
        href: '/education',
        icon: BookOpen,
        description: 'EdTech platforms',
        popular: false
      }
    ]
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: FileText,
    submenu: [
      {
        title: 'Blog',
        href: '/blog',
        icon: FileText,
        description: 'Latest tech insights',
        popular: false
      },
      {
        title: 'Case Studies',
        href: '/case-studies',
        icon: BarChart3,
        description: 'Success stories',
        popular: false
      },
      {
        title: 'White Papers',
        href: '/white-papers',
        icon: FileText,
        description: 'Technical documentation',
        popular: false
      },
      {
        title: 'Webinars',
        href: '/webinars',
        icon: Calendar,
        description: 'Educational sessions',
        popular: false
      },
      {
        title: 'Tutorials',
        href: '/tutorials',
        icon: BookOpen,
        description: 'Learning resources',
        popular: false
      }
    ]
  },
  {
    title: 'Company',
    href: '/company',
    icon: Building,
    submenu: [
      {
        title: 'About Us',
        href: '/about',
        icon: Building,
        description: 'Our story and mission',
        popular: false
      },
      {
        title: 'Team',
        href: '/team',
        icon: Users,
        description: 'Meet our experts',
        popular: false
      },
      {
        title: 'Careers',
        href: '/careers',
        icon: Users,
        description: 'Join our team',
        popular: false
      },
      {
        title: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Get in touch',
        popular: false
      }
    ]
  }
];

const quickLinks = [
  { title: 'Pricing', href: '/pricing', icon: DollarSign },
  { title: 'Contact', href: '/contact', icon: Phone },
  { title: 'Support', href: '/support', icon: MessageSquare },
  { title: 'Status', href: '/status', icon: BarChart3 }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="hover:text-blue-200 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">Zion Tech Group</div>
              <div className="text-sm text-gray-500">AI & Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {/* Submenu */}
                {activeSubmenu === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <subItem.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-gray-900">{subItem.title}</span>
                              {subItem.popular && (
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">{subItem.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Quick Links */}
            <div className="flex items-center space-x-4 ml-8 pl-8 border-l border-gray-200">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                  <div className="ml-7 space-y-2 mt-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        <subItem.icon className="w-4 h-4" />
                        <span>{subItem.title}</span>
                        {subItem.popular && (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="w-4 h-4" />
                      <span>{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}