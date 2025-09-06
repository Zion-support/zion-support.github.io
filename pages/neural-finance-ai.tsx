<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { motion } from 'framer-motion';
import {;
  Brain, DollarSign, TrendingUp, Shield, Zap,;
  CheckCircle, ArrowRight, Star, Users, Award,;
  Clock, Globe, BarChart3, Target, Microscope,;
  Phone, Mail, MapPin, ArrowUpRight, Play,;
  BarChart, PieChart, LineChart, Activity;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
<<<<<<< HEAD

import Layout from '../components/layout/Layout';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

=======
      'Basic market analysis and insightsPortfolio tracking and monitoringRisk assessment and managementEmail supportUp to 5 trading strategiesBasic reporting and analytics'
    ];
    popular: false,
    color: 'from-gray-500 to-gray-600'
  };
  {
    name: 'Professional',
    price: 499,
    period: 'month',
    description: 'Ideal for professional traders and growing investment firms',
features: [;
      'Advanced AI models and algorithms',
      'Automated trading with backtesting',
      'Custom strategy development',
      'Priority support and API access',
      'Advanced risk management tools',
      'Multi - portfolio management',
      'Real - time market alerts',
      'Custom reporting and dashboards',
    ],
    popular: true,
    color: 'from - cyan - 500 to - purple - 600',
  },  {
    name: 'Enterprise',
    price: 1499,
    period: 'month',
    description: 'For large investment firms and institutional investors',
features: [;
      'Custom AI model training and development',
      'White - label solution with branding',
      'Dedicated account manager and support',
      'Advanced compliance automation',
      '24 / 7 monitoring and support',
      'Custom integrations and APIs',
      'Advanced security and audit trails',
      'Multi - user access and permissions',
    ],
    popular: false,
    color: 'from - purple - 500 to - pink - 600',
  }, ];
;
const use_cases = [;
  {
    title: 'Algorithmic Trading Strategy Development',
    description:;
      'Develop, backtest, and deploy sophisticated trading algorithms using our AI - powered platform.',
    icon: BarChart,
    benefits: [;
      'Increased trading efficiency',
      'Reduced emotional bias',
      '24 / 7 market monitoring',
    ],
  },
  {
    title: 'Portfolio Risk Management & Optimization',
    description:;
      'Advanced risk modeling and portfolio optimization using neural networks and machine learning.',
    icon: PieChart,
    benefits: [;
      'Risk - adjusted returns',
      'Portfolio diversification',
      'Real - time risk monitoring',
    ],
  },
  {
    title: 'Market Trend Prediction & Analysis',
    description:;
      'Predict market movements and identify trading opportunities with AI - powered analytics.',
    icon: LineChart,
    benefits: [;
      'Early trend detection',
      'Improved timing',
      'Higher success rates',
    ],
  },
  {
    title: 'Automated Financial Reporting',
    description:;
      'Generate comprehensive financial reports and compliance documentation automatically.',
    icon: Activity,
    benefits: ['Time savings', 'Regulatory compliance', 'Accurate reporting'],
  }, ];
;
const integrations = [;
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },
  { name: 'TradingView', logo: '📊', category: 'Charting' },
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};
const features = [;
  {;
    title: 'Real-time Market Sentiment Analysis',;
    description:;
      'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.',;
    icon: Brain,;
    color: 'from-violet-500 to-purple-600',;
  },;
  {;
    title: 'AI-Powered Risk Assessment',;
    description:;
      'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.',;
    icon: Shield,;
    color: 'from-blue-500 to-cyan-600',;
  },;
  {;
    title: 'Predictive Market Analysis',;
    description:;
      'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-600',;
  },;
  {;
    title: 'Automated Trading Strategies',;
    description:;
      'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.',;
    icon: Zap,;
    color: 'from-orange-500 to-red-600',;
  },;
  {;
    title: 'Portfolio Performance Monitoring',;
    description:;
      'Real-time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.',;
    icon: BarChart3,;
    color: 'from-pink-500 to-purple-600',;
  },;
  {;
    title: 'Multi-Asset Class Support',;
    description:;
      'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.',;
    icon: Globe,;
    color: 'from-cyan-500 to-blue-600',;
  },];
const pricingPlans = [;
  {;
    name: 'Starter',;
    price: 199,;
    period: 'month',;
    description: 'Perfect for individual traders and small investment firms',;
    features: [;
      'Basic market analysis and insights',;
      'Portfolio tracking and monitoring',;
      'Risk assessment and management',;
      'Email support',;
      'Up to 5 trading strategies',;
      'Basic reporting and analytics',;
    ],;
    popular: false,;
    color: 'from-gray-500 to-gray-600',;
  },  {;
    name: 'Professional',;
    price: 499,;
    period: 'month',;
    description: 'Ideal for professional traders and growing investment firms',;
    features: [;
      'Advanced AI models and algorithms',;
      'Automated trading with backtesting',;
      'Custom strategy development',;
      'Priority support and API access',;
      'Advanced risk management tools',;
      'Multi-portfolio management',;
      'Real-time market alerts',;
      'Custom reporting and dashboards',;
    ],;
    popular: true,;
    color: 'from-cyan-500 to-purple-600',;
  },  {;
    name: 'Enterprise',;
    price: 1499,;
    period: 'month',;
    description: 'For large investment firms and institutional investors',;
    features: [;
      'Custom AI model training and development',;
      'White-label solution with branding',;
      'Dedicated account manager and support',;
      'Advanced compliance automation',;
      '24/7 monitoring and support',;
      'Custom integrations and APIs',;
      'Advanced security and audit trails',;
      'Multi-user access and permissions',;
    ],;
    popular: false,;
    color: 'from-purple-500 to-pink-600',;
  },];
const useCases = [;
  {;
    title: 'Algorithmic Trading Strategy Development',;
    description:;
      'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.',;
    icon: BarChart,;
    benefits: [;
      'Increased trading efficiency',;
      'Reduced emotional bias',;
      '24/7 market monitoring',;
    ],;
  },;
  {;
    title: 'Portfolio Risk Management & Optimization',;
    description:;
      'Advanced risk modeling and portfolio optimization using neural networks and machine learning.',;
    icon: PieChart,;
    benefits: [;
      'Risk-adjusted returns',;
      'Portfolio diversification',;
      'Real-time risk monitoring',;
    ],;
  },;
  {;
    title: 'Market Trend Prediction & Analysis',;
    description:;
      'Predict market movements and identify trading opportunities with AI-powered analytics.',;
    icon: LineChart,;
    benefits: [;
      'Early trend detection',;
      'Improved timing',;
      'Higher success rates',;
    ],;
  },;
  {;
    title: 'Automated Financial Reporting',;
    description:;
      'Generate comprehensive financial reports and compliance documentation automatically.',;
    icon: Activity,;
    benefits: ['Time savings', 'Regulatory compliance', 'Accurate reporting'],;
  },];
