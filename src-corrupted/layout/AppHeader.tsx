<<<<<<< HEAD
import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Workflow, Calendar, Database, Network, BarChart3, Wifi, HeartPulse, User, Award, Lightbulb, Handshake, BookOpen as BookOpenIcon, FileText as FileTextIcon, Users as UsersIcon, Code as CodeIcon, HelpCircle as HelpCircleIcon, DollarSign as DollarSignIcon, Users as UsersIcon2, Calendar as CalendarIcon, Shield as ShieldIcon, BookOpen as BookOpenIcon2, Factory } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Bot, Atom } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services-overview', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/ai-services', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Organized Services Categories
  const servicesCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      services: [
        { 
          name: 'AI Business Intelligence', 
          href: '/services/ai-business-intelligence', 
          icon: Brain, 
          description: 'Machine Learning & Data Science',
          featured: true
        },
        { 
          name: 'AI Healthcare Analytics', 
          href: '/services/ai-healthcare-analytics', 
          icon: Heart, 
          description: 'Medical AI & Diagnostics',
          featured: true
        },
        { 
          name: 'AI Legal Document Analysis', 
          href: '/services/ai-legal-document-analysis', 
          icon: FileText, 
          description: 'Legal Tech Platform',
          featured: true
        },
        { 
          name: 'AI Financial Trading', 
          href: '/services/ai-financial-trading', 
          icon: TrendingUp, 
          description: 'FinTech AI Solutions',
          featured: true
        },
        { 
          name: 'AI Supply Chain Optimization', 
          href: '/services/ai-supply-chain-optimization', 
          icon: Workflow, 
          description: 'Supply Chain AI',
          featured: true
        },
        { 
          name: 'AI Content Creation', 
          href: '/services/ai-content-creation', 
          icon: PenTool, 
          description: 'AI-Powered Content Generation',
          featured: true
        },
        { 
          name: 'AI HR Platform', 
          href: '/services/ai-hr-platform', 
          icon: Users, 
          description: 'Human Resources Automation',
          featured: true
        },
        { 
          name: 'AI Marketing Automation', 
          href: '/services/ai-marketing-automation', 
          icon: Target, 
          description: 'Intelligent Marketing Solutions',
          featured: true
        },
        { 
          name: 'AI Quantum Hybrid Platform', 
          href: '/services/ai-quantum-hybrid-platform', 
          icon: Atom, 
          description: 'Quantum-AI Integration',
          featured: true
        },
        { 
          name: 'AI Autonomous Research Assistant', 
          href: '/services/ai-autonomous-research-assistant', 
          icon: Search, 
          description: 'Research Automation',
          featured: true
        },
        { 
          name: 'AI Cybersecurity Threat Intelligence', 
          href: '/services/ai-cybersecurity-threat-intelligence', 
          icon: Shield, 
          description: 'AI-Powered Security',
          featured: true
        }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud, 
          description: 'DevOps & Infrastructure',
          featured: true
        },
        { 
          name: 'IT Infrastructure', 
          href: '/services/it-infrastructure', 
          icon: Building, 
          description: 'Enterprise Infrastructure',
          featured: true
        },
        { 
          name: 'Digital Twin Platform', 
          href: '/services/digital-twin', 
          icon: Globe, 
          description: 'Virtual Replicas & Simulation',
          featured: true
        },
        { 
          name: 'IoT Edge Computing', 
          href: '/services/iot-edge-computing', 
          icon: Wifi, 
          description: 'Smart Device Networks',
          featured: true
        },
        { 
          name: 'Data Analytics', 
          href: '/services/data-analytics', 
          icon: BarChart3, 
          description: 'Business Intelligence & Insights',
          featured: true
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { 
          name: 'AI Cybersecurity Suite', 
          href: '/services/ai-cybersecurity-suite', 
          icon: Shield, 
          description: 'Advanced AI Security',
          featured: true
        },
        { 
          name: 'Zero Trust Network Access', 
          href: '/services/zero-trust-network-access', 
          icon: Lock, 
          description: 'Modern Security Architecture',
          featured: true
        },
        { 
          name: 'Security Headers & CSP', 
          href: '/services/security-headers-csp', 
          icon: Shield, 
          description: 'Web Security Hardening',
          featured: true
        },
        { 
          name: 'DSR Privacy Portal', 
          href: '/services/dsr-portal', 
          icon: Lock, 
          description: 'GDPR/CCPA Compliance',
          featured: true
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Atom, 
          description: 'Next-Gen Computational Power',
          featured: true
        },
        { 
          name: 'AI Quantum Hybrid Platform', 
          href: '/services/ai-quantum-hybrid-platform', 
          icon: Atom, 
          description: 'Quantum-AI Integration',
          featured: true
        },
        { 
          name: 'Space Technology', 
          href: '/services/space-tech', 
          icon: Rocket, 
          description: 'Space-Based Solutions',
          featured: true
        },
        { 
          name: 'Sustainable Technology', 
          href: '/services/sustainable-technology', 
          icon: Leaf, 
          description: 'Green Technology Solutions',
          featured: true
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      services: [
        { 
          name: 'Micro SaaS Products', 
          href: '/services/micro-saas', 
          icon: ShoppingCart, 
          description: 'AI automations with transparent pricing',
          featured: true
        },
        { 
          name: 'Micro CRM', 
          href: '/services/micro-crm', 
          icon: Users, 
          description: 'Customer Relationship Management',
          featured: true
        },
        { 
          name: 'Helpdesk Platform', 
          href: '/services/helpdesk', 
          icon: HelpCircle, 
          description: 'Customer Support System',
          featured: true
        },
        { 
          name: 'Website Analytics', 
          href: '/services/website-analytics', 
          icon: BarChart3, 
          description: 'Performance Tracking & Insights',
          featured: true
        }
      ]
    }
  ];

  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions/enterprise',
      icon: Building2,
      description: 'Large-scale business transformations',
      featured: true
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions/healthcare',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true
    },
    {
      name: 'Financial Solutions',
      href: '/solutions/financial',
      icon: TrendingUp,
      description: 'Fintech innovation & compliance',
      featured: true
    },
    {
      name: 'Government Solutions',
      href: '/solutions/government',
      icon: Shield,
      description: 'Public sector innovation',
      featured: false
    },
    {
      name: 'SMB Solutions',
      href: '/solutions/smb',
      icon: Building,
      description: 'Small to medium business growth',
      featured: false
    },
    {
      name: 'Startup Solutions',
      href: '/solutions/startup',
      icon: Rocket,
      description: 'Accelerate your startup growth',
      featured: false
    },
    {
      name: 'Manufacturing Solutions',
      href: '/solutions/manufacturing',
      icon: Factory,
      description: 'Industry 4.0 & Smart Manufacturing',
      featured: false
    },
    {
      name: 'Retail Solutions',
      href: '/solutions/retail',
      icon: ShoppingCart,
      description: 'E-commerce & Retail Innovation',
      featured: false
    }
  ];

  const resources = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpenIcon,
      description: 'Latest industry trends and insights',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: FileTextIcon,
      description: 'In-depth research and analysis',
      featured: true
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: UsersIcon,
      description: 'Expert-led learning sessions',
      featured: true
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: CodeIcon,
      description: 'Technical guides and APIs',
      featured: true
    },
    {
      name: 'FAQ & Support',
      href: '/faq',
      icon: HelpCircleIcon,
      description: 'Get help and answers',
      featured: true
    },
    {
      name: 'Pricing Guide 2025',
      href: '/pricing-guide-2025',
      icon: DollarSignIcon,
      description: 'Complete pricing information',
      featured: true
    },
    {
      name: 'Community',
      href: '/community',
      icon: UsersIcon2,
      description: 'Join our community',
      featured: false
    },
    {
      name: 'Developers',
      href: '/developers',
      icon: CodeIcon,
      description: 'Developer resources',
      featured: false
    },
    {
      name: 'Training & Certification',
      href: '/training',
      icon: Award,
      description: 'Professional development',
      featured: false
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Developers', href: '/developers', icon: Code },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpenIcon2 },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const AppHeader: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AppHeader</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default AppHeader;
