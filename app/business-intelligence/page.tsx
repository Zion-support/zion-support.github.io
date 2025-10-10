import React from 'react';
import { BarChart3, TrendingUp, Database, PieChart, Target, CheckCircle, ArrowRight, Phone, Star, Zap, Users, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools for informed decision-making',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Custom reports']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources for unified insights',
      benefits: ['Multi-source integration', 'Data cleansing', 'ETL processes']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor KPIs and business metrics with automated tracking and alerts',
      benefits: ['KPI monitoring', 'Automated alerts', 'Trend analysis']
    },
    {
      icon: PieChart,
      title: 'Interactive Dashboards',
      description: 'Create dynamic, interactive dashboards for real-time business insights',
      benefits: ['Custom dashboards', 'Drill-down capabilities', 'Mobile access']
    }
  ];

  const services = [
    {
      title: 'Data Strategy & Architecture',
      description: 'Design and implement comprehensive data strategies and architectures',
      icon: Database,
      examples: ['Data governance', 'Data modeling', 'Architecture design']
    },
    {
      title: 'Dashboard Development',
      description: 'Create custom dashboards and reporting solutions',
      icon: BarChart3,
      examples: ['Executive dashboards', 'Operational reports', 'Self-service BI']
    },
    {
      title: 'Predictive Analytics',
      description: 'Implement machine learning models for predictive insights',
      icon: TrendingUp,
      examples: ['Forecasting', 'Risk analysis', 'Customer analytics']
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visualizations',
      icon: PieChart,
      examples: ['Interactive charts', 'Geographic mapping', 'Custom visualizations']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Data Assessment',
      description: 'Analyze your current data landscape and identify opportunities',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive BI strategy tailored to your needs',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Build and deploy your BI solutions and dashboards',
      duration: '2-4 weeks'
    },
    {
      step: '04',
      title: 'Training & Support',
      description: 'Train your team and provide ongoing support and optimization',
      duration: 'Ongoing'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: 'month',
      description: 'Perfect for small businesses starting with BI',
      features: [
        'Basic dashboards',
        'Standard reports',
        'Data integration',
        'Email support',
        'Monthly training'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: 'month',
      description: 'Ideal for growing businesses with complex needs',
      features: [
        'Advanced dashboards',
        'Custom reports',
        'Predictive analytics',
        'Priority support',
        'Weekly training',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited dashboards',
        'Custom development',
        'Advanced analytics',
        '24/7 dedicated support',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '40%', label: 'Faster Decisions' },
    { icon: Target, value: '85%', label: 'Accuracy Improvement' },
    { icon: Star, value: '4.9/5', label: 'Client Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Business Intelligence
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Transform your data into strategic insights that drive business growth. 
              Advanced analytics, interactive dashboards, and predictive intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              BI Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our BI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-indigo-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Implementation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <div className="text-cyan-400 font-semibold">Duration: {step.duration}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              BI Solutions Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">
                      {plan.price}
                      {plan.period && <span className="text-lg text-gray-400">/{plan.period}</span>}
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their decision-making with our BI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Your BI Journey
              </button>
              <a 
                href="tel:+13024640950"
                className="cyber-button-outline px-8 py-4 text-lg"
              >
                Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessIntelligencePage;