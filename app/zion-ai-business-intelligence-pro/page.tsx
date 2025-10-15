import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Brain,
  Target,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';

const ZionAIBusinessIntelligenceProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictions.',
      icon: Brain,
      benefits: ['Predictive Analytics', 'Anomaly Detection', 'Trend Analysis', 'Custom ML Models']
    },
    {
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards that update in real-time with key performance indicators and metrics.',
      icon: Activity,
      benefits: ['Live Data Updates', 'Customizable Widgets', 'Mobile Responsive', 'Export Capabilities']
    },
    {
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports with automated scheduling and distribution to stakeholders.',
      icon: BarChart3,
      benefits: ['Automated Reports', 'Custom Templates', 'PDF/Excel Export', 'Email Distribution']
    },
    {
      title: 'Data Visualization',
      description: 'Create stunning charts, graphs, and visualizations to communicate insights effectively.',
      icon: PieChart,
      benefits: ['Interactive Charts', 'Multiple Chart Types', 'Custom Styling', 'Drill-down Capabilities']
    },
    {
      title: 'Performance Monitoring',
      description: 'Track KPIs and performance metrics across all departments and business units.',
      icon: Target,
      benefits: ['KPI Tracking', 'Goal Setting', 'Progress Monitoring', 'Alert System']
    },
    {
      title: 'Financial Analytics',
      description: 'Comprehensive financial analysis with revenue forecasting and cost optimization insights.',
      icon: DollarSign,
      benefits: ['Revenue Forecasting', 'Cost Analysis', 'Profit Margins', 'Budget Planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with BI',
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
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Up to 20 data sources',
        'Advanced dashboards',
        'AI-powered insights',
        'Priority support',
        'Up to 10 users',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced AI analytics',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label options',
        'API access',
        'Custom development'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Increase Revenue',
      description: 'Identify opportunities and optimize strategies to boost revenue by up to 40%',
      icon: TrendingUp,
      stat: '+40%'
    },
    {
      title: 'Reduce Costs',
      description: 'Optimize operations and eliminate inefficiencies to reduce costs by 25%',
      icon: DollarSign,
      stat: '-25%'
    },
    {
      title: 'Save Time',
      description: 'Automate reporting and analysis to save 20+ hours per week',
      icon: Clock,
      stat: '20+ hrs'
    },
    {
      title: 'Better Decisions',
      description: 'Make data-driven decisions with confidence using real-time insights',
      icon: Target,
      stat: '95%'
    }
  ];

  const integrations = [
    { name: 'Salesforce', logo: 'SF' },
    { name: 'HubSpot', logo: 'HS' },
    { name: 'Google Analytics', logo: 'GA' },
    { name: 'Microsoft Dynamics', logo: 'MD' },
    { name: 'QuickBooks', logo: 'QB' },
    { name: 'Shopify', logo: 'SH' },
    { name: 'Stripe', logo: 'ST' },
    { name: 'Zapier', logo: 'ZP' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Business Intelligence Pro - Advanced Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence. Advanced analytics, real-time dashboards, and predictive insights to drive growth and optimize performance." />
        <meta name="keywords" content="business intelligence, AI analytics, data visualization, business dashboards, predictive analytics, KPI tracking, business reporting" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-business-intelligence-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Business Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Business Intelligence Pro</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business data into actionable insights with our advanced AI-powered business intelligence platform. 
              Make smarter decisions, optimize performance, and drive growth with real-time analytics and predictive intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-cyan-600 hover:to-purple-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Zap className="w-5 h-5" />
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300 text-sm">Revenue Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features for Modern Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable business insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Results for Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their operations with our platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your business needs and budget
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 scale-105' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms to centralize all your business data
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">{integration.logo}</span>
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business Intelligence?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start your free trial today and experience the power of AI-driven business intelligence. 
                No credit card required, cancel anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:from-cyan-600 hover:to-purple-700 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 flex items-center justify-center space-x-2"
                >
                  <span>Schedule Demo</span>
                  <Zap className="w-5 h-5" />
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIBusinessIntelligenceProPage;