import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Brain, DollarSign, TrendingUp, Shield, Zap, 
  CheckCircle, ArrowRight, Star, Users, Award,
  Clock, Globe, BarChart3, Target, Microscope,
  Phone, Mail, MapPin, ArrowUpRight, Play,
  BarChart, PieChart, LineChart, Activity
} from 'lucide-react',
import Layout from '../components/layout/Layout',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const features = [
  {
    title: 'Real-time Market Sentiment Analysis',
    description: 'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.',
    icon: Brain,
    color: 'from-violet-500 to-purple-600'
  },
  {
    title: 'AI-Powered Risk Assessment',
    description: 'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'Predictive Market Analysis',
    description: 'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Automated Trading Strategies',
    description: 'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.',
    icon: Zap,
    color: 'from-orange-500 to-red-600'
  },
  {
    title: 'Portfolio Performance Monitoring',
    description: 'Real-time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.',
    icon: BarChart3,
    color: 'from-pink-500 to-purple-600'
  },
  {
    title: 'Multi-Asset Class Support',
    description: 'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600'
  }
],

const pricingPlans = [
  {
    name: 'Starter',
    price: 199,
    period: 'month',
    description: 'Perfect for individual traders and small investment firms',
    features: [
      'Basic market analysis and insightsPortfolio tracking and monitoringRisk assessment and managementEmail supportUp to 5 trading strategiesBasic reporting and analytics'
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Professional',
    price: 499,
    period: 'month',
    description: 'Ideal for professional traders and growing investment firms',
    features: [
      'Advanced AI models and algorithmsAutomated trading with backtestingCustom strategy developmentPriority support and API accessAdvanced risk management toolsMulti-portfolio managementReal-time market alertsCustom reporting and dashboards'
    ],
    popular: true,
    color: 'from-cyan-500 to-purple-600'
  },
  {
    name: 'Enterprise',
    price: 1499,
    period: 'month',
    description: 'For large investment firms and institutional investors',
    features: [
      'Custom AI model training and developmentWhite-label solution with brandingDedicated account manager and supportAdvanced compliance automation24/7 monitoring and supportCustom integrations and APIsAdvanced security and audit trailsMulti-user access and permissions'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600'
  }
],

const useCases = [
  {
    title: 'Algorithmic Trading Strategy Development',
    description: 'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.',
    icon: BarChart,
    benefits: ['Increased trading efficiencyReduced emotional bias24/7 market monitoring']
  },
  {
    title: 'Portfolio Risk Management & Optimization',
    description: 'Advanced risk modeling and portfolio optimization using neural networks and machine learning.',
    icon: PieChart,
    benefits: ['Risk-adjusted returnsPortfolio diversificationReal-time risk monitoring']
  },
  {
    title: 'Market Trend Prediction & Analysis',
    description: 'Predict market movements and identify trading opportunities with AI-powered analytics.',
    icon: LineChart,
    benefits: ['Early trend detectionImproved timingHigher success rates']
  },
  {
    title: 'Automated Financial Reporting',
    description: 'Generate comprehensive financial reports and compliance documentation automatically.',
    icon: Activity,
    benefits: ['Time savingsRegulatory complianceAccurate reporting']
  }
],

const integrations = [
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },
  { name: 'TradingView', logo: '📊', category: 'Charting' },
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker' }
],

const NeuralFinanceAI: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Neural Finance AI - Advanced AI-Powered Financial Analysis Platform | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Transform your financial trading with Neural Finance AI. Advanced AI-powered market prediction, risk assessment, and automated portfolio optimization using neural networks.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI trading, financial analysis, neural networks, portfolio optimization, risk management, automated trading, Zion Tech Group&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/neural-finance-ai&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black&quot;></div>
        <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]&quot;></div>
        
        <div className=&quot;relative z-10 max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className=&quot;inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-6&quot;>
                <Brain className=&quot;w-4 h-4&quot; />
                <span>AI-Powered Financial Intelligence</span>
              </div>
              
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6 leading-tight&quot;>
                <span className=&quot;bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Neural Finance AI
                </span>
                <br />
                <span className=&quot;text-white&quot;>Revolutionary Trading Intelligence</span>
              </h1>
              
              <p className=&quot;text-xl text-gray-300 mb-8 leading-relaxed&quot;>
                Advanced AI-powered financial analysis and trading platform using neural networks for real-time market prediction, 
                risk assessment, and automated portfolio optimization with 94% accuracy.
              </p>
              
              <div className=&quot;flex flex-col sm:flex-row gap-4 mb-8&quot;>
                <Link
                  href=&quot;#pricing&quot;
                  className=&quot;bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2&quot;
                >
                  <span>Get Started</span>
                  <ArrowRight className=&quot;w-5 h-5&quot; />
                </Link>
                <button className=&quot;border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200 flex items-center justify-center space-x-2&quot;>
                  <Play className=&quot;w-5 h-5&quot; />
                  <span>Watch Demo</span>
                </button>
              </div>
              
              <div className=&quot;flex flex-wrap gap-6 text-sm text-gray-400&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                  <span>94% Market Prediction Accuracy</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                  <span>Real-time Risk Assessment</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                  <span>Multi-Asset Support</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;relative&quot;
            >
              <div className=&quot;relative bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-3xl p-8 backdrop-blur-sm&quot;>
                <div className=&quot;absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl&quot;></div>
                <div className=&quot;relative z-10&quot;>
                  <div className=&quot;grid grid-cols-2 gap-4 mb-6&quot;>
                    <div className=&quot;bg-gray-800/50 rounded-xl p-4 border border-gray-700/50&quot;>
                      <div className=&quot;text-2xl font-bold text-violet-400&quot;>$89.5B</div>
                      <div className=&quot;text-sm text-gray-400&quot;>Market Size</div>
                    </div>
                    <div className=&quot;bg-gray-800/50 rounded-xl p-4 border border-gray-700/50&quot;>
                      <div className=&quot;text-2xl font-bold text-purple-400&quot;>94%</div>
                      <div className=&quot;text-sm text-gray-400&quot;>Prediction Accuracy</div>
                    </div>
                  </div>
                  
                  <div className=&quot;space-y-4&quot;>
                    <div className=&quot;flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50&quot;>
                      <span className=&quot;text-gray-300&quot;>AI Models</span>
                      <span className=&quot;text-violet-400 font-semibold&quot;>Advanced</span>
                    </div>
                    <div className=&quot;flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50&quot;>
                      <span className=&quot;text-gray-300&quot;>Risk Management</span>
                      <span className=&quot;text-purple-400 font-semibold&quot;>Real-time</span>
                    </div>
                    <div className=&quot;flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50&quot;>
                      <span className=&quot;text-gray-300&quot;>Trading Automation</span>
                      <span className=&quot;text-pink-400 font-semibold&quot;>Enabled</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Advanced Features
              </span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Leverage cutting-edge AI and neural network technology to gain unprecedented insights into financial markets.
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300&quot;>
                  {feature.title}
                </h3>
                <p className=&quot;text-gray-400 leading-relaxed&quot;>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                Use Cases
              </span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Discover how Neural Finance AI transforms various aspects of financial trading and investment management.
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8&quot;
              >
                <div className=&quot;flex items-start space-x-4&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0&quot;>
                    <useCase.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <div className=&quot;flex-1&quot;>
                    <h3 className=&quot;text-2xl font-bold text-white mb-3&quot;>
                      {useCase.title}
                    </h3>
                    <p className=&quot;text-gray-400 mb-4 leading-relaxed&quot;>
                      {useCase.description}
                    </p>
                    <div className=&quot;space-y-2&quot;>
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                          <CheckCircle className=&quot;w-4 h-4 text-violet-400 flex-shrink-0&quot; />
                          <span>{benefit}</span>
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

      {/* Pricing Section */}
      <section id=&quot;pricing&quot; className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent&quot;>
                Pricing Plans
              </span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Choose the perfect plan for your trading needs. All plans include our core AI-powered features.
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-purple-500/10' 
                    : 'border-gray-700/50'
                }`}
              >
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <div className=&quot;bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold&quot;>
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className=&quot;text-center mb-8&quot;>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                  <p className=&quot;text-gray-400 text-sm mb-6&quot;>{plan.description}</p>
                  <div className=&quot;text-4xl font-bold text-white mb-2&quot;>
                    ${plan.price}
                    <span className=&quot;text-lg text-gray-400 font-normal&quot;>/{plan.period}</span>
                  </div>
                </div>
                
                <ul className=&quot;space-y-4 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-violet-400 flex-shrink-0&quot; />
                      <span className=&quot;text-sm&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href=&quot;/contact&quot;
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                      : 'bg-gray-800/50 text-white border border-gray-600 hover:bg-gray-700/50'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              <span className=&quot;bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent&quot;>
                Seamless Integrations
              </span>
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Connect with your existing trading platforms and tools for a unified trading experience.
            </p>
          </motion.div>
          
          <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6&quot;>
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105&quot;
              >
                <div className=&quot;text-4xl mb-3&quot;>{integration.logo}</div>
                <h3 className=&quot;text-sm font-semibold text-white mb-1&quot;>{integration.name}</h3>
                <p className=&quot;text-xs text-gray-400&quot;>{integration.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
=======
      <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-12 text-center&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Ready to Transform Your Trading?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Join leading investment firms using Neural Finance AI to gain competitive advantages 
              in today's dynamic financial markets.
            </p>
            
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-8&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105&quot;
              >
                Start Free Trial
              </Link>
              <Link
                href=&quot;/contact&quot;
                className=&quot;border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200&quot;
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className=&quot;text-sm text-gray-400&quot;>
              <p>✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className=&quot;mt-2&quot;>✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
},

export default NeuralFinanceAI,