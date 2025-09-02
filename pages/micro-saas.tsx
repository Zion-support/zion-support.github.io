import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Code,
  Cloud,
  Zap,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Database,
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  TrendingUp,
  Target,
  FileText,
  MessageSquare,
  Eye,
  Brain,
  Mail,
  Phone,
  MapPin,
  Monitor,
  Server,
  Lock,
  Network,
  Terminal,
  Calendar,
  DollarSign
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function MicroSaaS() {
  const title = 'Micro SaaS Solutions — Zion Tech Group';
  const description = 'Custom micro SaaS applications and software solutions tailored to your business needs. Scalable, secure, and innovative.';

  const microSaaSServices = [
    {
      title: 'AI-Powered Email Responder',
      description: 'Intelligent email automation with sentiment analysis and smart categorization',
      icon: MessageSquare,
      features: [
        'Automated email responses with personalization',
        'Smart categorization and priority handling',
        'Sentiment analysis and escalation triggers',
        'CRM and helpdesk integration',
        'Multi-language support and compliance',
        'Analytics and performance tracking'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '2-3 weeks',
      category: 'Communication SaaS'
    },
    {
      title: 'Mobile-First Survey Platform',
      description: 'Responsive survey tool optimized for mobile devices with real-time analytics',
      icon: Smartphone,
      features: [
        'Mobile-optimized survey creation',
        'Real-time response analytics',
        'Adaptive questioning and branching',
        'Multi-channel distribution',
        'Data export and integration',
        'White-label customization'
      ],
      pricing: '$1,500 - $5,000/month',
      delivery: '2-4 weeks',
      category: 'Survey SaaS'
    },
    {
      title: 'Niche Productivity Planner',
      description: 'Industry-specific productivity tools with customized workflows and templates',
      icon: Target,
      features: [
        'Industry-specific templates and workflows',
        'Project management and task tracking',
        'Team collaboration features',
        'Performance analytics and reporting',
        'Integration with popular tools',
        'Custom branding and white-labeling'
      ],
      pricing: '$2,000 - $6,000/month',
      delivery: '3-5 weeks',
      category: 'Productivity SaaS'
    },
    {
      title: 'Event Management Dashboard',
      description: 'Comprehensive event planning and management platform with ticketing and analytics',
      icon: Calendar,
      features: [
        'Event creation and management',
        'Ticketing and registration system',
        'Attendee engagement tools',
        'Real-time analytics and reporting',
        'Payment processing integration',
        'Mobile app for attendees'
      ],
      pricing: '$3,000 - $10,000/month',
      delivery: '4-6 weeks',
      category: 'Event SaaS'
    },
    {
      title: 'AI Content Creation Suite',
      description: 'AI-powered content generation platform for marketing and documentation',
      icon: FileText,
      features: [
        'Automated content generation',
        'SEO optimization and keyword integration',
        'Multi-format content creation',
        'Brand voice consistency',
        'Content scheduling and publishing',
        'Performance analytics and optimization'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '3-5 weeks',
      category: 'Content SaaS'
    },
    {
      title: 'Customer Support Platform',
      description: 'Comprehensive helpdesk solution with AI chatbots and ticket management',
      icon: Users,
      features: [
        'Multi-channel ticket management',
        'AI-powered chatbot integration',
        'Knowledge base and FAQ system',
        'Live chat and video support',
        'Performance metrics and SLA tracking',
        'Integration with CRM systems'
      ],
      pricing: '$2,000 - $7,000/month',
      delivery: '3-4 weeks',
      category: 'Support SaaS'
    },
    {
      title: 'AI Recruiting Platform',
      description: 'Intelligent recruitment system with automated screening and matching',
      icon: Brain,
      features: [
        'Resume parsing and skill extraction',
        'Automated candidate screening',
        'Interview scheduling and management',
        'Bias detection and elimination',
        'Candidate matching algorithms',
        'Analytics and reporting dashboard'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '5-8 weeks',
      category: 'HR SaaS'
    },
    {
      title: 'Document Processing Automation',
      description: 'AI-powered document analysis and processing for business automation',
      icon: FileText,
      features: [
        'Automated data extraction',
        'Document classification and routing',
        'OCR with high accuracy',
        'Contract analysis and risk assessment',
        'Compliance monitoring',
        'Workflow automation'
      ],
      pricing: '$3,500 - $12,000/month',
      delivery: '4-6 weeks',
      category: 'Document SaaS'
    },
    {
      title: 'Analytics Dashboard Platform',
      description: 'Custom business intelligence and analytics platform with real-time insights',
      icon: BarChart3,
      features: [
        'Real-time data visualization',
        'Custom dashboard creation',
        'Data integration and ETL',
        'Predictive analytics and forecasting',
        'Mobile-responsive design',
        'API and third-party integrations'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '6-10 weeks',
      category: 'Analytics SaaS'
    },
    {
      title: 'Workflow Automation Engine',
      description: 'No-code workflow automation platform for business process optimization',
      icon: Settings,
      features: [
        'Visual workflow builder',
        'API integrations and webhooks',
        'Conditional logic and branching',
        'Task automation and scheduling',
        'User management and permissions',
        'Audit trails and compliance'
      ],
      pricing: '$3,000 - $10,000/month',
      delivery: '4-7 weeks',
      category: 'Automation SaaS'
    },
    {
      title: 'AI-Powered E-commerce Return Manager',
      description: 'Intelligent return processing system with automated decision making and fraud detection',
      icon: ArrowRight,
      features: [
        'Automated return request processing',
        'AI-powered fraud detection and prevention',
        'Smart return label generation',
        'Real-time inventory updates',
        'Customer satisfaction tracking',
        'Analytics and reporting dashboard'
      ],
      pricing: '$1,500 - $5,000/month',
      delivery: '3-5 weeks',
      category: 'E-commerce SaaS'
    },
    {
      title: 'Smart Inventory Optimization Platform',
      description: 'AI-driven inventory management with demand forecasting and automated reordering',
      icon: BarChart3,
      features: [
        'Demand forecasting with machine learning',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Supplier performance analytics',
        'Cost optimization recommendations',
        'Integration with ERP and POS systems'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '4-6 weeks',
      category: 'Inventory SaaS'
    },
    {
      title: 'AI-Powered SEO Content Optimizer',
      description: 'Intelligent content optimization platform that enhances web page performance and rankings',
      icon: TrendingUp,
      features: [
        'Real-time SEO analysis and recommendations',
        'Content optimization suggestions',
        'Keyword research and competitor analysis',
        'Technical SEO audits and fixes',
        'Performance tracking and reporting',
        'Multi-language SEO support'
      ],
      pricing: '$199 - $799/month',
      delivery: '1-2 weeks',
      category: 'SEO SaaS'
    },
    {
      title: 'Intelligent Lead Scoring Platform',
      description: 'AI-powered lead qualification and scoring system with behavioral analysis',
      icon: Target,
      features: [
        'Behavioral lead scoring algorithms',
        'Multi-channel lead tracking',
        'Automated lead qualification',
        'CRM integration and synchronization',
        'Predictive analytics and insights',
        'Custom scoring model creation'
      ],
      pricing: '$299 - $1,200/month',
      delivery: '2-4 weeks',
      category: 'Sales SaaS'
    },
    {
      title: 'AI-Powered Social Media Manager',
      description: 'Comprehensive social media management with AI content creation and scheduling',
      icon: Globe,
      features: [
        'AI-generated social media content',
        'Optimal posting time recommendations',
        'Hashtag research and optimization',
        'Engagement analytics and insights',
        'Multi-platform scheduling',
        'Brand voice consistency monitoring'
      ],
      pricing: '$149 - $599/month',
      delivery: '2-3 weeks',
      category: 'Social Media SaaS'
    },
    {
      title: 'Smart Expense Management System',
      description: 'AI-powered expense tracking and approval workflow with receipt processing',
      icon: FileText,
      features: [
        'Automated receipt scanning and processing',
        'Expense categorization with AI',
        'Approval workflow automation',
        'Policy compliance checking',
        'Real-time expense reporting',
        'Integration with accounting software'
      ],
      pricing: '$99 - $399/month',
      delivery: '2-3 weeks',
      category: 'Finance SaaS'
    },
    {
      title: 'AI-Powered Legal Document Analyzer',
      description: 'Intelligent contract analysis and legal document processing with risk assessment',
      icon: FileText,
      features: [
        'Automated contract review and analysis',
        'Risk assessment and compliance checking',
        'Legal clause identification and extraction',
        'Contract comparison and benchmarking',
        'Deadline tracking and renewal alerts',
        'Integration with legal management systems'
      ],
      pricing: '$499 - $1,999/month',
      delivery: '3-4 weeks',
      category: 'Legal SaaS'
    },
    {
      title: 'Smart Healthcare Appointment Scheduler',
      description: 'AI-driven healthcare scheduling with patient preference learning and optimization',
      icon: Calendar,
      features: [
        'Intelligent appointment scheduling optimization',
        'Patient preference learning and adaptation',
        'Automated reminder and follow-up system',
        'Waitlist management and cancellation handling',
        'Provider availability optimization',
        'Integration with EHR and practice management systems'
      ],
      pricing: '$199 - $799/month',
      delivery: '2-3 weeks',
      category: 'Healthcare SaaS'
    },
    {
      title: 'AI-Powered Real Estate Valuation Platform',
      description: 'Intelligent property valuation and market analysis with predictive insights',
      icon: TrendingUp,
      features: [
        'Automated property valuation using ML algorithms',
        'Market trend analysis and forecasting',
        'Comparative market analysis (CMA) generation',
        'Investment opportunity scoring',
        'Property condition assessment via AI',
        'Integration with MLS and real estate databases'
      ],
      pricing: '$299 - $1,299/month',
      delivery: '3-5 weeks',
      category: 'Real Estate SaaS'
    },
    {
      title: 'Smart Fleet Management System',
      description: 'AI-powered fleet optimization with predictive maintenance and route planning',
      icon: Network,
      features: [
        'Predictive maintenance scheduling',
        'Route optimization and fuel efficiency',
        'Driver behavior analysis and scoring',
        'Real-time vehicle tracking and monitoring',
        'Automated compliance reporting',
        'Integration with telematics and IoT devices'
      ],
      pricing: '$399 - $1,599/month',
      delivery: '4-6 weeks',
      category: 'Fleet SaaS'
    },
    {
      title: 'AI-Powered Learning Management System',
      description: 'Intelligent educational platform with personalized learning paths and assessment',
      icon: Users,
      features: [
        'Personalized learning path generation',
        'Adaptive assessment and testing',
        'Learning analytics and progress tracking',
        'Automated content curation and recommendation',
        'Peer learning and collaboration tools',
        'Integration with educational tools and platforms'
      ],
      pricing: '$149 - $599/month',
      delivery: '3-4 weeks',
      category: 'Education SaaS'
    },
    {
      title: 'Smart Restaurant Management Platform',
      description: 'AI-driven restaurant operations with demand forecasting and inventory optimization',
      icon: Target,
      features: [
        'Demand forecasting for menu planning',
        'Dynamic pricing optimization',
        'Inventory management and waste reduction',
        'Customer preference analysis and personalization',
        'Staff scheduling optimization',
        'Integration with POS and delivery platforms'
      ],
      pricing: '$199 - $899/month',
      delivery: '3-5 weeks',
      category: 'Restaurant SaaS'
    },
    {
      title: 'AI-Powered Insurance Claims Processor',
      description: 'Intelligent claims processing with fraud detection and automated settlement',
      icon: Shield,
      features: [
        'Automated claims processing and validation',
        'Fraud detection and risk assessment',
        'Damage assessment using computer vision',
        'Automated settlement calculation',
        'Customer communication automation',
        'Integration with insurance databases and systems'
      ],
      pricing: '$599 - $2,499/month',
      delivery: '4-6 weeks',
      category: 'Insurance SaaS'
    },
    {
      title: 'Smart Energy Management Platform',
      description: 'AI-driven energy optimization for buildings and facilities with cost reduction',
      icon: Zap,
      features: [
        'Energy consumption monitoring and analysis',
        'Predictive maintenance for HVAC systems',
        'Automated energy optimization recommendations',
        'Carbon footprint tracking and reporting',
        'Integration with smart building systems',
        'Cost savings analytics and ROI tracking'
      ],
      pricing: '$299 - $1,199/month',
      delivery: '3-4 weeks',
      category: 'Energy SaaS'
    },
    {
      title: 'AI-Powered Personal Finance Coach',
      description: 'Intelligent personal finance management with budgeting and investment advice',
      icon: DollarSign,
      features: [
        'Automated budget creation and tracking',
        'Spending pattern analysis and insights',
        'Investment recommendation engine',
        'Goal setting and progress monitoring',
        'Bill payment automation and reminders',
        'Integration with banks and financial institutions'
      ],
      pricing: '$9.99 - $39.99/month',
      delivery: '2-3 weeks',
      category: 'Personal Finance SaaS'
    },
    {
      title: 'AI-Powered Customer Onboarding Platform',
      description: 'Intelligent customer onboarding with personalized journey mapping and automation',
      icon: Users,
      features: [
        'Personalized onboarding workflows',
        'Progress tracking and analytics',
        'Automated email sequences',
        'Interactive tutorials and guides',
        'Success metrics and optimization',
        'Integration with CRM and support tools'
      ],
      pricing: '$199 - $799/month',
      delivery: '3-4 weeks',
      category: 'Customer Success SaaS'
    },
    {
      title: 'Intelligent Meeting Scheduler',
      description: 'AI-powered meeting scheduling with time zone optimization and conflict resolution',
      icon: Calendar,
      features: [
        'Smart time zone handling',
        'Automatic conflict detection and resolution',
        'Meeting room and resource booking',
        'Calendar integration across platforms',
        'Meeting preparation automation',
        'Follow-up task generation'
      ],
      pricing: '$49 - $199/month',
      delivery: '1-2 weeks',
      category: 'Productivity SaaS'
    },
    {
      title: 'AI-Powered Code Review Assistant',
      description: 'Intelligent code analysis and review platform with automated quality checks',
      icon: Code,
      features: [
        'Automated code quality analysis',
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code style and best practices enforcement',
        'Integration with Git and CI/CD',
        'Team collaboration and feedback tools'
      ],
      pricing: '$299 - $1,200/month',
      delivery: '3-5 weeks',
      category: 'Development SaaS'
    },
    {
      title: 'Affiliate Marketing Tracking Platform',
      description: 'Comprehensive affiliate program management with fraud detection and automated payouts',
      icon: TrendingUp,
      features: [
        'Custom referral link generation and tracking',
        'Cross-device attribution and fraud detection',
        'Automated commission calculations and payouts',
        'Real-time performance analytics and reporting',
        'Multi-tier affiliate program support',
        'Integration with e-commerce platforms and payment systems'
      ],
      pricing: '$199 - $999/month',
      delivery: '3-4 weeks',
      category: 'Marketing SaaS'
    },
    {
      title: 'AI-Powered Email Follow-up Automation',
      description: 'Intelligent email sequence automation with personalization and engagement tracking',
      icon: Mail,
      features: [
        'Smart follow-up sequence creation and management',
        'AI-powered personalization and timing optimization',
        'Engagement tracking and response analysis',
        'A/B testing for email campaigns',
        'CRM integration and lead scoring',
        'Compliance with email regulations (CAN-SPAM, GDPR)'
      ],
      pricing: '$99 - $499/month',
      delivery: '2-3 weeks',
      category: 'Email Marketing SaaS'
    },
    {
      title: 'Intelligent Helpdesk & Support Platform',
      description: 'AI-powered customer support system with ticket management and chatbot integration',
      icon: MessageSquare,
      features: [
        'Smart ticket routing and prioritization',
        'AI chatbot with natural language processing',
        'Knowledge base creation and management',
        'Multi-channel support (email, chat, phone)',
        'Customer satisfaction tracking and analytics',
        'Integration with CRM and business tools'
      ],
      pricing: '$149 - $799/month',
      delivery: '3-4 weeks',
      category: 'Customer Support SaaS'
    },
    {
      title: 'AI-Powered Content Creation Suite',
      description: 'Comprehensive content generation platform for blogs, social media, and marketing materials',
      icon: FileText,
      features: [
        'AI-generated blog posts, articles, and web content',
        'Social media content creation and scheduling',
        'Marketing copy and email templates',
        'SEO optimization and keyword integration',
        'Brand voice consistency and tone matching',
        'Content calendar and publishing automation'
      ],
      pricing: '$199 - $899/month',
      delivery: '2-3 weeks',
      category: 'Content Creation SaaS'
    },
    {
      title: 'Smart Project Management Dashboard',
      description: 'AI-enhanced project management with predictive analytics and resource optimization',
      icon: Target,
      features: [
        'AI-powered project timeline prediction',
        'Resource allocation and workload optimization',
        'Risk assessment and mitigation recommendations',
        'Team collaboration and communication tools',
        'Progress tracking and milestone management',
        'Integration with popular development and design tools'
      ],
      pricing: '$299 - $1,299/month',
      delivery: '4-5 weeks',
      category: 'Project Management SaaS'
    },
    {
      title: 'Intelligent Financial Analytics Platform',
      description: 'AI-powered financial analysis and forecasting with automated reporting',
      icon: BarChart3,
      features: [
        'Automated financial data analysis and insights',
        'Predictive cash flow and revenue forecasting',
        'Expense categorization and budget optimization',
        'Investment portfolio analysis and recommendations',
        'Compliance reporting and audit preparation',
        'Integration with accounting software and banks'
      ],
      pricing: '$399 - $1,599/month',
      delivery: '4-6 weeks',
      category: 'Financial Analytics SaaS'
    },
    {
      title: 'AI-Powered HR Management System',
      description: 'Comprehensive human resources platform with recruitment automation and employee analytics',
      icon: Users,
      features: [
        'AI-powered resume screening and candidate matching',
        'Employee performance tracking and analytics',
        'Automated onboarding and training workflows',
        'Payroll processing and benefits management',
        'Employee engagement surveys and feedback',
        'Compliance tracking and reporting'
      ],
      pricing: '$199 - $999/month',
      delivery: '4-5 weeks',
      category: 'HR Management SaaS'
    }
  ];

  const technologies = [
    { name: 'Frontend', icon: Monitor, description: 'React, Next.js, Vue.js, Angular' },
    { name: 'Backend', icon: Server, description: 'Node.js, Python, Go, Java' },
    { name: 'Database', icon: Database, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Cloud', icon: Cloud, description: 'AWS, Azure, GCP, DigitalOcean' },
    { name: 'Security', icon: Shield, description: 'OAuth, JWT, SSL, Encryption' },
    { name: 'Mobile', icon: Smartphone, description: 'React Native, Flutter, PWA' }
  ];

  const benefits = [
    {
      title: 'Faster Development',
      description: 'Rapid prototyping and deployment',
      icon: Zap,
      stat: '50%'
    },
    {
      title: 'Cost Effective',
      description: 'Lower development and maintenance costs',
      icon: TrendingUp,
      stat: '60%'
    },
    {
      title: 'Scalable Solutions',
      description: 'Built to grow with your business',
      icon: Target,
      stat: 'Unlimited'
    },
    {
      title: 'Custom Features',
      description: 'Tailored to your specific needs',
      icon: Settings,
      stat: '100%'
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Code className="h-12 w-12 text-orange-600 mr-4" />
              <Award className="h-6 w-6 text-orange-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-orange-600">Micro SaaS</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Micro SaaS Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Custom software solutions that solve specific business problems. From concept to deployment, 
              we build scalable micro SaaS applications tailored to your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                href="/pricing-guide"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-600"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Proven expertise in building scalable, secure, and innovative software solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technologies We Use
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Modern, proven technologies for building robust and scalable applications
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                    <tech.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-4">{tech.name}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Grid */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Micro SaaS Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Custom software solutions tailored to your business needs. All applications include design, 
              development, testing, and deployment. Contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-orange-600 hover:text-orange-500">
                kleber@ziontechgroup.com
              </a>{' '}
              or call{' '}
              <a href="tel:+13024640950" className="text-orange-600 hover:text-orange-500">
                +1 302 464 0950
              </a>{' '}
              for custom pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {microSaaSServices.map((service, index) => (
              <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-x-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-orange-600 font-medium">{service.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-x-3">
                      <CheckCircle className="h-4 w-4 text-orange-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{service.delivery}</span>
                    </div>
                    <div className="font-semibold text-orange-600">{service.pricing}</div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Development Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A proven methodology for delivering high-quality software solutions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Requirements gathering and project planning</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">UI/UX design and system architecture</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Agile development with regular updates</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Build Your Custom SaaS Solution?
            </h2>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Let's discuss your requirements and create a custom solution that drives your business forward. 
              Get a free consultation and project estimate.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start Your Project
              </Link>
              <a
                href="tel:+13024640950"
                className="text-sm font-semibold leading-6 text-white hover:text-orange-100"
              >
                Call +1 302 464 0950 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}