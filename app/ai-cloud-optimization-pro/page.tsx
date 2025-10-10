'use client';
import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  Server, 
  Zap, 
  BarChart, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Target, 
  Globe, 
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
  Settings,
  Database,
  HardDrive,
  Cpu,
  Wifi,
  Lock,
  Shield,
  Monitor,
  Key,
  Fingerprint,
  Scan,
  Bug,
  Virus,
  FileText,
  Clock,
  TrendingUp,
  Users,
  Workflow,
  RefreshCw,
  RotateCcw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Link,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

const AICloudOptimizationPro: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms continuously optimize your cloud infrastructure for cost and performance',
      benefits: ['Cost Reduction', 'Performance Tuning', 'Predictive Scaling']
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive monitoring and analytics dashboard for cloud resource utilization',
      benefits: ['Live Monitoring', 'Usage Analytics', 'Cost Tracking']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Advanced security monitoring and compliance management for cloud environments',
      benefits: ['Threat Detection', 'Compliance Monitoring', 'Security Audits']
    },
    {
      icon: Zap,
      title: 'Automated Scaling',
      description: 'Intelligent auto-scaling based on demand patterns and performance metrics',
      benefits: ['Auto-scaling', 'Load Balancing', 'Resource Management']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to $5K monthly cloud spend',
        'Basic optimization',
        'Email support',
        'Standard monitoring',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to $25K monthly cloud spend',
        'Advanced AI optimization',
        'Priority support',
        'Real-time monitoring',
        'Custom dashboards',
        'API access',
        'Weekly reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited cloud spend',
        'Full AI optimization suite',
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

  const cloudProviders = [
    { name: 'Amazon Web Services', category: 'Cloud', icon: '🟠', savings: '35%' },
    { name: 'Microsoft Azure', category: 'Cloud', icon: '🔵', savings: '30%' },
    { name: 'Google Cloud Platform', category: 'Cloud', icon: '🟢', savings: '40%' },
    { name: 'IBM Cloud', category: 'Cloud', icon: '🔵', savings: '25%' },
    { name: 'Oracle Cloud', category: 'Cloud', icon: '🔴', savings: '28%' },
    { name: 'Alibaba Cloud', category: 'Cloud', icon: '🟡', savings: '32%' }
  ];

  const optimizationAreas = [
    {
      title: 'Cost Optimization',
      description: 'Reduce cloud costs through intelligent resource management',
      icon: DollarSign,
      metrics: 'Average 40% cost savings'
    },
    {
      title: 'Performance Tuning',
      description: 'Optimize application performance and response times',
      icon: Zap,
      metrics: '50% faster response times'
    },
    {
      title: 'Security Hardening',
      description: 'Enhance cloud security posture and compliance',
      icon: Shield,
      metrics: '99.9% security score'
    },
    {
      title: 'Scalability Planning',
      description: 'Plan and implement scalable cloud architectures',
      icon: TrendingUp,
      metrics: '10x better scalability'
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <span className="text-green-400 font-semibold text-lg">AI Cloud Optimization Pro</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Intelligent Cloud Infrastructure Management
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Optimize your cloud infrastructure with AI-powered insights. 
              Reduce costs, improve performance, and enhance security across all major cloud providers.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                <DollarSign className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Cost Savings</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Security First</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center">
                Get Cloud Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center">
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
              Advanced Cloud Optimization Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered cloud optimization platform provides comprehensive infrastructure management 
              across all major cloud providers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-green-400">
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

      {/* Cloud Providers Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Multi-Cloud Support
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Optimize across all major cloud providers with our unified platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-slate-700/50 rounded-lg p-6 hover:bg-slate-600/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{provider.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{provider.name}</h3>
                      <p className="text-gray-400 text-sm">{provider.category}</p>
                    </div>
                  </div>
                  <div className="text-green-400 font-bold text-lg">{provider.savings}</div>
                </div>
                <div className="text-gray-300 text-sm">
                  Average cost savings achieved for {provider.name} customers
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Areas Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive Optimization
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our platform optimizes every aspect of your cloud infrastructure for maximum efficiency and cost savings.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{area.description}</p>
                <div className="text-green-400 font-bold text-lg">{area.metrics}</div>
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
              Choose the plan that fits your cloud infrastructure needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{tier.price}</span>
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
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700' 
                    : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
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
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Cloud?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Get a free cloud assessment and discover how much you can save.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-green-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-green-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-green-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-green-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Get Cloud Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudOptimizationPro;