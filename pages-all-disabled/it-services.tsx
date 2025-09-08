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
    title: 'AI-Powered Network Security Operations Center (SOC)',
    description: 'Advanced 24/7 security monitoring with AI-driven threat detection and automated response.',
    icon: Shield,
    features: ['AI Threat Detection', 'Automated Response', '24/7 Monitoring', 'Incident Management'],
    pricing: '$8,999 - $24,999/month',
    category: 'Security Operations',
    benefits: ['Proactive Threat Detection', 'Reduced Response Time', 'Enhanced Security Posture', 'Cost Optimization'],
    marketPrice: '$12,000 - $35,000/month',
    link: 'https://ziontechgroup.com/ai-soc',
    popular: true
  },
  {
    title: 'Quantum Computing Infrastructure Setup',
    description: 'Complete quantum computing infrastructure deployment and optimization for advanced computing needs.',
    icon: Cpu,
    features: ['Quantum Hardware Setup', 'Quantum Software Stack', 'Hybrid Computing', 'Quantum Algorithms'],
    pricing: '$19,999 - $99,999/month',
    category: 'Quantum Computing',
    benefits: ['Exponential Computing Power', 'Advanced Problem Solving', 'Competitive Advantage', 'Future-Ready Infrastructure'],
    marketPrice: '$25,000 - $150,000/month',
    link: 'https://ziontechgroup.com/quantum-infrastructure',
    popular: true
  },
  {
    title: 'Edge AI Computing Platform',
    description: 'Distributed AI computing infrastructure for real-time processing and low-latency applications.',
    icon: Brain,
    features: ['Edge AI Deployment', 'Real-time Processing', 'Low Latency', 'Distributed Computing'],
    pricing: '$4,999 - $19,999/month',
    category: 'Edge AI',
    benefits: ['Ultra-Low Latency', 'Real-time AI Processing', 'Reduced Bandwidth Costs', 'Enhanced Privacy'],
    marketPrice: '$7,000 - $30,000/month',
    link: 'https://ziontechgroup.com/edge-ai',
    popular: true
  },
  {
    title: 'Autonomous IT Operations (AIOps)',
    description: 'Fully automated IT operations with self-healing systems and predictive maintenance.',
    icon: Settings,
    features: ['Self-Healing Systems', 'Predictive Maintenance', 'Automated Remediation', 'Intelligent Monitoring'],
    pricing: '$6,999 - $22,999/month',
    category: 'AIOps',
    benefits: ['99.9% Uptime', 'Reduced Manual Intervention', 'Predictive Problem Solving', 'Cost Optimization'],
    marketPrice: '$10,000 - $35,000/month',
    link: 'https://ziontechgroup.com/aiops',
    popular: true
  },
  {
    title: 'Digital Twin Technology Platform',
    description: 'Create digital replicas of physical systems for simulation, monitoring, and optimization.',
    icon: Monitor,
    features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'IoT Integration'],
    pricing: '$7,999 - $29,999/month',
    category: 'Digital Twin',
    benefits: ['Improved Decision Making', 'Predictive Maintenance', 'Cost Optimization', 'Risk Reduction'],
    marketPrice: '$12,000 - $45,000/month',
    link: 'https://ziontechgroup.com/digital-twin',
    popular: false
  },
  {
    title: 'Neuromorphic Computing Infrastructure',
    description: 'Brain-inspired computing systems for ultra-efficient AI processing and pattern recognition.',
    icon: Brain,
    features: ['Neuromorphic Chips', 'Spiking Neural Networks', 'Ultra-Low Power', 'Pattern Recognition'],
    pricing: '$12,999 - $49,999/month',
    category: 'Neuromorphic Computing',
    benefits: ['Ultra-Efficient Processing', 'Advanced Pattern Recognition', 'Low Power Consumption', 'Real-time Learning'],
    marketPrice: '$18,000 - $75,000/month',
    link: 'https://ziontechgroup.com/neuromorphic',
    popular: false
  },
  {
    title: '6G Network Infrastructure & Testing',
    description: 'Next-generation 6G network deployment and optimization for ultra-high-speed connectivity.',
    icon: Wifi,
    features: ['6G Network Design', 'Ultra-High Speed', 'Low Latency', 'Massive IoT Support'],
    pricing: '$24,999 - $99,999/month',
    category: '6G Networks',
    benefits: ['Ultra-Fast Connectivity', 'Revolutionary Speeds', 'Future-Ready Infrastructure', 'Advanced Applications'],
    marketPrice: '$35,000 - $150,000/month',
    link: 'https://ziontechgroup.com/6g-networks',
    popular: true
  },
  {
    title: 'Holographic Computing Platform',
    description: 'Advanced holographic display and computing systems for immersive experiences.',
    icon: Monitor,
    features: ['Holographic Displays', '3D Computing', 'Immersive Interfaces', 'Spatial Computing'],
    pricing: '$15,999 - $59,999/month',
    category: 'Holographic Computing',
    benefits: ['Immersive Experiences', 'Advanced Visualization', 'Spatial Computing', 'Next-Gen Interfaces'],
    marketPrice: '$22,000 - $90,000/month',
    link: 'https://ziontechgroup.com/holographic',
    popular: false
  },
  {
    title: 'Biometric Security & Authentication',
    description: 'Advanced biometric authentication systems with multi-modal recognition capabilities.',
    icon: Shield,
    features: ['Multi-Modal Biometrics', 'Behavioral Analysis', 'Anti-Spoofing', 'Privacy Protection'],
    pricing: '$3,999 - $14,999/month',
    category: 'Biometric Security',
    benefits: ['Enhanced Security', 'User Convenience', 'Fraud Prevention', 'Privacy Compliance'],
    marketPrice: '$6,000 - $22,000/month',
    link: 'https://ziontechgroup.com/biometric-security',
    popular: true
  },
  {
    title: 'Space-Based Computing Infrastructure',
    description: 'Satellite-based computing and data processing for global coverage and edge computing.',
    icon: Globe,
    features: ['Satellite Computing', 'Global Coverage', 'Edge Processing', 'Low Earth Orbit'],
    pricing: '$29,999 - $149,999/month',
    category: 'Space Computing',
    benefits: ['Global Coverage', 'Low Latency', 'Disaster Resilience', 'Edge Computing'],
    marketPrice: '$45,000 - $200,000/month',
    link: 'https://ziontechgroup.com/space-computing',
    popular: false
  },
  {
    title: 'Molecular Computing Platform',
    description: 'Revolutionary molecular-level computing for ultra-dense data processing and storage.',
    icon: Cpu,
    features: ['Molecular Processors', 'DNA Storage', 'Ultra-Dense Computing', 'Quantum Integration'],
    pricing: '$39,999 - $199,999/month',
    category: 'Molecular Computing',
    benefits: ['Ultra-Dense Processing', 'Revolutionary Storage', 'Energy Efficiency', 'Future Technology'],
    marketPrice: '$60,000 - $300,000/month',
    link: 'https://ziontechgroup.com/molecular-computing',
    popular: false
  },
  {
    title: 'Swarm Intelligence Systems',
    description: 'Distributed AI systems using swarm intelligence for complex problem solving and optimization.',
    icon: Network,
    features: ['Swarm Algorithms', 'Distributed AI', 'Collective Intelligence', 'Self-Organization'],
    pricing: '$5,999 - $22,999/month',
    category: 'Swarm Intelligence',
    benefits: ['Collective Problem Solving', 'Scalable Intelligence', 'Fault Tolerance', 'Emergent Behavior'],
    marketPrice: '$9,000 - $35,000/month',
    link: 'https://ziontechgroup.com/swarm-intelligence',
    popular: false
  },
  {
    title: 'Optical Computing Infrastructure',
    description: 'Light-based computing systems for ultra-fast processing and data transmission.',
    icon: Zap,
    features: ['Optical Processors', 'Light-Based Computing', 'Ultra-Fast Processing', 'Low Heat Generation'],
    pricing: '$8,999 - $34,999/month',
    category: 'Optical Computing',
    benefits: ['Ultra-Fast Processing', 'Low Power Consumption', 'High Bandwidth', 'Future Technology'],
    marketPrice: '$13,000 - $50,000/month',
    link: 'https://ziontechgroup.com/optical-computing',
    popular: false
  },
  {
    title: 'Federated Learning Platform',
    description: 'Distributed machine learning platform that preserves data privacy while enabling collaborative AI.',
    icon: Brain,
    features: ['Privacy-Preserving ML', 'Distributed Training', 'Federated Analytics', 'Secure Aggregation'],
    pricing: '$4,999 - $19,999/month',
    category: 'Federated Learning',
    benefits: ['Data Privacy', 'Collaborative AI', 'Regulatory Compliance', 'Distributed Intelligence'],
    marketPrice: '$7,500 - $30,000/month',
    link: 'https://ziontechgroup.com/federated-learning',
    popular: true
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
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cloud & Infrastructure',
  'Cybersecurity',
  'Data & Analytics',
  'Development',
  'Cloud Security',
  'ITSM'
];

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including AI development, cloud solutions, cybersecurity, and more." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Services</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions to drive your business forward.
                From AI development to cloud migration, we've got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-gray-600">Choose from our comprehensive range of IT services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-blue-600">
                        {service.pricing}
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}