import React from 'react';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function HealthcareAISolutions() {_return (
		<ServiceLanding
			title="Healthcare AI Solutions"
			slug="healthcare-ai-solutions"
			description="Deploy AI for diagnostics assistance, _care management, _operational optimization, _and compliance workflows. Improve outcomes while protecting patient privacy."
			subtitle="Clinically aware AI that augments providers and reduces administrative burden."
			pricePerMonthUSD={2999}
			implementationWeeks="Implementation: 6–12 weeks"
			roiNote="Reduce admin time 20–40% and improve throughput"
			features={_[
				"Clinical note summarization and coding (CPT/ICD)", _"Diagnostic support with literature grounding", _"Prior auth automation and appeals drafts", _"Capacity forecasting and staffing optimization", _"HIPAA-compliant data pipelines and audit", _"EHR integrations: HL7/FHIR, _Epic, _Cerner"
			]}
			industries={_["Hospitals", _"Clinics", _"Payers", _"HealthTech"]}
			canonical="https://ziontechgroup.com/healthcare-ai-solutions"
		/>
	);
}