import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
import React from 'react';
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
import { motion } from 'framer-motion';
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

  const categories = [
    {
      id: 'getting-started',
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


  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };


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
  Shield,
  Zap,
  Brain,
  Rocket
} from 'lucide-react';

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
  Search, 
  HelpCircle, 
  BookOpen, 
  Video, 
  MessageCircle, 
  Phone, 
  Mail, 
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

const HelpCenter: React.FC = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: BookOpenIcon,
      questions: [
        {
          question: "How do I get started with Zion Tech Group services?",
          answer: "Getting started is easy! Simply contact our team through our contact form or call us directly. We'll schedule a consultation to understand your needs and recommend the best solutions for your business."
        },
        {
          question: "What services do you offer?",
          answer: "We offer a comprehensive range of AI, 5G, cybersecurity, and digital transformation services. This includes AI autonomous systems, quantum computing solutions, 5G enterprise networks, and much more."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we provide free initial consultations to understand your business needs and recommend appropriate solutions. This helps ensure we can provide the most value to your organization."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: QuestionMarkCircleIcon,
      questions: [
        {
          question: "What kind of technical support do you provide?",
          answer: "We provide comprehensive technical support including 24/7 monitoring, troubleshooting, system optimization, and ongoing maintenance. Our team of experts is always available to help resolve any technical issues."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We prioritize support requests based on severity. Critical issues receive immediate attention, while standard requests are typically resolved within 4-8 hours during business days."
        },
        {
          question: "Do you provide training for your solutions?",
          answer: "Absolutely! We provide comprehensive training programs for all our solutions, including user training, administrator training, and ongoing education to ensure your team gets the most value from our technology."
        }
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
  ];

  const faqs = [
    {
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
  Mail, 
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

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Zap,
      description: 'Quick start guides and onboarding resources',
      articles: [
        { title: 'Welcome to Zion Tech Group', path: '/help/getting-started/welcome' },
        { title: 'Setting Up Your Account', path: '/help/getting-started/account-setup' },
        { title: 'First Steps with Our Platform', path: '/help/getting-started/first-steps' },
        { title: 'Platform Overview', path: '/help/getting-started/platform-overview' }
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      icon: Brain,
      description: 'AI and machine learning platform guides',
      articles: [
        { title: 'AI Autonomous Systems Guide', path: '/help/ai-solutions/autonomous-systems' },
        { title: 'Setting Up AI Research Assistant', path: '/help/ai-solutions/research-assistant' },
        { title: 'Quantum Neural Networks', path: '/help/ai-solutions/quantum-neural' },
        { title: 'AI Business Intelligence', path: '/help/ai-solutions/business-intelligence' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Security and compliance documentation',
      articles: [
        { title: 'Security Best Practices', path: '/help/cybersecurity/best-practices' },
        { title: 'SOC2 Compliance Guide', path: '/help/cybersecurity/soc2-compliance' },
        { title: 'Threat Detection Setup', path: '/help/cybersecurity/threat-detection' },
        { title: 'Access Control Management', path: '/help/cybersecurity/access-control' }
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      icon: Building,
      description: 'Cloud and IT infrastructure guides',
      articles: [
        { title: 'Cloud Migration Guide', path: '/help/infrastructure/cloud-migration' },
        { title: '5G Network Setup', path: '/help/infrastructure/5g-setup' },
        { title: 'DevOps Automation', path: '/help/infrastructure/devops' },
        { title: 'Network Security', path: '/help/infrastructure/network-security' }
      ]
    }
  ];

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

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">HelpCenter</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default HelpCenter;