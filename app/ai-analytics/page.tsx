'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, Users, Target, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin, Eye, Sparkles, Globe, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Automatically optimize your systems and processes based on data-driven insights.',
      benefits: ['Auto-tuning', 'Performance alerts', 'Resource optimization', 'Efficiency gains']
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: ShoppingCart, color: 'text-blue-400' },
    { name: 'Healthcare', icon: Heart, color: 'text-red-400' },
    { name: 'Finance', icon: Building, color: 'text-green-400' },
    { name: 'Manufacturing', icon: Factory, color: 'text-purple-400' },
    { name: 'Education', icon: GraduationCap, color: 'text-yellow-400' },
    { name: 'Transportation', icon: Car, color: 'text-cyan-400' }
  ];

  const metrics = [
    { label: 'Data Sources', value: '50+', icon: Database },
    { label: 'Real-time Updates', value: '< 1s', icon: Zap },
    { label: 'Accuracy Rate', value: '99.9%', icon: Target },
    { label: 'Uptime', value: '99.99%', icon: Shield }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Up to 25 data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        'Up to 10 user accounts',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Unlimited users',
        'On-premise deployment',
        'Custom development'
      ],
      popular: false
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white">Loading analytics...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Real-time dashboards, predictive analytics, and automated reporting." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI-Powered
                <span className="text-gradient block">Analytics Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI analytics platform. 
                Get real-time dashboards, predictive analytics, and automated reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-futuristic text-lg px-8 py-4">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </section>

          {/* Metrics Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <metric.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Powerful Analytics Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                    <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Industries Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Trusted by Industry Leaders
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {industries.map((industry, index) => (
                  <div key={index} className="text-center group">
                    <industry.icon className={`w-12 h-12 ${industry.color} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <div className="text-white font-semibold">{industry.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Choose Your Plan
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:shadow-2xl ${
                    plan.popular ? 'border-cyan-400/50 scale-105' : 'border-white/20'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-300 mt-2">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses already using AI analytics to drive growth and make smarter decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-futuristic text-lg px-8 py-4">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIAnalyticsPage;