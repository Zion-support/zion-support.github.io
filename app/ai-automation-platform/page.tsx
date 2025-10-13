<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import React from "react";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======


import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7665

export default function aiAutomationPlatform() {
=======
import React from 'react';
import { 
  BarChart3, 
  Cloud, 
  Users, 
  ArrowRight,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Settings,
  Workflow,
  Target,
  TrendingUp,
  Settings,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ad48
import { Helmet } from 'react-helmet-async';

const AIAutomationPlatformPage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Workflow Automation",
      description: "Automate complex business processes with AI that learns and adapts to your specific needs",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Analytics",
      description: "Make data-driven decisions with AI-powered insights and forecasting capabilities",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with your existing cloud infrastructure and third-party services",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    "Reduce manual work by 80%",
    "Increase productivity by 300%",
    "Eliminate human errors",
    "24/7 automated operations",
    "Real-time monitoring",
    "Scalable solutions"
  ];

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "Automate ticket routing, response generation, and escalation processes",
      icon: <Users className="w-6 h-6" />,
      industry: "Customer Service"
    },
    {
      title: "Financial Process Automation",
      description: "Automate invoice processing, expense management, and financial reporting",
      icon: <Database className="w-6 h-6" />,
      industry: "Finance"
    },
    {
      title: "HR & Recruitment",
      description: "Streamline candidate screening, onboarding, and employee management",
      icon: <Code className="w-6 h-6" />,
      industry: "Human Resources"
    },
    {
      title: "Marketing Automation",
      description: "Automate campaign management, lead scoring, and customer segmentation",
      icon: <Target className="w-6 h-6" />,
      industry: "Marketing"
    }
  ];

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics platform with real-time insights and predictive modeling." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
<<<<<<< HEAD
=======
import {
  BarChart3,
  Cloud,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Settings,
  Workflow,
  Target
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44

export default function AiautomationplatformPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>AI Automation Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced AI automation platform for business process optimization" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Ai Automation Platform</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
=======
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Ai Automation Platform</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
        <h1 className="text-4xl font-bold mb-8">Ai Automation Platform</h1>
        <div className="prose prose-invert max-w-none">
=======

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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Analytics?
          </h2>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies using our AI analytics platform to make better decisions
          </p>
<<<<<<< HEAD
          
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            Start Your Free Trial
            <Zap className="w-5 h-5 ml-2" />
          </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
};

export default AIAutomationPlatformPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
