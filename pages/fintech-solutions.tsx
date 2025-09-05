<<<<<<< HEAD
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
=======
import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function FintechSolutions() {_return (
		<ServiceLanding
			title="Fintech AI Solutions"
			slug="fintech-solutions"
			description="AI solutions for fraud detection, _risk scoring, _KYC/AML automation, _and real-time decisioning. Improve compliance and customer experience across the lifecycle."
			subtitle="Smarter finance with lower risk and faster time to yes."
			pricePerMonthUSD={2799}
			implementationWeeks="Implementation: 4–8 weeks"
			roiNote="Reduce fraud loss 15–35% and manual review by 30–50%"
			features={_[
				"Transaction anomaly detection and entity resolution", _"Credit risk models with explainability", _"KYC/AML case automation and SAR drafts", _"Collections optimization and next-best-action", _"Realtime rules with feature store integration", _"Integrations: Core banking, _KYC, _payments, _CRMs"
			]}
			industries={_["Fintech", _"Banking", _"Lending", _"Payments"]}
			canonical="https://ziontechgroup.com/fintech-solutions"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		/>
	)
}