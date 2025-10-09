'use client';
<<<<<<< HEAD
import React, { lazy } from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))
const AIAutomationPage: React.FC = React.memo((props) => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Discovery',
      description: 'AI automatically identifies and maps your business processes for optimization opportunities.',
      benefits: ['Process mapping', 'Bottleneck identification', 'Efficiency analysis', 'ROI prediction']
    },
    {
      icon: Zap,
      title: 'Smart Workflow Automation',
      description: 'Deploy AI-powered workflows that learn and adapt to your business needs over time.',
      benefits: ['Adaptive workflows', 'Self-healing processes', 'Dynamic optimization', 'Real-time adjustments']}
    },
    {
      icon: Target,
      title: 'Predictive Task Management',
      description: 'AI predicts and prioritizes tasks based on business impact and resource availability.',
      benefits: ['Smart prioritization', 'Resource optimization', 'Deadline prediction', 'Capacity planning']}
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and insights to measure and improve automation effectiveness.',
      benefits: ['Real-time metrics', 'Performance dashboards', 'Trend analysis', 'Improvement recommendations']}
    }
  ]
  const useCases = [
    {
      industry: 'Healthcare',
      description: 'Automate patient scheduling, insurance verification, and medical record processing.',
      savings: '60% reduction in administrative time',
      icon: Shield}
    },
    {
      industry: 'Finance',
      description: 'Streamline loan processing, fraud detection, and compliance reporting.',
      savings: '45% faster processing times',
      icon: TrendingUp}
    },
    {
      industry: 'E-commerce',
      description: 'Automate inventory management, order processing, and customer service.',
      savings: '70% reduction in manual errors',
      icon: Globe}
    },
    {
      industry: 'Manufacturing',
      description: 'Optimize production scheduling, quality control, and supply chain management.',
      savings: '50% improvement in efficiency',
      icon: Target}
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI automation',
      features: [
        'Up to 5 automated workflows',
        'Basic AI process discovery',
        'Standard analytics dashboard',
        'Email support',
        '10,000 process executions/month'
      ],
      popular: false}
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with complex automation needs',
      features: [
        'Up to 25 automated workflows',
        'Advanced AI process discovery',
        'Custom analytics and reporting',
        'Priority support',
        '100,000 process executions/month',
        'API integrations',
        'Custom workflow templates'
      ],
      popular: true}
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited automated workflows',
        'AI-powered process optimization',
        'Advanced analytics and BI',
        '24/7 dedicated support',
        'Unlimited process executions',
        'Custom integrations',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false}
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI-Powered Business Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that learns, adapts, and optimizes your processes in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg" aria-label="
                Start Free Trial
              " tabIndex="0">
                Start Free Trial
              </button>
              <button className="cyber-button-outline px-8 py-4 text-lg" aria-label="
                Watch Demo
              " tabIndex="0">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">85%</div>
              <div className="text-gray-300">Process Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Automated Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Automation Features</h2>
            <p className="text-xl text-gray-300">Everything you need to automate and optimize your business processes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2" role="list">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400" style={{ color: "#9CA3AF" }}>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
=======
import React from 'react';
import { CheckCircle, Zap, Brain, Clock, ArrowRight, Phone, Mail, Settings, BarChart, Users, Shield, Target } from 'lucide-react';
import Link from 'next/link';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes'
    },
    {
      icon: Settings,
      title: 'Workflow Optimization',
      description: 'Streamline complex workflows with intelligent decision-making capabilities'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Real-time insights into automation performance and ROI metrics'
    },
    {
      icon: Shield,
      title: 'Secure Automation',
      description: 'Enterprise-grade security with compliance and audit capabilities'
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate customer inquiries, ticket routing, and response generation',
      benefits: ['80% faster response times', '24/7 availability', 'Consistent quality']
    },
    {
      title: 'Data Processing Automation',
      description: 'Automate data entry, validation, and transformation processes',
      benefits: ['95% accuracy improvement', '90% time reduction', 'Real-time processing']
    },
    {
      title: 'Marketing Automation',
      description: 'Intelligent campaign management and personalized content delivery',
      benefits: ['300% increase in engagement', '50% cost reduction', 'Higher conversion rates']
    },
    {
      title: 'Financial Process Automation',
      description: 'Automate invoicing, expense management, and financial reporting',
      benefits: ['99.9% accuracy', 'Instant processing', 'Compliance assurance']
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 90% with intelligent automation'
    },
    {
      icon: Target,
      title: 'Improved Accuracy',
      description: 'Eliminate human errors with AI-powered precision and validation'
    },
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Handle increasing workloads without proportional resource increases'
    },
    {
      icon: BarChart,
      title: 'Measurable ROI',
      description: 'Track and measure the impact of automation on your business metrics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-cyan-400">Automation</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with intelligent automation that learns, adapts, and scales. 
            Our AI automation solutions reduce manual work by up to 90% while improving accuracy and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Started
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              View Demo
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful <span className="text-cyan-400">Automation</span> Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Real-World <span className="text-cyan-400">Applications</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
>>>>>>> cursor/website-audit-and-update-with-deployment-1500
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-300">See how AI automation transforms different industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="text-cyan-400 font-semibold">{useCase.savings}</div>
=======

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our <span className="text-cyan-400">AI Automation</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/website-audit-and-update-with-deployment-1500
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your automation needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><span className="sr-only">Screen reader: </span>
                      Most Popular
                    </span>
                  </div>}
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400" style={{ color: "#9CA3AF" }}><span className="sr-only">Screen reader: </span>{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8" role="list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'`}
                }`} aria-label="
                  Get Started
                " tabIndex="0">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI automation to streamline their operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg" aria-label="
              Start Free Trial
            " tabIndex="0">
              Start Free Trial
            </button>
            <button className="cyber-button-outline px-8 py-4 text-lg" aria-label="
              Contact Sales
            " tabIndex="0">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default AIAutomationPage
=======

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-cyan-400">Implementation</span> Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analysis</h3>
              <p className="text-gray-300">We analyze your current processes and identify automation opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Design</h3>
              <p className="text-gray-300">Create custom automation workflows tailored to your business needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
              <p className="text-gray-300">Deploy and integrate automation solutions with your existing systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Optimization</h3>
              <p className="text-gray-300">Continuously monitor and optimize performance for maximum efficiency</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using our AI automation solutions to streamline operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Automation Journey
            </Link>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomationPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-1500
