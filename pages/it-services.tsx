import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cloud,
  Zap,
  Shield,
  Database,
  BarChart3,
  Users,
  MessageSquare,
  Search,
  Eye,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Lock,
  Cpu,
  Bot,
  FileText,
  Image,
  Video,
  Mic,
  Code,
  Settings,
  Monitor,
  Smartphone,
  Server,
  Network,
  Car,
  Rocket,
  Heart,
  Building,
  Sprout,
  Mail,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Users,
  BarChart3,
  Code,
  FileText,
  Phone,
  Car,
  Heart,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
  CreditCard,
  Calendar,
  MapPin,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Wrench,
  Wifi,
  Terminal,
  Layers,
  Activity,
  Key,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  Save,
  Play,
  Pause,
  Stop,
  Truck,
  Factory,
  Banknote,
  Target,
  TrendingUp,
  Eye,
  Bot,
  MessageSquare,
  Search,
  Video,
  Image,
  Mic,
  Calendar,
  MapPin,
  PhoneCall,
  Mail as MailIcon,
  MessageCircle,
  Headphones,
  HelpCircle,
  Wrench,
  Cog,
  Layers,
  GitBranch,
  Terminal,
  Database as DatabaseIcon,
  HardDrive as HardDriveIcon,
  Wifi as WifiIcon,
  Zap as ZapIcon,
  Users as UsersIcon,
  BarChart3 as BarChart3Icon,
  Code as CodeIcon,
  FileText as FileTextIcon,
  Mail as MailIcon2,
  Phone as PhoneIcon,
  Building as BuildingIcon,
  Car as CarIcon,
  Heart as HeartIcon,
  ShoppingCart as ShoppingCartIcon,
  BookOpen as BookOpenIcon,
  Home as HomeIcon,
  Gamepad2 as Gamepad2Icon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Factory as FactoryIcon,
  Banknote as BanknoteIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Eye as EyeIcon,
  Bot as BotIcon,
  MessageSquare as MessageSquareIcon,
  Search as SearchIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  Mic as MicIcon,
  Calendar as CalendarIcon,
  MapPin as MapPinIcon,
  PhoneCall as PhoneCallIcon,
  MessageCircle as MessageCircleIcon,
  Headphones as HeadphonesIcon,
  HelpCircle as HelpCircleIcon,
  Wrench as WrenchIcon,
  Cog as CogIcon,
  Layers as LayersIcon,
  GitBranch as GitBranchIcon,
  Terminal as TerminalIcon
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Migration & Management',
    description: 'Seamless migration to cloud platforms with ongoing management and optimization for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Data Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
    pricing: '$5,000 - $50,000 project',
    category: 'Cloud Services',
    popular: true,
    setupFee: 'Included',
    timeline: '2-8 weeks'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security implementation including threat detection, vulnerability assessment, and incident response.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Compliance Management'],
    pricing: '$3,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    setupFee: 'Included',
    timeline: '1-4 weeks'
  },
  {
    title: 'Network Infrastructure Design',
    description: 'Complete network architecture design and implementation for enterprise-grade connectivity and performance.',
    icon: Network,
    features: ['Network Design', 'Hardware Installation', 'Performance Optimization', 'Security Implementation', 'Monitoring Setup'],
    pricing: '$10,000 - $100,000 project',
    category: 'Infrastructure',
    popular: true,
    setupFee: 'Included',
    timeline: '4-12 weeks'
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support and helpdesk services with remote assistance and on-site support when needed.',
    icon: MessageSquare,
    features: ['24/7 Support', 'Remote Assistance', 'On-site Support', 'Ticket Management', 'Knowledge Base'],
    pricing: '$2,000 - $15,000/month',
    category: 'Support',
    popular: true,
    setupFee: '$1,000',
    timeline: 'Immediate'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Comprehensive data protection with automated backups, disaster recovery planning, and business continuity.',
    icon: Database,
    features: ['Automated Backups', 'Disaster Recovery', 'Business Continuity', 'Data Encryption', 'Recovery Testing'],
    pricing: '$1,500 - $10,000/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$2,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'Server Management & Maintenance',
    description: 'Complete server administration including monitoring, updates, security patches, and performance optimization.',
    icon: Server,
    features: ['Server Monitoring', 'Performance Tuning', 'Security Updates', 'Capacity Planning', 'Maintenance Scheduling'],
    pricing: '$1,000 - $8,000/month',
    category: 'Infrastructure',
    popular: true,
    setupFee: '$1,500',
    timeline: '1 week'
  },
  {
    title: 'Software Development & Integration',
    description: 'Custom software development and integration services for business-specific applications and workflows.',
    icon: Code,
    features: ['Custom Development', 'API Integration', 'Legacy System Migration', 'Testing & QA', 'Documentation'],
    pricing: '$15,000 - $200,000 project',
    category: 'Development',
    popular: true,
    setupFee: 'Included',
    timeline: '8-24 weeks'
  },
  {
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT planning and consulting to align technology with business objectives and digital transformation.',
    icon: Target,
    features: ['IT Strategy Planning', 'Technology Assessment', 'Digital Transformation', 'ROI Analysis', 'Implementation Roadmap'],
    pricing: '$200 - $500/hour',
    category: 'Consulting',
    popular: true,
    setupFee: 'N/A',
    timeline: '1-4 weeks'
  },
  {
    title: 'Email & Communication Systems',
    description: 'Enterprise email solutions, unified communications, and collaboration platform implementation and management.',
    icon: Mail,
    features: ['Email Migration', 'Unified Communications', 'Collaboration Tools', 'Security Implementation', 'User Training'],
    pricing: '$2,000 - $15,000 setup',
    category: 'Communication',
    popular: true,
    setupFee: 'Included',
    timeline: '2-4 weeks'
  },
  {
    title: 'Database Administration',
    description: 'Database design, optimization, maintenance, and administration for SQL Server, MySQL, PostgreSQL, and NoSQL databases.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Monitoring & Alerts'],
    pricing: '$1,500 - $12,000/month',
    category: 'Data Management',
    popular: true,
    setupFee: '$2,500',
    timeline: '1-3 weeks'
  },
  {
    title: 'Virtualization & Containerization',
    description: 'VMware, Hyper-V, and Docker containerization services for improved resource utilization and scalability.',
    icon: Layers,
    features: ['VMware Implementation', 'Docker Containers', 'Resource Optimization', 'High Availability', 'Disaster Recovery'],
    pricing: '$5,000 - $40,000 project',
    category: 'Infrastructure',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management including security, app deployment, and device lifecycle management.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe', 'Compliance Monitoring'],
    pricing: '$500 - $3,000/month',
    category: 'Mobile Management',
    popular: true,
    setupFee: '$1,000',
    timeline: '1-2 weeks'
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset lifecycle management including inventory, licensing, maintenance, and disposal.',
    icon: Package,
    features: ['Asset Inventory', 'License Management', 'Maintenance Tracking', 'Disposal Planning', 'Cost Analysis'],
    pricing: '$1,000 - $5,000/month',
    category: 'Asset Management',
    popular: true,
    setupFee: '$2,000',
    timeline: '2-4 weeks'
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security including firewalls, intrusion detection, VPN, and secure remote access solutions.',
    icon: Lock,
    features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Access Control', 'Security Monitoring'],
    pricing: '$5,000 - $30,000 setup',
    category: 'Security',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'IT Compliance & Auditing',
    description: 'Compliance management and auditing services for SOX, HIPAA, GDPR, and other regulatory requirements.',
    icon: CheckCircle2,
    features: ['Compliance Assessment', 'Audit Preparation', 'Policy Development', 'Training Programs', 'Ongoing Monitoring'],
    pricing: '$3,000 - $20,000 project',
    category: 'Compliance',
    popular: true,
    setupFee: 'Included',
    timeline: '2-8 weeks'
  },
  {
    title: 'Performance Monitoring & Analytics',
    description: 'Comprehensive IT performance monitoring with real-time analytics, alerting, and capacity planning.',
    icon: Activity,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning', 'Reporting'],
    pricing: '$1,000 - $8,000/month',
    category: 'Monitoring',
    popular: true,
    setupFee: '$1,500',
    timeline: '1-2 weeks'
  },
  {
    title: 'IT Training & Documentation',
    description: 'Comprehensive IT training programs and documentation for staff and end-users on various technologies.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Technical Documentation', 'User Manuals', 'Video Tutorials', 'Certification Prep'],
    pricing: '$150 - $300/hour',
    category: 'Training',
    popular: true,
    setupFee: 'N/A',
    timeline: '1-4 weeks'
  },
  {
    title: 'Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation to ensure business continuity during outages.',
    icon: AlertTriangle,
    features: ['Risk Assessment', 'Recovery Planning', 'Testing & Validation', 'Documentation', 'Staff Training'],
    pricing: '$5,000 - $25,000 project',
    category: 'Disaster Recovery',
    popular: true,
    setupFee: 'Included',
    timeline: '2-6 weeks'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management services for complex technology implementations and system upgrades.',
    icon: Calendar,
    features: ['Project Planning', 'Resource Management', 'Timeline Management', 'Risk Assessment', 'Stakeholder Communication'],
    pricing: '$200 - $400/hour',
    category: 'Project Management',
    popular: true,
    setupFee: 'N/A',
    timeline: 'Varies'
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Specialized cloud security services including compliance management and security architecture design.',
    icon: Shield,
    features: ['Security Architecture', 'Compliance Management', 'Identity & Access Management', 'Data Protection', 'Audit Support'],
    pricing: '$3,000 - $25,000 project',
    category: 'Cloud Security',
    popular: true,
    setupFee: 'Included',
    timeline: '2-8 weeks'
  },
  {
    title: 'IT Infrastructure Assessment',
    description: 'Comprehensive assessment of existing IT infrastructure with recommendations for improvement and optimization.',
    icon: Search,
    features: ['Infrastructure Audit', 'Performance Analysis', 'Security Assessment', 'Cost Optimization', 'Recommendations'],
    pricing: '$2,000 - $15,000 project',
    category: 'Assessment',
    popular: true,
    setupFee: 'Included',
    timeline: '1-4 weeks'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security services to protect your business from cyber threats.',
    icon: Shield,
    features: ['Security Assessment', 'Penetration Testing', 'Firewall Configuration', 'Incident Response'],
    pricing: '$3,000 - $25,000 setup',
    category: 'Security',
    popular: true,
    benefits: ['Protection from Cyber Attacks', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Hardware Installation', 'Performance Optimization', 'Troubleshooting'],
    pricing: '$2,000 - $30,000 project',
    category: 'Infrastructure',
    popular: true,
    benefits: ['Reliable Connectivity', 'Improved Performance', 'Scalable Architecture', 'Reduced Downtime']
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support and helpdesk services for your organization.',
    icon: Headphones,
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
    pricing: '$500 - $3,000/month',
    category: 'Support',
    popular: true,
    benefits: ['Minimized Downtime', 'Expert Assistance', 'Proactive Monitoring', 'Cost Efficiency']
  },
  {
    title: 'Database Management',
    description: 'Database design, optimization, and maintenance services.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
    pricing: '$1,500 - $15,000 project',
    category: 'Data Management',
    benefits: ['Optimized Performance', 'Data Security', 'Reliable Backups', 'Scalable Solutions']
  },
  {
    title: 'Server Administration',
    description: 'Complete server management including setup, monitoring, and maintenance.',
    icon: Server,
    features: ['Server Setup', 'Performance Monitoring', 'Security Updates', 'Disaster Recovery'],
    pricing: '$800 - $5,000/month',
    category: 'Infrastructure',
    benefits: ['Reliable Operations', 'Proactive Maintenance', 'Security Updates', 'Cost Savings']
  },
  {
    title: 'DevOps & Automation',
    description: 'DevOps implementation with CI/CD pipelines and infrastructure automation.',
    icon: GitBranch,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Deployment Automation'],
    pricing: '$5,000 - $40,000 project',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployments', 'Reduced Errors', 'Improved Collaboration', 'Scalable Processes']
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: HardDrive,
    features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Testing & Validation'],
    pricing: '$1,000 - $10,000 setup',
    category: 'Data Protection',
    benefits: ['Data Security', 'Business Continuity', 'Compliance', 'Peace of Mind']
  },
  {
    title: 'Email & Communication Systems',
    description: 'Email server setup, migration, and communication platform management.',
    icon: Mail,
    features: ['Email Migration', 'Spam Protection', 'Mobile Sync', 'Archiving'],
    pricing: '$1,200 - $8,000 project',
    category: 'Communication',
    benefits: ['Reliable Email', 'Enhanced Security', 'Mobile Access', 'Reduced Spam']
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Guidance'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    popular: true,
    benefits: ['Strategic Alignment', 'Cost Optimization', 'Risk Mitigation', 'Technology Roadmap']
  },
  {
    title: 'Software Installation & Licensing',
    description: 'Software deployment, licensing management, and compliance monitoring.',
    icon: Package,
    features: ['Software Deployment', 'License Management', 'Compliance Monitoring', 'Updates & Patches'],
    pricing: '$500 - $5,000 project',
    category: 'Software Management',
    benefits: ['Compliance Assurance', 'Cost Control', 'Centralized Management', 'Automated Updates']
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe'],
    pricing: '$2 - $10/device/month',
    category: 'Mobile Management',
    benefits: ['Enhanced Security', 'Centralized Control', 'Cost Management', 'Compliance']
  },
  {
    title: 'IT Asset Management',
    description: 'Complete IT asset tracking, management, and lifecycle optimization.',
    icon: Layers,
    features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Compliance Reporting'],
    pricing: '$1,000 - $8,000 setup',
    category: 'Asset Management',
    benefits: ['Cost Optimization', 'Compliance', 'Asset Visibility', 'Lifecycle Planning']
  },
  {
    title: 'Network Security',
    description: 'Advanced network security solutions including firewalls and intrusion detection.',
    icon: Lock,
    features: ['Firewall Configuration', 'Intrusion Detection', 'VPN Setup', 'Security Monitoring'],
    pricing: '$2,000 - $20,000 setup',
    category: 'Security',
    benefits: ['Network Protection', 'Threat Detection', 'Secure Remote Access', 'Compliance']
  },
  {
    title: 'IT Training & Documentation',
    description: 'Staff training and comprehensive IT documentation services.',
    icon: BookOpen,
    features: ['Staff Training', 'Documentation Creation', 'Process Optimization', 'Knowledge Transfer'],
    pricing: '$100 - $200/hour',
    category: 'Training',
    benefits: ['Improved Productivity', 'Reduced Support Tickets', 'Knowledge Retention', 'Process Efficiency']
  },
  {
    title: 'Virtual Desktop Infrastructure (VDI)',
    description: 'VDI implementation for secure, scalable desktop virtualization.',
    icon: Monitor,
    features: ['VDI Setup', 'Performance Optimization', 'Security Configuration', 'User Management'],
    pricing: '$5,000 - $35,000 project',
    category: 'Virtualization',
    benefits: ['Centralized Management', 'Enhanced Security', 'Cost Savings', 'Flexible Access']
  },
  {
    title: 'IT Compliance & Auditing',
    description: 'Compliance assessment and auditing services for various industry standards.',
    icon: CheckCircle,
    features: ['Compliance Assessment', 'Audit Preparation', 'Gap Analysis', 'Remediation Planning'],
    pricing: '$3,000 - $25,000 project',
    category: 'Compliance',
    benefits: ['Regulatory Compliance', 'Risk Mitigation', 'Audit Readiness', 'Process Improvement']
  },
  {
    title: 'IT Project Management',
    description: 'Professional project management for IT implementations and upgrades.',
    icon: Calendar,
    features: ['Project Planning', 'Resource Management', 'Timeline Tracking', 'Risk Management'],
    pricing: '$1,500 - $5,000/month',
    category: 'Project Management',
    benefits: ['On-time Delivery', 'Budget Control', 'Quality Assurance', 'Stakeholder Communication']
  },
  {
    title: 'IT Cost Optimization',
    description: 'Comprehensive analysis and optimization of IT costs and resources.',
    icon: TrendingUp,
    features: ['Cost Analysis', 'Resource Optimization', 'Vendor Negotiation', 'ROI Tracking'],
    pricing: '$2,000 - $15,000 project',
    category: 'Cost Optimization',
    benefits: ['Reduced Costs', 'Improved ROI', 'Resource Efficiency', 'Budget Optimization']
  }
];

