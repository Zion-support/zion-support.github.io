'use client';
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
<<<<<<< HEAD
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
  Scale as ScaleIcon
} from 'lucide-react';
=======
  Code, 
  Zap, 
  Shield, 
  Target, 
  BarChart, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Cpu, 
  Database, 
  Smartphone, 
  Search, 
  Bot, 
  Palette, 
  Camera, 
  Music, 
  Video, 
  ShoppingCart, 
  CreditCard, 
  Building, 
  Factory, 
  Car, 
  Plane, 
  Ship, 
  Train, 
  Home, 
  Heart, 
  Stethoscope, 
  GraduationCap, 
  Briefcase, 
  Wrench, 
  Hammer, 
  Paintbrush, 
  Scissors, 
  BookOpen, 
  Calculator, 
  Calendar, 
  Clock3, 
  Compass, 
  Navigation, 
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
  Cube, 
  Mic, 
  DollarSign, 
  Truck, 
  Link, 
  HardDrive, 
  FileCheck, 
  Rocket, 
  Sprout, 
  Scale 
} from 'lucide-react';
=======
import { Phone, Mail, MapPin, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic, DollarSign, Truck, Link, HardDrive, FileCheck, Rocket, Sprout, Scale, DollarSign as Dollar, Clock, Award as AwardIcon, Globe as GlobeIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIconIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIconIcon, Mail as MailIconIcon, MapPin as LocationIcon, Cube as CubeIcon, Mic as MicIcon, DollarSign as DollarIcon, Truck as TruckIcon, Link as LinkIcon, HardDrive as HardDriveIcon, FileCheck as FileCheckIcon, Rocket as RocketIcon, Sprout as SproutIcon, Scale as ScaleIcon } from 'lucide-react';
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
=======
import SEOOptimizer from '../components/SEOOptimizer';
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

<<<<<<< HEAD
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Advanced AI solutions powered by machine learning and artificial intelligence',
      services: [
        {
          name: 'AI Analytics Platform',
          description: 'Advanced predictive analytics with real-time insights and machine learning capabilities',
          price: 'Starting at $299/mo',
          features: ['Predictive Analytics', 'Real-time Processing', 'Custom Dashboards', 'ML Model Training', 'Data Visualization'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-analytics-dashboard'
        },
        {
          name: 'AI Workflow Automation',
          description: 'Intelligent business process automation with self-optimizing workflows and error recovery',
          price: 'Starting at $199/mo',
          features: ['Visual Workflow Builder', 'Smart Triggers', 'Error Handling', 'Performance Optimization', 'Integration Hub'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-workflow-automation'
        },
        {
          name: 'AI Cybersecurity Platform',
          description: 'Next-generation security with AI-powered threat detection and automated response',
          price: 'Starting at $399/mo',
          features: ['Threat Detection', 'Anomaly Analysis', 'Automated Response', 'Zero Trust Architecture', 'Compliance Monitoring'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-cybersecurity'
        },
        {
          name: 'AI Content Generation',
          description: 'Advanced content creation with AI-powered writing, editing, and optimization',
          price: 'Starting at $179/mo',
          features: ['Multi-format Creation', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Detection', 'Performance Analytics'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-generation'
=======
  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      description: 'Advanced artificial intelligence solutions for enterprise applications',
      services: [
        {
          name: 'AI Drug Discovery Pro',
          description: 'Accelerate pharmaceutical research with AI-powered molecular analysis',
          price: '$4,500/mo',
          features: ['Molecular Modeling', 'Drug Interaction Analysis', 'Clinical Trial Optimization'],
          icon: Stethoscope,
          category: 'Healthcare AI',
          link: '/ai-drug-discovery-pro'
        },
        {
          name: 'AI Climate Solutions Pro',
          description: 'Combat climate change with intelligent environmental monitoring',
          price: '$3,200/mo',
          features: ['Carbon Footprint Analysis', 'Weather Prediction', 'Sustainability Planning'],
          icon: Globe,
          category: 'Environmental AI',
          link: '/ai-climate-solutions-pro'
        },
        {
          name: 'AI Space Technology Pro',
          description: 'Advanced space exploration and satellite management solutions',
          price: '$5,500/mo',
          features: ['Satellite Operations', 'Space Mission Planning', 'Astronomical Data Analysis'],
          icon: Rocket,
          category: 'Space Technology',
          link: '/ai-space-technology-pro'
        },
        {
          name: 'AI Financial Crime Detection Pro',
          description: 'Real-time fraud detection and financial security monitoring',
          price: '$2,800/mo',
          features: ['Fraud Detection', 'Risk Assessment', 'Compliance Monitoring'],
          icon: Shield,
          category: 'Financial AI',
          link: '/ai-financial-crime-detection-pro'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
        }
      ]
    },
    {
      id: 'it-services',
<<<<<<< HEAD
      title: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Comprehensive IT solutions for modern businesses',
      services: [
        {
          name: 'AI Cybersecurity Pro',
          description: 'Next-generation AI cybersecurity with advanced threat detection',
          price: 'Starting at $799/mo',
          features: ['AI Threat Detection', 'Multi-layer Security', '24/7 Monitoring', 'Compliance & Governance'],
          popular: true,
          link: '/ai-cybersecurity-pro'
        },
        {
          name: 'AI Cloud Optimization Pro',
          description: 'Intelligent cloud infrastructure management and optimization',
          price: 'Starting at $499/mo',
          features: ['AI-Powered Optimization', 'Real-time Analytics', 'Security & Compliance', 'Automated Scaling'],
          popular: true,
          link: '/ai-cloud-optimization-pro'
        },
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless migration to AWS, Azure, or GCP with zero downtime and cost optimization',
          price: 'Starting at $10,000',
          features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Implementation', 'Disaster Recovery', 'Performance Tuning'],
          popular: true,
          link: 'https://ziontechgroup.com/cloud-migration'
        },
        {
          name: 'Enterprise Cybersecurity',
          description: 'Comprehensive security solutions with advanced threat protection and compliance',
          price: 'Starting at $8,000/mo',
          features: ['Threat Detection', 'Vulnerability Assessment', '24/7 Monitoring', 'Incident Response', 'Compliance Management'],
          popular: true,
          link: 'https://ziontechgroup.com/cybersecurity'
        },
        {
          name: '24/7 IT Support',
          description: 'Round-the-clock technical support with AI-powered diagnostics',
          price: 'Starting at $2,000/mo',
          features: ['Help Desk Support', 'Remote Monitoring', 'Proactive Maintenance', 'AI Diagnostics', 'Predictive Maintenance'],
          popular: true,
          link: 'https://ziontechgroup.com/it-support'
        },
        {
          name: 'Custom Software Development',
          description: 'Tailored software solutions with modern architecture and AI integration',
          price: 'Starting at $15,000',
          features: ['Web Applications', 'Mobile Apps', 'API Development', 'AI Integration', 'Cloud Deployment'],
          popular: true,
          link: 'https://ziontechgroup.com/custom-development'
=======
      name: 'IT Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      description: 'Comprehensive IT infrastructure and cloud solutions',
      services: [
        {
          name: 'Cloud Migration & Setup',
          description: 'Seamless cloud migration and infrastructure setup',
          price: 'Custom',
          features: ['AWS/Azure/GCP Migration', 'Infrastructure Design', 'Security Implementation'],
          icon: Cloud,
          category: 'Cloud Services',
          link: '/cloud-migration'
        },
        {
          name: 'Enterprise Cybersecurity Suite',
          description: 'Comprehensive security solutions for enterprise environments',
          price: 'Custom',
          features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring'],
          icon: Shield,
          category: 'Cybersecurity',
          link: '/cybersecurity'
        },
        {
          name: 'IT Infrastructure Design',
          description: 'Scalable infrastructure architecture and implementation',
          price: 'Custom',
          features: ['Network Design', 'Server Configuration', 'Performance Optimization'],
          icon: Settings,
          category: 'Infrastructure',
          link: '/it-infrastructure'
        },
        {
          name: '24/7 IT Support & Monitoring',
          description: 'Round-the-clock technical support and system monitoring',
          price: 'Custom',
          features: ['24/7 Support', 'Proactive Monitoring', 'Rapid Response'],
          icon: Clock,
          category: 'Support',
          link: '/it-support'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
        }
      ]
    },
    {
      id: 'micro-saas',
<<<<<<< HEAD
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      description: 'Powerful AI-powered micro SaaS tools for business operations',
      services: [
        {
          name: 'AI Smart Calendar Pro',
          description: 'Intelligent calendar management with AI-powered scheduling',
          price: '$49/mo',
          features: ['AI-Powered Scheduling', 'Team Collaboration', 'Automation & Integration', 'Analytics & Insights'],
          popular: true,
          link: '/ai-smart-calendar-pro'
        },
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with AI insights and predictive analytics',
          price: '$199/mo',
          features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Prediction', 'Team Collaboration'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-project-manager'
        },
        {
          name: 'AI Content Writer Pro',
          description: 'Advanced AI content creation with SEO optimization and brand voice training',
          price: '$129/mo',
          features: ['SEO Optimization', 'Brand Voice', 'Multi-language Support', 'Plagiarism Detection', 'Performance Analytics'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-writer'
        },
        {
          name: 'AI Financial Advisor Pro',
          description: 'Personalized financial planning and advice with real-time market analysis',
          price: '$299/mo',
          features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Tax Optimization', 'Retirement Planning'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-financial-advisor'
        },
        {
          name: 'AI Code Assistant Pro',
          description: 'Advanced AI coding assistant with intelligent debugging and optimization',
          price: '$179/mo',
          features: ['Code Generation', 'Debug Assistant', 'Code Review', 'Performance Optimization', 'Security Analysis'],
          popular: true,
          link: 'https://ziontechgroup.com/ai-code-assistant'
=======
      name: 'Micro SAAS Solutions',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      description: 'Powerful micro SAAS applications for modern businesses',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project planning with predictive analytics',
          price: '$199/mo',
          features: ['Project Planning', 'Resource Management', 'Progress Tracking'],
          icon: BarChart,
          category: 'Productivity',
          link: '/ai-project-manager'
        },
        {
          name: 'AI Social Media Manager Pro',
          description: 'Automated social media management and content creation',
          price: '$99/mo',
          features: ['Content Creation', 'Scheduling', 'Analytics'],
          icon: Smartphone,
          category: 'Marketing',
          link: '/ai-social-media-manager'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'AI-powered business intelligence and analytics',
          price: '$149/mo',
          features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Insights'],
          icon: BarChart,
          category: 'Analytics',
          link: '/ai-analytics-dashboard'
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Intelligent email campaigns and automation',
          price: '$79/mo',
          features: ['Campaign Automation', 'A/B Testing', 'Performance Analytics'],
          icon: Mail,
          category: 'Marketing',
          link: '/ai-email-marketing'
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Sparkles,
      color: 'from-pink-500 to-purple-600',
      description: 'Cutting-edge technologies for the future',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Next-generation quantum computing applications',
          price: 'Custom',
          features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization'],
          icon: Cpu,
          category: 'Quantum Computing',
          link: '/ai-quantum-computing'
        },
        {
          name: 'Autonomous Systems',
          description: 'Self-managing systems and intelligent automation',
          price: 'Custom',
          features: ['Autonomous Operations', 'Self-Healing Systems', 'Adaptive Learning'],
          icon: Settings,
          category: 'Autonomous Systems',
          link: '/autonomous-systems'
        },
        {
          name: 'Blockchain & Web3',
          description: 'Decentralized solutions and blockchain integration',
          price: 'Custom',
          features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms'],
          icon: Lock,
          category: 'Blockchain',
          link: '/blockchain-web3'
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Connected devices and edge computing solutions',
          price: 'Custom',
          features: ['Device Management', 'Edge Analytics', 'Real-time Processing'],
          icon: Globe,
          category: 'IoT',
          link: '/iot-edge-computing'
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
        }
      ]
    }
  ];

<<<<<<< HEAD
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Our clients see 40% improvement in efficiency',
      stat: '40%'
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Average response time of 15 minutes',
      stat: '15 min'
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Reduce operational costs by up to 60%',
      stat: '60%'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Zero security breaches with our approach',
      stat: '100%'
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
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We analyze your current systems and identify opportunities for improvement',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive strategy tailored to your business goals',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Deploy solutions with minimal disruption to your operations',
      duration: '2-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & Optimization',
      description: 'Thorough testing and performance optimization',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Support & Monitoring',
      description: 'Ongoing support, monitoring, and continuous improvement',
      duration: 'Ongoing'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
  const filteredServices = serviceCategories.map(category => ({
    ...category,
    services: category.services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => 
    activeCategory === 'all' || category.id === activeCategory
  );

  const stats = [
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  const serviceCategories = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      description: 'Cutting-edge artificial intelligence solutions',
      services: [
        {
          name: 'AI Drug Discovery Pro',
          description: 'Revolutionary AI-powered drug discovery platform accelerating pharmaceutical research',
          price: 'Starting at $50,000/month',
          features: ['Molecular Analysis', 'Drug Interaction Prediction', 'Clinical Trial Optimization', 'Regulatory Compliance'],
          link: 'https://ziontechgroup.com/ai-drug-discovery-pro',
          popular: true,
          rating: 4.9
        },
        {
          name: 'AI Climate Solutions Pro',
          description: 'Advanced climate modeling and environmental impact analysis using AI',
          price: 'Starting at $25,000/month',
          features: ['Climate Modeling', 'Carbon Footprint Analysis', 'Sustainability Planning', 'Environmental Monitoring'],
          link: 'https://ziontechgroup.com/ai-climate-solutions-pro',
          popular: true,
          rating: 4.8
        },
        {
          name: 'AI Space Technology Pro',
          description: 'Space exploration and satellite data analysis powered by AI',
          price: 'Starting at $75,000/month',
          features: ['Satellite Data Analysis', 'Space Mission Planning', 'Orbital Mechanics', 'Space Weather Prediction'],
          link: 'https://ziontechgroup.com/ai-space-technology-pro',
          popular: false,
          rating: 4.7
        },
        {
          name: 'AI Financial Crime Detection Pro',
          description: 'Advanced fraud detection and financial crime prevention system',
          price: 'Starting at $30,000/month',
          features: ['Real-time Fraud Detection', 'Transaction Monitoring', 'Risk Assessment', 'Compliance Reporting'],
          link: 'https://ziontechgroup.com/ai-financial-crime-detection-pro',
          popular: true,
          rating: 4.9
        }
      ]
    },
    {
      id: 'it-services',
      name: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      description: 'Comprehensive IT infrastructure and support',
      services: [
        {
          name: 'AI Infrastructure Monitoring Pro',
          description: 'Intelligent infrastructure monitoring with predictive analytics',
          price: 'Starting at $5,000/month',
          features: ['Predictive Maintenance', 'Performance Optimization', 'Automated Scaling', 'Security Monitoring'],
          link: 'https://ziontechgroup.com/ai-infrastructure-monitoring',
          popular: true,
          rating: 4.8
        },
        {
          name: 'Blockchain Integration Services Pro',
          description: 'Enterprise blockchain solutions and smart contract development',
          price: 'Starting at $40,000',
          features: ['Smart Contract Development', 'Blockchain Architecture', 'DeFi Solutions', 'NFT Platforms'],
          link: 'https://ziontechgroup.com/blockchain-integration-services',
          popular: true,
          rating: 4.7
        },
        {
          name: 'AI API Management Pro',
          description: 'Intelligent API gateway with AI-powered optimization',
          price: 'Starting at $3,000/month',
          features: ['API Gateway', 'Rate Limiting', 'Analytics', 'Security'],
          link: 'https://ziontechgroup.com/ai-api-management',
          popular: false,
          rating: 4.6
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      icon: Code,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      description: 'Powerful micro SaaS tools for business automation',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with AI-powered insights',
          price: '$199/month',
          features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Assessment'],
          link: 'https://ziontechgroup.com/ai-project-manager',
          popular: true,
          rating: 4.8
        },
        {
          name: 'AI Smart Calendar Pro',
          description: 'AI-powered calendar management with smart scheduling',
          price: '$89/month',
          features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Insights'],
          link: 'https://ziontechgroup.com/ai-smart-calendar',
          popular: true,
          rating: 4.7
        },
        {
          name: 'AI Content Writer Pro',
          description: 'Advanced AI content creation with SEO optimization',
          price: '$129/month',
          features: ['SEO Optimization', 'Brand Voice', 'Content Templates', 'Multi-language Support'],
          link: 'https://ziontechgroup.com/ai-content-writer',
          popular: true,
          rating: 4.9
        },
        {
          name: 'AI Video Generator Pro',
          description: 'Create professional videos with AI-powered editing',
          price: '$199/month',
          features: ['Auto Editing', 'Voice Synthesis', 'Visual Effects', 'Template Library'],
          link: 'https://ziontechgroup.com/ai-video-generator',
          popular: false,
          rating: 4.6
        }
      ]
    },
    {
      id: 'emerging-tech',
      name: 'Emerging Technologies',
      icon: Rocket,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      description: 'Next-generation technology solutions',
      services: [
        {
          name: 'Quantum Computing Solutions',
          description: 'Quantum computing applications for complex problem solving',
          price: 'Starting at $100,000/month',
          features: ['Quantum Algorithms', 'Quantum Simulation', 'Optimization Problems', 'Cryptography'],
          link: 'https://ziontechgroup.com/quantum-computing',
          popular: true,
          rating: 4.9
        },
        {
          name: 'Autonomous Systems',
          description: 'Self-managing systems with AI decision making',
          price: 'Starting at $60,000/month',
          features: ['Autonomous Vehicles', 'Robotic Process Automation', 'Smart Infrastructure', 'Predictive Maintenance'],
          link: 'https://ziontechgroup.com/autonomous-systems',
          popular: true,
          rating: 4.8
        },
        {
          name: 'AR/VR Solutions',
          description: 'Immersive experiences and virtual reality applications',
          price: 'Starting at $35,000',
          features: ['Virtual Reality', 'Augmented Reality', 'Mixed Reality', '3D Visualization'],
          link: 'https://ziontechgroup.com/ar-vr-solutions',
          popular: false,
          rating: 4.7
        }
      ]
    }
  ];

  const filteredServices = serviceCategories.filter(category => 
    activeCategory === 'all' || category.id === activeCategory
  );

  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({ ...service, category: category.name }))
  );

  const searchResults = allServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Drug Discovery Pro', path: '/ai-drug-discovery-pro', description: 'Revolutionary AI-powered drug discovery platform' },
        { name: 'AI Climate Solutions Pro', path: '/ai-climate-solutions-pro', description: 'Advanced climate monitoring and optimization' },
        { name: 'AI Space Technology Pro', path: '/ai-space-technology-pro', description: 'Cutting-edge space technology solutions' },
        { name: 'AI Financial Crime Detection Pro', path: '/ai-financial-crime-detection-pro', description: 'Advanced financial security and fraud detection' },
        { name: 'AI Supply Chain Optimization Pro', path: '/ai-supply-chain-optimization-pro', description: 'Intelligent supply chain management' },
        { name: 'AI Energy Grid Management Pro', path: '/ai-energy-grid-management-pro', description: 'Smart energy grid optimization' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'AI Infrastructure Monitoring Pro', path: '/ai-infrastructure-monitoring', description: 'Intelligent infrastructure monitoring and management' },
        { name: 'Blockchain Integration Services Pro', path: '/blockchain-integration-services', description: 'Complete blockchain integration solutions' },
        { name: 'AI API Management Pro', path: '/ai-api-manager', description: 'Advanced API management and monitoring' },
        { name: 'Intelligent Database Migration Pro', path: '/intelligent-database-migration', description: 'AI-powered database migration services' },
        { name: 'AI Load Testing Pro', path: '/ai-load-testing', description: 'Intelligent load testing and performance optimization' },
        { name: 'Smart Contract Security Audit Pro', path: '/smart-contract-security-audit', description: 'Comprehensive smart contract security auditing' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'AI Smart Calendar Pro', path: '/ai-smart-calendar', description: 'Intelligent calendar management and scheduling' },
        { name: 'AI CRM Assistant Pro', path: '/ai-crm-assistant', description: 'Smart CRM with AI-powered insights' },
        { name: 'AI API Manager Pro', path: '/ai-api-manager', description: 'Advanced API management and monitoring' },
        { name: 'AI Content Writer Pro', path: '/ai-content-writer', description: 'AI-powered content creation and optimization' },
        { name: 'AI Video Generator Pro', path: '/ai-video-generator', description: 'Professional video creation with AI' },
        { name: 'AI Social Media Manager Pro', path: '/ai-social-media-manager', description: 'Automated social media management' }
      ]
    },
    {
      title: 'Infrastructure',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Networking Solutions', path: '/networking', description: 'Enterprise networking design and implementation' },
        { name: 'System Health Monitoring', path: '/health', description: 'Comprehensive system health monitoring' },
        { name: 'Cybersecurity Services', path: '/cybersecurity', description: 'Advanced cybersecurity solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Seamless cloud migration services' },
        { name: 'DevOps Solutions', path: '/devops', description: 'Complete DevOps implementation and management' },
        { name: 'Database Services', path: '/database-services', description: 'Professional database management and optimization' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Our Services - AI & IT Solutions | Zion Tech Group"
        description="Comprehensive AI and IT services including AI solutions, infrastructure monitoring, micro SAAS, and specialized services. Transform your business with our cutting-edge technology."
        keywords="AI services, IT services, micro SAAS, infrastructure monitoring, cybersecurity, cloud migration, business solutions"
      />
      
      <Navigation />
<<<<<<< HEAD
      
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Our Services
=======
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Services
              </span>
>>>>>>> origin/cursor/enhance-and-expand-ziontechgroup-com-services-and-site-453e
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
<<<<<<< HEAD
              Comprehensive AI, IT, and Micro SAAS solutions designed to transform your business. 
              From cutting-edge AI platforms to robust IT infrastructure, we've got you covered.
=======

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Code, Zap, Shield, BarChart3, Users, 
  MessageSquare, Target, FileText, Video, Image, 
  Settings, Globe, Smartphone, Monitor, Database, 
  Network, Lock, Wifi, Server, HardDrive, Cpu, 
  MemoryStick, Wrench, Hammer, Paintbrush, Scissors, 
  BookOpen, Calculator, Calendar, Clock, Compass, 
  Navigation as NavIcon, PieChart, TrendingDown, 
  Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, 
  CheckCircle as CheckIcon, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Award, DollarSign, TrendingUp, CheckCircle, Star,
  Search, ExternalLink, Sparkles, Atom, Truck, 
  ChefHat, Rocket, Sprout, Scale, Stethoscope, 
  GraduationCap, Briefcase, Factory, Car, Plane, 
  Ship, Train, Home, Heart, Gamepad2, ShoppingCart,
  CreditCard, Building, Music, Camera, Printer,
  Headphones, Eye, Edit, Trash2, Plus, Minus, 
  X, Check, AlertCircle, Info, HelpCircle, Bot,
  Layers, BarChart, LineChart, Activity as ActivityIcon,
  Phone, Mail, MapPin, Clock, MessageSquare as MessageSquareIcon,
  Share2, Robot
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  pricing: {
    monthly: number;
    yearly: number;
    setup?: number;
  };
  category: string;
  icon: React.ComponentType<any>;
  popular?: boolean;
  comingSoon?: boolean;
  link: string;
  trial: string;
  roi: string;
  useCases: string[];
  industries: string[];
  color: string;
  bgColor: string;
}

const services: Service[] = [
  // AI Services
  {
    id: 'ai-business-intelligence',
    name: 'AI Business Intelligence Pro',
    description: 'Transform your data into actionable insights with AI-powered analytics, predictive modeling, and automated reporting.',
    features: [
      'Natural language queries',
      'Automated report generation',
      'Predictive analytics',
      'Real-time dashboards',
      'Data visualization',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 499, yearly: 4990, setup: 999 },
    category: 'AI Services',
    icon: Brain,
    popular: true,
    link: 'https://ziontechgroup.com/ai-business-intelligence',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Financial forecasting', 'Market analysis', 'Performance optimization', 'Risk assessment'],
    industries: ['Finance', 'Retail', 'Healthcare', 'Manufacturing'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'ai-content-generation',
    name: 'AI Content Generation Pro',
    description: 'Create high-quality content at scale with AI-powered writing, editing, and optimization tools.',
    features: [
      'GPT-4 powered content generation',
      'SEO optimization suggestions',
      'Multiple content formats',
      'Brand voice customization',
      'Plagiarism detection',
      'Content calendar integration',
      'Multi-language support',
      'Team collaboration tools'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 0 },
    category: 'AI Services',
    icon: FileText,
    popular: true,
    link: 'https://ziontechgroup.com/ai-content-generation',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Blog writing', 'Social media content', 'Email campaigns', 'Product descriptions'],
    industries: ['Marketing', 'E-commerce', 'Publishing', 'Education'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Pro',
    description: '24/7 intelligent customer support with natural language processing, sentiment analysis, and escalation management.',
    features: [
      '24/7 availability',
      'Multi-language support',
      'Sentiment analysis',
      'Escalation management',
      'Knowledge base integration',
      'Voice and text support',
      'A/B testing capabilities',
      'Custom integrations'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 499 },
    category: 'AI Services',
    icon: MessageSquare,
    popular: true,
    link: 'https://ziontechgroup.com/ai-customer-support',
    trial: '14-day free trial',
    roi: '350% ROI in 5 months',
    useCases: ['FAQ automation', 'Ticket routing', 'Live chat support', 'Voice assistance'],
    industries: ['E-commerce', 'SaaS', 'Healthcare', 'Financial Services'],
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10'
  },

  // IT Services
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure Pro',
    description: 'Comprehensive cloud solutions with AWS, Azure, and Google Cloud integration, automated scaling, and 24/7 monitoring.',
    features: [
      'Multi-cloud deployment',
      'Automated scaling',
      '24/7 monitoring',
      'Disaster recovery',
      'Security compliance',
      'Cost optimization',
      'Performance tuning',
      'Migration services'
    ],
    pricing: { monthly: 999, yearly: 9990, setup: 1999 },
    category: 'IT Services',
    icon: Cloud,
    popular: true,
    link: 'https://ziontechgroup.com/cloud-infrastructure',
    trial: '14-day free trial',
    roi: '400% ROI in 6 months',
    useCases: ['Application hosting', 'Data backup', 'Disaster recovery', 'Scalable infrastructure'],
    industries: ['SaaS', 'E-commerce', 'Healthcare', 'Finance'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Pro',
    description: 'Comprehensive security solutions with threat detection, vulnerability assessment, and incident response.',
    features: [
      'Threat detection & response',
      'Vulnerability assessment',
      'Penetration testing',
      'Security monitoring',
      'Compliance management',
      'Incident response',
      'Security training',
      '24/7 SOC support'
    ],
    pricing: { monthly: 1299, yearly: 12990, setup: 2499 },
    category: 'IT Services',
    icon: Shield,
    popular: true,
    link: 'https://ziontechgroup.com/cybersecurity',
    trial: '30-day free trial',
    roi: '500% ROI in 8 months',
    useCases: ['Threat protection', 'Compliance management', 'Security monitoring', 'Incident response'],
    industries: ['Finance', 'Healthcare', 'Government', 'E-commerce'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },
  {
    id: 'network-management',
    name: 'Network Management Pro',
    description: 'Complete network infrastructure management with monitoring, optimization, and security.',
    features: [
      'Network monitoring',
      'Performance optimization',
      'Security management',
      'Traffic analysis',
      'Bandwidth management',
      'Fault detection',
      'Capacity planning',
      '24/7 support'
    ],
    pricing: { monthly: 699, yearly: 6990, setup: 1399 },
    category: 'IT Services',
    icon: Network,
    popular: false,
    link: 'https://ziontechgroup.com/network-management',
    trial: '14-day free trial',
    roi: '300% ROI in 5 months',
    useCases: ['Network monitoring', 'Performance optimization', 'Security management', 'Capacity planning'],
    industries: ['Enterprise', 'Education', 'Healthcare', 'Manufacturing'],
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10'
  },

  // Micro SAAS
  {
    id: 'ai-project-manager',
    name: 'AI Project Manager Pro',
    description: 'Intelligent project management with predictive analytics, automated resource allocation, and smart task prioritization.',
    features: [
      'AI-powered task prioritization',
      'Predictive timeline forecasting',
      'Resource optimization algorithms',
      'Risk assessment and mitigation',
      'Team workload balancing',
      'Progress tracking automation',
      'Stakeholder communication tools',
      'Integration with 50+ tools'
    ],
    pricing: { monthly: 299, yearly: 2990, setup: 199 },
    category: 'Micro SAAS',
    icon: BarChart3,
    popular: true,
    link: 'https://ziontechgroup.com/ai-project-manager',
    trial: '14-day free trial',
    roi: '300% ROI in 6 months',
    useCases: ['Project planning', 'Resource management', 'Timeline optimization', 'Team coordination'],
    industries: ['Software Development', 'Consulting', 'Construction', 'Marketing'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    id: 'ai-social-media-manager',
    name: 'AI Social Media Manager Pro',
    description: 'Automated social media content creation, optimal posting scheduling, and engagement optimization across all platforms.',
    features: [
      'AI content generation',
      'Optimal posting time prediction',
      'Hashtag optimization',
      'Engagement analytics',
      'Multi-platform management',
      'Competitor analysis',
      'Influencer collaboration tools',
      'White-label options'
    ],
    pricing: { monthly: 199, yearly: 1990, setup: 99 },
    category: 'Micro SAAS',
    icon: Share2,
    popular: true,
    link: 'https://ziontechgroup.com/ai-social-media-manager',
    trial: '7-day free trial',
    roi: '250% ROI in 3 months',
    useCases: ['Content creation', 'Post scheduling', 'Engagement optimization', 'Analytics tracking'],
    industries: ['Marketing', 'E-commerce', 'Entertainment', 'Non-profit'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    id: 'ai-analytics-dashboard',
    name: 'AI Analytics Dashboard Pro',
    description: 'Real-time business intelligence with predictive insights, automated reporting, and data visualization.',
    features: [
      'Real-time analytics',
      'Predictive insights',
      'Custom dashboard creation',
      'Automated report generation',
      'Data visualization tools',
      'Anomaly detection',
      'Custom KPI tracking',
      'API integrations'
    ],
    pricing: { monthly: 399, yearly: 3990, setup: 299 },
    category: 'Micro SAAS',
    icon: BarChart,
    popular: true,
    link: 'https://ziontechgroup.com/ai-analytics-dashboard',
    trial: '14-day free trial',
    roi: '400% ROI in 4 months',
    useCases: ['Business intelligence', 'Performance monitoring', 'Predictive analytics', 'Custom reporting'],
    industries: ['Retail', 'Finance', 'Healthcare', 'Manufacturing'],
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },

  // Specialized Services
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Revolutionary quantum computing solutions for complex optimization problems and advanced simulations.',
    features: [
      'Quantum algorithm development',
      'Optimization problem solving',
      'Advanced simulations',
      'Quantum machine learning',
      'Cryptography solutions',
      'Research collaboration',
      'Custom quantum applications',
      'Expert consultation'
    ],
    pricing: { monthly: 4999, yearly: 49990, setup: 9999 },
    category: 'Specialized',
    icon: Atom,
    popular: false,
    link: 'https://ziontechgroup.com/quantum-computing',
    trial: '60-day free trial',
    roi: '1000% ROI in 24 months',
    useCases: ['Optimization problems', 'Cryptography', 'Machine learning', 'Scientific research'],
    industries: ['Finance', 'Pharmaceuticals', 'Research', 'Government'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    id: 'autonomous-systems',
    name: 'Autonomous Systems Pro',
    description: 'Advanced autonomous systems with AI-powered decision making, sensor integration, and real-time control.',
    features: [
      'AI decision making',
      'Sensor integration',
      'Real-time control',
      'Machine learning algorithms',
      'Safety protocols',
      'Performance optimization',
      'Custom development',
      'Integration support'
    ],
    pricing: { monthly: 2999, yearly: 29990, setup: 5999 },
    category: 'Specialized',
    icon: Robot,
    popular: false,
    link: 'https://ziontechgroup.com/autonomous-systems',
    trial: '30-day free trial',
    roi: '500% ROI in 12 months',
    useCases: ['Autonomous vehicles', 'Robotic systems', 'Industrial automation', 'Smart cities'],
    industries: ['Automotive', 'Manufacturing', 'Logistics', 'Agriculture'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    id: 'blockchain-web3',
    name: 'Blockchain & Web3 Pro',
    description: 'Comprehensive blockchain solutions with smart contracts, DeFi protocols, and Web3 applications.',
    features: [
      'Smart contract development',
      'DeFi protocol design',
      'Web3 applications',
      'Token economics',
      'Security auditing',
      'Integration services',
      'Custom blockchain solutions',
      'Expert consultation'
    ],
    pricing: { monthly: 1999, yearly: 19990, setup: 3999 },
    category: 'Specialized',
    icon: Lock,
    popular: false,
    link: 'https://ziontechgroup.com/blockchain-web3',
    trial: '30-day free trial',
    roi: '400% ROI in 8 months',
    useCases: ['DeFi protocols', 'NFT platforms', 'Smart contracts', 'Web3 applications'],
    industries: ['Finance', 'Gaming', 'Art', 'Real Estate'],
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  }
];

const categories = [
  'All',
  'AI Services',
  'IT Services',
  'Micro SAAS',
  'Specialized'
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our solutions deliver an average ROI of 350% within 6 months',
    stat: '350%'
  },
  {
    icon: Clock,
    title: 'Rapid Implementation',
    description: 'Get up and running in under 48 hours with our streamlined setup',
    stat: '48h'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with 99.9% uptime guarantee and compliance',
    stat: '99.9%'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 support from our team of certified professionals',
    stat: '24/7'
  }
];

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    company: 'MedTech Solutions',
    role: 'CTO',
    content: 'AI Business Intelligence Pro revolutionized our data analysis. We saw a 400% improvement in decision-making speed within 3 months.',
    rating: 5,
    avatar: '/images/testimonials/sarah-chen.jpg'
  },
  {
    name: 'Michael Rodriguez',
    company: 'FinTech Innovations',
    role: 'CEO',
    content: 'The cloud infrastructure solution transformed our scalability. We reduced costs by 40% while improving performance by 60%.',
    rating: 5,
    avatar: '/images/testimonials/michael-rodriguez.jpg'
  },
  {
    name: 'Emily Johnson',
    company: 'Manufacturing Corp',
    role: 'Operations Director',
    content: 'AI Project Manager Pro helped us reduce project delays by 45% and improve team productivity by 70%. The ROI was evident within 2 months.',
    rating: 5,
    avatar: '/images/testimonials/emily-johnson.jpg'
  }
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    let filtered = services;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        service.useCases.some(useCase => useCase.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredServices(filtered);
  }, [selectedCategory, searchTerm]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Our Services</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-text-advanced">
              Comprehensive Technology Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              From AI-powered business intelligence to cloud infrastructure and specialized solutions, 
              we provide the technology foundation your business needs to succeed in the digital age.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">350% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Industry Leading</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 group relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formatPrice(service.pricing.monthly)}</div>
                    <div className="text-sm text-gray-400">/month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.slice(0, 3).map((useCase, index) => (
                      <span key={index} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Trial:</span>
                    <span className="text-cyan-400 font-medium">{service.trial}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">{service.roi}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                  >
                    Learn More
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-300 mb-8">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">IT Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Micro SAAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven expertise and enterprise-grade solutions that deliver measurable business value
=======
              Comprehensive AI and IT solutions designed to transform your business operations 
              and drive unprecedented growth and efficiency.
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Grade</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Secure & Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Support</span>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Service Categories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across AI, IT, and Micro SAAS domains
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">500+ Successful Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Reach</span>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeCategory === 'all'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {searchTerm ? (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Search Results for "{searchTerm}" ({searchResults.length} found)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((service, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          {service.popular && (
                            <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full">
                              Popular
                            </span>
                          )}
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="ml-1 text-sm font-medium">{service.rating}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                      <div className="space-y-2 mb-6">
                        <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredServices.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center space-x-3 mb-8">
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                      <div>
                        <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                          {service.popular && (
                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                              Popular
                            </div>
                          )}
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <Brain className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center text-yellow-400">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="ml-1 text-sm font-medium">{service.rating}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                          <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                          <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                          <div className="space-y-2 mb-6">
                            <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                            <ul className="space-y-1">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <a
                              href={service.link}
                              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                            >
                              Learn More
                            </a>
                            <a
                              href="/contact"
                              className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                            >
                              Get Started
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
=======
        {/* Services Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of AI and IT services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <a
                        key={serviceIndex}
                        href={service.path}
                        className="block p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-300 group"
                      >
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Join hundreds of enterprises that have already transformed their operations with our AI solutions.
=======
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your specific needs and discover how our solutions can help you achieve your goals.
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
<<<<<<< HEAD
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/consultation"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
              </a>
            </div>
          </div>
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-slate-800/50 rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 text-lg">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      <div className="space-y-2 mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-lg font-bold text-cyan-400 mb-4">{service.price}</div>
                      <a 
                        href={service.link || '#'} 
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all text-center block"
                      >
                        Learn More
                      </a>
                    </div>
                  ))}
                </div>
=======
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies in the industry
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-white font-medium text-sm">{tech.name}</div>
                <div className="text-gray-400 text-xs mt-1">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {process.map((step, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">Step {step.step}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      <div className="text-sm text-cyan-400 font-medium">{step.duration}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
=======
      {/* Search and Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeCategory === 'all'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  All Services
                </button>
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Get in touch with our experts to discuss your project requirements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
=======
      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredServices.map((category) => (
            <div key={category.id} className="mb-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">{category.name}</h2>
                </div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.services.map((service, index) => (
                  <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <Link
                          to={service.link}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-all"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of enterprises that have already transformed their operations with our AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

=======
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: (302) 464-0950
              </a>
            </div>
          </div>
<<<<<<< HEAD
        </section>
      </main>
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-f003
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 neon-text">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-advanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
      <Footer />
>>>>>>> origin/cursor/website-audit-and-update-with-deployment-ce29
    </div>
  );
<<<<<<< HEAD
};

export default ServicesPage;
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5694
