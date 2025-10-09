'use client';
import React from 'react';
import { Zap, Workflow, Bot, Settings, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Users, Award, TrendingUp, BarChart, Brain, Eye, Target, Clock, Shield, Sparkles, Play, Pause, RotateCcw } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIWorkflowAutomationPage: React.FC = () => {
  const features = [
    {
      title: 'Intelligent Process Discovery',
      description: 'Automatically identify and map your business processes using AI analysis',
      icon: Eye,
      benefits: ['Process mining', 'Bottleneck detection', 'Optimization suggestions', 'Visual process maps']
    },
    {
      title: 'Smart Workflow Builder',
      description: 'Create complex workflows with our drag-and-drop interface and AI assistance',
      icon: Workflow,
      benefits: ['Visual workflow designer', 'AI-powered suggestions', 'Conditional logic', 'Error handling']
    },
    {
      title: 'Multi-System Integration',
      description: 'Connect and automate across 500+ applications and services seamlessly',
      icon: Settings,
      benefits: ['500+ integrations', 'API connections', 'Data synchronization', 'Real-time updates']
    },
    {
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision points that learn and adapt to your business rules',
      icon: Brain,
      benefits: ['Machine learning', 'Pattern recognition', 'Adaptive rules', 'Continuous improvement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 workflows',
        'Basic integrations',
        'Standard templates',
        'Email support',
        '100 executions/month'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 25 workflows',
        'Advanced integrations',
        'Custom templates',
        'Priority support',
        '1,000 executions/month',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'All integrations',
        'Custom development',
        'Dedicated support',
        'Unlimited executions',
        'Advanced security',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const automationTypes = [
    {
      title: 'Sales Automation',
      description: 'Automate lead scoring, follow-ups, and pipeline management',
      icon: TrendingUp,
      examples: ['Lead qualification', 'Email sequences', 'CRM updates', 'Meeting scheduling']
    },
    {
      title: 'Marketing Automation',
      description: 'Streamline campaigns, content distribution, and customer engagement',
      icon: Target,
      examples: ['Campaign management', 'Social media posting', 'Content scheduling', 'A/B testing']
    },
    {
      title: 'HR Automation',
      description: 'Automate recruitment, onboarding, and employee management processes',
      icon: Users,
      examples: ['Resume screening', 'Interview scheduling', 'Onboarding workflows', 'Performance reviews']
    },
    {
      title: 'Finance Automation',
      description: 'Automate invoicing, expense management, and financial reporting',
      icon: BarChart,
      examples: ['Invoice generation', 'Expense approval', 'Financial reporting', 'Budget tracking']
    }
  ];

  const testimonials = [
    {
      name: 'Robert Wilson',
      company: 'TechFlow Solutions',
      role: 'Operations Manager',
      content: 'AI Workflow Automation reduced our manual tasks by 80%. Our team can now focus on strategic work instead of repetitive processes.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Growth Marketing Co',
      role: 'Marketing Director',
      content: 'The automation capabilities are incredible. We can now run complex marketing campaigns with minimal manual intervention.',
      rating: 5
    },
    {
      name: 'James Anderson',
      company: 'FinanceFirst',
      role: 'CFO',
      content: 'Streamlined our entire finance process. What used to take days now happens automatically in minutes.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      <Analytics />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Workflow Automation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                AI Workflow Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate complex business processes with AI-powered workflows. Connect systems, 
              eliminate manual tasks, and scale your operations intelligently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Automation Features</h2>
            <p className="text-xl text-gray-300">Everything you need to automate your business processes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Automation Solutions</h2>
            <p className="text-xl text-gray-300">Automate processes across your entire organization</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-green-400 mr-2" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your automation needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-green-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-green-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600' 
                    : 'border border-green-400 text-green-300 hover:bg-green-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by 5,000+ Companies</h2>
            <p className="text-xl text-gray-300">See what our customers say about AI Workflow Automation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Workflows?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using AI Workflow Automation to streamline operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <a href="tel:+13024640950" className="px-8 py-4 border border-green-400 text-green-300 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWorkflowAutomationPage;