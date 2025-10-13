import React from 'react';
import { Users, ArrowRight, CheckCircle, Star, Globe, Shield, Zap, Brain, BarChart3, Target, Receipt } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Receipt } from 'lucide-react';

const SmartExpenseCategorizerPage = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Categorization",
      description: "Advanced machine learning automatically categorizes expenses with 98% accuracy, learning from your patterns and preferences."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Receipt Processing",
      description: "Automatically extract data from receipts, invoices, and bills using OCR technology and AI-powered data extraction."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Real-time Analytics",
      description: "Comprehensive expense analytics with spending trends, budget tracking, and financial insights to optimize your finances."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Bank Integration",
      description: "Securely connect with your bank accounts and credit cards for automatic transaction import and categorization."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Workflows",
      description: "Set up automated rules for expense approval, reimbursement, and reporting to streamline your financial processes."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Management",
      description: "Manage team expenses with role-based permissions, approval workflows, and centralized expense reporting."
    }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "Up to 500 transactions/month",
        "Basic AI categorization",
        "Receipt scanning",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$59",
      period: "/month",
      description: "Ideal for small businesses",
      features: [
        "Up to 5,000 transactions/month",
        "Advanced AI categorization",
        "Bank integration",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$149",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Unlimited users",
        "Custom integrations"
      ],
      popular: false
    }
  ];
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

export default function SmartExpenseCategorizerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Smart Expense Categorizer - Zion Tech Group</title>
        <meta name="description" content="Smart Expense Categorizer solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Smart Expense Categorizer</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive smart expense categorizer solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
