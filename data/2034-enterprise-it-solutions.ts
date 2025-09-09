export type EnterpriseITSolution = {
    starter: string; // e.g. "$2, 999 / mo";



export type EnterpriseITSolution = {
    starter: string; // e.g. "$2, 999 / mo";

export type EnterpriseITSolution = {
export type EnterpriseITSolution = {;

export type EnterpriseITSolution = {
  id: string;
  name: string;
  tagline?: string;
  description: string;
  category:;
    | 'Enterprise Security';
    | 'DevOps & Automation';
    | 'Data & Analytics';
    | 'Cloud Services';
    | 'Cybersecurity';
  pricing: {

    starter: string; // e.g. "$2, 999 / mo";

    professional?: string;
    enterprise?: string;


  };


  category:;
  features: string[];
  integrations?: string[];
  use_cases?: string[];
  link: string; // canonical internal link under /services/*;
  real_service?: boolean;
  rating?: number;

      'Policy-based access',
      'Micro-segmentation',
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

  launchDate?: string;

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
	}
];