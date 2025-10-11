'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Globe, Brain, BarChart, Shield, CheckCircle, ArrowRight, Star, Clock, Target, Phone, Mail, MapPin, Cpu, Settings, Database, Lock, TrendingUp, Award, Zap, Eye, Users, TreePine, Wind, Sun, Droplets, DollarSign } from 'lucide-react';

const AiClimateIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Climate Data Analysis',
      description: 'Advanced AI algorithms analyze vast amounts of climate data for accurate predictions',
      benefits: ['Real-time climate monitoring', 'Predictive weather modeling', 'Environmental trend analysis', 'Carbon footprint tracking']
    },
    {
      icon: Brain,
      title: 'Environmental AI Models',
      description: 'Machine learning models trained on environmental data for intelligent insights',
      benefits: ['Ecosystem health monitoring', 'Biodiversity assessment', 'Pollution detection', 'Resource optimization']
    },
    {
      icon: BarChart,
      title: 'Sustainability Analytics',
      description: 'Comprehensive analytics for measuring and improving environmental impact',
      benefits: ['Carbon emission tracking', 'Energy efficiency analysis', 'Waste reduction insights', 'Sustainability scoring']
    },
    {
      icon: Shield,
      title: 'Climate Risk Assessment',
      description: 'AI-powered risk analysis for climate-related threats and opportunities',
      benefits: ['Extreme weather prediction', 'Risk mitigation strategies', 'Adaptation planning', 'Insurance optimization']
    }
  ];

  const solutions = [
    {
      title: 'Smart Agriculture',
      description: 'AI-powered precision farming for sustainable crop production',
      icon: TreePine,
      marketPrice: '$25,000-100,000/month',
      features: ['Crop yield optimization', 'Soil health monitoring', 'Water usage optimization', 'Pest prediction']
    },
    {
      title: 'Renewable Energy Management',
      description: 'AI optimization for solar, wind, and other renewable energy systems',
      icon: Wind,
      marketPrice: '$30,000-150,000/month',
      features: ['Energy production forecasting', 'Grid optimization', 'Storage management', 'Demand prediction']
    },
    {
      title: 'Carbon Credit Trading',
      description: 'AI-powered platform for carbon credit verification and trading',
      icon: Globe,
      marketPrice: '$50,000-200,000/month',
      features: ['Carbon credit verification', 'Trading algorithms', 'Compliance monitoring', 'Market analysis']
    },
    {
      title: 'Climate Finance',
      description: 'AI-driven climate investment and risk assessment platform',
      icon: TrendingUp,
      marketPrice: '$75,000-300,000/month',
      features: ['Investment scoring', 'Risk assessment', 'Portfolio optimization', 'ESG analysis']
    }
  ];

  const pricing = [
    {
      name: 'Climate Starter',
      price: '$8,000',
      period: '/month',
      description: 'Basic climate intelligence for small organizations',
      features: [
        'Basic climate data access',
        'Standard analytics dashboard',
        'Email support',
        'Monthly reports',
        'API access'
      ],
      marketPrice: '$16,000/month',
      savings: '50%'
    },
    {
      name: 'Climate Professional',
      price: '$25,000',
      period: '/month',
      description: 'Advanced climate intelligence for businesses',
      features: [
        'Advanced AI models',
        'Custom analytics',
        'Priority support',
        'Real-time monitoring',
        'Custom integrations',
        'Training included'
      ],
      marketPrice: '$50,000/month',
      savings: '50%',
      popular: true
    },
    {
      name: 'Climate Enterprise',
      price: '$75,000',
      period: '/month',
      description: 'Full-scale climate intelligence platform',
      features: [
        'Custom AI development',
        'White-label solutions',
        '24/7 dedicated support',
        'On-premise deployment',
        'Unlimited data access',
        'Climate consulting included'
      ],
      marketPrice: '$150,000/month',
      savings: '50%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Intelligence Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered climate intelligence for environmental monitoring, sustainability analytics, and climate risk assessment. 50% cost savings vs market rates." />
        <meta name="keywords" content="climate intelligence, environmental AI, sustainability analytics, climate risk, carbon tracking, green technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
                <Globe className="w-4 h-4 mr-2" />
                Sustainable AI Technology
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Climate <span className="text-green-400">Intelligence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Harness the power of AI to monitor, analyze, and predict climate patterns. 
                Make data-driven decisions for environmental sustainability and climate resilience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Climate AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Monitoring</h3>
                <p className="text-gray-300">Live climate data analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Predictions</h3>
                <p className="text-gray-300">Accurate climate forecasting</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Risk Assessment</h3>
                <p className="text-gray-300">Climate risk mitigation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">50% Savings</h3>
                <p className="text-gray-300">vs market rates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Climate AI <span className="text-green-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI climate intelligence platform provides comprehensive tools for 
                environmental monitoring, analysis, and decision-making.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Climate <span className="text-green-400">Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI solutions for different climate and environmental challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="mb-6">
                    <div className="text-sm text-green-400 font-semibold mb-3">
                      Market Rate: {solution.marketPrice}
                    </div>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Climate AI <span className="text-green-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options with 50% savings compared to market rates. 
                All plans include AI-powered climate intelligence and environmental monitoring.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-sm text-gray-400 line-through mr-2">Market: {plan.marketPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">Save {plan.savings}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white hover:from-green-600 hover:to-teal-600' 
                        : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Fight <span className="text-green-400">Climate Change</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our climate AI experts for a free consultation and discover 
              how AI can help your organization become more sustainable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Climate AI Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiClimateIntelligencePage;