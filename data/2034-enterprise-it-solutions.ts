<<<<<<< HEAD
export type EnterpriseITSolution = {
    starter: string; // e.g. "$2, 999 / mo";
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export type EnterpriseITSolution = {
=======
export type EnterpriseITSolution = {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  id: string;
  name: string;
  tagline?: string;
  description: string;
  category:
    | 'Enterprise Security'
    | 'DevOps & Automation'
    | 'Data & Analytics'
    | 'Cloud Services'
    | 'Cybersecurity';
  pricing: {
<<<<<<< HEAD

    starter: string; // e.g. "$2, 999 / mo";

    professional?: string;
    enterprise?: string;

<<<<<<< HEAD
=======

  };


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
    starter: string; // e.g. "$2,999/mo"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    professional?: string;
    enterprise?: string;
<<<<<<< HEAD
  }
=======
  };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  features: string[];
  integrations?: string[];
  use_cases?: string[];
  link: string; // canonical internal link under /services/*;
  real_service?: boolean;
  rating?: number;
<<<<<<< HEAD
<<<<<<< HEAD
  launchDate?: string;

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Policy-based access',
      'Micro-segmentation',
  launch_date?: string;
=======
  launchDate?: string;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
export const enterpriseITSolutions: EnterpriseITSolution[] = [;
  {
    id: 'zero - trust - network - architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Identity - first perimeterless security for modern enterprises',
    description:;
      'Implement a Zero Trust security model with policy - based access, continuous verification, and micro - segmentation across users, devices, and workloads.',
    category: 'Enterprise Security',
    pricing: { starter: '$4, 999 / mo', enterprise: 'Custom' },
    features: [;
      'Policy - based access',
      'Micro - segmentation',
<<<<<<< HEAD

=======
  launchDate?: string;

};

export const enterpriseITSolutions: EnterpriseITSolution[] = [
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Identity-first perimeterless security for modern enterprises',
    description:
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
    category: 'Enterprise Security',
    pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
    features: [
      'Policy-based access',
      'Micro-segmentation',
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Device posture checks',
      'SSO & MFA integration',
    ],
    integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    use_cases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',
    real_service: true,
    launch_date: '2025 - 11 - 01',
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Self-service templates',
    id: 'platform - engineering - foundation',
    name: 'Platform Engineering Foundation',
    description:;
      'Golden paths, paved roads, and self - service deployment for developers with strong guardrails and governance.',
    category: 'DevOps & Automation',
    pricing: { starter: '$3, 499 / mo' },
    features: [;
      'Self - service templates',
<<<<<<< HEAD

=======
    useCases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
    realService: true,
    launchDate: '2025-11-01',
  },
  {
    id: 'platform-engineering-foundation',
    name: 'Platform Engineering Foundation',
    description:
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
    category: 'DevOps & Automation',
    pricing: { starter: '$3,499/mo' },
    features: [
      'Self-service templates',
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Golden pipelines',
      'RBAC and policy packs',
      'Cost guardrails',
    ],
    integrations: ['GitHub', 'ArgoCD', 'Backstage'],
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    use_cases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com / services / platform - engineering - foundation',
    real_service: true,
    rating: 4.8,
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: 'enterprise - data - mesh',
    name: 'Enterprise Data Mesh',
    description:;
      'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
    category: 'Data & Analytics',
    pricing: { starter: '$5, 999 / mo' },
    features: [;
<<<<<<< HEAD

=======
    useCases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
    realService: true,
    rating: 4.8,
  },
  {
    id: 'enterprise-data-mesh',
    name: 'Enterprise Data Mesh',
    description:
      'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
    category: 'Data & Analytics',
    pricing: { starter: '$5,999/mo' },
    features: [
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Domain data products',
      'Catalog & lineage',
      'Access governance',
      'Quality SLAs',
    ],
    integrations: ['Snowflake', 'Databricks', 'BigQuery'],
<<<<<<< HEAD

    use_cases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com / services / enterprise - data - mesh',
    real_service: true,

=======
    use_cases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com / services / enterprise - data - mesh',
    real_service: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: 'cloud - migration - accelerator',
    name: 'Cloud Migration Accelerator',
    description:;
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
    category: 'Cloud Services',
    pricing: { starter: '$2, 999 / mo' },
    features: [;
<<<<<<< HEAD

=======
    useCases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
    realService: true,
  },
  {
    id: 'cloud-migration-accelerator',
    name: 'Cloud Migration Accelerator',
    description:
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
    category: 'Cloud Services',
    pricing: { starter: '$2,999/mo' },
    features: [
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Landing zones',
      'Infra as Code',
      'Automated cutovers',
      'FinOps baselines',
    ],
    integrations: ['AWS', 'Azure', 'GCP'],
<<<<<<< HEAD

    use_cases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com / services / cloud - landing - zone',
    real_service: true,

=======
    use_cases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com / services / cloud - landing - zone',
    real_service: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Detections-as-code',
    id: 'threat - detection - response',
    name: 'Threat Detection & Response',
    description:;
      'Modern SOC capabilities with detections - as - code, attack surface reduction, and automated response.',
    category: 'Cybersecurity',
    pricing: { starter: '$3, 999 / mo' },
    features: [;
      'Detections - as - code',
<<<<<<< HEAD

=======
    useCases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com/services/cloud-landing-zone',
    realService: true,
  },
  {
    id: 'threat-detection-response',
    name: 'Threat Detection & Response',
    description:
      'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',
    category: 'Cybersecurity',
    pricing: { starter: '$3,999/mo' },
    features: [
      'Detections-as-code',
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'SOAR playbooks',
      'Attack surface monitoring',
      'Threat intel',
    ],
    integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
<<<<<<< HEAD

    use_cases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',
    real_service: true,

=======
    use_cases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',
    real_service: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: 'observability - platform - starter',
    name: 'Observability Platform Starter',
    description:;
      'Unified logs, metrics, traces with SLO governance and incident workflows.',
    category: 'DevOps & Automation',
    pricing: { starter: '$1, 999 / mo' },
    features: [;
<<<<<<< HEAD

=======
    useCases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
    realService: true,
  },
  {
    id: 'observability-platform-starter',
    name: 'Observability Platform Starter',
    description:
      'Unified logs, metrics, traces with SLO governance and incident workflows.',
    category: 'DevOps & Automation',
    pricing: { starter: '$1,999/mo' },
    features: [
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'OpenTelemetry ingest',
      'SLO dashboards',
      'Burn rate alerts',
      'Incident workflows',
    ],
    integrations: ['Grafana', 'Datadog', 'PagerDuty'],
<<<<<<< HEAD

    use_cases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com / services / api - observability - starter',
    real_service: true,

=======
    use_cases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com / services / api - observability - starter',
    real_service: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: 'cost - governance - suite',
    name: 'Cloud Cost Governance Suite',
    description:;
      'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
    category: 'Cloud Services',
    pricing: { starter: '$2, 499 / mo' },
    features: [;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      'Budget guardrails',
      'Anomaly alerts',
      'Forecasting',
      'Showback / chargeback',
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
<<<<<<< HEAD

    use_cases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com / cloud - cost - optimizer',
    real_service: true,

=======
    use_cases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com / cloud - cost - optimizer',
    real_service: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD

=======
    id: 'identity - governance - administration',
=======
    useCases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com/services/api-observability-starter',
    realService: true,
  },
  {
    id: 'cost-governance-suite',
    name: 'Cloud Cost Governance Suite',
    description:
      'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
    category: 'Cloud Services',
    pricing: { starter: '$2,499/mo' },
    features: [
      'Budget guardrails',
      'Anomaly alerts',
      'Forecasting',
      'Showback/chargeback',
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
    useCases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    realService: true,
  },
  {
    id: 'identity-governance-administration',

    name: 'Identity Governance & Administration',
    description:;
      'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.',
=======
<<<<<<< HEAD
    id: 'identity - governance - administration',
    name: 'Identity Governance & Administration',
    description:;
      'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.',
    category: 'Enterprise Security',
    pricing: { starter: '$3, 499 / mo' },
    features: [;
=======
    id: 'identity-governance-administration'
    name: 'Identity Governance & Administration'
    description:
      'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.'
    category: 'Enterprise Security'
    pricing: { starter: '$3,499/mo' }
    features: [
      'Lifecycle automation'
      'Access reviews'
      'RBAC & SoD'
      'Provisioning workflows'
    ]
    integrations: ['Okta', 'Azure AD', 'Google Workspace']
    useCases: ['Audit readiness', 'Insider risk reduction']
    link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub'
    realService: true
  }
];
realService: true;
launchDate: '2025-11-01'
}
link: 'https://ziontechgroup.com/services/platform-engineering-foundation';
realService: true;
rating: 4.8
}
link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub';
realService: true
=======
};

export const enterpriseITSolutions: EnterpriseITSolution[] = [
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Identity-first perimeterless security for modern enterprises',
    description:
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    category: 'Enterprise Security',
    pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
    features: [
      'Policy-based access',
      'Micro-segmentation',
      'Device posture checks',
      'SSO & MFA integration',
    ],
    integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],
    useCases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
    realService: true,
    launchDate: '2025-11-01',
  },
  {
    id: 'platform-engineering-foundation',
    name: 'Platform Engineering Foundation',
    description:
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
    category: 'DevOps & Automation',
    pricing: { starter: '$3,499/mo' },
    features: [
      'Self-service templates',
      'Golden pipelines',
      'RBAC and policy packs',
      'Cost guardrails',
    ],
    integrations: ['GitHub', 'ArgoCD', 'Backstage'],
    useCases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
    realService: true,
    rating: 4.8,
  },
  {
    id: 'enterprise-data-mesh',
    name: 'Enterprise Data Mesh',
    description:
      'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
    category: 'Data & Analytics',
    pricing: { starter: '$5,999/mo' },
    features: [
      'Domain data products',
      'Catalog & lineage',
      'Access governance',
      'Quality SLAs',
    ],
    integrations: ['Snowflake', 'Databricks', 'BigQuery'],
    useCases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
    realService: true,
  },
  {
    id: 'cloud-migration-accelerator',
    name: 'Cloud Migration Accelerator',
    description:
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
    category: 'Cloud Services',
    pricing: { starter: '$2,999/mo' },
    features: [
      'Landing zones',
      'Infra as Code',
      'Automated cutovers',
      'FinOps baselines',
    ],
    integrations: ['AWS', 'Azure', 'GCP'],
    useCases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com/services/cloud-landing-zone',
    realService: true,
  },
  {
    id: 'threat-detection-response',
    name: 'Threat Detection & Response',
    description:
      'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',
    category: 'Cybersecurity',
    pricing: { starter: '$3,999/mo' },
    features: [
      'Detections-as-code',
      'SOAR playbooks',
      'Attack surface monitoring',
      'Threat intel',
    ],
    integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
    useCases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
    realService: true,
  },
  {
    id: 'observability-platform-starter',
    name: 'Observability Platform Starter',
    description:
      'Unified logs, metrics, traces with SLO governance and incident workflows.',
    category: 'DevOps & Automation',
    pricing: { starter: '$1,999/mo' },
    features: [
      'OpenTelemetry ingest',
      'SLO dashboards',
      'Burn rate alerts',
      'Incident workflows',
    ],
    integrations: ['Grafana', 'Datadog', 'PagerDuty'],
    useCases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com/services/api-observability-starter',
    realService: true,
  },
  {
    id: 'cost-governance-suite',
    name: 'Cloud Cost Governance Suite',
    description:
      'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
    category: 'Cloud Services',
    pricing: { starter: '$2,499/mo' },
    features: [
      'Budget guardrails',
      'Anomaly alerts',
      'Forecasting',
      'Showback/chargeback',
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
    useCases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    realService: true,
  },
  {
    id: 'identity-governance-administration',
    name: 'Identity Governance & Administration',
    description:
      'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',
    category: 'Enterprise Security',
    pricing: { starter: '$3,499/mo' },
    features: [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      'Lifecycle automation',
      'Access reviews',
      'RBAC & SoD',
      'Provisioning workflows',
    ],
    integrations: ['Okta', 'Azure AD', 'Google Workspace'],
<<<<<<< HEAD



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}];	id: string;
	name: string;

=======
	id: string, name: string,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
	tagline?: string;
	description: string;

<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
	id: string, name: string,
=======
    useCases: ['Audit readiness', 'Insider risk reduction'],
    link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
    realService: true,
  },;
];
realService: true;
launchDate: '2025-11-01' 
};
link: 'https://ziontechgroup.com/services/platform-engineering-foundation';
realService: true;
rating: 4.8 
};
link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub';
realService: true 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}];	id: string;
	name: string;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
	tagline?: string;
	description: string;
<<<<<<< HEAD
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity'
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export type EnterpriseITSolution = {
	id: string,
	name: string,
	tagline?: string,
	description: string,
<<<<<<< HEAD

	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
	pricing: {
<<<<<<< HEAD
		starter: string, // e && e.g. "$2,999/mo"
		professional?: string;
=======
		starter: string, // e.g. "$2,999/mo"
		professional?: string,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
		enterprise?: string
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
	}
	features: string[];
	integrations?: string[];
	useCases?: string[]
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
	},
	features: string[],
	integrations?: string[],
	useCases?: string[],
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
	link: string, // canonical internal link under /services/*
	realService?: boolean,
	rating?: number,
	launchDate?: string
<<<<<<< HEAD
<<<<<<< HEAD

		tagline: 'Identity-first perimeterless security for modern enterprises',
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
		category: 'Enterprise Security',
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],
		integrations: ['OktaAzure ADCloudflare Zero Trust'],
		useCases: ['Secure remote workLateral movement prevention'],
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
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],
		integrations: ['GitHubArgoCDBackstage'],
		useCases: ['Developer productivityStandardized delivery'],
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
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
		realService: true

export type EnterpriseITSolution = {;
	id: string,;
	name: string,;
	tagline?: string,;
	description: string,;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',;
	pricing: {;
		starter: string, // e.g. "$2,999/mo";
		professional?: string,;
		enterprise?: string;
	},;
	features: string[],;
	integrations?: string[],;
	useCases?: string[],;
	link: string, // canonical internal link under /services/*;
	realService?: boolean,;
	rating?: number,;
	launchDate?: string;
},;
export const enterpriseITSolutions: EnterpriseITSolution[] = [;
	{;
		id: 'zero-trust-network-architecture',;
		name: 'Zero Trust Network Architecture',;
		tagline: 'Identity-first perimeterless security for modern enterprises',;
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',;
		category: 'Enterprise Security',;
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },;
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],;
		integrations: ['OktaAzure ADCloudflare Zero Trust'],;
		useCases: ['Secure remote workLateral movement prevention'],;
		link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',;
		realService: true,;
		launchDate: '2025-11-01';
	},;
	{;
		id: 'platform-engineering-foundation',;
		name: 'Platform Engineering Foundation',;
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',;
		category: 'DevOps & Automation',;
		pricing: { starter: '$3,499/mo' },;
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],;
		integrations: ['GitHubArgoCDBackstage'],;
		useCases: ['Developer productivityStandardized delivery'],;
		link: 'https://ziontechgroup.com/services/platform-engineering-foundation',;
		realService: true,;
		rating: 4.8;
	},;
	{;
		id: 'enterprise-data-mesh',;
		name: 'Enterprise Data Mesh',;
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',;
		category: 'Data & Analytics',;
		pricing: { starter: '$5,999/mo' },;
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'],;
		integrations: ['SnowflakeDatabricksBigQuery'],;
		useCases: ['Faster analyticsFederated governance'],;
		link: 'https://ziontechgroup.com/services/enterprise-data-mesh',;
		realService: true;
	},;
	{;
		id: 'cloud-migration-accelerator',;
		name: 'Cloud Migration Accelerator',;
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',;
		category: 'Cloud Services',;
		pricing: { starter: '$2,999/mo' },;
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'],;
		integrations: ['AWSAzureGCP'],;
		useCases: ['Datacenter exitHybrid cloud enablement'],;
		link: 'https://ziontechgroup.com/services/cloud-landing-zone',;
		realService: true;
	},;
	{;
		id: 'threat-detection-response',;
		name: 'Threat Detection & Response',;
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',;
		category: 'Cybersecurity',;
		pricing: { starter: '$3,999/mo' },;
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'],;
		integrations: ['CrowdStrikeWizSnykCloudflare'],;
		useCases: ['Compliance readinessBreaches prevention'],;
		link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',;
		realService: true;
	},;
	{;
		id: 'observability-platform-starter',;
		name: 'Observability Platform Starter',;
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',;
		category: 'DevOps & Automation',;
		pricing: { starter: '$1,999/mo' },;
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'],;
		integrations: ['GrafanaDatadogPagerDuty'],;
		useCases: ['MTTR reductionReliability governance'],;
		link: 'https://ziontechgroup.com/services/api-observability-starter',;
		realService: true;
	},;
	{;
		id: 'cost-governance-suite',;
		name: 'Cloud Cost Governance Suite',;
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',;
		category: 'Cloud Services',;
		pricing: { starter: '$2,499/mo' },;
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'],;
		integrations: ['AWS CURAzure CostGCP Billing'],;
		useCases: ['Cost optimizationBudget adherence'],;
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',;
		realService: true;
	},;
	{;
		id: 'identity-governance-administration',;
		name: 'Identity Governance & Administration',;
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',;
		category: 'Enterprise Security',;
		pricing: { starter: '$3,499/mo' },;
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'],;
		integrations: ['OktaAzure ADGoogle Workspace'],;
		useCases: ['Audit readinessInsider risk reduction'],;
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',;
		realService: true;
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/zero-trust-network-architecture';
		realService: true,

=======
}
export const enterpriseITSolutions: EnterpriseITSolution[] = [
	{
		id: 'zero-trust-network-architecture';
		name: 'Zero Trust Network Architecture';
		tagline: 'Identity-first perimeterless security for modern enterprises'
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.';
		category: 'Enterprise Security'
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' }
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'];
		integrations: ['OktaAzure ADCloudflare Zero Trust'];
		useCases: ['Secure remote workLateral movement prevention'];
		link: 'https://ziontechgroup && ziontechgroup.com/services/zero-trust-network-architecture';
		realService: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		launchDate: '2025-11-01'
	}
	{
		id: 'platform-engineering-foundation';
		name: 'Platform Engineering Foundation'
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.';
		category: 'DevOps & Automation'
		pricing: { starter: '$3,499/mo' }
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'];
		integrations: ['GitHubArgoCDBackstage'];
		useCases: ['Developer productivityStandardized delivery'];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		link: 'https://ziontechgroup && ziontechgroup.com/services/platform-engineering-foundation';
		realService: true,
		rating: 4 && 4.8
	};
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
	{
		id: 'enterprise-data-mesh';
		name: 'Enterprise Data Mesh'
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
		category: 'Data & Analytics'
		pricing: { starter: '$5,999/mo' }
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'];
		integrations: ['SnowflakeDatabricksBigQuery'];
		useCases: ['Faster analyticsFederated governance'];
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/enterprise-data-mesh',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/enterprise-data-mesh',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		realService: true
	}
	{
		id: 'cloud-migration-accelerator';
		name: 'Cloud Migration Accelerator'
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.';
		category: 'Cloud Services'
		pricing: { starter: '$2,999/mo' }
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'];
		integrations: ['AWSAzureGCP'];
		useCases: ['Datacenter exitHybrid cloud enablement'];
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/cloud-landing-zone',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/cloud-landing-zone',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		realService: true
	}
	{
		id: 'threat-detection-response';
		name: 'Threat Detection & Response'
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.';
		category: 'Cybersecurity'
		pricing: { starter: '$3,999/mo' }
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'];
		integrations: ['CrowdStrikeWizSnykCloudflare'];
		useCases: ['Compliance readinessBreaches prevention'];
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/quantum-cybersecurity-services',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/quantum-cybersecurity-services',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		realService: true
	}
	{
		id: 'observability-platform-starter';
		name: 'Observability Platform Starter'
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.';
		category: 'DevOps & Automation'
		pricing: { starter: '$1,999/mo' }
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'];
		integrations: ['GrafanaDatadogPagerDuty'];
		useCases: ['MTTR reductionReliability governance'];
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/api-observability-starter',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/api-observability-starter',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		realService: true
	}
	{
		id: 'cost-governance-suite';
		name: 'Cloud Cost Governance Suite'
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.';
		category: 'Cloud Services'
		pricing: { starter: '$2,499/mo' }
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'];
		integrations: ['AWS CURAzure CostGCP Billing'];
		useCases: ['Cost optimizationBudget adherence'];
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/cloud-cost-optimizer',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/cloud-cost-optimizer',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		realService: true
	}
	{
		id: 'identity-governance-administration';
		name: 'Identity Governance & Administration'
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.';
		category: 'Enterprise Security'
		pricing: { starter: '$3,499/mo' }
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'];
		integrations: ['OktaAzure ADGoogle Workspace'];
		useCases: ['Audit readinessInsider risk reduction'];
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/sso-and-user-lifecycle-hub',

		realService: true
	}
];


=======
=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/sso-and-user-lifecycle-hub',
		realService: true
	}
];
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    use_cases: ['Audit readiness', 'Insider risk reduction'],
    link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',
    real_service: true,
  },
];
real_service: true;
launch_date: '2025 - 11 - 01';
}
link: 'https://ziontechgroup.com / services / platform - engineering - foundation';
real_service: true;
rating: 4.8;
}
link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub';
real_service: true;
}];	id: string;
name: string;
tagline?: string;
description: string;
category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
pricing: {
  starter: string, // e.g. "$2, 999 / mo";
  professional?: string;
  enterprise?: string;
}
features: string[];
integrations?: string[];
use_cases?: string[],
link: string, // canonical internal link under /services/*;
real_service?: boolean;
rating?: number;
launch_date?: string;
}
;
export const enterpriseITSolutions: EnterpriseITSolution[] = [;
{
  id: 'zero - trust - network - architecture';
  name: 'Zero Trust Network Architecture';
  tagline: 'Identity - first perimeterless security for modern enterprises',
  description: 'Implement a Zero Trust security model with policy - based access, continuous verification, and micro - segmentation across users, devices, and workloads.';
  category: 'Enterprise Security',
  pricing: { starter: '$4, 999 / mo', enterprise: 'Custom' }
  features: ['Policy - based access_micro - segmentation_device posture checksSSO & MFA integration'];
  integrations: ['OktaAzure ADCloudflare Zero Trust'];
  use_cases: ['Secure remote work_lateral movement prevention'];
  link: 'https://ziontechgroup.com / services / zero - trust - network - architecture';
  real_service: true,
  launch_date: '2025 - 11 - 01';
}
{
  id: 'platform - engineering - foundation';
  name: 'Platform Engineering Foundation',
  description: 'Golden paths, paved roads, and self - service deployment for developers with strong guardrails and governance.';
  category: 'DevOps & Automation',
  pricing: { starter: '$3, 499 / mo' }
  features: ['Self - service templates_golden pipelinesRBAC and policy packs_cost guardrails'];
  integrations: ['GitHubArgoCDBackstage'];
  use_cases: ['Developer productivity_standardized delivery'];
  link: 'https://ziontechgroup.com / services / platform - engineering - foundation';
  real_service: true,
  rating: 4.8;
}
{
  id: 'enterprise - data - mesh';
  name: 'Enterprise Data Mesh',
  description: 'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
  category: 'Data & Analytics',
  pricing: { starter: '$5, 999 / mo' }
  features: ['Domain data products_catalog & lineage_access governance_quality SLAs'];
  integrations: ['SnowflakeDatabricksBigQuery'];
  use_cases: ['Faster analytics_federated governance'];
  link: 'https://ziontechgroup.com / services / enterprise - data - mesh',
  real_service: true;
}
{
  id: 'cloud - migration - accelerator';
  name: 'Cloud Migration Accelerator',
  description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.';
  category: 'Cloud Services',
  pricing: { starter: '$2, 999 / mo' }
  features: ['Landing zones_infra as CodeAutomated cutoversFinOps baselines'];
  integrations: ['AWSAzureGCP'];
  use_cases: ['Datacenter exit_hybrid cloud enablement'];
  link: 'https://ziontechgroup.com / services / cloud - landing - zone',
  real_service: true;
}
{
  id: 'threat - detection - response';
  name: 'Threat Detection & Response',
  description: 'Modern SOC capabilities with detections - as - code, attack surface reduction, and automated response.';
  category: 'Cybersecurity',
  pricing: { starter: '$3, 999 / mo' }
  features: ['Detections - as - codeSOAR playbooks_attack surface monitoring_threat intel'];
  integrations: ['CrowdStrikeWizSnykCloudflare'];
  use_cases: ['Compliance readiness_breaches prevention'];
  link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',
  real_service: true;
}
{
  id: 'observability - platform - starter';
  name: 'Observability Platform Starter',
  description: 'Unified logs, metrics, traces with SLO governance and incident workflows.';
  category: 'DevOps & Automation',
  pricing: { starter: '$1, 999 / mo' }
  features: ['OpenTelemetry ingestSLO dashboards_burn rate alerts_incident workflows'];
  integrations: ['GrafanaDatadogPagerDuty'];
  use_cases: ['MTTR reduction_reliability governance'];
  link: 'https://ziontechgroup.com / services / api - observability - starter',
  real_service: true;
}
{
  id: 'cost - governance - suite';
  name: 'Cloud Cost Governance Suite',
  description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.';
  category: 'Cloud Services',
  pricing: { starter: '$2, 499 / mo' }
  features: ['Budget guardrails_anomaly alertsForecastingShowback / chargeback'];
  integrations: ['AWS CURAzure CostGCP Billing'];
  use_cases: ['Cost optimization_budget adherence'];
  link: 'https://ziontechgroup.com / cloud - cost - optimizer',
  real_service: true;
}
{
  id: 'identity - governance - administration';
  name: 'Identity Governance & Administration',
  description: 'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.';
  category: 'Enterprise Security',
  pricing: { starter: '$3, 499 / mo' }
  features: ['Lifecycle automation_access reviewsRBAC & SoDProvisioning workflows'];
  integrations: ['OktaAzure ADGoogle Workspace'];
  use_cases: ['Audit readiness_insider risk reduction'];
  link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',
  real_service: true;
}
=======

},

