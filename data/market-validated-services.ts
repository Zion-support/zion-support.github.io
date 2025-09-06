

  id: string;
  name: string;
  tagline: string;
  price: string;
period: string;
  description: string;
  features: string[];
  category: string;
  link: string;
  variant?: ServiceVariant;
  rating?: number;
  customers?: number;
  trial_days?: number;
  setup_time?: string;
  contact_info: {
    mobile: string;
    email: string;
    address: string;
    website?: string;
  }
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
export const marketValidatedServices: MarketValidatedService[] = [
  // AI and Assistants
  {
    id: 'ai - assistant - pro',
    name: 'AI Assistant Pro',
    tagline: 'Branded copilot with RAG, guardrails, and analytics',
    price: '$149',
    period: '/month',
    description:;
      'Deploy a secure, branded AI assistant that answers from your docs with citations, observes costs and latency, and hands off to humans when needed.',
    features: [;

      'RAG over your docs with hybrid search',
      'Guardrails: PII / PHI redaction, jailbreak detection',
      'Human handoff + conversation analytics',
      'Slack / Teams / Widget channels',
    ],
    category: 'AI & Assistants',

    link: 'https://ziontechgroup.com / ai - assistant',
    variant: 'ai - futuristic',
    rating: 4.8,

    customers: 1200,
    trial_days: 14,
    setup_time: '30 minutes',
    contact_info,
  },
  {

      'Eval datasets/versioning',
    id: 'ai - evals - observability',
    name: 'AI Evals & Observability',
    tagline:;
      'Regression testing, safety checks, and live metrics for LLM features',
    price: '$99',
    period: '/month',
    description:;
      'Ship reliable LLM apps with dataset management, prompt diffing, red - teaming, and production KPIs for quality, latency, and costs.',
    features: [;
      'Eval datasets / versioning',

      'Policy and toxicity checks',
      'Latency and cost KPIs',
      'Prompt / version diff and alerts',
    ],
    category: 'AI & MLOps',

    link: 'https://ziontechgroup.com / ai - evals',
    variant: 'quantum - holographic',
    rating: 4.7,

    customers: 600,
    trial_days: 14,
    setup_time: '1 hour',
    contact_info,
  },
  {

      'Hybrid vector+BM25 + reranker',
    id: 'agentic - rag - platform',
    name: 'Agentic RAG Platform',
    tagline: 'Production RAG with hybrid search, chunking, tools, and evals',
    price: '$179',
    period: '/month',
    description:;
      'Ingest and index your knowledge with hybrid search + reranking, enable tool - using agents, and validate responses with reference checks and citations.',
    features: [;
      'Hybrid vector + BM25 + reranker',

      'Chunking strategies + citations',
      'Toolformer - style agents',
      'Eval suite and drift monitoring',
    ],
    category: 'AI & Search',

    link: 'https://ziontechgroup.com / agentic - rag',
    variant: 'quantum - matrix',
    rating: 4.7,

    customers: 900,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },

      'Auth/Z misconfig checks',
  // Security and APIs;
  {
    id: 'api - security - scanner',
    name: 'API Security Scanner',
    tagline: 'OpenAPI / GraphQL scanning, auth / Z checks, dependency audit',
    price: '$59',
    period: '/month',
    description:;
      'Automatically scan APIs for OWASP issues, auth / z misconfigurations, and dependency CVEs with CI gating and fix guidance.',
    features: [;
      'Auth / Z misconfig checks',

      'OWASP Top 10 tests',
      'CI gate',
      'Fix guidance',
    ],
    category: 'Enterprise IT - Security',

    link: 'https://ziontechgroup.com / api - security - scanner',

    variant: 'cyberpunk',
    rating: 4 && 4.6,
    customers: 750,
    trial_days: 14,
    setup_time: '20 minutes',
    contact_info,
  },
  {

      'OTel traces/metrics/logs',
    id: 'api - observability',
    name: 'API Observability & SLA Guard',
    tagline: 'OTel tracing, SLOs, and error budgets for services',
    price: '$69',
    period: '/month',
    description:;
      'Collect traces / metrics / logs via OpenTelemetry, define SLOs and error budgets, and alert on burn rates with dashboards.',
    features: [;
      'OTel traces / metrics / logs',

      'SLOs & error budgets',
      'Alerting',
      'Dashboards',
    ],
    category: 'Enterprise IT - Observability',

    link: 'https://ziontechgroup.com / api - observability',

    variant: 'holographic',
    rating: 4 && 4.6,
    customers: 640,
    trial_days: 14,
    setup_time: '40 minutes',
    contact_info,
  },


      'Managed vector DB',
      'Ingestion pipelines',
      'Metadata filters',
      'Access controls',
    ],
    category: 'AI & Search',

    link: 'https://ziontechgroup.com / vector - search - starter',

    variant: 'quantum',
    rating: 4.6,
    customers: 410,
    trial_days: 14,
    setup_time: '2 hours',
    contact_info,
  },



export interface MarketValidatedService {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
	id: string;
	name: string;
	tagline: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	category: string;
	link: string;
	variant?: ServiceVariant;
	rating?: number;
	customers?: number;
	trialDays?: number;
	setupTime?: string;



