import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Phone, Mail, Bot } from 'lucide-react';
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
    title: 'Cloud Security & Compliance',
    description: 'Comprehensive cloud security solutions with compliance management and threat protection.',
    icon: Shield,
    features: ['Cloud Security Assessment', 'Compliance Management', 'Threat Protection', 'Data Encryption'],
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
  // NEW INNOVATIVE IT SERVICES
  {
    title: 'AI-Powered IT Helpdesk Automation',
    description: 'Intelligent helpdesk with AI chatbots, automated ticket routing, and predictive issue resolution.',
    icon: Bot,
    features: ['AI Chatbots', 'Automated Routing', 'Predictive Resolution', 'Self-Service Portal'],
    pricing: '$2,499 - $9,999/month',
    category: 'AI Operations',
    benefits: ['Reduce ticket volume by 60%', 'Faster resolution times', '24/7 support', 'Improved user satisfaction'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/ai-helpdesk',
    popular: true
  },
  {
    title: 'Quantum-Enhanced Data Encryption',
    description: 'Next-generation encryption using quantum-resistant algorithms for maximum data security.',
    icon: Lock,
    features: ['Quantum-Resistant Algorithms', 'End-to-End Encryption', 'Key Management', 'Compliance Ready'],
    pricing: '$4,999 - $19,999/month',
    category: 'Quantum Security',
    benefits: ['Future-proof security', 'Military-grade encryption', 'Regulatory compliance', 'Scalable protection'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/quantum-encryption',
    popular: true
  },
  {
    title: 'Autonomous IT Infrastructure Monitoring',
    description: 'Self-healing infrastructure with AI-powered monitoring and automated remediation.',
    icon: Monitor,
    features: ['Self-Healing Systems', 'Predictive Maintenance', 'Automated Remediation', 'Performance Optimization'],
    pricing: '$3,999 - $14,999/month',
    category: 'AI Operations',
    benefits: ['99.9% uptime guarantee', 'Reduced manual intervention', 'Proactive issue resolution', 'Cost optimization'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/autonomous-monitoring',
    popular: true
  },
  {
    title: 'Edge AI Computing Platform',
    description: 'Distributed AI computing at the edge for real-time processing and reduced latency.',
    icon: Cpu,
    features: ['Edge AI Processing', 'Real-time Analytics', 'Low Latency Computing', 'Distributed Intelligence'],
    pricing: '$2,999 - $11,999/month',
    category: 'Edge Computing',
    benefits: ['Ultra-low latency', 'Real-time processing', 'Reduced bandwidth costs', 'Enhanced privacy'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/edge-ai',
    popular: false
  },
  {
    title: 'Blockchain-Based Identity Management',
    description: 'Decentralized identity verification and access management using blockchain technology.',
    icon: Users,
    features: ['Decentralized Identity', 'Zero-Knowledge Proofs', 'Multi-Factor Authentication', 'Privacy Protection'],
    pricing: '$3,499 - $12,999/month',
    category: 'Blockchain Infrastructure',
    benefits: ['Enhanced privacy', 'Reduced identity fraud', 'Decentralized control', 'Regulatory compliance'],
    marketPrice: '$5,500 - $18,000/month',
    link: 'https://ziontechgroup.com/blockchain-identity',
    popular: false
  },
  {
    title: 'AI-Driven Cybersecurity Operations Center',
    description: 'Advanced SOC with AI-powered threat detection, response, and automated incident handling.',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Threat Intelligence'],
    pricing: '$5,999 - $24,999/month',
    category: 'Cybersecurity',
    benefits: ['Advanced threat protection', 'Automated incident response', 'Reduced false positives', '24/7 monitoring'],
    marketPrice: '$10,000 - $35,000/month',
    link: 'https://ziontechgroup.com/ai-soc',
    popular: true
  },
  {
    title: 'Quantum Computing Integration Services',
    description: 'Integration of quantum computing capabilities with existing IT infrastructure and applications.',
    icon: Cpu,
    features: ['Quantum Algorithm Development', 'Hybrid Computing', 'Quantum Simulation', 'Performance Optimization'],
    pricing: '$9,999 - $49,999/month',
    category: 'Quantum Computing',
    benefits: ['Exponential computing power', 'Complex problem solving', 'Competitive advantage', 'Future-ready technology'],
    marketPrice: '$15,000 - $75,000/month',
    link: 'https://ziontechgroup.com/quantum-integration',
    popular: true
  },
  {
    title: 'Intelligent Data Center Automation',
    description: 'AI-powered data center management with automated optimization and predictive maintenance.',
    icon: Server,
    features: ['Automated Optimization', 'Predictive Maintenance', 'Energy Efficiency', 'Capacity Planning'],
    pricing: '$4,999 - $19,999/month',
    category: 'Data Center',
    benefits: ['30% energy savings', 'Reduced downtime', 'Automated operations', 'Cost optimization'],
    marketPrice: '$8,000 - $30,000/month',
    link: 'https://ziontechgroup.com/data-center-automation',
    popular: false
  },
  {
    title: 'Multi-Cloud Cost Optimization Engine',
    description: 'AI-powered cost optimization across multiple cloud providers with automated resource management.',
    icon: Cloud,
    features: ['Multi-Cloud Analysis', 'Cost Optimization', 'Resource Right-sizing', 'Automated Scaling'],
    pricing: '$2,999 - $11,999/month',
    category: 'Cloud Management',
    benefits: ['40% cost reduction', 'Automated optimization', 'Multi-cloud visibility', 'Performance optimization'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/cloud-cost-optimization',
    popular: true
  },
  {
    title: 'AI-Powered Network Performance Optimization',
    description: 'Intelligent network optimization with AI-driven traffic management and performance tuning.',
    icon: Network,
    features: ['AI Traffic Management', 'Performance Tuning', 'Bandwidth Optimization', 'Quality of Service'],
    pricing: '$3,499 - $12,999/month',
    category: 'Network Optimization',
    benefits: ['Improved network performance', 'Reduced latency', 'Bandwidth optimization', 'Better user experience'],
    marketPrice: '$5,500 - $18,000/month',
    link: 'https://ziontechgroup.com/network-optimization',
    popular: false
  },
  {
    title: 'Intelligent Backup & Recovery System',
    description: 'AI-enhanced backup solutions with intelligent deduplication and automated recovery testing.',
    icon: HardDrive,
    features: ['AI Deduplication', 'Automated Testing', 'Incremental Backups', 'Disaster Recovery'],
    pricing: '$1,999 - $7,999/month',
    category: 'Data Protection',
    benefits: ['90% storage savings', 'Automated testing', 'Faster recovery', 'Reliable backups'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/intelligent-backup',
    popular: false
  },
  {
    title: 'Smart IT Asset Lifecycle Management',
    description: 'AI-powered asset tracking with predictive maintenance and automated lifecycle management.',
    icon: Settings,
    features: ['Predictive Maintenance', 'Lifecycle Tracking', 'Cost Optimization', 'Automated Procurement'],
    pricing: '$2,499 - $9,999/month',
    category: 'Asset Management',
    benefits: ['Extended asset life', 'Reduced maintenance costs', 'Automated procurement', 'Better planning'],
    marketPrice: '$4,000 - $15,000/month',
    link: 'https://ziontechgroup.com/smart-asset-management',
    popular: false
  },
  {
    title: 'AI-Driven Compliance Monitoring',
    description: 'Automated compliance monitoring with AI-powered risk assessment and regulatory reporting.',
    icon: CheckCircle,
    features: ['Automated Monitoring', 'Risk Assessment', 'Regulatory Reporting', 'Compliance Dashboards'],
    pricing: '$3,999 - $14,999/month',
    category: 'IT Compliance',
    benefits: ['Automated compliance', 'Reduced audit time', 'Risk mitigation', 'Regulatory reporting'],
    marketPrice: '$6,000 - $20,000/month',
    link: 'https://ziontechgroup.com/ai-compliance',
    popular: true
  },
  {
    title: 'Intelligent IT Service Catalog',
    description: 'AI-powered service catalog with automated provisioning and intelligent service recommendations.',
    icon: ShoppingCart,
    features: ['Automated Provisioning', 'Service Recommendations', 'Self-Service Portal', 'Usage Analytics'],
    pricing: '$2,999 - $11,999/month',
    category: 'ITSM',
    benefits: ['Faster service delivery', 'Reduced manual work', 'Better user experience', 'Cost optimization'],
    marketPrice: '$5,000 - $18,000/month',
    link: 'https://ziontechgroup.com/intelligent-service-catalog',
    popular: false
  },
  {
    title: 'Quantum-Safe Network Security',
    description: 'Future-proof network security using quantum-resistant protocols and advanced encryption.',
    icon: Shield,
    features: ['Quantum-Resistant Protocols', 'Advanced Encryption', 'Network Segmentation', 'Threat Detection'],
    pricing: '$4,499 - $16,999/month',
    category: 'Network Security',
    benefits: ['Future-proof security', 'Advanced protection', 'Quantum-safe protocols', 'Scalable security'],
    marketPrice: '$7,000 - $22,000/month',
    link: 'https://ziontechgroup.com/quantum-safe-networks',
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
  'ITSM',
  'Quantum Computing',
  'Cybersecurity',
  'Data Center',
  'Network Optimization'
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
      description="Comprehensive IT services including cloud solutions, cybersecurity, AI operations, quantum computing, and advanced infrastructure management."
      keywords="IT services, cloud computing, cybersecurity, AI operations, quantum computing, infrastructure management"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your IT infrastructure with cutting-edge technologies. From AI operations to quantum computing, 
                we provide comprehensive IT solutions for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search IT services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
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
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-blue-600 font-semibold mb-2">{service.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-green-600 mb-4">{service.pricing}</div>
                  <div className="text-sm text-gray-500 mb-4">
                    Market Price: {service.marketPrice}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our IT services can modernize your technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Started
              </Link>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-blue-200">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}