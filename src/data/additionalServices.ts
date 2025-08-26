export type AdditionalService = {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
  price: {
    starter: number;
    professional?: number;
    enterprise?: number;
    currency: string;
  };
  pricingModel?: 'monthly' | 'yearly' | 'project-based' | 'one-time';
  features: string[];
  benefits: string[];
  targetAudience: string[];
  deliveryTime: string;
  marketPrice: string;
  rating: number;
  reviewCount: number;
  status?: 'Active' | 'Beta' | 'Coming Soon';
  tags: string[];
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
};

export const ADDITIONAL_MICRO_SAAS: AdditionalService[] = [
  {
    id: 'msa-rag-site-assistant',
    title: 'AI Website RAG Assistant',
    description: 'Embed a retrieval‑augmented AI assistant on your site to answer visitor questions from your docs, blogs, and FAQs. Includes ingestion pipeline, security rules, and analytics.',
    category: 'Micro SAAS',
    subcategory: 'AI & Customer Support',
    price: { starter: 299, professional: 799, enterprise: 2499, currency: '$' },
    pricingModel: 'monthly',
    features: [
      'RAG over your content (sitemaps, PDFs, docs)',
      'Multi‑language Q&A with citations',
      'Admin console with redaction and guardrails',
      'Zapier/Make and Webhook integrations',
    ],
    benefits: [
      'Deflect up to 40% of repetitive tickets',
      'Improve lead qualification with instant answers',
      'Own your data; deploy to VPC if required',
    ],
    targetAudience: ['B2B SaaS', 'E‑commerce', 'Support teams', 'Marketing'],
    deliveryTime: '1–2 weeks',
    marketPrice: '$300–$2,500/month',
    rating: 4.8,
    reviewCount: 58,
    status: 'Active',
    tags: ['AI', 'RAG', 'Chatbot', 'Support'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'msa-ai-meeting-minutes',
    title: 'AI Meeting Minutes & Action Items',
    description: 'Automatic meeting transcription, summarization, and task extraction with CRM/PM integrations (HubSpot, Jira, Notion, Asana).',
    category: 'Micro SAAS',
    subcategory: 'Productivity',
    price: { starter: 199, professional: 499, enterprise: 1499, currency: '$' },
    pricingModel: 'monthly',
    features: [
      'Voice diarization and topic detection',
      'Action item extraction with owners/due dates',
      'Auto push to Jira/Asana/Notion',
      'Security controls and PII redaction',
    ],
    benefits: [
      'Save 4–6 hours per week per team',
      'Create accountable follow‑ups automatically',
      'Improve velocity and knowledge retention',
    ],
    targetAudience: ['Agencies', 'Product teams', 'Consulting', 'Sales'],
    deliveryTime: '3–5 days',
    marketPrice: '$150–$1,500/month',
    rating: 4.7,
    reviewCount: 41,
    status: 'Active',
    tags: ['AI', 'Transcription', 'Productivity'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'msa-invoice-ocr',
    title: 'Invoice OCR & Reconciliation',
    description: 'Turn PDFs/emails into structured data and auto‑reconcile against POs and bank feeds. Export to QuickBooks, Xero, or Netsuite.',
    category: 'Micro SAAS',
    subcategory: 'Finance Automation',
    price: { starter: 149, professional: 399, enterprise: 1299, currency: '$' },
    pricingModel: 'monthly',
    features: [
      'High‑accuracy OCR with feedback loops',
      'Duplicate and fraud detection',
      '2‑way sync with accounting systems',
      'Human‑in‑the‑loop review queue',
    ],
    benefits: [
      'Cut AP processing costs by 60%+',
      'Reduce errors and chargebacks',
      'Accelerate month‑end close',
    ],
    targetAudience: ['SMBs', 'Accounting teams', 'E‑commerce', 'Operations'],
    deliveryTime: '1–2 weeks',
    marketPrice: '$150–$1,300/month',
    rating: 4.8,
    reviewCount: 63,
    status: 'Active',
    tags: ['OCR', 'Finance', 'Automation'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];

export const ADDITIONAL_IT_SERVICES: AdditionalService[] = [
  {
    id: 'it-mdr-24x7',
    title: 'Managed Detection & Response (24×7 MDR)',
    description: 'Round‑the‑clock SOC with EDR/SIEM, threat hunting, and incident response playbooks tailored to your environment.',
    category: 'Cybersecurity',
    subcategory: 'Managed Security',
    price: { starter: 2500, professional: 6000, enterprise: 15000, currency: '$' },
    pricingModel: 'monthly',
    features: [
      'Endpoint/Server EDR and cloud SIEM',
      'Threat intel and continuous hunting',
      'Response orchestration (SOAR)',
      'Regulatory reporting (SOC2/ISO/GDPR)',
    ],
    benefits: [
      'Reduce dwell time and breach impact',
      'Lower total cost vs in‑house SOC',
      'Audit‑ready evidence and reports',
    ],
    targetAudience: ['Mid‑market', 'Enterprise', 'Healthcare', 'Finance'],
    deliveryTime: '2–4 weeks onboarding',
    marketPrice: '$3,000–$20,000/month',
    rating: 4.9,
    reviewCount: 77,
    status: 'Active',
    tags: ['MDR', 'SIEM', 'EDR', 'SOAR'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'it-soc2-readiness',
    title: 'SOC 2 Readiness & Continuous Compliance',
    description: 'Gap assessment, policy packs, control implementation, and auditor coordination with automated evidence collection.',
    category: 'Cybersecurity',
    subcategory: 'Compliance',
    price: { starter: 12000, professional: 30000, enterprise: 65000, currency: '$' },
    pricingModel: 'project-based',
    features: [
      'Readiness assessment and risk register',
      'Control design and implementation',
      'Automated evidence workflows',
      'Audit liaison and remediation',
    ],
    benefits: [
      'Accelerate time‑to‑attestation',
      'Reduce audit burden and surprises',
      'Increase enterprise trust and win‑rates',
    ],
    targetAudience: ['SaaS', 'FinTech', 'HealthTech', 'Data processors'],
    deliveryTime: '6–12 weeks',
    marketPrice: '$15,000–$80,000 project',
    rating: 4.8,
    reviewCount: 52,
    status: 'Active',
    tags: ['SOC2', 'Compliance', 'GRC'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'it-m365-gws-admin',
    title: 'M365/Google Workspace Admin & Hardening',
    description: 'Administration, security baselining, identity protection, and data loss prevention for Microsoft 365 and Google Workspace.',
    category: 'Cloud & DevOps',
    subcategory: 'Productivity Suites',
    price: { starter: 1500, professional: 4000, enterprise: 9000, currency: '$' },
    pricingModel: 'monthly',
    features: [
      'Conditional access, MFA, SSO/SCIM',
      'Email security and DLP policies',
      'Posture hardening and audit alerts',
      'Backup and retention policies',
    ],
    benefits: [
      'Reduce account takeover risk',
      'Improve compliance posture',
      'Increase employee productivity',
    ],
    targetAudience: ['SMB', 'Mid‑market', 'Non‑profits', 'Education'],
    deliveryTime: '1–2 weeks',
    marketPrice: '$1,500–$10,000/month',
    rating: 4.7,
    reviewCount: 38,
    status: 'Active',
    tags: ['M365', 'Google Workspace', 'Identity', 'DLP'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];

export const ADDITIONAL_AI_SERVICES: AdditionalService[] = [
  {
    id: 'ai-fine-tuning',
    title: 'Custom Model Fine‑Tuning & Evaluation',
    description: 'Collect data, fine‑tune open‑weight or provider models, and evaluate with robust frameworks to meet domain‑specific KPIs.',
    category: 'AI & Machine Learning',
    subcategory: 'Model Engineering',
    price: { starter: 15000, professional: 35000, enterprise: 90000, currency: '$' },
    pricingModel: 'project-based',
    features: [
      'Data curation and labeling pipeline',
      'Fine‑tuning and RAG hybrid patterns',
      'Offline/online evaluation and guardrails',
      'Latency/cost optimization and caching',
    ],
    benefits: [
      'Meet accuracy/latency SLAs',
      'Protect IP and sensitive data',
      'Lower inference costs at scale',
    ],
    targetAudience: ['Enterprises', 'Gov/Regulated', 'Research teams'],
    deliveryTime: '4–12 weeks',
    marketPrice: '$20,000–$120,000 project',
    rating: 4.9,
    reviewCount: 31,
    status: 'Active',
    tags: ['LLM', 'Fine‑tuning', 'Evaluation', 'RAG'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  },
  {
    id: 'ai-rag-integration',
    title: 'RAG Integration for Enterprise Data',
    description: 'Connect data lakes, SharePoint, Google Drive, and databases to an AI assistant with secure connectors and access controls.',
    category: 'AI & Machine Learning',
    subcategory: 'AI Integration',
    price: { starter: 12000, professional: 28000, enterprise: 75000, currency: '$' },
    pricingModel: 'project-based',
    features: [
      'Connectors for S3, GCS, Drive, SharePoint',
      'Document chunking and embeddings tuning',
      'Row‑level and document‑level ACLs',
      'Observability and feedback loop',
    ],
    benefits: [
      'Unlock self‑serve analytics and support',
      'Improve accuracy with domain context',
      'Govern access with enterprise controls',
    ],
    targetAudience: ['Data teams', 'Support', 'Ops', 'Compliance'],
    deliveryTime: '2–6 weeks',
    marketPrice: '$15,000–$80,000 project',
    rating: 4.8,
    reviewCount: 29,
    status: 'Active',
    tags: ['RAG', 'Data', 'Security'],
    contactInfo: {
      phone: '+1 302 464 0950',
      email: 'kleber@ziontechgroup.com',
      website: 'https://ziontechgroup.com'
    }
  }
];