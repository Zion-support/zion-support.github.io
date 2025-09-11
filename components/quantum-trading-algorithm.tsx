
import React from 'react',
import React from 'react';
=======

import React from 'react';

=======
import React from 'react',
import React from 'react';
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  TrendingUp,
  Brain,
  Shield,
  Zap,
  Target,
  BarChart3,
  Cpu,
  Globe,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,;
  MapPin,;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  TrendingUp,
  Brain,
  Shield,
  Zap,
  Target,
  BarChart3,
  Cpu,
  Globe,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,;
  MapPin,;
} from 'lucide-react';
import Layout from '../components/layout/Layout';import {
  TrendingUp, Brain, Shield, Zap, Target, ;
  BarChart3, Cpu, Globe, Users, Award;
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin
 } from 'lucide-react';
import Layout from '../components/layout/Layout';

  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
const features = [
  'Quantum-enhanced market prediction algorithms'
  'Real-time market data processing'
  'AI-powered risk assessment'
  'Multi-asset portfolio optimization'
  'Regulatory compliance automation'
  'Backtesting and simulation engine'
  'Custom strategy builder'
  'Performance analytics dashboard',];  website: 'https://ziontechgroup.com'
}
const features = [
  'Quantum-enhanced market prediction algorithmsReal-time market data processingAI-powered risk assessmentMulti-asset portfolio optimizationRegulatory compliance automationBacktesting and simulation engineCustom strategy builderPerformance analytics dashboard'
const pricingPlans = [
  {
    name: 'Starter'
    price: 199
    period: 'month'
    features: [
      'Basic algorithms'
      '5 asset classes'
      'Daily rebalancing'
      'Standard support'
    ]
    popular: false
  },  {
    name: 'Professional'
    price: 499
    period: 'month',    features: ['Basic algorithms5 asset classesDaily rebalancingStandard support']
    popular: false
  }
  {
    name: 'Professional'
    price: 499
    period: 'month'
    features: [
      'Advanced algorithms'
      'All asset classes'
      'Real-time rebalancing'
      'Custom strategies'
      'Priority support'
    ]
    popular: true
  },  {
    name: 'Enterprise'
    price: 1299
    period: 'month',    features: ['Advanced algorithmsAll asset classesReal-time rebalancingCustom strategiesPriority support']
    popular: true
  }
  {
    name: 'Enterprise'
    price: 1299
    period: 'month'
    features: [
      'Quantum algorithms'
      'White-label solution'
      'API access'
      'Dedicated support'
      'Custom integrations'
    ]
    popular: false
  },];    features: ['Quantum algorithmsWhite-label solutionAPI accessDedicated supportCustom integrations']
    popular: false
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
import Head from 'next / head';
import { motion } from 'framer-motion';


  BarChart3, Cpu, Globe, Users, Award;
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin;
} from 'lucide-react';
import Layout from '../components/layout/Layout';


  {
    name: 'Starter',
    price: 199,
    period: 'month',

    features: [;
      'Basic algorithms',
      '5 asset classes',
      'Daily rebalancing',
      'Standard support',
    ],
    popular: false,
  },  {
    name: 'Professional',
    price: 499,
    period: 'month',    features: ['Basic algorithms5 asset classes_daily rebalancing_standard support'],
    popular: false;
  }

  {
    name: 'Professional',
    price: 499,
    period: 'month',

    features: [;
      'Advanced algorithms',
      'All asset classes',
      'Real - time rebalancing',
      'Custom strategies',
      'Priority support',
    ],
    popular: true,
  },  {
    name: 'Enterprise',
    price: 1299,
    period: 'month',    features: ['Advanced algorithms_all asset classes_real - time rebalancing_custom strategies_priority support'],
    popular: true;
  }

  {
    name: 'Enterprise',
    price: 1299,
    period: 'month',
export default function QuantumTradingAlgorithm() {
  return (
    <Layout>
      <Head>
        <title>Quantum Trading Algorithm Pro | Zion Tech Group</title>
        <meta
          name='description'
          content='Advanced algorithmic trading platform leveraging quantum computing principles for ultra-fast market analysis and predictive trading strategies.'
        />
        <meta
          name='keywords'
          content='quantum trading, algorithmic trading, AI trading, financial technology, Zion Tech Group'
        />
        <meta
          property='og:title'
          content='Quantum Trading Algorithm Pro - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Advanced algorithmic trading platform with quantum computing integration.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/quantum-trading-algorithm'
        />
      </Head>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black'></div>
        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
          <div className='absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500'></div>
        </div>
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'      </Head>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6'>
              <TrendingUp className='w-4 h-4 mr-2' />
              Financial Technology
            </div>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'>
              <span className='bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
                Quantum Trading
              </span>
              <br />
              <span className='text-white'>Algorithm Pro</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Advanced algorithmic trading platform leveraging quantum computing
              principles for ultra-fast market analysis and predictive trading
              strategies.            </p>          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Financial Technology
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum Trading
              </span>
              <br />
              <span className="text-white">Algorithm Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Advanced algorithmic trading platform leveraging quantum computing principles for ultra-fast market analysis and predictive trading strategies.
            </p>
          </motion.div>

  BarChart3, Cpu, Globe, Users, Award;
  CheckCircle, ArrowRight, Star, Phone, Mail, MapPin;
} from 'lucide-react';
import Layout from '../components/layout/Layout';


  {
    name: 'Starter',
    price: 199,
    period: 'month',

    features: [;
      'Basic algorithms',
      '5 asset classes',
      'Daily rebalancing',
      'Standard support',
    ],
    popular: false,
  },  {
    name: 'Professional',
    price: 499,
    period: 'month',    features: ['Basic algorithms5 asset classes_daily rebalancing_standard support'],
    popular: false;
  }

  {
    name: 'Professional',
    price: 499,
    period: 'month',

    features: [;
      'Advanced algorithms',
      'All asset classes',
      'Real - time rebalancing',
      'Custom strategies',
      'Priority support',
    ],
    popular: true,
  },  {
    name: 'Enterprise',
    price: 1299,
    period: 'month',    features: ['Advanced algorithms_all asset classes_real - time rebalancing_custom strategies_priority support'],
    popular: true;
  }

  {
    name: 'Enterprise',
    price: 1299,
    period: 'month',

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'



          >
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'

          >
            <a
              href='#pricing'
              className='inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105'
            >
              <Target className='w-5 h-5 mr-2' />
              Get Started
            </a>
            <a
              href='#contact'
              className='inline-flex items-center px-8 py-4 rounded-full border-2 border-green-500/30 text-green-400 font-semibold text-lg hover:bg-green-500/10 transition-all duration-300'
            >
              <Phone className='w-5 h-5 mr-2' />              Contact Sales          >
            <a
              href="#pricing"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">;
              <Target className="w-5 h-5 mr-2" />;
              Get Started;
            </a>;
            <a
              href="#contact"
=======

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
==============
            className='text-center mb-16'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Revolutionary Trading Technology
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Experience the future of algorithmic trading with quantum
              computing integration and AI-powered market analysis.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {features.map((feature, index) => (          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary Trading Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of algorithmic trading with quantum computing integration and AI-powered market analysis.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
==============
                className='bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4'>
                  <CheckCircle className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
=======
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300"
              >


            ))}
=======

=======


            ))}
          </div>
        </div>
      </section>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

          </div>;
        </div>;
      </section>;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
      {/* Pricing Section */}
      <section id='pricing' className='py-20 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section id="pricing" className="py-20 bg-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div
            ))}
=======

=======          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div





=======

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
==============
            className='text-center mb-16'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Choose Your Plan
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Flexible pricing options designed for traders of all levels, from
              individual investors to institutional clients.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans.map((plan, index) => (          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for traders of all levels, from individual investors to institutional clients.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-2xl p-8 ${

                }`}
              >;
                {plan.popular && (

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">

                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
              >;
                {plan && plan.popular && (;
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>;
                    <span className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
                <div className='text-center mb-8'>;
                  <h3 className='text-2xl font-bold text-white mb-4'>;
                    {plan && plan.name}
                  </h3>;
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
                      className='flex items-center text-gray-300'>;
                      <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                      {feature}                    ${plan && plan.price}
                    <span className="text-lg text-gray-400 font-normal">/{plan && plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-4 mb-8">;
                  {plan && plan.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-300">;
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;

                      {feature}
                    </li>;
                  ))}

                      {feature}
=======





                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
=======




=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
==============
            className='text-center mb-16'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform Your Trading?
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Contact our team to learn more about how Quantum Trading Algorithm
              Pro can revolutionize your trading strategy.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion.div          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about how Quantum Trading Algorithm Pro can revolutionize your trading strategy.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div


            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform Your Trading?;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Contact our team to learn more about how Quantum Trading Algorithm;
              Pro can revolutionize your trading strategy.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion && motion.div          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform Your Trading?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Contact our team to learn more about how Quantum Trading Algorithm Pro can revolutionize your trading strategy.;
            </p>;
          </motion && motion.div>;
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <motion&& motion.div


=======

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}
              viewport={{ once: true }}
==============
              className='text-center'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>
              <p className='text-gray-300'>{contactInfo.mobile}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </motion.div>
            <motion.div

==============
              className='text-center'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>{contactInfo.email}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>
            <motion.div

==============
              className='text-center'
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Address</h3>
              <p className='text-gray-300'>{contactInfo.address}</p>            </motion.div>            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section>
              className='text-center'>;
=======
=======

              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <MapPin className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Address</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.address}</p>            </motion && motion.div>            >;
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <MapPin className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>;
              <p className="text-gray-300">{contactInfo && contactInfo.address}</p>;
            </motion && motion.div>;
          </div>;
        </div>;
      </section>;
    </Layout>;
  );
}
  );
}
                    </span>;
                  </div>;
                </div>;
                <ul className='space - y-4 mb - 8'>;
                  {plan.features.map ((feature, feature_index) => (
                    <li;
                      key={feature_index}
                      className='flex items - center text - gray - 300';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0' />                      {feature}                    ${plan.price}
                    <span className="text - lg text - gray - 400 font - normal">/{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space - y-4 mb - 8">;
                  {plan.features.map ((feature, feature_index) => (
                    <li key={feature_index} className="flex items - center text - gray - 300">;
                      <CheckCircle className="w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0" />;
                      {feature}
                    </li>))}
                </ul>;
                <button className='w - full bg - gradient - to - r from - green - 500 to - emerald - 500 text - white font - semibold py - 3 px - 6 rounded - xl hover:from - green - 600 hover:to - emerald - 600 transition - all duration - 300'>                  Get Started                <button className="w - full bg - gradient - to - r from - green - 500 to - emerald - 500 text - white font - semibold py - 3 px - 6 rounded - xl hover:from - green - 600 hover:to - emerald - 600 transition - all duration - 300">;
                  Get Started;
                </button>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section;
        id='contact';
        className='py - 20 bg - gradient - to - b from - slate - 900 to - black';
      >;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section id="contact" className="py - 20 bg - gradient - to - b from - slate - 900 to - black">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Ready to Transform Your Trading?;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Contact our team to learn more about how Quantum Trading Algorithm;
              Pro can revolutionize your trading strategy.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            <motion.div          >;
            <h2 className="text - 3xl md:text - 5xl font - bold text - white mb - 6">;
              Ready to Transform Your Trading?;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Contact our team to learn more about how Quantum Trading Algorithm Pro can revolutionize your trading strategy.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Phone className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Phone</h3>;
              <p className='text - gray - 300'>{contact_info.mobile}</p>            </motion.div>            >;
              <div className="w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                <Phone className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - semibold text - white mb - 2">Phone</h3>;
              <p className="text - gray - 300">{contact_info.mobile}</p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <Mail className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Email</h3>;
              <p className='text - gray - 300'>{contact_info.email}</p>            </motion.div>            >;
              <div className="w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                <Mail className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - semibold text - white mb - 2">Email</h3>;
              <p className="text - gray - 300">{contact_info.email}</p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className='text - center';
            >;
              <div className='w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                <MapPin className='w - 8 h - 8 text - white' />;
              </div>;
              <h3 className='text - xl font - semibold text - white mb - 2'>Address</h3>;
              <p className='text - gray - 300'>{contact_info.address}</p>            </motion.div>            >;
              <div className="w - 16 h - 16 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                <MapPin className="w - 8 h - 8 text - white" />;
              </div>;
              <h3 className="text - xl font - semibold text - white mb - 2">Address</h3>;
              <p className="text - gray - 300">{contact_info.address}</p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
    </Layout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );

}
<<<<<<< HEAD
<<<<<<< HEAD
    </Layout>
);
  );
}
    </Layout>;
);
}
    </Layout>
  );
}
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
