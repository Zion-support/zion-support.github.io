'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, BarChart3, TrendingUp, Database, Shield, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Zap, Target, Globe, Award, Lock, Cpu, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Live dashboards with instant data processing and visualization',
      benefits: ['Instant insights', 'Live monitoring', 'Real-time alerts', 'Dynamic reporting']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Machine learning algorithms that predict trends and opportunities',
      benefits: ['Predictive analytics', 'Trend forecasting', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect and analyze data from multiple sources',
      benefits: ['Multi-source integration', 'Data cleansing', 'ETL processes', 'API connections']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance and data protection',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SOC 2 certified', 'Role-based access']
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Personalized dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Personalized views', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Track KPIs and business metrics with automated reporting',
      benefits: ['KPI tracking', 'Automated reports', 'Performance alerts', 'ROI analysis']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for small businesses getting started with BI',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1GB data storage',
        'Basic AI insights'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 25 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        '10GB data storage',
        'Advanced AI insights',
        'API access',
        'Scheduled reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'Custom development',
        '24/7 support',
        'Unlimited storage',
        'Full AI suite',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      description: 'Track sales performance, customer behavior, and inventory optimization',
      results: 'Average 40% increase in sales conversion rates'
    },
    {
      industry: 'Healthcare',
      description: 'Monitor patient outcomes, resource utilization, and operational efficiency',
      results: '30% improvement in patient satisfaction scores'
    },
    {
      industry: 'Manufacturing',
      description: 'Optimize production lines, predict maintenance needs, and quality control',
      results: '25% reduction in downtime and maintenance costs'
    },
    {
      industry: 'Financial Services',
      description: 'Risk assessment, fraud detection, and regulatory compliance monitoring',
      results: '60% faster fraud detection and prevention'
    }
  ];

  return (
    <div><Helmet>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered business intelligence platform. Real-time analytics, predictive insights, and custom dashboards." />
        <meta name="keywords" content="AI business intelligence, data analytics, business intelligence, predictive analytics, data visualization, BI platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-business-intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Business Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform Your Data Into Actionable Insights
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered business intelligence platform provides real-time analytics, predictive insights, 
                and custom dashboards to help you make data-driven decisions and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  View Pricing
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
                  <p className="text-gray-300 mb-6">{tier.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-8">{tier.price}</div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tier.name} Plan`}
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Industry Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                  <p className="text-gray-300 mb-6">{useCase.description}</p>
                  <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                    <p className="text-green-400 font-semibold">{useCase.results}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Get started with our AI Business Intelligence platform and unlock the power of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIBusinessIntelligencePage;