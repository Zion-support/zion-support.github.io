'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Zap, Cog, Target, ArrowRight, CheckCircle, TrendingUp, Shield, Clock, Award } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mining', 'Bottleneck detection', 'Efficiency analysis']
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Create intelligent workflows that adapt and learn from your business patterns.',
      benefits: ['Dynamic routing', 'Exception handling', 'Self-optimization']
    },
    {
      icon: Cog,
      title: 'Robotic Process Automation',
      description: 'Deploy software robots to handle repetitive tasks with human-like precision.',
      benefits: ['UI automation', 'Data extraction', 'System integration']
    },
    {
      icon: Target,
      title: 'Predictive Automation',
      description: 'Anticipate needs and trigger automated responses before issues arise.',
      benefits: ['Proactive alerts', 'Preventive maintenance', 'Smart scheduling']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'AI-powered chatbots and ticket routing that resolve 80% of inquiries automatically.',
      metrics: '80% reduction in response time'
    },
    {
      title: 'Financial Process Automation',
      description: 'Automated invoice processing, expense management, and financial reporting.',
      metrics: '95% accuracy in data processing'
    },
    {
      title: 'HR & Recruitment Automation',
      description: 'Intelligent resume screening, interview scheduling, and onboarding workflows.',
      metrics: '60% faster hiring process'
    },
    {
      title: 'Sales & Marketing Automation',
      description: 'Lead scoring, email campaigns, and customer journey optimization.',
      metrics: '3x increase in conversion rates'
    }
  ];

  const benefits = [
    { icon: TrendingUp, text: '300% average productivity increase' },
    { icon: Clock, text: '90% reduction in manual tasks' },
    { icon: Shield, text: '99.9% accuracy in automated processes' },
    { icon: Award, text: 'ROI within 3 months' }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 rounded-full px-4 py-2 mb-8">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">AI Automation Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Intelligent Process
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Automation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your business with AI-powered automation that learns, adapts, and optimizes your processes in real-time. 
                Reduce costs, increase efficiency, and eliminate human error.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="cyber-button-enhanced px-8 py-4 text-lg">
                  Start Automation Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  View Case Studies
                </button>
              </div>

              {/* Benefits Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-white font-semibold text-sm">{benefit.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Advanced AI Automation Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI automation platform combines machine learning, process mining, and intelligent workflow orchestration 
                to deliver unprecedented business efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:cyber-glow-effect transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Real-World Automation Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading organizations are transforming their operations with our AI automation solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="flex items-center text-cyan-400 font-semibold">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    {useCase.metrics}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center cyber-card p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of companies already using AI automation to transform their operations. 
                Get started with a free consultation and process analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button-enhanced px-8 py-4 text-lg">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg">
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIAutomationPage;
