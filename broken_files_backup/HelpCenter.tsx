<<<<<<< HEAD
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
import React from 'react';
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
import { 
  HelpCircle, 
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import SEO from '../SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Search, BookOpen, MessageCircle, FileText, Users, Settings, HelpCircle, Mail } from 'lucide-react';
=======
import React, { useState } from 'react';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
import { Link } from 'react-router-dom';
import { 
>>>>>>> origin/main
  Search, 
  BookOpen, 
  MessageCircle, 
  Phone, 
<<<<<<< HEAD
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Users, 
  Settings, 
  Shield, 
========
import {
  HelpCircle,
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  Search,
  HelpCircle,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Video,
  Users,
  Settings,
  Shield,
import {
  Search,
  BookOpen,
  MessageCircle,
  FileText,
  Video,
  Headphones,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ExternalLink,
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Search,
  HelpCircle,
  BookOpen,
  Video,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Brain,
  Cpu,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Shield,
  Cloud,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Workflow,
  BarChart,
  PieChart,
  Monitor,
  HardDrive,
  Server,
  FileCheck,
  AlertTriangle,
  Search,
  BookOpen,
  Microscope,
  TestTube,
  Wifi,
  Signal,
  Smartphone,
  Car,
  Building,
  Factory,
  Hospital,
  ShoppingCart,
  HelpCircle,
  MessageCircle,
  FileText,
  Video,
  Book,
  Mail as MailIcon,
  CreditCard
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
  Zap, 
  Brain, 
  Cloud, 
  Lock, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  BarChart3, 
  Target, 
  Lightbulb, 
  Rocket, 
  Clock, 
========
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Building,
  CreditCard
} from 'lucide-react';
import React, { useState } from 'react';
import { Search, BookOpen, Users, Shield, CreditCard, Settings, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, MessageCircle, Phone, Mail, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, ArrowRight } from 'lucide-react';
export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
========
import { motion } from 'framer-motion';
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
import { motion } from 'framer-motion';
import { Search, BookOpen, MessageCircle, FileText, Video, Users, Phone, Mail, Clock, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';
const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Book, MessageCircle, Phone, Mail, FileText, Video, Download, ChevronDown, ChevronRight, Star, Clock, Users, HelpCircle, Zap, Shield, Settings, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';
const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

========
  HelpCircle,
  Lightbulb,
  Clock,
  Star,
  TrendingUp,
  Settings,
  Users,
  Globe,
  Shield,
  Zap
} from 'lucide-react';
export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaqs, setExpandedFaqs] = useState<Set<string>>(new Set());
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Rocket,
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/getting-started', description: 'Learn the basics of our platform' },
        { title: 'Creating Your First Project', path: '/help/first-project', description: 'Step-by-step guide to get started' },
        { title: 'Account Setup & Verification', path: '/help/account-setup', description: 'Complete your profile setup' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
    'talent-hiring': {
      title: 'Talent & Hiring',
      icon: Users,
      articles: [
        { title: 'Security Assessment Process', views: '3.5k', time: '9 min read' },
        { title: 'Compliance Framework Setup', views: '2.1k', time: '11 min read' },
        { title: 'Incident Response Procedures', views: '1.7k', time: '7 min read' },
        { title: 'Zero Trust Architecture Guide', views: '2.9k', time: '14 min read' }
      ]
    },
    'technical-support': {
      title: 'Technical Support',
      icon: HelpCircle,
      articles: [
        { title: 'Common Integration Issues', views: '4.2k', time: '6 min read' },
        { title: 'API Documentation', views: '3.8k', time: '20 min read' },
        { title: 'System Requirements', views: '2.6k', time: '5 min read' },
        { title: 'Performance Optimization', views: '1.8k', time: '13 min read' }
      icon: Brain,
      articles: [
        { title: 'AI Business Intelligence Guide', path: '/help/ai-bi-guide', description: 'Understanding AI-powered analytics' },
        { title: 'Quantum Neural Networks', path: '/help/quantum-neural', description: 'Working with quantum computing' },
        { title: 'AI Autonomous Systems', path: '/help/ai-autonomous', description: 'Setting up autonomous operations' }
      ]
    },
    'billing-payments': {
      title: 'Billing & Payments',
      icon: CreditCard,
      articles: [
        { title: 'Cloud Infrastructure Setup', path: '/help/cloud-setup', description: 'Deploy your cloud infrastructure' },
        { title: 'DevOps Best Practices', path: '/help/devops-practices', description: 'Optimize your development workflow' },
        { title: 'Security & Compliance', path: '/help/security-compliance', description: 'Ensure your systems are secure' }
      ]
    },
    'account-security': {
      title: 'Account & Security',
      icon: Shield,
      articles: [
        { title: 'Security Best Practices', path: '/help/security-practices', description: 'Protect your digital assets' },
        { title: 'Threat Detection & Response', path: '/help/threat-detection', description: 'Monitor and respond to threats' },
        { title: 'Compliance Guidelines', path: '/help/compliance-guidelines', description: 'Meet industry standards' }
      ]
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Solutions',
      icon: Building,
      articles: [
        { title: 'Enterprise Architecture', path: '/help/enterprise-arch', description: 'Design scalable solutions' },
        { title: 'Digital Transformation', path: '/help/digital-transformation', description: 'Modernize your business' },
        { title: 'Integration Services', path: '/help/integration-services', description: 'Connect your systems' }
      ]
    },
    {
      id: 'billing-support',
      title: 'Billing & Support',
      icon: CreditCard,
      articles: [
        { title: 'Pricing Plans', path: '/help/pricing-plans', description: 'Understand our pricing structure' },
        { title: 'Payment Methods', path: '/help/payment-methods', description: 'Accepted payment options' },
        { title: 'Billing FAQ', path: '/help/billing-faq', description: 'Common billing questions' }
      ]
    }
  } as const;
  const popularArticles = [
    'How to create your first account',
    'Understanding the marketplace',
    'Creating a talent profile',
    'Finding and hiring talent',
    'Payment and escrow system',
    'Account security best practices'
  ];
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768


========
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  const helpCategories = [
    {
  const popularArticles = [
    {
      title: 'Getting Started with Zion Tech Group',
      description: 'Complete guide to setting up your account and first project',
      category: 'Getting Started',
      readTime: '5 min read'
    },
    {
      title: 'Understanding AI Service Pricing',
      description: 'Learn about our pricing structure and cost optimization',
      category: 'Billing & Payments',
      readTime: '8 min read'
    },
    {
      title: 'Security Best Practices',
      description: 'Essential security measures for your data and applications',
      category: 'Account & Security',
      readTime: '10 min read'
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems',
      category: 'Technical Support',
      readTime: '6 min read'
    }
  ];
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  const helpCategories = [
    {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set([0, 1]));
  const toggleFaq = (index: number) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedFaqs(newExpanded);
  };
  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        'Welcome to Zion Tech Group',
        'Setting up your account',
        'First steps with our platform',
        'Understanding our services'
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      articles: [
        'AI Business Intelligence',
        'AI Marketing Automation',
        'AI HR & Recruitment',
        'AI Legal Tech Solutions'
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      articles: [
        'Quantum Neural Networks',
        'Quantum-Safe Security',
        'Quantum Computing Basics',
        'Quantum Applications'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        'SOC2 Compliance',
        'Security Best Practices',
        'Threat Detection',
        'Incident Response'
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        'Cloud Migration',
        'Network Setup',
        '5G Enterprise Solutions',
        'Asset Management'
      ]
    },
    {
      id: 'support',
      title: 'Support & Contact',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      articles: [
        'Contact Support',
        'Live Chat',
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 45 },
    { id: 'getting-started', name: 'Getting Started', icon: Play, count: 12 },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 15 },
    { id: 'technical', name: 'Technical Support', icon: Code, count: 18 },
    { id: 'billing', name: 'Billing & Account', icon: FileText, count: 8 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Settings, count: 10 }
  ];
  const popularArticles = [
    {
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  ChevronRight,
  FileText,
  Video,
  Users,
  Settings,
=======
  Mail, 
  FileText, 
  Video, 
  Users,
  Lightbulb,
>>>>>>> origin/main
  Shield,
  Zap,
  Cloud
} from 'lucide-react';
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

<<<<<<< HEAD
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
const HelpCenter = () => {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      description: 'New to Zion Tech Group? Start here',
      articles: [
        { title: 'How to Get Started', path: '/help/getting-started', description: 'Complete guide for new users' },
        { title: 'Account Setup', path: '/help/account-setup', description: 'Setting up your account' },
        { title: 'First Project', path: '/help/first-project', description: 'Creating your first project' },
        { title: 'Platform Overview', path: '/help/platform-overview', description: 'Understanding our platform' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      description: 'Help with AI and machine learning services',
      articles: [
        { title: 'AI Business Intelligence', path: '/help/ai-bi', description: 'Using AI analytics tools' },
        { title: 'AI Marketing Automation', path: '/help/ai-marketing', description: 'Setting up marketing automation' },
        { title: 'AI HR & Recruitment', path: '/help/ai-hr', description: 'AI-powered talent management' },
        { title: 'AI Legal Tech', path: '/help/ai-legal', description: 'Legal process automation' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance assistance',
      articles: [
        { title: 'Security Best Practices', path: '/help/security-best-practices', description: 'Keeping your data safe' },
        { title: 'Compliance Guidelines', path: '/help/compliance-guidelines', description: 'Meeting regulatory requirements' },
        { title: 'Threat Detection', path: '/help/threat-detection', description: 'Understanding security alerts' },
        { title: 'Incident Response', path: '/help/incident-response', description: 'What to do during security events' }
      ]
    },
    {
      title: 'Technical Support',
      icon: Settings,
      description: 'Technical issues and troubleshooting',
      articles: [
        { title: 'Common Issues', path: '/help/common-issues', description: 'Frequently encountered problems' },
        { title: 'API Documentation', path: '/help/api-docs', description: 'Integration and API usage' },
        { title: 'Performance Optimization', path: '/help/performance', description: 'Improving system performance' },
        { title: 'Backup & Recovery', path: '/help/backup-recovery', description: 'Data protection strategies' }
      ]
        'Emergency Contacts',
        'Support Hours'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];
  const quickActions = [
    { title: 'Contact Support', icon: MessageCircle, path: '/contact', color: 'from-blue-500 to-cyan-500' },
    { title: 'Live Chat', icon: MessageCircle, path: '/chat', color: 'from-green-500 to-emerald-500' },
    { title: 'Schedule Call', icon: Phone, path: '/schedule', color: 'from-purple-500 to-pink-500' },
    { title: 'Email Support', icon: Mail, path: 'mailto:kleber@ziontechgroup.com', color: 'from-orange-500 to-red-500' }
  ];
  const popularArticles = [
  const popularArticles = [
    { title: 'How to Set Up AI Business Intelligence', path: '/help/setup-ai-bi', category: 'AI Solutions' },
    { title: 'Cloud Infrastructure Best Practices', path: '/help/cloud-best-practices', category: 'Cloud & DevOps' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/security-checklist', category: 'Cybersecurity' },
    { title: 'Getting Started with Quantum Computing', path: '/help/quantum-getting-started', category: 'AI Solutions' }
  ];
  const supportChannels = [
    {
    { title: 'How to Implement AI in Your Business', path: '/help/ai-implementation', category: 'AI Services' },
    { title: 'Cybersecurity Compliance Checklist', path: '/help/cybersecurity-checklist', category: 'Cybersecurity' },
    { title: 'Cloud Migration Best Practices', path: '/help/cloud-migration', category: 'Technical Support' },
    { title: 'Setting Up Micro SAAS Solutions', path: '/help/micro-saas-setup', category: 'Getting Started' }
  ];
  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail, 
========
  Search,
  HelpCircle,
  BookOpen,
  Video,
  MessageCircle,
  Phone,
  Mail,
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  FileText,
  Download
} from 'lucide-react';
const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const categories = [
    {
      title: "Getting Started",
      icon: Lightbulb,
      articles: [
        { title: "Welcome to Zion Tech Group", path: "/help/getting-started" },
        { title: "Account Setup Guide", path: "/help/account-setup" },
        { title: "First Steps with Our Platform", path: "/help/first-steps" },
        { title: "Platform Overview", path: "/help/platform-overview" }
      ]
    },
    {
      title: "AI Solutions",
      icon: Target,
      articles: [
        { title: "AI Autonomous Systems Guide", path: "/help/ai-autonomous-systems" },
        { title: "Quantum Neural Networks", path: "/help/quantum-neural-networks" },
        { title: "AI Research Assistant", path: "/help/ai-research-assistant" },
        { title: "AI Asset Management", path: "/help/ai-asset-management" }
      ]
    },
    {
      title: "Services & Features",
      icon: Settings,
      articles: [
        { title: "Service Configuration", path: "/help/service-configuration" },
        { title: "API Documentation", path: "/help/api-documentation" },
        { title: "Integration Guides", path: "/help/integration-guides" },
        { title: "Feature Updates", path: "/help/feature-updates" }
      ]
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      articles: [
        { title: "Common Issues", path: "/help/common-issues" },
        { title: "Error Messages", path: "/help/error-messages" },
        { title: "Performance Optimization", path: "/help/performance" },
        { title: "Debugging Tools", path: "/help/debugging" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      articles: [
        { title: "Security Best Practices", path: "/help/security-best-practices" },
        { title: "SOC2 Compliance Guide", path: "/help/soc2-compliance" },
        { title: "Data Protection", path: "/help/data-protection" },
        { title: "Access Control", path: "/help/access-control" }
      ]
    },
    {
      title: "Billing & Support",
      icon: CreditCard,
      articles: [
        { title: "Billing FAQ", path: "/help/billing-faq" },
        { title: "Payment Methods", path: "/help/payment-methods" },
        { title: "Support Plans", path: "/help/support-plans" },
        { title: "Refund Policy", path: "/help/refund-policy" }
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

=======
>>>>>>> origin/main
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
const HelpCenter: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      description: 'Learn the basics and get up and running quickly',
      icon: '🚀',
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/welcome' },
        { title: 'Setting Up Your Account', path: '/help/setup' },
        { title: 'First Steps Guide', path: '/help/first-steps' },
        { title: 'Platform Overview', path: '/help/platform-overview' }
      ]
    },
    {
      id: 'services',
      name: 'Services',
      description: 'Understanding our technology solutions and services',
      icon: '🔧',
      articles: [
        { title: 'AI Solutions Guide', path: '/help/ai-solutions' },
        { title: 'Cloud & DevOps Setup', path: '/help/cloud-devops' },
        { title: 'Cybersecurity Best Practices', path: '/help/cybersecurity' },
        { title: 'Digital Transformation Process', path: '/help/digital-transformation' }
      ]
    },
    {
      id: 'account-billing',
      name: 'Account & Billing',
      description: 'Manage your account, billing, and subscriptions',
      icon: '💳',
      articles: [
        { title: 'Account Settings', path: '/help/account-settings' },
        { title: 'Billing & Invoices', path: '/help/billing' },
        { title: 'Subscription Management', path: '/help/subscriptions' },
        { title: 'Payment Methods', path: '/help/payment-methods' }
      ]
    },
    {
      id: 'technical-support',
      name: 'Technical Support',
      description: 'Get help with technical issues and troubleshooting',
      icon: '🛠️',
      articles: [
        { title: 'Common Issues & Solutions', path: '/help/common-issues' },
        { title: 'API Documentation', path: '/help/api-docs' },
        { title: 'Integration Guides', path: '/help/integrations' },
        { title: 'Performance Optimization', path: '/help/performance' }
      ]
    },
    {
      id: 'security-privacy',
      name: 'Security & Privacy',
      description: 'Learn about our security measures and privacy policies',
      icon: '🔒',
      articles: [
        { title: 'Security Features', path: '/help/security-features' },
        { title: 'Data Privacy', path: '/help/data-privacy' },
        { title: 'Compliance Information', path: '/help/compliance' },
        { title: 'Security Best Practices', path: '/help/security-best-practices' }
      ]
    },
    {
      id: 'training-resources',
      name: 'Training & Resources',
      description: 'Educational materials and learning resources',
      icon: '📚',
      articles: [
        { title: 'Video Tutorials', path: '/help/video-tutorials' },
        { title: 'Webinar Recordings', path: '/help/webinars' },
        { title: 'White Papers', path: '/help/white-papers' },
        { title: 'Training Programs', path: '/help/training' }
=======
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I get started with Zion Tech Group services?",
          answer: "Getting started is easy! Simply contact us through our contact form, call us at +1 (302) 464-0950, or email us at info@ziontechgroup.com. Our team will schedule a consultation to understand your needs and recommend the best solutions."
        },
        {
          question: "What information do I need to provide for a consultation?",
          answer: "For an initial consultation, it's helpful to have information about your current technology infrastructure, business goals, challenges you're facing, and any specific requirements or constraints. We'll guide you through the process."
        }
      ]
    },
    {
      title: "Services & Pricing",
      icon: Cloud,
      questions: [
        {
          question: "What services does Zion Tech Group offer?",
          answer: "We offer a comprehensive range of technology services including AI solutions, cloud migration, cybersecurity, digital transformation, web development, data analytics, and more. Each service is tailored to meet your specific business needs."
        },
        {
          question: "How is pricing structured for your services?",
          answer: "Our pricing varies based on the scope and complexity of the project. We offer hourly rates, project-based pricing, and ongoing support packages. We'll provide a detailed quote after understanding your requirements."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: Shield,
      questions: [
        {
          question: "What kind of technical support do you provide?",
          answer: "We provide comprehensive technical support including 24/7 monitoring, emergency response, regular maintenance, and ongoing optimization. Our support team is available through multiple channels including phone, email, and our support portal."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We prioritize support requests based on severity. Critical issues receive immediate attention, while standard requests are typically addressed within 4-8 hours during business hours."
        }
<<<<<<< HEAD
      ]
    },
    {
      title: "Billing & Pricing",
      icon: DocumentTextIcon,
      questions: [
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing models including subscription-based services, project-based pricing, and enterprise licensing. We work with you to find the most cost-effective solution for your needs."
        },
        {
          question: "Do you offer volume discounts?",
          answer: "Yes, we offer volume discounts for enterprise clients and organizations implementing multiple services. Contact our sales team to discuss custom pricing options."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely through our payment systems."
        }
      ]
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  BookOpen,
  Video,
  FileText,
  Users,
  Zap,
  Shield,
  Globe,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Download,
  Play,
  Star,
  CheckCircle
} from 'lucide-react';
const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 0 },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain, count: 15 },
    { id: 'quantum', name: 'Quantum Technology', icon: Zap, count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 12 },
    { id: 'infrastructure', name: 'IT Infrastructure', icon: Cpu, count: 10 },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Network, count: 9 },
    { id: '5g', name: '5G Solutions', icon: Network, count: 6 },
    { id: 'general', name: 'General Support', icon: Users, count: 20 }
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
========
      name: 'Getting Started',
      description: 'Learn the basics and set up your account',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      articleCount: 12
    },
    {
      id: 'ai-workflows',
      name: 'AI Workflows',
      description: 'Create and manage automated workflows',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      articleCount: 18
    },
    {
      id: 'integrations',
      name: 'Integrations',
      description: 'Connect with your favorite tools and services',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      articleCount: 25
    },
    {
      id: 'billing',
      name: 'Billing & Plans',
      description: 'Manage your subscription and billing',
      icon: CreditCard,
      color: 'from-orange-500 to-red-500',
      articleCount: 8
    },
    {
      id: 'security',
      name: 'Security & Privacy',
      description: 'Learn about our security measures',
      icon: Shield,
      color: 'from-indigo-500 to-blue-500',
      articleCount: 15
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      description: 'Common issues and their solutions',
      icon: HelpCircle,
      color: 'from-yellow-500 to-orange-500',
      articleCount: 22
    }
  ];
  const popularArticles = [
    {
      id: 'getting-started-1',
      title: 'How to Create Your First AI Workflow',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '2.4k',
      helpful: '98%',
      excerpt: 'Step-by-step guide to creating your first automated workflow using our AI-powered platform.'
    },
    {
      id: 'ai-workflows-1',
      title: 'Understanding AI Decision Trees',
      category: 'AI Workflows',
      readTime: '8 min read',
      views: '1.8k',
      helpful: '95%',
      excerpt: 'Learn how our AI makes decisions and how to optimize your workflows for better results.'
    },
    {
      id: 'integrations-1',
      title: 'Connecting to Salesforce',
      category: 'Integrations',
      readTime: '6 min read',
      views: '1.6k',
      helpful: '92%',
      excerpt: 'Complete guide to integrating your workflows with Salesforce CRM for seamless data flow.'
    },
    {
      id: 'troubleshooting-1',
      title: 'Workflow Not Triggering? Here\'s Why',
      category: 'Troubleshooting',
      readTime: '4 min read',
      views: '1.9k',
      helpful: '96%',
      excerpt: 'Common reasons why workflows might not trigger and how to fix them quickly.'
    }
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  ];
  const faqs = [
    {
      id: 1,
      category: 'ai',
      question: "How does Zion Tech Group's AI solutions differ from competitors?",
      answer: "Our AI solutions are built on proprietary algorithms and quantum-enhanced processing capabilities. We combine traditional machine learning with quantum computing principles, resulting in faster processing, more accurate predictions, and superior scalability. Our AI systems are also designed with explainability and ethical AI principles at their core.",
      tags: ['AI', 'Machine Learning', 'Quantum Computing']
    },
    {
      id: 2,
      category: 'ai',
      question: "What industries can benefit from your AI autonomous systems?",
      answer: "Our AI autonomous systems are designed for cross-industry applications. We've successfully implemented solutions in healthcare (patient monitoring and diagnosis), manufacturing (predictive maintenance and quality control), financial services (fraud detection and risk assessment), retail (inventory management and customer service), and government (data analysis and process automation).",
      tags: ['AI', 'Autonomous Systems', 'Industry Solutions']
    },
    {
      id: 3,
      category: 'quantum',
      question: "How secure are quantum neural networks against cyber threats?",
      answer: "Quantum neural networks provide unprecedented security through quantum entanglement and superposition principles. They're resistant to traditional cryptographic attacks and can detect intrusion attempts in real-time. Our quantum systems also include quantum-safe encryption protocols that remain secure even against future quantum computers.",
      tags: ['Quantum Computing', 'Cybersecurity', 'Neural Networks']
    },
    {
      id: 4,
      category: 'cybersecurity',
      question: "What compliance standards does your SOC2 automation support?",
      answer: "Our SOC2 compliance automation covers all Trust Service Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy. We support SOC2 Type I and Type II certifications, with automated evidence collection, continuous monitoring, and real-time compliance reporting. Our system integrates with major compliance frameworks including ISO 27001, NIST, and GDPR.",
      tags: ['SOC2', 'Compliance', 'Automation']
    },
    {
      id: 5,
      category: 'infrastructure',
      question: "How do you ensure 99.99% uptime for 5G enterprise solutions?",
      answer: "Our 5G enterprise solutions achieve 99.99% uptime through redundant network architecture, AI-powered predictive maintenance, real-time monitoring, and automated failover systems. We use edge computing to reduce latency and implement load balancing across multiple network nodes. Our infrastructure includes backup power systems and geographically distributed data centers.",
      tags: ['5G', 'Network Infrastructure', 'Uptime']
    },
    {
      id: 6,
      category: 'cloud',
      question: "What cloud platforms do you support for migration?",
      answer: "We support migration to and from all major cloud platforms including AWS, Azure, Google Cloud Platform, IBM Cloud, and Oracle Cloud. Our cloud migration services include automated assessment tools, cost optimization analysis, security compliance verification, and seamless data migration with zero downtime. We also provide hybrid cloud solutions and multi-cloud management.",
      tags: ['Cloud Migration', 'Multi-Cloud', 'DevOps']
    },
    {
      id: 7,
      category: 'general',
      question: "How quickly can you respond to support requests?",
      answer: "We provide 24/7 support with guaranteed response times: Critical issues (system down) - 15 minutes, High priority (major functionality affected) - 1 hour, Medium priority (minor issues) - 4 hours, Low priority (general questions) - 24 hours. Our support team includes certified engineers and AI-powered diagnostic tools for faster resolution.",
      tags: ['Support', 'Response Time', '24/7']
    },
    {
      id: 8,
      category: 'general',
      question: "Do you offer training for our team on new technologies?",
      answer: "Yes, we provide comprehensive training programs including hands-on workshops, certification courses, and ongoing support. Our training covers AI implementation, quantum computing basics, cybersecurity best practices, and cloud infrastructure management. We also offer customized training programs tailored to your specific technology stack and business needs.",
      tags: ['Training', 'Certification', 'Workshops']
    }
  ];

  const resources = [
    {
      title: "AI Implementation Guide",
      description: "Step-by-step guide to implementing AI solutions in your organization",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#",
      rating: 4.8,
      downloads: "2.3k"
    },
    {
      title: "Quantum Computing Primer",
      description: "Introduction to quantum computing and its business applications",
      type: "Video",
      icon: Video,
      downloadUrl: "#",
      rating: 4.9,
      downloads: "1.8k"
    },
    {
      title: "Cybersecurity Best Practices",
      description: "Comprehensive security guidelines for enterprise environments",
      type: "PDF",
      icon: Shield,
      downloadUrl: "#",
      rating: 4.7,
      downloads: "3.1k"
    },
    {
      title: "5G Network Planning",
      description: "Strategic guide for 5G enterprise network implementation",
      type: "Interactive",
      icon: Network,
      downloadUrl: "#",
      rating: 4.6,
      downloads: "1.2k"
    }
  ];

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our AI-powered support team",
      icon: MessageCircle,
      responseTime: "Immediate",
      availability: "24/7",
      action: "Start Chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Phone Support",
      icon: Phone,
      description: "Speak directly with our technical experts",
      icon: Phone,
      responseTime: "< 15 min",
      availability: "24/7",
      action: "Call Now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Email Support",
      description: "Detailed technical assistance via email",
      icon: Mail,
      responseTime: "< 4 hours",
      availability: "24/7",
      action: "Send Email",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Getting Started with AI Autonomous Systems",
      category: "Getting Started",
      readTime: "5 min read",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Setting Up Your First Quantum Neural Network",
      category: "AI Solutions",
      readTime: "8 min read",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Configuring SOC2 Compliance Automation",
      category: "Technical Support",
      readTime: "12 min read",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "5G Enterprise Network Setup Guide",
      category: "Technical Support",
      readTime: "10 min read",
      icon: Network,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "AI Research Assistant Best Practices",
      category: "AI Solutions",
      readTime: "6 min read",
      icon: Search,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Troubleshooting Common Issues",
      category: "Troubleshooting",
      readTime: "7 min read",
      icon: Settings,
      color: "from-orange-500 to-red-500"
    }
  ];
  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      responseTime: "< 2 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send detailed questions and get comprehensive answers",
      availability: "24/7",
      responseTime: "< 4 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Video Calls",
      description: "Screen sharing and visual troubleshooting",
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Scheduled",
      color: "from-orange-500 to-red-500"
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
    }
  ];
========
      id: 'faq-1',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and we\'ll send you a secure link to reset your password. The link expires in 1 hour for security reasons.',
      category: 'account'
    },
    {
      id: 'faq-2',
      question: 'Can I export my workflow data?',
      answer: 'Yes, you can export your workflow data in multiple formats including CSV, JSON, and Excel. Go to your workflow dashboard, select the workflow, and click the export button. You can choose the date range and format for your export.',
      category: 'data'
    },
    {
      id: 'faq-3',
      question: 'How do I add team members to my account?',
      answer: 'To add team members, go to Settings > Team Management. Click "Invite Member" and enter their email address. They\'ll receive an invitation email with a secure link to join your team. You can assign different permission levels to each member.',
      category: 'team'
    },
    {
      id: 'faq-4',
      question: 'What happens if I exceed my monthly workflow limit?',
      answer: 'If you exceed your monthly workflow limit, you\'ll receive a notification. You can either upgrade your plan for more workflows or wait until the next billing cycle. Existing workflows continue to run normally.',
      category: 'billing'
    },
    {
      id: 'faq-5',
      question: 'How secure is my data?',
      answer: 'Your data is protected with enterprise-grade security including AES-256 encryption, SOC2 compliance, and regular security audits. We never share your data with third parties and all data transmission is encrypted using TLS 1.3.',
      category: 'security'
    },
    {
      id: 'faq-6',
      question: 'Can I schedule workflows to run at specific times?',
      answer: 'Yes, you can schedule workflows to run at specific times, on specific days, or based on custom intervals. Use the scheduling feature in the workflow editor to set up recurring or one-time schedules.',
      category: 'workflows'
    }
  ];
  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Usually within 2 minutes',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      availability: '9 AM - 6 PM EST',
      responseTime: 'Immediate',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      availability: '24/7',
      responseTime: 'Varies',
      color: 'from-orange-500 to-red-500'
    }
  ];
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  Settings,
  Shield,
  Brain,
  Cpu,
  Network
} from 'lucide-react';
export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const categories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      description: 'New to Zion Tech Group? Start here'
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      description: 'AI and machine learning services'
    },
    {
      id: 'technical-support',
      title: 'Technical Support',
      icon: Settings,
      color: 'from-green-500 to-emerald-500',
      description: 'Technical issues and troubleshooting'
    },
    {
      id: 'billing',
      title: 'Billing & Pricing',
      icon: FileText,
      color: 'from-orange-500 to-yellow-500',
      description: 'Pricing, billing, and payment questions'
    },
    {
      id: 'security',
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      description: 'Security features and compliance'
    },
    {
      id: 'integrations',
      title: 'Integrations',
      icon: Network,
      color: 'from-indigo-500 to-purple-500',
      description: 'Third-party integrations and APIs'
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
  Mail, 
========
  Mail,
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  FileText,
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Star,
  Clock,
  Users,
  Zap,
  Shield,
  Brain,
  Building
} from 'lucide-react';
const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

