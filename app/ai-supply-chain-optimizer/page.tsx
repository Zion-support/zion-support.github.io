<<<<<<< HEAD
<<<<<<< HEAD
import { Globe, Target, CheckCircle, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Shield, Target, Globe, Clock, CheckCircle } from "lucide-react";
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISupplyChainOptimizerPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Email support',
        'Standard analytics',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 20 warehouses',
        'Advanced AI forecasting',
        '24/7 phone support',
        'Real-time analytics',
        'Weekly reports',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited warehouses',
        'AI-powered optimization',
        'Dedicated support',
        'Custom analytics',
        'Daily reports',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Forecasting',
      description: 'Advanced machine learning algorithms predict demand with 95% accuracy'
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: 'Inventory Optimization',
      description: 'Automatically optimize stock levels to reduce costs and prevent stockouts'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Global Supply Chain',
      description: 'Manage complex multi-country supply chains with real-time visibility'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring of your entire supply chain with instant alerts'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Optimize your supply chain with AI-powered forecasting, inventory management, and real-time monitoring solutions." />
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your supply chain with AI-powered forecasting, inventory optimization, 
              and real-time monitoring. Reduce costs by up to 40% and improve efficiency.
            </p>
            <FuturisticButton className="text-lg px-8 py-4">
              Get Started
            </FuturisticButton>
          </div>
        </div>
      </FuturisticBackground>
import { Helmet } from "react-helmet-async";
;
const HomePage = () => {"
  return (""
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>"
        <title>Home - Zion Tech Group</title>""
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet>""
      <div className="container mx-auto px-4 py-16"></div>""
        <div className="text-center"></div>""
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>""
=======
import React from "react";
import { Helmet } from "react-helmet-async";

const PagePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>)
    </div>)
  );
};

<<<<<<< HEAD
export default HomePage;
>>>>>>> origin/main
>>>>>>> origin/main
=======
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54ad
