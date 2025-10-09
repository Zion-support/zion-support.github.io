'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { BarChart, PieChart, TrendingUp, Eye, Brain, Zap, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Database, Globe, Settings } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life with real-time updates.',
      benefits: ['Real-time Updates', 'Customizable Layouts', 'Interactive Elements', 'Mobile Responsive']
    },
    {
      icon: PieChart,
      title: 'Advanced Chart Types',
      description: 'Comprehensive library of chart types including heatmaps, treemaps, and 3D visualizations.',
      benefits: ['50+ Chart Types', 'Custom Styling', 'Animation Effects', 'Export Options']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive analytics with trend forecasting and anomaly detection.',
      benefits: ['Trend Forecasting', 'Anomaly Detection', 'Pattern Recognition', 'Risk Assessment']
    },
    {
      icon: Eye,
      title: 'Visual Intelligence',
      description: 'AI-driven insights that automatically identify patterns and suggest visualizations.',
      benefits: ['Auto Pattern Detection', 'Smart Suggestions', 'Data Storytelling', 'Insight Generation']
    },
    {
      icon: Database,
      title: 'Multi-Source Integration',
      description: 'Connect to multiple data sources and create unified visualizations across platforms.',
      benefits: ['100+ Integrations', 'Real-time Sync', 'Data Transformation', 'Unified Views']
    },
    {
      icon: Settings,
      title: 'Custom Development',
      description: 'Tailored visualization solutions designed specifically for your business needs.',
      benefits: ['Custom Components', 'API Development', 'White-label Options', 'Dedicated Support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small teams',
      features: ['Up to 10 dashboards', 'Basic chart types', 'Email support', 'Standard integrations'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'For growing businesses',
      features: ['Up to 50 dashboards', 'Advanced charts', 'Real-time data', 'Priority support', 'Custom themes'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,199/month',
      description: 'For large organizations',
      features: ['Unlimited dashboards', 'Custom development', 'White-label options', '24/7 support', 'Dedicated account manager'],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Faster Insights' },
    { number: '100+', label: 'Data Sources' },
    { number: '50+', label: 'Chart Types' },
    { number: '24/7', label: 'Real-time Updates' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <SEOOptimizer
        title="AI Data Visualization - Zion Tech Group"
        description="Advanced AI-powered data visualization solutions with interactive dashboards, predictive analytics, and real-time insights. Transform your data into actionable intelligence."
        keywords={['AI data visualization', 'interactive dashboards', 'predictive analytics', 'data insights', 'business intelligence', 'data visualization tools']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      />
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text glitch">
            AI Data Visualization
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into stunning, interactive visualizations with AI-powered insights and real-time analytics.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card energy-pulse">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Visualization Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300 energy-pulse">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                  className="cyber-button w-full text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us today to learn how AI data visualization can transform your business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIDataVisualizationPage;