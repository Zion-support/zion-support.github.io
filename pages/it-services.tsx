import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from './components/Layout';
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
  Sprout,
  Eye,
  Bot,
  Phone,
  MapPin,
  Mail,
  Target,
  Heart,
  PieChart,
  Truck,
  Home,
  Video,
  ClipboardList,
  Layers,
  Activity,
  Lightbulb,
  Wrench,
  Calendar,
  FileText,
  Image,
  Mic
} from 'lucide-react';

const itServices = [
  // Core IT Services
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management. Reduce infrastructure costs by 40%.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery', 'Security Compliance'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud',
    popular: true,
    link: 'https://ziontechgroup.com/it-services/cloud-infrastructure'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data. Block 99.9% of cyber threats.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response', 'Compliance Management'],
    pricing: '$5,000 - $40,000/project',
    category: 'Security',
    popular: true,
    link: 'https://ziontechgroup.com/it-services/cybersecurity'
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure. Improve network performance by 60%.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting', 'Security Implementation'],
    pricing: '$120 - $220/hour',
    category: 'Networking',
    link: 'https://ziontechgroup.com/it-services/network-infrastructure'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance. Optimize database performance by 50%.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services', 'Security Hardening'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database',
    link: 'https://ziontechgroup.com/it-services/database-management'
  },
  {
    title: 'System Administration',
    description: '24/7 system administration and maintenance services for your IT infrastructure. Ensure 99.9% uptime.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management', 'Performance Tuning'],
    pricing: '$2,000 - $8,000/month',
    category: 'Administration',
    link: 'https://ziontechgroup.com/it-services/system-administration'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Complete DevOps implementation with continuous integration and deployment pipelines. Deploy 10x faster.',
    icon: Code,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Automated Testing'],
    pricing: '$8,000 - $40,000/project',
    category: 'DevOps',
    popular: true,
    link: 'https://ziontechgroup.com/it-services/devops'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives. Optimize IT investments by 35%.',
    icon: Lightbulb,
    features: ['Technology Strategy', 'Digital Transformation', 'IT Roadmap Planning', 'Vendor Selection', 'Cost Optimization'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    link: 'https://ziontechgroup.com/it-services/it-consulting'
  },
  {
    title: 'Data Center Services',
    description: 'Complete data center solutions including design, implementation, and management. Improve efficiency by 45%.',
    icon: Server,
    features: ['Data Center Design', 'Power & Cooling', 'Physical Security', 'Monitoring Systems', 'Disaster Recovery'],
    pricing: '$50,000 - $500,000/project',
    category: 'Data Center',
    link: 'https://ziontechgroup.com/it-services/data-center'
  },
  {
    title: 'IT Support & Helpdesk',
    description: '24/7 IT support and helpdesk services for your organization. Resolve issues 80% faster.',
    icon: Users,
    features: ['24/7 Support', 'Remote Assistance', 'Issue Tracking', 'Knowledge Base', 'User Training'],
    pricing: '$1,500 - $6,000/month',
    category: 'Support',
    link: 'https://ziontechgroup.com/it-services/it-support'
  },
  {
    title: 'Software Development',
    description: 'Custom software development services for web, mobile, and desktop applications. Deliver solutions 3x faster.',
    icon: Code,
    features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development', 'Legacy Modernization'],
    pricing: '$80 - $200/hour',
    category: 'Development',
    link: 'https://ziontechgroup.com/it-services/software-development'
  },
  // Advanced IT Services
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing setup and integration for research and enterprise applications. Solve complex problems 1000x faster.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Algorithm Development', 'Quantum-Classical Integration', 'Research Support', 'Training Programs'],
    pricing: '$100,000 - $1,000,000/project',
    category: 'Quantum Computing',
    popular: true,
    link: 'https://ziontechgroup.com/it-services/quantum-computing'
  },
  {
    title: 'Edge Computing Solutions',
    description: 'Distributed computing infrastructure for low-latency applications and IoT deployments. Reduce latency by 90%.',
    icon: Server,
    features: ['Edge Node Deployment', 'Latency Optimization', 'IoT Integration', 'Global Distribution', 'Real-time Processing'],
    pricing: '$25,000 - $150,000/project',
    category: 'Edge Computing',
    link: 'https://ziontechgroup.com/it-services/edge-computing'
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Enterprise blockchain solutions with smart contracts and decentralized applications. Enable secure transactions.',
    icon: Network,
    features: ['Blockchain Setup', 'Smart Contract Development', 'DApp Development', 'Consensus Mechanisms', 'Security Audits'],
    pricing: '$50,000 - $500,000/project',
    category: 'Blockchain',
    link: 'https://ziontechgroup.com/it-services/blockchain'
  },
  {
    title: 'AI Infrastructure Setup',
    description: 'Complete AI/ML infrastructure with GPU clusters, data pipelines, and model deployment. Accelerate AI development by 5x.',
    icon: Brain,
    features: ['GPU Cluster Setup', 'Data Pipeline Design', 'Model Deployment', 'MLOps Implementation', 'Model Monitoring'],
    pricing: '$75,000 - $300,000/project',
    category: 'AI Infrastructure',
    popular: true,
    link: 'https://ziontechgroup.com/it-services/ai-infrastructure'
  },
  {
    title: 'Zero Trust Architecture',
    description: 'Implement zero trust security model for enhanced cybersecurity posture. Reduce security incidents by 95%.',
    icon: Shield,
    features: ['Identity Verification', 'Device Trust', 'Network Segmentation', 'Continuous Monitoring', 'Policy Enforcement'],
    pricing: '$30,000 - $150,000/project',
    category: 'Security',
    link: 'https://ziontechgroup.com/it-services/zero-trust'
  },
  {
    title: 'Hybrid Cloud Solutions',
    description: 'Seamless integration of on-premises and cloud infrastructure. Optimize costs and performance.',
    icon: Cloud,
    features: ['Cloud Migration', 'Hybrid Connectivity', 'Data Synchronization', 'Workload Optimization', 'Cost Management'],
    pricing: '$40,000 - $200,000/project',
    category: 'Cloud',
    link: 'https://ziontechgroup.com/it-services/hybrid-cloud'
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management and optimization. Reduce IT costs by 25%.',
    icon: ClipboardList,
    features: ['Asset Discovery', 'Lifecycle Tracking', 'License Management', 'Cost Optimization', 'Compliance Reporting'],
    pricing: '$2,000 - $10,000/month',
    category: 'Asset Management',
    link: 'https://ziontechgroup.com/it-services/asset-management'
  },
  {
    title: 'Disaster Recovery Solutions',
    description: 'Comprehensive disaster recovery planning and implementation. Ensure business continuity with 99.9% RTO.',
    icon: Shield,
    features: ['Recovery Planning', 'Backup Solutions', 'Failover Systems', 'Testing & Validation', 'Documentation'],
    pricing: '$15,000 - $75,000/project',
    category: 'Disaster Recovery',
    link: 'https://ziontechgroup.com/it-services/disaster-recovery'
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Ensure compliance with industry regulations and implement IT governance frameworks. Achieve 100% compliance.',
    icon: CheckCircle,
    features: ['Compliance Assessment', 'Policy Development', 'Audit Support', 'Risk Management', 'Training Programs'],
    pricing: '$5,000 - $25,000/month',
    category: 'Compliance',
    link: 'https://ziontechgroup.com/it-services/compliance'
  },
  {
    title: 'IT Training & Certification',
    description: 'Comprehensive IT training programs and certification support. Upskill your team with industry certifications.',
    icon: BookOpen,
    features: ['Technical Training', 'Certification Programs', 'Hands-on Labs', 'Custom Curriculum', 'Exam Preparation'],
    pricing: '$500 - $2,500/person',
    category: 'Training',
    link: 'https://ziontechgroup.com/it-services/training'
  },
  {
    title: 'IT Project Management',
    description: 'Professional IT project management services for complex technology implementations. Deliver projects on time and budget.',
    icon: Calendar,
    features: ['Project Planning', 'Resource Management', 'Risk Assessment', 'Stakeholder Communication', 'Quality Assurance'],
    pricing: '$100 - $250/hour',
    category: 'Project Management',
    link: 'https://ziontechgroup.com/it-services/project-management'
  },
  {
    title: 'IT Vendor Management',
    description: 'Strategic vendor management and procurement services for IT products and services. Reduce costs by 30%.',
    icon: Building,
    features: ['Vendor Evaluation', 'Contract Negotiation', 'Performance Monitoring', 'Cost Optimization', 'Relationship Management'],
    pricing: '$3,000 - $15,000/month',
    category: 'Vendor Management',
    link: 'https://ziontechgroup.com/it-services/vendor-management'
  },
  {
    title: 'IT Security Operations Center (SOC)',
    description: '24/7 security monitoring and incident response services. Detect and respond to threats in real-time.',
    icon: Eye,
    features: ['Threat Monitoring', 'Incident Response', 'Security Analytics', 'Threat Intelligence', 'Forensic Analysis'],
    pricing: '$10,000 - $50,000/month',
    category: 'Security',
    popular: true,
    link: 'https://ziontechgroup.com/it-services/soc'
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive IT performance analysis and optimization services. Improve system performance by 60%.',
    icon: Activity,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring Setup', 'Capacity Planning'],
    pricing: '$5,000 - $25,000/project',
    category: 'Performance',
    link: 'https://ziontechgroup.com/it-services/performance-optimization'
  },
  {
    title: 'IT Integration Services',
    description: 'Seamless integration of disparate systems and applications. Connect all your systems for maximum efficiency.',
    icon: Network,
    features: ['API Integration', 'Data Synchronization', 'System Connectivity', 'Workflow Automation', 'Error Handling'],
    pricing: '$8,000 - $40,000/project',
    category: 'Integration',
    link: 'https://ziontechgroup.com/it-services/integration'
  },
  {
    title: 'IT Monitoring & Analytics',
    description: 'Comprehensive IT monitoring and analytics platform for proactive management. Prevent issues before they occur.',
    icon: BarChart3,
    features: ['Real-time Monitoring', 'Performance Analytics', 'Predictive Alerts', 'Custom Dashboards', 'Reporting'],
    pricing: '$3,000 - $15,000/month',
    category: 'Monitoring',
    link: 'https://ziontechgroup.com/it-services/monitoring'
  },
  {
    title: 'IT Backup & Recovery',
    description: 'Comprehensive backup and recovery solutions for all your data and systems. Ensure data protection and business continuity.',
    icon: HardDrive,
    features: ['Automated Backups', 'Cloud Storage', 'Recovery Testing', 'Data Encryption', 'Compliance Support'],
    pricing: '$1,000 - $5,000/month',
    category: 'Backup',
    link: 'https://ziontechgroup.com/it-services/backup-recovery'
  },
  {
    title: 'IT Mobile Device Management',
    description: 'Complete mobile device management and security solutions. Secure and manage all mobile devices.',
    icon: Smartphone,
    features: ['Device Enrollment', 'Security Policies', 'App Management', 'Remote Wipe', 'Compliance Monitoring'],
    pricing: '$2,000 - $8,000/month',
    category: 'Mobile',
    link: 'https://ziontechgroup.com/it-services/mobile-management'
  },
  {
    title: 'IT Virtualization Services',
    description: 'Server and desktop virtualization solutions for improved efficiency and cost savings. Reduce hardware costs by 50%.',
    icon: Monitor,
    features: ['Server Virtualization', 'Desktop Virtualization', 'Storage Virtualization', 'Network Virtualization', 'Management Tools'],
    pricing: '$10,000 - $50,000/project',
    category: 'Virtualization',
    link: 'https://ziontechgroup.com/it-services/virtualization'
  },
  {
<<<<<<< HEAD
    title: 'Advanced IT Governance & Risk Management',
    description: 'Comprehensive IT governance framework with risk management and compliance monitoring.',
    icon: Shield,
    features: ['Governance Framework', 'Risk Management', 'Compliance Monitoring', 'Policy Development'],
    pricing: '$50,000 - $300,000/project',
    category: 'IT Governance'
  },
  {
    title: 'AI-Powered IT Operations Center',
    description: 'Intelligent IT operations with AI-driven incident response, predictive maintenance, and automated remediation.',
    icon: Brain,
    features: ['AI Incident Response', 'Predictive Maintenance', 'Automated Remediation', 'Intelligent Monitoring'],
    pricing: '$25,000 - $150,000/setup',
    category: 'AI Operations',
    popular: true
  },
  {
    title: 'Quantum-Safe Security Implementation',
    description: 'Future-proof security solutions preparing for quantum computing threats with post-quantum cryptography.',
    icon: Lock,
    features: ['Post-Quantum Algorithms', 'Hybrid Encryption', 'Migration Planning', 'Compliance Assurance'],
    pricing: '$100,000 - $500,000/project',
    category: 'Quantum Security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Distributed edge computing solutions for real-time processing and low-latency applications.',
    icon: Monitor,
    features: ['Edge Node Deployment', 'Real-time Processing', 'Low Latency Networks', 'IoT Integration'],
    pricing: '$40,000 - $200,000/project',
    category: 'Edge Computing'
  },
  {
    title: '5G Network Implementation',
    description: 'Complete 5G network infrastructure design, deployment, and optimization for enterprise environments.',
    icon: Wifi,
    features: ['5G Core Network', 'RAN Implementation', 'Network Slicing', 'Performance Optimization'],
    pricing: '$200,000 - $1,000,000/project',
    category: '5G Networks',
    popular: true
  },
  {
    title: 'Blockchain Infrastructure Services',
    description: 'Enterprise blockchain solutions including private networks, smart contracts, and decentralized applications.',
    icon: Network,
    features: ['Private Blockchain Setup', 'Smart Contract Development', 'Node Management', 'Security Hardening'],
    pricing: '$75,000 - $400,000/project',
    category: 'Blockchain Infrastructure'
  },
  {
    title: 'IoT Security & Management Platform',
    description: 'Comprehensive IoT security and device management with threat detection and automated response.',
    icon: Smartphone,
    features: ['Device Security', 'Threat Detection', 'Automated Response', 'Firmware Management'],
    pricing: '$30,000 - $150,000/setup',
    category: 'IoT Security'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implementation of zero trust security model with continuous verification and least privilege access.',
    icon: Shield,
    features: ['Identity Verification', 'Network Segmentation', 'Continuous Monitoring', 'Access Control'],
    pricing: '$100,000 - $500,000/project',
    category: 'Zero Trust Security',
    popular: true
  },
  {
    title: 'Hybrid Cloud Management Platform',
    description: 'Unified management of hybrid cloud environments across multiple providers with cost optimization.',
    icon: Cloud,
    features: ['Multi-cloud Management', 'Cost Optimization', 'Security Integration', 'Performance Monitoring'],
    pricing: '$50,000 - $250,000/setup',
    category: 'Hybrid Cloud'
  },
  {
    title: 'AI-Powered Data Center Management',
    description: 'Intelligent data center operations with AI-driven optimization, predictive maintenance, and energy efficiency.',
    icon: Server,
    features: ['AI Optimization', 'Predictive Maintenance', 'Energy Efficiency', 'Capacity Planning'],
    pricing: '$75,000 - $350,000/project',
    category: 'Data Center AI'
  },
  {
    title: 'Advanced Threat Intelligence Platform',
    description: 'AI-powered threat intelligence with real-time analysis, threat hunting, and automated response.',
    icon: Eye,
    features: ['Threat Intelligence', 'Real-time Analysis', 'Threat Hunting', 'Automated Response'],
    pricing: '$40,000 - $200,000/setup',
    category: 'Threat Intelligence'
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin technology for physical infrastructure monitoring, simulation, and optimization.',
    icon: Building,
    features: ['3D Modeling', 'Real-time Monitoring', 'Simulation Engine', 'Predictive Analytics'],
    pricing: '$100,000 - $600,000/project',
    category: 'Digital Twin',
    popular: true
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Integration of quantum computing capabilities for complex optimization and cryptographic applications.',
    icon: Cpu,
    features: ['Quantum Hardware Integration', 'Hybrid Classical-Quantum', 'Algorithm Development', 'Performance Optimization'],
    pricing: '$200,000 - $1,000,000/project',
    category: 'Quantum Computing'
  },
  {
    title: 'Advanced Network Automation',
    description: 'Intelligent network automation with AI-driven optimization, self-healing, and predictive maintenance.',
    icon: Network,
    features: ['Network Automation', 'AI Optimization', 'Self-healing Networks', 'Predictive Maintenance'],
    pricing: '$60,000 - $300,000/project',
    category: 'Network Automation'
  },
  {
    title: 'Green IT & Sustainability Solutions',
    description: 'Sustainable IT infrastructure with carbon footprint reduction and energy-efficient technologies.',
    icon: Sprout,
    features: ['Carbon Footprint Analysis', 'Energy Optimization', 'Sustainable Hardware', 'Green Certifications'],
    pricing: '$25,000 - $125,000/project',
    category: 'Green IT'
  },
  {
    title: 'AI-Powered IT Service Management',
    description: 'Intelligent IT service management with automated ticketing, knowledge management, and predictive analytics.',
    icon: Settings,
    features: ['Automated Ticketing', 'Knowledge Management', 'Predictive Analytics', 'Service Optimization'],
    pricing: '$35,000 - $175,000/setup',
    category: 'ITSM AI'
  },
  {
    title: 'Advanced Compliance Automation',
    description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
    icon: CheckCircle,
    features: ['Regulatory Compliance', 'Automated Monitoring', 'Risk Assessment', 'Audit Preparation'],
    pricing: '$50,000 - $250,000/project',
    category: 'Compliance Automation'
  },
  {
    title: 'Multi-Cloud Security Orchestration',
    description: 'Unified security orchestration across multiple cloud providers with automated threat response.',
    icon: Shield,
    features: ['Multi-cloud Security', 'Automated Response', 'Threat Intelligence', 'Compliance Monitoring'],
    pricing: '$80,000 - $400,000/setup',
    category: 'Cloud Security Orchestration'
  },
  {
    title: 'AI-Powered IT Asset Management',
    description: 'Intelligent IT asset lifecycle management with predictive maintenance and cost optimization.',
    icon: Package,
    features: ['Asset Discovery', 'Predictive Maintenance', 'Cost Optimization', 'Lifecycle Management'],
    pricing: '$20,000 - $100,000/setup',
    category: 'IT Asset Management'
  },
  {
    title: 'Advanced Disaster Recovery & Business Continuity',
    description: 'Comprehensive disaster recovery solutions with AI-powered failover and business continuity planning.',
    icon: Shield,
    features: ['AI-powered Failover', 'Business Continuity', 'Disaster Recovery Testing', 'RTO/RPO Optimization'],
    pricing: '$100,000 - $500,000/project',
    category: 'Disaster Recovery',
    popular: true
  }
];
const technologies = [{ name: 'Cloud Platforms', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
>>>>>>> main
>>>>>>> main
  { name: 'Containerization', icon: Server, description: 'Docker, Kubernetes, OpenShift' },
  { name: 'Security Tools', icon: Shield, description: 'SIEM, WAF, IAM, Encryption' },
  { name: 'Monitoring', icon: BarChart3, description: 'Prometheus, Grafana, ELK Stack' },
  { name: 'Databases', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
  { name: 'Networking', icon: Network, description: 'Cisco, Fortinet, SD-WAN' }
];
<<<<<<< HEAD

const benefits = [
  {
=======
<<<<<<< HEAD
>>>>>>> main


const benefits = [
  {
=======
const benefits = [{
>>>>>>> main
>>>>>>> main
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Proactive monitoring and maintenance',
    stat: '99.9%'
=======
    title: 'IT Cloud Migration',
    description: 'Seamless migration of applications and data to the cloud. Migrate without downtime or data loss.',
    icon: Cloud,
    features: ['Migration Planning', 'Data Transfer', 'Application Migration', 'Testing & Validation', 'Go-live Support'],
    pricing: '$20,000 - $100,000/project',
    category: 'Cloud Migration',
    link: 'https://ziontechgroup.com/it-services/cloud-migration'
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-359a
  },
  {
    title: 'IT Automation Services',
    description: 'Automate repetitive IT tasks and processes for improved efficiency. Reduce manual work by 80%.',
    icon: Settings,
    features: ['Process Automation', 'Script Development', 'Workflow Design', 'Monitoring Setup', 'Maintenance'],
    pricing: '$5,000 - $25,000/project',
    category: 'Automation',
    link: 'https://ziontechgroup.com/it-services/automation'
  },
  {
    title: 'IT Capacity Planning',
    description: 'Strategic capacity planning and resource optimization for future growth. Plan for 3x growth efficiently.',
    icon: TrendingUp,
    features: ['Capacity Analysis', 'Growth Projections', 'Resource Planning', 'Cost Modeling', 'Implementation Roadmap'],
    pricing: '$8,000 - $40,000/project',
    category: 'Capacity Planning',
    link: 'https://ziontechgroup.com/it-services/capacity-planning'
  },
  {
    title: 'IT Change Management',
    description: 'Structured approach to managing IT changes and minimizing risks. Reduce change-related incidents by 90%.',
    icon: Wrench,
    features: ['Change Planning', 'Risk Assessment', 'Testing Procedures', 'Rollback Plans', 'Documentation'],
    pricing: '$3,000 - $15,000/month',
    category: 'Change Management',
    link: 'https://ziontechgroup.com/it-services/change-management'
  },
  {
    title: 'IT Service Desk',
    description: 'Professional IT service desk with ticketing system and knowledge base. Improve user satisfaction by 85%.',
    icon: Users,
    features: ['Ticket Management', 'Knowledge Base', 'User Self-Service', 'Escalation Procedures', 'Performance Metrics'],
    pricing: '$2,500 - $10,000/month',
    category: 'Service Desk',
    link: 'https://ziontechgroup.com/it-services/service-desk'
  },
  {
    title: 'IT Risk Assessment',
    description: 'Comprehensive IT risk assessment and mitigation strategies. Identify and address all potential risks.',
    icon: Shield,
    features: ['Risk Identification', 'Vulnerability Assessment', 'Impact Analysis', 'Mitigation Planning', 'Ongoing Monitoring'],
    pricing: '$5,000 - $25,000/project',
    category: 'Risk Management',
    link: 'https://ziontechgroup.com/it-services/risk-assessment'
  },
  {
    title: 'IT Cost Optimization',
    description: 'Strategic IT cost optimization and budget management. Reduce IT costs by 35% while improving performance.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Budget Planning', 'Vendor Negotiation', 'Resource Optimization', 'ROI Tracking'],
    pricing: '$3,000 - $15,000/project',
    category: 'Cost Optimization',
    link: 'https://ziontechgroup.com/it-services/cost-optimization'
  },
  {
    title: 'IT Documentation Services',
    description: 'Comprehensive IT documentation and knowledge management. Maintain accurate and up-to-date documentation.',
    icon: FileText,
    features: ['System Documentation', 'Process Documentation', 'User Guides', 'Technical Specifications', 'Maintenance'],
    pricing: '$2,000 - $10,000/project',
    category: 'Documentation',
    link: 'https://ziontechgroup.com/it-services/documentation'
  },
  {
    title: 'IT Testing Services',
    description: 'Comprehensive testing services for applications, systems, and infrastructure. Ensure quality and reliability.',
    icon: CheckCircle,
    features: ['Functional Testing', 'Performance Testing', 'Security Testing', 'Integration Testing', 'User Acceptance Testing'],
    pricing: '$5,000 - $25,000/project',
    category: 'Testing',
    link: 'https://ziontechgroup.com/it-services/testing'
  },
  {
    title: 'IT Innovation Consulting',
    description: 'Strategic IT innovation consulting to identify and implement cutting-edge technologies. Stay ahead of competition.',
    icon: Lightbulb,
    features: ['Technology Assessment', 'Innovation Strategy', 'Pilot Projects', 'Implementation Planning', 'ROI Analysis'],
    pricing: '$200 - $400/hour',
    category: 'Innovation',
    link: 'https://ziontechgroup.com/it-services/innovation-consulting'
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
      description="Professional IT services including cloud infrastructure, cybersecurity, DevOps, and digital transformation. Expert technology solutions for modern businesses."
      keywords="IT services, cloud computing, cybersecurity, DevOps, digital transformation, technology consulting"
      canonical="https://ziontechgroup.com/it-services"
    >

      <div className="min-h-screen bg-gray-50">
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
                Comprehensive IT Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 text-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professional technology solutions to accelerate your business growth and digital transformation.
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
                <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Call +1 302 464 0950
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cloud infrastructure to cybersecurity, we provide comprehensive IT solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    {service.popular && (
                      <span className="ml-auto bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">Category: {service.category}</span>
                  </div>
                  
                  <ul className="text-sm text-gray-500 space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link 
                      href={service.link || '#'} 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/contact" 
                      className="flex-1 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get started with our expert IT team and discover how our technology solutions can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
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
      </div>
    </Layout>
  );
}