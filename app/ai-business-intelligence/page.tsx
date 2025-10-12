'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Database, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Globe,
  Phone,
  Mail,
  MapPin,
  Star,
  Settings,
  PieChart,
  LineChart,
  Activity,
  Target,
  Users,
  DollarSign,
  Clock,
  FileText,
  AlertTriangle,
  Lightbulb,
  RefreshCw
} from 'lucide-react';

export default function AIBusinessIntelligencePage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting with 95% accuracy for sales, demand, and market trends using advanced machine learning algorithms.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards with live data visualization, customizable widgets, and automated report generation.'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Data Integration',
      description: 'Connect 200+ data sources including CRM, ERP, social media, and IoT devices for comprehensive insights.'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Smart Recommendations',
      description: 'AI-driven business recommendations based on data patterns, helping optimize operations and increase ROI.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, role-based access control, and compliance with GDPR, HIPAA, and SOC 2 standards.'
    },
    {
      icon: <Activity className="w-6 h-6 text-blue-400" />,
      title: 'Anomaly Detection',
      description: 'Automated detection of unusual patterns, fraud, and opportunities using advanced anomaly detection algorithms.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic dashboards & reports',
        'Standard analytics',
        'Email support',
        '1 user license',
        '99.5% uptime SLA',
        'Monthly data refresh'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 data sources',
        'Advanced dashboards & AI insights',
        'Predictive analytics',
        'Priority support',
        '5 user licenses',
        '99.9% uptime SLA',
        'Real-time data sync',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models & training',
        'Advanced predictive analytics',
        'Dedicated account manager',
        'Unlimited user licenses',
        '99.99% uptime SLA',
        'Real-time streaming data',
        'White-label solution',
        'On-premise deployment option'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      category: 'Data Analytics',
      items: [
        'Sales performance analysis',
        'Customer behavior insights',
        'Market trend identification',
        'Financial forecasting',
        'Operational efficiency metrics',
        'Risk assessment & management'
      ]
    },
    {
      category: 'AI-Powered Insights',
      items: [
        'Automated pattern recognition',
        'Predictive modeling',
        'Natural language querying',
        'Intelligent data visualization',
        'Anomaly detection & alerts',
        'Smart recommendations engine'
      ]
    },
    {
      category: 'Reporting & Visualization',
      items: [
        'Interactive dashboards',
        'Automated report generation',
        'Custom KPI tracking',
        'Real-time data streaming',
        'Mobile-responsive design',
        'Export to multiple formats'
      ]
    },
    {
      category: 'Integration & Security',
      items: [
        '200+ data source connectors',
        'API-first architecture',
        'Enterprise-grade security',
        'Role-based access control',
        'Audit trails & compliance',
        'Cloud & on-premise options'
      ]
    }
  ];

  const industrySolutions = [
    {
      industry: 'Retail & E-commerce',
      description: 'Optimize inventory, predict demand, and personalize customer experiences with AI-driven insights.',
      metrics: ['35% increase in sales', '40% reduction in stockouts', '25% improvement in customer retention']
    },
    {
      industry: 'Financial Services',
      description: 'Risk assessment, fraud detection, and regulatory compliance with real-time monitoring and alerts.',
      metrics: ['60% faster fraud detection', '90% compliance accuracy', '30% reduction in false positives']
    },
    {
      industry: 'Healthcare',
      description: 'Patient outcome prediction, resource optimization, and clinical decision support with HIPAA compliance.',
      metrics: ['45% improvement in patient outcomes', '50% reduction in readmission rates', '35% cost savings']
    },
    {
      industry: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization with IoT integration.',
      metrics: ['50% reduction in downtime', '30% improvement in quality', '25% cost reduction']
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'RetailMax Corp',
      role: 'Chief Data Officer',
      content: 'The AI insights helped us increase sales by 35% and reduce inventory costs by 40%. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'HealthTech Solutions',
      role: 'VP of Analytics',
      content: 'Our patient outcome predictions improved by 45% since implementing Zion\'s AI BI platform. The ROI was evident within 3 months.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'Robert Chen',
      company: 'FinanceFlow Inc',
      role: 'Head of Risk Management',
      content: 'Fraud detection speed improved by 60% and false positives dropped by 30%. The AI models are incredibly sophisticated.',
      rating: 5,
      avatar: 'RC'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Platform - Zion Tech Group | Advanced Analytics & Insights</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered business intelligence platform. Predictive analytics, real-time dashboards, 95% accuracy. Starting at $299/month." />
        <meta name="keywords" content="AI business intelligence, predictive analytics, data visualization, business insights, machine learning, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence" />
        
        <meta property="og:title" content="AI Business Intelligence Platform - Zion Tech Group" />
        <meta property="og:description" content="Transform your data into actionable insights with our AI-powered business intelligence platform. Predictive analytics, real-time dashboards, 95% accuracy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-business-intelligence" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Business Intelligence Platform - Zion Tech Group" />
        <meta name="twitter:description" content="Transform your data into actionable insights with our AI-powered business intelligence platform. Predictive analytics, real-time dashboards, 95% accuracy." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Business Intelligence Platform
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into actionable insights with AI-powered analytics, predictive modeling, and real-time dashboards. 
                Make smarter decisions with 95% accuracy forecasting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">200+</div>
                <div className="text-gray-300">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
                <div className="text-gray-300">Data Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">50%</div>
                <div className="text-gray-300">Faster Decisions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Advanced AI Capabilities</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Powerful AI technology that transforms raw data into strategic business insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Platform Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to transform your data into business intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6">{capability.category}</h3>
                  <ul className="space-y-3">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored AI insights for your industry with proven results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">{solution.industry}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="space-y-2">
                    {solution.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-green-400">
                        <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Flexible Pricing Plans</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your data needs. All plans include 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20 hover:bg-white/15'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                See how leading companies are transforming their business with AI insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Data into Intelligence?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free 30-day trial today. No credit card required. Get insights in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-8 text-white/80 text-sm">
                  <p>✓ 30-day free trial • ✓ No setup fees • ✓ 24/7 support • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-6">Need Help Getting Started?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}