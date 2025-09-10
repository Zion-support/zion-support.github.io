import React from 'react';
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
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
  Rocket
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Migration & Management',
    description: 'Seamless migration to cloud platforms with ongoing management and optimization for AWS, Azure, and Google Cloud.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud',
    popular: true
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$5,000 - $40,000/project',
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
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220/hour',
    category: 'Networking'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database'
  },
  {
    title: 'System Administration',
    description: '24/7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2,000 - $8,000/month',
    category: 'Administration'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300/hour',
    category: 'Consulting'
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',
    icon: Server,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    pricing: '$10,000 - $50,000/project',
    category: 'DevOps',
    popular: true
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.',
    icon: HardDrive,
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization'],
    pricing: '$15,000 - $100,000/project',
    category: 'Migration'
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management and optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Asset Management'
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: Shield,
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance'],
    pricing: '$2,000 - $20,000/setup',
    category: 'Backup & Recovery'
  },
  {
    title: 'Network Security Implementation',
    description: 'Advanced network security solutions including firewalls, VPNs, and intrusion detection.',
    icon: Lock,
    features: ['Firewall Configuration', 'VPN Setup', 'Intrusion Detection', 'Security Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'Network Security'
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Cloud security implementation and compliance with industry standards.',
    icon: Shield,
    features: ['Security Hardening', 'Compliance Auditing', 'Access Management', 'Threat Protection'],
    pricing: '$8,000 - $40,000/project',
    category: 'Cloud Security'
  },
  {
    title: 'IT Support & Help Desk',
    description: '24/7 IT support and help desk services for your organization.',
    icon: Users,
    features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base'],
    pricing: '$1,500 - $6,000/month',
    category: 'Support'
  },
  {
    title: 'Software Development Services',
    description: 'Custom software development and application modernization services.',
    icon: Code,
    features: ['Custom Development', 'Legacy Modernization', 'API Development', 'Quality Assurance'],
    pricing: '$100 - $200/hour',
    category: 'Development'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management and implementation services.',
    icon: BarChart3,
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Quality Control'],
    pricing: '$150 - $300/hour',
    category: 'Project Management'
  },
  {
    title: 'Mobile Device Management',
    description: 'Comprehensive mobile device management and security solutions.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Policy Management', 'App Distribution', 'Security Controls'],
    pricing: '$2,000 - $10,000/setup',
    category: 'Mobile Management'
  },
  {
    title: 'IT Training & Certification',
    description: 'IT training programs and certification preparation for your team.',
    icon: BookOpen,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$200 - $500/person/day',
    category: 'Training'
  },
  {
    title: 'IT Audit & Assessment',
    description: 'Comprehensive IT infrastructure audit and security assessment services.',
    icon: Search,
    features: ['Infrastructure Audit', 'Security Assessment', 'Compliance Review', 'Recommendations'],
    pricing: '$5,000 - $25,000/project',
    category: 'Audit & Assessment'
  },
  {
    title: 'IT Procurement & Vendor Management',
    description: 'Strategic IT procurement and vendor relationship management services.',
    icon: ShoppingCart,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Procurement Process', 'Vendor Management'],
    pricing: '$150 - $300/hour',
    category: 'Procurement'
  },
  {
    title: 'IT Governance & Strategy',
    description: 'IT governance framework development and strategic technology planning.',
    icon: Building,
    features: ['Governance Framework', 'Strategic Planning', 'Policy Development', 'Risk Management'],
    pricing: '$10,000 - $50,000/project',
    category: 'Governance'
  },
  {
    title: 'IT Compliance & Regulatory',
    description: 'Compliance management for various regulatory requirements and standards.',
    icon: Shield,
    features: ['Compliance Assessment', 'Regulatory Reporting', 'Policy Development', 'Audit Support'],
    pricing: '$8,000 - $40,000/project',
    category: 'Compliance'
  },
  {
title: 'AI-Powered IT Operations (AIOps)',
    description: 'Intelligent IT operations using AI and machine learning for predictive maintenance and automation.',
    icon: CpuIcon,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Anomaly Detection', 'Self-healing Systems'],
    pricing: '$15,000 - $75,000/setup',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$25,000 - $150,000/project',
    category: 'Zero Trust',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes Deployment', 'Latency Optimization', 'IoT Integration', 'Distributed Processing'],
    pricing: '$20,000 - $100,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Quantum-Safe Cryptography Implementation',
    description: 'Migration to quantum-resistant cryptographic algorithms and security protocols.',
    icon: Shield,
    features: ['Algorithm Migration', 'Key Management', 'Compliance Testing', 'Future-proofing'],
    pricing: '$30,000 - $200,000/project',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: '5G Network Infrastructure',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Core Design', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: '5G Networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and DApps.',
    icon: Server,
    features: ['Private Blockchain Networks', 'Smart Contract Development', 'Node Management', 'Consensus Mechanisms'],
    pricing: '$40,000 - $300,000/project',
    category: 'Blockchain',
    popular: true
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management for connected environments.',
    icon: Smartphone,
    features: ['Device Authentication', 'Firmware Updates', 'Threat Detection', 'Compliance Monitoring'],
    pricing: '$25,000 - $150,000/setup',
    category: 'IoT Security',
    popular: true
  },
  {
    title: 'Hybrid Cloud Orchestration',
    description: 'Seamless orchestration and management across multiple cloud and on-premises environments.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Workload Migration', 'Cost Optimization', 'Unified Monitoring'],
    pricing: '$30,000 - $200,000/project',
    category: 'Hybrid Cloud',
    popular: true
  },
  {
    title: 'AI Model Infrastructure & MLOps',
    description: 'Complete infrastructure for AI model deployment, monitoring, and lifecycle management.',
    icon: Brain,
    features: ['Model Deployment', 'A/B Testing', 'Performance Monitoring', 'Auto-scaling'],
    pricing: '$20,000 - $100,000/setup',
    category: 'MLOps',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT practices including energy optimization and carbon footprint reduction.',
    icon: Sprout,
    features: ['Energy Monitoring', 'Carbon Tracking', 'Efficient Cooling', 'Renewable Energy Integration'],
    pricing: '$15,000 - $80,000/project',
    category: 'Green IT',
    popular: true
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin technology implementation for physical assets and processes.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'Integration APIs'],
    pricing: '$40,000 - $250,000/project',
    category: 'Digital Twins',
    popular: true
  },
  {
    title: 'AR/VR Infrastructure & Development',
    description: 'Augmented and virtual reality infrastructure setup and application development.',
    icon: Eye,
    features: ['VR/AR Hardware Setup', 'Content Development', 'Spatial Computing', 'User Experience Design'],
    pricing: '$25,000 - $150,000/project',
    category: 'AR/VR',
    popular: true
  },
  {
    title: 'Robotic Process Automation (RPA)',
    description: 'Implementation of RPA solutions for business process automation and optimization.',
    icon: Bot,
    features: ['Process Analysis', 'Bot Development', 'Workflow Automation', 'Performance Monitoring'],
    pricing: '$10,000 - $60,000/project',
    category: 'RPA',
    popular: true
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
    title: 'Enhanced Security',
    description: 'Enterprise-grade protection',
    stat: '100%'
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
<div className="absolute inset-0">
                  <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse">
                  </div>
                  <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000">
                  </div>
                  </div>
                  <div className="container mx-auto px-4 relative z-10">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<div className="flex items-center justify-center mb-6">
                  <Server className="h-16 w-16 text-green-400 mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                IT{' '}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Services
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
className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
whileHover={{ y: -5 }} ">
                  <div className="flex items-center justify-between mb-4">
                  <div className="text-green-600 group-hover:text-emerald-600 transition-colors">
                  <IconComponent className="w-10 h-10" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mb-4">
<h4 className="font-semibold text-gray-900 mb-2 text-sm">Key "Features": </h4>
                  <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                  <span className="text-sm font-semibold text-green-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-green-600 hover: bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                  >
                    <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
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
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
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