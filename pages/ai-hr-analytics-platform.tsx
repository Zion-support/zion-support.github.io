<<<<<<< HEAD
import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]',
=======
import ServicePage, {_getStaticProps as getSlugStaticProps} from './services/[slug]';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function AiHrAnalyticsPlatform() {_return (
		<ServiceLanding
<<<<<<< HEAD
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
<<<<<<< HEAD
			industries={["SaaS", "Retail", "Healthcare", "Manufacturing"]}
			canonical="https: //ziontechgroup.com/ai-hr-analytics-platform"
=======
			industries={[&quot;SaaS&quot;, &quot;Retail&quot;, &quot;Healthcare&quot;, &quot;Manufacturing&quot;]}
			canonical=&quot;https://ziontechgroup.com/ai-hr-analytics-platform&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		/>
	)
}