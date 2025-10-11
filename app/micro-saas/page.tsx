'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, DollarSign, Users, Clock, Shield, Globe, Smartphone, BarChart, Mail, Calendar, FileText, MessageSquare, ShoppingCart, Rocket, Settings, Monitor, Database, Cpu, Wifi, Lock, TrendingUp, Star, Award, Target, Heart, Lightbulb, Gauge, Phone, Code, Cloud, Brain, Shield as ShieldIcon, Code as CodeIcon, BarChart as BarChartIcon, Zap as ZapIcon } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: Mail,
      title: 'AI Email Marketing Automation',
      description: 'Intelligent email campaigns with AI-powered personalization and optimization.',
      features: ['Smart Segmentation', 'A/B Testing', 'Behavioral Triggers', 'Analytics Dashboard'],
      pricing: '$29/month',
      category: 'Marketing',
      benefits: ['40% higher open rates', '60% increase in conversions', 'Automated workflows', 'Real-time analytics']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling Assistant',
      description: 'AI-powered scheduling that eliminates back-and-forth emails and optimizes meeting times.',
      features: ['Calendar Integration', 'Time Zone Detection', 'Conflict Resolution', 'Meeting Analytics'],
      pricing: '$19/month',
      category: 'Productivity',
      benefits: ['Save 2+ hours daily', 'Reduce no-shows by 30%', 'Multi-platform sync', 'Custom availability rules']
    },
    {
      icon: FileText,
      title: 'Document AI Processor',
      description: 'Automated document processing with intelligent data extraction and classification.',
      features: ['OCR Technology', 'Smart Classification', 'Data Validation', 'API Integration'],
      pricing: '$49/month',
      category: 'Productivity',
      benefits: ['90% accuracy rate', 'Process 1000+ docs/hour', 'Multi-format support', 'Custom templates']
    },
    {
      icon: MessageSquare,
      title: 'Customer Support Chatbot',
      description: 'AI-powered customer support with natural language understanding and escalation.',
      features: ['24/7 Availability', 'Multi-language Support', 'Ticket Management', 'Performance Analytics'],
      pricing: '$39/month',
      category: 'Customer Service',
      benefits: ['Instant responses', '80% query resolution', 'Seamless handoff to humans', 'Learning capabilities']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Analytics Pro',
      description: 'Advanced analytics and insights for e-commerce businesses with predictive modeling.',
      features: ['Sales Forecasting', 'Customer Behavior Analysis', 'Inventory Optimization', 'Revenue Tracking'],
      pricing: '$79/month',
      category: 'Analytics',
      benefits: ['25% revenue increase', 'Predictive insights', 'Real-time dashboards', 'Custom reports']
    },
    {
      icon: Rocket,
      title: 'Social Media Scheduler',
      description: 'AI-powered social media management with optimal posting times and content suggestions.',
      features: ['Multi-platform Posting', 'Content Calendar', 'Hashtag Optimization', 'Engagement Analytics'],
      pricing: '$35/month',
      category: 'Social Media',
      benefits: ['3x engagement boost', 'Optimal timing', 'Content suggestions', 'Performance tracking']
    },
    {
      icon: Settings,
      title: 'Workflow Automation Engine',
      description: 'No-code automation platform for business processes with AI-powered optimization.',
      features: ['Drag-and-Drop Builder', 'API Integrations', 'Conditional Logic', 'Performance Monitoring'],
      pricing: '$59/month',
      category: 'Automation',
      benefits: ['Reduce manual work by 70%', 'Error-free processes', 'Scalable workflows', 'Real-time monitoring']
    },
    {
      icon: Monitor,
      title: 'Website Performance Monitor',
      description: 'Real-time website monitoring with AI-powered insights and automated alerts.',
      features: ['Uptime Monitoring', 'Performance Metrics', 'Alert System', 'Historical Reports'],
      pricing: '$25/month',
      category: 'Monitoring',
      benefits: ['99.9% uptime guarantee', 'Instant alerts', 'Performance optimization', 'Detailed reports']
    },
    {
      icon: Database,
      title: 'Data Backup & Sync',
      description: 'Automated data backup and synchronization across multiple platforms with encryption.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Encryption'],
      pricing: '$15/month',
      category: 'Data Management',
      benefits: ['Zero data loss', 'Automatic sync', 'Version history', 'Bank-level security']
    },
    {
      icon: Cpu,
      title: 'API Management Suite',
      description: 'Complete API lifecycle management with monitoring, analytics, and security features.',
      features: ['API Gateway', 'Rate Limiting', 'Analytics Dashboard', 'Security Controls'],
      pricing: '$99/month',
      category: 'API Management',
      benefits: ['Centralized management', 'Enhanced security', 'Usage analytics', 'Developer portal']
    },
    {
      icon: Wifi,
      title: 'Network Security Scanner',
      description: 'Automated network vulnerability scanning with AI-powered threat detection.',
      features: ['Vulnerability Assessment', 'Threat Detection', 'Compliance Reporting', 'Remediation Guidance'],
      pricing: '$149/month',
      category: 'Security',
      benefits: ['Proactive security', 'Compliance ready', 'Automated scanning', 'Expert recommendations']
    },
    {
      icon: Lock,
      title: 'Password Manager Pro',
      description: 'Enterprise-grade password management with advanced security features and team collaboration.',
      features: ['Secure Storage', 'Team Sharing', 'Password Generator', 'Breach Monitoring'],
      pricing: '$12/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Team collaboration', 'Automatic generation', 'Breach alerts']
    }
  ]

  const features = [
    'Rapid deployment and setup',
    'Scalable architecture',
    'Built-in analytics and monitoring',
    'Custom branding options',
    'API integration capabilities',
    'Multi-tenant support',
    'Automated billing and subscriptions',
    '24/7 technical support'
  ]

  const categories = ['All', 'Marketing', 'Productivity', 'Customer Service', 'Analytics', 'Social Media', 'Automation', 'Monitoring', 'Data Management', 'API Management', 'Security']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch your software-as-a-service business quickly with our comprehensive suite of ready-to-deploy micro-SaaS solutions. 
              From AI-powered tools to productivity enhancers, we provide everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your SaaS
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS platform provides all the essential components for a successful SaaS business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready-to-Deploy Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our comprehensive library of micro-SaaS solutions, each designed to solve specific business problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your business needs. All plans include our core platform features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-white mb-2">$29</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1 Micro SaaS Solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard Deployment
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Professional</h3>
                <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">$79</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 Micro SaaS Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Branding
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API Access
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-white mb-2">$199</div>
              <div className="text-gray-400 mb-6">per month</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Enterprise Analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label Solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro-SaaS platform and launch your software business in weeks, not months.
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaaSPage