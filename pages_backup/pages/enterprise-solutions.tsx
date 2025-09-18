<<<<<<< HEAD
import * as React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { BarChart3,Building2,Database,Server,Shield,Users,CheckCircle,ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Enterprise Architecture',
    description: 'Comprehensive IT architecture design for large-scale organizations',
    features: ['Scalable infrastructure', 'Microservices architecture', 'API management', 'Integration planning']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Advanced security solutions for enterprise-grade protection',
    features: ['Identity management', 'Zero-trust architecture', 'Compliance automation', 'Threat detection']
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Enterprise data solutions for analytics and business intelligence',
    features: ['Data warehousing', 'ETL processes', 'Real-time analytics', 'Data governance']
  },
  {
    icon: Server,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for enterprise workloads',
    features: ['Multi-cloud strategy', 'Container orchestration', 'Auto-scaling', 'Disaster recovery']
  },
  {
    icon: Users,
    title: 'Digital Workplace',
    description: 'Modern workplace solutions for enhanced productivity',
    features: ['Collaboration tools', 'Mobile solutions', 'Workflow automation', 'Employee experience']
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Advanced analytics and reporting for data-driven decisions',
    features: ['Executive dashboards', 'Predictive analytics', 'Custom reporting', 'Data visualization']
  }
];

const industries = [
  {
    name: 'Financial Services',
    description: 'Banking, insurance, and fintech solutions',
    challenges: ['Regulatory compliance', 'Data security', 'Real-time processing'],
    icon: '🏦'
  },
  {
    name: 'Healthcare',
    description: 'Healthcare IT and patient management systems',
    challenges: ['HIPAA compliance', 'Interoperability', 'Data privacy'],
    icon: '🏥'
  },
  {
    name: 'Manufacturing',
    description: 'Industrial IoT and supply chain optimization',
    challenges: ['Process automation', 'Quality control', 'Supply chain visibility'],
    icon: '🏭'
  },
  {
    name: 'Retail & E-commerce',
    description: 'Omnichannel retail and e-commerce platforms',
    challenges: ['Customer experience', 'Inventory management', 'Scalability'],
    icon: '🛒'
  },
  {
    name: 'Government',
    description: 'Public sector digital transformation',
    challenges: ['Citizen services', 'Security compliance', 'Legacy modernization'],
    icon: '🏛️'
  },
  {
    name: 'Education',
    description: 'Educational technology and learning management',
    challenges: ['Student data privacy', 'Remote learning', 'Assessment systems'],
    icon: '🎓'
  }
];

const pricingTiers = [
  {
    name: 'Discovery',
    price: '$25,000',
    period: '/project',
    description: 'Enterprise assessment and strategy',
    features: [
      'Current state analysis',
      'Technology audit',
      'Gap analysis',
      'Strategic roadmap',
      'ROI projections'
    ],
    duration: '4-6 weeks'
  },
  {
    name: 'Implementation',
    price: '$150,000',
    period: '/project',
    description: 'Full enterprise solution deployment',
    features: [
      'Solution architecture',
      'System integration',
      'Data migration',
      'Security implementation',
      'User training',
      'Go-live support'
    ],
    duration: '6-12 months',
    popular: true
  },
  {
    name: 'Management',
    price: '$50,000',
    period: '/month',
    description: 'Ongoing enterprise support and optimization',
    features: [
      '24/7 monitoring',
      'Performance optimization',
      'Security updates',
      'Feature enhancements',
      'Dedicated support team',
      'Monthly reporting'
    ],
    duration: 'Ongoing'
  }
];

const caseStudies = [
  {
    company: 'Global Financial Corp',
    industry: 'Financial Services',
    challenge: 'Legacy system modernization and regulatory compliance',
    solution: 'Complete digital transformation with microservices architecture',
    result: '40% cost reduction, 99.9% uptime, full compliance'
  },
  {
    company: 'National Healthcare System',
    industry: 'Healthcare',
    challenge: 'Patient data integration across multiple systems',
    solution: 'Unified data platform with real-time analytics',
    result: '60% faster patient processing, improved care quality'
  }
];

export default function EnterpriseSolutionsPage() {
=======

const enterprise-solutions: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>enterprise-solutions | Zion Tech Group</title>
        <meta name="description" content="enterprise-solutions - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">enterprise-solutions</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default enterprise-solutions;
