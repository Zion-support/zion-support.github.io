import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIAutonomousResearchAssistant() {
	return (
		<ServiceLanding
			title=&quot;AI Autonomous Research Assistant&quot;
			slug=&quot;ai-autonomous-research-assistant&quot;
			description=&quot;An AI agent that continuously tracks competitors, markets, regulations, and technologies. It synthesizes findings, drafts briefs, and recommends actions—so your team stays ahead.&quot;
			subtitle=&quot;Always-on competitive and market intelligence at analyst-level quality.&quot;
			pricePerMonthUSD={1299}
			implementationWeeks=&quot;Implementation: 1–2 weeks&quot;
			roiNote=&quot;Average ROI 3–6x within 60 days&quot;
			features={[
				&quot;Automated web and document monitoring with source citations&quot;,
				&quot;Daily/weekly executive briefs and dashboards&quot;,
				&quot;Regulatory watchlists and impact analysis&quot;,
				&quot;RFP/RFI opportunity discovery and alerts&quot;,
				&quot;Export to Slides/Docs/Notion&quot;,
				&quot;Compliance-friendly data handling, audit logs&quot;
			]}
			industries={[&quot;Consulting&quot;, &quot;Healthcare&quot;, &quot;Finance&quot;, &quot;Public Sector&quot;]}
			canonical=&quot;https://ziontechgroup.com/ai-autonomous-research-assistant&quot;
		/>
	);
}