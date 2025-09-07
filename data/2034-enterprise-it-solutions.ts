<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

;
export type EnterpriseITSolution = {starter: string; // e.g. "$2, 999 / mo";export type EnterpriseITSolution = {export type EnterpriseITSolution = {id: string;
  name: string;
  tagline?: string;
  description: string;
export type EnterpriseITSolution = {export type EnterpriseITSolution = {id: string;
export type EnterpriseITSolution = any;name: string;
  tagline?: string;
  description: string;
  category:;
    | 'Enterprise Security';
    | 'DevOps & Automation';
    | 'Data & Analytics';
    | 'Cloud Services';
    | 'Cybersecurity';
  pricing: {starter: string; // e.g. "$2, 999 / mo";professional?: string;
    enterprise?: string;}category:;
  category:;features: string[];
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export type EnterpriseITSolution = {
    starter: string; // e.g. "$2, 999 / mo";

export type EnterpriseITSolution = {
<<<<<<< HEAD
export type EnterpriseITSolution = {;



export type EnterpriseITSolution = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
export type EnterpriseITSolution = {



export type EnterpriseITSolution = {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  id: string;
export type EnterpriseITSolution = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  name: string;
  tagline?: string;
  description: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  category:
    | 'Enterprise Security'
    | 'DevOps & Automation'
    | 'Data & Analytics'
    | 'Cloud Services'
    | 'Cybersecurity';
  pricing: {
=======

  id: string;

export type EnterpriseITSolution = any;

  name: string;
  tagline?: string;
  description: string;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
    professional?: string;
    enterprise?: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


  };


  category:;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  category:;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  features: string[];
  integrations?: string[];
  use_cases?: string[];
  link: string; // canonical internal link under /services/*;
  real_service?: boolean;
  rating?: number;'Policy-based access','Micro-segmentation',launch_date?: string;
  launchDate?: string;}export const enterpriseITSolutions: EnterpriseITSolution[] = [;
  {id: 'zero - trust - network - architecture',name: 'Zero Trust Network Architecture',tagline: 'Identity - first perimeterless security for modern enterprises',description:;
      'Implement a Zero Trust security model with policy - based access, continuous verification, and micro - segmentation across users, devices, and workloads.',category: 'Enterprise Security',pricing: { starter: '$4, 999 / mo', enterprise: 'Custom' },features: [;
      'Policy - based access','Micro - segmentation','Device posture checks','SSO & MFA integration';
  launchDate?: string;export const enterpriseITSolutions: EnterpriseITSolution[] = [;
  {id: 'zero-trust-network-architecture';
    name: 'Zero Trust Network Architecture';
    tagline: 'Identity-first perimeterless security for modern enterprises';
    description:;
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.';
    category: 'Enterprise Security';
    pricing: { starter: '$4,999/mo', enterprise: 'Custom' }
    features: [;
  {id: 'platform-engineering-foundation';
    name: 'Platform Engineering Foundation';
    description:;
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.';
    category: 'DevOps & Automation';
    pricing: { starter: '$3,499/mo' }
    features: [;
  {id: 'enterprise-data-mesh';
    name: 'Enterprise Data Mesh';
    description:;
      'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
    category: 'Data & Analytics';
    pricing: { starter: '$5,999/mo' }
    features: [;
  {id: 'cloud-migration-accelerator';
    name: 'Cloud Migration Accelerator';
    description:;
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.';
    category: 'Cloud Services';
    pricing: { starter: '$2,999/mo' }
    features: [;
  {id: 'threat-detection-response';
    name: 'Threat Detection & Response';
    description:;
      'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.';
    category: 'Cybersecurity';
    pricing: { starter: '$3,999/mo' }
    features: [;
  {id: 'observability-platform-starter';
    name: 'Observability Platform Starter';
    description:;
      'Unified logs, metrics, traces with SLO governance and incident workflows.';
    category: 'DevOps & Automation';
    pricing: { starter: '$1,999/mo' }
    features: [;
}export const enterpriseITSolutions: EnterpriseITSolution[] = [;
  {id: 'zero-trust-network-architecture',name: 'Zero Trust Network Architecture',tagline: 'Identity-first perimeterless security for modern enterprises',description:;
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',category: 'Enterprise Security',pricing: { starter: '$4,999/mo', enterprise: 'Custom' },features: [;
      'Policy-based access','Micro-segmentation','Device posture checks','SSO & MFA integration';
ursor/fix-website-loading-errors-and-merge-6662;
      'Device posture checks','SSO & MFA integration';
    ],integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],use_cases: ['Secure remote work', 'Lateral movement prevention'],link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',real_service: true,launch_date: '2025 - 11 - 01';
    launch_date: '2025 - 11 - 01';
    launch_date: '2025 - 11 - 01';
  },{'Self-service templates',id: 'platform - engineering - foundation',name: 'Platform Engineering Foundation',description:;
      'Golden paths, paved roads, and self - service deployment for developers with strong guardrails and governance.',category: 'DevOps & Automation',pricing: { starter: '$3, 499 / mo' },features: [;
      'Self - service templates','Golden pipelines','RBAC and policy packs','Cost guardrails';
    useCases: ['Secure remote work', 'Lateral movement prevention'],link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',realService: true,launchDate: '2025-11-01';
    useCases: ['Secure remote work', 'Lateral movement prevention'],link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',realService: true,launchDate: '2025-11-01';
  },{id: 'platform-engineering-foundation',name: 'Platform Engineering Foundation',description:;
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',category: 'DevOps & Automation',pricing: { starter: '$3,499/mo' },features: [;
      'Self-service templates','Golden pipelines','RBAC and policy packs','Cost guardrails';
      'Self-service templates',ursor/fix-website-loading-errors-and-merge-6662;
      'Golden pipelines','RBAC and policy packs','Cost guardrails';
    ],integrations: ['GitHub', 'ArgoCD', 'Backstage'],use_cases: ['Developer productivity', 'Standardized delivery'],link: 'https://ziontechgroup.com / services / platform - engineering - foundation',real_service: true,rating: 4.8;
    rating: 4.8;
    rating: 4.8;
  },{'Domain data products','Catalog & lineage','Access governance','Quality SLAs';
    id: 'enterprise - data - mesh',name: 'Enterprise Data Mesh',description:;
      'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',category: 'Data & Analytics',pricing: { starter: '$5, 999 / mo' },features: [;useCases: ['Developer productivity', 'Standardized delivery'],link: 'https://ziontechgroup.com/services/platform-engineering-foundation',realService: true,rating: 4.8;
    useCases: ['Developer productivity', 'Standardized delivery'],link: 'https://ziontechgroup.com/services/platform-engineering-foundation',realService: true,rating: 4.8;
  },{id: 'enterprise-data-mesh',name: 'Enterprise Data Mesh',description:;
      'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',category: 'Data & Analytics',pricing: { starter: '$5,999/mo' },features: [;
      'Domain data products','Catalog & lineage','Access governance','Quality SLAs';
ursor/fix-website-loading-errors-and-merge-6662;
      'Domain data products','Catalog & lineage','Access governance','Quality SLAs';
    ],integrations: ['Snowflake', 'Databricks', 'BigQuery'],use_cases: ['Faster analytics', 'Federated governance'],link: 'https://ziontechgroup.com / services / enterprise - data - mesh',real_service: true;
    real_service: true;
    real_service: true;
  },{'Landing zones','Infra as Code','Automated cutovers','FinOps baselines';
    id: 'cloud - migration - accelerator',name: 'Cloud Migration Accelerator',description:;
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',category: 'Cloud Services',pricing: { starter: '$2, 999 / mo' },features: [;useCases: ['Faster analytics', 'Federated governance'],link: 'https://ziontechgroup.com/services/enterprise-data-mesh',realService: true;
    useCases: ['Faster analytics', 'Federated governance'],link: 'https://ziontechgroup.com/services/enterprise-data-mesh',realService: true;
  },{id: 'cloud-migration-accelerator',name: 'Cloud Migration Accelerator',description:;
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',category: 'Cloud Services',pricing: { starter: '$2,999/mo' },features: [;
      'Landing zones','Infra as Code','Automated cutovers','FinOps baselines';
ursor/fix-website-loading-errors-and-merge-6662;
      'Landing zones','Infra as Code','Automated cutovers','FinOps baselines';
    ],integrations: ['AWS', 'Azure', 'GCP'],use_cases: ['Datacenter exit', 'Hybrid cloud enablement'],link: 'https://ziontechgroup.com / services / cloud - landing - zone',real_service: true;
    real_service: true;
    real_service: true;
  },{'Detections-as-code',id: 'threat - detection - response',name: 'Threat Detection & Response',description:;
      'Modern SOC capabilities with detections - as - code, attack surface reduction, and automated response.',category: 'Cybersecurity',pricing: { starter: '$3, 999 / mo' },features: [;
      'Detections - as - code','SOAR playbooks','Attack surface monitoring','Threat intel';
    useCases: ['Datacenter exit', 'Hybrid cloud enablement'],link: 'https://ziontechgroup.com/services/cloud-landing-zone',realService: true;
    useCases: ['Datacenter exit', 'Hybrid cloud enablement'],link: 'https://ziontechgroup.com/services/cloud-landing-zone',realService: true;
  },{id: 'threat-detection-response',name: 'Threat Detection & Response',description:;
      'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',category: 'Cybersecurity',pricing: { starter: '$3,999/mo' },features: [;
      'Detections-as-code','SOAR playbooks','Attack surface monitoring','Threat intel';
ursor/fix-website-loading-errors-and-merge-6662;
      'SOAR playbooks','Attack surface monitoring','Threat intel';
    ],integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],use_cases: ['Compliance readiness', 'Breaches prevention'],link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',real_service: true;
    real_service: true;
    real_service: true;
  },{'OpenTelemetry ingest','SLO dashboards','Burn rate alerts','Incident workflows';
    id: 'observability - platform - starter',name: 'Observability Platform Starter',description:;
      'Unified logs, metrics, traces with SLO governance and incident workflows.',category: 'DevOps & Automation',pricing: { starter: '$1, 999 / mo' },features: [;useCases: ['Compliance readiness', 'Breaches prevention'],link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',realService: true;
    useCases: ['Compliance readiness', 'Breaches prevention'],link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',realService: true;
  },{id: 'observability-platform-starter',name: 'Observability Platform Starter',description:;
      'Unified logs, metrics, traces with SLO governance and incident workflows.',category: 'DevOps & Automation',pricing: { starter: '$1,999/mo' },features: [;
      'OpenTelemetry ingest','SLO dashboards','Burn rate alerts','Incident workflows';
ursor/fix-website-loading-errors-and-merge-6662;
      'OpenTelemetry ingest','SLO dashboards','Burn rate alerts','Incident workflows';
    ],integrations: ['Grafana', 'Datadog', 'PagerDuty'],use_cases: ['MTTR reduction', 'Reliability governance'],link: 'https://ziontechgroup.com / services / api - observability - starter',real_service: true;
    real_service: true;
    real_service: true;
  },{'Lifecycle automation','Access reviews','RBAC & SoD','Provisioning workflows';
    ],integrations: ['Okta', 'Azure AD', 'Google Workspace'];
}];	id: string;
	name: string;id: 'cost - governance - suite',name: 'Cloud Cost Governance Suite',description:;
      'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',category: 'Cloud Services',pricing: { starter: '$2, 499 / mo' },features: [;'Budget guardrails','Anomaly alerts','Forecasting','Showback / chargeback';
      'Showback / chargeback';
    ],integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],use_cases: ['Cost optimization', 'Budget adherence'],link: 'https://ziontechgroup.com / cloud - cost - optimizer',real_service: true;
    real_service: true;
  },{id: 'identity - governance - administration',useCases: ['MTTR reduction', 'Reliability governance'],link: 'https://ziontechgroup.com/services/api-observability-starter',realService: true;
    useCases: ['MTTR reduction', 'Reliability governance'],link: 'https://ziontechgroup.com/services/api-observability-starter',realService: true;
  },{id: 'cost-governance-suite',name: 'Cloud Cost Governance Suite',description:;
      'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',category: 'Cloud Services',pricing: { starter: '$2,499/mo' },features: [;
      'Budget guardrails','Anomaly alerts','Forecasting','Showback/chargeback';
      'Showback/chargeback';
    ],integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],useCases: ['Cost optimization', 'Budget adherence'],link: 'https://ziontechgroup.com/cloud-cost-optimizer',realService: true;
    realService: true;
  },{id: 'identity-governance-administration',name: 'Identity Governance & Administration',description:;
      'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.',category: 'Enterprise Security',pricing: { starter: '$3, 499 / mo' },features: [;
      'Lifecycle automation','Access reviews','RBAC & SoD','Provisioning workflows';
    ],integrations: ['Okta', 'Azure AD', 'Google Workspace'],export const enterpriseITSolutions: EnterpriseITSolution[] = [;
  {id: 'zero-trust-network-architecture',name: 'Zero Trust Network Architecture',tagline: 'Identity-first perimeterless security for modern enterprises',description:;
      'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',category: 'Enterprise Security',pricing: { starter: '$4,999/mo', enterprise: 'Custom' },features: [;
      'Policy-based access','Micro-segmentation','Device posture checks','SSO & MFA integration';
      'SSO & MFA integration';
    ],integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],use_cases: ['Secure remote work', 'Lateral movement prevention'],link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',real_service: true,launch_date: '2025 - 11 - 01',{'Golden pipelines','RBAC and policy packs','Cost guardrails';
      'Cost guardrails';
    ],integrations: ['GitHub', 'ArgoCD', 'Backstage'],'Domain data products','Catalog & lineage','Access governance','Quality SLAs';
      'Quality SLAs';
    ],integrations: ['Snowflake', 'Databricks', 'BigQuery'],'Landing zones','Infra as Code','Automated cutovers','FinOps baselines';
      'FinOps baselines';
    ],integrations: ['AWS', 'Azure', 'GCP'],'SOAR playbooks','Attack surface monitoring','Threat intel';
      'Threat intel';
    ],integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],'OpenTelemetry ingest','SLO dashboards','Burn rate alerts','Incident workflows';
      'Incident workflows';
    ],integrations: ['Grafana', 'Datadog', 'PagerDuty'],'Budget guardrails','Anomaly alerts','Forecasting','Showback / chargeback';
    ],integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],{'Lifecycle automation','Access reviews','RBAC & SoD','Provisioning workflows';
    ],integrations: ['Okta', 'Azure AD', 'Google Workspace'],'Showback / chargeback';
    ],integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],{id: 'identity-governance-administration',name: 'Identity Governance & Administration',description:;
      'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',category: 'Enterprise Security',pricing: { starter: '$3,499/mo' },features: [;
      'Lifecycle automation','Access reviews','RBAC & SoD','Provisioning workflows';
    ],integrations: ['Okta', 'Azure AD', 'Google Workspace'];
}];	id: string;
	name: string;id: string, name: string,tagline?: string;
	description: string;}];	id: string;
	name: string;id: string, name: string,tagline?: string;
	description: string;export type EnterpriseITSolution = {id: string,name: string,tagline?: string,description: string,category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',pricing: {starter: string, // e.g. "$2,999/mo";
		professional?: string,enterprise?: string;
	pricing: {enterprise?: string;
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',pricing: {starter: string, // e && e.g. "$2,999/mo";
		professional?: string;
		enterprise?: string;
	}
	features: string[];
	integrations?: string[];
	useCases?: string[];
	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',ursor/fix-website-loading-errors-and-merge-6662;
	pricing: {starter: string, // e && e.g. "$2,999/mo";
		professional?: string;
		starter: string, // e.g. "$2,999/mo";
		professional?: string,enterprise?: string;
	},features: string[],integrations?: string[],useCases?: string[],link: string, // canonical internal link under /services/*;
	realService?: boolean;
	rating?: number;
	launchDate?: string;
		link: 'https://ziontechgroup && ziontechgroup.com/services/zero-trust-network-architecture';
		realService: true,launchDate: '2025-11-01';
	}
	{id: 'platform-engineering-foundation';
		name: 'Platform Engineering Foundation';
		description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.';
		category: 'DevOps & Automation';
		pricing: { starter: '$3,499/mo' }
		features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'];
		integrations: ['GitHubArgoCDBackstage'];
		useCases: ['Developer productivityStandardized delivery'];link: 'https://ziontechgroup && ziontechgroup.com/services/platform-engineering-foundation';
		realService: true,rating: 4 && 4.8;
	}{id: 'enterprise-data-mesh';
		name: 'Enterprise Data Mesh';
		description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
		category: 'Data & Analytics';
		pricing: { starter: '$5,999/mo' }
		features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'];
		integrations: ['SnowflakeDatabricksBigQuery'];
		useCases: ['Faster analyticsFederated governance'];link: 'https://ziontechgroup && ziontechgroup.com/services/enterprise-data-mesh',link: 'https://ziontechgroup && ziontechgroup.com/services/enterprise-data-mesh',realService: true;
	}
	{id: 'cloud-migration-accelerator';
		name: 'Cloud Migration Accelerator';
		description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.';
		category: 'Cloud Services';
		pricing: { starter: '$2,999/mo' }
		features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'];
		integrations: ['AWSAzureGCP'];
		useCases: ['Datacenter exitHybrid cloud enablement'];link: 'https://ziontechgroup && ziontechgroup.com/services/cloud-landing-zone',link: 'https://ziontechgroup && ziontechgroup.com/services/cloud-landing-zone',realService: true;
	}
	{id: 'threat-detection-response';
		name: 'Threat Detection & Response';
		description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.';
		category: 'Cybersecurity';
		pricing: { starter: '$3,999/mo' }
		features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'];
		integrations: ['CrowdStrikeWizSnykCloudflare'];
		useCases: ['Compliance readinessBreaches prevention'];link: 'https://ziontechgroup && ziontechgroup.com/services/quantum-cybersecurity-services',link: 'https://ziontechgroup && ziontechgroup.com/services/quantum-cybersecurity-services',realService: true;
	}
	{id: 'observability-platform-starter';
		name: 'Observability Platform Starter';
		description: 'Unified logs, metrics, traces with SLO governance and incident workflows.';
		category: 'DevOps & Automation';
		pricing: { starter: '$1,999/mo' }
		features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'];
		integrations: ['GrafanaDatadogPagerDuty'];
		useCases: ['MTTR reductionReliability governance'];link: 'https://ziontechgroup && ziontechgroup.com/services/api-observability-starter',link: 'https://ziontechgroup && ziontechgroup.com/services/api-observability-starter',realService: true;
	}
	{id: 'cost-governance-suite';
		name: 'Cloud Cost Governance Suite';
		description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.';
		category: 'Cloud Services';
		pricing: { starter: '$2,499/mo' }
		features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'];
		integrations: ['AWS CURAzure CostGCP Billing'];
		useCases: ['Cost optimizationBudget adherence'];link: 'https://ziontechgroup && ziontechgroup.com/cloud-cost-optimizer',link: 'https://ziontechgroup && ziontechgroup.com/cloud-cost-optimizer',realService: true;
	}
	{id: 'identity-governance-administration';
		name: 'Identity Governance & Administration';
		description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.';
		category: 'Enterprise Security';
		pricing: { starter: '$3,499/mo' }
		features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'];
		integrations: ['OktaAzure ADGoogle Workspace'];
		useCases: ['Audit readinessInsider risk reduction'];link: 'https://ziontechgroup && ziontechgroup.com/services/sso-and-user-lifecycle-hub',realService: true;
	}
];use_cases: ['Audit readiness', 'Insider risk reduction'],link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',real_service: true;
  }
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
category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',pricing: {starter: string, // e.g. "$2, 999 / mo";
  professional?: string;
  enterprise?: string;
}
features: string[];
integrations?: string[];
use_cases?: string[],link: string, // canonical internal link under /services/*;
real_service?: boolean;
rating?: number;
launch_date?: string;
}export const enterpriseITSolutions: EnterpriseITSolution[] = [;
{id: 'zero - trust - network - architecture';
  name: 'Zero Trust Network Architecture';
  tagline: 'Identity - first perimeterless security for modern enterprises',description: 'Implement a Zero Trust security model with policy - based access, continuous verification, and micro - segmentation across users, devices, and workloads.';
  category: 'Enterprise Security',pricing: { starter: '$4, 999 / mo', enterprise: 'Custom' }
  features: ['Policy - based access_micro - segmentation_device posture checksSSO & MFA integration'];
  integrations: ['OktaAzure ADCloudflare Zero Trust'];
  use_cases: ['Secure remote work_lateral movement prevention'];
  link: 'https://ziontechgroup.com / services / zero - trust - network - architecture';
  real_service: true,launch_date: '2025 - 11 - 01';
}
{id: 'platform - engineering - foundation';
  name: 'Platform Engineering Foundation',description: 'Golden paths, paved roads, and self - service deployment for developers with strong guardrails and governance.';
  category: 'DevOps & Automation',pricing: { starter: '$3, 499 / mo' }
  features: ['Self - service templates_golden pipelinesRBAC and policy packs_cost guardrails'];
  integrations: ['GitHubArgoCDBackstage'];
  use_cases: ['Developer productivity_standardized delivery'];
  link: 'https://ziontechgroup.com / services / platform - engineering - foundation';
  real_service: true,rating: 4.8;
}
{id: 'enterprise - data - mesh';
  name: 'Enterprise Data Mesh',description: 'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
  category: 'Data & Analytics',pricing: { starter: '$5, 999 / mo' }
  features: ['Domain data products_catalog & lineage_access governance_quality SLAs'];
  integrations: ['SnowflakeDatabricksBigQuery'];
  use_cases: ['Faster analytics_federated governance'];
  link: 'https://ziontechgroup.com / services / enterprise - data - mesh',real_service: true;
}
{id: 'cloud - migration - accelerator';
  name: 'Cloud Migration Accelerator',description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.';
  category: 'Cloud Services',pricing: { starter: '$2, 999 / mo' }
  features: ['Landing zones_infra as CodeAutomated cutoversFinOps baselines'];
  integrations: ['AWSAzureGCP'];
  use_cases: ['Datacenter exit_hybrid cloud enablement'];
  link: 'https://ziontechgroup.com / services / cloud - landing - zone',real_service: true;
}
{id: 'threat - detection - response';
  name: 'Threat Detection & Response',description: 'Modern SOC capabilities with detections - as - code, attack surface reduction, and automated response.';
  category: 'Cybersecurity',pricing: { starter: '$3, 999 / mo' }
  features: ['Detections - as - codeSOAR playbooks_attack surface monitoring_threat intel'];
  integrations: ['CrowdStrikeWizSnykCloudflare'];
  use_cases: ['Compliance readiness_breaches prevention'];
  link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',real_service: true;
}
{id: 'observability - platform - starter';
  name: 'Observability Platform Starter',description: 'Unified logs, metrics, traces with SLO governance and incident workflows.';
  category: 'DevOps & Automation',pricing: { starter: '$1, 999 / mo' }
  features: ['OpenTelemetry ingestSLO dashboards_burn rate alerts_incident workflows'];
  integrations: ['GrafanaDatadogPagerDuty'];
  use_cases: ['MTTR reduction_reliability governance'];
  link: 'https://ziontechgroup.com / services / api - observability - starter',real_service: true;
}
{id: 'cost - governance - suite';
  name: 'Cloud Cost Governance Suite',description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.';
  category: 'Cloud Services',pricing: { starter: '$2, 499 / mo' }
  features: ['Budget guardrails_anomaly alertsForecastingShowback / chargeback'];
  integrations: ['AWS CURAzure CostGCP Billing'];
  use_cases: ['Cost optimization_budget adherence'];
  link: 'https://ziontechgroup.com / cloud - cost - optimizer',real_service: true;
}
{id: 'identity - governance - administration';
  name: 'Identity Governance & Administration',description: 'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.';
  category: 'Enterprise Security',pricing: { starter: '$3, 499 / mo' }
  features: ['Lifecycle automation_access reviewsRBAC & SoDProvisioning workflows'];
  integrations: ['OktaAzure ADGoogle Workspace'];
  use_cases: ['Audit readiness_insider risk reduction'];
  link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',real_service: true;
}},export const enterpriseITSolutions: EnterpriseITSolution[] = [;
];;
},export const enterpriseITSolutions: EnterpriseITSolution[] = [;
	}
ursor/fix-website-loading-errors-and-merge-6662;
];;
},export const enterpriseITSolutions: EnterpriseITSolution[] = [;
	{id: 'zero-trust-network-architecture';
		name: 'Zero Trust Network Architecture';
	{id: 'zero-trust-network-architecture',name: 'Zero Trust Network Architecture',tagline: 'Identity-first perimeterless security for modern enterprises',description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',category: 'Enterprise Security',pricing: { starter: '$4,999/mo', enterprise: 'Custom' },features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],integrations: ['OktaAzure ADCloudflare Zero Trust'],useCases: ['Secure remote workLateral movement prevention'],link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',realService: true,launchDate: '2025-11-01';
	},{id: 'platform-engineering-foundation',name: 'Platform Engineering Foundation',description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',category: 'DevOps & Automation',pricing: { starter: '$3,499/mo' },features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],integrations: ['GitHubArgoCDBackstage'],useCases: ['Developer productivityStandardized delivery'],link: 'https://ziontechgroup.com/services/platform-engineering-foundation',realService: true,rating: 4.8;
	},{id: 'enterprise-data-mesh',name: 'Enterprise Data Mesh',description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',category: 'Data & Analytics',pricing: { starter: '$5,999/mo' },features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'],integrations: ['SnowflakeDatabricksBigQuery'],useCases: ['Faster analyticsFederated governance'],link: 'https://ziontechgroup.com/services/enterprise-data-mesh',realService: true;
	},{id: 'cloud-migration-accelerator',name: 'Cloud Migration Accelerator',description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',category: 'Cloud Services',pricing: { starter: '$2,999/mo' },features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'],integrations: ['AWSAzureGCP'],useCases: ['Datacenter exitHybrid cloud enablement'],link: 'https://ziontechgroup.com/services/cloud-landing-zone',realService: true;
	},{id: 'threat-detection-response',name: 'Threat Detection & Response',description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',category: 'Cybersecurity',pricing: { starter: '$3,999/mo' },features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'],integrations: ['CrowdStrikeWizSnykCloudflare'],useCases: ['Compliance readinessBreaches prevention'],link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',realService: true;
	},{id: 'observability-platform-starter',name: 'Observability Platform Starter',description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',category: 'DevOps & Automation',pricing: { starter: '$1,999/mo' },features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'],integrations: ['GrafanaDatadogPagerDuty'],useCases: ['MTTR reductionReliability governance'],link: 'https://ziontechgroup.com/services/api-observability-starter',realService: true;
	},{id: 'cost-governance-suite',name: 'Cloud Cost Governance Suite',description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',category: 'Cloud Services',pricing: { starter: '$2,499/mo' },features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'],integrations: ['AWS CURAzure CostGCP Billing'],useCases: ['Cost optimizationBudget adherence'],link: 'https://ziontechgroup.com/cloud-cost-optimizer',realService: true;
	},{id: 'identity-governance-administration',name: 'Identity Governance & Administration',description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',category: 'Enterprise Security',pricing: { starter: '$3,499/mo' },features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'],integrations: ['OktaAzure ADGoogle Workspace'],useCases: ['Audit readinessInsider risk reduction'],link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',realService: true;
	}
];export type EnterpriseITSolution = {id: string,name: string,tagline?: string,description: string,category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',pricing: {starter: string, // e.g. "$2,999/mo";
		professional?: string,enterprise?: string;
	},features: string[],integrations?: string[],useCases?: string[],link: string, // canonical internal link under /services/*;
	realService?: boolean,rating?: number,launchDate?: string;
},export const enterpriseITSolutions: EnterpriseITSolution[] = [;
	{id: 'zero-trust-network-architecture',name: 'Zero Trust Network Architecture',tagline: 'Identity-first perimeterless security for modern enterprises',description: 'Implement a Zero Trust security model with policy-based access, continuous verification, and micro-segmentation across users, devices, and workloads.',category: 'Enterprise Security',pricing: { starter: '$4,999/mo', enterprise: 'Custom' },features: ['Policy-based accessMicro-segmentationDevice posture checksSSO & MFA integration'],integrations: ['OktaAzure ADCloudflare Zero Trust'],useCases: ['Secure remote workLateral movement prevention'],link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',realService: true,launchDate: '2025-11-01';
	},{id: 'platform-engineering-foundation',name: 'Platform Engineering Foundation',description: 'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',category: 'DevOps & Automation',pricing: { starter: '$3,499/mo' },features: ['Self-service templatesGolden pipelinesRBAC and policy packsCost guardrails'],integrations: ['GitHubArgoCDBackstage'],useCases: ['Developer productivityStandardized delivery'],link: 'https://ziontechgroup.com/services/platform-engineering-foundation',realService: true,rating: 4.8;
	},{id: 'enterprise-data-mesh',name: 'Enterprise Data Mesh',description: 'Domain-oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',category: 'Data & Analytics',pricing: { starter: '$5,999/mo' },features: ['Domain data productsCatalog & lineageAccess governanceQuality SLAs'],integrations: ['SnowflakeDatabricksBigQuery'],useCases: ['Faster analyticsFederated governance'],link: 'https://ziontechgroup.com/services/enterprise-data-mesh',realService: true;
	},{id: 'cloud-migration-accelerator',name: 'Cloud Migration Accelerator',description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',category: 'Cloud Services',pricing: { starter: '$2,999/mo' },features: ['Landing zonesInfra as CodeAutomated cutoversFinOps baselines'],integrations: ['AWSAzureGCP'],useCases: ['Datacenter exitHybrid cloud enablement'],link: 'https://ziontechgroup.com/services/cloud-landing-zone',realService: true;
	},{id: 'threat-detection-response',name: 'Threat Detection & Response',description: 'Modern SOC capabilities with detections-as-code, attack surface reduction, and automated response.',category: 'Cybersecurity',pricing: { starter: '$3,999/mo' },features: ['Detections-as-codeSOAR playbooksAttack surface monitoringThreat intel'],integrations: ['CrowdStrikeWizSnykCloudflare'],useCases: ['Compliance readinessBreaches prevention'],link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',realService: true;
	},{id: 'observability-platform-starter',name: 'Observability Platform Starter',description: 'Unified logs, metrics, traces with SLO governance and incident workflows.',category: 'DevOps & Automation',pricing: { starter: '$1,999/mo' },features: ['OpenTelemetry ingestSLO dashboardsBurn rate alertsIncident workflows'],integrations: ['GrafanaDatadogPagerDuty'],useCases: ['MTTR reductionReliability governance'],link: 'https://ziontechgroup.com/services/api-observability-starter',realService: true;
	},{id: 'cost-governance-suite',name: 'Cloud Cost Governance Suite',description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.',category: 'Cloud Services',pricing: { starter: '$2,499/mo' },features: ['Budget guardrailsAnomaly alertsForecastingShowback/chargeback'],integrations: ['AWS CURAzure CostGCP Billing'],useCases: ['Cost optimizationBudget adherence'],link: 'https://ziontechgroup.com/cloud-cost-optimizer',realService: true;
	},{id: 'identity-governance-administration',name: 'Identity Governance & Administration',description: 'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',category: 'Enterprise Security',pricing: { starter: '$3,499/mo' },features: ['Lifecycle automationAccess reviewsRBAC & SoDProvisioning workflows'],integrations: ['OktaAzure ADGoogle Workspace'],useCases: ['Audit readinessInsider risk reduction'],link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub',realService: true;
	}
];
	}
];
    use_cases: ['Audit readiness', 'Insider risk reduction'],link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',real_service: true;
  }
  rating?: number;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

      'Policy-based access',
      'Micro-segmentation',
  launch_date?: string;
  launchDate?: string;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  launchDate?: string;
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'Device posture checks',
      'SSO & MFA integration'
    ],
    integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],

    use_cases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',
    real_service: true,
    launch_date: '2025 - 11 - 01'

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    useCases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com/services/zero-trust-network-architecture',
    realService: true,
    launchDate: '2025-11-01'
  },
  {
    id: 'platform-engineering-foundation',
    name: 'Platform Engineering Foundation',
    description:
      'Golden paths, paved roads, and self-service deployment for developers with strong guardrails and governance.',
    category: 'DevOps & Automation',
    pricing: { starter: '$3,499/mo' },
    features: [
<<<<<<< HEAD
<<<<<<< HEAD
      'Self-service templates',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'Golden pipelines',
      'RBAC and policy packs',
      'Cost guardrails'
    ],
    integrations: ['GitHub', 'ArgoCD', 'Backstage'],

    use_cases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com / services / platform - engineering - foundation',
    real_service: true,
    rating: 4.8

  },
  {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    id: 'enterprise - data - mesh',
    name: 'Enterprise Data Mesh',
    description:;
      'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.',
    category: 'Data & Analytics',
    pricing: { starter: '$5, 999 / mo' },
    features: [;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    useCases: ['Developer productivity', 'Standardized delivery'],
    link: 'https://ziontechgroup.com/services/platform-engineering-foundation',
    realService: true,
    rating: 4.8
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'Domain data products',
      'Catalog & lineage',
      'Access governance',
      'Quality SLAs'
    ],
    integrations: ['Snowflake', 'Databricks', 'BigQuery'],

    use_cases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com / services / enterprise - data - mesh',
    real_service: true

  },
  {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    id: 'cloud - migration - accelerator',
    name: 'Cloud Migration Accelerator',
    description:;
      'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.',
    category: 'Cloud Services',
    pricing: { starter: '$2, 999 / mo' },
    features: [;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    useCases: ['Faster analytics', 'Federated governance'],
    link: 'https://ziontechgroup.com/services/enterprise-data-mesh',
    realService: true
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'Landing zones',
      'Infra as Code',
      'Automated cutovers',
      'FinOps baselines'
    ],
    integrations: ['AWS', 'Azure', 'GCP'],

    use_cases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com / services / cloud - landing - zone',
    real_service: true

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    useCases: ['Datacenter exit', 'Hybrid cloud enablement'],
    link: 'https://ziontechgroup.com/services/cloud-landing-zone',
    realService: true
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'SOAR playbooks',
      'Attack surface monitoring',
      'Threat intel'
    ],
    integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],

    use_cases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',
    real_service: true

  },
  {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    id: 'observability - platform - starter',
    name: 'Observability Platform Starter',
    description:;
      'Unified logs, metrics, traces with SLO governance and incident workflows.',
    category: 'DevOps & Automation',
    pricing: { starter: '$1, 999 / mo' },
    features: [;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    useCases: ['Compliance readiness', 'Breaches prevention'],
    link: 'https://ziontechgroup.com/services/quantum-cybersecurity-services',
    realService: true
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'OpenTelemetry ingest',
      'SLO dashboards',
      'Burn rate alerts',
      'Incident workflows'
    ],
    integrations: ['Grafana', 'Datadog', 'PagerDuty'],

    use_cases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com / services / api - observability - starter',
    real_service: true

  },
  {

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
      'Showback / chargeback'
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],

    use_cases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com / cloud - cost - optimizer',
    real_service: true

  },
  {

    id: 'identity - governance - administration',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    useCases: ['MTTR reduction', 'Reliability governance'],
    link: 'https://ziontechgroup.com/services/api-observability-starter',
    realService: true
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
      'Showback/chargeback'
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
    useCases: ['Cost optimization', 'Budget adherence'],
    link: 'https://ziontechgroup.com/cloud-cost-optimizer',
    realService: true
  },
  {
    id: 'identity-governance-administration',

    name: 'Identity Governance & Administration',
    description:;
      'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    category: 'Enterprise Security',
    pricing: { starter: '$3, 499 / mo' },
    features: [;
      'Lifecycle automation',
      'Access reviews',
      'RBAC & SoD',
      'Provisioning workflows'
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    category: 'Enterprise Security',
    pricing: { starter: '$4,999/mo', enterprise: 'Custom' },
    features: [
      'Policy-based access',
      'Micro-segmentation',
      'Device posture checks',
      'SSO & MFA integration'
    ],
    integrations: ['Okta', 'Azure AD', 'Cloudflare Zero Trust'],

    use_cases: ['Secure remote work', 'Lateral movement prevention'],
    link: 'https://ziontechgroup.com / services / zero - trust - network - architecture',
    real_service: true,
    launch_date: '2025 - 11 - 01',

  {
      'Golden pipelines',
      'RBAC and policy packs',
      'Cost guardrails'
    ],
    integrations: ['GitHub', 'ArgoCD', 'Backstage'],
      'Domain data products',
      'Catalog & lineage',
      'Access governance',
      'Quality SLAs'
    ],
    integrations: ['Snowflake', 'Databricks', 'BigQuery'],
      'Landing zones',
      'Infra as Code',
      'Automated cutovers',
      'FinOps baselines'
    ],
    integrations: ['AWS', 'Azure', 'GCP'],
      'SOAR playbooks',
      'Attack surface monitoring',
      'Threat intel'
    ],
    integrations: ['CrowdStrike', 'Wiz', 'Snyk', 'Cloudflare'],
      'OpenTelemetry ingest',
      'SLO dashboards',
      'Burn rate alerts',
      'Incident workflows'
    ],
    integrations: ['Grafana', 'Datadog', 'PagerDuty'],
      'Budget guardrails',
      'Anomaly alerts',
      'Forecasting',
      'Showback / chargeback'
    ],
    integrations: ['AWS CUR', 'Azure Cost', 'GCP Billing'],
  {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    id: 'identity-governance-administration',
    name: 'Identity Governance & Administration',
    description:
      'Automate joiner/mover/leaver flows, access reviews, and least-privilege enforcement across SaaS and cloud.',
    category: 'Enterprise Security',
    pricing: { starter: '$3,499/mo' },
    features: [

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
      'Lifecycle automation',
      'Access reviews',
      'RBAC & SoD',
      'Provisioning workflows'
    ],
<<<<<<< HEAD
    integrations: ['Okta', 'Azure AD', 'Google Workspace'],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    integrations: ['Okta', 'Azure AD', 'Google Workspace']
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}];	id: string;
	name: string;

	id: string, name: string,

	tagline?: string;
	description: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc



}];	id: string;
	name: string;

	id: string, name: string,

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
	tagline?: string;
	description: string;



<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export type EnterpriseITSolution = {
	id: string,
	name: string,
	tagline?: string,
	description: string,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
	pricing: {
		starter: string, // e && e.g. "$2,999/mo"
		professional?: string;
		enterprise?: string


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

	category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',

ursor/fix-website-loading-errors-and-merge-6662
	pricing: {
		starter: string, // e.g. "$2,999/mo"
		professional?: string,

		enterprise?: string


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
	},
	features: string[],
	integrations?: string[],
	useCases?: string[],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
	link: string, // canonical internal link under /services/*
	realService?: boolean;
	rating?: number;
	launchDate?: string
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/enterprise-data-mesh',

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/cloud-landing-zone',

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/quantum-cybersecurity-services',

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/api-observability-starter',

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

		link: 'https://ziontechgroup && ziontechgroup.com/cloud-cost-optimizer',

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

		link: 'https://ziontechgroup && ziontechgroup.com/services/sso-and-user-lifecycle-hub',

		realService: true
	}
];
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

},

export const enterpriseITSolutions: EnterpriseITSolution[] = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

	}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
];
;

},

export const enterpriseITSolutions: EnterpriseITSolution[] = [
	{;
		id: 'zero-trust-network-architecture';
		name: 'Zero Trust Network Architecture';
<<<<<<< HEAD
=======
	{
		id: 'zero-trust-network-architecture',
		name: 'Zero Trust Network Architecture',

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


	}

];
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
	}
];
    use_cases: ['Audit readiness', 'Insider risk reduction'],
    link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',
    real_service: true
  }
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
category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',pricing: {starter: string, // e.g. "$2, 999 / mo";
category: 'Enterprise Security' | 'DevOps & Automation' | 'Data & Analytics' | 'Cloud Services' | 'Cybersecurity',
pricing: {
  starter: string, // e.g. "$2, 999 / mo";
  professional?: string;
  enterprise?: string;
}
features: string[];
integrations?: string[];
use_cases?: string[],link: string, // canonical internal link under /services/*;
real_service?: boolean;
rating?: number;
launch_date?: string;
}export const enterpriseITSolutions: EnterpriseITSolution[] = [;
{id: 'zero - trust - network - architecture';
  name: 'Zero Trust Network Architecture';
  tagline: 'Identity - first perimeterless security for modern enterprises',description: 'Implement a Zero Trust security model with policy - based access, continuous verification, and micro - segmentation across users, devices, and workloads.';
  category: 'Enterprise Security',pricing: { starter: '$4, 999 / mo', enterprise: 'Custom' }
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
  real_service: true,launch_date: '2025 - 11 - 01';
}
{id: 'platform - engineering - foundation';
  name: 'Platform Engineering Foundation',description: 'Golden paths, paved roads, and self - service deployment for developers with strong guardrails and governance.';
  category: 'DevOps & Automation',pricing: { starter: '$3, 499 / mo' }
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
  real_service: true,rating: 4.8;
}
{id: 'enterprise - data - mesh';
  name: 'Enterprise Data Mesh',description: 'Domain - oriented data ownership with discoverability, governance, and product thinking for analytics at scale.';
  category: 'Data & Analytics',pricing: { starter: '$5, 999 / mo' }
  features: ['Domain data products_catalog & lineage_access governance_quality SLAs'];
  integrations: ['SnowflakeDatabricksBigQuery'];
  use_cases: ['Faster analytics_federated governance'];
  link: 'https://ziontechgroup.com / services / enterprise - data - mesh',real_service: true;
}
{id: 'cloud - migration - accelerator';
  name: 'Cloud Migration Accelerator',description: 'Blueprints, landing zones, and automated cutovers to move workloads quickly and safely to the cloud.';
  category: 'Cloud Services',pricing: { starter: '$2, 999 / mo' }
  features: ['Landing zones_infra as CodeAutomated cutoversFinOps baselines'];
  integrations: ['AWSAzureGCP'];
  use_cases: ['Datacenter exit_hybrid cloud enablement'];
  link: 'https://ziontechgroup.com / services / cloud - landing - zone',real_service: true;
}
{id: 'threat - detection - response';
  name: 'Threat Detection & Response',description: 'Modern SOC capabilities with detections - as - code, attack surface reduction, and automated response.';
  category: 'Cybersecurity',pricing: { starter: '$3, 999 / mo' }
  features: ['Detections - as - codeSOAR playbooks_attack surface monitoring_threat intel'];
  integrations: ['CrowdStrikeWizSnykCloudflare'];
  use_cases: ['Compliance readiness_breaches prevention'];
  link: 'https://ziontechgroup.com / services / quantum - cybersecurity - services',real_service: true;
}
{id: 'observability - platform - starter';
  name: 'Observability Platform Starter',description: 'Unified logs, metrics, traces with SLO governance and incident workflows.';
  category: 'DevOps & Automation',pricing: { starter: '$1, 999 / mo' }
  features: ['OpenTelemetry ingestSLO dashboards_burn rate alerts_incident workflows'];
  integrations: ['GrafanaDatadogPagerDuty'];
  use_cases: ['MTTR reduction_reliability governance'];
  link: 'https://ziontechgroup.com / services / api - observability - starter',real_service: true;
}
{id: 'cost - governance - suite';
  name: 'Cloud Cost Governance Suite',description: 'FinOps guardrails, forecasting, and anomaly detection to keep cloud spending predictable.';
  category: 'Cloud Services',pricing: { starter: '$2, 499 / mo' }
  features: ['Budget guardrails_anomaly alertsForecastingShowback / chargeback'];
  integrations: ['AWS CURAzure CostGCP Billing'];
  use_cases: ['Cost optimization_budget adherence'];
  link: 'https://ziontechgroup.com / cloud - cost - optimizer',real_service: true;
}
{id: 'identity - governance - administration';
  name: 'Identity Governance & Administration',description: 'Automate joiner / mover / leaver flows, access reviews, and least - privilege enforcement across SaaS and cloud.';
  category: 'Enterprise Security',pricing: { starter: '$3, 499 / mo' }
  features: ['Lifecycle automation_access reviewsRBAC & SoDProvisioning workflows'];
  integrations: ['OktaAzure ADGoogle Workspace'];
  use_cases: ['Audit readiness_insider risk reduction'];
  link: 'https://ziontechgroup.com / services / sso - and - user - lifecycle - hub',real_service: true;
}'Lifecycle automation';
      'Access reviews';
      'RBAC & SoD';
      'Provisioning workflows';
    ];
    integrations: ['Okta', 'Azure AD', 'Google Workspace'];
    useCases: ['Audit readiness', 'Insider risk reduction'];
    link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub';
    realService: true;
  }
];
realService: true;
launchDate: '2025-11-01';
}
link: 'https://ziontechgroup.com/services/platform-engineering-foundation';
realService: true;
rating: 4.8;
}
link: 'https://ziontechgroup.com/services/sso-and-user-lifecycle-hub';
realService: true;
}];
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======


	}
];


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
}];
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
