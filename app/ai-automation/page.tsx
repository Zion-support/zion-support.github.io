'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Zap, Brain, Settings, BarChart, Clock, Shield, Users, CheckCircle, Star, ArrowRight, Phone, Mail, Target, Database, Globe } from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes',
      benefits: ['90% process automation', 'Intelligent decision making', 'Continuous learning']
    },
    {
      icon: Settings,
      title: 'Workflow Optimization',
      description: 'Automatically optimize workflows for maximum efficiency and productivity',
      benefits: ['50% time savings', 'Error reduction', 'Scalable processes']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI-driven insights and predictions to optimize business operations',
      benefits: ['Real-time insights', 'Predictive maintenance', 'Performance optimization']
    },
    {
      icon: Clock,
      title: '24/7 Operations',
      description: 'Round-the-clock automation that never stops working for your business',
      benefits: ['Continuous operation', 'No downtime', 'Always available']
    }
  ];

  const automationTypes = [
    {
      title: 'Business Process Automation',
      description: 'Automate repetitive business processes with intelligent decision-making capabilities',
      examples: ['Invoice processing', 'Customer onboarding', 'Order fulfillment', 'Data entry'],
      icon: '📋',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'IT Operations Automation',
      description: 'Automate IT infrastructure management and maintenance tasks',
      examples: ['Server monitoring', 'Backup management', 'Security updates', 'Performance tuning'],
      icon: '⚙️',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Customer Service Automation',
      description: 'Intelligent customer service automation with natural language processing',
      examples: ['Chatbot responses', 'Ticket routing', 'FAQ automation', 'Sentiment analysis'],
      icon: '💬',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Marketing Automation',
      description: 'AI-powered marketing automation for personalized customer experiences',
      examples: ['Email campaigns', 'Social media posting', 'Lead scoring', 'Content generation'],
      icon: '📢',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 60% through intelligent automation'
    },
    {
      title: 'Increased Efficiency',
      description: 'Boost productivity by 300% with automated workflows and processes'
    },
    {
      title: 'Error Elimination',
      description: 'Eliminate human errors and ensure consistent, accurate results'
    },
    {
      title: 'Scalable Growth',
      description: 'Scale your operations without proportional increases in staff'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Automation - Zion Tech Group"
        description="Intelligent process automation solutions powered by AI. Automate business processes, workflows, and operations with 90% efficiency gains."
        keywords={['AI automation', 'process automation', 'workflow automation', 'business automation', 'intelligent automation']}
        canonicalUrl="https://ziontechgroup.com/ai-automation"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Automation Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your business with intelligent automation that learns, adapts, and optimizes your processes 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Free Automation Audit
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose AI Automation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Automation Types */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Types of AI Automation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center mr-6`}>
                    <span className="text-2xl">{type.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="cyber-card p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Process Automation</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Efficiency Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Continuous Operation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact our AI automation experts for a free consultation and discover how intelligent automation can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              ✉️ Email Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAutomationPage;