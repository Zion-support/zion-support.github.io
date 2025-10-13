
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function cybersecuritySolutions() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Cybersecurity Solutions solutions by Zion Tech Group" />
        <meta name="description" content="Advanced cybersecurity solutions solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-300 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cybersecurity Solutions
export default function CybersecuritySolutionsPage() {
  const capabilities = [
    {,
    title: "AI-Powered Security",
        description: "Advanced threat detection and prevention using artificial intelligence",
        icon: <Shield className="w-8 h-8" />
    },
    {,
    title: "Real-time Monitoring",
        description: "24/7 security monitoring and incident response",
        icon: <CheckCircle className="w-8 h-8" />
    }
  ];
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Monitor } from 'lucide-react';

export default function CybersecuritysolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Cybersecurity Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
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
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { Shield, ArrowRight, CheckCircle, Star, Users, Calendar, Phone, Mail } from 'lucide-react';

const CybersecuritySolutionsPage = () => {
  const securitySolutions = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to protect your business",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Identity Management",
      description: "Secure identity and access management solutions for your organization",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Data Protection",
      description: "Comprehensive data protection and encryption solutions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Network Security",
      description: "Robust network security solutions to protect your infrastructure",
      color: "from-orange-500 to-red-500"
    }
  ];

  const securityProcess = [
    {
      step: "1",
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture and vulnerabilities"
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Custom security solution design tailored to your specific needs"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Professional implementation and configuration of security solutions"
    },
    {
      step: "4",
      title: "Monitoring & Support",
      description: "Ongoing monitoring, maintenance, and support for your security infrastructure"
    }
  ];

  const securityBenefits = [
    "Protect against cyber threats and attacks",
    "Ensure compliance with security standards",
    "Safeguard sensitive data and information",
    "Reduce security risks and vulnerabilities",
    "Improve security awareness and training",
    "24/7 monitoring and support"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Standard security tools",
        "Email support",
        "Basic monitoring"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Advanced threat detection",
        "Identity management",
        "Priority support",
        "Advanced monitoring",
        "Data protection",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Comprehensive security suite",
        "Dedicated security team",
        "White-label solution",
        "SLA guarantee",
        "Advanced analytics",
        "24/7 support"
      ],
      popular: false
    }
  ];
import { Link } from 'react-router-dom';

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CISO",
      company: "TechCorp",
      content: "The cybersecurity solutions have significantly improved our security posture. We feel much more protected now.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "DataFlow Inc",
      content: "Excellent security solutions. The implementation was smooth and the ongoing support is outstanding.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Security Manager",
      company: "SecureCorp",
      content: "The threat detection capabilities are impressive. We've prevented several potential attacks.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Cybersecurity Solutions - Zion Tech Group | Advanced Security Solutions"
            description="Get comprehensive cybersecurity solutions from Zion Tech Group. Advanced threat detection, identity management, and data protection to secure your business."
            keywords="cybersecurity solutions, threat detection, identity management, data protection, network security, security solutions"
            canonical="https://ziontechgroup.com/cybersecurity-solutions"
          />

          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>