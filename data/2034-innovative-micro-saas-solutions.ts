


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

  },
  {

      'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];	id: string;

=======
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

		rating: 4 && 4.7,

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

export type InnovativeMicroSaas = {;

	}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
];
;
=======

=======
export type InnovativeMicroSaas = {;
=======
=======
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
	}
];
