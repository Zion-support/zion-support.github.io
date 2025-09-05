import React from 'react',
import ServiceLanding from '../components/sections/ServiceLanding',
export default function FintechSolutions() {
	return (
		<ServiceLanding
			title=&quot;Fintech AI Solutions&quot;
			slug=&quot;fintech-solutions&quot;
			description=&quot;AI solutions for fraud detection, risk scoring, KYC/AML automation, and real-time decisioning. Improve compliance and customer experience across the lifecycle.&quot;
			subtitle=&quot;Smarter finance with lower risk and faster time to yes.&quot;
			pricePerMonthUSD={2799}
			implementationWeeks=&quot;Implementation: 4–8 weeks&quot;
			roiNote=&quot;Reduce fraud loss 15–35% and manual review by 30–50%&quot;
			features={[
				&quot;Transaction anomaly detection and entity resolution&quot;,
				&quot;Credit risk models with explainability&quot;,
				&quot;KYC/AML case automation and SAR drafts&quot;,
				&quot;Collections optimization and next-best-action&quot;,
				&quot;Realtime rules with feature store integration&quot;,
				&quot;Integrations: Core banking, KYC, payments, CRMs&quot;
			]}
<<<<<<< HEAD
			industries={["Fintech", "Banking", "Lending", "Payments"]}
			canonical="https: //ziontechgroup.com/fintech-solutions"
=======
			industries={[&quot;Fintech&quot;, &quot;Banking&quot;, &quot;Lending&quot;, &quot;Payments&quot;]}
			canonical=&quot;https://ziontechgroup.com/fintech-solutions&quot;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
		/>
	)
}