'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Workflow, 
  Zap, 
  Settings, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Target,
  TrendingUp,
  Award,
  DollarSign,
  Activity,
  Star,
  Rocket,
  Database,
  Globe,
  Smartphone
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIWorkflowAutomationPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Process Mining',
      description: 'Automatically discover and analyze your business processes using machine learning'
    },
    {
      icon: Zap,
      title: 'Smart Automation Rules',
      description: 'Create intelligent workflows that adapt and learn from your business patterns'
    },
    {
      icon: Settings,
      title: 'No-Code Builder',
      description: 'Build complex workflows with our intuitive drag-and-drop interface'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control and audit trails'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Monitor workflow performance with detailed analytics and insights'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborate with your team on workflow design and optimization'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 workflows',
        'Basic automation rules',
        'Email notifications',
        'Basic analytics',
        '5 team members',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 100 workflows',
        'Advanced AI automation',
        'Multi-channel notifications',
        'Advanced analytics & reporting',
        'Unlimited team members',
        'Custom integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
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
      title: '90% Process Efficiency',
      description: 'Automate repetitive tasks and eliminate manual errors'
    },
    {
      icon: Clock,
      title: '80% Time Savings',
      description: 'Reduce manual work and focus on high-value activities'
    },
    {
      icon: Award,
      title: '99.9% Accuracy',
      description: 'AI-powered automation ensures consistent, error-free execution'
    },
    {
      icon: DollarSign,
      title: '300% ROI',
      description: 'Significant cost savings and productivity improvements'
    }
  ];

  const workflowTemplates = [
    {
      title: 'Customer Onboarding',
      description: 'Automated customer onboarding with document collection and approval workflows',
      steps: ['Lead capture', 'Document verification', 'Account setup', 'Welcome sequence']
    },
    {
      title: 'Invoice Processing',
      description: 'Automated invoice processing with approval routing and payment tracking',
      steps: ['Invoice receipt', 'Data extraction', 'Approval routing', 'Payment processing']
    },
    {
      title: 'Employee Onboarding',
      description: 'Streamlined employee onboarding with task assignments and progress tracking',
      steps: ['Application review', 'Background check', 'Document collection', 'System access']
    },
    {
      title: 'Content Approval',
      description: 'Automated content review and approval process with stakeholder notifications',
      steps: ['Content submission', 'Review assignment', 'Feedback collection', 'Final approval']
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '🔗' },
    { name: 'HubSpot', icon: '🔗' },
    { name: 'Slack', icon: '🔗' },
    { name: 'Microsoft Teams', icon: '🔗' },
    { name: 'Google Workspace', icon: '🔗' },
    { name: 'Zapier', icon: '🔗' },
    { name: 'Jira', icon: '🔗' },
    { name: 'Asana', icon: '🔗' },
    { name: 'Trello', icon: '🔗' },
    { name: 'Monday.com', icon: '🔗' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Workflow Automation Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered workflow automation platform with process mining, smart automation rules, and no-code builder. Increase efficiency by 90%." />
        <meta name="keywords" content="AI workflow automation, process automation, business process management, workflow builder, automation platform" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Workflow className="w-4 h-4 mr-2" />
                AI-Powered Workflow Automation
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                AI Workflow Automation Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business processes with AI-powered automation. Increase efficiency by 90%, 
                reduce manual work by 80%, and achieve 300% ROI with intelligent workflow automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
                <div className="text-gray-300">Process Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">80%</div>
                <div className="text-gray-300">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                <div className="text-gray-300">ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Automation Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate and optimize your business processes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Templates */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pre-built Workflow Templates</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our ready-to-use workflow templates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {workflowTemplates.map((template, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{template.title}</h3>
                  <p className="text-gray-300 mb-6">{template.description}</p>
                  <div className="space-y-3">
                    {template.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center text-gray-300">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
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
                Join thousands of businesses already transforming their operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and systems
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-slate-600 transition-colors">
                    <span className="text-2xl">{integration.icon}</span>
                  </div>
                  <div className="text-gray-300 font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                        : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
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
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-2xl p-12 border border-green-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI Workflow Automation Pro to transform their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
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

export default AIWorkflowAutomationPro;