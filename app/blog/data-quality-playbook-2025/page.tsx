import React from 'react';
import Link from 'next/link';

export const metadata = {
	title: 'Data Quality Playbook 2025: Trustworthy AI Starts with Better Data',
	description: 'A hands-on playbook for improving data quality: contracts, lineage, validation, drift detection, and remediation workflows to power reliable AI systems.',
};

export default function DataQualityPlaybook2025Page() {
	return (
		<div className="min-h-screen bg-white">
			<article className="max-w-3xl mx-auto px-4 py-16 prose prose-slate">
				<h1>Data Quality Playbook 2025: Trustworthy AI Starts with Better Data</h1>
				<p>
					Data quality is the foundation of reliable AI. This guide compiles practical methods for
					explicit data contracts, lineage and governance, validation at ingestion, and continuous
					drift detection across features and labels.
				</p>
				<h2>Data Contracts</h2>
				<ul>
					<li>Explicit schemas, ownership, SLOs, and change management</li>
					<li>Backward-compatible evolution and deprecation policies</li>
				</ul>
				<h2>Validation & Monitoring</h2>
				<ul>
					<li>Statistical checks: ranges, nulls, uniqueness, distribution shifts</li>
					<li>Feature store validation and canary pipelines</li>
					<li>Golden datasets and regression suites</li>
				</ul>
				<h2>Drift & Remediation</h2>
				<ul>
					<li>Detect covariate, label, concept drift with thresholds and alerts</li>
					<li>Automated rollback, re-index, or retraining flows</li>
					<li>Post-incident reviews tied to data lineage</li>
				</ul>
				<p>
					<Link href="/blog" className="no-underline">← Back to Blog</Link>
				</p>
			</article>
		</div>
	);
}

