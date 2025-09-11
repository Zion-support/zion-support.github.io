import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
	const blogPosts = [
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
	  // New posts (2025-09)
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
	  // New articles added
	  {
	    id: 'ai-productivity-automation-2025',
	    title: 'AI Productivity Automation: The 2025 Complete Guide',
	    excerpt:
	      'Discover how AI automation is revolutionizing workplace productivity in 2025 with practical strategies and implementation frameworks.',
	    date: '2025-01-28',
	    readTime: '12 min read',
	    category: 'AI & Productivity',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'cloud-native-architecture-2025',
	    title: 'Cloud-Native Architecture in 2025: Building for Scale and Resilience',
	    excerpt:
	      'Explore the latest trends and best practices in cloud-native architecture for scalable, resilient, and cost-effective systems.',
	    date: '2025-01-28',
	    readTime: '14 min read',
	    category: 'Cloud & DevOps',
	    featured: true,
	    image: '/api/placeholder/600/400',
	  },
	  {
	    id: 'startup-growth-hacking-2025',
	    title: 'Startup Growth Hacking in 2025: Data-Driven Strategies That Actually Work',
	    excerpt:
	      'Discover the latest growth hacking strategies driving explosive growth for startups with data-driven techniques and proven frameworks.',
	    date: '2025-01-28',
	    readTime: '11 min read',
	    category: 'Growth & Marketing',
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
