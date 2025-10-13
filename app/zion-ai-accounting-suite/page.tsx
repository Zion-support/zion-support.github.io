<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Calculator, Brain, Shield, ArrowRight, CheckCircle, Star, FileText, TrendingUp, Receipt, BarChart3, CreditCard, PieChart } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, CheckCircle, ArrowRight } from 'lucide-react';
=======
import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { PieChart } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Brain } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Receipt } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

const ZionAIAccountingSuite = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$79",
      period: "/month",
      description: "Perfect for freelancers",
      features: [
        "Up to 100 transactions/month",
        "Basic AI categorization",
        "Invoice processing",
        "Tax preparation",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$199",
      period: "/month",
      description: "Ideal for small businesses",
      features: [
        "Up to 1,000 transactions/month",
        "Advanced AI features",
        "Multi-user access",
        "Advanced analytics",
        "Priority support",
        "API integration",
        "Custom reporting",
        "Bank reconciliation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited transactions",
        "Premium AI features",
        "Custom AI training",
        "White-label options",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const accountingModules = [
    {
      title: "Invoice Management",
      description: "Automated invoice creation, processing, and payment tracking with AI-powered data extraction",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Expense Tracking",
      description: "Smart expense categorization, receipt management, and reimbursement processing",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Financial Reporting",
      description: "Real-time P&L, balance sheets, cash flow statements, and custom financial reports",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tax Compliance",
      description: "Automated tax calculations, filing, and compliance monitoring across all jurisdictions",
      icon: <Calculator className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

export default function ZionAiAccountingSuitePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Accounting Suite - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Accounting Suite solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Accounting Suite</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai accounting suite solutions designed to meet your business needs.
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