const categories = [
  'All Services',
  'Cloud Services',
  'Security',
  'Infrastructure',
  'Support',
  'Data Management',
  'Development',
  'Consulting',
  'Communication',
  'Mobile Management',
  'Asset Management',
  'Compliance',
  'Monitoring',
  'Training',
  'Disaster Recovery',
  'Project Management',
  'Cloud Security',
  'Assessment',
  'DevOps',
  'Data Protection',
  'Software Management',
  'Mobile Management',
  'Asset Management',
  'Training',
  'Virtualization',
  'Compliance',
  'Project Management',
  'Cost Optimization'
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified professionals with years of experience in enterprise IT solutions"
  },
  {
    icon: Star,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring for your critical systems"
  },
  {
    icon: Users,
    title: "Proven Track Record",
    description: "Successfully completed 500+ IT projects for businesses of all sizes"
  },
  {
    icon: Award,
    title: "Cutting-Edge Technology",
    description: "Latest technologies and best practices to keep your systems modern and secure"
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Comprehensive security measures and compliance"
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of successful implementations"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "We analyze your current IT infrastructure and identify areas for improvement"
  },
  {
    step: "02",
    title: "Planning",
    description: "Develop a comprehensive strategy tailored to your business needs and goals"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Execute the plan with minimal disruption to your business operations"
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing maintenance and support to ensure optimal performance"
  }
];

