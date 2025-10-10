<<<<<<< HEAD
<<<<<<< HEAD
'use client';
import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Phone, Mail, MapPin, Clock, Star, Zap, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity } from 'lucide-react';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
=======
import {
  Brain,
  Cloud,
  Zap,
  Shield,
  Code,
  BarChart,
  Users,
  Settings,
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  DollarSign,
  Globe,
  Target,
  Rocket,
  Database,
  Smartphone,
  Lock,
  Cpu,
  Wifi,
  Server,
  HardDrive,
  Stethoscope,
  Scale,
  ShoppingCart,
  Truck,
  Factory,
  Building,
  GraduationCap,
  Heart,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Compass,
  Navigation as NavIcon,
  PieChart,
  TrendingDown,
  Activity,
  Zap as Lightning,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Truck as TruckIcon,
  Smartphone as SmartphoneIcon,
  ChefHat,
  Rocket as RocketIcon,
  Sprout,
  Scale as ScaleIcon;
} from 'lucide-react';

const ServicesPage: React.FC = () => {,
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
>>>>>>> origin/main

  useEffect(() => {
    setIsLoaded(true);
  }, []);

<<<<<<< HEAD
  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cpu },
    { id: 'industry', name: 'Industry Solutions', icon: Building },
    { id: 'advanced', name: 'Advanced Tech', icon: Zap }
=======
  const serviceCategories = [
    {
      id: 'ai-services'
      title: 'AI Services'
      icon: Brain;
      color: 'from-purple-500 to-pink-600'
      description: 'Advanced AI solutions powered by machine learning and artificial intelligence'
      services: [
        {
          name: 'AI Analytics Platform',
          description: 'Predictive analytics and real-time insights',
          price: 'Starting at $299/mo',
          features: ['Predictive Analytics', 'Real-time Processing', 'Custom Dashboards'],
          popular: true;
        },
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent business process automation',
          price: 'Starting at $199/mo',
          features: ['Visual Workflow Builder', 'Smart Triggers', 'Error Handling'],
          popular: true;
        },
        {
          name: 'AI Cybersecurity Platform',
          description: 'Next-gen security with AI threat detection',
          price: 'Starting at $399/mo',
          features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response'],
          popular: true;
        },
        {
          name: 'AI Content Generation',
          description: 'Advanced content creation with AI',
          price: 'Starting at $179/mo',
          features: ['Multi-format Creation', 'SEO Optimization', 'Brand Voice Training'],
          popular: true;
        }
      ]
    },
    {
      id: 'it-services'
      title: 'IT Services'
      icon: Cloud;
      color: 'from-blue-500 to-cyan-600'
      description: 'Comprehensive IT solutions for modern businesses'
      services: [,
        {,
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP',
          price: 'Starting at $10,000',
          features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation'],
          popular: true;
        },
        {
          name: 'Enterprise Cybersecurity',
          description: 'Comprehensive security solutions',
          price: 'Starting at $8,000/mo',
          features: ['Threat Detection', 'Vulnerability Assessment', '24/7 Monitoring'],
          popular: true;
        },
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support',
          price: 'Starting at $2,000/mo',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance'],
          popular: true;
        },
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions',
          price: 'Starting at $15,000',
          features: ['Web Applications', 'Mobile Apps', 'API Development'],
          popular: true;
        }
      ]
    },
    {
      id: 'micro-saas'
      title: 'Micro SAAS Solutions'
      icon: Zap;
      color: 'from-green-500 to-emerald-600'
      description: 'Powerful AI-powered micro SaaS tools for business operations'
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with AI insights',
          price: '$199/mo',
          features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization'],
          popular: true;
        },
        {
          name: 'AI Content Writer Pro',
          description: 'Advanced AI content creation',
          price: '$129/mo',
          features: ['SEO Optimization', 'Brand Voice', 'Multi-language Support'],
          popular: true;
        },
        {
          name: 'AI Financial Advisor Pro',
          description: 'Personalized financial planning and advice',
          price: '$299/mo',
          features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations'],
          popular: true;
        },
        {
          name: 'AI Code Assistant Pro',
          description: 'Advanced AI coding assistant',
          price: '$179/mo',
          features: ['Code Generation', 'Debug Assistant', 'Code Review'],
          popular: true;
        }
      ]
    }
