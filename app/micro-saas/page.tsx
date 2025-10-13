import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Target, 
  Calendar, 
  Mail, 
  Settings, 
  CheckCircle, 
  Star, 
  Zap, 
  TrendingUp, 
  Globe, 
  FileText, 
  Smartphone, 
  Database, 
  Headphones, 
  Lock, 
  Monitor, 
  Cpu, 
  Network, 
  HardDrive, 
  Smartphone as Phone, 
  Laptop, 
  Award, 
  Sparkles,
  DollarSign,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function MicroSaasPage() {
  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting. Transform your data into actionable insights.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Real-time Analytics Dashboard',
        'Predictive Analytics Engine',
        'Automated Report Generation',
        'Custom KPI Tracking',
        'Data Visualization Tools',
        'API Integration',
        'Mobile App Access',
        'White-label Options',
        'Advanced Filtering',
        'Export Capabilities'
      ],
      category: 'Analytics & BI',
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      link: '/zion-analytics-pro',
      benefits: [
        'Increase data-driven decisions by 85%',
        'Reduce reporting time by 70%',
        'Real-time insights across all departments',
        'Customizable dashboards for every role'
      ]
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring. Keep your business secure 24/7.',
      icon: <Shield className="w-8 h-8" />,
      price: '$499/month',
      originalPrice: '$999/month',
      features: [
        'AI Threat Detection',
        'Automated Incident Response',
        'Real-time Monitoring',
        'Compliance Reporting',
        'Vulnerability Scanning',
        'Security Training Modules',
        'Multi-factor Authentication',
        'Encryption Management',
        'Access Control',
        'Audit Logging'
      ],
      category: 'Cybersecurity',
      color: 'from-red-500 to-orange-500',
      popular: true,
      link: '/zion-security-shield',
      benefits: [
        '99.9% threat detection accuracy',
        'Reduce security incidents by 90%',
        'Automated compliance reporting',
        '24/7 security monitoring'
      ]
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced collaboration features for modern businesses.',
      icon: <Cloud className="w-8 h-8" />,
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'End-to-End Encryption',
        'Unlimited Storage',
        'File Versioning',
        'Collaborative Workspaces',
        'Advanced Sharing Controls',
        'Mobile Sync',
        'Backup Automation',
        'Search & Discovery',
        'Access Analytics',
        'Integration APIs'
      ],
      category: 'Cloud Storage',
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      link: '/zion-cloud-vault',
      benefits: [
        '99.99% uptime guarantee',
        'Unlimited storage capacity',
        'Advanced security features',
        'Seamless team collaboration'
      ]
    },
    {
      id: 'zion-ai-crm-pro',
      name: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring, automated follow-ups, and predictive sales analytics.',
      icon: <Users className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'AI Lead Scoring',
        'Automated Follow-ups',
        'Sales Forecasting',
        'Pipeline Management',
        'Contact Management',
        'Email Integration',
        'Task Automation',
        'Performance Analytics',
        'Custom Fields',
        'Mobile Access'
      ],
      category: 'CRM & Sales',
      color: 'from-green-500 to-emerald-500',
      popular: true,
      link: '/zion-ai-crm-pro',
      benefits: [
        'Increase sales conversion by 40%',
        'Automate 80% of follow-up tasks',
        'Predictive sales forecasting',
        'Complete sales pipeline visibility'
      ]
    },
    {
      id: 'zion-ai-marketing-automation-pro',
      name: 'Zion AI Marketing Automation Pro',
      description: 'AI-powered marketing automation with predictive content generation, multi-channel orchestration, and advanced analytics.',
      icon: <Target className="w-8 h-8" />,
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'AI Content Generation',
        'Multi-channel Campaigns',
        'Lead Nurturing Workflows',
        'A/B Testing Automation',
        'Email Marketing',
        'Social Media Management',
        'Landing Page Builder',
        'Analytics Dashboard',
        'Customer Segmentation',
        'ROI Tracking'
      ],
      category: 'Marketing Automation',
      color: 'from-pink-500 to-rose-500',
      popular: true,
      link: '/zion-ai-marketing-automation-pro',
      benefits: [
        'Increase lead generation by 60%',
        'Automate 90% of marketing tasks',
        'Personalized customer journeys',
        'Real-time campaign optimization'
      ]
    },
    {
      id: 'zion-ai-project-manager-pro',
      name: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization, resource allocation, and automated progress tracking.',
      icon: <Calendar className="w-8 h-8" />,
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'AI Task Prioritization',
        'Resource Allocation',
        'Progress Tracking',
        'Team Collaboration',
        'Time Tracking',
        'Budget Management',
        'Risk Assessment',
        'Gantt Charts',
        'Mobile App',
        'Integration Hub'
      ],
      category: 'Project Management',
      color: 'from-purple-500 to-violet-500',
      popular: true,
      link: '/zion-ai-project-manager-pro',
      benefits: [
        'Increase project success rate by 50%',
        'Reduce project delays by 35%',
        'Automated resource optimization',
        'Real-time project insights'
      ]
    },
    {
      id: 'zion-ai-inventory-manager',
      name: 'Zion AI Inventory Manager',
      description: 'Smart inventory tracking with AI-powered demand forecasting, automated reordering, and real-time stock optimization.',
      icon: <Database className="w-8 h-8" />,
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'AI Demand Forecasting',
        'Automated Reordering',
        'Stock Optimization',
        'Barcode Scanning',
        'Multi-location Support',
        'Supplier Management',
        'Cost Tracking',
        'Reporting Dashboard',
        'Mobile App',
        'API Integration'
      ],
      category: 'Inventory Management',
      color: 'from-teal-500 to-cyan-500',
      link: '/zion-ai-inventory-manager',
      benefits: [
        'Reduce inventory costs by 25%',
        'Eliminate stockouts by 90%',
        'Automated demand prediction',
        'Multi-location inventory control'
      ]
    },
    {
      id: 'zion-hr-assistant-pro',
      name: 'Zion HR Assistant Pro',
      description: 'AI-powered human resources automation with intelligent recruitment, employee management, and performance analytics.',
      icon: <Users className="w-8 h-8" />,
      price: '$229/month',
      originalPrice: '$459/month',
      features: [
        'AI Resume Screening',
        'Employee Onboarding',
        'Performance Tracking',
        'Payroll Integration',
        'Time & Attendance',
        'Benefits Management',
        'Training Modules',
        'Analytics Dashboard',
        'Compliance Tracking',
        'Mobile Access'
      ],
      category: 'Human Resources',
      color: 'from-amber-500 to-yellow-500',
      link: '/zion-hr-assistant-pro',
      benefits: [
        'Reduce hiring time by 50%',
        'Automate 70% of HR tasks',
        'Improve employee satisfaction',
        'Comprehensive HR analytics'
      ]
    },
    {
      id: 'zion-ai-accounting-suite',
      name: 'Zion AI Accounting Suite',
      description: 'Automated accounting solution with AI-powered bookkeeping, tax preparation, and financial reporting for small to medium businesses.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'AI Bookkeeping',
        'Tax Preparation',
        'Financial Reporting',
        'Invoice Management',
        'Expense Tracking',
        'Bank Reconciliation',
        'Payroll Processing',
        'Compliance Monitoring',
        'Audit Trail',
        'Multi-currency Support'
      ],
      category: 'Accounting & Finance',
      color: 'from-emerald-500 to-green-500',
      link: '/zion-ai-accounting-suite',
      benefits: [
        'Reduce accounting errors by 95%',
        'Automate 85% of bookkeeping tasks',
        'Real-time financial insights',
        'Tax compliance automation'
      ]
    },
    {
      id: 'zion-ecommerce-optimizer',
      name: 'Zion E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization with intelligent pricing, inventory management, and customer behavior analytics.',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Dynamic Pricing AI',
        'Inventory Optimization',
        'Customer Analytics',
        'Conversion Tracking',
        'A/B Testing',
        'Recommendation Engine',
        'Cart Abandonment Recovery',
        'SEO Optimization',
        'Performance Monitoring',
        'Integration Hub'
      ],
      category: 'E-commerce',
      color: 'from-orange-500 to-red-500',
      link: '/zion-ecommerce-optimizer',
      benefits: [
        'Increase conversion rates by 35%',
        'Optimize pricing strategies',
        'Reduce cart abandonment by 40%',
        'Data-driven e-commerce decisions'
      ]
    },
    {
      id: 'zion-ai-customer-insights',
      name: 'Zion AI Customer Insights',
      description: 'Advanced customer analytics platform with sentiment analysis, behavior tracking, and predictive customer lifetime value.',
      icon: <Globe className="w-8 h-8" />,
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'Sentiment Analysis',
        'Behavior Tracking',
        'Customer Segmentation',
        'Lifetime Value Prediction',
        'Churn Prediction',
        'Engagement Scoring',
        'Feedback Analysis',
        'Trend Detection',
        'Custom Dashboards',
        'API Integration'
      ],
      category: 'Customer Analytics',
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-customer-insights',
      benefits: [
        'Increase customer retention by 30%',
        'Predict customer behavior',
        'Optimize customer experience',
        'Data-driven customer strategies'
      ]
    },
    {
      id: 'zion-ai-lead-scoring',
      name: 'Zion AI Lead Scoring',
      description: 'Intelligent lead qualification system with AI-powered scoring, automated nurturing, and conversion optimization.',
      icon: <Star className="w-8 h-8" />,
      price: '$99/month',
      originalPrice: '$199/month',
      features: [
        'AI Lead Scoring',
        'Automated Nurturing',
        'Conversion Tracking',
        'Lead Source Analysis',
        'Scoring Models',
        'Email Sequences',
        'CRM Integration',
        'Performance Analytics',
        'Custom Rules',
        'Mobile Dashboard'
      ],
      category: 'Lead Management',
      color: 'from-violet-500 to-purple-500',
      link: '/zion-ai-lead-scoring',
      benefits: [
        'Increase lead quality by 45%',
        'Automate lead nurturing',
        'Improve conversion rates',
        'Optimize sales pipeline'
      ]
    },
    {
      id: 'zion-ai-document-processor',
      name: 'Zion AI Document Processor',
      description: 'Intelligent document processing with OCR, form recognition, and automated data extraction for business automation.',
      icon: <FileText className="w-8 h-8" />,
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'OCR Technology',
        'Form Recognition',
        'Data Extraction',
        'Document Classification',
        'Workflow Automation',
        'Search & Retrieval',
        'Version Control',
        'Collaboration Tools',
        'API Integration',
        'Security Features'
      ],
      category: 'Document Management',
      color: 'from-slate-500 to-gray-500',
      link: '/zion-ai-document-processor',
      benefits: [
        'Reduce document processing time by 80%',
        'Automate data extraction',
        'Improve document accuracy',
        'Streamline workflows'
      ]
    },
    {
      id: 'zion-ai-social-listener',
      name: 'Zion AI Social Listener',
      description: 'AI-powered social media monitoring with sentiment analysis, brand tracking, and automated response suggestions.',
      icon: <Globe className="w-8 h-8" />,
      price: '$119/month',
      originalPrice: '$239/month',
      features: [
        'Social Media Monitoring',
        'Sentiment Analysis',
        'Brand Mention Tracking',
        'Competitor Analysis',
        'Trend Detection',
        'Response Suggestions',
        'Influencer Identification',
        'Crisis Management',
        'Analytics Dashboard',
        'Multi-platform Support'
      ],
      category: 'Social Media',
      color: 'from-pink-500 to-purple-500',
      link: '/zion-ai-social-listener',
      benefits: [
        'Monitor brand mentions 24/7',
        'Detect trends and opportunities',
        'Improve social media ROI',
        'Automated response suggestions'
      ]
    },
    {
      id: 'zion-ai-email-optimizer',
      name: 'Zion AI Email Optimizer',
      description: 'AI-powered email marketing optimization with intelligent subject lines, send time optimization, and performance analytics.',
      icon: <Mail className="w-8 h-8" />,
      price: '$89/month',
      originalPrice: '$179/month',
      features: [
        'AI Subject Line Generation',
        'Send Time Optimization',
        'A/B Testing',
        'Content Optimization',
        'List Segmentation',
        'Performance Analytics',
        'Template Library',
        'Automation Workflows',
        'Deliverability Monitoring',
        'Integration Hub'
      ],
      category: 'Email Marketing',
      color: 'from-blue-500 to-indigo-500',
      link: '/zion-ai-email-optimizer',
      benefits: [
        'Increase email open rates by 40%',
        'Optimize send times automatically',
        'Improve deliverability',
        'Data-driven email strategies'
      ]
    },
    {
      id: 'zion-ai-meeting-assistant',
      name: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated scheduling, transcription, and action item tracking for enhanced productivity.',
      icon: <Users className="w-8 h-8" />,
      price: '$79/month',
      originalPrice: '$159/month',
      features: [
        'Automated Scheduling',
        'Meeting Transcription',
        'Action Item Tracking',
        'Calendar Integration',
        'Meeting Analytics',
        'Note Taking',
        'Follow-up Automation',
        'Video Conferencing',
        'Mobile App',
        'Team Collaboration'
      ],
      category: 'Productivity',
      color: 'from-green-500 to-teal-500',
      link: '/zion-ai-meeting-assistant',
      benefits: [
        'Reduce meeting prep time by 60%',
        'Automate follow-up actions',
        'Improve meeting productivity',
        'Complete meeting documentation'
      ]
    },
    {
      id: 'zion-ai-expense-tracker',
      name: 'Zion AI Expense Tracker',
      description: 'Smart expense management with AI-powered categorization, receipt scanning, and automated reimbursement processing.',
      icon: <DollarSign className="w-8 h-8" />,
      price: '$69/month',
      originalPrice: '$139/month',
      features: [
        'Receipt Scanning',
        'AI Categorization',
        'Expense Approval Workflows',
        'Policy Compliance',
        'Reimbursement Processing',
        'Budget Tracking',
        'Tax Preparation',
        'Mobile App',
        'Integration Hub',
        'Reporting Dashboard'
      ],
      category: 'Expense Management',
      color: 'from-yellow-500 to-orange-500',
      link: '/zion-ai-expense-tracker',
      benefits: [
        'Reduce expense processing time by 70%',
        'Automate categorization',
        'Improve policy compliance',
        'Streamline reimbursements'
      ]
    },
    {
      id: 'zion-ai-survey-builder',
      name: 'Zion AI Survey Builder',
      description: 'Intelligent survey creation with AI-powered question suggestions, response analysis, and automated insights generation.',
      icon: <Settings className="w-8 h-8" />,
      price: '$59/month',
      originalPrice: '$119/month',
      features: [
        'AI Question Suggestions',
        'Response Analysis',
        'Insights Generation',
        'Custom Templates',
        'Multi-channel Distribution',
        'Real-time Analytics',
        'Data Visualization',
        'Export Capabilities',
        'Integration APIs',
        'White-label Options'
      ],
      category: 'Survey & Research',
      color: 'from-purple-500 to-pink-500',
      link: '/zion-ai-survey-builder',
      benefits: [
        'Create surveys 5x faster',
        'Generate insights automatically',
        'Improve response rates',
        'Professional survey design'
      ]
    },
    {
      id: 'zion-ai-chatbot-builder',
      name: 'Zion AI Chatbot Builder',
      description: 'No-code chatbot creation platform with AI-powered conversation flows, multi-language support, and advanced analytics.',
      icon: <Users className="w-8 h-8" />,
      price: '$149/month',
      originalPrice: '$299/month',
      features: [
        'No-code Builder',
        'AI Conversation Flows',
        'Multi-language Support',
        'Integration Hub',
        'Analytics Dashboard',
        'Custom Training',
        'Voice Support',
        'Mobile App',
        'White-label Options',
        'API Access'
      ],
      category: 'Chatbot Platform',
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-chatbot-builder',
      benefits: [
        'Build chatbots without coding',
        'Deploy in minutes',
        'Multi-language support',
        'Advanced conversation AI'
      ]
    },
    {
      id: 'zion-ai-workflow-automation',
      name: 'Zion AI Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow design, execution, and optimization for maximum efficiency.',
      icon: <Zap className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'Visual Workflow Designer',
        'AI Process Optimization',
        'Integration Hub',
        'Conditional Logic',
        'Error Handling',
        'Performance Monitoring',
        'Custom Triggers',
        'Team Collaboration',
        'Mobile Access',
        'Analytics Dashboard'
      ],
      category: 'Workflow Automation',
      color: 'from-orange-500 to-red-500',
      link: '/zion-ai-workflow-automation',
      benefits: [
        'Automate 90% of repetitive tasks',
        'Reduce process errors by 95%',
        'Increase team productivity',
        'Optimize business processes'
      ]
    },
    {
      id: 'zion-ai-seo-optimizer',
      name: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization with intelligent keyword research, content suggestions, and performance tracking for better search rankings.',
      icon: <TrendingUp className="w-8 h-8" />,
      price: '$129/month',
      originalPrice: '$259/month',
      features: [
        'AI Keyword Research',
        'Content Optimization',
        'Technical SEO Analysis',
        'Competitor Tracking',
        'Ranking Monitoring',
        'Content Suggestions',
        'Link Building Tools',
        'Performance Analytics',
        'Mobile Optimization',
        'Local SEO'
      ],
      category: 'SEO & Marketing',
      color: 'from-green-500 to-emerald-500',
      link: '/zion-ai-seo-optimizer',
      benefits: [
        'Improve search rankings by 60%',
        'Automate SEO tasks',
        'Increase organic traffic',
        'Data-driven SEO strategies'
      ]
    },
    {
      id: 'zion-ai-data-warehouse',
      name: 'Zion AI Data Warehouse',
      description: 'Intelligent data storage and management solution with AI-powered analytics, automated ETL processes, and real-time insights.',
      icon: <Database className="w-8 h-8" />,
      price: '$299/month',
      originalPrice: '$599/month',
      features: [
        'Automated ETL Processes',
        'Data Quality Management',
        'Real-time Analytics',
        'Scalable Storage',
        'Data Security',
        'Integration Hub',
        'Query Optimization',
        'Data Visualization',
        'Backup & Recovery',
        'Compliance Tools'
      ],
      category: 'Data Management',
      color: 'from-indigo-500 to-purple-500',
      link: '/zion-ai-data-warehouse',
      benefits: [
        'Centralize all business data',
        'Automate data processing',
        'Real-time insights',
        'Scalable data storage'
      ]
    },
    {
      id: 'zion-ai-mobile-app-builder',
      name: 'Zion AI Mobile App Builder',
      description: 'No-code mobile app creation platform with AI-powered design suggestions, automated testing, and instant deployment.',
      icon: <Smartphone className="w-8 h-8" />,
      price: '$179/month',
      originalPrice: '$359/month',
      features: [
        'No-code Builder',
        'AI Design Suggestions',
        'Automated Testing',
        'Instant Deployment',
        'Cross-platform Support',
        'Push Notifications',
        'Analytics Integration',
        'Custom Branding',
        'App Store Publishing',
        'API Integration'
      ],
      category: 'Mobile Development',
      color: 'from-cyan-500 to-blue-500',
      link: '/zion-ai-mobile-app-builder',
      benefits: [
        'Build apps without coding',
        'Deploy to iOS and Android',
        'AI-powered design assistance',
        'Rapid app development'
      ]
    },
    {
      id: 'zion-ai-api-manager',
      name: 'Zion AI API Manager',
      description: 'Comprehensive API management platform with intelligent monitoring, automated documentation, and performance optimization.',
      icon: <Settings className="w-8 h-8" />,
      price: '$159/month',
      originalPrice: '$319/month',
      features: [
        'API Gateway',
        'Intelligent Monitoring',
        'Automated Documentation',
        'Rate Limiting',
        'Security Management',
        'Analytics Dashboard',
        'Developer Portal',
        'Version Control',
        'Testing Tools',
        'Integration Hub'
      ],
      category: 'API Management',
      color: 'from-slate-500 to-gray-500',
      link: '/zion-ai-api-manager',
      benefits: [
        'Centralize API management',
        'Improve API performance',
        'Automate documentation',
        'Enhanced security controls'
      ]
    },
    {
      id: 'zion-ai-backup-manager',
      name: 'Zion AI Backup Manager',
      description: 'Intelligent backup solution with automated scheduling, data deduplication, and disaster recovery for business continuity.',
      icon: <Cloud className="w-8 h-8" />,
      price: '$89/month',
      originalPrice: '$179/month',
      features: [
        'Automated Backups',
        'Data Deduplication',
        'Disaster Recovery',
        'Incremental Backups',
        'Encryption',
        'Multi-location Storage',
        'Recovery Testing',
        'Compliance Reporting',
        'Mobile Access',
        'Integration Hub'
      ],
      category: 'Backup & Recovery',
      color: 'from-blue-500 to-indigo-500',
      link: '/zion-ai-backup-manager',
      benefits: [
        'Automate backup processes',
        'Reduce storage costs by 50%',
        'Ensure data protection',
        'Quick disaster recovery'
      ]
    },
    {
      id: 'zion-ai-testing-automation',
      name: 'Zion AI Testing Automation',
      description: 'AI-powered testing automation with intelligent test case generation, automated execution, and comprehensive reporting.',
      icon: <CheckCircle className="w-8 h-8" />,
      price: '$199/month',
      originalPrice: '$399/month',
      features: [
        'AI Test Generation',
        'Automated Execution',
        'Cross-browser Testing',
        'Performance Testing',
        'API Testing',
        'Mobile Testing',
        'Regression Testing',
        'Test Reporting',
        'CI/CD Integration',
        'Custom Test Cases'
      ],
      category: 'Quality Assurance',
      color: 'from-green-500 to-teal-500',
      link: '/zion-ai-testing-automation',
      benefits: [
        'Reduce testing time by 80%',
        'Improve test coverage',
        'Automate test execution',
        'Comprehensive test reporting'
      ]
    }
  ];

  const categories = [
    'All',
    'Analytics & BI',
    'Cybersecurity',
    'Cloud Storage',
    'CRM & Sales',
    'Marketing Automation',
    'Project Management',
    'Inventory Management',
    'Human Resources',
    'Accounting & Finance',
    'E-commerce',
    'Customer Analytics',
    'Lead Management',
    'Document Management',
    'Social Media',
    'Email Marketing',
    'Productivity',
    'Expense Management',
    'Survey & Research',
    'Chatbot Platform',
    'Workflow Automation',
    'SEO & Marketing',
    'Data Management',
    'Mobile Development',
    'API Management',
    'Backup & Recovery',
    'Quality Assurance'
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed for immediate deployment. AI-powered analytics, security, productivity, and business automation tools for modern businesses."
        />
        <meta
          name="keywords"
          content="micro SAAS, software solutions, business automation, AI tools, analytics, security, productivity, CRM, marketing automation, project management, cloud storage"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">50+ Ready-to-Use Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From AI-powered analytics to automated workflows, deploy powerful tools in minutes, not months.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Complete Micro SAAS Suite
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of micro SAAS solutions designed to address every aspect of modern business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Key Benefits */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using our micro SAAS solutions today and transform your business operations. 
                Contact us for personalized recommendations and implementation support.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}