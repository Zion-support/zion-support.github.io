<<<<<<< HEAD
export interface CuttingEdgeAIService2034 { id: string; name: string; tagline: string; description: string; category: string; price?: { monthly?: number; yearly?: number; currency: string }; features: string[]; link: string; popular: boolean; icon: string; color: string; launchDate?: string; rating?: number} export const cuttingEdgeAIServices: CuttingEdgeAIService2034[] = [ { id: 'llm-eval-orchestrator-2034',name: 'LLM Evaluation Orchestrator',tagline: 'Regression tests,red-teaming,and leaderboards',description: 'Automate LLM evals across providers with test suites,safety red-teaming,and dashboards. CI gate for model changes.',category: 'AI & Data',price: { monthly: 99,yearly: 990,currency: 'USD' },features: [ 'Provider-agnostic runner','Dataset and prompt versioning','Guardrail and jailbreak tests','CI integration and reports','Cost and latency tracking' ],link: 'https: popular: true,icon: '🧪',color: 'from-cyan-600 to-blue-700',launchDate: '2025-01-20',rating: 4.8 },{ id: 'hybrid-rag-starter-2034',name: 'Hybrid RAG Starter',tagline: 'Structured + unstructured retrieval with eval harness',description: 'Production RAG template combining SQL + vector stores with caching,tracing,and evaluation harness.',category: 'AI & Data',price: { monthly: 79,yearly: 790,currency: 'USD' },features: [ 'Hybrid retrieval (BM25 + vectors)','Eval harness and datasets','Prompt caching and tracing','Guardrails and redaction','SDKs for Node/Python' ],link: 'https: popular: true,icon: '🔎',color: 'from-purple-600 to-pink-600',launchDate: '2025-01-30',rating: 4.7 } ];
=======
export type CuttingEdgeAIService = {
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
	pricing: { starter: string; professional?: string; enterprise?: string };
	features: string[];
	integrations?: string[];
	useCases?: string[];
	link: string;
	rating?: number;
	launchDate?: string;
	realService?: boolean;
};

export const cuttingEdgeAIServices: CuttingEdgeAIService[] = [
	{
		id: 'ai-emotional-support-agent',
		name: 'AI Emotional Support Agent',
		description: 'On-demand AI agent trained on CBT and mindfulness protocols with escalation pathways.',
		category: 'AI Emotional Intelligence',
		pricing: { starter: '$99/mo' },
		features: ['CBT-guided prompts', 'Mood tracking', 'Crisis escalation', 'HIPAA-friendly modes'],
		integrations: ['Twilio', 'Slack'],
		useCases: ['Employee wellness', '24/7 support'],
		link: 'https://ziontechgroup.com/services/ai-emotional-support-agent',
		realService: true
	},
	{
		id: 'ai-product-spec-writer',
		name: 'AI Product Spec Writer',
		description: 'Generate PRDs, user stories, and acceptance criteria aligned with business goals and analytics.',
		category: 'AI Business Management',
		pricing: { starter: '$79/mo' },
		features: ['PRD templates', 'Story generation', 'Acceptance criteria', 'Analytics alignment'],
		integrations: ['Jira', 'Linear'],
		useCases: ['Faster planning', 'Better alignment'],
		link: 'https://ziontechgroup.com/services/ai-product-spec-writer',
		realService: true
	},
	{
		id: 'ai-creative-studio',
		name: 'AI Creative Studio',
		description: 'Generate brand-consistent images and short-form videos with approvals and rights management.',
		category: 'AI Creativity',
		pricing: { starter: '$149/mo' },
		features: ['Brand kit', 'Image & video gen', 'Review & approvals', 'Rights management'],
		integrations: ['Canva', 'Figma'],
		useCases: ['Marketing velocity', 'Cost savings'],
		link: 'https://ziontechgroup.com/services/ai-creative-studio',
		realService: true
	}
];
>>>>>>> origin/automation/changelog
