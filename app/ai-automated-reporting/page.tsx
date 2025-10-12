import React from 'react';
import {CheckCircle, ArrowRight, BarChart3, Clock, Brain} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAutomatedReportingPage: React.FC = () => {
  const benefits = [
    {
      icon: FileText,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI-powered data analysis.',
      benefits: ['Auto-generation', 'Data analysis', 'Report templates', 'Custom formatting']
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Create stunning visualizations and charts from your data automatically.',
      benefits: ['Interactive charts', 'Real-time data', 'Custom dashboards', 'Export options']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations from your data patterns.',
      benefits: ['Pattern recognition', 'Predictive analytics', 'Smart recommendations', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Customizable Templates',
      description: 'Use pre-built templates or create custom report formats for your needs.',
      benefits: ['Pre-built templates', 'Custom layouts', 'Brand consistency', 'Easy customization']
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Track and analyze key performance indicators with automated reporting.',
      benefits: ['KPI tracking', 'Performance monitoring', 'Trend analysis', 'Goal tracking']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data remains protected and compliant.',
      benefits: ['Data encryption', 'Access controls', 'Compliance', 'Audit trails']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        '10 automated reports',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 20 data sources',
        'Unlimited reports',
        'Advanced analytics',
        'Custom dashboards',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Unlimited reports',
        'Advanced AI insights',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const features = [
    {
      title: 'Intelligent Data Processing',
      description: 'Our AI algorithms automatically process and analyze your data from multiple sources.',
      icon: <Brain className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Real-time Reporting',
      description: 'Generate reports in real-time as data changes, ensuring you always have the latest insights.',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards that show exactly the metrics that matter to your business.',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Automated Scheduling',
      description: 'Set up automated report generation and delivery on your preferred schedule.',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered automated reporting solutions. Generate comprehensive reports automatically." />
        <meta name="keywords" content="AI reporting, automated reports, data analytics, business intelligence, AI insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Automated Reporting</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with intelligent automation. 
                Generate comprehensive reports automatically and make data-driven decisions faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-gray-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to automate your reporting process and gain valuable insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Reporting?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the power of intelligent automation and data-driven insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <div className="mb-6">
                    <benefit.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                    plan.popular ? 'border-blue-400 ring-2 ring-blue-400' : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-300">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
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
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                        : 'border border-gray-300 text-white hover:bg-white hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Reporting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using AI to automate their reporting and gain valuable insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAutomatedReportingPage;