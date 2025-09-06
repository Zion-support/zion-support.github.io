<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
export type CuttingEdgeAIService = {
      'CBT-guided prompts',
  launch_date?: string;
  real_service?: boolean;
  id: string;
=======
export type CuttingEdgeAIService = any;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
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
  {

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452



  {

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
    id: 'ai - creative - studio',
    name: 'AI Creative Studio',
    description:;
      'Generate brand - consistent images and short - form videos with approvals and rights management.',
    category: 'AI Creativity',
    pricing: { starter: '$149 / mo' },
    features: [;

=======
    id: 'ai-creative-studio'
    name: 'AI Creative Studio'
    description:
      'Generate brand-consistent images and short-form videos with approvals and rights management.'
    category: 'AI Creativity'
    pricing: { starter: '$149/mo' }
    features: [
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      'Brand kit',
      'Image & video gen',
      'Review & approvals',
      'Rights management',
    ],
    integrations: ['Canva', 'Figma'],
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
];	id: string;

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

    use_cases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com / services / ai - creative - studio',
    real_service: true,

  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];	id: string;

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
];	id: string;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
];	id: string;
	id: string, name: string,
	description: string,

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
=======
<<<<<<< HEAD
=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-product-spec-writer',

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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
	}
];

<<<<<<< HEAD
=======
<<<<<<< HEAD
	}
];

=======

		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',

		realService: true
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
	}
];


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
export type CuttingEdgeAIService = {;
	}
];
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
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com/services/ai-creative-studio',
    realService: true,
  },
];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
