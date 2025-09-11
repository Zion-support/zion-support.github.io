import Link from 'next/link';

type BlogPostMeta = {
	title: string;
	slug: string;
	description: string;
	date: string;
};

const posts: BlogPostMeta[] = [
	{
		title: 'AI-Powered Customer Support: From FAQ Bots to Full Resolution',
		slug: 'ai-powered-customer-support',
		description:
			'Practical roadmap to evolve from basic chatbots to autonomous, KPI-driven support experiences.',
		date: '2025-09-11',
	},
	{
		title: 'Micro SaaS in 60 Days: A Lean Delivery Blueprint',
		slug: 'micro-saas-in-60-days',
		description:
			'How to scope, build, launch, and monetize a profitable niche product with minimal risk.',
		date: '2025-09-11',
	},
	{
		title: 'Cloud Cost Optimization That Doesn’t Hurt Velocity',
		slug: 'cloud-cost-optimization-without-slowdowns',
		description:
			'Concrete steps to cut 25–45% of cloud spend while keeping teams shipping fast.',
		date: '2025-09-11',
	},
	{
		title: 'AI Infrastructure Blueprint for 2025',
		slug: 'ai-infrastructure-blueprint',
		description:
			'Build a scalable, cost-efficient AI stack across data, training, and inference.',
		date: '2025-09-11',
	},
	{
		title: 'Go-To-Market Playbook for Micro SaaS',
		slug: 'go-to-market-for-micro-saas',
		description:
			'Positioning, channels, pricing, and activation to reach first 200 customers.',
		date: '2025-09-11',
	},
];

export default function BlogIndexPage() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-16 bg-gray-50 border-b border-gray-200'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Blog</h1>
					<p className='text-gray-600 max-w-2xl'>
						Insights on AI, automation, cloud, and building micro SaaS products.
					</p>
				</div>
			</section>
			<section className='py-12'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8'>
					{posts.map((post) => (
						<Link key={post.slug} href={`/blog/${post.slug}`} className='group'>
							<article className='bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col'>
								<time className='text-sm text-gray-500'>{new Date(post.date).toLocaleDateString()}</time>
								<h2 className='mt-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors'>
									{post.title}
								</h2>
								<p className='mt-2 text-gray-600 flex-1'>{post.description}</p>
								<span className='mt-4 text-blue-600 font-medium'>Read more →</span>
							</article>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}

