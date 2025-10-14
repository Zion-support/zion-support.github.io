<<<<<<< HEAD

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description: "Enterprise-grade security with advanced threat protection"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "High-performance cloud infrastructure for optimal speed"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Deploy applications worldwide with our global network"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Comprehensive data storage and management solutions"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure",
      description: "Robust cloud infrastructure for all your needs"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with cloud",
      features: [
        "Basic cloud infrastructure",
        "24/7 email support",
        "Standard security features",
        "10GB storage included",
        "Monthly backups"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Advanced cloud infrastructure",
        "Priority support",
        "Enhanced security features",
        "100GB storage included",
        "Daily backups",
        "Load balancing",
        "Auto-scaling"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations with complex requirements",
      features: [
        "Enterprise cloud infrastructure",
        "24/7 dedicated support",
        "Advanced security suite",
        "Unlimited storage",
        "Real-time backups",
        "Advanced monitoring",
        "Custom configurations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];
=======
<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Page() {
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
