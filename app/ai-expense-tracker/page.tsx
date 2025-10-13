<<<<<<< HEAD
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
import { Helmet } from "react-helmet-async";
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-07e8

export default function AIExpenseTracker() {
  const features = [
    {,
    icon: <Brain className="w-12 h-12 text-cyan-400" />,
        title: "AI-Powered Analysis",
        description:
        "Advanced AI algorithms analyze your spending patterns and provide intelligent insights.",
    },
    {,
    icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
        title: "Real-time Tracking",
        description:
        "Track your expenses in real-time with automatic categorization and smart notifications.",
    },
    {,
    icon: <Shield className="w-12 h-12 text-green-400" />,
        title: "Secure & Private",
        description:
        "Bank-level security ensures your financial data is protected and private.",
    },
    {,
    icon: <BarChart3 className="w-12 h-12 text-yellow-400" />,
        title: "Smart Reports",
        description:
        "Generate detailed reports and visualizations to understand your spending habits.",
    },

  const capabilities = [
    {,
    title: "Automatic Categorization",
        description:
        "AI automatically categorizes your expenses into predefined categories like food, transportation, entertainment, etc.",
        icon: <Bot className="w-8 h-8 text-blue-400" />,
    },
    {,
    title: "Receipt Scanning",
        description:
        "Simply take a photo of your receipt and let AI extract all the relevant information automatically.",
        icon: <Receipt className="w-8 h-8 text-green-400" />,
    },
    {,
    title: "Budget Management",
        description:
        "Set budgets for different categories and get alerts when you're approaching your limits.",
        icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
    },
    {,
    title: "Expense Insights",
        description:
        "Get personalized insights and recommendations to help you save money and manage finances better.",
        icon: <Brain className="w-8 h-8 text-purple-400" />,
    },

  const pricingPlans = [
    {,
    name: "Basic",
        price: "$9.99",
        period: "/month",
        description: "Perfect for personal use",
        features: [
        "Unlimited expense tracking",
        "Basic AI categorization",
        "Receipt scanning (50/month)",
        "Basic reports",
        "Mobile app access",
        "Email support",
      ],
        popular: false,
    },
    {,
    name: "Pro",
        price: "$19.99",
        period: "/month",
        description: "Ideal for professionals",
        features: [
        "Everything in Basic",
        "Advanced AI insights",
        "Unlimited receipt scanning",
        "Advanced analytics",
        "Budget management",
        "Priority support",
        "API access",
      ],
        popular: true,
    },
    {,
    name: "Business",
        price: "$49.99",
        period: "/month",
        description: "For small businesses",
        features: [
        "Everything in Pro",
        "Team collaboration",
        "Multi-user accounts",
        "Advanced reporting",
        "Integration with accounting software",
        "Dedicated support",
        "Custom categories",
      ],
        popular: false,
    },

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function aiExpenseTracker() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Ai Expense Tracker solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Expense Tracker</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function AiExpenseTrackerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Advanced ai expense tracker solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Expense Tracker
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function AiexpensetrackerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Expense Tracker</h1>
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
"use client";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c
=======

"use client";
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
