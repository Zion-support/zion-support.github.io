import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';

export default function AISalesIntelligencePlatform() {_return (
		<ServiceLanding
			title="AI Sales Intelligence Platform"
			slug="ai-sales-intelligence-platform"
			description="Auto-prioritize leads, _generate personalized outreach, _and forecast pipeline with high accuracy. Empower SDRs and AEs with AI copilots embedded in their daily workflows."
			subtitle="Lift conversion rates 15–35% and shorten sales cycles with AI-first workflows."
			pricePerMonthUSD={1499}
			implementationWeeks="Implementation: 1–3 weeks"
			roiNote="Average ROI 3–8x within 60 days"
			features={_[
				"AI lead scoring using firmographics, _intent, _and engagement", _"One-click hyper-personalized emails and sequences", _"Meeting prep briefs and objection handling", _"Forecasting with scenario simulations", _"CRM automations for notes, _tasks, _and next steps", _"Integrations: Salesforce, _HubSpot, _Gmail/Outlook, _Gong, _Zoom"
			]}
			industries={_["B2B SaaS", _"Professional Services", _"Manufacturing"]}
			canonical="https://ziontechgroup.com/ai-sales-intelligence-platform"
		/>
	);
}