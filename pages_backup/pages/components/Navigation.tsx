import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Building,
  Calculator,
  Calendar,
  Camera,
  CheckCircle,
  ChevronDown,
  Clock,
  Cloud,
  Code,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Gamepad2,
  Globe,
  Heart,
  Home,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Music,
  Network,
  Phone,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Truck,
  Users,
  X,
  Zap
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
        description: '30+ cutting-edge AI solutions',
        popular: true
      },
      {
        title: 'IT Services',
        href: '/it-services',
        icon: Network,
        description: '25+ comprehensive IT services',
        popular: true
      },
      {
        title: 'Micro SaaS',
        href: '/micro-saas',
        icon: Cloud,
        description: '40+ innovative micro SaaS solutions',
        popular: true
      },

      {
        title: 'Cybersecurity',
        href: '/cybersecurity',
        icon: Shield,
        description: 'Enterprise security solutions',
        popular: false
      },
      {
        title: 'Cloud Solutions',
        href: '/cloud-solutions',
        icon: Cloud,
        description: 'Scalable cloud infrastructure',
        popular: false
      },
      {
        title: 'Data Analytics',
        href: '/data-analytics',
        icon: BarChart3,
        description: 'Advanced analytics platform',
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
        href: '/solutions/enterprise',
        icon: Building,
        description: 'Comprehensive enterprise solutions'
      },
      {
        title: 'Startup Solutions',
        href: '/solutions/startup',
        icon: Rocket,
        description: 'Rapid deployment for startups'
      },
      {
        title: 'Industry Solutions',
        href: '/solutions/industry',
        icon: BarChart3,
        description: 'Industry-specific solutions'
      },
      {
        title: 'Custom Solutions',
        href: '/solutions/custom',
        icon: Settings,
        description: 'Tailored custom solutions'
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
        description: 'Industrial automation'
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
        description: 'EdTech solutions'
      },
      {
        title: 'Real Estate',
        href: '/industries/real-estate',
        icon: Home,
        description: 'PropTech innovations'
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
        title: 'FileTextation',
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
        title: 'Press',
        href: '/press',
        icon: FileText,
        description: 'Press releases and media'
      }
    ]
  }
];

const quickLinks = [
  { title: 'Pricing', href: '/pricing', icon: DollarSign },
  { title: 'Contact', href: '/contact', icon: Phone },
  { title: 'Support', href: '/support', icon: MessageSquare },
  { title: 'Status', href: '/status', icon: BarChart3 },
  { title: 'Quote', href: '/quote', icon: FileText },
  { title: 'API Docs', href: '/api-docs', icon: Code }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

