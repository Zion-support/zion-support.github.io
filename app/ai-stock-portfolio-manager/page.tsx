'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  DollarSign, 
  Target, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Globe, 
  Smartphone, 
  Laptop, 
  Database, 
  AlertTriangle,
  ArrowRight,
  Download,
  Upload,
  Settings,
  Bell,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Activity,
  LineChart,
  TrendingUp as UpTrend,
  TrendingDown as DownTrend,
  Eye,
  EyeOff
} from 'lucide-react';

const AIStockPortfolioManager: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      category: 'AI-Powered Analysis',
      items: [
        'Machine learning portfolio optimization',
        'Real-time market sentiment analysis',
        'Predictive risk assessment algorithms',
        'AI-driven buy/sell recommendations',
        'Pattern recognition for market trends',
        'Automated rebalancing suggestions'
      ]
    },
    {
      category: 'Portfolio Management',
      items: [
        'Unlimited portfolio tracking',
        'Multi-asset class support (stocks, ETFs, crypto)',
        'Real-time performance monitoring',
        'Advanced portfolio analytics',
        'Tax-loss harvesting optimization',
        'Dividend tracking and forecasting'
      ]
    },
    {
      category: 'Market Intelligence',
      items: [
        'Real-time market data feeds',
        'News sentiment analysis',
        'Earnings calendar and alerts',
        'Sector rotation analysis',
        'Economic indicator tracking',
        'Global market coverage'
      ]
    },
    {
      category: 'Risk Management',
      items: [
        'Value at Risk (VaR) calculations',
        'Correlation analysis',
        'Stress testing scenarios',
        'Diversification scoring',
        'Volatility forecasting',
        'Downside protection strategies'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for individual investors',
      features: [
        'Up to 5 portfolios',
        'Basic AI recommendations',
        'Real-time market data',
        'Mobile app access',
        'Email alerts',
        'Basic analytics',
        '24/7 support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'For serious investors and traders',
      features: [
        'Everything in Starter',
        'Unlimited portfolios',
        'Advanced AI algorithms',
        'Options and futures support',
        'Advanced analytics',
        'Custom alerts',
        'API access',
        'Priority support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Institutional',
      price: '$299',
      period: '/month',
      description: 'For financial advisors and institutions',
      features: [
        'Everything in Professional',
        'Client portfolio management',
        'White-label solutions',
        'Advanced reporting',
        'Compliance tools',
        'Dedicated support',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '15% Better Returns',
      description: 'AI-optimized portfolios outperform market averages'
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Advanced risk management reduces portfolio volatility'
    },
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Instant market analysis and portfolio adjustments'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Machine learning algorithms for smarter investing'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'Portfolio Manager, WealthFirst',
      content: 'AI Stock Portfolio Manager has increased our client returns by 18% while reducing risk. The AI recommendations are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Jennifer Liu',
      role: 'Independent Investor',
      content: 'The real-time analysis and alerts have helped me make better investment decisions. My portfolio is up 25% this year.',
      rating: 5
    },
    {
      name: 'Robert Thompson',
      role: 'Financial Advisor, InvestPro',
      content: 'The institutional features allow me to manage all my clients portfolios efficiently. The reporting tools are exceptional.',
      rating: 5
    }
  ];

  const performanceStats = [
    { metric: 'Average Return', value: '15.2%', change: '+2.3%', positive: true },
    { metric: 'Risk Score', value: 'Low', change: '-12%', positive: true },
    { metric: 'Sharpe Ratio', value: '1.8', change: '+0.3', positive: true },
    { metric: 'Max Drawdown', value: '8.5%', change: '-3.2%', positive: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Stock Portfolio Manager - Intelligent Investment Management | Zion Tech Group</title>
        <meta name="description" content="Maximize your investment returns with AI Stock Portfolio Manager. Advanced AI algorithms, real-time analysis, and portfolio optimization. Beat the market by 15%." />
        <meta name="keywords" content="portfolio management, AI investing, stock analysis, investment optimization, financial technology, robo-advisor" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-stock-portfolio-manager" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              AI-Powered Investing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Stock Portfolio
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Manager
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Maximize your investment returns with AI-powered portfolio management. 
              Advanced algorithms, real-time analysis, and intelligent optimization for superior performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {performanceStats.map((stat, index) => (
              <div key={index} className="text-center bg-slate-800/50 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 mb-1">{stat.metric}</div>
                <div className={`flex items-center justify-center text-sm ${
                  stat.positive ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.positive ? <UpTrend className="w-4 h-4 mr-1" /> : <DownTrend className="w-4 h-4 mr-1" />}
                  {stat.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Investment Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to optimize your investment strategy and maximize returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-green-400 mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Investment-Grade Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that matches your investment goals. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border-2 ${
                plan.popular ? 'border-green-400' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Stock Portfolio Manager?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of investors who trust our AI to manage their portfolios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Investment Professionals
            </h2>
            <p className="text-xl text-gray-300">
              See what our users say about AI Stock Portfolio Manager.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Maximize Your Investment Returns?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 50,000+ investors who trust AI Stock Portfolio Manager with their financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions about our AI investment platform? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Primary Contact</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIStockPortfolioManager;