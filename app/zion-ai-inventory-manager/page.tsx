<<<<<<< HEAD

import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { BarChart3, Package, TrendingUp, AlertTriangle, Users, Clock, Shield, Zap, ArrowRight, CheckCircle, Star, Smartphone, Globe, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
=======
import { ArrowRight, BarChart3, Shield, Zap, Globe, Star, Users, CheckCircle, TrendingUp, Clock, Package, Target, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39

const ZionAIInventoryManager = () => {
  const features = [
    {
<<<<<<< HEAD
      title: "AI-Powered Demand Forecasting",
      description: "Predict inventory needs with 95% accuracy using machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Reduce stockouts by 60%"
    },
    {
      title: "Real-Time Inventory Tracking",
      description: "Monitor stock levels across multiple locations with live updates",
      icon: <Package className="w-6 h-6" />,
      benefit: "99.9% accuracy"
    },
    {
      title: "Automated Reorder Points",
      description: "Set intelligent reorder triggers based on sales velocity and lead times",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefit: "Never run out of stock"
    },
    {
      title: "Multi-Channel Integration",
      description: "Sync inventory across e-commerce, retail, and warehouse systems",
      icon: <Globe className="w-6 h-6" />,
      benefit: "Unified inventory view"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive reports on inventory turnover, costs, and performance",
      icon: <BarChart3 className="w-6 h-6" />,
      benefit: "Data-driven decisions"
    },
    {
      title: "Mobile App Access",
      description: "Manage inventory on-the-go with our intuitive mobile application",
      icon: <Smartphone className="w-6 h-6" />,
      benefit: "24/7 access"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 1,000 products",
        "Basic AI forecasting",
        "2 user accounts",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 products",
        "Advanced AI forecasting",
        "10 user accounts",
        "Priority support",
        "Multi-location support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited products",
        "Premium AI forecasting",
        "Unlimited users",
        "24/7 phone support",
        "Multi-warehouse support",
        "Custom reporting",
        "White-label options",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechGear Solutions",
      role: "Operations Manager",
      content: "Zion AI Inventory Manager reduced our stockouts by 70% and saved us $50,000 in the first year. The AI forecasting is incredibly accurate.",
      rating: 5,
      savings: "$50,000 saved"
    },
    {
      name: "Michael Chen",
      company: "RetailMax Inc",
      role: "CEO",
      content: "The multi-channel integration is seamless. We can now track inventory across all our sales channels in real-time.",
      rating: 5,
      savings: "60% fewer stockouts"
    },
    {
      name: "Emily Rodriguez",
      company: "Fashion Forward",
      role: "Inventory Director",
      content: "The mobile app is fantastic. I can check inventory levels and place orders from anywhere. Game changer for our business.",
      rating: 5,
      savings: "40% time saved"
    }
  ];

  const stats = [
    { number: "95%", label: "Forecast Accuracy", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "60%", label: "Reduction in Stockouts", icon: <AlertTriangle className="w-6 h-6" /> },
    { number: "40%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> }
  ];
=======
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function ZionAIInventoryManager() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/main
>>>>>>> origin/main

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>

        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
  );
=======
};

export default HomePage;
>>>>>>> origin/main
