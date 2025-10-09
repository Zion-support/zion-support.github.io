'use client';
import React from 'react';
import { TrendingUp, Users, Target, BarChart, Phone, Mail, CheckCircle, ArrowRight, Zap, Star, Shield } from 'lucide-react';

const SalesCRMToolsPage: React.FC = () => {
  const tools = [
    {
      name: 'AI Lead Scoring',
      description: 'Intelligent lead scoring that predicts conversion probability with 95% accuracy using machine learning algorithms.',
      features: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Conversion prediction', 'Custom scoring models'],
      price: '$79/month',
      icon: Target,
      color: 'text-green-500'
    },
    {
      name: 'Smart Email Sequences',
      description: 'Automated email campaigns that adapt based on recipient behavior and engagement patterns.',
      features: ['Dynamic content', 'A/B testing', 'Behavior triggers', 'Personalization', 'Performance analytics'],
      price: '$59/month',
      icon: Mail,
      color: 'text-blue-500'
    },
    {
      name: 'Sales Pipeline Manager',
      description: 'Visual pipeline management with automated stage progression and deal forecasting.',
      features: ['Visual pipeline', 'Stage automation', 'Deal forecasting', 'Revenue tracking', 'Custom fields'],
      price: '$99/month',
      icon: TrendingUp,
      color: 'text-purple-500'
    },
    {
      name: 'Customer Analytics Dashboard',
      description: 'Comprehensive customer insights with lifetime value analysis and churn prediction.',
      features: ['Customer segmentation', 'LTV analysis', 'Churn prediction', 'Engagement metrics', 'Custom reports'],
      price: '$89/month',
      icon: BarChart,
      color: 'text-cyan-500'
    },
    {
      name: 'Automated Follow-ups',
      description: 'Smart follow-up system that never lets a lead go cold with intelligent timing and messaging.',
      features: ['Smart timing', 'Multi-channel', 'Template library', 'Escalation rules', 'Performance tracking'],
      price: '$49/month',
      icon: Phone,
      color: 'text-orange-500'
    },
    {
      name: 'Team Performance Tracker',
      description: 'Real-time sales team performance monitoring with gamification and coaching insights.',
      features: ['Performance metrics', 'Gamification', 'Coaching insights', 'Goal tracking', 'Team leaderboards'],
      price: '$69/month',
      icon: Users,
      color: 'text-red-500'
    }
  ];

  const benefits = [
    {
      title: 'Increase Sales by 35%',
      description: 'AI-powered tools help you close more deals and identify the best opportunities',
      icon: TrendingUp
    },
    {
      title: 'Save 20+ Hours Weekly',
      description: 'Automation handles routine tasks, letting you focus on high-value activities',
      icon: Zap
    },
    {
      title: 'Improve Lead Quality',
      description: 'Smart scoring ensures you spend time on leads most likely to convert',
      icon: Star
    },
    {
      title: 'Boost Team Performance',
      description: 'Analytics and gamification motivate your team to achieve better results',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sales & CRM Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Supercharge your sales process with AI-powered CRM tools. 
            Close more deals, nurture better relationships, and grow your revenue faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <tool.icon className={`w-8 h-8 ${tool.color} mr-3`} />
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <ul className="space-y-2 mb-4">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Sales Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Boost Your Sales?
          </h2>
          <p className="text-xl text-cyan-100 mb-6">
            Join 1,000+ sales teams already using our tools to close more deals and grow faster.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (302) 464-0950
          </a>
        </div>
      </section>
    </div>
  );
};

export default SalesCRMToolsPage;
