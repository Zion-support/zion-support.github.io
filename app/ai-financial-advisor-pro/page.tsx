import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const AIFinancialAdvisorProPage: React.FC = () => {
  const features = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'AI-Powered Investment Analysis',
      description: 'Advanced machine learning algorithms analyze market trends, company fundamentals, and economic indicators to provide personalized investment recommendations.',
      benefit: 'Average 15% higher returns'
    },
    {
      icon: ChartBarIcon,
      title: 'Portfolio Optimization',
      description: 'Continuously optimize your portfolio allocation using modern portfolio theory and AI-driven risk assessment models.',
      benefit: '25% better risk-adjusted returns'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Real-time Market Monitoring',
      description: 'Monitor global markets 24/7 with AI that identifies opportunities and risks before they impact your investments.',
      benefit: 'React 3x faster to market changes'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Risk Management',
      description: 'Advanced risk assessment and hedging strategies to protect your investments during market volatility.',
      benefit: '40% reduction in portfolio volatility'
    },
    {
      icon: BanknotesIcon,
      title: 'Tax Optimization',
      description: 'AI-powered tax-loss harvesting and strategic asset placement to minimize your tax burden legally.',
      benefit: 'Save up to $5,000 annually in taxes'
    },
    {
      icon: ClockIcon,
      title: 'Automated Rebalancing',
      description: 'Automatically rebalance your portfolio based on your risk tolerance and investment goals without manual intervention.',
      benefit: 'Maintain optimal allocation 24/7'
    }
  ];

  const pricingPlans = [
    {
      name: 'Individual',
      price: 99,
      period: 'month',
      description: 'Perfect for personal investors',
      features: [
        'Up to $100K portfolio',
        'Basic AI recommendations',
        'Monthly rebalancing',
        'Email support',
        'Mobile app access',
        'Basic tax optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: 'month',
      description: 'For serious investors',
      features: [
        'Up to $1M portfolio',
        'Advanced AI analysis',
        'Weekly rebalancing',
        'Priority support',
        'Real-time alerts',
        'Advanced tax strategies',
        'Custom risk profiles',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Institutional',
      price: 999,
      period: 'month',
      description: 'For wealth managers',
      features: [
        'Unlimited portfolio size',
        'Premium AI models',
        'Daily rebalancing',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const performanceStats = [
    { metric: '15%', label: 'Average Annual Returns', color: 'text-green-400' },
    { metric: '25%', label: 'Better Risk-Adjusted Returns', color: 'text-blue-400' },
    { metric: '40%', label: 'Reduced Volatility', color: 'text-purple-400' },
    { metric: '95%', label: 'Prediction Accuracy', color: 'text-cyan-400' }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      role: 'Portfolio Manager',
      company: 'WealthMax Capital',
      content: 'AI Financial Advisor Pro has transformed our investment strategy. The AI recommendations consistently outperform our previous manual approach.',
      rating: 5,
      returns: '+18%'
    },
    {
      name: 'Lisa Martinez',
      role: 'Financial Advisor',
      company: 'Elite Wealth Management',
      content: 'The risk management features are incredible. Our clients\' portfolios are much more stable during market downturns.',
      rating: 5,
      returns: '+12%'
    },
    {
      name: 'Robert Kim',
      role: 'Independent Investor',
      company: 'Self-Managed',
      content: 'As a busy professional, I love how the AI handles everything automatically. My returns have improved significantly.',
      rating: 5,
      returns: '+22%'
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Financial Advisor Pro - Intelligent Investment Management | Zion Tech Group"
        description="Maximize your investment returns with AI-powered portfolio optimization, real-time market analysis, and automated rebalancing. Achieve 15% higher returns with 40% less volatility."
        keywords="AI financial advisor, investment management, portfolio optimization, robo-advisor, financial planning, wealth management, investment analysis"
        canonicalUrl="https://ziontechgroup.com/ai-financial-advisor-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <TrendingUpIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">AI-Powered Investment Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  AI Financial Advisor Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Maximize your investment returns with intelligent portfolio optimization, real-time market analysis, and automated rebalancing. Achieve <span className="text-green-400 font-semibold">15% higher returns</span> with <span className="text-blue-400 font-semibold">40% less volatility</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="group relative bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Performance
                </button>
              </div>
              
              {/* Performance Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {performanceStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.metric}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Advanced <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to optimize your investment strategy and maximize returns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-green-400 text-sm font-medium">
                    <CheckCircleIcon className="w-4 h-4 mr-2" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Transparent <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your investment needs. All plans include our core AI features and 24/7 market monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-green-500 shadow-xl shadow-green-500/20' 
                    : 'border-slate-700 hover:border-green-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 text-lg">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Proven <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI Financial Advisor Pro has helped investors achieve superior returns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-2xl font-bold text-green-400">{testimonial.returns}</div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Start Building Wealth with AI
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors who trust AI Financial Advisor Pro to optimize their portfolios and maximize returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                <span className="relative z-10 flex items-center">
                  Start Your Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">+1 (302) 464-0950</a></p>
              <p>✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a></p>
              <p>🌐 <a href="https://ziontechgroup.com" className="text-green-400 hover:text-green-300">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialAdvisorProPage;