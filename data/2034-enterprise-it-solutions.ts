export type EnterpriseITSolution = {_id: string;
	name: string;
	tagline?: string;
	description: string;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity';
	pricing: {
		starter: string; // e.g. "$2, _999/mo"
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

export const enterpriseITSolutions: EnterpriseITSolution[] = [
	{_id: 'zero-trust-network-architecture', _name: 'Zero Trust Network Architecture', _tagline: 'Identity-first perimeterless security for modern enterprises', _description: 'Implement a Zero Trust security model with policy-based access, _continuous verification, _and micro-segmentation across users, _devices, _and workloads.', _category: 'Enterprise Security', _pricing: { starter: '$4, _999/mo', _enterprise: 'Custom'},
		features: ['Policy-based access', 'Micro-segmentation', 'Device posture checks', 'SSO & MFA integration'],
		integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],
		useCases: ['Secure remote work', 'Lateral movement prevention'],
		link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
		realService: true,
		launchDate: '2025-11-01'
	},
	{_id: 'platform-engineering-foundation', _name: 'Platform Engineering Foundation', _description: 'Golden paths, _paved roads, _and self-service deployment for developers with strong guardrails and governance.', _category: 'DevOps & Automation', _pricing: { starter: '$3, _499/mo'},
		features: ['Self-service templates', 'Golden pipelines', 'RBAC and policy packs', 'Cost guardrails'],
		integrations: ['GitHub', 'ArgoCD', 'Backstage'],
		useCases: ['Developer productivity', 'Standardized delivery'],
		link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
		realService: true,
		rating: 4.8
	},
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
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
		realService: true
	}
];