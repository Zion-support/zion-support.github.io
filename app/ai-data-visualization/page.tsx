'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Chart Generation',
      description: 'Automatically generate the most effective visualizations based on your data patterns',
      benefits: ['Optimal chart selection', 'Automatic insights', 'Reduced design time']
    },
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create dynamic, interactive dashboards that respond to user interactions and data changes',
      benefits: ['Real-time updates', 'Interactive exploration', 'Better engagement']
    },
    {
      icon: Eye,
      title: 'Pattern Recognition',
      description: 'AI identifies hidden patterns and trends in your data automatically',
      benefits: ['Hidden insights', 'Trend detection', 'Anomaly identification']
    },
    {
      icon: Target,
      title: 'Custom Visualizations',
      description: 'Create unique, branded visualizations tailored to your specific needs',
      benefits: ['Brand consistency', 'Custom design', 'Unique insights']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Export',
      description: 'Export visualizations to multiple formats and platforms seamlessly',
      benefits: ['Format flexibility', 'Easy sharing', 'Platform compatibility']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encrypted data processing and storage',
      benefits: ['Data protection', 'Compliance ready', 'Secure sharing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$129/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 10 visualizations',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic export options',
        'Cloud storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$249/month',
      description: 'Ideal for growing businesses with complex data needs',
      features: [
        'Up to 100 visualizations',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced export options',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited visualizations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const visualizationTypes = [
    {
      title: 'Business Intelligence',
      description: 'Comprehensive dashboards for business performance and KPI tracking',
      icon: TrendingUp,
      benefits: ['Real-time insights', 'Performance tracking', 'Strategic decisions']
    },
    {
      title: 'Financial Analytics',
      description: 'Advanced financial visualizations for budgeting, forecasting, and analysis',
      icon: DollarSign,
      benefits: ['Financial insights', 'Budget optimization', 'Risk analysis']
    },
    {
      title: 'Marketing Analytics',
      description: 'Visualize marketing campaigns, customer behavior, and ROI metrics',
      icon: Target,
      benefits: ['Campaign insights', 'Customer analysis', 'ROI optimization']
    },
    {
      title: 'Operational Dashboards',
      description: 'Monitor operations, processes, and performance metrics in real-time',
      icon: Settings,
      benefits: ['Process monitoring', 'Efficiency tracking', 'Operational insights']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Data Visualization - Zion Tech Group</title>
        <meta name="description" content="AI-powered data visualization with intelligent chart generation, interactive dashboards, and pattern recognition. Starting at $129/month." />
        <meta name="keywords" content="ai data visualization, data analytics, business intelligence, interactive dashboards, data visualization tools, chart generation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Data Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Data Visualization
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into powerful insights with AI-powered visualization tools. 
            Create stunning, interactive dashboards that reveal hidden patterns and drive better decisions.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Chart Types</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Processing</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Data Visualization Demo Request"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all cyber-button"
            >
              Get Free Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
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
        </div>
      </section>

      {/* Visualization Types Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Visualization Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visualizationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <type.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-500 text-white text-sm font-medium px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
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
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Data Visualization - ${plan.name} Plan`}
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Visualize Your Data?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join leading companies using AI Data Visualization to unlock insights and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Data Visualization - Ready to Start"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium">Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDataVisualizationPage;