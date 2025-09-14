import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIEmotionalIntelligenceTraining() {
	return (
		<ServiceLanding
			title="AI Emotional Intelligence Training"
			slug="ai-emotional-intelligence-training"
			description="Dynamic coaching that improves communicationempathyand leadership. AI evaluates toneclarityand sentiment to deliver tailored practice scenarios and feedback."
			subtitle="Upgrade team EQ with measurable gains in manager effectiveness and CSAT."
			pricePerMonthUSD={799}
			implementationWeeks="Implementation: 1–2 weeks"
			roiNote="Average ROI 2–5x within 60–90 days"
			features={[
				"Role-play simulators for negotiationfeedbackand escalation",
				"Real-time tone and sentiment coaching",
				"Personalized learning paths and certifications",
				"Team dashboards and skill gap analysis",
				"Integrations: LMSlack/TeamsGmail/Outlook",
				"Privacy-first voice and text processing"
			]}
			industries={["Customer Support"Sales"HR & L&D"Leadership"]}
			canonical="https://ziontechgroup.com/ai-emotional-intelligence-training"
		/>
	);
}