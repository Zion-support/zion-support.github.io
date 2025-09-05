import React from "react";
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
  Smartphone,
  Laptop,
  Settings,
  Lock,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Users,
  BarChart3,
  Code,
  FileText,
  Mail,
  Phone,
  Building,
  Car,
  Heart,
  ShoppingCart,
  BookOpen,
  Home,
  Gamepad2,
  Package,
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
  },
  {
    title: 'AI-Powered IT Operations',
    description: 'Intelligent IT operations with AI-driven monitoring, automation, and optimization.',
    icon: Bot,
    features: ['AI Monitoring', 'Predictive Analytics', 'Automated Remediation', 'Performance Optimization'],
    pricing: '$5,000 - $50,000/setup',
    category: 'AI Operations',
    popular: true,
    benefits: ['Proactive Issue Resolution', 'Reduced Downtime', 'Cost Savings', 'Improved Performance']
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model for comprehensive network protection.',
    icon: Shield,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Advanced Security',
    popular: true,
    benefits: ['Enhanced Security', 'Reduced Attack Surface', 'Compliance', 'Future-proof Architecture']
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for low-latency applications and IoT deployments.',
    icon: Cpu,
    features: ['Edge Infrastructure', 'IoT Integration', 'Real-time Processing', 'Data Synchronization'],
    pricing: '$15,000 - $150,000/project',
    category: 'Edge Computing',
    popular: true,
    benefits: ['Low Latency', 'Reduced Bandwidth', 'Improved Performance', 'Scalable Architecture']
  },
  {
    title: 'Quantum-Safe Cryptography',
    description: 'Implementation of quantum-resistant cryptographic solutions for future-proof security.',
    icon: Lock,
    features: ['Quantum-resistant Algorithms', 'Key Management', 'Migration Planning', 'Compliance'],
    pricing: '$25,000 - $250,000/project',
    category: 'Advanced Security',
    popular: true,
    benefits: ['Future-proof Security', 'Quantum Resistance', 'Compliance', 'Long-term Protection']
  },
  {
    title: '5G Network Implementation',
    description: '5G network design, implementation, and optimization for enterprise applications.',
    icon: Network,
    features: ['5G Infrastructure', 'Network Slicing', 'Edge Integration', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: '5G Technology',
    popular: true,
    benefits: ['High Speed', 'Low Latency', 'Massive Connectivity', 'Future-ready Infrastructure']
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Blockchain network setup, management, and integration for enterprise applications.',
    icon: Database,
    features: ['Blockchain Setup', 'Smart Contracts', 'Integration APIs', 'Security Management'],
    pricing: '$20,000 - $200,000/project',
    category: 'Blockchain',
    popular: true,
    benefits: ['Decentralized Security', 'Transparency', 'Immutable Records', 'Trust Building']
  },
  {
    title: 'IoT Security & Management',
    description: 'Comprehensive IoT security and device management solutions.',
    icon: Wifi,
    features: ['Device Authentication', 'Encrypted Communication', 'Firmware Updates', 'Threat Detection'],
    pricing: '$5,000 - $50,000/setup',
    category: 'IoT Security',
    popular: true,
    benefits: ['Device Protection', 'Data Security', 'Compliance', 'Scalable Management']
  },
  {
    title: 'Hybrid Cloud Architecture',
    description: 'Design and implementation of hybrid cloud solutions for optimal performance and cost.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Data Synchronization', 'Workload Optimization', 'Security Integration'],
    pricing: '$25,000 - $250,000/project',
    category: 'Hybrid Cloud',
    popular: true,
    benefits: ['Flexibility', 'Cost Optimization', 'Performance', 'Vendor Independence']
  },
  {
    title: 'AI-Powered Cybersecurity',
    description: 'Advanced cybersecurity solutions powered by artificial intelligence and machine learning.',
    icon: Shield,
    features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Predictive Security'],
    pricing: '$10,000 - $100,000/setup',
    category: 'AI Security',
    popular: true,
    benefits: ['Advanced Threat Protection', 'Automated Response', 'Reduced False Positives', 'Continuous Learning']
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Comprehensive digital transformation strategy and implementation consulting.',
    icon: Users,
    features: ['Strategy Development', 'Technology Assessment', 'Change Management', 'Implementation Planning'],
    pricing: '$200 - $500/hour',
    category: 'Digital Transformation',
    popular: true,
    benefits: ['Strategic Alignment', 'Competitive Advantage', 'Process Optimization', 'Innovation']
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT solutions for energy efficiency and environmental responsibility.',
    icon: Sprout,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$5,000 - $50,000/project',
    category: 'Green IT',
    popular: true,
    benefits: ['Cost Savings', 'Environmental Impact', 'Compliance', 'Corporate Responsibility']
  },
  {
    title: 'IT Governance & Risk Management',
    description: 'Comprehensive IT governance framework and risk management implementation.',
    icon: CheckCircle,
    features: ['Governance Framework', 'Risk Assessment', 'Policy Development', 'Compliance Monitoring'],
    pricing: '$15,000 - $150,000/project',
    category: 'Governance',
    popular: true,
    benefits: ['Risk Mitigation', 'Compliance', 'Strategic Alignment', 'Accountability']
  },
  {
    title: 'Microservices Architecture',
    description: 'Design and implementation of microservices architecture for scalable applications.',
    icon: Layers,
    features: ['Service Design', 'API Gateway', 'Container Orchestration', 'Service Mesh'],
    pricing: '$20,000 - $200,000/project',
    category: 'Architecture',
    popular: true,
    benefits: ['Scalability', 'Flexibility', 'Maintainability', 'Technology Diversity']
  },
  {
    title: 'IT Disaster Recovery as a Service',
    description: 'Comprehensive disaster recovery solutions with guaranteed recovery times.',
    icon: HardDrive,
    features: ['RTO/RPO Planning', 'Automated Failover', 'Data Replication', 'Recovery Testing'],
    pricing: '$2,000 - $20,000/month',
    category: 'Disaster Recovery',
    popular: true,
    benefits: ['Business Continuity', 'Minimized Downtime', 'Data Protection', 'Compliance']
  },
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations with AI-driven monitoring, automation, and predictive analytics.',
    icon: Bot,
    features: ['AI Monitoring', 'Predictive Analytics', 'Automated Remediation', 'Performance Optimization', 'Anomaly Detection'],
    pricing: '$8,000 - $80,000/setup',
    category: 'AI Operations',
    popular: true,
    benefits: ['Proactive Issue Resolution', 'Reduced Downtime', 'Cost Savings', 'Improved Performance', 'Predictive Maintenance']
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Integration of quantum computing capabilities for complex problem solving and optimization.',
    icon: Cpu,
    features: ['Quantum Algorithm Development', 'Hybrid Classical-Quantum Systems', 'Quantum Security', 'Performance Optimization'],
    pricing: '$50,000 - $500,000/project',
    category: 'Quantum Computing',
    popular: true,
    benefits: ['Exponential Processing Power', 'Complex Problem Solving', 'Future-proof Technology', 'Competitive Advantage']
  },
  {
    title: 'Metaverse Infrastructure',
    description: 'Complete metaverse infrastructure setup with virtual worlds, avatars, and immersive experiences.',
    icon: Globe,
    features: ['Virtual World Creation', 'Avatar Systems', '3D Asset Management', 'Real-time Collaboration', 'Blockchain Integration'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Metaverse',
    popular: true,
    benefits: ['Immersive Experiences', 'Virtual Collaboration', 'New Revenue Streams', 'Future-ready Platform']
  },
  {
    title: 'Autonomous IT Management',
    description: 'Fully autonomous IT management with self-healing systems and intelligent automation.',
    icon: Settings,
    features: ['Self-healing Systems', 'Autonomous Monitoring', 'Intelligent Automation', 'Predictive Maintenance', 'Auto-scaling'],
    pricing: '$15,000 - $150,000/setup',
    category: 'Autonomous IT',
    popular: true,
    benefits: ['Reduced Manual Work', 'Improved Reliability', 'Cost Efficiency', '24/7 Operations', 'Self-optimization']
  },
  {
    title: 'Neuromorphic Computing Solutions',
    description: 'Brain-inspired computing systems for advanced AI and machine learning applications.',
    icon: Brain,
    features: ['Neuromorphic Processors', 'Spiking Neural Networks', 'Low-power Computing', 'Real-time Learning'],
    pricing: '$75,000 - $750,000/project',
    category: 'Neuromorphic Computing',
    popular: true,
    benefits: ['Ultra-low Power', 'Real-time Learning', 'Advanced AI', 'Efficient Processing']
  },
  {
    title: 'Holographic Display Systems',
    description: 'Advanced holographic display technology for immersive presentations and collaboration.',
    icon: Monitor,
    features: ['3D Holographic Displays', 'Gesture Control', 'Multi-user Collaboration', 'Real-time Rendering'],
    pricing: '$25,000 - $250,000/project',
    category: 'Holographic Technology',
    popular: true,
    benefits: ['Immersive Presentations', 'Enhanced Collaboration', 'Future-ready Technology', 'Competitive Edge']
  },
  {
    title: 'Space-based Computing Infrastructure',
    description: 'Satellite-based computing infrastructure for global connectivity and edge computing.',
    icon: Rocket,
    features: ['Satellite Computing', 'Global Connectivity', 'Edge Processing', 'Low-latency Communication'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Space Computing',
    popular: true,
    benefits: ['Global Coverage', 'Low Latency', 'Redundancy', 'Future-proof Infrastructure']
  },
  {
    title: 'Biometric Security Systems',
    description: 'Advanced biometric authentication and security systems for enhanced protection.',
    icon: Eye,
    features: ['Facial Recognition', 'Fingerprint Scanning', 'Iris Recognition', 'Voice Authentication', 'Behavioral Analysis'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Biometric Security',
    popular: true,
    benefits: ['Enhanced Security', 'User Convenience', 'Fraud Prevention', 'Compliance']
  },
  {
    title: 'Digital Twin Technology',
    description: 'Digital twin creation and management for real-time monitoring and optimization.',
    icon: Monitor,
    features: ['Digital Twin Creation', 'Real-time Monitoring', 'Predictive Analytics', 'Simulation', 'Optimization'],
    pricing: '$20,000 - $200,000/project',
    category: 'Digital Twins',
    popular: true,
    benefits: ['Real-time Insights', 'Predictive Maintenance', 'Optimization', 'Risk Mitigation']
  },
  {
    title: 'Augmented Reality Workspaces',
    description: 'AR-powered workspaces for enhanced productivity and collaboration.',
    icon: Eye,
    features: ['AR Workspace Design', '3D Visualization', 'Remote Collaboration', 'Gesture Control', 'Spatial Computing'],
    pricing: '$15,000 - $150,000/project',
    category: 'AR Technology',
    popular: true,
    benefits: ['Enhanced Productivity', 'Immersive Collaboration', 'Spatial Computing', 'Future-ready Workspace']
  },
  {
    title: 'Blockchain-as-a-Service',
    description: 'Complete blockchain infrastructure and management services for enterprise applications.',
    icon: Database,
    features: ['Blockchain Setup', 'Smart Contract Development', 'Token Management', 'DeFi Integration', 'NFT Platforms'],
    pricing: '$25,000 - $250,000/project',
    category: 'Blockchain Services',
    popular: true,
    benefits: ['Decentralized Security', 'Transparency', 'Smart Contracts', 'Tokenization']
  },
  {
    title: 'AI-Powered Data Centers',
    description: 'Intelligent data center management with AI optimization and predictive maintenance.',
    icon: Server,
    features: ['AI Optimization', 'Predictive Maintenance', 'Energy Efficiency', 'Automated Management', 'Performance Monitoring'],
    pricing: '$50,000 - $500,000/project',
    category: 'AI Data Centers',
    popular: true,
    benefits: ['Energy Efficiency', 'Predictive Maintenance', 'Cost Optimization', 'Improved Performance']
  },
  {
    title: 'Telepresence Robotics',
    description: 'Advanced telepresence robots for remote collaboration and presence.',
    icon: Bot,
    features: ['Remote Presence', 'AI Navigation', 'Video Conferencing', 'Gesture Recognition', 'Autonomous Movement'],
    pricing: '$30,000 - $300,000/project',
    category: 'Telepresence',
    popular: true,
    benefits: ['Remote Collaboration', 'Physical Presence', 'Enhanced Communication', 'Flexible Work']
  },
  {
    title: 'Smart City Infrastructure',
    description: 'Complete smart city technology infrastructure with IoT and AI integration.',
    icon: Building,
    features: ['IoT Networks', 'Traffic Management', 'Energy Optimization', 'Public Safety', 'Citizen Services'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Smart Cities',
    popular: true,
    benefits: ['Efficient City Management', 'Improved Services', 'Sustainability', 'Quality of Life']
  },
  {
    title: 'Neural Interface Technology',
    description: 'Brain-computer interface systems for direct neural control and communication.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Thought Control', 'Neural Feedback', 'Medical Applications', 'Research Support'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Neural Interfaces',
    popular: true,
    benefits: ['Direct Control', 'Medical Applications', 'Research Advancement', 'Accessibility']
  },
  {
    title: 'Autonomous Vehicle Infrastructure',
    description: 'Infrastructure support for autonomous vehicles including V2X communication and management.',
    icon: Car,
    features: ['V2X Communication', 'Traffic Management', 'Safety Systems', 'Fleet Management', 'Data Processing'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Autonomous Vehicles',
    popular: true,
    benefits: ['Safety Enhancement', 'Traffic Optimization', 'Fleet Management', 'Future Mobility']
  },
  {
    title: 'Holographic Communication Systems',
    description: '3D holographic communication systems for immersive remote meetings and presentations.',
    icon: Video,
    features: ['3D Holographic Calls', 'Gesture Recognition', 'Spatial Audio', 'Multi-user Support', 'Real-time Rendering'],
    pricing: '$40,000 - $400,000/project',
    category: 'Holographic Communication',
    popular: true,
    benefits: ['Immersive Communication', 'Enhanced Presence', 'Better Collaboration', 'Future-ready Technology']
  },
  {
    title: 'Quantum Internet Infrastructure',
    description: 'Quantum internet setup with quantum key distribution and secure communication.',
    icon: Network,
    features: ['Quantum Key Distribution', 'Quantum Networks', 'Secure Communication', 'Quantum Repeaters', 'Entanglement Distribution'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Quantum Internet',
    popular: true,
    benefits: ['Unbreakable Security', 'Quantum Communication', 'Future-proof Network', 'Advanced Encryption']
  },
  {
    title: 'AI-Powered Cybersecurity Operations Center',
    description: 'Advanced SOC with AI-driven threat detection, response, and prevention.',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Threat Hunting', 'Incident Response'],
    pricing: '$25,000 - $250,000/setup',
    category: 'AI Security',
    popular: true,
    benefits: ['Advanced Protection', 'Automated Response', 'Threat Prevention', 'Continuous Monitoring']
  },
  {
    title: 'Synthetic Biology Computing',
    description: 'Biological computing systems using DNA and biological processes for computation.',
    icon: Sprout,
    features: ['DNA Computing', 'Biological Algorithms', 'Molecular Storage', 'Biocomputing', 'Bioinformatics'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Biological Computing',
    popular: true,
    benefits: ['Massive Parallelism', 'Energy Efficiency', 'Novel Computing', 'Research Applications']
  },
  {
    title: 'Time Crystal Computing',
    description: 'Revolutionary time crystal-based computing systems for quantum applications.',
    icon: Clock,
    features: ['Time Crystal Processors', 'Quantum Algorithms', 'Temporal Computing', 'Advanced Physics', 'Research Support'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Time Crystal Computing',
    popular: true,
    benefits: ['Novel Computing', 'Quantum Applications', 'Research Advancement', 'Future Technology']
  },
  {
    title: 'Consciousness Simulation Systems',
    description: 'AI systems for simulating consciousness and cognitive processes.',
    icon: Brain,
    features: ['Consciousness Modeling', 'Cognitive Simulation', 'Self-awareness AI', 'Philosophical AI', 'Research Platform'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Consciousness AI',
    popular: true,
    benefits: ['Consciousness Research', 'AI Advancement', 'Philosophical Insights', 'Scientific Discovery']
  },
  {
    title: 'Multiverse Computing Platform',
    description: 'Computing platform for simulating and exploring multiple universe scenarios.',
    icon: Globe,
    features: ['Multiverse Simulation', 'Physics Modeling', 'Scenario Testing', 'Research Platform', 'Scientific Computing'],
    pricing: '$1,000,000 - $10,000,000/project',
    category: 'Multiverse Computing',
    popular: true,
    benefits: ['Scientific Discovery', 'Physics Research', 'Universe Simulation', 'Advanced Computing']
  },
  {
    title: 'Dark Matter Detection Systems',
    description: 'Advanced computing systems for dark matter detection and particle physics research.',
    icon: Eye,
    features: ['Particle Detection', 'Signal Analysis', 'Statistical Computing', 'Physics Simulation', 'Research Support'],
    pricing: '$1,000,000 - $10,000,000/project',
    category: 'Particle Physics',
    popular: true,
    benefits: ['Scientific Discovery', 'Physics Research', 'Advanced Detection', 'Research Support']
  },
  {
    title: 'Exoplanet Discovery Computing',
    description: 'AI-powered computing systems for discovering and analyzing exoplanets.',
    icon: Globe,
    features: ['Light Curve Analysis', 'Transit Detection', 'Atmospheric Modeling', 'Habitability Assessment', 'Data Processing'],
    pricing: '$500,000 - $5,000,000/project',
    category: 'Astrobiology Computing',
    popular: true,
    benefits: ['Scientific Discovery', 'Exoplanet Research', 'Astrobiology', 'Space Exploration']
  },
  {
    title: 'Protein Folding Supercomputing',
    description: 'Advanced computing systems for protein folding prediction and drug discovery.',
    icon: Heart,
    features: ['Protein Structure Prediction', 'Folding Simulation', 'Drug Design', 'Molecular Modeling', 'Biomedical Research'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Biomedical Computing',
    popular: true,
    benefits: ['Drug Discovery', 'Medical Research', 'Protein Understanding', 'Biomedical Advancement']
  },
  {
    title: 'Cryptocurrency Mining Optimization',
    description: 'AI-optimized cryptocurrency mining with energy efficiency and profit maximization.',
    icon: TrendingUp,
    features: ['Hash Rate Optimization', 'Energy Efficiency', 'Profit Maximization', 'Market Analysis', 'Automated Mining'],
    pricing: '$50,000 - $500,000/setup',
    category: 'Crypto Mining',
    popular: true,
    benefits: ['Profit Optimization', 'Energy Efficiency', 'Automated Operations', 'Market Analysis']
  },
  {
    title: 'Virtual Reality Content Generation',
    description: 'AI-generated immersive VR content with realistic physics and interactions.',
    icon: Monitor,
    features: ['3D Content Generation', 'Physics Simulation', 'Interactive Design', 'Realistic Rendering', 'AI Creation'],
    pricing: '$25,000 - $250,000/project',
    category: 'VR Technology',
    popular: true,
    benefits: ['Immersive Content', 'Realistic Simulation', 'AI Generation', 'Enhanced VR']
  },
  {
    title: 'Augmented Reality Intelligence',
    description: 'Advanced AR systems with AI-powered object recognition and spatial understanding.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Processing', 'Context Awareness', 'AI Integration'],
    pricing: '$30,000 - $300,000/setup',
    category: 'AR Intelligence',
    popular: true,
    benefits: ['Enhanced AR', 'AI Recognition', 'Spatial Understanding', 'Context Awareness']
  },
  {
    title: 'Holographic Display Technology',
    description: 'AI-optimized holographic displays with real-time content generation and interaction.',
    icon: Monitor,
    features: ['Hologram Generation', 'Real-time Rendering', 'Interactive Controls', '3D Projection', 'AI Optimization'],
    pricing: '$40,000 - $400,000/project',
    category: 'Holographic Technology',
    popular: true,
    benefits: ['Immersive Displays', 'Real-time Interaction', 'AI Optimization', 'Future Technology']
  },
  {
    title: 'Teleportation Simulation Systems',
    description: 'AI systems for simulating quantum teleportation and quantum communication protocols.',
    icon: Network,
    features: ['Quantum Simulation', 'Entanglement Modeling', 'Protocol Optimization', 'Error Correction', 'Quantum Communication'],
    pricing: '$55,000 - $550,000/project',
    category: 'Quantum Communication',
    popular: true,
    benefits: ['Quantum Simulation', 'Communication Research', 'Protocol Development', 'Scientific Advancement']
  },
  {
    title: 'Time Travel Simulation',
    description: 'AI systems for simulating time travel scenarios and temporal paradoxes.',
    icon: Clock,
    features: ['Temporal Modeling', 'Paradox Analysis', 'Causality Simulation', 'Timeline Optimization', 'Physics Simulation'],
    pricing: '$90,000 - $900,000/project',
    category: 'Temporal AI',
    popular: true,
    benefits: ['Temporal Research', 'Paradox Analysis', 'Physics Simulation', 'Scientific Discovery']
  },
  {
    title: 'Multiverse Exploration Systems',
    description: 'AI systems for exploring and simulating multiple universe scenarios and theories.',
    icon: Globe,
    features: ['Multiverse Modeling', 'Theory Testing', 'Scenario Simulation', 'Physics Exploration', 'Research Platform'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Theoretical Physics',
    popular: true,
    benefits: ['Scientific Discovery', 'Physics Research', 'Universe Simulation', 'Theory Testing']
  },
  {
    title: 'AI-Powered Space Mission Control',
    description: 'Intelligent space mission control systems with autonomous decision making.',
    icon: Rocket,
    features: ['Mission Planning', 'Autonomous Control', 'Risk Assessment', 'Resource Management', 'Real-time Monitoring'],
    pricing: '$200,000 - $2,000,000/project',
    category: 'Space Technology',
    popular: true,
    benefits: ['Mission Success', 'Autonomous Operations', 'Risk Mitigation', 'Space Exploration']
  },
  {
    title: 'AI-Powered Climate Engineering',
    description: 'AI systems for climate engineering and geoengineering solutions.',
    icon: Sprout,
    features: ['Climate Modeling', 'Geoengineering Design', 'Impact Assessment', 'Risk Analysis', 'Environmental Monitoring'],
    pricing: '$80,000 - $800,000/project',
    category: 'Climate Engineering',
    popular: true,
    benefits: ['Climate Solutions', 'Environmental Impact', 'Risk Assessment', 'Sustainability']
  },
  {
    title: 'AI-Powered Neural Architecture Search',
    description: 'Automated neural network architecture design and optimization using AI.',
    icon: Network,
    features: ['Architecture Search', 'Hyperparameter Optimization', 'Model Compression', 'Performance Prediction', 'AutoML'],
    pricing: '$30,000 - $300,000/setup',
    category: 'AutoML',
    popular: true,
    benefits: ['Automated Design', 'Optimized Performance', 'Model Efficiency', 'AI Development']
  },
  {
    title: 'AI-Powered Dark Matter Detection',
    description: 'AI systems for detecting and analyzing dark matter particles and interactions.',
    icon: Eye,
    features: ['Particle Detection', 'Signal Analysis', 'Background Rejection', 'Statistical Analysis', 'Physics Research'],
    pricing: '$70,000 - $700,000/project',
    category: 'Particle Physics',
    popular: true,
    benefits: ['Scientific Discovery', 'Particle Detection', 'Physics Research', 'Advanced Analysis']
  },
  {
    title: 'AI-Powered Exoplanet Discovery',
    description: 'AI systems for discovering and characterizing exoplanets from astronomical data.',
    icon: Globe,
    features: ['Light Curve Analysis', 'Transit Detection', 'Atmospheric Modeling', 'Habitability Assessment', 'Data Processing'],
    pricing: '$45,000 - $450,000/project',
    category: 'Astrobiology',
    popular: true,
    benefits: ['Exoplanet Discovery', 'Astrobiology Research', 'Space Exploration', 'Scientific Discovery']
  },
  {
    title: 'AI-Powered Protein Folding Prediction',
    description: 'Advanced AI for predicting protein structures and folding patterns.',
    icon: Heart,
    features: ['Structure Prediction', 'Folding Simulation', 'Function Analysis', 'Drug Design', 'Biomedical Research'],
    pricing: '$35,000 - $350,000/setup',
    category: 'Structural Biology',
    popular: true,
    benefits: ['Drug Discovery', 'Medical Research', 'Protein Understanding', 'Biomedical Advancement']
  },
  {
    title: 'AI-Powered Cryptocurrency Mining',
    description: 'AI-optimized cryptocurrency mining with energy efficiency and profit maximization.',
    icon: TrendingUp,
    features: ['Hash Rate Optimization', 'Energy Efficiency', 'Profit Maximization', 'Market Analysis', 'Automated Mining'],
    pricing: '$20,000 - $200,000/setup',
    category: 'Crypto AI',
    popular: true,
    benefits: ['Profit Optimization', 'Energy Efficiency', 'Automated Operations', 'Market Analysis']
  },
  {
    title: 'AI-Powered Virtual Reality Content',
    description: 'AI-generated immersive VR content with realistic physics and interactions.',
    icon: Monitor,
    features: ['3D Content Generation', 'Physics Simulation', 'Interactive Design', 'Realistic Rendering', 'AI Creation'],
    pricing: '$25,000 - $250,000/project',
    category: 'VR AI',
    popular: true,
    benefits: ['Immersive Content', 'Realistic Simulation', 'AI Generation', 'Enhanced VR']
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'Advanced AR systems with AI-powered object recognition and spatial understanding.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Processing', 'Context Awareness', 'AI Integration'],
    pricing: '$30,000 - $300,000/setup',
    category: 'AR AI',
    popular: true,
    benefits: ['Enhanced AR', 'AI Recognition', 'Spatial Understanding', 'Context Awareness']
  },
  {
    title: 'AI-Powered Holographic Displays',
    description: 'AI-optimized holographic displays with real-time content generation and interaction.',
    icon: Monitor,
    features: ['Hologram Generation', 'Real-time Rendering', 'Interactive Controls', '3D Projection', 'AI Optimization'],
    pricing: '$40,000 - $400,000/project',
    category: 'Holographic AI',
    popular: true,
    benefits: ['Immersive Displays', 'Real-time Interaction', 'AI Optimization', 'Future Technology']
  },
  {
    title: 'AI-Powered Teleportation Simulation',
    description: 'AI systems for simulating quantum teleportation and quantum communication protocols.',
    icon: Network,
    features: ['Quantum Simulation', 'Entanglement Modeling', 'Protocol Optimization', 'Error Correction', 'Quantum Communication'],
    pricing: '$55,000 - $550,000/project',
    category: 'Quantum Communication',
    popular: true,
    benefits: ['Quantum Simulation', 'Communication Research', 'Protocol Development', 'Scientific Advancement']
  },
  {
    title: 'AI-Powered Time Travel Simulation',
    description: 'AI systems for simulating time travel scenarios and temporal paradoxes.',
    icon: Clock,
    features: ['Temporal Modeling', 'Paradox Analysis', 'Causality Simulation', 'Timeline Optimization', 'Physics Simulation'],
    pricing: '$90,000 - $900,000/project',
    category: 'Temporal AI',
    popular: true,
    benefits: ['Temporal Research', 'Paradox Analysis', 'Physics Simulation', 'Scientific Discovery']
  },
  {
    title: 'AI-Powered Multiverse Exploration',
    description: 'AI systems for exploring and simulating multiple universe scenarios and theories.',
    icon: Globe,
    features: ['Multiverse Modeling', 'Theory Testing', 'Scenario Simulation', 'Physics Exploration', 'Research Platform'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Theoretical Physics AI',
    popular: true,
    benefits: ['Scientific Discovery', 'Physics Research', 'Universe Simulation', 'Theory Testing']
  },
  {
    title: 'AI-Powered Quantum Machine Learning',
    description: 'Quantum-enhanced machine learning algorithms for complex optimization problems.',
    icon: Cpu,
    features: ['Quantum Algorithms', 'Optimization Problems', 'Quantum Neural Networks', 'Hybrid Classical-Quantum'],
    pricing: '$25,000 - $100,000/project',
    category: 'Quantum AI',
    popular: true,
    benefits: ['Quantum Computing', 'Advanced Algorithms', 'Optimization', 'Future Technology']
  },
  {
    title: 'AI-Powered Autonomous Vehicle Systems',
    description: 'Complete autonomous vehicle AI systems with perception, planning, and control.',
    icon: Car,
    features: ['Computer Vision', 'Path Planning', 'Sensor Fusion', 'Real-time Decision Making', 'Safety Systems'],
    pricing: '$100,000 - $500,000/project',
    category: 'Autonomous Systems',
    popular: true,
    benefits: ['Autonomous Driving', 'Safety Enhancement', 'Traffic Optimization', 'Future Mobility']
  },
  {
    title: 'AI-Powered Space Exploration Analytics',
    description: 'AI systems for space mission planning, satellite data analysis, and space weather prediction.',
    icon: Rocket,
    features: ['Mission Planning', 'Satellite Data Analysis', 'Space Weather Prediction', 'Orbital Mechanics', 'Risk Assessment'],
    pricing: '$50,000 - $200,000/project',
    category: 'Space Tech',
    popular: true,
    benefits: ['Space Exploration', 'Mission Success', 'Data Analysis', 'Risk Mitigation']
  },
  {
    title: 'AI-Powered Climate Change Modeling',
    description: 'Advanced AI models for climate prediction, carbon footprint analysis, and environmental monitoring.',
    icon: Globe,
    features: ['Climate Modeling', 'Carbon Analysis', 'Environmental Monitoring', 'Sustainability Metrics', 'Policy Impact'],
    pricing: '$30,000 - $150,000/project',
    category: 'Climate AI',
    popular: true,
    benefits: ['Climate Solutions', 'Environmental Impact', 'Sustainability', 'Policy Support']
  },
  {
    title: 'AI-Powered Brain-Computer Interface',
    description: 'AI-powered brain-computer interface systems for medical and assistive applications.',
    icon: Brain,
    features: ['Neural Signal Processing', 'Motor Control', 'Cognitive Enhancement', 'Medical Applications', 'Research Support'],
    pricing: '$75,000 - $300,000/project',
    category: 'Neurotechnology',
    popular: true,
    benefits: ['Medical Applications', 'Assistive Technology', 'Research Support', 'Human Enhancement']
  },
  {
    title: 'AI-Powered Synthetic Biology',
    description: 'AI-driven synthetic biology platform for protein design and genetic engineering.',
    icon: Sprout,
    features: ['Protein Design', 'Genetic Engineering', 'Metabolic Pathway Design', 'Biological Simulation', 'Drug Discovery'],
    pricing: '$40,000 - $180,000/project',
    category: 'Synthetic Biology',
    popular: true,
    benefits: ['Drug Discovery', 'Genetic Engineering', 'Biomedical Research', 'Scientific Advancement']
  },
  {
    title: 'AI-Powered Cybersecurity AI',
    description: 'Advanced AI cybersecurity systems with threat hunting and automated response.',
    icon: Shield,
    features: ['Threat Hunting', 'Automated Response', 'Behavioral Analysis', 'Zero-day Detection', 'Incident Response'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Cybersecurity AI',
    popular: true,
    benefits: ['Advanced Protection', 'Automated Response', 'Threat Prevention', 'Continuous Monitoring']
  },
  {
    title: 'AI-Powered Digital Twin Platform',
    description: 'AI-powered digital twin creation and simulation for industrial and urban systems.',
    icon: Monitor,
    features: ['Digital Twin Creation', 'Real-time Simulation', 'Predictive Maintenance', 'Optimization', 'Analytics'],
    pricing: '$35,000 - $150,000/project',
    category: 'Digital Twins',
    popular: true,
    benefits: ['Real-time Insights', 'Predictive Maintenance', 'Optimization', 'Risk Mitigation']
  },
  {
    title: 'AI-Powered Augmented Reality',
    description: 'AI-enhanced augmented reality systems for industrial and consumer applications.',
    icon: Eye,
    features: ['Object Recognition', 'Spatial Mapping', 'Real-time Rendering', 'Gesture Control', 'AI Integration'],
    pricing: '$25,000 - $120,000/project',
    category: 'AR/VR AI',
    popular: true,
    benefits: ['Enhanced AR', 'AI Recognition', 'Spatial Understanding', 'Context Awareness']
  },
  {
    title: 'AI-Powered Edge Computing',
    description: 'AI inference and processing at the edge for real-time applications.',
    icon: Server,
    features: ['Edge Inference', 'Real-time Processing', 'Low Latency', 'Distributed AI', 'IoT Integration'],
    pricing: '$15,000 - $80,000/setup',
    category: 'Edge AI',
    popular: true,
    benefits: ['Low Latency', 'Real-time Processing', 'Distributed AI', 'IoT Support']
  },
  {
    title: 'AI-Powered Blockchain Analytics',
    description: 'AI-powered blockchain transaction analysis and smart contract optimization.',
    icon: Shield,
    features: ['Transaction Analysis', 'Smart Contract Optimization', 'DeFi Analytics', 'Compliance Monitoring', 'Risk Assessment'],
    pricing: '$20,000 - $100,000/project',
    category: 'Blockchain AI',
    popular: true,
    benefits: ['Blockchain Analysis', 'Smart Contract Optimization', 'DeFi Support', 'Compliance']
  },
  {
    title: 'AI-Powered Personalized Medicine',
    description: 'AI-driven personalized medicine platform for treatment optimization and drug discovery.',
    icon: Heart,
    features: ['Genomic Analysis', 'Treatment Optimization', 'Drug Discovery', 'Clinical Decision Support', 'Biomarker Analysis'],
    pricing: '$60,000 - $250,000/project',
    category: 'Personalized Medicine',
    popular: true,
    benefits: ['Personalized Treatment', 'Drug Discovery', 'Clinical Support', 'Medical Advancement']
  },
  {
    title: 'AI-Powered Smart City Management',
    description: 'AI-powered smart city infrastructure management and optimization platform.',
    icon: Building,
    features: ['Traffic Optimization', 'Energy Management', 'Public Safety', 'Resource Allocation', 'Citizen Services'],
    pricing: '$100,000 - $500,000/project',
    category: 'Smart Cities',
    popular: true,
    benefits: ['Efficient City Management', 'Improved Services', 'Sustainability', 'Quality of Life']
  },
  {
    title: 'AI-Powered Robotic Process Automation',
    description: 'Advanced RPA with AI capabilities for complex business process automation.',
    icon: Settings,
    features: ['Process Automation', 'Document Processing', 'Decision Making', 'Exception Handling', 'AI Integration'],
    pricing: '$10,000 - $50,000/setup',
    category: 'RPA AI',
    popular: true,
    benefits: ['Process Automation', 'AI Integration', 'Efficiency', 'Cost Savings']
  }
];

const categories = [
  'All Services',
  'Cloud Services',
  'Security',
  'Infrastructure',
  'Support',
  'Data Management',
  'DevOps',
  'Data Protection',
  'Communication',
  'Consulting',
  'Software Management',
  'Mobile Management',
  'Asset Management',
  'Training',
  'Virtualization',
  'Compliance',
  'Project Management',
  'Cost Optimization',
  'AI Operations',
  'Advanced Security',
  'Edge Computing',
  '5G Technology',
  'Blockchain',
  'IoT Security',
  'Hybrid Cloud',
  'AI Security',
  'Digital Transformation',
  'Green IT',
  'Governance',
  'Architecture',
  'Disaster Recovery'
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Expert Team",
    description: "Certified IT professionals with extensive experience"
  },
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

const itServices = [
  {
    title: "Cloud Migration & Management",
    description: "Seamless migration to cloud platforms with ongoing management and optimization",
    icon: Cloud,
    features: [
      "AWS/Azure/GCP Migration",
      "Cloud Architecture Design",
      "Cost Optimization",
      "Security Implementation",
      "Disaster Recovery",
      "24/7 Monitoring"
    ],
    color: "from-blue-500 to-cyan-500",
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better performance"
    ]
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security measures to protect your business from cyber threats",
    icon: Shield,
    features: [
      "Security Assessment",
      "Firewall Configuration",
      "Intrusion Detection",
      "Vulnerability Scanning",
      "Security Training",
      "Incident Response"
    ],
    color: "from-red-500 to-pink-500",
    benefits: [
      "Protection from cyber attacks",
      "Compliance with regulations",
      "Reduced security risks",
      "Peace of mind"
    ]
  },
  {
    title: "Network Infrastructure",
    description: "Design, implementation, and management of robust network infrastructure",
    icon: Network,
    features: [
      "Network Design & Planning",
      "Router & Switch Configuration",
      "Wireless Solutions",
      "VPN Implementation",
      "Network Monitoring",
      "Performance Optimization"
    ],
    color: "from-green-500 to-emerald-500",
    benefits: [
      "Improved connectivity",
      "Better performance",
      "Enhanced security",
      "Reduced downtime"
    ]
  },
  {
    title: "IT Support & Helpdesk",
    description: "24/7 technical support and helpdesk services for your organization",
    icon: Users,
    features: [
      "24/7 Technical Support",
      "Remote Assistance",
      "Hardware Maintenance",
      "Software Installation",
      "User Training",
      "Issue Resolution"
    ],
    color: "from-purple-500 to-indigo-500",
    benefits: [
      "Reduced downtime",
      "Faster issue resolution",
      "Improved productivity",
      "Cost-effective support"
    ]
  },
  {
    title: "Database Management",
    description: "Expert database design, optimization, and management services",
    icon: Database,
    features: [
      "Database Design",
      "Performance Tuning",
      "Backup & Recovery",
      "Data Migration",
      "Security Implementation",
      "Monitoring & Maintenance"
    ],
    color: "from-orange-500 to-yellow-500",
    benefits: [
      "Improved data performance",
      "Enhanced data security",
      "Better data integrity",
      "Reduced maintenance costs"
    ]
  },
  {
    title: "System Integration",
    description: "Seamless integration of disparate systems and applications",
    icon: Settings,
    features: [
      "API Development",
      "System Integration",
      "Data Synchronization",
      "Workflow Automation",
      "Legacy System Migration",
      "Custom Solutions"
    ],
    color: "from-indigo-500 to-purple-500",
    benefits: [
      "Streamlined operations",
      "Improved efficiency",
      "Better data flow",
      "Reduced manual work"
    ]
  }
];

const industries = [
  {
    name: "Healthcare",
    icon: Users,
    description: "HIPAA-compliant IT solutions for healthcare organizations",
    solutions: ["EMR Integration", "Telemedicine Platforms", "Data Security", "Compliance Management"]
  },
  {
    name: "Finance",
    icon: BarChart3,
    description: "Secure IT infrastructure for financial services",
    solutions: ["PCI Compliance", "Fraud Detection", "Risk Management", "Regulatory Reporting"]
  },
  {
    name: "Manufacturing",
    icon: Cpu,
    description: "Industrial IT solutions for manufacturing operations",
    solutions: ["IoT Integration", "Supply Chain Management", "Quality Control", "Production Monitoring"]
  },
  {
    name: "Education",
    icon: Globe,
    description: "Technology solutions for educational institutions",
    solutions: ["Learning Management Systems", "Student Information Systems", "Campus Networks", "Digital Classrooms"]
  }
];

const technologies = [
  {
    category: "Cloud Platforms",
    items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud", "Oracle Cloud"]
  },
  {
    category: "Operating Systems",
    items: ["Windows Server", "Linux (Ubuntu, CentOS, RHEL)", "macOS", "VMware vSphere", "Hyper-V"]
  },
  {
    category: "Databases",
    items: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
  },
  {
    category: "Security Tools",
    items: ["Firewalls (Cisco, Fortinet)", "Antivirus Solutions", "SIEM Systems", "VPN Solutions", "Encryption Tools"]
  },
  {
    category: "Monitoring & Management",
    items: ["Nagios", "Zabbix", "SolarWinds", "PRTG", "Splunk"]
  },
  {
    category: "Virtualization",
    items: ["VMware vSphere", "Microsoft Hyper-V", "Citrix XenServer", "Docker", "Kubernetes"]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Assessment",
    description: "Comprehensive analysis of your current IT infrastructure and requirements"
  },
  {
    step: "02",
    title: "Planning",
    description: "Detailed project planning with clear milestones and timelines"
  },
  {
    step: "03",
    title: "Implementation",
    description: "Professional implementation with minimal business disruption"
  },
  {
    step: "04",
    title: "Support",
    description: "Ongoing support and maintenance to ensure optimal performance"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Improved Efficiency",
    description: "Streamlined IT operations and automated processes boost productivity by up to 35%"
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Comprehensive security measures protect your business from cyber threats and data breaches"
  },
  {
    icon: BarChart3,
    title: "Cost Optimization",
    description: "Reduce IT costs through efficient resource utilization and strategic technology investments"
  },
  {
    icon: Users,
    title: "Better Support",
    description: "24/7 technical support ensures minimal downtime and faster issue resolution"
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and long-term success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
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

              {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started with Our IT Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact our IT experts to discuss your infrastructure needs and get a customized solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 302 464 0950</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <Link
                href="/ai-services"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                View AI Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive information technology solutions to modernize your infrastructure, 
              enhance security, and drive business growth through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get IT Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20">
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
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              End-to-end IT services designed to optimize your technology infrastructure, 
              enhance security, and support your business objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group-hover:scale-105`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our IT solutions are tailored to meet the specific requirements and compliance 
              standards of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {industry.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              Technologies We Work With
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools to deliver 
              robust and scalable IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Our IT solutions deliver measurable results and provide a solid foundation for your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our IT Service Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              A systematic approach to IT service delivery that ensures successful implementation and ongoing support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your IT needs and create a comprehensive solution that supports your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get IT Consultation
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </Layout>
  );
}