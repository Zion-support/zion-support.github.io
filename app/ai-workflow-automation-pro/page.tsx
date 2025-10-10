'use client';
import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Workflow, 
  Settings, 
  BarChart, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Target, 
  Globe, 
  Shield, 
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Award,
  Sparkles,
  Activity,
  PieChart,
  LineChart,
  BarChart3,
  TrendingDown,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  Save,
  Download,
  Upload,
  Link,
  Database,
  Server,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

const AIWorkflowAutomationPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Workflow,
      title: 'Visual Workflow Builder',
      description: 'Drag-and-drop interface to create complex workflows without coding',
      benefits: ['No-code Solution', 'Visual Interface', 'Pre-built Templates']
    },
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns and adapts to your business processes',
      benefits: ['Machine Learning', 'Adaptive Logic', 'Smart Decisions']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics and reporting for workflow performance optimization',
      benefits: ['Performance Metrics', 'Bottleneck Analysis', 'ROI Tracking']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control and audit trails',
      benefits: ['Role-based Access', 'Audit Trails', 'Data Encryption']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 workflows',
        'Basic integrations',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 workflows',
        'Advanced integrations',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'All integrations',
        '24/7 dedicated support',
        'Custom development',
        'White-label solution',
        'Advanced API',
        'Custom training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Salesforce', category: 'CRM', icon: '🔵' },
    { name: 'HubSpot', category: 'Marketing', icon: '🟠' },
    { name: 'Slack', category: 'Communication', icon: '🟣' },
    { name: 'Microsoft Teams', category: 'Communication', icon: '🔵' },
    { name: 'Google Workspace', category: 'Productivity', icon: '🟢' },
    { name: 'Zapier', category: 'Automation', icon: '🟡' },
    { name: 'Jira', category: 'Project Management', icon: '🔵' },
    { name: 'Asana', category: 'Project Management', icon: '🟠' },
    { name: 'Trello', category: 'Project Management', icon: '🔵' },
    { name: 'Notion', category: 'Documentation', icon: '⚫' },
    { name: 'Airtable', category: 'Database', icon: '🟠' },
    { name: 'Monday.com', category: 'Project Management', icon: '🔴' }
  ];

  const useCases = [
    {
      title: 'Lead Management',
      description: 'Automate lead scoring, assignment, and follow-up processes',
      icon: Target,
      metrics: '75% faster lead processing'
    },
    {
      title: 'Customer Onboarding',
      description: 'Streamline customer onboarding with automated workflows',
      icon: Users,
      metrics: '60% reduction in onboarding time'
    },
    {
      title: 'Invoice Processing',
      description: 'Automate invoice creation, approval, and payment tracking',
      icon: DollarSign,
      metrics: '90% automation rate'
    },
    {
      title: 'Support Tickets',
      description: 'Intelligent ticket routing and resolution workflows',
      icon: Settings,
      metrics: '50% faster resolution'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-cyan-400 font-semibold text-lg">AI Workflow Automation Pro</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Intelligent Business Process Automation
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business operations with AI-powered workflow automation. 
              Create, manage, and optimize complex business processes with our no-code platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">No-code Solution</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
                View Demo
                <Play className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Automation Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform combines visual workflow building with intelligent automation 
              to streamline your business processes and boost productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-cyan-400">
                      <CheckCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and services to create powerful automated workflows.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-600/50 transition-all duration-300 group">
                <div className="text-2xl mb-2">{integration.icon}</div>
                <div className="text-white font-medium text-sm mb-1">{integration.name}</div>
                <div className="text-gray-400 text-xs">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how businesses across industries use our workflow automation platform to streamline operations and drive growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{useCase.metrics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core automation features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Start your free trial today and discover the power of AI-driven workflow automation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWorkflowAutomationPro;