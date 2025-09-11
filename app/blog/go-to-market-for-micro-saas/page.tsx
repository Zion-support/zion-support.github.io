import Link from 'next/link';

export const metadata = {
	title: 'Go-To-Market Playbook for Micro SaaS',
	description:
		'A step-by-step GTM plan to find positioning, channels, pricing, and validate traction in 8 weeks.',
};

export default function MicroSaaSGTMPage() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-12 border-b border-gray-200 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>Go-To-Market Playbook for Micro SaaS</h1>
					<p className='mt-3 text-gray-600'>A lean, repeatable motion to get first 50–200 paying users.</p>
				</div>
			</section>
			<section className='py-10'>
				<div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<ol>
						<li>
							<strong>Positioning</strong>: Define the painful job-to-be-done and narrow the ICP until your
							message feels obvious.
						</li>
						<li>
							<strong>Offer</strong>: Package 1–2 killer outcomes, set outcome-based pricing, and add a
							7-day trial or pilot.
						</li>
						<li>
							<strong>Channels</strong>: Focus on 1 community, 1 partnership, and 1 outbound motion. Avoid
							sprawl.
						</li>
						<li>
							<strong>Conversion</strong>: Ship a demo video, a fast landing page, and calendar link. Reduce
							friction everywhere.
						</li>
						<li>
							<strong>Activation</strong>: In-app checklist and concierge onboarding. Time-to-value under 15
							minutes.
						</li>
						<li>
							<strong>Retention</strong>: Weekly product moments, lifecycle emails, and usage-based nudges that
							lead to habit formation.
						</li>
					</ol>
					<p>
						Want help executing this plan?{' '}
						<Link href='/services/micro-saas' className='text-blue-600 font-semibold'>Work with us on Micro SaaS</Link>.
					</p>
				</div>
			</section>
		</div>
	);
}

