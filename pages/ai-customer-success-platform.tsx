import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export default function AICustomerSuccessPlatform() {
	return (
		<ServiceLanding
			title=&quot;AI Customer Success Platform&quot;
			slug=&quot;ai-customer-success-platform&quot;
			description=&quot;Predict churn, orchestrate proactive outreach, and increase lifetime value. Our AI monitors accounts across product usage, tickets, billing, and NPS to trigger playbooks that prevent churn and expand revenue.&quot;
			subtitle=&quot;Reduce churn by 20–45% and grow NRR with automated, data-driven customer health.&quot;
			pricePerMonthUSD={1999}
			implementationWeeks=&quot;Implementation: 2–4 weeks&quot;
			roiNote=&quot;Average ROI 4–10x within 90 days&quot;
			features={[
				&quot;Unified customer health scoring (usage, support, sentiment, billing)&quot;,
				&quot;Churn risk prediction with explainable insights&quot;,
				&quot;Playbook automation (email, CS tasks, in-app guides, offers)&quot;,
				&quot;Expansion signals for upsell/cross-sell&quot;,
				&quot;Executive QBR reports and cohort analytics&quot;,
				&quot;Integrations: HubSpot, Salesforce, Zendesk, Intercom, Segment&quot;
			]}
			industries={[&quot;SaaS&quot;, &quot;Fintech&quot;, &quot;Media&quot;, &quot;E‑commerce&quot;]}
			canonical=&quot;https://ziontechgroup.com/ai-customer-success-platform&quot;
		/>
	);
}