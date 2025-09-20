export interface NewService {
  id: string,tit,
  l: e: string,descripti,
  o: n: string,catego,
  r: y: string
  subcategory?: string
  pric,
  e: number,curren,
  c: y: string,pricingMod,
  e: l: string,featur,
  e: s: string[],benefi,
  t: s: string[],ta,
  g: s: string[],marketPri,
  c: e: string
}

export,
  const: NEW_SERVICES_2025: NewService[] = [
  {
    i,
  d: 'rag-docs-chatbot',tit,
  l: e: 'RAG Chatbot for Your Docs',descripti,
  o: n: 'Deploy a secure Retrieval-Augmented Generation chatbot over your knowledge base (PDFs, sites, Confluence).'
    catego,
  r: y: 'AI & Automation',subcatego,
  r: y: 'Chatbots',pri,
  c: e: 299,curren,
  c: y: '$',pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      'Semantic search over docsSource-cited answers'
      'Admins upload and manage contentEmbeddings cache + nightly refresh'
      'Role & permission controls'
    ]
    benefi,
  t: s: [
      'Deflect L1 support by 30–60%Instant employee answers'
      'Reduce onboarding time'
    ]
    tag,
  s: ['RAGChatbot', 'DocsEmbeddings']
    marketPri,
  c: e: '$299–$999/mo + setup $2k–$10k'
  }, {
    id: 'ai-lead-scoring',tit,
  l: e: 'AI Lead Scoring for CRM',descripti,
  o: n: 'Machine learning scoring on contacts and opportunities for Salesforce/HubSpot/Pipedrive.',catego,
  r: y: 'Sales AI',subcatego,
  r: y: 'Revenue',pri,
  c: e: 249,curren,
  c: y: '$',pricingMod,
  e: l: 'monthly',featur,
  e: s: [
      'Propensity-to-buy modelsICP matching and enrichment'
      'Auto-prioritized queuesPlaybook recommendations'
    ]
    benefit,
  s: ['Higher win ratesShorter cycles', 'Rep productivity +20%']
    ta,
  g: s: ['SalesCRM', 'ML']
    marketPri,
  c: e: '$249–$1,499/mo + setup $3k–$15k'
  }, {
    id: 'etl-pipeline-starter',tit,
  l: e: 'ETL Pipeline Starter Kit',descripti,
  o: n: 'Production-ready ELT/ETL template with orchestrator, dbt models, and observability.'
    catego,
  r: y: 'Data & Analytics',subcatego,
  r: y: 'Pipelines',pri,
  c: e: 5000,curren,
  c: y: '$',pricingMod,
  e: l: 'fixed',featur,
  e: s: [
      'dbt core modelsAirflow/Prefect orchestration'
      'Great Expectations data testsWarehouse adapters (BigQuery/Snowflake/Redshift/Postgres)'
    ]
    benefit,
  s: ['Weeks to days time-to-valueBest-practice stack', 'Lower maintenance']
    ta,
  g: s: ['ETLdbt', 'AirflowObservability']
    marketPri,
  c: e: '$5k–$25k fixed + support $1k/mo'
  }, {
    id: 'seo-technical-auditor',tit,
  l: e: 'AI Technical SEO Auditor',descripti,
  o: n: 'Crawls your site and generates prioritized technical SEO fixes with AI explanations.',catego,
  r: y: 'Growth',subcatego,
  r: y: 'SEO',pri,
  c: e: 99,curren,
  c: y: '$',pricingMod,
  e: l: 'monthly',featur,
  e: s: ['Crawler + sitemapsCore Web Vitals checks', 'AI rewrite suggestionsIssue tracker export']
    benefi,
  t: s: ['More organic trafficBetter site health'],ta,
  g: s: ['SEOCWV', 'Crawler']
    marketPri,
  c: e: '$99–$499/mo'
  }, {
    id: 'gdpr-dsar-portal',tit,
  l: e: 'GDPR/CCPA DSAR Portal',descripti,
  o: n: 'Hosted portal to intake, verify, and fulfill data subject access requests with audit trails.'
    catego,
  r: y: 'Compliance',subcatego,
  r: y: 'Privacy',pri,
  c: e: 399,curren,
  c: y: '$',pricingMod,
  e: l: 'monthly',featur,
  e: s: ['Identity verificationWorkflow + SLAs', 'Export redaction toolsEvidence logs']
    benefi,
  t: s: ['Avoid finesRespond on time', 'Reduce manual effort']
    ta,
  g: s: ['GDPRCCPA', 'Privacy']
    marketPri,
  c: e: '$399–$1,499/mo'
  }, {
    id: 'statuspage-saas',tit,
  l: e: 'White‑Label Status Page',descripti,
  o: n: 'Custom-branded status page with incident comms and SLA analytics.',catego,
  r: y: 'DevOps',subcatego,
  r: y: 'SRE',pri,
  c: e: 49,curren,
  c: y: '$',pricingMod,
  e: l: 'monthly',featur,
  e: s: ['Incident templatesSubscriptions + webhooks', 'Metrics & SLAsCustom domain']
    benefi,
  t: s: ['Increase trustReduce support tickets'],ta,
  g: s: ['StatusSRE'],marketPri,
  c: e: '$49–$299/mo'
  }, {
    id: 'uptime-monitor',tit,
  l: e: 'Global Uptime & API Monitor',descripti,
  o: n: 'Multi-region uptime checks, API assertions, and alerting with runbooks.'
    catego,
  r: y: 'DevOps',subcatego,
  r: y: 'Monitoring',pri,
  c: e: 29,curren,
  c: y: '$',pricingMod,
  e: l: 'monthly',featur,
  e: s: ['HTTP/HTTPS/ICMP checksSynthetic flows', 'On-call rotationsSlack/Email/SMS alerts']
    benefi,
  t: s: ['Catch incidents earlierImprove reliability'],ta,
  g: s: ['UptimeMonitoring', 'Synthetics']
    marketPri,
  c: e: '$29–$299/mo'
  }, {
    id: 'invoice-ocr',tit,
  l: e: 'Invoice OCR & AP Automation',descripti,
  o: n: 'Extract fields from invoices and sync to your accounting system with approvals.',catego,
  r: y: 'Operations',subcatego,
  r: y: 'Finance',pri,
  c: e: 199,curren,
  c: y: '$',pricingMod,
  e: l: 'monthly',featur,
  e: s: ['OCR + LLM post-processingDuplicate detection', 'ApprovalsQuickBooks/Xero sync']
    benefi,
  t: s: ['Reduce AP time by 70%Fewer errors'],ta,
  g: s: ['OCRFinance', 'AP']
    marketPri,
  c: e: '$199–$999/mo + setup $2k–$8k'
  }
]