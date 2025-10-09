'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, ArrowRight, Brain, Target, BarChart, Mail, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI systems',
      icon: Zap,
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Error handling'],
      benefits: ['80% time savings', 'Reduced errors', '24/7 operation', 'Cost reduction'],
      price: 'Starting at $299/month'
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and support systems for enhanced customer experience',
      icon: Users,
      features: ['Chatbot integration', 'Ticket routing', 'Response generation', 'Sentiment analysis'],
      benefits: ['Instant responses', '24/7 availability', 'Consistent service', 'Scalable support'],
      price: 'Starting at $199/month'
    },
    {
      title: 'Data Analysis Automation',
      description: 'Automated data processing, analysis, and reporting with AI insights',
      icon: BarChart,
      features: ['Data collection', 'Pattern recognition', 'Report generation', 'Trend analysis'],
      benefits: ['Faster insights', 'Accurate predictions', 'Automated reporting', 'Data-driven decisions'],
      price: 'Starting at $399/month'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Workflow Optimization",
      description: "AI-powered workflow analysis and optimization for maximum productivity",
      benefits: ["60% time savings", "Smart routing", "Dynamic optimization"]
    },
    {
      title: 'Marketing Automation',
      description: 'Intelligent marketing campaigns and customer engagement automation',
      icon: Target,
      features: ['Campaign optimization', 'Personalization', 'A/B testing', 'Performance tracking'],
      benefits: ['Higher conversion', 'Better targeting', 'Reduced manual work', 'ROI optimization'],
      price: 'Starting at $249/month'
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '300%', label: 'ROI Increase' },
    { icon: Clock, value: '80%', label: 'Time Savings' },
    { icon: Shield, value: '99.9%', label: 'Reliability' },
    { icon: Users, value: '10K+', label: 'Processes Automated' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI automation solutions. Automate processes, reduce costs, and increase efficiency with our intelligent automation services." />
        <meta name="keywords" content="AI automation, process automation, business automation, intelligent workflows, AI chatbots" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
              Transform your business with intelligent automation that works 24/7
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <service.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomationPage;
