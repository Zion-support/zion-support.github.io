'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Settings, Clock, Users, Shield, BarChart, ArrowRight, Brain, Cloud, Database, Eye, Sparkles } from 'lucide-react';

const AIOpsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Monitoring',
      description: 'AI-powered monitoring that learns from your infrastructure patterns and predicts issues before they occur.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Automated alerting', 'Root cause analysis']
    },
    {
      icon: Zap,
      title: 'Automated Remediation',
      description: 'Self-healing infrastructure that automatically resolves common issues without human intervention.',
      benefits: ['Auto-scaling', 'Self-recovery', 'Automated patching', 'Incident response']
    },
    {
      icon: Settings,
      title: 'Configuration Management',
      description: 'Intelligent configuration management that ensures consistency and compliance across your environment.',
      benefits: ['Drift detection', 'Compliance monitoring', 'Automated updates', 'Version control']
    },
    {
      icon: Clock,
      title: 'Performance Optimization',
      description: 'Continuous optimization of your infrastructure performance using machine learning algorithms.',
      benefits: ['Resource optimization', 'Load balancing', 'Capacity planning', 'Cost optimization']
    }
  ];

  const capabilities = [
    {
      title: 'Infrastructure Monitoring',
      description: 'Comprehensive monitoring of servers, networks, applications, and cloud resources',
      icon: Eye
    },
    {
      title: 'Log Analysis',
      description: 'AI-powered log analysis to identify patterns, anomalies, and security threats',
      icon: Database
    },
    {
      title: 'Incident Management',
      description: 'Automated incident detection, classification, and resolution workflows',
      icon: Shield
    },
    {
      title: 'Capacity Planning',
      description: 'Predictive capacity planning based on usage patterns and growth trends',
      icon: BarChart
    },
    {
      title: 'Security Operations',
      description: 'AI-driven security monitoring and threat detection across your infrastructure',
      icon: Shield
    },
    {
      title: 'Cloud Management',
      description: 'Multi-cloud management with intelligent resource allocation and cost optimization',
      icon: Cloud
    }
  ];

  const benefits = [
    'Reduce downtime by up to 90%',
    'Improve incident response time by 75%',
    'Lower operational costs by 40%',
    'Increase system reliability and availability',
    'Automate routine maintenance tasks',
    'Enhance security posture with AI-driven threat detection',
    'Optimize resource utilization and costs',
    'Provide 24/7 intelligent monitoring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Operations - Zion Tech Group | Intelligent IT Operations</title>
        <meta name="description" content="Transform your IT operations with AI-powered monitoring, automation, and intelligent management solutions. Reduce downtime and improve efficiency." />
        <meta name="keywords" content="AI operations, IT operations, intelligent monitoring, automated remediation, infrastructure management, AIOps" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI-Powered
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Operations
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your IT operations with intelligent automation, predictive monitoring, 
            and self-healing infrastructure powered by artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Sparkles className="inline-block mr-2 w-5 h-5" />
              Get AIOps Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent IT Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AIOps platform combines machine learning, automation, and intelligent analytics 
              to revolutionize how you manage your IT infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-gray-300 text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AIOps Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered operations management across your entire IT infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <capability.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                </div>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose AIOps?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of AI-driven IT operations management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how AIOps can revolutionize your IT operations and deliver unprecedented 
            efficiency, reliability, and cost savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Brain className="inline-block mr-2 w-5 h-5" />
              Start AIOps Journey
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <ArrowRight className="inline-block mr-2 w-5 h-5" />
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIOpsPage;