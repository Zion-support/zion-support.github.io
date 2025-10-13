import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  PieChart, 
  Target, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Brain,
  Globe,
  Award,
  Sparkles,
  FileText,
  AlertTriangle,
  Calculator
} from 'lucide-react';

const ZionAIFinancialForecasterPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Revenue Forecasting',
      description: 'Advanced machine learning models predict revenue with 95% accuracy',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ['95% forecast accuracy', 'Multi-scenario modeling', 'Real-time adjustments']
    },
    {
      title: 'Intelligent Cash Flow Analysis',
      description: 'AI analyzes cash flow patterns and predicts future liquidity needs',
      icon: <DollarSign className="w-6 h-6" />,
      benefits: ['Cash flow optimization', 'Liquidity risk detection', 'Working capital insights']
    },
    {
      title: 'Automated Budget Planning',
      description: 'AI creates optimized budgets based on historical data and market trends',
      icon: <PieChart className="w-6 h-6" />,
      benefits: ['Smart budget allocation', 'Cost optimization', 'ROI predictions']
    },
    {
      title: 'Risk Assessment & Mitigation',
      description: 'AI identifies financial risks and suggests mitigation strategies',
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ['Early risk detection', 'Risk scoring', 'Mitigation recommendations']
    },
    {
      title: 'Investment Analysis',
      description: 'AI evaluates investment opportunities and portfolio performance',
      icon: <Target className="w-6 h-6" />,
      benefits: ['Investment scoring', 'Portfolio optimization', 'Performance tracking']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Automated compliance monitoring and reporting for financial regulations',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['Compliance monitoring', 'Automated reporting', 'Regulatory updates']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic forecasting',
        'Cash flow analysis',
        'Budget planning',
        'Email support',
        'Standard reports',
        '5 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI forecasting',
        'Risk assessment',
        'Investment analysis',
        'Priority support',
        'Custom reports',
        'Unlimited users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Custom AI models',
        'Full compliance suite',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'Custom training'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Chen',
      company: 'Financial Services Inc.',
      role: 'CFO',
      content: 'Zion AI Financial Forecaster improved our forecast accuracy by 40%. The AI insights are incredibly valuable.',
      rating: 5,
      avatar: 'JC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Investment Group',
      role: 'Portfolio Manager',
      content: 'The investment analysis features helped us identify 3 high-return opportunities we would have missed.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Sarah Thompson',
      company: 'Tech Startup',
      role: 'Finance Director',
      content: 'Finally, a financial tool that actually predicts the future. Our budgeting is now 60% more accurate.',
      rating: 5,
      avatar: 'ST'
    }
  ];

  const stats = [
    { number: '5,000+', label: 'Financial Teams', icon: <Calculator className="w-6 h-6" /> },
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '40%', label: 'Improved Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '24/7', label: 'AI-Powered Analysis', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Financial Forecaster - AI-Powered Financial Planning | Zion Tech Group</title>
        <meta name="description" content="Transform your financial planning with Zion AI Financial Forecaster. AI-powered revenue forecasting, cash flow analysis, budget planning, and risk assessment. Start your free trial today!" />
        <meta name="keywords" content="AI financial forecasting, financial planning software, revenue forecasting, cash flow analysis, budget planning, investment analysis, financial risk assessment" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-financial-forecaster" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/20 to-cyan-900/20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Financial
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                {' '}Forecaster
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent financial forecasting platform that uses AI to predict revenue, 
              optimize cash flow, and ensure financial success. 
              Transform your financial planning with cutting-edge artificial intelligence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-emerald-400 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-emerald-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Financial Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology automates complex financial processes and provides 
                insights that help you make better financial decisions and achieve your goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-300 group"
                >
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing for Every Business
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your financial needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-emerald-500/50 ring-2 ring-emerald-500/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
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
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-teal-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Financial Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about Zion AI Financial Forecaster
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Planning?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of financial teams already using Zion AI Financial Forecaster 
                to make better financial decisions. Start your free 14-day trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIFinancialForecasterPage;