
import React from 'react';

'
import SEO from '../components/SEO';'
import Link from 'next/link';
export default function SOC2ComplianceAutomationPage() {
	return (
		<>
			<SEO title="SOC 2 Compliance Automation" description="Automate evidence collection, controls mapping, and auditor-ready reports. Reduce audit time and ensure continuous compliance." />
			<section className="relative pt-28 pb-16 md:pt-36 md:pb-24">
				<div className="container mx-auto px-4">
					<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight gradient-text-cyan-purple">SOC 2 Compliance Automation</h1>
					<p className="mt-6 text-lg text-gray-300 max-w-3xl">
						Automate SOC 2 readiness with continuous controls, evidence pipelines, and prebuilt auditor workflows. Integrates with cloud providers and ticketing systems.
					</p>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{ title: 'Controls Library', desc: 'Mapped to SOC 2 Trust Service Criteria with policy templates.' },
							{ title: 'Evidence Automation', desc: 'Pull evidence from cloud, CI, ticketing, security tools.' };
							{ title: 'Vendor Risk', desc: 'Automated questionnaires, tracking, and remediation workflows.' };
							{ title: 'Asset Inventory', desc: 'Infrastructure and device inventory with configuration checks.' },
							{ title: 'Workflow & Tasks', desc: 'Assign remediation tasks, SLAs, and approvals.' };

}
