import React from 'react',
      import { Helmet } from 'react-helmet-async',
      import { 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Database,
  Cloud,
  ShoppingCart,
  DollarSign
} from 'lucide-react',
      const AIAnalyticsDashboardProPage: React.FC = () => {
  const features = [
    'AI-powered data analysis and insights',
    'Real-time dashboard customization',
    'Predictive analytics and forecasting',
    'Automated report generation',
    'Multi-source data integration',
    'Advanced visualization tools',
    'Custom KPI tracking and alerts',
    'White-label dashboard options',
    'Mobile-responsive design',
    'API access and custom integrations'
  ],
      const benefits = [
    'Make data-driven decisions 3x faster',
    'Identify trends and opportunities automatically',
    'Reduce reporting time by 90%',
    'Improve business performance by 35%',
    'Save 20+ hours weekly on data analysis',
    'Scale analytics with business growth'
  ],
      const integrations = [
    { name: 'Google Analytics', icon: <BarChart3 className="w-6 h-6 text-orange-400" /> },
    { name: 'Salesforce', icon: <Cloud className="w-6 h-6 text-blue-400" /> },
    { name: 'HubSpot', icon: <Target className="w-6 h-6 text-orange-400" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6 text-blue-600" /> },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6 text-indigo-400" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6 text-green-400" /> }
  ],
      const pricingPlans = [
    {
      name: 'Starter',
      price: '$79/mo',
      originalPrice: '$129/mo',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic AI insights',
        'Standard dashboards',
        'Email support',
        'Basic visualizations',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/mo',
      originalPrice: '$249/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 data sources',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'Advanced visualizations',
        'Real-time reports',
        'Predictive analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/mo',
      originalPrice: '$499/mo',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Full AI suite',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ],
      const useCases = [
    {
      title: 'E-commerce',
      description: 'Track sales, customer behavior, and inventory analytics',
      icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
      results: '40% increase in conversion rates'
    },
    {
      title: 'SaaS',
      description: 'Monitor user engagement, churn, and product usage',
      icon: <Cloud className="w-6 h-6 text-green-400" />,
      results: '50% reduction in churn rate'
    },
    {
      title: 'Marketing',
      description: 'Analyze campaign performance and ROI across channels',
      icon: <Target className="w-6 h-6 text-purple-400" />,
      results: '60% improvement in campaign ROI'
    },
    {
      title: 'Finance',
      description: 'Track financial metrics and cash flow analytics',
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
      results: '35% better financial forecasting'
    }
  ],
      const stats = [
    { number: '3x', label: 'Faster Decisions' },
    { number: '90%', label: 'Less Reporting Time' },
    { number: '35%', label: 'Better Performance' },
    { number: '20+', label: 'Hours Saved Weekly' }
  ],;
      return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Intelligent Business Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered analytics. Make decisions 3x faster, reduce reporting time by 90%, and improve performance by 35% with our intelligent analytics platform." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting, data analysis" />
        <meta property="og:title" content="AI Analytics Dashboard Pro - Intelligent Business Analytics" />
        <meta property="og:description" content="Transform your business with AI-powered analytics. Make decisions 3x faster and reduce reporting time by 90%." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics-dashboard-pro" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics-dashboard-pro" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Analytics Dashboard
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with AI-powered analytics that make decisions 3x faster, ;
              reduce reporting time by 90%, and improve performance by 35%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-emerald-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered analytics platform includes everything you need to transform 
              your data into actionable business insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {feature}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing data sources and tools for a unified analytics experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center justify-center mb-4">
                  <div className="group-hover:scale-110 transition-transform">
                    {integration.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center group-hover:text-emerald-300 transition-colors">
                  {integration.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their analytics with our AI platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {benefit}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics platform works across all industries and business types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <div className="text-sm text-emerald-400 font-medium">
                  {useCase.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-emerald-500 bg-slate-700/50' : ''
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
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
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Analytics?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using our AI analytics platform to make better decisions, ;
            save time, and improve performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
    },
    {

export default AIAnalyticsDashboardProPage;