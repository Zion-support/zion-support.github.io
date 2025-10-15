'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Target,
  TrendingUp,
  Database,
  Cloud,
  Lock,
  Smartphone,
  Monitor,
  Server,
  Code,
  Palette,
  MessageSquare,
  FileText,
  Image,
  Video,
  Music,
  Calendar,
  ShoppingCart,
  CreditCard,
  Settings,
  Wrench,
  Lightbulb,
  Rocket,
  Award
} from 'lucide-react';

const MicroSaaSServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      category: 'AI-Powered Tools',
      services: [
        {
          name: 'AI Content Generator Pro',
          description: 'Advanced AI-powered content creation tool that generates high-quality articles, blog posts, social media content, and marketing copy.',
          features: ['GPT-4 Integration', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Detection'],
          pricing: '$29/month',
          icon: Brain,
          color: 'from-purple-500 to-pink-600',
          link: 'https://ziontechgroup.com/ai-content-generator'
        },
        {
          name: 'AI Analytics Dashboard',
          description: 'Real-time business intelligence platform with AI-driven insights, predictive analytics, and automated reporting.',
          features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration', 'Mobile App'],
          pricing: '$49/month',
          icon: BarChart3,
          color: 'from-blue-500 to-cyan-600',
          link: 'https://ziontechgroup.com/ai-analytics'
        },
        {
          name: 'AI Customer Support Bot',
          description: 'Intelligent chatbot solution that provides 24/7 customer support with natural language processing and sentiment analysis.',
          features: ['Multi-channel Support', 'Sentiment Analysis', 'Live Chat Handoff', 'Knowledge Base Integration', 'Custom Training'],
          pricing: '$39/month',
          icon: MessageSquare,
          color: 'from-green-500 to-emerald-600',
          link: 'https://ziontechgroup.com/ai-chatbot'
        },
        {
          name: 'AI Code Assistant',
          description: 'AI-powered coding companion that helps developers write better code, debug issues, and learn new technologies.',
          features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation Generation', 'Multi-language Support'],
          pricing: '$19/month',
          icon: Code,
          color: 'from-orange-500 to-red-600',
          link: 'https://ziontechgroup.com/ai-code-assistant'
        }
      ]
    },
    {
      category: 'Business Automation',
      services: [
        {
          name: 'Workflow Automation Suite',
          description: 'Complete business process automation platform that streamlines operations and reduces manual work.',
          features: ['Process Builder', 'Integration Hub', 'Task Automation', 'Approval Workflows', 'Performance Analytics'],
          pricing: '$59/month',
          icon: Zap,
          color: 'from-yellow-500 to-orange-600',
          link: 'https://ziontechgroup.com/workflow-automation'
        },
        {
          name: 'Email Marketing Pro',
          description: 'Advanced email marketing platform with AI-powered segmentation, personalization, and campaign optimization.',
          features: ['AI Segmentation', 'A/B Testing', 'Email Templates', 'Analytics Dashboard', 'CRM Integration'],
          pricing: '$39/month',
          icon: Mail,
          color: 'from-indigo-500 to-purple-600',
          link: 'https://ziontechgroup.com/email-marketing'
        },
        {
          name: 'Project Management Hub',
          description: 'Comprehensive project management tool with team collaboration, time tracking, and resource management.',
          features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Resource Planning', 'Progress Reports'],
          pricing: '$29/month',
          icon: Target,
          color: 'from-teal-500 to-blue-600',
          link: 'https://ziontechgroup.com/project-management'
        },
        {
          name: 'Invoice & Billing System',
          description: 'Automated invoicing and billing solution with payment processing, tax calculations, and financial reporting.',
          features: ['Automated Invoicing', 'Payment Processing', 'Tax Calculations', 'Financial Reports', 'Client Portal'],
          pricing: '$24/month',
          icon: CreditCard,
          color: 'from-emerald-500 to-green-600',
          link: 'https://ziontechgroup.com/invoicing'
        }
      ]
    },
    {
      category: 'Digital Marketing Tools',
      services: [
        {
          name: 'Social Media Manager',
          description: 'All-in-one social media management platform with scheduling, analytics, and content creation tools.',
          features: ['Multi-platform Posting', 'Content Calendar', 'Analytics Dashboard', 'Hashtag Research', 'Team Collaboration'],
          pricing: '$34/month',
          icon: Globe,
          color: 'from-pink-500 to-rose-600',
          link: 'https://ziontechgroup.com/social-media-manager'
        },
        {
          name: 'SEO Optimization Suite',
          description: 'Comprehensive SEO tool that helps improve website rankings with keyword research, content analysis, and performance tracking.',
          features: ['Keyword Research', 'Site Audit', 'Rank Tracking', 'Content Optimization', 'Competitor Analysis'],
          pricing: '$44/month',
          icon: TrendingUp,
          color: 'from-amber-500 to-yellow-600',
          link: 'https://ziontechgroup.com/seo-suite'
        },
        {
          name: 'Ad Campaign Manager',
          description: 'AI-powered advertising platform that optimizes ad spend across multiple channels and platforms.',
          features: ['Multi-channel Ads', 'AI Optimization', 'Budget Management', 'Performance Analytics', 'A/B Testing'],
          pricing: '$49/month',
          icon: Target,
          color: 'from-red-500 to-pink-600',
          link: 'https://ziontechgroup.com/ad-manager'
        },
        {
          name: 'Content Management System',
          description: 'Modern CMS with AI-powered content optimization, multi-site management, and collaboration tools.',
          features: ['AI Content Optimization', 'Multi-site Management', 'Team Collaboration', 'Version Control', 'API Access'],
          pricing: '$39/month',
          icon: FileText,
          color: 'from-violet-500 to-purple-600',
          link: 'https://ziontechgroup.com/cms'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      services: [
        {
          name: 'Business Intelligence Platform',
          description: 'Advanced BI platform that transforms raw data into actionable insights with interactive dashboards and reports.',
          features: ['Interactive Dashboards', 'Data Visualization', 'Custom Reports', 'Real-time Analytics', 'Data Integration'],
          pricing: '$69/month',
          icon: BarChart3,
          color: 'from-cyan-500 to-blue-600',
          link: 'https://ziontechgroup.com/business-intelligence'
        },
        {
          name: 'Customer Analytics Suite',
          description: 'Comprehensive customer analytics platform that tracks behavior, preferences, and lifetime value.',
          features: ['Customer Segmentation', 'Behavior Tracking', 'Lifetime Value Analysis', 'Churn Prediction', 'Personalization Engine'],
          pricing: '$54/month',
          icon: Users,
          color: 'from-emerald-500 to-teal-600',
          link: 'https://ziontechgroup.com/customer-analytics'
        },
        {
          name: 'Data Warehouse Solution',
          description: 'Cloud-based data warehouse that centralizes and processes large volumes of data for analytics and reporting.',
          features: ['Data Integration', 'ETL Processes', 'Data Modeling', 'Query Optimization', 'Scalable Storage'],
          pricing: '$79/month',
          icon: Database,
          color: 'from-slate-500 to-gray-600',
          link: 'https://ziontechgroup.com/data-warehouse'
        },
        {
          name: 'Real-time Monitoring',
          description: 'Advanced monitoring solution that tracks system performance, user activity, and business metrics in real-time.',
          features: ['Real-time Alerts', 'Performance Monitoring', 'User Activity Tracking', 'Custom Metrics', 'Mobile Notifications'],
          pricing: '$44/month',
          icon: Monitor,
          color: 'from-lime-500 to-green-600',
          link: 'https://ziontechgroup.com/monitoring'
        }
      ]
    },
    {
      category: 'Security & Compliance',
      services: [
        {
          name: 'Cybersecurity Suite',
          description: 'Comprehensive security platform that protects against threats with advanced monitoring and automated response.',
          features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Security Training', 'Compliance Reporting'],
          pricing: '$89/month',
          icon: Shield,
          color: 'from-red-500 to-orange-600',
          link: 'https://ziontechgroup.com/cybersecurity-suite'
        },
        {
          name: 'GDPR Compliance Tool',
          description: 'Automated GDPR compliance solution that helps businesses meet data protection requirements.',
          features: ['Data Mapping', 'Consent Management', 'Privacy Impact Assessment', 'Breach Notification', 'Audit Trail'],
          pricing: '$59/month',
          icon: Lock,
          color: 'from-blue-500 to-indigo-600',
          link: 'https://ziontechgroup.com/gdpr-compliance'
        },
        {
          name: 'Identity Management',
          description: 'Secure identity and access management solution with multi-factor authentication and single sign-on.',
          features: ['Multi-factor Authentication', 'Single Sign-On', 'Role-based Access', 'Password Management', 'Audit Logging'],
          pricing: '$34/month',
          icon: Users,
          color: 'from-purple-500 to-pink-600',
          link: 'https://ziontechgroup.com/identity-management'
        },
        {
          name: 'Backup & Recovery',
          description: 'Automated backup and disaster recovery solution that ensures business continuity and data protection.',
          features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Point-in-time Recovery', 'Cloud Storage'],
          pricing: '$29/month',
          icon: Cloud,
          color: 'from-sky-500 to-blue-600',
          link: 'https://ziontechgroup.com/backup-recovery'
        }
      ]
    },
    {
      category: 'Creative & Design',
      services: [
        {
          name: 'AI Design Studio',
          description: 'AI-powered design platform that creates logos, graphics, and marketing materials with professional quality.',
          features: ['Logo Generation', 'Graphic Design', 'Brand Kit Creation', 'Template Library', 'Collaboration Tools'],
          pricing: '$39/month',
          icon: Palette,
          color: 'from-pink-500 to-purple-600',
          link: 'https://ziontechgroup.com/ai-design-studio'
        },
        {
          name: 'Video Production Suite',
          description: 'Complete video creation and editing platform with AI-powered features and professional templates.',
          features: ['AI Video Generation', 'Video Editing', 'Template Library', 'Stock Footage', 'Export Options'],
          pricing: '$49/month',
          icon: Video,
          color: 'from-red-500 to-pink-600',
          link: 'https://ziontechgroup.com/video-production'
        },
        {
          name: 'Image Optimization Pro',
          description: 'Advanced image processing and optimization tool that improves performance and visual quality.',
          features: ['Image Compression', 'Format Conversion', 'Resize & Crop', 'Batch Processing', 'CDN Integration'],
          pricing: '$19/month',
          icon: Image,
          color: 'from-green-500 to-emerald-600',
          link: 'https://ziontechgroup.com/image-optimization'
        },
        {
          name: 'Brand Asset Manager',
          description: 'Centralized platform for managing brand assets, guidelines, and creative resources across teams.',
          features: ['Asset Library', 'Brand Guidelines', 'Version Control', 'Team Collaboration', 'Usage Analytics'],
          pricing: '$29/month',
          icon: FileText,
          color: 'from-indigo-500 to-blue-600',
          link: 'https://ziontechgroup.com/brand-assets'
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Affordable monthly pricing with no setup fees or long-term contracts'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process and templates'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Zap,
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise level'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: Rocket,
      title: 'Regular Updates',
      description: 'Continuous improvements and new features added regularly'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SAAS services including AI tools, business automation, digital marketing, data analytics, security, and creative solutions. Affordable monthly pricing starting from $19/month." />
        <meta name="keywords" content="micro saas, saas services, ai tools, business automation, digital marketing, data analytics, cybersecurity, creative tools" />
        <meta property="og:title" content="Micro SAAS Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SAAS services with affordable monthly pricing and enterprise-grade features." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Micro SAAS
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Services & Solutions
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Comprehensive suite of micro SAAS services designed to empower your business with cutting-edge tools, 
                automation, and intelligent solutions. From AI-powered applications to business automation platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button-secondary inline-flex items-center justify-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Started
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Starting from $19/month</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>30-Day Free Trial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of micro SAAS solutions designed to address specific business needs 
                with powerful features and affordable pricing.
              </p>
            </div>

            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h4>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{service.pricing}</span>
                        <div className="flex items-center text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <a
                        href={service.link}
                        className="w-full cyber-button text-center inline-flex items-center justify-center group-hover:bg-cyan-600 transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS solutions are designed to provide maximum value with minimal complexity, 
                helping you focus on what matters most - growing your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                No hidden fees, no long-term contracts. Choose the plan that works for your business and scale as you grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$19<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 3 services
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Standard features
                  </li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full cyber-button text-center inline-block">
                  Get Started
                </a>
              </div>
              <div className="cyber-card p-8 text-center border-2 border-cyan-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Up to 10 services
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    API access
                  </li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full cyber-button text-center inline-block">
                  Get Started
                </a>
              </div>
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Unlimited services
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    24/7 support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    All features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom integrations
                  </li>
                </ul>
                <a href="mailto:kleber@ziontechgroup.com" className="w-full cyber-button text-center inline-block">
                  Contact Sales
                </a>
              </div>
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
              Start your free trial today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSServicesPage;