import Link from 'next/link';

export const metadata = {
	title: 'AI Infrastructure Blueprint for 2025',
	description:
		'Practical guide to design a cost-efficient, scalable AI stack: data, training, inference, and observability.',
};

export default function AIInfrastructureBlueprintPage() {
	return (
		<div className='min-h-screen bg-white'>
			<section className='py-12 border-b border-gray-200 bg-gray-50'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl md:text-4xl font-bold text-gray-900'>AI Infrastructure Blueprint for 2025</h1>
					<p className='mt-3 text-gray-600'>Designing a pragmatic, ROI-driven AI platform that scales with your roadmap.</p>
				</div>
			</section>
			<section className='py-10'>
				<div className='prose prose-blue max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<p>
						High-performing AI teams standardize their platform across four pillars: data pipelines, model
						training, low-latency inference, and continuous evaluation/observability. This blueprint covers
						decisions that reduce costs by 25–40% while improving delivery speed.
					</p>
					<h2>Data Foundations</h2>
					<ul>
						<li>Adopt lakehouse storage with table formats (e.g., Iceberg/Delta) for reliability.</li>
						<li>Use event-driven ingestion and schema registries for governed evolution.</li>
						<li>Prefer columnar storage and vector indexes for hybrid retrieval.</li>
					</ul>
					<h2>Training and Fine-tuning</h2>
					<ul>
						<li>Right-size compute with spot fleets and mixed precision; checkpoint frequently.</li>
						<li>Favor LoRA/QLoRA and adapters for cost-effective iteration on domain tasks.</li>
						<li>Track experiments and datasets; enforce lineage and reproducibility.</li>
					</ul>
					<h2>Inference and Serving</h2>
					<ul>
						<li>Multi-model routing (vendor + open) with budget and latency guardrails.</li>
						<li>Autoscale with concurrency-aware schedulers; cache aggressively at the edge.</li>
						<li>Add safety layers: PII scrubbing, policy checks, and output verification.</li>
					</ul>
					<h2>Evaluation and Observability</h2>
					<ul>
						<li>Collect structured feedback and outcomes; build task-specific eval suites.</li>
						<li>Monitor cost per task, latency percentiles, and regression alerts.</li>
						<li>Close the loop with failure analysis and dataset updates.</li>
					</ul>
					<p>
						Ready to level up your stack?{' '}
						<Link href='/contact' className='text-blue-600 font-semibold'>Talk to our team</Link> about a
						blueprint tailored to your needs.
					</p>
				</div>
			</section>
		</div>
	);
}

