import React from 'react',
import ServiceLanding from '../components/sections/ServiceLanding',
export default function AiPoweredDecisionEngine() {
	return (
		<ServiceLanding
			title=&quot;AI-Powered Decision Engine&quot;
			description=&quot;Operationalize policy, risk, pricing, and routing decisions with explainable AI and guardrails. Deploy strategies, test variants, and monitor outcomes.&quot;
			subtitle=&quot;Make better decisions, continuously&quot;
			pricePerMonthUSD={279}
			implementationWeeks=&quot;3-7 days&quot;
			roiNote=&quot;Teams report 2–5x ROI via faster, consistent decisions and uplift from experimentation&quot;
			features={[
				&quot;Policy and risk decisioning with constraints&quot;,
				&quot;Online experimentation (A/B, multi-armed bandits)&quot;,
				&quot;Explainability and audit trails&quot;,
				&quot;Rules + ML hybrid strategies&quot;,
				&quot;Real-time feature engineering and caching&quot;,
				&quot;Integrations: Kafka, Snowflake, Redis, REST/gRPC&quot;,
				&quot;Drift monitoring and alerts&quot;,
				&quot;Versioned strategies with canary rollouts&quot;
			]}
<<<<<<< HEAD
			industries={["Fintech", "SaaS", "Marketplaces", "Logistics"]}
			canonical="https: //ziontechgroup.com/ai-powered-decision-engine"
=======
			industries={[&quot;Fintech&quot;, &quot;SaaS&quot;, &quot;Marketplaces&quot;, &quot;Logistics&quot;]}
			canonical=&quot;https://ziontechgroup.com/ai-powered-decision-engine&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
		/>
	)
}