<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, 
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, 
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, 
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon, 
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon,
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon,
  Wifi, Building, Cpu as CpuIcon, TrendingUp as ChartIcon, Megaphone, HeadphonesIcon, Users as TeamIcon
} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { innovativeBusinessSolutions2025 } from '../data/2025-innovative-business-solutions',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const heroStats = [
<<<<<<< HEAD
  { label: 'Business Solutions', value: '100+', icon: <Target className="w-5 h-5" /> },
  { label: 'Happy Businesses', value: '250+', icon: <Users className="w-5 h-5" /> },
  { label: 'Success Rate', value: '99.5%', icon: <Award className="w-5 h-5" /> },
  { label: 'ROI Average', value: '400%', icon: <TrendingUp className="w-5 h-5" /> }
],
=======
  { label: 'Business Solutions', value: '100+', icon: <Target className=&quot;w-5 h-5&quot; /> },
  { label: 'Happy Businesses', value: '250+', icon: <Users className=&quot;w-5 h-5&quot; /> },
  { label: 'Success Rate', value: '99.5%', icon: <Award className=&quot;w-5 h-5&quot; /> },
  { label: 'ROI Average', value: '400%', icon: <TrendingUp className=&quot;w-5 h-5&quot; /> }
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_CheckCircle, _ArrowRight, _Star, _TrendingUp, _Phone, _Zap, _DollarSign, _Shield, _Mail, _MapPin, _Rocket, _Brain, _Sparkles, _Atom, _Dna, _Users, _Globe, _Cpu, _Target, _Microscope, _Lock, _Cloud, _BarChart3, _Settings, _Eye, _Award, _Clock, _Heart, _Lightbulb, _Target as TargetIcon, _Zap as ZapIcon, _Shield as ShieldIcon, _Globe as GlobeIcon, _Search, _Code, _TestTube, _Server, _Database, _Network, _Shield as SecurityIcon, _Wifi, _Building, _Cpu as CpuIcon, _TrendingUp as ChartIcon, _Megaphone, _HeadphonesIcon, _Users as TeamIcon} from 'lucide-react';
import Layout from '../components/layout/Layout';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _heroStats = [
  {_label: 'Business Solutions', _value: '100+', _icon: <Target className="w-5 h-5" />},
  {_label: 'Happy Businesses', _value: '250+', _icon: <Users className="w-5 h-5" />},
  {_label: 'Success Rate', _value: '99.5%', _icon: <Award className="w-5 h-5" />},
  {_label: 'ROI Average', _value: '400%', _icon: <TrendingUp className="w-5 h-5" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
const serviceCategories = [
  {
    title: 'Business Intelligence & Analytics',
    description: 'AI-powered business intelligence and data analytics solutions',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Business Intelligence & Analytics'),
    icon: ChartIcon,
    color: 'from-blue-500 to-cyan-600',
    features: ['Data AnalysisPredictive AnalyticsReal-time Insights']
  },
  {
    title: 'Marketing Automation',
    description: 'Intelligent marketing automation with AI-driven optimization',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Marketing Automation'),
    icon: Megaphone,
    color: 'from-purple-500 to-pink-600',
    features: ['Campaign OptimizationContent PersonalizationROI Tracking']
  },
  {
    title: 'Sales Intelligence',
    description: 'AI-powered sales automation and intelligence solutions',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Sales Intelligence'),
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600',
    features: ['Lead ScoringSales ForecastingPipeline Optimization']
  },
  {
    title: 'Customer Service',
    description: 'Intelligent customer service with AI automation',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'Customer Service'),
    icon: HeadphonesIcon,
    color: 'from-orange-500 to-red-600',
    features: ['AI ChatbotsTicket AutomationSentiment Analysis']
  },
  {
    title: 'HR Management',
    description: 'AI-powered HR automation and management solutions',
    services: innovativeBusinessSolutions2025.filter(s => s.category === 'HR Management'),
    icon: TeamIcon,
    color: 'from-teal-500 to-cyan-600',
    features: ['Recruitment AutomationPerformance AnalyticsEmployee Engagement']
  }
],

const heroFeatures = [
  {
    title: 'AI-Powered Intelligence',
    description: 'Advanced AI algorithms that provide intelligent insights and automation for business operations.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  },
  {
    title: 'Automated Workflows',
    description: 'Intelligent automation that reduces manual tasks and improves operational efficiency.',
    icon: Settings,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'
  },
  {
    title: 'Real-time Analytics',
    description: 'Live data insights and analytics that enable data-driven decision making.',
    icon: BarChart3,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'
  },
  {
    title: 'Predictive Capabilities',
    description: 'AI-powered predictions that help businesses anticipate trends and optimize window.window.window.performance.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600'
  }
],

const testimonials = [
  {
    name: 'Michael Rodriguez',
    role: 'CEO, GrowthTech Solutions',
    company: 'GrowthTech Solutions',
    content: 'Zion Tech Group\'s business intelligence platform has transformed our decision-making process. We now have real-time insights that have increased our revenue by 300%.',
    rating: 5,
    avatar: '👨‍💼'
  },
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director, DigitalFlow Agency',
    company: 'DigitalFlow Agency',
    content: 'The AI marketing automation platform has revolutionized our campaigns. We\'ve seen conversion rates increase by 150% while reducing costs by 40%.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'David Chen',
    role: 'Sales Manager, TechSales Pro',
    company: 'TechSales Pro',
    content: 'Their sales intelligence platform has increased our sales productivity by 200%. The AI-powered lead scoring and forecasting are game-changers.',
    rating: 5,
    avatar: '👨‍💻'
  }
],
=======
const _serviceCategories = [
  {_title: 'Business Intelligence & Analytics', _description: 'AI-powered business intelligence and data analytics solutions', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Business Intelligence & Analytics'), _icon: ChartIcon, _color: 'from-blue-500 to-cyan-600', _features: ['Data Analysis', _'Predictive Analytics', _'Real-time Insights']},
  {_title: 'Marketing Automation', _description: 'Intelligent marketing automation with AI-driven optimization', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Marketing Automation'), _icon: Megaphone, _color: 'from-purple-500 to-pink-600', _features: ['Campaign Optimization', _'Content Personalization', _'ROI Tracking']},
  {_title: 'Sales Intelligence', _description: 'AI-powered sales automation and intelligence solutions', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Sales Intelligence'), _icon: TrendingUp, _color: 'from-green-500 to-emerald-600', _features: ['Lead Scoring', _'Sales Forecasting', _'Pipeline Optimization']},
  {_title: 'Customer Service', _description: 'Intelligent customer service with AI automation', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'Customer Service'), _icon: HeadphonesIcon, _color: 'from-orange-500 to-red-600', _features: ['AI Chatbots', _'Ticket Automation', _'Sentiment Analysis']},
  {_title: 'HR Management', _description: 'AI-powered HR automation and management solutions', _services: innovativeBusinessSolutions2025.filter(s => s.category === 'HR Management'), _icon: TeamIcon, _color: 'from-teal-500 to-cyan-600', _features: ['Recruitment Automation', _'Performance Analytics', _'Employee Engagement']}
];

const _heroFeatures = [
  {_title: 'AI-Powered Intelligence', _description: 'Advanced AI algorithms that provide intelligent insights and automation for business operations.', _icon: Brain, _gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'},
  {_title: 'Automated Workflows', _description: 'Intelligent automation that reduces manual tasks and improves operational efficiency.', _icon: Settings, _gradient: 'bg-gradient-to-r from-purple-500 to-pink-600'},
  {_title: 'Real-time Analytics', _description: 'Live data insights and analytics that enable data-driven decision making.', _icon: BarChart3, _gradient: 'bg-gradient-to-r from-green-500 to-emerald-600'},
  {_title: 'Predictive Capabilities', _description: 'AI-powered predictions that help businesses anticipate trends and optimize performance.', _icon: Sparkles, _gradient: 'bg-gradient-to-r from-orange-500 to-red-600'}
];

const _testimonials = [
  {_name: 'Michael Rodriguez', _role: 'CEO, _GrowthTech Solutions', _company: 'GrowthTech Solutions', _content: 'Zion Tech Group\'s business intelligence platform has transformed our decision-making process. We now have real-time insights that have increased our revenue by 300%.', _rating: 5, _avatar: '👨‍💼'},
  {_name: 'Sarah Johnson', _role: 'Marketing Director, _DigitalFlow Agency', _company: 'DigitalFlow Agency', _content: 'The AI marketing automation platform has revolutionized our campaigns. We\'ve seen conversion rates increase by 150% while reducing costs by 40%.', _rating: 5, _avatar: '👩‍💼'},
  {_name: 'David Chen', _role: 'Sales Manager, _TechSales Pro', _company: 'TechSales Pro', _content: 'Their sales intelligence platform has increased our sales productivity by 200%. The AI-powered lead scoring and forecasting are game-changers.', _rating: 5, _avatar: '👨‍💻'}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function InnovativeBusinessSolutions() {_return (_<Layout>
      <Head>
        <title>Innovative Business Solutions - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Revolutionary AI-powered business solutions including business intelligence, marketing automation, sales intelligence, customer service, and HR management. Transform your business operations with intelligent automation.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;business solutions, AI automation, business intelligence, marketing automation, sales intelligence, customer service, HR management&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Innovative Business Solutions - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Revolutionary AI-powered business solutions including business intelligence, marketing automation, sales intelligence, customer service, and HR management.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/innovative-business-solutions&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/innovative-business-solutions&quot; />
=======
        <meta name="description" content="Revolutionary AI-powered business solutions including business intelligence, _marketing automation, _sales intelligence, _customer service, _and HR management. Transform your business operations with intelligent automation." />
        <meta name="keywords" content="business solutions, _AI automation, _business intelligence, _marketing automation, _sales intelligence, _customer service, _HR management" />
        <meta property="og:title" content="Innovative Business Solutions - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI-powered business solutions including business intelligence, _marketing automation, _sales intelligence, _customer service, _and HR management." />
        <meta property="og:url" content="https://ziontechgroup.com/innovative-business-solutions" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-business-solutions" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      {/* Hero Section */}
      <section className=&quot;relative py-20 lg:py-32 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-teal-900/20 via-green-900/20 to-emerald-900/20&quot;></div>
        <div className=&quot;relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            <h1 className=&quot;text-4xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-6&quot;>
              Innovative Business Solutions
            </h1>
<<<<<<< HEAD
            <p className=&quot;text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
              Transform your business operations with AI-powered intelligence, automation, and analytics that drive growth and efficiency
            </p>
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-teal-500/30&quot;
                >
                  {stat.icon}
                  <span className=&quot;text-teal-400 font-semibold&quot;>{stat.value}</span>
                  <span className=&quot;text-gray-300 text-sm&quot;>{stat.label}</span>
=======
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business operations with AI-powered intelligence, _automation, _and analytics that drive growth and efficiency
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {_heroStats.map((stat, _index) => (
                <motion.div
                  key={index}
                  initial={_{ opacity: 0, _scale: 0.8}}
                  animate={_{ opacity: 1, _scale: 1}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-teal-500/30"
                >
                  {_stat.icon}
                  <span className="text-teal-400 font-semibold">{_stat.value}</span>
                  <span className="text-gray-300 text-sm">{_stat.label}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link href=&quot;#services&quot; className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;>
                Explore Solutions
                <ArrowRight className=&quot;ml-2 w-5 h-5&quot; />
              </Link>
<<<<<<< HEAD
              <Link href={`tel:${contactInfo.mobile}`} className=&quot;inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300&quot;>
                <Phone className=&quot;mr-2 w-5 h-5&quot; />
=======
              <Link href={_`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-black to-gray-900&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-4&quot;>
              Why Choose Our Business Solutions?
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Our business solutions combine cutting-edge AI technology with proven business processes to deliver unprecedented results
            </p>
          </motion.div>
          
<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;relative group&quot;
              >
                <div className={`${feature.gradient} p-1 rounded-xl`}>
                  <div className=&quot;bg-gray-900 rounded-xl p-6 h-full&quot;>
                    <div className=&quot;text-center&quot;>
                      <div className={`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                      </div>
                      <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                      <p className=&quot;text-gray-300&quot;>{feature.description}</p>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {_heroFeatures.map(_(feature, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="relative group"
              >
                <div className={_`${feature.gradient} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <div className={_`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{_feature.title}</h3>
                      <p className="text-gray-300">{_feature.description}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section id=&quot;services&quot; className=&quot;py-20 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-4&quot;>
              Business Solution Categories
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Comprehensive business solutions covering every aspect of modern business operations
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;space-y-16&quot;>
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className=&quot;relative&quot;
              >
                <div className=&quot;text-center mb-12&quot;>
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
                    <category.icon className=&quot;w-10 h-10 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-3xl font-bold text-white mb-4&quot;>{category.title}</h3>
                  <p className=&quot;text-xl text-gray-300 max-w-2xl mx-auto&quot;>{category.description}</p>
                </div>

                <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8&quot;>
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
                      className=&quot;relative group&quot;
                    >
                      <div className={`${service.color} p-1 rounded-xl`}>
                        <div className=&quot;bg-gray-900 rounded-xl p-6 h-full&quot;>
                          <div className=&quot;flex items-center justify-between mb-4&quot;>
                            <span className=&quot;text-3xl&quot;>{service.icon}</span>
                            {service.popular && (
                              <span className=&quot;bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full&quot;>
=======
          <div className="space-y-16">
            {_serviceCategories.map(_(category, _categoryIndex) => (_<motion.div
                key={categoryIndex}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                viewport={_{ once: true}}
                className="relative"
              >
                <div className="text-center mb-12">
                  <div className={_`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{_category.title}</h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{_category.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {_category.services.map((service, _serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={_{ opacity: 0, _scale: 0.9}}
                      whileInView={_{ opacity: 1, _scale: 1}}
                      transition={_{ duration: 0.5, _delay: serviceIndex * 0.1}}
                      viewport={_{ once: true}}
                      className="relative group"
                    >
                      <div className={_`${service.color} p-1 rounded-xl`}>
                        <div className="bg-gray-900 rounded-xl p-6 h-full">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{_service.icon}</span>
                            {_service.popular && (
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                Popular
                              </span>
                            )}
                          </div>
<<<<<<< HEAD
                          <h4 className=&quot;text-xl font-semibold text-white mb-2&quot;>{service.name}</h4>
                          <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.tagline}</p>
                          <div className=&quot;flex items-center justify-between mb-4&quot;>
                            <span className=&quot;text-2xl font-bold text-white&quot;>{service.price}</span>
                            <span className=&quot;text-gray-400&quot;>{service.period}</span>
                          </div>
                          <p className=&quot;text-gray-300 text-sm mb-4&quot;>{service.description}</p>
                          <div className=&quot;space-y-2 mb-6&quot;>
                            {service.features.slice(0, 3).map((feature, featureIndex) => (
                              <div key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                                <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                                {feature}
=======
                          <h4 className="text-xl font-semibold text-white mb-2">{_service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{_service.tagline}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-white">{_service.price}</span>
                            <span className="text-gray-400">{_service.period}</span>
                          </div>
                          <p className="text-gray-300 text-sm mb-4">{_service.description}</p>
                          <div className="space-y-2 mb-6">
                            {_service.features.slice(0, _3).map(_(feature, _featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                {_feature}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            ))}
                          </div>
                          <div className=&quot;flex items-center justify-between&quot;>
                            <Link
<<<<<<< HEAD
                              href={service.link}
                              className=&quot;inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300&quot;
=======
                              href={_service.link}
                              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            >
                              Learn More
                              <ArrowRight className=&quot;ml-1 w-4 h-4&quot; />
                            </Link>
                            <Link
<<<<<<< HEAD
                              href={`tel:${contactInfo.mobile}`}
                              className=&quot;inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300&quot;
=======
                              href={_`tel:${contactInfo.mobile}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500 to-green-600 text-white text-sm font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials Section */}
      <section className=&quot;py-20 bg-gradient-to-b from-gray-900 to-black&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-4&quot;>
              What Our Clients Say
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              Real feedback from businesses that have transformed their operations with our innovative solutions
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-teal-500/20&quot;
              >
                <div className=&quot;flex items-center mb-4&quot;>
                  <span className=&quot;text-3xl mr-3&quot;>{testimonial.avatar}</span>
                  <div>
                    <h4 className=&quot;text-white font-semibold&quot;>{testimonial.name}</h4>
                    <p className=&quot;text-teal-400 text-sm&quot;>{testimonial.role}</p>
                    <p className=&quot;text-gray-400 text-sm&quot;>{testimonial.company}</p>
                  </div>
                </div>
                <p className=&quot;text-gray-300 mb-4&quot;>{testimonial.content}</p>
                <div className=&quot;flex items-center&quot;>
                  <div className=&quot;flex text-yellow-400&quot;>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&quot;w-4 h-4 fill-current&quot; />
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_testimonials.map(_(testimonial, _index) => (
              <motion.div
                key={index}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.5, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-teal-500/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{_testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{_testimonial.name}</h4>
                    <p className="text-teal-400 text-sm">{_testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{_testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{_testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {_[...Array(testimonial.rating)].map(_(_, _i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-teal-900/20 via-green-900/20 to-emerald-900/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
=======
      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900/20 via-green-900/20 to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
            initial={_{ opacity: 0, _y: 20}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-3xl lg:text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Join hundreds of businesses that have already revolutionized their operations with our innovative AI-powered solutions
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
<<<<<<< HEAD
                href={`tel:${contactInfo.mobile}`}
                className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
              >
                <Phone className=&quot;mr-2 w-5 h-5&quot; />
                Call Now: {contactInfo.mobile}
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
                className=&quot;inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300&quot;
=======
                href={_`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-green-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: {_contactInfo.mobile}
              </Link>
              <Link
                href={_`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-teal-500/30 hover:bg-white/20 transition-all duration-300"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                <Mail className=&quot;mr-2 w-5 h-5&quot; />
                Email Us
              </Link>
            </div>
<<<<<<< HEAD
            <div className=&quot;mt-8 text-center&quot;>
              <p className=&quot;text-gray-300 mb-2&quot;>📍 {contactInfo.address}</p>
              <p className=&quot;text-gray-300&quot;>🌐 {contactInfo.website}</p>
=======
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {_contactInfo.address}</p>
              <p className="text-gray-300">🌐 {_contactInfo.website}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}