=======
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
=======
>>>>>>> origin/main
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      articles: [
        "Creating Your First Project",
        "Setting Up Your Environment",
        "Understanding the Dashboard",
        "First Steps with AI Models"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Master AI tools and machine learning features",
      articles: [
        "Training Custom Models",
        "Data Preparation Guidelines",
        "Model Optimization Tips",
        "API Integration Guide"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Keep your data safe and compliant",
      articles: [
        "Security Best Practices",
        "Data Privacy Guidelines",
        "Compliance Standards",
        "Access Control Setup"
      ]
    },
    {
      title: "Billing & Account",
      description: "Manage your subscription and billing",
      articles: [
        "Understanding Pricing",
        "Upgrading Your Plan",
        "Payment Methods",
        "Invoice Management"
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
      ]
    }
  ];
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

<<<<<<< HEAD
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group's AI solutions?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and provide a customized implementation plan. Our experts will guide you through the entire process from setup to optimization.",
      category: "Getting Started"
    },
    {
      id: 2,
      question: "What makes your AI solutions different from competitors?",
      answer: "Our AI solutions stand out through our proprietary quantum neural network technology, autonomous business operations capabilities, and industry-specific customization. We combine cutting-edge research with practical business applications, ensuring measurable ROI and long-term success for our clients.",
      category: "AI Solutions"
    },
    {
      id: 3,
      question: "How secure are your cybersecurity solutions?",
      answer: "Security is our top priority. We implement quantum-safe encryption, zero-trust architecture, and continuous threat monitoring. Our solutions are SOC2 compliant and regularly audited by third-party security experts. We also provide 24/7 security monitoring and incident response.",
      category: "Cybersecurity"
    },
    {
      id: 4,
      question: "What support do you provide after implementation?",
      answer: "We provide comprehensive post-implementation support including 24/7 technical support, regular maintenance updates, performance optimization, and ongoing training for your team. Our success managers work closely with you to ensure continued success and ROI.",
      category: "Support"
    },
    {
      id: 5,
      question: "Can your solutions integrate with existing systems?",
      answer: "Yes! Our solutions are designed with open architecture and API-first approach, making integration seamless with your existing systems. We provide custom integration services and ensure minimal disruption to your current operations during implementation.",
      category: "Integration"
    },
    {
      id: 6,
      question: "What industries do you specialize in?",
      answer: "We serve a wide range of industries including healthcare, financial services, manufacturing, retail, government, and technology. Our solutions are tailored to meet industry-specific challenges and compliance requirements while maintaining flexibility for customization.",
      category: "Industries"
    }
  ];
  const filteredFAQs = searchQuery
    ? faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;
  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-500',
      available: true
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-500',
      available: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-500',
      available: true
    },
    {
      title: 'Video Call',
      description: 'Schedule a screen sharing session',
      icon: Video,
      action: 'Schedule Call',
      color: 'from-orange-500 to-red-500',
      available: true
    }
  ];
  const resources = [
    {
      title: 'Product Documentation',
      description: 'Comprehensive guides and API references',
      icon: FileText,
      link: '/docs',
      type: 'Documentation'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
      type: 'Tutorials'
    },
    {
      title: 'Download Center',
      description: 'SDKs, tools, and resources',
      icon: Download,
      link: '/downloads',
      type: 'Downloads'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users',
      icon: Users,
      link: '/community',
      type: 'Community'
    }
  ];
  const faqs = [
    {
      id: 1,
      question: "How do I get started with Zion Tech Group's AI services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best AI solutions for your business. Our team will guide you through the entire onboarding process.",
      category: 'getting-started'
    },
    {
      id: 2,
      question: "What AI services do you offer?",
      answer: "We offer a comprehensive range of AI services including AI autonomous systems, machine learning solutions, natural language processing, computer vision, predictive analytics, and custom AI development. Each service is tailored to meet your specific business requirements.",
      category: 'ai-services'
    },
    {
      id: 3,
      question: "How secure are your AI solutions?",
      answer: "Security is our top priority. All our AI solutions include enterprise-grade security features, SOC2 compliance, encryption at rest and in transit, and regular security audits. We follow industry best practices and comply with all relevant security standards.",
      category: 'security'
    },
    {
      id: 4,
      question: "What is your pricing structure?",
      answer: "Our pricing is transparent and flexible. We offer subscription-based models, project-based pricing, and custom enterprise solutions. Pricing depends on the scope of services, complexity, and duration. Contact us for a personalized quote.",
      category: 'billing'
    },
    {
      id: 5,
      question: "Do you provide technical support?",
      answer: "Yes, we provide 24/7 technical support for all our services. Our support team includes AI experts, engineers, and technical specialists. We offer multiple support channels including phone, email, chat, and dedicated support portals.",
      category: 'technical-support'
    },
    {
      id: 6,
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integrations with existing enterprise systems. Our team will assess your current infrastructure and design integration solutions that work with your existing tools and workflows.",
      category: 'integrations'
    },
    {
      id: 7,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, technology, and government. Our solutions are adaptable and can be customized for any industry-specific requirements.",
      category: 'getting-started'
    },
    {
      id: 8,
      question: "How long does implementation take?",
      answer: "Implementation timelines vary depending on the complexity of the solution. Simple AI integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      category: 'technical-support'
    }
  ];
  const filteredFaqs = activeCategory
    ? faqs.filter(faq => faq.category === activeCategory)
    : faqs;
  const searchResults = searchQuery
    ? faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides and demos",
      link: "/tutorials",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "SDKs, tools, and sample code",
      link: "/downloads",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and developers",
      link: "/community",
      color: "from-orange-500 to-red-500"
    }
  ];
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Essential information to begin using our services',
      articles: [
        {
          title: 'How to Set Up Your Account',
          description: 'Step-by-step guide to create and configure your Zion Tech Group account',
          readTime: '5 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'First Steps with AI Solutions',
          description: 'Quick start guide for implementing AI-powered solutions',
          readTime: '8 min read',
          difficulty: 'Beginner'
        },
        {
          title: 'Understanding Quantum Technology',
          description: 'Introduction to quantum computing and its applications',
          readTime: '12 min read',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Autonomous Systems',
      icon: MessageCircle,
      description: 'Support for AI-powered services and autonomous systems',
      articles: [
        {
          title: 'AI Autonomous Systems Setup',
          description: 'Complete setup guide for autonomous AI systems',
          readTime: '15 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Training Your AI Models',
          description: 'Best practices for training and optimizing AI models',
          readTime: '20 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'AI Research Assistant Usage',
          description: 'How to effectively use the AI research assistant',
          readTime: '10 min read',
          difficulty: 'Intermediate'
        }
      ]
    },
    {
      id: 'quantum-technology',
      title: 'Quantum Technology',
      icon: FileText,
      description: 'Support for quantum computing and neural networks',
      articles: [
        {
          title: 'Quantum Neural Network Basics',
          description: 'Understanding quantum neural network fundamentals',
          readTime: '18 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Quantum Computing Applications',
          description: 'Real-world applications and use cases',
          readTime: '15 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Quantum Security Implementation',
          description: 'Implementing quantum-safe security measures',
          readTime: '25 min read',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      icon: CheckCircle,
      description: 'Security best practices and compliance guidance',
      articles: [
        {
          title: 'SOC2 Compliance Guide',
          description: 'Complete guide to SOC2 compliance automation',
          readTime: '30 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Security Best Practices',
          description: 'Essential security measures for your organization',
          readTime: '12 min read',
          difficulty: 'Intermediate'
        },
        {
          title: 'Threat Detection Setup',
          description: 'Setting up advanced threat detection systems',
          readTime: '20 min read',
          difficulty: 'Advanced'
        }
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      icon: Users,
      description: 'Infrastructure setup and management support',
      articles: [
        {
          title: '5G Network Configuration',
          description: 'Setting up enterprise 5G network infrastructure',
          readTime: '25 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step cloud migration process',
          readTime: '35 min read',
          difficulty: 'Advanced'
        },
        {
          title: 'DevOps Automation Setup',
          description: 'Implementing automated DevOps processes',
          readTime: '20 min read',
          difficulty: 'Intermediate'
        }
      ]
    }
  ];
  const popularArticles = [
    {
      title: 'Quick Troubleshooting Guide',
      description: 'Common issues and their solutions',
      views: '2.5k',
      category: 'General'
    },
    {
      title: 'API Integration Examples',
      description: 'Code examples for integrating our services',
      views: '1.8k',
      category: 'Development'
    },
    {
      title: 'Performance Optimization Tips',
      description: 'Best practices for optimal system performance',
      views: '1.2k',
      category: 'Performance'
    }
  ];
  const supportChannels = [
    {
      id: 7,
      question: "How do you ensure data privacy and compliance?",
      answer: "We implement comprehensive data protection measures including data encryption, access controls, audit logging, and compliance frameworks. Our solutions are designed to meet regulatory requirements across industries and jurisdictions.",
      category: 'security',
      tags: ['Data Privacy', 'Compliance', 'Encryption']
    }
  ];
  const filteredHelp = helpCategories.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

========
  const toggleFaq = (faqId: string) => {
    const newExpanded = new Set(expandedFaqs);
    if (newExpanded.has(faqId)) {
      newExpanded.delete(faqId);
    } else {
      newExpanded.add(faqId);
    }
    setExpandedFaqs(newExpanded);
  };
  const filteredCategories = selectedCategory === 'all'
    ? categories
    : categories.filter(cat => cat.id === selectedCategory);
  const filteredArticles = popularArticles.filter(article =>
    selectedCategory === 'all' || article.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Find answers to your questions, learn how to use our platform, and get the support you need.
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768


========
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to common questions, learn how to use our platform,
              and get support when you need it most.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-md hover:from-cyan-400 hover:to-blue-500 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              How Can We
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Help You?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Find answers to your questions, get technical support, and access comprehensive
              resources to make the most of our AI-powered solutions.
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support Center
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, get technical support, and learn how to make the most of Zion Tech Group's innovative solutions.
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Find answers, get support, and learn how to make the most of our innovative solutions
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: BookOpen,
      responseTime: "Instant",
      availability: "Always",
      action: "Browse Docs",
      color: "from-orange-500 to-red-500"
    }
  ];
  const filteredFaqs = faqs.filter(faq =>
    activeCategory === 'all' || faq.category === activeCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Help?</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, access helpful resources, and get the support you need
              to make the most of Zion Tech Group's innovative solutions.
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              How can we <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">help you?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Find answers to common questions, explore tutorials, and get the support you need to succeed with Zion Tech Group.
            </p>
            {/* Search Bar */}
                  placeholder="Search for help articles, guides, and tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Search for help articles, tutorials, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 backdrop-blur-sm text-lg"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      action: 'Start Chat',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      action: 'Call Now',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      action: 'Send Email',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and references',
      icon: BookOpen,
      action: 'Browse Docs',
      color: 'from-orange-500 to-red-600'
    }
  ];
  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need.
          </p>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
  const filteredCategories = Object.entries(helpCategories).filter(([key, category]) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
    category.articles.some(article => 
=======
<<<<<<< HEAD
<<<<<<< HEAD
  const popularArticles = [
    { title: 'How to Get Started with AI Solutions', category: 'Services', path: '/help/ai-solutions' },
    { title: 'Understanding Cloud Migration', category: 'Services', path: '/help/cloud-migration' },
    { title: 'Cybersecurity Best Practices', category: 'Security & Privacy', path: '/help/cybersecurity' },
    { title: 'Billing and Payment FAQ', category: 'Account & Billing', path: '/help/billing-faq' },
    { title: 'API Integration Guide', category: 'Technical Support', path: '/help/api-integration' }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? helpCategories 
    : helpCategories.filter(cat => cat.id === selectedCategory);

  const filteredArticles = helpCategories.flatMap(cat => cat.articles)
    .filter(article => 
>>>>>>> origin/main
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

========
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
<<<<<<< HEAD
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Help Center</h1>
              <p className="text-xl text-zion-slate-light">Find answers to your questions and get the support you need</p>
            </div>
          </div>
          {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
  Mail,
  ArrowRight,
  ChevronDown,
  FileText,
  Video,
  Download,
  Users
} from 'lucide-react';
export default function HelpCenter() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      faqs: [
        {
          question: 'How do I get started with Zion Tech Group services?',
          answer: 'Getting started is easy! Simply contact our team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions.'
        },
        {
          question: 'What services do you offer for small businesses?',
          answer: 'We offer a comprehensive range of services including AI solutions, cybersecurity, cloud infrastructure, and custom software development tailored specifically for small and medium businesses.'
        },
        {
          question: 'How long does implementation typically take?',
          answer: 'Implementation timelines vary depending on the complexity of your project. Simple solutions can be deployed in weeks, while complex enterprise systems may take several months. We\'ll provide a detailed timeline during our initial consultation.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: MessageCircle,
      faqs: [
        {
          question: 'How can I get technical support?',
          answer: 'We provide 24/7 technical support through multiple channels: phone, email, live chat, and our support portal. Premium customers also have access to dedicated support engineers.'
        },
        {
          question: 'What is your response time for support tickets?',
          answer: 'We prioritize support tickets based on severity. Critical issues are addressed within 1 hour, high priority within 4 hours, and standard issues within 24 hours during business days.'
        },
        {
          question: 'Do you provide remote support?',
          answer: 'Yes, we offer remote support for most technical issues. Our engineers can securely access your systems (with your permission) to diagnose and resolve problems quickly.'
        }
      ]
    },
    {
      title: 'Billing & Pricing',
      icon: FileText,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All payments are processed securely through our payment partners.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day satisfaction guarantee for most services. If you\'re not completely satisfied, we\'ll work to resolve the issue or provide a full refund.'
        },
        {
          question: 'Can I change my plan mid-contract?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we\'ll prorate any adjustments.'
        }
      ]
    }
  ];
  const helpResources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      link: '/docs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      icon: Video,
      link: '/tutorials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Download Center',
      description: 'Software, tools, and resources',
      icon: Download,
      link: '/downloads',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: Users,
      link: '/community',
      color: 'from-orange-500 to-yellow-500'
    }
  ];
  const supportChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our experts',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      availability: '24/7',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed inquiries',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Live Chat',
      description: 'Get instant help online',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Business hours',
      color: 'from-purple-500 to-pink-500'
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle, count: 50 },
    { id: 'getting-started', name: 'Getting Started', icon: Rocket, count: 12 },
    { id: 'ai-solutions', name: 'AI Solutions', icon: Brain, count: 15 },
    { id: 'technical', name: 'Technical Support', icon: Settings, count: 18 },
    { id: 'billing', name: 'Billing & Account', icon: CreditCard, count: 8 }
  ];
  const faqs = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business.",
      category: "getting-started",
      tags: ["onboarding", "consultation", "setup"]
    },
    {
      question: "What AI solutions do you offer for enterprise businesses?",
      answer: "We offer comprehensive AI solutions including autonomous business operations, AI-powered asset management, quantum neural networks, and research assistants. Each solution is tailored to your specific industry and business needs.",
      category: "ai-solutions",
      tags: ["AI", "enterprise", "automation"]
    },
    {
      question: "How secure are your solutions?",
      answer: "Security is our top priority. All our solutions include bank-grade encryption, SOC2 compliance automation, and advanced threat detection. We maintain 99.9% security uptime across all deployments.",
      category: "technical",
      tags: ["security", "compliance", "encryption"]
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary based on solution complexity and scope. Simple solutions can be deployed in 2-4 weeks, while complex enterprise implementations typically take 8-12 weeks. We'll provide a detailed timeline during consultation.",
      category: "getting-started",
      tags: ["implementation", "timeline", "deployment"]
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes! We provide 24/7 support, regular maintenance updates, and continuous optimization. Our team monitors your systems proactively and ensures optimal performance at all times.",
      category: "technical",
      tags: ["support", "maintenance", "24/7"]
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve multiple industries including manufacturing, healthcare, financial services, retail, technology, and energy. Our solutions are designed to address industry-specific challenges and compliance requirements.",
      category: "ai-solutions",
      tags: ["industries", "specialization", "expertise"]
    }
  ];
  const contactMethods = [
    {
      title: "Live Chat",
      description: "Get instant help from our AI-powered support team",
      icon: MessageCircle,
      action: "Start Chat",
      available: "24/7"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message and get a response within 4 hours",
      icon: MailIcon,
      action: "Send Email",
      available: "Business Hours"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: Phone,
      action: "Call Now",
      available: "9 AM - 6 PM EST"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and technical documentation",
      icon: Book,
      action: "Browse Docs",
      available: "Always Available"
    }
  ];
  const filteredFAQs = faqs.filter(faq =>
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );
  return (
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400 transition-colors text-lg"
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
========
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle, BookOpen, Video, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner and fill out the registration form with your email, password, and basic information. You'll receive a verification email to activate your account."
    },
    {
      question: "How do I post a job or service?",
      answer: "After logging in, go to the 'Post Job' or 'Publish' section. Fill out the required details including title, description, budget, and requirements. Submit for review and approval."
    },
    {
      question: "How does the AI matching work?",
      answer: "Our AI analyzes your requirements and matches you with the best-suited talent or services based on skills, experience, availability, and past performance. Use the AI Matcher tool for optimal results."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform with escrow protection for your safety."
    },
    {
      question: "How do I resolve disputes?",
      answer: "If you encounter issues, first try to resolve them directly with the other party. If that's not possible, contact our support team who will mediate and help find a fair resolution."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your personal and financial information. We never share your data with third parties without your consent."
    }
  ];
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      icon: BookOpen,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/10",
      href: "/help/getting-started"
    },
    {
      title: "Account Management",
      description: "Manage your profile and settings",
      icon: Users,
      color: "text-zion-purple",
      bgColor: "bg-zion-purple/10",
      href: "/help/account"
    },
    {
      title: "Marketplace Guide",
      description: "How to buy and sell on our platform",
      icon: FileText,
      color: "text-zion-green",
      bgColor: "bg-zion-green/10",
      href: "/help/marketplace"
    },
    {
      title: "AI Tools",
      description: "Maximize your use of our AI features",
      icon: Video,
      color: "text-zion-orange",
      bgColor: "bg-zion-orange/10",
      href: "/help/ai-tools"
    }
  ];
  return (
    <>
      <SEO
        title="Help Center | Zion Tech Group"
        description="Get help and support for using the Zion Tech Group platform. Find answers to common questions and learn how to use our features."
        canonical="https://ziontechgroup.com/help"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions and learn how to make the most of our platform
            </p>
          </div>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
              />
            </div>
          </div>
    <>
      <SEOHead
        customData={{
          title: "Help Center - Zion Tech Group",
          description: "Get help and support for all Zion Tech Group services. Find answers to frequently asked questions, access documentation, and contact our support team.",
          keywords: ["help center", "support", "FAQ", "documentation", "contact support", "customer service", "technical support"],
          type: "website",
          url: "https://ziontechgroup.com/help"
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Help Center
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-4xl mx-auto">
                Get the help you need with our comprehensive support resources, documentation, and expert assistance.
              </p>
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, FAQs, or topics..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </div>
              </div>
            ))}
      {/* Support Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Help Fast
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support option that works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{option.title}</h3>
                <p className="text-gray-300 text-sm text-center mb-4">{option.description}</p>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Help Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(helpCategories).map(([key, category]) => (
                <div key={key} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <button
                      onClick={() => toggleCategory(key)}
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      {expandedCategories.includes(key) ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {expandedCategories.includes(key) && (
                    <div className="space-y-2">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.href}
                          className="block text-gray-300 hover:text-cyan-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
                        >
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-gray-300 hover:text-white transition-colors duration-300">
                            {article.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                />
              </div>
            </div>
          </motion.div>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && searchResults.length > 0 && (
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Search Results</h2>
            <div className="space-y-4">
              {searchResults.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

========
      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Browse by Category</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find the help you need organized by topic and category
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full border transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-cyan-500 border-cyan-500 text-white'
                : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-500 border-cyan-500 text-white'
                  : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                <p className="text-gray-400 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.articleCount} articles</span>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Browse Articles
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Popular Articles */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Popular Help Articles</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most viewed and helpful articles from our knowledge base
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-cyan-400 font-medium">{article.category}</span>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {article.views}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{article.title}</h3>
                <p className="text-gray-300 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    {article.helpful} found this helpful
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">
            Quick answers to the most common questions
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                {expandedFaqs.has(faq.id) ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {expandedFaqs.has(faq.id) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Support Channels */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to get help when you need it
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 border border-gray-600 hover:border-cyan-500 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="text-gray-300">
                      <span className="font-medium">Availability:</span> {channel.availability}
                    </div>
                    <div className="text-gray-300">
                      <span className="font-medium">Response:</span> {channel.responseTime}
                    </div>
                  </div>
                  <button className="w-full mt-4 py-2 px-4 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors duration-200">
                    Get Help
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Get Support
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Get Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel) => (
              <div
                key={channel.title}
                className="text-center p-8 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-400 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-500">Available: {channel.availability}</p>
                </div>
              </div>
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Help Center
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find answers to common questions and get the support you need
          </motion.p>
          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: ChatBubbleLeftRightIcon,
      action: "Start Chat",
      color: "from-cyan-500 to-blue-600"
    },
    {
=======
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Help Center
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to your questions, learn how to use our services, and get the support you need. 
            Our comprehensive help center is designed to get you up and running quickly.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles, guides, and solutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
=======
  const supportChannels = [
    {
>>>>>>> origin/main
      title: "Phone Support",
      icon: Phone,
      description: "Speak directly with our technical experts",
      contact: "+1 (302) 464-0950",
      availability: "Mon-Fri: 9AM-6PM EST",
      response: "Immediate for urgent issues"
    },
    {
      title: "Email Support",
      icon: Mail,
      description: "Send detailed inquiries and get comprehensive responses",
      contact: "support@ziontechgroup.com",
      availability: "24/7",
      response: "Within 4-8 hours"
    },
    {
      title: "Live Chat",
      icon: MessageCircle,
      description: "Get instant help from our support team",
      contact: "Available on website",
      availability: "Mon-Fri: 9AM-6PM EST",
      response: "Immediate"
    }
  ];

  const resources = [
    {
      title: "Documentation",
      icon: FileText,
      description: "Comprehensive guides and technical documentation",
      link: "/docs",
      category: "Technical"
    },
    {
      title: "Video Tutorials",
      icon: Video,
      description: "Step-by-step video guides for common tasks",
      link: "/tutorials",
      category: "Learning"
    },
    {
      title: "Knowledge Base",
      icon: BookOpen,
      description: "Searchable database of articles and solutions",
      link: "/knowledge-base",
      category: "Self-Service"
    },
    {
<<<<<<< HEAD
      title: "Training Materials",
      description: "Educational resources and courses",
      icon: AcademicCapIcon,
      count: "30+"
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      action: "Start Chat",
      available: true
    },
    {
      title: "Phone Support",
      description: "Speak directly with our experts",
      icon: Phone,
      color: "from-blue-500 to-cyan-500",
      action: "Call Now",
      available: true,
      details: "+1 302 464 0950"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message",
      icon: Mail,
      color: "from-purple-500 to-pink-500",
      action: "Send Email",
      available: true,
      details: "kleber@ziontechgroup.com"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      icon: FileText,
      color: "from-indigo-500 to-purple-500",
      action: "Browse Docs",
      available: true
=======
      title: "Community Forum",
      icon: Users,
      description: "Connect with other users and share experiences",
      link: "/community",
      category: "Community"
>>>>>>> origin/main
    }
  ];

=======
  const popularArticles = [
    {
      title: "How to Train Your First AI Model",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      views: "2.3k"
    },
    {
      title: "Setting Up Two-Factor Authentication",
      category: "Security & Compliance",
      readTime: "3 min read",
      views: "1.8k"
    },
    {
      title: "API Rate Limits and Best Practices",
      category: "AI & Machine Learning",
      readTime: "7 min read",
      views: "1.5k"
    },
    {
      title: "Understanding Your Monthly Bill",
      category: "Billing & Account",
      readTime: "4 min read",
      views: "1.2k"
    }
  ];

>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
  return (
<<<<<<< HEAD
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-lg font-semibold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300">
                Search
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Support
              </button>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
>>>>>>> origin/main
              How Can We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Help You?
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Find answers to your questions, get technical support, and access helpful resources to make the most of our services.
=======
import React from 'react';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Video, 
  FileText, 
  MessageCircle, 
  Users, 
  Settings, 
  Shield, 
  CreditCard,
  Search,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn the basics of using Zion Tech Group",
      articles: [
        "Creating your first account",
        "Setting up your profile",
        "Navigating the platform",
        "First steps for talent",
        "First steps for clients"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent & Profiles",
      description: "Everything about talent profiles and portfolios",
      articles: [
        "Creating a compelling profile",
        "Adding skills and certifications",
        "Building your portfolio",
        "Setting competitive rates",
        "Getting discovered by clients"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Services & Projects",
      description: "Managing services and project workflows",
      articles: [
        "Creating service listings",
        "Managing project milestones",
        "Client communication tips",
        "Payment and invoicing",
        "Project completion"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Privacy",
      description: "Keeping your account and data safe",
      articles: [
        "Account security best practices",
        "Two-factor authentication",
        "Data privacy settings",
        "Safe payment practices",
        "Reporting issues"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Billing & Payments",
      description: "Understanding fees and payment processes",
      articles: [
        "Payment methods accepted",
        "Understanding platform fees",
        "Escrow protection",
        "Refund policies",
        "Tax considerations"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Communication",
      description: "Staying connected with clients and talent",
      articles: [
        "Using the messaging system",
        "Video call features",
        "File sharing guidelines",
        "Communication best practices",
        "Resolving disputes"
      ],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our team",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "/contact",
      color: "bg-zion-cyan text-zion-blue-dark"
    },
    {
      title: "Live Chat",
      description: "Instant help available",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "#",
      color: "bg-zion-purple text-white"
    },
    {
      title: "Video Tutorials",
      description: "Learn with visual guides",
      icon: <Video className="w-6 h-6" />,
      href: "#",
      color: "bg-green-500 text-white"
    },
    {
      title: "Documentation",
      description: "Detailed technical guides",
      icon: <FileText className="w-6 h-6" />,
      href: "#",
      color: "bg-blue-500 text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center - Zion Tech Group" 
        description="Get help and support for using Zion Tech Group's AI and tech marketplace platform."
        keywords="help, support, documentation, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/help-center"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Center
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and support resources to help you make the most of Zion Tech Group
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
<<<<<<< HEAD
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or contact information..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
            </div>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Support Channels Section */}
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">500+</span> Help Articles
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">24/7</span> Support
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">99%</span> Satisfaction
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Support Channels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
      {/* Support Channels */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Multiple Ways to Get Help
            </h2>
            <p className="text-xl text-gray-300">
              Choose the support channel that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-xl flex items-center justify-center mb-4`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                {channel.details && (
                  <p className="text-cyan-400 font-mono text-sm mb-4">{channel.details}</p>
                )}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  {channel.action}
                </button>
              </div>
            ))}
        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find help organized by topic to quickly locate the information you need.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-6 rounded-xl border transition-all duration-300 text-center ${
                    activeCategory === category.id
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400'
                      : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:bg-gray-800/70'
                  }`}
                >
                  <div className="flex justify-center mb-3">
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.count} articles</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Quick answers to common questions
            </p>
          </motion.div>
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-6">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {item.question}
                      </h4>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
========
      {/* Additional Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore more ways to learn and get the most out of our platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Video Tutorials</h3>
            <p className="text-gray-400 mb-6">Step-by-step video guides for all major features</p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              Watch Videos
            </button>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">API Documentation</h3>
            <p className="text-gray-400 mb-6">Complete API reference and integration guides</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              View Docs
            </button>
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
          </div>
          {/* Popular Articles */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Popular Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-300">{article.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="text-2xl font-bold text-cyan-400">{resource.count}</div>
              </motion.div>
              <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{channel.description}</p>
                <button className={`w-full py-2 px-4 bg-gradient-to-r ${channel.color} text-white font-medium rounded-lg transition-all duration-300 hover:scale-105`}>
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
      {/* Quick Support Channels */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Get Help Fast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportChannels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50">
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{channel.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{channel.description}</p>
                <button className={`px-6 py-2 bg-gradient-to-r ${channel.color} text-white font-medium rounded-full hover:opacity-90 transition-opacity duration-300`}>
                  {channel.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Help Categories */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Help Categories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {helpCategories.map((category) => {
            const Icon = category.icon;
            const isExpanded = expandedCategory === category.id;
            return (
              <div key={category.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors duration-300 rounded-t-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                        <p className="text-gray-400 text-sm">{category.description}</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <div className="pt-4 space-y-3">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          to={article.path}
                          className="flex items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-300 group"
                        >
                          <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                            {article.title}
                          </span>
                          <ExternalLink className="w-4 h-4 text-gray-500 ml-auto group-hover:text-cyan-400 transition-colors duration-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Popular Articles */}
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Popular Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
=======
          </div>

<<<<<<< HEAD
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-xl text-white text-center hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
            <p className="text-sm opacity-90">Get direct help from our team</p>
          </Link>
          
          <Link
            to="/status"
            className="bg-slate-800/50 p-6 rounded-xl text-white text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Service Status</h3>
            <p className="text-sm text-gray-300">Check system status and updates</p>
          </Link>
          
          <Link
            to="/faq"
            className="bg-slate-800/50 p-6 rounded-xl text-white text-center border border-white/10 hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="text-3xl mb-3">❓</div>
            <h3 className="text-lg font-semibold mb-2">FAQ</h3>
            <p className="text-sm text-gray-300">Frequently asked questions</p>
          </Link>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> origin/main
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="bg-slate-800/50 p-6 rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
<<<<<<< HEAD
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{article.category}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </Link>
            ))}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300">Multiple ways to get the help you need, when you need it</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{channel.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-cyan-400">{channel.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Available:</span>
                    <span className="text-green-400">{channel.availability}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300">
                  {channel.action}
                </button>
              </motion.div>
            ))}
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
          </div>
        </div>
      </section>


========
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Community Forum</h3>
            <p className="text-gray-400 mb-6">Connect with other users and share solutions</p>
            <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 rounded-lg transition-all duration-200">
              Join Community
            </button>
          </div>
        </div>
      </div>
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/70 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFaqs.has(index) ? (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                {expandedFaqs.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
        {/* Categories Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Browse by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the help you need by exploring our organized categories
                of support articles and resources.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group p-6 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                      isActive
                        ? 'bg-blue-500/20 border border-blue-500/50'
                        : 'bg-gray-900/50 border border-gray-700/50 hover:border-blue-500/50'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${
                      isActive ? 'from-blue-500 to-cyan-500' : 'from-gray-600 to-gray-700'
                    } rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className={`text-sm font-semibold mb-2 ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}>
                      {category.name}
                    </h3>
                    <p className={`text-xs ${
                      isActive ? 'text-blue-300' : 'text-gray-500'
                    }`}>
                      {category.count} articles
                    </p>
                  </button>
                );
              })}
            </div>
      {/* Categories */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Browse by Category</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find the help you need by browsing our organized categories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:transform hover:scale-105 ${
                  activeCategory === category.id ? 'border-cyan-500/50 bg-cyan-500/10' : ''
                }`}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-3 mb-4`}>
                  <category.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
                          className="block p-4 bg-gray-700/30 rounded-lg hover:bg-gray-600/30 transition-colors"
                        >
                          <h4 className="text-white font-medium mb-1">{article.title}</h4>
                          <p className="text-gray-400 text-sm">{article.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.title} className="bg-gray-800/30 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-200">
                        <span className="font-medium text-white">{faq.question}</span>
                        <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" />
                      </summary>
                      <div className="p-4 bg-gray-700/20 rounded-lg mt-2">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our expert support team is here to help you succeed.
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you succeed with our technologies.
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is here to help you succeed. Get in touch for personalized assistance.
      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => {
            const isExpanded = expandedFAQ === faq.id;
            return (
              <div key={faq.id} className="bg-gray-800/50 rounded-2xl border border-gray-700/50">
                <button
                  onClick={() => setExpandedFAQ(isExpanded ? null : faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-700/50 transition-colors duration-300 rounded-t-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <div className="flex items-center space-x-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-6 h-6 text-gray-400 ml-4" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400 ml-4" />
                    )}
                  </div>
                </button>
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-700/50">
                    <div className="pt-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Resources */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link
                key={index}
                to={resource.link}
                className="bg-gray-800/50 rounded-2xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{resource.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">{resource.description}</p>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                  {resource.type}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      {/* Contact Support */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you succeed.
            Get in touch with us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
========
              Find answers to common questions, access helpful resources, and get the support you need.
              Our team is here to help you succeed with our technology solutions.
            </motion.p>
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
            >
              Contact Support Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
              to="/services"
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              View Documentation
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Our Services
            </Link>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Our support team is here to help you
            with any questions or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              <Phone className="w-5 h-5" />
              <span>Call Support</span>
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              <Mail className="w-5 h-5" />
              <span>Email Support</span>
            </button>
      {/* Popular Articles */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-12"
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
========
            ))}
          </div>
        </div>
      </section>
      {/* Contact Support CTA */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Popular Help Articles
          </motion.h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
=======
                <div className="flex items-start justify-between mb-3">
                  <span className="bg-blue-600/20 text-blue-400 text-xs px-3 py-1 rounded-full">
>>>>>>> origin/main
                    {article.category}
                  </span>
                </div>
<<<<<<< HEAD
                <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                <p className="text-gray-400 text-sm">{article.description}</p>
              </motion.div>
            ))}
          </div>
      {/* Contact Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed. Contact us for
              personalized assistance and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </motion.div>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
========
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6">
              Our expert support team is here to help you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
        </div>
      </section>
      {/* Contact Support CTA */}
      {/* Help Categories */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {filteredHelp.map((item) => (
              <motion.div
                key={item.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <button
                  onClick={() => toggleCategory(item.id.toString())}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                      <div className="flex gap-2 mt-1">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {expandedCategories.includes(item.id.toString()) ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedCategories.includes(item.id.toString()) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4 border-t border-gray-700/50"
                  >
                    <p className="text-gray-300 mt-4 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                Schedule a Call
        </div>
      </section>

      {/* Resources Section */}
      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
      {/* FAQs */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">
              {activeCategory ? `Showing FAQs for: ${categories.find(c => c.id === activeCategory)?.title}` : 'All FAQs'}
            </p>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
                
                {expandedFaq === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Find quick answers to common questions about our services and solutions</p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-4 h-4 inline mr-2" />
                {category.name}
                {category.count > 0 && (
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {expandedFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-300 mb-4">{faq.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag) => (
                          <span key={tag} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-300">Download guides, watch tutorials, and access comprehensive documentation</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">{resource.type}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{resource.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{resource.downloads} downloads</span>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                  {resource.type === 'Video' ? (
                    <>
                      <Play className="w-4 h-4" />
                      Watch
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Download
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our expert support team is available 24/7 to help you with any questions or technical issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <Phone className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 text-sm">+1 302 464 0950</p>
                <p className="text-gray-400 text-xs">24/7 Available</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <Mail className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 text-sm">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-xs">Response within 2 hours</p>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <MessageCircle className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm">Available on website</p>
                <p className="text-gray-400 text-xs">Instant support</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed. Contact us for 
              personalized assistance and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
      question: 'How long does it take to implement an AI solution?',
      answer: 'Implementation timelines vary based on project complexity. Simple AI integrations typically take 2-4 weeks, while comprehensive enterprise solutions may require 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'What cybersecurity frameworks do you support?',
      answer: 'We support major frameworks including NIST, ISO 27001, SOC 2, HIPAA, GDPR, and industry-specific compliance requirements. Our team will assess your needs and recommend the most appropriate framework.'
    },
    {
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, maintenance, and dedicated account management. Support levels can be customized based on your requirements.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely. Our solutions are designed to integrate seamlessly with existing infrastructure. We conduct thorough compatibility assessments and create custom integration strategies for your environment.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We serve diverse industries including healthcare, financial services, manufacturing, retail, government, and technology. Our solutions are customized to meet industry-specific requirements and compliance standards.'
    }
  ];

  const resources = [
    {
      title: 'Implementation Checklist',
      type: 'PDF',
      size: '2.3 MB',
      downloads: '1.2k'
    },
    {
      title: 'Security Best Practices Guide',
      type: 'PDF',
      size: '1.8 MB',
      downloads: '956'
    },
    {
      title: 'API Integration Templates',
      type: 'ZIP',
      size: '4.1 MB',
      downloads: '743'
    },
    {
      title: 'Compliance Assessment Tool',
      type: 'XLSX',
      size: '892 KB',
      downloads: '621'
    }
  ];

  const handleCategoryToggle = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };
=======
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="mt-3 flex items-center text-blue-400 text-sm font-medium">
                  Read Article
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
=======
import { Link } from 'react-router-dom';
import { CogIcon } from '@heroicons/react/24/outline';
>>>>>>> origin/main

const $page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <CogIcon className="h-12 w-12 text-blue-400" />
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </div>
<<<<<<< HEAD
        </motion.section>

        {/* Quick Help Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Help
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Get immediate assistance with common tasks and questions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickHelp.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 text-center group cursor-pointer"
                  >
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors">
                      {item.action}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

        {/* Knowledge Base Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
========
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Knowledge Base
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Browse our comprehensive collection of guides and documentation
              </p>
            </motion.div>

            <div className="space-y-6">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.id;
                
                return (
                  <motion.div
                    key={category.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <button
                      onClick={() => handleCategoryToggle(category.id)}
                      className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                          <p className="text-gray-300">{category.description}</p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10"
                      >
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.articles.map((article, idx) => (
                            <Link
                              key={idx}
                              to="#"
                              className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                            >
                              <div>
                                <h4 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                                  {article.title}
                                </h4>
                                <div className="flex items-center text-sm text-gray-400 mt-1">
                                  <Users className="w-3 h-3 mr-1" />
                                  {article.views}
                                  <Clock className="w-3 h-3 ml-3 mr-1" />
                                  {article.time}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-300 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
        {/* Popular Articles Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Popular Articles
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start with these frequently accessed help articles and guides 
                to get up and running quickly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularArticles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${article.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-400 mb-4">
                        {article.category}
                      </p>
                      
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Channels Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need, when you need it. 
                Our support team is here to assist you 24/7.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => {
                const Icon = channel.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{channel.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Availability:</span>
                          <span className="text-white">{channel.availability}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Response:</span>
                          <span className="text-white">{channel.responseTime}</span>
                        </div>
                      </div>
                      
                      <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                        Get Help
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of resources to help you 
                succeed with our AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                      <p className="text-gray-300 text-sm mb-6">{resource.description}</p>
                      
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform">
                        Explore
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-blue-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is ready to help 
                you get the most out of our AI-powered solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        {/* FAQs Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find quick answers to common questions about our services and solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">No results found</h3>
                  <p className="text-gray-500">Try adjusting your search terms or browse by category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multiple ways to get the help you need. Choose the method that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
                  <div className="flex justify-center mb-4">
                    <method.icon className="h-12 w-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="text-sm text-cyan-400 mb-4">Available: {method.available}</div>
                  <button className="w-full px-4 py-2 bg-cyan-500/20 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-300">
                    {method.action}
                  </button>
                  </button>
                  
                  {expandedCategories.includes(key) && (
                    <div className="px-6 pb-4 border-t border-white/10">
                      <div className="grid md:grid-cols-2 gap-4 pt-4">
                        {category.articles.map((article, index) => (
                          <Link
                            key={index}
                            to={article.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {article.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.path}
              className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                {action.title}
              </h3>
              <div className="flex items-center text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                <span className="text-sm">Get Help</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
=======
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            $page
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            This page is under development. Contact us for more information.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-lg"
          >
            Contact Us for More Information
          </Link>
>>>>>>> origin/main
        </div>
<<<<<<< HEAD

        {/* Help Categories */}
        <div className="mb-16">
<<<<<<< HEAD
          <h2 className="text-3xl font-bold text-white text-center mb-12">Browse Help Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-zion-slate-light">{category.description}</p>
                  </div>
=======
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              All Categories
            </button>
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-slate-800/50 rounded-xl p-6 border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
>>>>>>> origin/main
                </div>
                
                <div className="space-y-3">
                  {category.articles.map((article, index) => (
                    <Link
                      key={index}
                      to={article.path}
                      className="block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 border border-transparent hover:border-blue-500/30"
                    >
                      <div className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {article.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
=======
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">
              Search Results for "{searchQuery}"
            </h2>
            <div className="space-y-4">
              {filteredArticles.map((article, index) => (
                <Link
                  key={index}
                  to={article.path}
                  className="block p-4 bg-slate-800/50 rounded-lg border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <h3 className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">
                    {article.title}
                  </h3>
                </Link>
              ))}
              {filteredArticles.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-300">No articles found for your search.</p>
                  <p className="text-gray-400 text-sm mt-2">Try different keywords or browse our categories.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Still Need Help */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-8 border border-blue-500/30">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Support
              </Link>
              <Link
                to="/support"
                className="bg-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
              >
                Support Portal
              </Link>
=======
          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Get Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel) => {
                const IconComponent = channel.icon;
                return (
                  <div key={channel.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <div className="space-y-2 text-sm">
                      <p className="text-blue-400 font-semibold">{channel.contact}</p>
                      <p className="text-gray-400">{channel.availability}</p>
                      <p className="text-gray-400">Response: {channel.response}</p>
                    </div>
                  </div>
                );
              })}
=======
import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, BookOpen, Users, Settings, Shield, CreditCard, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
>>>>>>> origin/main

export default function HelpCenter() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion marketplace",
========
        </div>
        {/* FAQ Categories */}
        <div className="space-y-6">
          {filteredCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore Services
import React from 'react';
import { Link } from 'react-router-dom';
export default function HelpCenter() {
  const helpCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      items: [
        { title: 'How to create an account', path: '/help/account-creation' },
        { title: 'First steps with Zion Tech Group', path: '/help/first-steps' },
        { title: 'Understanding our services', path: '/help/services-overview' },
        { title: 'Setting up your profile', path: '/help/profile-setup' }
      ]
    },
    {
      title: 'Services & Solutions',
      icon: '💼',
      items: [
        { title: 'AI & Machine Learning Services', path: '/help/ai-services' },
        { title: 'Cybersecurity Solutions', path: '/help/cybersecurity' },
        { title: 'Cloud & Infrastructure', path: '/help/cloud-infrastructure' },
        { title: 'Digital Transformation', path: '/help/digital-transformation' }
import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, BookOpen, MessageCircle, FileText, Users, Settings, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function HelpCenter() {
  const faqCategories = [
    {
      title: 'Getting Started',
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
      icon: BookOpen,
      color: "text-zion-cyan"
    },
    {
      title: "Account & Billing",
      description: "Manage your account and payment methods",
      icon: CreditCard,
      color: "text-zion-purple"
    },
    {
      title: "Marketplace",
      description: "Buy, sell, and discover products",
      icon: Search,
      color: "text-zion-green"
    },
    {
      title: "Community",
      description: "Connect with other users and get help",
      icon: Users,
      color: "text-zion-orange"
    },
    {
      title: "Security & Privacy",
      description: "Learn about our security measures",
      icon: Shield,
      color: "text-zion-red"
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: Settings,
      color: "text-zion-blue"
    }
  ];
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

  const faqs = [
    {
      question: "How do I create an account on Zion?",
      answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner, choose whether you're a client or talent, fill in your details, and verify your email address."
    },
    {
      question: "What services does Zion offer?",
      answer: "Zion offers a comprehensive marketplace for AI and tech services, including talent hiring, equipment sales, service listings, and community forums. We specialize in connecting AI professionals with businesses."
    },
    {
      question: "How do I post a job or service request?",
      answer: "To post a job or service request, go to the 'Services' section, click 'Post a Request', fill in the details including requirements, budget, and timeline, then submit for review."
    },
    {
      question: "Is Zion free to use?",
      answer: "Yes! Zion is completely free to use for basic marketplace features. We offer premium features for advanced users and businesses, but the core platform is free."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call through the Contact page."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing and payment terms."
    },
    {
      question: "How do I verify my identity?",
      answer: "Identity verification helps build trust. Go to your profile settings, upload a government-issued ID, and complete the verification process. This typically takes 24-48 hours."
    },
    {
      question: "Can I use Zion internationally?",
      answer: "Yes! Zion is available worldwide. We support multiple currencies and languages, making it easy to connect with talent and clients globally."
    }
  ];

  return (
    <AppLayout>
      <SEO 
        title="Help Center - Zion Tech Group Support" 
        description="Get help and support for using the Zion AI and tech marketplace. Find answers to common questions and contact our support team." 
        keywords="help center, support, FAQ, Zion marketplace, customer service"
        canonical="https://ziontechgroup.com/help"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions and get the support you need
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple focus:ring-1 focus:ring-zion-purple"
              />
<<<<<<< HEAD
              <button className="absolute right-2 top-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors">
                🔍
              </button>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  to="/faq"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  View FAQ
                </Link>
              </div>
            </div>
========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
          </div>
        </div>
      </div>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HelpCenter;
}
}
}
    </div>
  );
}
        </div>
        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularArticles.map((article, index) => (
              <Link
                key={index}
                to={article.path}
                className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="mb-3">
                  <span className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                  <span className="text-sm">Read More</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Contact Support Section */}
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert support team is here to help you with any questions or issues you may have. 
            We're committed to providing you with the best possible support experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Support Team
            </Link>
            <Link
              to="/chat"
              className="bg-white/10 border border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Live Chat
            </Link>
          </div>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768


const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Help <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Center</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Find answers to your questions and get the support you need.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg">
            Our comprehensive help center is coming soon! In the meantime, feel free to contact our support team.
========
        </div>
        {/* Additional Resources */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-lg inline-block mb-3">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Comprehensive guides and technical documentation</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-purple-100 rounded-lg inline-block mb-3">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">Connect with other users and experts</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-orange-100 rounded-lg inline-block mb-3">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600 text-sm">Latest updates and industry insights</p>
            </div>
          </div>
        </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is here to help
            you get the most out of our platform.
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
          </p>
        </div>
      </div>
    </div>
  );
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
};

export default HelpCenter;
========
}
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
        </section>
        {/* Popular Articles */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Popular Help Articles</h2>
=======
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How can we help you?</h2>
>>>>>>> origin/main
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light text-sm">{category.description}</p>
=======
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, tutorials, or topics..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-zion-blue/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {action.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
                      <p className="text-zion-slate-light text-sm">{action.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
========
        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Still Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-4">Get instant help from our support team</p>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start Chat
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 text-sm mb-4">Send us a detailed message</p>
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Send Email
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 text-sm mb-4">Call us directly for urgent issues</p>
                <a
                  href="tel:+13024640950"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex} className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                          {article}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-zion-purple/20 text-zion-purple hover:bg-zion-purple/10">
                      View All Articles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
<<<<<<< HEAD

========
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
          {/* Quick Actions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple h-16 text-lg">
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light h-16 text-lg">
                <Link to="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Ask Community
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-zion-green to-zion-green-dark hover:from-zion-green-light hover:to-zion-green h-16 text-lg">
                <Link to="/sitemap">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Browse All Pages
                </Link>
              </Button>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
            </div>
          </div>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

          {/* FAQ Section */}
========
          {/* FAQs */}
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
          <div className="mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {faqCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                    <div className="flex items-center mb-6">
                      <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                      <h3 className="text-2xl font-semibold">{category.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.questions.map((item, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-blue-300">{item.question}</h4>
                          <p className="text-gray-300 text-sm">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Resources Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource) => {
                const IconComponent = resource.icon;
                return (
                  <Link
                    key={resource.title}
                    to={resource.link}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{resource.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      {resource.category}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-lg rounded-xl p-8 border border-blue-500/30">
              <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our expert team is here to help you with any questions or technical issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-300"
                >
                  Email Support
                </a>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-5c03
=======
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions, learn best practices, 
              and get the most out of Zion Tech Group's services
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or solutions..."
                className="w-full pl-6 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          
          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{category.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {category.articles.map((article, idx) => (
                      <div key={idx} className="text-sm text-gray-400 hover:text-blue-400 cursor-pointer transition-colors">
                        • {article}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={`/docs/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    View All →
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                    <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                      {article.views} views
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{article.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                    <span className="text-blue-400 text-sm">Read Article →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/support"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Support
                </Link>
                <Link
                  to="/tutorials"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Browse Tutorials
                </Link>
                <Link
                  to="/docs"
                  className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  View Documentation
                </Link>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
            </div>
          </div>
        </div>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default HelpCenter;
=======
export default $page;
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
=======
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-white hover:text-zion-cyan">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-zion-slate-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of Zion. 
              Don't hesitate to reach out with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                Schedule a Call
              </Button>
========
          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-8 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Still Need Help?</h3>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="space-x-4">
                <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/community">Ask Community</Link>
                </Button>
              </div>
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
<<<<<<<< HEAD:src/pages/HelpCenter.tsx.cleanup-backup.1756208768
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
=======
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
              <p className="text-zion-slate-light max-w-2xl mx-auto">
                Explore our comprehensive library of resources to help you succeed on Zion Tech Group
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <Video className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
                  <p className="text-zion-slate-light mb-4">
                    Step-by-step video guides for all major platform features
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Watch Tutorials
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">API Documentation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Technical documentation for developers and integrators
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    View Docs
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue border-zion-purple/20">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
                  <p className="text-zion-slate-light mb-4">
                    Connect with other users and share best practices
                  </p>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Join Community
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions or issues you may encounter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
                  Contact Support Team
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
========
};
export default HelpCenter;
// CreditCard icon component since it's not in lucide-react
function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}
  const quickLinks = [
    { title: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get in touch with our support team' },
    { title: 'API Documentation', href: '/api-docs', icon: FileText, description: 'Developer resources and API guides' },
    { title: 'Community Forum', href: '/community', icon: Users, description: 'Connect with other users' },
    { title: 'Blog & Updates', href: '/blog', icon: FileText, description: 'Latest news and platform updates' }
  ];
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Help Center | Zion Tech Group"
        description="Get help and support for using the Zion Tech Group platform. Find answers to frequently asked questions and contact our support team."
        keywords="help, support, FAQ, customer service, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Find answers to common questions and get the support you need to make the most of our platform.
          </p>
        </div>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
            />
          </div>
        </div>
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.title} to={link.href}>
                <Card className="h-full hover:bg-zion-blue-dark/50 transition-colors cursor-pointer border-zion-blue-light">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-zion-cyan" />
                      <CardTitle className="text-white text-lg">{link.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-6 w-6 text-zion-cyan" />
                    <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-white">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <Card className="border-zion-blue-light bg-zion-blue-dark/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Still Need Help?</CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Can't find what you're looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </div>
              <p className="text-zion-slate-light">
                Response time: Usually within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
>>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/HelpCenter.tsx
    </div>
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-b91b
>>>>>>> origin/main
