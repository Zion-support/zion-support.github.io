'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, Calendar, Zap, Shield, Brain, Globe, Database, Target, Users, BarChart, Settings, Lock, Cloud, Code, FileText, MessageSquare, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, TrendingUp, CheckSquare, Award, Rocket, Layers, BarChart3, Headphones, Smartphone, HardDrive, Printer, Router } from 'lucide-react';

const ZionAiProjectManagerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with automated task allocation and timeline optimization'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Live project insights and predictive analytics for better decision making'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Advanced collaboration tools with AI-powered communication optimization'
    },
    {
      icon: Target,
      title: 'Smart Automation',
      description: 'Automated workflows and intelligent task management for maximum efficiency'
    }
  ];

  const capabilities = [
    {
      icon: Calendar,
      title: 'AI Project Planning',
      description: 'Intelligent project planning with automated resource allocation and timeline optimization',
      price: 'Included',
      features: [
        'Automated project timeline generation',
        'Resource allocation optimization',
        'Risk assessment and mitigation',
        'Dependency mapping and management',
        'Milestone tracking and alerts',
        'Capacity planning and forecasting'
      ]
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI-powered analytics for project performance prediction and optimization',
      price: 'Included',
      features: [
        'Project completion time prediction',
        'Budget variance forecasting',
        'Resource utilization analysis',
        'Quality metrics prediction',
        'Risk probability assessment',
        'Performance trend analysis'
      ]
    },
    {
      icon: Workflow,
      title: 'Smart Automation',
      description: 'Intelligent workflow automation and task management',
      price: 'Included',
      features: [
        'Automated task assignment',
        'Workflow optimization suggestions',
        'Deadline management and alerts',
        'Progress tracking automation',
        'Status update automation',
        'Approval workflow management'
      ]
    },
    {
      icon: MessageSquare,
      title: 'AI Communication',
      description: 'Smart communication tools with AI-powered insights and optimization',
      price: 'Included',
      features: [
        'Meeting scheduling optimization',
        'Communication pattern analysis',
        'Team collaboration insights',
        'Conflict resolution suggestions',
        'Knowledge sharing automation',
        'Stakeholder communication tracking'
      ]
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-powered risk identification and mitigation strategies',
      price: 'Included',
      features: [
        'Automated risk identification',
        'Risk impact assessment',
        'Mitigation strategy recommendations',
        'Early warning systems',
        'Risk trend analysis',
        'Compliance monitoring'
      ]
    },
    {
      icon: BarChart3,
      title: 'Performance Insights',
      description: 'Comprehensive project performance analytics and reporting',
      price: 'Included',
      features: [
        'Real-time performance dashboards',
        'Custom report generation',
        'Team productivity metrics',
        'Project health indicators',
        'ROI analysis and tracking',
        'Benchmark comparisons'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39/month',
      description: 'Perfect for small teams and individual projects',
      features: [
        'Up to 5 projects',
        'Up to 10 team members',
        'Basic AI planning features',
        'Standard analytics',
        'Email support',
        '5GB storage',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/month',
      description: 'Ideal for growing teams and complex projects',
      features: [
        'Up to 25 projects',
        'Up to 50 team members',
        'Advanced AI features',
        'Predictive analytics',
        'Priority support',
        '50GB storage',
        'API access',
        'Custom integrations',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$249/month',
      description: 'For large organizations and enterprise teams',
      features: [
        'Unlimited projects',
        'Unlimited team members',
        'All AI features + custom models',
        'Advanced analytics and BI',
        '24/7 dedicated support',
        'Unlimited storage',
        'White-label solution',
        'Custom AI training',
        'On-premise deployment option',
        'Advanced security features'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce project planning time by 80% with AI automation',
    'Improve project success rate by 40% with predictive analytics',
    'Optimize resource allocation and reduce costs by 30%',
    'Automated risk detection and mitigation strategies',
    'Real-time collaboration and communication optimization',
    'Comprehensive project insights and performance tracking',
    'Scalable solution that grows with your organization',
    'Integration with 100+ popular business tools'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Project Manager - Intelligent Project Management Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management platform. Automate planning, optimize resources, and predict project success with intelligent analytics." />
        <meta name="keywords" content="AI project management, project planning, team collaboration, project analytics, workflow automation, project optimization" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Zion AI Project Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your project management with AI-powered planning, automation, and analytics. 
              Achieve better results with intelligent project optimization and team collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Project Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI technology revolutionizes how you plan, execute, and optimize projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Project Management Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered features for intelligent project management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-6">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300 mb-4">{capability.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your project management needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-purple-500/10 scale-105' 
                  : 'border-white/20 hover:bg-white/20'
              }`}>
                {plan.popular && (
                  <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-8">
                  {plan.price}
                  <span className="text-lg text-gray-400 font-normal">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion AI Project Manager?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of project management with AI-powered automation and optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start your free trial today and experience the power of AI-driven project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAiProjectManagerPage;