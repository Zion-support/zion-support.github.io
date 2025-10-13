<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Globe, Monitor, Phone } from "lucide-react";
export default function AiAnalytics() {

  const analyticsStats = [
    { number: "40%", label: "Faster Decision Making", icon: <Zap className="w-6 h-6" /> },
    { number: "85%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "60%", label: "Cost Reduction", icon: <TrendingDown className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "1 user account",
        "Basic AI models"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Advanced dashboards",
        "Custom reports",
        "Priority support",
        "Up to 10 user accounts",
        "Advanced AI models",
        "API access",
        "Mobile app"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced AI features",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "Custom AI models",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion AI Analytics has revolutionized our decision-making process. The predictive insights helped us identify market opportunities before our competitors.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The real-time analytics and automated insights have improved our operational efficiency by 40%. We can now make data-driven decisions instantly.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "The AI-powered recommendations have been game-changing. Our campaign performance improved by 60% thanks to the intelligent insights.",
      rating: 5,
      avatar: "ER"
    }
  ];
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

export default function AIAnalytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics solutions for data-driven insights" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI analytics platform
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - Advanced AI Analytics Solutions</p>

