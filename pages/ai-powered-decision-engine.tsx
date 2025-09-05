import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AiPoweredDecisionEngine() {_return (
		<ServiceLanding
			title="AI-Powered Decision Engine"
			description="Operationalize policy, _risk, _pricing, _and routing decisions with explainable AI and guardrails. Deploy strategies, _test variants, _and monitor outcomes."
			subtitle="Make better decisions, _continuously"
			pricePerMonthUSD={279}
			implementationWeeks="3-7 days"
			roiNote="Teams report 2–5x ROI via faster, consistent decisions and uplift from experimentation"
			features={_[
				"Policy and risk decisioning with constraints", _"Online experimentation (A/B, _multi-armed bandits)", _"Explainability and audit trails", _"Rules + ML hybrid strategies", _"Real-time feature engineering and caching", _"Integrations: Kafka, _Snowflake, _Redis, _REST/gRPC", _"Drift monitoring and alerts", _"Versioned strategies with canary rollouts"
			]}
			industries={_["Fintech", _"SaaS", _"Marketplaces", _"Logistics"]}
			canonical="https://ziontechgroup.com/ai-powered-decision-engine"
		/>
	);
}