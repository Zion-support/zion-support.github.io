import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket, DollarSign, Clock, Award, Headphones } from 'lucide-react'

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with SEO optimization, multi-language support, and brand voice customization.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/micro-saas-services/ai-content-generator',
      price: '$29/month',
      features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Plagiarism detection', 'Content scheduling'],
      category: 'AI & Content',
      popular: true
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with natural language processing.',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      link: '/micro-saas-services/ai-chatbot-builder',
      price: '$49/month',
      features: ['Visual chatbot builder', 'Multi-channel integration', 'Analytics dashboard', 'Custom training', 'API access', '24/7 support'],
      category: 'AI & Automation',
      popular: true
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with AI-powered insights, predictive analytics, and custom reporting.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      link: '/micro-saas-services/ai-analytics-dashboard',
      price: '$79/month',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization', 'Automated reports', 'API integration'],
      category: 'Analytics & BI',
      popular: false
    },
    {
      title: 'AI Email Assistant',
      description: 'Smart email management with AI-powered writing, scheduling, follow-ups, and inbox organization.',
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      link: '/micro-saas-services/ai-email-assistant',
      price: '$19/month',
      features: ['Smart email writing', 'Auto-scheduling', 'Follow-up automation', 'Inbox organization', 'Template library', 'Email analytics'],
      category: 'Productivity',
      popular: true
    },
    {
      title: 'AI Lead Generation',
      description: 'Automated lead discovery, qualification, and nurturing with AI-powered prospecting and CRM integration.',
      icon: <Target className="w-8 h-8 text-red-400" />,
      link: '/micro-saas-services/ai-lead-generation',
      price: '$99/month',
      features: ['Automated prospecting', 'Lead scoring', 'CRM integration', 'Email sequences', 'Social media monitoring', 'Performance tracking'],
      category: 'Sales & Marketing',
      popular: false
    },
    {
      title: 'AI Code Assistant',
      description: 'AI-powered coding companion with code generation, debugging, documentation, and best practice suggestions.',
      icon: <Code2 className="w-8 h-8 text-yellow-400" />,
      link: '/micro-saas-services/ai-code-assistant',
      price: '$39/month',
      features: ['Code generation', 'Bug detection', 'Documentation', 'Code review', 'Multi-language support', 'IDE integration'],
      category: 'Development',
      popular: true
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automated social media management with content creation, scheduling, engagement, and analytics.',
      icon: <Globe className="w-8 h-8 text-pink-400" />,
      link: '/micro-saas-services/ai-social-media-manager',
      price: '$59/month',
      features: ['Content creation', 'Multi-platform posting', 'Engagement automation', 'Analytics tracking', 'Hashtag optimization', 'Competitor analysis'],
      category: 'Social Media',
      popular: false
    },
    {
      title: 'AI Project Manager',
      description: 'Intelligent project management with task automation, resource allocation, and predictive timeline management.',
      icon: <Settings className="w-8 h-8 text-indigo-400" />,
      link: '/micro-saas-services/ai-project-manager',
      price: '$69/month',
      features: ['Task automation', 'Resource optimization', 'Timeline prediction', 'Risk assessment', 'Team collaboration', 'Progress tracking'],
      category: 'Project Management',
      popular: false
    },
    {
      title: 'AI Customer Support',
      description: 'Advanced customer support automation with intelligent ticket routing, response generation, and satisfaction tracking.',
      icon: <Headphones className="w-8 h-8 text-teal-400" />,
      link: '/micro-saas-services/ai-customer-support',
      price: '$89/month',
      features: ['Ticket automation', 'Response generation', 'Sentiment analysis', 'Knowledge base', 'Multi-channel support', 'Performance metrics'],
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'AI Data Visualizer',
      description: 'Transform complex data into interactive visualizations with AI-powered insights and automated chart generation.',
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      link: '/micro-saas-services/ai-data-visualizer',
      price: '$49/month',
      features: ['Auto-visualization', 'Interactive charts', 'Data storytelling', 'Export options', 'Real-time updates', 'Custom themes'],
      category: 'Data & Analytics',
      popular: false
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered data extraction, payment tracking, and financial reporting.',
      icon: <DollarSign className="w-8 h-8 text-emerald-400" />,
      link: '/micro-saas-services/ai-invoice-generator',
      price: '$29/month',
      features: ['Auto-invoice creation', 'Payment tracking', 'Tax calculations', 'Multi-currency support', 'Client management', 'Financial reports'],
      category: 'Finance & Accounting',
      popular: false
    },
    {
      title: 'AI Meeting Assistant',
      description: 'Intelligent meeting management with transcription, action items, and automated follow-up generation.',
      icon: <Users className="w-8 h-8 text-violet-400" />,
      link: '/micro-saas-services/ai-meeting-assistant',
      price: '$39/month',
      features: ['Live transcription', 'Action item extraction', 'Meeting summaries', 'Calendar integration', 'Voice recognition', 'Note sharing'],
      category: 'Productivity',
      popular: true
    }
  ]

  const categories = ['All', 'AI & Content', 'AI & Automation', 'Analytics & BI', 'Productivity', 'Sales & Marketing', 'Development', 'Social Media', 'Project Management', 'Customer Service', 'Data & Analytics', 'Finance & Accounting']

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: ['Up to 3 services', 'Basic AI features', 'Email support', 'Standard templates', '1 user account'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 10 services', 'Advanced AI features', 'Priority support', 'Custom templates', '5 user accounts', 'API access'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: ['Unlimited services', 'Premium AI features', '24/7 support', 'White-label options', 'Unlimited users', 'Custom integrations'],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS services. From content generation to project management, we have the tools to transform your business." />
        <meta name="keywords" content="micro saas, AI services, business automation, productivity tools, AI solutions" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI-powered micro SAAS services. 
            Choose from 12+ specialized tools designed to automate, optimize, and accelerate your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SAAS Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                service.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-cyan-500/20 hover:border-cyan-400/40'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-gray-400 ml-1">per month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-slate-700/50 px-3 py-1 rounded-full">
                    {service.category}
                  </span>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-cyan-500/20 hover:border-cyan-400/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS services to automate and optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}