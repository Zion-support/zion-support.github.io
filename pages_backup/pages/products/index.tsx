import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Globe,
  Settings
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'AI Email Responder',
    description: 'Intelligent email automation powered by advanced AI',
    category: 'AI Services',
    icon: Brain,
    price: '$99/month',
    features: [
      'Natural language processing',
      'Context-aware responses',
      'Multi-language support',
      'Custom training models'
    ],
    rating: 4.8,
    users: 1200,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern businesses',
    category: 'Cloud Services',
    icon: Cloud,
    price: '$199/month',
    features: [
      'Auto-scaling infrastructure',
      'Global CDN',
      '99.9% uptime guarantee',
      '24/7 monitoring'
    ],
    rating: 4.7,
    users: 850,
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    name: 'Security Suite',
    description: 'Comprehensive security solutions for enterprise',
    category: 'Security',
    icon: Shield,
    price: '$299/month',
    features: [
      'Advanced threat detection',
      'Real-time monitoring',
      'Compliance management',
      'Incident response'
    ],
    rating: 4.9,
    users: 650,
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 4,
    name: 'Micro SaaS Platform',
    description: 'Complete SaaS solution for small businesses',
    category: 'SaaS',
    icon: Zap,
    price: '$149/month',
    features: [
      'Multi-tenant architecture',
      'User management',
      'Payment processing',
      'Analytics dashboard'
    ],
    rating: 4.6,
    users: 950,
    color: 'from-purple-500 to-pink-500'
  }
];

const categories = [
  'All',
  'AI Services',
  'Cloud Services',
  'Security',
  'SaaS'
];

export default function ProductsIndex() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

=======

const index: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>index | Zion Tech Group</title>
        <meta name="description" content="index - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">index</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default index;
