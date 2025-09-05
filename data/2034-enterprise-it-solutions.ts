<<<<<<< HEAD
export type EnterpriseITSolution = {
	id: string,
	name: string,
	tagline?: string,
	description: string,
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
	pricing: {
<<<<<<< HEAD
		starter: string, // e.g. "$2,999/mo"
		professional?: string,
		enterprise?: string
	},
	features: string[],
	integrations?: string[],
	useCases?: string[],
	link: string, // canonical internal link under /services/*
	realService?: boolean,
	rating?: number,
	launchDate?: string
},
=======
		starter: string; // e.g. &quot;$2,999/mo&quot;
=======
export type EnterpriseITSolution = {_id: string;
	name: string;
	tagline?: string;
	description: string;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity';
	pricing: {
		starter: string; // e.g. "$2, _999/mo"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		professional?: string;
		enterprise?: string;};
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string; // canonical internal link under /services/*
	realService?: boolean;
	rating?: number;
	launchDate?: string;
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

export const enterpriseITSolutions: EnterpriseITSolution[] = [
<<<<<<< HEAD
	{
		id: 'zero-trust-network-architecture',
		name: 'Zero Trust Network Architecture',
		tagline: 'Identity-first perimeterless security for modern enterprises',
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
		category: 'Enterprise Security',
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],
		integrations: ['OktaAzure ADCloudflare Zero Trust'],
		useCases: ['Secure remote workLateral movement prevention'],
=======
	{_id: 'zero-trust-network-architecture', _name: 'Zero Trust Network Architecture', _tagline: 'Identity-first perimeterless security for modern enterprises', _description: 'Implement a Zero Trust security model with policy-based access, _continuous verification, _and micro-segmentation across users, _devices, _and workloads.', _category: 'Enterprise Security', _pricing: { starter: '$4, _999/mo', _enterprise: 'Custom'},
		features: ['Policy-based access', 'Micro-segmentation', 'Device posture checks', 'SSO & MFA integration'],
		integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],
		useCases: ['Secure remote work', 'Lateral movement prevention'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
		realService: true,
		launchDate: '2025-11-01'
	},
<<<<<<< HEAD
	{
		id: 'platform-engineering-foundation',
		name: 'Platform Engineering Foundation',
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
		category: 'DevOps & Automation',
		pricing: { starter: '$3,499/mo' },
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],
		integrations: ['GitHubArgoCDBackstage'],
		useCases: ['Developer productivityStandardized delivery'],
=======
	{_id: 'platform-engineering-foundation', _name: 'Platform Engineering Foundation', _description: 'Golden paths, _paved roads, _and self-service deployment for developers with strong guardrails and governance.', _category: 'DevOps & Automation', _pricing: { starter: '$3, _499/mo'},
		features: ['Self-service templates', 'Golden pipelines', 'RBAC and policy packs', 'Cost guardrails'],
		integrations: ['GitHub', 'ArgoCD', 'Backstage'],
		useCases: ['Developer productivity', 'Standardized delivery'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
		realService: true,
		rating: 4.8
	},
<<<<<<< HEAD
	{
		id: 'enterprise-data-mesh',
		name: 'Enterprise Data Mesh',
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
		category: 'Data & Analytics',
		pricing: { starter: '$5,999/mo' },
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'],
		integrations: ['SnowflakeDatabricksBigQuery'],
		useCases: ['Faster analyticsFederated governance'],
		link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
		realService: true
	},
	{
		id: 'cloud-migration-accelerator',
		name: 'Cloud Migration Accelerator',
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
		category: 'Cloud Services',
		pricing: { starter: '$2,999/mo' },
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'],
		integrations: ['AWSAzureGCP'],
		useCases: ['Datacenter exitHybrid cloud enablement'],
		link: 'https://ziontechgroup.com/services/cloud-landing-zone',
		realService: true
	},
	{
		id: 'threat-detection-response',
		name: 'Threat Detection & Response',
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',
		category: 'Cybersecurity',
		pricing: { starter: '$3,999/mo' },
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'],
		integrations: ['CrowdStrikeWizSnykCloudflare'],
		useCases: ['Compliance readinessBreaches prevention'],
		link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
		realService: true
	},
	{
		id: 'observability-platform-starter',
		name: 'Observability Platform Starter',
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',
		category: 'DevOps & Automation',
		pricing: { starter: '$1,999/mo' },
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'],
		integrations: ['GrafanaDatadogPagerDuty'],
		useCases: ['MTTR reductionReliability governance'],
		link: 'https://ziontechgroup.com/services/api-observability-starter',
		realService: true
	},
	{
		id: 'cost-governance-suite',
		name: 'Cloud Cost Governance Suite',
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
		category: 'Cloud Services',
		pricing: { starter: '$2,499/mo' },
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'],
		integrations: ['AWS CURAzure CostGCP Billing'],
		useCases: ['Cost optimizationBudget adherence'],
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',
		realService: true
	},
	{
		id: 'identity-governance-administration',
		name: 'Identity Governance & Administration',
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',
		category: 'Enterprise Security',
		pricing: { starter: '$3,499/mo' },
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'],
		integrations: ['OktaAzure ADGoogle Workspace'],
		useCases: ['Audit readinessInsider risk reduction'],
=======
	{_id: 'enterprise-data-mesh', _name: 'Enterprise Data Mesh', _description: 'Domain-oriented data ownership with discoverability, _governance, _and product thinking for analytics at scale.', _category: 'Data & Analytics', _pricing: { starter: '$5, _999/mo'},
		features: ['Domain data products', 'Catalog & lineage', 'Access governance', 'Quality SLAs'],
		integrations: ['Snowflake', 'Databricks', 'BigQuery'],
		useCases: ['Faster analytics', 'Federated governance'],
		link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
		realService: true
	},
	{_id: 'cloud-migration-accelerator', _name: 'Cloud Migration Accelerator', _description: 'Blueprints, _landing zones, _and automated cutovers to move workloads quickly and safely to the cloud.', _category: 'Cloud Services', _pricing: { starter: '$2, _999/mo'},
		features: ['Landing zones', 'Infra as Code', 'Automated cutovers', 'FinOps baselines'],
		integrations: ['AWS', 'Azure', 'GCP'],
		useCases: ['Datacenter exit', 'Hybrid cloud enablement'],
		link: 'https://ziontechgroup.com/services/cloud-landing-zone',
		realService: true
	},
	{_id: 'threat-detection-response', _name: 'Threat Detection & Response', _description: 'Modern SOC capabilities with detections-as-code, _attack surface reduction, _and automated response.', _category: 'Cybersecurity', _pricing: { starter: '$3, _999/mo'},
		features: ['Detections-as-code', 'SOAR playbooks', 'Attack surface monitoring', 'Threat intel'],
		integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
		useCases: ['Compliance readiness', 'Breaches prevention'],
		link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
		realService: true
	},
	{_id: 'observability-platform-starter', _name: 'Observability Platform Starter', _description: 'Unified logs, _metrics, _traces with SLO governance and incident workflows.', _category: 'DevOps & Automation', _pricing: { starter: '$1, _999/mo'},
		features: ['OpenTelemetry ingest', 'SLO dashboards', 'Burn rate alerts', 'Incident workflows'],
		integrations: ['Grafana', 'Datadog', 'PagerDuty'],
		useCases: ['MTTR reduction', 'Reliability governance'],
		link: 'https://ziontechgroup.com/services/api-observability-starter',
		realService: true
	},
	{_id: 'cost-governance-suite', _name: 'Cloud Cost Governance Suite', _description: 'FinOps guardrails, _forecasting, _and anomaly detection to keep cloud spending predictable.', _category: 'Cloud Services', _pricing: { starter: '$2, _499/mo'},
		features: ['Budget guardrails', 'Anomaly alerts', 'Forecasting', 'Showback/chargeback'],
		integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
		useCases: ['Cost optimization', 'Budget adherence'],
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',
		realService: true
	},
	{_id: 'identity-governance-administration', _name: 'Identity Governance & Administration', _description: 'Automate joiner/mover/leaver flows, _access reviews, _and least-privilege enforcement across SaaS and cloud.', _category: 'Enterprise Security', _pricing: { starter: '$3, _499/mo'},
		features: ['Lifecycle automation', 'Access reviews', 'RBAC & SoD', 'Provisioning workflows'],
		integrations: ['Okta', 'Azure AD', 'Google Workspace'],
		useCases: ['Audit readiness', 'Insider risk reduction'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
		realService: true
	}
],