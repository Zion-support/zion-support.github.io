'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Brain, Zap, Workflow, BarChart, Users, Settings, Shield, Clock, DollarSign, Target, CheckCircle, ArrowRight, Star, Cpu, Database, Eye, Mic, MessageSquare, FileText, Calendar, Mail, Phone, Globe, Lock, Monitor, Smartphone, Code, Layers, BarChart3, MessageCircle, Headphones, Package, HardDrive, Wifi, Printer, Router, Heart, TrendingUp, Award, Lightbulb, Activity, FlaskConical, Microscope, Pill, Dna, TestTube, Beaker, Thermometer, Wind, Droplets, Sun, TreePine, Factory, Car, Recycle, AlertTriangle } from 'lucide-react'

const AiEnterpriseAutomationSuitePage: React.FC = () => {
  const microSaasSolutions = [
    {
      icon: Brain,
      title: 'Zion AI Workflow Engine',
      description: 'Intelligent workflow automation platform that learns and optimizes business processes using advanced AI',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling', 'Performance analytics'],
      benefits: ['60% process efficiency gain', 'Reduced manual errors', 'Cost savings', 'Scalable automation'],
      category: 'Workflow Automation',
      popular: true
    },
    {
      icon: BarChart,
      title: 'Zion Business Intelligence Pro',
      description: 'Advanced AI-powered business intelligence platform with predictive analytics and real-time insights',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Data visualization', 'Custom metrics'],
      benefits: ['Data-driven decisions', '30% faster insights', 'Automated reporting', 'Competitive advantage'],
      category: 'Analytics',
      popular: true
    },
    {
      icon: Users,
      title: 'Zion HR Automation Suite',
      description: 'Comprehensive HR automation platform with AI-powered recruitment, onboarding, and employee management',
      price: '$199/month',
      marketPrice: '$400-1500/month',
      features: ['AI recruitment screening', 'Automated onboarding', 'Performance tracking', 'Employee analytics', 'Compliance management'],
      benefits: ['50% faster hiring', 'Reduced HR workload', 'Better candidate matching', 'Compliance automation'],
      category: 'Human Resources',
      popular: false
    },
    {
      icon: MessageSquare,
      title: 'Zion Customer Experience AI',
      description: 'AI-powered customer service platform with intelligent chatbots, sentiment analysis, and automated support',
      price: '$249/month',
      marketPrice: '$500-2000/month',
      features: ['Intelligent chatbots', 'Sentiment analysis', 'Automated ticketing', 'Customer insights', 'Multi-channel support'],
      benefits: ['24/7 customer support', '80% query resolution', 'Improved satisfaction', 'Cost reduction'],
      category: 'Customer Service',
      popular: true
    },
    {
      icon: FileText,
      title: 'Zion Document Intelligence',
      description: 'AI-powered document processing and management system with automated data extraction and analysis',
      price: '$179/month',
      marketPrice: '$300-1200/month',
      features: ['Document OCR', 'Data extraction', 'Automated classification', 'Version control', 'Search & retrieval'],
      benefits: ['90% faster processing', 'Reduced manual work', 'Better accuracy', 'Improved organization'],
      category: 'Document Management',
      popular: false
    },
    {
      icon: Mail,
      title: 'Zion Email Marketing AI',
      description: 'Intelligent email marketing platform with AI-powered personalization, automation, and analytics',
      price: '$149/month',
      marketPrice: '$250-1000/month',
      features: ['AI personalization', 'Automated campaigns', 'A/B testing', 'Analytics & insights', 'List management'],
      benefits: ['40% higher open rates', 'Automated campaigns', 'Better targeting', 'ROI optimization'],
      category: 'Marketing',
      popular: false
    },
    {
      icon: Calendar,
      title: 'Zion Project Management AI',
      description: 'AI-enhanced project management platform with intelligent scheduling, resource allocation, and risk prediction',
      price: '$229/month',
      marketPrice: '$400-1500/month',
      features: ['AI scheduling', 'Resource optimization', 'Risk prediction', 'Progress tracking', 'Team collaboration'],
      benefits: ['25% faster delivery', 'Better resource utilization', 'Risk mitigation', 'Improved collaboration'],
      category: 'Project Management',
      popular: true
    },
    {
      icon: Shield,
      title: 'Zion Security Automation',
      description: 'AI-powered security monitoring and automation platform for threat detection and response',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: ['Threat detection', 'Automated response', 'Security monitoring', 'Compliance tracking', 'Incident management'],
      benefits: ['Proactive security', 'Faster response times', 'Reduced risks', 'Compliance automation'],
      category: 'Cybersecurity',
      popular: false
    },
    {
      icon: DollarSign,
      title: 'Zion Financial Analytics AI',
      description: 'AI-powered financial analysis and forecasting platform for better financial decision making',
      price: '$279/month',
      marketPrice: '$500-2000/month',
      features: ['Financial forecasting', 'Budget optimization', 'Expense tracking', 'Risk analysis', 'Reporting automation'],
      benefits: ['Better financial planning', 'Cost optimization', 'Risk mitigation', 'Automated reporting'],
      category: 'Finance',
      popular: false
    },
    {
      icon: Globe,
      title: 'Zion E-commerce Intelligence',
      description: 'AI-powered e-commerce optimization platform with personalized recommendations and sales analytics',
      price: '$199/month',
      marketPrice: '$350-1500/month',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer analytics', 'Sales forecasting'],
      benefits: ['30% increase in sales', 'Better customer experience', 'Optimized pricing', 'Inventory efficiency'],
      category: 'E-commerce',
      popular: true
    },
    {
      icon: Mic,
      title: 'Zion Voice AI Assistant',
      description: 'Enterprise-grade voice AI assistant for hands-free operations and voice-controlled automation',
      price: '$329/month',
      marketPrice: '$600-2000/month',
      features: ['Voice commands', 'Speech recognition', 'Voice synthesis', 'Multi-language support', 'Integration APIs'],
      benefits: ['Hands-free operation', 'Improved accessibility', 'Multi-language support', 'Enhanced productivity'],
      category: 'Voice AI',
      popular: false
    },
    {
      icon: Eye,
      title: 'Zion Computer Vision Suite',
      description: 'AI-powered computer vision platform for image analysis, quality control, and visual automation',
      price: '$399/month',
      marketPrice: '$700-2500/month',
      features: ['Image recognition', 'Quality control', 'Object detection', 'Visual analytics', 'Automated inspection'],
      benefits: ['Automated quality control', 'Reduced errors', 'Faster processing', 'Cost savings'],
      category: 'Computer Vision',
      popular: false
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses starting with automation',
      features: [
        'Up to 3 AI tools',
        'Basic automation',
        'Email support',
        'Standard templates',
        'Up to 10 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Comprehensive solution for growing businesses',
      features: [
        'Up to 10 AI tools',
        'Advanced automation',
        'Priority support',
        'Custom workflows',
        'Up to 50 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'Complete AI automation suite for large organizations',
      features: [
        'All AI tools included',
        'Custom AI development',
        '24/7 dedicated support',
        'Unlimited users',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ]

  const categories = [
    'Workflow Automation', 'Analytics', 'Human Resources', 'Customer Service',
    'Document Management', 'Marketing', 'Project Management', 'Cybersecurity',
    'Finance', 'E-commerce', 'Voice AI', 'Computer Vision'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Enterprise <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Automation Suite</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive collection of AI-powered micro SAAS solutions designed to automate and optimize every aspect of your business. 
              From workflow automation to customer intelligence, transform your operations with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Automation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View All Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI-Powered Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered tools designed to automate and optimize your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                    <span className="text-purple-400 text-sm font-medium">{solution.category}</span>
                  </div>
                  {solution.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-6">{solution.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">{solution.price}</div>
                    <div className="text-sm text-gray-400">Market: {solution.marketPrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Save up to</div>
                    <div className="text-lg font-bold text-green-400">40%</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  {solution.features.slice(0, 3).map((feature, featIndex) => (
                    <div key={featIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  {solution.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Get Started
                </button>
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
              Choose Your Automation Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your business needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
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
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our AI automation suite to streamline operations and boost productivity. 
            Contact us today to start your automation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
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

export default AiEnterpriseAutomationSuitePage