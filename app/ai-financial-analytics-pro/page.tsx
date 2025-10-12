import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Zap, CheckCircle, ArrowRight, Star, BarChart3, DollarSign, Shield, Target, PieChart, Activity, Globe, Monitor, Sparkles, Calculator, FileText, Database, Lock, Building2, CreditCard, Wallet } from 'lucide-react';

export default function AiFinancialAnalyticsProPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: 'Real-time Analytics',
      description: 'Monitor your financial performance in real-time with comprehensive dashboards and reports',
      benefits: ['Live data streaming', 'Custom dashboards', 'Automated reports', 'Performance tracking']
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Risk Management',
      description: 'Identify and mitigate financial risks with advanced AI-powered risk assessment tools',
      benefits: ['Risk scoring', 'Early warning systems', 'Compliance monitoring', 'Fraud detection']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: 'Growth Optimization',
      description: 'Optimize your financial strategies for maximum growth and profitability',
      benefits: ['Revenue optimization', 'Cost reduction', 'Investment analysis', 'Market insights']
    }
  ];

  const analyticsFeatures = [
    {
      category: 'Financial Analysis',
      items: ['Cash Flow Analysis', 'Profit & Loss Tracking', 'Balance Sheet Management', 'Budget Planning', 'Forecasting', 'Variance Analysis']
    },
    {
      category: 'Investment Analytics',
      items: ['Portfolio Analysis', 'Risk Assessment', 'Return Optimization', 'Market Analysis', 'Asset Allocation', 'Performance Tracking']
    },
    {
      category: 'Compliance & Reporting',
      items: ['Regulatory Compliance', 'Audit Preparation', 'Tax Optimization', 'Financial Reporting', 'KPI Monitoring', 'Stakeholder Reports']
    },
    {
      category: 'AI & Automation',
      items: ['Predictive Modeling', 'Automated Insights', 'Anomaly Detection', 'Pattern Recognition', 'Smart Alerts', 'Process Automation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'Up to 5 financial accounts',
        'Basic AI analytics',
        'Standard reporting',
        'Email support',
        'Monthly insights',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Ideal for large organizations',
      features: [
        'Unlimited accounts',
        'Advanced AI features',
        'Real-time analytics',
        'Priority support',
        'Custom integrations',
        'Weekly insights',
        'White-label solution'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact Us',
      period: '',
      description: 'Tailored solutions for your needs',
      features: [
        'Custom AI models',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom development',
        'Training & consulting',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Finance',
      content: 'AI Financial Analytics Pro transformed our financial decision-making process. We increased profitability by 40% in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Investment Group',
      content: 'The predictive analytics and risk assessment features have been game-changers for our investment strategies.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Financial Services',
      content: 'The real-time insights and automated reporting have saved us countless hours while improving accuracy.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Analytics Pro - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial <span className="text-cyan-400">Analytics Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your financial decision-making with advanced AI-powered analytics that provide 
              real-time insights, predictive modeling, and comprehensive risk assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="inline-flex items-center px-8 py-4 border border-cyan-600 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for superior financial analytics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics</h2>
              <p className="text-xl text-gray-300">Everything you need for effective financial management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsFeatures.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your financial analytics needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Financial Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using our AI-powered financial analytics to make smarter decisions and drive growth.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}