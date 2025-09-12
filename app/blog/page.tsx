import Link from 'next/link';

const posts = [
  {
    title: 'AI Copilots for Engineering Teams',
    description:
      'How to deploy secure, repo-aware copilots that speed reviews and cut toil.',
    href: '/blog/ai-copilots-for-engineering',
    date: '2025-09-11',
    tags: ['AI', 'DevEx', 'Productivity'],
  },
  {
    title: 'Practical AI Agents for Small Businesses',
    description:
      'How SMBs can deploy lightweight AI agents to automate support, sales outreach, and back-office tasks safely.',
    href: '/blog/ai-agents-for-smbs',
    date: '2025-09-11',
    tags: ['AI', 'Automation', 'Agents'],
  },
  {
    title: 'Cloud Cost Optimization in 2025: Proven Playbook',
    description:
      'A tactical guide to cut 20–40% of cloud spend without sacrificing performance or velocity.',
    href: '/blog/cloud-cost-optimization-2025',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'DevOps'],
  },
  {
    title: 'AI-Powered Customer Support Playbooks',
    description:
      'Production-ready patterns for self-serve assistants, case triage, agent copilots, and QA.',
    href: '/blog/ai-customer-support-playbooks',
    date: '2025-09-11',
    tags: ['AI', 'CX', 'Automation'],
  },
  {
    title: 'AI Infrastructure Cost Controls That Actually Work',
    description:
      'A pragmatic framework to reduce inference costs while maintaining performance and velocity.',
    href: '/blog/ai-infra-cost-controls',
    date: '2025-09-11',
    tags: ['Cloud', 'FinOps', 'AI'],
  },
  {
    title: 'Enterprise RAG Blueprint: From Pilot to Production',
    description:
      'Step-by-step architecture and rollout plan for RAG in regulated, multi-tenant environments.',
    href: '/blog/enterprise-rag-blueprint',
    date: '2025-09-11',
    tags: ['RAG', 'LLM', 'Architecture'],
  },
  {
    title: 'AI Risk & Compliance 2025: Practical Guardrails That Scale',
    description:
      "Deploy AI safely with practical governance, auditability, and controls that don't block delivery.",
    href: '/blog/ai-risk-and-compliance-2025',
    date: '2025-09-12',
    tags: ['AI', 'Governance', 'Security'],
  },
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
