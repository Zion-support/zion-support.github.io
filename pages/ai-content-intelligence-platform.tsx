<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Mail, MapPin, 
  Brain, BarChart3, Target, Zap, Shield, Globe, Users, Award,
  Clock, DollarSign, Check, ArrowUpRight, Play, BookOpen, Code,
  ShoppingCart
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
    title: 'Real-time Content Analytics',
    description: 'Monitor content performance across all channels with live dashboards and insights',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI-Powered Optimization',
    description: 'Get intelligent suggestions for content improvement based on performance data',
    icon: Brain,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Predictive Performance Modeling',
    description: 'Forecast content success before publishing using advanced AI algorithms',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Multi-Channel Strategy',
    description: 'Optimize content across all digital platforms simultaneously',
    icon: Globe,
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Competitor Analysis',
    description: 'Track competitor content performance and identify opportunities',
    icon: Target,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'SEO Content Intelligence',
    description: 'AI-powered SEO optimization and keyword gap identification',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500'
  }
],

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    description: 'Perfect for small businesses and content creators',
    features: [
      'Real-time content analyticsAI optimization suggestionsBasic performance trackingSEO content insightsEmail supportUp to 100 content pieces/month'
    ],
    popular: false,
    color: 'from-gray-500 to-gray-600'
  },
  {
    name: 'Professional',
    price: '$5,000',
    period: '/month',
    description: 'Ideal for growing businesses and marketing teams',
    features: [
      'Everything in StarterPredictive performance modelingAdvanced competitor analysisMulti-channel optimizationPriority supportUp to 500 content pieces/monthCustom integrations'
    ],
    popular: true,
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Enterprise',
    price: '$10,000',
    period: '/month',
    description: 'For large organizations with complex content needs',
    features: [
      'Everything in ProfessionalCustom AI modelsAdvanced analyticsDedicated account manager24/7 phone supportUnlimited content piecesWhite-label solutionsAPI access'
    ],
    popular: false,
    color: 'from-purple-500 to-pink-600'
  }
],

const useCases = [
  {
    title: 'Content Marketing Optimization',
    description: 'Optimize your content strategy based on real-time performance data and AI insights',
    icon: Target,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'SEO Strategy Enhancement',
    description: 'Identify content gaps and optimize for search engines with AI-powered recommendations',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Social Media Management',
    description: 'Create engaging content that performs across all social media platforms',
    icon: Globe,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'E-commerce Content',
    description: 'Optimize product descriptions and marketing content for better conversions',
    icon: ShoppingCart,
    color: 'from-orange-500 to-red-500'
  }
],

const integrations = [
  'WordPressShopifyHubSpotMailchimpGoogle AnalyticsFacebook AdsGoogle AdsLinkedIn', 'TwitterInstagramYouTubeTikTokSlackZapierAPI Access'
],
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_CheckCircle, _ArrowRight, _Star, _TrendingUp, _Phone, _Mail, _MapPin, _Brain, _BarChart3, _Target, _Zap, _Shield, _Globe, _Users, _Award, _Clock, _DollarSign, _Check, _ArrowUpRight, _Play, _BookOpen, _Code, _ShoppingCart} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _features = [
  {_title: 'Real-time Content Analytics', _description: 'Monitor content performance across all channels with live dashboards and insights', _icon: BarChart3, _color: 'from-blue-500 to-cyan-500'},
  {_title: 'AI-Powered Optimization', _description: 'Get intelligent suggestions for content improvement based on performance data', _icon: Brain, _color: 'from-purple-500 to-pink-500'},
  {_title: 'Predictive Performance Modeling', _description: 'Forecast content success before publishing using advanced AI algorithms', _icon: TrendingUp, _color: 'from-green-500 to-emerald-500'},
  {_title: 'Multi-Channel Strategy', _description: 'Optimize content across all digital platforms simultaneously', _icon: Globe, _color: 'from-orange-500 to-red-500'},
  {_title: 'Competitor Analysis', _description: 'Track competitor content performance and identify opportunities', _icon: Target, _color: 'from-indigo-500 to-blue-500'},
  {_title: 'SEO Content Intelligence', _description: 'AI-powered SEO optimization and keyword gap identification', _icon: Zap, _color: 'from-yellow-500 to-orange-500'}
];

const _pricingPlans = [
  {_name: 'Starter', _price: '$2, _500', _period: '/month', _description: 'Perfect for small businesses and content creators', _features: [
      'Real-time content analytics', _'AI optimization suggestions', _'Basic performance tracking', _'SEO content insights', _'Email support', _'Up to 100 content pieces/month'
    ], _popular: false, _color: 'from-gray-500 to-gray-600'},
  {_name: 'Professional', _price: '$5, _000', _period: '/month', _description: 'Ideal for growing businesses and marketing teams', _features: [
      'Everything in Starter', _'Predictive performance modeling', _'Advanced competitor analysis', _'Multi-channel optimization', _'Priority support', _'Up to 500 content pieces/month', _'Custom integrations'
    ], _popular: true, _color: 'from-blue-500 to-purple-600'},
  {_name: 'Enterprise', _price: '$10, _000', _period: '/month', _description: 'For large organizations with complex content needs', _features: [
      'Everything in Professional', _'Custom AI models', _'Advanced analytics', _'Dedicated account manager', _'24/7 phone support', _'Unlimited content pieces', _'White-label solutions', _'API access'
    ], _popular: false, _color: 'from-purple-500 to-pink-600'}
];

