<<<<<<< HEAD
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Page() {
=======
import React from "react";
import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { ArrowRight, Users, Brain, CheckCircle, Star, Zap, Globe, Mail, Phone, TrendingUp, Sparkles, Calendar, BarChart3, Activity, MessageSquare, Mail as EmailIcon, Calendar as CalendarIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';

export default function ZionAiCrmPro() {
  const features = [
    {
      title: "AI Lead Scoring & Qualification",
      description: "Automatically score and qualify leads using advanced AI algorithms that analyze behavior, engagement, and demographic data.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Behavioral analysis", "Engagement scoring", "Demographic insights", "Predictive lead quality"]
    },
    {
      title: "Automated Follow-up Sequences",
      description: "Create intelligent follow-up campaigns that adapt based on lead behavior and engagement patterns.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Smart sequences", "Behavioral triggers", "Multi-channel follow-up", "Performance optimization"]
    },
    {
      title: "Predictive Sales Analytics",
      description: "Get insights into sales trends, pipeline health, and revenue forecasting with AI-powered analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Revenue forecasting", "Pipeline analysis", "Trend identification", "Performance insights"]
    },
    {
      title: "Multi-channel Communication",
      description: "Manage all customer communications from one platform including email, phone, SMS, and social media.",
      icon: <MessageSquare className="w-8 h-8" />,
      benefits: ["Unified inbox", "Channel integration", "Response tracking", "Communication history"]
    },
    {
      title: "Advanced Pipeline Management",
      description: "Visualize and manage your sales pipeline with drag-and-drop stages and automated progression rules.",
      icon: <TrendingUpIcon className="w-8 h-8" />,
      benefits: ["Visual pipeline", "Stage automation", "Deal tracking", "Conversion analysis"]
    },
    {
      title: "Customer Journey Mapping",
      description: "Track and analyze customer interactions across all touchpoints to optimize the sales process.",
      icon: <Activity className="w-8 h-8" />,
      benefits: ["Journey visualization", "Touchpoint analysis", "Optimization insights", "Conversion tracking"]
    }
  ];

  const crmStats = [
    { number: "35%", label: "Increase in Lead Conversion", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "50%", label: "Reduction in Manual Tasks", icon: <Zap className="w-6 h-6" /> },
    { number: "90%", label: "Sales Forecast Accuracy", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "AI-Powered Insights", icon: <Brain className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small sales teams",
      features: [
        "Up to 5 users",
        "Basic lead scoring",
        "Email integration",
        "Standard reporting",
        "Email support",
        "Up to 1,000 contacts"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for growing sales teams",
      features: [
        "Up to 25 users",
        "Advanced AI features",
        "Multi-channel communication",
        "Advanced analytics",
        "Priority support",
        "Up to 10,000 contacts",
        "API access",
        "Custom workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited users",
        "Advanced AI & ML",
        "Custom integrations",
        "Advanced reporting",
        "24/7 dedicated support",
        "Unlimited contacts",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      company: "Sales Solutions Inc.",
      role: "VP of Sales",
      content: "Zion AI CRM Pro has transformed our sales process. The AI lead scoring helped us identify high-quality prospects and increased our conversion rate by 35%.",
      rating: 5,
      avatar: "AR"
    },
    {
      name: "Maria Garcia",
      company: "Tech Startup",
      role: "Sales Manager",
      content: "The automated follow-up sequences are incredible. We've reduced manual work by 50% while improving our response rates significantly.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "James Wilson",
      company: "Enterprise Corp",
      role: "Director of Sales",
      content: "The predictive analytics give us insights we never had before. Our sales forecasting accuracy improved to 90% and we can make better strategic decisions.",
      rating: 5,
      avatar: "JW"
    }
  ];
=======
>>>>>>> origin/main
>>>>>>> origin/main

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Home - Zion Tech Group</title>
        <meta name="description" content="Home - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
  );
=======
};

export default HomePage;
>>>>>>> origin/main
