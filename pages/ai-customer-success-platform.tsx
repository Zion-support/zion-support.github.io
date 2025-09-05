import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';

export default function AICustomerSuccessPlatform() {_return (
		<ServiceLanding
			title="AI Customer Success Platform"
			slug="ai-customer-success-platform"
			description="Predict churn, _orchestrate proactive outreach, _and increase lifetime value. Our AI monitors accounts across product usage, _tickets, _billing, _and NPS to trigger playbooks that prevent churn and expand revenue."
			subtitle="Reduce churn by 20–45% and grow NRR with automated, _data-driven customer health."
			pricePerMonthUSD={1999}
			implementationWeeks="Implementation: 2–4 weeks"
			roiNote="Average ROI 4–10x within 90 days"
			features={_[
				"Unified customer health scoring (usage, _support, _sentiment, _billing)", _"Churn risk prediction with explainable insights", _"Playbook automation (email, _CS tasks, _in-app guides, _offers)", _"Expansion signals for upsell/cross-sell", _"Executive QBR reports and cohort analytics", _"Integrations: HubSpot, _Salesforce, _Zendesk, _Intercom, _Segment"
			]}
			industries={_["SaaS", _"Fintech", _"Media", _"E‑commerce"]}
			canonical="https://ziontechgroup.com/ai-customer-success-platform"
		/>
	);
}