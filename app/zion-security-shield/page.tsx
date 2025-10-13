<<<<<<< HEAD
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

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Cloud } from 'lucide-react';

const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "The AI financial analysis platform has revolutionized our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      company: "FinancePro",
      content: "Incredible accuracy and insights that have improved our portfolio performance.",
      rating: 5
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
export default function ZionSecurityShield() {
  const features = [
    {,
    icon: <Shield className="w-6 h-6" />,
        title: "Advanced Threat Detection",
        description: "AI-powered threat detection with 99.9% accuracy using machine learning algorithms"
    },
    {,
    icon: <Lock className="w-6 h-6" />,
        title: "Zero-Trust Architecture",
        description: "Implement zero-trust security model with continuous verification and monitoring"
    },
    {,
    icon: <Eye className="w-6 h-6" />,
        title: "Real-time Monitoring",
        description: "24/7 security monitoring with instant alerts and automated response systems"
    },
    {,
    icon: <AlertTriangle className="w-6 h-6" />,
        title: "Vulnerability Assessment",
        description: "Comprehensive security audits and vulnerability scanning for all your assets"
    },
    {,
    icon: <Zap className="w-6 h-6" />,
        title: "Automated Incident Response",
        description: "AI-driven incident response with automated containment and recovery procedures"
    },
    {,
    icon: <Brain className="w-6 h-6" />,
        title: "Behavioral Analytics",
        description: "Advanced user behavior analysis to detect insider threats and anomalies"
    }

  const securityFeatures = [
    "Multi-factor Authentication (MFA)",
    "End-to-end Encryption",
    "DDoS Protection",
    "Web Application Firewall (WAF)",
    "Intrusion Detection System (IDS)",
    "Security Information and Event Management (SIEM)",
    "Penetration Testing",
    "Compliance Reporting (SOC 2, ISO 27001, GDPR)",
    "Data Loss Prevention (DLP)",
    "Mobile Device Management (MDM)",
    "Email Security Gateway",
    "Cloud Security Posture Management"

  const pricingPlans = [
    {,
    name: "Essential",
        price: "$49",
        period: "/month",
        description: "Perfect for small businesses",
        features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly security reports",
        "Email support",
        "Up to 10 users"
      ],
        popular: false
    },
    {,
    name: "Professional",
        price: "$149",
        period: "/month",
        description: "Most popular for growing businesses",
        features: [
        "Advanced threat detection",
        "Real-time monitoring",
        "Vulnerability scanning",
        "Incident response",
        "Priority support",
        "Up to 50 users",
        "Compliance reporting"
      ],
        popular: true
    },
    {,
    name: "Enterprise",
        price: "$399",
        period: "/month",
        description: "For large organizations",
        features: [
        "AI-powered security",
        "24/7 SOC monitoring",
        "Custom security policies",
        "Dedicated security team",
        "White-label reporting",
        "Unlimited users",
        "Advanced compliance",
        "Custom integrations"
      ],
        popular: false
    }

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function zionSecurityShield() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Security Shield - Zion Tech Group</title>
        <meta name="description" content="Zion Security Shield solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion Security Shield</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function ZionSecurityShieldPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Security Shield - Zion Tech Group</title>
        <meta name="description" content="Advanced zion security shield solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Security Shield
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function ZionsecurityshieldPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Security Shield</h1>
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
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Star, Zap, Brain } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
