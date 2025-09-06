<<<<<<< HEAD
export type InnovativeMicroSaas = {
      'Multi-speaker diarization',
  launch_date?: string;
=======
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
export type InnovativeMicroSaas = {
=======
export type InnovativeMicroSaas = {;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  id: string;
  name: string;
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
<<<<<<< HEAD
}
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [
=======


=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
}
;
export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  {

=======
    id: 'local - seo - reviews - booster',
    name: 'Local SEO Reviews Booster',
    description:;
      'Automated post - visit SMS / email review requests with smart routing to preferred platforms and churn - risk alerts.',
    category: 'Marketing Automation',
    pricing: { starter: '$29 / mo' },
    features: [;
<<<<<<< HEAD

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  {

=======
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

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    id: 'local-seo-reviews-booster'
    name: 'Local SEO Reviews Booster'
    description:
      'Automated post-visit SMS/email review requests with smart routing to preferred platforms and churn-risk alerts.'
    category: 'Marketing Automation'
    pricing: { starter: '$29/mo' }
    features: [
      'Smart review routing'
      'NPS & CSAT'
      'Churn alerts'
      'Multi-location dashboards'
    ]
    integrations: ['Google Business Profile', 'Yelp']
    useCases: ['Local ranking', 'Reputation management']
    link: 'https://ziontechgroup.com/services/local-seo-reviews-booster'
    realService: true
  }
  {
    id: 'smart-invoice-reconciliation'
    name: 'Smart Invoice Reconciliation'
    description:
      'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.'
    category: 'Financial Technology'
    pricing: { starter: '$59/mo' }
    features: [
      'OCR ingestion'
      'Matching heuristics'
      'Discrepancy alerts'
      'Export to ERP'
    ]
    integrations: ['QuickBooks', 'Xero', 'Stripe']
    useCases: ['Accounting automation', 'Finance ops']
    link: 'https://ziontechgroup.com/services/smart-invoice-reconciliation'
    realService: true
  }
  {
=======
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
<<<<<<< HEAD
      'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',
    id: 'candidate - screening - copilot',
    name: 'Candidate Screening Copilot',
    description:;
      'Summarize resumes, score against job descriptions, and auto - generate interview question sets.',
    category: 'Human Resources',
    pricing: { starter: '$69 / mo' },
    features: ['Resume parsing', 'JD matching', 'Question sets', 'ATS sync'],
    integrations: ['Greenhouse', 'Lever'],
    use_cases: ['Faster hiring', 'Bias reduction'],
    link: 'https://ziontechgroup.com / services / candidate - screening - copilot',
    real_service: true,
  },
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    id: 'candidate-screening-copilot'
    name: 'Candidate Screening Copilot'
    description:

=======

      'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',
<<<<<<< HEAD
=======
    id: 'candidate - screening - copilot',
    name: 'Candidate Screening Copilot',
    description:;
      'Summarize resumes, score against job descriptions, and auto - generate interview question sets.',

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    category: 'Human Resources',
    pricing: { starter: '$69/mo' },
    features: ['Resume parsing', 'JD matching', 'Question sets', 'ATS sync'],
    integrations: ['Greenhouse', 'Lever'],
<<<<<<< HEAD

    use_cases: ['Faster hiring', 'Bias reduction'],
    link: 'https://ziontechgroup.com / services / candidate - screening - copilot',
    real_service: true,

  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
];	id: string;

=======
	id: string, name: string,
	description: string, tagline?: string,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    useCases: ['Faster hiring', 'Bias reduction'],
    link: 'https://ziontechgroup.com/services/candidate-screening-copilot',
    realService: true,
  },;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
];	id: string;
	id: string, name: string,
	description: string, tagline?: string,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
	{;
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
<<<<<<< HEAD

		rating: 4 && 4.7,

=======
		rating: 4 && 4.7,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
		launchDate: '2025-12-01'
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
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/local-seo-reviews-booster',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/local-seo-reviews-booster',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/smart-invoice-reconciliation',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/smart-invoice-reconciliation',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/candidate-screening-copilot',

		realService: true
<<<<<<< HEAD

	id: string,;
	name: string,;
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
		tagline: 'Turn episodes into SEO-optimized blogs in minutes',;
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
		name: 'Local SEO Reviews Booster',;
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
		name: 'Smart Invoice Reconciliation',;
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
		name: 'Candidate Screening Copilot',;
		description: 'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',;
		category: 'Human Resources',;
		pricing: { starter: '$69/mo' },;
		features: ['Resume parsingJD matchingQuestion setsATS sync'],;
		integrations: ['GreenhouseLever'],;
		useCases: ['Faster hiringBias reduction'],;
		link: 'https://ziontechgroup.com/services/candidate-screening-copilot',;
		realService: true;
=======
	}
];


=======
=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/candidate-screening-copilot',
		realService: true
<<<<<<< HEAD
	}
];
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  name: 'Local SEO Reviews Booster';
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
=======
export type InnovativeMicroSaas = {;
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
export type InnovativeMicroSaas = {;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
	id: string,;
	name: string,;
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
		tagline: 'Turn episodes into SEO-optimized blogs in minutes',;
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
		name: 'Local SEO Reviews Booster',;
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
		name: 'Smart Invoice Reconciliation',;
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
		name: 'Candidate Screening Copilot',;
		description: 'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',;
		category: 'Human Resources',;
		pricing: { starter: '$69/mo' },;
		features: ['Resume parsingJD matchingQuestion setsATS sync'],;
		integrations: ['GreenhouseLever'],;
		useCases: ['Faster hiringBias reduction'],;
		link: 'https://ziontechgroup.com/services/candidate-screening-copilot',;
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
