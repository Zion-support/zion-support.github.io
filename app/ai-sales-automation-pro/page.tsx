'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Target, 
  TrendingUp, 
  Zap, 
  Users, 
  BarChart3, 
  Mail, 
  Phone, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Brain,
  Shield,
  Clock,
  Award,
  DollarSign,
  PieChart,
  Activity,
  Star,
  Rocket
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AISalesAutomationPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead qualification using machine learning algorithms and behavioral analysis'
    },
    {
      icon: Mail,
      title: 'Automated Email Sequences',
      description: 'Personalized email campaigns that adapt based on prospect behavior and engagement'
    },
    {
      icon: Phone,
      title: 'Smart Call Scheduling',
      description: 'AI-powered call scheduling with optimal timing predictions and follow-up automation'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Advanced forecasting to predict sales outcomes and optimize conversion rates'
    },
    {
      icon: Users,
      title: 'CRM Integration',
      description: 'Seamless integration with Salesforce, HubSpot, and other major CRM platforms'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive dashboards with actionable insights and performance metrics'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI lead scoring',
        'Email automation',
        'Basic analytics',
        '5 team members',
        'Standard CRM integration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$699',
      period: '/month',
      description: 'Ideal for growing sales organizations',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI scoring & routing',
        'Multi-channel automation',
        'Advanced analytics & reporting',
        'Unlimited team members',
        'Custom integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'Full automation suite',
        'Real-time analytics dashboard',
        'Dedicated success manager',
        'White-label solution',
        '24/7 phone support',
        'Custom SLA'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Increase in Qualified Leads',
      description: 'AI-powered lead scoring identifies high-value prospects automatically'
    },
    {
      icon: Clock,
      title: '75% Time Savings',
      description: 'Automated workflows reduce manual tasks and increase productivity'
    },
    {
      icon: Award,
      title: '40% Higher Conversion Rate',
      description: 'Personalized outreach and optimal timing improve close rates'
    },
    {
      icon: DollarSign,
      title: '200% ROI in 6 Months',
      description: 'Proven return on investment with measurable results'
    }
  ];

  const automationWorkflows = [
    {
      title: 'Lead Qualification',
      description: 'Automatically score and route leads based on AI analysis',
      steps: ['Lead capture', 'AI scoring', 'Auto-routing', 'Follow-up assignment']
    },
    {
      title: 'Email Sequences',
      description: 'Personalized email campaigns that adapt to prospect behavior',
      steps: ['Template creation', 'Behavioral triggers', 'A/B testing', 'Performance optimization']
    },
    {
      title: 'Follow-up Automation',
      description: 'Intelligent follow-up scheduling based on engagement patterns',
      steps: ['Engagement tracking', 'Timing optimization', 'Auto-scheduling', 'Result tracking']
    },
    {
      title: 'Pipeline Management',
      description: 'Automated pipeline updates and opportunity tracking',
      steps: ['Deal tracking', 'Stage updates', 'Forecasting', 'Alert management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Sales Automation Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered sales automation platform with lead scoring, email sequences, and predictive analytics. Boost your sales performance by 300%." />
        <meta name="keywords" content="AI sales automation, lead scoring, sales CRM, email automation, sales forecasting, sales analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                AI-Powered Sales Automation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                AI Sales Automation Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your sales process with AI-powered automation. Increase qualified leads by 300%, 
                boost conversion rates by 40%, and achieve 200% ROI in just 6 months.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-300">More Qualified Leads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">40%</div>
                <div className="text-gray-300">Higher Conversion</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">75%</div>
                <div className="text-gray-300">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">200%</div>
                <div className="text-gray-300">ROI in 6 Months</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Sales Automation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your sales process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation Workflows */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Automation Workflows</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Pre-built workflows that adapt to your sales process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationWorkflows.map((workflow, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{workflow.title}</h3>
                  <p className="text-gray-300 mb-6">{workflow.description}</p>
                  <div className="space-y-3">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center text-gray-300">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                          {stepIndex + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of sales teams already achieving record-breaking results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your sales team. All plans include 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white'
                        : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-2xl p-12 border border-purple-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to 3x Your Sales Performance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of sales teams already using AI Sales Automation Pro to achieve record-breaking results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                No credit card required • 14-day free trial • Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AISalesAutomationPro;