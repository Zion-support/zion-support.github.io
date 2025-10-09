import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, BarChart, Brain, Target, Zap, Users } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const analyticsFeatures = [
    {
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting to predict future trends, customer behavior, and business outcomes.',
      icon: '🔮',
      benefits: [
        'Forecast sales with 90%+ accuracy',
        'Predict customer churn before it happens',
        'Identify market trends early',
        'Optimize inventory and resources'
      ]
    },
    {
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that update in real-time with AI-driven insights and recommendations.',
      icon: '📊',
      benefits: [
        'Monitor KPIs in real-time',
        'Get instant alerts on anomalies',
        'Track performance across all channels',
        'Make data-driven decisions faster'
      ]
    },
    {
      title: 'Automated Reporting',
      description: 'AI-generated reports that automatically analyze data and provide actionable insights.',
      icon: '📈',
      benefits: [
        'Generate reports automatically',
        'Identify key insights and trends',
        'Create executive summaries',
        'Save 80% of reporting time'
      ]
    },
    {
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation using machine learning to identify high-value segments.',
      icon: '👥',
      benefits: [
        'Identify high-value customer segments',
        'Personalize marketing campaigns',
        'Improve customer retention',
        'Optimize product offerings'
      ]
    },
    {
      title: 'Anomaly Detection',
      description: 'AI-powered anomaly detection to identify unusual patterns and potential issues.',
      icon: '🚨',
      benefits: [
        'Detect fraud and security threats',
        'Identify operational issues early',
        'Monitor system performance',
        'Prevent costly problems'
      ]
    },
    {
      title: 'Natural Language Queries',
      description: 'Ask questions about your data in plain English and get instant AI-powered answers.',
      icon: '💬',
      benefits: [
        'Query data without technical skills',
        'Get instant answers to complex questions',
        'Explore data through conversation',
        'Democratize data access'
      ]
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      title: 'Sales Optimization',
      description: 'Predict customer buying behavior and optimize product recommendations to increase sales by 40%.',
      metrics: ['40% increase in sales', '60% improvement in conversion', '35% reduction in cart abandonment']
    },
    {
      industry: 'Healthcare',
      title: 'Patient Analytics',
      description: 'Analyze patient data to predict health outcomes and optimize treatment plans.',
      metrics: ['25% improvement in outcomes', '30% reduction in readmissions', '50% faster diagnosis']
    },
    {
      industry: 'Finance',
      title: 'Risk Management',
      description: 'AI-powered risk assessment and fraud detection to protect against financial losses.',
      metrics: ['95% fraud detection accuracy', '60% reduction in false positives', '40% faster risk assessment']
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance',
      description: 'Predict equipment failures before they happen to minimize downtime and maintenance costs.',
      metrics: ['50% reduction in downtime', '30% lower maintenance costs', '90% prediction accuracy']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses getting started with AI analytics',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/month',
      description: 'Advanced analytics for growing businesses',
      features: [
        'Up to 20 data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Automated reporting',
        'Priority support',
        'Up to 10 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999/month',
      description: 'Complete AI analytics solution for large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label dashboards',
        'Dedicated support',
        'Custom integrations',
        'Unlimited users',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics with predictive insights, real-time dashboards, and automated reporting. Transform your data into actionable intelligence." />
        <meta name="keywords" content="ai analytics, business intelligence, predictive analytics, data visualization, automated reporting, machine learning" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable intelligence with AI-powered analytics, predictive insights, and automated reporting.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
              <div className="text-gray-300">Data Processing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            AI-Powered Analytics Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Industry Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {useCase.industry}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </div>
                <ul className="space-y-1">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Analytics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Intelligent Insights</h3>
              <p className="text-gray-300">AI automatically discovers patterns and insights in your data that humans might miss.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Predictive Power</h3>
              <p className="text-gray-300">Forecast future trends and outcomes to make proactive business decisions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-300">Process and analyze data in real-time for instant insights and faster decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 ${plan.popular ? 'ring-2 ring-purple-500 relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                  <div className="text-gray-500 text-sm">per month</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} AI Analytics Plan`}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
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
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Data into Intelligence?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start making data-driven decisions with AI-powered analytics. Get insights that matter, when you need them.
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
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsPage;