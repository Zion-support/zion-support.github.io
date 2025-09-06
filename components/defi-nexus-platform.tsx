<<<<<<< HEAD

=======
import React from 'react',
import React from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD
  TrendingUp
  Brain
  Shield
  Zap
  Target
  BarChart3
  Cpu
  Globe
  Users
  Award
  CheckCircle
  ArrowRight
  Star
  Phone
  Mail
  MapPin;
} from 'lucide-react';
import Layout from '../components/layout/Layout';import {
  TrendingUp, Brain, Shield, Zap, Target

=======

=======
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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


<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
  'Multi-chain DeFi aggregation'
  'Automated yield optimization'
  'Liquidity pool management'
  'Cross-chain bridge services'
  'Smart contract auditing'
  'DeFi analytics dashboard'
  'Mobile app integration'
  'Staking and governance',];  website: 'https://ziontechgroup.com'
}
const features = [
  'Multi-chain DeFi aggregationAutomated yield optimizationLiquidity pool managementCross-chain bridge servicesSmart contract auditingDeFi analytics dashboardMobile app integrationStaking and governance'
const pricingPlans = [
  {
    name: 'Starter'
    price: 29
    period: 'month'
    features: [
      'Basic DeFi tools'
      '3 blockchain networks'
      'Yield tracking'
      'Standard support'
    ]
    popular: false
  },  {
    name: 'Professional'
    price: 99
    period: 'month',    features: ['Basic DeFi tools3 blockchain networksYield trackingStandard support']
    popular: false
  }
  {
    name: 'Professional'
    price: 99
    period: 'month'
    features: [
      'Advanced DeFi tools'
      'All major networks'
      'Automated strategies'
      'Analytics'
      'Priority support'
    ]
    popular: true
  },  {
    name: 'Enterprise'
    price: 299
    period: 'month',    features: ['Advanced DeFi toolsAll major networksAutomated strategiesAnalyticsPriority support']
    popular: true
  }
  {
    name: 'Enterprise'
    price: 299
    period: 'month'
    features: [
      'Custom DeFi solutions'
      'White-label platform'
      'API access'
      'Priority support'
      'Custom integrations'
    ]
    popular: false
  },];    features: ['Custom DeFi solutionsWhite-label platformAPI accessPriority supportCustom integrations']
    popular: false
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
          {/* CTA Buttons */}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
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
    price: 29,
    period: 'month',
  {
    name: 'Professional',
    price: 99,
    period: 'month',
  {
    name: 'Enterprise',
    price: 299,
    period: 'month',
export default function DeFiNexusPlatform() {
  return (
    <Layout>
      <Head>
        <title>DeFi Nexus Platform | Zion Tech Group</title>
        <meta
          name='description'
          content='Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross-chain DeFi services.'
        />
        <meta
          name='keywords'
          content='DeFi, blockchain, yield farming, liquidity, cross-chain, Zion Tech Group'
        />
        <meta
          property='og:title'
          content='DeFi Nexus Platform - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Comprehensive decentralized finance platform with multi-chain support.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/defi-nexus-platform'
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
export default function DeFiNexusPlatform() {;
  return (
    <Layout>;
      <Head>;
        <title>DeFi Nexus Platform | Zion Tech Group</title>;
        <meta
          name='description'
          content='Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross-chain DeFi services.'
        />;
        <meta
          name='keywords'
          content='DeFi, blockchain, yield farming, liquidity, cross-chain, Zion Tech Group'
        />;
        <meta
          property='og:title'
          content='DeFi Nexus Platform - Zion Tech Group'
        />;
        <meta
          property='og:description'
          content='Comprehensive decentralized finance platform with multi-chain support.'
        />;
        <meta
          property='og:url'
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD

=======
            className='mb-8'
          >
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              DeFi & Blockchain
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                DeFi Nexus
              </span>
              <br />
              <span className="text-white">Platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross-chain DeFi services.
            </p>
          </motion.div>
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
          content='https://ziontechgroup && ziontechgroup.com/defi-nexus-platform'
        />;
      </Head>;


        {/* Background Elements */}
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>;
          <div className='absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse'></div>;
          <div className='absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>;
          <div className='absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500'></div>;
        </div>;

          >
        <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          {/* CTA Buttons */}
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <a
              href='#pricing'
              className='inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105'>;
              <Target className='w-5 h-5 mr-2' />;
              Get Started;
            </a>;
            <a
              href='#contact'
<<<<<<< HEAD
              className='inline-flex items-center px-8 py-4 rounded-full border-2 border-green-500/30 text-green-400 font-semibold text-lg hover:bg-green-500/10 transition-all duration-300'>;
              <Phone className='w-5 h-5 mr-2' />              Contact Sales          >;

            <a
=======
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

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

=======
            <a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              href="#pricing"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">;
              <Target className="w-5 h-5 mr-2" />;
              Get Started;
            </a>;
            <a
              href="#contact"
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Revolutionary DeFi Technology
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Experience the future of decentralized finance with multi-chain
              support, automated yield optimization, and comprehensive DeFi
              analytics.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {features.map((feature, index) => (          >
<<<<<<< HEAD

=======
            className="text-center mb-16"
          >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Revolutionary DeFi Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of decentralized finance with multi-chain support, automated yield optimization, and comprehensive DeFi analytics.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
<<<<<<< HEAD
=======
            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Revolutionary DeFi Technology;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Experience the future of decentralized finance with multi-chain;
              support, automated yield optimization, and comprehensive DeFi;
              analytics.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {features && features.map((feature, index) => (          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Revolutionary DeFi Technology;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Experience the future of decentralized finance with multi-chain support, automated yield optimization, and comprehensive DeFi analytics.;
            </p>;
          </motion && motion.div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
                <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4'>
                  <CheckCircle className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-lg font-semibold text-white mb-2'>
                  {feature}
<<<<<<< HEAD
                </h3>              </motion.div>              >

=======
                </h3>              </motion && motion.div>              >;
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">;
                  <CheckCircle className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>;
              </motion && motion.div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>
<<<<<<< HEAD

            ))}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
          </div>;
        </div>;
      </section>;


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
            ))}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Pricing Section */}
      <section id='pricing' className='py-20 bg-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section id="pricing" className="py-20 bg-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div

<<<<<<< HEAD

=======
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Choose Your Plan
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Flexible pricing options designed for DeFi users of all levels
              from beginners to institutional investors.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans.map((plan, index) => (          >
<<<<<<< HEAD

=======
            className="text-center mb-16"
          >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
<<<<<<< HEAD
=======
            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Choose Your Plan;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Flexible pricing options designed for DeFi users of all levels,;
              from beginners to institutional investors.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            {pricingPlans && pricingPlans.map((plan, index) => (          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Choose Your Plan;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors.;
            </p>;
          </motion && motion.div>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 border rounded-2xl p-8 ${
<<<<<<< HEAD
                  plan.popular
                    ? 'border-green-500/50 scale-105'
                    : 'border-green-500/20'
    features: [;
      'Custom DeFi solutions',
      'White - label platform',
      'API access',
      'Priority support',
      'Custom integrations',
    ],
    popular: false,
  }, ];    features: ['Custom DeFi solutions_white - label platformAPI access_priority support_custom integrations'],
    popular: false;
  }
];
;
export default /**
 * DeFiNexusPlatform - Function description
 */
function DeFiNexusPlatform() {
  return (
    <Layout>;
      <Head>;
        <title > DeFi Nexus Platform | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross - chain DeFi services.';
        />;
        <meta;
          name='keywords';
          content='DeFi, blockchain, yield farming, liquidity, cross - chain, Zion Tech Group';
        />;
        <meta;
          property='og:title';
          content='DeFi Nexus Platform - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Comprehensive decentralized finance platform with multi - chain support.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / defi - nexus - platform';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative min - h-screen flex items - center justify - center overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - black via - slate - 900 to - black'></div>;
        {/* Background Elements */}
        <div className='absolute inset - 0 overflow - hidden pointer - events - none'>;
          <div className='absolute top - 20 left - 20 w - 32 h - 32 bg - gradient - to - r from - green - 500 / 20 to - emerald - 500 / 20 rounded - full blur - 3xl animate - pulse'></div>;
          <div className='absolute top - 40 right - 32 w - 24 h - 24 bg - gradient - to - r from - blue - 500 / 20 to - cyan - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000'></div>;
          <div className='absolute bottom - 32 left - 32 w - 28 h - 28 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 500'></div>;
        </div>;
        <div className='relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb - 8'      </Head>;
      {/* Hero Section */}
      <section className="relative min - h-screen flex items - center justify - center overflow - hidden">;
        <div className="absolute inset - 0 bg - gradient - to - br from - black via - slate - 900 to - black"></div>;
        {/* Background Elements */}
        <div className="absolute inset - 0 overflow - hidden pointer - events - none">;
          <div className="absolute top - 20 left - 20 w - 32 h - 32 bg - gradient - to - r from - green - 500 / 20 to - emerald - 500 / 20 rounded - full blur - 3xl animate - pulse"></div>;
          <div className="absolute top - 40 right - 32 w - 24 h - 24 bg - gradient - to - r from - blue - 500 / 20 to - cyan - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 1000"></div>;
          <div className="absolute bottom - 32 left - 32 w - 28 h - 28 bg - gradient - to - r from - purple - 500 / 20 to - pink - 500 / 20 rounded - full blur - 3xl animate - pulse delay - 500"></div>;
        </div>;
        <div className="relative z - 10 text - center px - 4 sm:px - 6 lg:px - 8 max - w-7xl mx - auto">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb - 8';
          >;
            <div className='inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 10 border border - green - 500 / 20 text - green - 400 text - sm font - medium mb - 6'>;
              <TrendingUp className='w - 4 h - 4 mr - 2' />;
              DeFi & Blockchain;
            </div>;
            <h1 className='text - 4xl md:text - 6xl lg:text - 7xl font - bold text - white mb - 6'>;
              <span className='bg - gradient - to - r from - green - 400 via - emerald - 400 to - cyan - 400 bg - clip - text text - transparent'>;
                DeFi Nexus;
              </span>;
              <br />;
              <span className='text - white'>Platform</span>;
            </h1>;
            <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
              Comprehensive decentralized finance platform providing yield;
              farming, liquidity provision, and cross - chain DeFi services.            </p>          >;
            <div className="inline - flex items - center px - 4 py - 2 rounded - full bg - green - 500 / 10 border border - green - 500 / 20 text - green - 400 text - sm font - medium mb - 6">;
              <TrendingUp className="w - 4 h - 4 mr - 2" />;
              DeFi & Blockchain;
            </div>;
            <h1 className="text - 4xl md:text - 6xl lg:text - 7xl font - bold text - white mb - 6">;
              <span className="bg - gradient - to - r from - green - 400 via - emerald - 400 to - cyan - 400 bg - clip - text text - transparent">;
                DeFi Nexus;
              </span>;
              <br />;
              <span className="text - white">Platform</span>;
            </h1>;
            <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto">;
              Comprehensive decentralized finance platform providing yield farming, liquidity provision, and cross - chain DeFi services.;
            </p>;
          </motion.div>;
          {/* CTA Buttons */}
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex - col sm:flex - row gap - 4 justify - center items - center';
          >;
            <a;
              href='#pricing';
              className='inline - flex items - center px - 8 py - 4 rounded - full bg - gradient - to - r from - green - 500 to - emerald - 500 text - white font - semibold text - lg hover:from - green - 600 hover:to - emerald - 600 transition - all duration - 300 transform hover:scale - 105';
            >;
              <Target className='w - 5 h - 5 mr - 2' />;
              Get Started;
            </a>;
            <a;
              href='#contact';
              className='inline - flex items - center px - 8 py - 4 rounded - full border - 2 border - green - 500 / 30 text - green - 400 font - semibold text - lg hover:bg - green - 500 / 10 transition - all duration - 300';
            >;
              <Phone className='w - 5 h - 5 mr - 2' />              Contact Sales          >;
            <a;
              href="#pricing";
              className="inline - flex items - center px - 8 py - 4 rounded - full bg - gradient - to - r from - green - 500 to - emerald - 500 text - white font - semibold text - lg hover:from - green - 600 hover:to - emerald - 600 transition - all duration - 300 transform hover:scale - 105";
            >;
              <Target className="w - 5 h - 5 mr - 2" />;
              Get Started;
            </a>;
            <a;
              href="#contact";
              className="inline - flex items - center px - 8 py - 4 rounded - full border - 2 border - green - 500 / 30 text - green - 400 font - semibold text - lg hover:bg - green - 500 / 10 transition - all duration - 300";
            >;
              <Phone className="w - 5 h - 5 mr - 2" />;
              Contact Sales;
            </a>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className='py - 20 bg - gradient - to - b from - black to - slate - 900'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section className="py - 20 bg - gradient - to - b from - black to - slate - 900">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Revolutionary DeFi Technology;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Experience the future of decentralized finance with multi - chain;
              support, automated yield optimization, and comprehensive DeFi;
              analytics.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8'>            {features.map ((feature, index) => (          >;
            <h2 className="text - 3xl md:text - 5xl font - bold text - white mb - 6">;
              Revolutionary DeFi Technology;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Experience the future of decentralized finance with multi - chain support, automated yield optimization, and comprehensive DeFi analytics.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
            {features.map ((feature, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - green - 500 / 10 to - emerald - 500 / 10 border border - green - 500 / 20 rounded - 2xl p - 6 hover:border - green - 500 / 40 transition - all duration - 300';
              >;
                <div className='w - 12 h - 12 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mb - 4'>;
                  <CheckCircle className='w - 6 h - 6 text - white' />;
                </div>;
                <h3 className='text - lg font - semibold text - white mb - 2'>;
                  {feature}
                </h3>              </motion.div>              >;
                <div className="w - 12 h - 12 bg - gradient - to - r from - green - 500 to - emerald - 500 rounded - xl flex items - center justify - center mb - 4">;
                  <CheckCircle className="w - 6 h - 6 text - white" />;
                </div>;
                <h3 className="text - lg font - semibold text - white mb - 2">{feature}</h3>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section id='pricing' className='py - 20 bg - black'>;
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div      <section id="pricing" className="py - 20 bg - black">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 3xl md:text - 5xl font - bold text - white mb - 6'>;
              Choose Your Plan;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Flexible pricing options designed for DeFi users of all levels,
              from beginners to institutional investors.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            {pricing_plans.map ((plan, index) => (          >;
            <h2 className="text - 3xl md:text - 5xl font - bold text - white mb - 6">;
              Choose Your Plan;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Flexible pricing options designed for DeFi users of all levels, from beginners to institutional investors.;
            </p>;
          </motion.div>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8">;
            {pricing_plans.map ((plan, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg - gradient - to - br from - green - 500 / 10 to - emerald - 500 / 10 border rounded - 2xl p - 8 ${
                  plan.popular;
                    ? 'border - green - 500 / 50 scale - 105'                    : 'border - green - 500 / 20';
                }`}
              >;
                {plan.popular && (
                  <div className='absolute -top - 4 left - 1/2 transform -translate - x-1 / 2'>;
                    <span className='bg - gradient - to - r from - green - 500 to - emerald - 500 text - white px - 4 py - 2 rounded - full text - sm font - semibold'>                      Most Popular;
                    </span>;
                  </div>)}                  plan.popular;
                    ? 'border - green - 500 / 50 scale - 105';
                    : 'border - green - 500 / 20';
                }`}
              >;
                {plan.popular && (

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
<<<<<<< HEAD

                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-4'>
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    {plan.name}
                  </h3>;
                  <div className='text - 4xl font - bold text - white mb - 2'>;
                    ${plan.price}
                    <span className='text - lg text - gray - 400 font - normal'>;
                      /{plan.period}
                    <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />

<<<<<<< HEAD
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

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                      {feature}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
                      {feature}






>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-b from-slate-900 to-black'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black">
=======
                </ul>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-b from-slate-900 to-black'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion.div      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 bg-gradient-to-b from-slate-900 to-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion && motion.div      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <motion&& motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
              Ready to Transform DeFi?
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Contact our team to learn more about how DeFi Nexus Platform can
              revolutionize your decentralized finance experience.
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion.div          >
<<<<<<< HEAD

=======
            className="text-center mb-16"
          >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform DeFi?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
            className='text-center mb-16'>;
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>;
              Ready to Transform DeFi?;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Contact our team to learn more about how DeFi Nexus Platform can;
              revolutionize your decentralized finance experience.;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>            <motion && motion.div          >;
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">;
              Ready to Transform DeFi?;
            </h2>;
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
              Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience.;
            </p>;
          </motion && motion.div>;



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.1 }}
              viewport={{ once: true }}

<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>
              <p className='text-gray-300'>{contactInfo.mobile}</p>            </motion.div>            >
<<<<<<< HEAD

=======
              className="text-center"
            >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.mobile}</p>
            </motion.div>
            <motion.div
<<<<<<< HEAD
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Phone className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Phone</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.mobile}</p>            </motion && motion.div>            >;
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <Phone className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>;
              <p className="text-gray-300">{contactInfo && contactInfo.mobile}</p>;
            </motion && motion.div>;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
              viewport={{ once: true }}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
              <p className='text-gray-300'>{contactInfo.email}</p>            </motion.div>            >
<<<<<<< HEAD

=======
              className="text-center"
            >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </motion.div>
            <motion.div
              className='text-center'>;
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>;
                <Mail className='w-8 h-8 text-white' />;
              </div>;
              <h3 className='text-xl font-semibold text-white mb-2'>Email</h3>;
              <p className='text-gray-300'>{contactInfo && contactInfo.email}</p>            </motion && motion.div>            >;
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">;
                <Mail className="w-8 h-8 text-white" />;
              </div>;
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>;
              <p className="text-gray-300">{contactInfo && contactInfo.email}</p>;
            </motion && motion.div>;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8, delay: 0 && 0.3 }}
              viewport={{ once: true }}

<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            >
              <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                <MapPin className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>Address</h3>
              <p className='text-gray-300'>{contactInfo.address}</p>            </motion.div>            >
<<<<<<< HEAD

=======
              className="text-center"
            >
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">{contactInfo.address}</p>
            </motion.div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </Layout>
);
  );
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
              Ready to Transform DeFi?;
            </h2>;
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Contact our team to learn more about how DeFi Nexus Platform can;
              revolutionize your decentralized finance experience.;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 8'>            <motion.div          >;
            <h2 className="text - 3xl md:text - 5xl font - bold text - white mb - 6">;
              Ready to Transform DeFi?;
            </h2>;
            <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
              Contact our team to learn more about how DeFi Nexus Platform can revolutionize your decentralized finance experience.;
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

  );

}
<<<<<<< HEAD
    </Layout>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
