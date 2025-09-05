import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function AIEmotionalIntelligenceTraining() {
	return (
		<ServiceLanding
			title=&quot;AI Emotional Intelligence Training&quot;
			slug=&quot;ai-emotional-intelligence-training&quot;
			description=&quot;Dynamic coaching that improves communication, empathy, and leadership. AI evaluates tone, clarity, and sentiment to deliver tailored practice scenarios and feedback.&quot;
			subtitle=&quot;Upgrade team EQ with measurable gains in manager effectiveness and CSAT.&quot;
			pricePerMonthUSD={799}
			implementationWeeks=&quot;Implementation: 1–2 weeks&quot;
			roiNote=&quot;Average ROI 2–5x within 60–90 days&quot;
			features={[
				&quot;Role-play simulators for negotiation, feedback, and escalation&quot;,
				&quot;Real-time tone and sentiment coaching&quot;,
				&quot;Personalized learning paths and certifications&quot;,
				&quot;Team dashboards and skill gap analysis&quot;,
				&quot;Integrations: LMS, Slack/Teams, Gmail/Outlook&quot;,
				&quot;Privacy-first voice and text processing&quot;
			]}
			industries={[&quot;Customer Support&quot;, &quot;Sales&quot;, &quot;HR & L&D&quot;, &quot;Leadership&quot;]}
			canonical=&quot;https://ziontechgroup.com/ai-emotional-intelligence-training&quot;
		/>
	);
}