import React from 'react'
import { Helmet } from 'react-helmet-async'
import { TrendingUp, DollarSign, BarChart3, Target, Shield, Zap, CheckCircle, ArrowRight, Star, Clock, PieChart, LineChart, AlertTriangle, Calendar, Calculator } from 'lucide-react'

const AiFinancialForecastingPage: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Predictions',
      description: 'Advanced machine learning algorithms analyze historical data and market trends to predict future financial performance with 94% accuracy.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your financial health in real-time with interactive dashboards and automated alerts for critical metrics.'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Scenario Planning',
      description: 'Model different business scenarios and their financial impact to make informed strategic decisions.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'Cash Flow Optimization',
      description: 'Predict cash flow patterns and optimize working capital to ensure business continuity and growth.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Risk Assessment',
      description: 'Identify potential financial risks and opportunities with advanced risk modeling and early warning systems.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-500" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports and forecasts automatically, saving hours of manual work.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$79',
      period: '/month',
      description: 'Perfect for startups and small businesses',
      features: [
        'Up to $1M revenue forecasting',
        'Basic financial models',
        'Monthly reports',
        'Email support',
        '5 user accounts',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Growth',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to $10M revenue forecasting',
        'Advanced AI models',
        'Weekly reports',
        'Priority support',
        '15 user accounts',
        'Advanced integrations',
        'Scenario planning',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited revenue forecasting',
        'Custom AI models',
        'Real-time reporting',
        '24/7 dedicated support',
        'Unlimited users',
        'All integrations',
        'Custom development',
        'Dedicated account manager',
        'White-label solution'
      ],
      popular: false
    }
  ]

  const forecastingTypes = [
    {
      title: 'Revenue Forecasting',
      description: 'Predict future revenue with 94% accuracy using advanced machine learning and market analysis.',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />,
      accuracy: '94% accuracy'
    },
    {
      title: 'Cash Flow Prediction',
      description: 'Forecast cash flow patterns to optimize working capital and prevent liquidity issues.',
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      accuracy: '91% accuracy'
    },
    {
      title: 'Expense Forecasting',
      description: 'Predict future expenses and budget requirements based on historical patterns and growth plans.',
      icon: <PieChart className="w-6 h-6 text-purple-500" />,
      accuracy: '89% accuracy'
    },
    {
      title: 'Market Analysis',
      description: 'Analyze market trends and competitive landscape to inform strategic financial decisions.',
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      accuracy: '92% accuracy'
    }
  ]

  const integrations = [
    'QuickBooks', 'Xero', 'Sage', 'FreshBooks', 'Wave', 'Zoho Books',
    'Salesforce', 'HubSpot', 'Stripe', 'PayPal', 'Square', 'Shopify',
    'Excel', 'Google Sheets', 'Tableau', 'Power BI', 'Slack', 'Microsoft Teams'
  ]

  const benefits = [
    {
      title: 'Reduce Financial Risk',
      description: 'Identify potential issues before they impact your business with early warning systems.',
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Improve Decision Making',
      description: 'Make data-driven financial decisions with accurate forecasts and scenario analysis.',
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Save Time & Resources',
      description: 'Automate financial forecasting and reporting, saving 20+ hours per week.',
      icon: <Clock className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Increase Profitability',
      description: 'Optimize cash flow and identify growth opportunities to increase profits by 25%.',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Financial Forecasting | Zion Tech Group - Intelligent Financial Planning</title>
        <meta name="description" content="Predict financial performance with AI-powered forecasting. 94% accuracy, real-time analytics, and automated reporting for better financial decisions." />
        <meta name="keywords" content="financial forecasting, AI predictions, cash flow forecasting, financial planning, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-financial-forecasting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>AI Financial Forecasting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Financial
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Forecasting Platform
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Predict your financial future with 94% accuracy using our advanced AI-powered forecasting platform. 
            Make smarter financial decisions, optimize cash flow, and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2 group">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
              <div className="text-gray-300 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">25%</div>
              <div className="text-gray-300 text-sm">Profit Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-gray-300 text-sm">Hours Saved/Week</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI to predict and optimize your financial future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forecasting Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Forecasting Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Predict every aspect of your financial performance with industry-leading accuracy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forecastingTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {type.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{type.description}</p>
                <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {type.accuracy}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Financial Forecasting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your financial planning with intelligent predictions and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <div className="mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing financial tools and systems
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                <span className="text-gray-300 font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your forecasting needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-green-500/50 bg-gradient-to-br from-green-500/10 to-blue-500/10' 
                  : 'border-white/20 hover:border-white/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'border border-white text-white hover:bg-white hover:text-gray-900'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Predict Your Financial Future?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses already using AI Financial Forecasting to make smarter decisions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AiFinancialForecastingPage