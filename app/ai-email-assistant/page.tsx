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

export default function AIEmailAssistant() {
  const features = [
    {,
    icon: <Mail className="w-6 h-6 text-cyan-400" />,
        title: "Smart Classification",
        description:
        "Automatically categorize and prioritize emails based on content and sender.",
    },
    {,
    icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
        title: "Auto-Responses",
        description:
        "Generate intelligent responses using AI to handle common inquiries.",
    },
    {,
    icon: <Brain className="w-6 h-6 text-yellow-400" />,
        title: "Sentiment Analysis",
        description:
        "Analyze email tone and sentiment to provide better customer service.",
    },
    {,
    icon: <Settings className="w-6 h-6 text-green-400" />,
        title: "Workflow Automation",
        description:
        "Create automated workflows to streamline your email management.",
    },

  const useCases = [
    {,
    title: "Customer Support",
        description:
        "Handle customer inquiries efficiently with AI-powered responses and routing.",
        icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {,
    title: "Sales Outreach",
        description:
        "Generate personalized sales emails and follow-up sequences automatically.",
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
    },
    {,
    title: "Email Marketing",
        description:
        "Create compelling marketing campaigns with AI-generated content and optimization.",
        icon: <BarChart3 className="w-8 h-8 text-green-400" />,
    },
    {,
    title: "Internal Communications",
        description:
        "Streamline internal email processes and improve team collaboration.",
        icon: <Shield className="w-8 h-8 text-purple-400" />,
    },

  const pricingPlans = [
    {,
    name: "Starter",
        price: "$29",
        period: "/month",
        description: "Perfect for small teams",
        features: [
        "Up to 1,000 emails/month",
        "Basic AI features",
        "Email classification",
        "Auto-responses",
        "Email support",
        "Basic analytics",
      ],
        popular: false,
    },
    {,
    name: "Professional",
        price: "$79",
        period: "/month",
        description: "Ideal for growing businesses",
        features: [
        "Up to 10,000 emails/month",
        "Advanced AI features",
        "Sentiment analysis",
        "Workflow automation",
        "Priority support",
        "Advanced analytics",
        "API access",
      ],
        popular: true,
    },
    {,
    name: "Enterprise",
        price: "$199",
        period: "/month",
        description: "For large organizations",
        features: [
        "Unlimited emails",
        "Custom AI training",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
      ],
        popular: false,
    },

import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

<<<<<<< HEAD
export default function aiEmailAssistant() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Ai Email Assistant solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Email Assistant</h1>
          <p className="text-xl text-gray-300 mb-8">
=======
export default function AiEmailAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced ai email assistant solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ai Email Assistant
          </h1>
          <p className="text-xl text-gray-600 mb-8">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
            This page is under development. Please check back later.
=======

export default function AiemailassistantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Email Assistant</h1>
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
