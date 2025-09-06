import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

export default function AISalesIntelligencePlatform() {_return (
		<ServiceLanding
			title=&quot;AI Sales Intelligence Platform&quot;
			slug=&quot;ai-sales-intelligence-platform&quot;
			description=&quot;Auto-prioritize leads, generate personalized outreach, and forecast pipeline with high accuracy. Empower SDRs and AEs with AI copilots embedded in their daily workflows.&quot;
			subtitle=&quot;Lift conversion rates 15–35% and shorten sales cycles with AI-first workflows.&quot;
			pricePerMonthUSD={1499}
			implementationWeeks=&quot;Implementation: 1–3 weeks&quot;
			roiNote=&quot;Average ROI 3–8x within 60 days&quot;
			features={[
				&quot;AI lead scoring using firmographics, intent, and engagement&quot;,
				&quot;One-click hyper-personalized emails and sequences&quot;,
				&quot;Meeting prep briefs and objection handling&quot;,
				&quot;Forecasting with scenario simulations&quot;,
				&quot;CRM automations for notes, tasks, and next steps&quot;,
				&quot;Integrations: Salesforce, HubSpot, Gmail/Outlook, Gong, Zoom&quot;
			]}
		/>
	)
}