'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  BarChart, 
  MessageCircle, 
  Shield, 
  Cloud, 
  FileText, 
  Users, 
  Database, 
  Target, 
  Calendar, 
  Mail, 
  Package, 
  DollarSign, 
  Settings, 
  Monitor, 
  CheckSquare, 
  Globe, 
  Eye, 
  Code, 
  Zap, 
  Box, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  TrendingUp
} from 'lucide-react'

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      icon: BarChart,
      description: 'Advanced business intelligence platform with real-time analytics, custom dashboards, and predictive insights.',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Predictive analytics',
        'Multi-source data integration',
        'Automated reporting',
        'Mobile app included'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Up to 5 dashboards', '1 data source', 'Basic analytics'] },
        professional: { price: 79, period: 'month', features: ['Unlimited dashboards', '10 data sources', 'Advanced analytics', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Everything in Pro', 'Custom integrations', 'Priority support', 'White-label options'] }
      },
      category: 'Analytics',
      popular: true
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      icon: MessageCircle,
      description: 'Intelligent customer support chatbot with natural language processing and multi-channel integration.',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Custom knowledge base',
        'Sentiment analysis',
        'Live chat handoff',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['Up to 1,000 conversations', 'Basic AI responses', 'Email support'] },
        professional: { price: 49, period: 'month', features: ['Up to 10,000 conversations', 'Advanced AI', 'Custom branding', 'API access'] },
        enterprise: { price: 129, period: 'month', features: ['Unlimited conversations', 'Custom AI training', 'Priority support', 'White-label'] }
      },
      category: 'Customer Support',
      popular: true
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      icon: Shield,
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      features: [
        'Real-time threat monitoring',
        'Vulnerability scanning',
        'Incident response',
        'Compliance reporting',
        'Security training',
        '24/7 monitoring'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['Basic monitoring', 'Email alerts', 'Monthly reports'] },
        professional: { price: 89, period: 'month', features: ['Advanced monitoring', 'Real-time alerts', 'Weekly reports', 'Phone support'] },
        enterprise: { price: 199, period: 'month', features: ['Full monitoring suite', 'Custom alerts', 'Daily reports', 'Dedicated support'] }
      },
      category: 'Security',
      popular: false
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      icon: Cloud,
      description: 'Secure cloud backup and disaster recovery solution with automated backups and instant restore.',
      features: [
        'Automated backups',
        'Instant restore',
        'Cross-platform sync',
        'Version control',
        'Encryption at rest',
        'Compliance ready'
      ],
      pricing: {
        starter: { price: 15, period: 'month', features: ['100GB storage', 'Daily backups', 'Email support'] },
        professional: { price: 35, period: 'month', features: ['1TB storage', 'Hourly backups', 'Phone support', 'API access'] },
        enterprise: { price: 79, period: 'month', features: ['Unlimited storage', 'Real-time sync', 'Priority support', 'Custom retention'] }
      },
      category: 'Backup & Recovery',
      popular: false
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      icon: FileText,
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      features: [
        'AI content generation',
        'SEO optimization',
        'Multi-format support',
        'Brand voice training',
        'Content calendar',
        'Performance analytics'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['50 articles/month', 'Basic AI', 'Standard templates'] },
        professional: { price: 59, period: 'month', features: ['200 articles/month', 'Advanced AI', 'Custom templates', 'SEO tools'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited articles', 'Custom AI training', 'White-label', 'Priority support'] }
      },
      category: 'Content Creation',
      popular: true
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      icon: Users,
      description: 'AI-enhanced CRM with predictive analytics, automated workflows, and intelligent lead scoring.',
      features: [
        'Lead scoring AI',
        'Automated workflows',
        'Predictive analytics',
        'Email integration',
        'Sales forecasting',
        'Custom fields'
      ],
      pricing: {
        starter: { price: 35, period: 'month', features: ['Up to 1,000 contacts', 'Basic AI', 'Email integration'] },
        professional: { price: 79, period: 'month', features: ['Up to 10,000 contacts', 'Advanced AI', 'Custom workflows', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited contacts', 'Custom AI training', 'White-label', 'Dedicated support'] }
      },
      category: 'CRM',
      popular: true
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      icon: Database,
      description: 'Data integration platform that connects and synchronizes data across multiple systems and platforms.',
      features: [
        'Multi-platform sync',
        'Real-time updates',
        'Data transformation',
        'Error handling',
        'Monitoring dashboard',
        'Custom connectors'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['5 connections', 'Basic sync', 'Email support'] },
        professional: { price: 69, period: 'month', features: ['25 connections', 'Advanced sync', 'Phone support', 'Custom fields'] },
        enterprise: { price: 159, period: 'month', features: ['Unlimited connections', 'Real-time sync', 'Custom connectors', 'Priority support'] }
      },
      category: 'Data Integration',
      popular: false
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      icon: Target,
      description: 'Lead generation platform with landing pages, forms, and automated email sequences.',
      features: [
        'Drag-and-drop builder',
        'A/B testing',
        'Email automation',
        'Analytics dashboard',
        'Integration hub',
        'Mobile responsive'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['5 landing pages', 'Basic forms', 'Email sequences'] },
        professional: { price: 49, period: 'month', features: ['25 landing pages', 'Advanced forms', 'A/B testing', 'Analytics'] },
        enterprise: { price: 129, period: 'month', features: ['Unlimited pages', 'Custom templates', 'White-label', 'Priority support'] }
      },
      category: 'Lead Generation',
      popular: false
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      icon: Calendar,
      description: 'AI-powered project management tool with intelligent task assignment and progress tracking.',
      features: [
        'AI task assignment',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Resource management',
        'Reporting suite'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['Up to 5 projects', 'Basic AI', 'Team of 5'] },
        professional: { price: 59, period: 'month', features: ['Up to 25 projects', 'Advanced AI', 'Team of 25', 'Integrations'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited projects', 'Custom AI', 'Unlimited team', 'White-label'] }
      },
      category: 'Project Management',
      popular: true
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      icon: Mail,
      description: 'Advanced email marketing automation with AI-powered personalization and behavioral triggers.',
      features: [
        'AI personalization',
        'Behavioral triggers',
        'A/B testing',
        'Segmentation',
        'Analytics dashboard',
        'Template library'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Up to 1,000 subscribers', 'Basic automation', 'Email support'] },
        professional: { price: 69, period: 'month', features: ['Up to 10,000 subscribers', 'Advanced automation', 'Phone support', 'A/B testing'] },
        enterprise: { price: 179, period: 'month', features: ['Unlimited subscribers', 'Custom automation', 'White-label', 'Dedicated support'] }
      },
      category: 'Email Marketing',
      popular: false
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      icon: Package,
      description: 'Intelligent inventory management with predictive analytics and automated reordering.',
      features: [
        'Predictive analytics',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Reporting suite',
        'Integration hub'
      ],
      pricing: {
        starter: { price: 35, period: 'month', features: ['Up to 1,000 SKUs', 'Basic analytics', 'Email support'] },
        professional: { price: 79, period: 'month', features: ['Up to 10,000 SKUs', 'Advanced analytics', 'Phone support', 'Integrations'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited SKUs', 'Custom analytics', 'White-label', 'Priority support'] }
      },
      category: 'Inventory Management',
      popular: false
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      icon: DollarSign,
      description: 'AI-powered invoicing and payment processing with automated follow-ups and analytics.',
      features: [
        'AI invoice generation',
        'Payment processing',
        'Automated follow-ups',
        'Expense tracking',
        'Tax calculations',
        'Client portal'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['Up to 50 invoices', 'Basic AI', 'Email support'] },
        professional: { price: 49, period: 'month', features: ['Up to 500 invoices', 'Advanced AI', 'Phone support', 'Integrations'] },
        enterprise: { price: 129, period: 'month', features: ['Unlimited invoices', 'Custom AI', 'White-label', 'Priority support'] }
      },
      category: 'Invoicing',
      popular: false
    }
  ]

  const categories = ['All', 'Analytics', 'Customer Support', 'Security', 'Backup & Recovery', 'Content Creation', 'CRM', 'Data Integration', 'Lead Generation', 'Project Management', 'Email Marketing', 'Inventory Management', 'Invoicing']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SAAS Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, affordable micro SAAS tools designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-cyan-500/30"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-cyan-500/20 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-cyan-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-white">${service.pricing.professional.price}</span>
                    <span className="text-gray-400">/{service.pricing.professional.period}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.pricing.professional.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our suite of micro SAAS solutions and start your free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaasPage