<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',
=======
import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AICustomerSuccessPlatform() {_return (
		<ServiceLanding
<<<<<<< HEAD
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
<<<<<<< HEAD
			industries={["SaaS", "Fintech", "Media", "E‑commerce"]}
			canonical="https: //ziontechgroup.com/ai-customer-success-platform"
=======
			industries={[&quot;SaaS&quot;, &quot;Fintech&quot;, &quot;Media&quot;, &quot;E‑commerce&quot;]}
			canonical=&quot;https://ziontechgroup.com/ai-customer-success-platform&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		/>
	)
}