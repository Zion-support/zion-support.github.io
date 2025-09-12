export type EnterpriseITSolution = {
	id: string;
	name: string;
	tagline?: string;
	description: string;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity';
	pricing: {
		starter: string; // e.g. "$2,999/mo"
		professional?: string;
		enterprise?: string;
	};
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string; // canonical internal link under /services/*
	realService?: boolean;
	rating?: number;
	launchDate?: string;
};

<<<<<<< HEAD
export const enterpriseITSolutions: EnterpriseITSolution[] = [
	{
		id: 'zero-trust-network-architecture',
		name: 'Zero Trust Network Architecture',
		tagline: 'Identity-first perimeterless security for modern enterprises',
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
		category: 'Enterprise Security',
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
		features: ['Policy-based access', 'Micro-segmentation', 'Device posture checks', 'SSO & MFA integration'],
		integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],
		useCases: ['Secure remote work', 'Lateral movement prevention'],
		link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
		realService: true,
		launchDate: '2025-11-01'
	},
	{
		id: 'platform-engineering-foundation',
		name: 'Platform Engineering Foundation',
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
		category: 'DevOps & Automation',
		pricing: { starter: '$3,499/mo' },
		features: ['Self-service templates', 'Golden pipelines', 'RBAC and policy packs', 'Cost guardrails'],
		integrations: ['GitHub', 'ArgoCD', 'Backstage'],
		useCases: ['Developer productivity', 'Standardized delivery'],
		link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
		realService: true,
		rating: 4.8
	},
	{
		id: 'enterprise-data-mesh',
		name: 'Enterprise Data Mesh',
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
		category: 'Data & Analytics',
		pricing: { starter: '$5,999/mo' },
		features: ['Domain data products', 'Catalog & lineage', 'Access governance', 'Quality SLAs'],
		integrations: ['Snowflake', 'Databricks', 'BigQuery'],
		useCases: ['Faster analytics', 'Federated governance'],
		link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
		realService: true
	},
	{
		id: 'cloud-migration-accelerator',
		name: 'Cloud Migration Accelerator',
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
		category: 'Cloud Services',
		pricing: { starter: '$2,999/mo' },
		features: ['Landing zones', 'Infra as Code', 'Automated cutovers', 'FinOps baselines'],
		integrations: ['AWS', 'Azure', 'GCP'],
		useCases: ['Datacenter exit', 'Hybrid cloud enablement'],
		link: 'https://ziontechgroup.com/services/cloud-landing-zone',
		realService: true
	},
	{
		id: 'threat-detection-response',
		name: 'Threat Detection & Response',
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',
		category: 'Cybersecurity',
		pricing: { starter: '$3,999/mo' },
		features: ['Detections-as-code', 'SOAR playbooks', 'Attack surface monitoring', 'Threat intel'],
		integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
		useCases: ['Compliance readiness', 'Breaches prevention'],
		link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
		realService: true
	},
	{
		id: 'observability-platform-starter',
		name: 'Observability Platform Starter',
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',
		category: 'DevOps & Automation',
		pricing: { starter: '$1,999/mo' },
		features: ['OpenTelemetry ingest', 'SLO dashboards', 'Burn rate alerts', 'Incident workflows'],
		integrations: ['Grafana', 'Datadog', 'PagerDuty'],
		useCases: ['MTTR reduction', 'Reliability governance'],
		link: 'https://ziontechgroup.com/services/api-observability-starter',
		realService: true
	},
	{
		id: 'cost-governance-suite',
		name: 'Cloud Cost Governance Suite',
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
		category: 'Cloud Services',
		pricing: { starter: '$2,499/mo' },
		features: ['Budget guardrails', 'Anomaly alerts', 'Forecasting', 'Showback/chargeback'],
		integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
		useCases: ['Cost optimization', 'Budget adherence'],
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',
		realService: true
	},
	{
		id: 'identity-governance-administration',
		name: 'Identity Governance & Administration',
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',
		category: 'Enterprise Security',
		pricing: { starter: '$3,499/mo' },
		features: ['Lifecycle automation', 'Access reviews', 'RBAC & SoD', 'Provisioning workflows'],
		integrations: ['Okta', 'Azure AD', 'Google Workspace'],
		useCases: ['Audit readiness', 'Insider risk reduction'],
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
		realService: true
=======
export const enterpriseITSolutions: EnhancedRealMicroSaasService[] = [
	{
		id: 'enterprise-sso-scim-accelerator-2034',
		name: 'Enterprise SSO + SCIM Accelerator',
		tagline: 'Ship enterprise SSO and provisioning 5x faster',
		price: '$299',
		period: '/month',
		description: 'Production-grade SAML/OIDC with SCIM provisioning adapters, test suites, audit logs, and branding for faster enterprise deals.',
		features: [
			'SAML/OIDC providers ready-to-go',
			'SCIM provisioning adapters',
			'Compliance-friendly audit logs',
			'End-to-end conformance tests',
			'Tenant branding and theming',
			'Example enterprise app'
		],
		popular: true,
		icon: '🔐',
		color: 'from-indigo-700 to-purple-800',
		textColor: 'text-indigo-300',
		link: 'https://ziontechgroup.com/services/sso-scim-accelerator',
		marketPosition: 'Alternative to custom builds; complements WorkOS/Auth0 PS.',
		targetAudience: 'SaaS teams targeting enterprise procurement',
		trialDays: 14,
		setupTime: '3–7 days',
		category: 'Enterprise IT',
		realService: true,
		technology: ['NextAuth', 'WorkOS/Custom', 'Node.js'],
		integrations: ['Okta', 'Azure AD', 'Google Workspace', 'OneLogin'],
		useCases: ['Enterprise pilots', 'User lifecycle', 'SSO rollout'],
		roi: 'Shorten security reviews by 50–70%',
		competitors: ['WorkOS', 'Auth0 PS'],
		marketSize: '$6B identity',
		growthRate: '20% CAGR',
		variant: 'quantum-cyberpunk' as any,
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Adapters, sample app, e2e tests, and docs.',
		launchDate: '2025-03-17',
		customers: 4,
		rating: 4.8,
		reviews: 2
	},
	{
		id: 'managed-apple-mdm-2034',
		name: 'Managed Apple MDM (ABM/DEP)',
		tagline: 'Zero‑touch enrollment and compliance for macOS/iOS fleets',
		price: '$8',
		period: '/device/month',
		description: 'Design and operate Apple MDM with ABM/DEP, app management, profiles, and compliance checks. Includes runbooks and SLAs.',
		features: [
			'ABM/DEP integration',
			'App and profile management',
			'Compliance and reporting',
			'Incident playbooks',
			'Onboarding automation',
			'Helpdesk workflows'
		],
		popular: false,
		icon: '🍎',
		color: 'from-rose-700 to-red-800',
		textColor: 'text-rose-200',
		link: 'https://ziontechgroup.com/services/apple-mdm-suite',
		marketPosition: 'Brings SMB-friendly services to Apple fleet ops.',
		targetAudience: 'IT teams, MSPs',
		trialDays: 0,
		setupTime: '2–4 weeks',
		category: 'Enterprise IT',
		realService: true,
		technology: ['ABM/DEP', 'MDM'],
		integrations: ['Jamf', 'Kandji'],
		useCases: ['Zero‑touch onboarding', 'Compliance', 'App lifecycle'],
		roi: 'Reduce manual device setup by 90%',
		competitors: ['Jamf PS', 'Kandji PS'],
		marketSize: '$2B MDM services',
		growthRate: '18% CAGR',
		variant: 'itsm-futuristic' as any,
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'ABM/DEP setup, profile catalog, compliance dashboards.',
		launchDate: '2025-03-22',
		customers: 3,
		rating: 4.6,
		reviews: 2
>>>>>>> origin/content/blog-sept12
	}
];