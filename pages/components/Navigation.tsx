<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import Link from 'next/link';
import { useState } from 'react';

import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Building,
  Calendar,
  Car,
  ChevronDown,
  Cloud,
  Code,
  Cpu,
  DollarSign,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Heart,
  Home,
  Lock,
  Mail,
  Menu,
  MessageSquare,
  Network,
  Phone,
  Rocket,
  Settings,
  Shield,
  ShoppingCart,
  Sprout,
  Target,
  TrendingUp,
  Users,
  Wifi,
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
        title: 'Quantum Computing',
        href: '/quantum-computing',
        icon: Cpu,
        description: 'Quantum solutions & infrastructure',
        popular: false
      },
      {
        title: 'Blockchain',
        href: '/blockchain',
        icon: Lock,
        description: 'Blockchain & DeFi solutions',
        popular: false
      },
      {
        title: 'IoT Solutions',
        href: '/iot',
        icon: Wifi,
        description: 'Internet of Things platforms',
        popular: false
      },
      {
        title: 'AR/VR Solutions',
        href: '/ar-vr',
        icon: Eye,
        description: 'Augmented & Virtual Reality',
        popular: false
      },
      {
        title: 'Space Technology',
        href: '/space-tech',
        icon: Rocket,
        description: 'Space & satellite solutions',
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
        popular: true
      },
      {
        title: 'Startup Solutions',
        href: '/startup',
        icon: Rocket,
        description: 'Scalable startup platforms',
        popular: true
      },
      {
        title: 'Cloud Solutions',
        href: '/cloud-solutions',
        icon: Cloud,
        description: 'Scalable cloud infrastructure',
        popular: true
      },
      {
        title: 'Cybersecurity',
        href: '/cybersecurity',
        icon: Shield,
        description: 'Enterprise security solutions',
        popular: true
      },
      {
        title: 'Data Analytics',
        href: '/data-analytics',
        icon: BarChart3,
        description: 'Advanced analytics platform',
        popular: false
      },
      {
        title: 'Automation',
        href: '/automation',
        icon: Zap,
        description: 'Intelligent process automation',
        popular: false
      },
      {
        title: 'Digital Transformation',
        href: '/digital-transformation',
        icon: TrendingUp,
        description: 'Complete digital overhaul',
        popular: false
      },
      {
        title: 'Custom Development',
        href: '/custom-development',
        icon: Code,
        description: 'Tailored software solutions',
        popular: false
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
        description: 'Medical AI and health tech',
        popular: true
      },
      {
        title: 'Finance',
        href: '/industries/finance',
        icon: DollarSign,
        description: 'Fintech and financial services',
        popular: true
      },
      {
        title: 'Manufacturing',
        href: '/industries/manufacturing',
        icon: Settings,
        description: 'Industrial automation',
        popular: true
      },
      {
        title: 'Retail',
        href: '/industries/retail',
        icon: ShoppingCart,
        description: 'E-commerce and retail tech',
        popular: true
      },
      {
        title: 'Education',
        href: '/industries/education',
        icon: BookOpen,
        description: 'EdTech solutions',
        popular: false
      },
      {
        title: 'Real Estate',
        href: '/industries/real-estate',
        icon: Home,
        description: 'PropTech innovations',
        popular: false
      },
      {
        title: 'Agriculture',
        href: '/industries/agriculture',
        icon: Sprout,
        description: 'AgTech and smart farming',
        popular: false
      },
      {
        title: 'Energy',
        href: '/industries/energy',
        icon: Zap,
        description: 'Energy and utilities tech',
        popular: false
      },
      {
        title: 'Transportation',
        href: '/industries/transportation',
        icon: Car,
        description: 'Logistics and mobility',
        popular: false
      },
      {
        title: 'Government',
        href: '/industries/government',
        icon: Building,
        description: 'Public sector solutions',
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
        description: 'Latest insights and trends',
        popular: true
      },
      {
        title: 'Case Studies',
        href: '/case-studies',
        icon: BarChart3,
        description: 'Success stories and results',
        popular: true
      },
      {
        title: 'White Papers',
        href: '/white-papers',
        icon: FileText,
        description: 'In-depth research reports',
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
        description: 'Step-by-step guides',
        popular: false
      },
      {
        title: 'API Documentation',
        href: '/api-docs',
        icon: Code,
        description: 'Developer resources',
        popular: false
      },
      {
        title: 'Training',
        href: '/training',
        icon: GraduationCap,
        description: 'Professional development',
        popular: false
      },
      {
        title: 'FAQ',
        href: '/faq',
        icon: MessageSquare,
        description: 'Frequently asked questions',
        popular: false
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
        description: 'Our story and mission',
        popular: true
      },
      {
        title: 'Team',
        href: '/team',
        icon: Users,
        description: 'Meet our experts',
        popular: true
      },
      {
        title: 'Careers',
        href: '/careers',
        icon: Users,
        description: 'Join our team',
        popular: true
      },
      {
        title: 'Partners',
        href: '/partners',
        icon: Globe,
        description: 'Our partnerships',
        popular: false
      },
      {
        title: 'News',
        href: '/news',
        icon: FileText,
        description: 'Company updates',
        popular: false
      },
      {
        title: 'Contact',
        href: '/contact',
        icon: Phone,
        description: 'Get in touch with us',
        popular: true
      },
      {
        title: 'Privacy Policy',
        href: '/privacy',
        icon: Lock,
        description: 'Privacy and data protection',
        popular: false
      },
      {
        title: 'Terms of Service',
        href: '/terms',
        icon: FileText,
        description: 'Terms and conditions',
        popular: false
      }
    ]
  }
];

const quickLinks = [
  { title: 'Pricing', href: '/pricing', icon: DollarSign },
  { title: 'Contact', href: '/contact', icon: Phone },
  { title: 'Support', href: '/support', icon: MessageSquare },
  { title: 'Status', href: '/status', icon: BarChart3 },
  { title: 'Free Consultation', href: '/consultation', icon: Calendar },
  { title: 'Get Quote', href: '/quote', icon: FileText }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const Navigation: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Navigation | Zion Tech Group</title>
        <meta name="description" content="Navigation - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Navigation</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
=======
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
              <Link href="/blog/ai-2026-agent-release-health-scorecards" className="bg-white text-blue-700 rounded-full px-3 py-1 font-medium hover:bg-blue-50 transition-colors">
                New: Agent Release Health Scorecards →
              </Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="hover:text-blue-200 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
        </div>
      </div>
    </div>
  );
};

export default Navigation;