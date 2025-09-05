<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  DollarSign, TrendingUp, Shield, Zap, Target, BarChart3,
  CheckCircle, Star, Globe, Lock, Smartphone, Monitor,
  Award, MessageCircle, Calculator
} from 'lucide-react',
=======
import React from 'react';
import Head from 'next/head';
import {_DollarSign, _TrendingUp, _Shield, _Zap, _Target, _BarChart3, _CheckCircle, _Star, _Globe, _Lock, _Smartphone, _Monitor, _Award, _MessageCircle, _Calculator} from 'lucide-react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AIFinancialPlanningPlatform() {_const _features = [
    {
<<<<<<< HEAD
      icon: <DollarSign className=&quot;w-6 h-6&quot; />,
      title: 'AI-Powered Financial Analysis',
      description: 'Advanced financial modeling and analysis using machine learning to identify opportunities and risks.'
    },
    {
      icon: <TrendingUp className=&quot;w-6 h-6&quot; />,
      title: 'Predictive Financial Planning',
      description: 'Forecast financial outcomes and create data-driven financial plans with AI-powered insights.'
    },
    {
      icon: <Target className=&quot;w-6 h-6&quot; />,
      title: 'Goal-Based Planning',
      description: 'Personalized financial planning based on your specific goals, timeline, and risk tolerance.'
    },
    {
      icon: <Zap className=&quot;w-6 h-6&quot; />,
      title: 'Automated Portfolio Management',
      description: 'Intelligent portfolio optimization and rebalancing based on market conditions and your objectives.'
    },
    {
      icon: <Shield className=&quot;w-6 h-6&quot; />,
      title: 'Risk Assessment & Management',
      description: 'Comprehensive risk analysis and automated risk management strategies for your financial portfolio.'
    },
    {
      icon: <BarChart3 className=&quot;w-6 h-6&quot; />,
      title: 'Real-Time Financial Insights',
      description: 'Live financial data, market analysis, and personalized recommendations updated in real-time.'
    }
  ],

  const benefits = [
    'Increase investment returns by 25%Reduce financial planning time by 70%Improve risk-adjusted returns by 40%Optimize tax efficiency by 30%Reduce portfolio volatility by 35%Improve financial goal achievement by 50%Reduce financial planning costs by 60%Gain professional-grade financial insights'
  ],
=======
      icon: <DollarSign className="w-6 h-6" />, _title: 'AI-Powered Financial Analysis', _description: 'Advanced financial modeling and analysis using machine learning to identify opportunities and risks.'},
    {_icon: <TrendingUp className="w-6 h-6" />, _title: 'Predictive Financial Planning', _description: 'Forecast financial outcomes and create data-driven financial plans with AI-powered insights.'},
    {_icon: <Target className="w-6 h-6" />, _title: 'Goal-Based Planning', _description: 'Personalized financial planning based on your specific goals, _timeline, _and risk tolerance.'},
    {_icon: <Zap className="w-6 h-6" />, _title: 'Automated Portfolio Management', _description: 'Intelligent portfolio optimization and rebalancing based on market conditions and your objectives.'},
    {_icon: <Shield className="w-6 h-6" />, _title: 'Risk Assessment & Management', _description: 'Comprehensive risk analysis and automated risk management strategies for your financial portfolio.'},
    {_icon: <BarChart3 className="w-6 h-6" />, _title: 'Real-Time Financial Insights', _description: 'Live financial data, _market analysis, _and personalized recommendations updated in real-time.'}
  ];

  const _benefits = [
    'Increase investment returns by 25%',
    'Reduce financial planning time by 70%',
    'Improve risk-adjusted returns by 40%',
    'Optimize tax efficiency by 30%',
    'Reduce portfolio volatility by 35%',
    'Improve financial goal achievement by 50%',
    'Reduce financial planning costs by 60%',
    'Gain professional-grade financial insights'
  ];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

					<div className=&quot;mt-12&quot;>
						<h2 className=&quot;text-2xl font-semibold&quot;>Pricing</h2>
						<div className=&quot;mt-6 grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
							<div className=&quot;rounded-2xl border border-emerald-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Starter</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Up to 5 users, core models, board pack.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$390<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-cyan-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Growth</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>25 users, consolidation, Snowflake/NetSuite.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>$1,290<span className=&quot;text-base font-normal text-gray-300&quot;>/mo</span></p>
							</div>
							<div className=&quot;rounded-2xl border border-amber-400/30 p-6&quot;>
								<h3 className=&quot;text-xl font-bold&quot;>Enterprise</h3>
								<p className=&quot;mt-2 text-gray-300&quot;>Advanced governance, custom models, SSO.</p>
								<p className=&quot;mt-4 text-3xl font-bold&quot;>Custom</p>
							</div>
						</div>
						<p className=&quot;mt-4 text-sm text-gray-400&quot;>Market references: <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://www.workday.com/en-us/products/planning/adaptive-planning.html&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Workday Adaptive</a>, <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://www.anaplan.com/pricing/&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Anaplan</a>, <a className=&quot;underline hover:text-cyan-300&quot; href=&quot;https://pigment.com/pricing&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>Pigment</a>.</p>
					</div>

  return (_<>
      <Head>
        <title>AI Financial Planning Platform | Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Intelligent financial planning and wealth management with AI. Personalized plans, portfolio optimization, and risk management.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;AI financial planning, financial planning, wealth management, portfolio optimization, investment planning, financial advisor&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI Financial Planning Platform | Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Intelligent financial planning and wealth management with AI.&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/ai-financial-planning-platform&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/ai-financial-planning-platform&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-black text-white&quot;>
        {/* Hero Section */}
        <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20&quot;></div>
          <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center&quot;
=======
        <meta name="description" content="Intelligent financial planning and wealth management with AI. Personalized plans, _portfolio optimization, _and risk management." />
        <meta name="keywords" content="AI financial planning, _financial planning, _wealth management, _portfolio optimization, _investment planning, _financial advisor" />
        <meta property="og:title" content="AI Financial Planning Platform | Zion Tech Group" />
        <meta property="og:description" content="Intelligent financial planning and wealth management with AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-financial-planning-platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-planning-platform" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {_/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-amber-900/20 to-orange-900/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;flex items-center justify-center mb-6&quot;>
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4&quot;>
                  <DollarSign className=&quot;w-8 h-8 text-white&quot; />
                </div>
              </div>
              <h1 className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-6&quot;>
                AI Financial Planning Platform
              </h1>
<<<<<<< HEAD
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
                Intelligent financial planning and wealth management with AI. Get personalized plans, 
                portfolio optimization, and risk management that drives financial success.
=======
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Intelligent financial planning and wealth management with AI. Get personalized plans, _portfolio optimization, _and risk management that drives financial success.
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Start Free Trial
                </motion.button>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className=&quot;py-20 bg-gradient-to-b from-black to-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Powerful Financial Planning Features
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Our AI platform combines advanced financial modeling with machine learning to deliver 
                comprehensive financial planning and wealth management solutions.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group&quot;
                >
                  <div className=&quot;w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300&quot;>
                    <div className=&quot;text-yellow-400&quot;>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className=&quot;text-xl font-semibold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-400 leading-relaxed&quot;>{feature.description}</p>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_features.map((feature, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-yellow-400">
                      {_feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{_feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{_feature.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className=&quot;py-20 bg-black&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Benefits Section */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Transform Your Financial Future
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Experience dramatic improvements in financial planning efficiency, investment returns, and 
                goal achievement with our AI-powered financial planning platform.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group&quot;
                >
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <CheckCircle className=&quot;w-5 h-5 text-yellow-400&quot; />
                    <span className=&quot;text-white font-medium text-sm&quot;>{benefit}</span>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {_benefits.map(_(benefit, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium text-sm">{_benefit}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className=&quot;py-20 bg-gradient-to-b from-black to-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;
=======
        {_/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Comprehensive Financial Planning Solutions
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                From retirement planning to investment management, our platform provides AI-powered 
                solutions for every aspect of your financial life.
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6&quot;>
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center&quot;
=======
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {_useCases.map(_(useCase, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _scale: 0.8}}
                  whileInView={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 hover:border-yellow-500/30 transition-all duration-300 group text-center"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className=&quot;w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300&quot;>
                    <Calculator className=&quot;w-6 h-6 text-yellow-400&quot; />
                  </div>
<<<<<<< HEAD
                  <span className=&quot;text-white font-medium text-sm&quot;>{useCase}</span>
=======
                  <span className="text-white font-medium text-sm">{_useCase}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className=&quot;py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
        {_/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-900/20 via-amber-900/20 to-orange-900/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <motion.div
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Financial Planning?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join thousands of individuals that have already revolutionized their financial planning 
                with AI automation. Start your free trial today.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=&quot;px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25&quot;
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold text-lg hover:from-yellow-600 hover:to-amber-700 transition-all duration-200 shadow-lg shadow-yellow-500/25"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Get Started Now
                </motion.button>
                <motion.button
<<<<<<< HEAD
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover: bg-yellow-500/10 transition-all duration-200"
=======
                  className=&quot;px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="px-8 py-4 border-2 border-yellow-500/30 text-yellow-400 rounded-xl font-semibold text-lg hover:bg-yellow-500/10 transition-all duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}