import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import {
  ArrowRight, 

  BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  Brain, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Database,
  Settings,
  Sparkles,
  Lightbulb
} from "lucide-react";

export default function page() {
  const benefits: string[] = [];
  
  const analyticsStats = [
    {
      label: "Data Points Processed", value: "2.5M+", icon: <BarChart3 className="w-6 h-6" />
    },
    { label: "Real-time Updates", value: "99.9%", icon: <Zap className="w-6 h-6" /> },
    { label: "Accuracy Rate", value: "98.5%", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Processing Speed", value: "50ms", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechCorp",
      content: "Zion's AI analytics platform has revolutionized our data processing capabilities.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc",
      content: "The real-time insights and predictive analytics are game-changing for our business.",
      rating: 5,
      avatar: "MC"
    }
  ];

  const features = [
    {
      title: "Real-time Data Processing",
      description: "Process and analyze data in real-time with our advanced AI algorithms that provide instant insights and actionable intelligence.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Instant data processing", "Real-time dashboards", "Live monitoring", "Immediate alerts"]
    },
    {
      title: "Predictive Analytics",
      description: "Leverage machine learning models to predict future trends, behaviors, and outcomes with high accuracy.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Trend forecasting", "Behavior prediction", "Risk assessment", "Opportunity identification"]
    },
    {
      title: "Advanced Data Visualization",
      description: "Transform complex data into intuitive, interactive visualizations that make insights accessible to everyone.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Interactive charts", "Custom dashboards", "Mobile-responsive", "Export capabilities"]
    },
    {
      title: "Automated Insights Generation",
      description: "AI automatically generates insights and recommendations based on your data patterns and business context.",
      icon: <Lightbulb className="w-8 h-8" />,
      benefits: ["Smart recommendations", "Pattern recognition", "Anomaly detection", "Automated reporting"]
    },
    {
      title: "Multi-source Data Integration",
      description: "Connect and analyze data from multiple sources including databases, APIs, files, and cloud services.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["100+ integrations", "Data transformation", "Real-time sync", "Unified data model"]
    },
    {
      title: "Custom AI Models",
      description: "Build and deploy custom machine learning models tailored to your specific business needs and data patterns.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Custom model training", "Model deployment", "Performance monitoring", "Continuous learning"]
    }
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

  return (
    <div>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics platform with real-time insights and predictive modeling." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Analytics Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your data into actionable insights with our advanced AI analytics platform. 
            Get real-time predictions, automated reporting, and intelligent recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-cyan-500/30 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Demo
              <Target className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics platform provides everything you need to make data-driven decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Get instant insights from your data with real-time processing and visualization
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Predictions</h3>
              <p className="text-gray-300">
                Leverage machine learning to predict trends and make proactive decisions
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-purple-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Compliant</h3>
              <p className="text-gray-300">
                Enterprise-grade security with full compliance and data protection
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;