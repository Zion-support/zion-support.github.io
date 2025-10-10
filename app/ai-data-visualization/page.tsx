'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, BarChart3, PieChart, TrendingUp, Eye, Database, Zap, Shield, Users, ArrowRight, Phone, Mail, MapPin, Target, Settings, Globe, Brain, Cpu, Cloud, Lock, Activity } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life with real-time updates and drill-down capabilities.',
      benefits: ['Real-time updates', 'Interactive charts', 'Custom layouts']
    },
    {
      icon: PieChart,
      title: 'Advanced Chart Types',
      description: 'Access to 50+ chart types including heatmaps, treemaps, sankey diagrams, and more for comprehensive data representation.',
      benefits: ['50+ chart types', 'Custom styling', 'Responsive design']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive models that forecast trends and patterns to help you make data-driven decisions.',
      benefits: ['Trend forecasting', 'Pattern recognition', 'Predictive insights']
    },
    {
      icon: Eye,
      title: 'Visual Storytelling',
      description: 'Transform complex data into compelling visual narratives that engage and inform your audience.',
      benefits: ['Data narratives', 'Engaging visuals', 'Clear communication']
    }
  ];

  const capabilities = [
    {
      title: 'Chart Library',
      description: 'Comprehensive library of 50+ chart types and visualizations',
      icon: BarChart3,
      features: ['Bar charts', 'Line charts', 'Pie charts', 'Heatmaps', 'Treemaps', 'Sankey diagrams']
    },
    {
      title: 'Real-time Updates',
      description: 'Live data visualization with automatic updates and refresh',
      icon: Zap,
      features: ['Live data feeds', 'Auto-refresh', 'Real-time sync', 'Performance optimization']
    },
    {
      title: 'Custom Styling',
      description: 'Fully customizable visualizations with your brand colors and themes',
      icon: Eye,
      features: ['Brand colors', 'Custom themes', 'Responsive design', 'Export options']
    },
    {
      title: 'Data Integration',
      description: 'Seamless integration with various data sources and formats',
      icon: Database,
      features: ['API connections', 'Database integration', 'File uploads', 'Data transformation']
    }
  ];

  const benefits = [
    'Improve data comprehension by 80%',
    'Reduce analysis time by 60%',
    'Increase engagement by 150%',
    'Enable faster decision-making',
    'Enhance data storytelling',
    'Scale visualization operations'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Basic chart types',
        'Up to 10 dashboards',
        'Email support',
        'Standard templates',
        'Basic customization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'All chart types',
        'Unlimited dashboards',
        'Priority support',
        'Custom templates',
        'Advanced customization',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Full customization',
        'Dedicated support',
        'On-premise deployment',
        'White-label solutions',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Data Visualization | Zion Tech Group"
        description="Transform your data into stunning visualizations with AI-powered data visualization tools. Interactive dashboards, predictive analytics, and visual storytelling."
        keywords="AI data visualization, interactive dashboards, data charts, visual analytics, data storytelling, Zion Tech Group"
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Data Visualization
                <span className="block text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your data into stunning visualizations with AI-powered data visualization tools. 
                Interactive dashboards, predictive analytics, and visual storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visualization Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI capabilities for data visualization
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visualization Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data visualization solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <capability.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-gray-600 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Data Visualization?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proven results that transform your data into business value
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible pricing for data visualization solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your AI-powered data visualization journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIDataVisualizationPage;