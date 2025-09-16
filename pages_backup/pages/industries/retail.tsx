import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
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
  CreditCard,
  FileText,
  Database,
  Smartphone,
  DollarSign
} from 'lucide-react';
import Layout from '../../components/Layout';
import { ShoppingCart, Brain, BarChart3, CheckCircle, ArrowRight, Package, Users, CreditCard, Smartphone, Globe, Database, TrendingUp } from 'lucide-react';

const solutions = [
  {
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solutions with AI-powered recommendations and seamless checkout.',
    icon: ShoppingCart,
    features: ['AI Recommendations', 'Mobile Optimization', 'Payment Integration', 'Inventory Management'],
    benefits: ['40% conversion increase', '60% mobile traffic', '25% average order value', '99.9% uptime']
  },
  {
    title: 'Customer Analytics',
    description: 'Advanced customer behavior analytics and personalization engine.',
    icon: BarChart3,
    features: ['Customer Segmentation', 'Behavior Tracking', 'Personalization', 'Predictive Analytics'],
    benefits: ['35% engagement boost', '50% better targeting', '20% retention increase', 'Real-time insights']
  },
  {
    title: 'Inventory Management',
    description: 'AI-powered inventory optimization and demand forecasting.',
    icon: Database,
    features: ['Demand Forecasting', 'Stock Optimization', 'Supplier Management', 'Automated Reordering'],
    benefits: ['30% inventory reduction', '40% stockout reduction', '25% cost savings', 'Better margins']
  },
  {
    title: 'Omnichannel Experience',
    description: 'Seamless integration across online and offline channels.',
    icon: Globe,
    features: ['Unified Customer Data', 'Cross-channel Analytics', 'Consistent Experience', 'Real-time Sync'],
    benefits: ['50% customer satisfaction', '35% cross-channel sales', '25% operational efficiency', 'Better loyalty']
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Sales',
    description: 'Boost sales with AI-powered recommendations and personalized experiences.',
    metric: '40%'
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Enhance customer engagement with personalized content and offers.',
    metric: '60%'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Reduce operational costs through automation and optimization.',
    metric: '25%'
  },
  {
    icon: Smartphone,
    title: 'Mobile Experience',
    description: 'Optimize mobile shopping experience for better conversions.',
    metric: '80%'
  }
];

export default function Retail() {
import MainLayout from '../../src/components/layout/MainLayout';

const Page = () => {
  return (
    <MainLayout 
      title="Page - Zion Tech Group"
      description="Zion Tech Group page"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600">Coming soon...</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
