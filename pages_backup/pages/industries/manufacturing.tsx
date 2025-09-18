import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Settings,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
  Clock,
  Award,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Lock,
  Activity,
  Factory,
  FileText,
  Database,
  Cpu,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: 'Smart Manufacturing',
    description: 'IoT-enabled smart manufacturing solutions with real-time monitoring and automation.',
    icon: Factory,
    features: ['IoT Sensors', 'Real-time Monitoring', 'Predictive Maintenance', 'Quality Control'],
    benefits: ['25% efficiency gain', '30% cost reduction', '99% quality rate', 'Zero downtime']
  },
  {
    title: 'Supply Chain Optimization',
    description: 'AI-powered supply chain management and optimization for manufacturing operations.',
    icon: Globe,
    features: ['Demand Forecasting', 'Inventory Optimization', 'Supplier Management', 'Logistics Tracking'],
    benefits: ['40% inventory reduction', '50% faster delivery', '20% cost savings', 'Better visibility']
  },
  {
    title: 'Quality Control AI',
    description: 'Computer vision and AI-powered quality control systems for manufacturing.',
    icon: Brain,
    features: ['Visual Inspection', 'Defect Detection', 'Quality Analytics', 'Automated Reporting'],
    benefits: ['95% accuracy', '60% faster inspection', 'Zero defects', 'Real-time alerts']
  },
  {
    title: 'Production Analytics',
    description: 'Advanced analytics platform for manufacturing performance optimization.',
    icon: BarChart3,
    features: ['Performance Metrics', 'OEE Tracking', 'Predictive Analytics', 'KPI Dashboards'],
    benefits: ['15% productivity gain', 'Real-time insights', 'Data-driven decisions', 'Continuous improvement']
  }
];

const challenges = [
  {
    challenge: 'Operational Efficiency',
    description: 'Optimizing manufacturing processes and reducing waste.',
    solution: 'IoT sensors, real-time monitoring, and AI-powered optimization algorithms.',
    icon: Target
  },
  {
    challenge: 'Quality Control',
    description: 'Ensuring consistent product quality and reducing defects.',
    solution: 'Computer vision AI, automated inspection, and predictive quality analytics.',
    icon: Shield
  },
  {
    challenge: 'Supply Chain Management',
    description: 'Managing complex supply chains and supplier relationships.',
    solution: 'AI-powered demand forecasting, inventory optimization, and supplier analytics.',
    icon: Globe
  },
  {
    challenge: 'Predictive Maintenance',
    description: 'Preventing equipment failures and minimizing downtime.',
    solution: 'IoT sensors, machine learning models, and predictive maintenance algorithms.',
    icon: Cpu
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Optimize manufacturing processes and increase overall equipment effectiveness.',
    metric: '25%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs through automation and optimization.',
    metric: '30%'
  },
  {
    icon: Shield,
    title: 'Quality Improvement',
    description: 'Enhance product quality with AI-powered quality control systems.',
    metric: '95%'
  },
  {
    icon: Clock,
    title: 'Reduced Downtime',
    description: 'Minimize equipment downtime with predictive maintenance.',
    metric: '50%'
  }
];

const caseStudies = [
  {
    title: 'Automotive Manufacturer',
    description: 'Implemented smart manufacturing across 5 production lines.',
    results: ['30% efficiency gain', '40% defect reduction', '$10M annual savings'],
    icon: Factory
  },
  {
    title: 'Electronics Company',
    description: 'Deployed AI-powered quality control for circuit board production.',
    results: ['95% defect detection', '60% faster inspection', 'Zero quality issues'],
    icon: Cpu
  },
  {
    title: 'Food Processing Plant',
    description: 'Supply chain optimization and inventory management system.',
    results: ['50% inventory reduction', '25% cost savings', '99% on-time delivery'],
    icon: Globe
  }
];

export default function Manufacturing() {
=======

const manufacturing: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>manufacturing | Zion Tech Group</title>
        <meta name="description" content="manufacturing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">manufacturing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default manufacturing;
