import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, BarChart3, MessageSquare, FileText, Calendar, Mail, DollarSign, Users, Settings, Globe, Smartphone, Database, Code, Lock, Target, TrendingUp, Sparkles, Rocket } from 'lucide-react'

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      link: '/micro-saas/analytics-dashboard',
      price: '$29/month',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'Data visualization'],
      category: 'Analytics',
      popular: true
    },
    {
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing campaigns.',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      link: '/micro-saas/content-generator',
      price: '$19/month',
      features: ['Blog posts', 'Social media', 'Email campaigns', 'SEO optimization'],
      category: 'Content',
      popular: true
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support and lead generation.',
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      link: '/micro-saas/chatbot-builder',
      price: '$39/month',
      features: ['No-code builder', 'Multi-language', 'Integration APIs', 'Analytics'],
      category: 'Automation',
      popular: true
    },
    {
      title: 'Appointment Scheduler',
      description: 'Automated scheduling system with calendar integration and reminders.',
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      link: '/micro-saas/appointment-scheduler',
      price: '$15/month',
      features: ['Calendar sync', 'Auto-reminders', 'Time zones', 'Custom forms'],
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Email Marketing Automation',
      description: 'Advanced email marketing with AI-powered personalization and automation.',
      icon: <Mail className="w-8 h-8 text-red-400" />,
      link: '/micro-saas/email-marketing',
      price: '$25/month',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics'],
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense tracking with receipt scanning and categorization.',
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      link: '/micro-saas/expense-tracker',
      price: '$12/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Reports', 'Tax preparation'],
      category: 'Finance',
      popular: false
    },
    {
      title: 'Lead Scoring System',
      description: 'AI-driven lead qualification and scoring for better conversion rates.',
      icon: <Target className="w-8 h-8 text-indigo-400" />,
      link: '/micro-saas/lead-scoring',
      price: '$35/month',
      features: ['AI scoring', 'CRM integration', 'Behavior tracking', 'Predictions'],
      category: 'Sales',
      popular: true
    },
    {
      title: 'Social Media Manager',
      description: 'Automated social media posting and engagement across all platforms.',
      icon: <Users className="w-8 h-8 text-pink-400" />,
      link: '/micro-saas/social-manager',
      price: '$22/month',
      features: ['Multi-platform', 'Scheduling', 'Analytics', 'Engagement tools'],
      category: 'Social Media',
      popular: false
    },
    {
      title: 'SEO Optimizer',
      description: 'AI-powered SEO analysis and optimization recommendations.',
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      link: '/micro-saas/seo-optimizer',
      price: '$18/month',
      features: ['Keyword research', 'Content optimization', 'Rank tracking', 'Reports'],
      category: 'SEO',
      popular: false
    },
    {
      title: 'Document Processor',
      description: 'AI-powered document processing with OCR and data extraction.',
      icon: <FileText className="w-8 h-8 text-teal-400" />,
      link: '/micro-saas/document-processor',
      price: '$28/month',
      features: ['OCR scanning', 'Data extraction', 'Form processing', 'Batch operations'],
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Inventory Management',
      description: 'Smart inventory tracking with predictive analytics and automation.',
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      link: '/micro-saas/inventory-management',
      price: '$32/month',
      features: ['Real-time tracking', 'Predictive analytics', 'Automated reordering', 'Reports'],
      category: 'E-commerce',
      popular: false
    },
    {
      title: 'Support Bot Pro',
      description: 'Advanced AI customer support bot with ticket management.',
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      link: '/micro-saas/support-bot',
      price: '$45/month',
      features: ['24/7 support', 'Ticket management', 'Knowledge base', 'Escalation'],
      category: 'Support',
      popular: true
    }
  ]

  const categories = ['All', 'Analytics', 'Content', 'Automation', 'Productivity', 'Marketing', 'Finance', 'Sales', 'Social Media', 'SEO', 'E-commerce', 'Support']

  const benefits = [
    {
      title: 'No Setup Fees',
      description: 'Start immediately with our ready-to-use micro SAAS solutions',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Scalable Pricing',
      description: 'Pay only for what you use with flexible pricing plans',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance',
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: <Settings className="w-6 h-6 text-blue-400" />
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'The AI Analytics Dashboard transformed our decision-making process. We can now predict trends and optimize our operations in real-time.',
      rating: 5,
      service: 'AI Analytics Dashboard'
    },
    {
      name: 'Michael Rodriguez',
      company: 'ContentPro Agency',
      content: 'The Content Generator saves us 10+ hours per week. The AI-generated content is high-quality and perfectly optimized for SEO.',
      rating: 5,
      service: 'AI Content Generator'
    },
    {
      name: 'Emily Johnson',
      company: 'E-commerce Plus',
      content: 'Our lead conversion rate increased by 40% after implementing the Lead Scoring System. The AI predictions are incredibly accurate.',
      rating: 5,
      service: 'Lead Scoring System'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services designed to streamline your business operations with AI-powered solutions." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, automation, productivity, analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, affordable micro SAAS tools designed to automate and optimize your business processes. 
              Choose from our comprehensive suite of AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built for modern businesses that need powerful tools without the complexity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Micro SAAS Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose from our comprehensive suite of AI-powered business tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                service.popular 
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' 
                  : 'border-cyan-500/20 hover:border-cyan-400/40'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                    {service.category}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center w-full justify-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300">
              Trusted by businesses worldwide for their micro SAAS needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div className="mb-2">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
                <div className="text-sm text-cyan-400">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start with any of our micro SAAS solutions and scale as you grow. 
              No long-term contracts, no setup fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}