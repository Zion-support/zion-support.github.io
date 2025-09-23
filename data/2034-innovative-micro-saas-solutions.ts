<<<<<<< HEAD
export interface InnovativeMicroSaas2034 { id: string; name: string; tagline: string; description: string; category: string; price: { monthly: number; yearly?: number; currency: string; trialDays?: number }; features: string[]; benefits?: string[]; link: string; popular: boolean; icon: string; color: string; launchDate?: string; rating?: number} export const innovativeMicroSaasSolutions: InnovativeMicroSaas2034[] = [ { id: 'podcast-notes-studio-2034',name: 'Podcast Notes Studio',tagline: 'Transcripts,chapters,SEO posts in minutes',description: 'Upload episodes to get accurate transcripts,chapter markers,show notes,quotes,and ready-to-publish SEO blog posts with images.',category: 'Content & Marketing',price: { monthly: 29,yearly: 290,currency: 'USD',trialDays: 7 },features: [ 'Accurate transcripts (multi-speaker)','Chapters and highlights','SEO post generation','WordPress/Notion export','Analytics and search' ],link: 'https: popular: true,icon: '🎙️',color: 'from-pink-500 to-rose-600',launchDate: '2025-02-05',rating: 4.8 },{ id: 'edge-feature-flags-2034',name: 'Edge Feature Flags',tagline: 'Geo and audience targeting at the edge',description: 'Lightweight flags at CDN edge with gradual rollouts,kill switches,and fallbacks integrated with CI/CD.',category: 'Developer Tools',price: { monthly: 49,yearly: 490,currency: 'USD',trialDays: 14 },features: [ 'Geo/audience targeting','Gradual rollouts and A/B','Flagged config as code','SDKs for JS/Go/Python','CI/CD and audit logs' ],link: 'https: popular: true,icon: '🚩',color: 'from-orange-500 to-red-500',launchDate: '2025-01-28',rating: 4.7 },{ id: 'email-warmup-guard-2034',name: 'Email Warmup Guard',tagline: 'Inbox placement and domain reputation tracker',description: 'Automated warmup,seed-list tests,blacklist alerts,and SPF/DKIM/DMARC checks with remediation playbooks.',category: 'Growth',price: { monthly: 19,yearly: 190,currency: 'USD' },features: [ 'Warmup scheduler','Seed-list tests','Blocklist monitoring','SPF/DKIM/DMARC checks','Alerts to Slack/Email' ],link: 'https: popular: false,icon: '📧',color: 'from-cyan-500 to-blue-600',launchDate: '2025-02-12',rating: 4.6 } ];
=======
export type InnovativeMicroSaas = {
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
	pricing: { starter: string; professional?: string; enterprise?: string };
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	realService?: boolean;
	rating?: number;
	launchDate?: string;
};

export const innovativeMicroSaasSolutions: InnovativeMicroSaas[] = [
	{
		id: 'podcast-transcription-seo-suite',
		name: 'Podcast Transcription & SEO Suite',
		tagline: 'Turn episodes into SEO-optimized blogs in minutes',
		description: 'Accurate multi-speaker transcription with summaries, quotes, and SEO-ready blog drafts including schema and social cards.',
		category: 'Content Marketing',
		pricing: { starter: '$39/mo' },
		features: ['Multi-speaker diarization', 'SEO blog drafts', 'Pull-quotes', 'Schema & social cards'],
		integrations: ['YouTube', 'Spotify', 'WordPress'],
		useCases: ['Content repurposing', 'SEO growth'],
		link: 'https://ziontechgroup.com/services/podcast-transcription-seo-suite',
		realService: true,
		rating: 4.7,
		launchDate: '2025-12-01'
	},
	{
		id: 'local-seo-reviews-booster',
		name: 'Local SEO Reviews Booster',
		description: 'Automated post-visit SMS/email review requests with smart routing to preferred platforms and churn-risk alerts.',
		category: 'Marketing Automation',
		pricing: { starter: '$29/mo' },
		features: ['Smart review routing', 'NPS & CSAT', 'Churn alerts', 'Multi-location dashboards'],
		integrations: ['Google Business Profile', 'Yelp'],
		useCases: ['Local ranking', 'Reputation management'],
		link: 'https://ziontechgroup.com/services/local-seo-reviews-booster',
		realService: true
	},
	{
		id: 'smart-invoice-reconciliation',
		name: 'Smart Invoice Reconciliation',
		description: 'Reconciling bank transactions with invoices using OCR and matching heuristics, with discrepancy alerts.',
		category: 'Financial Technology',
		pricing: { starter: '$59/mo' },
		features: ['OCR ingestion', 'Matching heuristics', 'Discrepancy alerts', 'Export to ERP'],
		integrations: ['QuickBooks', 'Xero', 'Stripe'],
		useCases: ['Accounting automation', 'Finance ops'],
		link: 'https://ziontechgroup.com/services/smart-invoice-reconciliation',
		realService: true
	},
	{
		id: 'candidate-screening-copilot',
		name: 'Candidate Screening Copilot',
		description: 'Summarize resumes, score against job descriptions, and auto-generate interview question sets.',
		category: 'Human Resources',
		pricing: { starter: '$69/mo' },
		features: ['Resume parsing', 'JD matching', 'Question sets', 'ATS sync'],
		integrations: ['Greenhouse', 'Lever'],
		useCases: ['Faster hiring', 'Bias reduction'],
		link: 'https://ziontechgroup.com/services/candidate-screening-copilot',
		realService: true
	}
];
>>>>>>> origin/automation/changelog
