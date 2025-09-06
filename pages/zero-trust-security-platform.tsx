import React from 'react',
import React from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

=======

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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

import Head from 'next/head',
import ServiceLanding from '../components/sections/ServiceLanding',
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
