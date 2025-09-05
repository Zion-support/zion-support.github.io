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
		/>
	);
}