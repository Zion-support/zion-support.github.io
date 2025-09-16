import React from 'react';
<<<<<<< HEAD
=======
import Link from 'next/link';';

import {
  Settings,
  Brain,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Cpu,
  Wrench,
  Activity,
  Database,
  FileText,
  Users;
} from 'lucide-react';
import Layout from '../../components/Layout';
const services = [
  {
    title: 'Smart Factory Solutions',
    description: 'IoT-enabled manufacturing systems for intelligent production management.',
    icon: Settings,
    features: [;
      'Real-time production monitoring,',
      'Automated quality control',',
      'Predictive maintenance',',
      'Supply chain integration'';
    ];
  },
  {}
    title: 'Predictive Maintenance AI,',
    description: 'AI-powered systems to predict and prevent equipment failures.,',
    icon: Brain,
    features: [;
      'Equipment health monitoring,',
      'Failure prediction algorithms',',
      'Maintenance scheduling',',
      'Cost optimization'';
    ];
  },
  {}
    title: 'IoT Sensor Networks,',
    description: 'Connected sensor systems for comprehensive factory monitoring.,',
    icon: Cpu,
    features: [;
      'Environmental monitoring,',
      'Equipment status tracking',',
      'Data collection systems',',
      'Real-time alerts'';
    ];
  },
  {}
    title: 'Quality Control Systems,',
    description: 'Automated quality assurance using computer vision and AI.,',
    icon: Shield,
    features: [;
      'Visual inspection systems,',
      'Defect detection algorithms',',
      'Quality metrics tracking',',
      'Automated reporting'';
    ];
  },
  {}
    title: 'Supply Chain Optimization,',
    description: 'AI-driven supply chain management for improved efficiency.,',
    icon: BarChart3,
    features: [;
      'Demand forecasting,',
      'Inventory optimization',',
      'Supplier management',',
      'Logistics coordination'';
    ];
  },
  {}
    title: 'Digital Twin Technology,',
    description: 'Virtual replicas of physical manufacturing systems for simulation.,',
    icon: Database,
    features: [;
      '3D factory modeling,',
      'Process simulation',',
      'Performance optimization',',
      'Scenario planning'';
    ];
  }
];
const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Automated processes and AI optimization improve production efficiency.',
    icon: Activity
  },
  {}
    title: 'Reduced Downtime,',
    description: 'Predictive maintenance prevents unexpected equipment failures.,',
    icon: Wrench;
  },
  {}
    title: 'Better Quality,',
    description: 'Automated quality control ensures consistent product quality.,',
    icon: Shield;
  },
  {}
    title: 'Cost Savings,',
    description: 'Optimized operations and reduced waste lower manufacturing costs.,',
    icon: BarChart3;
  }
];
export default function ManufacturingPage() {
  return (
    <Layout
      title="Manufacturing Technology Solutions - Zion Tech Group"
      description="Transform manufacturing with smart factory solutions, IoT networks, predictive maintenance, and digital twin technology."
      keywords="manufacturing technology, smart factory, IoT manufacturing, predictive maintenance, digital twin, Industry 4.0"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const manufacturing: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">manufacturing</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default manufacturing;