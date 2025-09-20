import React from 'react';
<<<<<<< HEAD
const analytics: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>analytics | Zion Tech Group</title>,
        <meta name="description" content="analytics - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">analytics</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
  ),};
export default analytics;
=======
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  BarChart3
  Database
  Zap
  Shield
  Rocket
  Cpu
  ArrowRight
  CheckCircle
  Star
  Users
  Clock
  TrendingUp;

} from 'lucide-react';

import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * AnalyticsServicesPage - Function description
 */
function AnalyticsServicesPage() {
  const services = [;

    {
      title: 'Big Data Processing'
      description: 'Scalable data processing and analytics platforms'
      features: [
        'Data Pipeline Engineering'
        'Real-time Processing'
        'Batch Processing'
        'Data Quality'
      ]
      price: 'From $8,000'
      icon: Database
      color: 'from-indigo-500 to-purple-500'
    }
    {
      title: 'Business Intelligence'
      description: 'Interactive dashboards and reporting solutions'
      features: [
        'Custom Dashboards'
        'KPI Tracking'
        'Data Visualization'
        'Automated Reports'
      ]
      price: 'From $5,000'
      icon: BarChart3
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Predictive Analytics'
      description: 'AI-powered predictive modeling and forecasting'
      features: [
        'Machine Learning Models'
        'Forecasting'
        'Risk Assessment'
        'Trend Analysis'
      ]
      price: 'From $12,000'
      icon: Zap
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Data Strategy & Governance'
      description: 'Comprehensive data strategy and governance frameworks'
      features: [
        'Data Architecture'
        'Governance Policies'
        'Compliance'
        'Data Quality'
      ]
      price: 'From $10,000'
      icon: Shield
      color: 'from-emerald-500 to-teal-500'
    }
  ];
  const stats = [
    { number: '1M+', label: 'Data Points Processed', icon: Database }
    { number: '95%', label: 'Accuracy Rate', icon: CheckCircle }
    { number: '24/7', label: 'Real-time Analytics', icon: Clock }
    { number: '300%', label: 'ROI Improvement', icon: TrendingUp }
  ];






export default function AnalyticsServicesPage() {
  const services = [


  BarChart3,
  Database,
  Zap,
  Shield,
  Rocket,
  Cpu,
  ArrowRight,
  CheckCircle,
  Star,
  Users,

  Clock,
  TrendingUp,
} from 'lucide-react';

import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  BarChart3, Database, Zap, Shield, Rocket, Cpu,
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function AnalyticsServicesPage() {
  const services = [

    {
      title: "Big Data Processing",
      description: "Scalable data processing and analytics platforms",
      features: ["Data Pipeline Engineering", "Real-time Processing", "Batch Processing", "Data Quality"],
      price: "From $8,000",


      icon: Database,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Business Intelligence",
      description: "Interactive dashboards and reporting solutions",
      features: ["Custom Dashboards", "KPI Tracking", "Data Visualization", "Automated Reports"],
      price: "From $5,000",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered predictive modeling and forecasting",
      features: ["Machine Learning Models", "Forecasting", "Risk Assessment", "Trend Analysis"],
      price: "From $12,000",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Strategy & Governance",
      description: "Comprehensive data strategy and governance frameworks",
      features: ["Data Architecture", "Governance Policies", "Compliance", "Data Quality"],
      price: "From $10,000",
      icon: Shield,

      color: 'from-emerald-500 to-teal-500',
    },;
  ];

      color: "from-emerald-500 to-teal-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const stats = [
    { number: "1M+", label: "Data Points Processed", icon: Database },
    { number: "95%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "Real-time Analytics", icon: Clock },
    { number: "300%", label: "ROI Improvement", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],


const analytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>analytics | Zion Tech Group</title>
        <meta name="description" content="analytics - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">analytics</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default analytics;
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
