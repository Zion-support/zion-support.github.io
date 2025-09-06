import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
  Cpu as CpuIcon,
  HardDrive,
  Wifi,
  Smartphone,
  Laptop,
  Building,
  BarChart3,
  Code,
  Sprout,
  Eye,
  Bot,
  Search,
  ShoppingCart,
  BookOpen,
  Brain,
  DollarSign,
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
                      {service.features.map((feature, featureIndex) => (}
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
              ),
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
            {technologies.map((tech, index) => {}
              const IconComponent = tech.icon;}
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
            {benefits.map((benefit, index) => {}
              const IconComponent = benefit.icon;}
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
            {supportLevels.map((level, index) => (}
              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  index === 1 ? "bg-green-50 border-2 border-green-200" : 'bg-white'
                }}
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
                  {level.features.map((feature, featureIndex) => (}
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
? "bg-green-600 hover:bg-green-700 text-white" : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }}
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
                  <div className="flex flex-col sm: flex-row gap-4 justify-center">
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
                  </div>
}