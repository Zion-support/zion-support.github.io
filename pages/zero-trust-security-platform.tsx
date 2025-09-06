<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react',
import React from 'react';
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
import React from 'react',
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';

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
}
import React from 'react',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import Head from 'next/head',
import ServiceLanding from '../components/sections/ServiceLanding',
=======

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
