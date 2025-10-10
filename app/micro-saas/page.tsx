'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, Cloud, Code, BarChart, Users, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, CreditCard, PieChart, Mail as MailIcon, Search, Filter, Download, Upload, RefreshCw, Eye, Edit, Trash2, Plus, Minus, X, ChevronRight, ExternalLink, Award, Clock as ClockIcon, Globe as GlobeIcon, Shield as ShieldIcon, Zap as ZapIcon } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-content-writer',
      name: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation platform that generates high-quality articles, blogs, marketing copy, and social media content.',
      icon: FileText,
      price: '$29/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      benefits: [
        'Save 80% time on content creation',
        'Increase content output by 500%',
        'Improve SEO rankings',
        'Maintain consistent brand voice'
      ],
      useCases: [
        'Blog posts and articles',
        'Social media content',
        'Email marketing campaigns',
        'Product descriptions',
        'Press releases'
      ],
      targetAudience: 'Content creators, marketers, bloggers, small businesses',
      integration: 'WordPress, Shopify, HubSpot, Mailchimp, Social media platforms',
      support: '24/7 chat support, video tutorials, documentation'
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      description: 'Intelligent email management system that automates responses, categorizes emails, and provides smart suggestions.',
      icon: MailIcon,
      price: '$19/month',
      features: [
        'Smart email categorization',
        'Auto-response generation',
        'Email scheduling',
        'Priority detection',
        'Spam filtering',
        'Email templates',
        'Calendar integration',
        'Team collaboration'
      ],
      benefits: [
        'Reduce email processing time by 70%',
        'Never miss important emails',
        'Improve response time',
        'Better email organization'
      ],
      useCases: [
        'Customer support',
        'Sales follow-ups',
        'Internal communications',
        'Lead nurturing',
        'Appointment scheduling'
      ],
      targetAudience: 'Sales teams, customer support, executives, entrepreneurs',
      integration: 'Gmail, Outlook, Salesforce, Zendesk, Slack',
      support: 'Email support, knowledge base, video tutorials'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Smart expense management tool that automatically categorizes receipts, tracks spending, and generates financial reports.',
      icon: TrendingUp,
      price: '$15/month',
      features: [
        'Receipt scanning with OCR',
        'Automatic categorization',
        'Expense approval workflows',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Mobile app',
        'Team management'
      ],
      benefits: [
        'Save 90% time on expense entry',
        'Reduce human errors',
        'Improve compliance',
        'Better financial visibility'
      ],
      useCases: [
        'Business expense tracking',
        'Travel expense management',
        'Tax preparation',
        'Budget monitoring',
        'Financial reporting'
      ],
      targetAudience: 'Small businesses, freelancers, accountants, finance teams',
      integration: 'QuickBooks, Xero, SAP, bank accounts, credit cards',
      support: 'Phone support, email support, documentation'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation and management system with smart templates, payment tracking, and client management.',
      icon: FileText,
      price: '$25/month',
      features: [
        'Smart invoice templates',
        'Automated recurring invoices',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support',
        'Payment reminders',
        'Financial reporting'
      ],
      benefits: [
        'Reduce invoice creation time by 95%',
        'Improve payment collection',
        'Professional invoice appearance',
        'Better cash flow management'
      ],
      useCases: [
        'Freelancer invoicing',
        'Service business billing',
        'Recurring subscription billing',
        'Project-based billing',
        'Multi-client management'
      ],
      targetAudience: 'Freelancers, consultants, service businesses, agencies',
      integration: 'Stripe, PayPal, QuickBooks, Xero, bank accounts',
      support: 'Email support, video tutorials, live chat'
    },
    {
      id: 'ai-lead-generation',
      name: 'AI Lead Generation Pro',
      description: 'Intelligent lead generation platform that finds, qualifies, and nurtures prospects using AI-powered research and outreach.',
      icon: Target,
      price: '$49/month',
      features: [
        'AI-powered prospect research',
        'Lead scoring and qualification',
        'Automated outreach sequences',
        'Email verification',
        'Social media integration',
        'CRM integration',
        'Analytics and reporting',
        'A/B testing'
      ],
      benefits: [
        'Increase qualified leads by 300%',
        'Reduce manual research time',
        'Improve conversion rates',
        'Scale lead generation efforts'
      ],
      useCases: [
        'B2B lead generation',
        'Sales prospecting',
        'Email marketing campaigns',
        'Social selling',
        'Account-based marketing'
      ],
      targetAudience: 'Sales teams, marketers, business development, agencies',
      integration: 'Salesforce, HubSpot, Pipedrive, LinkedIn, email platforms',
      support: 'Priority support, onboarding, training sessions'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Manager',
      description: 'Smart project management tool that uses AI to optimize workflows, predict risks, and improve team productivity.',
      icon: Calendar,
      price: '$39/month',
      features: [
        'AI-powered task prioritization',
        'Risk prediction and mitigation',
        'Resource optimization',
        'Progress tracking',
        'Team collaboration',
        'Time tracking',
        'Budget management',
        'Reporting and analytics'
      ],
      benefits: [
        'Improve project success rate by 40%',
        'Reduce project delays',
        'Better resource allocation',
        'Enhanced team productivity'
      ],
      useCases: [
        'Software development',
        'Marketing campaigns',
        'Event planning',
        'Construction projects',
        'Consulting engagements'
      ],
      targetAudience: 'Project managers, team leads, agencies, consultants',
      integration: 'Slack, Microsoft Teams, Jira, Asana, Trello',
      support: '24/7 support, training, best practices guide'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Intelligent inventory management system that predicts demand, optimizes stock levels, and prevents stockouts.',
      icon: Package,
      price: '$35/month',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock level optimization',
        'Barcode scanning',
        'Multi-location support',
        'Supplier management',
        'Cost tracking',
        'Analytics dashboard'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Prevent stockouts and overstock',
        'Improve cash flow',
        'Better supplier relationships'
      ],
      useCases: [
        'Retail inventory',
        'E-commerce management',
        'Manufacturing',
        'Warehouse operations',
        'Multi-channel selling'
      ],
      targetAudience: 'Retailers, e-commerce businesses, manufacturers, distributors',
      integration: 'Shopify, WooCommerce, Amazon, QuickBooks, ERP systems',
      support: 'Phone support, implementation assistance, training'
    },
    {
      id: 'ai-crm-assistant',
      name: 'AI CRM Assistant',
      description: 'Smart CRM system that automates data entry, predicts customer behavior, and provides actionable insights.',
      icon: Users,
      price: '$45/month',
      features: [
        'Automated data entry',
        'Lead scoring and qualification',
        'Customer behavior prediction',
        'Sales forecasting',
        'Email automation',
        'Task management',
        'Reporting and analytics',
        'Mobile app'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve customer retention',
        'Reduce manual data entry',
        'Better sales forecasting'
      ],
      useCases: [
        'Sales pipeline management',
        'Customer relationship building',
        'Lead nurturing',
        'Sales reporting',
        'Customer support'
      ],
      targetAudience: 'Sales teams, customer success, marketing, small businesses',
      integration: 'Email platforms, phone systems, calendar, social media',
      support: 'Dedicated account manager, training, customization'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Advanced analytics platform that provides AI-powered insights, automated reporting, and predictive analytics.',
      icon: BarChart,
      price: '$59/month',
      features: [
        'AI-powered insights',
        'Automated reporting',
        'Predictive analytics',
        'Custom dashboards',
        'Data visualization',
        'Real-time monitoring',
        'Alert system',
        'API integration'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends and opportunities',
        'Reduce reporting time by 80%',
        'Improve business performance'
      ],
      useCases: [
        'Business intelligence',
        'Marketing analytics',
        'Sales performance tracking',
        'Financial analysis',
        'Operational monitoring'
      ],
      targetAudience: 'Business analysts, executives, marketers, data teams',
      integration: 'Google Analytics, Facebook Ads, Salesforce, databases',
      support: 'Expert support, data migration, custom development'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot that provides 24/7 customer support, handles common queries, and escalates complex issues.',
      icon: MessageCircle,
      price: '$79/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Knowledge base integration',
        'Escalation to human agents',
        'Sentiment analysis',
        'Custom bot training',
        'Analytics and reporting',
        'API integration'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Provide 24/7 support',
        'Improve response time',
        'Increase customer satisfaction'
      ],
      useCases: [
        'Customer service',
        'Lead qualification',
        'FAQ handling',
        'Order support',
        'Technical support'
      ],
      targetAudience: 'E-commerce, SaaS companies, service businesses, agencies',
      integration: 'Website, mobile apps, Slack, Zendesk, Freshdesk',
      support: 'Setup assistance, training, ongoing optimization'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$15-29/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 users',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$35-59/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Advanced AI features',
        'Priority support',
        'All integrations',
        '50GB storage',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$79+/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Premium AI features',
        '24/7 phone support',
        'Custom integrations',
        'Unlimited storage',
        'Dedicated account manager',
        'Custom development'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechStart Inc.',
      content: 'AI Content Writer Pro has revolutionized our content marketing. We\'ve increased our content output by 500% while maintaining quality.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      role: 'CEO',
      company: 'Digital Solutions',
      content: 'The AI Lead Generation tool has been a game-changer. We\'ve seen a 300% increase in qualified leads in just 3 months.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      company: 'Creative Agency',
      content: 'AI Project Manager helps us stay on track and deliver projects on time. The risk prediction feature is incredibly valuable.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </span>
            <br />
            <span className="text-3xl md:text-5xl">
              for Modern Businesses
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Powerful, affordable AI-powered tools designed to automate your business processes, 
            boost productivity, and drive growth. No complex setup, no hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10+</div>
              <div className="text-sm text-gray-300">Micro SAAS Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5000+</div>
              <div className="text-sm text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered tools designed to streamline your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-white">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Get Started
                  </a>
                  <a
                    href={`/demo?service=${service.id}`}
                    className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${
                  tier.popular ? 'ring-2 ring-cyan-400 bg-cyan-400/10' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Choose {tier.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their operations with our micro SAAS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven micro SAAS solutions. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;