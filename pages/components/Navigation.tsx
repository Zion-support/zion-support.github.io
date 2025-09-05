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
  Award as Recognition,
  Star as Rating,
  Users as People,
  Settings as Config,
  BarChart3 as Analytics,
  Shield as Security,
  Code as Programming,
  Zap as Lightning,
  Globe as World,
  Home as House,
  Building as Office,
  FileText as Document,
  MessageSquare as Chat,
  Calendar as Schedule,
  ShoppingCart as Cart,
  BookOpen as Book,
  Camera as Photo,
  Music as Audio,
  Gamepad2 as Gaming,
  Heart as Love,
  Truck as Delivery,
  Calculator as Math,
  CreditCard as Payment,
  Lock as Secure,
  Eye as View,
  Target as Goal,
  TrendingUp as Growth,
  Clock as Time,
  DollarSign as Money
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
        description: '100+ cutting-edge AI solutions',
        popular: true
      },
      {
        title: 'IT Services',
        href: '/it-services',
        icon: Network,
        description: '85+ comprehensive IT services',
        popular: true
      },
      {
        title: 'Micro SaaS',
        href: '/micro-saas',
        icon: Cloud,
        description: '120+ innovative micro SaaS solutions',
        popular: true
      },
      {
        title: 'Cloud Solutions',
        href: '/cloud-solutions',
        icon: Cloud,
        description: 'Enterprise cloud infrastructure'
      },
      {
        title: 'Cybersecurity',
        href: '/cybersecurity',
        icon: Shield,
        description: 'Zero-trust security solutions'
      },
      {
        title: 'Data Analytics',
        href: '/data-analytics',
        icon: BarChart3,
        description: 'AI-powered analytics platform'
      },
      {
        title: 'Automation',
        href: '/automation',
        icon: Zap,
        description: 'Intelligent process automation'
      },
      {
        title: 'Quantum Computing',
        href: '/quantum-computing',
        icon: Cpu,
        description: 'Next-gen quantum solutions'
      }
    ]
  },
  {
    title: 'Solutions',
    href: '/solutions',
    icon: Target,
    submenu: [
      {
        title: 'Digital Transformation',
        href: '/digital-transformation',
        icon: Settings,
        description: 'Complete digital transformation'
      },
      {
        title: 'AI Development',
        href: '/ai-development',
        icon: Brain,
        description: 'Custom AI model development'
      },
      {
        title: 'Blockchain Solutions',
        href: '/blockchain',
        icon: Lock,
        description: 'Enterprise blockchain platform'
      },
      {
        title: 'IoT Solutions',
        href: '/iot-solutions',
        icon: Globe,
        description: 'Internet of Things platform'
      },
      {
        title: 'Edge Computing',
        href: '/edge-computing',
        icon: Server,
        description: 'Distributed edge solutions'
      },
      {
        title: 'MLOps & AIOps',
        href: '/mlops',
        icon: Code,
        description: 'AI operations & deployment'
      },
      {
        title: 'Green IT',
        href: '/green-it',
        icon: Sprout,
        description: 'Sustainable technology solutions'
      }
    ]
  },
  {
    title: 'Industries',
    href: '/industries',
    icon: Building,
    submenu: [
      {
        title: 'Healthcare',
        href: '/industries/healthcare',
        icon: Heart,
        description: 'Medical AI and health tech'
      },
      {
        title: 'Finance',
        href: '/industries/finance',
        icon: DollarSign,
        description: 'Fintech and financial services'
      },
      {
        title: 'Manufacturing',
        href: '/industries/manufacturing',
        icon: Settings,
        description: 'Industrial automation & Industry 4.0'
      },
      {
        title: 'Retail',
        href: '/industries/retail',
        icon: ShoppingCart,
        description: 'E-commerce and retail tech'
      },
      {
        title: 'Education',
        href: '/industries/education',
        icon: BookOpen,
        description: 'EdTech and learning solutions'
      },
      {
        title: 'Real Estate',
        href: '/industries/real-estate',
        icon: Home,
        description: 'PropTech and smart buildings'
      },
      {
        title: 'Government',
        href: '/industries/government',
        icon: Building,
        description: 'Public sector digital solutions'
      },
      {
        title: 'Energy',
        href: '/industries/energy',
        icon: Zap,
        description: 'Smart energy and utilities'
      },
      {
        title: 'Agriculture',
        href: '/industries/agriculture',
        icon: Sprout,
        description: 'AgTech and precision farming'
      },
      {
        title: 'Transportation',
        href: '/industries/transportation',
        icon: Truck,
        description: 'Smart mobility and logistics'
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
        description: 'Latest insights and trends'
      },
      {
        title: 'Case Studies',
        href: '/case-studies',
        icon: BarChart3,
        description: 'Success stories and results'
      },
      {
        title: 'White Papers',
        href: '/white-papers',
        icon: FileText,
        description: 'In-depth research reports'
      },
      {
        title: 'Tutorials',
        href: '/tutorials',
        icon: BookOpen,
        description: 'Step-by-step guides'
      },
      {
        title: 'Webinars',
        href: '/webinars',
        icon: Video,
        description: 'Live and recorded sessions'
      },
      {
        title: 'Events',
        href: '/events',
        icon: Calendar,
        description: 'Conferences and workshops'
      },
      {
        title: 'API Documentation',
        href: '/api-docs',
        icon: Code,
        description: 'Developer resources'
      },
      {
        title: 'Documentation',
        href: '/docs',
        icon: FileText,
        description: 'Technical documentation'
      }
    ]
  },
  {
    title: 'Company',
    href: '/about',
    icon: Building,
    submenu: [
      {
        title: 'About Us',
        href: '/about',
        icon: Building,
        description: 'Our story and mission'
      },
      {
        title: 'Team',
        href: '/team',
        icon: Users,
        description: 'Meet our experts'
      },
      {
        title: 'Careers',
        href: '/careers',
        icon: Users,
        description: 'Join our team'
      },
      {
        title: 'Partners',
        href: '/partners',
        icon: Globe,
        description: 'Our partnerships'
      },
      {
        title: 'News',
        href: '/news',
        icon: FileText,
        description: 'Company updates'
      },
      {
        title: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Get in touch'
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