export const enterpriseITSolutions: EnterpriseITSolution[] = [
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

	}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
];
<<<<<<< HEAD

=======
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

=======
},

export const enterpriseITSolutions: EnterpriseITSolution[] = [
<<<<<<< HEAD
	{;
		id: 'zero-trust-network-architecture';
		name: 'Zero Trust Network Architecture';
=======
	{
		id: 'zero-trust-network-architecture',
		name: 'Zero Trust Network Architecture',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
		tagline: 'Identity-first perimeterless security for modern enterprises',
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
		category: 'Enterprise Security',
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],
		integrations: ['OktaAzure ADCloudflare Zero Trust'],
		useCases: ['Secure remote workLateral movement prevention'],
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
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],
		integrations: ['GitHubArgoCDBackstage'],
		useCases: ['Developer productivityStandardized delivery'],
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
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
		realService: true
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type EnterpriseITSolution = {;
	id: string,;
	name: string,;
	tagline?: string,;
	description: string,;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',;
	pricing: {;
		starter: string, // e.g. "$2,999/mo";
		professional?: string,;
		enterprise?: string;
	},;
	features: string[],;
	integrations?: string[],;
	useCases?: string[],;
	link: string, // canonical internal link under /services/*;
	realService?: boolean,;
	rating?: number,;
	launchDate?: string;
},;
export const enterpriseITSolutions: EnterpriseITSolution[] = [;
	{;
		id: 'zero-trust-network-architecture',;
		name: 'Zero Trust Network Architecture',;
		tagline: 'Identity-first perimeterless security for modern enterprises',;
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',;
		category: 'Enterprise Security',;
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },;
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],;
		integrations: ['OktaAzure ADCloudflare Zero Trust'],;
		useCases: ['Secure remote workLateral movement prevention'],;
		link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',;
		realService: true,;
		launchDate: '2025-11-01';
	},;
	{;
		id: 'platform-engineering-foundation',;
		name: 'Platform Engineering Foundation',;
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',;
		category: 'DevOps & Automation',;
		pricing: { starter: '$3,499/mo' },;
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],;
		integrations: ['GitHubArgoCDBackstage'],;
		useCases: ['Developer productivityStandardized delivery'],;
		link: 'https://ziontechgroup.com/services/platform-engineering-foundation',;
		realService: true,;
		rating: 4.8;
	},;
	{;
		id: 'enterprise-data-mesh',;
		name: 'Enterprise Data Mesh',;
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',;
		category: 'Data & Analytics',;
		pricing: { starter: '$5,999/mo' },;
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'],;
		integrations: ['SnowflakeDatabricksBigQuery'],;
		useCases: ['Faster analyticsFederated governance'],;
		link: 'https://ziontechgroup.com/services/enterprise-data-mesh',;
		realService: true;
	},;
	{;
		id: 'cloud-migration-accelerator',;
		name: 'Cloud Migration Accelerator',;
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',;
		category: 'Cloud Services',;
		pricing: { starter: '$2,999/mo' },;
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'],;
		integrations: ['AWSAzureGCP'],;
		useCases: ['Datacenter exitHybrid cloud enablement'],;
		link: 'https://ziontechgroup.com/services/cloud-landing-zone',;
		realService: true;
	},;
	{;
		id: 'threat-detection-response',;
		name: 'Threat Detection & Response',;
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',;
		category: 'Cybersecurity',;
		pricing: { starter: '$3,999/mo' },;
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'],;
		integrations: ['CrowdStrikeWizSnykCloudflare'],;
		useCases: ['Compliance readinessBreaches prevention'],;
		link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',;
		realService: true;
	},;
	{;
		id: 'observability-platform-starter',;
		name: 'Observability Platform Starter',;
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',;
		category: 'DevOps & Automation',;
		pricing: { starter: '$1,999/mo' },;
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'],;
		integrations: ['GrafanaDatadogPagerDuty'],;
		useCases: ['MTTR reductionReliability governance'],;
		link: 'https://ziontechgroup.com/services/api-observability-starter',;
		realService: true;
	},;
	{;
		id: 'cost-governance-suite',;
		name: 'Cloud Cost Governance Suite',;
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',;
		category: 'Cloud Services',;
		pricing: { starter: '$2,499/mo' },;
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'],;
		integrations: ['AWS CURAzure CostGCP Billing'],;
		useCases: ['Cost optimizationBudget adherence'],;
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',;
		realService: true;
	},;
	{;
		id: 'identity-governance-administration',;
		name: 'Identity Governance & Administration',;
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',;
		category: 'Enterprise Security',;
		pricing: { starter: '$3,499/mo' },;
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'],;
		integrations: ['OktaAzure ADGoogle Workspace'],;
		useCases: ['Audit readinessInsider risk reduction'],;
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',;
		realService: true;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
	}
];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
