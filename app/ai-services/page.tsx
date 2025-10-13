<<<<<<< HEAD
import React from "react";
import { Helmet } from "react-helmet-async";

export default function AIServices() {
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, Shield, BarChart3, Code, Database, Users, ArrowRight, Sparkles } from 'lucide-react';

const AIServicesPage = () => {
  const aiServices = [
    {
      title: "AI Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics",
      features: ["Predictive Analytics", "Real-time Insights", "Custom Dashboards"]
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools.",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation",
      features: ["Automated Writing", "SEO Optimization", "Multi-language Support"]
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-driven security solutions and threat detection.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity",
      features: ["Threat Detection", "Automated Response", "24/7 Monitoring"]
    },
    {
      title: "AI Customer Support",
      description: "Enhance customer experience with intelligent chatbots and support automation.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-customer-support",
      features: ["Smart Chatbots", "Sentiment Analysis", "Multi-channel Support"]
    },
    {
      title: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI analytics and machine learning.",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-data-analytics",
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling"]
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent workflow automation.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/ai-workflow-automation",
      features: ["Process Optimization", "Task Automation", "Smart Routing"]
    }
  ];

>>>>>>> 3a0c14507e7fb2ceadeeae23292a951fd32ccfd0
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="AI Services page coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">AI Services</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
}
