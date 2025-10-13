<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
=======


const testimonials = [
  {,
    name: "Sarah Johnson",
      role: "CEO",
      content: "Zion Tech Group has transformed our business with their AI solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "TechCorp"
  },
  {,
    name: "Michael Chen",
      role: "CTO", ,
    content: "The performance improvements are remarkable. Highly recommended!",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "InnovateLabs"
  },
  {,
    name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Outstanding support and cutting-edge technology solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "FutureTech"
  }

export default function ZionCloudVault() {
  const features = [
    {,
    icon: <Cloud className="w-6 h-6" />,
        title: "Secure Cloud Storage",
        description: "Enterprise-grade cloud storage with 99.999999999% durability and 99.9% availability"
    },
    {,
    icon: <Lock className="w-6 h-6" />,
        title: "End-to-End Encryption",
        description: "Military-grade AES-256 encryption for data at rest and in transit"
    },
    {,
    icon: <Shield className="w-6 h-6" />,
        title: "Advanced Security",
        description: "Multi-factor authentication, zero-knowledge architecture, and SOC 2 compliance"
    },
    {,
    icon: <Zap className="w-6 h-6" />,
        title: "Lightning Fast Sync",
        description: "Real-time file synchronization across all your devices with intelligent caching"
    },
    {,
    icon: <Globe className="w-6 h-6" />,
        title: "Global CDN",
        description: "Worldwide content delivery network for fast access from anywhere"
    },
    {,
    icon: <Database className="w-6 h-6" />,
        title: "Unlimited Storage",
        description: "Scale from GB to PB with no storage limits and automatic scaling"
    }

  const storageFeatures = [
    "File Versioning & History",
    "Collaborative Workspaces",
    "Advanced Search & Filtering",
    "Mobile & Desktop Apps",
    "API & SDK Access",
    "Custom Branding",
    "Audit Logs & Reporting",
    "Backup & Recovery",
    "Compliance Tools (GDPR, HIPAA)",
    "Team Management",
    "Share Links & Permissions",
    "Integration with 100+ Apps"

  const pricingPlans = [
    {,
    name: "Personal",
        price: "$9",
        period: "/month",
        description: "Perfect for individuals",
        features: [
        "1TB storage",
        "5 devices",
        "Basic encryption",
        "Email support",
        "Mobile apps",
        "File sharing"
      ],
        popular: false
    },
    {,
    name: "Business",
        price: "$25",
        period: "/month",
        description: "Most popular for teams",
        features: [
        "5TB storage",
        "Unlimited devices",
        "Advanced encryption",
        "Priority support",
        "Team collaboration",
        "Admin dashboard",
        "API access"
      ],
        popular: true
    },
    {,
    name: "Enterprise",
        price: "$99",
        period: "/month",
        description: "For large organizations",
        features: [
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "24/7 phone support",
        "White-label solution",
        "Compliance tools",
        "Dedicated account manager"
      ],
        popular: false
    }

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function zionCloudVault() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Cloud Vault - Zion Tech Group</title>
        <meta name="description" content="Zion Cloud Vault solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion Cloud Vault</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function ZionCloudVaultPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Cloud Vault - Zion Tech Group</title>
        <meta name="description" content="Advanced zion cloud vault solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Cloud Vault
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function ZioncloudvaultPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Cloud Vault</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
import { ArrowRight, Cloud, Lock, Shield, Zap, Globe, CheckCircle, Star, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
