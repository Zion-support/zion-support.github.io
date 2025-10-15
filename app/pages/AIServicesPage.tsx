import React from "react";
import { Helmet } from 'react-helmet-async';
import { Icon } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies tailored to your business objectives and industry requirements.",
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Planning"]
    },
    {
      icon: Bot,
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that enhance customer experience and automate support.",
      features: ["Natural Language Processing", "Multi-channel Integration", "Sentiment Analysis", "24/7 Availability"]
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict trends, behaviors, and outcomes for better decision making.",
      features: ["Data Mining", "Pattern Recognition", "Forecasting Models", "Real-time Insights"]
    },
    {
      icon: Shield,
      title: "AI Security Solutions",
      description: "Protect your AI systems and data with advanced security measures and compliance frameworks.",
      features: ["Threat Detection", "Data Privacy", "Model Security", "Compliance Management"]
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows using AI to increase efficiency and reduce costs.",
      features: ["Workflow Automation", "Document Processing", "Data Entry Automation", "Quality Control"]
    },
    {
      icon: Target,
      title: "Computer Vision",
      description: "Implement visual recognition systems for quality control, security, and enhanced user experiences.",
      features: ["Image Recognition", "Object Detection", "Facial Recognition", "Quality Inspection"]
    }
  ];
  return (
    
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and automation solutions." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, automation, artificial intelligence" />
      </Helmet>
      
        <div className="container mx-auto px-4 py-16">
        
        <div className="text-center mb-16">
          
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions.
            From strategy to implementation, we help you harness the power of AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
  
  );
}
}}