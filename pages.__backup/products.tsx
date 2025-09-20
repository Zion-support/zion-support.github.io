import React from 'react';
<<<<<<< HEAD
const products: React.FC = () => {,
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">products</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
  ),};
export default products;
=======
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  BrainZapShieldGlobeRocket
  CpuDatabaseLockCloudBarChart3
} from 'lucide-react';

export default function ProductsPage() {
  const productCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Revolutionary AI solutions that transform business operations',
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      products: [
        'Autonomous Business Platform',
        'AI-Powered Analytics Suite',
        'Intelligent Process Automation',
        'Predictive Maintenance System'
      ]
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum solutions for complex problems',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      products: [
        'Quantum Optimization Engine',
        'Quantum Machine Learning',
        'Quantum Cryptography Suite',
        'Quantum Simulation Platform'
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Scalablesecureand high-performance cloud solutions',
      icon: Cloud,
      color: 'from-green-400 to-emerald-500',
      products: [
        'Multi-Cloud Management',
        'Edge Computing Platform',
        'Serverless Architecture',
        'Container Orchestration'
      ]
    },
    {
      name: 'Cybersecurity',
      description: 'Advanced security solutions for modern threats',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      products: [
        'Zero-Trust Security',
        'Threat Intelligence Platform',
        'Identity Management',
        'Security Operations Center'
      ]
    },
    {
      name: 'Data & Analytics',
      description: 'Comprehensive data solutions for business intelligence',
      icon: BarChart3,
      color: 'from-orange-400 to-yellow-500',
      products: [
        'Real-Time Analytics',
        'Data Lake Platform',
        'Business Intelligence Suite',
        'Predictive Analytics'
      ]
    },
    {
      name: 'IoT & Edge',
      description: 'Connected solutions for the Internet of Things',
      icon: Globe,
      color: 'from-indigo-400 to-purple-500',
      products: [
        'IoT Platform',
        'Edge Computing',
        'Smart City Solutions',
        'Industrial IoT'
      ]
    }
  ];

  const featuredProducts = [
    {
      name: 'Zion AI Autonomous Platform',
      description: 'Complete AI-powered business automation platform that learns and adapts to your business needs.',
      features: [
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making',
        'Real-time Learning'
      ],
      icon: Brain,
      color: 'from-purple-400 to-pink-500',
      status: 'Available Now'
    },
    {
      name: 'Quantum Computing Suite',
      description: 'Enterprise-grade quantum computing solutions for complex optimization and simulation problems.',
      features: [
        'Quantum Algorithms',
        'Hybrid Classical-Quantum',
        'Optimization Engine',
        'Simulation Tools'
      ],
      icon: Zap,
      color: 'from-cyan-400 to-blue-500',
      status: 'Early Access'
    },
    {
      name: 'SecureNet Enterprise',
      description: 'Comprehensive cybersecurity platform with advanced threat detection and response capabilities.',
      features: [
        'AI-Powered Detection',
        'Zero-Day Protection',
        'Compliance Management',
        'Incident Response'
      ],
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      status: 'Available Now'
    }
  ];

  const productBenefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations',
      icon: Rocket,
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Cost Reduction',
      description: 'Lower operational costs through intelligent automation',
      icon: BarChart3,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Enhanced Security',
      description: 'Protect your business with advanced security measures',
      icon: Lock,
      color: 'from-red-400 to-pink-500'
    },
    {
      title: 'Scalability',
      description: 'Grow your business without infrastructure limitations',
      icon: Globe,
      color: 'from-purple-400 to-indigo-500'
    },
    {
      title: 'Real-time Insights',
      description: 'Make data-driven decisions with instant analytics',
      icon: Cpu,
      color: 'from-orange-400 to-yellow-500'
    },
    {
      title: 'Future-Proof',
      description: 'Built with cutting-edge technology for tomorrow\'s challenges',
      icon: Zap,
      color: 'from-cyan-400 to-blue-500'
    }
  ];

const products: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">products</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default products;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
