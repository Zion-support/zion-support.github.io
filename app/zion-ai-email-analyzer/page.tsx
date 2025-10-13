import React from 'react';
import { Helmet } from 'react-helmet-async';

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses and individual marketers",
      features: [
        "Up to 10,000 emails/month",
        "Basic analytics dashboard",
        "Subject line optimization",
        "Email support",
        "Spam score analysis",
        "Basic A/B testing"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses with advanced email needs",
      features: [
        "Up to 100,000 emails/month",
        "Advanced analytics & reporting",
        "AI-powered optimization",
        "Priority support",
        "Deliverability monitoring",
        "Advanced A/B testing",
        "Content analysis",
        "API access"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with high-volume email campaigns",
      features: [
        "Unlimited emails",
        "Custom analytics dashboard",
        "White-label solution",
        "24/7 phone support",
        "Advanced deliverability tools",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      company: "Digital Marketing Agency",
      role: "Email Marketing Manager",
      content: "Zion AI Email Analyzer has improved our email performance by 45%. The subject line optimization alone increased our open rates by 30%.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Store",
      role: "Marketing Director",
      content: "The spam score analysis saved us from major deliverability issues. Our emails now reach the inbox consistently and our ROI has improved significantly.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Amanda White",
      company: "SaaS Company",
      role: "Growth Marketing Lead",
      content: "The A/B testing automation is incredible. We can now test multiple variations simultaneously and let AI optimize our campaigns automatically.",
      rating: 5,
      avatar: "AW"
    }
  ];

  const stats = [
    { number: "45%", label: "Performance Improvement", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "30%", label: "Open Rate Increase", icon: <Target className="w-6 h-6" /> },
    { number: "99.5%", label: "Deliverability Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Clock className="w-6 h-6" /> }
  ];

export default function ZionAiEmailAnalyzer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>ZionAiEmailAnalyzer - Zion Tech Group</title>
        <meta name="description" content="Advanced zionaiemailanalyzer solutions" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Zion Ai Email Analyzer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive zionaiemailanalyzer solutions designed to transform your business
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-300">Coming Soon - ZionAiEmailAnalyzer Solutions</p>

