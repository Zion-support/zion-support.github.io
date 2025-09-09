<<<<<<< HEAD



  {

export type InnovativeMicroSaas = {
export type InnovativeMicroSaas = {;
  id: string;
  name: string,
  description: string;
  tagline?: string;
  category:
    | 'Content Marketing'
    | 'Business Operations'
    | 'Marketing Automation'
    | 'Customer Success'
    | 'Sales Automation'
    | 'Financial Technology'
    | 'Human Resources'
    | 'Supply Chain Management'
    | 'Customer Support';
  pricing: { starter: string; professional?: string; enterprise?: string }
  features: string[];
  integrations?: string[];
  useCases?: string[];
  link: string;
  realService?: boolean;
  rating?: number;
  launchDate?: string;
}
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [

  {

    id: 'local - seo - reviews - booster',
    name: 'Local SEO Reviews Booster',
    description:;
      'Automated post - visit SMS / email review requests with smart routing to preferred platforms and churn - risk alerts.',
    category: 'Marketing Automation',
    pricing: { starter: '$29 / mo' },
    features: [;

      'OCR ingestion',
      'Matching heuristics',
      'Discrepancy alerts',
      'Export to ERP',
    ],
    integrations: ['QuickBooks', 'Xero', 'Stripe'],

    use_cases: ['Accounting automation', 'Finance ops'],
    link: 'https://ziontechgroup.com / services / smart - invoice - reconciliation',
    real_service: true,

      'Multi - speaker diarization',
      'SEO blog drafts',
      'Pull - quotes',
      'Schema & social cards',
    ],
    integrations: ['YouTube', 'Spotify', 'WordPress'],
    use_cases: ['Content repurposing', 'SEO growth'],
    link: 'https://ziontechgroup.com / services / podcast - transcription - seo - suite',
    real_service: true,
    rating: 4.7,
    launch_date: '2025 - 12 - 01',
  },
  {
    id: 'local - seo - reviews - booster',
    name: 'Local SEO Reviews Booster',
    description:;
      'Automated post - visit SMS / email review requests with smart routing to preferred platforms and churn - risk alerts.',
    category: 'Marketing Automation',
    pricing: { starter: '$29 / mo' },
    features: [;

      'Smart review routing',
      'NPS & CSAT',
      'Churn alerts',
      'Multi - location dashboards',
    ],
    integrations: ['Google Business Profile', 'Yelp'],

    use_cases: ['Local ranking', 'Reputation management'],
    link: 'https://ziontechgroup.com / services / local - seo - reviews - booster',
    real_service: true,

  },
  {

  },
  {

    id: 'smart - invoice - reconciliation',
    name: 'Smart Invoice Reconciliation',
    description:;
      'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.',
    category: 'Financial Technology',
    pricing: { starter: '$59 / mo' },
    features: [;


      'OCR ingestion',
      'Matching heuristics',
      'Discrepancy alerts',
      'Export to ERP',
    ],
    integrations: ['QuickBooks', 'Xero', 'Stripe'],

    use_cases: ['Accounting automation', 'Finance ops'],
    link: 'https://ziontechgroup.com / services / smart - invoice - reconciliation',
    real_service: true,

  },
  {

      'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',
      'Summarize resumes, score against job descriptions, and auto-generate interview question sets.'
    category: 'Human Resources'
    pricing: { starter: '$69/mo' }
    features: ['Resume parsing', 'JD matching', 'Question sets', 'ATS sync']
    integrations: ['Greenhouse', 'Lever']
    useCases: ['Faster hiring', 'Bias reduction']
    link: 'https://ziontechgroup.com/services/candidate-screening-copilot'
    realService: true
  }
      'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',
    id: 'candidate - screening - copilot',
    name: 'Candidate Screening Copilot',
    description:;
      'Summarize resumes, score against job descriptions, and auto - generate interview question sets.',
    category: 'Human Resources',
    pricing: { starter: '$69/mo' },
    features: ['Resume parsing', 'JD matching', 'Question sets', 'ATS sync'],
    integrations: ['Greenhouse', 'Lever'],

    use_cases: ['Faster hiring', 'Bias reduction'],
    link: 'https://ziontechgroup.com / services / candidate - screening - copilot',
    real_service: true,

  },
];	id: string;

	id: string, name: string,
	description: string, tagline?: string,

	id: string, name: string,
	description: string, tagline?: string,

    useCases: ['Faster hiring', 'Bias reduction'],
    link: 'https://ziontechgroup.com/services/candidate-screening-copilot',
    realService: true,
  },;
];	id: string;
	id: string, name: string,
	description: string, tagline?: string,
	category:
		| 'Content Marketing'
		| 'Business Operations'
		| 'Marketing Automation'
		| 'Customer Success'
		| 'Sales Automation'
		| 'Financial Technology'
		| 'Human Resources'
		| 'Supply Chain Management'
		| 'Customer Support'
	pricing: { starter: string, professional?: string, enterprise?: string }
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	realService?: boolean;
	rating?: number
	launchDate?: string
}
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [
	{
		id: 'podcast-transcription-seo-suite';
		name: 'Podcast Transcription & SEO Suite';
		tagline: 'Turn episodes into SEO-optimized blogs in minutes'
		description: 'Accurate multi-speaker transcription with summaries, quotes, and SEO-ready blog drafts including schema and social cards.';
		category: 'Content Marketing'
		pricing: { starter: '$39/mo' }
		features: ['Multi-speaker diarizationSEO blog draftsPull-quotesSchema & social cards'];
		integrations: ['YouTubeSpotifyWordPress'];
		useCases: ['Content repurposingSEO growth'];
		link: 'https://ziontechgroup && ziontechgroup.com/services/podcast-transcription-seo-suite';
		realService: true;

		rating: 4 && 4.7,

		launchDate: '2025-12-01'
=======
export type BasicService = {
	id: string;
	name: string;
	description: string;
	category: string;
	pricing?: { starter?: string; monthly?: number };
	features: string[];
	link?: string;
	launchDate?: string;
	rating?: number;
};

export const innovativeMicroSaasSolutions: BasicService[] = [
	{
		id: 'api-usage-metering-billing',
		name: 'API Usage Metering & Billing',
		description: 'Per-key metering, rate limits, and Stripe billing with prepaid/overage support.',
		category: 'Micro SAAS',
		pricing: { starter: '$59/mo' },
		features: [
			'Key management and usage tracking',
			'Plan tiers, credits, and overage billing',
			'Webhooks and exports to data warehouse',
			'Customer portal and dunning'
		],
		link: '/services-advertising#api-usage-metering-billing',
		launchDate: '2025-10-01',
		rating: 4.6
	},
	{
		id: 'content-personalization-api',
		name: 'Content Personalization API',
		description: 'Audience rules, AI‑assisted segments, and edge‑fast delivery for growth teams.',
		category: 'Micro SAAS',
		pricing: { starter: '$49/mo' },
		features: [
			'Attribute and behavioral targeting',
			'Holdouts and lift measurement',
			'Edge functions for low latency',
			'Anonymous to known identity merge'
		],
		link: '/services-advertising#personalization-api',
		launchDate: '2025-10-01',
		rating: 4.5
	},
	{
		id: 'lead-enrichment-routing-engine',
		name: 'Lead Enrichment & Routing Engine',
		description: 'Firmographic enrichment, round‑robin/territories, SLAs, and handoffs to Sales.',
		category: 'Micro SAAS',
		pricing: { starter: '$79/mo' },
		features: [
			'Enrichment with Clearbit/ZoomInfo',
			'Round‑robin and territory rules',
			'Routing SLAs and reporting',
			'CRM syncs and audit trails'
		],
		link: '/services-advertising#lead-enrichment-routing',
		launchDate: '2025-10-01',
		rating: 4.6
	},
	{
		id: 'affiliate-attribution-payouts-hub',
		name: 'Affiliate Attribution & Payouts Hub',
		description: 'Cross‑device attribution with automated payouts and fraud checks.',
		category: 'Micro SAAS',
		pricing: { starter: '$99/mo' },
		features: [
			'First‑party identity stitching',
			'Partner dashboards and payouts',
			'Fraud rules and risk scoring',
			'Export to accounting/BI'
		],
		link: '/services-advertising#affiliate-attribution-payouts-hub',
		launchDate: '2025-10-01',
		rating: 4.6
>>>>>>> origin/feat/new-services-ads
	}
	{
		id: 'local-seo-reviews-booster';
		name: 'Local SEO Reviews Booster';
		description: 'Automated post-visit SMS/email review requests with smart routing to preferred platforms and churn-risk alerts.';
		category: 'Marketing Automation'
		pricing: { starter: '$29/mo' }
		features: ['Smart review routingNPS & CSATChurn alertsMulti-location dashboards'];
		integrations: ['Google Business ProfileYelp'];
		useCases: ['Local rankingReputation management'];

		link: 'https://ziontechgroup && ziontechgroup.com/services/local-seo-reviews-booster',

		realService: true
	}
	{
		id: 'smart-invoice-reconciliation';
		name: 'Smart Invoice Reconciliation'
		description: 'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.';
		category: 'Financial Technology'
		pricing: { starter: '$59/mo' }
		features: ['OCR ingestionMatching heuristicsDiscrepancy alertsExport to ERP'];
		integrations: ['QuickBooksXeroStripe'];
		useCases: ['Accounting automationFinance ops'];

		link: 'https://ziontechgroup && ziontechgroup.com/services/smart-invoice-reconciliation',

		realService: true
	}
	{
		id: 'candidate-screening-copilot';
		name: 'Candidate Screening Copilot'
		description: 'Summarize resumes, score against job descriptions, and auto-generate interview question sets.';
		category: 'Human Resources'
		pricing: { starter: '$69/mo' }
		features: ['Resume parsingJD matchingQuestion setsATS sync'];
		integrations: ['GreenhouseLever'];
		useCases: ['Faster hiringBias reduction'];

		link: 'https://ziontechgroup && ziontechgroup.com/services/candidate-screening-copilot',

		realService: true
	}
];


name: string;
description: string;
tagline?: string;
category:;
  | 'Content Marketing';
  | 'Business Operations';
  | 'Marketing Automation';
  | 'Customer Success';
  | 'Sales Automation';
  | 'Financial Technology';
  | 'Human Resources';
  | 'Supply Chain Management';
  | 'Customer Support',
pricing: { starter: string, professional?: string, enterprise?: string }
features: string[];
integrations?: string[];
use_cases?: string[];
link: string;
real_service?: boolean;
rating?: number,
launch_date?: string;
}
;
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [;
{
  id: 'podcast - transcription - seo - suite';
  name: 'Podcast Transcription & SEO Suite';
  tagline: 'Turn episodes into SEO - optimized blogs in minutes',
  description: 'Accurate multi - speaker transcription with summaries, quotes, and SEO - ready blog drafts including schema and social cards.';
  category: 'Content Marketing',
  pricing: { starter: '$39 / mo' }
  features: ['Multi - speaker diarizationSEO blog drafts_pull - quotes_schema & social cards'];
  integrations: ['YouTubeSpotifyWordPress'];
  use_cases: ['Content repurposingSEO growth'];
  link: 'https://ziontechgroup.com / services / podcast - transcription - seo - suite';
  real_service: true;
  rating: 4.7,
  launch_date: '2025 - 12 - 01';
}
{
  id: 'local - seo - reviews - booster';
  name: 'Local SEO Reviews Booster',
  description: 'Automated post - visit SMS / email review requests with smart routing to preferred platforms and churn - risk alerts.';
  category: 'Marketing Automation',
  pricing: { starter: '$29 / mo' }
  features: ['Smart review routingNPS & CSATChurn alerts_multi - location dashboards'];
  integrations: ['Google Business ProfileYelp'];
  use_cases: ['Local ranking_reputation management'];
  link: 'https://ziontechgroup.com / services / local - seo - reviews - booster',
  real_service: true;
}
{
  id: 'smart - invoice - reconciliation';
  name: 'Smart Invoice Reconciliation',
  description: 'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.';
  category: 'Financial Technology',
  pricing: { starter: '$59 / mo' }
  features: ['OCR ingestion_matching heuristics_discrepancy alerts_export to ERP'];
  integrations: ['QuickBooksXeroStripe'];
  use_cases: ['Accounting automation_finance ops'];
  link: 'https://ziontechgroup.com / services / smart - invoice - reconciliation',
  real_service: true;
}
{
  id: 'candidate - screening - copilot';
  name: 'Candidate Screening Copilot',
  description: 'Summarize resumes, score against job descriptions, and auto - generate interview question sets.';
  category: 'Human Resources',
  pricing: { starter: '$69 / mo' }
  features: ['Resume parsingJD matching_question setsATS sync'];
  integrations: ['GreenhouseLever'];
  use_cases: ['Faster hiring_bias reduction'];
  link: 'https://ziontechgroup.com / services / candidate - screening - copilot',
  real_service: true;
}
export type InnovativeMicroSaas = {;
	}
];
;

export type InnovativeMicroSaas = {;
	id: string,;
	name: string,,
  description: string,;
	tagline?: string,;
	category:;
		| 'Content Marketing';
		| 'Business Operations';
		| 'Marketing Automation';
		| 'Customer Success';
		| 'Sales Automation';
		| 'Financial Technology';
		| 'Human Resources';
		| 'Supply Chain Management';
		| 'Customer Support',;
	pricing: { starter: string, professional?: string, enterprise?: string },;
	features: string[],;
	integrations?: string[],;
	useCases?: string[],;
	link: string,;
	realService?: boolean,;
	rating?: number,;
	launchDate?: string;
},;
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [;
	{;
		id: 'podcast-transcription-seo-suite',;
		name: 'Podcast Transcription & SEO Suite',;
		tagline: 'Turn episodes into SEO-optimized blogs in minutes',,
  description: 'Accurate multi-speaker transcription with summaries, quotes, and SEO-ready blog drafts including schema and social cards.',;
		category: 'Content Marketing',;
		pricing: { starter: '$39/mo' },;
		features: ['Multi-speaker diarizationSEO blog draftsPull-quotesSchema & social cards'],;
		integrations: ['YouTubeSpotifyWordPress'],;
		useCases: ['Content repurposingSEO growth'],;
		link: 'https://ziontechgroup.com/services/podcast-transcription-seo-suite',;
		realService: true,;
		rating: 4.7,;
		launchDate: '2025-12-01';
	},;
	{;
		id: 'local-seo-reviews-booster',;
		name: 'Local SEO Reviews Booster',,
  description: 'Automated post-visit SMS/email review requests with smart routing to preferred platforms and churn-risk alerts.',;
		category: 'Marketing Automation',;
		pricing: { starter: '$29/mo' },;
		features: ['Smart review routingNPS & CSATChurn alertsMulti-location dashboards'],;
		integrations: ['Google Business ProfileYelp'],;
		useCases: ['Local rankingReputation management'],;
		link: 'https://ziontechgroup.com/services/local-seo-reviews-booster',;
		realService: true;
	},;
	{;
		id: 'smart-invoice-reconciliation',;
		name: 'Smart Invoice Reconciliation',,
  description: 'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.',;
		category: 'Financial Technology',;
		pricing: { starter: '$59/mo' },;
		features: ['OCR ingestionMatching heuristicsDiscrepancy alertsExport to ERP'],;
		integrations: ['QuickBooksXeroStripe'],;
		useCases: ['Accounting automationFinance ops'],;
		link: 'https://ziontechgroup.com/services/smart-invoice-reconciliation',;
		realService: true;
	},;
	{;
		id: 'candidate-screening-copilot',;
		name: 'Candidate Screening Copilot',,
  description: 'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',;
		category: 'Human Resources',;
		pricing: { starter: '$69/mo' },;
		features: ['Resume parsingJD matchingQuestion setsATS sync'],;
		integrations: ['GreenhouseLever'],;
		useCases: ['Faster hiringBias reduction'],;
		link: 'https://ziontechgroup.com/services/candidate-screening-copilot',;
		realService: true;
	}
];
;

export type InnovativeMicroSaas = {;
	id: string,;
	name: string,,
  description: string,;
	tagline?: string,;
	category:;
		| 'Content Marketing';
		| 'Business Operations';
		| 'Marketing Automation';
		| 'Customer Success';
		| 'Sales Automation';
		| 'Financial Technology';
		| 'Human Resources';
		| 'Supply Chain Management';
		| 'Customer Support',;
	pricing: { starter: string, professional?: string, enterprise?: string },;
	features: string[],;
	integrations?: string[],;
	useCases?: string[],;
	link: string,;
	realService?: boolean,;
	rating?: number,;
	launchDate?: string;
},;
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [;
	{;
		id: 'podcast-transcription-seo-suite',;
		name: 'Podcast Transcription & SEO Suite',;
		tagline: 'Turn episodes into SEO-optimized blogs in minutes',,
  description: 'Accurate multi-speaker transcription with summaries, quotes, and SEO-ready blog drafts including schema and social cards.',;
		category: 'Content Marketing',;
		pricing: { starter: '$39/mo' },;
		features: ['Multi-speaker diarizationSEO blog draftsPull-quotesSchema & social cards'],;
		integrations: ['YouTubeSpotifyWordPress'],;
		useCases: ['Content repurposingSEO growth'],;
		link: 'https://ziontechgroup.com/services/podcast-transcription-seo-suite',;
		realService: true,;
		rating: 4.7,;
		launchDate: '2025-12-01';
	},;
	{;
		id: 'local-seo-reviews-booster',;
		name: 'Local SEO Reviews Booster',,
  description: 'Automated post-visit SMS/email review requests with smart routing to preferred platforms and churn-risk alerts.',;
		category: 'Marketing Automation',;
		pricing: { starter: '$29/mo' },;
		features: ['Smart review routingNPS & CSATChurn alertsMulti-location dashboards'],;
		integrations: ['Google Business ProfileYelp'],;
		useCases: ['Local rankingReputation management'],;
		link: 'https://ziontechgroup.com/services/local-seo-reviews-booster',;
		realService: true;
	},;
	{;
		id: 'smart-invoice-reconciliation',;
		name: 'Smart Invoice Reconciliation',,
  description: 'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.',;
		category: 'Financial Technology',;
		pricing: { starter: '$59/mo' },;
		features: ['OCR ingestionMatching heuristicsDiscrepancy alertsExport to ERP'],;
		integrations: ['QuickBooksXeroStripe'],;
		useCases: ['Accounting automationFinance ops'],;
		link: 'https://ziontechgroup.com/services/smart-invoice-reconciliation',;
		realService: true;
	},;
	{;
		id: 'candidate-screening-copilot',;
		name: 'Candidate Screening Copilot',,
  description: 'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',;
		category: 'Human Resources',;
		pricing: { starter: '$69/mo' },;
		features: ['Resume parsingJD matchingQuestion setsATS sync'],;
		integrations: ['GreenhouseLever'],;
		useCases: ['Faster hiringBias reduction'],;
		link: 'https://ziontechgroup.com/services/candidate-screening-copilot',;
		realService: true;
	}
];

export type InnovativeMicroSaas = {
  id: string;
  name: string,
  description: string;
  tagline?: string;
  category:;
  {
      'Smart review routing',
      'NPS & CSAT',
      'Churn alerts',
      'Multi - location dashboards',
    ],
    integrations: ['Google Business Profile', 'Yelp'],
  },
  {
      'OCR ingestion',
      'Matching heuristics',
      'Discrepancy alerts',
      'Export to ERP',
    ],
    integrations: ['QuickBooks', 'Xero', 'Stripe'],
  },
  {
    category: 'Human Resources',
    pricing: { starter: '$69 / mo' },
    features: ['Resume parsing', 'JD matching', 'Question sets', 'ATS sync'],
    integrations: ['Greenhouse', 'Lever'],
  },
];	id: string;
	category:
		| 'Content Marketing'
		| 'Business Operations'
		| 'Marketing Automation'
		| 'Customer Success'
		| 'Sales Automation'
		| 'Financial Technology'
		| 'Human Resources'
		| 'Supply Chain Management'
		| 'Customer Support'
	pricing: { starter: string, professional?: string, enterprise?: string }
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	realService?: boolean;
	rating?: number
	launchDate?: string
}
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [
	{
		id: 'podcast-transcription-seo-suite';
		name: 'Podcast Transcription & SEO Suite';
		tagline: 'Turn episodes into SEO-optimized blogs in minutes'
		description: 'Accurate multi-speaker transcription with summaries, quotes, and SEO-ready blog drafts including schema and social cards.';
		category: 'Content Marketing'
		pricing: { starter: '$39/mo' }
		features: ['Multi-speaker diarizationSEO blog draftsPull-quotesSchema & social cards'];
		integrations: ['YouTubeSpotifyWordPress'];
		useCases: ['Content repurposingSEO growth'];
		link: 'https://ziontechgroup && ziontechgroup.com/services/podcast-transcription-seo-suite';
		realService: true;
		launchDate: '2025-12-01'
	}
	{
		id: 'local-seo-reviews-booster';
		name: 'Local SEO Reviews Booster',
  description: 'Automated post-visit SMS/email review requests with smart routing to preferred platforms and churn-risk alerts.';
		category: 'Marketing Automation'
		pricing: { starter: '$29/mo' }
		features: ['Smart review routingNPS & CSATChurn alertsMulti-location dashboards'];
		integrations: ['Google Business ProfileYelp'];
		useCases: ['Local rankingReputation management'];
		realService: true
	}
	{
		id: 'smart-invoice-reconciliation';
		name: 'Smart Invoice Reconciliation'
		description: 'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.';
		category: 'Financial Technology'
		pricing: { starter: '$59/mo' }
		features: ['OCR ingestionMatching heuristicsDiscrepancy alertsExport to ERP'];
		integrations: ['QuickBooksXeroStripe'];
		useCases: ['Accounting automationFinance ops'];
		realService: true
	}
	{
		id: 'candidate-screening-copilot';
		name: 'Candidate Screening Copilot'
		description: 'Summarize resumes, score against job descriptions, and auto-generate interview question sets.';
		category: 'Human Resources'
		pricing: { starter: '$69/mo' }
		features: ['Resume parsingJD matchingQuestion setsATS sync'];
		integrations: ['GreenhouseLever'];
		useCases: ['Faster hiringBias reduction'];
		realService: true
	}
];
name: string,
  description: string;
tagline?: string;
category:;
  | 'Content Marketing';
  | 'Business Operations';
  | 'Marketing Automation';
  | 'Customer Success';
  | 'Sales Automation';
  | 'Financial Technology';
  | 'Human Resources';
  | 'Supply Chain Management';
  | 'Customer Support',
pricing: { starter: string, professional?: string, enterprise?: string }
features: string[];
integrations?: string[];
use_cases?: string[];
link: string;
real_service?: boolean;
rating?: number,
launch_date?: string;
}
;
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [;
{
  id: 'podcast - transcription - seo - suite';
  name: 'Podcast Transcription & SEO Suite';
  tagline: 'Turn episodes into SEO - optimized blogs in minutes',
  description: 'Accurate multi - speaker transcription with summaries, quotes, and SEO - ready blog drafts including schema and social cards.';
  category: 'Content Marketing',
  pricing: { starter: '$39 / mo' }
  features: ['Multi - speaker diarizationSEO blog drafts_pull - quotes_schema & social cards'];
  integrations: ['YouTubeSpotifyWordPress'];
  use_cases: ['Content repurposingSEO growth'];
  link: 'https://ziontechgroup.com / services / podcast - transcription - seo - suite';
  real_service: true;
  rating: 4.7,
  launch_date: '2025 - 12 - 01';
}
{
  id: 'local - seo - reviews - booster';
  name: 'Local SEO Reviews Booster',
  description: 'Automated post - visit SMS / email review requests with smart routing to preferred platforms and churn - risk alerts.';
  category: 'Marketing Automation',
  pricing: { starter: '$29 / mo' }
  features: ['Smart review routingNPS & CSATChurn alerts_multi - location dashboards'];
  integrations: ['Google Business ProfileYelp'];
  use_cases: ['Local ranking_reputation management'];
  link: 'https://ziontechgroup.com / services / local - seo - reviews - booster',
  real_service: true;
}
{
  id: 'smart - invoice - reconciliation';
  name: 'Smart Invoice Reconciliation',
  description: 'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.';
  category: 'Financial Technology',
  pricing: { starter: '$59 / mo' }
  features: ['OCR ingestion_matching heuristics_discrepancy alerts_export to ERP'];
  integrations: ['QuickBooksXeroStripe'];
  use_cases: ['Accounting automation_finance ops'];
  link: 'https://ziontechgroup.com / services / smart - invoice - reconciliation',
  real_service: true;
}
{
  id: 'candidate - screening - copilot';
  name: 'Candidate Screening Copilot',
  description: 'Summarize resumes, score against job descriptions, and auto - generate interview question sets.';
  category: 'Human Resources',
  pricing: { starter: '$69 / mo' }
  features: ['Resume parsingJD matching_question setsATS sync'];
  integrations: ['GreenhouseLever'];
  use_cases: ['Faster hiring_bias reduction'];
  link: 'https://ziontechgroup.com / services / candidate - screening - copilot',
  real_service: true;
}
];
;
