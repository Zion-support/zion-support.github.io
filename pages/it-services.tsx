import React, { useState } from 'react';
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
  Sprout,
  Eye,
  Bot,
  FileText,
  DollarSign,
  Rocket
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Security Hardening', '24/7 Monitoring', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$2,000 - $25,000/month',
    category: 'Cloud Services',
    popular: true
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your business from cyber threats and data breaches.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
    pricing: '$1,500 - $15,000/month',
    category: 'Security',
    popular: true
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and maintenance of robust network infrastructure for optimal performance.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Troubleshooting', 'Scalability Planning', 'Monitoring'],
    pricing: '$1,200 - $12,000/setup',
    category: 'Infrastructure',
    popular: true
  },
  {
    title: 'Database Management',
    description: 'Expert database administration, optimization, and migration services for all major platforms.',
    icon: Database,
    features: ['Performance Tuning', 'Backup & Recovery', 'Migration Services', 'Security Hardening', 'Database Design'],
    pricing: '$800 - $8,000/month',
    category: 'Database',
    popular: false
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline development workflows with automated deployment and continuous integration.',
    icon: Code,
    features: ['Pipeline Automation', 'Container Orchestration', 'Monitoring Setup', 'Deployment Strategies'],
    pricing: '$2,500 - $20,000/setup',
    category: 'DevOps',
    popular: true
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of your infrastructure to modern data centers or cloud platforms.',
    icon: Server,
    features: ['Migration Planning', 'Zero Downtime', 'Data Integrity', 'Performance Optimization'],
    pricing: '$5,000 - $100,000/project',
    category: 'Migration',
    popular: false
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive tracking and management of all IT assets throughout their lifecycle.',
    icon: Monitor,
    features: ['Asset Tracking', 'License Management', 'Lifecycle Planning', 'Cost Optimization'],
    pricing: '$500 - $5,000/month',
    category: 'Management',
    popular: false
  },
  {
    title: 'AI-Powered IT Operations Management',
    description: 'Intelligent IT operations with AI-driven automation and predictive analytics.',
    icon: Brain,
    features: ['Predictive Maintenance', 'Automated Troubleshooting', 'Performance Analytics', 'Cost Optimization'],
    pricing: '$3,000 - $30,000/month',
    category: 'AI Operations',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model for enhanced protection against modern threats.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$5,000 - $50,000/setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Deploy edge computing solutions for low-latency applications and IoT connectivity.',
    icon: Cpu,
    features: ['Edge Deployment', 'IoT Integration', 'Low Latency', 'Distributed Processing'],
    pricing: '$2,000 - $25,000/setup',
    category: 'Edge Computing',
    popular: false
  },
  {
    title: '5G Network Infrastructure',
    description: 'Design and implement 5G networks for ultra-fast connectivity and IoT applications.',
    icon: Wifi,
    features: ['5G Planning', 'Network Optimization', 'IoT Integration', 'Performance Testing'],
    pricing: '$10,000 - $100,000/setup',
    category: '5G Networks',
    popular: false
  },
  {
    title: 'Quantum Security Solutions',
    description: 'Next-generation security using quantum cryptography and quantum-resistant algorithms.',
    icon: Lock,
    features: ['Quantum Cryptography', 'Post-Quantum Security', 'Key Distribution', 'Future-Proofing'],
    pricing: '$25,000 - $250,000/setup',
    category: 'Quantum Security',
    popular: false
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Build and maintain blockchain networks for secure, decentralized applications.',
    icon: Globe,
    features: ['Blockchain Development', 'Smart Contracts', 'Node Management', 'Security Auditing'],
    pricing: '$5,000 - $50,000/setup',
    category: 'Blockchain',
    popular: false
  },
  {
    title: 'IoT Platform Management',
    description: 'Comprehensive IoT solution management including device connectivity and data processing.',
    icon: Smartphone,
    features: ['Device Management', 'Data Processing', 'Connectivity Solutions', 'Analytics Dashboard'],
    pricing: '$1,500 - $15,000/month',
    category: 'IoT',
    popular: true
  },
  {
    title: 'Disaster Recovery Solutions',
    description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
    icon: Shield,
    features: ['Recovery Planning', 'Backup Solutions', 'Testing & Validation', 'RTO/RPO Optimization'],
    pricing: '$2,000 - $20,000/setup',
    category: 'Disaster Recovery',
    popular: false
  },
  {
    title: 'IT Compliance & Governance',
    description: 'Ensure compliance with industry regulations and implement governance frameworks.',
    icon: FileText,
    features: ['Compliance Auditing', 'Policy Development', 'Risk Assessment', 'Training Programs'],
    pricing: '$1,000 - $10,000/month',
    category: 'Compliance',
    popular: false
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
    title: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure and deployment for low-latency applications.',
    icon: Cpu,
    features: ['Edge Infrastructure', 'Latency Optimization', 'Distributed Computing', 'IoT Integration'],
    pricing: '$15,000 - $75,000/project',
    category: 'Edge Computing',
    popular: true
  },
  {
    title: 'Quantum Computing Integration',
    description: 'Quantum computing solutions and hybrid classical-quantum systems.',
    icon: Cpu,
    features: ['Quantum Algorithm Development', 'Hybrid Systems', 'Quantum Security', 'Performance Optimization'],
    pricing: '$50,000 - $250,000/project',
    category: 'Quantum Computing'
  },
  {
    title: '5G Network Implementation',
    description: '5G network design, deployment, and optimization for enterprise applications.',
    icon: Wifi,
    features: ['5G Infrastructure', 'Network Slicing', 'Edge Computing', 'IoT Connectivity'],
    pricing: '$25,000 - $125,000/project',
    category: '5G Networks'
  },
  {
    title: 'AI Infrastructure Management',
    description: 'Specialized infrastructure for AI/ML workloads and GPU computing.',
    icon: Brain,
    features: ['GPU Clusters', 'ML Pipeline Infrastructure', 'Model Serving', 'Data Processing'],
    pricing: '$20,000 - $100,000/setup',
    category: 'AI Infrastructure'
  },
  {
    title: 'Blockchain Infrastructure',
    description: 'Blockchain network deployment and management for enterprise applications.',
    icon: Shield,
    features: ['Blockchain Networks', 'Smart Contract Deployment', 'Node Management', 'Security Hardening'],
    pricing: '$30,000 - $150,000/project',
    category: 'Blockchain'
  },
  {
    title: 'IoT Platform Management',
    description: 'Comprehensive IoT platform deployment and device management.',
    icon: Network,
    features: ['Device Management', 'Data Collection', 'Real-time Analytics', 'Security Management'],
    pricing: '$10,000 - $50,000/setup',
    category: 'IoT'
  },
  {
    title: 'Green IT Solutions',
    description: 'Sustainable IT infrastructure and energy-efficient computing solutions.',
    icon: Zap,
    features: ['Energy Optimization', 'Carbon Footprint Reduction', 'Sustainable Hardware', 'Green Data Centers'],
    pricing: '$15,000 - $75,000/project',
    category: 'Sustainability'
  },
  {
    title: 'Disaster Recovery as a Service',
    description: 'Comprehensive disaster recovery solutions with automated failover.',
    icon: Shield,
    features: ['Automated Failover', 'Data Replication', 'Recovery Testing', 'RTO/RPO Optimization'],
    pricing: '$5,000 - $25,000/month',
    category: 'Disaster Recovery'
  },
  {
    title: 'IT Service Management (ITSM)',
    description: 'ITIL-based service management implementation and optimization.',
    icon: Settings,
    features: ['Service Catalog', 'Incident Management', 'Change Management', 'Service Level Management'],
    pricing: '$20,000 - $100,000/setup',
    category: 'Service Management'
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Zero trust security model implementation and network segmentation.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Least Privilege Access'],
    pricing: '$25,000 - $125,000/project',
    category: 'Security Architecture'
  },
  {
    title: 'Hybrid Cloud Management',
    description: 'Multi-cloud and hybrid cloud management and optimization.',
    icon: Cloud,
    features: ['Multi-cloud Orchestration', 'Cost Optimization', 'Workload Migration', 'Unified Management'],
    pricing: '$15,000 - $75,000/setup',
    category: 'Cloud Management'
  },
  {
    title: 'IT Automation & Orchestration',
    description: 'Comprehensive IT process automation and workflow orchestration.',
    icon: Settings,
    features: ['Process Automation', 'Workflow Orchestration', 'API Integration', 'Self-healing Systems'],
    pricing: '$10,000 - $50,000/setup',
    category: 'Automation'
  },
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic digital transformation planning and implementation.',
    icon: Building,
    features: ['Digital Strategy', 'Technology Roadmap', 'Change Management', 'Implementation Support'],
    pricing: '$50,000 - $250,000/project',
    category: 'Digital Transformation'
  },
  {
    title: 'IT Performance Optimization',
    description: 'Comprehensive IT performance analysis and optimization services.',
    icon: BarChart3,
    features: ['Performance Analysis', 'Bottleneck Identification', 'Optimization Implementation', 'Monitoring Setup'],
    pricing: '$8,000 - $40,000/project',
    category: 'Performance'
  },
  {
    title: 'IT Risk Management',
    description: 'Comprehensive IT risk assessment and mitigation strategies.',
    icon: Shield,
    features: ['Risk Assessment', 'Threat Modeling', 'Mitigation Strategies', 'Continuous Monitoring'],
    pricing: '$12,000 - $60,000/project',
    category: 'Risk Management'
  },
  {
    title: 'IT Innovation Lab',
    description: 'Dedicated innovation lab for emerging technology experimentation.',
    icon: Rocket,
    features: ['Technology Research', 'Proof of Concepts', 'Innovation Workshops', 'Pilot Projects'],
    pricing: '$25,000 - $125,000/setup',
    category: 'Innovation'
  },
  {
    title: 'IT Cost Optimization',
    description: 'Comprehensive IT cost analysis and optimization strategies.',
    icon: DollarSign,
    features: ['Cost Analysis', 'Optimization Strategies', 'Vendor Negotiation', 'ROI Tracking'],
    pricing: '$10,000 - $50,000/project',
    category: 'Cost Optimization'
  },
  {
    title: 'IT Capacity Planning',
    description: 'Strategic IT capacity planning and resource optimization.',
    icon: BarChart3,
    features: ['Capacity Analysis', 'Growth Planning', 'Resource Optimization', 'Scaling Strategies'],
    pricing: '$8,000 - $40,000/project',
    category: 'Capacity Planning'
  },
  {
    title: 'IT Integration Services',
    description: 'Enterprise application integration and API management services.',
    icon: Network,
    features: ['API Development', 'System Integration', 'Data Synchronization', 'Workflow Automation'],
    pricing: '$15,000 - $75,000/project',
    category: 'Integration'
  },
  {
    title: 'AI-Powered IT Operations Management',
    description: 'Intelligent IT operations with AI-driven automation and predictive analytics.',
    icon: Brain,
    features: ['Predictive Maintenance', 'Automated Troubleshooting', 'Performance Analytics', 'Cost Optimization'],
    pricing: '$3,000 - $30,000/month',
    category: 'AI Operations',
    popular: true
  },
  {
    title: 'Zero Trust Security Architecture',
    description: 'Implement zero trust security model for enhanced protection against modern threats.',
    icon: Lock,
    features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Detection'],
    pricing: '$5,000 - $50,000/setup',
    category: 'Security',
    popular: true
  },
  {
    title: 'Edge Computing Infrastructure',
    description: 'Deploy edge computing solutions for low-latency applications and IoT connectivity.',
    icon: Cpu,
    features: ['Edge Deployment', 'IoT Integration', 'Low Latency', 'Distributed Processing'],
    pricing: '$2,000 - $25,000/setup',
    category: 'Edge Computing',
    popular: false
  },
  {
    title: 'Quantum Computing Infrastructure',
    description: 'Quantum computing infrastructure setup and management for advanced computing needs.',
    icon: Cpu,
    features: ['Quantum Hardware', 'Algorithm Development', 'Performance Optimization', 'Security Implementation'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Quantum Computing',
    popular: true
  },
  {
    title: 'Metaverse Infrastructure',
    description: 'Complete metaverse infrastructure setup with 3D worlds and virtual economies.',
    icon: Globe,
    features: ['3D World Creation', 'Avatar Systems', 'Virtual Economy', 'Multi-user Support'],
    pricing: '$50,000 - $500,000/setup',
    category: 'Metaverse',
    popular: true
  },
  {
    title: 'Digital Twin Infrastructure',
    description: 'Digital twin infrastructure for real-time simulation and optimization.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Sync', 'Predictive Analytics', 'IoT Integration'],
    pricing: '$25,000 - $250,000/setup',
    category: 'Digital Twins'
  },
  {
    title: 'Blockchain Infrastructure Management',
    description: 'Complete blockchain infrastructure setup and management for DeFi and Web3 applications.',
    icon: Lock,
    features: ['Blockchain Networks', 'Smart Contracts', 'DeFi Integration', 'Security Auditing'],
    pricing: '$10,000 - $100,000/setup',
    category: 'Blockchain'
  },
  {
    title: 'AI Data Pipeline Infrastructure',
    description: 'Complete AI data pipeline infrastructure for machine learning and analytics.',
    icon: Database,
    features: ['Data Ingestion', 'Processing Pipelines', 'Model Training', 'Deployment'],
    pricing: '$15,000 - $150,000/setup',
    category: 'AI Infrastructure'
  },
  {
    title: 'Space Technology Infrastructure',
    description: 'Space technology infrastructure for satellite communications and space missions.',
    icon: Rocket,
    features: ['Satellite Ground Stations', 'Mission Control', 'Communication Systems', 'Data Processing'],
    pricing: '$100,000 - $1,000,000/setup',
    category: 'Space Technology'
  }
];

const categories = ['All', 'Cloud Services', 'Security', 'Infrastructure', 'Database', 'DevOps', 'Migration', 'Management', 'AI Operations', 'Edge Computing', '5G Networks', 'Quantum Security', 'Blockchain', 'IoT', 'Disaster Recovery', 'Compliance', 'Threat Intelligence', 'Quantum Computing', 'Metaverse', 'Digital Twins', 'AI Infrastructure', 'Space Technology'];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Comprehensive information technology services to modernize your infrastructure, 
                enhance security, and optimize performance across all business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300"
                >
                  Get Free Assessment
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
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
                  className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our IT Services?
            </h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Support Levels
            </h2>
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
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-900 rounded-lg font-semibold transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search IT services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        {service.popular && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm text-gray-500">Starting at</span>
                          <div className="text-lg font-bold text-green-600">
                            {service.pricing}
                          </div>
                        </div>
                        <Link
                          href="/contact"
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
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
                Our IT experts are ready to help you design, implement, and maintain 
                a robust technology infrastructure that scales with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
                >
                  Get Free IT Assessment
                </Link>
                <Link 
                  href="/micro-saas" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold"
                >
                  Explore Micro SaaS
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}