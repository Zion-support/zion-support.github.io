'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, DollarSign, Users, Clock, Shield, Code, BarChart, Smartphone, Mail, Calendar, FileText, MessageCircle, ShoppingCart, Database, Cloud, Lock, TrendingUp, Settings, Globe, Heart, Star, Award, Rocket, Target, Brain, Cpu, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, Phone } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: MessageCircle,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support automation with natural language processing and 24/7 availability.',
      features: ['Multi-language support', 'Sentiment analysis', 'Ticket routing', 'Knowledge base integration', 'Live chat handoff'],
      pricing: '$99/month',
      marketPrice: '$150-300/month',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 80%', '24/7 customer availability'],
      link: 'https://ziontechgroup.com/ai-customer-support-bot'
    },
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated reporting.',
      features: ['Custom dashboards', 'Predictive modeling', 'Automated reports', 'Data visualization', 'Alert system'],
      pricing: '$149/month',
      marketPrice: '$200-500/month',
      benefits: ['Make data-driven decisions', 'Identify trends early', 'Automate reporting tasks'],
      link: 'https://ziontechgroup.com/ai-analytics-dashboard'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing Automation',
      description: 'Smart email campaigns with personalization, A/B testing, and behavioral triggers.',
      features: ['Smart segmentation', 'Behavioral triggers', 'A/B testing', 'Personalization', 'Analytics'],
      pricing: '$79/month',
      marketPrice: '$120-250/month',
      benefits: ['Increase open rates by 40%', 'Reduce manual work by 70%', 'Better customer engagement'],
      link: 'https://ziontechgroup.com/ai-email-marketing'
    },
    {
      icon: Calendar,
      title: 'AI Appointment Scheduler',
      description: 'Intelligent scheduling system with timezone handling, reminders, and conflict resolution.',
      features: ['Smart scheduling', 'Timezone handling', 'Reminder system', 'Conflict resolution', 'Calendar sync'],
      pricing: '$59/month',
      marketPrice: '$80-150/month',
      benefits: ['Reduce no-shows by 50%', 'Save 5+ hours weekly', 'Improve customer satisfaction'],
      link: 'https://ziontechgroup.com/ai-appointment-scheduler'
    },
    {
      icon: FileText,
      title: 'AI Document Processor',
      description: 'Automated document processing with OCR, data extraction, and intelligent categorization.',
      features: ['OCR technology', 'Data extraction', 'Smart categorization', 'Batch processing', 'API integration'],
      pricing: '$129/month',
      marketPrice: '$180-350/month',
      benefits: ['Process documents 10x faster', 'Reduce errors by 90%', 'Eliminate manual data entry'],
      link: 'https://ziontechgroup.com/ai-document-processor'
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Optimizer',
      description: 'Smart product recommendations, pricing optimization, and inventory management.',
      features: ['Product recommendations', 'Price optimization', 'Inventory forecasting', 'Customer insights', 'A/B testing'],
      pricing: '$199/month',
      marketPrice: '$300-600/month',
      benefits: ['Increase sales by 25%', 'Reduce inventory costs', 'Improve customer experience'],
      link: 'https://ziontechgroup.com/ai-ecommerce-optimizer'
    },
    {
      icon: Users,
      title: 'AI HR Assistant',
      description: 'Automated HR processes including resume screening, interview scheduling, and employee onboarding.',
      features: ['Resume screening', 'Interview scheduling', 'Onboarding automation', 'Performance tracking', 'Compliance monitoring'],
      pricing: '$179/month',
      marketPrice: '$250-450/month',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Streamline HR processes'],
      link: 'https://ziontechgroup.com/ai-hr-assistant'
    },
    {
      icon: Database,
      title: 'AI Data Visualizer',
      description: 'Transform complex data into interactive visualizations and automated insights.',
      features: ['Interactive charts', 'Automated insights', 'Custom dashboards', 'Real-time updates', 'Export options'],
      pricing: '$89/month',
      marketPrice: '$120-250/month',
      benefits: ['Make data accessible', 'Identify patterns quickly', 'Share insights easily'],
      link: 'https://ziontechgroup.com/ai-data-visualization'
    },
    {
      icon: Cloud,
      title: 'AI Cloud Infrastructure Monitor',
      description: 'Intelligent monitoring and optimization of cloud resources with predictive scaling.',
      features: ['Resource monitoring', 'Predictive scaling', 'Cost optimization', 'Performance alerts', 'Automated fixes'],
      pricing: '$159/month',
      marketPrice: '$220-400/month',
      benefits: ['Reduce cloud costs by 30%', 'Prevent downtime', 'Optimize performance'],
      link: 'https://ziontechgroup.com/ai-cloud-monitor'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and automated security response with machine learning.',
      features: ['Threat detection', 'Automated response', 'Vulnerability scanning', 'Compliance monitoring', 'Incident reporting'],
      pricing: '$249/month',
      marketPrice: '$350-700/month',
      benefits: ['Prevent security breaches', 'Reduce false positives', 'Ensure compliance'],
      link: 'https://ziontechgroup.com/ai-cybersecurity-monitor'
    },
    {
      icon: Code,
      title: 'AI Code Assistant',
      description: 'Intelligent code generation, review, and optimization with multiple programming languages.',
      features: ['Code generation', 'Code review', 'Bug detection', 'Performance optimization', 'Documentation'],
      pricing: '$119/month',
      marketPrice: '$150-300/month',
      benefits: ['Write code 3x faster', 'Reduce bugs by 60%', 'Improve code quality'],
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      icon: TrendingUp,
      title: 'AI Financial Analyzer',
      description: 'Automated financial analysis, forecasting, and investment recommendations.',
      features: ['Financial forecasting', 'Risk analysis', 'Investment insights', 'Budget optimization', 'Reporting'],
      pricing: '$189/month',
      marketPrice: '$250-500/month',
      benefits: ['Make better financial decisions', 'Identify opportunities', 'Reduce financial risks'],
      link: 'https://ziontechgroup.com/ai-financial-analyzer'
    }
  ]

  const platformFeatures = [
    'Rapid deployment and setup (24-48 hours)',
    'Scalable cloud architecture',
    'Built-in analytics and monitoring',
    'Custom branding and white-labeling',
    'RESTful API integration capabilities',
    'Multi-tenant support with data isolation',
    'Automated billing and subscription management',
    '24/7 technical support and maintenance',
    'Mobile-responsive design',
    'GDPR and SOC2 compliance',
    'Automated backups and disaster recovery',
    'Real-time performance monitoring'
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 users',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 users',
        'Advanced AI features',
        'Priority support',
        'Custom branding',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Full AI capabilities',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
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
              From customer support to analytics, we provide everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your SaaS Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-SaaS Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro-SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro-SaaS solutions, each designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{service.pricing}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <div className="text-sm text-green-400 font-medium">
                    Save up to 40% vs market rates
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                  <button className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS platform provides all the essential components for a successful SaaS business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300 bg-white/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
            Ready to Launch Your SaaS Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful entrepreneurs who have launched their SaaS businesses with our platform. 
            Get started today and launch your software business in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaaSPage