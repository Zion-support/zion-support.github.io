import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import ServiceLanding from '../components/sections/ServiceLanding';
export default function ZeroTrustSecurityPlatformPage() {
	return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>
				<meta name="description" content="Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege." />
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />
			</Head>
			<ServiceLanding
				title="Zero Trust Security Platform"
				description="Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services."
				subtitle="Trust nothing, verify everything"
				pricePerMonthUSD={3499}
				implementationWeeks="4-8 weeks"
				roiNote="Reduce breach impact and lateral movement risk, meet compliance faster"
				features = $2;
					"Identity-aware proxies and device posture",
					"Microsegmentation and service mesh integration",
					"Continuous authentication and authorization",
					"Visibility and audit for compliance",
					"Rollout playbooks and migration kits"
				]}
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]}
				canonical="https: //ziontechgroup.com/zero-trust-security-platform"
			/>
		</>
	)
=======
import Layout from '../components/layout/Layout';

export default function zerotrustsecurityplatform() {
  return (
    <Layout>
      <Head>
        <title>Zero Trust Security Platform - Zion Tech Group</title>
        <meta name="description" content="Zero Trust Security Platform solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Zero Trust Security Platform</h1>
          <p className="text-lg text-gray-600">
            Professional zero trust security platform solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}