'use client';
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  TrendingUp, 
  Brain, 
  Zap, 
  Target, 
  Shield, 
  Users, 
  Globe, 
  Lock, 
  Settings, 
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  DollarSign,
  Cpu,
  Database,
  Eye,
  PieChart,
  Activity,
  BarChart3,
  LineChart,
  ScatterChart,
  Gauge,
  TrendingDown,
  AlertTriangle,
  RefreshCw,
  Download,
  Share2,
  Filter,
  Search,
  Calendar,
  Bell,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';

const AIAdvancedAnalyticsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to uncover hidden patterns and predict future trends',
      benefits: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Trend Forecasting']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Dashboards',
      description: 'Interactive dashboards with live data updates and customizable visualizations for instant insights',
      benefits: ['Live Data Updates', 'Custom Visualizations', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      icon: Target,
      title: 'Advanced Segmentation',
      description: 'Intelligent customer and data segmentation with behavioral analysis and predictive modeling',
      benefits: ['Behavioral Analysis', 'Predictive Segmentation', 'Dynamic Clustering', 'Personalization']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, compliance tools, and audit trails',
      benefits: ['End-to-End Encryption', 'GDPR Compliance', 'SOC 2 Type II', 'Audit Logging']
    }
  ];

  const analyticsCapabilities = [
    {
      category: 'Predictive Analytics',
      icon: TrendingUp,
      capabilities: [
        'Sales Forecasting with 95% accuracy',
        'Customer Lifetime Value prediction',
        'Churn prediction and prevention',
        'Market trend analysis',
        'Demand forecasting',
        'Risk assessment and mitigation'
      ]
    },
    {
      category: 'Business Intelligence',
      icon: BarChart,
      capabilities: [
        'Executive dashboards',
        'KPI monitoring and alerts',
        'Performance benchmarking',
        'ROI analysis and optimization',
        'Competitive intelligence',
        'Strategic planning support'
      ]
    },
    {
      category: 'Customer Analytics',
      icon: Users,
      capabilities: [
        'Customer journey mapping',
        'Behavioral pattern analysis',
        'Personalization engine',
        'Segmentation optimization',
        'Engagement scoring',
        'Retention analysis'
      ]
    },
    {
      category: 'Operational Analytics',
      icon: Settings,
      capabilities: [
        'Process optimization',
        'Resource utilization analysis',
        'Efficiency metrics',
        'Cost optimization',
        'Quality control analytics',
        'Supply chain optimization'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 10 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '5 user accounts',
        '1 year data retention'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced analytics for growing businesses',
      features: [
        'Unlimited data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        '25 user accounts',
        '3 years data retention',
        'API access',
        'White-label options'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete analytics solution for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'Unlimited users',
        'Unlimited data retention',
        'Advanced security features',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '🔗', category: 'CRM' },
    { name: 'HubSpot', icon: '🔗', category: 'Marketing' },
    { name: 'Google Analytics', icon: '📊', category: 'Web Analytics' },
    { name: 'Stripe', icon: '💳', category: 'Payments' },
    { name: 'Shopify', icon: '🛒', category: 'E-commerce' },
    { name: 'Slack', icon: '💬', category: 'Communication' },
    { name: 'Microsoft Teams', icon: '👥', category: 'Communication' },
    { name: 'Zendesk', icon: '🎧', category: 'Support' },
    { name: 'Mailchimp', icon: '📧', category: 'Email Marketing' },
    { name: 'Facebook Ads', icon: '📱', category: 'Social Media' },
    { name: 'Google Ads', icon: '🎯', category: 'Advertising' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'Complex data scattered across multiple systems',
      solution: 'Implemented AI Advanced Analytics with unified data platform',
      results: ['40% increase in data-driven decisions', '60% faster reporting', '25% improvement in forecasting accuracy'],
      logo: 'TC'
    },
    {
      company: 'RetailMax',
      industry: 'Retail',
      challenge: 'Poor customer insights and inventory management',
      solution: 'Deployed predictive analytics for customer behavior and demand forecasting',
      results: ['35% reduction in inventory costs', '50% improvement in customer satisfaction', '30% increase in sales'],
      logo: 'RM'
    },
    {
      company: 'FinanceFirst',
      industry: 'Financial Services',
      challenge: 'Risk assessment and compliance reporting',
      solution: 'Advanced risk analytics with real-time monitoring and automated reporting',
      results: ['90% faster risk assessment', '100% compliance accuracy', '45% reduction in manual reporting'],
      logo: 'FF'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced quantum-particles">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden quantum-field">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Advanced Analytics
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed neon-glow-cyan">
              Transform your data into actionable insights with our cutting-edge AI-powered analytics platform. 
              Make smarter decisions, predict trends, and optimize performance across your entire organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI-Powered Insights</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <BarChart3 className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Real-Time Dashboards</span>
              </div>
              <div className="flex items-center space-x-2 holographic-card px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +1 (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to turn your data into competitive advantage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Capabilities */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced Analytics Capabilities
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics tools for every aspect of your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {analyticsCapabilities.map((category, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.capabilities.map((capability, capabilityIndex) => (
                    <li key={capabilityIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {capability}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`futuristic-card-enhanced hover-lift p-8 relative ${
                  plan.popular ? 'ring-2 ring-purple-500 neon-glow-purple' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
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
                  href="https://ziontechgroup.com/contact"
                  className="w-full neon-button-enhanced py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-4 text-center">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <h4 className="text-white font-medium text-sm">{integration.name}</h4>
                <p className="text-gray-400 text-xs">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how companies are transforming their business with AI Advanced Analytics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="futuristic-card-enhanced hover-lift p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-white">{study.logo}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Challenge:</h4>
                    <p className="text-sm text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Solution:</h4>
                    <p className="text-sm text-gray-400">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-1">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-green-400">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{result}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join 500+ companies already using AI Advanced Analytics to make smarter decisions and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="neon-button-enhanced px-8 py-4 rounded-lg font-bold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 (302) 464-0950
            </a>
          </div>
          <div className="text-gray-200 text-sm">
            <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAdvancedAnalyticsPage;