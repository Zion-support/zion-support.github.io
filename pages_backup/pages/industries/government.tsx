import React from 'react';
<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>government | Zion Tech Group</title>,
        <meta name="description" content="government - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">government</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building,
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
  Rocket,
  Lock,
  Activity,
  FileText,
  Database,
  Vote
} from 'lucide-react';
import Layout from '../../components/Layout';

const solutions = [
  {
    title: 'Citizen Services Portal',
    description: 'Comprehensive digital platform for citizen services and government interactions.',
    icon: Users,
    features: ['Online Applications', 'Document Management', 'Payment Processing', 'Status Tracking'],
    benefits: ['70% faster processing', '24/7 availability', 'Reduced paperwork', 'Better transparency']
  },
  {
    title: 'Data Analytics Platform',
    description: 'Advanced analytics for government data and decision-making support.',
    icon: BarChart3,
    features: ['Data Visualization', 'Predictive Analytics', 'Performance Metrics', 'Real-time Dashboards'],
    benefits: ['Data-driven decisions', 'Improved efficiency', 'Better resource allocation', 'Transparent reporting']
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security solutions to protect government data and systems.',
    icon: Shield,
    features: ['Threat Detection', 'Access Control', 'Data Encryption', 'Compliance Monitoring'],
    benefits: ['99.9% security', 'Zero breaches', 'Compliance assurance', 'Continuous monitoring']
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation of government processes and services.',
    icon: Rocket,
    features: ['Process Automation', 'Legacy System Integration', 'Cloud Migration', 'Change Management'],
    benefits: ['50% efficiency gain', 'Cost reduction', 'Better citizen experience', 'Modern infrastructure']
  }
];

const benefits = [
  {
    icon: Users,
    title: 'Citizen Satisfaction',
    description: 'Improve citizen experience with digital services and faster processing.',
    metric: '85%'
  },
  {
    icon: TrendingUp,
    title: 'Efficiency',
    description: 'Streamline government processes and reduce operational costs.',
    metric: '50%'
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Protect sensitive government data with advanced security measures.',
    metric: '99.9%'
  },
  {
    icon: Globe,
    title: 'Transparency',
    description: 'Increase government transparency with open data and analytics.',
    metric: '90%'
  }
];

export default function Government() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>government | Zion Tech Group</title>
        <meta name="description" content="government - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">government</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default government;