>>>>>>> origin/main
  ];

  const allServices = [
    // AI Services
    {
<<<<<<< HEAD
      icon: TrendingUp;
=======
<<<<<<< HEAD
      id: 'ai-analytics',
      name: 'AI Analytics Platform',
      category: 'ai',
      icon: BarChart,
      price: '$299/month',
      description: 'Advanced AI-powered analytics with real-time insights and predictive analytics',
      features: ['Real-time processing', 'Predictive analytics', 'Custom dashboards', '95% accuracy'],
      href: '/ai-analytics',
      color: 'from-cyan-400 to-blue-600'
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      category: 'ai',
      icon: Settings,
      price: '$399/month',
      description: 'Intelligent automation platform that streamlines business processes',
      features: ['Process automation', 'Document processing', 'Email automation', 'Exception handling'],
      href: '/ai-automation',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      category: 'ai',
      icon: Users,
      price: '$199/month',
      description: '24/7 AI-powered customer support with natural language processing',
      features: ['NLP processing', 'Multi-language support', 'Sentiment analysis', 'Human handoff'],
      href: '/ai-customer-support',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization',
      category: 'ai',
      icon: PieChart,
      price: '$249/month',
      description: 'Intelligent data visualization with auto-chart generation',
      features: ['Auto-chart generation', 'Interactive dashboards', 'Real-time updates', 'Custom styling'],
      href: '/ai-data-visualization',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing',
      category: 'ai',
      icon: Mail,
      price: '$149/month',
      description: 'AI-powered email marketing with optimization and automation',
      features: ['Content generation', 'Send time optimization', 'A/B testing', 'Performance analytics'],
      href: '/ai-email-marketing',
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      category: 'ai',
      icon: Target,
      price: '$349/month',
      description: 'Intelligent sales automation with lead scoring and pipeline management',
      features: ['Lead scoring', 'Prospect identification', 'Follow-up automation', 'Sales forecasting'],
      href: '/ai-sales-automation',
      color: 'from-indigo-400 to-purple-600'
    },

    // IT Services
    {
      id: 'cloud-migration',
      name: 'Cloud Migration',
      category: 'it',
      icon: Cloud,
      price: 'Custom',
      description: 'Seamless migration to cloud platforms with zero downtime',
      features: ['AWS, Azure, GCP', 'Zero-downtime migration', 'Cost optimization', '24/7 support'],
      href: '/cloud-migration',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      category: 'it',
      icon: Users,
      price: '$150/hour',
      description: 'Strategic IT consulting for digital transformation',
      features: ['Technology strategy', 'Digital transformation', 'IT assessment', 'Team training'],
      href: '/it-consulting',
      color: 'from-purple-400 to-indigo-600'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      category: 'it',
      icon: Shield,
      price: '$299/month',
      description: 'Comprehensive cybersecurity with threat detection and compliance',
      features: ['Threat detection', 'Security audit', 'Penetration testing', 'Compliance management'],
      href: '/cybersecurity',
      color: 'from-red-400 to-pink-600'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      category: 'it',
      icon: Database,
      price: '$199/month',
      description: 'Expert database administration and optimization services',
      features: ['Database optimization', 'Performance tuning', 'Backup & recovery', 'Security hardening'],
      href: '/database-management',
      color: 'from-green-400 to-teal-600'
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      category: 'it',
      icon: Settings,
      price: 'Custom',
      description: 'Seamless integration of disparate systems and platforms',
      features: ['API development', 'Legacy integration', 'Real-time sync', 'Custom middleware'],
      href: '/system-integration',
      color: 'from-orange-400 to-red-600'
    },
    {
      id: 'network-security',
      name: 'Network Security',
      category: 'it',
      icon: Lock,
      price: '$249/month',
      description: 'Comprehensive network security solutions and monitoring',
      features: ['Firewall configuration', 'Intrusion detection', 'VPN management', 'Network monitoring'],
      href: '/network-security',
      color: 'from-gray-400 to-slate-600'
    },

    // Industry Solutions
    {
      id: 'ai-healthcare',
      name: 'Healthcare AI',
      category: 'industry',
      icon: Stethoscope,
      price: '$1,999/month',
      description: 'AI solutions for medical imaging, drug discovery, and personalized medicine',
      features: ['Medical imaging', 'Drug discovery', 'Personalized medicine', 'HIPAA compliance'],
      href: '/ai-healthcare',
      color: 'from-green-400 to-emerald-600'
    },
    {
      id: 'ai-fintech',
      name: 'Fintech AI',
      category: 'industry',
      icon: CreditCard,
      price: '$1,499/month',
      description: 'AI-powered financial services and fraud detection',
      features: ['Trading algorithms', 'Fraud detection', 'Risk management', 'Compliance'],
      href: '/ai-fintech',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      id: 'ai-manufacturing',
      name: 'Manufacturing AI',
      category: 'industry',
      icon: Factory,
      price: '$2,499/month',
      description: 'Industrial AI for smart manufacturing and quality control',
      features: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'IoT integration'],
      href: '/ai-manufacturing',
      color: 'from-orange-400 to-red-600'
    },
    {
      id: 'ai-retail',
      name: 'Retail AI',
      category: 'industry',
      icon: ShoppingCart,
      price: '$999/month',
      description: 'AI solutions for e-commerce and retail optimization',
      features: ['Inventory management', 'Customer analytics', 'Price optimization', 'Recommendation engines'],
      href: '/ai-retail',
      color: 'from-pink-400 to-rose-600'
    },
    {
      id: 'ai-education',
      name: 'Education AI',
      category: 'industry',
      icon: GraduationCap,
      price: '$799/month',
      description: 'AI-powered educational technology and learning management',
      features: ['Personalized learning', 'Assessment tools', 'Student analytics', 'Content generation'],
      href: '/ai-education',
      color: 'from-purple-400 to-violet-600'
    },
    {
      id: 'ai-transportation',
      name: 'Transportation AI',
      category: 'industry',
      icon: Car,
      price: '$1,299/month',
      description: 'AI solutions for logistics and transportation management',
      features: ['Route optimization', 'Fleet management', 'Predictive maintenance', 'Traffic analysis'],
      href: '/ai-transportation',
      color: 'from-cyan-400 to-blue-600'
    },

    // Advanced Tech
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      category: 'advanced',
      icon: Atom,
      price: 'Custom',
      description: 'Next-generation quantum computing capabilities for complex problem solving',
      features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research collaboration'],
      href: '/quantum-computing',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 'blockchain',
      name: 'Blockchain Solutions',
      category: 'advanced',
      icon: Lock,
      price: '$999/month',
      description: 'Blockchain development and smart contract solutions',
      features: ['Smart contracts', 'DApp development', 'Tokenization', 'DeFi solutions'],
      href: '/blockchain',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions',
      category: 'advanced',
      icon: Smartphone,
      price: '$499/month',
      description: 'Internet of Things solutions for connected devices and data collection',
      features: ['Device management', 'Data collection', 'Real-time monitoring', 'Analytics'],
      href: '/iot-solutions',
      color: 'from-green-400 to-teal-600'
    },
    {
      id: 'ar-vr',
      name: 'AR/VR Development',
      category: 'advanced',
      icon: Gamepad2,
      price: '$1,999/month',
      description: 'Augmented and virtual reality applications and experiences',
      features: ['3D modeling', 'Interactive experiences', 'Cross-platform support', 'Performance optimization'],
      href: '/ar-vr',
      color: 'from-cyan-400 to-blue-600'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: BarChart },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Cloud, Shield, Code, BarChart, Users, Zap, Target, CheckCircle, ArrowRight, Globe, Database, Smartphone, Settings, Lock, TrendingUp, Star, Award, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const services = [
    {
      category: 'AI Solutions',
      icon: Brain,
      description: 'Cutting-edge artificial intelligence services to automate and optimize your business processes.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Process Automation'
      ],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      description: 'Scalable and secure cloud solutions to support your growing business needs.',
      features: [
        'AWS/Azure/GCP Migration',
        'DevOps Implementation',
        'Container Orchestration',
        'Auto-scaling Solutions',
        'Cloud Security',
        'Cost Optimization'
      ],
      color: 'from-blue-400 to-indigo-500'
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: [
        'Security Audits',
        'Threat Detection',
        'Compliance Management',
        'Incident Response',
        'Penetration Testing',
        'Security Training'
      ],
      color: 'from-red-400 to-pink-500'
    },
    {
      category: 'Custom Development',
      icon: Code,
      description: 'Tailored software solutions built to meet your specific business requirements.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'Database Design',
        'System Integration',
        'Legacy Modernization'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      category: 'Data Analytics',
      icon: BarChart,
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Real-time Analytics',
        'Machine Learning',
        'Data Warehousing',
        'Predictive Modeling'
      ],
      color: 'from-purple-400 to-violet-500'
    },
    {
      category: 'IT Consulting',
      icon: Users,
      description: 'Strategic IT consulting to align technology with your business objectives.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'IT Assessment',
        'Project Management',
        'Change Management',
        'Training & Support'
      ],
      color: 'from-orange-400 to-amber-500'
    }
  ];

  const aiServices = [
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
    { name: 'IT Support', url: '/it-support', description: 'Comprehensive IT support' },
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud migration & setup' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
    { name: 'Database Management', url: '/database-management', description: 'Database management' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting' }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  ];

  return (
    <>
<<<<<<< HEAD
      <SEOOptimizer
        title="Our Services - Zion Tech Group"
        description="Comprehensive AI and IT services including analytics, automation, cloud migration, cybersecurity, and industry-specific solutions. Transform your business with our cutting-edge technology."
        keywords={['AI services', 'IT services', 'cloud migration', 'cybersecurity', 'analytics', 'automation', 'industry solutions', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/services"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Our Services">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Comprehensive AI and IT Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              From AI-powered analytics to cloud migration, we provide end-to-end technology solutions 
              that help businesses achieve unprecedented growth and efficiency.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 max-w-7xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 neon-text mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
=======
      icon: TrendingUp,
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in efficiency',
      stat: '40%',
    },
    {
      icon: Clock;
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes',
      stat: '15 min',
    },
    {
      icon: DollarSign;
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60%',
      stat: '60%',
    },
    {
      icon: Shield;
      title: 'Security First',
      description: 'Zero security breaches with our approach',
      stat: '100%',
    }
  ];

  const technologies = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Microsoft Azure', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Database' }
  ];

  const process = [
    {
      step: 1;
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify opportunities for improvement',
      duration: '1-2 weeks',
    },
    {
      step: 2;
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy tailored to your business goals',
      duration: '1-2 weeks',
    },
    {
      step: 3;
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks',
    },
    {
      step: 4;
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks',
    },
    {
      step: 5;
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing',
    }
  ];

  if (!isLoaded) {
<<<<<<< HEAD
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white">);
  }
</div>
  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section><div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">Our Services</h1><p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business.</p>
              From cutting-edge AI platforms to robust IT infrastructure, we've got you covered.</p>
=======
    return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">)
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>)
      </div>)
    );
  }

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Our Services;
            </h1>,
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">,
              Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business.
              From cutting-edge AI platforms to robust IT infrastructure, we've got you covered.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">IT Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Micro SAAS</span>
              </div>
