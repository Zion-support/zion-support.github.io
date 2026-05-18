export type NavigationLink = {
  name: string;
  href: string;
  aliases?: readonly string[];
};

export const PRIMARY_NAV_LINKS: readonly NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export const SOLUTION_LINKS: readonly NavigationLink[] = [
  { name: 'All Solutions', href: '/solutions' },
  { name: 'Healthcare', href: '/solutions/healthcare' },
  { name: 'Financial Services', href: '/solutions/financial-services' },
  { name: 'Manufacturing & Industrial', href: '/solutions/manufacturing-industrial' },
  { name: 'E‑Commerce & Retail', href: '/solutions/ecommerce-retail' },
  { name: 'Technology & SaaS', href: '/solutions/technology-and-saas' },
  { name: 'Logistics & Supply Chain', href: '/solutions/logistics-supply-chain' },
  { name: 'Government & Public Sector', href: '/solutions/government-and-public-sector' },
  { name: 'Insurance', href: '/solutions/insurance' },
  { name: 'Industries', href: '/industries' },
];
// Resource Links
export const RESOURCE_LINKS: readonly NavigationLink[] = [
  { name: 'Search', href: '/search' },
  { name: 'Pricing Calculator', href: '/pricing-calculator' },
  { name: 'Proposal Generator', href: '/proposal-generator' },
  { name: 'Service Comparison', href: '/tools/service-comparison' },
  { name: 'Service Recommender', href: '/tools/service-recommender' },
  { name: 'Client Portal', href: '/portal' },
];

