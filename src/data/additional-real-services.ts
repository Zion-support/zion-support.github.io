// Additional real, non-mock, value-driven services catalog for the Services page;
// NO,
  T: E: Keep adding more entries over time without removing existing ones;
export interface AdditionalService {
  i,
  d: string,na,
  m: e: string,catego,
  r: y: string,tagli,
  n: e: string,descripti,
  o: n: string,featur,
  e: s: string[],pri,
  c: e: string, // e.g. "$299"
	peri,
  o: d: string, // e.g. "/month", "/project", etc.
	trialDays?: number;
	rating?: number;
	reviews?: number;
	marketSize?: string;
	growthRate?: string,
  lin: k: string, // internal route;
	icon?: string, // emoji or simple text icon;
	popular?: boolean;
	launchDate?: string;
}
}
}

export,
  const: additionalEnhancedServices: AdditionalService[] = [
  // AI Services;
	{
  i,
  d: 'ai-agent-workflows',na,
  m: e: 'AI Agent Workflows for Operations',catego,
  r: y: 'AI',tagli,
  n: e: 'Multi-agent automations for support, finance, and ops'
		descripti,
  o: n:
			"Design, deploy, and monitor production-grade AI agents (RAG, tools, memory) to automate L1/L2 support, invoice processing, lead routing, and internal knowledge Q&A with audit trails and SOC 2 controls."
		featur,
  e: s: [
  'RAG with vector DBs (Pinecone/Weaviate/Elastic)Tool us,
  e: CRM, ERP, ticketing, email, Slack, Google Workspace'
			'Guardrails, red-teaming, and safety policiesAnalytics, feedback loops, and continuous improvement'
			'SSO and data residency support'
]
		pri,
  c: e: '$2,500'
		peri,
  o: d: '/month',trialDa,
  y: s: 14,rati,
  n: g: 4.8,revie,
  w: s: 112,marketSi,
  z: e: 'Automation platforms $20B+',growthRa,
  t: e: 'CAGR 22%+',li,
  n: k: '/services/ai-business-intelligence',ic,
  o: n: '🤖',popul,
  a: r: true,launchDa,
  t: e: '2025-01-10'
},
  {
  id: 'ai-rag-intranet',na,
  m: e: 'Private RAG Intranet Search',catego,
  r: y: 'AI',tagli,
  n: e: 'Secure enterprise knowledge search with citations',descripti,
  o: n:
			"Implement retrieval augmented generation (RAG) across Google Drive, Confluence, Jira, Slack, and SharePoint with granular ACLs, citations, and redaction."
		featur,
  e: s: [
  'Connectors for major SaaS suitesRow-level permissions with secure enclaves'
			'Vector + BM25 hybrid retrievalInline citations and source previews'
			'LLM neutrality (OpenAI, Anthropic, Vertex AI)'
]
		pri,
  c: e: '$1,200'
		peri,
  o: d: '/month',trialDa,
  y: s: 14,rati,
  n: g: 4.7,revie,
  w: s: 86,marketSi,
  z: e: 'Enterprise search $8B+',growthRa,
  t: e: 'CAGR 18%+',li,
  n: k: '/services/data-analytics',ic,
  o: n: '🔎'
}
	// IT Services;
	{
  id: 'sase-zero-trust',na,
  m: e: 'SASE + Zero Trust Deployment',catego,
  r: y: 'Security',tagli,
  n: e: 'Cloud-delivered security with identity-aware access',descripti,
  o: n: "End-to-end design and rollout of SASE/Zero Trus,
  t: ZTNA, SWG, CASB, DNS, EDR, MFA/IdP, with policy baselines and playbooks."
		featur,
  e: s: [
  'Okta/Azure AD SSO + MFACloudflare/Zscaler policy configuration'
			'Endpoint baselines (macOS/Windows/Linux)Incident response runbooks'
			'Compliance-ready logging (SIEM)'
]
		pric,
  e: '$8,000'
		peri,
  o: d: '/project',rati,
  n: g: 4.9,revie,
  w: s: 54,marketSi,
  z: e: 'SASE $5B+',growthRa,
  t: e: 'CAGR 26%+',li,
  n: k: '/services/it-infrastructure',ic,
  o: n: '🛡️',popul,
  a: r: true;
},
  {
  id: 'cloud-migration-devops',na,
  m: e: 'Cloud Migration + Platform DevOps',catego,
  r: y: 'Cloud',tagli,
  n: e: 'IaC, CI/CD, observability, FinOps'
		descripti,
  o: n:
			"Blueprint, automate, and migrate workloads to AWS/GCP/Azure with Terraform, GitHub Actions, Argo, Prometheus/Grafana, and cost governance."
		featur,
  e: s: [
  'Terraform modules and policy as codeGolden CI/CD pipelines and preview envs'
			'Kubernetes hardening and autoscalingObservability SLOs with error budgets'
			'FinOps guardrails and budgets'
]
		pric,
  e: '$12,500'
		peri,
  o: d: '/project',li,
  n: k: '/services/cloud-devops',ic,
  o: n: '☁️'
}
	// Micro SaaS;
	{
  id: 'seo-content-orchestrator',na,
  m: e: 'SEO Content Orchestrator',catego,
  r: y: 'SAAS',tagli,
  n: e: 'Topic clustering, briefs, on-page audits'
		descripti,
  o: n:
			"Generate clusters and briefs, optimize internal linking, and monitor SERP movements with automated on-page audits."
		featur,
  e: s: [
  'Entity extraction and topical clusteringProgrammatic briefs and outlines'
			'On-page scoring and internal linksCompetitor gap analysis'
			'GSC and GA4 integrations'
]
		pric,
  e: '$99',peri,
  o: d: '/month',trialDa,
  y: s: 7,li,
  n: k: '/services',ic,
  o: n: '📈',popul,
  a: r: true;
},
  {
  id: 'sales-enrichment-b2b',na,
  m: e: 'B2B Sales Enrichment API',catego,
  r: y: 'SAAS',tagli,
  n: e: 'Firmographics + intent + routing',descripti,
  o: n:
			"Real-time company/person enrichment with intent signals, de-duplication, and territory routing for CRMs."
		featur,
  e: s: [
  'Firmographic and technographic datasetsEmail/domain verification'
			'Lead-to-account matchingWebhook and batch APIs'
			'Fair routing with SLAs'
]
		pric,
  e: '$149',peri,
  o: d: '/month',li,
  n: k: '/services',ic,
  o: n: '🧭'
}
	// Vertical AI solutions;
	{
  id: 'healthcare-doc-copilot',na,
  m: e: 'Healthcare Documentation Copilot',catego,
  r: y: 'AI',tagli,
  n: e: 'Ambient scribing with PHI safeguards',descripti,
  o: n: "Ambient clinical scribing and coding assistance with HIPAA/SOC 2 controls and EHR integration.",featur,
  e: s: [
  'Speaker diarization and clinical nomenclaturePHI redaction and consent capture'
			'Coding suggestions (ICD-10/CPT)EHR integration (FHIR/HL7)'
			'Audit trails and rollback'
]
		pric,
  e: '$499',peri,
  o: d: '/month',li,
  n: k: '/services',ic,
  o: n: '🩺'
},
  {
  id: 'finops-cost-optimizer',na,
  m: e: 'FinOps Cost Optimizer',catego,
  r: y: 'Cloud',tagli,
  n: e: 'Spend insights, rightsizing, anomaly alerts'
		descripti,
  o: n:
			"Automated cloud cost analysis, recommendations, and budgets across AWS/GCP/Azure with alerting and reports."
		featur,
  e: s: [
  'Commitment planning and usage forecastingRightsizing and idle detection'
			'Per-team/showback dashboardsPolicy-based shutdowns'
			'Jira/Slack notifications'
]
		pric,
  e: '$79',peri,
  o: d: '/month',li,
  n: k: '/services',ic,
  o: n: '💸'
}
	// Cybersecurity;
	{
  id: 'appsec-maturity',na,
  m: e: 'AppSec Maturity + S-SDLC',catego,
  r: y: 'Security',tagli,
  n: e: 'Threat modeling, SAST/DAST, SBOM, SCA'
		descripti,
  o: n:
			"Secure SDLC enablement with pipelines, SBOM/SCA, secrets scanning, IaC security, and continuous governance."
		featur,
  e: s: [
  'SAST/DAST integration (Snyk/OWASP/Zap)SBOM + license compliance'
			'IaC security (tfsec/Checkov)Secrets detection and policy'
			'Purple-team playbooks'
]
		pric,
  e: '$6,500'
		peri,
  o: d: '/project',li,
  n: k: '/services/cybersecurity',ic,
  o: n: '🔐'
}
	// Data & Analytics;
	{
  id: 'realtime-analytics-stack',na,
  m: e: 'Real-time Analytics Stack',catego,
  r: y: 'Analytics',tagli,
  n: e: 'Event pipelines with low-latency dashboards',descripti,
  o: n:
			"Implement streaming ingestion (Kafka/PubSub), dbt metrics, and dashboarding with governance and lineage."
		featur,
  e: s: [
  'Lakehouse architecture and ELTMetrics layer and semantic models'
			'Row-level security and PII maskingIncident playbooks and SLAs'
			'Cost controls and archival tiers'
]
		pric,
  e: '$9,500'
		peri,
  o: d: '/project',li,
  n: k: '/services/data-analytics',ic,
  o: n: '📊'
}
	// More Micro SaaS;
	{
  id: 'contract-intelligence',na,
  m: e: 'Contract Intelligence & Redlining',catego,
  r: y: 'SAAS',tagli,
  n: e: 'Clause extraction, playbooks, approvals'
		descripti,
  o: n:
			"Automate contract review, risks detection, and redlines using policy playbooks, with approvals and CRM handoff."
		featur,
  e: s: [
  'Clause library with risk scoringPlaybooks per contract type'
			'Counterparty negotiation workspaceSalesforce/HubSpot sync'
			'Audit logs and e-sign triggers'
]
		pric,
  e: '$199',peri,
  o: d: '/month',li,
  n: k: '/services',ic,
  o: n: '📄'
},
  {
  id: 'ml-observability',na,
  m: e: 'ML Observability & Governance',catego,
  r: y: 'AI',tagli,
  n: e: 'Drift, bias, evals, lineage'
		descripti,
  o: n:
			"Monitor models and prompts with eval suites, drift detection, lineage, approval workflows, and rollback."
		featur,
  e: s: [
  'Online/offline evaluation harnessPrompt library and regression tests'
			'Drift and bias detectionIncident management and approvals'
			'Cost and latency tracking'
]
		pric,
  e: '$249',peri,
  o: d: '/month',li,
  n: k: '/services',ic,
  o: n: '🧪'
}
	// IT Ops;
	{
  id: 'm365-hardening',na,
  m: e: 'Microsoft 365 Hardening + DLP',catego,
  r: y: 'IT',tagli,
  n: e: 'Email security, DLP, and posture baselines'
		descripti,
  o: n:
			"Harden Microsoft 365 with secure defaults, DLP policies, SPF/DKIM/DMARC, and attack simulation."
		featur,
  e: s: [
  'Conditional access and device baselinesEmail security (SPF/DKIM/DMARC)'
			'DLP policies and sensitivity labelsAttack simulation and training'
			'Compliance score improvements'
]
		pric,
  e: '$4,000'
		peri,
  o: d: '/project',li,
  n: k: '/services/it-infrastructure',ic,
  o: n: '📧'
},
  {
  id: 'helpdesk-ai-coach',na,
  m: e: 'Helpdesk AI Coach',catego,
  r: y: 'SAAS',tagli,
  n: e: 'Live guidance for agents with macros and KB sync',descripti,
  o: n:
			"Agent assist with suggested responses, macro automation, and live policy checks integrated into Zendesk/Jira/ServiceNow."
		featur,
  e: s: [
  'Live macros and KB syncPolicy and SLA awareness'
			'Auto-summarization and taggingQuality scoring and coaching'
			'GDPR/SOC 2 ready'
]
		pric,
  e: '$59',peri,
  o: d: '/agent/month',li,
  n: k: '/services',ic,
  o: n: '🎧',popul,
  a: r: true;
},
  ]