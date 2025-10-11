import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, FileText, TrendingUp, Clock, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights from your data with automated reporting and real-time dashboards.',
      benefits: ['Live data updates', 'Interactive charts', 'Custom metrics', 'Performance tracking']
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically without manual intervention.',
      benefits: ['Scheduled reports', 'Multiple formats', 'Custom templates', 'Email delivery']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Insights',
      description: 'Leverage AI to predict trends and provide actionable business intelligence.',
      benefits: ['Trend analysis', 'Forecasting', 'Risk assessment', 'Opportunity identification']
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Time Savings',
      description: 'Reduce manual reporting time by up to 90% with intelligent automation.',
      benefits: ['Automated data collection', 'Smart formatting', 'Instant delivery', 'Zero manual work']
    }
  ];

  const benefits = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI-powered data analysis.',
      benefits: ['Auto-generation', 'Data analysis', 'Report templates', 'Custom formatting']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      title: 'Real-time Dashboards',
      description: 'Monitor key metrics and KPIs with live updating dashboards.',
      benefits: ['Live updates', 'Interactive charts', 'Custom widgets', 'Mobile responsive']
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
      title: 'Predictive Analytics',
      description: 'Get insights into future trends and performance with AI predictions.',
      benefits: ['Trend forecasting', 'Risk analysis', 'Opportunity detection', 'Performance prediction']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Data Security',
      description: 'Enterprise-grade security for all your sensitive business data.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with automated reporting',
      features: [
        'Up to 5 data sources',
        '10 automated reports/month',
        'Basic dashboard',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with advanced reporting needs',
      features: [
        'Up to 20 data sources',
        'Unlimited automated reports',
        'Advanced dashboards',
        'Priority support',
        'Custom templates',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Unlimited data sources',
        'Custom integrations',
        'White-label options',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '90%', label: 'Time Saved' },
    { number: '500+', label: 'Reports Generated Daily' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Transform your business reporting with AI-powered automated reporting solutions. Generate insights, save time, and make data-driven decisions." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Automated Reporting</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
                Transform your business reporting with intelligent automation. Generate insights, save time, and make data-driven decisions with our AI-powered reporting platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Everything you need to automate your reporting and gain valuable business insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our AI Reporting?</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Experience the power of intelligent automation and transform your reporting workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <ul className="space-y-1">
                    {benefit.benefits.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-500">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                Choose the plan that fits your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl p-8 border-2 hover:shadow-xl transition-all duration-300 relative ${plan.popular ? 'border-purple-500' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Automate Your Reporting?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
                  Join thousands of businesses already saving time and gaining insights with our AI-powered reporting platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Your Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIAutomatedReportingPage;