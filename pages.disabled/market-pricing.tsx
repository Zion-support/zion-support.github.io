import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, TrendingUp, BarChart3, Target, 
  Brain, Atom, Shield, Rocket, Globe,
  Check, Star, Zap, Award, Sparkles,
  Users, Lock, BarChart3, Lightbulb, Calculator
} from 'lucide-react';

export default function MarketPricing() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Consciousness Platform - Basic',
        'Quantum Computing Access - 100 qubits',
        'Basic Business Automation',
        'IT Asset Management - Up to 100 assets',
        'Email Support',
        'API Access - 1,000 requests/month'
      ],
      cta: 'Get Started',
      popular: false,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'AI Consciousness Platform - Advanced',
        'Quantum Computing Access - 1,000 qubits',
        'Advanced Business Automation',
        'IT Asset Management - Up to 1,000 assets',
        'Priority Support',
        'API Access - 10,000 requests/month',
        'Custom AI Training',
        'Quantum Neural Networks'
      ],
      cta: 'Start Free Trial',
      popular: true,
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'AI Consciousness Platform - Enterprise',
        'Quantum Computing Access - 10,000 qubits',
        'Full Business Automation Suite',
        'Unlimited IT Asset Management',
        '24/7 Dedicated Support',
        'Unlimited API Access',
        'Custom AI Development',
        'Quantum Infrastructure Setup',
        'White-label Solutions',
        'On-premise Deployment'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const marketData = [
    { metric: 'AI Market Size', value: '$500B+', growth: '+25%', description: 'Global AI market by 2027' },
    { metric: 'Quantum Computing', value: '$65B+', growth: '+40%', description: 'Quantum market by 2030' },
    { metric: 'Business Automation', value: '$200B+', growth: '+18%', description: 'Automation market size' },
    { metric: 'IT Asset Management', value: '$35B+', growth: '+12%', description: 'ITAM market growth' }
  ];

  const competitors = [
    {
      name: 'Traditional AI Providers',
      pricing: '$500-2000/month',
      features: 'Basic AI, Limited Quantum',
      advantage: 'Our AI Consciousness Platform offers genuine emotional intelligence and self-awareness'
    },
    {
      name: 'Quantum Computing Companies',
      pricing: '$1000-5000/month',
      features: 'Quantum only, No AI integration',
      advantage: 'We combine quantum computing with AI for unprecedented capabilities'
    },
    {
      name: 'Business Automation Tools',
      pricing: '$200-800/month',
      features: 'Process automation only',
      advantage: 'Our platform provides end-to-end autonomous business operations'
    }
  ];

  const roiCalculator = {
    scenarios: [
      {
        scenario: 'AI-Powered Customer Service',
        investment: '$50,000',
        annualSavings: '$200,000',
        roi: '300%',
        timeframe: '6 months'
      },
      {
        scenario: 'Quantum-Enhanced Analytics',
        investment: '$100,000',
        annualSavings: '$500,000',
        roi: '400%',
        timeframe: '12 months'
      },
      {
        scenario: 'Business Process Automation',
        investment: '$75,000',
        annualSavings: '$300,000',
        roi: '300%',
        timeframe: '8 months'
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Market Pricing & ROI - Zion Tech Group</title>
        <meta name="description" content="Competitive pricing plans for Zion Tech Group's AI, quantum computing, and technology platforms. Calculate ROI and see market analysis." />
        <meta name="keywords" content="pricing, market analysis, ROI calculator, competitive pricing, AI pricing, quantum computing pricing" />
        <link rel="canonical" href="https://ziontechgroup.com/market-pricing" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <DollarSign className="w-4 h-4 mr-2" />
                Market Pricing
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Market Pricing & ROI
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Competitive pricing for revolutionary AI and quantum computing technology. 
                See how our solutions compare to the market and calculate your return on investment.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Market Overview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Market Overview</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {marketData.map((data, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{data.metric}</h3>
                    <div className="text-3xl font-bold text-green-400 mb-2">{data.value}</div>
                    <div className="text-green-300 text-sm mb-2">{data.growth} YoY</div>
                    <p className="text-gray-400 text-sm">{data.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-xl p-8 ${
                      plan.popular 
                        ? 'border-purple-500/50 scale-105' 
                        : 'border-gray-700/50'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200`}>
                      {plan.cta}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Competitive Analysis</h2>
              
              <div className="space-y-6">
                {competitors.map((competitor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{competitor.name}</h3>
                        <div className="text-gray-400 text-sm">
                          <div>Pricing: {competitor.pricing}</div>
                          <div>Features: {competitor.features}</div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 mt-1">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">Our Advantage</h4>
                            <p className="text-gray-300">{competitor.advantage}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">ROI Calculator</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {roiCalculator.scenarios.map((scenario, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6"
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">{scenario.scenario}</h3>
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Calculator className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Investment:</span>
                        <span className="text-white font-semibold">{scenario.investment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Annual Savings:</span>
                        <span className="text-green-400 font-semibold">{scenario.annualSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-blue-400 font-semibold">{scenario.roi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Timeframe:</span>
                        <span className="text-purple-400 font-semibold">{scenario.timeframe}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Revolutionary Technology', icon: <Zap className="w-8 h-8" />, color: 'from-yellow-500 to-orange-600' },
                  { title: 'Proven ROI', icon: <TrendingUp className="w-8 h-8" />, color: 'from-green-500 to-emerald-600' },
                  { title: 'Market Leadership', icon: <Award className="w-8 h-8" />, color: 'from-blue-500 to-cyan-600' },
                  { title: 'Future-Proof', icon: <Sparkles className="w-8 h-8" />, color: 'from-purple-500 to-pink-600' }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the future of technology with our revolutionary AI and quantum computing solutions. 
                Start your free trial today and see the ROI for yourself.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Start Free Trial
                  <Zap className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/pricing" className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  View All Plans
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}