import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

export default function ZeroTrustSecurityPlatformPage() {
	return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>
				<meta name=&quot;description&quot; content=&quot;Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege.&quot; />
				<link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/zero-trust-security-platform&quot; />
			</Head>
			<ServiceLanding
				title=&quot;Zero Trust Security Platform&quot;
				description=&quot;Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.&quot;
				subtitle=&quot;Trust nothing, verify everything&quot;
				pricePerMonthUSD={3499}
				implementationWeeks=&quot;4-8 weeks&quot;
				roiNote=&quot;Reduce breach impact and lateral movement risk; meet compliance faster&quot;
				features={[
					&quot;Policy-as-code and enforcement&quot;,
					&quot;Identity-aware proxies and device posture&quot;,
					&quot;Microsegmentation and service mesh integration&quot;,
					&quot;Continuous authentication and authorization&quot;,
					&quot;Visibility and audit for compliance&quot;,
					&quot;Rollout playbooks and migration kits&quot;
				]}
				industries={[&quot;Enterprise IT&quot;, &quot;Financial Services&quot;, &quot;Healthcare&quot;, &quot;SaaS&quot;, &quot;Public Sector&quot;]}
				canonical=&quot;https://ziontechgroup.com/zero-trust-security-platform&quot;
			/>
		</>
	);
}