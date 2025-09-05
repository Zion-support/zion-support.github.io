import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
<<<<<<< HEAD
  Sprout,
  Eye,
  Bot,
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
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
<<<<<<< HEAD
  Rocket
} from 'lucide-react';
const itServices = [{
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
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
    popular: true
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
    icon: Cpu,
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
    title: 'Data Mesh Architecture Implementation',
    description: 'Modern data architecture using data mesh principles for decentralized data management.',
    icon: Database,
    features: ['Domain-driven Design', 'Data Product Development', 'Federated Governance', 'Self-service Analytics'],
    pricing: '$50,000 - $300,000/project',
    category: 'Data Architecture',
    popular: true
  },
  {
    title: 'Serverless Architecture Design',
    description: 'Serverless computing solutions for scalable and cost-effective application deployment.',
    icon: Cloud,
    features: ['Function-as-a-Service', 'Event-driven Architecture', 'Auto-scaling', 'Cost Optimization'],
    pricing: '$15,000 - $80,000/project',
    category: 'Serverless',
    popular: true
  },
  {
    title: 'API Gateway & Management Platform',
    description: 'Comprehensive API management including security, monitoring, and developer portal.',
    icon: Network,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal'],
    pricing: '$10,000 - $50,000/setup',
    category: 'API Management',
    popular: true
  },
  {
    title: 'Microservices Architecture Migration',
    description: 'Migration from monolithic to microservices architecture with container orchestration.',
    icon: Server,
    features: ['Service Decomposition', 'Container Orchestration', 'Service Mesh', 'Monitoring Setup'],
    pricing: '$40,000 - $250,000/project',
    category: 'Microservices',
    popular: true
  },
  {
    title: 'IT Service Management (ITSM) Platform',
    description: 'Comprehensive ITSM solution with ITIL best practices and automation.',
    icon: Settings,
    features: ['Incident Management', 'Change Management', 'Service Catalog', 'Knowledge Management'],
    pricing: '$20,000 - $100,000/setup',
    category: 'ITSM',
    popular: true
  },
  {
    title: 'Cyber Threat Intelligence Platform',
    description: 'Advanced threat intelligence and security information management system.',
    icon: Shield,
    features: ['Threat Detection', 'Intelligence Feeds', 'Incident Response', 'Threat Hunting'],
    pricing: '$30,000 - $150,000/setup',
    category: 'Threat Intelligence',
    popular: true
  },
  {
    title: 'AI-Powered IT Operations Management',
    description: 'Intelligent IT operations with automated incident response and predictive maintenance.',
    icon: Cpu,
    features: ['Automated Incident Response', 'Predictive Maintenance', 'Performance Optimization', 'Root Cause Analysis'],
    pricing: '$5,000 - $25,000/month',
    category: 'AIOps',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation with identity verification and micro-segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Zero Trust Security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Edge computing solutions for low-latency applications and IoT deployments.',
    icon: Network,
    features: ['Edge Nodes', 'Low Latency', 'IoT Integration', 'Distributed Processing'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Unified management of hybrid cloud environments across multiple providers.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Compliance', 'Workload Migration'],
    pricing: '$8,000 - $40,000/month',
    category: 'Hybrid Cloud',
    popular: true
  },
  {
    title: 'API Gateway & Management',
    description: 'Comprehensive API management with security, monitoring, and developer portal.',
    icon: Code,
    features: ['API Security', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal'],
    pricing: '$3,000 - $15,000/month',
    category: 'API Management',
    popular: true
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'Complete ITSM implementation with service desk, change management, and asset tracking.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Asset Tracking', 'SLA Management'],
    pricing: '$5,000 - $25,000/setup',
    category: 'ITSM',
    popular: true
  },
  {
    title: 'Data Center Modernization',
    description: 'Modern data center design and implementation with energy efficiency and scalability.',
    icon: Server,
    features: ['Modern Architecture', 'Energy Efficiency', 'Scalable Design', 'Disaster Recovery'],
    pricing: '$50,000 - $500,000/project',
    category: 'Data Center',
    popular: true
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Comprehensive IT compliance management with automated reporting and audit trails.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Automated Reporting', 'Audit Trails', 'Policy Management'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Compliance',
    popular: true
  },
  {
    title: 'Microservices Architecture',
    description: 'Microservices design and implementation with container orchestration and service mesh.',
    icon: Server,
    features: ['Service Design', 'Container Orchestration', 'Service Mesh', 'API Gateway'],
    pricing: '$25,000 - $150,000/project',
    category: 'Microservices',
    popular: true
  },
  {
    title: 'IT Automation & Orchestration',
    description: 'Comprehensive IT automation with workflow orchestration and self-healing systems.',
    icon: Settings,
    features: ['Workflow Automation', 'Self-healing Systems', 'Configuration Management', 'Deployment Automation'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Automation',
    popular: true
  },
  {
    title: 'Digital Workplace Solutions',
    description: 'Modern digital workplace implementation with collaboration tools and productivity solutions.',
    icon: Users,
    features: ['Collaboration Tools', 'Productivity Solutions', 'Unified Communications', 'Mobile Access'],
    pricing: '$8,000 - $40,000/setup',
    category: 'Digital Workplace',
    popular: true
  },
  {
    title: 'IT Performance Monitoring',
    description: 'Comprehensive IT performance monitoring with real-time analytics and alerting.',
    icon: Monitor,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Automated Alerting', 'Capacity Planning'],
    pricing: '$3,000 - $15,000/month',
    category: 'Performance Monitoring',
    popular: true
  },
  {
    title: 'Cloud Cost Optimization',
    description: 'Intelligent cloud cost optimization with automated rightsizing and resource management.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Automated Rightsizing', 'Resource Optimization', 'Budget Management'],
    pricing: '$2,000 - $10,000/month',
    category: 'Cloud Optimization',
    popular: true
  },
  {
    title: 'IT Disaster Recovery Planning',
    description: 'Comprehensive disaster recovery planning and implementation with testing and validation.',
    icon: Shield,
    features: ['Recovery Planning', 'Testing & Validation', 'RTO/RPO Optimization', 'Business Continuity'],
    pricing: '$15,000 - $75,000/project',
    category: 'Disaster Recovery',
    popular: true
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
];
const benefits = [{
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Proactive monitoring and maintenance',
    stat: '99.9%'
  },
  {
    icon: Zap,
    title: 'Cost Savings',
    description: 'Optimized infrastructure and processes',
    stat: '40%'
  },
  {
    icon: Shield,
    title: 'Enhanced Security',
    description: 'Enterprise-grade protection',
    stat: '100%'
  },
  {
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Flexible and scalable solutions',
    stat: 'Unlimited'
  }
];
const supportLevels = [{
    name: 'Basic Support',
    description: 'Standard business hours support',
    features: ['Email Support', 'Phone Support', 'Basic Monitoring', 'Monthly Reports'],
    pricing: '$1,000/month'
  },
  {
    name: 'Premium Support',
    description: 'Extended hours and priority support',
    features: ['24/7 Support', 'Priority Response', 'Advanced Monitoring', 'Weekly Reports'],
    pricing: '$3,000/month'
  },
  {
    name: 'Enterprise Support',
    description: 'Dedicated support team and SLA guarantees',
    features: ['Dedicated Team', 'SLA Guarantees', 'Custom Monitoring', 'Real-time Reports'],
    pricing: 'Custom Pricing'
  }
];
export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <Head>
                  <title>IT Services - Zion Tech Group</title>
                  <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration." />
                  <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, system administration" />
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
                  </div>
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly. From cloud infrastructure to cybersecurity, we&apos;ve got you covered.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Get IT Consultation
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our IT Solutions
            </h2>
                  <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              End-to-end IT services designed to optimize your infrastructure and ensure business continuity.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
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
=======
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
  Compass,
  Lightning
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
    title: 'Quantum-Safe Cloud Infrastructure',
    description: 'Future-proof cloud solutions with quantum-resistant encryption and advanced security protocols.',
    icon: Cloud,
    features: ['Quantum-resistant encryption', 'Advanced threat protection', 'Zero-trust architecture', 'Compliance automation'],
    pricing: '$4,200 - $15,000/month',
    category: 'Cloud Security',
    benefits: ['Future-proof security', 'Advanced protection', 'Compliance ready', 'Scalable infrastructure'],
    marketPrice: '$6,500 - $22,000/month',
    link: 'https://ziontechgroup.com/quantum-cloud',
    popular: true
  },
  {
    title: 'AI-Powered Network Intelligence',
    description: 'Intelligent network management with predictive analytics, automated optimization, and threat detection.',
    icon: Network,
    features: ['Predictive network analytics', 'Automated optimization', 'Threat detection', 'Performance monitoring'],
    pricing: '$2,800 - $9,500/month',
    category: 'Network Management',
    benefits: ['Improve network performance by 40%', 'Reduce downtime by 70%', 'Automated optimization', 'Proactive monitoring'],
    marketPrice: '$4,500 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-network',
    popular: false
  },
  {
    title: 'Smart Data Center Management',
    description: 'AI-driven data center operations with predictive maintenance, energy optimization, and automated management.',
    icon: Server,
    features: ['Predictive maintenance', 'Energy optimization', 'Automated management', 'Capacity planning'],
    pricing: '$3,200 - $11,000/month',
    category: 'Data Center',
    benefits: ['Reduce energy costs by 35%', 'Prevent equipment failures', 'Optimize capacity usage', 'Automated operations'],
    marketPrice: '$5,000 - $16,000/month',
    link: 'https://ziontechgroup.com/smart-datacenter',
    popular: true
  },
  {
    title: 'AI-Powered IT Asset Management',
    description: 'Intelligent asset lifecycle management with predictive analytics and automated optimization.',
    icon: HardDrive,
    features: ['Asset lifecycle tracking', 'Predictive analytics', 'Automated optimization', 'Cost analysis'],
    pricing: '$1,800 - $6,500/month',
    category: 'Asset Management',
    benefits: ['Optimize asset utilization', 'Reduce costs by 25%', 'Prevent asset failures', 'Automated management'],
    marketPrice: '$3,000 - $10,000/month',
    link: 'https://ziontechgroup.com/ai-asset-management',
    popular: false
  },
  {
    title: 'Advanced Threat Intelligence Platform',
    description: 'Comprehensive threat intelligence with AI analysis, automated response, and global threat monitoring.',
    icon: Shield,
    features: ['Global threat monitoring', 'AI threat analysis', 'Automated response', 'Threat hunting'],
    pricing: '$4,500 - $16,000/month',
    category: 'Cybersecurity',
    benefits: ['Detect threats 10x faster', 'Automated response', 'Global threat visibility', 'Proactive protection'],
    marketPrice: '$7,000 - $25,000/month',
    link: 'https://ziontechgroup.com/threat-intelligence',
    popular: true
  },
  {
    title: 'AI-Powered Backup & Disaster Recovery',
    description: 'Intelligent backup solutions with automated testing, recovery optimization, and business continuity planning.',
    icon: Database,
    features: ['Automated backup testing', 'Recovery optimization', 'Business continuity', 'Ransomware protection'],
    pricing: '$2,200 - $8,500/month',
    category: 'Data Protection',
    benefits: ['99.9% recovery success rate', 'Reduce recovery time by 60%', 'Automated testing', 'Business continuity'],
    marketPrice: '$3,500 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-backup',
    popular: true
  },
  {
    title: 'Smart IT Service Desk',
    description: 'AI-powered service desk with intelligent ticket routing, automated resolution, and predictive support.',
    icon: Headphones,
    features: ['Intelligent ticket routing', 'Automated resolution', 'Predictive support', 'Knowledge management'],
    pricing: '$1,500 - $5,500/month',
    category: 'ITSM',
    benefits: ['Resolve 80% of tickets automatically', 'Reduce response time by 70%', 'Improve user satisfaction', 'Predictive support'],
    marketPrice: '$2,500 - $8,000/month',
    link: 'https://ziontechgroup.com/smart-service-desk',
    popular: true
  },
  {
    title: 'AI-Powered Performance Monitoring',
    description: 'Intelligent application and infrastructure monitoring with predictive analytics and automated optimization.',
    icon: Monitor,
    features: ['Predictive analytics', 'Automated optimization', 'Real-time monitoring', 'Performance insights'],
    pricing: '$2,800 - $9,000/month',
    category: 'Performance Monitoring',
    benefits: ['Prevent performance issues', 'Optimize system performance', 'Reduce downtime by 50%', 'Automated optimization'],
    marketPrice: '$4,500 - $14,000/month',
    link: 'https://ziontechgroup.com/ai-performance',
    popular: false
  },
  {
    title: 'Intelligent Cloud Cost Optimization',
    description: 'AI-driven cloud cost management with automated optimization, rightsizing, and budget forecasting.',
    icon: DollarSign,
    features: ['Automated cost optimization', 'Resource rightsizing', 'Budget forecasting', 'Cost analytics'],
    pricing: '$1,200 - $4,500/month',
    category: 'Cloud Management',
    benefits: ['Reduce cloud costs by 40%', 'Automated optimization', 'Predictive budgeting', 'Cost transparency'],
    marketPrice: '$2,000 - $7,000/month',
    link: 'https://ziontechgroup.com/cloud-cost-optimization',
    popular: true
  },
  {
    title: 'AI-Powered Compliance Management',
    description: 'Automated compliance monitoring and reporting for various regulatory standards and industry requirements.',
    icon: CheckCircle,
    features: ['Automated compliance monitoring', 'Regulatory reporting', 'Risk assessment', 'Audit preparation'],
    pricing: '$2,500 - $8,500/month',
    category: 'Compliance',
    benefits: ['Ensure 100% compliance', 'Automated reporting', 'Reduce audit time by 60%', 'Risk mitigation'],
    marketPrice: '$4,000 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-compliance',
    popular: false
  },
  {
    title: 'Smart IT Documentation & Knowledge Base',
    description: 'AI-powered documentation management with automated updates, intelligent search, and knowledge extraction.',
    icon: BookOpen,
    features: ['Automated documentation', 'Intelligent search', 'Knowledge extraction', 'Version control'],
    pricing: '$1,800 - $6,000/month',
    category: 'Knowledge Management',
    benefits: ['Automated documentation', 'Instant knowledge access', 'Reduce documentation time by 70%', 'Better knowledge sharing'],
    marketPrice: '$3,000 - $9,000/month',
    link: 'https://ziontechgroup.com/smart-documentation',
    popular: false
  },
  {
    title: 'AI-Powered IT Training & Certification',
    description: 'Personalized IT training programs with AI-driven learning paths and automated skill assessment.',
    icon: GraduationCap,
    features: ['Personalized learning paths', 'Automated assessment', 'Skill gap analysis', 'Certification tracking'],
    pricing: '$1,500 - $5,500/month',
    category: 'Training',
    benefits: ['Improve team skills by 50%', 'Personalized learning', 'Automated assessment', 'Certification tracking'],
    marketPrice: '$2,500 - $8,000/month',
    link: 'https://ziontechgroup.com/ai-training',
    popular: false
  },
  {
    title: 'Intelligent IT Procurement & Vendor Management',
    description: 'AI-driven procurement optimization with vendor analysis, contract management, and cost optimization.',
    icon: ShoppingCart,
    features: ['Vendor analysis', 'Contract management', 'Cost optimization', 'Procurement automation'],
    pricing: '$2,200 - $7,500/month',
    category: 'Procurement',
    benefits: ['Reduce procurement costs by 30%', 'Optimize vendor relationships', 'Automated contract management', 'Better vendor selection'],
    marketPrice: '$3,500 - $11,000/month',
    link: 'https://ziontechgroup.com/ai-procurement',
    popular: false
  },
  {
    title: 'AI-Powered IT Risk Management',
    description: 'Comprehensive risk assessment and mitigation with AI analysis, threat modeling, and automated controls.',
    icon: AlertTriangle,
    features: ['Risk assessment', 'Threat modeling', 'Automated controls', 'Risk monitoring'],
    pricing: '$3,000 - $10,500/month',
    category: 'Risk Management',
    benefits: ['Identify risks 5x faster', 'Automated risk mitigation', 'Reduce risk exposure by 60%', 'Continuous monitoring'],
    marketPrice: '$5,000 - $16,000/month',
    link: 'https://ziontechgroup.com/ai-risk-management',
    popular: true
  },
  {
    title: 'Smart IT Change Management',
    description: 'AI-driven change management with impact analysis, automated testing, and risk assessment.',
    icon: RefreshCw,
    features: ['Impact analysis', 'Automated testing', 'Risk assessment', 'Change approval'],
    pricing: '$2,000 - $7,000/month',
    category: 'Change Management',
    benefits: ['Reduce change failures by 80%', 'Automated impact analysis', 'Faster change approval', 'Risk mitigation'],
    marketPrice: '$3,200 - $10,500/month',
    link: 'https://ziontechgroup.com/smart-change-management',
    popular: false
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
    icon: Lightning,
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services &
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth. 
                From AI-powered automation to cloud infrastructure, we deliver cutting-edge IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
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
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

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
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                  <div className="mb-4">
                  <span className="text-sm font-semibold text-green-600">{service.pricing}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
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
      {/* Technologies Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technologies We Work With</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver robust IT solutions.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} viewport={{ once: true }}">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">
                    {tech.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proven expertise and measurable results for your technology infrastructure.
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
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Support Levels Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Support Levels</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support level that best fits your business needs.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  index === 1 ? 'bg-green-50 border-2 border-green-200' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {level.name}
                </h3>
                  <p className="text-gray-600 mb-6">
                  {level.description}
                </p>
                  <div className="text-3xl font-bold text-green-600 mb-6">
                  {level.pricing}
                </div>
                  <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                  <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    index === 1
? 'bg-green-600 hover: bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
<div className="container mx-auto px-4 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT environment.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get IT Assessment
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Contact Information Section */}
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
              Get Started with IT Services Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your IT infrastructure? Our expert team is here to help you build, secure, and optimize your technology environment. Contact us for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free IT Consultation</h3>
              <p className="text-gray-600 mb-4">Get expert advice on your IT project with our complimentary 30-minute consultation.</p>
              <a href="tel:+13024640950" className="text-green-600 font-semibold hover:text-green-700">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
=======

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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Let our expert team design and implement the perfect technology solution for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
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
                </Link>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your IT project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-green-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
            </motion.div>
          </div>
<<<<<<< HEAD
          <motion.div
            className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6">
              Join 500+ successful businesses that trust Zion Tech Group for their IT infrastructure needs. Let&apos;s build the perfect technology solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Start Building
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
                  </div>
=======
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
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
  );
}