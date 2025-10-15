import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Clock, 
  Award, 
  Target, 
  Mail, 
  Phone, 
  Globe,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Database,
  Smartphone,
  Monitor,
  Headphones,
  DollarSign,
  PieChart,
  LineChart,
  Activity,
  Shield,
  AlertTriangle,
  TrendingDown,
  CreditCard,
  Wallet,
  Calculator,
  Receipt,
  Building,
  Users
} from 'lucide-react';

const ZionAiFinancialAnalyticsProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Financial Forecasting',
      description: 'Predict future financial performance with 95% accuracy using advanced machine learning algorithms and historical data analysis.',
      icon: <TrendingUp className="w-6 h-6" />,
      benefits: ['95% forecast accuracy', 'Multi-scenario modeling', 'Risk assessment', 'Automated alerts']
    },
    {
      title: 'Real-Time Financial Monitoring',
      description: 'Monitor your financial health in real-time with intelligent dashboards and automated anomaly detection.',
      icon: <Activity className="w-6 h-6" />,
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Custom alerts', 'Mobile notifications']
    },
    {
      title: 'Automated Expense Categorization',
      description: 'Intelligently categorize and analyze expenses using AI-powered pattern recognition and machine learning.',
      icon: <Receipt className="w-6 h-6" />,
      benefits: ['95% auto-categorization', 'Smart suggestions', 'Receipt scanning', 'Tax optimization']
    },
    {
      title: 'Advanced Risk Assessment',
      description: 'Identify potential financial risks and opportunities with comprehensive risk analysis and predictive modeling.',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['Risk scoring', 'Early warning system', 'Compliance monitoring', 'Fraud detection']
    },
    {
      title: 'Investment Portfolio Optimization',
      description: 'Optimize your investment portfolio with AI-driven recommendations and automated rebalancing strategies.',
      icon: <PieChart className="w-6 h-6" />,
      benefits: ['Portfolio optimization', 'Risk-return analysis', 'Automated rebalancing', 'Performance tracking']
    },
    {
      title: 'Comprehensive Reporting Suite',
      description: 'Generate detailed financial reports, tax documents, and compliance reports with automated scheduling.',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['Automated reporting', 'Tax preparation', 'Compliance reports', 'Custom dashboards']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        'Up to 5 bank accounts',
        'Basic AI forecasting',
        'Expense categorization',
        'Monthly reports',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and financial advisors',
      features: [
        'Up to 25 bank accounts',
        'Advanced AI analytics',
        'Real-time monitoring',
        'Custom dashboards',
        'Priority support',
        'API access',
        'Team collaboration',
        'Advanced reporting'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited accounts',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label options',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Advisory Group',
      role: 'CFO',
      content: 'Zion AI Financial Analytics Pro helped us identify $2M in cost savings opportunities. The AI forecasting is incredibly accurate and has transformed our financial planning.',
      rating: 5,
      avatar: 'RC'
    },
    {
      name: 'Maria Rodriguez',
      company: 'TechStart Inc.',
      role: 'Finance Director',
      content: 'The automated expense categorization saved us 15 hours per week. Our team can now focus on strategic financial decisions instead of data entry.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      company: 'Investment Partners',
      role: 'Portfolio Manager',
      content: 'The portfolio optimization feature increased our returns by 12% while reducing risk. The AI recommendations are spot-on and easy to implement.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const integrations = [
    { name: 'QuickBooks', logo: 'QB' },
    { name: 'Xero', logo: 'XR' },
    { name: 'Sage', logo: 'SG' },
    { name: 'Chase Bank', logo: 'CB' },
    { name: 'Wells Fargo', logo: 'WF' },
    { name: 'Bank of America', logo: 'BA' },
    { name: 'PayPal', logo: 'PP' },
    { name: 'Stripe', logo: 'ST' }
  ];

  const keyMetrics = [
    {
      title: 'Cost Savings Identified',
      value: '$2.3M',
      description: 'Average annual savings identified by our AI',
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Forecast Accuracy',
      value: '95%',
      description: 'AI prediction accuracy for financial forecasts',
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Time Saved',
      value: '15h',
      description: 'Average hours saved per week per user',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'ROI Improvement',
      value: '23%',
      description: 'Average ROI improvement for clients',
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Financial Analytics Pro - AI-Powered Financial Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your financial management with Zion AI Financial Analytics Pro. Advanced AI forecasting, expense categorization, and portfolio optimization. Start your free trial today!" />
        <meta name="keywords" content="AI financial analytics, financial forecasting, expense management, portfolio optimization, financial intelligence, business analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-financial-analytics-pro" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Zion AI Financial Analytics Pro",
            "description": "AI-powered financial analytics platform with forecasting, expense management, and portfolio optimization",
            "url": "https://ziontechgroup.com/zion-ai-financial-analytics-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "299",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">AI-Powered Financial Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Zion <span className="text-cyan-400">AI Financial Analytics Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your financial management with the most advanced AI-powered analytics platform. 
                Predict trends, optimize investments, and make data-driven decisions with 95% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free 14-Day Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Monitor className="w-5 h-5 mr-2 inline" />
                  Watch Demo
                </Link>
              </div>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {metric.icon}
                    </div>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                    <div className="text-gray-300 text-sm font-medium mb-1">{metric.title}</div>
                    <div className="text-gray-400 text-xs">{metric.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Financial Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge artificial intelligence to gain deep insights into your financial data and make smarter decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your financial management needs. All plans include 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 relative' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
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
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Financial Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how financial teams are transforming their operations with Zion AI Financial Analytics Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing financial tools and platforms. Zion AI Financial Analytics Pro integrates with 100+ applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-cyan-400 font-bold text-lg">{integration.logo}</span>
                  </div>
                  <div className="text-white text-sm font-medium">{integration.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Financial Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of financial professionals already using Zion AI Financial Analytics Pro to make smarter decisions. 
                Start your free 14-day trial today - no credit card required.
              </p>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Support</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone Support</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Live Chat</h3>
                  <p className="text-cyan-400">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  <Monitor className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
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

export default ZionAiFinancialAnalyticsProPage;