export const FEATURED_AI_SERVICE_LINKS: readonly NavigationLink[] = [
  { name: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
  {
    name: 'AI-Powered DevOps',
    href: '/ai-powered-devops',
    aliases: ['/zion-devops-automation'],
  },
  {
    name: 'AI Email Analyzer',
    href: '/ai-powered-email-analyzer',
    aliases: ['/zion-ai-email-assistant'],
  },
  { name: 'Zion AI Code Assistant', href: '/zion-ai-code-assistant' },
  { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer' },
  { name: 'Zion AI Customer Support Pro', href: '/zion-ai-customer-support-pro' },
  { name: 'Zion AI Predictive Analytics', href: '/zion-ai-predictive-analytics' },
  { name: 'Zion Security Shield', href: '/zion-security-shield' },
];

export const AI_SERVICE_LINKS: readonly NavigationLink[] = [
  ...FEATURED_AI_SERVICE_LINKS,
  {
    name: 'Cybersecurity Audit',
    href: '/it-services/cybersecurity-audit',
    aliases: ['/zion-cybersecurity-audit'],
  },
  { name: 'Zion Cloud Vault', href: '/zion-cloud-vault' },
  { name: 'Property Management AI', href: '/property-management-ai' },
  { name: 'Supply Chain Optimizer', href: '/supply-chain-optimizer' },
  { name: 'Online Learning Platform', href: '/online-learning-platform' },
  { name: 'Zion AI API Tester', href: '/zion-ai-api-tester' },
  { name: 'Zion AI Database Optimizer', href: '/zion-ai-database-optimizer' },
  { name: 'Zion AI Knowledge Base', href: '/zion-ai-knowledge-base' },
  { name: 'Zion AI Help Desk', href: '/zion-ai-help-desk' },
  { name: 'Zion AI Quality Assurance', href: '/zion-ai-quality-assurance' },
  { name: 'Zion AI Report Generator', href: '/zion-ai-report-generator' },
  { name: 'Zion AI Risk Assessor', href: '/zion-ai-risk-assessor' },
  { name: 'Data Engineering', href: '/it-services/data-engineering' },
  { name: 'API Development', href: '/it-services/api-development' },
  { name: 'Mobile Development', href: '/it-services/mobile-development' },
  { name: 'Generative AI Enterprise', href: '/ai-services/generative-ai-enterprise' },
  { name: 'AI Agents & Autonomous Workflows', href: '/ai-services/ai-agents-autonomous' },
  { name: 'AI Multimodal Intelligence', href: '/ai-services/ai-multimodal-intelligence' },
  { name: 'AI RAG & Knowledge Systems', href: '/ai-services/ai-rag-knowledge-systems' },
  { name: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },
  { name: 'AI Model Orchestration', href: '/ai-services/ai-model-orchestration' },
  { name: 'AI Copilot & Enterprise Assistants', href: '/ai-services/ai-copilot-enterprise' },
  { name: 'AI Observability & MLOps', href: '/ai-services/ai-observability-mlops' },
  { name: 'AI Strategy & Roadmap', href: '/ai-services/ai-strategy-roadmap' },
  { name: 'AI Integration & APIs', href: '/ai-services/ai-integration-apis' },
  { name: 'AI Edge & Real-Time Inference', href: '/ai-services/ai-edge-realtime-inference' },
  { name: 'AI for Regulated Industries', href: '/ai-services/ai-regulated-industries' },
  { name: 'AI Foundation Models & Custom Training', href: '/ai-services/ai-foundation-models-custom-training' },
  { name: 'AI Security & Responsible AI', href: '/ai-services/ai-security-responsible-ai' },
  { name: 'Fine-Tuning & Alignment Pipelines', href: '/ai-services/ai-finetuning-alignment-pipelines' },
  { name: 'Long-Horizon AI Memory & Agents', href: '/ai-services/ai-memory-agents-long-horizon' },
  { name: 'AI Agent Safety & Evaluation', href: '/ai-services/ai-agent-safety-evaluation' },
  { name: 'Enterprise Context Engineering', href: '/ai-services/ai-context-engineering-enterprise' },
  { name: 'Autonomous Growth Intelligence', href: '/ai-services/autonomous-growth-intelligence' },
  {
    name: 'Advanced AI & Enterprise Intelligence Hub',
    href: '/ai-services/advanced-ai-enterprise-intelligence-hub',
  },
  { name: 'Business Intelligence', href: '/ai-services/business-intelligence' },
  { name: 'Content Generation', href: '/ai-services/content-generation' },
  { name: 'Customer Experience', href: '/ai-services/customer-experience' },
  { name: 'Document Processing', href: '/ai-services/document-processing' },
  { name: 'Energy Management', href: '/ai-services/energy-management' },
  { name: 'Fraud Detection', href: '/ai-services/fraud-detection' },
  { name: 'HR Analytics', href: '/ai-services/hr-analytics' },
  { name: 'Marketing Automation', href: '/ai-services/marketing-automation' },
  { name: 'Predictive Maintenance', href: '/ai-services/predictive-maintenance' },
  { name: 'Process Automation', href: '/ai-services/process-automation' },
  { name: 'Quality Assurance', href: '/ai-services/quality-assurance' },
  { name: 'Supply Chain', href: '/ai-services/supply-chain' },
  { name: 'AI Computer Vision', href: '/ai-services/ai-computer-vision' },
  { name: 'AI Knowledge Management', href: '/ai-services/ai-knowledge-management' },
  { name: 'AI Testing & QA', href: '/ai-services/ai-testing-qa' },
  { name: 'AI Translation & Localization', href: '/ai-services/ai-translation-services' },
  { name: 'AI Employee Experience', href: '/ai-services/ai-employee-experience' },
  { name: 'AI Document Intelligence', href: '/ai-services/ai-document-intelligence' },
  { name: 'Accessibility & WCAG Compliance', href: '/it-services/accessibility-compliance' },
  { name: 'Cloud Cost Optimization (FinOps)', href: '/it-services/cloud-cost-optimization' },
  { name: 'Supply Chain Management', href: '/it-services/supply-chain-management' },
  // === New standalone services added 2026-05-12 ===
  { name: 'AI-Powered DevOps Guardian', href: '/ai-devops-guardian' },
  { name: 'Real-Time Fraud Shield', href: '/real-time-fraud-shield' },
  { name: 'Autonomous Lead-to-Cash', href: '/autonomous-lead-to-cash' },
  { name: 'Intelligent Document Processing', href: '/intelligent-document-processing' },
  { name: 'Predictive Maintenance AI', href: '/predictive-maintenance-ai' },
  { name: 'Smart Healthcare Diagnostics', href: '/smart-healthcare-diagnostics' },
  // === New IT Services ===
  { name: 'Accessibility & WCAG Compliance', href: '/it-services/accessibility-compliance' },
  { name: 'Cloud Cost Optimization (FinOps)', href: '/it-services/cloud-cost-optimization' },
  { name: 'Supply Chain Management', href: '/it-services/supply-chain-management' },
  { name: 'Managed SOC & Security', href: '/it-services/managed-soc-security' },
  { name: 'Network Infrastructure', href: '/it-services/network-infrastructure' },
  { name: 'Backup & Disaster Recovery', href: '/it-services/backup-disaster-recovery' },
  { name: 'IT Service Desk', href: '/it-services/it-service-desk' },
  { name: 'Endpoint Management (MDM)', href: '/it-services/endpoint-management' },
  { name: 'Digital Workplace', href: '/it-services/digital-workplace' },
  { name: 'Identity & Access Management', href: '/it-services/identity-access-management' },
  { name: 'Serverless Architecture', href: '/it-services/serverless-architecture' },
  { name: 'AI Analytics & BI', href: '/data-analytics' },

  { name: 'AI Automation', href: '/ai-services/process-automation' },

  { name: 'AI Customer Support', href: '/ai-services/ai-customer-support' },

  { name: 'AI Content Generation', href: '/ai-services/ai-content-generation' },

  { name: 'AI Sales Intelligence', href: '/ai-services/ai-sales-intelligence' },

  { name: 'AI Fraud Detection', href: '/ai-services/ai-fraud-detection' },

  { name: 'AI HR Assistant', href: '/ai-services/ai-hr-assistant' },

  { name: 'AI Supply Chain Optimization', href: '/ai-services/ai-supply-chain' },

  { name: 'AI Voice Assistant', href: '/ai-services/ai-voice-assistant' },

  { name: 'AI Email Marketing', href: '/ai-services/ai-email-marketing' },

  { name: 'AI Video Analytics', href: '/ai-services/ai-video-analytics' },

  { name: 'AI Compliance & Regulatory', href: '/ai-services/ai-compliance' },

  { name: 'AI Computer Vision', href: '/ai-services/ai-computer-vision' },

  { name: 'AI Knowledge Management', href: '/ai-services/ai-knowledge-management' },

  { name: 'AI Testing & Quality Assurance', href: '/ai-services/ai-testing-qa' },

  { name: 'AI Translation & Localization', href: '/ai-services/ai-translation-services' },

  { name: 'AI Employee Experience Platform', href: '/ai-services/ai-employee-experience' },

  { name: 'AI Document Intelligence', href: '/ai-services/ai-document-intelligence' },

  { name: 'AI Video Generation & Editing', href: '/ai-services/ai-video-generation' },

  { name: 'AI Voice Cloning & Synthesis', href: '/ai-services/ai-voice-cloning' },

  { name: 'AI Lead Generation & Enrichment', href: '/ai-services/ai-lead-generation' },

  { name: 'AI Presentation & Pitch Deck Maker', href: '/ai-services/ai-presentation-maker' },

  { name: 'AI Chatbot Builder Pro', href: '/ai-services/ai-chatbot-builder-pro' },

  { name: 'AI Code Reviewer Pro', href: '/ai-services/ai-code-reviewer-pro' },

  { name: 'AI Revenue Optimization & Pricing Intelligence', href: '/ai-services/ai-revenue-optimization' },

  { name: 'AI Cyber Threat Hunting & Incident Response', href: '/ai-services/ai-cyber-threat-hunting' },

  { name: 'AI Sentiment Analysis & Brand Monitoring', href: '/ai-services/ai-sentiment-analysis' },

  { name: 'AI Predictive Maintenance & Asset Monitoring', href: '/ai-services/ai-predictive-maintenance' },

  { name: 'AI Speech & Voice Solutions', href: '/ai-services/ai-speech-voice-solutions' },

  { name: 'AI Agentic Workflow Automation', href: '/ai-services/ai-agentic-workflows' },

  { name: 'AI Regulatory Compliance Monitor', href: '/ai-services/ai-regulatory-compliance' },

  { name: 'AI Talent Acquisition & Hiring Intelligence', href: '/ai-services/ai-talent-acquisition' },

  { name: 'AI Financial Fraud Detection & Prevention', href: '/ai-services/ai-fraud-detection' },

  { name: 'AI Energy Optimization & Sustainability', href: '/ai-services/ai-energy-optimization' },

  { name: 'AI Personalization & Recommendation Engine', href: '/ai-services/ai-personalization-engine' },

  { name: 'AI Legal Document Analysis & Contract Review', href: '/ai-services/ai-legal-doc-analysis' },

  { name: 'AI Medical Imaging & Diagnostics', href: '/ai-services/ai-medical-imaging' },

  { name: 'AI Supply Chain Optimization & Demand Forecasting', href: '/ai-services/ai-supply-chain-optimizer' },

  { name: 'AI Content Localization & Cultural Adaptation', href: '/ai-services/ai-content-localization' },

  { name: 'AI Intelligent Document Processing & Routing', href: '/ai-services/ai-intelligent-routing' },

  { name: 'AI Code Migration & Legacy Modernization', href: '/ai-services/ai-code-migration' },

  { name: 'AI Ethics, Safety & Governance Framework', href: '/ai-services/ai-ethics-governance' },

  { name: 'AI Spatial Computing & AR/VR Analytics', href: '/ai-services/ai-spatial-computing' },

  { name: 'AI Robotics Integration & Autonomous Systems', href: '/ai-services/ai-robotics-integration' },

  { name: 'AI Voice Cloning & Synthetic Media Creation', href: '/ai-services/ai-voice-cloning' },

  { name: 'AI Lead Generation & Pipeline Intelligence', href: '/ai-services/ai-lead-generation' },

  { name: 'AI Presentation & Report Generator', href: '/ai-services/ai-presentation-maker' },

  { name: 'AI Enterprise Chatbot Builder Platform', href: '/ai-services/ai-chatbot-builder-pro' },

  { name: 'AI Drug Discovery & Molecular Design', href: '/ai-services/ai-drug-discovery' },

  { name: 'AI Video Generation & Synthetic Media', href: '/ai-services/ai-video-generation' },

  { name: 'AI Voice Assistant & Conversational IVR', href: '/ai-services/ai-voice-assistant' },

  { name: 'AI Supply Chain Intelligence & Optimization', href: '/ai-services/ai-supply-chain' },

  { name: 'AI Email Marketing & Campaign Intelligence', href: '/ai-services/ai-email-marketing' },

  { name: 'AI Video Analytics & Visual Intelligence', href: '/ai-services/ai-video-analytics' },

  { name: 'AI Compliance Monitoring & Automated Auditing', href: '/ai-services/ai-compliance' },

  { name: 'Advanced AI & Enterprise Intelligence Hub', href: '/ai-services/advanced-ai-enterprise-intelligence-hub' },

  { name: 'Ai Agent Safety Evaluation', href: '/ai-services/ai-agent-safety-evaluation' },

  { name: 'AI Agents & Autonomous Workflows', href: '/ai-services/ai-agents-autonomous' },

  { name: 'Ai Context Engineering Enterprise', href: '/ai-services/ai-context-engineering-enterprise' },

  { name: 'AI Copilot & Enterprise Assistants', href: '/ai-services/ai-copilot-enterprise' },

  { name: 'AI Edge & Real-Time Inference', href: '/ai-services/ai-edge-realtime-inference' },

  { name: 'Ai Finetuning Alignment Pipelines', href: '/ai-services/ai-finetuning-alignment-pipelines' },

  { name: 'AI Foundation Models & Custom Training', href: '/ai-services/ai-foundation-models-custom-training' },

  { name: 'AI Governance & Trust', href: '/ai-services/ai-governance-trust' },

  { name: 'AI Integration & APIs', href: '/ai-services/ai-integration-apis' },

  { name: 'Ai Memory Agents Long Horizon', href: '/ai-services/ai-memory-agents-long-horizon' },

  { name: 'AI Model Orchestration', href: '/ai-services/ai-model-orchestration' },

  { name: 'AI Multimodal Intelligence', href: '/ai-services/ai-multimodal-intelligence' },

  { name: 'AI Observability & MLOps', href: '/ai-services/ai-observability-mlops' },

  { name: 'AI RAG & Knowledge Systems', href: '/ai-services/ai-rag-knowledge-systems' },

  { name: 'AI for Regulated Industries', href: '/ai-services/ai-regulated-industries' },

  { name: 'AI Security & Responsible AI', href: '/ai-services/ai-security-responsible-ai' },

  { name: 'AI Strategy & Roadmap', href: '/ai-services/ai-strategy-roadmap' },

  { name: 'Autonomous Growth Intelligence', href: '/ai-services/autonomous-growth-intelligence' },

  { name: 'Business Intelligence', href: '/ai-services/business-intelligence' },

  { name: 'Content Generation', href: '/ai-services/content-generation' },

  { name: 'Customer Experience', href: '/ai-services/customer-experience' },

  { name: 'Document Processing', href: '/ai-services/document-processing' },

  { name: 'Energy Management', href: '/ai-services/energy-management' },

  { name: 'Fraud Detection', href: '/ai-services/fraud-detection' },

  { name: 'Generative AI Enterprise', href: '/ai-services/generative-ai-enterprise' },

  { name: 'HR Analytics', href: '/ai-services/hr-analytics' },

  { name: 'Marketing Automation', href: '/ai-services/marketing-automation' },

  { name: 'Predictive Maintenance', href: '/ai-services/predictive-maintenance' },

  { name: 'Quality Assurance', href: '/ai-services/quality-assurance' },

  { name: 'Supply Chain', href: '/ai-services/supply-chain' },

  { name: 'AI Supply Chain Intelligence', href: '/ai-services/ai-supply-chain-intelligence' },

  { name: 'AI Predictive Workforce Planning', href: '/ai-services/ai-predictive-workforce-planning' },

  { name: 'AI Voice Agent Platform', href: '/ai-services/ai-voice-agent-platform' },

  { name: 'AI Financial Forecasting & Planning', href: '/ai-services/ai-financial-forecasting' },

  { name: 'AI Content Moderation Platform', href: '/ai-services/ai-content-moderation' },

  { name: 'AI Customer Sentiment Analytics', href: '/ai-services/ai-customer-sentiment-analytics' },

  { name: 'AI Code Migration & Modernization', href: '/ai-services/ai-code-migration-modernization' },

  { name: 'AI Legal Document Review', href: '/ai-services/ai-legal-doc-review' },

  { name: 'AI Medical Imaging Assistant', href: '/ai-services/ai-medical-imaging' },

  { name: 'AI Supply Chain Visibility Platform', href: '/ai-services/ai-supply-chain-visibility' },

  { name: 'AI Code Audit & Security Scanner', href: '/ai-services/ai-code-audit-security' },

  { name: 'AI BDR/SDR Agent', href: '/ai-services/ai-bdr-sdr-agent' },

  { name: 'AI Financial Forecasting & Budgeting', href: '/ai-services/ai-financial-forecasting' },

  { name: 'AI Knowledge Base & Knowledge Graph Agent', href: '/ai-services/ai-knowledge-base-agent' },

  { name: 'AI Visual Inspection & Quality Control', href: '/ai-services/ai-visual-inspection' },

  { name: 'AI Omnichannel Chatbot', href: '/ai-services/ai-omnichannel-chatbot' },

  { name: 'AI Call Center Voice Analytics', href: '/ai-services/ai-call-center-voice-analytics' },

  { name: 'Generative AI for DevOps & CI/CD', href: '/it-services/devops-gen-ai-ci-cd' },

  { name: 'AI Cloud Cost Optimizer', href: '/it-services/cloud-cost-ai-optimizer' },

  { name: 'AI Data Warehouse Modernization', href: '/it-services/data-warehouse-modernization' },

  { name: 'AI Cyber Threat Intelligence Platform', href: '/it-services/cyber-threat-intelligence' },

  { name: 'Low-Code Platform Customization & Integration', href: '/it-services/low-code-platform-customization' },

  { name: 'API Management & Developer Gateway', href: '/it-services/api-management-gateway' },

  { name: 'AI Video Generator & Editor', href: '/ai-services/ai-video-generator' },

  { name: 'AI SEO Content Optimizer', href: '/ai-services/ai-seo-optimizer' },

  { name: 'AI Contract Manager', href: '/ai-services/ai-contract-manager' },

  { name: 'AI Personalized Learning Platform', href: '/ai-services/ai-personalized-learning' },

  { name: 'AI Voice Agent (Phone)', href: '/ai-services/ai-voice-agent' },

  { name: 'AI DevOps Chatbot', href: '/ai-services/ai-devops-chatbot' },

  { name: 'AI Revenue Operations (RevOps)', href: '/ai-services/ai-revenue-ops' },

  { name: 'AI Supply & Demand Planner', href: '/ai-services/ai-supply-demand-planner' },

  { name: 'AI Fraud Detection & Prevention', href: '/ai-services/ai-fraud-detection' },

  { name: 'AI Code Review Assistant', href: '/ai-services/ai-code-review-assistant' },

  { name: 'AI Marketing Copy Generator', href: '/ai-services/ai-marketing-copy-generator' },

  { name: 'AI IT Helpdesk & Support', href: '/it-services/ai-it-helpdesk' },

  { name: 'AI Customer Support Agent', href: '/ai-services/ai-customer-support-agent' },

  { name: 'Autonomous Code Review Agent', href: '/ai-services/autonomous-code-review-agent' },

  { name: 'AI-Driven Customer Segmentation & Persona Engine', href: '/ai-services/ai-driven-customer-segmentation' },

  { name: 'AI-Powered UI Generator (Text-to-UI)', href: '/ai-services/ai-powered-ui-generator' },

  { name: 'Predictive Churn Risk Scoring', href: '/ai-services/predictive-churn-risk' },

  { name: 'AI-Powered SEO Content Optimizer', href: '/ai-services/ai-powered-seo-optimizer' },

  { name: 'AI-Assisted Code Migration & Refactoring', href: '/ai-services/ai-for-code-migration' },

  { name: 'AI-Powered Test Suite Generator', href: '/ai-services/ai-powered-test-generation' },

  { name: 'AI-Powered Log Anomaly Detection', href: '/ai-services/ai-powered-log-anomaly-detection' },

  { name: 'Generative Data Synthesis for Model Training', href: '/ai-services/generative-data-synthesis' },

  { name: 'AI for Sustainable Operations (Green AI)', href: '/ai-services/ai-sustainable-ops' },

  { name: 'AI Legal Document Review & Risk Analysis', href: '/ai-services/legal-doc-review-ai' },

  { name: 'AI-Powered Passwordless Authentication', href: '/ai-services/ai-powered-passwordless-auth' },

  { name: 'AI-Powered Tech Debt Quantifier', href: '/ai-services/ai-powered-tech-debt-quantifier' },

  { name: 'Generative UX Research Synthesis', href: '/ai-services/generative-ux-research-synthesis' },

  { name: 'AI-Powered Incident Postmortem Generator', href: '/ai-services/ai-powered-incident-postmortem' },

  { name: 'AI-Driven API Design Assistant', href: '/ai-services/ai-driven-api-design-assistant' },

  { name: 'AI-Powered PR Drafting & Description', href: '/ai-services/ai-powered-pr-drafting' },

  { name: 'Automated Data Labeling for Computer Vision & NLP', href: '/ai-services/automated-data-labeling' },

  { name: 'Meeting AI Assistant (Record, Transcribe, Summarize)', href: '/ai-services/meeting-ai-assistant' },

  { name: 'Enterprise AI Question Answering (Internal Knowledge)', href: '/ai-services/ai-powered-question-answering' },

  { name: 'AI Customer Support Agent', href: '/ai-services/ai-customer-support-agent' },

  { name: 'Autonomous Code Review Agent', href: '/ai-services/autonomous-code-review-agent' },

  { name: 'AI-Driven Customer Segmentation & Persona Engine', href: '/ai-services/ai-driven-customer-segmentation' },

  { name: 'AI-Powered UI Generator (Text-to-UI)', href: '/ai-services/ai-powered-ui-generator' },

  { name: 'Predictive Churn Risk Scoring', href: '/ai-services/predictive-churn-risk' },

  { name: 'AI-Powered SEO Content Optimizer', href: '/ai-services/ai-powered-seo-optimizer' },

  { name: 'AI-Assisted Code Migration & Refactoring', href: '/ai-services/ai-for-code-migration' },

  { name: 'AI-Powered Test Suite Generator', href: '/ai-services/ai-powered-test-generation' },

  { name: 'AI-Powered Log Anomaly Detection', href: '/ai-services/ai-powered-log-anomaly-detection' },

  { name: 'Generative Data Synthesis for Model Training', href: '/ai-services/generative-data-synthesis' },

  { name: 'AI for Sustainable Operations (Green AI)', href: '/ai-services/ai-sustainable-ops' },

  { name: 'AI Legal Document Review & Risk Analysis', href: '/ai-services/legal-doc-review-ai' },

  { name: 'AI-Powered Passwordless Authentication', href: '/ai-services/ai-powered-passwordless-auth' },

  { name: 'AI-Powered Tech Debt Quantifier', href: '/ai-services/ai-powered-tech-debt-quantifier' },

  { name: 'Generative UX Research Synthesis', href: '/ai-services/generative-ux-research-synthesis' },

  { name: 'AI-Powered Incident Postmortem Generator', href: '/ai-services/ai-powered-incident-postmortem' },

  { name: 'AI-Driven API Design Assistant', href: '/ai-services/ai-driven-api-design-assistant' },

  { name: 'AI-Powered PR Drafting & Description', href: '/ai-services/ai-powered-pr-drafting' },

  { name: 'Automated Data Labeling for Computer Vision & NLP', href: '/ai-services/automated-data-labeling' },

  { name: 'Meeting AI Assistant (Record, Transcribe, Summarize)', href: '/ai-services/meeting-ai-assistant' },

  { name: 'Enterprise AI Question Answering (Internal Knowledge)', href: '/ai-services/ai-powered-question-answering' },

  { name: 'AI Dyslexia Assist', href: '/ai-services/ai-dyslexia-assist' },

  { name: 'AI Supply Chain Predictor', href: '/ai-services/ai-supply-chain-predictor' },

  { name: 'AI Contract Review Assistant', href: '/ai-services/ai-contract-review' },

  { name: 'AI Accessibility Auditor', href: '/ai-services/ai-accessibility-auditor' },

  { name: 'AI Mental Health Companion', href: '/ai-services/ai-mental-health-chatbot' },

  { name: 'AI Customer Sentiment Tracker', href: '/ai-services/ai-customer-sentiment-tracker' },

  { name: 'AI Codebase Documentation Generator', href: '/ai-services/ai-codebase-doc-generator' },

  { name: 'AI Competitive Intel Engine', href: '/ai-services/ai-competitive-intel-engine' },

  { name: 'AI Voice Cloning for Marketing', href: '/ai-services/ai-voice-cloning-marketing' },

  { name: 'AI Fraud Detection for Finance', href: '/ai-services/ai-fraud-detection-finance' },

  { name: 'AI Legal Contract Redaction', href: '/ai-services/ai-legal-contract-redaction' },

  { name: 'AI Sustainability & Carbon Tracker', href: '/ai-services/ai-sustainability-carbon-tracker' },

  { name: 'AI 1:1 Tutor for K–12 & Higher Ed', href: '/ai-services/ai-education-tutor' },

  { name: 'AI Retail Recommendation Engine', href: '/ai-services/ai-retail-recommendation-engine' },

  { name: 'AI-AIOps Anomaly Detection', href: '/ai-services/ai-aiops-anomaly-detection' },

  { name: 'AI Media & News Monitoring', href: '/ai-services/ai-media-monitoring' },

  { name: 'AI Accessibility Content Optimizer', href: '/ai-services/ai-accessibility-optimizer' },

  { name: 'Real-Time Translation Engine', href: '/ai-services/ai-realtime-translation' },

  { name: 'Contract Analyzer Pro', href: '/ai-services/ai-contract-analyzer-pro' },

  { name: 'AI Code Review Assistant', href: '/ai-services/ai-code-review-assistant' },

  { name: 'Competitor Intelligence Engine', href: '/ai-services/ai-competitor-intelligence' },

  { name: 'Email Campaign Generator', href: '/ai-services/ai-email-campaign-generator' },

  { name: 'Supply Chain Predictor', href: '/ai-services/ai-supply-chain-predictor' },

  { name: 'Voice Assistant Pro', href: '/ai-services/ai-voice-assistant-pro' },

  { name: 'Revenue Optimization Engine', href: '/ai-services/ai-revenue-optimizer' },

  { name: 'Knowledge Graph Builder', href: '/ai-services/ai-knowledge-graph-builder' },

  { name: 'Real-Time Fraud Detection', href: '/ai-services/ai-fraud-detection-real-time' },

  { name: 'Social Sentiment Tracker', href: '/ai-services/ai-social-sentiment-tracker' },

  { name: 'Automated Reporting Engine', href: '/ai-services/ai-automated-reporting' },

  { name: 'Predictive Maintenance for Manufacturing', href: '/ai-services/ai-predictive-maintenance-factory' },

  { name: 'Customer 360 Unified Profile', href: '/ai-services/ai-customer-360' },

  { name: 'AI Talent Acquisition Platform', href: '/ai-services/ai-talent-acquisition-platform' },

  { name: 'Cloud Migration & Modernization', href: '/it-services/cloud-migration' },

  { name: 'Cybersecurity & Penetration Testing', href: '/it-services/cybersecurity' },

  { name: 'Data Engineering & ETL Pipelines', href: '/it-services/data-engineering' },

  { name: 'DevOps & CI/CD Automation', href: '/it-services/devops-cicd' },

  { name: 'SaaS Product Development', href: '/it-services/saas-development' },

  { name: 'API Development & Integration', href: '/it-services/api-integration' },

  { name: 'Database Optimization & Management', href: '/it-services/database-optimization' },

  { name: 'Monitoring & Observability', href: '/it-services/monitoring-observability' },

  { name: 'IT Strategy & Digital Transformation Consulting', href: '/it-services/it-consulting' },

  { name: 'Accessibility & WCAG Compliance', href: '/it-services/accessibility-compliance' },

  { name: 'Cloud Cost Optimization (FinOps)', href: '/it-services/cloud-cost-optimization' },

  { name: 'Supply Chain Management Platform', href: '/it-services/supply-chain-management' },

  { name: 'Network Security Monitoring & SIEM', href: '/it-services/network-security-monitoring' },

  { name: 'Edge Computing & IoT Infrastructure', href: '/it-services/edge-computing' },

  { name: 'Disaster Recovery & Business Continuity', href: '/it-services/disaster-recovery' },

  { name: 'ITIL Service Management (ITSM) Platform', href: '/it-services/itil-service-management' },

  { name: 'Zero Trust Security Architecture', href: '/it-services/zero-trust-architecture' },

  { name: 'Container Orchestration & Kubernetes Management', href: '/it-services/kubernetes-management' },

  { name: 'Penetration Testing & Vulnerability Assessment', href: '/it-services/penetration-testing' },

  { name: 'Blockchain Development & Smart Contract Auditing', href: '/it-services/blockchain-development' },

  { name: 'Quantum Computing Readiness Assessment', href: '/it-services/quantum-readiness' },

  { name: '5G Network Planning & Deployment', href: '/it-services/5g-network-deployment' },

  { name: 'Digital Twin & IoT Platform Development', href: '/it-services/digital-twin-platform' },

  { name: 'Microservices Architecture & API Gateway Design', href: '/it-services/microservices-architecture' },

  { name: 'Observability Platform & SRE Consulting', href: '/it-services/observability-platform' },

  { name: 'Data Mesh & Modern Data Platform Architecture', href: '/it-services/data-mesh' },

  { name: 'Platform Engineering & Internal Developer Portal', href: '/it-services/platform-engineering' },

  { name: 'Wireless Network Design & Optimization', href: '/it-services/wireless-network' },

  { name: 'IT Automation & Orchestration Platform', href: '/it-services/automation-orchestrator' },

  { name: 'Serverless Architecture & Function-as-a-Service', href: '/it-services/serverless-architecture' },

  { name: 'API Management Platform & Developer Portal', href: '/it-services/api-management' },

  { name: 'Database-as-a-Service & Managed Data Platforms', href: '/it-services/database-as-a-service' },

  { name: 'Incident Response & Security Operations Center', href: '/it-services/incident-response' },

  { name: 'Voice Infrastructure & Contact Center Solutions', href: '/it-services/voice-infrastructure' },

  { name: 'Identity & Access Management (IAM) Platform', href: '/it-services/iam-platform' },

  { name: 'IT Capacity Planning & Resource Forecasting', href: '/it-services/capacity-planning' },

  { name: 'Backup & Disaster Recovery Solutions', href: '/it-services/backup-recovery' },

  { name: 'Network Automation & SD-WAN Management', href: '/it-services/network-automation' },

  { name: 'API Development & Integration', href: '/it-services/api-development' },

  { name: 'Backup & Disaster Recovery', href: '/it-services/backup-disaster-recovery' },

  { name: 'Cybersecurity Audit', href: '/it-services/cybersecurity-audit' },

  { name: 'Data Pipeline Architecture & Engineering', href: '/it-services/data-pipeline-architecture' },

  { name: 'DevOps Consulting & Implementation', href: '/it-services/devops-consulting' },

  { name: 'Digital Workplace Solutions', href: '/it-services/digital-workplace' },

  { name: 'Disaster Recovery & Business Continuity', href: '/it-services/disaster-recovery-services' },

  { name: 'Endpoint Device Management (MDM)', href: '/it-services/endpoint-management' },

  { name: 'Identity & Access Management (IAM)', href: '/it-services/identity-access-management' },

  { name: 'IT Asset Management & Lifecycle', href: '/it-services/it-asset-management' },

  { name: 'IT Service Desk & Help Desk', href: '/it-services/it-service-desk' },

  { name: 'Managed SOC & Security Operations', href: '/it-services/managed-soc-security' },

  { name: 'Mobile App Development', href: '/it-services/mobile-development' },

  { name: 'Enterprise Network Infrastructure', href: '/it-services/network-infrastructure' },

  { name: 'Network Security Operations Center', href: '/it-services/network-security-operations' },

  { name: 'Managed SOC & Threat Intelligence', href: '/it-services/managed-soc-threat-intelligence' },

  { name: 'Container Orchestration & Kubernetes Management', href: '/it-services/kubernetes-management' },

  { name: 'IT Service Desk Automation', href: '/it-services/it-service-desk-automation' },

  { name: 'Enterprise Backup & Disaster Recovery', href: '/it-services/enterprise-backup-dr' },

  { name: 'Network Architecture & SD-WAN', href: '/it-services/network-architecture-sdwan' },

  { name: 'IT Service Asset & Configuration Management', href: '/it-services/it-sam-platform' },

  { name: 'Vulnerability Assessment & Penetration Testing', href: '/it-services/vulnerability-assessment-penetration-testing' },

  { name: 'Remote IT Support & Helpdesk Outsourcing', href: '/it-services/remote-it-support' },

  { name: 'Database Performance Optimization', href: '/it-services/database-optimization' },

  { name: 'Unified Endpoint Management (UEM)', href: '/it-services/endpoint-management' },

  { name: 'Legacy System Modernization & Re-Platforming', href: '/it-services/legacy-system-modernization' },

  { name: 'Quantum-Ready Cryptography & Security Assessment', href: '/it-services/quantum-ready-security' },

  { name: 'Full-Stack Observability Platform', href: '/it-services/observability-platform' },

  { name: 'Security Operations Center as a Service (SOCaaS)', href: '/it-services/soc-as-a-service' },

  { name: 'Node.js Performance Tuning & Profiling', href: '/it-services/nodejs-performance-tuning' },

  { name: 'ETL Pipeline Optimization & Modernization', href: '/it-services/etl-pipeline-optimization' },

  { name: 'Incident Response Retainer (IR)', href: '/it-services/incident-response-retainer' },

  { name: 'Edge Computing Deployment', href: '/it-services/it-edge-computing-deploy' },

  { name: 'Disaster Recovery as a Service (DRaaS)', href: '/it-services/it-disaster-recovery' },

  { name: 'Full-Stack Observability Platform', href: '/it-services/it-observability-platform' },

  { name: 'ESG Compliance Automation', href: '/it-services/it-esg-compliance-automation' },

  { name: 'Kubernetes Multi-Cloud Management', href: '/it-services/it-kubernetes-multicloud' },

  { name: 'Automated Incident Response (SOAR)', href: '/it-services/it-automated-incident-response' },

  { name: 'Data Warehouse Modernization', href: '/it-services/it-data-warehouse-modernization' },

  { name: 'Enterprise IoT Device Management', href: '/it-services/it-iot-device-management' },

  { name: 'Digital Workplace Platform', href: '/it-services/it-digital-workplace-platform' },

  { name: 'API Security Testing', href: '/it-services/it-apisec-testing' },

  { name: 'Data Lakehouse Governance', href: '/it-services/it-data-lakehouse-governance' },

  { name: 'Managed Endpoint Detection & Response (EDR)', href: '/it-services/it-endpoint-detection-response' },

  { name: 'Low-Code Platform Integration', href: '/it-services/it-low-code-platform-integration' },

  { name: 'Edge Computing Orchestration', href: '/it-services/it-edge-computing-orchestration' },

  { name: 'Serverless API Gateway', href: '/it-services/it-serverless-api-gateway' },

  { name: 'SAP Integration Hub', href: '/it-services/it-sap-integration-hub' },

  { name: 'Multi-Cloud Cost Governance', href: '/it-services/it-multi-cloud-cost-governance' },

  { name: 'Automated Incident Response', href: '/it-services/it-automated-incident-response' },

  { name: 'Secure File Transfer (MFT)', href: '/it-services/it-secure-file-transfer' },

  { name: 'Legacy App Containerization', href: '/it-services/it-legacy-app-containerization' },

  { name: 'PCI DSS Compliance Suite', href: '/it-services/it-pcii-compliance-suite' },

  { name: 'Business Continuity & Disaster Recovery', href: '/it-services/it-business-continuity-dr' },

  { name: 'Identity Governance & Administration', href: '/it-services/it-identity-governance' },

  { name: 'Cloud-Native Storage Optimizer', href: '/it-services/it-cloud-native-storage' },

  { name: 'Unified Observability Platform', href: '/it-services/it-observability-unified' },

  { name: 'Secrets Management as a Service', href: '/it-services/it-secrets-management' },

  { name: 'Multi-Cloud Networking', href: '/it-services/it-multi-cloud-networking' },

  { name: 'Mainframe Modernization Service', href: '/it-services/it-mainframe-modernization' },

  { name: 'AI 3D Asset Generator', href: '/ai-3d-asset-generator' },

  { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning-studio' },

  { name: 'AI Code Review & Quality Gate', href: '/ai-code-reviewer' },

  { name: 'AI Quantum Computing Optimization', href: '/ai-quantum-optimizer' },

  { name: 'AI Digital Twin Platform', href: '/ai-digital-twin-platform' },

  { name: 'AI Ad Copy Generator', href: '/ai-ad-copy-generator' },

  { name: 'AI SEO Content Optimizer', href: '/ai-seo-content-optimizer' },

  { name: 'AI Conversion Rate Optimization (CRO) Engine', href: '/ai-cro-optimizer' },

  { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform' },

  { name: 'AI Medical Image Diagnosis', href: '/ai-medical-image-diagnosis' },

  { name: 'AI Genomic Analysis Pipeline', href: '/ai-genomic-analysis' },

  { name: 'AI Trading Signal Engine', href: '/ai-trading-signal-engine' },

  { name: 'AI Credit Underwriting Engine', href: '/ai-credit-underwriting' },

  { name: 'AI Insurance Claims Processing', href: '/ai-insurance-claims' },

  { name: 'AI Tutoring Platform', href: '/ai-tutoring-platform' },

  { name: 'AI Exam Proctoring System', href: '/ai-exam-proctoring' },

  { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },

  { name: 'AI Visual Quality Inspection', href: '/ai-quality-inspection' },

  { name: 'AI Energy Optimization', href: '/ai-energy-optimization' },

  { name: 'AI Threat Intelligence Platform', href: '/ai-threat-intelligence' },

  { name: 'AI Deepfake & Synthetic Media Detection', href: '/ai-deepfake-detection' },

  { name: 'AI Privileged Access Management', href: '/ai-privilege-access-manager' },

  { name: 'AI Data Quality Fabric', href: '/ai-data-quality-fabric' },

  { name: 'AI Feature Store', href: '/ai-feature-store' },

  { name: 'AI Metadata & Data Lineage Manager', href: '/ai-metadata-management' },

  { name: 'AI Infrastructure Provisioner', href: '/ai-infra-provisioner' },

  { name: 'AI Log Analysis & Root Cause', href: '/ai-log-analysis' },

  { name: 'AI Load & Performance Testing', href: '/ai-load-testing' },

  { name: 'AI Kubernetes Optimization', href: '/ai-kubernetes-optimizer' },

  { name: 'AI Serverless Platform', href: '/ai-serverless-platform' },

  { name: 'AI Zero Trust Network', href: '/ai-vpc-zero-trust' },

  { name: 'AI Robotic Process Automation', href: '/ai-rpa-platform' },

  { name: 'AI Test Automation Framework', href: '/ai-test-automation-framework' },

  { name: 'AI Low-Code Integration Platform', href: '/ai-low-code-integration' },

  { name: 'AI Governance & Compliance Suite', href: '/ai-governance-compliance' },

  { name: 'AI Reinforcement Learning Operations (RLOps)', href: '/ai-reinforcement-learning-ops' },

  { name: 'AI Federated Learning Platform', href: '/ai-federated-learning' },

  { name: 'Synthetic Monitoring & Uptime Intelligence', href: '/it-synthetic-monitoring' },

  { name: 'AI API Gateway', href: '/it-api-gateway-ai' },

  { name: 'AI Identity Governance & Administration', href: '/it-identity-governance' },

  { name: 'Secure Managed File Transfer (MFT)', href: '/secure-file-transfer' },

  { name: 'AI Secrets Management', href: '/ai-secrets-management' },

  { name: 'AI LLM Router Pro', href: '/ai-services/ai-llm-router-pro' },

  { name: 'AI Voice Agent Builder', href: '/ai-services/ai-voice-agent-builder' },

  { name: 'AI Interview Conduct Bot', href: '/ai-services/ai-interview-conduct-bot' },

  { name: 'AI Glassdoor & Review Analyzer', href: '/ai-services/ai-glassdoor-review-analyzer' },

  { name: 'AI Dashboard Designer', href: '/ai-services/ai-dashboard-designer' },

  { name: 'AI Tax Compliance Calculator', href: '/ai-services/ai-tax-compliance-calculator' },

  { name: 'AI Bug-to-Issue Router', href: '/ai-services/ai-bug-to-issue-router' },

  { name: 'AI Voice Brand Consistency Checker', href: '/ai-services/ai-voice-brand-consistency' },

  { name: 'AI Personal Finance Coach', href: '/ai-services/ai-personal-finance-coach' },

  { name: 'AI Nutrition & Meal Planner', href: '/ai-services/ai-nutrition-meal-planner' },

  { name: 'AI Hiring Pipeline Optimizer', href: '/ai-services/ai-hiring-pipeline-optimizer' },

  { name: 'AI Product Photo Enhancer', href: '/ai-services/ai-product-photo-enhancer' },

  { name: 'AI Competitive Price Tracker', href: '/ai-services/ai-competitive-price-tracker' },

  { name: 'AI Profitability Dashboard', href: '/ai-services/ai-profitability-dashboard' },

  { name: 'IT API Load & Performance Testing', href: '/it-services/it-api-performance-testing' },

  { name: 'IT Incident Response Simulator', href: '/it-services/it-incident-response-simulator' },

  { name: 'IT Cloud Cost Governance', href: '/it-services/it-cloud-cost-governance' },

  { name: 'IT Observability & Centralized Logging', href: '/it-services/it-observability-logging' },

  { name: 'AI Knowledge Base & RAG Platform', href: '/ai-services/ai-knowledge-base-rag' },

  { name: 'AI Form Filler & Automation', href: '/ai-services/ai-form-filler-intelligence' },

  { name: 'AI API Orchestration Layer', href: '/ai-services/ai-api-orchestration-layer' },

  { name: 'AI KYC / AML Compliance Engine', href: '/ai-services/ai-kyc-aml-compliance' },

  { name: 'AI Smart Document Redactor', href: '/ai-services/ai-smart-document-redactor' },

  { name: 'AI Data Quality Guardian', href: '/ai-services/ai-data-quality-guardian' },

  { name: 'AI Observability Turbo', href: '/ai-services/ai-observability-turbo' },

  { name: 'AI E-commerce Smart Search', href: '/ai-services/ai-ecommerce-smart-search' }
];

export const FEATURED_PRODUCT_LINKS: readonly NavigationLink[] = [
  { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
  { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
  { name: 'Zion Content Studio', href: '/zion-content-studio' },
  { name: 'Zion Project Master', href: '/zion-project-master' },
  { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
  { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
  { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
  { name: 'Zion Data Sync', href: '/zion-data-sync' },
  { name: 'Autonomous RAG Knowledge Workspace', href: '/ai-lab/autonomous-rag-knowledge-workspace' },
  { name: 'Autonomous Media Prompt Studio', href: '/ai-lab/autonomous-media-prompt-studio' },
];

export const AUTOMATION_LINKS: readonly NavigationLink[] = [
  { name: 'Automation', href: '/automation' },
  { name: 'Workflow Automation', href: '/workflow-automation' },
  {
    name: 'Smart CRM Automation',
    href: '/zion-smart-crm-automation',
    aliases: ['/crm-automation'],
  },
  { name: 'Email Automation', href: '/zion-email-automation' },
  { name: 'AI Marketing Automation', href: '/zion-ai-marketing-automation' },
  { name: 'DevOps Automation', href: '/zion-devops-automation' },
  { name: 'AI Workflow Automator', href: '/zion-ai-workflow-automator' },
  { name: 'AI Workflow Automator Pro', href: '/zion-ai-workflow-automator-pro' },
  { name: 'Robotic Process Automation', href: '/robotic-process-automation' },
  { name: 'Process Automation', href: '/process-automation' },
  { name: 'Security Automation', href: '/security-automation' },
  { name: 'Compliance Automation', href: '/compliance-automation' },
];

export const PRODUCT_LINKS: readonly NavigationLink[] = [
  { name: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
  { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
  { name: 'Zion Content Studio', href: '/zion-content-studio' },
  { name: 'Zion Project Master', href: '/zion-project-master' },
  { name: 'Zion Performance Monitor', href: '/zion-performance-monitor' },
  { name: 'Zion Smart Analytics Dashboard', href: '/zion-smart-analytics-dashboard' },
  { name: 'Zion Lead Magnet', href: '/zion-lead-magnet' },
  { name: 'Zion Invoice Genius', href: '/zion-invoice-genius' },
  { name: 'Zion Data Sync', href: '/zion-data-sync' },
  { name: 'AI Lead Scoring', href: '/zion-ai-lead-scoring' },
  { name: 'AI Email Marketing Pro', href: '/zion-ai-email-marketing-pro' },
  { name: 'AI SEO Optimizer', href: '/zion-ai-seo-optimizer' },
  { name: 'AI Social Media Manager', href: '/zion-ai-social-media-manager' },
  { name: 'AI Meeting Assistant', href: '/zion-ai-meeting-assistant' },
  { name: 'AI Fraud Detection', href: '/zion-ai-fraud-detection' },
  { name: 'AI Voice Assistant', href: '/zion-ai-voice-assistant' },
  { name: 'Autonomous Media Prompt Studio', href: '/ai-lab/autonomous-media-prompt-studio' },
  { name: 'Autonomous RAG Knowledge Workspace', href: '/ai-lab/autonomous-rag-knowledge-workspace' },
];
