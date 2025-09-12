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

export const cuttingEdgeAIServices: EnhancedRealMicroSaasService[] = [
	{
		id: 'llm-evaluation-orchestrator-2034',
		name: 'LLM Evaluation Orchestrator',
		tagline: 'Automate evals, red‑teaming, regression tests, and leaderboards',
		price: '$99',
		period: '/month',
		description: 'Run offline/online evals across OpenAI, Anthropic, and open‑source models with automated datasets, safety tests, and dashboards. Export results to your data warehouse.',
		features: [
			'Quality, safety, grounding eval suites',
			'Regression testing and trend charts',
			'Red‑teaming prompts and jailbreak checks',
			'Provider adapters and cost metering',
			'Leaderboards and model gating',
			'CI integration and reports'
		],
		popular: true,
		icon: '🧪',
		color: 'from-cyan-600 to-blue-700',
		textColor: 'text-cyan-300',
		link: 'https://ziontechgroup.com/services/ai-evaluation-orchestrator',
		marketPosition: 'Flexible alternative to bespoke spreadsheets and ad‑hoc evals.',
		targetAudience: 'AI product, data science, platform teams',
		trialDays: 14,
		setupTime: '1 day',
		category: 'AI & Data',
		realService: true,
		technology: ['OpenAI', 'Anthropic', 'Python/JS', 'ClickHouse'],
		integrations: ['OpenRouter', 'Weights & Biases', 'Datadog'],
		useCases: ['Model comparisons', 'Release gating', 'Safety audits'],
		roi: 'Ship safer and cheaper AI features with confidence',
		competitors: ['W&B Evals', 'Arize Phoenix'],
		marketSize: '$5B AI Ops',
		growthRate: '40% YoY',
		variant: 'ai-futuristic' as any,
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Dataset runners, adapters, dashboards, and CI actions.',
		launchDate: '2025-03-18',
		customers: 15,
		rating: 4.7,
		reviews: 9
	},
	{
		id: 'agentic-rag-starter-2034',
		name: 'Agentic RAG Starter',
		tagline: 'Retrieval‑augmented generation with tools, evals, and guardrails',
		price: '$149',
		period: '/month',
		description: 'Deploy an agentic RAG stack with ingestion, chunking, vector DB, tool use, and evaluation harness. Includes guardrails and observability.',
		features: [
			'Document ingestion and chunking',
			'Embeddings and vector DB',
			'Tools and function calls',
			'Evaluation harness and dashboards',
			'Guardrails and safety filters',
			'One‑click deploys'
		],
		popular: false,
		icon: '🧠',
		color: 'from-purple-600 to-pink-700',
		textColor: 'text-purple-200',
		link: 'https://ziontechgroup.com/services/ai-rag-starter-blueprint',
		marketPosition: 'Faster path to value vs. bespoke agents with no guardrails.',
		targetAudience: 'Product, data, platform teams',
		trialDays: 14,
		setupTime: '1 day',
		category: 'AI & Data',
		realService: true,
		technology: ['Next.js', 'Pinecone/Weaviate/PGVector', 'OpenAI'],
		integrations: ['Pinecone', 'Weaviate', 'PGVector'],
		useCases: ['Knowledge bases', 'Support', 'Internal docs'],
		roi: 'Launch agentic RAG in days, not weeks',
		competitors: ['LangChain templates', 'LlamaIndex starters'],
		marketSize: '$2B RAG tooling',
		growthRate: '45% CAGR',
		variant: 'holographic-matrix' as any,
		contactInfo: contact,
		realImplementation: true,
		implementationDetails: 'Ingestion workers, vector DB, tools, and eval suite.',
		launchDate: '2025-03-19',
		customers: 9,
		rating: 4.6,
		reviews: 6
	}
];