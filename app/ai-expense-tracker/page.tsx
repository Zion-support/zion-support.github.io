import React from 'react';
import { Helmet } from 'react-helmet-async';

const testimonials = [
  {,
    name: "Sarah Johnson",
      role: "CEO",
      content: "Zion Tech Group has transformed our business with their AI solutions.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      company: "TechCorp"
  },
    name: "Michael Chen",
      role: "CTO", ,
    content: "The performance improvements are remarkable. Highly recommended!",
      company: "InnovateLabs"
    name: "Emily Rodriguez",
      role: "Product Manager",
      content: "Outstanding support and cutting-edge technology solutions.",
      company: "FutureTech"
  }
import { Helmet } from "react-helmet-async";

export default function AIExpenseTracker() {
  const features = [
    icon: <Brain className="w-12 h-12 text-cyan-400" />,
        title: "AI-Powered Analysis",
        description:
        "Advanced AI algorithms analyze your spending patterns and provide intelligent insights.",
    icon: <TrendingUp className="w-12 h-12 text-purple-400" />,
        title: "Real-time Tracking",
        "Track your expenses in real-time with automatic categorization and smart notifications.",
    icon: <Shield className="w-12 h-12 text-green-400" />,
        title: "Secure & Private",
        "Bank-level security ensures your financial data is protected and private.",
    icon: <BarChart3 className="w-12 h-12 text-yellow-400" />,
        title: "Smart Reports",
        "Generate detailed reports and visualizations to understand your spending habits.",

  const capabilities = [
    title: "Automatic Categorization",
        "AI automatically categorizes your expenses into predefined categories like food, transportation, entertainment, etc.",
        icon: <Bot className="w-8 h-8 text-blue-400" />,
    title: "Receipt Scanning",
        "Simply take a photo of your receipt and let AI extract all the relevant information automatically.",
        icon: <Receipt className="w-8 h-8 text-green-400" />,
    title: "Budget Management",
        "Set budgets for different categories and get alerts when you're approaching your limits.",
        icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
    title: "Expense Insights",
        "Get personalized insights and recommendations to help you save money and manage finances better.",
        icon: <Brain className="w-8 h-8 text-purple-400" />,

  const pricingPlans = [
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
    name: "Pro",
        price: "$19.99",
        description: "Ideal for professionals",
        "Everything in Basic",
        "Advanced AI insights",
        "Unlimited receipt scanning",
        "Advanced analytics",
        "Budget management",
        "Priority support",
        "API access",
        popular: true,
    name: "Business",
        price: "$49.99",
        description: "For small businesses",
        "Everything in Pro",
        "Team collaboration",
        "Multi-user accounts",
        "Advanced reporting",
        "Integration with accounting software",
        "Dedicated support",
        "Custom categories",


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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced ai expense tracker solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Expense Tracker
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Expense Tracker</h1>
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              Advanced technology integration and optimization.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              Scalable and secure implementation.

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
  );
"use client";
import { Link } from 'react-router-dom';

