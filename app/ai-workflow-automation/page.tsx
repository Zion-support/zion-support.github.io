'use client';
import React from 'react';
import Link from 'next/link';
import { Workflow, Brain, Zap, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Settings } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate complex business workflows with intelligent decision-making',
      benefits: ['End-to-end automation', 'Smart routing', 'Exception handling']
    },
    {
      icon: Brain,
      title: 'AI Decision Engine',
      description: 'AI-powered decision making for workflow optimization and routing',
      benefits: ['Intelligent routing', 'Risk assessment', 'Performance optimization']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process workflows in real-time with instant notifications and updates',
      benefits: ['Instant processing', 'Live monitoring', 'Automatic escalations']
    }
  ];

  const workflowTypes = [
    {
      title: 'Approval Workflows',
      description: 'Streamline approval processes with intelligent routing and notifications',
      icon: CheckCircle,
      features: ['Multi-level approvals', 'Auto-escalation', 'Compliance tracking']
    },
    {
      title: 'Data Processing',
      description: 'Automate data collection, validation, and processing workflows',
      icon: Settings,
      features: ['Data validation', 'Format conversion', 'Quality checks']
    },
    {
      title: 'Customer Onboarding',
      description: 'Automate customer onboarding and account setup processes',
      icon: Users,
      features: ['Account creation', 'Document collection', 'Welcome sequences']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Workflow Automation
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Streamline your business processes with intelligent workflow automation. 
              Reduce manual work by 85% while improving accuracy and speed with AI-powered 
              decision-making and process optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Automate Your Workflows
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                See It In Action
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Intelligent Workflow Automation</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform combines process intelligence, 
              machine learning, and real-time optimization to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Types Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Workflow Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate any business process with our comprehensive workflow solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Workflow Automation?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">85% Time Savings</h3>
                    <p className="text-gray-300">Reduce manual work and processing time by up to 85%</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Error Reduction</h3>
                    <p className="text-gray-300">Eliminate human errors with automated validation and checks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>
                    <p className="text-gray-300">Track workflow performance and bottlenecks in real-time</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Automate Your Workflows?</h3>
              <p className="text-gray-300 mb-6">
                Get a free workflow analysis and discover how much time and money 
                you can save with automation.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Get Free Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Business Processes
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop wasting time on repetitive tasks. Our AI workflow automation will help you 
            work smarter, faster, and more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIWorkflowAutomationPage;