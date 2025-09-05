<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap,
  DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles,
  Globe, Atom, Heart, Leaf, Car, GraduationCap, Scale,
  Building, Factory, Camera, Video, Music, Gamepad2,
  Crown, Award, Target, Users, Clock, Globe2
} from 'lucide-react',
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028',
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028',
import { futuristic2028Services } from '../data/2028-futuristic-innovations',
import { emergingTech2028Services } from '../data/2028-emerging-tech-services',
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const pricingTiers = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI integrationStandard supportCore features accessEmail supportBasic analyticsMobile app access'
    ],
    popular: false,
    color: 'from-blue-600 to-cyan-600',
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/month',
    description: 'Ideal for growing businesses and enterprises',
    features: [
      'Advanced AI capabilitiesPriority supportFull feature accessPhone & email supportAdvanced analyticsAPI accessCustom integrationsTraining & onboarding'
    ],
    popular: true,
    color: 'from-purple-600 to-pink-600',
    cta: 'Start Free Trial',
    href: '/contact'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Custom AI developmentDedicated support teamWhite-label solutions24/7 phone supportCustom analyticsFull API accessCustom integrationsDedicated account manager',
      'SLA guaranteesOn-premise deployment'
    ],
    popular: false,
    color: 'from-indigo-600 to-purple-600',
    cta: 'Contact Sales',
    href: '/contact'
  }
],

const servicePricing = [
  {
    category: '🚀 2028 Futuristic Innovations',
    services: futuristic2028Services.slice(0, 6)
  },
  {
    category: '🏙️ Smart City & Infrastructure',
    services: emergingTech2028Services.filter(s => s.category.includes('Smart City') || s.category.includes('Infrastructure')).slice(0, 4)
  },
  {
    category: '⚛️ Quantum & Advanced Tech',
    services: futuristic2028Services.filter(s => s.category.includes('Quantum')).slice(0, 4)
  },
  {
    category: '🤖 AI & Machine Learning',
    services: emergingTech2028Services.filter(s => s.category.includes('AI')).slice(0, 4)
  }
],
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {_CheckCircle, _ArrowRight, _Star, _TrendingUp, _Phone, _Zap, _DollarSign, _Shield, _Mail, _MapPin, _Rocket, _Brain, _Sparkles, _Globe, _Atom, _Heart, _Leaf, _Car, _GraduationCap, _Scale, _Building, _Factory, _Camera, _Video, _Music, _Gamepad2, _Crown, _Award, _Target, _Users, _Clock, _Globe2} from 'lucide-react';
import UltraFuturisticNavigation2028 from '../components/layout/UltraFuturisticNavigation2028';
import UltraFuturisticFooter2028 from '../components/layout/UltraFuturisticFooter2028';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _pricingTiers = [
  {_name: 'Starter', _price: '$299', _period: '/month', _description: 'Perfect for small businesses and startups', _features: [
      'Basic AI integration', _'Standard support', _'Core features access', _'Email support', _'Basic analytics', _'Mobile app access'
    ], _popular: false, _color: 'from-blue-600 to-cyan-600', _cta: 'Get Started', _href: '/contact'},
  {_name: 'Professional', _price: '$999', _period: '/month', _description: 'Ideal for growing businesses and enterprises', _features: [
      'Advanced AI capabilities', _'Priority support', _'Full feature access', _'Phone & email support', _'Advanced analytics', _'API access', _'Custom integrations', _'Training & onboarding'
    ], _popular: true, _color: 'from-purple-600 to-pink-600', _cta: 'Start Free Trial', _href: '/contact'},
  {_name: 'Enterprise', _price: 'Custom', _period: '', _description: 'Tailored solutions for large organizations', _features: [
      'Custom AI development', _'Dedicated support team', _'White-label solutions', _'24/7 phone support', _'Custom analytics', _'Full API access', _'Custom integrations', _'Dedicated account manager', _'SLA guarantees', _'On-premise deployment'
    ], _popular: false, _color: 'from-indigo-600 to-purple-600', _cta: 'Contact Sales', _href: '/contact'}
];

const _servicePricing = [
  {_category: '🚀 2028 Futuristic Innovations', _services: futuristic2028Services.slice(0, _6)},
  {_category: '🏙️ Smart City & Infrastructure', _services: emergingTech2028Services.filter(s => s.category.includes('Smart City') || s.category.includes('Infrastructure')).slice(0, _4)},
  {_category: '⚛️ Quantum & Advanced Tech', _services: futuristic2028Services.filter(s => s.category.includes('Quantum')).slice(0, _4)},
  {_category: '🤖 AI & Machine Learning', _services: emergingTech2028Services.filter(s => s.category.includes('AI')).slice(0, _4)}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function Revolutionary2028Pricing() {_return (_<>
      <Head>
        <title>2028 Revolutionary Pricing - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name=&quot;description&quot; content=&quot;Competitive pricing for our cutting-edge 2028 services. Transparent pricing with flexible plans for AI, quantum computing, and futuristic technology solutions.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;2028 pricing, AI services pricing, quantum computing pricing, technology pricing, Zion Tech Group pricing&quot; />
        <meta property=&quot;og:title&quot; content=&quot;2028 Revolutionary Pricing - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Competitive pricing for our cutting-edge 2028 services with transparent plans and flexible options.&quot; />
        <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/revolutionary-2028-pricing&quot; />
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/revolutionary-2028-pricing&quot; />
=======
        <meta name="description" content="Competitive pricing for our cutting-edge 2028 services. Transparent pricing with flexible plans for AI, _quantum computing, _and futuristic technology solutions." />
        <meta name="keywords" content="2028 pricing, _AI services pricing, _quantum computing pricing, _technology pricing, _Zion Tech Group pricing" />
        <meta property="og:title" content="2028 Revolutionary Pricing - Zion Tech Group" />
        <meta property="og:description" content="Competitive pricing for our cutting-edge 2028 services with transparent plans and flexible options." />
        <meta property="og:url" content="https://ziontechgroup.com/revolutionary-2028-pricing" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/revolutionary-2028-pricing" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </Head>

      <UltraFuturisticNavigation2028 />

      {/* Hero Section */}
<<<<<<< HEAD
      <section className=&quot;relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden&quot;>
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <div className=&quot;absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse&quot;></div>
          <div className=&quot;absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000&quot;></div>
          <div className=&quot;absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000&quot;></div>
=======
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20 overflow-hidden">
        {_/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>

        <div className=&quot;relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;space-y-8&quot;
=======
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            className="space-y-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm&quot;>
              <DollarSign className=&quot;w-4 h-4&quot; />
              <span>Transparent Pricing</span>
            </div>

            <h1 className=&quot;text-5xl md:text-7xl font-bold text-white leading-tight&quot;>
              <span className=&quot;bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent&quot;>
                Revolutionary
              </span>
              <br />
              <span className=&quot;text-white&quot;>2028 Pricing</span>
            </h1>

            <p className=&quot;text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed&quot;>
              Experience cutting-edge technology at competitive prices. Our transparent pricing model 
              ensures you get maximum value for your investment in the future.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Get Started</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <Link
                href=&quot;/2028-services-showcase&quot;
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2&quot;
              >
                <span>View Services</span>
                <Rocket className=&quot;w-5 h-5&quot; />
              </a>
            </div>

<<<<<<< HEAD
            {/* Pricing Stats */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 pt-16&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-purple-400&quot;>30%</div>
                <div className=&quot;text-purple-300&quot;>Lower than Market</div>
=======
            {_/* Pricing Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">30%</div>
                <div className="text-purple-300">Lower than Market</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-blue-400&quot;>99.9%</div>
                <div className=&quot;text-blue-300&quot;>Uptime Guarantee</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-pink-400&quot;>24/7</div>
                <div className=&quot;text-pink-300&quot;>Expert Support</div>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;text-3xl font-bold text-cyan-400&quot;>30-Day</div>
                <div className=&quot;text-cyan-300&quot;>Free Trial</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Tiers */}
      <section className=&quot;py-20 bg-black/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Choose Your <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Plan</span>
=======
      {_/* Pricing Tiers */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Plan</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Flexible pricing plans designed to scale with your business. Start small and grow with us.
            </p>
          </div>

<<<<<<< HEAD
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            {pricingTiers.map((tier, index) => (
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_pricingTiers.map((tier, _index) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <motion.div
                key={tier.name}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className={_`relative ${tier.popular ? 'scale-105' : ''}`}
              >
<<<<<<< HEAD
                {tier.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;>
                    <div className=&quot;bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2&quot;>
                      <Crown className=&quot;w-4 h-4&quot; />
=======
                {_tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
                      <Crown className="w-4 h-4" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

<<<<<<< HEAD
                <div className={`relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 ${tier.popular ? 'border-purple-500/60' : 'border-purple-500/30'} rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105`}>
                  <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
                  
                  <div className=&quot;relative z-10&quot;>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{tier.name}</h3>
                    <p className=&quot;text-purple-300 mb-6&quot;>{tier.description}</p>

                    <div className=&quot;mb-8&quot;>
                      <div className=&quot;flex items-baseline space-x-2&quot;>
                        <span className=&quot;text-4xl font-bold text-white&quot;>{tier.price}</span>
                        <span className=&quot;text-purple-300&quot;>{tier.period}</span>
                      </div>
                      {tier.name === 'Enterprise' && (
                        <p className=&quot;text-sm text-purple-300 mt-2&quot;>Contact us for custom pricing</p>
                      )}
                    </div>

                    <ul className=&quot;space-y-3 mb-8&quot;>
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                          <CheckCircle className=&quot;w-5 h-5 text-green-400 flex-shrink-0&quot; />
                          <span className=&quot;text-purple-200&quot;>{feature}</span>
=======
                <div className={_`relative p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 ${tier.popular ? 'border-purple-500/60' : 'border-purple-500/30'} rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{_tier.name}</h3>
                    <p className="text-purple-300 mb-6">{_tier.description}</p>

                    <div className="mb-8">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-white">{_tier.price}</span>
                        <span className="text-purple-300">{_tier.period}</span>
                      </div>
                      {_tier.name === 'Enterprise' && (
                        <p className="text-sm text-purple-300 mt-2">Contact us for custom pricing</p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {_tier.features.map(_(feature, _featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-purple-200">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={_tier.href}
                      className={_`block w-full text-center px-6 py-3 bg-gradient-to-r ${tier.color} text-white rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
<<<<<<< HEAD
                      {tier.cta}
                    </a>
=======
                      {_tier.cta}
                    </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Service Pricing */}
      <section className=&quot;py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Service <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Pricing</span>
=======
      {_/* Service Pricing */}
      <section className="py-20 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Service <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Detailed pricing for our individual services. Mix and match to create your perfect solution.
            </p>
          </div>

<<<<<<< HEAD
          {servicePricing.map((category, categoryIndex) => (
            <div key={category.category} className=&quot;mb-16&quot;>
              <h3 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>{category.category}</h3>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-8&quot;>
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, x: serviceIndex % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className=&quot;group relative&quot;
=======
          {_servicePricing.map(_(category, _categoryIndex) => (_<div key={category.category} className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">{_category.category}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {_category.services.map((service, _serviceIndex) => (
                  <motion.div
                    key={service.id}
                    initial={_{ opacity: 0, _x: serviceIndex % 2 === 0 ? -30 : 30}}
                    whileInView={_{ opacity: 1, _x: 0}}
                    transition={_{ duration: 0.6, _delay: serviceIndex * 0.1}}
                    viewport={_{ once: true}}
                    className="group relative"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
                    <div className=&quot;relative p-6 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105&quot;>
                      <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300&quot;></div>
                      
<<<<<<< HEAD
                      <div className=&quot;relative z-10&quot;>
                        <div className=&quot;flex items-start justify-between mb-4&quot;>
                          <div className=&quot;text-3xl&quot;>{service.icon}</div>
                          <div className=&quot;text-right&quot;>
                            <div className=&quot;text-xl font-bold text-purple-400&quot;>{service.price}</div>
                            <div className=&quot;text-sm text-purple-300&quot;>{service.period}</div>
                          </div>
                        </div>

                        <h4 className=&quot;text-xl font-bold text-white mb-2&quot;>{service.name}</h4>
                        <p className=&quot;text-purple-300 mb-4 text-sm&quot;>{service.description}</p>

                        <div className=&quot;mb-4&quot;>
                          <div className=&quot;flex items-center space-x-2 mb-2&quot;>
                            <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
                            <span className=&quot;text-white font-medium&quot;>{service.rating}</span>
                            <span className=&quot;text-purple-300 text-sm&quot;>({service.reviews} reviews)</span>
                          </div>
                          <div className=&quot;text-sm text-purple-300&quot;>
                            <span className=&quot;font-medium&quot;>Setup:</span> {service.setupTime}
=======
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="text-3xl">{_service.icon}</div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-purple-400">{_service.price}</div>
                            <div className="text-sm text-purple-300">{_service.period}</div>
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-white mb-2">{_service.name}</h4>
                        <p className="text-purple-300 mb-4 text-sm">{_service.description}</p>

                        <div className="mb-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-white font-medium">{_service.rating}</span>
                            <span className="text-purple-300 text-sm">({_service.reviews} reviews)</span>
                          </div>
                          <div className="text-sm text-purple-300">
                            <span className="font-medium">Setup:</span> {_service.setupTime}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>

                        <div className=&quot;flex items-center justify-between&quot;>
                          <Link
<<<<<<< HEAD
                            href={service.link}
                            className=&quot;px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm&quot;
                          >
                            Learn More
                          </a>
                          <div className=&quot;text-right&quot;>
                            <div className=&quot;text-xs text-purple-300&quot;>Trial</div>
                            <div className=&quot;text-white font-medium&quot;>{service.trialDays} days</div>
=======
                            href={_service.link}
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm"
                          >
                            Learn More
                          </Link>
                          <div className="text-right">
                            <div className="text-xs text-purple-300">Trial</div>
                            <div className="text-white font-medium">{_service.trialDays} days</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

<<<<<<< HEAD
      {/* Value Proposition */}
      <section className=&quot;py-20 bg-black/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;text-center mb-16&quot;>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Why Choose <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Our Pricing</span>
=======
      {_/* Value Proposition */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Our Pricing</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              We offer the best value in the market with transparent pricing and unmatched features.
            </p>
          </div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;>
            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className=&quot;text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6}}
              viewport={_{ once: true}}
              className="text-center p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Target className=&quot;w-16 h-16 text-green-400 mx-auto mb-6&quot; />
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Competitive Pricing</h3>
              <p className=&quot;text-purple-300 mb-6&quot;>
                Our prices are 30% lower than market average while providing 
                superior technology and features.
              </p>
              <div className=&quot;text-3xl font-bold text-green-400&quot;>30%</div>
              <div className=&quot;text-purple-300&quot;>Lower than Market</div>
            </motion.div>

            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className=&quot;text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              viewport={_{ once: true}}
              className="text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Shield className=&quot;w-16 h-16 text-blue-400 mx-auto mb-6&quot; />
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>No Hidden Costs</h3>
              <p className=&quot;text-blue-300 mb-6&quot;>
                Transparent pricing with no surprise fees. What you see is what you pay, 
                with clear value for every dollar.
              </p>
              <div className=&quot;text-3xl font-bold text-blue-400&quot;>100%</div>
              <div className=&quot;text-blue-300&quot;>Transparent Pricing</div>
            </motion.div>

            <motion.div
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className=&quot;text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl&quot;
=======
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.4}}
              viewport={_{ once: true}}
              className="text-center p-8 bg-gradient-to-br from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-2xl"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Award className=&quot;w-16 h-16 text-pink-400 mx-auto mb-6&quot; />
              <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Premium Quality</h3>
              <p className=&quot;text-pink-300 mb-6&quot;>
                Enterprise-grade technology with premium support and features 
                that justify every penny of investment.
              </p>
              <div className=&quot;text-3xl font-bold text-pink-400&quot;>5x</div>
              <div className=&quot;text-pink-300&quot;>ROI Guarantee</div>
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;space-y-8&quot;
=======
      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="space-y-8"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
<<<<<<< HEAD
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Get Started</span>?
=======
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to <span className=&quot;bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent&quot;>Get Started</span>?
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            </h2>
            <p className=&quot;text-xl text-purple-200 max-w-3xl mx-auto&quot;>
              Join hundreds of companies already leveraging our futuristic services 
              to gain competitive advantages and drive innovation.
            </p>

            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2&quot;
              >
                <span>Start Free Trial</span>
                <ArrowRight className=&quot;w-5 h-5&quot; />
              </a>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2&quot;
              >
                <span>Schedule Demo</span>
                <Clock className=&quot;w-5 h-5&quot; />
              </a>
            </div>

            <div className=&quot;flex items-center justify-center space-x-8 text-purple-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>30-Day Free Trial</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>No Credit Card Required</span>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <CheckCircle className=&quot;w-5 h-5 text-green-400&quot; />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>
  )
}