export default function ITServicesPage() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and technical support. Expert team delivering enterprise-grade solutions." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network infrastructure, IT support, technical consulting, enterprise solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                IT Services & Solutions
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Comprehensive IT services to power your digital transformation and business growth
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="#services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Services
                </Link>
                <Link href="#contact" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Quote
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Expert Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
=======
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud migration, cybersecurity, network infrastructure, and 24/7 support. Expert team delivering reliable technology solutions."
      keywords="IT services, cloud migration, cybersecurity, network infrastructure, IT support, DevOps, database management"
    >
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions including cloud migration, cybersecurity, network infrastructure, and 24/7 support to keep your business running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Started
                </Link>
                <Link
                  href="#services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive digital transformation
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                      {service.popular && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      <div>Setup: {service.setupFee}</div>
                      <div>Timeline: {service.timeline}</div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                      Get Quote
                    </button>
                  </div>
                </motion.div>
              ))}
=======
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and ensure operational excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {itServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </div>
                    )}
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-12 w-12 text-blue-600 mr-4" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-blue-600 font-semibold">{service.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="mb-4">
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional IT solutions that drive business success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
=======
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional value through expertise, reliability, and customer-focused solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology for delivering successful IT solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
=======
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your IT?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact us today to discuss your IT needs and get a customized solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/micro-saas" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}