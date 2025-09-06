<<<<<<< HEAD

<<<<<<< HEAD
=======
export type CuttingEdgeAIService = {
export type CuttingEdgeAIService = {;
=======
export type CuttingEdgeAIService = {
      'CBT-guided prompts',
  launch_date?: string;
  real_service?: boolean;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  {

<<<<<<< HEAD
=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
  {
<<<<<<< HEAD
    id: 'ai - emotional - support - agent',
    name: 'AI Emotional Support Agent',
    description:;
      'On - demand AI agent trained on CBT and mindfulness protocols with escalation pathways.',
    category: 'AI Emotional Intelligence',
    pricing: { starter: '$99 / mo' },
    features: [;
      'CBT - guided prompts',
      'Mood tracking',
      'Crisis escalation',
      'HIPAA - friendly modes',
    ],
    integrations: ['Twilio', 'Slack'],
    use_cases: ['Employee wellness', '24 / 7 support'],
    link: 'https://ziontechgroup.com / services / ai - emotional - support - agent',
    real_service: true,
  },
  {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    id: 'ai - product - spec - writer',
    name: 'AI Product Spec Writer',
    description:;
      'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',
    category: 'AI Business Management',
    pricing: { starter: '$79 / mo' },
    features: [;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'PRD templates',
      'Story generation',
      'Acceptance criteria',
      'Analytics alignment',
    ],
    integrations: ['Jira', 'Linear'],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

    use_cases: ['Faster planning', 'Better alignment'],
    link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
    real_service: true,

=======
    use_cases: ['Faster planning', 'Better alignment'],
    link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
    real_service: true,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    id: 'ai - creative - studio',
    name: 'AI Creative Studio',
    description:;
      'Generate brand - consistent images and short - form videos with approvals and rights management.',
    category: 'AI Creativity',
    pricing: { starter: '$149 / mo' },
    features: [;

<<<<<<< HEAD
=======
    id: 'ai-creative-studio'
    name: 'AI Creative Studio'
    description:
      'Generate brand-consistent images and short-form videos with approvals and rights management.'
    category: 'AI Creativity'
    pricing: { starter: '$149/mo' }
    features: [
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      'Brand kit',
      'Image & video gen',
      'Review & approvals',
      'Rights management',
    ],
    integrations: ['Canva', 'Figma'],
<<<<<<< HEAD
<<<<<<< HEAD

    use_cases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com / services / ai - creative - studio',
    real_service: true,

  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];	id: string;

=======
	id: string, name: string,
	description: string,

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
];	id: string;
	id: string, name: string,
	description: string,
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
];	id: string;

    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
];	id: string;
	id: string, name: string,
	description: string,

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
	{
		id: 'ai-emotional-support-agent';
		name: 'AI Emotional Support Agent';
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.';
		category: 'AI Emotional Intelligence'
		pricing: { starter: '$99/mo' }
		features: ['CBT-guided promptsMood trackingCrisis escalationHIPAA-friendly modes'];
		integrations: ['TwilioSlack'];
		useCases: ['Employee wellness24/7 support'];
<<<<<<< HEAD
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-product-spec-writer',

=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-product-spec-writer',
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',

		realService: true
=======
	}
];

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
	}
];


name: string;
description: string;
category:;
  | 'AI Consciousness';
  | 'AI Emotional Intelligence';
  | 'AI Creativity';
  | 'AI Psychology';
  | 'AI Business Management';
  | 'AI Healthcare';
  | 'AI Neural Interfaces';
  | 'AI Quantum Computing',
