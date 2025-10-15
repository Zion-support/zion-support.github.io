import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  Database,
  PieChart,
  LineChart,
  Activity,
  Eye,
  Lock,
  Smartphone,
  Monitor,
  FileText
} from 'lucide-react';

const ZionAIBusinessIntelligenceProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze your data to uncover hidden patterns and insights.',
      icon: <Brain className="w-6 h-6" />,
      benefits: ['Predictive Analytics', 'Anomaly Detection', 'Trend Analysis', 'Pattern Recognition']
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Live dashboards that update in real-time with your most critical business metrics.',
      icon: <Activity className="w-6 h-6" />,
      benefits: ['Live Data Streaming', 'Custom Widgets', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports with AI-powered insights and recommendations.',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['Automated Reports', 'Custom Templates', 'Scheduled Delivery', 'Multi-format Export']
    },
    {
      title: 'Data Visualization',
      description: 'Beautiful, interactive charts and graphs that make complex data easy to understand.',
      icon: <PieChart className="w-6 h-6" />,
      benefits: ['Interactive Charts', '3D Visualizations', 'Custom Themes', 'Export Options']
    },
    {
      title: 'Predictive Modeling',
      description: 'Forecast future trends and outcomes using advanced statistical models.',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment', 'Scenario Analysis']
    },
    {
      title: 'Collaborative Workspace',
      description: 'Share insights and collaborate with your team in real-time.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Team Collaboration', 'Comment System', 'Version Control', 'Access Management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with BI',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1GB data storage',
        '5 users included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited data sources',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        '10GB data storage',
        '25 users included',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited data storage',
        'Unlimited users',
        'Advanced security',
        'On-premise deployment',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Sales Performance Analysis',
      description: 'Track sales metrics, identify top performers, and optimize your sales strategy.',
      icon: <TrendingUp className="w-8 h-8" />,
      metrics: ['Revenue Growth', 'Conversion Rates', 'Customer Acquisition', 'Sales Pipeline']
    },
    {
      title: 'Customer Behavior Insights',
      description: 'Understand customer patterns and preferences to improve engagement.',
      icon: <Users className="w-8 h-8" />,
      metrics: ['Customer Lifetime Value', 'Churn Rate', 'Engagement Score', 'Satisfaction Rating']
    },
    {
      title: 'Financial Performance',
      description: 'Monitor financial health and identify opportunities for cost optimization.',
      icon: <DollarSign className="w-8 h-8" />,
      metrics: ['Profit Margins', 'Cash Flow', 'Expense Analysis', 'ROI Tracking']
    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize operations and identify bottlenecks in your processes.',
      icon: <Target className="w-8 h-8" />,
      metrics: ['Process Efficiency', 'Resource Utilization', 'Quality Metrics', 'Performance KPIs']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Business Intelligence Pro - Advanced Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with Zion AI Business Intelligence Pro. Advanced analytics, real-time dashboards, and AI-powered predictions for modern businesses." />
        <meta name="keywords" content="business intelligence, AI analytics, data visualization, predictive analytics, business dashboards, data insights, BI platform" />
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
              Zion AI Business Intelligence <span className="text-cyan-400">Pro</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our advanced AI-powered business intelligence platform. 
              Get real-time analytics, predictive modeling, and beautiful visualizations that drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-sm">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5min</div>
                <div className="text-gray-300 text-sm">Setup Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into strategic insights and competitive advantages.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses across industries use our platform to drive growth and efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-cyan-400 font-semibold text-sm">{metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data into Insights?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using Zion AI Business Intelligence Pro to make data-driven decisions and accelerate growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIBusinessIntelligenceProPage;