<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export type EnterpriseITSolution = {
    starter: string; // e.g. "$2, 999 / mo";

export type EnterpriseITSolution = {
export type EnterpriseITSolution = {;



<<<<<<< HEAD
export type EnterpriseITSolution = {
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  id: string;
  name: string;
  tagline?: string;
  description: string;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  category:
    | 'Enterprise Security'
    | 'DevOps & Automation'
    | 'Data & Analytics'
    | 'Cloud Services'
    | 'Cybersecurity';
  pricing: {

    starter: string; // e.g. "$2, 999 / mo";

    professional?: string;
    enterprise?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d


  };


<<<<<<< HEAD
  category:;
=======
<<<<<<< HEAD
  category:;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  features: string[];
  integrations?: string[];
  use_cases?: string[];
  link: string; // canonical internal link under /services/*;
  real_service?: boolean;
  rating?: number;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

      'Policy-based access',
      'Micro-segmentation',
  launch_date?: string;
=======
  launchDate?: string;
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======

=======
  launchDate?: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d

export const enterpriseITSolutions: EnterpriseITSolution[] = [
  {
    id: 'zero-trust-network-architecture'
    name: 'Zero Trust Network Architecture'
    tagline: 'Identity-first perimeterless security for modern enterprises'
    description:
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.'
    category: 'Enterprise Security'
    pricing: { starter: '$4,999/mo', enterprise: 'Custom' }
    features: [
  {
    id: 'platform-engineering-foundation'
    name: 'Platform Engineering Foundation'
    description:
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.'
    category: 'DevOps & Automation'
    pricing: { starter: '$3,499/mo' }
    features: [
  {
    id: 'enterprise-data-mesh'
    name: 'Enterprise Data Mesh'
    description:
      'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.'
    category: 'Data & Analytics'
    pricing: { starter: '$5,999/mo' }
    features: [
  {
    id: 'cloud-migration-accelerator'
    name: 'Cloud Migration Accelerator'
    description:
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.'
    category: 'Cloud Services'
    pricing: { starter: '$2,999/mo' }
    features: [
  {
    id: 'threat-detection-response'
    name: 'Threat Detection & Response'
    description:
      'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.'
    category: 'Cybersecurity'
    pricing: { starter: '$3,999/mo' }
    features: [
  {
    id: 'observability-platform-starter'
    name: 'Observability Platform Starter'
    description:
      'Unified logs, metrics, traces with SLO governance and incident workflows.'
    category: 'DevOps & Automation'
    pricing: { starter: '$1,999/mo' }
    features: [
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'Device posture checks',
      'SSO & MFA integration',
    ],
    integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],

    use_cases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',
    real_service: true,
    launch_date: '2025 - 11 - 01',

  },
  {

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'Golden pipelines',
      'RBAC and policy packs',
      'Cost guardrails',
    ],
    integrations: ['GitHub', 'ArgoCD', 'Backstage'],

    use_cases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com / services / platform - engineering - foundation',
    real_service: true,
    rating: 4.8,

  },
  {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: 'enterprise - data - mesh',
    name: 'Enterprise Data Mesh',
    description:;
      'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
    category: 'Data & Analytics',
    pricing: { starter: '$5, 999 / mo' },
    features: [;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'Domain data products',
      'Catalog & lineage',
      'Access governance',
      'Quality SLAs',
    ],
    integrations: ['Snowflake', 'Databricks', 'BigQuery'],

    use_cases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com / services / enterprise - data - mesh',
    real_service: true,

  },
  {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: 'cloud - migration - accelerator',
    name: 'Cloud Migration Accelerator',
    description:;
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
    category: 'Cloud Services',
    pricing: { starter: '$2, 999 / mo' },
    features: [;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'Landing zones',
      'Infra as Code',
      'Automated cutovers',
      'FinOps baselines',
    ],
    integrations: ['AWS', 'Azure', 'GCP'],

    use_cases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com / services / cloud - landing - zone',
    real_service: true,

  },
  {

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'SOAR playbooks',
      'Attack surface monitoring',
      'Threat intel',
    ],
    integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],

    use_cases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',
    real_service: true,

  },
  {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: 'observability - platform - starter',
    name: 'Observability Platform Starter',
    description:;
      'Unified logs, metrics, traces with SLO governance and incident workflows.',
    category: 'DevOps & Automation',
    pricing: { starter: '$1, 999 / mo' },
    features: [;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      'OpenTelemetry ingest',
      'SLO dashboards',
      'Burn rate alerts',
      'Incident workflows',
    ],
    integrations: ['Grafana', 'Datadog', 'PagerDuty'],

    use_cases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com / services / api - observability - starter',
    real_service: true,

  },
  {

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: 'cost - governance - suite',
    name: 'Cloud Cost Governance Suite',
    description:;
      'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
    category: 'Cloud Services',
    pricing: { starter: '$2, 499 / mo' },
    features: [;

      'Budget guardrails',
      'Anomaly alerts',
      'Forecasting',
      'Showback / chargeback',
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],

    use_cases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com / cloud - cost - optimizer',
    real_service: true,

  },
  {

    id: 'identity - governance - administration',
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    category: 'Enterprise Security',
    pricing: { starter: '$3, 499 / mo' },
    features: [;
      'Lifecycle automation',
      'Access reviews',
      'RBAC & SoD',
      'Provisioning workflows',
    ],
    integrations: ['Okta', 'Azure AD', 'Google Workspace'],

export const enterpriseITSolutions: EnterpriseITSolution[] = [
  {
    id: 'zero-trust-network-architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Identity-first perimeterless security for modern enterprises',
    description:
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    category: 'Enterprise Security',
    pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
    features: [
      'Policy-based access',
      'Micro-segmentation',
      'Device posture checks',
      'SSO & MFA integration',
    ],
    integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],

    use_cases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',
    real_service: true,
    launch_date: '2025 - 11 - 01',

  {
      'Golden pipelines',
      'RBAC and policy packs',
      'Cost guardrails',
    ],
    integrations: ['GitHub', 'ArgoCD', 'Backstage'],
      'Domain data products',
      'Catalog & lineage',
      'Access governance',
      'Quality SLAs',
    ],
    integrations: ['Snowflake', 'Databricks', 'BigQuery'],
      'Landing zones',
      'Infra as Code',
      'Automated cutovers',
      'FinOps baselines',
    ],
    integrations: ['AWS', 'Azure', 'GCP'],
      'SOAR playbooks',
      'Attack surface monitoring',
      'Threat intel',
    ],
    integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
      'OpenTelemetry ingest',
      'SLO dashboards',
      'Burn rate alerts',
      'Incident workflows',
    ],
    integrations: ['Grafana', 'Datadog', 'PagerDuty'],
      'Budget guardrails',
      'Anomaly alerts',
      'Forecasting',
      'Showback / chargeback',
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
  {
<<<<<<< HEAD
=======
    id: 'identity-governance-administration',
    name: 'Identity Governance & Administration',
    description:
      'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',
    category: 'Enterprise Security',
    pricing: { starter: '$3,499/mo' },
    features: [
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      'Lifecycle automation',
      'Access reviews',
      'RBAC & SoD',
      'Provisioning workflows',
    ],
    integrations: ['Okta', 'Azure AD', 'Google Workspace'],
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
}];	id: string;
	name: string;

	id: string, name: string,

	tagline?: string;
	description: string;
<<<<<<< HEAD
=======
=======



}];	id: string;
	name: string;

=======
	id: string, name: string,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
	tagline?: string;
	description: string;



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export type EnterpriseITSolution = {
	id: string,
	name: string,
	tagline?: string,
	description: string,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
	pricing: {
		starter: string, // e && e.g. "$2,999/mo"
		professional?: string;
		enterprise?: string
	}
	features: string[];
	integrations?: string[];
	useCases?: string[]
<<<<<<< HEAD
=======
=======

	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
	pricing: {
<<<<<<< HEAD
		starter: string, // e && e.g. "$2,999/mo"
		professional?: string;
=======
		starter: string, // e.g. "$2,999/mo"
		professional?: string,
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
		enterprise?: string


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
	},
	features: string[],
	integrations?: string[],
	useCases?: string[],
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
	link: string, // canonical internal link under /services/*
	realService?: boolean;
	rating?: number;
	launchDate?: string
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/zero-trust-network-architecture';
		realService: true,

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/platform-engineering-foundation';
		realService: true,
		rating: 4 && 4.8
	};

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/enterprise-data-mesh',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/cloud-landing-zone',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/quantum-cybersecurity-services',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/api-observability-starter',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/cloud-cost-optimizer',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/sso-and-user-lifecycle-hub',

		realService: true
	}
];
<<<<<<< HEAD
=======


=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

},

export const enterpriseITSolutions: EnterpriseITSolution[] = [
<<<<<<< HEAD
=======

	}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
];
;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