const integrations = [;
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },;
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },;
  { name: 'TradingView', logo: '📊', category: 'Charting' },;
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },;
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },;
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker' },];
const NeuralFinanceAI: React.FC = () => {;
  return (
    <Layout>;
      <Head>;
        <title>;
          Neural Finance AI - Advanced AI-Powered Financial Analysis Platform |;
          Zion Tech Group;
        </title>;
        <meta
          name='description'
          content='Transform your financial trading with Neural Finance AI. Advanced AI-powered market prediction, risk assessment, and automated portfolio optimization using neural networks.'
        />;
        <meta
          name='keywords'
          content='AI trading, financial analysis, neural networks, portfolio optimization, risk management, automated trading, Zion Tech Group'
        />;
        <link
          rel='canonical'
        <title>Neural Finance AI - Advanced AI-Powered Financial Analysis Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your financial trading with Neural Finance AI. Advanced AI-powered market prediction, risk assessment, and automated portfolio optimization using neural networks." />
        <meta name="keywords" content="AI trading, financial analysis, neural networks, portfolio optimization, risk management, automated trading, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/neural-finance-ai" />
      </Head>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
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

const NeuralFinanceAI: React.FC = () => {_return (
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
              initial={_{ opacity: 0, _x: -30}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.8}}
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
className="relative"
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Brain, DollarSign, TrendingUp, Shield, Zap;
  CheckCircle, ArrowRight, Star, Users, Award;
  Clock, Globe, BarChart3, Target, Microscope;
  Phone, Mail, MapPin, ArrowUpRight, Play;
  BarChart, PieChart, LineChart, Activity
 } from 'lucide-react';
import Layout from '../components/layout/Layout';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com',}
const features = [
  {
<<<<<<< HEAD

    title: 'Real-time Market Sentiment Analysis',
    description: 'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.',
    icon: Brain,

    color: 'from-violet-500 to-purple-600'
  }

];


=======
    title: 'Real-time Market Sentiment Analysis'
    description:
      'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.'
    icon: Brain
    color: 'from-violet-500 to-purple-600'
  }
  {
    title: 'AI-Powered Risk Assessment'
    description:
      'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.'
    icon: Shield
    color: 'from-blue-500 to-cyan-600'
  }
  {
    title: 'Predictive Market Analysis'
    description:
      'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.'
    icon: TrendingUp
    color: 'from-green-500 to-emerald-600'
  }
  {
    title: 'Automated Trading Strategies'
    description:
      'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.'
    icon: Zap
    color: 'from-orange-500 to-red-600'
  }
  {
    title: 'Portfolio Performance Monitoring'
    description:
      'Real-time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.'
    icon: BarChart3
    color: 'from-pink-500 to-purple-600'
  }
  {
    title: 'Multi-Asset Class Support'
    description:
      'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.'
    icon: Globe
    color: 'from-cyan-500 to-blue-600'
  },];
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
const pricingPlans = [
  {
    name: 'Starter'
    price: 199
    period: 'month'
    description: 'Perfect for individual traders and small investment firms'
    features: [
<<<<<<< HEAD

import Head from 'next / head';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {Brain, DollarSign, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Clock, Globe, BarChart3, Target, Microscope, Phone, Mail, MapPin, ArrowUpRight, Play, BarChart, PieChart, LineChart, Activity, } from 'lucide-react';
import Layout from '../components / layout / Layout';
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com', }
;
const features = [;
  {
    title: 'Real - time Market Sentiment Analysis',
    description:;
      'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.',
    icon: Brain,
    color: 'from - violet - 500 to - purple - 600',
  },
  {
    title: 'AI - Powered Risk Assessment',
    description:;
      'Intelligent risk modeling using machine learning to identify and quantify potential risks in real - time.',
    icon: Shield,
    color: 'from - blue - 500 to - cyan - 600',
  },
  {
    title: 'Predictive Market Analysis',
    description:;
      'Neural network - powered forecasting models that predict market trends with unprecedented accuracy.',
    icon: TrendingUp,
    color: 'from - green - 500 to - emerald - 600',
  },
  {
    title: 'Automated Trading Strategies',
    description:;
      'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.',
    icon: Zap,
    color: 'from - orange - 500 to - red - 600',
  },
  {
    title: 'Portfolio Performance Monitoring',
    description:;
      'Real - time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.',
    icon: BarChart3,
    color: 'from - pink - 500 to - purple - 600',
  },
  {
    title: 'Multi - Asset Class Support',
    description:;
      'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.',
    icon: Globe,
    color: 'from - cyan - 500 to - blue - 600',
  }, ];
;
const pricing_plans = [;
  {
    name: 'Starter',
    price: 199,
    period: 'month',
    description: 'Perfect for individual traders and small investment firms',
    features: [;
      'Basic market analysis and insights',
      'Portfolio tracking and monitoring',
      'Risk assessment and management',
      'Email support',
      'Up to 5 trading strategies',
      'Basic reporting and analytics',
    ],
    popular: false,
    color: 'from - gray - 500 to - gray - 600',

=======
      'Basic market analysis and insights'
      'Portfolio tracking and monitoring'
      'Risk assessment and management'
      'Email support'
      'Up to 5 trading strategies'
      'Basic reporting and analytics'
    ]
    popular: false
    color: 'from-gray-500 to-gray-600'
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },  {
    name: 'Professional'
    price: 499
    period: 'month'
    description: 'Ideal for professional traders and growing investment firms'
    features: [
      'Advanced AI models and algorithms'
      'Automated trading with backtesting'
      'Custom strategy development'
      'Priority support and API access'
      'Advanced risk management tools'
      'Multi-portfolio management'
      'Real-time market alerts'
      'Custom reporting and dashboards'
    ]
    popular: true
    color: 'from-cyan-500 to-purple-600'
  },  {
    name: 'Enterprise'
    price: 1499
    period: 'month'
    description: 'For large investment firms and institutional investors'
    features: [
      'Custom AI model training and development'
      'White-label solution with branding'
      'Dedicated account manager and support'
      'Advanced compliance automation'
      '24/7 monitoring and support'
      'Custom integrations and APIs'
      'Advanced security and audit trails'
      'Multi-user access and permissions'
    ]
    popular: false
    color: 'from-purple-500 to-pink-600'
  },];
const useCases = [
  {
    title: 'Algorithmic Trading Strategy Development'
    description:
      'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.'
    icon: BarChart
    benefits: [
      'Increased trading efficiency'
      'Reduced emotional bias'
      '24/7 market monitoring'
    ]
  }
  {
    title: 'Portfolio Risk Management & Optimization'
    description:
      'Advanced risk modeling and portfolio optimization using neural networks and machine learning.'
    icon: PieChart
    benefits: [
      'Risk-adjusted returns'
      'Portfolio diversification'
      'Real-time risk monitoring'
    ]
  }
  {
    title: 'Market Trend Prediction & Analysis'
    description:
      'Predict market movements and identify trading opportunities with AI-powered analytics.'
    icon: LineChart
    benefits: [
      'Early trend detection'
      'Improved timing'
      'Higher success rates'
    ]
  }
  {
    title: 'Automated Financial Reporting'
    description:
      'Generate comprehensive financial reports and compliance documentation automatically.'
    icon: Activity
    benefits: ['Time savings', 'Regulatory compliance', 'Accurate reporting']
  },];
const integrations = [
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' }
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' }
  { name: 'TradingView', logo: '📊', category: 'Charting' }
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' }
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' }
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker' },];
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {Brain, DollarSign, TrendingUp, Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Clock, Globe, BarChart3, Target, Microscope, Phone, Mail, MapPin, ArrowUpRight, Play, BarChart, PieChart, LineChart, Activity,} from 'lucide-react';
import Layout from '../components/layout/Layout';
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',};

const features = [
  {
<<<<<<< HEAD
=======
    title: 'Real-time Market Sentiment Analysis',
    description:
      'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'AI-Powered Risk Assessment',
    description:
      'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Predictive Market Analysis',
    description:
      'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Automated Trading Strategies',
    description:
      'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Portfolio Performance Monitoring',
    description:
      'Real-time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.',
    icon: BarChart3,
    color: 'from-pink-500 to-purple-600',
  },
  {
    title: 'Multi-Asset Class Support',
    description:
      'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600',
  },];

const pricingPlans = [
  {
    name: 'Starter',
    price: 199,
    period: 'month',
    description: 'Perfect for individual traders and small investment firms',
    features: [
      'Basic market analysis and insights',
      'Portfolio tracking and monitoring',
      'Risk assessment and management',
      'Email support',
      'Up to 5 trading strategies',
      'Basic reporting and analytics',
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600',
  },  {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    name: 'Professional',
    price: 499,
    period: 'month',
    description: 'Ideal for professional traders and growing investment firms',
<<<<<<< HEAD

    features: [;
=======
    features: [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Advanced AI models and algorithms',
      'Automated trading with backtesting',
      'Custom strategy development',
      'Priority support and API access',
      'Advanced risk management tools',
      'Multi-portfolio management',
      'Real-time market alerts',
      'Custom reporting and dashboards',
    ],
    popular: true,
    color: 'from-cyan-500 to-purple-600',
  },  {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    name: 'Enterprise',
    price: 1499,
    period: 'month',
    description: 'For large investment firms and institutional investors',
<<<<<<< HEAD

    features: [;
      'Custom AI model training and development',
      'White - label solution with branding',
      'Dedicated account manager and support',
      'Advanced compliance automation',
      '24 / 7 monitoring and support',
      'Custom integrations and APIs',
      'Advanced security and audit trails',
      'Multi - user access and permissions',
    ],
    popular: false,
    color: 'from - purple - 500 to - pink - 600',
  }, ];
;
const use_cases = [;
  {
    title: 'Algorithmic Trading Strategy Development',
    description:;
      'Develop, backtest, and deploy sophisticated trading algorithms using our AI - powered platform.',
    icon: BarChart,
    benefits: [;
=======
    features: [
      'Custom AI model training and development',
      'White-label solution with branding',
      'Dedicated account manager and support',
      'Advanced compliance automation',
      '24/7 monitoring and support',
      'Custom integrations and APIs',
      'Advanced security and audit trails',
      'Multi-user access and permissions',
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600',
  },];

const useCases = [
  {
    title: 'Algorithmic Trading Strategy Development',
    description:
      'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.',
    icon: BarChart,
    benefits: [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Increased trading efficiency',
      'Reduced emotional bias',
      '24/7 market monitoring',
    ],
  },
  {
    title: 'Portfolio Risk Management & Optimization',
    description:
      'Advanced risk modeling and portfolio optimization using neural networks and machine learning.',
    icon: PieChart,
    benefits: [
      'Risk-adjusted returns',
      'Portfolio diversification',
      'Real-time risk monitoring',
    ],
  },
  {
    title: 'Market Trend Prediction & Analysis',
    description:
      'Predict market movements and identify trading opportunities with AI-powered analytics.',
    icon: LineChart,
    benefits: [
      'Early trend detection',
      'Improved timing',
      'Higher success rates',
    ],
  },
  {
    title: 'Automated Financial Reporting',
    description:
      'Generate comprehensive financial reports and compliance documentation automatically.',
    icon: Activity,
    benefits: ['Time savings', 'Regulatory compliance', 'Accurate reporting'],
<<<<<<< HEAD
  }, ];
;
const integrations = [;

=======
  },];

const integrations = [
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },
  { name: 'TradingView', logo: '📊', category: 'Charting' },
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },
<<<<<<< HEAD


import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


=======
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker' },];

import { motion } from 'framer-motion';
import {;
  Brain, DollarSign, TrendingUp, Shield, Zap,;
  CheckCircle, ArrowRight, Star, Users, Award,;
  Clock, Globe, BarChart3, Target, Microscope,;
  Phone, Mail, MapPin, ArrowUpRight, Play,;
  BarChart, PieChart, LineChart, Activity;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const features = [;
  {;
    title: 'Real-time Market Sentiment Analysis';
    description: 'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.';
    icon: Brain;
    color: 'from-violet-500 to-purple-600';
  };
  {;
    title: 'AI-Powered Risk Assessment',;
    description: 'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.',;
    icon: Shield,;
    color: 'from-blue-500 to-cyan-600';
  },;
  {;
    title: 'Predictive Market Analysis',;
    description: 'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-600';
  },;
  {;
    title: 'Automated Trading Strategies',;
    description: 'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.',;
    icon: Zap,;
    color: 'from-orange-500 to-red-600';
  },;
  {;
    title: 'Portfolio Performance Monitoring',;
    description: 'Real-time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.',;
    icon: BarChart3,;
    color: 'from-pink-500 to-purple-600';
  },;
  {;
    title: 'Multi-Asset Class Support',;
    description: 'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.',;
    icon: Globe,;
    color: 'from-cyan-500 to-blue-600';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const pricingPlans = [;
  {;
    name: 'Starter';
    price: 199;
    period: 'month';
    description: 'Perfect for individual traders and small investment firms';
    features: [;
      'Basic market analysis and insightsPortfolio tracking and monitoringRisk assessment and managementEmail supportUp to 5 trading strategiesBasic reporting and analytics';
    ],;
    popular: false,;
    color: 'from-gray-500 to-gray-600';
  },;
  {;
    name: 'Professional',;
    price: 499,;
    period: 'month',;
    description: 'Ideal for professional traders and growing investment firms',;
    features: [;
      'Advanced AI models and algorithmsAutomated trading with backtestingCustom strategy developmentPriority support and API accessAdvanced risk management toolsMulti-portfolio managementReal-time market alertsCustom reporting and dashboards';
    ],;
    popular: true,;
    color: 'from-cyan-500 to-purple-600';
  },;
  {;
    name: 'Enterprise',;
    price: 1499,;
    period: 'month',;
    description: 'For large investment firms and institutional investors',;
    features: [;
      'Custom AI model training and developmentWhite-label solution with brandingDedicated account manager and supportAdvanced compliance automation24/7 monitoring and supportCustom integrations and APIsAdvanced security and audit trailsMulti-user access and permissions';
    ],;
    popular: false,;
    color: 'from-purple-500 to-pink-600';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const useCases = [;
  {;
    title: 'Algorithmic Trading Strategy Development';
    description: 'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.',;
    icon: BarChart,;
    benefits: ['Increased trading efficiencyReduced emotional bias24/7 market monitoring'];
  },;
  {;
    title: 'Portfolio Risk Management & Optimization',;
    description: 'Advanced risk modeling and portfolio optimization using neural networks and machine learning.',;
    icon: PieChart,;
    benefits: ['Risk-adjusted returnsPortfolio diversificationReal-time risk monitoring'];
  },;
  {;
    title: 'Market Trend Prediction & Analysis',;
    description: 'Predict market movements and identify trading opportunities with AI-powered analytics.',;
    icon: LineChart,;
    benefits: ['Early trend detectionImproved timingHigher success rates'];
  },;
  {;
    title: 'Automated Financial Reporting',;
    description: 'Generate comprehensive financial reports and compliance documentation automatically.',;
    icon: Activity,;
    benefits: ['Time savingsRegulatory complianceAccurate reporting'];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const integrations = [;
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },;
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },;
  { name: 'TradingView', logo: '📊', category: 'Charting' },;
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },;
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },;
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const NeuralFinanceAI: React.FC = () => {
  return (
    <Layout>
      <Head>
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',};

const features = [;
  {;
    title: 'Real-time Market Sentiment Analysis',;
    description:;
      'Advanced AI algorithms analyze market sentiment with 94% accuracy using neural networks and natural language processing.',;
    icon: Brain,;
    color: 'from-violet-500 to-purple-600',;
  },;
  {;
    title: 'AI-Powered Risk Assessment',;
    description:;
      'Intelligent risk modeling using machine learning to identify and quantify potential risks in real-time.',;
    icon: Shield,;
    color: 'from-blue-500 to-cyan-600',;
  },;
  {;
    title: 'Predictive Market Analysis',;
    description:;
      'Neural network-powered forecasting models that predict market trends with unprecedented accuracy.',;
    icon: TrendingUp,;
    color: 'from-green-500 to-emerald-600',;
  },;
  {;
    title: 'Automated Trading Strategies',;
    description:;
      'Backtest and deploy automated trading strategies with advanced risk management and execution algorithms.',;
    icon: Zap,;
    color: 'from-orange-500 to-red-600',;
  },;
  {;
    title: 'Portfolio Performance Monitoring',;
    description:;
      'Real-time portfolio tracking with advanced analytics, performance metrics, and optimization suggestions.',;
    icon: BarChart3,;
    color: 'from-pink-500 to-purple-600',;
  },;
  {;
    title: 'Multi-Asset Class Support',;
    description:;
      'Comprehensive coverage of stocks, cryptocurrencies, forex, commodities, and alternative investments.',;
    icon: Globe,;
    color: 'from-cyan-500 to-blue-600',;
  },];

const pricingPlans = [;
  {;
    name: 'Starter',;
    price: 199,;
    period: 'month',;
    description: 'Perfect for individual traders and small investment firms',;
    features: [;
      'Basic market analysis and insights',;
      'Portfolio tracking and monitoring',;
      'Risk assessment and management',;
      'Email support',;
      'Up to 5 trading strategies',;
      'Basic reporting and analytics',;
    ],;
    popular: false,;
    color: 'from-gray-500 to-gray-600',;
  },  {;
    name: 'Professional',;
    price: 499,;
    period: 'month',;
    description: 'Ideal for professional traders and growing investment firms',;
    features: [;
      'Advanced AI models and algorithms',;
      'Automated trading with backtesting',;
      'Custom strategy development',;
      'Priority support and API access',;
      'Advanced risk management tools',;
      'Multi-portfolio management',;
      'Real-time market alerts',;
      'Custom reporting and dashboards',;
    ],;
    popular: true,;
    color: 'from-cyan-500 to-purple-600',;
  },  {;
    name: 'Enterprise',;
    price: 1499,;
    period: 'month',;
    description: 'For large investment firms and institutional investors',;
    features: [;
      'Custom AI model training and development',;
      'White-label solution with branding',;
      'Dedicated account manager and support',;
      'Advanced compliance automation',;
      '24/7 monitoring and support',;
      'Custom integrations and APIs',;
      'Advanced security and audit trails',;
      'Multi-user access and permissions',;
    ],;
    popular: false,;
    color: 'from-purple-500 to-pink-600',;
  },];

const useCases = [;
  {;
    title: 'Algorithmic Trading Strategy Development',;
    description:;
      'Develop, backtest, and deploy sophisticated trading algorithms using our AI-powered platform.',;
    icon: BarChart,;
    benefits: [;
      'Increased trading efficiency',;
      'Reduced emotional bias',;
      '24/7 market monitoring',;
    ],;
  },;
  {;
    title: 'Portfolio Risk Management & Optimization',;
    description:;
      'Advanced risk modeling and portfolio optimization using neural networks and machine learning.',;
    icon: PieChart,;
    benefits: [;
      'Risk-adjusted returns',;
      'Portfolio diversification',;
      'Real-time risk monitoring',;
    ],;
  },;
  {;
    title: 'Market Trend Prediction & Analysis',;
    description:;
      'Predict market movements and identify trading opportunities with AI-powered analytics.',;
    icon: LineChart,;
    benefits: [;
      'Early trend detection',;
      'Improved timing',;
      'Higher success rates',;
    ],;
  },;
  {;
    title: 'Automated Financial Reporting',;
    description:;
      'Generate comprehensive financial reports and compliance documentation automatically.',;
    icon: Activity,;
    benefits: ['Time savings', 'Regulatory compliance', 'Accurate reporting'],;
  },];

const integrations = [;
  { name: 'Bloomberg Terminal', logo: '🔵', category: 'Market Data' },;
  { name: 'Reuters Eikon', logo: '🔴', category: 'Market Data' },;
  { name: 'TradingView', logo: '📊', category: 'Charting' },;
  { name: 'MetaTrader', logo: '📈', category: 'Trading Platform' },;
  { name: 'Interactive Brokers', logo: '🏦', category: 'Broker' },;
<<<<<<< HEAD
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],

const NeuralFinanceAI: React.FC = () => {
  return (
    <Layout>
      <Head>

=======
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker' },];

const NeuralFinanceAI: React.FC = () => {;
  return (
    <Layout>;
      <Head>;
        <title>;
          Neural Finance AI - Advanced AI-Powered Financial Analysis Platform |;
          Zion Tech Group;
        </title>;

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <title>
          Neural Finance AI - Advanced AI-Powered Financial Analysis Platform
          Zion Tech Group
        </title>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        <meta
          name='description'
          content='Transform your financial trading with Neural Finance AI. Advanced AI-powered market prediction, risk assessment, and automated portfolio optimization using neural networks.'
        />
        <meta
          name='keywords'
          content='AI trading, financial analysis, neural networks, portfolio optimization, risk management, automated trading, Zion Tech Group'
        />
        <link
          rel='canonical'
<<<<<<< HEAD

=======
          href='https://ziontechgroup.com/neural-finance-ai'
        />
      </Head>
      {/* Hero Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        <title>Neural Finance AI - Advanced AI-Powered Financial Analysis Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your financial trading with Neural Finance AI. Advanced AI-powered market prediction, risk assessment, and automated portfolio optimization using neural networks." />
        <meta name="keywords" content="AI trading, financial analysis, neural networks, portfolio optimization, risk management, automated trading, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/neural-finance-ai" />
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            >


              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Hero Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'></div>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]'></div>
        <div className='relative z-10 max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Financial Intelligence</span>
              </div>
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>
                <span className='bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  Neural Finance AI
                </span>
                <br />
                <span className="text-white">Revolutionary Trading Intelligence</span>
              </h1>
<<<<<<< HEAD
<<<<<<< HEAD

              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Financial Intelligence</span>
              </div>
<<<<<<< HEAD

=======
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                  Neural Finance AI
                </span>
                <br />
                <span className="text-white">Revolutionary Trading Intelligence</span>
              </h1>
<<<<<<< HEAD

=======
              
=======


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                Advanced AI-powered financial analysis and trading platform
                using neural networks for real-time market prediction, risk
                assessment, and automated portfolio optimization with 94%
                accuracy.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced AI-powered financial analysis and trading platform using neural networks for real-time market prediction,
                risk assessment, and automated portfolio optimization with 94% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              <div className='flex flex-wrap gap-6 text-sm text-gray-400'>
                <div className='flex items-center space-x-2'>
                  <CheckCircle className='w-4 h-4 text-green-400' />
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
            
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}

=======
            <motion.div
              initial={{ opacity: 0, x: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              className="relative"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50'>
                      <span className='text-gray-300'>AI Models</span>
                      <span className='text-violet-400 font-semibold'>
                        Advanced
                      </span>
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">AI Models</span>
                      <span className="text-violet-400 font-semibold">Advanced</span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">Risk Management</span>
                      <span className="text-purple-400 font-semibold">Real-time</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                      <span className="text-gray-300">Trading Automation</span>
                      <span className="text-pink-400 font-semibold">Enabled</span>
                    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD

<<<<<<< HEAD
href='https://ziontechgroup && ziontechgroup.com/neural-finance-ai'
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden'>;
        <div className='absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black'></div>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0 && 0.1),transparent_50%)]'></div>;
        <div className='relative z-10 max-w-7xl mx-auto'>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>            <motion&& motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              <div className='inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-full text-sm text-violet-300 mb-6'>;
                <Brain className='w-4 h-4' />;
                <span>AI-Powered Financial Intelligence</span>;
              </div>;
              <h1 className='text-4xl md:text-6xl font-bold text-white mb-6 leading-tight'>;
                <span className='bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  Neural Finance AI;
                </span>;
                <br />;
                <span className='text-white'>;
                  Revolutionary Trading Intelligence;
                </span>;
              </h1>;
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>;
                Advanced AI-powered financial analysis and trading platform;
                using neural networks for real-time market prediction, risk;
                assessment, and automated portfolio optimization with 94%;
                accuracy.;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 mb-8'>;
                <Link
                  href='#pricing'
                  className='bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2'>;
                  <span>Get Started</span>;
                  <ArrowRight className='w-5 h-5' />;
                </Link>;
                <button className='border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200 flex items-center justify-center space-x-2'>;
                  <Play className='w-5 h-5' />;
                  <span>Watch Demo</span>;
                </button>;
              </div>;
              <div className='flex flex-wrap gap-6 text-sm text-gray-400'>;
                <div className='flex items-center space-x-2'>;
                  <CheckCircle className='w-4 h-4 text-green-400' />;
                  <span>94% Market Prediction Accuracy</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <CheckCircle className='w-4 h-4 text-green-400' />;
                  <span>Real-time Risk Assessment</span>;
                </div>;
                <div className='flex items-center space-x-2'>;
                  <CheckCircle className='w-4 h-4 text-green-400' />                  <span>Multi-Asset Support</span>;
                </div>;
              </div>;
            </motion && motion.div>;
            <motion&& motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              className='relative'>;
              <div className='relative bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/30 rounded-3xl p-8 backdrop-blur-sm'>;
                <div className='absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl'></div>;
                <div className='relative z-10'>;
                  <div className='grid grid-cols-2 gap-4 mb-6'>;
                    <div className='bg-gray-800/50 rounded-xl p-4 border border-gray-700/50'>;
                      <div className='text-2xl font-bold text-violet-400'>;
                        $89 && 89.5B;
                      </div>;
                      <div className='text-sm text-gray-400'>Market Size</div>;
                    </div>;
                    <div className='bg-gray-800/50 rounded-xl p-4 border border-gray-700/50'>;
                      <div className='text-2xl font-bold text-purple-400'>;
                        94%;
                      </div>;
                      <div className='text-sm text-gray-400'>;
  { name: 'TD Ameritrade', logo: '💼', category: 'Broker' }, ];
;
const NeuralFinanceAI: React.FC = () => {
  return (
    <Layout>;
      <Head>;
        <title>;
          Neural Finance AI - Advanced AI - Powered Financial Analysis Platform |;
          Zion Tech Group;
        </title>;
        <meta;
          name='description';
          content='Transform your financial trading with Neural Finance AI. Advanced AI - powered market prediction, risk assessment, and automated portfolio optimization using neural networks.';
        />;
        <meta;
          name='keywords';
          content='AI trading, financial analysis, neural networks, portfolio optimization, risk management, automated trading, Zion Tech Group';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / neural - finance - ai';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative py - 20 px - 4 sm:px - 6 lg:px - 8 overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - black via - gray - 900 to - black'></div>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (0, 255, 255, 0.1), transparent_50%)]'></div>;
        <div className='relative z - 10 max - w-7xl mx - auto'>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 12 items - center'>            <motion.div;
              initial={{ opacity: 0, coordinate_x: -30 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <div className='inline - flex items - center space - x-2 px - 4 py - 2 bg - gradient - to - r from - violet - 500 / 20 to - purple - 500 / 20 border border - violet - 500 / 30 rounded - full text - sm text - violet - 300 mb - 6'>;
                <Brain className='w - 4 h - 4' />;
                <span > AI - Powered Financial Intelligence</span>;
              </div>;
              <h1 className='text - 4xl md:text - 6xl font - bold text - white mb - 6 leading - tight'>;
                <span className='bg - gradient - to - r from - violet - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                  Neural Finance AI;
                </span>;
                <br />;
                <span className='text - white'>;
                  Revolutionary Trading Intelligence;
                </span>;
              </h1>;
              <p className='text - xl text - gray - 300 mb - 8 leading - relaxed'>;
                Advanced AI - powered financial analysis and trading platform;
                using neural networks for real - time market prediction, risk;
                assessment, and automated portfolio optimization with 94%;
                accuracy.;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 mb - 8'>;
                <Link;
                  href='#pricing';
                  className='bg - gradient - to - r from - violet - 500 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold text - lg hover:from - violet - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105 flex items - center justify - center space - x-2';
                >;
                  <span > Get Started</span>;
                  <ArrowRight className='w - 5 h - 5' />;
                </Link>;
                <button className='border border - gray - 600 text - white px - 8 py - 4 rounded - xl font - semibold text - lg hover:border - gray - 500 hover:bg - gray - 800 / 50 transition - all duration - 200 flex items - center justify - center space - x-2'>;
                  <Play className='w - 5 h - 5' />;
                  <span > Watch Demo</span>;
                </button>;
              </div>;
              <div className='flex flex - wrap gap - 6 text - sm text - gray - 400'>;
                <div className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 4 h - 4 text - green - 400' />;
                  <span > 94% Market Prediction Accuracy</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 4 h - 4 text - green - 400' />;
                  <span > Real - time Risk Assessment</span>;
                </div>;
                <div className='flex items - center space - x-2'>;
                  <CheckCircle className='w - 4 h - 4 text - green - 400' />                  <span > Multi - Asset Support</span>;
                </div>;
              </div>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_x: 30 }}
              animate={{ opacity: 1, coordinate_x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative';
            >;
              <div className='relative bg - gradient - to - br from - violet - 500 / 20 to - purple - 500 / 20 border border - violet - 500 / 30 rounded - 3xl p - 8 backdrop - blur - sm'>;
                <div className='absolute inset - 0 bg - gradient - to - br from - violet - 500 / 10 to - purple - 500 / 10 rounded - 3xl'></div>;
                <div className='relative z - 10'>;
                  <div className='grid grid - cols - 2 gap - 4 mb - 6'>;
                    <div className='bg - gray - 800 / 50 rounded - xl p - 4 border border - gray - 700 / 50'>;
                      <div className='text - 2xl font - bold text - violet - 400'>;
                        $89.5B;
                      </div>;
                      <div className='text - sm text - gray - 400'>Market Size</div>;
                    </div>;
                    <div className='bg - gray - 800 / 50 rounded - xl p - 4 border border - gray - 700 / 50'>;
                      <div className='text - 2xl font - bold text - purple - 400'>;
                        94%;
                      </div>;
                      <div className='text - sm text - gray - 400'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        Prediction Accuracy;
                      </div>;
                    </div>;
                  </div>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className='space - y-4'>;
                    <div className='flex items - center justify - between p - 3 bg - gray - 800 / 50 rounded - lg border border - gray - 700 / 50'>;
                      <span className='text - gray - 300'>AI Models</span>;
                      <span className='text - violet - 400 font - semibold'>;
                        Advanced;
                      </span>;
                    </div>;
                    <div className='flex items - center justify - between p - 3 bg - gray - 800 / 50 rounded - lg border border - gray - 700 / 50'>;
                      <span className='text - gray - 300'>Risk Management</span>;
                      <span className='text - purple - 400 font - semibold'>;
                        Real - time;
                      </span>;
                    </div>;
                    <div className='flex items - center justify - between p - 3 bg - gray - 800 / 50 rounded - lg border border - gray - 700 / 50'>;
                      <span className='text - gray - 300'>Trading Automation</span>;
                      <span className='text - pink - 400 font - semibold'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        Enabled;
                      </span>                    </div>;
                  </div>;
                </div>;
              </div>;
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {/* Features Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            className="text-center mb-16"
=======
            className='text-center mb-16'
      {/* Features Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features.map((feature, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent'>;
                Advanced Features;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Leverage cutting-edge AI and neural network technology to gain;
              unprecedented insights into financial markets.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {features && features.map((feature, index) => (;
              <motion&& motion.div
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
=======
                className='group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-105"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
<<<<<<< HEAD
                  {feature.title}
                </h3>
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

                <p className="text-gray-400 leading-relaxed">
                  {feature.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </p>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
=======
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
</div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD

=======
=======
                  {feature.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </h3>
                <p className='text-gray-400 leading-relaxed'>                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30'>
        <div className='max-w-7xl mx-auto'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            className="text-center mb-16"
=======
            className='text-center mb-16'
                <p className="text-gray-400 leading-relaxed">
                  {feature.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </p>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {useCases.map((useCase, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                Use Cases;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Discover how Neural Finance AI transforms various aspects of;
              financial trading and investment management.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>            {useCases && useCases.map((useCase, index) => (;
              <motion&& motion.div
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
=======
                className='bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8'
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, x: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
<<<<<<< HEAD
                      {useCase.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {useCase.description}
=======
                      {useCase.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {useCase.description  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                    </p>
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                      ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </div>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
<<<<<<< HEAD

          </div>;
        </div>;
      </section>;


      {/* Pricing Section */}
      <section id='pricing' className='py-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div

=======

=======
<<<<<<< HEAD
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section id='pricing' className='py-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD

=======
=======
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id='pricing' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            className="text-center mb-16"
=======
            className='text-center mb-16'
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </div>;
                  </div>;
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                Pricing Plans;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Choose the perfect plan for your trading needs. All plans include;
              our core AI-powered features.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (;
              <motion&& motion.div
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - violet - 400 to - purple - 400 bg - clip - text text - transparent'>;
                Advanced Features;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Leverage cutting - edge AI and neural network technology to gain;
              unprecedented insights into financial markets.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {features.map ((feature, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 6 hover:border - violet - 500 / 50 transition - all duration - 300 hover:transform hover:scale - 105';
              >;
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - r ${feature.color} rounded - 2xl flex items - center justify - center mb - 6 group - hover:scale - 110 transition - transform duration - 300`}
                >;
                  <feature.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <h3 className='text - xl font - bold text - white mb - 3 group - hover:text - violet - 400 transition - colors duration - 300'>;
                  {feature.title}
                </h3>;
                <p className='text - gray - 400 leading - relaxed'>                  {feature.description}
                </p>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Use Cases Section */}
      <section className='py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 900 / 30'>;
        <div className='max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                Use Cases;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Discover how Neural Finance AI transforms various aspects of;
              financial trading and investment management.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>            {use_cases.map ((use_case, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, coordinate_x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 8';
              >;
                <div className='flex items - start space - x-4'>;
                  <div className='w - 16 h - 16 bg - gradient - to - r from - violet - 500 to - purple - 600 rounded - 2xl flex items - center justify - center flex - shrink - 0'>;
                    <use_case.icon className='w - 8 h - 8 text - white' />;
                  </div>;
                  <div className='flex - 1'>;
                    <h3 className='text - 2xl font - bold text - white mb - 3'>;
                      {use_case.title}
                    </h3>;
                    <p className='text - gray - 400 mb - 4 leading - relaxed'>;
                      {use_case.description}
                    </p>;
                    <div className='space - y-2'>;
                      {use_case.benefits.map ((benefit, benefit_index) => (
                        <div;
                          key={benefit_index}
                          className='flex items - center space - x-2 text - sm text - gray - 300';
                        >;
                          <CheckCircle className='w - 4 h - 4 text - violet - 400 flex - shrink - 0' />                          <span>{benefit}</span>;
                        </div>))}
                    </div>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section id='pricing' className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
        <div className='max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip - text text - transparent'>;
                Pricing Plans;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Choose the perfect plan for your trading needs. All plans include;
              our core AI - powered features.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing_plans.map ((plan, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg - gray - 900 / 50 backdrop - blur - sm border rounded - 2xl p - 8 ${
                  plan.popular;
                    ? 'border - violet - 500 / 50 bg - gradient - to - br from - violet - 500 / 10 to - purple - 500 / 10'                    : 'border - gray - 700 / 50';
                }`}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <div className='bg - gradient - to - r from - violet - 500 to - purple - 600 text - white px - 6 py - 2 rounded - full text - sm font - semibold'>                      Most Popular;
                    </div>;
                  </div>)}
                <div className='text - center mb - 8'>;
                  <h3 className='text - 2xl font - bold text - white mb - 2'>;
                    {plan.name}
                  </h3>;
                  <p className='text - gray - 400 text - sm mb - 6'>;
                    {plan.description}
                  </p>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    ${plan.price}
                    <span className='text - lg text - gray - 400 font - normal'>;
                      /{plan.period}
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-2'>;
                    {plan && plan.name}
                  </h3>;
                  <p className='text-gray-400 text-sm mb-6'>;
                    {plan && plan.description}
                  </p>;
                  <div className='text-4xl font-bold text-white mb-2'>;
                    ${plan && plan.price}
                    <span className='text-lg text-gray-400 font-normal'>;
                      /{plan && plan.period}
                    </span>;
                  </div>;
                </div>;
                <ul className='space-y-4 mb-8'>;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li
                      key={featureIndex}
                      className='flex items-center space-x-3 text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-violet-400 flex-shrink-0' />;
                      <span className='text-sm'>{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <Link
                  href='/contact'                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 transform hover:scale-105 ${
                    plan && plan.popular
                  plan.popular 
                    ? 'border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-purple-500/10' 
                    : 'border-gray-700/50'
                }`}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular
                    ? 'border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-purple-500/10'                    : 'border-gray-700/50'
                }`}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 ${;
                  plan.popular;
                    ? 'border-violet-500/50 bg-gradient-to-br from-violet-500/10 to-purple-500/10';
                    : 'border-gray-700/50';
                }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                <div className="text-center mb-8">
=======
<<<<<<< HEAD
                )}
<div className="text-center mb-8">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                </div>
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
                <ul className="space-y-4 mb-8">
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                )}
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {plan.name}
                  </h3>
                  <p className='text-gray-400 text-sm mb-6'>
                    {plan.description}
                  </p>
                  <div className='text-4xl font-bold text-white mb-2'>
                    ${plan.price}
                    <span className='text-lg text-gray-400 font-normal'>
                      /{plan.period}
                    </span>
                  </div>
                </div>
                <ul className='space-y-4 mb-8'>
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                </div>
                <ul className='space-y-4 mb-8'>
                <ul className="space-y-4 mb-8">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
<<<<<<< HEAD
                  ))}
=======
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </ul>
                <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 transform hover:scale-105 ${
                    plan.popular
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                      : 'bg-gray-800/50 text-white border border-gray-600 hover:bg-gray-700/50'
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======

                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >;
                  Get Started;
                </Link>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-600 hover:to-purple-700'
                      : 'bg-gray-800/50 text-white border border-gray-600 hover:bg-gray-700/50'
<<<<<<< HEAD
                  }`}>;
                  Get Started;
                </Link>;
              </motion && motion.div>;
            ))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
      <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30'>
        <div className='max-w-7xl mx-auto'>          <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            className='text-center mb-16'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              <span className='bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>;
                Seamless Integrations;
              </span>;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Connect with your existing trading platforms and tools for a;
              unified trading experience.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>            {integrations && integrations.map((integration, index) => (;
              <motion&& motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 && 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className='bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105'>;
                <div className='text-4xl mb-3'>{integration && integration.logo}</div>;
                <h3 className='text-sm font-semibold text-white mb-1'>;
                  {integration && integration.name}
                </h3>;
                <p className='text-xs text-gray-400'>{integration && integration.category}</p>              </motion && motion.div>;
            className="text-center mb-16"
=======
            className='text-center mb-16'
                  }`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                >;
                  Get Started;
                </Link>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>            {integrations.map((integration, index) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              <motion.div
                    </span>;
                  </div>;
                </div>;
                <ul className='space - y-4 mb - 8'>;
                  {plan.features.map ((feature, feature_index) => (
                    <li;
                      key={feature_index}
                      className='flex items - center space - x-3 text - gray - 300';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - violet - 400 flex - shrink - 0' />;
                      <span className='text - sm'>{feature}</span>;
                    </li>))}
                </ul>;
                <Link;
                  href='/contact'                  className={`w - full py - 3 px - 6 rounded - xl font - semibold text - center transition - all duration - 200 transform hover:scale - 105 ${
                    plan.popular;
                      ? 'bg - gradient - to - r from - violet - 500 to - purple - 600 text - white hover:from - violet - 600 hover:to - purple - 700';
                      : 'bg - gray - 800 / 50 text - white border border - gray - 600 hover:bg - gray - 700 / 50';
                  }`}
                >;
                  Get Started;
                </Link>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Integrations Section */}
      <section className='py - 20 px - 4 sm:px - 6 lg:px - 8 bg - gray - 900 / 30'>;
        <div className='max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - green - 400 to - emerald - 400 bg - clip - text text - transparent'>;
                Seamless Integrations;
              </span>;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Connect with your existing trading platforms and tools for a;
              unified trading experience.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap - 6'>            {integrations.map ((integration, index) => (
              <motion.div;
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}

          </div>;
=======
<<<<<<< HEAD
</div>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className='py-20 px-4 sm: px-6 lg:px-8'>;
        <div className='max-w-7xl mx-auto'>;
          <div className='bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-12 text-center'>;
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Trading?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join leading investment firms using Neural Finance AI to gain;
              competitive advantages in today's dynamic financial markets.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <Link
                href='/contact'
                className='bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105'>;
                Start Free Trial;
              </Link>;
              <Link
                href='/contact'
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                className='bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105'
              >
                <div className='text-4xl mb-3'>{integration.logo}</div>
                <h3 className='text-sm font-semibold text-white mb-1'>
                  {integration.name}
                </h3>
                <p className='text-xs text-gray-400'>{integration.category}</p>              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact CTA */}
      <section className='py-20 px-4 sm: px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-12 text-center'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <h3 className="text-sm font-semibold text-white mb-1">{integration.name}</h3>
                <p className="text-xs text-gray-400">{integration.category}</p>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading investment firms using Neural Finance AI to gain competitive advantages 
              in today's dynamic financial markets.
            </p>
<<<<<<< HEAD

<<<<<<< HEAD
=======

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
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

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading investment firms using Neural Finance AI to gain competitive advantages
              in today's dynamic financial markets.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              >
                Start Free Trial
              </Link>
              <Link
<<<<<<< HEAD
                href="/contact"
=======
<<<<<<< HEAD
href="/contact"
=======
                href="/contact"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======


=======
<<<<<<< HEAD
<div className="text-sm text-gray-400">
              <p>✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className="mt-2">✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure</p>
            </div>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className='text-sm text-gray-400'>
              <p>
                ✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant
                Setup
              </p>
              <p className='mt-2'>
                ✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure
              </p>            </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            <div className="text-sm text-gray-400">
              <p>✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant Setup</p>
              <p className="mt-2">✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure</p>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          </div>
        </div>
      </section>
    </Layout>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
  )

export default NeuralFinanceAI;

=======

=======
<<<<<<< HEAD
  )
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  ),
};

  )
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200'>;
                Schedule Demo;
              </Link>;
            </div>;
            <div className='text-sm text-gray-400'>;
              <p>;
                ✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant;
                Setup;
              </p>;
              <p className='mt-2'>;
                ✓ 24/7 Support • ✓ 99 && 99.9% Uptime SLA • ✓ Global Infrastructure;
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                className='bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - xl p - 6 text - center hover:border - green - 500 / 50 transition - all duration - 300 hover:transform hover:scale - 105';
              >;
                <div className='text - 4xl mb - 3'>{integration.logo}</div>;
                <h3 className='text - sm font - semibold text - white mb - 1'>;
                  {integration.name}
                </h3>;
                <p className='text - xs text - gray - 400'>{integration.category}</p>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Contact CTA */}
      <section className='py - 20 px - 4 sm: px - 6 lg:px - 8'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='bg - gradient - to - r from - violet - 500 / 10 to - purple - 500 / 10 border border - violet - 500 / 20 rounded - 3xl p - 12 text - center'>;
            <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Transform Your Trading?;
            </h2>;
            <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
              Join leading investment firms using Neural Finance AI to gain;
              competitive advantages in today's dynamic financial markets.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center mb - 8'>;
              <Link;
                href='/contact';
                className='bg - gradient - to - r from - violet - 500 to - purple - 600 text - white px - 8 py - 4 rounded - xl font - semibold text - lg hover:from - violet - 600 hover:to - purple - 700 transition - all duration - 200 transform hover:scale - 105'              >;
                Start Free Trial;
              </Link>;
              <Link;
                href='/contact';
                className='border border - gray - 600 text - white px - 8 py - 4 rounded - xl font - semibold text - lg hover:border - gray - 500 hover:bg - gray - 800 / 50 transition - all duration - 200'              >;
                Schedule Demo;
              </Link>;
            </div>;
            <div className='text - sm text - gray - 400'>;
              <p>;
                ✓ 30 - Day Free Trial • ✓ No Credit Card Required • ✓ Instant;
                Setup;
              </p>;
              <p className='mt - 2'>;
                ✓ 24 / 7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure;
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </p>            </div>;
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default NeuralFinanceAI;

<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    </Layout>),
}
;
export default NeuralFinanceAI;
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
},
export default NeuralFinanceAI,
      <section className="py-20 px-4 sm: px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">;
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-3xl p-12 text-center">;
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Trading?;
            </h2>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
              Join leading investment firms using Neural Finance AI to gain competitive advantages;
              in today's dynamic financial markets.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              <Link;
                href="/contact";
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-violet-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105";
              >;
                Start Free Trial;
              </Link>;
              <Link;
                href="/contact";
                className="border border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200";
              >;
                Schedule Demo;
              </Link>;
            </div>;
            <div className="text-sm text-gray-400">;
              <p>✓ 30-Day Free Trial • ✓ No Credit Card Required • ✓ Instant Setup</p>;
              <p className="mt-2">✓ 24/7 Support • ✓ 99.9% Uptime SLA • ✓ Global Infrastructure</p>;
            </div>;
          </div>;
        </div>;
      </section>;
    </Layout>;
  );
},;
export default NeuralFinanceAI;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
