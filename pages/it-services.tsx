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
    popular: false,
    pricing: '$120 – $220/hour',
    projectPricing: '$6,000 – $30,000/project',
    timeline: '2–8 weeks',
    benefits: [
      '99.9% uptime guarantee',
      'Automated deployment processes',
      'Reduced infrastructure costs',
      'Improved system reliability'
    ],
    category: 'Cloud & Infrastructure'
  }
];

export default function ITServicesPage() {
  return (
    <Layout
      title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
      description="Professional IT services including custom development, cloud solutions, cybersecurity, and system integration."
    >
      <div className="min-h-screen bg-gray-50">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
            <p className="text-xl text-gray-600 mb-8">Professional technology solutions for your business.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
