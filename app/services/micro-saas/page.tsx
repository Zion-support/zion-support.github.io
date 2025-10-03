import React from 'react';
import { Link } from 'react-router-dom';
import * as Lucide from 'lucide-react';
const { 
  Cloud, Shield, BarChart3, Users, FileText, Zap, MessageSquare, CheckCircle, ArrowRight, DollarSign, Clock, Star, Activity, Mail, Phone, Calendar, Headphones, Code, Package, TrendingUp, Bot
} = Lucide as any;


export default function MicroSAASPage() {
  const microSAASServices = [
    {
      id: 'cloud-cost-guard',
      title: 'Cloud Cost Guard',
      subtitle: 'FinOps Automation Platform',
      description: 'Automated cloud cost anomaly detection, budget alerts, rightsizing, and savings recommendations across AWS, Azure, and GCP.',
      icon: Cloud,
      category: 'Cloud Management',
      pricing: '$299 - $1,499/month',
      delivery: '1-2 weeks',
      features: [
        'Real-time cost anomaly detection across all cloud providers',
        'Automated rightsizing recommendations for EC2, RDS, and other services',
        'Budget guardrails with instant alerts and auto-scaling policies',
        'Executive-ready savings reports and cost benchmarking',
        'Integration with existing monitoring and alerting systems',
        'Custom cost allocation and chargeback reporting'
      ],
      benefits: [
        'Average 30-40% reduction in cloud costs',
        'Eliminate surprise billing with proactive monitoring',
        'Automated compliance with budget policies',
        'ROI typically achieved within first month'
      ],
      useCases: [
        'Enterprise cloud cost optimization',
        'Startup budget management',
        'Multi-cloud cost governance',
        'DevOps cost accountability'
      ],
      link: '/services/micro-saas/cloud-cost-guard',
      popularity: 95,
      savings: '$50K+ annually'
    },
    {
      id: 'ai-sales-copilot',
      title: 'AI Sales Copilot',
      subtitle: 'Pipeline Insights & Email Drafting',
      description: 'Prospecting prioritization, next-best-action, and AI-drafted emails integrated with Salesforce and HubSpot.',
      icon: Bot,
      category: 'Sales Enablement',
      pricing: '$149 - $799/month',
      delivery: '1-2 weeks',
      features: [
        'Lead scoring and prioritization',
        'Auto-drafted outreach with tone controls',
        'Meeting summaries and follow-up generation',
        'CRM integration (Salesforce, HubSpot)'
      ],
      benefits: [
        '2x increase in meetings booked',
        'Faster pipeline movement',
        'Higher outbound reply rates'
      ],
      useCases: [
        'SDR email personalization',
        'Account research automation',
        'Post-call follow-ups'
      ],
      link: '/services/micro-saas/ai-sales-copilot',
      popularity: 86,
      savings: '$25K+ annually'
    },
    {
      id: 'ai-code-reviewer',
      title: 'AI Code Reviewer',
      subtitle: 'PR Reviews & Security Guards',
      description: 'Automated pull request reviews for style, complexity, security patterns, and test suggestions.',
      icon: Code,
      category: 'Engineering Productivity',
      pricing: '$99 - $499/month',
      delivery: '1 week',
      features: [
        'Static analysis with custom rules',
        'Secure coding pattern detection',
        'Test case generation hints',
        'CI integration (GitHub, GitLab, Bitbucket)'
      ],
      benefits: [
        '30% faster PR cycle time',
        'Fewer production defects',
        'Improved developer experience'
      ],
      useCases: [
        'PR quality gates',
        'Security policy enforcement',
        'Legacy refactor reviews'
      ],
      link: '/services/micro-saas/ai-code-reviewer',
      popularity: 83,
      savings: '$40K+ annually'
    },
    {
      id: 'privacy-dsar-automation',
      title: 'Privacy DSAR Automation',
      subtitle: 'GDPR/CCPA Requests at Scale',
      description: 'Automate data subject access requests: intake, identity verification, data retrieval, redaction, and delivery.',
      icon: Shield,
      category: 'Compliance & Security',
      pricing: '$299 - $1,499/month',
      delivery: '2-4 weeks',
      features: [
        'Self-service DSAR portal',
        'Identity verification workflows',
        'PII discovery and redaction',
        'Audit trail and SLA tracking'
      ],
      benefits: [
        '80% lower handling cost per request',
        'Regulatory compliance and auditability',
        'Faster response SLAs'
      ],
      useCases: [
        'Consumer privacy operations',
        'Regulatory reporting',
        'Enterprise governance'
      ],
      link: '/services/micro-saas/privacy-dsar-automation',
      popularity: 79,
      savings: '$60K+ annually'
    },
    {
      id: 'mlops-monitoring',
      title: 'MLOps Monitoring',
      subtitle: 'Model Drift & Data Quality',
      description: 'Production ML monitoring for drift, data quality, feature health, and performance regression with alerts.',
      icon: Activity,
      category: 'AI & Analytics',
      pricing: '$249 - $1,299/month',
      delivery: '2-3 weeks',
      features: [
        'Drift and data quality detection',
        'Model performance dashboards',
        'Traffic shadowing and canaries',
        'PagerDuty/Slack alert integrations'
      ],
      benefits: [
        'Reduced model downtime',
        'Faster incident response',
        'Improved prediction accuracy'
      ],
      useCases: [
        'Realtime scoring services',
        'Batch inference monitoring',
        'Feature store quality checks'
      ],
      link: '/services/micro-saas/mlops-monitoring',
      popularity: 85,
      savings: '$90K+ annually'
    },
    {
      id: 'ai-content-factory',
      title: 'AI Content Factory',
      subtitle: 'Intelligent Content Creation Suite',
      description: 'AI-powered content generation for marketing, social media, documentation, and SEO with brand consistency and quality control.',
      icon: FileText,
      category: 'Content Marketing',
      pricing: '$199 - $899/month',
      delivery: '1-2 weeks',
      features: [
        'Automated blog posts, articles, and long-form content',
        'Social media content generation with platform optimization',
        'Product descriptions and marketing copy creation',
        'Technical documentation and knowledge base articles',
        'SEO-optimized content with keyword integration',
        'Brand voice consistency across all content types'
      ],
      benefits: [
        '10x faster content creation process',
        'Consistent brand messaging across channels',
        'SEO-optimized content for better rankings',
        'Reduced content creation costs by 70%'
      ],
      useCases: [
        'E-commerce product descriptions',
        'B2B marketing content',
        'Technical documentation',
        'Social media management'
      ],
      link: '/services/micro-saas/ai-content-factory',
      popularity: 88,
      savings: '$20K+ annually'
    },
    {
      id: 'compliance-automation-hub',
      title: 'Compliance Automation Hub',
      subtitle: 'SOC 2, HIPAA & GDPR Compliance Platform',
      description: 'Automated compliance management with policy templates, evidence collection, and audit-ready reporting for major frameworks.',
      icon: Shield,
      category: 'Compliance & Security',
      pricing: '$499 - $2,999/month',
      delivery: '2-4 weeks',
      features: [
        'Pre-built policy packs for SOC 2, HIPAA, GDPR, and ISO 27001',
        'Automated access reviews and permission audits',
        'Evidence collection and documentation workflows',
        'Continuous controls monitoring and alerting',
        'Audit-ready reports and gap analysis',
        'Integration with existing security tools'
      ],
      benefits: [
        'Reduce compliance preparation time by 80%',
        'Automated evidence collection and reporting',
        'Continuous compliance monitoring',
        'Audit-ready documentation and reports'
      ],
      useCases: [
        'Enterprise compliance management',
        'Healthcare data protection',
        'Financial services regulations',
        'SaaS company certifications'
      ],
      link: '/services/micro-saas/compliance-automation-hub',
      popularity: 82,
      savings: '$100K+ annually'
    },
    {
      id: 'smart-hr-assistant',
      title: 'Smart HR Assistant',
      subtitle: 'AI-Powered Talent Management',
      description: 'Intelligent recruitment platform with AI-driven candidate screening, interview scheduling, and onboarding automation.',
      icon: Users,
      category: 'Human Resources',
      pricing: '$399 - $1,999/month',
      delivery: '3-4 weeks',
      features: [
        'AI-powered candidate screening and ranking',
        'Skills matching and gap analysis',
        'Automated interview scheduling and coordination',
        'Cultural fit assessment and team compatibility',
        'Predictive hiring analytics and success scoring',
        'Integration with ATS and HR systems'
      ],
      benefits: [
        '50% reduction in time-to-hire',
        'Improved candidate quality and fit',
        'Reduced recruitment costs',
        'Better retention rates through better matching'
      ],
      useCases: [
        'Tech company recruitment',
        'Remote team building',
        'High-volume hiring',
        'Executive search optimization'
      ],
      link: '/services/micro-saas/smart-hr-assistant',
      popularity: 76,
      savings: '$75K+ annually'
    },
    {
      id: 'customer-insights-engine',
      title: 'Customer Insights Engine',
      subtitle: 'Real-Time Analytics & Feedback Platform',
      description: 'Advanced customer analytics with sentiment analysis, behavior tracking, and predictive insights for better decision-making.',
      icon: BarChart3,
      category: 'Analytics & Insights',
      pricing: '$299 - $1,499/month',
      delivery: '2-3 weeks',
      features: [
        'Real-time customer sentiment analysis',
        'Behavior tracking and journey mapping',
        'Predictive churn and upsell analytics',
        'Custom dashboard and reporting',
        'Integration with CRM and support systems',
        'Automated alerting for critical insights'
      ],
      benefits: [
        '15% increase in customer retention',
        'Improved customer satisfaction scores',
        'Better product development insights',
        'Reduced customer acquisition costs'
      ],
      useCases: [
        'SaaS customer success',
        'E-commerce optimization',
        'Customer support enhancement',
        'Product development insights'
      ],
      link: '/services/micro-saas/customer-insights-engine',
      popularity: 84,
      savings: '$60K+ annually'
    },
    {
      id: 'workflow-automation-studio',
      title: 'Workflow Automation Studio',
      subtitle: 'No-Code Business Process Automation',
      description: 'Visual workflow builder for automating business processes, integrations, and data workflows without coding.',
      icon: Zap,
      category: 'Process Automation',
      pricing: '$199 - $999/month',
      delivery: '1-3 weeks',
      features: [
        'Drag-and-drop workflow builder',
        'Pre-built templates for common processes',
        'Integration with 500+ business applications',
        'Conditional logic and decision trees',
        'Real-time monitoring and error handling',
        'Role-based access and approval workflows'
      ],
      benefits: [
        '75% reduction in manual process time',
        'Elimination of human errors',
        'Improved process consistency',
        'Better resource allocation'
      ],
      useCases: [
        'Invoice processing automation',
        'Lead qualification workflows',
        'Employee onboarding',
        'Customer service automation'
      ],
      link: '/services/micro-saas/workflow-automation-studio',
      popularity: 91,
      savings: '$40K+ annually'
    },
    {
      id: 'smart-inventory-manager',
      title: 'Smart Inventory Manager',
      subtitle: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and supply chain optimization.',
      icon: Package,
      category: 'Supply Chain',
      pricing: '$399 - $1,999/month',
      delivery: '3-5 weeks',
      features: [
        'AI-powered demand forecasting',
        'Automated reorder point calculations',
        'Multi-location inventory tracking',
        'Supplier performance analytics',
        'Cost optimization recommendations',
        'Integration with ERP and e-commerce platforms'
      ],
      benefits: [
        '30% reduction in inventory carrying costs',
        'Elimination of stockouts and overstock',
        'Improved cash flow management',
        'Better supplier relationships'
      ],
      useCases: [
        'E-commerce inventory management',
        'Manufacturing supply chain',
        'Retail chain optimization',
        'Dropshipping automation'
      ],
      link: '/services/micro-saas/smart-inventory-manager',
      popularity: 73,
      savings: '$80K+ annually'
    },
    {
      id: 'social-media-command-center',
      title: 'Social Media Command Center',
      subtitle: 'AI-Powered Social Media Management',
      description: 'Comprehensive social media management with AI content creation, scheduling, engagement tracking, and analytics.',
      icon: MessageSquare,
      category: 'Social Media',
      pricing: '$149 - $799/month',
      delivery: '1-2 weeks',
      features: [
        'AI-generated social media content',
        'Multi-platform posting and scheduling',
        'Engagement tracking and response automation',
        'Hashtag optimization and trend analysis',
        'Competitor monitoring and benchmarking',
        'ROI tracking and performance analytics'
      ],
      benefits: [
        '5x increase in social media engagement',
        'Consistent brand presence across platforms',
        'Time savings of 20+ hours per week',
        'Better audience targeting and growth'
      ],
      useCases: [
        'Small business social media',
        'E-commerce social selling',
        'B2B thought leadership',
        'Personal brand building'
      ],
      link: '/services/micro-saas/social-media-command-center',
      popularity: 89,
      savings: '$25K+ annually'
    },
    {
      id: 'smart-document-processor',
      title: 'Smart Document Processor',
      subtitle: 'AI Document Analysis & Automation',
      description: 'Intelligent document processing with OCR, data extraction, classification, and automated workflow routing.',
      icon: FileText,
      category: 'Document Management',
      pricing: '$249 - $1,299/month',
      delivery: '2-3 weeks',
      features: [
        'Advanced OCR with 99%+ accuracy',
        'Intelligent document classification',
        'Automated data extraction and validation',
        'Workflow routing and approval processes',
        'Integration with business systems',
        'Compliance and audit trail tracking'
      ],
      benefits: [
        '90% reduction in manual data entry',
        'Faster document processing times',
        'Improved accuracy and consistency',
        'Better compliance and auditability'
      ],
      useCases: [
        'Invoice processing automation',
        'Contract analysis and management',
        'Insurance claim processing',
        'Legal document review'
      ],
      link: '/services/micro-saas/smart-document-processor',
      popularity: 81,
      savings: '$35K+ annually'
    },
    {
      id: 'customer-support-ai',
      title: 'Customer Support AI',
      subtitle: 'Intelligent Support Automation',
      description: 'AI-powered customer support with chatbots, ticket routing, sentiment analysis, and automated resolution.',
      icon: Headphones,
      category: 'Customer Support',
      pricing: '$199 - $999/month',
      delivery: '2-3 weeks',
      features: [
        'Intelligent chatbot with natural language processing',
        'Automated ticket routing and prioritization',
        'Sentiment analysis and escalation triggers',
        'Knowledge base integration and suggestions',
        'Multi-channel support (email, chat, phone)',
        'Performance analytics and optimization'
      ],
      benefits: [
        '60% reduction in support ticket volume',
        '24/7 customer support availability',
        'Faster response times and resolution',
        'Improved customer satisfaction scores'
      ],
      useCases: [
        'E-commerce customer support',
        'SaaS product support',
        'Financial services help desk',
        'Healthcare patient support'
      ],
      link: '/services/micro-saas/customer-support-ai',
      popularity: 87,
      savings: '$45K+ annually'
    },
    {
      id: 'email-marketing-automation',
      title: 'Email Marketing Automation',
      subtitle: 'AI-Powered Email Campaign Platform',
      description: 'Advanced email marketing with AI content generation, segmentation, personalization, and performance optimization.',
      icon: Mail,
      category: 'Email Marketing',
      pricing: '$99 - $599/month',
      delivery: '1-2 weeks',
      features: [
        'AI-generated email content and subject lines',
        'Advanced segmentation and personalization',
        'Behavioral trigger automation',
        'A/B testing and optimization',
        'Deliverability monitoring and optimization',
        'ROI tracking and analytics'
      ],
      benefits: [
        '3x increase in email open rates',
        'Automated lead nurturing campaigns',
        'Personalized customer journeys',
        'Better deliverability and engagement'
      ],
      useCases: [
        'E-commerce email marketing',
        'B2B lead nurturing',
        'Customer retention campaigns',
        'Event and webinar promotion'
      ],
      link: '/services/micro-saas/email-marketing-automation',
      popularity: 85,
      savings: '$30K+ annually'
    },
    {
      id: 'smart-scheduling-coordinator',
      title: 'Smart Scheduling Coordinator',
      subtitle: 'AI Meeting & Calendar Management',
      description: 'Intelligent scheduling with conflict resolution, time zone optimization, and automated meeting coordination.',
      icon: Calendar,
      category: 'Productivity',
      pricing: '$49 - $299/month',
      delivery: '1 week',
      features: [
        'AI-powered meeting scheduling',
        'Time zone optimization and coordination',
        'Conflict resolution and rescheduling',
        'Integration with calendar systems',
        'Meeting room and resource booking',
        'Follow-up and reminder automation'
      ],
      benefits: [
        'Eliminate scheduling conflicts and double-booking',
        'Save 5+ hours per week on scheduling',
        'Improved meeting attendance rates',
        'Better time zone coordination'
      ],
      useCases: [
        'Executive assistant automation',
        'Sales team scheduling',
        'Remote team coordination',
        'Client meeting management'
      ],
      link: '/services/micro-saas/smart-scheduling-coordinator',
      popularity: 92,
      savings: '$15K+ annually'
    }
    ,
    {
      id: 'ai-legal-contract-review',
      title: 'AI Legal Contract Review',
      subtitle: 'Clause Risk & Obligation Extraction',
      description: 'Automated contract analysis that flags risky clauses, extracts obligations and dates, and drafts redlines aligned to your playbooks.',
      icon: FileText,
      category: 'Legal Ops',
      pricing: '$299 - $1,999/month',
      delivery: '1-2 weeks',
      features: [
        'Clause classification and risk scoring',
        'Obligation, date, and party extraction',
        'Playbook-aligned suggested redlines',
        'Contract comparison and change tracking',
        'Secure data handling and access control',
        'Export to Word and CLM integration'
      ],
      benefits: [
        '70% faster review cycle time',
        'Reduced legal spend and outside counsel hours',
        'Standardized negotiations with fewer escalations'
      ],
      useCases: [
        'Sales order forms and MSAs',
        'Vendor contracts and DPAs',
        'NDA bulk screening'
      ],
      link: '/services/micro-saas/ai-legal-contract-review',
      popularity: 88,
      savings: '$100K+ annually'
    },
    {
      id: 'vendor-risk-scoring',
      title: 'Vendor Risk Scoring API',
      subtitle: 'Third-Party GRC Intelligence',
      description: 'Continuous vendor monitoring with public cyber hygiene signals, breach intel, and questionnaire parsing into a unified risk score.',
      icon: Shield,
      category: 'Compliance & Security',
      pricing: '$399 - $2,499/month',
      delivery: '2-3 weeks',
      features: [
        'Security rating aggregation and normalization',
        'Questionnaire ingestion (SIG, CAIQ) with mapping',
        'Breach and exposure monitoring',
        'Tiering, SLAs, and auto-remediation tasks',
        'API and webhook notifications'
      ],
      benefits: [
        'Faster vendor onboarding and re-assessments',
        'Improved risk visibility and compliance evidence',
        'Automated follow-ups and ticketing'
      ],
      useCases: [
        'Third-party due diligence',
        'Annual vendor reviews',
        'Board and audit reporting'
      ],
      link: '/services/micro-saas/vendor-risk-scoring',
      popularity: 82,
      savings: '$75K+ annually'
    },
    {
      id: 'social-ads-optimizer',
      title: 'AI Social Ads Optimizer',
      subtitle: 'Creative Generation & Budget Allocation',
      description: 'Generates and tests ad variants across platforms, shifts budget to winners automatically, and explains performance drivers.',
      icon: MessageSquare,
      category: 'Marketing',
      pricing: '$149 - $999/month',
      delivery: '1-2 weeks',
      features: [
        'Creative and copy generation with brand guardrails',
        'Multi-variate testing and flywheel learning',
        'Budget reallocation and pacing',
        'Attribution and incrementality insights',
        'Platform integrations (Meta, Google, LinkedIn)'
      ],
      benefits: [
        'Higher ROAS with continuous optimization',
        'Faster experiment cycles',
        'Transparency into drivers of performance'
      ],
      useCases: [
        'Paid social acquisition',
        'Creative testing lab',
        'Always-on campaign optimization'
      ],
      link: '/services/micro-saas/social-ads-optimizer',
      popularity: 90,
      savings: '$40K+ annually'
    },
    {
      id: 'api-uptime-slo-monitor',
      title: 'API Uptime & SLO Monitor',
      subtitle: 'SLA Tracking with Synthetic Checks',
      description: 'Global synthetic monitoring, latency SLOs, and burn-rate alerts with runbook links for fast incident response.',
      icon: Activity,
      category: 'Engineering Productivity',
      pricing: '$79 - $499/month',
      delivery: '1 week',
      features: [
        'HTTP and browser-based checks from multiple regions',
        'Latency/error budgets and burn-rate alerts',
        'On-call rotations and escalation policies',
        'Dashboards and public status pages',
        'Jira/PagerDuty/Slack integrations'
      ],
      benefits: [
        'Reduced MTTR and fewer incidents',
        'Clear SLOs and compliance reporting',
        'Improved customer trust'
      ],
      useCases: [
        'API reliability guardrails',
        'Customer SLAs tracking',
        'Release readiness gates'
      ],
      link: '/services/micro-saas/api-uptime-slo-monitor',
      popularity: 86,
      savings: '$25K+ annually'
    },
    {
      id: 'ai-localization-qa',
      title: 'AI Localization QA',
      subtitle: 'Multilingual UX & Copy Validation',
      description: 'Automated linguistic QA checks for localized apps and content, flagging layout overflows, tone mismatches, and glossary violations.',
      icon: Globe,
      category: 'Content & Localization',
      pricing: '$129 - $799/month',
      delivery: '1-2 weeks',
      features: [
        'Glossary and style guide enforcement',
        'Visual layout checks and truncation detection',
        'Tone and formality consistency',
        'Screenshot-based review workflows',
        'Connector for common TMS platforms'
      ],
      benefits: [
        'Consistent global UX',
        'Lower localization costs',
        'Faster release cycles in all markets'
      ],
      useCases: [
        'Website and app localization',
        'Support content translations',
        'Product copy QA at scale'
      ],
      link: '/services/micro-saas/ai-localization-qa',
      popularity: 78,
      savings: '$30K+ annually'
    },
    {
      id: 'data-pipeline-cost-inspector',
      title: 'Data Pipeline Cost Inspector',
      subtitle: 'Warehouse & Orchestration Spend Guard',
      description: 'Analyzes warehouse queries and orchestration runs to identify costly patterns, propose fixes, and auto-open PRs.',
      icon: BarChart3,
      category: 'Analytics & Insights',
      pricing: '$199 - $1,299/month',
      delivery: '2-3 weeks',
      features: [
        'Hotspot detection for queries and jobs',
        'Materialization and partitioning recommendations',
        'Cost anomaly alerts and budgets',
        'dbt/Airflow/Dagster integration',
        'Git PR hints to optimize SQL/ETL'
      ],
      benefits: [
        'Lower warehouse and compute bills',
        'Faster jobs and stable SLAs',
        'Developer time savings with PR hints'
      ],
      useCases: [
        'Snowflake/BigQuery cost tuning',
        'dbt model optimization',
        'Airflow schedule right-sizing'
      ],
      link: '/services/micro-saas/data-pipeline-cost-inspector',
      popularity: 88,
      savings: '$120K+ annually'
    }
  ];

  const categories = [
    { name: 'Cloud Management', icon: Cloud, count: 1 },
    { name: 'Content Marketing', icon: FileText, count: 1 },
    { name: 'Compliance & Security', icon: Shield, count: 2 },
    { name: 'Human Resources', icon: Users, count: 1 },
    { name: 'Analytics & Insights', icon: BarChart3, count: 2 },
    { name: 'Process Automation', icon: Zap, count: 1 },
    { name: 'Supply Chain', icon: Package, count: 1 },
    { name: 'Social Media', icon: MessageSquare, count: 1 },
    { name: 'Document Management', icon: FileText, count: 1 },
    { name: 'Customer Support', icon: Headphones, count: 1 },
    { name: 'Email Marketing', icon: Mail, count: 1 },
    { name: 'Productivity', icon: Calendar, count: 1 },
    { name: 'Sales Enablement', icon: MessageSquare, count: 1 },
    { name: 'Engineering Productivity', icon: Code, count: 1 }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                Production-Ready Micro SaaS Solutions
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Real Business Tools That
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Actually Work</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stop wasting time on complex enterprise software. Our micro SaaS solutions solve specific business problems with immediate ROI and fast implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-sm text-gray-600">Micro SaaS Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">1-4</div>
              <div className="text-sm text-gray-600">Weeks Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$50K+</div>
              <div className="text-sm text-gray-600">Average Annual Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Solutions by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                <category.icon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                <div className="text-sm font-semibold text-gray-900">{category.name}</div>
                <div className="text-xs text-gray-500">{category.count} solution{category.count !== 1 ? 's' : ''}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Micro SaaS Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{service.popularity}%</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        Pricing
                      </span>
                      <span className="font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        Delivery
                      </span>
                      <span className="font-semibold text-green-600">{service.delivery}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-gray-600">
                        <TrendingUp className="w-4 h-4" />
                        Savings
                      </span>
                      <span className="font-semibold text-purple-600">{service.savings}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-sm text-blue-600 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link 
                      href={service.link}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <a 
                      href={`mailto:${contactInfo.email}?subject=Interest in ${service.title}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom micro SaaS solution built specifically for your needs. Most projects deliver within 2-4 weeks with immediate ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: {contactInfo.phone}
            </a>
            <a 
              href={`mailto:${contactInfo.email}?subject=Micro SaaS Consultation Request`}
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: {contactInfo.email}
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-lg font-semibold mb-2">📍 Address:</p>
            <p>{contactInfo.address}</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What makes your micro SaaS solutions different?</h3>
              <p className="text-gray-600">
                Our solutions are built for specific business problems, not generic needs. They're production-ready, integrate with your existing systems, and deliver immediate ROI. Most solutions can be deployed within 1-4 weeks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer custom development?</h3>
              <p className="text-gray-600">
                Yes! While our micro SaaS solutions cover common business needs, we also build custom solutions for unique requirements. Contact us to discuss your specific needs and get a tailored proposal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What kind of support do you provide?</h3>
              <p className="text-gray-600">
                We provide comprehensive support including setup, training, integration assistance, and ongoing maintenance. Our team is available via phone, email, and video calls to ensure your success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I integrate these with my existing systems?</h3>
              <p className="text-gray-600">
                Absolutely! All our solutions are designed to integrate with popular business systems including CRM, ERP, accounting software, and cloud platforms. We handle the integration as part of the setup process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}