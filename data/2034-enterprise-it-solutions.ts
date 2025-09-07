export type EnterpriseITSolution = {
    starter: string; // e.g. "$2, 999 / mo";"
export type EnterpriseITSolution = {;



  id: string;,
  name: string;
  tagline?: string;
  description: string;


  };


  category: ;,
  features: string[];
  integrations?: string[];
  use_cases?: string[];
  link: string; // canonical internal link under /services/*;
  real_service?: boolean;
  rating?: number;
}
;
export const enterpriseITSolutions: EnterpriseITSolution[] = [;
  {"
    id: 'zero - trust - network - architecture',
    name: 'Zero Trust Network Architecture',
    tagline: 'Identity - first perimeterless security for modern enterprises',
    description:;
      'Implement a Zero Trust security model with policy - based access, continuous verification, and micro - segmentation across users, devices, and workloads.',
    category: 'Enterprise Security',
    pricing: { starter: '$4, 999 / mo', enterprise: 'Custom' },
    features: [;
      'Policy - based access',
      'Micro - segmentation',']
export const enterpriseITSolutions: EnterpriseITSolution[] = [
  {
    id: 'zero-trust-network-architecture,
  name: 'Zero Trust Network Architecture
    tagline: 'Identity-first perimeterless security for modern enterprises,
  description:
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.
    category: 'Enterprise Security,
  pricing: { starter: '$4,999/mo', enterprise: 'Custom' }
    features: [
    id: 'platform-engineering-foundation,
  name: 'Platform Engineering Foundation
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.
    category: 'DevOps & Automation,
  pricing: { starter: '$3,499/mo' }
    id: 'enterprise-data-mesh,
  name: 'Enterprise Data Mesh
      'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.
    category: 'Data & Analytics,
  pricing: { starter: '$5,999/mo' }
    id: 'cloud-migration-accelerator,
  name: 'Cloud Migration Accelerator
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.
    category: 'Cloud Services,
  pricing: { starter: '$2,999/mo' }
    id: 'threat-detection-response,
  name: 'Threat Detection & Response
      'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.
    category: 'Cybersecurity,
  pricing: { starter: '$3,999/mo' }
    id: 'observability-platform-starter,
  name: 'Observability Platform Starter
      'Unified logs, metrics, traces with SLO governance and incident workflows.
  pricing: { starter: '$1,999/mo' }
]
    id: 'zero-trust-network-architecture',
    tagline: 'Identity-first perimeterless security for modern enterprises',
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
    pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
      'Policy-based access',
      'Micro-segmentation',
      'Device posture checks',
      'SSO & MFA integration',']
    ],
    integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],
    use_cases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',
    real_service: true,
    launch_date: '2025 - 11 - 01',
  },

      'Self-service templates',
    id: 'platform - engineering - foundation',
    name: 'Platform Engineering Foundation',
      'Golden paths, paved roads, and self - service deployment for developers with strong guardrails and governance.',
    category: 'DevOps & Automation',
    pricing: { starter: '$3, 499 / mo' },
      'Self - service templates',']
    useCases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
    realService: true,
    launchDate: '2025-11-01',
    id: 'platform-engineering-foundation',
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
    pricing: { starter: '$3,499/mo' },
      'Golden pipelines',
      'RBAC and policy packs',
      'Cost guardrails',']
    integrations: ['GitHub', 'ArgoCD', 'Backstage'],
    use_cases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com / services / platform - engineering - foundation',
    rating: 4.8,


    id: 'enterprise - data - mesh',
    name: 'Enterprise Data Mesh',
      'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
    category: 'Data & Analytics',
    pricing: { starter: '$5, 999 / mo' },
    features: [;,]
  useCases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
    id: 'enterprise-data-mesh',
      'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
    pricing: { starter: '$5,999/mo' },
      'Domain data products',
      'Catalog & lineage',
      'Access governance',
      'Quality SLAs',']
    integrations: ['Snowflake', 'Databricks', 'BigQuery'],
    use_cases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com / services / enterprise - data - mesh',


    id: 'cloud - migration - accelerator',
    name: 'Cloud Migration Accelerator',
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
    category: 'Cloud Services',
    pricing: { starter: '$2, 999 / mo' },
  useCases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
    id: 'cloud-migration-accelerator',
    pricing: { starter: '$2,999/mo' },
      'Landing zones',
      'Infra as Code',
      'Automated cutovers',
      'FinOps baselines',']
    integrations: ['AWS', 'Azure', 'GCP'],
    use_cases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com / services / cloud - landing - zone',


      'Detections-as-code',
    id: 'threat - detection - response',
    name: 'Threat Detection & Response',
      'Modern SOC capabilities with detections - as - code, attack surface reduction, and automated response.',
    category: 'Cybersecurity',
    pricing: { starter: '$3, 999 / mo' },
      'Detections - as - code',']
    useCases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com/services/cloud-landing-zone',
    id: 'threat-detection-response',
      'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',
    pricing: { starter: '$3,999/mo' },
      'SOAR playbooks',
      'Attack surface monitoring',
      'Threat intel',']
    integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
    use_cases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',


    id: 'observability - platform - starter',
    name: 'Observability Platform Starter',
      'Unified logs, metrics, traces with SLO governance and incident workflows.',
    pricing: { starter: '$1, 999 / mo' },
  useCases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
    id: 'observability-platform-starter',
    pricing: { starter: '$1,999/mo' },
      'OpenTelemetry ingest',
      'SLO dashboards',
      'Burn rate alerts',
      'Incident workflows',']
    integrations: ['Grafana', 'Datadog', 'PagerDuty'],
    use_cases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com / services / api - observability - starter',


    id: 'cost - governance - suite',
    name: 'Cloud Cost Governance Suite',
      'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
    pricing: { starter: '$2, 499 / mo' },

      'Budget guardrails',
      'Anomaly alerts',
      'Forecasting',
      'Showback / chargeback',']
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
    use_cases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com / cloud - cost - optimizer',


    id: 'identity - governance - administration',
    useCases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com/services/api-observability-starter',
    id: 'cost-governance-suite',
    pricing: { starter: '$2,499/mo' },
      'Showback/chargeback',']
    useCases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    id: 'identity-governance-administration',
    name: 'Identity Governance & Administration',
      'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.',
      'Lifecycle automation',
      'Access reviews',
      'RBAC & SoD',
      'Provisioning workflows',']
    integrations: ['Okta', 'Azure AD', 'Google Workspace'],
      'Cost guardrails',
      'Quality SLAs',
      'FinOps baselines',
      'Threat intel',
      'Incident workflows',
      'Showback / chargeback',
      'Provisioning workflows',
}];	id: string;,

	id: string, name: string,




	id: string,
	name: string,
	tagline?: string,
	description: string,
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
	pricing: {,
  starter: string, // e && e.g. "$2,999/mo""
		professional?: string;
		enterprise?: string;
	useCases?: string[]
	pricing: {,"
	features: string[],
	integrations?: string[],
	useCases?: string[],
	link: string, // canonical internal link under /services/*
	realService?: boolean;
	launchDate?: string;"
		launchDate: '2025-11-01
		id: 'platform-engineering-foundation';',
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.';
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'];',
  integrations: ['GitHubArgoCDBackstage'];
		useCases: ['Developer productivityStandardized delivery'];
		id: 'enterprise-data-mesh';',
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'];',
  integrations: ['SnowflakeDatabricksBigQuery'];
		useCases: ['Faster analyticsFederated governance'];',
  realService: true;
		id: 'cloud-migration-accelerator';',
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.';
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'];',
  integrations: ['AWSAzureGCP'];
		useCases: ['Datacenter exitHybrid cloud enablement'];',
		id: 'threat-detection-response';',
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.';
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'];',
  integrations: ['CrowdStrikeWizSnykCloudflare'];
		useCases: ['Compliance readinessBreaches prevention'];',
		id: 'observability-platform-starter';',
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.';
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'];',
  integrations: ['GrafanaDatadogPagerDuty'];
		useCases: ['MTTR reductionReliability governance'];',
		id: 'cost-governance-suite';',
  name: 'Cloud Cost Governance Suite
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.';
  pricing: { starter: '$2,499/mo' }
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'];',
  integrations: ['AWS CURAzure CostGCP Billing'];
		useCases: ['Cost optimizationBudget adherence'];',
		id: 'identity-governance-administration';',
  name: 'Identity Governance & Administration
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.';
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'];',
  integrations: ['OktaAzure ADGoogle Workspace'];
		useCases: ['Audit readinessInsider risk reduction'];

export const enterpriseITSolutions: EnterpriseITSolution[] = []
];


	{;
		id: 'zero-trust-network-architecture';',
  name: 'Zero Trust Network Architecture';
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },']
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],
		integrations: ['OktaAzure ADCloudflare Zero Trust'],
		useCases: ['Secure remote workLateral movement prevention'],
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],
		integrations: ['GitHubArgoCDBackstage'],
		useCases: ['Developer productivityStandardized delivery'],
		rating: 4.8;
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'],
		integrations: ['SnowflakeDatabricksBigQuery'],
		useCases: ['Faster analyticsFederated governance'],
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'],
		integrations: ['AWSAzureGCP'],
		useCases: ['Datacenter exitHybrid cloud enablement'],
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'],
		integrations: ['CrowdStrikeWizSnykCloudflare'],
		useCases: ['Compliance readinessBreaches prevention'],
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'],
		integrations: ['GrafanaDatadogPagerDuty'],
		useCases: ['MTTR reductionReliability governance'],
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'],
		integrations: ['AWS CURAzure CostGCP Billing'],
		useCases: ['Cost optimizationBudget adherence'],
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'],
		integrations: ['OktaAzure ADGoogle Workspace'],
		useCases: ['Audit readinessInsider risk reduction'],
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',
	id: string,;
	name: string,;
	tagline?: string,;
	description: string,;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',;
	pricing: {;,
  starter: string, // e.g. "$2,999/mo";"
		professional?: string,;
	},;
	features: string[],;
	integrations?: string[],;
	useCases?: string[],;
	link: string, // canonical internal link under /services/*;
	realService?: boolean,;
	rating?: number,;
	launchDate?: string;
	{;"
		id: 'zero-trust-network-architecture',;
		name: 'Zero Trust Network Architecture',;
		tagline: 'Identity-first perimeterless security for modern enterprises',;
		description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',;
		category: 'Enterprise Security',;
		pricing: { starter: '$4,999/mo', enterprise: 'Custom' },;']
		features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],;
		integrations: ['OktaAzure ADCloudflare Zero Trust'],;
		useCases: ['Secure remote workLateral movement prevention'],;
		link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',;
		realService: true,;
		launchDate: '2025-11-01';
		id: 'platform-engineering-foundation',;
		name: 'Platform Engineering Foundation',;
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',;
		category: 'DevOps & Automation',;
		pricing: { starter: '$3,499/mo' },;
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],;
		integrations: ['GitHubArgoCDBackstage'],;
		useCases: ['Developer productivityStandardized delivery'],;
		link: 'https://ziontechgroup.com/services/platform-engineering-foundation',;
		id: 'enterprise-data-mesh',;
		name: 'Enterprise Data Mesh',;
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',;
		category: 'Data & Analytics',;
		pricing: { starter: '$5,999/mo' },;
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'],;
		integrations: ['SnowflakeDatabricksBigQuery'],;
		useCases: ['Faster analyticsFederated governance'],;
		link: 'https://ziontechgroup.com/services/enterprise-data-mesh',;
		id: 'cloud-migration-accelerator',;
		name: 'Cloud Migration Accelerator',;
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',;
		category: 'Cloud Services',;
		pricing: { starter: '$2,999/mo' },;
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'],;
		integrations: ['AWSAzureGCP'],;
		useCases: ['Datacenter exitHybrid cloud enablement'],;
		link: 'https://ziontechgroup.com/services/cloud-landing-zone',;
		id: 'threat-detection-response',;
		name: 'Threat Detection & Response',;
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',;
		category: 'Cybersecurity',;
		pricing: { starter: '$3,999/mo' },;
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'],;
		integrations: ['CrowdStrikeWizSnykCloudflare'],;
		useCases: ['Compliance readinessBreaches prevention'],;
		link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',;
		id: 'observability-platform-starter',;
		name: 'Observability Platform Starter',;
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',;
		pricing: { starter: '$1,999/mo' },;
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'],;
		integrations: ['GrafanaDatadogPagerDuty'],;
		useCases: ['MTTR reductionReliability governance'],;
		link: 'https://ziontechgroup.com/services/api-observability-starter',;
		id: 'cost-governance-suite',;
		name: 'Cloud Cost Governance Suite',;
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',;
		pricing: { starter: '$2,499/mo' },;
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'],;
		integrations: ['AWS CURAzure CostGCP Billing'],;
		useCases: ['Cost optimizationBudget adherence'],;
		link: 'https://ziontechgroup.com/cloud-cost-optimizer',;
		id: 'identity-governance-administration',;
		name: 'Identity Governance & Administration',;
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',;
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'],;
		integrations: ['OktaAzure ADGoogle Workspace'],;
		useCases: ['Audit readinessInsider risk reduction'],;
		link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',;
    use_cases: ['Audit readiness', 'Insider risk reduction'],
    link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',
