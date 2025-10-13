<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function zionSecurityShieldPro() {
=======


import React from 'react';
=======
import React from 'react';
import { Search } from 'lucide-react';
import { Award } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { FileText } from 'lucide-react';

import { Helmet } from "react-helmet-async";
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8
=======
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5

export default function Page() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const features = [
    {,
    title: "AI-Powered Threat Detection",
        description: "Advanced machine learning algorithms continuously monitor your network for threats, detecting and preventing attacks before they can cause damage.",
        icon: <Brain className="w-8 h-8" />,
        benefits: ["Real-time threat analysis", "Behavioral anomaly detection", "Zero-day attack prevention", "Automated response"]
    },
    {,
    title: "24/7 Security Monitoring",
        description: "Round-the-clock monitoring by our expert security team ensures your systems are protected at all times, with immediate response to any threats.",
        icon: <Eye className="w-8 h-8" />,
        benefits: ["Continuous monitoring", "Expert security team", "Immediate threat response", "Global threat intelligence"]
    },
    {,
    title: "Automated Incident Response",
        description: "When threats are detected, our system automatically responds with predefined actions to contain and eliminate the threat before it spreads.",
        icon: <Zap className="w-8 h-8" />,
        benefits: ["Instant threat containment", "Automated remediation", "Custom response rules", "Minimal downtime"]
    },
    {,
    title: "Compliance Reporting",
        description: "Generate comprehensive compliance reports for SOC2, GDPR, HIPAA, and other regulatory requirements with automated documentation.",
        icon: <FileText className="w-8 h-8" />,
        benefits: ["SOC2 compliance", "GDPR compliance", "HIPAA compliance", "Automated reporting"]
    },
    {,
    title: "Vulnerability Assessment",
        description: "Regular security scans identify vulnerabilities in your systems and provide detailed remediation guidance to strengthen your security posture.",
        icon: <Search className="w-8 h-8" />,
        benefits: ["Regular security scans", "Vulnerability prioritization", "Remediation guidance", "Risk scoring"]
    },
    {,
    title: "Multi-factor Authentication",
        description: "Secure access with advanced MFA options including biometric authentication, hardware tokens, and mobile app verification.",
        icon: <Fingerprint className="w-8 h-8" />,
        benefits: ["Biometric authentication", "Hardware tokens", "Mobile app verification", "SSO integration"]
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Incident Response", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <Award className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {,
    name: "Essential",
        price: "$499",
        period: "month",
        description: "Core security features for small to medium businesses",
        features: [
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Standard support",
        "Up to 50 users"
      ],
<<<<<<< HEAD
        popular: false
=======
      popular: false;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    },
    {,
    name: "Professional",
        price: "$799",
        period: "month",
        description: "Advanced security features for growing businesses",
        features: [
        "AI-powered threat detection",
        "24/7 monitoring",
        "Automated incident response",
        "Compliance reporting",
        "Priority support",
        "Up to 200 users",
        "Mobile app access"
      ],
<<<<<<< HEAD
        popular: true
=======
      popular: true;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
    },
    {,
    name: "Enterprise",
        price: "$1299",
        period: "month",
        description: "Complete security solution for large organizations",
        features: [
        "Advanced AI threat detection",
        "Dedicated security team",
        "Custom security policies",
        "Advanced compliance",
        "24/7 dedicated support",
        "Unlimited users",
        "White-label options",
        "On-premise deployment"
      ],
<<<<<<< HEAD
        popular: false
    }
  ];

export default function ZionSecurityShieldProPage() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Security Shield Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Security Shield Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion Security Shield Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function ZionSecurityShieldProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion Security Shield Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced zion security shield pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion Security Shield Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function ZionsecurityshieldproPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Zion Security Shield Pro</h1>
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
=======
      popular: false;
    }
  ];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
}
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
