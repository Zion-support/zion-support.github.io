import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, FileText, TrendingUp, Clock, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically using AI-powered analytics and data processing.'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Custom Report Templates',
      description: 'Create and customize report templates to match your business requirements and branding.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights and analytics with real-time data processing and visualization.'
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Scheduled Reports',
      description: 'Set up automated report scheduling to receive regular updates without manual intervention.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data remains protected and compliant.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Fast Processing',
      description: 'Lightning-fast report generation and processing for immediate insights.'
    }
  ];

  const benefits = [
    {
      icon: <FileText className="w-6 h-6 text-green-500" />,
      title: 'Time Savings',
      description: 'Automated report generation saves 80% of manual effort and time.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: 'Accurate Insights',
      description: 'AI-powered analytics provide accurate and reliable business insights.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data remains protected and compliant.'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: 'Scalable',
      description: 'Scale your reporting capabilities as your business grows.'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      features: [
        'Up to 10 reports/month',
        'Basic templates',
        'Email delivery',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: [
        'Unlimited reports',
        'Custom templates',
        'Multiple formats',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      features: [
        'Everything in Professional',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Transform your reporting process with AI-powered automated reporting solutions. Generate comprehensive reports automatically with real-time analytics." />
        <meta name="keywords" content="AI reporting, automated reports, business intelligence, data analytics, report generation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Automated Reporting
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your reporting process with intelligent AI-powered automation. Generate comprehensive reports automatically with real-time analytics and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/ai-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to automate your reporting process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose AI Automated Reporting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Reporting?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered reporting solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomatedReportingPage;