<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
export type CuttingEdgeAIService = {
      'CBT-guided prompts',
  launch_date?: string;
  real_service?: boolean;
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD

export type CuttingEdgeAIService = {
export type CuttingEdgeAIService = {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  id: string;
  name: string;
  description: string;
  category:
    | 'AI Consciousness'
    | 'AI Emotional Intelligence'
    | 'AI Creativity'
    | 'AI Psychology'
    | 'AI Business Management'
    | 'AI Healthcare'
    | 'AI Neural Interfaces'
    | 'AI Quantum Computing';
  pricing: { starter: string; professional?: string; enterprise?: string }
  features: string[];
  integrations?: string[];
  useCases?: string[];
  link: string;
  rating?: number;
  launchDate?: string;
  realService?: boolean;
}
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  {

=======
<<<<<<< HEAD
    id: 'ai - product - spec - writer',
    name: 'AI Product Spec Writer',
    description:;
      'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',
    category: 'AI Business Management',
    pricing: { starter: '$79 / mo' },
    features: [;

      'PRD templates',
      'Story generation',
      'Acceptance criteria',
      'Analytics alignment',
    ],
    integrations: ['Jira', 'Linear'],

    use_cases: ['Faster planning', 'Better alignment'],
    link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
    real_service: true,

  },
  {
<<<<<<< HEAD
    id: 'ai-product-spec-writer'
    name: 'AI Product Spec Writer'
    description:
      'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.'
    category: 'AI Business Management'
    pricing: { starter: '$79/mo' }
    features: [
      'PRD templates'
      'Story generation'
      'Acceptance criteria'
      'Analytics alignment'
    ]
    integrations: ['Jira', 'Linear']
    useCases: ['Faster planning', 'Better alignment']
    link: 'https://ziontechgroup.com/services/ai-product-spec-writer'
    realService: true
  }
  {
    id: 'ai-creative-studio'
    name: 'AI Creative Studio'
    description:
      'Generate brand-consistent images and short-form videos with approvals and rights management.'
    category: 'AI Creativity'
    pricing: { starter: '$149/mo' }
    features: [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      'Brand kit'
      'Image & video gen'
      'Review & approvals'
      'Rights management'
    ]
    integrations: ['Canva', 'Figma']
    useCases: ['Marketing velocity', 'Cost savings']
    link: 'https://ziontechgroup.com/services/ai-creative-studio'
    realService: true
  }
=======

=======
    id: 'ai - creative - studio',
    name: 'AI Creative Studio',
    description:;
      'Generate brand - consistent images and short - form videos with approvals and rights management.',
    category: 'AI Creativity',
    pricing: { starter: '$149 / mo' },
    features: [;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      'Brand kit',
      'Image & video gen',
      'Review & approvals',
      'Rights management',
    ],
    integrations: ['Canva', 'Figma'],
<<<<<<< HEAD
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
=======

    use_cases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com / services / ai - creative - studio',
    real_service: true,

  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
];	id: string;

=======
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
];	id: string;
	id: string, name: string,
	description: string,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
	category:
		| 'AI Consciousness'
		| 'AI Emotional Intelligence'
		| 'AI Creativity'
		| 'AI Psychology'
		| 'AI Business Management'
		| 'AI Healthcare'
		| 'AI Neural Interfaces'
		| 'AI Quantum Computing'
	pricing: { starter: string, professional?: string, enterprise?: string }
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	rating?: number;
	launchDate?: string
	realService?: boolean
}
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
	{;
		id: 'ai-emotional-support-agent';
		name: 'AI Emotional Support Agent';
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.';
		category: 'AI Emotional Intelligence'
		pricing: { starter: '$99/mo' }
		features: ['CBT-guided promptsMood trackingCrisis escalationHIPAA-friendly modes'];
		integrations: ['TwilioSlack'];
		useCases: ['Employee wellness24/7 support'];

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',

		realService: true
	}
	{
		id: 'ai-product-spec-writer';
		name: 'AI Product Spec Writer'
		description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.';
		category: 'AI Business Management'
		pricing: { starter: '$79/mo' }
		features: ['PRD templatesStory generationAcceptance criteriaAnalytics alignment'];
		integrations: ['JiraLinear'];
		useCases: ['Faster planningBetter alignment'];

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-product-spec-writer',

		realService: true
	}
	{
		id: 'ai-creative-studio';
		name: 'AI Creative Studio';
		description: 'Generate brand-consistent images and short-form videos with approvals and rights management.';
		category: 'AI Creativity'
		pricing: { starter: '$149/mo' }
		features: ['Brand kitImage & video genReview & approvalsRights management'];
		integrations: ['CanvaFigma'];
		useCases: ['Marketing velocityCost savings'];

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',

		realService: true
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
	}
];

export type CuttingEdgeAIService = {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
	id: string,;
	name: string,;
	description: string,;
	category:;
		| 'AI Consciousness';
		| 'AI Emotional Intelligence';
		| 'AI Creativity';
		| 'AI Psychology';
		| 'AI Business Management';
		| 'AI Healthcare';
		| 'AI Neural Interfaces';
		| 'AI Quantum Computing',;
	pricing: { starter: string, professional?: string, enterprise?: string },;
	features: string[],;
	integrations?: string[],;
	useCases?: string[],;
	link: string,;
	rating?: number,;
	launchDate?: string,;
	realService?: boolean;
},;
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [;
	{;
		id: 'ai-emotional-support-agent',;
		name: 'AI Emotional Support Agent',;
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.',;
		category: 'AI Emotional Intelligence',;
		pricing: { starter: '$99/mo' },;
		features: ['CBT-guided promptsMood trackingCrisis escalationHIPAA-friendly modes'],;
		integrations: ['TwilioSlack'],;
		useCases: ['Employee wellness24/7 support'],;
		link: 'https://ziontechgroup.com/services/ai-emotional-support-agent',;
		realService: true;
	},;
	{;
		id: 'ai-product-spec-writer',;
		name: 'AI Product Spec Writer',;
		description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',;
		category: 'AI Business Management',;
		pricing: { starter: '$79/mo' },;
		features: ['PRD templatesStory generationAcceptance criteriaAnalytics alignment'],;
		integrations: ['JiraLinear'],;
		useCases: ['Faster planningBetter alignment'],;
		link: 'https://ziontechgroup.com/services/ai-product-spec-writer',;
		realService: true;
	},;
	{;
		id: 'ai-creative-studio',;
		name: 'AI Creative Studio',;
		description: 'Generate brand-consistent images and short-form videos with approvals and rights management.',;
		category: 'AI Creativity',;
		pricing: { starter: '$149/mo' },;
		features: ['Brand kitImage & video genReview & approvalsRights management'],;
		integrations: ['CanvaFigma'],;
		useCases: ['Marketing velocityCost savings'],;
		link: 'https://ziontechgroup.com/services/ai-creative-studio',;
		realService: true;
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
	}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
];
;
=======

=======
export type CuttingEdgeAIService = {;
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
	id: string,;
	name: string,;
	description: string,;
	category:;
		| 'AI Consciousness';
		| 'AI Emotional Intelligence';
		| 'AI Creativity';
		| 'AI Psychology';
		| 'AI Business Management';
		| 'AI Healthcare';
		| 'AI Neural Interfaces';
		| 'AI Quantum Computing',;
	pricing: { starter: string, professional?: string, enterprise?: string },;
	features: string[],;
	integrations?: string[],;
	useCases?: string[],;
	link: string,;
	rating?: number,;
	launchDate?: string,;
	realService?: boolean;
},;
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [;
	{;
		id: 'ai-emotional-support-agent',;
		name: 'AI Emotional Support Agent',;
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.',;
		category: 'AI Emotional Intelligence',;
		pricing: { starter: '$99/mo' },;
		features: ['CBT-guided promptsMood trackingCrisis escalationHIPAA-friendly modes'],;
		integrations: ['TwilioSlack'],;
		useCases: ['Employee wellness24/7 support'],;
		link: 'https://ziontechgroup.com/services/ai-emotional-support-agent',;
		realService: true;
	},;
	{;
		id: 'ai-product-spec-writer',;
		name: 'AI Product Spec Writer',;
		description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',;
		category: 'AI Business Management',;
		pricing: { starter: '$79/mo' },;
		features: ['PRD templatesStory generationAcceptance criteriaAnalytics alignment'],;
		integrations: ['JiraLinear'],;
		useCases: ['Faster planningBetter alignment'],;
		link: 'https://ziontechgroup.com/services/ai-product-spec-writer',;
		realService: true;
	},;
	{;
		id: 'ai-creative-studio',;
		name: 'AI Creative Studio',;
		description: 'Generate brand-consistent images and short-form videos with approvals and rights management.',;
		category: 'AI Creativity',;
		pricing: { starter: '$149/mo' },;
		features: ['Brand kitImage & video genReview & approvalsRights management'],;
		integrations: ['CanvaFigma'],;
		useCases: ['Marketing velocityCost savings'],;
		link: 'https://ziontechgroup.com/services/ai-creative-studio',;
		realService: true;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
	}
];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
