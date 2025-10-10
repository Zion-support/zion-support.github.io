'use client';
import React, { useState } from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Brain, Cloud, Shield, Code, BarChart, Users, Award, Target, Star, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock, Zap, Globe, Calendar, FileText, Settings, CheckSquare, MessageSquare, Building, Clock, Send, DollarSign, Rocket, Shield as ShieldIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Star as StarIcon, Award as AwardIcon, Target as TargetIcon, Brain as BrainIcon, Cloud as CloudIcon, Code as CodeIcon, BarChart as BarChartIcon, Users as UsersIcon2, Zap as ZapIcon, Globe as GlobeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, Settings as SettingsIcon, CheckSquare as CheckSquareIcon, MessageSquare as MessageSquareIcon, Building as BuildingIcon, Clock as ClockIcon, Send as SendIcon, DollarSign as DollarSignIcon, Rocket as RocketIcon } from 'lucide-react';

export default function MicroSaasPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Project Manager Pro',
          description: 'Intelligent project management with predictive analytics and automated resource allocation',
          features: ['Smart Task Assignment', 'Risk Prediction', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration'],
          pricing: '$299/month',
          trial: '14-day free trial',
          roi: '300% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-project-manager'
        },
        {
          name: 'AI Social Media Manager',
          description: 'Automated social media content creation, scheduling, and engagement optimization',
          features: ['Content Generation', 'Post Scheduling', 'Engagement Analytics', 'Hashtag Optimization', 'Multi-platform Management'],
          pricing: '$199/month',
          trial: '7-day free trial',
          roi: '250% ROI in 3 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-social-media-manager'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence with predictive insights and automated reporting',
          features: ['Real-time Analytics', 'Predictive Insights', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
          pricing: '$399/month',
          trial: '14-day free trial',
          roi: '400% ROI in 4 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-analytics-dashboard'
        },
        {
          name: 'AI Email Marketing Suite',
          description: 'Intelligent email campaigns with personalization and automated A/B testing',
          features: ['Smart Personalization', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'List Segmentation'],
          pricing: '$149/month',
          trial: '7-day free trial',
          roi: '200% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-email-marketing'
        }
      ]
    },
    {
      category: 'Customer Experience Solutions',
      icon: Users,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'AI Customer Support Bot',
          description: '24/7 intelligent customer support with natural language processing and escalation management',
          features: ['24/7 Availability', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management', 'Knowledge Base Integration'],
          pricing: '$249/month',
          trial: '14-day free trial',
          roi: '350% ROI in 5 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-customer-support-bot'
        },
        {
          name: 'AI Lead Generation Engine',
          description: 'Automated lead identification, qualification, and nurturing with AI-powered scoring',
          features: ['Lead Scoring', 'Automated Outreach', 'Qualification Logic', 'CRM Integration', 'Performance Tracking'],
          pricing: '$349/month',
          trial: '14-day free trial',
          roi: '450% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-lead-generation'
        },
        {
          name: 'AI Chatbot Builder',
          description: 'No-code chatbot creation platform with advanced conversation flows and integrations',
          features: ['Drag & Drop Builder', 'Multi-channel Deployment', 'Analytics Dashboard', 'Integration APIs', 'Custom Templates'],
          pricing: '$99/month',
          trial: '7-day free trial',
          roi: '150% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-chatbot-builder'
        }
      ]
    },
    {
      category: 'Content & Marketing Automation',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'AI Content Studio',
          description: 'Complete content creation suite with AI writing, editing, and optimization tools',
          features: ['AI Writing Assistant', 'Content Optimization', 'SEO Analysis', 'Brand Voice Training', 'Multi-format Support'],
          pricing: '$179/month',
          trial: '7-day free trial',
          roi: '200% ROI in 3 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-content-studio'
        },
        {
          name: 'AI SEO Optimizer',
          description: 'Automated SEO analysis, keyword research, and content optimization recommendations',
          features: ['Keyword Research', 'Content Analysis', 'Technical SEO', 'Competitor Analysis', 'Rank Tracking'],
          pricing: '$129/month',
          trial: '7-day free trial',
          roi: '180% ROI in 4 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-seo-optimizer'
        },
        {
          name: 'AI Social Media Analytics',
          description: 'Advanced social media performance tracking with sentiment analysis and trend prediction',
          features: ['Performance Tracking', 'Sentiment Analysis', 'Trend Prediction', 'Competitor Analysis', 'ROI Measurement'],
          pricing: '$159/month',
          trial: '7-day free trial',
          roi: '220% ROI in 3 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-social-media-analytics'
        }
      ]
    },
    {
      category: 'Financial & Business Intelligence',
      icon: BarChart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'AI Invoice Generator',
          description: 'Automated invoice creation, tracking, and payment processing with smart reminders',
          features: ['Auto Invoice Generation', 'Payment Tracking', 'Smart Reminders', 'Multi-currency Support', 'Integration APIs'],
          pricing: '$79/month',
          trial: '7-day free trial',
          roi: '120% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-invoice-generator'
        },
        {
          name: 'AI Expense Tracker',
          description: 'Intelligent expense categorization, receipt scanning, and budget management',
          features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation', 'Mobile App'],
          pricing: '$59/month',
          trial: '7-day free trial',
          roi: '100% ROI in 1 month',
          popular: false,
          link: 'https://ziontechgroup.com/ai-expense-tracker'
        },
        {
          name: 'AI Financial Advisor',
          description: 'Personalized financial planning and investment recommendations based on AI analysis',
          features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Goal Tracking', 'Market Insights'],
          pricing: '$199/month',
          trial: '14-day free trial',
          roi: '300% ROI in 6 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-financial-advisor'
        }
      ]
    },
    {
      category: 'Productivity & Workflow Tools',
      icon: Zap,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      services: [
        {
          name: 'AI Scheduler Pro',
          description: 'Intelligent meeting scheduling with conflict resolution and time zone management',
          features: ['Smart Scheduling', 'Conflict Resolution', 'Time Zone Management', 'Calendar Integration', 'Meeting Analytics'],
          pricing: '$89/month',
          trial: '7-day free trial',
          roi: '140% ROI in 2 months',
          popular: false,
          link: 'https://ziontechgroup.com/ai-scheduler'
        },
        {
          name: 'AI Password Manager',
          description: 'Secure password management with AI-powered security recommendations and breach monitoring',
          features: ['Secure Storage', 'Password Generation', 'Breach Monitoring', 'Multi-device Sync', 'Security Alerts'],
          pricing: '$39/month',
          trial: '7-day free trial',
          roi: '80% ROI in 1 month',
          popular: false,
          link: 'https://ziontechgroup.com/ai-password-manager'
        },
        {
          name: 'AI Workflow Automation',
          description: 'Visual workflow builder with AI-powered process optimization and integration capabilities',
          features: ['Visual Builder', 'Process Optimization', 'Integration Library', 'Performance Analytics', 'Custom Triggers'],
          pricing: '$299/month',
          trial: '14-day free trial',
          roi: '400% ROI in 5 months',
          popular: true,
          link: 'https://ziontechgroup.com/ai-workflow-automation'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven ROI',
      description: 'Our micro SAAS solutions deliver an average ROI of 250% within 6 months',
      stat: '250%'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get up and running in under 24 hours with our streamlined onboarding',
      stat: '24h'
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Starting from just $39/month with no long-term contracts required',
      stat: '$39/mo'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and data encryption',
      stat: '99.9%'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Custom workflows'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced security',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'AI Project Manager Pro transformed our productivity. We saw a 300% increase in project completion rates within 3 months.',
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Co.',
      role: 'Marketing Director',
      content: 'The AI Social Media Manager saved us 20 hours per week and increased our engagement by 150%.',
      rating: 5,
      avatar: '/images/testimonials/michael.jpg'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      role: 'Operations Manager',
      content: 'AI Analytics Dashboard gave us insights we never had before. Our decision-making is now data-driven.',
      rating: 5,
      avatar: '/images/testimonials/emily.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI-Powered Micro SAAS Solutions
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Streamline your business operations with our intelligent micro SAAS applications. 
              From project management to customer support, we have the tools you need to succeed.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">250% Average ROI</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Award Winning</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Proven results and enterprise-grade solutions that deliver measurable business value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive micro SAAS solutions designed to solve real business challenges
            </p>
          </div>
          <div className="space-y-16">
            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 relative">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Popular
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        <h5 className="text-sm font-semibold text-cyan-400">Key Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Pricing:</span>
                          <span className="text-sm font-medium text-white">{service.pricing}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Trial:</span>
                          <span className="text-sm font-medium text-cyan-400">{service.trial}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Expected ROI:</span>
                          <span className="text-sm font-medium text-green-400">{service.roi}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <a
                          href={service.link}
                          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all block text-center"
                        >
                          Learn More
                        </a>
                        <a
                          href="/contact"
                          className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all block text-center"
                        >
                          Start Free Trial
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include free trials and no setup fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all block text-center ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from real customers who have transformed their businesses with our solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-200">
            <p>📞 Call us: <a href="tel:+13024640950" className="text-white hover:text-cyan-200">+1 (302) 464-0950</a></p>
            <p>✉️ Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-200">kleber@ziontechgroup.com</a></p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}