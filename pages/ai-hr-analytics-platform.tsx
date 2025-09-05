import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export default function AiHrAnalyticsPlatform() {
	return (
		<ServiceLanding
			title=&quot;AI HR Analytics Platform&quot;
			description=&quot;Understand attrition, performance, and workforce planning with AI. Combine HRIS, ATS, and engagement data for proactive people decisions.&quot;
			subtitle=&quot;People insights that drive outcomes&quot;
			pricePerMonthUSD={199}
			implementationWeeks=&quot;1-2 weeks&quot;
			roiNote=&quot;HR teams report measurable gains in retention and hiring yield&quot;
			features={[
				&quot;Attrition risk scoring and alerting&quot;,
				&quot;Diversity and inclusion analytics&quot;,
				&quot;Recruiting funnel and hiring yield insights&quot;,
				&quot;Performance signal detection and calibration&quot;,
				&quot;Headcount planning and skills inventory&quot;,
				&quot;Integrations: Workday, BambooHR, Greenhouse, Lever&quot;,
				&quot;Compensation benchmarking and ranges&quot;,
				&quot;Engagement drivers and action suggestions&quot;
			]}
			industries={[&quot;SaaS&quot;, &quot;Retail&quot;, &quot;Healthcare&quot;, &quot;Manufacturing&quot;]}
			canonical=&quot;https://ziontechgroup.com/ai-hr-analytics-platform&quot;
		/>
	);
}