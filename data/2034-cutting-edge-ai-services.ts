
export type CuttingEdgeAIService = {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  id: string;
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
    | 'AI Quantum Computing';
  pricing: { starter: string; professional?: string; enterprise?: string }
  features: string[];
  integrations?: string[];
  use_cases?: string[];
  link: string;
  rating?: number;
<<<<<<< HEAD
  launchDate?: string;
  realService?: boolean;
}
export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
  {
    id: 'ai-emotional-support-agent'
    name: 'AI Emotional Support Agent'
    description:
      'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.'
    category: 'AI Emotional Intelligence'
    pricing: { starter: '$99/mo' }
    features: [
<<<<<<< HEAD
      'CBT-guided prompts'
      'Mood tracking'
      'Crisis escalation'
      'HIPAA-friendly modes'
    ]
    integrations: ['Twilio', 'Slack']
    useCases: ['Employee wellness', '24/7 support']
    link: 'https://ziontechgroup.com/services/ai-emotional-support-agent'
    realService: true
  }
=======
      'CBT-guided prompts',
=======
  launch_date?: string;
  real_service?: boolean;
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      'Mood tracking',
      'Crisis escalation',
      'HIPAA - friendly modes',
    ],
    integrations: ['Twilio', 'Slack'],
<<<<<<< HEAD
    useCases: ['Employee wellness', '24/7 support'],
    link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',
    realService: true,
=======
    use_cases: ['Employee wellness', '24 / 7 support'],
    link: 'https://ziontechgroup.com / services / ai - emotional - support - agent',
    real_service: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
<<<<<<< HEAD
    id: 'ai-product-spec-writer'
    name: 'AI Product Spec Writer'
    description:
      'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.'
    category: 'AI Business Management'
    pricing: { starter: '$79/mo' }
    features: [
<<<<<<< HEAD
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
=======
=======
    id: 'ai - product - spec - writer',
    name: 'AI Product Spec Writer',
    description:;
      'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',
    category: 'AI Business Management',
    pricing: { starter: '$79 / mo' },
    features: [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      'PRD templates',
      'Story generation',
      'Acceptance criteria',
      'Analytics alignment',
    ],
    integrations: ['Jira', 'Linear'],
<<<<<<< HEAD
    useCases: ['Faster planning', 'Better alignment'],
    link: 'https://ziontechgroup && ziontechgroup.com/services/ai-product-spec-writer',
    realService: true,
=======
    use_cases: ['Faster planning', 'Better alignment'],
    link: 'https://ziontechgroup.com / services / ai - product - spec - writer',
    real_service: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
<<<<<<< HEAD
    id: 'ai-creative-studio'
    name: 'AI Creative Studio'
    description:
      'Generate brand-consistent images and short-form videos with approvals and rights management.'
    category: 'AI Creativity'
    pricing: { starter: '$149/mo' }
    features: [
<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      'Brand kit',
      'Image & video gen',
      'Review & approvals',
      'Rights management',
    ],
    integrations: ['Canva', 'Figma'],
<<<<<<< HEAD
    useCases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',
    realService: true,
=======
    use_cases: ['Marketing velocity', 'Cost savings'],
    link: 'https://ziontechgroup.com / services / ai - creative - studio',
    real_service: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];	id: string;
<<<<<<< HEAD
	name: string;
	description: string;
<<<<<<< HEAD
=======
=======
	id: string, name: string,
	description: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
		link: 'https://ziontechgroup.com/services/ai-emotional-support-agent'
=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-emotional-support-agent',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
		link: 'https://ziontechgroup.com/services/ai-product-spec-writer'
=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-product-spec-writer',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
		link: 'https://ziontechgroup.com/services/ai-creative-studio'
=======
		link: 'https://ziontechgroup && ziontechgroup.com/services/ai-creative-studio',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
		realService: true
	}
];
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
];
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
