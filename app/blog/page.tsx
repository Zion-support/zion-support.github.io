import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
	const blogPosts = [
	  {
	    id: 'product-analytics-2025',
	    title: 'Product Analytics 2025: From Dashboards to Decisions',
	    excerpt:
	      'A concise framework to turn product data into action and roadmap changes.',
	    date: '2025-09-11',
	    readTime: '9 min read',
	    category: 'Analytics',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'finops-ai-2025',
	    title: 'FinOps for AI 2025: Cut LLM Spend Without Slowing Teams',
	    excerpt:
	      'Caching, quantization, retrieval tuning, and eval-driven budgets that work.',
	    date: '2025-09-11',
	    readTime: '8 min read',
	    category: 'FinOps',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-roadmap-2026',
	    title: 'AI Product Roadmap 2026: Ship Impactful Features with Guardrails',
	    excerpt:
	      'Outcome-first planning, technical guardrails, and an operating model that scales.',
	    date: '2026-02-01',
	    readTime: '12 min read',
	    category: 'Strategy',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  // New posts (2025-09)
\t  {
\t    id: 'ai-engineering-best-practices-2025',
\t    title: 'AI Engineering Best Practices 2025: Reliability, Cost, and Speed',
\t    excerpt:
\t      'Concrete patterns to move business metrics with AI without blowing up costs or risk.',
\t    date: '2025-09-12',
\t    readTime: '12 min read',
\t    category: 'AI Engineering',
\t    featured: true,
\t    image: '/api/placeholder/600/400',
\t  },
\t  {
\t    id: 'startup-distribution-2026',
\t    title: 'Startup Distribution 2026: Channels that Compound to $1M ARR',
\t    excerpt:
\t      'A week-by-week system to find traction without a big team or budget.',
\t    date: '2025-09-12',
\t    readTime: '10 min read',
\t    category: 'Growth',
\t    featured: true,
\t    image: '/api/placeholder/600/400',
\t  },
	  {
	    id: 'ai-procurement-playbook-2025',
	    title: 'AI Procurement Playbook 2025: Buy Fast, Avoid Regret',
	    excerpt:
	      'Evaluate, pilot, and buy AI software without lock-in, with clear ROI and risk controls.',
	    date: '2025-09-11',
	    readTime: '10 min read',
	    category: 'Procurement',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'agent-safety-guardrails-2025',
	    title: 'Agent Safety & Guardrails 2025: Ship Reliable Agentic Systems',
	    excerpt:
	      'Controls, budgets, approvals, and observability to keep agent systems safe and affordable.',
	    date: '2025-09-11',
	    readTime: '11 min read',
	    category: 'AI Engineering',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
 	  {
 	    id: 'ai-productivity-playbook-2025',
 	    title: 'AI Productivity Playbook 2025: Ship Faster Without Breaking Things',
 	    excerpt:
 	      'A pragmatic system to boost throughput with AI while keeping quality, guardrails, and budgets.',
 	    date: '2025-09-11',
 	    readTime: '9 min read',
 	    category: 'AI & Productivity',
 	    featured: true,
 	    image: '/api/placeholder/600/400',
 	  },
 	  {
 	    id: 'cloud-cost-optimization-2025',
 	    title: 'Cloud Cost Optimization 2025: Save 30–50% Without Downtime',
 	    excerpt:
 	      'Quick wins and architecture moves that cut spend across compute, storage, and networking.',
 	    date: '2025-09-11',
 	    readTime: '8 min read',
 	    category: 'Cloud & DevOps',
 	    featured: true,
 	    image: '/api/placeholder/600/400',
 	  },
 	  {
 	    id: 'edge-ai-retail-2025',
 	    title: 'Edge AI in Retail 2025: Real-Time CX With Privacy by Design',
 	    excerpt:
 	      'On-device intelligence to reduce latency, protect PII, and personalize experiences at scale.',
 	    date: '2025-09-11',
 	    readTime: '7 min read',
 	    category: 'Edge & IoT',
 	    featured: true,
 	    image: '/api/placeholder/600/400',
 	  },
	  {
	    id: 'ai-ops-runbooks-2025',
	    title: 'AI Ops Runbooks 2025: Resolve Incidents Faster with Guardrails',
	    excerpt:
	      'Playbooks for LLM incidents: budget spikes, quality regressions, tool failures, and data drift.',
	    date: '2025-09-11',
	    readTime: '9 min read',
	    category: 'AI Operations',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-seo-content-engine-2025',
	    title: 'Startup SEO Content Engine 2025: Ship Weekly, Compound Traffic',
	    excerpt:
	      'A lean system to ideate, draft, and publish content that converts—without a big team.',
	    date: '2025-09-11',
	    readTime: '8 min read',
	    category: 'Growth',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-platform-engineering-2025',
	    title: 'AI Platform Engineering in 2025: Reliable, Governed, Cost-Aware',
	    excerpt:
	      'Foundations, guardrails, and patterns to ship AI features safely at scale.',
	    date: '2025-09-11',
	    readTime: '9 min read',
	    category: 'AI Engineering',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'customer-stories-automation-roi',
	    title: 'Customer Stories: Real ROI from AI Automation',
	    excerpt:
	      'Three concise case studies across support, finance, and operations with measurable ROI.',
	    date: '2025-09-11',
	    readTime: '7 min read',
	    category: 'Case Studies',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'enterprise-rag-architecture-2025',
	    title: 'Enterprise RAG Architecture 2025: Reliable, Governed, and Cost-Aware',
	    excerpt:
	      'Reference patterns for hybrid retrieval, governance, evals, and measurable ROI in production.',
	    date: '2025-09-11',
	    readTime: '10 min read',
	    category: 'Retrieval-Augmented Generation',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  // New posts (2025-09)
	  {
	    id: 'ai-architecture-cost-governance-2025',
	    title: 'AI Architecture & Cost Governance in 2025',
	    excerpt:
	      'Guardrails, observability, and budgets that keep systems reliable and affordable.',
	    date: '2025-09-11',
	    readTime: '8 min read',
	    category: 'AI Engineering',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-pricing-strategy-2025',
	    title: 'Startup Pricing Strategy 2025: From Free to $1M ARR',
	    excerpt:
	      'Validate willingness to pay, package value, and scale pricing with confidence.',
	    date: '2025-09-11',
	    readTime: '7 min read',
	    category: 'Growth',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-content-strategy-2025',
	    title: 'AI Content Strategy 2025: From Idea to Distribution',
	    excerpt:
	      'Plan, generate, and distribute high-quality content with AI guardrails and measurable outcomes.',
	    date: '2025-09-11',
	    readTime: '9 min read',
	    category: 'Content Strategy',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'llm-evals-in-production-2025',
	    title: 'LLM Evals in Production: What Actually Works',
	    excerpt:
	      'CI evals, judge models, and budgets tied to outcomes and risk—without slowing teams.',
	    date: '2025-09-11',
	    readTime: '8 min read',
	    category: 'AI Evaluation',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'customer-stories-ai-automation',
	    title: 'Customer Stories: Real ROI from AI Automation',
	    excerpt:
	      'Three concise case studies across support, finance, and operations showing clear ROI.',
	    date: '2025-09-11',
	    readTime: '7 min read',
	    category: 'Case Studies',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-transforming-business-2025',
	    title: 'How AI is Transforming Business Operations in 2025',
	    excerpt:
	      'Discover the latest AI trends reshaping enterprise operations and how companies are leveraging artificial intelligence for competitive advantage.',
	    date: '2025-01-15',
	    readTime: '8 min read',
	    category: 'AI & Technology',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'quantum-computing-business-applications',
	    title: 'Quantum Computing: The Next Frontier in Business Innovation',
	    excerpt:
	      'Explore how quantum computing is revolutionizing industries from finance to healthcare, and discover practical applications that are already delivering real business value.',
	    date: '2025-01-20',
	    readTime: '12 min read',
	    category: 'Quantum Computing',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'edge-computing-iot-revolution',
	    title: 'Edge Computing and IoT: Revolutionizing Real-Time Business Operations',
	    excerpt:
	      'Discover how edge computing and IoT are transforming industries by enabling real-time data processing, reducing latency, and creating new business opportunities.',
	    date: '2025-01-18',
	    readTime: '10 min read',
	    category: 'Edge Computing & IoT',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'sustainable-tech-green-it',
	    title: 'Sustainable Technology: Building a Greener Future Through Green IT',
	    excerpt:
	      'Explore how businesses are leveraging sustainable technology practices to reduce environmental impact while improving operational efficiency and creating long-term value.',
	    date: '2025-01-22',
	    readTime: '9 min read',
	    category: 'Green IT & Sustainability',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-ethics-responsible-innovation',
	    title: 'AI Ethics and Responsible Innovation: Building Trust in Artificial Intelligence',
	    excerpt:
	      'Explore the critical importance of ethical AI development and how businesses can implement responsible innovation practices to build trustworthy AI systems.',
	    date: '2025-01-25',
	    readTime: '11 min read',
	    category: 'AI Ethics & Responsible Innovation',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'micro-saas-success-stories',
	    title: 'Micro SaaS Success Stories: From Idea to $1M ARR',
	    excerpt:
	      'Real case studies of successful micro SaaS businesses and the strategies that helped them scale from zero to seven-figure revenue.',
	    date: '2025-01-12',
	    readTime: '12 min read',
	    category: 'Business Strategy',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'cloud-migration-best-practices',
	    title: 'Cloud Migration Best Practices: A Complete Guide',
	    excerpt:
	      'Everything you need to know about migrating to the cloud successfully, including common pitfalls and proven strategies.',
	    date: '2025-01-10',
	    readTime: '15 min read',
	    category: 'Cloud & DevOps',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'blockchain-business-applications',
	    title: 'Blockchain Beyond Crypto: Real Business Applications',
	    excerpt:
	      'Exploring practical blockchain applications in supply chain, healthcare, and finance that are driving real business value.',
	    date: '2025-01-08',
	    readTime: '10 min read',
	    category: 'Blockchain',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'cybersecurity-2025-trends',
	    title: 'Cybersecurity Trends Every Business Should Know in 2025',
	    excerpt:
	      'The evolving threat landscape and essential security measures every organization needs to implement this year.',
	    date: '2025-01-05',
	    readTime: '7 min read',
	    category: 'Security',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'data-analytics-roi',
	    title: 'Maximizing ROI with Advanced Data Analytics',
	    excerpt:
	      'How to build a data-driven culture and implement analytics solutions that deliver measurable business impact.',
	    date: '2025-01-03',
	    readTime: '9 min read',
	    category: 'Data & Analytics',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  // Keep existing September entries below for continuity
	  {
	    id: 'ai-cost-optimization-2025',
	    title: 'AI Cost Optimization in 2025: Ship Faster, Spend Less',
	    excerpt:
	      'Practical techniques to reduce LLM and vector costs without hurting outcomes.',
	    date: '2025-09-11',
	    readTime: '9 min read',
	    category: 'AI Engineering',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'enterprise-rag-2025-blueprint',
	    title: 'Enterprise RAG in 2025: A Practical Blueprint',
	    excerpt:
	      'Reference architecture, guardrails, and ops to deploy reliable enterprise RAG at scale.',
	    date: '2025-09-11',
	    readTime: '10 min read',
	    category: 'AI Engineering',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-sales-playbook-2025',
	    title: 'Startup Sales Playbook 2025: From First Meetings to Revenue',
	    excerpt:
	      'Cadences, scripts, and minimal tooling to land your first 100 customers.',
	    date: '2025-09-11',
	    readTime: '10 min read',
	    category: 'Growth',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-agents-in-enterprise-2025',
	    title: 'AI Agents in the Enterprise: Practical Playbooks for 2025',
	    excerpt:
	      'Architectures, guardrails, and KPIs to deploy reliable AI agents that move business metrics.',
	    date: '2025-09-11',
	    readTime: '11 min read',
	    category: 'AI & Automation',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-distribution-playbook-2025',
	    title: 'Startup Distribution in 2025: A Practical Playbook',
	    excerpt:
	      'The highest-leverage channels and measurement to get from 0 → 500 customers.',
	    date: '2025-09-11',
	    readTime: '9 min read',
	    category: 'Growth',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-distribution-tactics-2025',
	    title: 'Startup Distribution Tactics 2025: Get to 500 Customers',
	    excerpt:
	      'Founder-led outbound, SEO content, partners, and measurement to scale revenue.',
	    date: '2025-09-11',
	    readTime: '8 min read',
	    category: 'Growth',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-governance-blueprint-2025',
	    title: 'AI Governance Blueprint 2025: Controls that Actually Work',
	    excerpt:
	      'Policy, process, and technical controls that reduce risk without blocking the business.',
	    date: '2025-09-11',
	    readTime: '10 min read',
	    category: 'Governance',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'genai-observability-checklist-2025',
	    title: 'GenAI Observability: The 2025 Checklist',
	    excerpt:
	      'Telemetry that matters across prompts, tools, retrieval, costs, and outcomes.',
	    date: '2025-09-11',
	    readTime: '7 min read',
	    category: 'MLOps',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'agentic-workflows-2025',
	    title: 'Agentic Workflows in 2025: Practical Patterns for Production',
	    excerpt:
	      'Guardrails, budgets, approvals, and observability to safely ship agentic systems.',
	    date: '2025-09-11',
	    readTime: '10 min read',
	    category: 'AI Engineering',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'data-engineering-modern-stack',
	    title: 'Modern Data Engineering Stack: 2025 Reference',
	    excerpt:
	      'An opinionated blueprint for reliable, affordable pipelines: ingestion to governance.',
	    date: '2025-09-11',
	    readTime: '8 min read',
	    category: 'Data Engineering',
	    featured: false,
	    image: '/api/placeholder/600/400',
	  },
	  // Additional existing featured content preserved from main
	  {
	    id: 'ai-automation-enterprise-2025',
	    title: 'AI Automation in Enterprise: The Complete 2025 Implementation Guide',
	    excerpt:
	      'Everything you need to know about implementing AI automation in your enterprise, from planning to optimization.',
	    date: '2025-01-27',
	    readTime: '15 min read',
	    category: 'AI & Technology',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-funding-ai-era',
	    title: 'Startup Funding in the AI Era: A Complete Guide for 2025',
	    excerpt:
	      'Navigate the new funding landscape and position your AI startup for success with this comprehensive guide.',
	    date: '2025-01-27',
	    readTime: '12 min read',
	    category: 'Startup Strategy',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  // New content added
	  {
	    id: 'ai-productivity-automation-2025',
	    title: 'AI Productivity Automation 2025: The Complete Guide',
	    excerpt:
	      'Transform your workflow with cutting-edge AI automation tools and strategies. Boost productivity by 300% while reducing manual work by 80%.',
	    date: '2025-01-28',
	    readTime: '12 min read',
	    category: 'AI & Productivity',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'cloud-native-architecture-2025',
	    title: 'Cloud-Native Architecture 2025: The Complete Blueprint',
	    excerpt:
	      'Build scalable, resilient, and cost-effective applications with modern cloud-native patterns and practices.',
	    date: '2025-01-28',
	    readTime: '15 min read',
	    category: 'Cloud Architecture',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-funding-ai-era-2025',
	    title: 'Startup Funding in the AI Era: A Complete Guide for 2025',
	    excerpt:
	      'Navigate the new funding landscape and position your AI startup for success. Learn from successful AI companies and discover the strategies that work in 2025.',
	    date: '2025-01-28',
	    readTime: '14 min read',
	    category: 'Startup Strategy',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'ai-governance-in-practice-2025',
	    title: 'AI Governance in Practice 2025: Controls That Actually Work',
	    excerpt:
	      'Pragmatic policies, processes, and technical controls that reduce risk without blocking delivery.',
	    date: '2025-09-11',
	    readTime: '9 min read',
	    category: 'Governance',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'edge-ai-privacy-by-design-2025',
	    title: 'Edge AI 2025: Privacy by Design, Real-Time Customer Experiences',
	    excerpt:
	      'On-device intelligence to reduce latency, cut cloud costs, and protect PII by default.',
	    date: '2025-09-11',
	    readTime: '8 min read',
	    category: 'Edge & IoT',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  }
	];

	const featuredPosts = blogPosts.filter(post => post.featured);
	const regularPosts = blogPosts.filter(post => !post.featured);

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
							Insights & Innovation
						</h1>
						<p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto'>
							Stay ahead with the latest trends in AI, technology, and business
							strategy. Expert insights from the Zion Tech Group team.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<a
								href='#newsletter'
								className='bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg'
							>
								Subscribe to Updates
							</a>
							<Link
								href='/contact'
								className='border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-lg'
							>
								Work With Us
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Posts */}
			<section className='py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							Featured Articles
						</h2>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							Our most popular and impactful content
						</p>
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
						{featuredPosts.map(post => (
							<FeaturedPostCard key={post.id} post={post} />
						))}
					</div>
				</div>
			</section>

			{/* All Posts */}
			<section className='py-16 bg-gray-50'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							All Articles
						</h2>
						<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
							Explore our complete library of insights and guides
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{regularPosts.map(post => (
							<PostCard key={post.id} post={post} />
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section id='newsletter' className='py-16'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							Stay Updated with Our Latest Insights
						</h2>
						<p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
							Get weekly updates on AI trends, technology insights, and business
							strategies. Join 10,000+ professionals who trust our content.
						</p>
						<div className='max-w-md mx-auto flex gap-4'>
							<input
								type='email'
								placeholder='Enter your email'
								className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
							/>
							<button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
								Subscribe
							</button>
						</div>
						<p className='text-sm text-gray-500 mt-4'>
							No spam. Unsubscribe anytime. We respect your privacy.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

import type { FC } from 'react';

const FeaturedPostCard: FC<{ post: any }> = ({ post }) => {
	return (
		<Link href={`/blog/${post.id}`} className='group'>
			<article className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
				<div className='aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center'>
					<div className='text-6xl'>📊</div>
				</div>
				<div className='p-6'>
					<div className='flex items-center gap-2 mb-3'>
						<span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>
							{post.category}
						</span>
						<span className='text-gray-500 text-sm'>{post.readTime}</span>
					</div>
					<h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
						{post.title}
					</h3>
					<p className='text-gray-600 mb-4'>{post.excerpt}</p>
					<div className='flex items-center justify-between'>
						<span className='text-sm text-gray-500'>{post.date}</span>
						<span className='text-blue-600 font-medium group-hover:underline'>
							Read More →
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
};

const PostCard: FC<{ post: any }> = ({ post }) => {
	return (
		<Link href={`/blog/${post.id}`} className='group'>
			<article className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
				<div className='aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
					<div className='text-4xl'>💡</div>
				</div>
				<div className='p-6'>
					<div className='flex items-center gap-2 mb-3'>
						<span className='bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full'>
							{post.category}
						</span>
						<span className='text-gray-500 text-xs'>{post.readTime}</span>
					</div>
					<h3 className='text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors'>
						{post.title}
					</h3>
					<p className='text-gray-600 text-sm mb-3'>{post.excerpt}</p>
					<div className='flex items-center justify-between'>
						<span className='text-xs text-gray-500'>{post.date}</span>
						<span className='text-blue-600 text-sm font-medium group-hover:underline'>
							Read →
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}
