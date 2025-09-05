import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';

export default function AiHrAnalyticsPlatform() {_return (
		<ServiceLanding
			title="AI HR Analytics Platform"
			description="Understand attrition, _performance, _and workforce planning with AI. Combine HRIS, _ATS, _and engagement data for proactive people decisions."
			subtitle="People insights that drive outcomes"
			pricePerMonthUSD={199}
			implementationWeeks="1-2 weeks"
			roiNote="HR teams report measurable gains in retention and hiring yield"
			features={_[
				"Attrition risk scoring and alerting", _"Diversity and inclusion analytics", _"Recruiting funnel and hiring yield insights", _"Performance signal detection and calibration", _"Headcount planning and skills inventory", _"Integrations: Workday, _BambooHR, _Greenhouse, _Lever", _"Compensation benchmarking and ranges", _"Engagement drivers and action suggestions"
			]}
			industries={_["SaaS", _"Retail", _"Healthcare", _"Manufacturing"]}
			canonical="https://ziontechgroup.com/ai-hr-analytics-platform"
		/>
	);
}