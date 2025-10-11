'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, DollarSign, Users, Clock, Shield, BarChart, Smartphone, Globe, Database, Settings, Rocket, Star, TrendingUp, Target, Award, Cpu, Lock, MessageSquare, FileText, Calendar, Workflow, Eye, Wifi, Package, Mic, Heart, Gauge, Phone, Mail, MapPin } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Dashboards', 'Data Export'],
      pricing: '$99/month',
      marketPrice: '$199/month',
      benefits: ['Increase revenue by 25%', 'Reduce decision time by 60%', '24/7 monitoring'],
      link: '/ai-analytics-dashboard'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer service automation with natural language processing.',
      features: ['24/7 Support', 'Multi-language', 'Ticket Management', 'Live Chat Integration'],
      pricing: '$149/month',
      marketPrice: '$299/month',
      benefits: ['Reduce support costs by 40%', 'Improve response time by 80%', 'Customer satisfaction +35%'],
      link: '/ai-customer-support-bot'
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automated document processing with OCR, classification, and data extraction.',
      features: ['OCR Technology', 'Auto Classification', 'Data Extraction', 'Batch Processing'],
      pricing: '$199/month',
      marketPrice: '$399/month',
      benefits: ['Process 10x faster', '99.5% accuracy', 'Save 20 hours/week'],
      link: '/ai-document-processor'
    },
    {
      icon: Calendar,
      title: 'AI Scheduling Assistant',
      description: 'Smart scheduling system with conflict resolution and optimization.',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Calendar Integration', 'Time Zone Support'],
      pricing: '$79/month',
      marketPrice: '$159/month',
      benefits: ['Reduce no-shows by 30%', 'Save 5 hours/week', 'Improve efficiency by 50%'],
      link: '/ai-scheduling-assistant'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management.',
      features: ['Process Automation', 'Rule Engine', 'Integration Hub', 'Performance Monitoring'],
      pricing: '$299/month',
      marketPrice: '$599/month',
      benefits: ['Reduce manual work by 70%', 'Eliminate errors', 'Scale operations 3x'],
      link: '/ai-workflow-automation'
    },
    {
      icon: Eye,
      title: 'AI Content Moderator',
      description: 'Automated content moderation with image, text, and video analysis.',
      features: ['Image Recognition', 'Text Analysis', 'Video Processing', 'Real-time Alerts'],
      pricing: '$179/month',
      marketPrice: '$359/month',
      benefits: ['99.9% accuracy', 'Process 1000s of posts/hour', 'Reduce moderation costs by 60%'],
      link: '/ai-content-moderator'
    },
    {
      icon: Wifi,
      title: 'AI Network Monitor',
      description: 'Intelligent network monitoring with anomaly detection and security alerts.',
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Security Alerts', 'Performance Analytics'],
      pricing: '$249/month',
      marketPrice: '$499/month',
      benefits: ['Prevent 95% of issues', 'Reduce downtime by 80%', 'Improve security posture'],
      link: '/ai-network-monitor'
    },
    {
      icon: Package,
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting and optimization.',
      features: ['Demand Forecasting', 'Stock Optimization', 'Reorder Alerts', 'Analytics Dashboard'],
      pricing: '$199/month',
      marketPrice: '$399/month',
      benefits: ['Reduce stockouts by 90%', 'Lower inventory costs by 25%', 'Improve cash flow'],
      link: '/ai-inventory-manager'
    },
    {
      icon: Mic,
      title: 'AI Voice Assistant',
      description: 'Custom voice assistant for business operations and customer service.',
      features: ['Voice Commands', 'Natural Language', 'Multi-platform', 'Custom Training'],
      pricing: '$129/month',
      marketPrice: '$259/month',
      benefits: ['Hands-free operation', 'Improve accessibility', 'Increase productivity by 40%'],
      link: '/ai-voice-assistant'
    },
    {
      icon: Heart,
      title: 'AI Health Monitor',
      description: 'Employee wellness tracking with health insights and recommendations.',
      features: ['Health Tracking', 'Wellness Insights', 'Alert System', 'Privacy Protection'],
      pricing: '$89/month',
      marketPrice: '$179/month',
      benefits: ['Improve employee wellness', 'Reduce healthcare costs', 'Increase productivity'],
      link: '/ai-health-monitor'
    },
    {
      icon: Gauge,
      title: 'AI Performance Tracker',
      description: 'Employee performance analytics with AI-powered insights and recommendations.',
      features: ['Performance Analytics', 'Goal Tracking', 'Feedback System', 'Growth Recommendations'],
      pricing: '$159/month',
      marketPrice: '$319/month',
      benefits: ['Improve performance by 35%', 'Reduce turnover by 25%', 'Better team alignment'],
      link: '/ai-performance-tracker'
    },
    {
      icon: Phone,
      title: 'AI Call Center',
      description: 'Intelligent call center solution with automated routing and analytics.',
      features: ['Smart Routing', 'Call Analytics', 'Quality Monitoring', 'Integration APIs'],
      pricing: '$399/month',
      marketPrice: '$799/month',
      benefits: ['Improve call handling by 50%', 'Reduce wait times by 60%', 'Better customer experience'],
      link: '/ai-call-center'
    }
  ]

  const platformFeatures = [
    'Rapid deployment and setup (24-48 hours)',
    'Scalable cloud architecture (AWS/Azure/GCP)',
    'Built-in analytics and monitoring dashboard',
    'Custom branding and white-label options',
    'RESTful API integration capabilities',
    'Multi-tenant SaaS architecture',
    'Automated billing and subscription management',
    '24/7 technical support and monitoring',
    'GDPR and SOC2 compliance ready',
    'Mobile-responsive design',
    'Real-time notifications and alerts',
    'Advanced security and encryption'
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 users',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 users',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        '24/7 phone support',
        'White-label solution',
        'Unlimited storage',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

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
              Launch your software-as-a-service business quickly with our comprehensive suite of AI-powered micro-SaaS solutions. 
              Each solution is ready to deploy and can generate revenue from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Zap className="w-5 h-5 inline mr-2" />
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 inline mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-SaaS Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready-to-Deploy Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive library of AI-powered micro-SaaS solutions. Each solution comes with complete source code, 
              documentation, and deployment support.
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
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-400">{service.pricing}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
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
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Business Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center text-sm"
                  >
                    Learn More
                  </a>
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Platform Features
            </h2>
            <p className="text-xl text-gray-300">
              Every micro-SaaS solution comes with our comprehensive platform features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your business needs. All plans include our micro-SaaS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
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
            Ready to Launch Your Micro-SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of entrepreneurs who have successfully launched their SaaS businesses with our platform. 
            Start your free trial today and see results in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Enterprise-grade security</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaaSPage