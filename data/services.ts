export type ServiceItem = {
  slug: string;
  title: string;
  category: 'Micro-SaaS' | 'IT Services' | 'AI Solutions';
  description: string;
  startingPriceUSD: string;
  typicalTimeline: string;
  link: string;
  references?: { label: string; url: string }[]};

export const servicesCatalog: ServiceItem[] = [
  // Existing Services
  {
    slug: 'ai-chatbot-for-support',
    title: 'AI Chatbot for Customer Support',
    category: 'Micro-SaaS',
    description:
      'Deploy a branded AI assistant trained on your docs to deflect tickets, reduce response times, and boost CSAT across web and chat channels.',
    startingPriceUSD: '$1,500 setup + $99/mo',
    typicalTimeline: '1-2 weeks',
    link: '/services/ai-chatbot-for-support',
    references: [
      { label: 'OpenAI API Pricing', url: 'https://openai.com/api/pricing' },
      { label: 'Vercel Pricing', url: 'https://vercel.com/pricing' },
    ],
  },
  {
    slug: 'lead-scraper-and-enrichment',
    title: 'Lead Scraper & Enrichment Engine',
    category: 'Micro-SaaS',
    description:
      'Automated B2B lead discovery, enrichment, and scoring with workflow exports to your CRM.',
    startingPriceUSD: '$2,500 setup + $149/mo',
    typicalTimeline: '2-3 weeks',
    link: '/services/lead-scraper-and-enrichment',
    references: [
      { label: 'Clearbit (reference)', url: 'https://clearbit.com' },
      { label: 'Apollo (reference)', url: 'https://www.apollo.io/pricing' },
    ],
  },
  {
    slug: 'document-processing-automation',
    title: 'Document Processing Automation',
    category: 'AI Solutions',
    description:
      'Extract structured data from PDFs, invoices, forms and route it into ERPs/CRMs with human-in-the-loop review.',
    startingPriceUSD: '$3,000 setup + usage',
    typicalTimeline: '2-4 weeks',
    link: '/services/document-processing-automation',
    references: [
      { label: 'Google Document AI', url: 'https://cloud.google.com/document-ai' },
      { label: 'AWS Textract', url: 'https://aws.amazon.com/textract/pricing/' },
    ],
  },
  {
    slug: 'cloud-migration-and-cost-optimization',
    title: 'Cloud Migration & Cost Optimization',
    category: 'IT Services',
    description:
      'Migrate workloads to AWS/GCP/Azure, implement IaC, and reduce spend via rightsizing and savings plans.',
    startingPriceUSD: 'From $8,000 project',
    typicalTimeline: '4-8 weeks',
    link: '/services/cloud-migration-and-cost-optimization',
    references: [
      { label: 'AWS Pricing', url: 'https://aws.amazon.com/pricing/' },
      { label: 'Terraform', url: 'https://developer.hashicorp.com/terraform' },
    ],
  },
  {
    slug: 'security-hardening-and-audits',
    title: 'Security Hardening & Audits',
    category: 'IT Services',
    description:
      'CIS/NIST aligned audits, SOC2 readiness, penetration testing coordination, and remediation roadmaps.',
    startingPriceUSD: 'From $5,000 audit',
    typicalTimeline: '2-6 weeks',
    link: '/services/security-hardening-and-audits',
    references: [
      { label: 'CIS Benchmarks', url: 'https://www.cisecurity.org/cis-benchmarks' },
      { label: 'OWASP ASVS', url: 'https://owasp.org/www-project-application-security-verification-standard/' },
    ],
  },
  {
    slug: 'mvp-web-app-development',
    title: 'MVP Web App Development',
    category: 'Micro-SaaS',
    description:
      'Design and build a production-ready MVP with Next.js, Tailwind, Stripe, and modern auth.',
    startingPriceUSD: 'From $12,000 project',
    typicalTimeline: '4-6 weeks',
    link: '/services/mvp-web-app-development',
    references: [
      { label: 'Vercel Pricing', url: 'https://vercel.com/pricing' },
      { label: 'Stripe Pricing', url: 'https://stripe.com/pricing' },
    ],
  },
  {
    slug: 'analytics-and-bi-dashboards',
    title: 'Analytics & BI Dashboards',
    category: 'AI Solutions',
    description:
      'Data pipelines and BI with semantic layers and KPI dashboards for execs and ops teams.',
    startingPriceUSD: 'From $6,000 project',
    typicalTimeline: '3-5 weeks',
    link: '/services/analytics-and-bi-dashboards',
    references: [
      { label: 'dbt', url: 'https://www.getdbt.com/' },
      { label: 'BigQuery Pricing', url: 'https://cloud.google.com/bigquery/pricing' },
    ],
  },

  // NEW MICRO SAAS SERVICES
  {
    slug: 'ai-content-generator',
    title: 'AI Content Generator Platform',
    category: 'Micro-SaaS',
    description:
      'AI-powered content creation tool that generates blog posts, social media content, marketing copy, and product descriptions with brand voice consistency.',
    startingPriceUSD: '$2,000 setup + $79/mo',
    typicalTimeline: '2-3 weeks',
    link: '/services/ai-content-generator',
    references: [
      { label: 'OpenAI GPT-4 Pricing', url: 'https://openai.com/api/pricing' },
      { label: 'Content Marketing ROI', url: 'https://contentmarketinginstitute.com/2023/08/content-marketing-roi/' },
    ],
  },
  {
    slug: 'automated-email-followup',
    title: 'Automated Email Follow-up System',
    category: 'Micro-SaaS',
    description:
      'Intelligent email automation platform that sends personalized follow-ups, nurtures leads, and maintains customer engagement with advanced segmentation.',
    startingPriceUSD: '$1,200 setup + $49/mo',
    typicalTimeline: '1-2 weeks',
    link: '/services/automated-email-followup',
    references: [
      { label: 'Email Marketing ROI', url: 'https://www.campaignmonitor.com/resources/guides/email-marketing-roi/' },
      { label: 'SendGrid Pricing', url: 'https://sendgrid.com/pricing/' },
    ],
  },
  {
    slug: 'customer-support-platform',
    title: 'All-in-One Customer Support Platform',
    category: 'Micro-SaaS',
    description:
      'Comprehensive helpdesk solution with ticket management, knowledge base, live chat, AI chatbots, and customer satisfaction tracking.',
    startingPriceUSD: '$3,500 setup + $99/mo',
    typicalTimeline: '3-4 weeks',
    link: '/services/customer-support-platform',
    references: [
      { label: 'Zendesk Pricing', url: 'https://www.zendesk.com/pricing/' },
      { label: 'Customer Support ROI', url: 'https://www.salesforce.com/resources/articles/customer-service-roi/' },
    ],
  },
  {
    slug: 'ai-email-responder',
    title: 'AI Email Responder & Manager',
    category: 'Micro-SaaS',
    description:
      'AI-driven email management system that reads, categorizes, and responds to emails automatically while flagging important messages for human review.',
    startingPriceUSD: '$2,800 setup + $89/mo',
    typicalTimeline: '2-3 weeks',
    link: '/services/ai-email-responder',
    references: [
      { label: 'Gmail API', url: 'https://developers.google.com/gmail/api' },
      { label: 'Email Productivity Stats', url: 'https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-blog/the-hidden-costs-of-email' },
    ],
  },
  {
    slug: 'event-management-dashboard',
    title: 'Event Management & Analytics Dashboard',
    category: 'Micro-SaaS',
    description:
      'Complete event management platform with ticket sales, attendee management, scheduling, feedback collection, and comprehensive analytics.',
    startingPriceUSD: '$4,000 setup + $129/mo',
    typicalTimeline: '4-5 weeks',
    link: '/services/event-management-dashboard',
    references: [
      { label: 'Eventbrite Pricing', url: 'https://www.eventbrite.com/pricing/' },
      { label: 'Event Industry Growth', url: 'https://www.eventmanagerblog.com/event-industry-statistics' },
    ],
  },
  {
    slug: 'ecommerce-return-management',
    title: 'E-commerce Return Management SaaS',
    category: 'Micro-SaaS',
    description:
      'Automated return processing system that handles return requests, generates labels, tracks status, and provides analytics for e-commerce businesses.',
    startingPriceUSD: '$2,200 setup + $69/mo',
    typicalTimeline: '2-3 weeks',
    link: '/services/ecommerce-return-management',
    references: [
      { label: 'E-commerce Return Rates', url: 'https://www.narvar.com/blog/ecommerce-returns-statistics' },
      { label: 'Shopify App Store', url: 'https://apps.shopify.com/' },
    ],
  },
  {
    slug: 'ai-talent-matching',
    title: 'AI-Powered Talent Matching Platform',
    category: 'Micro-SaaS',
    description:
      'Advanced AI recruitment platform that matches businesses with perfect tech talent using machine learning algorithms and skills assessment.',
    startingPriceUSD: '$5,000 setup + $199/mo',
    typicalTimeline: '4-6 weeks',
    link: '/services/ai-talent-matching',
    references: [
      { label: 'LinkedIn Talent Solutions', url: 'https://business.linkedin.com/talent-solutions' },
      { label: 'Recruitment AI Market', url: 'https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-recruitment-market' },
    ],
  },
  {
    slug: 'inventory-optimization-ai',
    title: 'AI Inventory Optimization System',
    category: 'Micro-SaaS',
    description:
      'Intelligent inventory management system that predicts demand, optimizes stock levels, prevents stockouts, and reduces carrying costs using AI.',
    startingPriceUSD: '$3,200 setup + $149/mo',
    typicalTimeline: '3-4 weeks',
    link: '/services/inventory-optimization-ai',
    references: [
      { label: 'Inventory Management ROI', url: 'https://www.fishbowl.com/blog/inventory-management-roi/' },
      { label: 'AI in Supply Chain', url: 'https://www.mckinsey.com/capabilities/operations/our-insights/artificial-intelligence-in-supply-chain' },
    ],
  },

  // NEW IT SERVICES
  {
    slug: 'zero-trust-security-implementation',
    title: 'Zero Trust Security Architecture',
    category: 'IT Services',
    description:
      'Complete zero trust security implementation with identity verification, device trust, network segmentation, and continuous monitoring.',
    startingPriceUSD: 'From $15,000 project',
    typicalTimeline: '6-10 weeks',
    link: '/services/zero-trust-security-implementation',
    references: [
      { label: 'NIST Zero Trust Framework', url: 'https://www.nist.gov/publications/zero-trust-architecture' },
      { label: 'CISA Zero Trust Maturity Model', url: 'https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model' },
    ],
  },
  {
    slug: 'disaster-recovery-planning',
    title: 'Disaster Recovery & Business Continuity',
    category: 'IT Services',
    description:
      'Comprehensive disaster recovery planning, backup strategies, failover systems, and business continuity testing to ensure minimal downtime.',
    startingPriceUSD: 'From $12,000 project',
    typicalTimeline: '4-8 weeks',
    link: '/services/disaster-recovery-planning',
    references: [
      { label: 'AWS Disaster Recovery', url: 'https://aws.amazon.com/disaster-recovery/' },
      { label: 'Business Continuity Planning', url: 'https://www.ready.gov/business/implementation/continuity' },
    ],
  },
  {
    slug: 'managed-it-support',
    title: '24/7 Managed IT Support Services',
    category: 'IT Services',
    description:
      'Round-the-clock IT monitoring, maintenance, support, and proactive issue resolution with guaranteed response times and SLA compliance.',
    startingPriceUSD: 'From $2,500/mo',
    typicalTimeline: '1-2 weeks setup',
    link: '/services/managed-it-support',
    references: [
      { label: 'Managed IT Services Market', url: 'https://www.grandviewresearch.com/industry-analysis/managed-it-services-market' },
      { label: 'IT Support Best Practices', url: 'https://www.itsupportguides.com/' },
    ],
  },
  {
    slug: 'network-optimization',
    title: 'Network Performance Optimization',
    category: 'IT Services',
    description:
      'Network infrastructure assessment, optimization, and modernization to improve performance, security, and reliability across all locations.',
    startingPriceUSD: 'From $8,500 project',
    typicalTimeline: '3-6 weeks',
    link: '/services/network-optimization',
    references: [
      { label: 'Cisco Network Solutions', url: 'https://www.cisco.com/c/en/us/solutions/index.html' },
      { label: 'Network Performance Monitoring', url: 'https://www.solarwinds.com/network-performance-monitor' },
    ],
  },
  {
    slug: 'data-backup-solutions',
    title: 'Enterprise Data Backup & Recovery',
    category: 'IT Services',
    description:
      'Comprehensive data backup strategies including cloud backup, on-premises solutions, and hybrid approaches with automated recovery testing.',
    startingPriceUSD: 'From $5,500 project',
    typicalTimeline: '2-4 weeks',
    link: '/services/data-backup-solutions',
    references: [
      { label: 'Veeam Backup Solutions', url: 'https://www.veeam.com/' },
      { label: 'AWS Backup Services', url: 'https://aws.amazon.com/backup/' },
    ],
  },

  // NEW AI SOLUTIONS
  {
    slug: 'predictive-analytics-platform',
    title: 'Predictive Analytics & Forecasting Platform',
    category: 'AI Solutions',
    description:
      'Advanced predictive analytics platform that forecasts business trends, customer behavior, and market changes using machine learning models.',
    startingPriceUSD: 'From $8,500 project',
    typicalTimeline: '4-6 weeks',
    link: '/services/predictive-analytics-platform',
    references: [
      { label: 'Predictive Analytics Market', url: 'https://www.grandviewresearch.com/industry-analysis/predictive-analytics-market' },
      { label: 'Machine Learning Models', url: 'https://scikit-learn.org/stable/supervised_learning.html' },
    ],
  },
  {
    slug: 'computer-vision-solutions',
    title: 'Computer Vision & Image Recognition',
    category: 'AI Solutions',
    description:
      'Custom computer vision solutions for object detection, facial recognition, quality control, and automated visual inspection systems.',
    startingPriceUSD: 'From $12,000 project',
    typicalTimeline: '6-8 weeks',
    link: '/services/computer-vision-solutions',
    references: [
      { label: 'OpenCV Documentation', url: 'https://opencv.org/' },
      { label: 'Computer Vision Applications', url: 'https://www.ibm.com/cloud/learn/computer-vision' },
    ],
  },
  {
    slug: 'natural-language-processing',
    title: 'Natural Language Processing Solutions',
    category: 'AI Solutions',
    description:
      'NLP solutions for sentiment analysis, text classification, language translation, and automated content processing and understanding.',
    startingPriceUSD: 'From $7,000 project',
    typicalTimeline: '3-5 weeks',
    link: '/services/natural-language-processing',
    references: [
      { label: 'Hugging Face Models', url: 'https://huggingface.co/models' },
      { label: 'NLP Applications', url: 'https://www.nvidia.com/en-us/deep-learning-ai/solutions/natural-language-processing/' },
    ],
  },
  {
    slug: 'ai-powered-crm',
    title: 'AI-Enhanced CRM System',
    category: 'AI Solutions',
    description:
      'Intelligent CRM with AI-powered lead scoring, automated follow-ups, customer insights, and predictive sales analytics.',
    startingPriceUSD: 'From $10,000 project',
    typicalTimeline: '5-7 weeks',
    link: '/services/ai-powered-crm',
    references: [
      { label: 'Salesforce AI Features', url: 'https://www.salesforce.com/products/ai/' },
      { label: 'CRM Market Growth', url: 'https://www.grandviewresearch.com/industry-analysis/customer-relationship-management-crm-market' },
    ],
  },
  {
    slug: 'voice-assistant-development',
    title: 'Custom Voice Assistant Development',
    category: 'AI Solutions',
    description:
      'Custom voice assistants and chatbots with natural language understanding, multi-language support, and integration with business systems.',
    startingPriceUSD: 'From $15,000 project',
    typicalTimeline: '6-10 weeks',
    link: '/services/voice-assistant-development',
    references: [
      { label: 'Amazon Alexa Skills', url: 'https://developer.amazon.com/alexa' },
      { label: 'Google Assistant Actions', url: 'https://developers.google.com/assistant' },
    ],
  },
  {
    slug: 'ai-fraud-detection',
    title: 'AI-Powered Fraud Detection System',
    category: 'AI Solutions',
    description:
      'Advanced fraud detection system using machine learning to identify suspicious transactions, prevent fraud, and protect business assets.',
    startingPriceUSD: 'From $9,500 project',
    typicalTimeline: '4-6 weeks',
    link: '/services/ai-fraud-detection',
    references: [
      { label: 'Fraud Detection Statistics', url: 'https://www.lexisnexis.com/risk/fraud-detection.html' },
      { label: 'Machine Learning for Fraud', url: 'https://towardsdatascience.com/machine-learning-for-fraud-detection-6f65f37c5eef' },
    ],
  },
];

