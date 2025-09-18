import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  DollarSign,
  Clock,
  Users,
  Zap,
  Shield,
  Brain,
  Cloud,
  Network
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'AI Services',
    icon: Brain,
    description: 'Machine Learning, Computer Vision, NLP',
    plans: [
      {
        name: 'Starter',
        price: '$1,000',
        period: '/month',
        description: 'Perfect for small businesses',
        features: [
          'Basic ML model development',
          'Data preprocessing',
          'Model deployment',
          'Email support',
          'Monthly reports'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$3,500',
        period: '/month',
        description: 'Ideal for growing companies',
        features: [
          'Advanced ML models',
          'Custom model training',
          'Real-time predictions',
          'Priority support',
          'Weekly reports',
          'A/B testing'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$10,000',
        period: '/month',
        description: 'For large organizations',
        features: [
          'Custom AI solutions',
          'Dedicated team',
          '24/7 support',
          'Custom integrations',
          'Real-time monitoring',
          'Unlimited models'
        ],
        popular: false
      }
    ]
  },
  {
    name: 'IT Services',
    icon: Network,
    description: 'Cloud, DevOps, Cybersecurity',
    plans: [
      {
        name: 'Basic',
        price: '$120',
        period: '/hour',
        description: 'Consulting and support',
        features: [
          'IT consulting',
          'System maintenance',
          'Security audits',
          'Email support',
          'Basic monitoring'
        ],
        popular: false
      },
      {
        name: 'Standard',
        price: '$200',
        period: '/hour',
        description: 'Comprehensive IT services',
        features: [
          'Cloud migration',
          'DevOps implementation',
          'Security hardening',
          'Priority support',
          'Advanced monitoring',
          'Backup solutions'
        ],
        popular: true
      },
      {
        name: 'Premium',
        price: '$350',
        period: '/hour',
        description: 'Full-service IT management',
        features: [
          'Dedicated team',
          '24/7 monitoring',
          'Custom solutions',
          'Emergency support',
          'Compliance management',
          'Performance optimization'
        ],
        popular: false
      }
    ]
  },
  {
    name: 'Micro SaaS',
    icon: Cloud,
    description: 'Custom SaaS solutions',
    plans: [
      {
        name: 'Startup',
        price: '$19',
        period: '/month',
        description: 'For new businesses',
        features: [
          'Basic SaaS platform',
          'User management',
          'Basic analytics',
          'Email support',
          'Standard hosting'
        ],
        popular: false
      },
      {
        name: 'Growth',
        price: '$99',
        period: '/month',
        description: 'For growing businesses',
        features: [
          'Advanced features',
          'Custom integrations',
          'Advanced analytics',
          'Priority support',
          'Scalable hosting',
          'API access'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$499',
        period: '/month',
        description: 'For large organizations',
        features: [
          'Custom development',
          'White-label solution',
          'Dedicated support',
          'Custom hosting',
          'Advanced security',
          'Unlimited users'
        ],
        popular: false
      }
    ]
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008, Middletown DE 19709"
};

export default function PricingPage() {
=======

const pricing: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>pricing | Zion Tech Group</title>
        <meta name="description" content="pricing - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">pricing</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default pricing;
