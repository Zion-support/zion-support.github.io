'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Workflow, Zap, Brain, BarChart, Clock, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Database, Globe } from 'lucide-react';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns from your workflows and optimizes them continuously.',
      benefits: ['Process Learning', 'Automatic Optimization', 'Exception Handling', 'Performance Monitoring']
    },
    {
      icon: Settings,
      title: 'Workflow Designer',
      description: 'Visual workflow designer that allows you to create complex automation workflows without coding.',
      benefits: ['Drag & Drop Interface', 'Visual Logic Builder', 'Template Library', 'Testing Tools']
    },
    {
      icon: Clock,
      title: 'Real-time Monitoring',
      description: 'Monitor your automated workflows in real-time with detailed analytics and performance metrics.',
      benefits: ['Live Monitoring', 'Performance Metrics', 'Error Tracking', 'Alert System']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on workflow design and management with role-based access control.',
      benefits: ['Role-based Access', 'Version Control', 'Comment System', 'Approval Workflows']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small teams',
      features: ['Up to 10 workflows', 'Basic automation', 'Email support', 'Standard integrations']
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 50 workflows', 'Advanced automation', 'Phone & email support', 'Advanced integrations', 'Analytics dashboard']
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: ['Unlimited workflows', 'Custom automation', '24/7 support', 'Custom integrations', 'Advanced analytics', 'Dedicated account manager']
    }
  ];

  const stats = [
    { number: '80%', label: 'Time Savings' },
    { number: '90%', label: 'Error Reduction' },
    { number: '24/7', label: 'Automation' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Workflow Automation Solutions - Zion Tech Group"
        description="Revolutionary AI-powered workflow automation that learns, adapts, and optimizes your business processes. Increase efficiency by 80% and reduce errors by 90%."
        keywords={['AI workflow automation', 'business process automation', 'workflow optimization', 'intelligent automation', 'process management']}
        canonicalUrl="https://ziontechgroup.com/ai-workflow-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Workflow Automation Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Automate complex business workflows with AI-powered intelligence
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered workflow automation platform learns from your processes, adapts to changes, 
                and continuously optimizes your workflows to maximize efficiency and minimize errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default AIWorkflowAutomationPage;