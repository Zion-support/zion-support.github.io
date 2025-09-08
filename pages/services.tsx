type Service = {
  name: string;
  summary: string;
  pricing: string;
  link: string;
};

const microSaaS: Service[] = [
  {
    name: 'Cloud Cost Guard (FinOps Assistant)',
    summary: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
    pricing: 'Typical: $299–$1,499/month',
    link: '/services/micro-saas'
  },
  {
    name: 'LLM Evaluation & Safety Suite',
    summary: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
    pricing: 'Typical: $799–$3,500/month',
    link: '/services/ai-services'
  },
  {
    name: 'Customer Feedback & NPS Micro-App',
    summary: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
    pricing: 'Typical: $149–$799/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Event Management Dashboard',
    summary: 'Comprehensive event management with ticket sales, attendee tracking, and real-time analytics.',
    pricing: 'Typical: $199–$999/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Customer Support & Helpdesk Platform',
    summary: 'Complete support solution with ticket management, knowledge base, and AI chatbots.',
    pricing: 'Typical: $99–$599/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Project Management & Collaboration',
    summary: 'Streamlined project management with task tracking, team collaboration, and time tracking.',
    pricing: 'Typical: $79–$399/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Invoice & Billing Management',
    summary: 'Automated invoicing and billing with payment processing and financial reporting.',
    pricing: 'Typical: $49–$299/month',
    link: '/services/micro-saas'
  },
  {
    name: 'Lead Generation & CRM',
    summary: 'Intelligent lead generation with automated follow-ups and sales pipeline tracking.',
    pricing: 'Typical: $149–$799/month',
    link: '/services/micro-saas'
  }
];

const aiServices: Service[] = [
  {
    name: 'AI Customer Support Automation',
    summary: 'Chatbots, triage, knowledge mining and human-in-the-loop escalation.',
    pricing: 'Typical: $2k–$8k setup, $0.02–$0.2/session',
    link: '/services/ai-services'
  },
  {
    name: 'Predictive Analytics & Forecasting',
    summary: 'Time-series forecasts for demand, revenue, churn and supply risk.',
    pricing: 'Typical: $4k–$20k project',
    link: '/services/ai-services'
  },
  {
    name: 'GenAI Content & SEO Automation',
    summary: 'Editorial-quality drafts, briefs, clustering and internal linking suggestions.',
    pricing: 'Typical: $1k–$6k/month',
    link: '/services/ai-services'
  },
  {
    name: 'AI-Powered Email Responder',
    summary: 'Intelligent email automation with smart classification and auto-response generation.',
    pricing: 'Typical: $1.5k–$8k setup, $0.05–$0.15/email',
    link: '/services/ai-services'
  },
  {
    name: 'AI Document Processing & OCR',
    summary: 'Advanced document digitization with intelligent data extraction and form processing.',
    pricing: 'Typical: $3k–$15k setup, $0.02–$0.10/page',
    link: '/services/ai-services'
  },
  {
    name: 'AI Voice Assistant & IVR',
    summary: 'Intelligent voice assistants with natural language understanding and multi-language support.',
    pricing: 'Typical: $5k–$25k setup, $0.10–$0.50/call',
    link: '/services/ai-services'
  },
  {
    name: 'AI Fraud Detection & Security',
    summary: 'Advanced fraud detection using machine learning to identify suspicious activities.',
    pricing: 'Typical: $8k–$40k setup, $0.01–$0.05/transaction',
    link: '/services/ai-services'
  },
  {
    name: 'AI Recommendation Engine',
    summary: 'Personalized recommendation systems to boost engagement and sales.',
    pricing: 'Typical: $4k–$20k setup, $0.02–$0.10/recommendation',
    link: '/services/ai-services'
  }
];

const itServices: Service[] = [
  {
    name: 'Cloud DevOps & SRE',
    summary: 'CI/CD, IaC, observability, autoscaling and cost optimization.',
    pricing: 'Typical: $120–$220/hour or $6k–$30k/project',
    link: '/services/it-services'
  },
  {
    name: 'Cybersecurity Hardening & SOC',
    summary: 'Zero Trust, EDR, CSP headers, security reviews and SOC readiness.',
    pricing: 'Typical: $5k–$40k project, $2k–$8k/month managed',
    link: '/services/it-services'
  },
  {
    name: 'Cloud Migration & Modernization',
    summary: 'Lift/shift, containerization, serverless and data platform upgrades.',
    pricing: 'Typical: $10k–$150k project',
    link: '/services/it-services'
  },
  {
    name: 'Cloud Architecture & Design',
    summary: 'Expert cloud architecture design for scalable, secure, and cost-effective solutions.',
    pricing: 'Typical: $8k–$50k project',
    link: '/services/it-services'
  },
  {
    name: 'Disaster Recovery & Backup',
    summary: 'Comprehensive disaster recovery and backup solutions for business continuity.',
    pricing: 'Typical: $5k–$25k setup, $500–$2k/month',
    link: '/services/it-services'
  },
  {
    name: 'API Development & Integration',
    summary: 'Custom API development and third-party integrations to streamline operations.',
    pricing: 'Typical: $3k–$20k project',
    link: '/services/it-services'
  },
  {
    name: 'Mobile App Development',
    summary: 'Native and cross-platform mobile application development for iOS and Android.',
    pricing: 'Typical: $10k–$100k project',
    link: '/services/it-services'
  },
  {
    name: 'Web Application Development',
    summary: 'Custom web application development with modern frameworks and scalable architecture.',
    pricing: 'Typical: $8k–$80k project',
    link: '/services/it-services'
  }
];

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-2">
						{/* AI Autonomous Systems */}
						<div id="ai" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
									<Brain className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">AI Autonomous Systems</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Transform your operations with intelligent automation and AI-powered decision making.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Sales/CS multi-agent copilots</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">RAG and workflow orchestration</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Observability and guardrails</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Intelligent process automation</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
								>
									Get started with AI
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Cloud Platforms */}
						<div id="cloud" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
									<Cloud className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Cloud Platforms</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Build scalable, resilient cloud infrastructure that grows with your business.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Server className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Serverless and Kubernetes</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Data pipelines and ML ops</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">FinOps and SRE practices</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Globe className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Multi-cloud architecture</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors"
								>
									Build your cloud platform
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Cybersecurity */}
						<div id="cybersecurity" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
									<Shield className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Cybersecurity</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Protect your business with enterprise-grade security frameworks and compliance.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Lock className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Zero-trust frameworks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Shield className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Compliance and threat modeling</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Incident response playbooks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Security monitoring & analytics</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-500 transition-colors"
								>
									Secure your business
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Micro SaaS */}
						<div id="saas" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
									<Code className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Micro SaaS</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Rapidly build and deploy SaaS products with proven infrastructure patterns.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Rapid product delivery</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Billing, auth, and analytics</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Growth experiments</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">User onboarding & retention</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors"
								>
									Build your SaaS
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Process</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							How we deliver results
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We follow a proven methodology that ensures successful delivery and measurable outcomes.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">1</span>
									Discovery
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We analyze your current state, understand your goals, and design a roadmap for success.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">2</span>
									Design
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We architect solutions that align with your business objectives and technical requirements.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">3</span>
									Develop
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We build and test your solution using industry best practices and modern technologies.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">4</span>
									Deploy
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We launch your solution and provide ongoing support to ensure continued success.
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to get started?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss your project and how we can help you achieve your goals.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get in touch
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
