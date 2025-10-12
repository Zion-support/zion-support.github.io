'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ShoppingCart, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  BarChart3, 
  Target, 
  Shield, 
  Globe,
  Smartphone,
  Monitor,
  AlertCircle,
  Sparkles,
  FileText,
  Database,
  Clock,
  Users,
  Building2,
  CreditCard,
  TrendingUp,
  PieChart,
  Activity,
  Eye,
  Search,
  Heart,
  MessageSquare,
  Settings,
  DollarSign,
  Percent,
  Package,
  Truck
} from 'lucide-react';

export default function AiEcommerceOptimizerProPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Personalization',
      description: 'Advanced machine learning algorithms personalize the shopping experience for each customer',
      benefits: ['Product recommendations', 'Dynamic pricing', 'Personalized content', 'Behavioral analysis']
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-green-400" />,
      title: 'Conversion Optimization',
      description: 'Intelligent A/B testing and optimization to maximize your conversion rates',
      benefits: ['Smart testing', 'Conversion tracking', 'Funnel optimization', 'Revenue maximization']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive e-commerce analytics with actionable insights and predictions',
      benefits: ['Sales forecasting', 'Customer analytics', 'Inventory optimization', 'Performance metrics']
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns with AI-driven targeting and personalization',
      benefits: ['Email automation', 'Retargeting campaigns', 'Social media ads', 'Customer segmentation']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Real-Time Optimization',
      description: 'Continuous optimization of your store based on real-time data and user behavior',
      benefits: ['Live optimization', 'Instant adjustments', 'Performance monitoring', 'Dynamic content']
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Multi-Channel Management',
      description: 'Unified management across all sales channels with consistent optimization',
      benefits: ['Channel synchronization', 'Inventory management', 'Order processing', 'Customer data']
    }
  ];

  const optimizationAreas = [
    {
      category: 'Product Optimization',
      icon: <Package className="w-6 h-6 text-cyan-400" />,
      items: [
        'Product recommendations',
        'Pricing optimization',
        'Inventory management',
        'Product descriptions',
        'Image optimization'
      ]
    },
    {
      category: 'Customer Experience',
      icon: <Users className="w-6 h-6 text-green-400" />,
      items: [
        'Personalized shopping',
        'Customer journey mapping',
        'User experience optimization',
        'Mobile optimization',
        'Accessibility features'
      ]
    },
    {
      category: 'Marketing & Sales',
      icon: <Target className="w-6 h-6 text-purple-400" />,
      items: [
        'Email marketing automation',
        'Social media optimization',
        'Search engine optimization',
        'Paid advertising optimization',
        'Content marketing'
      ]
    },
    {
      category: 'Analytics & Reporting',
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      items: [
        'Sales performance tracking',
        'Customer behavior analysis',
        'Revenue forecasting',
        'ROI measurement',
        'Custom dashboards'
      ]
    },
    {
      category: 'Operations & Logistics',
      icon: <Truck className="w-6 h-6 text-red-400" />,
      items: [
        'Order processing optimization',
        'Shipping optimization',
        'Inventory forecasting',
        'Supply chain management',
        'Returns processing'
      ]
    },
    {
      category: 'Security & Compliance',
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      items: [
        'Payment security',
        'Data protection',
        'PCI compliance',
        'Fraud prevention',
        'Privacy compliance'
      ]
    }
  ];
