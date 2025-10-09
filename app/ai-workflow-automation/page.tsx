'use client';
import React from 'react';
import { Workflow, Zap, Target, BarChart, Users, Clock, CheckCircle, ArrowRight, Star, Shield, TrendingUp, Settings } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Smart Workflow Design',
      description: 'AI-powered workflow builder that automatically creates optimal processes based on your business requirements.'
    },
    {
      icon: Zap,
      title: 'Intelligent Process Execution',
      description: 'Automated workflow execution with AI decision-making capabilities that adapt to changing conditions.'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of workflows to ensure maximum efficiency and minimal bottlenecks.'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics dashboard providing insights into workflow performance and optimization opportunities.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools that enable teams to work together on complex workflows and processes.'
    },
    {
      icon: Clock,
      title: 'Scheduled Automation',
      description: 'Advanced scheduling capabilities that allow workflows to run at optimal times based on business needs.'
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Reduce workflow completion time by 70%' },
    { icon: CheckCircle, text: 'Eliminate manual process bottlenecks' },
    { icon: CheckCircle, text: 'Improve team productivity by 250%' },
    { icon: CheckCircle, text: 'Ensure consistent process execution' },
    { icon: CheckCircle, text: 'Enable real-time process monitoring' },
    { icon: CheckCircle, text: 'Scale workflows automatically' }
  ];

  const workflowTypes = [
    {
      title: 'Document Processing',
      description: 'Automated document review, approval, and routing workflows',
      icon: Settings
    },
    {
      title: 'Customer Onboarding',
      description: 'Streamlined customer onboarding with automated verification and setup',
      icon: Users
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoice processing, payment workflows, and financial reporting',
      icon: TrendingUp
    },
    {
      title: 'HR Processes',
      description: 'Employee onboarding, performance reviews, and leave management automation',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Workflow Automation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business processes with intelligent workflow automation. 
              Design, execute, and optimize workflows that adapt to your business needs and scale automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Workflow className="w-5 h-5 mr-2" />
                Start Building Workflows
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Examples
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">70%</div>
              <div className="text-gray-300">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">250%</div>
              <div className="text-gray-300">Productivity Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Automation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Workflow Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build intelligent workflows that adapt, learn, and optimize automatically
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Workflow Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of intelligent workflow automation that transforms your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <benefit.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Workflow Types We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple approvals to complex multi-step processes, we handle it all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowTypes.map((workflow, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <workflow.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{workflow.title}</h3>
                <p className="text-gray-300">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start building intelligent workflows that transform your business processes today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Workflow className="w-5 h-5 mr-2" />
                Get Started Now
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWorkflowAutomationPage;