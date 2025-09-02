export interface Service {
  id: string;
  name: string;
  category: 'micro-saas' | 'it-services' | 'ai-services';
  description: string;
  features: string[];
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
  };
  benefits: string[];
  useCases: string[];
  technologies: string[];
  link: string;
  icon: string;
}

export const services: Service[] = [
  // Micro SaaS Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    category: 'micro-saas',
    description: 'Advanced AI-powered content generation platform for blogs, social media, and marketing materials with GPT-4 integration.',
    features: [
      'Multi-language content generation',
      'SEO-optimized content',
      'Brand voice customization',
      'Content scheduling',
      'Analytics dashboard',
      'API integration',
      'Plagiarism detection',
      'Content templates library'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '10x faster content creation',
      'Consistent brand messaging',
      'SEO optimization built-in',
      'Multi-platform publishing',
      'Cost-effective content marketing'
    ],
    useCases: [
      'Blog content creation',
      'Social media management',
      'Email marketing campaigns',
      'Product descriptions',
      'Marketing copywriting'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: 'https://ziontechgroup.com/services/ai-content-generator',
    icon: '📝'
  },
  {
    id: 'ai-meeting-notes-assistant',
    name: 'AI Meeting Notes Assistant',
    category: 'micro-saas',
    description: 'Automated recording, transcription, summarization, and action-item extraction for meetings across Zoom, Google Meet, and Teams.',
    features: [
      'One-click meeting recording',
      'Accurate multilingual transcription',
      'Key-point and decision summaries',
      'Action items with owners and due dates',
      'CRM and task manager sync (HubSpot, Jira, Asana)',
      'Speaker diarization',
      'Secure storage and search',
      'Compliance-friendly redaction'
    ],
    pricing: { starter: 19, professional: 49, enterprise: 149, currency: 'USD' },
    benefits: [
      'Save 4+ hours per week per employee',
      'Never miss decisions or follow-ups',
      'Centralized, searchable meeting knowledge',
      'Improved accountability across teams'
    ],
    useCases: [
      'Sales and customer success reviews',
      'Engineering standups and retrospectives',
      'Executive and board meetings',
      'Client discovery and requirement gathering'
    ],
    technologies: ['Whisper/ASR', 'OpenAI', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/ai-meeting-notes-assistant',
    icon: '📝'
  },
  {
    id: 'whatsapp-crm-inbox',
    name: 'WhatsApp CRM Inbox',
    category: 'micro-saas',
    description: 'Unified WhatsApp shared inbox with automation, templates, and CRM enrichment for SMB sales and support teams.',
    features: [
      'Team shared inbox and assignment',
      'Templates and quick replies',
      'AI reply suggestions',
      'Contact enrichment and tagging',
      'Campaign broadcasts with opt-in',
      'CRM sync (HubSpot, Pipedrive)',
      'Metrics and SLA tracking',
      'Role-based permissions'
    ],
    pricing: { starter: 29, professional: 79, enterprise: 199, currency: 'USD' },
    benefits: [
      'Faster first-response times',
      'Higher conversion from chat-to-deal',
      'Reduced context switching',
      'Compliance-friendly messaging'
    ],
    useCases: ['Inbound sales', 'Customer support', 'Abandoned cart recovery', 'Local services intake'],
    technologies: ['Meta WhatsApp API', 'React', 'Node.js', 'Redis'],
    link: 'https://ziontechgroup.com/services/whatsapp-crm-inbox',
    icon: '💬'
  },
  {
    id: 'local-seo-audit-suite',
    name: 'Local SEO Audit Suite',
    category: 'micro-saas',
    description: 'Automated local SEO audits with citation checks, GBP optimization, review insights, and prioritized recommendations.',
    features: [
      'Google Business Profile audit',
      'NAP consistency checks',
      'Review sentiment analysis',
      'Local SERP and competitor gap analysis',
      'Structured data validation',
      'Automated weekly reports',
      'Backlink discovery',
      'Actionable checklist'
    ],
    pricing: { starter: 12, professional: 35, enterprise: 99, currency: 'USD' },
    benefits: ['Higher local rankings', 'Increased foot traffic and calls', 'Quick, actionable fixes', 'Benchmark vs competitors'],
    useCases: ['Local services', 'Restaurants', 'Clinics', 'Home services'],
    technologies: ['SEO APIs', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/local-seo-audit-suite',
    icon: '📍'
  },
  {
    id: 'ai-rfp-proposal-writer',
    name: 'AI RFP & Proposal Writer',
    category: 'micro-saas',
    description: 'Generate compliant RFP responses and tailored proposals using your past wins, case studies, and brand tone.',
    features: [
      'RFP requirements extraction',
      'Reusable answer library',
      'Auto-compliance checklists',
      'Citations and source linking',
      'Reviewer workflows',
      'Style and tone controls',
      'Export to DOCX/PDF',
      'Red teaming and accuracy guardrails'
    ],
    pricing: { starter: 59, professional: 149, enterprise: 399, currency: 'USD' },
    benefits: ['Win more bids', 'Cut drafting time by 70%', 'Ensure compliance', 'Consistent branding'],
    useCases: ['Government contracts', 'Enterprise RFPs', 'Agency proposals', 'Vendor questionnaires'],
    technologies: ['RAG', 'OpenAI', 'Vector DB', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ai-rfp-proposal-writer',
    icon: '📄'
  },
  {
    id: 'ecommerce-image-optimizer',
    name: 'E‑commerce Image Optimizer',
    category: 'micro-saas',
    description: 'Automated product image background removal, uniform shadows, variants, and size optimization for faster storefronts.',
    features: [
      'Background removal and replacement',
      'Consistent lighting and shadow',
      'Batch processing and presets',
      'WebP/AVIF conversion',
      'Shopify/BigCommerce apps',
      'A/B visual testing',
      'CDN delivery',
      'Accessibility contrast checks'
    ],
    pricing: { starter: 15, professional: 49, enterprise: 129, currency: 'USD' },
    benefits: ['Higher conversion rates', 'Improved Core Web Vitals', 'Brand-consistent visuals', 'Reduced design costs'],
    useCases: ['D2C stores', 'Marketplaces', 'Wholesale catalogs', 'Dropshipping'],
    technologies: ['Computer Vision', 'FFmpeg', 'CDN', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ecommerce-image-optimizer',
    icon: '🛍️'
  },
  {
    id: 'soc2-readiness-and-automation',
    name: 'SOC 2 Readiness & Automation',
    category: 'it-services',
    description: 'End-to-end SOC 2 readiness with control mapping, evidence collection automation, and auditor collaboration.',
    features: [
      'Gap assessment and remediation plan',
      'Automated evidence collection',
      'Policy generation and training',
      'Continuous control monitoring',
      'Risk register and vendor tracking',
      'Auditor workspace access',
      'Ticketing and workflows',
      'Reporting and dashboards'
    ],
    pricing: { starter: 8000, professional: 25000, enterprise: 65000, currency: 'USD' },
    benefits: ['Faster audit timelines', 'Lower compliance costs', 'Reduced manual effort', 'Audit-ready anytime'],
    useCases: ['SaaS startups', 'FinTech', 'HealthTech', 'Enterprise vendor programs'],
    technologies: ['GRC', 'SIEM', 'IDP', 'Cloud APIs', 'Automation'],
    link: 'https://ziontechgroup.com/services/soc2-readiness-and-automation',
    icon: '✅'
  },
  {
    id: 'lakehouse-architecture-deployment',
    name: 'Data Lakehouse Architecture & Deployment',
    category: 'it-services',
    description: 'Design and implement a modern lakehouse leveraging open table formats, scalable ETL, and governed self-serve analytics.',
    features: [
      'Architecture and governance blueprint',
      'Medallion data modeling',
      'Ingestion and ETL pipelines',
      'Batch and streaming processing',
      'Data catalog and lineage',
      'Cost and performance optimization',
      'BI and semantic layer setup',
      'Security and compliance'
    ],
    pricing: { starter: 30000, professional: 90000, enterprise: 250000, currency: 'USD' },
    benefits: ['Unified storage and compute', 'Lower TCO vs legacy DW', 'Governed self-serve analytics', 'Future-proof architecture'],
    useCases: ['Enterprise analytics', 'IoT telemetry', 'Marketing data hubs', 'Financial reporting'],
    technologies: ['Delta Lake', 'Iceberg', 'Apache Spark', 'dbt', 'Airflow', 'AWS/Azure/GCP'],
    link: 'https://ziontechgroup.com/services/lakehouse-architecture-deployment',
    icon: '🏗️'
  },
  {
    id: 'finops-cloud-cost-optimization',
    name: 'FinOps Cloud Cost Optimization',
    category: 'it-services',
    description: 'Operationalize FinOps with visibility, anomaly detection, and automated rightsizing to reduce cloud spend without slowing delivery.',
    features: [
      'Cost allocation and showback',
      'Anomaly detection and alerts',
      'Rightsizing and scheduling automation',
      'Reserved/spot strategy',
      'Kubernetes cost governance',
      'Tagging standards rollout',
      'Dashboards and KPIs',
      'Stakeholder enablement'
    ],
    pricing: { starter: 6000, professional: 18000, enterprise: 75000, currency: 'USD' },
    benefits: ['Reduce cloud spend 20–40%', 'Faster budgeting cycles', 'Predictable unit economics', 'No vendor lock-in'],
    useCases: ['SaaS platforms', 'Data platforms', 'Microservices estates', 'Seasonal workloads'],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Cloud APIs', 'Automation'],
    link: 'https://ziontechgroup.com/services/finops-cloud-cost-optimization',
    icon: '💸'
  },
  {
    id: 'sre-reliability-retainer',
    name: 'SRE Reliability Retainer',
    category: 'it-services',
    description: '24/7 SRE services with SLIs/SLOs, incident response, and proactive reliability engineering for critical systems.',
    features: [
      'SLO design and error budgets',
      'On-call runbooks and automation',
      'Chaos and load testing',
      'Observability as code',
      'Post-incident reviews',
      'Capacity planning',
      'Reliability roadmap',
      'Monthly executive reporting'
    ],
    pricing: { starter: 12000, professional: 35000, enterprise: 120000, currency: 'USD' },
    benefits: ['Lower downtime risk', 'Faster MTTR', 'Predictable reliability', 'Happier engineers and users'],
    useCases: ['Payments and checkout', 'Core APIs', 'Real-time apps', 'Multi-tenant SaaS'],
    technologies: ['Terraform', 'Kubernetes', 'Prometheus', 'Grafana', 'OpenTelemetry', 'PagerDuty'],
    link: 'https://ziontechgroup.com/services/sre-reliability-retainer',
    icon: '🛠️'
  },
  {
    id: 'rag-enterprise-search',
    name: 'RAG Enterprise Search',
    category: 'ai-services',
    description: 'Retrieval-Augmented Generation for enterprise knowledge: private, secure question answering over documents, tickets, and wikis.',
    features: [
      'Document ingestion and chunking',
      'Embeddings and vector indexing',
      'Source-grounded citations',
      'Access control and redaction',
      'Feedback loops and evaluation',
      'Enterprise SSO integration',
      'Usage analytics and guardrails',
      'Multi-tenant isolation'
    ],
    pricing: { starter: 10000, professional: 35000, enterprise: 120000, currency: 'USD' },
    benefits: ['Reduce search time by 80%', 'Trustworthy answers with citations', 'Protect sensitive data', 'Scale across departments'],
    useCases: ['Support deflection', 'Policy Q&A', 'Sales playbooks', 'Engineering runbooks'],
    technologies: ['RAG', 'Vector DB', 'OpenAI', 'Azure OpenAI', 'LangChain', 'Next.js'],
    link: 'https://ziontechgroup.com/services/rag-enterprise-search',
    icon: '🔎'
  },
  {
    id: 'mlops-platform-and-ops',
    name: 'MLOps Platform & Operations',
    category: 'ai-services',
    description: 'Productionize ML with experiment tracking, model registry, CI/CD for models, monitoring, and drift remediation.',
    features: [
      'Feature store and governance',
      'Experiment tracking',
      'Model registry and promotion gates',
      'Model CI/CD and canarying',
      'Online/offline evaluation',
      'Data and concept drift detection',
      'Shadow deployments',
      'Incident and rollback playbooks'
    ],
    pricing: { starter: 20000, professional: 60000, enterprise: 180000, currency: 'USD' },
    benefits: ['Faster model velocity', 'Reduced production risk', 'Traceable lineage', 'Operational excellence'],
    useCases: ['Personalization', 'Fraud detection', 'Forecasting', 'NLP pipelines'],
    technologies: ['MLflow', 'Kubeflow', 'Vertex AI', 'SageMaker', 'Airflow', 'dbt'],
    link: 'https://ziontechgroup.com/services/mlops-platform-and-ops',
    icon: '🧪'
  },
  {
    id: 'synthetic-data-generation',
    name: 'Synthetic Data Generation',
    category: 'ai-services',
    description: 'Create privacy-preserving synthetic datasets to unblock AI/analytics while meeting compliance and bias-reduction goals.',
    features: [
      'Tabular, image, and text synthesis',
      'Differential privacy controls',
      'Quality and utility evaluation',
      'Bias detection and mitigation',
      'Domain constraint enforcement',
      'Secure data sandboxing',
      'Versioning and governance',
      'Regulatory documentation'
    ],
    pricing: { starter: 15000, professional: 45000, enterprise: 150000, currency: 'USD' },
    benefits: ['Accelerate AI safely', 'Reduce privacy risk', 'Balance rare classes', 'Share data across teams'],
    useCases: ['Healthcare analytics', 'Financial modeling', 'CV pretraining', 'Anomaly detection'],
    technologies: ['GANs', 'Diffusion', 'DP-SGD', 'Python', 'TensorFlow', 'PyTorch'],
    link: 'https://ziontechgroup.com/services/synthetic-data-generation',
    icon: '🧬'
  },
  {
    id: 'llm-evaluation-red-teaming',
    name: 'LLM Evaluation & Red-Teaming',
    category: 'ai-services',
    description: 'Holistic LLM safety and quality evaluation with automated test suites, jailbreak resistance, and bias and toxicity audits.',
    features: [
      'Automated eval harness and metrics',
      'Adversarial prompt libraries',
      'Hallucination and citation checks',
      'PII/PHI leakage testing',
      'Bias, harm, and toxicity audits',
      'Safety guardrail tuning',
      'Incident response runbooks',
      'Reporting for compliance teams'
    ],
    pricing: { starter: 12000, professional: 35000, enterprise: 100000, currency: 'USD' },
    benefits: ['Reduce production incidents', 'Meet regulatory expectations', 'Improve answer quality', 'Strengthen brand trust'],
    useCases: ['Customer support agents', 'Internal copilots', 'Content generation', 'Healthcare/finance assistants'],
    technologies: ['Eval frameworks', 'OpenAI', 'Azure OpenAI', 'Guardrails', 'Vector search'],
    link: 'https://ziontechgroup.com/services/llm-evaluation-red-teaming',
    icon: '🛡️'
  },
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler Pro',
    category: 'micro-saas',
    description: 'Comprehensive social media management platform with AI-powered content optimization and cross-platform scheduling.',
    features: [
      'Multi-platform scheduling',
      'AI content optimization',
      'Hashtag research',
      'Analytics & reporting',
      'Team collaboration',
      'Content calendar',
      'Auto-posting',
      'Engagement tracking'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Save 5+ hours weekly',
      'Increase engagement by 40%',
      'Consistent posting schedule',
      'Data-driven insights'
    ],
    useCases: [
      'Small businesses',
      'Marketing agencies',
      'Content creators',
      'E-commerce brands'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs', 'Redis'],
    link: 'https://ziontechgroup.com/services/social-media-scheduler',
    icon: '📱'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation Suite',
    category: 'micro-saas',
    description: 'Advanced email marketing platform with AI-driven personalization, automation workflows, and detailed analytics.',
    features: [
      'Drag-and-drop email builder',
      'AI personalization',
      'Automation workflows',
      'A/B testing',
      'Advanced segmentation',
      'Deliverability optimization',
      'Analytics dashboard',
      'Template library'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '3x higher open rates',
      'Automated lead nurturing',
      'Personalized customer journeys',
      'ROI tracking'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies',
      'Non-profit organizations'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'SendGrid', 'Redis'],
    link: 'https://ziontechgroup.com/services/email-marketing-automation',
    icon: '📧'
  },
  {
    id: 'invoice-management-system',
    name: 'Smart Invoice Management',
    category: 'micro-saas',
    description: 'Intelligent invoice management system with automated billing, payment tracking, and financial reporting.',
    features: [
      'Automated invoice generation',
      'Payment tracking',
      'Recurring billing',
      'Multi-currency support',
      'Tax calculations',
      'Client portal',
      'Financial reporting',
      'Payment reminders'
    ],
    pricing: {
      starter: 15,
      professional: 39,
      enterprise: 99,
      currency: 'USD'
    },
    benefits: [
      'Reduce billing time by 80%',
      'Faster payment collection',
      'Automated tax compliance',
      'Better cash flow management'
    ],
    useCases: [
      'Freelancers',
      'Small businesses',
      'Consulting firms',
      'Service providers'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'PDF.js'],
    link: 'https://ziontechgroup.com/services/invoice-management',
    icon: '🧾'
  },
  {
    id: 'time-tracking-productivity',
    name: 'Time Tracking & Productivity Suite',
    category: 'micro-saas',
    description: 'Comprehensive time tracking and productivity management platform with AI insights and team collaboration.',
    features: [
      'Automatic time tracking',
      'Project management',
      'Team collaboration',
      'Productivity analytics',
      'Screenshot monitoring',
      'Expense tracking',
      'Reporting dashboard',
      'Mobile apps'
    ],
    pricing: {
      starter: 12,
      professional: 29,
      enterprise: 79,
      currency: 'USD'
    },
    benefits: [
      'Increase productivity by 25%',
      'Accurate project billing',
      'Team performance insights',
      'Better resource allocation'
    ],
    useCases: [
      'Remote teams',
      'Freelancers',
      'Consulting firms',
      'Software development'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'Chart.js'],
    link: 'https://ziontechgroup.com/services/time-tracking',
    icon: '⏱️'
  },
  {
    id: 'crm-sales-pipeline',
    name: 'CRM & Sales Pipeline Manager',
    category: 'micro-saas',
    description: 'Customer relationship management platform with AI-powered lead scoring and sales pipeline automation.',
    features: [
      'Lead management',
      'Sales pipeline tracking',
      'AI lead scoring',
      'Email integration',
      'Task automation',
      'Reporting & analytics',
      'Mobile access',
      'Team collaboration'
    ],
    pricing: {
      starter: 22,
      professional: 55,
      enterprise: 149,
      currency: 'USD'
    },
    benefits: [
      'Increase sales by 30%',
      'Better lead qualification',
      'Automated follow-ups',
      'Sales forecasting'
    ],
    useCases: [
      'Sales teams',
      'Real estate agents',
      'Insurance brokers',
      'B2B companies'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/crm-sales-pipeline',
    icon: '📊'
  },
  {
    id: 'appointment-booking-system',
    name: 'Smart Appointment Booking',
    category: 'micro-saas',
    description: 'Intelligent appointment booking system with automated scheduling, reminders, and payment processing.',
    features: [
      'Online booking calendar',
      'Automated reminders',
      'Payment processing',
      'Multi-service support',
      'Staff scheduling',
      'Client management',
      'Analytics dashboard',
      'Mobile optimization'
    ],
    pricing: {
      starter: 18,
      professional: 45,
      enterprise: 119,
      currency: 'USD'
    },
    benefits: [
      'Reduce no-shows by 50%',
      '24/7 booking availability',
      'Automated payment collection',
      'Streamlined operations'
    ],
    useCases: [
      'Healthcare providers',
      'Beauty salons',
      'Consulting services',
      'Fitness trainers'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Calendar APIs'],
    link: 'https://ziontechgroup.com/services/appointment-booking',
    icon: '📅'
  },
  {
    id: 'inventory-pos-system',
    name: 'Inventory & POS System',
    category: 'micro-saas',
    description: 'Complete point-of-sale and inventory management system for retail and restaurant businesses.',
    features: [
      'Point of sale terminal',
      'Inventory tracking',
      'Barcode scanning',
      'Multi-location support',
      'Sales reporting',
      'Customer management',
      'Payment processing',
      'Staff management'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 229,
      currency: 'USD'
    },
    benefits: [
      'Streamlined operations',
      'Real-time inventory',
      'Better sales insights',
      'Reduced manual work'
    ],
    useCases: [
      'Retail stores',
      'Restaurants',
      'Coffee shops',
      'Boutique stores'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Barcode APIs'],
    link: 'https://ziontechgroup.com/services/inventory-pos',
    icon: '🛒'
  },
  {
    id: 'document-management-system',
    name: 'Document Management & Collaboration',
    category: 'micro-saas',
    description: 'Secure document management platform with version control, collaboration tools, and AI-powered search.',
    features: [
      'Document storage',
      'Version control',
      'Collaborative editing',
      'AI-powered search',
      'Access control',
      'Document templates',
      'Workflow automation',
      'Audit trails'
    ],
    pricing: {
      starter: 20,
      professional: 50,
      enterprise: 139,
      currency: 'USD'
    },
    benefits: [
      'Centralized document storage',
      'Improved collaboration',
      'Version control',
      'Enhanced security'
    ],
    useCases: [
      'Legal firms',
      'Accounting firms',
      'Real estate agencies',
      'Consulting companies'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'AI Search'],
    link: 'https://ziontechgroup.com/services/document-management',
    icon: '📄'
  },
  {
    id: 'survey-feedback-platform',
    name: 'Survey & Feedback Platform',
    category: 'micro-saas',
    description: 'Advanced survey and feedback collection platform with AI analysis and real-time insights.',
    features: [
      'Drag-and-drop survey builder',
      'AI response analysis',
      'Real-time analytics',
      'Multi-channel distribution',
      'Custom branding',
      'Advanced reporting',
      'Integration APIs',
      'Mobile optimization'
    ],
    pricing: {
      starter: 16,
      professional: 42,
      enterprise: 109,
      currency: 'USD'
    },
    benefits: [
      'Better customer insights',
      'Automated analysis',
      'Real-time feedback',
      'Data-driven decisions'
    ],
    useCases: [
      'Market research',
      'Customer satisfaction',
      'Employee feedback',
      'Event feedback'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'Chart.js'],
    link: 'https://ziontechgroup.com/services/survey-feedback',
    icon: '📋'
  },
  {
    id: 'expense-management-system',
    name: 'Expense Management & Reimbursement',
    category: 'micro-saas',
    description: 'Automated expense management system with receipt scanning, approval workflows, and financial reporting.',
    features: [
      'Receipt scanning',
      'Expense categorization',
      'Approval workflows',
      'Reimbursement processing',
      'Policy compliance',
      'Financial reporting',
      'Mobile app',
      'Integration with accounting'
    ],
    pricing: {
      starter: 14,
      professional: 35,
      enterprise: 89,
      currency: 'USD'
    },
    benefits: [
      'Reduce processing time by 70%',
      'Automated compliance',
      'Better expense control',
      'Streamlined reimbursements'
    ],
    useCases: [
      'Small businesses',
      'Startups',
      'Consulting firms',
      'Sales teams'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'OCR', 'Stripe'],
    link: 'https://ziontechgroup.com/services/expense-management',
    icon: '💰'
  },
  {
    id: 'project-management-suite',
    name: 'Smart Project Manager',
    category: 'micro-saas',
    description: 'Intelligent project management platform with AI-powered task prioritization and team collaboration.',
    features: [
      'AI task prioritization',
      'Real-time collaboration',
      'Time tracking',
      'Resource allocation',
      'Progress analytics',
      'Mobile app'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      '30% faster project completion',
      'Improved team productivity',
      'Better resource utilization',
      'Real-time insights'
    ],
    useCases: [
      'Software development teams',
      'Marketing agencies',
      'Construction projects',
      'Event planning'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    link: 'https://ziontechgroup.com/services/project-management',
    icon: '📊'
  },
  {
    id: 'inventory-management',
    name: 'Inventory Tracker Pro',
    category: 'micro-saas',
    description: 'Smart inventory management system with predictive analytics and automated reordering.',
    features: [
      'Real-time inventory tracking',
      'Predictive analytics',
      'Automated reordering',
      'Barcode scanning',
      'Multi-location support',
      'Integration APIs'
    ],
    pricing: {
      starter: 39,
      professional: 89,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Reduce stockouts by 80%',
      'Optimize inventory levels',
      'Automated procurement',
      'Cost savings'
    ],
    useCases: [
      'E-commerce businesses',
      'Retail stores',
      'Manufacturing',
      'Warehouse management'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/inventory-management',
    icon: '📦'
  },
  {
    id: 'customer-support-platform',
    name: 'AI Support Assistant',
    category: 'micro-saas',
    description: 'Intelligent customer support platform with AI chatbots and automated ticket routing.',
    features: [
      'AI-powered chatbots',
      'Smart ticket routing',
      'Knowledge base management',
      'Multi-channel support',
      'Performance analytics',
      'Integration capabilities'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 179,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Faster response times',
      'Reduced support costs',
      'Improved customer satisfaction'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Service businesses',
      'Educational institutions'
    ],
    technologies: ['Next.js', 'OpenAI', 'Redis', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/customer-support',
    icon: '🤖'
  },

  // IT Services
  {
    id: 'cloud-migration',
    name: 'Cloud Migration Expert',
    category: 'it-services',
    description: 'Comprehensive cloud migration services for seamless transition to AWS, Azure, or Google Cloud with zero downtime.',
    features: [
      'Infrastructure assessment',
      'Migration planning',
      'Data migration',
      'Application modernization',
      'Security implementation',
      'Performance optimization',
      'Cost optimization',
      '24/7 monitoring'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 50000,
      currency: 'USD'
    },
    benefits: [
      'Reduced infrastructure costs by 40%',
      'Improved scalability',
      'Enhanced security',
      'Better performance',
      'Disaster recovery'
    ],
    useCases: [
      'Legacy system modernization',
      'Data center consolidation',
      'Disaster recovery setup',
      'Application scaling'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
    link: 'https://ziontechgroup.com/services/cloud-migration',
    icon: '☁️'
  },
  {
    id: 'multi-cloud-strategy',
    name: 'Multi-Cloud Strategy & Management',
    category: 'it-services',
    description: 'Strategic multi-cloud implementation and management to optimize costs, performance, and avoid vendor lock-in.',
    features: [
      'Multi-cloud architecture design',
      'Cost optimization across providers',
      'Disaster recovery planning',
      'Security compliance',
      'Performance monitoring',
      'Vendor management',
      'Automated scaling',
      'Compliance auditing'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Avoid vendor lock-in',
      'Optimize costs across providers',
      'Enhanced disaster recovery',
      'Better performance distribution'
    ],
    useCases: [
      'Enterprise applications',
      'Global businesses',
      'High-availability systems',
      'Compliance requirements'
    ],
    technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Ansible'],
    link: 'https://ziontechgroup.com/services/multi-cloud-strategy',
    icon: '🌐'
  },
  {
    id: 'container-orchestration',
    name: 'Container Orchestration & Kubernetes',
    category: 'it-services',
    description: 'Complete container orchestration setup with Kubernetes, Docker, and microservices architecture implementation.',
    features: [
      'Kubernetes cluster setup',
      'Container orchestration',
      'Microservices architecture',
      'Service mesh implementation',
      'Auto-scaling configuration',
      'Monitoring & logging',
      'CI/CD integration',
      'Security hardening'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability',
      'Better resource utilization',
      'Faster deployments',
      'Enhanced reliability'
    ],
    useCases: [
      'Microservices applications',
      'Scalable web services',
      'DevOps transformation',
      'Legacy application modernization'
    ],
    technologies: ['Kubernetes', 'Docker', 'Istio', 'Helm', 'Prometheus', 'Grafana'],
    link: 'https://ziontechgroup.com/services/container-orchestration',
    icon: '📦'
  },
  {
    id: 'serverless-architecture',
    name: 'Serverless Architecture Implementation',
    category: 'it-services',
    description: 'Serverless architecture design and implementation using AWS Lambda, Azure Functions, and Google Cloud Functions.',
    features: [
      'Serverless architecture design',
      'Function optimization',
      'API Gateway setup',
      'Event-driven architecture',
      'Cost optimization',
      'Performance monitoring',
      'Security implementation',
      'Auto-scaling configuration'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Pay-per-use pricing',
      'Automatic scaling',
      'Reduced operational overhead',
      'Faster time to market'
    ],
    useCases: [
      'API development',
      'Event processing',
      'Data processing pipelines',
      'IoT applications'
    ],
    technologies: ['AWS Lambda', 'Azure Functions', 'GCP Functions', 'API Gateway', 'EventBridge'],
    link: 'https://ziontechgroup.com/services/serverless-architecture',
    icon: '⚡'
  },
  {
    id: 'network-security-audit',
    name: 'Network Security & Infrastructure Audit',
    category: 'it-services',
    description: 'Comprehensive network security assessment and infrastructure hardening to protect against cyber threats.',
    features: [
      'Network vulnerability assessment',
      'Firewall configuration review',
      'Intrusion detection setup',
      'Network segmentation',
      'VPN implementation',
      'Security policy development',
      'Compliance auditing',
      'Incident response planning'
    ],
    pricing: {
      starter: 3500,
      professional: 9500,
      enterprise: 28000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced network security',
      'Compliance with regulations',
      'Reduced security risks',
      'Better threat detection'
    ],
    useCases: [
      'Enterprise networks',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Wireshark', 'Nmap', 'Snort'],
    link: 'https://ziontechgroup.com/services/network-security-audit',
    icon: '🛡️'
  },
  {
    id: 'database-optimization',
    name: 'Database Optimization & Migration',
    category: 'it-services',
    description: 'Database performance optimization, migration, and management services for improved performance and scalability.',
    features: [
      'Database performance tuning',
      'Migration planning & execution',
      'Query optimization',
      'Index optimization',
      'Backup & recovery setup',
      'High availability configuration',
      'Security hardening',
      'Monitoring & alerting'
    ],
    pricing: {
      starter: 3000,
      professional: 8500,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Improved query performance',
      'Reduced downtime',
      'Better scalability',
      'Enhanced data security'
    ],
    useCases: [
      'Legacy database modernization',
      'Performance optimization',
      'Cloud database migration',
      'High-availability setup'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS RDS', 'Azure SQL'],
    link: 'https://ziontechgroup.com/services/database-optimization',
    icon: '🗄️'
  },
  {
    id: 'api-gateway-management',
    name: 'API Gateway & Microservices Management',
    category: 'it-services',
    description: 'API gateway setup and microservices management for scalable, secure, and efficient API operations.',
    features: [
      'API gateway configuration',
      'Rate limiting & throttling',
      'Authentication & authorization',
      'API versioning',
      'Monitoring & analytics',
      'Documentation generation',
      'Load balancing',
      'Security policies'
    ],
    pricing: {
      starter: 2500,
      professional: 7500,
      enterprise: 22000,
      currency: 'USD'
    },
    benefits: [
      'Centralized API management',
      'Enhanced security',
      'Better performance monitoring',
      'Simplified integration'
    ],
    useCases: [
      'Microservices architecture',
      'API-first businesses',
      'Third-party integrations',
      'Mobile app backends'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Istio', 'Nginx'],
    link: 'https://ziontechgroup.com/services/api-gateway-management',
    icon: '🔗'
  },
  {
    id: 'disaster-recovery-planning',
    name: 'Disaster Recovery & Business Continuity',
    category: 'it-services',
    description: 'Comprehensive disaster recovery planning and business continuity solutions to ensure minimal downtime.',
    features: [
      'Disaster recovery planning',
      'Backup strategy implementation',
      'Failover systems setup',
      'Recovery time objectives',
      'Testing & validation',
      'Documentation & procedures',
      'Staff training',
      'Regular audits'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Minimal downtime',
      'Data protection',
      'Business continuity',
      'Compliance adherence'
    ],
    useCases: [
      'Critical business systems',
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms'
    ],
    technologies: ['Veeam', 'Commvault', 'AWS DR', 'Azure Site Recovery', 'VMware SRM'],
    link: 'https://ziontechgroup.com/services/disaster-recovery-planning',
    icon: '🔄'
  },
  {
    id: 'it-infrastructure-monitoring',
    name: 'IT Infrastructure Monitoring & Management',
    category: 'it-services',
    description: '24/7 IT infrastructure monitoring and management services with proactive issue detection and resolution.',
    features: [
      '24/7 infrastructure monitoring',
      'Proactive issue detection',
      'Performance optimization',
      'Capacity planning',
      'Security monitoring',
      'Automated alerting',
      'Incident response',
      'Regular reporting'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Reduced downtime',
      'Proactive issue resolution',
      'Better performance',
      'Cost optimization'
    ],
    useCases: [
      'Enterprise infrastructure',
      'Cloud environments',
      'Hybrid systems',
      'Critical applications'
    ],
    technologies: ['Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'ELK Stack', 'Splunk'],
    link: 'https://ziontechgroup.com/services/it-infrastructure-monitoring',
    icon: '📊'
  },
  {
    id: 'identity-access-management',
    name: 'Identity & Access Management (IAM)',
    category: 'it-services',
    description: 'Comprehensive identity and access management solutions with single sign-on, multi-factor authentication, and role-based access control.',
    features: [
      'Single Sign-On (SSO) setup',
      'Multi-factor authentication',
      'Role-based access control',
      'Identity provisioning',
      'Audit & compliance',
      'Password management',
      'API security',
      'Integration with existing systems'
    ],
    pricing: {
      starter: 3000,
      professional: 9000,
      enterprise: 27000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Simplified user management',
      'Compliance adherence',
      'Reduced IT overhead'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare systems',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Okta', 'Azure AD', 'AWS IAM', 'Auth0', 'SAML', 'OAuth'],
    link: 'https://ziontechgroup.com/services/identity-access-management',
    icon: '🔐'
  },
  {
    id: 'cybersecurity-audit',
    name: 'Cybersecurity Assessment',
    category: 'it-services',
    description: 'Comprehensive cybersecurity audit and penetration testing services to protect your business.',
    features: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security policy review',
      'Compliance auditing',
      'Incident response planning',
      'Security training'
    ],
    pricing: {
      starter: 3000,
      professional: 8000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with regulations',
      'Protect customer data',
      'Reduce security risks'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'E-commerce platforms',
      'Government agencies'
    ],
    technologies: ['Nmap', 'Metasploit', 'Burp Suite', 'OWASP ZAP'],
    link: 'https://ziontechgroup.com/services/cybersecurity',
    icon: '🔒'
  },
  {
    id: 'devops-automation',
    name: 'DevOps Automation Suite',
    category: 'it-services',
    description: 'Complete DevOps automation including CI/CD pipelines, infrastructure as code, and monitoring.',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code',
      'Container orchestration',
      'Monitoring & alerting',
      'Automated testing',
      'Deployment automation'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Faster deployments',
      'Reduced manual errors',
      'Improved reliability',
      'Better collaboration'
    ],
    useCases: [
      'Software development teams',
      'Startups scaling up',
      'Enterprise applications',
      'Microservices architecture'
    ],
    technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Kubernetes', 'Prometheus'],
    link: 'https://ziontechgroup.com/services/devops',
    icon: '⚙️'
  },
  {
    id: 'data-backup-recovery',
    name: 'Data Backup & Recovery',
    category: 'it-services',
    description: 'Comprehensive data backup and disaster recovery solutions to protect your critical business data.',
    features: [
      'Automated backup scheduling',
      'Incremental backups',
      'Disaster recovery planning',
      'Data encryption',
      'Backup testing',
      'Recovery time objectives'
    ],
    pricing: {
      starter: 2000,
      professional: 6000,
      enterprise: 18000,
      currency: 'USD'
    },
    benefits: [
      'Data protection',
      'Business continuity',
      'Compliance adherence',
      'Peace of mind'
    ],
    useCases: [
      'Database systems',
      'File servers',
      'Virtual machines',
      'Cloud applications'
    ],
    technologies: ['Veeam', 'Commvault', 'AWS S3', 'Azure Backup'],
    link: 'https://ziontechgroup.com/services/backup-recovery',
    icon: '💾'
  },

  // AI Services
  {
    id: 'custom-ai-models',
    name: 'Custom AI Model Development',
    category: 'ai-services',
    description: 'Custom AI model development tailored to your specific business needs and data with advanced machine learning techniques.',
    features: [
      'Custom model training',
      'Data preprocessing',
      'Model optimization',
      'API development',
      'Integration support',
      'Ongoing maintenance',
      'Model versioning',
      'Performance monitoring'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Tailored to your data',
      'Better accuracy',
      'Competitive advantage',
      'Scalable solutions',
      'ROI optimization'
    ],
    useCases: [
      'Predictive analytics',
      'Image recognition',
      'Natural language processing',
      'Recommendation systems',
      'Fraud detection'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Python', 'Docker', 'MLflow'],
    link: 'https://ziontechgroup.com/services/custom-ai-models',
    icon: '🧠'
  },
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision & Image Recognition',
    category: 'ai-services',
    description: 'Advanced computer vision solutions for object detection, facial recognition, and image analysis applications.',
    features: [
      'Object detection & classification',
      'Facial recognition systems',
      'Image segmentation',
      'OCR & text extraction',
      'Quality inspection',
      'Real-time processing',
      'Custom model training',
      'API integration'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Automated visual inspection',
      'Enhanced security',
      'Improved accuracy',
      'Cost reduction'
    ],
    useCases: [
      'Manufacturing quality control',
      'Security & surveillance',
      'Medical imaging',
      'Retail analytics',
      'Autonomous vehicles'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'CUDA'],
    link: 'https://ziontechgroup.com/services/computer-vision-solutions',
    icon: '👁️'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing (NLP)',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
    features: [
      'Text classification & analysis',
      'Sentiment analysis',
      'Language translation',
      'Named entity recognition',
      'Text summarization',
      'Question answering systems',
      'Chatbot development',
      'Document processing'
    ],
    pricing: {
      starter: 7000,
      professional: 22000,
      enterprise: 65000,
      currency: 'USD'
    },
    benefits: [
      'Automated text processing',
      'Better customer insights',
      'Multilingual support',
      'Improved efficiency'
    ],
    useCases: [
      'Customer service automation',
      'Content moderation',
      'Market research',
      'Legal document analysis',
      'Social media monitoring'
    ],
    technologies: ['BERT', 'GPT', 'Transformers', 'spaCy', 'NLTK', 'Hugging Face'],
    link: 'https://ziontechgroup.com/services/natural-language-processing',
    icon: '💬'
  },
  {
    id: 'predictive-analytics-platform',
    name: 'Predictive Analytics & Forecasting',
    category: 'ai-services',
    description: 'Advanced predictive analytics platform for business forecasting, demand planning, and risk assessment.',
    features: [
      'Time series forecasting',
      'Demand prediction',
      'Risk assessment models',
      'Customer behavior analysis',
      'Sales forecasting',
      'Inventory optimization',
      'Churn prediction',
      'Real-time predictions'
    ],
    pricing: {
      starter: 9000,
      professional: 28000,
      enterprise: 85000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Reduced risks',
      'Optimized operations',
      'Competitive advantage'
    ],
    useCases: [
      'Supply chain optimization',
      'Financial risk management',
      'Marketing campaign optimization',
      'Healthcare predictions',
      'Energy demand forecasting'
    ],
    technologies: ['Python', 'R', 'TensorFlow', 'Prophet', 'ARIMA', 'XGBoost'],
    link: 'https://ziontechgroup.com/services/predictive-analytics-platform',
    icon: '📈'
  },
  {
    id: 'ai-powered-recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'ai-services',
    description: 'Intelligent recommendation systems for personalized content, products, and services using advanced ML algorithms.',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendation systems',
      'Real-time recommendations',
      'A/B testing framework',
      'Performance analytics',
      'Multi-domain support',
      'Scalable architecture'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Increased engagement',
      'Higher conversion rates',
      'Personalized experiences',
      'Revenue growth'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Social media platforms',
      'News websites',
      'Job matching platforms'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Apache Spark', 'Redis', 'Kafka', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/ai-powered-recommendation-engine',
    icon: '🎯'
  },
  {
    id: 'ai-automation-workflows',
    name: 'AI-Powered Workflow Automation',
    category: 'ai-services',
    description: 'Intelligent workflow automation using AI to streamline business processes and reduce manual intervention.',
    features: [
      'Process mining & analysis',
      'Intelligent document processing',
      'Decision automation',
      'Exception handling',
      'Process optimization',
      'Integration with existing systems',
      'Monitoring & analytics',
      'Continuous improvement'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 80%',
      'Faster processing times',
      'Improved accuracy',
      'Cost savings'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Claims processing',
      'HR workflows',
      'Compliance monitoring'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'OCR', 'RPA', 'ML'],
    link: 'https://ziontechgroup.com/services/ai-automation-workflows',
    icon: '⚙️'
  },
  {
    id: 'ai-data-analytics-platform',
    name: 'AI Data Analytics & Business Intelligence',
    category: 'ai-services',
    description: 'Advanced AI-powered analytics platform for business intelligence, data visualization, and automated insights.',
    features: [
      'Automated data analysis',
      'Natural language queries',
      'Predictive insights',
      'Anomaly detection',
      'Automated reporting',
      'Interactive dashboards',
      'Data visualization',
      'Real-time analytics'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Faster insights',
      'Automated analysis',
      'Better decision making',
      'Reduced manual work'
    ],
    useCases: [
      'Business intelligence',
      'Financial analysis',
      'Marketing analytics',
      'Operations monitoring',
      'Performance tracking'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'Apache Spark', 'TensorFlow', 'D3.js'],
    link: 'https://ziontechgroup.com/services/ai-data-analytics-platform',
    icon: '📊'
  },
  {
    id: 'ai-chatbot-voice-assistant',
    name: 'AI Chatbot & Voice Assistant Development',
    category: 'ai-services',
    description: 'Advanced conversational AI solutions including chatbots, voice assistants, and virtual agents.',
    features: [
      'Natural language understanding',
      'Multi-channel deployment',
      'Voice recognition',
      'Context awareness',
      'Integration with business systems',
      'Analytics & insights',
      'Custom training',
      '24/7 availability'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Scalable customer service',
      'Cost-effective support'
    ],
    useCases: [
      'Customer support',
      'Sales assistance',
      'Appointment booking',
      'FAQ handling',
      'Voice commands'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'Amazon Lex', 'Azure Bot', 'WebRTC', 'Speech APIs'],
    link: 'https://ziontechgroup.com/services/ai-chatbot-voice-assistant',
    icon: '🤖'
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection & Security',
    category: 'ai-services',
    description: 'Advanced AI-powered fraud detection and security systems to protect against financial crimes and cyber threats.',
    features: [
      'Real-time fraud detection',
      'Anomaly detection',
      'Risk scoring',
      'Behavioral analysis',
      'Transaction monitoring',
      'Identity verification',
      'Threat intelligence',
      'Automated response'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Reduced fraud losses',
      'Real-time protection',
      'Improved accuracy',
      'Compliance adherence'
    ],
    useCases: [
      'Financial institutions',
      'E-commerce platforms',
      'Payment processors',
      'Insurance companies',
      'Gaming platforms'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Apache Kafka', 'Redis', 'Elasticsearch', 'MLflow'],
    link: 'https://ziontechgroup.com/services/ai-fraud-detection',
    icon: '🛡️'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation & Safety',
    category: 'ai-services',
    description: 'Intelligent content moderation system using AI to automatically detect and filter inappropriate content.',
    features: [
      'Text content analysis',
      'Image & video moderation',
      'Hate speech detection',
      'Spam filtering',
      'Age-appropriate content',
      'Real-time processing',
      'Custom policy enforcement',
      'Human review integration'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Automated content filtering',
      'Reduced manual moderation',
      'Consistent policy enforcement',
      'Improved user safety'
    ],
    useCases: [
      'Social media platforms',
      'Online communities',
      'E-commerce marketplaces',
      'Educational platforms',
      'Gaming communities'
    ],
    technologies: ['OpenAI', 'Google Vision API', 'AWS Rekognition', 'TensorFlow', 'NLP', 'Computer Vision'],
    link: 'https://ziontechgroup.com/services/ai-content-moderation',
    icon: '🔍'
  },
  {
    id: 'ai-supply-chain-optimization',
    name: 'AI Supply Chain Optimization',
    category: 'ai-services',
    description: 'AI-powered supply chain optimization for demand forecasting, inventory management, and logistics optimization.',
    features: [
      'Demand forecasting',
      'Inventory optimization',
      'Route optimization',
      'Supplier risk assessment',
      'Quality prediction',
      'Cost optimization',
      'Real-time monitoring',
      'Predictive maintenance'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Reduced inventory costs',
      'Improved efficiency',
      'Better demand planning',
      'Risk mitigation'
    ],
    useCases: [
      'Manufacturing companies',
      'Retail chains',
      'Logistics providers',
      'Food & beverage industry',
      'Pharmaceutical companies'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Optimization algorithms', 'IoT', 'Blockchain'],
    link: 'https://ziontechgroup.com/services/ai-supply-chain-optimization',
    icon: '🚚'
  },
  {
    id: 'ai-process-automation',
    name: 'AI Process Automation',
    category: 'ai-services',
    description: 'Intelligent process automation using AI to streamline business operations and reduce manual work.',
    features: [
      'Process analysis',
      'RPA implementation',
      'AI decision making',
      'Workflow automation',
      'Integration with existing systems',
      'Performance monitoring'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce manual work by 70%',
      'Improve accuracy',
      'Faster processing',
      'Cost savings'
    ],
    useCases: [
      'Invoice processing',
      'Customer onboarding',
      'Data entry automation',
      'Report generation'
    ],
    technologies: ['UiPath', 'Automation Anywhere', 'Python', 'OCR'],
    link: 'https://ziontechgroup.com/services/ai-automation',
    icon: '🤖'
  },
  {
    id: 'ai-analytics-platform',
    name: 'AI Analytics Platform',
    category: 'ai-services',
    description: 'Advanced analytics platform powered by AI for deep business insights and predictive analytics.',
    features: [
      'Data visualization',
      'Predictive analytics',
      'Real-time dashboards',
      'Automated reporting',
      'Anomaly detection',
      'Custom alerts'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Predictive insights',
      'Real-time monitoring',
      'Competitive advantage'
    ],
    useCases: [
      'Business intelligence',
      'Sales forecasting',
      'Risk assessment',
      'Performance monitoring'
    ],
    technologies: ['Tableau', 'Power BI', 'Python', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/ai-analytics',
    icon: '📈'
  },
  {
    id: 'ai-chatbot-development',
    name: 'AI Chatbot Development',
    category: 'ai-services',
    description: 'Custom AI chatbot development for customer service, sales, and internal communication.',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration APIs',
      'Analytics dashboard',
      'Custom training',
      '24/7 availability'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduced response times',
      'Scalable customer service',
      'Cost-effective support'
    ],
    useCases: [
      'Customer support',
      'Sales qualification',
      'Appointment booking',
      'FAQ handling'
    ],
    technologies: ['OpenAI GPT', 'Dialogflow', 'React', 'Node.js', 'MongoDB'],
    link: 'https://ziontechgroup.com/services/ai-chatbot',
    icon: '💬'
  },

  // Additional Micro SaaS Services
  {
    id: 'social-media-scheduler',
    name: 'Social Media Scheduler Pro',
    category: 'micro-saas',
    description: 'Advanced social media management platform with AI-powered content optimization and cross-platform scheduling.',
    features: [
      'Multi-platform scheduling',
      'AI content optimization',
      'Hashtag research',
      'Analytics & insights',
      'Team collaboration',
      'Content calendar'
    ],
    pricing: {
      starter: 15,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Save 10+ hours per week',
      'Increase engagement by 40%',
      'Consistent brand presence',
      'Data-driven content strategy'
    ],
    useCases: [
      'Marketing agencies',
      'Small businesses',
      'Content creators',
      'E-commerce brands'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs'],
    link: 'https://ziontechgroup.com/services/social-media-scheduler',
    icon: '📱'
  },
  {
    id: 'expense-tracker',
    name: 'Smart Expense Tracker',
    category: 'micro-saas',
    description: 'Intelligent expense management with receipt scanning, categorization, and automated reporting.',
    features: [
      'Receipt scanning with OCR',
      'Automatic categorization',
      'Multi-currency support',
      'Tax preparation',
      'Team expense management',
      'Mobile app'
    ],
    pricing: {
      starter: 12,
      professional: 35,
      enterprise: 95,
      currency: 'USD'
    },
    benefits: [
      'Reduce expense processing time by 80%',
      'Accurate tax deductions',
      'Real-time expense insights',
      'Compliance with regulations'
    ],
    useCases: [
      'Small businesses',
      'Freelancers',
      'Sales teams',
      'Remote workers'
    ],
    technologies: ['React Native', 'Python', 'PostgreSQL', 'OCR'],
    link: 'https://ziontechgroup.com/services/expense-tracker',
    icon: '💰'
  },
  {
    id: 'lead-scoring-platform',
    name: 'AI Lead Scoring Platform',
    category: 'micro-saas',
    description: 'Intelligent lead scoring system that uses AI to identify and prioritize high-value prospects.',
    features: [
      'AI-powered lead scoring',
      'Behavioral tracking',
      'CRM integration',
      'Custom scoring models',
      'Real-time alerts',
      'Performance analytics'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
      'Increase conversion rates by 35%',
      'Focus on high-value leads',
      'Automated lead qualification',
      'Better sales efficiency'
    ],
    useCases: [
      'Sales teams',
      'Marketing agencies',
      'B2B companies',
      'Lead generation services'
    ],
    technologies: ['Machine Learning', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/lead-scoring',
    icon: '🎯'
  },
  {
    id: 'time-tracking-analytics',
    name: 'Time Tracking Analytics Pro',
    category: 'micro-saas',
    description: 'Advanced time tracking with productivity analytics, project insights, and team performance metrics.',
    features: [
      'Automatic time tracking',
      'Productivity analytics',
      'Project profitability analysis',
      'Team performance metrics',
      'Client billing integration',
      'Mobile time tracking'
    ],
    pricing: {
      starter: 8,
      professional: 25,
      enterprise: 65,
      currency: 'USD'
    },
    benefits: [
      'Increase billable hours by 25%',
      'Better project profitability',
      'Improved team productivity',
      'Accurate client billing'
    ],
    useCases: [
      'Consulting firms',
      'Freelancers',
      'Remote teams',
      'Project-based businesses'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Analytics'],
    link: 'https://ziontechgroup.com/services/time-tracking',
    icon: '⏱️'
  },
  {
    id: 'email-marketing-automation',
    name: 'Email Marketing Automation Suite',
    category: 'micro-saas',
    description: 'Comprehensive email marketing platform with advanced automation, segmentation, and personalization.',
    features: [
      'Drag-and-drop email builder',
      'Advanced automation workflows',
      'Behavioral segmentation',
      'A/B testing',
      'Deliverability optimization',
      'Analytics & reporting'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      'Increase email ROI by 300%',
      'Automated customer journeys',
      'Personalized messaging',
      'Better deliverability rates'
    ],
    useCases: [
      'E-commerce businesses',
      'SaaS companies',
      'Marketing agencies',
      'Content creators'
    ],
    technologies: ['React', 'Node.js', 'Redis', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/email-marketing',
    icon: '📧'
  },
  {
    id: 'website-speed-optimizer',
    name: 'Website Speed Optimizer',
    category: 'micro-saas',
    description: 'AI-powered website performance optimization tool that automatically improves loading speeds and Core Web Vitals.',
    features: [
      'Automatic image optimization',
      'Code minification',
      'CDN integration',
      'Core Web Vitals monitoring',
      'Performance reports',
      'One-click optimization'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Improve page speed by 60%',
      'Better SEO rankings',
      'Reduced bounce rates',
      'Improved user experience'
    ],
    useCases: [
      'Website owners',
      'Digital agencies',
      'E-commerce sites',
      'Content websites'
    ],
    technologies: ['AI Optimization', 'CDN', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/speed-optimizer',
    icon: '⚡'
  },
  {
    id: 'api-monitoring-platform',
    name: 'API Monitoring Platform',
    category: 'micro-saas',
    description: 'Comprehensive API monitoring and testing platform with real-time alerts and performance analytics.',
    features: [
      'Real-time API monitoring',
      'Automated testing',
      'Performance analytics',
      'Uptime monitoring',
      'Error tracking',
      'SLA monitoring'
    ],
    pricing: {
      starter: 25,
      professional: 65,
      enterprise: 175,
      currency: 'USD'
    },
    benefits: [
      '99.9% API uptime',
      'Faster issue resolution',
      'Better user experience',
      'Proactive monitoring'
    ],
    useCases: [
      'API developers',
      'SaaS companies',
      'Mobile app developers',
      'Enterprise applications'
    ],
    technologies: ['Node.js', 'MongoDB', 'Monitoring APIs', 'React'],
    link: 'https://ziontechgroup.com/services/api-monitoring',
    icon: '🔍'
  },
  {
    id: 'password-manager-business',
    name: 'Business Password Manager',
    category: 'micro-saas',
    description: 'Enterprise-grade password management solution with team sharing, security policies, and audit trails.',
    features: [
      'Secure password storage',
      'Team password sharing',
      'Security policies',
      'Audit trails',
      'SSO integration',
      'Mobile apps'
    ],
    pricing: {
      starter: 3,
      professional: 8,
      enterprise: 20,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Reduced password-related breaches',
      'Centralized access management',
      'Compliance with security standards'
    ],
    useCases: [
      'Small businesses',
      'Remote teams',
      'IT departments',
      'Security-conscious organizations'
    ],
    technologies: ['Encryption', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://ziontechgroup.com/services/password-manager',
    icon: '🔐'
  },
  {
    id: 'form-builder-platform',
    name: 'Advanced Form Builder',
    category: 'micro-saas',
    description: 'Powerful form builder with conditional logic, payment integration, and advanced analytics.',
    features: [
      'Drag-and-drop builder',
      'Conditional logic',
      'Payment integration',
      'Multi-step forms',
      'Analytics dashboard',
      'API access'
    ],
    pricing: {
      starter: 15,
      professional: 45,
      enterprise: 120,
      currency: 'USD'
    },
    benefits: [
      'Increase form conversions by 40%',
      'Reduce form abandonment',
      'Streamlined data collection',
      'Better user experience'
    ],
    useCases: [
      'Lead generation',
      'Event registration',
      'Customer feedback',
      'Order processing'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment APIs'],
    link: 'https://ziontechgroup.com/services/form-builder',
    icon: '📋'
  },
  {
    id: 'screenshot-api-service',
    name: 'Screenshot API Service',
    category: 'micro-saas',
    description: 'High-performance screenshot API for websites, PDFs, and web applications with advanced customization options.',
    features: [
      'High-quality screenshots',
      'PDF generation',
      'Custom dimensions',
      'Mobile device simulation',
      'Batch processing',
      'API integration'
    ],
    pricing: {
      starter: 20,
      professional: 60,
      enterprise: 160,
      currency: 'USD'
    },
    benefits: [
      'Fast screenshot generation',
      'Scalable infrastructure',
      'Multiple output formats',
      'Developer-friendly API'
    ],
    useCases: [
      'Web development',
      'Quality assurance',
      'Documentation',
      'Social media automation'
    ],
    technologies: ['Puppeteer', 'Node.js', 'AWS', 'React'],
    link: 'https://ziontechgroup.com/services/screenshot-api',
    icon: '📸'
  },

  // Additional IT Services
  {
    id: 'kubernetes-orchestration',
    name: 'Kubernetes Orchestration',
    category: 'it-services',
    description: 'Complete Kubernetes setup, management, and optimization for containerized applications.',
    features: [
      'Cluster setup & configuration',
      'Auto-scaling implementation',
      'Service mesh integration',
      'Monitoring & logging',
      'Security hardening',
      'Disaster recovery'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Improved application reliability',
      'Automatic scaling',
      'Reduced infrastructure costs',
      'Better resource utilization'
    ],
    useCases: [
      'Microservices architecture',
      'Cloud-native applications',
      'High-traffic websites',
      'Enterprise applications'
    ],
    technologies: ['Kubernetes', 'Docker', 'Helm', 'Prometheus', 'Istio'],
    link: 'https://ziontechgroup.com/services/kubernetes',
    icon: '☸️'
  },
  {
    id: 'api-gateway-setup',
    name: 'API Gateway & Management',
    category: 'it-services',
    description: 'Enterprise API gateway setup with rate limiting, authentication, monitoring, and analytics.',
    features: [
      'API gateway configuration',
      'Rate limiting & throttling',
      'Authentication & authorization',
      'API versioning',
      'Analytics & monitoring',
      'Developer portal'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Centralized API management',
      'Enhanced security',
      'Better performance',
      'Simplified integration'
    ],
    useCases: [
      'Microservices architecture',
      'Third-party integrations',
      'Mobile app backends',
      'Enterprise systems'
    ],
    technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Nginx'],
    link: 'https://ziontechgroup.com/services/api-gateway',
    icon: '🚪'
  },
  {
    id: 'database-optimization',
    name: 'Database Performance Optimization',
    category: 'it-services',
    description: 'Comprehensive database optimization including query tuning, indexing, and performance monitoring.',
    features: [
      'Query performance analysis',
      'Index optimization',
      'Database tuning',
      'Performance monitoring',
      'Backup optimization',
      'Scaling strategies'
    ],
    pricing: {
      starter: 4000,
      professional: 12000,
      enterprise: 35000,
      currency: 'USD'
    },
    benefits: [
      'Faster query execution',
      'Reduced resource usage',
      'Better scalability',
      'Improved user experience'
    ],
    useCases: [
      'High-traffic applications',
      'Data-intensive systems',
      'E-commerce platforms',
      'Analytics systems'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    link: 'https://ziontechgroup.com/services/database-optimization',
    icon: '🗄️'
  },
  {
    id: 'network-security-audit',
    name: 'Network Security Audit',
    category: 'it-services',
    description: 'Comprehensive network security assessment including penetration testing and vulnerability scanning.',
    features: [
      'Network vulnerability scanning',
      'Penetration testing',
      'Firewall configuration review',
      'Wireless security audit',
      'Compliance assessment',
      'Security recommendations'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      'Identify security vulnerabilities',
      'Compliance with standards',
      'Protect against threats',
      'Improve security posture'
    ],
    useCases: [
      'Corporate networks',
      'Healthcare organizations',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Nmap', 'Nessus', 'Metasploit', 'Wireshark', 'Burp Suite'],
    link: 'https://ziontechgroup.com/services/network-security',
    icon: '🛡️'
  },
  {
    id: 'disaster-recovery-planning',
    name: 'Disaster Recovery Planning',
    category: 'it-services',
    description: 'Comprehensive disaster recovery planning and implementation for business continuity.',
    features: [
      'Business impact analysis',
      'Recovery time objectives',
      'Backup strategy design',
      'Failover implementation',
      'Testing & validation',
      'Documentation & training'
    ],
    pricing: {
      starter: 7000,
      professional: 20000,
      enterprise: 60000,
      currency: 'USD'
    },
    benefits: [
      'Minimize downtime',
      'Protect critical data',
      'Ensure business continuity',
      'Compliance requirements'
    ],
    useCases: [
      'Enterprise systems',
      'Critical applications',
      'Data centers',
      'Cloud infrastructure'
    ],
    technologies: ['AWS', 'Azure', 'VMware', 'Veeam', 'Commvault'],
    link: 'https://ziontechgroup.com/services/disaster-recovery',
    icon: '🔄'
  },
  {
    id: 'microservices-architecture',
    name: 'Microservices Architecture Design',
    category: 'it-services',
    description: 'Complete microservices architecture design and implementation for scalable applications.',
    features: [
      'Architecture design',
      'Service decomposition',
      'API design',
      'Container orchestration',
      'Service mesh implementation',
      'Monitoring setup'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Improved scalability',
      'Better maintainability',
      'Faster development',
      'Technology flexibility'
    ],
    useCases: [
      'Legacy system modernization',
      'High-scale applications',
      'Multi-team development',
      'Cloud-native applications'
    ],
    technologies: ['Docker', 'Kubernetes', 'Istio', 'gRPC', 'Redis'],
    link: 'https://ziontechgroup.com/services/microservices',
    icon: '🏗️'
  },
  {
    id: 'performance-monitoring',
    name: 'Application Performance Monitoring',
    category: 'it-services',
    description: 'Comprehensive APM solution with real-time monitoring, alerting, and performance optimization.',
    features: [
      'Real-time performance monitoring',
      'Error tracking & alerting',
      'User experience monitoring',
      'Infrastructure monitoring',
      'Custom dashboards',
      'Performance optimization'
    ],
    pricing: {
      starter: 3000,
      professional: 9000,
      enterprise: 25000,
      currency: 'USD'
    },
    benefits: [
      'Proactive issue detection',
      'Improved application performance',
      'Better user experience',
      'Reduced downtime'
    ],
    useCases: [
      'Web applications',
      'Mobile apps',
      'API services',
      'Enterprise systems'
    ],
    technologies: ['New Relic', 'Datadog', 'Prometheus', 'Grafana', 'ELK Stack'],
    link: 'https://ziontechgroup.com/services/apm',
    icon: '📊'
  },
  {
    id: 'identity-access-management',
    name: 'Identity & Access Management',
    category: 'it-services',
    description: 'Enterprise IAM solution with SSO, multi-factor authentication, and role-based access control.',
    features: [
      'Single Sign-On (SSO)',
      'Multi-factor authentication',
      'Role-based access control',
      'User provisioning',
      'Audit & compliance',
      'API security'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 40000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security',
      'Simplified user management',
      'Compliance adherence',
      'Reduced IT overhead'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare systems',
      'Financial institutions',
      'Government agencies'
    ],
    technologies: ['Okta', 'Azure AD', 'Auth0', 'SAML', 'OAuth'],
    link: 'https://ziontechgroup.com/services/iam',
    icon: '👤'
  },

  // Additional AI Services
  {
    id: 'computer-vision-solutions',
    name: 'Computer Vision Solutions',
    category: 'ai-services',
    description: 'Custom computer vision solutions for image recognition, object detection, and visual analytics.',
    features: [
      'Image classification',
      'Object detection',
      'Facial recognition',
      'OCR & text extraction',
      'Quality inspection',
      'Real-time processing'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Automated visual inspection',
      'Improved accuracy',
      'Cost reduction',
      '24/7 operation'
    ],
    useCases: [
      'Manufacturing quality control',
      'Retail analytics',
      'Security surveillance',
      'Medical imaging'
    ],
    technologies: ['TensorFlow', 'OpenCV', 'YOLO', 'PyTorch', 'CUDA'],
    link: 'https://ziontechgroup.com/services/computer-vision',
    icon: '👁️'
  },
  {
    id: 'natural-language-processing',
    name: 'Natural Language Processing',
    category: 'ai-services',
    description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
    features: [
      'Text classification',
      'Sentiment analysis',
      'Named entity recognition',
      'Language translation',
      'Text summarization',
      'Question answering'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Automated text processing',
      'Better customer insights',
      'Improved content management',
      'Multilingual support'
    ],
    useCases: [
      'Customer feedback analysis',
      'Content moderation',
      'Document processing',
      'Chatbot enhancement'
    ],
    technologies: ['BERT', 'GPT', 'spaCy', 'NLTK', 'Transformers'],
    link: 'https://ziontechgroup.com/services/nlp',
    icon: '📝'
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics Platform',
    category: 'ai-services',
    description: 'Advanced predictive analytics using machine learning for forecasting and trend analysis.',
    features: [
      'Demand forecasting',
      'Risk assessment',
      'Customer behavior prediction',
      'Market trend analysis',
      'Anomaly detection',
      'Real-time predictions'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decisions',
      'Reduced risks',
      'Improved efficiency',
      'Competitive advantage'
    ],
    useCases: [
      'Supply chain optimization',
      'Financial risk management',
      'Sales forecasting',
      'Maintenance scheduling'
    ],
    technologies: ['Scikit-learn', 'XGBoost', 'Prophet', 'Python', 'Apache Spark'],
    link: 'https://ziontechgroup.com/services/predictive-analytics',
    icon: '🔮'
  },
  {
    id: 'recommendation-engine',
    name: 'AI Recommendation Engine',
    category: 'ai-services',
    description: 'Intelligent recommendation system for personalized content, products, and services.',
    features: [
      'Collaborative filtering',
      'Content-based filtering',
      'Hybrid recommendations',
      'Real-time personalization',
      'A/B testing framework',
      'Performance analytics'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Increased engagement',
      'Higher conversion rates',
      'Better user experience',
      'Revenue growth'
    ],
    useCases: [
      'E-commerce platforms',
      'Streaming services',
      'Content platforms',
      'Social media'
    ],
    technologies: ['TensorFlow', 'Apache Spark', 'Redis', 'Python', 'MLlib'],
    link: 'https://ziontechgroup.com/services/recommendation-engine',
    icon: '🎯'
  },
  {
    id: 'ai-powered-search',
    name: 'AI-Powered Search Engine',
    category: 'ai-services',
    description: 'Intelligent search solution with semantic understanding, auto-complete, and personalized results.',
    features: [
      'Semantic search',
      'Auto-complete suggestions',
      'Personalized results',
      'Multi-language support',
      'Voice search',
      'Search analytics'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Better search accuracy',
      'Improved user experience',
      'Increased engagement',
      'Reduced bounce rates'
    ],
    useCases: [
      'E-commerce search',
      'Document management',
      'Knowledge bases',
      'Content platforms'
    ],
    technologies: ['Elasticsearch', 'BERT', 'Vector Search', 'Python', 'React'],
    link: 'https://ziontechgroup.com/services/ai-search',
    icon: '🔍'
  },
  {
    id: 'ai-content-moderation',
    name: 'AI Content Moderation',
    category: 'ai-services',
    description: 'Automated content moderation using AI to detect and filter inappropriate content across platforms.',
    features: [
      'Text content filtering',
      'Image content detection',
      'Video content analysis',
      'Real-time moderation',
      'Custom policy enforcement',
      'Human review integration'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      '24/7 content monitoring',
      'Reduced moderation costs',
      'Consistent policy enforcement',
      'Scalable solution'
    ],
    useCases: [
      'Social media platforms',
      'User-generated content',
      'Online communities',
      'Marketplace platforms'
    ],
    technologies: ['Computer Vision', 'NLP', 'TensorFlow', 'OpenCV', 'Python'],
    link: 'https://ziontechgroup.com/services/content-moderation',
    icon: '🛡️'
  },
  {
    id: 'ai-fraud-detection',
    name: 'AI Fraud Detection System',
    category: 'ai-services',
    description: 'Advanced fraud detection using machine learning to identify and prevent fraudulent activities.',
    features: [
      'Real-time fraud detection',
      'Transaction monitoring',
      'Behavioral analysis',
      'Risk scoring',
      'Alert system',
      'False positive reduction'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduced fraud losses',
      'Faster detection',
      'Lower false positives',
      'Compliance adherence'
    ],
    useCases: [
      'Financial institutions',
      'E-commerce platforms',
      'Payment processors',
      'Insurance companies'
    ],
    technologies: ['Machine Learning', 'Anomaly Detection', 'Python', 'Apache Spark', 'TensorFlow'],
    link: 'https://ziontechgroup.com/services/fraud-detection',
    icon: '🚨'
  },
  {
    id: 'ai-voice-assistant',
    name: 'AI Voice Assistant Development',
    category: 'ai-services',
    description: 'Custom voice assistant development with natural language understanding and multi-platform integration.',
    features: [
      'Voice recognition',
      'Natural language understanding',
      'Multi-platform support',
      'Custom wake words',
      'Integration APIs',
      'Analytics dashboard'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Hands-free operation',
      'Improved accessibility',
      'Enhanced user experience',
      'Multi-language support'
    ],
    useCases: [
      'Smart home automation',
      'Customer service',
      'Healthcare applications',
      'Automotive systems'
    ],
    technologies: ['Speech Recognition', 'NLP', 'WebRTC', 'Python', 'Node.js'],
    link: 'https://ziontechgroup.com/services/voice-assistant',
    icon: '🎤'
  },

  // Additional Innovative Micro SaaS Services
  {
    id: 'ai-email-responder',
    name: 'AI Email Responder Pro',
    category: 'micro-saas',
    description: 'Intelligent email management system that automatically reads, categorizes, and responds to emails using advanced AI.',
    features: [
      'Smart email categorization',
      'Automated response generation',
      'Priority email flagging',
      'Sentiment analysis',
      'Multi-language support',
      'Calendar integration',
      'Follow-up automation',
      'Email analytics'
    ],
    pricing: {
      starter: 24,
      professional: 59,
      enterprise: 149,
      currency: 'USD'
    },
    benefits: [
      'Save 5+ hours daily on email management',
      'Never miss important emails',
      'Consistent professional responses',
      'Improved email organization'
    ],
    useCases: [
      'Busy executives',
      'Customer service teams',
      'Sales professionals',
      'Small business owners'
    ],
    technologies: ['OpenAI GPT-4', 'React', 'Node.js', 'PostgreSQL', 'Email APIs'],
    link: 'https://ziontechgroup.com/services/ai-email-responder',
    icon: '📧'
  },
  {
    id: 'ecommerce-return-manager',
    name: 'E-Commerce Return Manager',
    category: 'micro-saas',
    description: 'Automated return management system for e-commerce businesses with intelligent processing and customer self-service.',
    features: [
      'Automated return requests',
      'Return label generation',
      'Return tracking',
      'Refund processing',
      'Return analytics',
      'Customer self-service portal',
      'Inventory restocking',
      'Return policy enforcement'
    ],
    pricing: {
      starter: 35,
      professional: 85,
      enterprise: 229,
      currency: 'USD'
    },
    benefits: [
      'Reduce return processing time by 70%',
      'Improve customer satisfaction',
      'Automated refund processing',
      'Better return analytics'
    ],
    useCases: [
      'E-commerce stores',
      'Online retailers',
      'Marketplace sellers',
      'Fashion brands'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Shipping APIs'],
    link: 'https://ziontechgroup.com/services/ecommerce-return-manager',
    icon: '🔄'
  },
  {
    id: 'seo-content-optimizer',
    name: 'AI SEO Content Optimizer',
    category: 'micro-saas',
    description: 'AI-powered SEO optimization tool that analyzes and improves web content for better search engine rankings.',
    features: [
      'Content analysis & scoring',
      'Keyword optimization suggestions',
      'Meta tag generation',
      'Content readability improvement',
      'Competitor analysis',
      'Ranking tracking',
      'Content gap analysis',
      'Performance reporting'
    ],
    pricing: {
      starter: 39,
      professional: 99,
      enterprise: 249,
      currency: 'USD'
    },
    benefits: [
      'Improve search rankings by 40%',
      'Increase organic traffic',
      'Better content performance',
      'Automated SEO optimization'
    ],
    useCases: [
      'Content marketers',
      'SEO agencies',
      'Blog owners',
      'E-commerce sites'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'SEO APIs', 'Analytics'],
    link: 'https://ziontechgroup.com/services/seo-content-optimizer',
    icon: '🔍'
  },
  {
    id: 'customer-support-helpdesk',
    name: 'AI Customer Support Helpdesk',
    category: 'micro-saas',
    description: 'Comprehensive customer support platform with AI chatbots, ticket management, and knowledge base.',
    features: [
      'AI-powered chatbots',
      'Ticket management system',
      'Knowledge base creation',
      'Live chat integration',
      'Multi-channel support',
      'Performance analytics',
      'Customer satisfaction tracking',
      'Automated responses'
    ],
    pricing: {
      starter: 29,
      professional: 79,
      enterprise: 199,
      currency: 'USD'
    },
    benefits: [
      '24/7 customer support',
      'Reduce support costs by 60%',
      'Faster response times',
      'Improved customer satisfaction'
    ],
    useCases: [
      'SaaS companies',
      'E-commerce businesses',
      'Service providers',
      'Online marketplaces'
    ],
    technologies: ['AI Chatbots', 'React', 'Node.js', 'MongoDB', 'WebSocket'],
    link: 'https://ziontechgroup.com/services/customer-support-helpdesk',
    icon: '🎧'
  },
  {
    id: 'ai-talent-matching',
    name: 'AI Talent Matching Platform',
    category: 'micro-saas',
    description: 'Intelligent platform that matches businesses with verified tech professionals using advanced AI algorithms.',
    features: [
      'AI-powered matching algorithm',
      'Skills verification system',
      'Project requirement analysis',
      'Portfolio showcase',
      'Communication tools',
      'Payment processing',
      'Rating & review system',
      'Project management tools'
    ],
    pricing: {
      starter: 49,
      professional: 129,
      enterprise: 349,
      currency: 'USD'
    },
    benefits: [
      'Find perfect talent matches',
      'Reduce hiring time by 50%',
      'Verified professional profiles',
      'Streamlined project management'
    ],
    useCases: [
      'Startups',
      'Small businesses',
      'Freelance platforms',
      'Tech companies'
    ],
    technologies: ['AI/ML', 'React', 'Node.js', 'PostgreSQL', 'Matching Algorithms'],
    link: 'https://ziontechgroup.com/services/ai-talent-matching',
    icon: '👥'
  },
  {
    id: 'micro-saas-marketplace',
    name: 'Micro SaaS Marketplace',
    category: 'micro-saas',
    description: 'Curated marketplace for innovative micro SaaS applications that transform business operations.',
    features: [
      'Curated SaaS applications',
      'One-click installations',
      'Unified billing system',
      'Integration management',
      'Usage analytics',
      'Support center',
      'API marketplace',
      'Custom integrations'
    ],
    pricing: {
      starter: 19,
      professional: 49,
      enterprise: 129,
      currency: 'USD'
    },
    benefits: [
      'Access to 100+ micro SaaS tools',
      'Unified management dashboard',
      'Reduced integration complexity',
      'Cost-effective solution bundle'
    ],
    useCases: [
      'Small businesses',
      'Startups',
      'Digital agencies',
      'Remote teams'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Payment APIs', 'SSO'],
    link: 'https://ziontechgroup.com/services/micro-saas-marketplace',
    icon: '🏪'
  },
  {
    id: 'quantum-computing-simulator',
    name: 'Quantum Computing Simulator',
    category: 'micro-saas',
    description: 'Cloud-based quantum computing simulator for research, education, and optimization problems.',
    features: [
      'Quantum circuit simulator',
      'Optimization algorithms',
      'Cryptography tools',
      'Educational resources',
      'API access',
      'Collaboration tools',
      'Performance analytics',
      'Custom quantum algorithms'
    ],
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 799,
      currency: 'USD'
    },
    benefits: [
      'Access to quantum computing power',
      'Solve complex optimization problems',
      'Educational quantum programming',
      'Research collaboration tools'
    ],
    useCases: [
      'Research institutions',
      'Universities',
      'Financial services',
      'Pharmaceutical companies'
    ],
    technologies: ['Quantum Computing', 'Python', 'Qiskit', 'React', 'Cloud Computing'],
    link: 'https://ziontechgroup.com/services/quantum-computing-simulator',
    icon: '⚛️'
  },
  {
    id: 'blockchain-analytics-platform',
    name: 'Blockchain Analytics Platform',
    category: 'micro-saas',
    description: 'Comprehensive blockchain analytics and monitoring platform for cryptocurrency and DeFi applications.',
    features: [
      'Real-time blockchain monitoring',
      'Transaction analysis',
      'DeFi protocol tracking',
      'Risk assessment tools',
      'Portfolio analytics',
      'Compliance reporting',
      'API integration',
      'Custom alerts'
    ],
    pricing: {
      starter: 79,
      professional: 199,
      enterprise: 499,
      currency: 'USD'
    },
    benefits: [
      'Real-time blockchain insights',
      'Risk management tools',
      'Compliance automation',
      'Investment decision support'
    ],
    useCases: [
      'Cryptocurrency exchanges',
      'DeFi protocols',
      'Investment firms',
      'Regulatory compliance'
    ],
    technologies: ['Blockchain', 'React', 'Node.js', 'GraphQL', 'Real-time Analytics'],
    link: 'https://ziontechgroup.com/services/blockchain-analytics',
    icon: '⛓️'
  },

  // Additional Advanced IT Services
  {
    id: 'quantum-computing-solutions',
    name: 'Quantum Computing Solutions',
    category: 'it-services',
    description: 'Cutting-edge quantum computing implementation for optimization, cryptography, and scientific research.',
    features: [
      'Quantum algorithm development',
      'Optimization problem solving',
      'Quantum cryptography implementation',
      'Research collaboration',
      'Performance benchmarking',
      'Quantum software development',
      'Hardware integration',
      'Training & education'
    ],
    pricing: {
      starter: 25000,
      professional: 75000,
      enterprise: 200000,
      currency: 'USD'
    },
    benefits: [
      'Solve complex optimization problems',
      'Enhanced security with quantum cryptography',
      'Competitive advantage in research',
      'Future-proof technology adoption'
    ],
    useCases: [
      'Financial optimization',
      'Drug discovery',
      'Cryptography research',
      'Supply chain optimization'
    ],
    technologies: ['Quantum Computing', 'Qiskit', 'Cirq', 'Python', 'Quantum Hardware'],
    link: 'https://ziontechgroup.com/services/quantum-computing-solutions',
    icon: '⚛️'
  },
  {
    id: 'edge-computing-infrastructure',
    name: 'Edge Computing Infrastructure',
    category: 'it-services',
    description: 'Edge computing infrastructure setup for low-latency applications and IoT deployments.',
    features: [
      'Edge server deployment',
      'IoT device management',
      'Low-latency optimization',
      'Data processing at edge',
      'Security implementation',
      'Monitoring & management',
      'Auto-scaling configuration',
      'Integration with cloud'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-low latency processing',
      'Reduced bandwidth costs',
      'Improved reliability',
      'Real-time data processing'
    ],
    useCases: [
      'IoT applications',
      'Autonomous vehicles',
      'Real-time analytics',
      'Gaming platforms'
    ],
    technologies: ['Kubernetes', 'Docker', 'Edge Computing', 'IoT', '5G'],
    link: 'https://ziontechgroup.com/services/edge-computing-infrastructure',
    icon: '🌐'
  },
  {
    id: 'zero-trust-security-architecture',
    name: 'Zero Trust Security Architecture',
    category: 'it-services',
    description: 'Comprehensive zero trust security implementation for modern enterprise environments.',
    features: [
      'Identity verification',
      'Device trust assessment',
      'Network segmentation',
      'Continuous monitoring',
      'Policy enforcement',
      'Threat detection',
      'Incident response',
      'Compliance management'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Enhanced security posture',
      'Reduced attack surface',
      'Compliance adherence',
      'Better threat visibility'
    ],
    useCases: [
      'Enterprise organizations',
      'Government agencies',
      'Healthcare systems',
      'Financial institutions'
    ],
    technologies: ['Zero Trust', 'Identity Management', 'Network Security', 'SIEM', 'SOAR'],
    link: 'https://ziontechgroup.com/services/zero-trust-security',
    icon: '🔒'
  },
  {
    id: '5g-network-implementation',
    name: '5G Network Implementation',
    category: 'it-services',
    description: '5G network infrastructure design and implementation for high-speed, low-latency connectivity.',
    features: [
      '5G network planning',
      'Infrastructure deployment',
      'Performance optimization',
      'Security implementation',
      'IoT integration',
      'Edge computing setup',
      'Monitoring & management',
      'Compliance & testing'
    ],
    pricing: {
      starter: 50000,
      professional: 150000,
      enterprise: 400000,
      currency: 'USD'
    },
    benefits: [
      'Ultra-fast connectivity',
      'Low latency applications',
      'Massive IoT support',
      'Future-ready infrastructure'
    ],
    useCases: [
      'Smart cities',
      'Industrial automation',
      'Healthcare systems',
      'Autonomous vehicles'
    ],
    technologies: ['5G', 'Network Infrastructure', 'IoT', 'Edge Computing', 'SDN'],
    link: 'https://ziontechgroup.com/services/5g-network-implementation',
    icon: '📡'
  },
  {
    id: 'zero-trust-security',
    name: 'Zero Trust Security Architecture',
    category: 'it-services',
    description: 'Complete blockchain infrastructure setup and smart contract development for enterprise applications.',
    features: [
      'Blockchain network setup',
      'Smart contract development',
      'DeFi protocol implementation',
      'NFT marketplace development',
      'Security auditing',
      'Performance optimization',
      'Integration services',
      'Maintenance & support'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Decentralized applications',
      'Enhanced security',
      'Transparent transactions',
      'Reduced intermediaries'
    ],
    useCases: [
      'Supply chain management',
      'Financial services',
      'Digital identity',
      'Asset tokenization'
    ],
    technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'IPFS'],
    link: 'https://ziontechgroup.com/services/blockchain-infrastructure',
    icon: '⛓️'
  },
  {
    id: '5g-network-implementation',
    name: '5G Network Implementation & Optimization',
    category: 'it-services',
    description: 'Complete AI infrastructure setup with MLOps pipeline for scalable machine learning operations.',
    features: [
      'AI infrastructure design',
      'MLOps pipeline setup',
      'Model deployment automation',
      'Data pipeline implementation',
      'Model monitoring',
      'A/B testing framework',
      'GPU cluster management',
      'Cost optimization'
    ],
    pricing: {
      starter: 18000,
      professional: 55000,
      enterprise: 140000,
      currency: 'USD'
    },
    benefits: [
      'Scalable AI operations',
      'Automated model deployment',
      'Reduced time to market',
      'Cost-effective AI infrastructure'
    ],
    useCases: [
      'AI startups',
      'Enterprise AI adoption',
      'Research institutions',
      'Data science teams'
    ],
    technologies: ['Kubernetes', 'Docker', 'TensorFlow', 'MLflow', 'GPU Computing'],
    link: 'https://ziontechgroup.com/services/ai-infrastructure-setup',
    icon: '🤖'
  },

  // Additional Innovative AI Services
  {
    id: 'ai-powered-recruiting-platform',
    name: 'AI Recruiting Platform',
    category: 'ai-services',
    description: 'Intelligent recruiting platform that automates screening, improves candidate matching, and enhances hiring experience.',
    features: [
      'AI-powered resume screening',
      'Candidate matching algorithms',
      'Video interview analysis',
      'Skills assessment automation',
      'Bias detection & mitigation',
      'Predictive hiring analytics',
      'Integration with ATS',
      'Candidate experience optimization'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Reduce hiring time by 60%',
      'Improve candidate quality',
      'Eliminate hiring bias',
      'Better candidate experience'
    ],
    useCases: [
      'HR departments',
      'Recruiting agencies',
      'Tech companies',
      'Enterprise organizations'
    ],
    technologies: ['NLP', 'Computer Vision', 'Machine Learning', 'React', 'Node.js'],
    link: 'https://ziontechgroup.com/services/ai-recruiting-platform',
    icon: '👔'
  },
  {
    id: 'ai-powered-intelligence',
    name: 'AI-Powered Business Intelligence',
    category: 'ai-services',
    description: 'Advanced AI-powered intelligence platform with predictive analytics, smart recommendations, and automated workflows.',
    features: [
      'Predictive analytics',
      'Smart recommendations',
      'Automated workflows',
      'Natural language queries',
      'Real-time insights',
      'Anomaly detection',
      'Custom dashboards',
      'Integration APIs'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decision making',
      'Automated business insights',
      'Predictive business intelligence',
      'Competitive advantage'
    ],
    useCases: [
      'Business intelligence',
      'Financial analysis',
      'Marketing optimization',
      'Operations management'
    ],
    technologies: ['Machine Learning', 'Data Analytics', 'Python', 'TensorFlow', 'Apache Spark'],
    link: 'https://ziontechgroup.com/services/ai-powered-intelligence',
    icon: '🧠'
  },
  {
    id: 'enterprise-security-ai',
    name: 'Enterprise Security AI',
    category: 'ai-services',
    description: 'Bank-grade security with SOC 2 compliance and end-to-end encryption using advanced AI threat detection.',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Real-time monitoring',
      'Automated incident response',
      'Compliance management',
      'Data protection',
      'Access control',
      'Audit trails'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Advanced threat protection',
      'SOC 2 compliance',
      'Automated security response',
      'Comprehensive audit trails'
    ],
    useCases: [
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise corporations'
    ],
    technologies: ['AI Security', 'Machine Learning', 'Threat Detection', 'Compliance', 'Encryption'],
    link: 'https://ziontechgroup.com/services/enterprise-security-ai',
    icon: '🛡️'
  },
  {
    id: 'cutting-edge-technology-stack',
    name: 'Cutting-Edge Technology Integration',
    category: 'ai-services',
    description: 'Integration of cutting-edge technologies including machine learning, blockchain, cloud computing, IoT, and cybersecurity.',
    features: [
      'Machine learning integration',
      'Blockchain implementation',
      'Cloud computing optimization',
      'IoT device management',
      'Cybersecurity enhancement',
      'Data analytics platform',
      'API development',
      'System integration'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Future-proof technology stack',
      'Integrated solution approach',
      'Competitive advantage',
      'Scalable architecture'
    ],
    useCases: [
      'Digital transformation',
      'Legacy system modernization',
      'Innovation projects',
      'Technology consulting'
    ],
    technologies: ['AI/ML', 'Blockchain', 'Cloud Computing', 'IoT', 'Cybersecurity', 'Data Analytics'],
    link: 'https://ziontechgroup.com/services/cutting-edge-technology-stack',
    icon: '⚡'
  },
  {
    id: 'ai-integration-services',
    name: 'AI Integration Services',
    category: 'ai-services',
    description: 'Seamless AI implementation services to help businesses integrate AI into existing systems and processes.',
    features: [
      'AI system integration',
      'Legacy system modernization',
      'API development',
      'Data pipeline setup',
      'Model deployment',
      'Performance optimization',
      'Training & support',
      'Maintenance services'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Seamless AI adoption',
      'Minimal disruption to operations',
      'Improved system efficiency',
      'Future-ready architecture'
    ],
    useCases: [
      'Enterprise AI adoption',
      'Legacy system upgrade',
      'Process automation',
      'Digital transformation'
    ],
    technologies: ['AI Integration', 'API Development', 'System Integration', 'Data Engineering', 'Cloud Computing'],
    link: 'https://ziontechgroup.com/services/ai-integration-services',
    icon: '🔗'
  },
  {
    id: 'cloud-solutions-ai',
    name: 'AI-Enhanced Cloud Solutions',
    category: 'ai-services',
    description: 'Scalable cloud infrastructure solutions enhanced with AI for intelligent resource management and optimization.',
    features: [
      'AI-powered resource optimization',
      'Automated scaling',
      'Intelligent monitoring',
      'Cost optimization',
      'Performance analytics',
      'Predictive maintenance',
      'Security enhancement',
      'Multi-cloud management'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Intelligent cloud management',
      'Reduced operational costs',
      'Improved performance',
      'Automated optimization'
    ],
    useCases: [
      'Cloud migration',
      'Infrastructure optimization',
      'Cost management',
      'Performance improvement'
    ],
    technologies: ['Cloud Computing', 'AI/ML', 'Kubernetes', 'Docker', 'AWS', 'Azure', 'GCP'],
    link: 'https://ziontechgroup.com/services/cloud-solutions-ai',
    icon: '☁️'
  },
  {
    id: 'it-onsite-services-ai',
    name: 'AI-Enhanced IT Onsite Services',
    category: 'ai-services',
    description: 'Professional on-site technical support enhanced with AI for predictive maintenance and intelligent troubleshooting.',
    features: [
      'AI-powered diagnostics',
      'Predictive maintenance',
      'Intelligent troubleshooting',
      'Remote monitoring',
      'Automated issue resolution',
      'Performance optimization',
      'Security assessment',
      '24/7 support'
    ],
    pricing: {
      starter: 5000,
      professional: 15000,
      enterprise: 45000,
      currency: 'USD'
    },
    benefits: [
      'Proactive issue prevention',
      'Faster problem resolution',
      'Reduced downtime',
      'Intelligent support'
    ],
    useCases: [
      'Enterprise IT support',
      'Small business IT',
      'Remote office support',
      'Emergency IT services'
    ],
    technologies: ['AI Diagnostics', 'Remote Monitoring', 'Predictive Analytics', 'IT Support', 'Automation'],
    link: 'https://ziontechgroup.com/services/it-onsite-services-ai',
    icon: '🔧'
  },
  {
    id: 'comprehensive-ai-solutions',
    name: 'Comprehensive AI Solutions',
    category: 'ai-services',
    description: 'End-to-end AI technology solutions to meet all business needs, from development to deployment and maintenance.',
    features: [
      'AI strategy consulting',
      'Custom AI development',
      'Data engineering',
      'Model training & deployment',
      'Integration services',
      'Performance monitoring',
      'Maintenance & support',
      'Training & education'
    ],
    pricing: {
      starter: 20000,
      professional: 60000,
      enterprise: 150000,
      currency: 'USD'
    },
    benefits: [
      'Complete AI transformation',
      'End-to-end support',
      'Customized solutions',
      'Long-term partnership'
    ],
    useCases: [
      'AI transformation projects',
      'Enterprise AI adoption',
      'Innovation initiatives',
      'Competitive advantage'
    ],
    technologies: ['AI/ML', 'Data Science', 'Cloud Computing', 'DevOps', 'Integration', 'Consulting'],
    link: 'https://ziontechgroup.com/services/comprehensive-ai-solutions',
    icon: '🎯'
  },
  {
    id: 'ai-solutions-transformation',
    name: 'AI Solutions for Business Transformation',
    category: 'ai-services',
    description: 'Transform businesses with AI by offering solutions that enhance operations, improve decision-making, and drive innovation.',
    features: [
      'Business process automation',
      'Decision support systems',
      'Innovation acceleration',
      'Operational efficiency',
      'Customer experience enhancement',
      'Revenue optimization',
      'Risk management',
      'Competitive intelligence'
    ],
    pricing: {
      starter: 15000,
      professional: 45000,
      enterprise: 120000,
      currency: 'USD'
    },
    benefits: [
      'Complete business transformation',
      'Improved operational efficiency',
      'Enhanced decision making',
      'Competitive advantage'
    ],
    useCases: [
      'Digital transformation',
      'Business process optimization',
      'Innovation projects',
      'Market expansion'
    ],
    technologies: ['AI/ML', 'Business Intelligence', 'Process Automation', 'Data Analytics', 'Innovation'],
    link: 'https://ziontechgroup.com/services/ai-solutions-transformation',
    icon: '🚀'
  },
  {
    id: 'cybersecurity-ai-enhanced',
    name: 'AI-Enhanced Cybersecurity',
    category: 'ai-services',
    description: 'Protect digital assets with comprehensive security solutions enhanced by AI for threat detection and incident response.',
    features: [
      'AI threat detection',
      'Behavioral analysis',
      'Automated incident response',
      'Vulnerability assessment',
      'Compliance management',
      'Security monitoring',
      'Threat intelligence',
      'Forensic analysis'
    ],
    pricing: {
      starter: 10000,
      professional: 30000,
      enterprise: 90000,
      currency: 'USD'
    },
    benefits: [
      'Advanced threat protection',
      'Automated security response',
      'Reduced security risks',
      'Compliance adherence'
    ],
    useCases: [
      'Enterprise security',
      'Financial institutions',
      'Healthcare organizations',
      'Government agencies'
    ],
    technologies: ['AI Security', 'Threat Detection', 'Machine Learning', 'Cybersecurity', 'Incident Response'],
    link: 'https://ziontechgroup.com/services/cybersecurity-ai-enhanced',
    icon: '🔐'
  },
  {
    id: 'cloud-devops-ai',
    name: 'AI-Enhanced Cloud & DevOps',
    category: 'ai-services',
    description: 'Scale infrastructure with cloud solutions and DevOps practices enhanced by AI for improved efficiency and agility.',
    features: [
      'AI-powered infrastructure scaling',
      'Intelligent deployment automation',
      'Predictive performance monitoring',
      'Automated testing & quality assurance',
      'Cost optimization',
      'Security automation',
      'Continuous integration',
      'Performance analytics'
    ],
    pricing: {
      starter: 12000,
      professional: 35000,
      enterprise: 100000,
      currency: 'USD'
    },
    benefits: [
      'Intelligent infrastructure management',
      'Automated DevOps processes',
      'Improved efficiency',
      'Cost optimization'
    ],
    useCases: [
      'Cloud migration',
      'DevOps transformation',
      'Infrastructure optimization',
      'Performance improvement'
    ],
    technologies: ['Cloud Computing', 'DevOps', 'AI/ML', 'Kubernetes', 'Docker', 'CI/CD'],
    link: 'https://ziontechgroup.com/services/cloud-devops-ai',
    icon: '⚙️'
  },
  {
    id: 'data-analytics-ai',
    name: 'AI-Powered Data Analytics',
    category: 'ai-services',
    description: 'Unlock insights from data using AI to drive business decisions and strategies with advanced analytics.',
    features: [
      'AI-powered data analysis',
      'Predictive analytics',
      'Real-time insights',
      'Automated reporting',
      'Data visualization',
      'Anomaly detection',
      'Custom dashboards',
      'Integration APIs'
    ],
    pricing: {
      starter: 8000,
      professional: 25000,
      enterprise: 75000,
      currency: 'USD'
    },
    benefits: [
      'Data-driven decision making',
      'Automated insights generation',
      'Predictive business intelligence',
      'Competitive advantage'
    ],
    useCases: [
      'Business intelligence',
      'Financial analysis',
      'Marketing optimization',
      'Operations management'
    ],
    technologies: ['Data Analytics', 'AI/ML', 'Python', 'TensorFlow', 'Apache Spark', 'Visualization'],
    link: 'https://ziontechgroup.com/services/data-analytics-ai',
    icon: '📊'
  },
  {
    id: 'team-talent-ai',
    name: 'AI-Enhanced Team & Talent Solutions',
    category: 'ai-services',
    description: 'Find expert professionals and build high-performing teams using AI-powered talent matching and management.',
    features: [
      'AI talent matching',
      'Skills assessment',
      'Team performance analytics',
      'Project optimization',
      'Resource allocation',
      'Performance monitoring',
      'Collaboration tools',
      'Success prediction'
    ],
    pricing: {
      starter: 6000,
      professional: 18000,
      enterprise: 55000,
      currency: 'USD'
    },
    benefits: [
      'Optimal team composition',
      'Improved project success rates',
      'Better resource utilization',
      'Enhanced team performance'
    ],
    useCases: [
      'Project staffing',
      'Team building',
      'Resource optimization',
      'Performance management'
    ],
    technologies: ['AI/ML', 'Talent Management', 'Performance Analytics', 'Team Collaboration', 'Project Management'],
    link: 'https://ziontechgroup.com/services/team-talent-ai',
    icon: '👥'
  }
];

export const getServicesByCategory = (category: Service['category']) => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};