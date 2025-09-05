import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ZeroTrustSecurityPlatformPage() {_return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>
				<meta name="description" content="Design and enforce zero trust architecture: identity-first access, _microsegmentation, _continuous verification, _and least privilege." />
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />
			</Head>
			<ServiceLanding
				title="Zero Trust Security Platform"
				description="Accelerate zero trust adoption with reference architectures, _policy-as-code, _identity-aware proxies, _microsegmentation, _and continuous verification across users, _devices, _and services."
				subtitle="Trust nothing, _verify everything"
				pricePerMonthUSD={3499}
				implementationWeeks="4-8 weeks"
				roiNote="Reduce breach impact and lateral movement risk; meet compliance faster"
				features={_[
					"Policy-as-code and enforcement", _"Identity-aware proxies and device posture", _"Microsegmentation and service mesh integration", _"Continuous authentication and authorization", _"Visibility and audit for compliance", _"Rollout playbooks and migration kits"
				]}
				industries={_["Enterprise IT", _"Financial Services", _"Healthcare", _"SaaS", _"Public Sector"]}
				canonical="https://ziontechgroup.com/zero-trust-security-platform"
			/>
		</>
	);
}