'use client';
import React from 'react';
import { BarChart, TrendingUp, Database, Eye, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Users, Award, Clock, Shield, Settings, Sparkles, PieChart, Activity, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const DataAnalyticsPage: React.FC = () => {
  const services = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: BarChart,
      features: ['Interactive dashboards', 'KPI tracking', 'Trend analysis', 'Custom reports'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Data Warehousing',
      description: 'Centralize and organize your data for optimal analysis',
      icon: Database,
      features: ['Data integration', 'ETL processes', 'Data modeling', 'Quality assurance'],
      price: 'Starting at $2,500'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using machine learning',
      icon: TrendingUp,
      features: ['Predictive modeling', 'Forecasting', 'Risk assessment', 'Scenario planning'],
      price: 'Starting at $3,200/month'
    },
    {
      title: 'Real-time Analytics',
      description: 'Monitor and analyze data as it happens for instant insights',
      icon: Activity,
      features: ['Live dashboards', 'Stream processing', 'Alert systems', 'Real-time reporting'],
      price: 'Starting at $2,800/month'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic dashboards',
        'Standard reports',
        'Email support',
        'Monthly data refresh',
        '5 data sources'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,500/month',
      description: 'Most popular for growing companies',
      features: [
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        'Weekly data refresh',
        'Unlimited data sources',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,500/month',
      description: 'For large organizations',
      features: [
        'Dedicated analyst',
        'Custom solutions',
        '24/7 support',
        'Real-time data',
        'Advanced security',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const industries = [
    {
      title: 'E-commerce',
      description: 'Optimize sales and customer experience with data-driven insights',
      icon: ShoppingCart,
      metrics: ['Conversion rates', 'Customer lifetime value', 'Inventory optimization', 'Price elasticity']
    },
    {
      title: 'Healthcare',
      description: 'Improve patient outcomes and operational efficiency',
      icon: Stethoscope,
      metrics: ['Patient satisfaction', 'Treatment outcomes', 'Resource utilization', 'Cost optimization']
    },
    {
      title: 'Finance',
      description: 'Risk management and fraud detection through advanced analytics',
      icon: CreditCard,
      metrics: ['Risk assessment', 'Fraud detection', 'Portfolio optimization', 'Regulatory compliance']
    },
    {
      title: 'Manufacturing',
      description: 'Optimize production and quality control processes',
      icon: Factory,
      metrics: ['Production efficiency', 'Quality metrics', 'Predictive maintenance', 'Supply chain optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'RetailMax Solutions',
      role: 'VP of Analytics',
      content: 'Zion Tech Group transformed our data into actionable insights. Our revenue increased by 35% within 6 months of implementing their analytics solution.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'HealthTech Innovations',
      role: 'Data Director',
      content: 'Their predictive analytics helped us reduce patient readmission rates by 40%. The ROI was immediate and the insights are incredibly valuable.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'FinanceFirst Corp',
      role: 'Chief Risk Officer',
      content: 'The real-time fraud detection system they built has saved us millions. Their expertise in financial analytics is unmatched.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOOptimizer />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <SecurityEnhancer />
      <Analytics />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced Data Analytics Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Data Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into competitive advantage with our advanced analytics solutions. 
              From business intelligence to predictive modeling, we help you make data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                Get Free Analysis
              </button>
              <button className="px-8 py-4 border border-indigo-400 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Services</h2>
            <p className="text-xl text-gray-300">End-to-end data analytics solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-bold text-indigo-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-300">Tailored analytics for your industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-300 mb-4">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <TrendingUp className="w-4 h-4 text-indigo-400 mr-2" />
                      {metric}
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
            <h2 className="text-4xl font-bold text-white mb-4">Analytics Service Plans</h2>
            <p className="text-xl text-gray-300">Choose the analytics solution that fits your needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-indigo-400 scale-105' : 'border-slate-600'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600' 
                    : 'border border-indigo-400 text-indigo-300 hover:bg-indigo-400/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Data-Driven Companies</h2>
            <p className="text-xl text-gray-300">See what our clients say about our analytics solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
      <section className="py-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your data into actionable insights that drive business growth. 
            Get a free data analysis and see how we can help optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Get Free Analysis
            </button>
            <a href="tel:+13024640950" className="px-8 py-4 border border-indigo-400 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalyticsPage;