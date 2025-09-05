import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_Brain, _DollarSign, _TrendingUp, _Shield, _Zap, _CheckCircle, _ArrowRight, _Star, _Users, _Award, _Clock, _Globe, _BarChart3, _Target, _Microscope, _Phone, _Mail, _MapPin, _ArrowUpRight, _Play, _BarChart, _PieChart, _LineChart, _Activity} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _features = [
  {_title: 'Real-time Market Sentiment Analysis', _description: 'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.', _icon: Brain, _color: 'from-violet-500 to-purple-600'},
  {_title: 'AI-Powered Risk Assessment', _description: 'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.', _icon: Shield, _color: 'from-blue-500 to-cyan-600'},
  {_title: 'Predictive Market Analysis', _description: 'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.', _icon: TrendingUp, _color: 'from-green-500 to-emerald-600'},
  {_title: 'Automated Trading Strategies', _description: 'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.', _icon: Zap, _color: 'from-orange-500 to-red-600'},
  {_title: 'Portfolio Performance Monitoring', _description: 'Real-time portfolio tracking with advanced analytics, _performance metrics, _and optimization suggestions.', _icon: BarChart3, _color: 'from-pink-500 to-purple-600'},
  {_title: 'Multi-Asset Class Support', _description: 'Comprehensive coverage of stocks, _cryptocurrencies, _forex, _commodities, _and alternative investments.', _icon: Globe, _color: 'from-cyan-500 to-blue-600'}
];

const _pricingPlans = [
  {_name: 'Starter', _price: 199, _period: 'month', _description: 'Perfect for individual traders and small investment firms', _features: [
      'Basic market analysis and insights', _'Portfolio tracking and monitoring', _'Risk assessment and management', _'Email support', _'Up to 5 trading strategies', _'Basic reporting and analytics'
    ], _popular: false, _color: 'from-gray-500 to-gray-600'},
  {_name: 'Professional', _price: 499, _period: 'month', _description: 'Ideal for professional traders and growing investment firms', _features: [
      'Advanced AI models and algorithms', _'Automated trading with backtesting', _'Custom strategy development', _'Priority support and API access', _'Advanced risk management tools', _'Multi-portfolio management', _'Real-time market alerts', _'Custom reporting and dashboards'
    ], _popular: true, _color: 'from-cyan-500 to-purple-600'},
  {_name: 'Enterprise', _price: 1499, _period: 'month', _description: 'For large investment firms and institutional investors', _features: [
      'Custom AI model training and development', _'White-label solution with branding', _'Dedicated account manager and support', _'Advanced compliance automation', _'24/7 monitoring and support', _'Custom integrations and APIs', _'Advanced security and audit trails', _'Multi-user access and permissions'
    ], _popular: false, _color: 'from-purple-500 to-pink-600'}
];

const _useCases = [
  {_title: 'Algorithmic Trading Strategy Development', _description: 'Develop, _backtest, _and deploy sophisticated trading algorithms using our AI-powered platform.', _icon: BarChart, _benefits: ['Increased trading efficiency', _'Reduced emotional bias', _'24/7 market monitoring']},
  {_title: 'Portfolio Risk Management & Optimization', _description: 'Advanced risk modeling and portfolio optimization using neural networks and machine learning.', _icon: PieChart, _benefits: ['Risk-adjusted returns', _'Portfolio diversification', _'Real-time risk monitoring']},
  {_title: 'Market Trend Prediction & Analysis', _description: 'Predict market movements and identify trading opportunities with AI-powered analytics.', _icon: LineChart, _benefits: ['Early trend detection', _'Improved timing', _'Higher success rates']},
  {_title: 'Automated Financial Reporting', _description: 'Generate comprehensive financial reports and compliance documentation automatically.', _icon: Activity, _benefits: ['Time savings', _'Regulatory compliance', _'Accurate reporting']}
];

const _integrations = [
  {_name: 'Bloomberg Terminal', _logo: '🔵', _category: 'Market Data'},
  {_name: 'Reuters Eikon', _logo: '🔴', _category: 'Market Data'},
  {_name: 'TradingView', _logo: '📊', _category: 'Charting'},
  {_name: 'MetaTrader', _logo: '📈', _category: 'Trading Platform'},
  {_name: 'Interactive Brokers', _logo: '🏦', _category: 'Broker'},
  {_name: 'TD Ameritrade', _logo: '💼', _category: 'Broker'}
];

const NeuralFinanceAI: React.FC = () => {_return (
    <Layout>
      <Head>
        <title>Neural Finance AI - Advanced AI-Powered Financial Analysis Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your financial trading with Neural Finance AI. Advanced AI-powered market prediction, _risk assessment, _and automated portfolio optimization using neural networks." />
        <meta name="keywords" content="AI trading, _financial analysis, _neural networks, _portfolio optimization, _risk management, _automated trading, _Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/neural-finance-ai" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={_{ opacity: 0, _x: -30}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.8}}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Financial Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Neural Finance AI
                </span>
                <br />
                <span className="text-white">Revolutionary Trading Intelligence</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced AI-powered financial analysis and trading platform using neural networks for real-time market prediction, 
                risk assessment, and automated portfolio optimization with 94% accuracy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="#pricing"
                  className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>94% Market Prediction Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Real-time Risk Assessment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Multi-Asset Support</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={_{ opacity: 0, _x: 30}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-3xl p-8 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-violet-400">$89.5B</div>
                      <div className="text-sm text-gray-400">Market Size</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <div className="text-2xl font-bold text-purple-400">94%</div>
                      <div className="text-sm text-gray-400">Prediction Accuracy</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">AI Models</span>
                      <span className="text-violet-400 font-semibold">Advanced</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">Risk Management</span>
                      <span className="text-purple-400 font-semibold">Real-time</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">Trading Automation</span>
                      <span className="text-pink-400 font-semibold">Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {_/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Advanced Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI and neural network technology to gain unprecedented insights into financial markets.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map(_(feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={_`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                  {_feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {_feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Use Cases
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Neural Finance AI transforms various aspects of financial trading and investment management.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {_useCases.map(_(useCase, _index) => (_<motion.div
                key={index}
                initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {_useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {_useCase.description}
                    </p>
                    <div className="space-y-2">
                      {_useCase.benefits.map((benefit, _benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                          <span>{_benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pricing Plans
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your trading needs. All plans include our core AI-powered features.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className={_`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-purple-500/10' 
                    : 'border-gray-700/50'}`}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{_plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${_plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{_plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                      <span className="text-sm">{_feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={_`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                      : 'bg-gray-800/50 text-white border border-gray-600 hover:bg-gray-700/50'}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Seamless Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing trading platforms and tools for a unified trading experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {_integrations.map(_(integration, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _scale: 0.8}}
                whileInView={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{_integration.logo}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{_integration.name}</h3>
                <p className="text-xs text-gray-400">{_integration.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading investment firms using Neural Finance AI to gain competitive advantages 
              in today's dynamic financial markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href="/contact"
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              <p>✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className="mt-2">✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NeuralFinanceAI;