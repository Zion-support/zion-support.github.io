import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import Layout from '../components/Layout';
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight } from 'lucide-react';
=======
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { 
  Network, 
  Cloud, 
  Shield, 
  Zap, 
  Server, 
  Database, 
  Code, 
  Settings, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Package,
  GraduationCap,
  DollarSign
} from 'lucide-react';
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
import Layout from '../components/Layout';
import { 
  Server, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Network, 
  ArrowRight, 
  CheckCircle, 
  Users,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12

const services = [
  {
<<<<<<< HEAD
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions for scalable and secure infrastructure.',
    icon: Cloud,
    features: ['AWS/Azure/GCP Migration', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery'],
    price: 'Starting at $3,000/month'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your digital assets.',
    icon: Shield,
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
    price: 'Starting at $2,500/month'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline development and deployment with modern DevOps practices.',
    icon: Code,
    features: ['Automated Testing', 'Continuous Integration', 'Container Orchestration', 'Monitoring'],
    price: 'Starting at $4,000/month'
  },
  {
    title: 'Database Management',
    description: 'Optimize and maintain your database infrastructure for peak performance.',
    icon: Server,
    features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
    price: 'Starting at $2,000/month'
  }
];

export default function ITServices() {
  return (
    <Layout>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, and DevOps solutions." />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                IT <span className="text-blue-300">Services</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Comprehensive IT solutions to power your business
              </p>
              <p className="text-lg mb-8 text-gray-300">
                From cloud infrastructure to cybersecurity, we provide the technology foundation your business needs to thrive.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/ai-services"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  View AI Services
                </Link>
=======
import { motion } from 'framer-motion';
import {
  Server,
  Shield,
  Cloud,
  Database,
  Network,
  Monitor,
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Zap,
  TrendingUp,
  Users,
  Lock,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Smartphone,
  Laptop,
  Building,
  BarChart3,
  Code,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket,
  Target,
  Heart,
  GraduationCap,
  PieChart,
  Truck,
  Home,
  Video,
  ClipboardList,
  Eye,
  Bot,
  Phone,
  Mail,
  MapPin,
  Activity,
  RefreshCw,
  Layers,
  Compass
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    id: 'ai-business-process-automation',
    title: 'AI-Powered Business Process Automation',
    description: 'Transform your business operations with intelligent automation that learns and adapts to your workflows',
    icon: Bot,
    features: ['Intelligent Workflow Design', 'Process Mining & Analysis', 'RPA Integration', 'Real-time Monitoring'],
    pricing: 'Starting at $2,500/month',
    category: 'AI & Automation',
    benefits: ['Reduce operational costs by 60%', 'Eliminate manual errors', 'Scale processes automatically'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    id: 'ai-cybersecurity-operations',
    title: 'AI Cybersecurity Operations Center',
    description: 'Advanced threat detection and response with AI-powered security monitoring and incident management',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', 'Security Analytics', 'Compliance Monitoring'],
    pricing: 'Starting at $3,500/month',
    category: 'Cybersecurity',
    benefits: ['99.9% threat detection accuracy', 'Real-time incident response', 'Reduced security costs'],
    marketPrice: '$8,000-25,000/month'
  },
  {
    id: 'ai-data-analytics-platform',
    title: 'AI Data Analytics Platform',
    description: 'Unlock insights from your data with advanced AI-powered analytics, machine learning, and predictive modeling',
    icon: BarChart3,
    features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Dashboards', 'Data Visualization'],
    pricing: 'Starting at $2,000/month',
    category: 'Data & Analytics',
    benefits: ['Make data-driven decisions', 'Predict future trends', 'Optimize business performance'],
    marketPrice: '$4,000-12,000/month'
  },
  {
    id: 'cloud-infrastructure-management',
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions with automated scaling, monitoring, and cost optimization',
    icon: Cloud,
    features: ['Multi-Cloud Management', 'Auto-Scaling', 'Cost Optimization', 'Disaster Recovery'],
    pricing: 'Starting at $1,500/month',
    category: 'Cloud Services',
    benefits: ['Reduce cloud costs by 40%', 'Improve reliability', 'Scale on demand'],
    marketPrice: '$3,000-10,000/month'
  },
  {
    id: 'ai-devops-automation',
    title: 'AI DevOps Automation Platform',
    description: 'Intelligent CI/CD pipelines with automated testing, deployment, and infrastructure management',
    icon: Settings,
    features: ['AI-Powered Testing', 'Automated Deployment', 'Infrastructure as Code', 'Performance Monitoring'],
    pricing: 'Starting at $2,200/month',
    category: 'DevOps & Infrastructure',
    benefits: ['90% faster deployments', 'Zero-downtime updates', 'Automated quality assurance'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    id: 'ai-customer-experience',
    title: 'AI Customer Experience Platform',
    description: 'Enhance customer satisfaction with AI-powered chatbots, personalization, and omnichannel support',
    icon: Heart,
    features: ['AI Chatbots', 'Personalization Engine', 'Omnichannel Support', 'Sentiment Analysis'],
    pricing: 'Starting at $1,800/month',
    category: 'Customer Experience',
    benefits: ['Increase customer satisfaction', 'Reduce support costs', 'Personalized experiences'],
    marketPrice: '$3,500-12,000/month'
  },
  {
    id: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization',
    description: 'Optimize your supply chain with AI-powered demand forecasting, inventory management, and logistics optimization',
    icon: Truck,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Risk Management'],
    pricing: 'Starting at $2,800/month',
    category: 'Supply Chain',
    benefits: ['Reduce inventory costs', 'Improve delivery times', 'Minimize supply chain risks'],
    marketPrice: '$6,000-20,000/month'
  },
  {
    id: 'ai-financial-services',
    title: 'AI Financial Services Platform',
    description: 'Advanced financial technology solutions with AI-powered risk assessment, fraud detection, and trading algorithms',
    icon: DollarSign,
    features: ['Risk Assessment', 'Fraud Detection', 'Algorithmic Trading', 'Regulatory Compliance'],
    pricing: 'Starting at $4,000/month',
    category: 'Financial Technology',
    benefits: ['Reduce financial risks', 'Detect fraud in real-time', 'Optimize trading strategies'],
    marketPrice: '$10,000-30,000/month'
  },
  {
    id: 'ai-healthcare-solutions',
    title: 'AI Healthcare Technology Solutions',
    description: 'Transform healthcare delivery with AI-powered diagnostics, patient management, and medical research tools',
    icon: Heart,
    features: ['Medical Image Analysis', 'Patient Risk Assessment', 'Drug Discovery', 'Clinical Decision Support'],
    pricing: 'Starting at $3,500/month',
    category: 'Healthcare Technology',
    benefits: ['Improve diagnostic accuracy', 'Reduce medical errors', 'Accelerate research'],
    marketPrice: '$8,000-25,000/month'
  },
  {
    id: 'ai-education-platform',
    title: 'AI Education Technology Platform',
    description: 'Revolutionize learning with AI-powered personalized education, adaptive learning, and intelligent tutoring systems',
    icon: GraduationCap,
    features: ['Personalized Learning', 'Adaptive Assessments', 'Intelligent Tutoring', 'Learning Analytics'],
    pricing: 'Starting at $1,200/month',
    category: 'Education Technology',
    benefits: ['Improve learning outcomes', 'Personalize education', 'Track student progress'],
    marketPrice: '$2,500-8,000/month'
  },
  {
    id: 'ai-manufacturing-optimization',
    title: 'AI Manufacturing Optimization',
    description: 'Optimize manufacturing processes with AI-powered quality control, predictive maintenance, and production planning',
    icon: Building,
    features: ['Predictive Maintenance', 'Quality Control', 'Production Optimization', 'Supply Chain Integration'],
    pricing: 'Starting at $3,000/month',
    category: 'Manufacturing Technology',
    benefits: ['Reduce downtime', 'Improve product quality', 'Optimize production efficiency'],
    marketPrice: '$6,000-18,000/month'
  },
  {
    id: 'ai-retail-solutions',
    title: 'AI Retail Technology Solutions',
    description: 'Enhance retail operations with AI-powered inventory management, customer analytics, and personalized shopping experiences',
    icon: ShoppingCart,
    features: ['Inventory Management', 'Customer Analytics', 'Personalized Recommendations', 'Price Optimization'],
    pricing: 'Starting at $2,200/month',
    category: 'Retail Technology',
    benefits: ['Increase sales', 'Optimize inventory', 'Improve customer experience'],
    marketPrice: '$4,500-15,000/month'
  },
  {
    id: 'ai-energy-management',
    title: 'AI Energy Management System',
    description: 'Optimize energy consumption with AI-powered smart grid management, renewable energy integration, and predictive analytics',
    icon: Zap,
    features: ['Smart Grid Management', 'Energy Forecasting', 'Renewable Integration', 'Cost Optimization'],
    pricing: 'Starting at $2,500/month',
    category: 'Energy Technology',
    benefits: ['Reduce energy costs', 'Optimize consumption', 'Integrate renewables'],
    marketPrice: '$5,000-15,000/month'
  },
  {
    id: 'ai-transportation-logistics',
    title: 'AI Transportation & Logistics',
    description: 'Optimize transportation and logistics with AI-powered route optimization, fleet management, and demand forecasting',
    icon: Truck,
    features: ['Route Optimization', 'Fleet Management', 'Demand Forecasting', 'Real-time Tracking'],
    pricing: 'Starting at $2,800/month',
    category: 'Transportation Technology',
    benefits: ['Reduce transportation costs', 'Improve delivery efficiency', 'Optimize routes'],
    marketPrice: '$6,000-20,000/month'
  },
  {
    id: 'ai-real-estate-platform',
    title: 'AI Real Estate Technology Platform',
    description: 'Transform real estate with AI-powered property valuation, market analysis, and intelligent property management',
    icon: Home,
    features: ['Property Valuation', 'Market Analysis', 'Tenant Screening', 'Maintenance Prediction'],
    pricing: 'Starting at $1,800/month',
    category: 'Real Estate Technology',
    benefits: ['Accurate property valuations', 'Optimize rental income', 'Predict maintenance needs'],
    marketPrice: '$3,500-12,000/month'
  },
  {
    id: 'ai-legal-tech-platform',
    title: 'AI Legal Technology Platform',
    description: 'Streamline legal operations with AI-powered document analysis, contract review, and legal research automation',
    icon: BookOpen,
    features: ['Document Analysis', 'Contract Review', 'Legal Research', 'Compliance Monitoring'],
    pricing: 'Starting at $2,500/month',
    category: 'Legal Technology',
    benefits: ['Reduce legal costs', 'Improve accuracy', 'Accelerate research'],
    marketPrice: '$5,000-18,000/month'
  },
  {
    id: 'ai-marketing-automation',
    title: 'AI Marketing Automation Platform',
    description: 'Maximize marketing ROI with AI-powered campaign optimization, customer segmentation, and personalized content delivery',
    icon: Target,
    features: ['Campaign Optimization', 'Customer Segmentation', 'Content Personalization', 'ROI Analytics'],
    pricing: 'Starting at $1,500/month',
    category: 'Marketing Technology',
    benefits: ['Increase marketing ROI', 'Personalize campaigns', 'Optimize customer targeting'],
    marketPrice: '$3,000-10,000/month'
  },
  {
    id: 'ai-hr-technology',
    title: 'AI Human Resources Technology',
    description: 'Transform HR operations with AI-powered recruitment, employee analytics, and workforce optimization',
    icon: Users,
    features: ['Talent Acquisition', 'Employee Analytics', 'Performance Management', 'Workforce Planning'],
    pricing: 'Starting at $1,800/month',
    category: 'Human Resources Technology',
    benefits: ['Improve hiring quality', 'Optimize workforce', 'Reduce HR costs'],
    marketPrice: '$3,500-12,000/month'
  },
  {
    id: 'ai-iot-platform',
    title: 'AI Internet of Things Platform',
    description: 'Connect and manage IoT devices with AI-powered data processing, device management, and predictive analytics',
    icon: Wifi,
    features: ['Device Management', 'Data Processing', 'Predictive Analytics', 'Edge Computing'],
    pricing: 'Starting at $2,200/month',
    category: 'IoT Technology',
    benefits: ['Optimize device performance', 'Predict maintenance needs', 'Process data at scale'],
    marketPrice: '$4,500-15,000/month'
  },
  {
    id: 'ai-blockchain-solutions',
    title: 'AI Blockchain Technology Solutions',
    description: 'Secure and transparent solutions with AI-powered blockchain applications, smart contracts, and decentralized systems',
    icon: Lock,
    features: ['Smart Contracts', 'Decentralized Applications', 'Cryptocurrency Integration', 'Security Protocols'],
    pricing: 'Starting at $3,500/month',
    category: 'Blockchain Technology',
    benefits: ['Enhanced security', 'Transparent transactions', 'Reduce intermediaries'],
    marketPrice: '$8,000-25,000/month'
  }
];

const categories = [
  'All',
  'AI & Automation',
  'Cybersecurity',
  'Data & Analytics',
  'Cloud Services',
  'DevOps & Infrastructure',
  'Customer Experience',
  'Supply Chain',
  'Financial Technology',
  'Healthcare Technology',
  'Education Technology',
  'Manufacturing Technology',
  'Retail Technology',
  'Energy Technology',
  'Transportation Technology',
  'Real Estate Technology',
  'Legal Technology',
  'Marketing Technology',
  'Human Resources Technology',
  'IoT Technology',
  'Blockchain Technology'
];

export default function ITServices() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <Head>
        <title>IT Services & Solutions | ZionTech Group</title>
        <meta name="description" content="Comprehensive IT services and solutions powered by AI and cutting-edge technology. Transform your business with our expert IT consulting and implementation services." />
        <meta name="keywords" content="IT services, technology solutions, AI services, cloud computing, cybersecurity, data analytics" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
=======
<<<<<<< HEAD
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud solutions for modern businesses",
    icon: Cloud,
    features: [
      "AWS, Azure, GCP Migration",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "Auto-scaling Solutions",
      "Disaster Recovery"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["99.9% uptime guarantee", "50% cost reduction", "24/7 monitoring"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    icon: Shield,
    features: [
      "Security Audits & Assessments",
      "Penetration Testing",
      "Zero-Trust Architecture",
      "Compliance & Risk Management",
      "Incident Response",
      "Security Training"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-10,000/month",
    benefits: ["Reduce security incidents by 90%", "Compliance ready", "24/7 threat monitoring"],
    setupTime: "3-6 weeks"
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes",
    icon: Zap,
    features: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Performance Optimization",
      "Automated Testing",
      "Deployment Automation"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Deploy 10x faster", "Reduce errors by 80%", "Automated scaling"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Database Management",
    description: "Optimize and secure your data infrastructure",
    icon: Database,
    features: [
      "Database Design & Optimization",
      "Data Migration Services",
      "Backup & Recovery Solutions",
      "Performance Tuning",
      "Data Security & Encryption",
      "Cloud Database Setup"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["50% faster queries", "Zero data loss", "Automated backups"],
    setupTime: "2-3 weeks"
  },
  {
    title: "Network Solutions",
    description: "Robust networking infrastructure for seamless connectivity",
    icon: Network,
    features: [
      "Network Design & Implementation",
      "VPN & Remote Access",
      "Load Balancing",
      "Network Security",
      "Monitoring & Management",
      "Cloud Networking"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,500/month",
    benefits: ["99.9% network uptime", "Enhanced security", "Remote access ready"],
    setupTime: "1-3 weeks"
  },
  {
    title: "System Administration",
    description: "Comprehensive system management and maintenance",
    icon: Server,
    features: [
      "Server Setup & Configuration",
      "System Monitoring",
      "User Management",
      "Backup Solutions",
      "Performance Optimization",
      "24/7 System Support"
    ],
    price: "Starting at $800/month",
    marketPrice: "$1,500-3,500/month",
    benefits: ["Proactive maintenance", "Reduced downtime", "Expert support"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic IT planning and digital transformation consulting",
    icon: Settings,
    features: [
      "IT Strategy Development",
      "Technology Roadmap",
      "Digital Transformation",
      "Cost Optimization",
      "Vendor Management",
      "Technology Assessment"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-12,000/month",
    benefits: ["Strategic alignment", "Cost savings", "Future-proof technology"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Managed IT Services",
    description: "Complete IT management and support services",
    icon: Server,
    features: [
      "24/7 Help Desk Support",
      "Proactive Monitoring",
      "Patch Management",
      "Security Updates",
      "Performance Optimization",
      "Incident Response"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-6,000/month",
    benefits: ["Predictable costs", "Expert support", "Proactive maintenance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "Cloud Migration Services",
    description: "Seamless migration to cloud platforms with zero downtime",
    icon: Cloud,
    features: [
      "Migration Planning",
      "Data Migration",
      "Application Migration",
      "Testing & Validation",
      "Go-live Support",
      "Post-migration Optimization"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-20,000/month",
    benefits: ["Zero downtime migration", "Cost optimization", "Enhanced security"],
    setupTime: "4-12 weeks"
  },
  {
    title: "IT Security Services",
    description: "Comprehensive security services to protect your infrastructure",
    icon: Shield,
    features: [
      "Security Assessment",
      "Vulnerability Management",
      "Security Monitoring",
      "Incident Response",
      "Security Training",
      "Compliance Auditing"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Enhanced security posture", "Compliance ready", "Reduced risk"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Comprehensive backup and disaster recovery solutions",
    icon: Database,
    features: [
      "Automated Backups",
      "Disaster Recovery Planning",
      "Data Replication",
      "Recovery Testing",
      "Cloud Backup Solutions",
      "Business Continuity"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-7,000/month",
    benefits: ["Zero data loss", "Fast recovery", "Business continuity"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IT Infrastructure Monitoring",
    description: "Advanced monitoring and alerting for your IT infrastructure",
    icon: Settings,
    features: [
      "Real-time Monitoring",
      "Performance Analytics",
      "Alert Management",
      "Capacity Planning",
      "Trend Analysis",
      "Custom Dashboards"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,500/month",
    benefits: ["Proactive issue detection", "Better performance", "Reduced downtime"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Support & Helpdesk",
    description: "Professional IT support and helpdesk services",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Issue Tracking",
      "Knowledge Base",
      "User Training",
      "Service Level Agreements"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["Fast resolution times", "Expert support", "User satisfaction"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Asset Management",
    description: "Complete IT asset lifecycle management and optimization",
    icon: Package,
    features: [
      "Asset Discovery",
      "Inventory Management",
      "License Management",
      "Lifecycle Planning",
      "Cost Optimization",
      "Compliance Tracking"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,000/month",
    benefits: ["Cost optimization", "License compliance", "Asset visibility"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IT Project Management",
    description: "Professional IT project management and implementation",
    icon: CheckCircle,
    features: [
      "Project Planning",
      "Resource Management",
      "Timeline Management",
      "Risk Assessment",
      "Quality Assurance",
      "Stakeholder Communication"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["On-time delivery", "Budget control", "Quality assurance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Training & Certification",
    description: "Comprehensive IT training and certification programs",
    icon: GraduationCap,
    features: [
      "Technical Training",
      "Certification Programs",
      "Skill Assessment",
      "Custom Training",
      "Online Learning",
      "Hands-on Labs"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Improved skills", "Certification ready", "Better performance"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Compliance & Governance",
    description: "IT compliance management and governance services",
    icon: Shield,
    features: [
      "Compliance Assessment",
      "Policy Development",
      "Audit Preparation",
      "Risk Management",
      "Governance Framework",
      "Regulatory Updates"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Compliance ready", "Risk reduction", "Audit preparation"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Vendor Management",
    description: "Strategic IT vendor management and optimization",
    icon: Settings,
    features: [
      "Vendor Assessment",
      "Contract Management",
      "Performance Monitoring",
      "Cost Optimization",
      "Relationship Management",
      "Service Level Management"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-7,000/month",
    benefits: ["Cost savings", "Better service", "Strategic partnerships"],
    setupTime: "1-2 weeks"
  },
  {
    title: "IT Innovation & R&D",
    description: "IT innovation services and emerging technology adoption",
    icon: Zap,
    features: [
      "Technology Research",
      "Proof of Concept",
      "Innovation Labs",
      "Emerging Tech Adoption",
      "Digital Transformation",
      "Future Technology Planning"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Competitive advantage", "Innovation leadership", "Future readiness"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Cost Optimization",
    description: "Strategic IT cost reduction and optimization services",
    icon: DollarSign,
    features: [
      "Cost Analysis",
      "Budget Optimization",
      "Resource Right-sizing",
      "Cloud Cost Management",
      "License Optimization",
      "ROI Analysis"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["30% cost reduction", "Better ROI", "Optimized spending"],
    setupTime: "2-3 weeks"
  }
];

const whyChooseUs = [
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in IT infrastructure",
    icon: "👥"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support for your systems",
    icon: "🛡️"
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered 500+ IT projects across industries",
    icon: "✅"
  },
  {
    title: "Cost-Effective",
    description: "Transparent pricing with no hidden costs or surprises",
    icon: "💰"
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, cybersecurity, DevOps, and system administration. Expert solutions for modern businesses."
      keywords="IT services, cloud computing, cybersecurity, DevOps, system administration, network solutions"
      canonical="https://ziontechgroup.com/it-services"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Comprehensive 
              <span className="text-blue-400"> IT Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your technology infrastructure with our expert IT services. 
              From cloud migration to cybersecurity, we provide end-to-end solutions 
              that drive business growth and operational efficiency.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <Link href="/quote" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-3xl mb-4">
                  <service.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {/* Features */}
                <ul className="text-sm text-gray-500 space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-blue-600 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                {/* Benefits */}
                {service.benefits && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-1" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pricing */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-blue-600">{service.price}</span>
                    {service.setupTime && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {service.setupTime}
                      </span>
                    )}
                  </div>
                  {service.marketPrice && (
                    <p className="text-xs text-gray-500">
                      Market rate: {service.marketPrice}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
=======
    id: 1,
    title: 'Cloud Infrastructure Setup',
    description: 'Complete cloud infrastructure setup and migration services for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Cost Optimization'],
    pricing: 'Starting at $2,500/month'
  },
  {
    id: 2,
    title: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with automated deployment and continuous integration.',
    icon: Code,
    features: ['CI/CD Pipelines', 'Container Orchestration', 'Monitoring', 'Automated Testing'],
    pricing: 'Starting at $1,800/month'
  },
  {
    id: 3,
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect your business from cyber threats.',
    icon: Shield,
    features: ['Security Audits', 'Threat Detection', 'Compliance', 'Incident Response'],
    pricing: 'Starting at $3,000/month'
  },
  {
    id: 4,
    title: 'Database Management',
    description: 'Expert database design, optimization, and management services.',
    icon: Database,
    features: ['Database Design', 'Performance Optimization', 'Backup & Recovery', 'Data Migration'],
    pricing: 'Starting at $1,500/month'
  },
  {
    id: 5,
    title: 'Network Infrastructure',
    description: 'Robust network solutions for reliable connectivity and performance.',
    icon: Network,
    features: ['Network Design', 'Security Implementation', 'Performance Monitoring', 'Troubleshooting'],
    pricing: 'Starting at $2,000/month'
  },
  {
    id: 6,
    title: 'IT Support & Maintenance',
    description: '24/7 technical support and proactive maintenance for your IT systems.',
    icon: Users,
    features: ['24/7 Support', 'Proactive Monitoring', 'System Updates', 'Troubleshooting'],
    pricing: 'Starting at $1,200/month'
  }
];

const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Infrastructure Projects" },
  { number: "100%", label: "Client Satisfaction" }
];

export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud infrastructure, DevOps, cybersecurity, database management, and 24/7 support. Transform your IT operations."
      keywords="IT services, cloud infrastructure, DevOps, cybersecurity, database management, IT support, network infrastructure"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
<<<<<<< HEAD
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services &
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth. 
                From AI-powered automation to cloud infrastructure, we deliver cutting-edge IT services.
=======
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                IT
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Services
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive IT services to keep your business running smoothly. From cloud infrastructure 
                to cybersecurity, we've got you covered.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/pricing"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Pricing
=======
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn More
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search and Filter Section */}
        <section className="py-12 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search IT services and solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800 text-white">
                      {category}
                    </option>
                  ))}
                </select>
>>>>>>> main
              </div>
=======
        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
            </div>
          </div>
        </section>

        {/* Services Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to keep your business running smoothly and securely.
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to optimize your infrastructure and support your business growth.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
=======
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD

                  <div className="mb-6">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
=======
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 text-sm">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <ArrowRight className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-white">{service.pricing}</div>
                        <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">4.9/5</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/micro-saas"
                        className="flex-1 border border-gray-300 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> main
=======
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.pricing}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's work together to build a robust, secure, and scalable IT foundation for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
=======
=======
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
<<<<<<< HEAD
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our expert team design and implement the perfect technology solution for your business needs
=======
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our IT experts help you build a robust, scalable, and secure infrastructure for your business.
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
<<<<<<< HEAD
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Custom Solution
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/micro-saas"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore Micro SaaS
=======
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get IT Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn About Us
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
                </Link>
              </div>
            </motion.div>
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-0b51
          </div>
<<<<<<< HEAD
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
>>>>>>> main
          </div>
        </section>
      </div>
=======
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their IT needs. 
            Let's discuss how we can help accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Free Consultation
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center">
              <MapPin className="w-6 h-6 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
>>>>>>> 380d5be269a380502c5b88f5cbeaaaacd40bbf12
    </Layout>
  );
}