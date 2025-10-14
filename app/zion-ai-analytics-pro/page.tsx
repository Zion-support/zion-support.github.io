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
import { ArrowRight, BarChart3, Brain, Star, Users, Award, Zap, Shield, Smartphone, Globe, Mail, Phone, TrendingUp, Database, Settings, Monitor, Cpu, Sparkles, Target, Calendar, FileText, Clock } from 'lucide-react';

export default function ZionAiAnalyticsPro() {
  const features = [
    {
      title: "Real-time Analytics Dashboard",
      description: "Monitor your business performance with live dashboards that update in real-time, providing instant insights into key metrics and KPIs.",
      icon: <Monitor className="w-8 h-8" />,
      benefits: ["Live data updates", "Customizable widgets", "Mobile-responsive design", "Export capabilities"]
    },
    {
      title: "Predictive Modeling & Forecasting",
      description: "Leverage advanced AI algorithms to predict future trends, forecast sales, and identify opportunities before they happen.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Sales forecasting", "Trend prediction", "Risk assessment", "Opportunity identification"]
    },
    {
      title: "Custom Report Generation",
      description: "Create detailed, professional reports automatically with our AI-powered report generator that adapts to your business needs.",
      icon: <FileText className="w-8 h-8" />,
      benefits: ["Automated scheduling", "Custom templates", "Multiple formats", "Brand customization"]
    },
    {
      title: "API Integration & Data Connectors",
      description: "Connect seamlessly with over 100+ business applications and data sources to centralize all your business intelligence.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["100+ integrations", "Real-time sync", "Data transformation", "Secure connections"]
    },
    {
      title: "Mobile App Access",
      description: "Access your analytics anywhere with our native mobile apps for iOS and Android, featuring offline capabilities.",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Native mobile apps", "Offline access", "Push notifications", "Touch-optimized UI"]
    },
    {
      title: "White-label Solutions",
      description: "Rebrand our analytics platform as your own with complete white-label customization options for agencies and resellers.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Custom branding", "Domain mapping", "API access", "Reseller tools"]
=======
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Sparkles, 
  Award, 
  Phone, 
  Mail, 
  MapPin,
  Database,
  Cpu,
  Globe,
  Target,
  Calendar
} from "lucide-react";

const ZionAIAnalyticsProPage = () => {
  const features = [
    {
      title: "Real-Time Analytics Dashboard",
      description: "Monitor your business performance with live data visualization and instant insights across all key metrics.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Predictive Modeling",
      description: "Leverage machine learning algorithms to forecast trends, identify opportunities, and make data-driven decisions.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Dashboard Builder",
      description: "Create personalized dashboards tailored to your business needs with drag-and-drop functionality.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced API Integration",
      description: "Seamlessly connect with 100+ business tools and platforms for comprehensive data aggregation.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Automated Insights Generation",
      description: "Get AI-generated reports and recommendations delivered automatically to your inbox.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
<<<<<<< HEAD
      period: "month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "Basic dashboards",
        "Standard reports",
        "Email support",
        "1 user account"
=======
      period: "per month",
      description: "Perfect for small businesses getting started with analytics",
      features: [
        "Up to 5 data sources",
        "Basic dashboard templates",
        "Standard support",
        "Monthly reports",
        "Email notifications"
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
<<<<<<< HEAD
      period: "month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 25 data sources",
        "Advanced dashboards",
        "Custom reports",
        "Priority support",
        "Up to 10 user accounts",
        "API access",
        "Mobile apps"
=======
      period: "per month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 20 data sources",
        "Custom dashboard builder",
        "AI-powered insights",
        "Real-time alerts",
        "Priority support",
        "API access"
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
<<<<<<< HEAD
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited data sources",
        "Custom dashboards",
        "Advanced AI features",
        "24/7 dedicated support",
        "Unlimited user accounts",
        "White-label options",
=======
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited data sources",
        "Advanced AI modeling",
        "White-label options",
        "Dedicated support",
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
        "Custom integrations",
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
<<<<<<< HEAD
      content: "Zion AI Analytics Pro transformed our decision-making process. We can now see trends before they happen and make data-driven decisions with confidence.",
=======
      content: "Zion AI Analytics Pro transformed our data analysis. We've increased our decision-making speed by 300% and identified new revenue opportunities worth $2M annually.",
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CTO",
<<<<<<< HEAD
      content: "The predictive analytics feature helped us increase our sales by 40% in just 3 months. The ROI was immediate and substantial.",
=======
      content: "The predictive modeling capabilities are incredible. We can now forecast sales with 95% accuracy and optimize our inventory accordingly.",
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
<<<<<<< HEAD
      content: "The real-time dashboards give us instant visibility into campaign performance. Our team productivity increased by 60%.",
=======
      content: "The custom dashboard builder saved us months of development time. We can now create client reports in minutes instead of hours.",
>>>>>>> cursor/analyze-improve-and-deploy-application-9c39
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
<<<<<<< HEAD
    { number: "40%", label: "Increase in Decision Speed", icon: <Zap className="w-6 h-6" /> },
    { number: "60%", label: "Reduction in Manual Reporting", icon: <FileText className="w-6 h-6" /> },
    { number: "99.9%", label: "Data Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Real-time Monitoring", icon: <Monitor className="w-6 h-6" /> }
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
