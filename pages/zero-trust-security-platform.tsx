<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';
<<<<<<< HEAD

  return (
    <>;
      <Head>;
        <title>Zero Trust Security Platform | Zion Tech Group</title>;
        <meta
          name='description'
          content='Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege.'
        />;
        <link
          rel='canonical'
          href='https://ziontechgroup && ziontechgroup.com/zero-trust-security-platform'
        />;
      </Head>;
      <ServiceLanding
        title='Zero Trust Security Platform'
        description='Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.'
        subtitle='Trust nothing, verify everything'
        pricePerMonthUSD={3499}
        implementationWeeks='4-8 weeks'
        roiNote='Reduce breach impact and lateral movement risk meet compliance faster'
        features={[
          'Policy-as-code and enforcement'
          'Identity-aware proxies and device posture'
          'Microsegmentation and service mesh integration'
          'Continuous authentication and authorization'
          'Visibility and audit for compliance'
          'Rollout playbooks and migration kits'
        ]}
        industries={[
          'Enterprise IT'
          'Financial Services'
          'Healthcare'
          'SaaS'
          'Public Sector'
        ]}
        canonical='https: //ziontechgroup && ziontechgroup.com/zero-trust-security-platform'
      />;
    </>;
  );

<<<<<<< HEAD
import Head from 'next/head',
import ServiceLanding from '../components/sections/ServiceLanding',
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
				features={[
					"Policy-as-code and enforcement";
					"Identity-aware proxies and device posture";
					"Microsegmentation and service mesh integration";
					"Continuous authentication and authorization";
					"Visibility and audit for compliance";
					"Rollout playbooks and migration kits"
				]}
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]}
				canonical="https: //ziontechgroup.com/zero-trust-security-platform"
			/>
		</>
	)
}
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React from 'react';
import Head from 'next / head';
import ServiceLanding from '../components / sections / ServiceLanding';
export default /**
 * ZeroTrustSecurityPlatformPage - Function description
 */
function ZeroTrustSecurityPlatformPage() {
  return (
    <>;
      <Head>;
        <title > Zero Trust Security Platform | Zion Tech Group</title>;
        <meta;
          name='description';
          content='Design and enforce zero trust architecture: identity - first access, microsegmentation, continuous verification, and least privilege.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / zero - trust - security - platform';
        />;
      </Head>;
      <ServiceLanding;
        title='Zero Trust Security Platform';
        description='Accelerate zero trust adoption with reference architectures, policy - as - code, identity - aware proxies, microsegmentation, and continuous verification across users, devices, and services.';
        subtitle='Trust nothing, verify everything';
        pricePerMonthUSD={3499}
        implementation_weeks='4 - 8 weeks';
        roi_note='Reduce breach impact and lateral movement risk; meet compliance faster';
        features={[;
          'Policy - as - code and enforcement',
          'Identity - aware proxies and device posture',
          'Microsegmentation and service mesh integration',
          'Continuous authentication and authorization',
          'Visibility and audit for compliance',
          'Rollout playbooks and migration kits',
        ]}
        industries={[;
          'Enterprise IT',
          'Financial Services',
          'Healthcare',
          'SaaS',
          'Public Sector',
        ]}
        canonical='https: //ziontechgroup.com / zero - trust - security - platform';
      />;
    </>);
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
				pricePerMonthUSD={3499}
				implementationWeeks="4-8 weeks"
				features={[
					&quot;Policy-as-code and enforcement&quot;,
					&quot;Identity-aware proxies and device posture&quot;,
					&quot;Microsegmentation and service mesh integration&quot;,
					&quot;Continuous authentication and authorization&quot;,
					&quot;Visibility and audit for compliance&quot;,
					&quot;Rollout playbooks and migration kits&quot;
				]}
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]}
				canonical="https: //ziontechgroup.com/zero-trust-security-platform"

			/>
		</>
	)
}

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';
export default function ZeroTrustSecurityPlatformPage() {

  return (
    <>
      <Head>
        <title>Zero Trust Security Platform | Zion Tech Group</title>
        <meta
          name='description'
          content='Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege.'
        />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/zero-trust-security-platform'
        />
      </Head>
      <ServiceLanding
        title='Zero Trust Security Platform'
        description='Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.'
        subtitle='Trust nothing, verify everything'
        pricePerMonthUSD={3499}
        implementationWeeks='4-8 weeks';
        roiNote='Reduce breach impact and lateral movement risk; meet compliance faster'
        features={[
          'Policy-as-code and enforcement'
          'Identity-aware proxies and device posture'
          'Microsegmentation and service mesh integration'
          'Continuous authentication and authorization'
          'Visibility and audit for compliance'
          'Rollout playbooks and migration kits'
        ]}
        industries={[
          'Enterprise IT'
          'Financial Services'
          'Healthcare'
          'SaaS'
          'Public Sector'
        ]}
        canonical='https: //ziontechgroup.com/zero-trust-security-platform'
      />
    </>
  );

}
import React from 'react',
import Head from 'next/head',
import ServiceLanding from '../components/sections/ServiceLanding',
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
				pricePerMonthUSD={3499  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
				implementationWeeks="4-8 weeks"
				roiNote="Reduce breach impact and lateral movement risk, meet compliance faster"
				features={[
					"Policy-as-code and enforcement",
					"Identity-aware proxies and device posture",
					"Microsegmentation and service mesh integration",
					"Continuous authentication and authorization",
					"Visibility and audit for compliance",
					"Rollout playbooks and migration kits"
import React from 'react';
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';
export default function ZeroTrustSecurityPlatformPage(req, res) {
  try {
	return (;
		<>;
			<Head>;
				<title>Zero Trust Security Platform | Zion Tech Group</title>;
				<meta name="description" content="Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege." />;
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />;
			</Head>;
			<ServiceLanding;
				title="Zero Trust Security Platform";
				description="Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.";
				subtitle="Trust nothing, verify everything";
				pricePerMonthUSD={3499  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
				implementationWeeks="4-8 weeks";
				roiNote="Reduce breach impact and lateral movement risk, meet compliance faster";
				features={[;
					"Policy-as-code and enforcement",;
					"Identity-aware proxies and device posture",;
					"Microsegmentation and service mesh integration",;
					"Continuous authentication and authorization";
					"Visibility and audit for compliance";
					"Rollout playbooks and migration kits";
				]  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
				canonical="https: //ziontechgroup.com/zero-trust-security-platform"
			/>
		</>
	)
				canonical="https: //ziontechgroup.com/zero-trust-security-platform";
			/>;
		</>;
	);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
