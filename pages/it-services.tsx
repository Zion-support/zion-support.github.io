import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  AlertTriangle,
  ArrowRight,
  Atom,
  Brain,
  CheckCircle,
  Cloud,
  Code,
  Cpu,
  Database,
  DollarSign,
  GraduationCap,
  Leaf,
  Link as LinkIcon,
  Mail,
  MapPin,
  Monitor,
  Network,
  Package,
  Phone,
  Server,
  Settings,
  Shield,
  Users,
  Wifi,
  Zap
} from 'lucide-react';
import Layout from './components/Layout';

const services = [
  {
    title: "Quantum Computing Infrastructure",
    description: "Revolutionary quantum computing solutions for complex problem solving and advanced optimization",
    icon: Cpu,
    features: [
      "Quantum Hardware Integration",
      "Quantum Algorithm Development",
      "Quantum Error Correction",
      "Hybrid Classical-Quantum Systems",
      "Quantum Cloud Services",
      "Quantum Security Implementation",
      "Quantum Simulation Platforms",
      "Quantum Machine Learning Infrastructure"
    ],
    price: "Starting at $25,000/month",
    marketPrice: "$40,000-100,000/month",
    benefits: ["Solve problems 1000x faster", "Revolutionary optimization capabilities", "Breakthrough research potential"],
    setupTime: "12-16 weeks"
  },
  {
    title: "Edge Computing Solutions",
    description: "Distributed computing infrastructure for real-time processing and low-latency applications",
    icon: Wifi,
    features: [
      "Edge Server Deployment",
      "Real-time Data Processing",
      "IoT Device Management",
      "Edge AI & ML Models",
      "5G Network Integration",
      "Edge Security & Compliance",
      "Distributed Storage Systems",
      "Edge Analytics Platforms"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$6,000-15,000/month",
    benefits: ["Reduce latency by 90%", "Improve performance by 80%", "Enable real-time processing"],
    setupTime: "6-8 weeks"
  },
  {
    title: "Advanced Cloud Infrastructure",
    description: "Next-generation cloud solutions with AI-powered optimization and multi-cloud management",
    icon: Cloud,
    features: [
      "Multi-Cloud Architecture",
      "AI-Powered Auto-scaling",
      "Serverless Computing",
      "Container Orchestration",
      "Cloud Security & Compliance",
      "Disaster Recovery & Backup",
      "Cost Optimization",
      "Performance Monitoring"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-8,000/month",
    benefits: ["99.9% uptime guarantee", "50% cost reduction", "24/7 monitoring"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Zero-Trust Security Architecture",
    description: "Comprehensive security framework with continuous verification and micro-segmentation",
    icon: Shield,
    features: [
      "Identity & Access Management",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Threat Detection & Response",
      "Data Loss Prevention",
      "Security Orchestration",
      "Compliance Automation",
      "Risk Assessment & Management"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-10,000/month",
    benefits: ["Reduce security incidents by 90%", "Compliance ready", "24/7 threat monitoring"],
    setupTime: "3-6 weeks"
  },
  {
    title: "AI-Powered DevOps Platform",
    description: "Intelligent DevOps solutions with automated testing, deployment, and monitoring",
    icon: Zap,
    features: [
      "AI-Driven CI/CD Pipelines",
      "Automated Testing & QA",
      "Intelligent Deployment",
      "Performance Optimization",
      "Anomaly Detection",
      "Self-Healing Systems",
      "Predictive Scaling",
      "DevSecOps Integration"
    ],
    price: "Starting at $1,500/month",
    marketPrice: "$2,500-6,000/month",
    benefits: ["Deploy 10x faster", "Reduce errors by 80%", "Automated scaling"],
    setupTime: "2-4 weeks"
  },
  {
    title: "Advanced Database Solutions",
    description: "Next-generation database systems with AI optimization and real-time analytics",
    icon: Database,
    features: [
      "AI-Powered Query Optimization",
      "Real-time Analytics",
      "Distributed Database Systems",
      "Data Lake & Warehouse",
      "Advanced Backup & Recovery",
      "Database Security & Encryption",
      "Performance Tuning",
      "Data Migration Services"
    ],
    price: "Starting at $1,200/month",
    marketPrice: "$2,000-5,000/month",
    benefits: ["50% faster queries", "Zero data loss", "Automated backups"],
    setupTime: "2-3 weeks"
  },
  {
    title: "5G Network Infrastructure",
    description: "Cutting-edge 5G network solutions for ultra-fast connectivity and IoT applications",
    icon: Network,
    features: [
      "5G Network Design & Implementation",
      "Network Slicing",
      "Edge Computing Integration",
      "IoT Device Management",
      "Network Security & Monitoring",
      "Performance Optimization",
      "Multi-Access Edge Computing",
      "Network Function Virtualization"
    ],
    price: "Starting at $1,000/month",
    marketPrice: "$1,800-4,500/month",
    benefits: ["99.9% network uptime", "Enhanced security", "Remote access ready"],
    setupTime: "1-3 weeks"
  },
  {
    title: "Blockchain Infrastructure",
    description: "Secure blockchain solutions for enterprise applications and digital transformation",
    icon: Code,
    features: [
      "Blockchain Network Setup",
      "Smart Contract Development",
      "Cryptocurrency Integration",
      "DeFi Platform Development",
      "NFT Marketplace Creation",
      "Blockchain Security",
      "Consensus Mechanism Implementation",
      "Interoperability Solutions"
    ],
    price: "Starting at $4,200/month",
    marketPrice: "$7,500-18,000/month",
    benefits: ["Ensure transaction security 100%", "Reduce costs by 60%", "Enable new business models"],
    setupTime: "6-10 weeks"
  },
  {
    title: "Hybrid Cloud Management",
    description: "Seamless integration of on-premises and cloud infrastructure with unified management",
    icon: Server,
    features: [
      "Hybrid Cloud Architecture",
      "Unified Management Platform",
      "Data Synchronization",
      "Workload Migration",
      "Security & Compliance",
      "Cost Optimization",
      "Disaster Recovery",
      "Performance Monitoring"
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
  },
  {
    title: "AI-Powered IT Operations",
    description: "Intelligent IT operations with AI-driven automation and monitoring",
    icon: Brain,
    features: [
      "AI-Powered Monitoring",
      "Predictive Maintenance",
      "Automated Incident Response",
      "Intelligent Alerting",
      "Performance Optimization",
      "Anomaly Detection"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["90% faster incident resolution", "Predictive maintenance", "Reduced downtime"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Edge Computing Solutions",
    description: "Edge computing infrastructure for real-time data processing",
    icon: Cpu,
    features: [
      "Edge Server Deployment",
      "Real-time Data Processing",
      "Low-latency Applications",
      "IoT Integration",
      "Edge Security",
      "Distributed Computing"
    ],
    price: "Starting at $4,000/month",
    marketPrice: "$6,000-15,000/month",
    benefits: ["50% faster processing", "Reduced latency", "Better performance"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Quantum-Ready Infrastructure",
    description: "Future-proof infrastructure preparation for quantum computing",
    icon: Atom,
    features: [
      "Quantum Algorithm Development",
      "Hybrid Classical-Quantum Systems",
      "Quantum Security Implementation",
      "Post-Quantum Cryptography",
      "Quantum Simulation",
      "Future Technology Planning"
    ],
    price: "Starting at $5,000/month",
    marketPrice: "$8,000-20,000/month",
    benefits: ["Future-proof technology", "Advanced security", "Competitive advantage"],
    setupTime: "6-8 weeks"
  },
  {
    title: "5G Network Implementation",
    description: "5G network design, deployment, and optimization services",
    icon: Wifi,
    features: [
      "5G Network Planning",
      "Infrastructure Deployment",
      "Network Optimization",
      "Performance Testing",
      "Security Implementation",
      "Integration Services"
    ],
    price: "Starting at $4,500/month",
    marketPrice: "$7,000-18,000/month",
    benefits: ["10x faster speeds", "Ultra-low latency", "Massive connectivity"],
    setupTime: "4-8 weeks"
  },
  {
    title: "Sustainable IT Solutions",
    description: "Green IT and sustainability-focused technology solutions",
    icon: Leaf,
    features: [
      "Energy-efficient Infrastructure",
      "Carbon Footprint Reduction",
      "Green Data Centers",
      "Sustainable Hardware",
      "Environmental Monitoring",
      "ESG Reporting"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-10,000/month",
    benefits: ["40% energy reduction", "ESG compliance", "Cost savings"],
    setupTime: "3-5 weeks"
  },
  {
    title: "Zero Trust Security Architecture",
    description: "Comprehensive zero trust security implementation and management",
    icon: Shield,
    features: [
      "Identity Verification",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Least Privilege Access",
      "Threat Detection",
      "Automated Response"
    ],
    price: "Starting at $3,200/month",
    marketPrice: "$5,000-12,000/month",
    benefits: ["Enhanced security", "Reduced attack surface", "Compliance ready"],
    setupTime: "4-6 weeks"
  },
  {
    title: "Hybrid Cloud Management",
    description: "Seamless hybrid cloud infrastructure management and optimization",
    icon: Cloud,
    features: [
      "Multi-cloud Orchestration",
      "Workload Migration",
      "Cost Optimization",
      "Security Management",
      "Performance Monitoring",
      "Disaster Recovery"
    ],
    price: "Starting at $3,800/month",
    marketPrice: "$6,000-15,000/month",
    benefits: ["Flexible deployment", "Cost optimization", "Enhanced security"],
    setupTime: "4-6 weeks"
  },
  {
    title: "IT Service Automation",
    description: "Intelligent automation for IT service delivery and management",
    icon: Zap,
    features: [
      "Service Desk Automation",
      "Workflow Automation",
      "Self-Service Portals",
      "Automated Provisioning",
      "Intelligent Routing",
      "Performance Analytics"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-9,000/month",
    benefits: ["80% faster service delivery", "Reduced manual work", "Better user experience"],
    setupTime: "3-4 weeks"
  },
  {
    title: "Digital Twin Technology",
    description: "Digital twin implementation for physical asset monitoring and optimization",
    icon: Monitor,
    features: [
      "Asset Digitalization",
      "Real-time Monitoring",
      "Predictive Analytics",
      "Simulation Capabilities",
      "Performance Optimization",
      "Maintenance Planning"
    ],
    price: "Starting at $4,200/month",
    marketPrice: "$6,500-16,000/month",
    benefits: ["Predictive maintenance", "Optimized performance", "Reduced downtime"],
    setupTime: "5-7 weeks"
  },
  {
    title: "Blockchain IT Infrastructure",
    description: "Blockchain-based IT infrastructure and distributed systems",
    icon: LinkIcon,
    features: [
      "Blockchain Implementation",
      "Smart Contract Development",
      "Distributed Ledger",
      "Cryptographic Security",
      "Consensus Mechanisms",
      "Integration Services"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$5,500-14,000/month",
    benefits: ["Enhanced security", "Transparent operations", "Decentralized control"],
    setupTime: "4-6 weeks"
  },
  {
    title: "IT Disaster Recovery as a Service",
    description: "Comprehensive disaster recovery and business continuity services",
    icon: AlertTriangle,
    features: [
      "Backup & Recovery",
      "Business Continuity Planning",
      "Disaster Testing",
      "Rapid Recovery",
      "Data Replication",
      "Failover Management"
    ],
    price: "Starting at $2,200/month",
    marketPrice: "$3,500-8,500/month",
    benefits: ["99.9% uptime guarantee", "Rapid recovery", "Business continuity"],
    setupTime: "2-4 weeks"
  },
  {
    title: "5G Network Implementation",
    description: "Next-generation 5G network deployment and optimization services",
    icon: Wifi,
    features: [
      "5G Infrastructure Setup",
      "Network Slicing",
      "Edge Computing Integration",
      "IoT Connectivity",
      "Performance Optimization",
      "Security Implementation"
    ],
    price: "Starting at $8,000/month",
    marketPrice: "$15,000-50,000/month",
    benefits: ["10x faster speeds", "Ultra-low latency", "Massive IoT support"],
    setupTime: "8-16 weeks"
  },
  {
    title: "Quantum Computing Infrastructure",
    description: "Quantum computing setup and hybrid classical-quantum systems",
    icon: Atom,
    features: [
      "Quantum Hardware Setup",
      "Quantum Software Development",
      "Hybrid System Integration",
      "Quantum Algorithm Implementation",
      "Error Correction Systems",
      "Quantum Security"
    ],
    price: "Starting at $25,000/month",
    marketPrice: "$50,000-200,000/month",
    benefits: ["Exponential computational power", "Future-proof technology", "Breakthrough capabilities"],
    setupTime: "12-24 weeks"
  },
  {
    title: "Edge Computing Solutions",
    description: "Distributed computing infrastructure for edge devices and IoT",
    icon: Cpu,
    features: [
      "Edge Data Centers",
      "IoT Device Management",
      "Real-time Processing",
      "Latency Optimization",
      "Offline Capabilities",
      "Security Management"
    ],
    price: "Starting at $4,500/month",
    marketPrice: "$8,000-25,000/month",
    benefits: ["Reduce latency by 80%", "Improve reliability", "Lower bandwidth costs"],
    setupTime: "6-12 weeks"
  },
  {
    title: "Sustainable IT Solutions",
    description: "Green IT infrastructure and carbon-neutral computing solutions",
    icon: Leaf,
    features: [
      "Energy-Efficient Hardware",
      "Renewable Energy Integration",
      "Carbon Footprint Tracking",
      "Green Data Centers",
      "Sustainable Procurement",
      "Environmental Monitoring"
    ],
    price: "Starting at $3,000/month",
    marketPrice: "$5,000-15,000/month",
    benefits: ["Reduce carbon footprint by 60%", "Lower energy costs", "Environmental compliance"],
    setupTime: "4-8 weeks"
  },
  {
    title: "AI Infrastructure Management",
    description: "Specialized infrastructure for AI and machine learning workloads",
    icon: Brain,
    features: [
      "GPU Cluster Management",
      "ML Pipeline Infrastructure",
      "Model Training Environments",
      "Inference Optimization",
      "Data Pipeline Management",
      "MLOps Integration"
    ],
    price: "Starting at $6,000/month",
    marketPrice: "$12,000-40,000/month",
    benefits: ["Optimize AI performance", "Reduce training time", "Scale ML operations"],
    setupTime: "6-10 weeks"
  },
  {
    title: "Zero-Trust Security Architecture",
    description: "Comprehensive zero-trust security model implementation",
    icon: Shield,
    features: [
      "Identity Verification",
      "Micro-segmentation",
      "Continuous Monitoring",
      "Least Privilege Access",
      "Threat Detection",
      "Automated Response"
    ],
    price: "Starting at $4,000/month",
    marketPrice: "$7,000-20,000/month",
    benefits: ["Enhanced security posture", "Reduce attack surface", "Compliance ready"],
    setupTime: "8-12 weeks"
  },
  {
    title: "Hybrid Cloud Management",
    description: "Seamless management of hybrid cloud environments across multiple providers",
    icon: Cloud,
    features: [
      "Multi-Cloud Orchestration",
      "Workload Migration",
      "Cost Optimization",
      "Security Management",
      "Performance Monitoring",
      "Disaster Recovery"
    ],
    price: "Starting at $3,500/month",
    marketPrice: "$6,000-18,000/month",
    benefits: ["Optimize cloud costs", "Improve flexibility", "Enhanced security"],
    setupTime: "6-10 weeks"
  },
  {
    title: "IT Compliance & Governance",
    description: "Comprehensive compliance management and IT governance services",
    icon: CheckCircle,
    features: [
      "Regulatory Compliance",
      "Audit Preparation",
      "Policy Development",
      "Risk Assessment",
      "Documentation Management",
      "Training Programs"
    ],
    price: "Starting at $2,800/month",
    marketPrice: "$4,500-12,000/month",
    benefits: ["Ensure compliance", "Reduce audit risks", "Streamline governance"],
    setupTime: "4-8 weeks"
  },
  {
    title: "IT Performance Optimization",
    description: "Advanced performance tuning and optimization for IT infrastructure",
    icon: Zap,
    features: [
      "Performance Analysis",
      "Bottleneck Identification",
      "Resource Optimization",
      "Capacity Planning",
      "Load Balancing",
      "Monitoring & Alerting"
    ],
    price: "Starting at $2,500/month",
    marketPrice: "$4,000-10,000/month",
    benefits: ["Improve performance by 50%", "Reduce costs", "Better user experience"],
    setupTime: "3-6 weeks"
  },
  {
    title: "IT Innovation Lab",
    description: "Dedicated innovation lab for emerging technologies and proof-of-concepts",
    icon: Code,
    features: [
      "Technology Research",
      "Proof of Concept Development",
      "Pilot Program Management",
      "Innovation Workshops",
      "Technology Assessment",
      "Future Planning"
    ],
    price: "Starting at $5,000/month",
    marketPrice: "$10,000-30,000/month",
    benefits: ["Stay ahead of technology", "Innovation leadership", "Competitive advantage"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Cost Optimization",
    description: "Comprehensive cost analysis and optimization for IT infrastructure",
    icon: DollarSign,
    features: [
      "Cost Analysis & Auditing",
      "License Optimization",
      "Resource Right-sizing",
      "Vendor Management",
      "Budget Planning",
      "ROI Analysis"
    ],
    price: "Starting at $2,000/month",
    marketPrice: "$3,500-8,000/month",
    benefits: ["Reduce IT costs by 30%", "Optimize spending", "Better budget control"],
    setupTime: "2-4 weeks"
  },
  {
    title: "IT Transformation Services",
    description: "Complete digital transformation and modernization of IT infrastructure",
    icon: Settings,
    features: [
      "Digital Strategy Development",
      "Legacy System Modernization",
      "Process Automation",
      "Change Management",
      "Training & Support",
      "Continuous Improvement"
    ],
    price: "Starting at $8,000/month",
    marketPrice: "$15,000-60,000/month",
    benefits: ["Modernize infrastructure", "Improve efficiency", "Future-ready systems"],
    setupTime: "12-24 weeks"
  },
  {
    title: "IT Vendor Management",
    description: "Comprehensive vendor relationship and contract management services",
    icon: Package,
    features: [
      "Vendor Selection",
      "Contract Negotiation",
      "Performance Monitoring",
      "Relationship Management",
      "Cost Optimization",
      "Risk Management"
    ],
    price: "Starting at $1,800/month",
    marketPrice: "$3,000-7,000/month",
    benefits: ["Optimize vendor relationships", "Reduce costs", "Improve service quality"],
    setupTime: "2-3 weeks"
  },
  {
    title: "IT Training & Certification",
    description: "Comprehensive IT training programs and certification services",
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
    benefits: ["Improve team skills", "Increase productivity", "Reduce support costs"],
    setupTime: "1-2 weeks"
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
          </div>
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
    </Layout>
  );
}