const _useCases = [
  {_title: 'Content Marketing Optimization', _description: 'Optimize your content strategy based on real-time performance data and AI insights', _icon: Target, _color: 'from-blue-500 to-cyan-500'},
  {_title: 'SEO Strategy Enhancement', _description: 'Identify content gaps and optimize for search engines with AI-powered recommendations', _icon: TrendingUp, _color: 'from-green-500 to-emerald-500'},
  {_title: 'Social Media Management', _description: 'Create engaging content that performs across all social media platforms', _icon: Globe, _color: 'from-purple-500 to-pink-500'},
  {_title: 'E-commerce Content', _description: 'Optimize product descriptions and marketing content for better conversions', _icon: ShoppingCart, _color: 'from-orange-500 to-red-500'}
];

const _integrations = [
  'WordPress', 'Shopify', 'HubSpot', 'Mailchimp', 'Google Analytics',
  'Facebook Ads', 'Google Ads', 'LinkedIn', 'Twitter', 'Instagram',
  'YouTube', 'TikTok', 'Slack', 'Zapier', 'API Access'
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AIContentIntelligencePlatform() {_return (_<Layout>
      <Head>
        <title>AI Content Intelligence Platform | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Transform your content creation with AI-powered intelligence and analytics. Get real-time insights, optimization suggestions, and predictive performance modeling.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI content intelligence, content optimization, content analytics, AI content marketing, content performance, SEO optimization&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Content Intelligence Platform | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Transform your content creation with AI-powered intelligence and analytics.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-content-intelligence-platform&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-content-intelligence-platform&quot; />
=======
        <meta name="description" content="Transform your content creation with AI-powered intelligence and analytics. Get real-time insights, _optimization suggestions, _and predictive performance modeling." />
        <meta name="keywords" content="AI content intelligence, _content optimization, _content analytics, _AI content marketing, _content performance, _SEO optimization" />
        <meta property="og:title" content="AI Content Intelligence Platform | Zion Tech Group" />
        <meta property="og:description" content="Transform your content creation with AI-powered intelligence and analytics." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-content-intelligence-platform" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-content-intelligence-platform" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20&quot;></div>
        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12 items-center&quot;>
            <motion.div
              initial={_{ opacity: 0, _x: -30}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.8}}
            >
              <div className=&quot;flex items-center space-x-2 mb-6&quot;>
                <span className=&quot;bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full&quot;>
                  NEW SERVICE
                </span>
<<<<<<< HEAD
                <span className=&quot;text-gray-400 text-sm&quot;>Launch Date: January 15, 2025</span>
=======
                <span className="text-gray-400 text-sm">Launch Date: January 15, _2025</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <h1 className=&quot;text-4xl lg:text-6xl font-bold text-white mb-6&quot;>
                AI Content Intelligence Platform
              </h1>
<<<<<<< HEAD
              <p className=&quot;text-xl lg:text-2xl text-gray-300 mb-8&quot;>
                Transform content creation with AI-powered intelligence and analytics. Get real-time insights, optimization suggestions, and predictive performance modeling.
=======
              <p className="text-xl lg:text-2xl text-gray-300 mb-8">
                Transform content creation with AI-powered intelligence and analytics. Get real-time insights, _optimization suggestions, _and predictive performance modeling.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4&quot;>
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105&quot;
                >
                  Get Started Today
                  <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
                </Link>
                <button className=&quot;inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200&quot;>
                  <Play className=&quot;w-5 h-5 mr-2&quot; />
                  Watch Demo
                </button>
              </div>
            </motion.div>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;relative&quot;
=======
              initial={_{ opacity: 0, _x: 30}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
              className="relative"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8&quot;>
                <div className=&quot;text-6xl mb-4&quot;>🧠</div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Key Benefits</h3>
                <div className=&quot;space-y-3&quot;>
                  <div className=&quot;flex items-center text-green-400&quot;>
                    <CheckCircle className=&quot;w-5 h-5 mr-3&quot; />
                    <span>300%+ ROI improvement</span>
                  </div>
                  <div className=&quot;flex items-center text-green-400&quot;>
                    <CheckCircle className=&quot;w-5 h-5 mr-3&quot; />
                    <span>80% faster content optimization</span>
                  </div>
                  <div className=&quot;flex items-center text-green-400&quot;>
                    <CheckCircle className=&quot;w-5 h-5 mr-3&quot; />
                    <span>Real-time performance insights</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
              Powerful Features for Content Success
            </h2>
<<<<<<< HEAD
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our AI Content Intelligence Platform provides everything you need to create, optimize, and scale your content strategy.
            </p>
          </motion.div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;group relative&quot;
              >
                <div className=&quot;bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300&quot;>
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-400&quot;>{feature.description}</p>
=======
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Content Intelligence Platform provides everything you need to create, _optimize, _and scale your content strategy.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map((feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className={_`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{_feature.title}</h3>
                  <p className="text-gray-400">{_feature.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
              Perfect For Every Content Need
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Whether you're a content creator, marketing team, or enterprise organization, our platform adapts to your specific requirements.
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className=&quot;group&quot;
              >
                <div className=&quot;bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300&quot;>
                  <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{useCase.title}</h3>
                  <p className=&quot;text-gray-400 text-lg&quot;>{useCase.description}</p>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {_useCases.map(_(useCase, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _x: index % 2 === 0 ? -30 : 30}}
                whileInView={_{ opacity: 1, _x: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.2}}
                viewport={_{ once: true}}
                className="group"
              >
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className={_`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{_useCase.title}</h3>
                  <p className="text-gray-400 text-lg">{_useCase.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
              Flexible Pricing Plans
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Choose the plan that best fits your content needs and scale as you grow.
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingPlans.map((plan, index) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingPlans.map(_(plan, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: index * 0.2}}
                viewport={_{ once: true}}
                className={_`relative ${plan.popular ? 'scale-105' : ''}`}
              >
<<<<<<< HEAD
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <span className=&quot;bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full&quot;>
=======
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-sm font-bold px-4 py-2 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      MOST POPULAR
                    </span>
                  </div>
                )}
<<<<<<< HEAD
                <div className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border ${plan.popular ? 'border-blue-500' : 'border-gray-700'} rounded-2xl p-8 h-full`}>
                  <div className=&quot;text-center mb-8&quot;>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                    <div className=&quot;text-4xl font-bold text-blue-400 mb-2&quot;>{plan.price}</div>
                    <div className=&quot;text-gray-400 mb-4&quot;>{plan.period}</div>
                    <p className=&quot;text-gray-300&quot;>{plan.description}</p>
                  </div>
                  <ul className=&quot;space-y-4 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <Check className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature}
=======
                <div className={_`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border ${plan.popular ? 'border-blue-500' : 'border-gray-700'} rounded-2xl p-8 h-full`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{_plan.price}</div>
                    <div className="text-gray-400 mb-4">{_plan.period}</div>
                    <p className="text-gray-300">{_plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {_plan.features.map(_(feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                  <Link
<<<<<<< HEAD
                    href=&quot;/contact&quot;
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`}
=======
                    href="/contact"
                    className={_`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    Get Started
                    <ArrowRight className=&quot;w-4 h-4 ml-2&quot; />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Integrations Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
              Seamless Integrations
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Connect with your existing tools and platforms for a unified content management experience.
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-2 md:grid-cols-5 gap-6&quot;>
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300&quot;
              >
                <span className=&quot;text-white font-medium&quot;>{integration}</span>
=======
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {_integrations.map(_(integration, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _scale: 0.8}}
                whileInView={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-colors duration-300"
              >
                <span className="text-white font-medium">{_integration}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Contact Section */}
      <section className=&quot;py-20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
      {_/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Content Strategy?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Get in touch with our team to discuss how our AI Content Intelligence Platform can revolutionize your content creation and optimization.
            </p>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 mb-12&quot;>
              <div className=&quot;flex flex-col items-center space-y-3&quot;>
                <div className=&quot;w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center&quot;>
                  <Phone className=&quot;w-6 h-6 text-blue-400&quot; />
                </div>
                <div>
<<<<<<< HEAD
                  <h3 className=&quot;text-white font-semibold&quot;>Call Us</h3>
                  <p className=&quot;text-gray-400&quot;>{contactInfo.mobile}</p>
=======
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-400">{_contactInfo.mobile}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
              <div className=&quot;flex flex-col items-center space-y-3&quot;>
                <div className=&quot;w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center&quot;>
                  <Mail className=&quot;w-6 h-6 text-green-400&quot; />
                </div>
                <div>
<<<<<<< HEAD
                  <h3 className=&quot;text-white font-semibold&quot;>Email Us</h3>
                  <p className=&quot;text-gray-400&quot;>{contactInfo.email}</p>
=======
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-400">{_contactInfo.email}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
              <div className=&quot;flex flex-col items-center space-y-3&quot;>
                <div className=&quot;w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center&quot;>
                  <MapPin className=&quot;w-6 h-6 text-purple-400&quot; />
                </div>
                <div>
<<<<<<< HEAD
                  <h3 className=&quot;text-white font-semibold&quot;>Visit Us</h3>
                  <p className=&quot;text-gray-400&quot;>{contactInfo.address}</p>
=======
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-400">{_contactInfo.address}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Link
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105&quot;
              >
                Start Your Free Trial
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <Link
                href=&quot;/2025-innovative-new-services-showcase&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-gray-600 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-200&quot;
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}