real_service: true;,
  launch_date: '2025 - 11 - 01';
link: 'https://ziontechgroup.com / services / platform - engineering - foundation';',
  real_service: true;
link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub';',
description: string;,
  starter: string, // e.g. "$2, 999 / mo";"
use_cases?: string[],
launch_date?: string;
  id: 'zero - trust - network - architecture';',
  description: 'Implement a Zero Trust security model with policy - based access, continuous verification, and micro - segmentation across users, devices, and workloads.';
  pricing: { starter: '$4, 999 / mo', enterprise: 'Custom' }']
  features: ['Policy - based access_micro - segmentation_device posture checksSSO & MFA integration'];',
  integrations: ['OktaAzure ADCloudflare Zero Trust'];
  use_cases: ['Secure remote work_lateral movement prevention'];',
  link: 'https: //ziontechgroup.com / services / zero - trust - network - architecture';',
  id: 'platform - engineering - foundation';',
  description: 'Golden paths, paved roads, and self - service deployment for developers with strong guardrails and governance.';
  pricing: { starter: '$3, 499 / mo' }
  features: ['Self - service templates_golden pipelinesRBAC and policy packs_cost guardrails'];',
  use_cases: ['Developer productivity_standardized delivery'];',
  link: 'https: //ziontechgroup.com / services / platform - engineering - foundation';',
  id: 'enterprise - data - mesh';',
  description: 'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
  pricing: { starter: '$5, 999 / mo' }
  features: ['Domain data products_catalog & lineage_access governance_quality SLAs'];',
  use_cases: ['Faster analytics_federated governance'];',
  id: 'cloud - migration - accelerator';',
  pricing: { starter: '$2, 999 / mo' }
  features: ['Landing zones_infra as CodeAutomated cutoversFinOps baselines'];',
  use_cases: ['Datacenter exit_hybrid cloud enablement'];',
  id: 'threat - detection - response';',
  description: 'Modern SOC capabilities with detections - as - code, attack surface reduction, and automated response.';
  pricing: { starter: '$3, 999 / mo' }
  features: ['Detections - as - codeSOAR playbooks_attack surface monitoring_threat intel'];',
  use_cases: ['Compliance readiness_breaches prevention'];',
  id: 'observability - platform - starter';',
  pricing: { starter: '$1, 999 / mo' }
  features: ['OpenTelemetry ingestSLO dashboards_burn rate alerts_incident workflows'];',
  use_cases: ['MTTR reduction_reliability governance'];',
  id: 'cost - governance - suite';',
  pricing: { starter: '$2, 499 / mo' }
  features: ['Budget guardrails_anomaly alertsForecastingShowback / chargeback'];',
  use_cases: ['Cost optimization_budget adherence'];',
  id: 'identity - governance - administration';',
  description: 'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.';
  features: ['Lifecycle automation_access reviewsRBAC & SoDProvisioning workflows'];',
  use_cases: ['Audit readiness_insider risk reduction'];',
