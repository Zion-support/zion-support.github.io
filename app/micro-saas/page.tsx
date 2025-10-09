'use client';
import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star, ArrowRight, Zap, Brain, Target, Users, Code, BarChart, Shield, Globe, Smartphone, Mail, Calendar, FileText, CreditCard, Database, Settings, TrendingUp, Lock, Clock } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasServices = [
    {
      category: 'AI-Powered Business Tools',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      services: [
        {
          name: 'AI Email Assistant',
          description: 'Smart email management with AI-powered responses, scheduling, and priority sorting',
          price: '$29/month',
          features: ['Auto-reply generation', 'Email categorization', 'Smart scheduling', 'Priority detection'],
          link: '/ai-email-assistant'
        },
        {
          name: 'AI Content Generator',
          description: 'Create high-quality content for blogs, social media, and marketing materials',
          price: '$49/month',
          features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization'],
          link: '/ai-content-generation'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business analytics with AI-powered insights and predictions',
          price: '$79/month',
          features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
          link: '/ai-analytics-dashboard'
        },
        {
          name: 'AI Chatbot Builder',
          description: 'Create intelligent chatbots for customer support and lead generation',
          price: '$39/month',
          features: ['No-code builder', 'Multi-language support', 'CRM integration', 'Analytics tracking'],
          link: '/ai-chatbot-builder'
        }
      ]
    },
    {
      category: 'Productivity & Automation',
      icon: Zap,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      services: [
        {
          name: 'Smart Task Manager',
          description: 'AI-powered task management with automatic prioritization and scheduling',
          price: '$19/month',
          features: ['Auto-prioritization', 'Smart scheduling', 'Team collaboration', 'Progress tracking'],
          link: '/smart-task-manager'
        },
        {
          name: 'Workflow Automation',
          description: 'Automate repetitive tasks with intelligent workflow builder',
          price: '$59/month',
          features: ['Visual workflow builder', '500+ integrations', 'Conditional logic', 'Error handling'],
          link: '/workflow-automation'
        },
        {
          name: 'Time Tracking AI',
          description: 'Intelligent time tracking with automatic project detection and reporting',
          price: '$24/month',
          features: ['Auto time tracking', 'Project detection', 'Productivity insights', 'Billing integration'],
          link: '/time-tracking-ai'
        },
        {
          name: 'Meeting Assistant',
          description: 'AI-powered meeting transcription, notes, and action item extraction',
          price: '$34/month',
          features: ['Live transcription', 'Action item extraction', 'Meeting summaries', 'Calendar integration'],
          link: '/meeting-assistant'
        }
      ]
    },
    {
      category: 'Marketing & Sales Tools',
      icon: Target,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      services: [
        {
          name: 'Lead Generation AI',
          description: 'Automated lead generation with AI-powered prospecting and qualification',
          price: '$89/month',
          features: ['Auto lead discovery', 'Contact enrichment', 'Lead scoring', 'CRM integration'],
          link: '/ai-lead-generation'
        },
        {
          name: 'Social Media Manager',
          description: 'AI-powered social media management with content scheduling and analytics',
          price: '$69/month',
          features: ['Content scheduling', 'Hashtag optimization', 'Performance analytics', 'Multi-platform support'],
          link: '/social-media-manager'
        },
        {
          name: 'Email Marketing AI',
          description: 'Intelligent email marketing with personalization and automation',
          price: '$49/month',
          features: ['Personalized campaigns', 'A/B testing', 'Behavioral triggers', 'Analytics dashboard'],
          link: '/email-marketing-ai'
        },
        {
          name: 'Sales Pipeline AI',
          description: 'AI-powered sales pipeline management with forecasting and optimization',
          price: '$99/month',
          features: ['Pipeline forecasting', 'Deal scoring', 'Activity tracking', 'Revenue prediction'],
          link: '/sales-pipeline-ai'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: BarChart,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      services: [
        {
          name: 'Business Intelligence AI',
          description: 'AI-powered business intelligence with automated insights and reporting',
          price: '$149/month',
          features: ['Automated insights', 'Custom dashboards', 'Data visualization', 'Predictive modeling'],
          link: '/business-intelligence'
        },
        {
          name: 'Customer Analytics',
          description: 'Deep customer insights with AI-powered segmentation and behavior analysis',
          price: '$79/month',
          features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value'],
          link: '/customer-analytics'
        },
        {
          name: 'Financial Forecasting',
          description: 'AI-powered financial forecasting and budget optimization',
          price: '$119/month',
          features: ['Revenue forecasting', 'Expense optimization', 'Cash flow analysis', 'Budget planning'],
          link: '/financial-forecasting'
        },
        {
          name: 'Data Visualization AI',
          description: 'Automated data visualization with AI-generated charts and insights',
          price: '$59/month',
          features: ['Auto chart generation', 'Interactive dashboards', 'Data storytelling', 'Export options'],
          link: '/ai-data-visualization'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      services: [
        {
          name: 'Security Monitoring AI',
          description: 'AI-powered security monitoring with threat detection and response',
          price: '$199/month',
          features: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Security reports'],
          link: '/ai-cybersecurity'
        },
        {
          name: 'GDPR Compliance Tool',
          description: 'Automated GDPR compliance management with data protection monitoring',
          price: '$89/month',
          features: ['Data mapping', 'Consent management', 'Breach detection', 'Compliance reporting'],
          link: '/gdpr-compliance'
        },
        {
          name: 'Access Control AI',
          description: 'Intelligent access control with behavioral analysis and risk assessment',
          price: '$129/month',
          features: ['Behavioral analysis', 'Risk scoring', 'Access policies', 'Audit trails'],
          link: '/access-control-ai'
        },
        {
          name: 'Data Backup AI',
          description: 'AI-powered data backup with intelligent scheduling and recovery',
          price: '$49/month',
          features: ['Smart scheduling', 'Incremental backups', 'Recovery testing', 'Storage optimization'],
          link: '/data-backup-ai'
        }
      ]
    },
    {
      category: 'Communication & Collaboration',
      icon: Users,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      services: [
        {
          name: 'Team Collaboration AI',
          description: 'AI-enhanced team collaboration with smart notifications and task management',
          price: '$39/month',
          features: ['Smart notifications', 'Task assignment', 'Progress tracking', 'Team analytics'],
          link: '/team-collaboration-ai'
        },
        {
          name: 'Video Meeting AI',
          description: 'AI-powered video meetings with transcription and action item extraction',
          price: '$59/month',
          features: ['Live transcription', 'Action items', 'Meeting recording', 'Screen sharing'],
          link: '/video-meeting-ai'
        },
        {
          name: 'Document Collaboration',
          description: 'AI-powered document collaboration with version control and suggestions',
          price: '$29/month',
          features: ['Version control', 'AI suggestions', 'Real-time editing', 'Comment system'],
          link: '/document-collaboration'
        },
        {
          name: 'Knowledge Base AI',
          description: 'Intelligent knowledge base with AI-powered search and content suggestions',
          price: '$49/month',
          features: ['AI search', 'Content suggestions', 'Auto-categorization', 'Usage analytics'],
          link: '/knowledge-base-ai'
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 AI tools',
        'Basic analytics',
        'Email support',
        '5GB storage',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 AI tools',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'Premium integrations',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited AI tools',
        'Custom analytics',
        '24/7 support',
        'Unlimited storage',
        'All integrations',
        'Custom development',
        'Dedicated account manager',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Over 50+ AI-powered micro applications designed to solve specific business problems. 
            Affordable, powerful, and ready to use in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            AI-Powered Micro Applications
          </h2>
          
          {microSaasServices.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="tel:+13024640950"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our plug-and-play solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Leverage cutting-edge AI to automate and optimize your workflows</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Focused Solutions</h3>
              <p className="text-gray-300">Each tool solves a specific problem with laser focus and precision</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Our clients see average ROI of 300% within the first 3 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered micro SAAS solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;