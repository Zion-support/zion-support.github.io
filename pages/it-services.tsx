<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Database, 
  Network, 
  Monitor, 
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Server,
  Settings,
  Lock,
  Zap,
  Users,
  Globe,
  Wrench as WrenchIcon,
  Cog as CogIcon,
  Layers as LayersIcon,
  GitBranch as GitBranchIcon,
  Terminal as TerminalIcon
} from 'lucide-react';
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Phone, Mail, MapPin, Headphones } from 'lucide-react';
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
import Layout from '../components/Layout';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const itServices = [
  {
<<<<<<< HEAD
    title: 'Cloud Migration & Management',
    description: 'Seamless migration to cloud platforms with ongoing management and optimization.',
    icon: Cloud,
    features: ['AWS/Azure/GCP Migration', 'Cost Optimization', 'Security Implementation', '24/7 Monitoring'],
    pricing: '$5,000 - $50,000 project',
    category: 'Cloud Services',
    popular: true,
    benefits: ['Reduced Infrastructure Costs', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security measures to protect your digital assets and ensure compliance.',
    icon: Shield,
    features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response'],
    pricing: '$3,000 - $25,000/month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Compliance Assurance', 'Risk Mitigation', 'Peace of Mind']
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implement, and maintain robust network infrastructure for optimal performance.',
    icon: Network,
    features: ['Network Design', 'Hardware Installation', 'Configuration', 'Monitoring'],
    pricing: '$2,000 - $15,000 project',
    category: 'Infrastructure',
    popular: false,
    benefits: ['Reliable Connectivity', 'Improved Performance', 'Scalable Architecture', 'Reduced Downtime']
  },
  {
    title: 'Database Management',
    description: 'Expert database administration and optimization for peak performance and security.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
    pricing: '$1,500 - $12,000/month',
    category: 'Data Management',
    popular: false,
    benefits: ['Optimized Performance', 'Data Protection', 'Compliance', 'Reduced Downtime']
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 technical support and helpdesk services to keep your business running smoothly.',
    icon: Monitor,
    features: ['24/7 Support', 'Remote Assistance', 'Issue Resolution', 'User Training'],
    pricing: '$500 - $5,000/month',
    category: 'Support',
    popular: true,
    benefits: ['Minimized Downtime', 'Quick Resolution', 'User Satisfaction', 'Proactive Support']
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline development and deployment processes with modern DevOps practices.',
    icon: GitBranchIcon,
    features: ['CI/CD Pipelines', 'Automated Testing', 'Deployment Automation', 'Monitoring'],
    pricing: '$3,000 - $20,000 project',
    category: 'DevOps',
    popular: false,
    benefits: ['Faster Deployments', 'Reduced Errors', 'Better Collaboration', 'Improved Quality']
  },
  {
    title: 'AI-Powered IT Automation',
    description: 'Intelligent automation solutions for IT operations and infrastructure management.',
    icon: Zap,
    features: ['Process Automation', 'Predictive Maintenance', 'Anomaly Detection', 'Self-Healing Systems'],
    pricing: '$8,000 - $40,000/setup',
    category: 'AI & Automation',
    popular: true,
    benefits: ['Reduced Manual Work', 'Proactive Issue Resolution', 'Cost Savings', 'Improved Reliability']
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
    icon: CogIcon,
    features: ['Quantum Algorithm Development', 'Hybrid Classical-Quantum Systems', 'Optimization Problems', 'Research & Development'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Exponential Speedup', 'Complex Problem Solving', 'Competitive Advantage', 'Future-Proof Technology']
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Distributed computing infrastructure for real-time processing and reduced latency.',
    icon: LayersIcon,
    features: ['Edge Server Deployment', 'IoT Integration', 'Real-time Processing', 'Data Synchronization'],
    pricing: '$10,000 - $75,000/project',
    category: 'Edge Computing',
    popular: true,
    benefits: ['Reduced Latency', 'Improved Performance', 'Bandwidth Optimization', 'Real-time Analytics']
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Secure blockchain networks and smart contract development for enterprise applications.',
    icon: Lock,
    features: ['Blockchain Development', 'Smart Contracts', 'Consensus Mechanisms', 'Security Audits'],
    pricing: '$15,000 - $100,000/project',
    category: 'Blockchain',
    popular: true,
    benefits: ['Enhanced Security', 'Transparency', 'Decentralization', 'Immutable Records']
  },
  {
    title: '5G Network Implementation',
    description: 'Next-generation 5G network deployment and optimization for ultra-fast connectivity.',
    icon: Network,
    features: ['5G Infrastructure', 'Network Optimization', 'IoT Connectivity', 'Performance Monitoring'],
    pricing: '$25,000 - $200,000/project',
    category: '5G Networks',
    popular: true,
    benefits: ['Ultra-Fast Speeds', 'Low Latency', 'Massive IoT Support', 'Future-Ready Infrastructure']
  },
  {
    title: 'IoT Platform Development',
    description: 'Comprehensive IoT solutions for connected devices and smart systems.',
    icon: Settings,
    features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Integration APIs'],
    pricing: '$12,000 - $80,000/project',
    category: 'IoT',
    popular: true,
    benefits: ['Connected Systems', 'Data Insights', 'Automation', 'Operational Efficiency']
  },
  {
    title: 'AR/VR Technology Solutions',
    description: 'Immersive augmented and virtual reality applications for business and training.',
    icon: Monitor,
    features: ['AR/VR Development', '3D Modeling', 'Interactive Experiences', 'Hardware Integration'],
    pricing: '$20,000 - $150,000/project',
    category: 'AR/VR',
    popular: true,
    benefits: ['Immersive Experiences', 'Enhanced Training', 'Remote Collaboration', 'Innovative Solutions']
  },
  {
    title: 'Machine Learning Infrastructure',
    description: 'Scalable ML infrastructure and model deployment for AI applications.',
    icon: Server,
    features: ['ML Pipeline Setup', 'Model Training', 'Deployment Automation', 'Monitoring & Scaling'],
    pricing: '$18,000 - $120,000/project',
    category: 'Machine Learning',
    popular: true,
    benefits: ['Scalable AI', 'Automated ML', 'Better Performance', 'Cost Optimization']
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Comprehensive zero trust security model implementation for maximum protection.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$25,000 - $150,000/setup',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Reduced Risk', 'Compliance', 'Trust Verification']
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable and energy-efficient IT infrastructure and practices.',
    icon: Globe,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$15,000 - $100,000/project',
    category: 'Sustainability',
    popular: false,
    benefits: ['Environmental Impact', 'Cost Savings', 'Compliance', 'Corporate Responsibility']
  },
  {
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery and business continuity planning and implementation.',
    icon: CheckCircle,
    features: ['Backup Strategies', 'Recovery Testing', 'Business Continuity Planning', 'RTO/RPO Optimization'],
    pricing: '$10,000 - $75,000/setup',
    category: 'Disaster Recovery',
    popular: true,
    benefits: ['Business Protection', 'Minimal Downtime', 'Data Safety', 'Compliance']
  },
  {
    title: 'IT Governance & Compliance',
    description: 'Comprehensive IT governance framework and compliance management.',
    icon: Settings,
    features: ['Policy Development', 'Compliance Monitoring', 'Risk Assessment', 'Audit Support'],
    pricing: '$5,000 - $35,000/month',
    category: 'Governance',
    popular: false,
    benefits: ['Regulatory Compliance', 'Risk Management', 'Policy Enforcement', 'Audit Readiness']
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Seamless management of hybrid cloud environments across multiple platforms.',
    icon: Cloud,
    features: ['Multi-Cloud Orchestration', 'Cost Optimization', 'Security Management', 'Performance Monitoring'],
    pricing: '$8,000 - $60,000/setup',
    category: 'Cloud Services',
    popular: true,
    benefits: ['Flexibility', 'Cost Optimization', 'Vendor Independence', 'Scalability']
  },
  {
    title: 'API Management & Integration',
    description: 'Comprehensive API lifecycle management and system integration services.',
    icon: GitBranchIcon,
    features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Monitoring & Analytics'],
    pricing: '$6,000 - $45,000/setup',
    category: 'Integration',
    popular: true,
    benefits: ['Seamless Integration', 'API Security', 'Performance Optimization', 'Developer Experience']
  },
  {
    title: 'IT Asset Management',
    description: 'Complete lifecycle management of IT assets and resources.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3,000 - $25,000/setup',
    category: 'Asset Management',
    popular: false,
    benefits: ['Cost Control', 'Compliance', 'Asset Optimization', 'Risk Reduction']
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance for digital transformation initiatives and technology adoption.',
    icon: Users,
    features: ['Strategy Development', 'Technology Roadmap', 'Change Management', 'Implementation Support'],
    pricing: '$10,000 - $100,000/project',
    category: 'Consulting',
    popular: true,
    benefits: ['Strategic Alignment', 'Technology Adoption', 'Change Management', 'Competitive Advantage']
  },
  {
    title: 'IT Training & Certification',
    description: 'Comprehensive IT training programs and certification preparation for teams.',
    icon: Users,
    features: ['Custom Training Programs', 'Certification Prep', 'Hands-on Labs', 'Progress Tracking'],
    pricing: '$2,000 - $15,000/program',
    category: 'Training',
    popular: false,
    benefits: ['Skill Development', 'Certification', 'Team Productivity', 'Knowledge Retention']
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive performance analysis and optimization for IT systems and applications.',
    icon: Zap,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring'],
    pricing: '$5,000 - $40,000/project',
    category: 'Performance',
    popular: true,
    benefits: ['Improved Performance', 'Better User Experience', 'Cost Optimization', 'System Reliability']
=======
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
    title: 'AI-Powered DevOps & CI/CD Pipeline',
    description: 'Intelligent DevOps automation with AI-driven deployment, monitoring, and optimization.',
    icon: Settings,
    features: ['AI-driven deployments', 'Automated testing', 'Performance monitoring', 'Rollback automation'],
    pricing: '$3,999 - $12,999/month',
    category: 'DevOps & Automation',
    benefits: ['Faster deployments', 'Reduced errors', 'Automated scaling', 'Better reliability'],
    marketPrice: '$6,000 - $18,000/month',
    link: 'https://ziontechgroup.com/ai-devops',
    popular: true
  },
  {
    title: 'Quantum Computing Integration Services',
    description: 'Quantum computing solutions for complex problem-solving and optimization challenges.',
    icon: Cpu,
    features: ['Quantum algorithm development', 'Hybrid classical-quantum systems', 'Quantum simulation', 'Optimization solutions'],
    pricing: '$19,999 - $99,999/month',
    category: 'Quantum Computing',
    benefits: ['Exponential speedup', 'Complex problem solving', 'Future-proof technology', 'Competitive advantage'],
    marketPrice: '$30,000 - $150,000/month',
    link: 'https://ziontechgroup.com/quantum-computing',
    popular: true
  },
  {
    title: 'AI-Powered Cloud Migration & Optimization',
    description: 'Intelligent cloud migration with automated optimization and cost management.',
    icon: Cloud,
    features: ['Automated migration', 'Cost optimization', 'Performance tuning', 'Security compliance'],
    pricing: '$4,999 - $19,999/month',
    category: 'Cloud Services',
    benefits: ['Reduced migration time', 'Cost savings', 'Better performance', 'Enhanced security'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/ai-cloud-migration',
    popular: true
  },
  {
    title: 'Advanced Threat Intelligence & Response',
    description: 'AI-driven threat detection and automated response system for enterprise security.',
    icon: Shield,
    features: ['Threat intelligence', 'Automated response', 'Behavioral analysis', 'Incident management'],
    pricing: '$7,999 - $24,999/month',
    category: 'Cybersecurity',
    benefits: ['Proactive security', 'Faster threat response', 'Reduced risk', 'Compliance assurance'],
    marketPrice: '$12,000 - $40,000/month',
    link: 'https://ziontechgroup.com/threat-intelligence',
    popular: true
  },
  {
    title: 'Smart Data Center Management',
    description: 'AI-powered data center optimization with predictive maintenance and energy efficiency.',
    icon: Server,
    features: ['Predictive maintenance', 'Energy optimization', 'Capacity planning', 'Automated management'],
    pricing: '$5,999 - $19,999/month',
    category: 'Data Center',
    benefits: ['Reduced downtime', 'Energy savings', 'Better capacity utilization', 'Automated operations'],
    marketPrice: '$10,000 - $30,000/month',
    link: 'https://ziontechgroup.com/smart-datacenter',
    popular: false
  },
  {
    title: 'AI-Powered Network Optimization',
    description: 'Intelligent network management with automated optimization and performance monitoring.',
    icon: Network,
    features: ['Network optimization', 'Traffic analysis', 'Performance monitoring', 'Automated tuning'],
    pricing: '$3,999 - $14,999/month',
    category: 'Network Services',
    benefits: ['Better performance', 'Reduced latency', 'Automated management', 'Cost optimization'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/ai-network-optimization',
    popular: false
  },
  {
    title: 'Intelligent Backup & Disaster Recovery',
    description: 'AI-driven backup solutions with automated disaster recovery and business continuity.',
    icon: HardDrive,
    features: ['Automated backups', 'Disaster recovery', 'Business continuity', 'Data integrity'],
    pricing: '$2,999 - $9,999/month',
    category: 'Backup & Recovery',
    benefits: ['Data protection', 'Fast recovery', 'Business continuity', 'Automated management'],
    marketPrice: '$5,000 - $15,000/month',
    link: 'https://ziontechgroup.com/intelligent-backup',
    popular: true
  },
  {
    title: 'AI-Powered IT Asset Management',
    description: 'Intelligent IT asset tracking, lifecycle management, and optimization.',
    icon: Monitor,
    features: ['Asset tracking', 'Lifecycle management', 'Cost optimization', 'Compliance monitoring'],
    pricing: '$1,999 - $7,999/month',
    category: 'Asset Management',
    benefits: ['Better asset utilization', 'Cost savings', 'Compliance assurance', 'Automated tracking'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/ai-asset-management',
    popular: false
  },
  {
    title: 'Smart IT Service Desk & Automation',
    description: 'AI-powered IT service desk with automated ticket resolution and intelligent routing.',
    icon: Headphones,
    features: ['Automated ticket resolution', 'Intelligent routing', 'Self-service portal', 'Analytics dashboard'],
    pricing: '$2,499 - $8,999/month',
    category: 'Service Desk',
    benefits: ['Faster resolution', 'Reduced costs', 'Better user experience', 'Automated workflows'],
    marketPrice: '$4,000 - $12,000/month',
    link: 'https://ziontechgroup.com/smart-service-desk',
    popular: true
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
  }
];

const categories = [
<<<<<<< HEAD
  'All Services',
  'Cloud Services',
  'Security',
  'Infrastructure',
  'Data Management',
  'Support',
  'DevOps',
  'AI & Automation',
  'Quantum Computing',
  'Edge Computing',
  'Blockchain',
  '5G Networks',
  'IoT',
  'AR/VR',
  'Machine Learning',
  'Sustainability',
  'Disaster Recovery',
  'Governance',
  'Integration',
  'Asset Management',
  'Consulting',
  'Training',
  'Performance'
];

const industries = [
  {
    name: "Healthcare",
    description: "HIPAA-compliant solutions for healthcare organizations",
    icon: Users
  },
  {
    name: "Finance",
    description: "Secure, compliant solutions for financial services",
    icon: Shield
  },
  {
    name: "Manufacturing",
    description: "IoT and automation solutions for manufacturing",
    icon: Settings
  },
  {
    name: "Retail",
    description: "E-commerce and retail technology solutions",
    icon: Globe
  }
];

const benefits = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring"
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

export default function ITServicesPage() {
  return (
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
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
=======
  { name: "All", count: itServices.length },
  { name: "AI Operations", count: itServices.filter(s => s.category === "AI Operations").length },
  { name: "Quantum Security", count: itServices.filter(s => s.category === "Quantum Security").length },
  { name: "Edge Computing", count: itServices.filter(s => s.category === "Edge Computing").length },
  { name: "5G Networks", count: itServices.filter(s => s.category === "5G Networks").length },
  { name: "Blockchain Infrastructure", count: itServices.filter(s => s.category === "Blockchain Infrastructure").length },
  { name: "IoT Platforms", count: itServices.filter(s => s.category === "IoT Platforms").length },
  { name: "AI Infrastructure", count: itServices.filter(s => s.category === "AI Infrastructure").length },
  { name: "Green IT", count: itServices.filter(s => s.category === "Green IT").length },
  { name: "DevOps & Automation", count: itServices.filter(s => s.category === "DevOps & Automation").length },
  { name: "Quantum Computing", count: itServices.filter(s => s.category === "Quantum Computing").length },
  { name: "Cloud Services", count: itServices.filter(s => s.category === "Cloud Services").length },
  { name: "Cybersecurity", count: itServices.filter(s => s.category === "Cybersecurity").length },
  { name: "Data Center", count: itServices.filter(s => s.category === "Data Center").length },
  { name: "Network Services", count: itServices.filter(s => s.category === "Network Services").length },
  { name: "Backup & Recovery", count: itServices.filter(s => s.category === "Backup & Recovery").length },
  { name: "Asset Management", count: itServices.filter(s => s.category === "Asset Management").length },
  { name: "Service Desk", count: itServices.filter(s => s.category === "Service Desk").length }
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
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
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-4 md:right-10 w-48 md:w-72 h-48 md:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-8 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to power your digital transformation. 
                From cloud migration to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#services"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Services
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get Started
                </a>
=======
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-4">
                Comprehensive IT services including AI operations, cybersecurity, cloud computing, 
                and digital transformation solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm md:text-base">
                  Get Free Consultation
                </Link>
                <Link href="#services" className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-sm md:text-base">
                  Explore Services
                </Link>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Services Grid */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud migration to cybersecurity, we provide comprehensive IT solutions 
                tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {service.pricing}
                    </div>
                    <a
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver reliable, secure, and scalable IT solutions that drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have experience across various industries and understand the unique 
                challenges each sector faces.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
=======
        {/* Contact Info Bar */}
        <section className="bg-blue-900 text-white py-3 md:py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+13024640950" className="hover:text-blue-300">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-300">{contactInfo.email}</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-200 text-xs md:text-sm">24/7 IT Support Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="bg-white rounded-lg shadow-lg p-4 md:p-6 hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 md:mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-3 md:mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base md:text-lg font-bold text-green-600">
                          {service.pricing}
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 line-through">
                          {service.marketPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save up to 40% vs market rate
                      </div>
                    </div>
                    
                    <div className="mb-3 md:mb-4">
                      <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-3 md:mb-4">
                      <h4 className="text-xs md:text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link
                        href="/contact"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-3 md:px-4 rounded-lg text-xs md:text-sm font-semibold transition-colors"
                      >
                        Get Quote
                      </Link>
                      <Link
                        href="/contact"
                        className="px-3 md:px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg text-xs md:text-sm font-semibold transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our expert team help you build a robust, secure, and scalable IT environment 
                that supports your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Case Studies
                </a>
=======
        <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Let our IT experts help you implement the perfect solution for your business needs.
                Get a free consultation and custom quote today.
              </p>
              <div className="mb-6 md:mb-8">
                <p className="text-base md:text-lg text-blue-100 mb-2">
                  📞 <strong>Call us:</strong> {contactInfo.phone}
                </p>
                <p className="text-base md:text-lg text-blue-100 mb-2">
                  📧 <strong>Email us:</strong> {contactInfo.email}
                </p>
                <p className="text-base md:text-lg text-blue-100">
                  📍 <strong>Visit us:</strong> {contactInfo.address}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-sm md:text-base">
                  Get Free IT Consultation
                </Link>
                <Link href="/ai-services" className="px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-sm md:text-base">
                  Explore AI Services
                </Link>
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}