pricing: { starter: string, professional?: string, enterprise?: string }
features: string[];
integrations?: string[];
use_cases?: string[];
link: string;
rating?: number;
launch_date?: string,
real_service?: boolean;
}
;
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [;
{
  id: 'ai - emotional - support - agent';
  name: 'AI Emotional Support Agent';
  description: 'On - demand AI agent trained on CBT and mindfulness protocols with escalation pathways.';
  category: 'AI Emotional Intelligence',
  pricing: { starter: '$99 / mo' }
  features: ['CBT - guided prompts_mood tracking_crisis escalationHIPAA - friendly modes'];
  integrations: ['TwilioSlack'];
  use_cases: ['Employee wellness24 / 7 support'];
  link: 'https://ziontechgroup.com / services / ai - emotional - support - agent',
  real_service: true;
}
{
  id: 'ai - product - spec - writer';
  name: 'AI Product Spec Writer',
  description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.';
  category: 'AI Business Management',
  pricing: { starter: '$79 / mo' }
  features: ['PRD templates_story generation_acceptance criteria_analytics alignment'];
  integrations: ['JiraLinear'];
  use_cases: ['Faster planning_better alignment'];
  link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
  real_service: true;
}
{
  id: 'ai - creative - studio';
  name: 'AI Creative Studio';
  description: 'Generate brand - consistent images and short - form videos with approvals and rights management.';
  category: 'AI Creativity',
  pricing: { starter: '$149 / mo' }
  features: ['Brand kit_image & video gen_review & approvals_rights management'];
  integrations: ['CanvaFigma'];
  use_cases: ['Marketing velocity_cost savings'];
  link: 'https://ziontechgroup.com / services / ai - creative - studio',
  real_service: true;
}
<<<<<<< HEAD
=======
=======
	}
];


		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',
		realService: true
	}
];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type CuttingEdgeAIService = {;
	}
];
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export type CuttingEdgeAIService = {;
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
	}
];
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
;

export type CuttingEdgeAIService = {;
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
	}
];

export type CuttingEdgeAIService = {
  id: string;
  name: string;
  description: string;
  category:;
  {
      'PRD templates',
      'Story generation',
      'Acceptance criteria',
      'Analytics alignment',
    ],
    integrations: ['Jira', 'Linear'],
  },
  {
      'Brand kit',
      'Image & video gen',
      'Review & approvals',
      'Rights management',
    ],
    integrations: ['Canva', 'Figma'],
  },
];	id: string;
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
	{
		id: 'ai-emotional-support-agent';
		name: 'AI Emotional Support Agent';
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.';
		category: 'AI Emotional Intelligence'
		pricing: { starter: '$99/mo' }
		features: ['CBT-guided promptsMood trackingCrisis escalationHIPAA-friendly modes'];
		integrations: ['TwilioSlack'];
		useCases: ['Employee wellness24/7 support'];
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
		realService: true
	}
];
name: string;
description: string;
category:;
  | 'AI Consciousness';
  | 'AI Emotional Intelligence';
  | 'AI Creativity';
  | 'AI Psychology';
  | 'AI Business Management';
  | 'AI Healthcare';
  | 'AI Neural Interfaces';
  | 'AI Quantum Computing',
pricing: { starter: string, professional?: string, enterprise?: string }
features: string[];
integrations?: string[];
use_cases?: string[];
link: string;
rating?: number;
launch_date?: string,
real_service?: boolean;
}
;
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [;
{
  id: 'ai - emotional - support - agent';
  name: 'AI Emotional Support Agent';
  description: 'On - demand AI agent trained on CBT and mindfulness protocols with escalation pathways.';
  category: 'AI Emotional Intelligence',
  pricing: { starter: '$99 / mo' }
  features: ['CBT - guided prompts_mood tracking_crisis escalationHIPAA - friendly modes'];
  integrations: ['TwilioSlack'];
  use_cases: ['Employee wellness24 / 7 support'];
  link: 'https://ziontechgroup.com / services / ai - emotional - support - agent',
  real_service: true;
}
{
  id: 'ai - product - spec - writer';
  name: 'AI Product Spec Writer',
  description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.';
  category: 'AI Business Management',
  pricing: { starter: '$79 / mo' }
  features: ['PRD templates_story generation_acceptance criteria_analytics alignment'];
  integrations: ['JiraLinear'];
  use_cases: ['Faster planning_better alignment'];
  link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
  real_service: true;
}
{
  id: 'ai - creative - studio';
  name: 'AI Creative Studio';
  description: 'Generate brand - consistent images and short - form videos with approvals and rights management.';
  category: 'AI Creativity',
  pricing: { starter: '$149 / mo' }
  features: ['Brand kit_image & video gen_review & approvals_rights management'];
  integrations: ['CanvaFigma'];
  use_cases: ['Marketing velocity_cost savings'];
  link: 'https://ziontechgroup.com / services / ai - creative - studio',
  real_service: true;
}
];
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
