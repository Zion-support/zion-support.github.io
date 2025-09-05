<<<<<<< HEAD
export const real2027Q3Additions = [
  {
    id: 'it-asset-discovery-agent',
    name: 'IT Asset Discovery Agent',
    tagline: 'Agentless network-wide discovery and enrichment',
    price: '$149',
    period: '/month',
    description: 'Continuously discover devices, services, and SaaS apps across your environment with CMDB export and change tracking.',
    features: [
      'Agentless subnet scanning and SaaS discoveryOS, version, and CVE enrichmentCMDB, ServiceNow, and Jira exportChange detection and drift alerts'
    ],
    category: 'Enterprise IT',
    link: '/it-asset-discovery-agent',
    realService: true,
    roi: 'Reduce manual inventory work by 80% and avoid surprise shadow IT risks.'
  },
  {
    id: 'managed-postgres-ha',
    name: 'Managed Postgres HA',
    tagline: 'High availability PostgreSQL with SRE runbooks',
    price: '$1,200',
    period: '/month',
    description: 'Turnkey HA architecture with PITR backups, automatic failover, and expert tuning backed by SRE playbooks.',
    features: [
      'Streaming replication and automatic failoverPITR backups with retention policiesPerformance tuning and query insightsSecurity hardening and auditing'
    ],
    category: 'Cloud & Infrastructure',
    link: '/managed-postgres-ha',
    realService: true,
    roi: 'Eliminate 2–4 on-call incidents/month and improve p99 latency by 20–40%.'
  },
  {
    id: 'vector-search-starter',
    name: 'Vector Search Starter',
    tagline: 'Production RAG foundation with evals and ops',
    price: '$89',
    period: '/month',
    description: 'Deploy a proven RAG baseline with embeddings, chunking, evaluation harness, and observability for fast iteration.',
    features: [
      'Pinecone/Weaviate/Elastic integrationsChunking strategies and deduplicationEval harness with regression testsTracing, metrics, and dashboards'
    ],
    category: 'AI & Data',
    link: '/vector-search-starter',
    realService: true,
    roi: 'Cut RAG prototyping time from weeks to days while improving answer quality.'
  },
  {
    id: 'serverless-cron-manager',
    name: 'Serverless Cron Manager',
    tagline: 'Reliable jobs with retries, idempotency, and alerting',
    price: '$39',
    period: '/month',
    description: 'Schedule and run serverless jobs at scale with observability, concurrency controls, and guaranteed delivery semantics.',
    features: [
      'Idempotent job executionPer-job concurrency and rate limitsDLQ, retries, and exponential backoffMetrics, logs, and alerting'
    ],
    category: 'Developer Tools',
    link: '/serverless-cron-manager',
    realService: true,
    roi: 'Reduce failed job incidents by 70% and engineering toil by 50%.'
  },
  {
    id: 'domain-dns-monitor',
    name: 'Domain & DNS Monitor',
    tagline: 'Proactive domain health and expiry guardrails',
    price: '$19',
    period: '/month',
    description: 'Monitor WHOIS, DNS records, TLS health, and name server changes with instant alerts and audit trails.',
    features: [
      'WHOIS expiry and registrar checksNS, MX, TXT, and CAA drift detectionTLS expiry and configuration healthSlack, Email, and Webhook alerts'
    ],
    category: 'Quality & Monitoring',
    link: '/domain-dns-monitor',
    realService: true,
    roi: 'Avoid costly outages from expired domains and misconfigured DNS.'
  },
  {
    id: 'uptime-slo-monitor',
    name: 'Uptime & SLO Monitor',
    tagline: 'Synthetic checks with SLOs and error budgets',
    price: '$29',
    period: '/month',
    description: 'Track service uptime with user-centric SLOs, burn rates, and multi-location synthetic checks.',
    features: [
      'SLO templates and burn-rate alertsMulti-region synthetic and API checksStatus pages and dashboardsChange annotations and incident links'
    ],
    category: 'Observability',
    link: '/uptime-slo-monitor',
    realService: true,
    roi: 'Cut false alerts by 60% and align reliability to user impact.'
  },
  {
    id: 'sso-user-lifecycle-automation',
    name: 'SSO User Lifecycle Automation',
    tagline: 'Provisioning, deprovisioning, and access reviews',
    price: '$199',
    period: '/month',
    description: 'Automate SCIM provisioning, offboarding, and periodic access reviews across Okta/Auth0/WorkOS.',
    features: [
      'Just-in-time provisioningSCIM connectors and custom mappersAccess review workflowsAudit logs and exports'
    ],
    category: 'Security & Identity',
    link: '/sso-user-lifecycle-automation',
    realService: true,
    roi: 'Reduce onboarding time by 80% and access risk by 50%.'
  },
  {
    id: 'api-observability-starter',
    name: 'API Observability Starter',
    tagline: 'Traces, metrics, logs for APIs in minutes',
    price: '$49',
    period: '/month',
    description: 'One-click OpenTelemetry setup with golden signals, latency SLOs, and dashboards for REST and gRPC APIs.',
    features: [
      'Automatic instrumentation presetsLatency percentiles and error ratesSLO burn and dependency graphsAlert templates and runbooks'
    ],
    category: 'Observability',
    link: '/api-observability-starter',
    realService: true,
    roi: 'Decrease MTTR by 40% and increase release confidence.'
  },
  {
    id: 'kubernetes-rbac-auditor',
    name: 'Kubernetes RBAC Auditor',
    tagline: 'Least-privilege insights and drift detection',
    price: '$79',
    period: '/month',
    description: 'Continuously analyze RBAC bindings, detect excessive privileges, and auto-generate least-privilege policies.',
    features: [
      'RBAC graph analysis and reportsPolicy suggestions and PRsAudit trails and drift alertsMulti-cluster support'
    ],
    category: 'Security & Identity',
    link: '/kubernetes-rbac-auditor',
    realService: true,
    roi: 'Reduce lateral movement risk and pass audits faster.'
  },
  {
    id: 'infrastructure-drift-detector',
    name: 'Infrastructure Drift Detector',
    tagline: 'Detect and reconcile infra drift automatically',
    price: '$69',
    period: '/month',
    description: 'Detects drift between IaC (Terraform) and live cloud state, with approvals and auto-remediation.',
    features: [
      'Terraform plan diffs as PR commentsChange approval workflowsSelective auto-remediationMulti-cloud support'
    ],
    category: 'Cloud & Infrastructure',
    link: '/infrastructure-drift-detector',
    realService: true,
    roi: 'Prevent config drift incidents and reduce compliance toil.'
  },
  {
    id: 'incident-copilot',
    name: 'Incident Copilot',
    tagline: 'AI-assisted incident response and postmortems',
    price: '$99',
    period: '/month',
    description: 'Triage, summarize, and coordinate incidents with auto-generated timelines and draft postmortems.',
    features: [
      'Auto triage and severity suggestionChannel orchestration (Slack/Teams)Timeline and comms templatesPostmortem drafts and actions'
    ],
    category: 'Operations',
    link: '/incident-copilot',
    realService: true,
    roi: 'Reduce incident resolution time by 30–50% and improve learning capture.'
  },
  {
    id: 'ai-market-research',
    name: 'AI Market Research',
    tagline: 'Automated landscape scans and insight briefs',
    price: '$79',
    period: '/month',
    description: 'Automate competitor tracking, category mapping, and trend detection with exportable insight briefs.',
    features: [
      'Web and doc ingestion with citationsCompetitor profiles and matricesAlerts for launches and pricing changesExport to Slides/Docs'
    ],
    category: 'AI & Data',
    link: '/ai-market-research',
    realService: true,
    roi: 'Save 10–20 analyst hours per week while increasing coverage.'
  },
  {
    id: 'ai-sales-automation',
    name: 'AI Sales Automation',
    tagline: 'Sequencing, enrichment, and AI reply drafting',
    price: '$59',
    period: '/month',
    description: 'Automate prospecting, enrichment, and multi-channel outreach with AI-drafted replies and meeting booking.',
    features: [
      'Lead enrichment and routingMultichannel sequencesAI-generated replies with approvalsPipeline analytics'
    ],
    category: 'Sales & Marketing',
    link: '/ai-sales-automation',
    realService: true,
    roi: 'Increase meetings booked by 20–40% with consistent outreach.'
  },
  {
    id: 'ai-legal-contract-analyzer',
    name: 'AI Legal Contract Analyzer',
    tagline: 'Clause extraction, risk flags, and playbooks',
    price: '$99',
    period: '/month',
    description: 'Extract key clauses, flag risks, and align to your negotiation playbooks with redlines and exports.',
    features: [
      'Smart clause detection and summariesRisk scoring and deviationsPlaybook alignment and suggestionsExport to Word/PDF'
    ],
    category: 'Legal & Compliance',
    link: '/ai-legal-contract-analyzer',
    realService: true,
    roi: 'Cut review cycles from weeks to days and reduce outside counsel spend.'
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    tagline: 'SEO-optimized content with brand voice',
    price: '$49',
    period: '/month',
    description: 'High-quality SEO content in your brand voice with templates, approvals, and CMS integrations.',
    features: [
      'Templates and brand voicesSEO scoring and suggestionsCollaboration and approvalsWordPress/Shopify integrations'
    ],
    category: 'Content & Marketing',
    link: '/ai-content-generator',
    realService: true,
    roi: 'Publish 3–5x more content while improving rankings.'
  },
  {
    id: 'email-dmarc-analyzer',
    name: 'Email DMARC Analyzer',
    tagline: 'DMARC, DKIM, SPF reporting and policy help',
    price: '$29',
    period: '/month',
    description: 'Aggregate and analyze DMARC reports with actionable guidance to reach enforcement safely.',
    features: [
      'Aggregate and forensic reportsSource identification and alignmentPolicy simulation and enforcement guidesAlerts and exports'
    ],
    category: 'Security & Identity',
    link: '/email-dmarc-analyzer',
    realService: true,
    roi: 'Improve deliverability and block spoofing/phishing attempts.'
  },
  {
    id: 'api-security-scanner',
    name: 'API Security Scanner',
    tagline: 'API discovery and vuln scanning with CI gates',
    price: '$199',
    period: '/month',
    description: 'Continuously map APIs and detect OWASP API Top 10 risks with CI gating and drift detection.',
    features: [
      'Discovery via traffic/specsOWASP API Top 10 checksPR annotations and CI gatingChange detection and drift alerts'
    ],
    category: 'Security & Identity',
    link: '/api-security-scanner',
    realService: true,
    roi: 'Prevent high-severity API incidents and cut MTTR.'
  }
],
=======
export const _real2027Q3Additions = [
  {_id: 'it-asset-discovery-agent', _name: 'IT Asset Discovery Agent', _tagline: 'Agentless network-wide discovery and enrichment', _price: '$149', _period: '/month', _description: 'Continuously discover devices, _services, _and SaaS apps across your environment with CMDB export and change tracking.', _features: [
      'Agentless subnet scanning and SaaS discovery', _'OS, _version, _and CVE enrichment', _'CMDB, _ServiceNow, _and Jira export', _'Change detection and drift alerts'
    ], _category: 'Enterprise IT', _link: '/it-asset-discovery-agent', _realService: true, _roi: 'Reduce manual inventory work by 80% and avoid surprise shadow IT risks.'},
  {_id: 'managed-postgres-ha', _name: 'Managed Postgres HA', _tagline: 'High availability PostgreSQL with SRE runbooks', _price: '$1, _200', _period: '/month', _description: 'Turnkey HA architecture with PITR backups, _automatic failover, _and expert tuning backed by SRE playbooks.', _features: [
      'Streaming replication and automatic failover', _'PITR backups with retention policies', _'Performance tuning and query insights', _'Security hardening and auditing'
    ], _category: 'Cloud & Infrastructure', _link: '/managed-postgres-ha', _realService: true, _roi: 'Eliminate 2–4 on-call incidents/month and improve p99 latency by 20–40%.'},
  {_id: 'vector-search-starter', _name: 'Vector Search Starter', _tagline: 'Production RAG foundation with evals and ops', _price: '$89', _period: '/month', _description: 'Deploy a proven RAG baseline with embeddings, _chunking, _evaluation harness, _and observability for fast iteration.', _features: [
      'Pinecone/Weaviate/Elastic integrations', _'Chunking strategies and deduplication', _'Eval harness with regression tests', _'Tracing, _metrics, _and dashboards'
    ], _category: 'AI & Data', _link: '/vector-search-starter', _realService: true, _roi: 'Cut RAG prototyping time from weeks to days while improving answer quality.'},
  {_id: 'serverless-cron-manager', _name: 'Serverless Cron Manager', _tagline: 'Reliable jobs with retries, _idempotency, _and alerting', _price: '$39', _period: '/month', _description: 'Schedule and run serverless jobs at scale with observability, _concurrency controls, _and guaranteed delivery semantics.', _features: [
      'Idempotent job execution', _'Per-job concurrency and rate limits', _'DLQ, _retries, _and exponential backoff', _'Metrics, _logs, _and alerting'
    ], _category: 'Developer Tools', _link: '/serverless-cron-manager', _realService: true, _roi: 'Reduce failed job incidents by 70% and engineering toil by 50%.'},
  {_id: 'domain-dns-monitor', _name: 'Domain & DNS Monitor', _tagline: 'Proactive domain health and expiry guardrails', _price: '$19', _period: '/month', _description: 'Monitor WHOIS, _DNS records, _TLS health, _and name server changes with instant alerts and audit trails.', _features: [
      'WHOIS expiry and registrar checks', _'NS, _MX, _TXT, _and CAA drift detection', _'TLS expiry and configuration health', _'Slack, _Email, _and Webhook alerts'
    ], _category: 'Quality & Monitoring', _link: '/domain-dns-monitor', _realService: true, _roi: 'Avoid costly outages from expired domains and misconfigured DNS.'},
  {_id: 'uptime-slo-monitor', _name: 'Uptime & SLO Monitor', _tagline: 'Synthetic checks with SLOs and error budgets', _price: '$29', _period: '/month', _description: 'Track service uptime with user-centric SLOs, _burn rates, _and multi-location synthetic checks.', _features: [
      'SLO templates and burn-rate alerts', _'Multi-region synthetic and API checks', _'Status pages and dashboards', _'Change annotations and incident links'
    ], _category: 'Observability', _link: '/uptime-slo-monitor', _realService: true, _roi: 'Cut false alerts by 60% and align reliability to user impact.'},
  {_id: 'sso-user-lifecycle-automation', _name: 'SSO User Lifecycle Automation', _tagline: 'Provisioning, _deprovisioning, _and access reviews', _price: '$199', _period: '/month', _description: 'Automate SCIM provisioning, _offboarding, _and periodic access reviews across Okta/Auth0/WorkOS.', _features: [
      'Just-in-time provisioning', _'SCIM connectors and custom mappers', _'Access review workflows', _'Audit logs and exports'
    ], _category: 'Security & Identity', _link: '/sso-user-lifecycle-automation', _realService: true, _roi: 'Reduce onboarding time by 80% and access risk by 50%.'},
  {_id: 'api-observability-starter', _name: 'API Observability Starter', _tagline: 'Traces, _metrics, _logs for APIs in minutes', _price: '$49', _period: '/month', _description: 'One-click OpenTelemetry setup with golden signals, _latency SLOs, _and dashboards for REST and gRPC APIs.', _features: [
      'Automatic instrumentation presets', _'Latency percentiles and error rates', _'SLO burn and dependency graphs', _'Alert templates and runbooks'
    ], _category: 'Observability', _link: '/api-observability-starter', _realService: true, _roi: 'Decrease MTTR by 40% and increase release confidence.'},
  {_id: 'kubernetes-rbac-auditor', _name: 'Kubernetes RBAC Auditor', _tagline: 'Least-privilege insights and drift detection', _price: '$79', _period: '/month', _description: 'Continuously analyze RBAC bindings, _detect excessive privileges, _and auto-generate least-privilege policies.', _features: [
      'RBAC graph analysis and reports', _'Policy suggestions and PRs', _'Audit trails and drift alerts', _'Multi-cluster support'
    ], _category: 'Security & Identity', _link: '/kubernetes-rbac-auditor', _realService: true, _roi: 'Reduce lateral movement risk and pass audits faster.'},
  {_id: 'infrastructure-drift-detector', _name: 'Infrastructure Drift Detector', _tagline: 'Detect and reconcile infra drift automatically', _price: '$69', _period: '/month', _description: 'Detects drift between IaC (Terraform) and live cloud state, _with approvals and auto-remediation.', _features: [
      'Terraform plan diffs as PR comments', _'Change approval workflows', _'Selective auto-remediation', _'Multi-cloud support'
    ], _category: 'Cloud & Infrastructure', _link: '/infrastructure-drift-detector', _realService: true, _roi: 'Prevent config drift incidents and reduce compliance toil.'},
  {_id: 'incident-copilot', _name: 'Incident Copilot', _tagline: 'AI-assisted incident response and postmortems', _price: '$99', _period: '/month', _description: 'Triage, _summarize, _and coordinate incidents with auto-generated timelines and draft postmortems.', _features: [
      'Auto triage and severity suggestion', _'Channel orchestration (Slack/Teams)', _'Timeline and comms templates', _'Postmortem drafts and actions'
    ], _category: 'Operations', _link: '/incident-copilot', _realService: true, _roi: 'Reduce incident resolution time by 30–50% and improve learning capture.'},
  {_id: 'ai-market-research', _name: 'AI Market Research', _tagline: 'Automated landscape scans and insight briefs', _price: '$79', _period: '/month', _description: 'Automate competitor tracking, _category mapping, _and trend detection with exportable insight briefs.', _features: [
      'Web and doc ingestion with citations', _'Competitor profiles and matrices', _'Alerts for launches and pricing changes', _'Export to Slides/Docs'
    ], _category: 'AI & Data', _link: '/ai-market-research', _realService: true, _roi: 'Save 10–20 analyst hours per week while increasing coverage.'},
  {_id: 'ai-sales-automation', _name: 'AI Sales Automation', _tagline: 'Sequencing, _enrichment, _and AI reply drafting', _price: '$59', _period: '/month', _description: 'Automate prospecting, _enrichment, _and multi-channel outreach with AI-drafted replies and meeting booking.', _features: [
      'Lead enrichment and routing', _'Multichannel sequences', _'AI-generated replies with approvals', _'Pipeline analytics'
    ], _category: 'Sales & Marketing', _link: '/ai-sales-automation', _realService: true, _roi: 'Increase meetings booked by 20–40% with consistent outreach.'},
  {_id: 'ai-legal-contract-analyzer', _name: 'AI Legal Contract Analyzer', _tagline: 'Clause extraction, _risk flags, _and playbooks', _price: '$99', _period: '/month', _description: 'Extract key clauses, _flag risks, _and align to your negotiation playbooks with redlines and exports.', _features: [
      'Smart clause detection and summaries', _'Risk scoring and deviations', _'Playbook alignment and suggestions', _'Export to Word/PDF'
    ], _category: 'Legal & Compliance', _link: '/ai-legal-contract-analyzer', _realService: true, _roi: 'Cut review cycles from weeks to days and reduce outside counsel spend.'},
  {_id: 'ai-content-generator', _name: 'AI Content Generator', _tagline: 'SEO-optimized content with brand voice', _price: '$49', _period: '/month', _description: 'High-quality SEO content in your brand voice with templates, _approvals, _and CMS integrations.', _features: [
      'Templates and brand voices', _'SEO scoring and suggestions', _'Collaboration and approvals', _'WordPress/Shopify integrations'
    ], _category: 'Content & Marketing', _link: '/ai-content-generator', _realService: true, _roi: 'Publish 3–5x more content while improving rankings.'},
  {_id: 'email-dmarc-analyzer', _name: 'Email DMARC Analyzer', _tagline: 'DMARC, _DKIM, _SPF reporting and policy help', _price: '$29', _period: '/month', _description: 'Aggregate and analyze DMARC reports with actionable guidance to reach enforcement safely.', _features: [
      'Aggregate and forensic reports', _'Source identification and alignment', _'Policy simulation and enforcement guides', _'Alerts and exports'
    ], _category: 'Security & Identity', _link: '/email-dmarc-analyzer', _realService: true, _roi: 'Improve deliverability and block spoofing/phishing attempts.'},
  {_id: 'api-security-scanner', _name: 'API Security Scanner', _tagline: 'API discovery and vuln scanning with CI gates', _price: '$199', _period: '/month', _description: 'Continuously map APIs and detect OWASP API Top 10 risks with CI gating and drift detection.', _features: [
      'Discovery via traffic/specs', _'OWASP API Top 10 checks', _'PR annotations and CI gating', _'Change detection and drift alerts'
    ], _category: 'Security & Identity', _link: '/api-security-scanner', _realService: true, _roi: 'Prevent high-severity API incidents and cut MTTR.'}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
