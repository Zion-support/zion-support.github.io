import React from 'react';
import Link from 'next/link';

export default function DataEngineeringModernStackPage() {
	return (
		<div className='min-h-screen bg-white'>
			<article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<header className='mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 mb-2'>Modern Data Engineering Stack: 2025 Reference</h1>
					<p className='text-gray-600'>Published on 2025-09-11 · 8 min read · Category: Data Engineering</p>
				</header>
				<section className='prose prose-lg max-w-none'>
					<p>
						An opinionated blueprint for building reliable, affordable pipelines: ingestion, orchestration,
						storage, transformation, quality, and governance with clear SLAs.
					</p>
					<h2>Baseline Choices</h2>
					<ul>
						<li>Ingestion: Airbyte or connectors + CDC</li>
						<li>Orchestration: Dagster or orchestrated dbt runs</li>
						<li>Warehouse/Lake: BigQuery, Snowflake, or DuckDB + object storage</li>
						<li>Transform: dbt with tests, contracts, and CI</li>
						<li>Quality: Great Expectations or Soda</li>
						<li>Lineage/Observability: OpenMetadata + metrics</li>
					</ul>
					<h2>Practical Tips</h2>
					<ol>
						<li>Bias to SQL-first; keep Python UDFs isolated</li>
						<li>Track cost per model and per team</li>
						<li>Version data contracts; fail fast on schema drift</li>
						<li>Automate freshness and backfills</li>
					</ol>
				</section>
				<footer className='mt-10'>
					<Link href='/blog' className='text-blue-600 font-semibold hover:underline'>← Back to Blog</Link>
				</footer>
			</article>
		</div>
	);
}