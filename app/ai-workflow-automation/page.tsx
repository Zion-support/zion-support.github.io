'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Target, BarChart, CheckCircle, ArrowRight, Clock, Users, Shield, Workflow, Settings, TrendingUp, FileText } from 'lucide-react';

const AiWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization',
      benefits: ['Process Mining', 'Bottleneck Detection', 'Efficiency Analysis', 'Automated Mapping']
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Automate complex workflows with intelligent decision-making capabilities',
      benefits: ['Rule-based Automation', 'AI Decision Making', 'Exception Handling', 'Dynamic Routing']
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Continuously optimize workflows based on real-time performance data',
      benefits: ['Real-time Monitoring', 'Performance Analytics', 'Auto-optimization', 'Predictive Insights']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into workflow performance and efficiency metrics',
      benefits: ['Workflow Analytics', 'ROI Tracking', 'Performance Dashboards', 'Custom Reports']
    }
  ];

  const workflowTypes = [
    {
      icon: Workflow,
      title: 'Business Process Automation',
      description: 'Automate end-to-end business processes and workflows',
      benefits: ['Process optimization', 'Task automation', 'Workflow orchestration', 'Exception handling']
    },
    {
      icon: Settings,
      title: 'IT Operations Automation',
      description: 'Automate IT operations and infrastructure management',
      benefits: ['Deployment automation', 'Monitoring automation', 'Incident response', 'Maintenance tasks']
    },
    {
      icon: Users,
      title: 'HR Workflow Automation',
      description: 'Streamline human resources processes and workflows',
      benefits: ['Onboarding automation', 'Leave management', 'Performance reviews', 'Compliance tracking']
    },
    {
      icon: FileText,
      title: 'Document Workflow Automation',
      description: 'Automate document processing and approval workflows',
      benefits: ['Document routing', 'Approval automation', 'Version control', 'Compliance tracking']
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Increase process efficiency by 60%',
    'Eliminate human errors and delays',
    'Scale operations without proportional staff increases',
    'Real-time process monitoring and optimization',
    'Seamless integration with existing systems'
  ];

  const stats = [
    { number: '80%', label: 'Manual Work Reduction', icon: Zap },
    { number: '60%', label: 'Efficiency Increase', icon: TrendingUp },
    { number: '24/7', label: 'Process Monitoring', icon: Clock },
    { number: '50+', label: 'Workflows Automated', icon: Workflow }
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business processes with AI-powered workflow automation. Intelligent process discovery, smart automation, and performance optimization." />
        <meta name="keywords" content="AI workflow automation, process automation, business process management, workflow optimization, intelligent automation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business processes with AI-powered workflow automation. Intelligent process discovery, smart automation, and performance optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Workflow Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI workflow automation solutions cover all aspects of your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Workflow Automation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered workflow automation platform provides intelligent solutions to optimize your business processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business processes with AI-driven workflow automation and achieve unprecedented efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI workflow automation journey today and transform your business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AiWorkflowAutomationPage;