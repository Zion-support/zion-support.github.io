<<<<<<< HEAD
export type CuttingEdgeAIService = {
	id: string,
	name: string,
	description: string,
=======
export type CuttingEdgeAIService = {_id: string;
	name: string;
	description: string;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
	category:
		| 'AI Consciousness'
		| 'AI Emotional Intelligence'
		| 'AI Creativity'
		| 'AI Psychology'
		| 'AI Business Management'
		| 'AI Healthcare'
		| 'AI Neural Interfaces'
<<<<<<< HEAD
		| 'AI Quantum Computing',
	pricing: { starter: string, professional?: string, enterprise?: string },
	features: string[],
	integrations?: string[],
	useCases?: string[],
	link: string,
	rating?: number,
	launchDate?: string,
	realService?: boolean
},

export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
	{
		id: 'ai-emotional-support-agent',
		name: 'AI Emotional Support Agent',
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.',
		category: 'AI Emotional Intelligence',
		pricing: { starter: '$99/mo' },
		features: ['CBT-guided promptsMood trackingCrisis escalationHIPAA-friendly modes'],
		integrations: ['TwilioSlack'],
		useCases: ['Employee wellness24/7 support'],
		link: 'https://ziontechgroup.com/services/ai-emotional-support-agent',
		realService: true
	},
	{
		id: 'ai-product-spec-writer',
		name: 'AI Product Spec Writer',
		description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',
		category: 'AI Business Management',
		pricing: { starter: '$79/mo' },
		features: ['PRD templatesStory generationAcceptance criteriaAnalytics alignment'],
		integrations: ['JiraLinear'],
		useCases: ['Faster planningBetter alignment'],
		link: 'https://ziontechgroup.com/services/ai-product-spec-writer',
		realService: true
	},
	{
		id: 'ai-creative-studio',
		name: 'AI Creative Studio',
		description: 'Generate brand-consistent images and short-form videos with approvals and rights management.',
		category: 'AI Creativity',
		pricing: { starter: '$149/mo' },
		features: ['Brand kitImage & video genReview & approvalsRights management'],
		integrations: ['CanvaFigma'],
		useCases: ['Marketing velocityCost savings'],
=======
		| 'AI Quantum Computing';
	pricing: { starter: string; professional?: string; enterprise?: string};
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	rating?: number;
	launchDate?: string;
	realService?: boolean;
};

export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
	{_id: 'ai-emotional-support-agent', _name: 'AI Emotional Support Agent', _description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.', _category: 'AI Emotional Intelligence', _pricing: { starter: '$99/mo'},
		features: ['CBT-guided prompts', 'Mood tracking', 'Crisis escalation', 'HIPAA-friendly modes'],
		integrations: ['Twilio', 'Slack'],
		useCases: ['Employee wellness', '24/7 support'],
		link: 'https://ziontechgroup.com/services/ai-emotional-support-agent',
		realService: true
	},
	{_id: 'ai-product-spec-writer', _name: 'AI Product Spec Writer', _description: 'Generate PRDs, _user stories, _and acceptance criteria aligned with business goals and analytics.', _category: 'AI Business Management', _pricing: { starter: '$79/mo'},
		features: ['PRD templates', 'Story generation', 'Acceptance criteria', 'Analytics alignment'],
		integrations: ['Jira', 'Linear'],
		useCases: ['Faster planning', 'Better alignment'],
		link: 'https://ziontechgroup.com/services/ai-product-spec-writer',
		realService: true
	},
	{_id: 'ai-creative-studio', _name: 'AI Creative Studio', _description: 'Generate brand-consistent images and short-form videos with approvals and rights management.', _category: 'AI Creativity', _pricing: { starter: '$149/mo'},
		features: ['Brand kit', 'Image & video gen', 'Review & approvals', 'Rights management'],
		integrations: ['Canva', 'Figma'],
		useCases: ['Marketing velocity', 'Cost savings'],
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		link: 'https://ziontechgroup.com/services/ai-creative-studio',
		realService: true
	}
],