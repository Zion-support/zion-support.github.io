
<<<<<<< HEAD
<<<<<<< HEAD
export type CuttingEdgeAIService = {
export type CuttingEdgeAIService = {;
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  {

<<<<<<< HEAD
<<<<<<< HEAD
}
;
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [;
  {
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    id: 'ai - product - spec - writer',
    name: 'AI Product Spec Writer',
    description:;
      'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',
    category: 'AI Business Management',
    pricing: { starter: '$79 / mo' },
    features: [;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      'PRD templates',
      'Story generation',
      'Acceptance criteria',
      'Analytics alignment',
    ],
    integrations: ['Jira', 'Linear'],
<<<<<<< HEAD
    use_cases: ['Faster planning', 'Better alignment'],
    link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
    real_service: true,
  },
  {
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
=======

    use_cases: ['Faster planning', 'Better alignment'],
    link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
    real_service: true,

  },
  {
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
    id: 'ai - creative - studio',
    name: 'AI Creative Studio',
    description:;
      'Generate brand - consistent images and short - form videos with approvals and rights management.',
    category: 'AI Creativity',
    pricing: { starter: '$149 / mo' },
    features: [;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      'Brand kit',
      'Image & video gen',
      'Review & approvals',
      'Rights management',
    ],
    integrations: ['Canva', 'Figma'],
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    use_cases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com / services / ai - creative - studio',
    real_service: true,

  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];	id: string;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
];	id: string;
	id: string, name: string,
	description: string,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-product-spec-writer',

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
	}
];


		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
		realService: true
	}
];
<<<<<<< HEAD
=======


=======
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type CuttingEdgeAIService = {;

	}
];
;

export type CuttingEdgeAIService = {;
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',

		realService: true
	}
];

export type CuttingEdgeAIService = {;

	}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
];
;
=======

=======
export type CuttingEdgeAIService = {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