>>>>>>> origin/main
            </div>
          </section>

<<<<<<< HEAD
          {/* Category Filter */}
          <section className="mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400/30 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={service.href}
                    className="cyber-button w-full text-center justify-center inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our expert team help you choose the right solutions for your business needs. 
                Get a free consultation and discover how we can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
<<<<<<< HEAD
      </div>
      
      <Footer />
=======
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services to transform your business operations." />
        <meta name="keywords" content="AI services, IT consulting, cloud infrastructure, cybersecurity, custom development, data analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT services to transform your business operations and drive growth.
              </p>
            </div>
            
            {/* Main Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.category}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 text-gray-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered solutions designed to revolutionize your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <ArrowRight className="w-5 h-5 text-cyan-400 mt-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services to keep your technology infrastructure running smoothly and securely.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                  <ArrowRight className="w-5 h-5 text-cyan-400 mt-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
=======

        <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
    </>
  );
};

export default ServicesPage;
<<<<<<< HEAD
=======
      {/* Benefits */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Our Services?<p className="text-lg text-gray-300 max-w-3xl mx-auto">Proven expertise and enterprise-grade solutions that deliver measurable business value<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Our Services?</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Proven expertise and enterprise-grade solutions that deliver measurable business value</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <benefit.icon className="w-10 h-10 text-white" />
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade solutions that deliver measurable business value;)
            </p>)
          </div>,)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">),
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <benefit.icon className="w-10 h-10 text-white" />,
                </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Service Categories<p className="text-lg text-gray-300 max-w-3xl mx-auto">Comprehensive solutions across AI, IT, and Micro SAAS domains<div className="space-y-16">{serviceCategories.map((category, categoryIndex) => (</div>
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Service Categories;
            </h2>,
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">,
              Comprehensive solutions across AI, IT, and Micro SAAS domains;
            </p>
          </div>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
<<<<<<< HEAD
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}<p className="text-gray-300 text-lg">{category.description}<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{category.services.map((service, serviceIndex) => (</div>
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 relative">{service.popular && (<div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Service Categories</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Comprehensive solutions across AI, IT, and Micro SAAS domains</p><div className="space-y-16">{serviceCategories.map((category, categoryIndex) => (</div>
              <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-8"></div>
                <div className="flex items-center space-x-4 mb-8"></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}></div>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3><p className="text-gray-300 text-lg">{category.description}</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{category.services.map((service, serviceIndex) => (</div>
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 relative">{service.popular && (</div><div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">Popular</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        </div>
=======
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover: bg-slate-600/50 transition-all duration-300 relative">,
                      {service.popular && (,
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">,
                          Popular;
                        </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}<p className="text-gray-300 mb-4 text-sm">{service.description}</p>
<<<<<<< HEAD
                      <div className="space-y-2 mb-4">
<<<<<<< HEAD
=======
                      <div className="space-y-2 mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:<ul className="space-y-1">{service.features.map((feature, featureIndex) => (</ul>
=======
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features: </h5>,
                        <ul className="space-y-1">,
                          {service.features.map((feature, featureIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}<button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">Learn More</button>
=======
                        <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}</div><button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all">Learn More</button>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                      </button>
                    </div>
=======
                        </ul>
                      </div>
                      <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}</div>
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover: from-cyan-600 hover:to-purple-700 transition-all">
                        Learn More;
                      </button>,
                    </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technologies We Work With<p className="text-lg text-gray-300 max-w-3xl mx-auto">We work with the latest and most reliable technologies in the industry<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{technologies.map((tech, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-white font-medium text-sm">{tech.name}<div className="text-gray-400 text-xs mt-1">{tech.category}</div>
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Technologies We Work With;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry;
            </p>,
          </div>,
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">,
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover: bg-slate-700/50 transition-all duration-300">,
                <div className="text-white font-medium text-sm">{tech.name}</div>
                <div className="text-gray-400 text-xs mt-1">{tech.category}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Technologies We Work With</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We work with the latest and most reliable technologies in the industry</p><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{technologies.map((tech, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300"></div>
                <div className="text-white font-medium text-sm">{tech.name}</div><div className="text-gray-400 text-xs mt-1">{tech.category}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Implementation Process<p className="text-lg text-gray-300 max-w-3xl mx-auto">A proven methodology that ensures successful implementation</p>
=======
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Implementation Process</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">A proven methodology that ensures successful implementation</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="relative"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600">{process.map((step, index) => (</div>
<<<<<<< HEAD
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
=======
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Implementation Process;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation;
            </p>
          </div>
          <div className="max-w-4xl mx-auto">,
            <div className="relative">,
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>,
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}<h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}<div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
=======
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div><h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p><div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div><div className="w-1/2">))}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 lg: p-12">
            <div className="text-center mb-8">
<<<<<<< HEAD
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?<p className="text-xl text-cyan-100 mb-8">Get in touch with our experts to discuss your project requirements</p>
=======
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Get in touch with our experts to discuss your project requirements;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
        <div className="container mx-auto px-4"></section>
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 lg:p-12"></div>
            <div className="text-center mb-8"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2><p className="text-xl text-cyan-100 mb-8">Get in touch with our experts to discuss your project requirements</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Phone className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3><p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <Mail className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3><p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <MapPin className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008</p><br >Middletown DE 19709</br>
              </div>
            </div>
<<<<<<< HEAD
            <div className="text-center">
<<<<<<< HEAD
=======
            <div className="text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">Get Started Today</button>
=======
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Get Started Today;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              </button>
            </div>
          </div>
        </div>
      </section>,
    </div>,
  );
};

export default ServicesPage;
>>>>>>> origin/main
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0233
