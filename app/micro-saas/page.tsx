import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, 
  Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, 
  Settings, Calendar, CheckSquare, FileText, Mail, Phone, MapPin, 
  DollarSign, Clock, Award, Rocket, Eye, MessageSquare, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, 
  Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, 
  Paintbrush, Scissors, BookOpen, Calculator, Compass, PieChart, 
  TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, 
  CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, 
  Mail as MailIcon, MapPin as Location, ExternalLink, Play, 
  Download, Upload, RefreshCw, Monitor, Smartphone as Mobile, 
  Tablet, Laptop, Server, HardDrive, Wifi, Bluetooth, 
  Battery, Power, Wrench as Tools, Settings as Cog, 
  Bell, User, UserPlus, UserCheck, UserX, Users as Team, 
  UserCog, UserShield, UserCheck as UserVerified, 
  UserPlus as UserAdd, UserX as UserRemove, Team as UsersIcon
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      category: 'analytics',
      icon: BarChart,
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      features: [
        'Real-time data visualization',
        'AI-powered predictive analytics',
        'Custom dashboard creation',
        'Automated reporting',
        'Multi-source data integration',
        'Mobile-responsive design'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Up to 5 data sources', 'Basic analytics', 'Email support'] },
        professional: { price: 79, period: 'month', features: ['Unlimited data sources', 'Advanced AI insights', 'Priority support', 'Custom integrations'] },
        enterprise: { price: 199, period: 'month', features: ['White-label solution', 'Dedicated support', 'Custom development', 'SLA guarantee'] }
      },
      benefits: [
        'Increase decision-making speed by 300%',
        'Reduce manual reporting time by 80%',
        'Identify trends 2x faster than competitors',
        'ROI typically achieved within 30 days'
      ],
      useCases: ['E-commerce analytics', 'Marketing performance tracking', 'Financial reporting', 'Operations monitoring'],
      integrations: ['Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'Shopify', 'MySQL', 'PostgreSQL'],
      demoUrl: 'https://ziontechgroup.com/demo/ai-analytics',
      documentation: 'https://docs.ziontechgroup.com/ai-analytics',
      supportEmail: 'analytics@ziontechgroup.com'
    },
    {
      id: 'smart-support-bot',
      name: 'Smart Support Bot',
      category: 'customer-service',
      icon: Bot,
      description: 'AI-powered customer service automation with natural language processing and multi-channel support.',
      features: [
        'Natural language processing',
        'Multi-channel support (web, email, chat)',
        '24/7 availability',
        'Escalation to human agents',
        'Knowledge base integration',
        'Sentiment analysis'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['Up to 1,000 conversations', 'Basic AI responses', 'Email support'] },
        professional: { price: 149, period: 'month', features: ['Unlimited conversations', 'Advanced AI training', 'Priority support', 'Custom branding'] },
        enterprise: { price: 399, period: 'month', features: ['White-label solution', 'Dedicated support', 'Custom integrations', 'SLA guarantee'] }
      },
      benefits: [
        'Reduce support costs by 60%',
        'Handle 80% of inquiries automatically',
        'Improve customer satisfaction by 40%',
        'Available 24/7 without breaks'
      ],
      useCases: ['E-commerce support', 'SaaS customer service', 'Lead qualification', 'FAQ automation'],
      integrations: ['Zendesk', 'Intercom', 'Freshdesk', 'Slack', 'Microsoft Teams', 'WhatsApp', 'Facebook Messenger'],
      demoUrl: 'https://ziontechgroup.com/demo/support-bot',
      documentation: 'https://docs.ziontechgroup.com/support-bot',
      supportEmail: 'support@ziontechgroup.com'
    },
    {
      id: 'social-media-manager',
      name: 'AI Social Media Manager',
      category: 'marketing',
      icon: MessageSquare,
      description: 'Automated social media management with AI content generation and optimal posting schedules.',
      features: [
        'AI content generation',
        'Optimal posting schedule',
        'Multi-platform management',
        'Engagement analytics',
        'Hashtag optimization',
        'Competitor analysis'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['3 social accounts', 'Basic AI content', 'Email support'] },
        professional: { price: 99, period: 'month', features: ['10 social accounts', 'Advanced AI content', 'Priority support', 'Analytics dashboard'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited accounts', 'White-label solution', 'Dedicated support', 'Custom AI training'] }
      },
      benefits: [
        'Save 15 hours per week on social media',
        'Increase engagement by 150%',
        'Generate 50+ posts per day automatically',
        'Optimize posting times for maximum reach'
      ],
      useCases: ['Small business marketing', 'Agency management', 'E-commerce promotion', 'Brand building'],
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest'],
      demoUrl: 'https://ziontechgroup.com/demo/social-manager',
      documentation: 'https://docs.ziontechgroup.com/social-manager',
      supportEmail: 'social@ziontechgroup.com'
    },
    {
      id: 'email-marketing-suite',
      name: 'AI Email Marketing Suite',
      category: 'marketing',
      icon: Mail,
      description: 'Intelligent email marketing with AI-powered personalization and automated campaign optimization.',
      features: [
        'AI-powered personalization',
        'Automated campaign optimization',
        'A/B testing with AI',
        'Behavioral triggers',
        'Advanced segmentation',
        'Deliverability optimization'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['Up to 10,000 subscribers', 'Basic AI personalization', 'Email support'] },
        professional: { price: 75, period: 'month', features: ['Up to 50,000 subscribers', 'Advanced AI features', 'Priority support', 'Custom templates'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited subscribers', 'White-label solution', 'Dedicated support', 'Custom integrations'] }
      },
      benefits: [
        'Increase open rates by 200%',
        'Boost click-through rates by 150%',
        'Reduce unsubscribe rates by 60%',
        'Automate 90% of email campaigns'
      ],
      useCases: ['E-commerce marketing', 'Newsletter automation', 'Lead nurturing', 'Customer retention'],
      integrations: ['Mailchimp', 'Constant Contact', 'AWeber', 'ConvertKit', 'Klaviyo', 'Salesforce', 'HubSpot'],
      demoUrl: 'https://ziontechgroup.com/demo/email-marketing',
      documentation: 'https://docs.ziontechgroup.com/email-marketing',
      supportEmail: 'email@ziontechgroup.com'
    },
    {
      id: 'inventory-management',
      name: 'Smart Inventory Management',
      category: 'operations',
      icon: Package,
      description: 'AI-powered inventory optimization with demand forecasting and automated reorder management.',
      features: [
        'Demand forecasting with AI',
        'Automated reorder management',
        'Multi-location tracking',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization'
      ],
      pricing: {
        starter: { price: 59, period: 'month', features: ['Up to 1,000 SKUs', 'Basic forecasting', 'Email support'] },
        professional: { price: 149, period: 'month', features: ['Up to 10,000 SKUs', 'Advanced AI forecasting', 'Priority support', 'API access'] },
        enterprise: { price: 349, period: 'month', features: ['Unlimited SKUs', 'White-label solution', 'Dedicated support', 'Custom integrations'] }
      },
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts by 90%',
        'Optimize cash flow by 40%',
        'Automate 80% of inventory decisions'
      ],
      useCases: ['Retail inventory', 'Manufacturing', 'E-commerce', 'Warehouse management'],
      integrations: ['Shopify', 'WooCommerce', 'Magento', 'SAP', 'Oracle', 'QuickBooks', 'Xero'],
      demoUrl: 'https://ziontechgroup.com/demo/inventory',
      documentation: 'https://docs.ziontechgroup.com/inventory',
      supportEmail: 'inventory@ziontechgroup.com'
    },
    {
      id: 'lead-scoring-system',
      name: 'AI Lead Scoring System',
      category: 'sales',
      icon: Target,
      description: 'Intelligent lead qualification with AI-powered scoring and automated follow-up sequences.',
      features: [
        'AI-powered lead scoring',
        'Behavioral tracking',
        'Automated follow-up sequences',
        'Lead nurturing campaigns',
        'CRM integration',
        'ROI tracking'
      ],
      pricing: {
        starter: { price: 45, period: 'month', features: ['Up to 1,000 leads', 'Basic scoring', 'Email support'] },
        professional: { price: 125, period: 'month', features: ['Up to 10,000 leads', 'Advanced AI scoring', 'Priority support', 'Custom workflows'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited leads', 'White-label solution', 'Dedicated support', 'Custom AI training'] }
      },
      benefits: [
        'Increase conversion rates by 180%',
        'Reduce sales cycle by 35%',
        'Improve lead quality by 250%',
        'Automate 70% of lead qualification'
      ],
      useCases: ['B2B sales', 'Real estate', 'Insurance', 'Financial services'],
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'Microsoft Dynamics', 'SugarCRM', 'Freshworks'],
      demoUrl: 'https://ziontechgroup.com/demo/lead-scoring',
      documentation: 'https://docs.ziontechgroup.com/lead-scoring',
      supportEmail: 'leads@ziontechgroup.com'
    },
    {
      id: 'document-processor',
      name: 'AI Document Processor',
      category: 'productivity',
      icon: FileText,
      description: 'Intelligent document analysis with OCR, data extraction, and automated processing workflows.',
      features: [
        'OCR and text extraction',
        'Data extraction with AI',
        'Document classification',
        'Automated workflows',
        'Multi-format support',
        'Batch processing'
      ],
      pricing: {
        starter: { price: 35, period: 'month', features: ['Up to 1,000 pages', 'Basic OCR', 'Email support'] },
        professional: { price: 95, period: 'month', features: ['Up to 10,000 pages', 'Advanced AI extraction', 'Priority support', 'API access'] },
        enterprise: { price: 229, period: 'month', features: ['Unlimited pages', 'White-label solution', 'Dedicated support', 'Custom AI models'] }
      },
      benefits: [
        'Process documents 10x faster',
        'Reduce manual data entry by 95%',
        'Improve accuracy by 99%',
        'Automate 90% of document workflows'
      ],
      useCases: ['Invoice processing', 'Contract analysis', 'Medical records', 'Legal documents'],
      integrations: ['Google Drive', 'Dropbox', 'OneDrive', 'Box', 'SharePoint', 'Slack', 'Microsoft Teams'],
      demoUrl: 'https://ziontechgroup.com/demo/document-processor',
      documentation: 'https://docs.ziontechgroup.com/document-processor',
      supportEmail: 'documents@ziontechgroup.com'
    },
    {
      id: 'seo-optimizer',
      name: 'AI SEO Optimizer',
      category: 'marketing',
      icon: Search,
      description: 'Automated SEO optimization with AI-powered content analysis and ranking improvement strategies.',
      features: [
        'AI content analysis',
        'Keyword optimization',
        'Technical SEO audits',
        'Competitor analysis',
        'Ranking tracking',
        'Content suggestions'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Up to 5 websites', 'Basic SEO analysis', 'Email support'] },
        professional: { price: 79, period: 'month', features: ['Up to 25 websites', 'Advanced AI analysis', 'Priority support', 'Custom reports'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited websites', 'White-label solution', 'Dedicated support', 'Custom AI training'] }
      },
      benefits: [
        'Increase organic traffic by 200%',
        'Improve search rankings by 150%',
        'Save 20 hours per week on SEO',
        'Automate 80% of SEO tasks'
      ],
      useCases: ['Website optimization', 'Content marketing', 'E-commerce SEO', 'Local business marketing'],
      integrations: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'SEMrush', 'Moz', 'Screaming Frog', 'GTmetrix'],
      demoUrl: 'https://ziontechgroup.com/demo/seo-optimizer',
      documentation: 'https://docs.ziontechgroup.com/seo-optimizer',
      supportEmail: 'seo@ziontechgroup.com'
    },
    {
      id: 'appointment-scheduler',
      name: 'Smart Appointment Scheduler',
      category: 'productivity',
      icon: Calendar,
      description: 'AI-powered scheduling with automated optimization, conflict resolution, and multi-timezone support.',
      features: [
        'AI-powered scheduling optimization',
        'Multi-timezone support',
        'Conflict resolution',
        'Automated reminders',
        'Calendar integration',
        'Custom booking forms'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['Up to 100 appointments', 'Basic scheduling', 'Email support'] },
        professional: { price: 49, period: 'month', features: ['Up to 1,000 appointments', 'Advanced AI features', 'Priority support', 'Custom branding'] },
        enterprise: { price: 129, period: 'month', features: ['Unlimited appointments', 'White-label solution', 'Dedicated support', 'Custom integrations'] }
      },
      benefits: [
        'Reduce no-shows by 40%',
        'Increase booking rates by 60%',
        'Save 10 hours per week on scheduling',
        'Optimize schedules for maximum efficiency'
      ],
      useCases: ['Healthcare appointments', 'Consulting services', 'Beauty salons', 'Fitness training'],
      integrations: ['Google Calendar', 'Outlook', 'Apple Calendar', 'Zoom', 'Teams', 'Calendly', 'Acuity Scheduling'],
      demoUrl: 'https://ziontechgroup.com/demo/scheduler',
      documentation: 'https://docs.ziontechgroup.com/scheduler',
      supportEmail: 'scheduling@ziontechgroup.com'
    },
    {
      id: 'expense-tracker',
      name: 'AI Expense Tracker',
      category: 'finance',
      icon: CreditCard,
      description: 'Intelligent expense management with automated categorization, receipt scanning, and budget optimization.',
      features: [
        'Receipt scanning with AI',
        'Automated categorization',
        'Budget optimization',
        'Expense analytics',
        'Multi-currency support',
        'Tax preparation'
      ],
      pricing: {
        starter: { price: 15, period: 'month', features: ['Up to 100 transactions', 'Basic categorization', 'Email support'] },
        professional: { price: 39, period: 'month', features: ['Up to 1,000 transactions', 'Advanced AI features', 'Priority support', 'Custom categories'] },
        enterprise: { price: 99, period: 'month', features: ['Unlimited transactions', 'White-label solution', 'Dedicated support', 'Custom integrations'] }
      },
      benefits: [
        'Save 5 hours per week on expense tracking',
        'Improve accuracy by 95%',
        'Reduce expense processing time by 80%',
        'Automate 90% of expense categorization'
      ],
      useCases: ['Small business expenses', 'Freelancer tracking', 'Travel expenses', 'Team expense management'],
      integrations: ['QuickBooks', 'Xero', 'FreshBooks', 'Expensify', 'Receipt Bank', 'SAP Concur', 'Chrome River'],
      demoUrl: 'https://ziontechgroup.com/demo/expense-tracker',
      documentation: 'https://docs.ziontechgroup.com/expense-tracker',
      supportEmail: 'expenses@ziontechgroup.com'
    },
    {
      id: 'content-generator',
      name: 'AI Content Generator',
      category: 'content',
      icon: PenTool,
      description: 'AI-powered content creation with multiple formats, tone optimization, and brand consistency.',
      features: [
        'Multi-format content generation',
        'Tone and style optimization',
        'Brand consistency checking',
        'SEO optimization',
        'Plagiarism detection',
        'Content scheduling'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['Up to 1,000 words', 'Basic AI generation', 'Email support'] },
        professional: { price: 69, period: 'month', features: ['Up to 10,000 words', 'Advanced AI features', 'Priority support', 'Custom templates'] },
        enterprise: { price: 179, period: 'month', features: ['Unlimited words', 'White-label solution', 'Dedicated support', 'Custom AI training'] }
      },
      benefits: [
        'Generate content 20x faster',
        'Maintain consistent brand voice',
        'Improve SEO performance by 150%',
        'Reduce content creation costs by 70%'
      ],
      useCases: ['Blog content', 'Social media posts', 'Product descriptions', 'Marketing copy'],
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Hootsuite', 'Buffer', 'Canva', 'Figma'],
      demoUrl: 'https://ziontechgroup.com/demo/content-generator',
      documentation: 'https://docs.ziontechgroup.com/content-generator',
      supportEmail: 'content@ziontechgroup.com'
    },
    {
      id: 'time-tracker',
      name: 'AI Time Tracker',
      category: 'productivity',
      icon: Clock,
      description: 'Intelligent time tracking with automated project detection, productivity insights, and team management.',
      features: [
        'Automated time tracking',
        'Project detection with AI',
        'Productivity insights',
        'Team management',
        'Billing integration',
        'Reporting and analytics'
      ],
      pricing: {
        starter: { price: 12, period: 'month', features: ['Up to 5 users', 'Basic tracking', 'Email support'] },
        professional: { price: 35, period: 'month', features: ['Up to 25 users', 'Advanced AI features', 'Priority support', 'Custom reports'] },
        enterprise: { price: 89, period: 'month', features: ['Unlimited users', 'White-label solution', 'Dedicated support', 'Custom integrations'] }
      },
      benefits: [
        'Increase productivity by 25%',
        'Reduce time tracking overhead by 90%',
        'Improve project accuracy by 95%',
        'Automate 85% of time tracking tasks'
      ],
      useCases: ['Freelancer billing', 'Team productivity', 'Project management', 'Client billing'],
      integrations: ['Toggl', 'Harvest', 'RescueTime', 'Clockify', 'Time Doctor', 'Asana', 'Trello'],
      demoUrl: 'https://ziontechgroup.com/demo/time-tracker',
      documentation: 'https://docs.ziontechgroup.com/time-tracker',
      supportEmail: 'time@ziontechgroup.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'customer-service', name: 'Customer Service', icon: Bot },
    { id: 'marketing', name: 'Marketing', icon: MessageSquare },
    { id: 'operations', name: 'Operations', icon: Package },
    { id: 'sales', name: 'Sales', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Calendar },
    { id: 'finance', name: 'Finance', icon: CreditCard },
    { id: 'content', name: 'Content', icon: PenTool }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading Micro SAAS Services...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid neural-network-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
            Micro <span className="holographic-text">SAAS</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Powerful, affordable AI-powered micro services designed to solve specific business challenges and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-slate-900 cyber-glow-pulse'
                    : 'bg-white/10 text-white hover:bg-cyan-400/20 hover:text-cyan-400'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors animate-float">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={service.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                      aria-label={`View ${service.name} demo`}
                    >
                      <Play className="w-4 h-4" />
                    </a>
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
                      aria-label={`View ${service.name} documentation`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([tier, details]) => (
                      <div key={tier} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{tier}:</span>
                        <span className="text-white font-semibold">
                          ${details.price}/{details.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full cyber-button text-center py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Try Demo
                  </a>
                  <a
                    href={`mailto:${service.supportEmail}?subject=Interest in ${service.name}`}
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-cyan-400 mb-8 neon-glow">
            We can build a custom micro SAAS solution tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;