'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Brain, FlaskConical, Microscope, Pill, Dna, TestTube, Beaker, Activity, Shield, Zap, BarChart, Globe, Leaf, Thermometer, Wind, Droplets, Sun, TreePine, Factory, Car, Recycle, AlertTriangle, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Target, TrendingUp, Award, Lightbulb, Cpu, Database, Eye, Mic, MessageSquare, Settings, Calendar, FileText, Heart, Lock, Wifi, Monitor, Smartphone, Code, Layers, Workflow, BarChart3, MessageCircle, Headphones, Package, HardDrive, Printer, Router } from 'lucide-react'

const AiDrugDiscoveryProPage: React.FC = () => {
  const features = [
    {
      icon: Dna,
      title: 'Molecular Design AI',
      description: 'AI-powered molecular design and optimization for novel drug compounds with enhanced efficacy and safety profiles',
      price: '$15,999/month',
      marketPrice: '$25,000-100,000/month',
      features: ['De novo molecular design', 'ADMET property prediction', 'Drug-target interaction modeling', 'Chemical space exploration', 'Synthetic route planning'],
      benefits: ['50% faster drug discovery', 'Reduced development costs', 'Higher success rates', 'Novel therapeutic targets']
    },
    {
      icon: Microscope,
      title: 'Virtual Screening Platform',
      description: 'Advanced AI screening platform for identifying promising drug candidates from millions of compounds',
      price: '$8,999/month',
      marketPrice: '$15,000-50,000/month',
      features: ['High-throughput virtual screening', 'Machine learning scoring', 'Multi-target screening', 'ADMET filtering', 'Hit optimization'],
      benefits: ['99.9% screening accuracy', '10x faster screening', 'Cost-effective discovery', 'Comprehensive analysis']
    },
    {
      icon: TestTube,
      title: 'Clinical Trial Optimization',
      description: 'AI-driven clinical trial design and patient stratification for improved trial success rates',
      price: '$12,999/month',
      marketPrice: '$20,000-75,000/month',
      features: ['Trial design optimization', 'Patient stratification', 'Endpoint prediction', 'Risk assessment', 'Regulatory compliance'],
      benefits: ['30% higher success rates', 'Reduced trial duration', 'Lower costs', 'Better patient outcomes']
    },
    {
      icon: Beaker,
      title: 'Drug Repurposing AI',
      description: 'Intelligent drug repurposing platform to identify new therapeutic applications for existing drugs',
      price: '$6,999/month',
      marketPrice: '$12,000-40,000/month',
      features: ['Drug-disease mapping', 'Mechanism analysis', 'Safety profiling', 'Efficacy prediction', 'Market analysis'],
      benefits: ['Faster time to market', 'Reduced development costs', 'Proven safety profiles', 'New revenue streams']
    },
    {
      icon: Activity,
      title: 'Biomarker Discovery',
      description: 'AI-powered biomarker identification and validation for personalized medicine and diagnostics',
      price: '$9,999/month',
      marketPrice: '$18,000-60,000/month',
      features: ['Multi-omics analysis', 'Biomarker validation', 'Disease progression modeling', 'Treatment response prediction', 'Diagnostic development'],
      benefits: ['Precision medicine', 'Early disease detection', 'Personalized treatments', 'Improved outcomes']
    },
    {
      icon: Shield,
      title: 'Drug Safety AI',
      description: 'Comprehensive AI platform for predicting and monitoring drug safety and adverse effects',
      price: '$7,999/month',
      marketPrice: '$14,000-45,000/month',
      features: ['Toxicity prediction', 'Drug interaction analysis', 'Adverse event monitoring', 'Risk stratification', 'Regulatory reporting'],
      benefits: ['Enhanced patient safety', 'Reduced adverse events', 'Regulatory compliance', 'Cost savings']
    }
  ]

  const pricingPlans = [
    {
      name: 'Research',
      price: '$4,999/month',
      description: 'Essential AI tools for academic and small research organizations',
      features: [
        'Basic molecular design tools',
        'Virtual screening platform',
        'Standard support',
        'Up to 10 users',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Pharmaceutical',
      price: '$19,999/month',
      description: 'Comprehensive solution for pharmaceutical companies',
      features: [
        'All AI drug discovery tools',
        'Clinical trial optimization',
        'Drug repurposing platform',
        'Priority support',
        'Up to 100 users',
        'Custom model training',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$49,999/month',
      description: 'Complete AI drug discovery suite for large pharma',
      features: [
        'Full AI drug discovery platform',
        'Custom AI model development',
        '24/7 dedicated support',
        'Unlimited users',
        'On-premise deployment',
        'White-label solutions',
        'Regulatory consulting'
      ],
      popular: false
    }
  ]

  const successMetrics = [
    { metric: '50%', description: 'Faster drug discovery process' },
    { metric: '70%', description: 'Reduction in development costs' },
    { metric: '85%', description: 'Success rate in clinical trials' },
    { metric: '200+', description: 'Drug candidates identified' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Drug Discovery <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Pro</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary AI-powered drug discovery platform that accelerates pharmaceutical research, 
              reduces development costs, and increases success rates. Transform the future of medicine with cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Discovery
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Drug Discovery AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform combines machine learning, molecular modeling, and pharmaceutical expertise 
              to revolutionize drug discovery and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-blue-400 font-semibold">{feature.price}</span>
                      <span className="text-gray-400 text-sm">Market: {feature.marketPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  {feature.features.map((feat, featIndex) => (
                    <div key={featIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Discovery Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your research needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Accelerate Your Drug Discovery
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading pharmaceutical companies using AI to discover breakthrough treatments. 
            Contact us today to revolutionize your drug discovery process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiDrugDiscoveryProPage