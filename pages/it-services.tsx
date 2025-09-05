import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Phone, Mail } from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations management with predictive analytics and automated incident response.',
    icon: Brain,
    features: ['Predictive Analytics', 'Automated Incident Response', 'Performance Monitoring', 'Capacity Planning'],
    pricing: '$2,999 - $9,999/month',
    category: 'AI Operations',
    benefits: ['Reduced Downtime', 'Cost Optimization', 'Proactive Management', 'Scalable Operations'],
    marketPrice: '$5,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-it-operations',
    popular: true
  },
  {
    title: 'Quantum-Safe Cybersecurity Implementation',
    description: 'Future-proof security solutions using quantum-resistant encryption and advanced threat protection.',
    icon: Shield,
    features: ['Quantum-Resistant Encryption', 'Advanced Threat Detection', 'Zero Trust Architecture', 'Compliance Management'],
    pricing: '$4,999 - $19,999/month',
    category: 'Quantum Security',
    benefits: ['Future-Proof Security', 'Advanced Protection', 'Compliance Ready', 'Scalable Security'],
    marketPrice: '$8,000 - $25,000/month',
    link: 'https://ziontechgroup.com/quantum-security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed computing infrastructure for low-latency applications and IoT deployments.',
    icon: Cpu,
    features: ['Edge Nodes Deployment', 'Low-Latency Processing', 'IoT Integration', 'Real-time Analytics'],
    pricing: '$1,999 - $7,999/month',
    category: 'Edge Computing',
    benefits: ['Ultra-Low Latency', 'Improved Performance', 'Cost Efficiency', 'Scalable Infrastructure'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/edge-computing',
    popular: false
  },
  {
    title: '5G Network Implementation & Optimization',
    description: 'Complete 5G network deployment and optimization services for enhanced connectivity.',
    icon: Wifi,
    features: ['5G Network Design', 'Performance Optimization', 'Coverage Analysis', 'Capacity Planning'],
    pricing: '$9,999 - $49,999/month',
    category: '5G Networks',
    benefits: ['Ultra-Fast Connectivity', 'Enhanced Coverage', 'Future-Ready Infrastructure', 'Optimized Performance'],
    marketPrice: '$15,000 - $75,000/month',
    link: 'https://ziontechgroup.com/5g-networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure & Integration',
    description: 'Enterprise blockchain solutions with smart contracts and decentralized applications.',
    icon: Database,
    features: ['Blockchain Development', 'Smart Contracts', 'DApp Integration', 'Consensus Mechanisms'],
    pricing: '$3,999 - $14,999/month',
    category: 'Blockchain Infrastructure',
    benefits: ['Decentralized Solutions', 'Enhanced Security', 'Transparent Operations', 'Cost Reduction'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/blockchain-infrastructure',
    popular: false
  },
  {
    title: 'IoT Platform Development & Management',
    description: 'Comprehensive IoT solutions for device management, data collection, and analytics.',
    icon: Smartphone,
    features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Remote Monitoring'],
    pricing: '$2,499 - $9,999/month',
    category: 'IoT Platforms',
    benefits: ['Connected Devices', 'Real-time Insights', 'Operational Efficiency', 'Data-Driven Decisions'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/iot-platforms',
    popular: false
  },
  {
    title: 'AI Infrastructure & ML Pipeline Setup',
    description: 'Complete AI infrastructure setup with machine learning pipelines and model deployment.',
    icon: Brain,
    features: ['ML Pipeline Setup', 'Model Training', 'Model Deployment', 'Performance Monitoring'],
    pricing: '$4,999 - $19,999/month',
    category: 'AI Infrastructure',
    benefits: ['Advanced AI Capabilities', 'Scalable ML Operations', 'Automated Workflows', 'High Performance'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-infrastructure',
    popular: true
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Eco-friendly IT solutions for reducing carbon footprint and energy consumption.',
    icon: Globe,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Practices', 'Green Monitoring'],
    pricing: '$1,999 - $7,999/month',
    category: 'Green IT',
    benefits: ['Environmental Impact', 'Cost Savings', 'Sustainability Goals', 'Efficient Operations'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/green-it',
    popular: false
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security implementation for enhanced protection.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Access Controls'],
    pricing: '$3,999 - $14,999/month',
    category: 'Zero Trust Security',
    benefits: ['Enhanced Security', 'Reduced Risk', 'Compliance Ready', 'Scalable Protection'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/zero-trust',
    popular: true
  },
  {
    title: 'Hybrid Cloud Management Platform',
    description: 'Unified management platform for hybrid cloud environments and multi-cloud operations.',
    icon: Cloud,
    features: ['Multi-Cloud Management', 'Resource Optimization', 'Cost Management', 'Security Controls'],
    pricing: '$2,999 - $11,999/month',
    category: 'Cloud Management',
    benefits: ['Unified Operations', 'Cost Optimization', 'Flexible Deployment', 'Enhanced Security'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/hybrid-cloud',
    popular: false
  },
  {
    title: 'Advanced Analytics & Business Intelligence',
    description: 'Comprehensive analytics platform with real-time insights and predictive capabilities.',
    icon: BarChart3,
    features: ['Real-time Analytics', 'Predictive Modeling', 'Data Visualization', 'Business Intelligence'],
    pricing: '$2,499 - $9,999/month',
    category: 'Analytics Platform',
    benefits: ['Data-Driven Insights', 'Predictive Capabilities', 'Real-time Monitoring', 'Business Intelligence'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/advanced-analytics',
    popular: false
  },
  {
    title: 'IT Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery solutions ensuring business continuity and data protection.',
    icon: Shield,
    features: ['Backup Solutions', 'Recovery Planning', 'Business Continuity', 'Data Protection'],
    pricing: '$1,999 - $7,999/month',
    category: 'Disaster Recovery',
    benefits: ['Business Continuity', 'Data Protection', 'Minimal Downtime', 'Risk Mitigation'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/disaster-recovery',
    popular: false
  },
  {
    title: 'Advanced Network Security Implementation',
    description: 'Comprehensive network security solutions with advanced threat protection and monitoring.',
    icon: Network,
    features: ['Firewall Management', 'Intrusion Detection', 'Threat Prevention', 'Network Monitoring'],
    pricing: '$2,999 - $11,999/month',
    category: 'Network Security',
    benefits: ['Enhanced Protection', 'Threat Prevention', 'Network Monitoring', 'Compliance Ready'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/network-security',
    popular: false
  },
  {
    title: 'IT Compliance & Regulatory Services',
    description: 'Comprehensive compliance management for various industry regulations and standards.',
    icon: CheckCircle,
    features: ['Compliance Monitoring', 'Audit Support', 'Regulatory Updates', 'Documentation Management'],
    pricing: '$1,999 - $7,999/month',
    category: 'IT Compliance',
    benefits: ['Regulatory Compliance', 'Audit Support', 'Risk Mitigation', 'Documentation Management'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/it-compliance',
    popular: false
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic consulting services for digital transformation and technology modernization.',
    icon: Rocket,
    features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'Implementation Planning'],
    pricing: '$4,999 - $19,999/month',
    category: 'Digital Transformation',
    benefits: ['Strategic Guidance', 'Technology Modernization', 'Change Management', 'Competitive Advantage'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/digital-transformation',
    popular: true
  },
  {
    title: 'IT Asset Management & Optimization',
    description: 'Comprehensive IT asset management with optimization and lifecycle management.',
    icon: Settings,
    features: ['Asset Tracking', 'Lifecycle Management', 'Cost Optimization', 'Performance Monitoring'],
    pricing: '$1,499 - $5,999/month',
    category: 'Asset Management',
    benefits: ['Cost Optimization', 'Asset Visibility', 'Lifecycle Management', 'Performance Tracking'],
    marketPrice: '$2,500 - $9,000/month',
    link: 'https://ziontechgroup.com/it-asset-management',
    popular: false
  },
  {
    title: 'Advanced Backup & Data Protection',
    description: 'Comprehensive backup and data protection solutions with automated recovery.',
    icon: HardDrive,
    features: ['Automated Backups', 'Data Encryption', 'Recovery Testing', 'Compliance Support'],
    pricing: '$1,999 - $7,999/month',
    category: 'Data Protection',
    benefits: ['Data Security', 'Automated Backups', 'Quick Recovery', 'Compliance Ready'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/backup-protection',
    popular: false
  },
  {
    title: 'IT Performance Monitoring & Optimization',
    description: 'Comprehensive IT performance monitoring with optimization and capacity planning.',
    icon: Monitor,
    features: ['Performance Monitoring', 'Capacity Planning', 'Optimization Recommendations', 'Alert Management'],
    pricing: '$2,499 - $9,999/month',
    category: 'Performance Monitoring',
    benefits: ['Performance Optimization', 'Capacity Planning', 'Proactive Management', 'Cost Efficiency'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/performance-monitoring',
    popular: false
  },
  {
    title: 'Cloud Security & Compliance Services',
    description: 'Comprehensive cloud security solutions with compliance management and monitoring.',
    icon: Cloud,
    features: ['Cloud Security', 'Compliance Management', 'Threat Detection', 'Access Controls'],
    pricing: '$2,999 - $11,999/month',
    category: 'Cloud Security',
    benefits: ['Enhanced Security', 'Compliance Ready', 'Threat Protection', 'Scalable Solutions'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/cloud-security',
    popular: false
  },
  {
    title: 'IT Service Management (ITSM) Implementation',
    description: 'Complete ITSM implementation with service desk, change management, and incident handling.',
    icon: Settings,
    features: ['Service Desk', 'Change Management', 'Incident Management', 'Problem Management'],
    pricing: '$3,999 - $14,999/month',
    category: 'ITSM',
    benefits: ['Improved Service Delivery', 'Process Standardization', 'Better Visibility', 'Cost Optimization'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/itsm',
    popular: false
  },
  // New Advanced IT Services
  {
    title: 'AI-Powered DevOps & CI/CD Automation',
    description: 'Intelligent DevOps solutions with automated CI/CD pipelines, testing, and deployment optimization.',
    icon: Code,
    features: ['Automated CI/CD Pipelines', 'AI-Powered Testing', 'Deployment Optimization', 'Performance Monitoring'],
    pricing: '$3,999 - $14,999/month',
    category: 'DevOps Automation',
    benefits: ['Faster Deployments', 'Reduced Errors', 'Improved Quality', 'Cost Efficiency'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/ai-devops',
    popular: true
  },
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing setup and integration services for advanced computational capabilities.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Quantum Algorithm Development', 'Hybrid Classical-Quantum Systems', 'Quantum Security'],
    pricing: '$19,999 - $99,999/month',
    category: 'Quantum Computing',
    benefits: ['Exponential Speedup', 'Advanced Problem Solving', 'Future-Proof Technology', 'Competitive Advantage'],
    marketPrice: '$30,000 - $150,000/month',
    link: 'https://ziontechgroup.com/quantum-computing',
    popular: true
  },
  {
    title: 'Advanced Cloud Security & Compliance',
    description: 'Comprehensive cloud security solutions with compliance management and threat protection.',
    icon: Shield,
    features: ['Cloud Security Architecture', 'Compliance Automation', 'Threat Detection', 'Data Protection'],
    pricing: '$4,999 - $19,999/month',
    category: 'Cloud Security',
    benefits: ['Enhanced Security', 'Compliance Ready', 'Threat Protection', 'Data Privacy'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/cloud-security',
    popular: true
  },
  {
    title: 'AI-Powered Data Engineering & Analytics',
    description: 'Intelligent data engineering solutions with automated ETL processes and advanced analytics.',
    icon: Database,
    features: ['Automated ETL Pipelines', 'Real-time Data Processing', 'Advanced Analytics', 'Data Quality Management'],
    pricing: '$3,499 - $12,999/month',
    category: 'Data Engineering',
    benefits: ['Faster Data Processing', 'Improved Data Quality', 'Real-time Insights', 'Cost Optimization'],
    marketPrice: '$5,500 - $18,000/month',
    link: 'https://ziontechgroup.com/data-engineering',
    popular: false
  },
  {
    title: 'Microservices Architecture & Containerization',
    description: 'Modern application architecture with microservices, containers, and orchestration solutions.',
    icon: Server,
    features: ['Microservices Design', 'Container Orchestration', 'Service Mesh', 'API Management'],
    pricing: '$2,999 - $11,999/month',
    category: 'Microservices',
    benefits: ['Scalable Architecture', 'Improved Performance', 'Faster Development', 'Better Maintainability'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/microservices',
    popular: false
  },
  {
    title: 'AI-Powered IT Service Desk',
    description: 'Intelligent IT service desk with AI chatbots, automated ticket routing, and predictive support.',
    icon: Phone,
    features: ['AI Chatbots', 'Automated Ticket Routing', 'Predictive Support', 'Knowledge Management'],
    pricing: '$1,999 - $7,999/month',
    category: 'IT Service Desk',
    benefits: ['Faster Resolution', 'Reduced Costs', 'Better User Experience', '24/7 Support'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-service-desk',
    popular: true
  },
  {
    title: 'Advanced Network Monitoring & Management',
    description: 'Comprehensive network monitoring with AI-powered analytics and automated management.',
    icon: Network,
    features: ['AI-Powered Monitoring', 'Automated Management', 'Performance Optimization', 'Predictive Maintenance'],
    pricing: '$2,499 - $9,999/month',
    category: 'Network Management',
    benefits: ['Proactive Management', 'Reduced Downtime', 'Optimized Performance', 'Cost Savings'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/network-monitoring',
    popular: false
  },
  {
    title: 'AI-Powered Infrastructure Monitoring',
    description: 'Intelligent infrastructure monitoring with predictive analytics and automated optimization.',
    icon: Monitor,
    features: ['Predictive Analytics', 'Automated Optimization', 'Performance Monitoring', 'Capacity Planning'],
    pricing: '$2,999 - $11,999/month',
    category: 'Infrastructure Monitoring',
    benefits: ['Proactive Management', 'Cost Optimization', 'Improved Performance', 'Reduced Downtime'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/infrastructure-monitoring',
    popular: true
  },
  {
    title: 'Advanced Database Management & Optimization',
    description: 'Comprehensive database solutions with performance optimization and automated management.',
    icon: Database,
    features: ['Performance Optimization', 'Automated Management', 'Backup & Recovery', 'Security Hardening'],
    pricing: '$2,499 - $9,999/month',
    category: 'Database Management',
    benefits: ['Improved Performance', 'Enhanced Security', 'Automated Operations', 'Cost Optimization'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/database-management',
    popular: false
  },
  {
    title: 'AI-Powered Application Performance Management',
    description: 'Intelligent application performance monitoring with automated optimization and issue resolution.',
    icon: BarChart3,
    features: ['Real-time Monitoring', 'Automated Optimization', 'Issue Detection', 'Performance Analytics'],
    pricing: '$3,499 - $12,999/month',
    category: 'APM',
    benefits: ['Improved Performance', 'Faster Issue Resolution', 'Better User Experience', 'Cost Optimization'],
    marketPrice: '$5,500 - $18,000/month',
    link: 'https://ziontechgroup.com/apm',
    popular: true
  },
  {
    title: 'Advanced Backup & Disaster Recovery Solutions',
    description: 'Comprehensive backup and disaster recovery with AI-powered optimization and automation.',
    icon: HardDrive,
    features: ['Automated Backups', 'AI-Powered Recovery', 'Multi-Cloud Backup', 'Ransomware Protection'],
    pricing: '$1,999 - $7,999/month',
    category: 'Backup & Recovery',
    benefits: ['Data Protection', 'Fast Recovery', 'Cost Optimization', 'Ransomware Protection'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/backup-recovery',
    popular: false
  },
  {
    title: 'AI-Powered IT Asset Discovery & Management',
    description: 'Intelligent IT asset discovery and management with automated tracking and optimization.',
    icon: Settings,
    features: ['Automated Discovery', 'Asset Tracking', 'Cost Optimization', 'Lifecycle Management'],
    pricing: '$1,499 - $5,999/month',
    category: 'Asset Management',
    benefits: ['Complete Visibility', 'Cost Optimization', 'Automated Tracking', 'Lifecycle Management'],
    marketPrice: '$2,500 - $9,000/month',
    link: 'https://ziontechgroup.com/asset-management',
    popular: false
  },
  {
    title: 'Advanced API Management & Security',
    description: 'Comprehensive API management with security, monitoring, and optimization capabilities.',
    icon: Globe,
    features: ['API Gateway', 'Security Management', 'Rate Limiting', 'Analytics & Monitoring'],
    pricing: '$2,999 - $11,999/month',
    category: 'API Management',
    benefits: ['Enhanced Security', 'Better Performance', 'Cost Optimization', 'Developer Experience'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/api-management',
    popular: true
  },
  {
    title: 'AI-Powered IT Cost Optimization',
    description: 'Intelligent IT cost optimization with automated analysis and recommendations.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Automated Recommendations', 'Resource Optimization', 'Budget Planning'],
    pricing: '$1,999 - $7,999/month',
    category: 'Cost Optimization',
    benefits: ['Significant Cost Savings', 'Automated Optimization', 'Better Resource Utilization', 'Budget Control'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/cost-optimization',
    popular: true
  },
  {
    title: 'Advanced Identity & Access Management',
    description: 'Comprehensive identity and access management with AI-powered security and automation.',
    icon: Lock,
    features: ['Identity Management', 'Access Controls', 'Multi-Factor Authentication', 'Privileged Access Management'],
    pricing: '$2,999 - $11,999/month',
    category: 'IAM',
    benefits: ['Enhanced Security', 'Compliance Ready', 'Automated Management', 'User Experience'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/iam',
    popular: false
  },
  {
    title: 'AI-Powered IT Automation & Orchestration',
    description: 'Intelligent IT automation with workflow orchestration and process optimization.',
    icon: Zap,
    features: ['Workflow Automation', 'Process Orchestration', 'AI-Powered Decisions', 'Integration Management'],
    pricing: '$3,499 - $12,999/month',
    category: 'IT Automation',
    benefits: ['Increased Efficiency', 'Reduced Errors', 'Cost Savings', 'Better Scalability'],
    marketPrice: '$5,500 - $18,000/month',
    link: 'https://ziontechgroup.com/it-automation',
    popular: true
  },
  {
    title: 'Advanced Cloud Migration & Modernization',
    description: 'Comprehensive cloud migration services with modernization and optimization strategies.',
    icon: Cloud,
    features: ['Migration Planning', 'Application Modernization', 'Cloud Optimization', 'Security Implementation'],
    pricing: '$4,999 - $19,999/month',
    category: 'Cloud Migration',
    benefits: ['Seamless Migration', 'Improved Performance', 'Cost Optimization', 'Enhanced Security'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/cloud-migration',
    popular: true
  },
  {
    title: 'AI-Powered IT Governance & Risk Management',
    description: 'Intelligent IT governance with risk management and compliance automation.',
    icon: Shield,
    features: ['Risk Assessment', 'Compliance Automation', 'Governance Framework', 'Audit Support'],
    pricing: '$2,999 - $11,999/month',
    category: 'IT Governance',
    benefits: ['Risk Mitigation', 'Compliance Ready', 'Better Governance', 'Audit Support'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/it-governance',
    popular: false
  },
  {
    title: 'Advanced Endpoint Security & Management',
    description: 'Comprehensive endpoint security with AI-powered threat detection and automated management.',
    icon: Laptop,
    features: ['Threat Detection', 'Automated Response', 'Device Management', 'Security Hardening'],
    pricing: '$1,999 - $7,999/month',
    category: 'Endpoint Security',
    benefits: ['Enhanced Security', 'Automated Management', 'Threat Protection', 'Compliance Ready'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/endpoint-security',
    popular: true
  },
  {
    title: 'AI-Powered IT Capacity Planning',
    description: 'Intelligent capacity planning with predictive analytics and automated scaling recommendations.',
    icon: TrendingUp,
    features: ['Predictive Analytics', 'Capacity Forecasting', 'Automated Scaling', 'Resource Optimization'],
    pricing: '$2,499 - $9,999/month',
    category: 'Capacity Planning',
    benefits: ['Optimized Resources', 'Cost Efficiency', 'Predictive Scaling', 'Better Performance'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/capacity-planning',
    popular: false
  },
  {
    title: 'Advanced Multi-Cloud Management Platform',
    description: 'Unified multi-cloud management with AI-powered optimization and governance.',
    icon: Cloud,
    features: ['Multi-Cloud Visibility', 'AI-Powered Optimization', 'Cost Management', 'Security Controls'],
    pricing: '$3,999 - $14,999/month',
    category: 'Multi-Cloud Management',
    benefits: ['Unified Operations', 'Cost Optimization', 'Enhanced Security', 'Better Governance'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/multi-cloud',
    popular: true
  },
  {
    title: 'AI-Powered IT Change Management',
    description: 'Intelligent change management with automated approval workflows and risk assessment.',
    icon: Settings,
    features: ['Automated Workflows', 'Risk Assessment', 'Change Tracking', 'Impact Analysis'],
    pricing: '$1,999 - $7,999/month',
    category: 'Change Management',
    benefits: ['Reduced Risk', 'Faster Changes', 'Better Tracking', 'Improved Compliance'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/change-management',
    popular: false
  },
  {
    title: 'Advanced IT Performance Monitoring',
    description: 'Comprehensive IT performance monitoring with AI-powered insights and optimization.',
    icon: BarChart3,
    features: ['Real-time Monitoring', 'AI-Powered Insights', 'Performance Analytics', 'Automated Optimization'],
    pricing: '$2,999 - $11,999/month',
    category: 'Performance Monitoring',
    benefits: ['Proactive Management', 'Better Performance', 'Cost Optimization', 'Improved Reliability'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/performance-monitoring',
    popular: true
  }
];

const categories = [
  'All',
  'AI Operations',
  'Quantum Security',
  'Edge Computing',
  '5G Networks',
  'Blockchain Infrastructure',
  'IoT Platforms',
  'AI Infrastructure',
  'Green IT',
  'Zero Trust Security',
  'Cloud Management',
  'Analytics Platform',
  'Disaster Recovery',
  'Network Security',
  'IT Compliance',
  'Digital Transformation',
  'Asset Management',
  'Data Protection',
  'Performance Monitoring',
  'Cloud Security',
  'DevOps Automation',
  'Quantum Computing',
  'Data Engineering',
  'Microservices',
  'IT Service Desk',
  'Network Management',
  'Infrastructure Monitoring',
  'Database Management',
  'APM',
  'Backup & Recovery',
  'API Management',
  'Cost Optimization',
  'IAM',
  'IT Automation',
  'Cloud Migration',
  'IT Governance',
  'Endpoint Security',
  'Capacity Planning',
  'Multi-Cloud Management',
  'Change Management'
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services and solutions for modern businesses. From AI operations to cybersecurity, we provide cutting-edge technology solutions."
      keywords="IT services, technology solutions, AI operations, cybersecurity, cloud computing, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT services including AI operations, cybersecurity, cloud computing, and digital transformation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#services" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Explore Services
                </a>
                <a href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Get Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 group border border-gray-200"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-blue-600 group-hover:text-purple-600 transition-colors mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Get Quote
                      </a>
                      <a
                        href="/contact"
                        className="px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
        'Micro-segmentation and network isolation',
        'Continuous security monitoring and analytics',
        'Privileged access management (PAM)',
        'Security orchestration and automation'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Improved compliance and governance',
        'Automated threat response'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Blockchain & Distributed Ledger Solutions',
      description: 'Blockchain infrastructure, smart contract development, and decentralized application deployment.',
      features: [
        'Blockchain infrastructure setup and management',
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Cryptocurrency wallet and exchange integration',
        'Blockchain analytics and monitoring',
        'Regulatory compliance and governance'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Enhanced transparency and trust',
        'Reduced transaction costs',
        'Improved data integrity',
        'Decentralized system architecture'
      ],
      category: 'Blockchain'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud & Hybrid Cloud Management',
      description: 'Comprehensive multi-cloud and hybrid cloud strategy with unified management and optimization.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Hybrid cloud integration and management',
        'Cloud cost optimization and FinOps',
        'Cross-cloud data migration and synchronization',
        'Unified monitoring and management platform',
        'Disaster recovery and business continuity'
      ],
      pricing: '$150,000 – $1,500,000 project',
      projectPricing: '$15,000 – $150,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Reduced vendor lock-in',
        'Optimized cloud costs',
        'Enhanced flexibility and scalability',
        'Improved disaster recovery capabilities'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: '5G Network Infrastructure & Optimization',
      description: '5G network deployment, optimization, and application development for next-generation connectivity.',
      features: [
        '5G network infrastructure deployment',
        'Network slicing and optimization',
        '5G application development and testing',
        'Edge computing integration with 5G',
        'Network performance monitoring and analytics',
        'IoT and smart city connectivity solutions'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Ultra-low latency connectivity',
        'Massive IoT device support',
        'Enhanced mobile broadband',
        'Next-generation application capabilities'
      ],
      category: 'Network Infrastructure'
    },
    {
      icon: Brain,
      name: 'AI/ML Infrastructure & MLOps',
      description: 'Complete AI/ML infrastructure setup with MLOps pipelines, model deployment, and monitoring.',
      features: [
        'AI/ML infrastructure design and deployment',
        'MLOps pipeline development and automation',
        'Model training and deployment platforms',
        'AI model monitoring and governance',
        'Data pipeline and feature store setup',
        'AI ethics and bias monitoring'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Accelerated AI model development',
        'Automated ML operations',
        'Scalable AI infrastructure',
        'Enhanced model performance and reliability'
      ],
      category: 'AI Infrastructure'
    },
    {
      icon: Server,
      name: 'Serverless & Microservices Architecture',
      description: 'Serverless architecture implementation with microservices design and API management.',
      features: [
        'Serverless architecture design and implementation',
        'Microservices development and deployment',
        'API gateway and management platform',
        'Container orchestration and management',
        'Event-driven architecture implementation',
        'Performance monitoring and optimization'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Faster development and deployment',
        'Enhanced system reliability'
      ],
      category: 'Architecture'
    },
    {
      icon: Database,
      name: 'Data Mesh & Data Fabric Architecture',
      description: 'Modern data architecture with data mesh and data fabric implementation for enterprise data management.',
      features: [
        'Data mesh architecture design and implementation',
        'Data fabric platform development',
        'Data governance and cataloging',
        'Real-time data streaming and processing',
        'Data quality and lineage management',
        'Self-service analytics platform'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Improved data accessibility and democratization',
        'Enhanced data quality and governance',
        'Faster time-to-insight',
        'Scalable data architecture'
      ],
      category: 'Data Architecture'
    },
    {
      icon: Shield,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security into DevOps pipelines with automated security testing and compliance.',
      features: [
        'DevSecOps pipeline integration',
        'Automated security testing and scanning',
        'Infrastructure as Code security',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management and remediation'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–16 weeks',
      benefits: [
        'Enhanced security throughout SDLC',
        'Automated compliance and reporting',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'Security'
    },
    {
      icon: Globe,
      name: 'Green IT & Sustainable Technology',
      description: 'Sustainable IT infrastructure with energy optimization, carbon footprint reduction, and green computing.',
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint monitoring and reduction',
        'Green data center optimization',
        'Sustainable software development practices',
        'Renewable energy integration',
        'Environmental impact assessment and reporting'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced environmental impact',
        'Lower energy costs',
        'Enhanced corporate sustainability',
        'Compliance with environmental regulations'
      ],
      category: 'Sustainability'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing (HPC)',
      description: 'High-performance computing infrastructure for scientific research, simulations, and data-intensive applications.',
      features: [
        'HPC cluster design and deployment',
        'Parallel computing optimization',
        'GPU computing and acceleration',
        'Scientific computing software stack',
        'High-speed networking and storage',
        'Performance monitoring and optimization'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: '$50,000 – $500,000/month managed',
      timeline: '24–48 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Complex simulation capabilities',
        'Advanced data processing and analysis'
      ],
      category: 'High-Performance Computing'
    }
  ];

const categories = [
  'All',
  'AI Operations',
  'Quantum Security',
  'Edge Computing',
  '5G Networks',
  'Blockchain Infrastructure',
  'IoT Platforms',
  'AI Infrastructure',
  'Green IT',
  'Zero Trust Security',
  'Cloud Management',
  'Analytics Platform',
  'Disaster Recovery',
  'Network Security',
  'IT Compliance',
  'Digital Transformation',
  'Asset Management',
  'Data Protection',
  'Performance Monitoring',
  'Cloud Security',
  'ITSM'
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services and solutions for modern businesses. From AI operations to cybersecurity, we provide cutting-edge technology solutions."
      keywords="IT services, technology solutions, AI operations, cybersecurity, cloud computing, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT services and solutions designed to transform your business operations, 
                enhance security, and drive innovation across all technology domains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8">
                <div className="relative max-w-2xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {service.category}
                        </span>
                        {service.popular && (
                          <span className="ml-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-gray-900 text-sm">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Our Pricing:</span>
                        <span className="text-sm font-bold text-blue-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">Market Price:</span>
                        <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center group">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Market Analysis & Competitive Advantages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Market Analysis & Competitive Advantages
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Pricing Analysis</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">AI Operations Center</span>
                      <span className="text-blue-600 font-bold">$2,999 - $9,999/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Quantum Security</span>
                      <span className="text-blue-600 font-bold">$4,999 - $19,999/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">5G Network Implementation</span>
                      <span className="text-blue-600 font-bold">$9,999 - $49,999/month</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-900">Digital Transformation</span>
                      <span className="text-blue-600 font-bold">$4,999 - $19,999/month</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    * Competitive pricing with 20-40% savings compared to market rates
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits & Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">24/7 Expert Support & Monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Cutting-edge Technology & Innovation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Scalable Solutions for Any Business Size</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Comprehensive Security & Compliance</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Proven Track Record & Industry Expertise</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your IT Infrastructure?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Contact our experts today for a personalized consultation and discover how our IT services can drive your business forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email: kleber@ziontechgroup.com
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Address: 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive IT services can help you achieve your technology goals and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}