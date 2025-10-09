'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Zap, 
  CheckCircle, 
  Clock, 
  Target,
  Brain,
  ArrowRight,
  Star,
  Shield,
  Smartphone,
  Globe,
  Database,
  Settings,
  FileText,
  MessageSquare,
  Activity,
  Users,
  Mail,
  Phone,
  Chat,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  RefreshCw
} from 'lucide-react';

export default function AIBusinessIntelligenceAnalyticsPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms automatically discover patterns, trends, and anomalies in your data.',
      color: 'text-purple-400'
    },
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that update in real-time with drag-and-drop simplicity.',
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends, sales, and business outcomes with AI-driven predictive modeling.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI insights and recommendations.',
      color: 'text-orange-400'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor key metrics and KPIs in real-time with instant alerts and notifications.',
      color: 'text-cyan-400'
    },
    {
      icon: Search,
      title: 'Natural Language Queries',
      description: 'Ask questions about your data in plain English and get instant, intelligent answers.',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 data sources',
        'Basic AI insights',
        '5 dashboards',
        'Standard reports',
        'Email support',
        '1GB data storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing companies',
      features: [
        'Up to 25 data sources',
        'Advanced AI features',
        'Unlimited dashboards',
        'Custom reports',
        'Priority support',
        '10GB data storage',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Full AI suite',
        'Custom AI models',
        'Advanced security',
        '24/7 dedicated support',
        'Unlimited storage',
        'On-premise deployment',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and files.',
      stat: '100+ Sources'
    },
    {
      icon: Eye,
      title: 'Visual Analytics',
      description: 'Create beautiful, interactive visualizations that tell your data story effectively.',
      stat: '50+ Chart Types'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, access controls, and compliance certifications.',
      stat: 'SOC 2 Certified'
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Access your analytics anywhere with our responsive mobile app and offline capabilities.',
      stat: '100% Mobile'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Data Director',
      company: 'RetailMax Corp',
      content: 'AI Business Intelligence has transformed how we understand our customers. The predictive analytics are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'CFO',
      company: 'FinancePro Inc.',
      content: 'The automated reporting saves us 20 hours per week. The AI insights have helped us identify new revenue opportunities.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'VP of Operations',
      company: 'Manufacturing Plus',
      content: 'Real-time monitoring has helped us optimize our supply chain. The ROI has been phenomenal.',
      rating: 5
    }
  ];

  const dataSources = [
    { name: 'Salesforce', icon: Database },
    { name: 'Google Analytics', icon: BarChart3 },
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'MongoDB', icon: Database },
    { name: 'AWS', icon: Cloud },
    { name: 'Azure', icon: Cloud },
    { name: 'Google Cloud', icon: Cloud },
    { name: 'HubSpot', icon: Target },
    { name: 'Zendesk', icon: Headphones },
    { name: 'Stripe', icon: CreditCard },
    { name: 'Shopify', icon: ShoppingCart }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Business Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Business Intelligence
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transform Data into Actionable Insights
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Unlock the power of your data with AI-driven business intelligence that automatically discovers insights, 
            predicts trends, and generates actionable recommendations to drive your business forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              Get Started - (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300 text-sm">Data Sources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Chart Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Powerful AI Analytics Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Advanced AI capabilities that transform raw data into actionable business insights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`text-4xl mb-4 ${feature.color}`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Enterprise-Grade Capabilities
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Built for scale, security, and performance to meet enterprise requirements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="cyber-card hologram-card p-6 mb-4">
                  <div className="text-4xl text-cyan-400 mb-4">
                    <capability.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{capability.description}</p>
                  <div className="text-2xl font-bold text-cyan-400">{capability.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Connect Your Data Sources
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Seamlessly integrate with 100+ data sources and platforms
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {dataSources.map((source, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <source.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-medium">{source.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Choose the plan that fits your data volume and analytics needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+13024640950"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Success Stories
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            See how businesses are transforming their decision-making with AI analytics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of businesses already using AI to make data-driven decisions. 
            Start your free trial today or contact us for a personalized demo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              Start Free Trial - (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}