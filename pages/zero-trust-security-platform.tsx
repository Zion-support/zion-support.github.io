<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import React from 'react';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
class ErrorBoundary extends React.Component {
  constructor(props) {
=======



class ErrorBoundary extends React.Component {}
  constructor(props) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
<<<<<<< HEAD
}
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Head from 'next/head';
=======
}'
import React from 'react';'
import Head from 'next/head';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
=======
import Head from 'next/head';
import ServiceLanding from '../components/sections/ServiceLanding';
<<<<<<< HEAD

  return (
    <>;
      <Head>;
        <title>Zero Trust Security Platform | Zion Tech Group</title>;
        <meta'
          name='description''
          content='Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege.'
        />;
        <link'
          rel='canonical''
          href='https://ziontechgroup && ziontechgroup.com/zero-trust-security-platform'
        />;
      </Head>;
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <ServiceLanding
        title='Zero Trust Security Platform'
        description='Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.'
        subtitle='Trust nothing, verify everything'
        pricePerMonthUSD={3499}
<<<<<<< HEAD
        implementationWeeks='4-8 weeks';
        roiNote='Reduce breach impact and lateral movement risk; meet compliance faster'
=======
        implementationWeeks='4-8 weeks'
        roiNote='Reduce breach impact and lateral movement risk meet compliance faster'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        features={[
          'Policy-as-code and enforcement'
          'Identity-aware proxies and device posture'
          'Microsegmentation and service mesh integration'
          'Continuous authentication and authorization'
          'Visibility and audit for compliance'
=======
      <ServiceLanding'
        title='Zero Trust Security Platform''
        description='Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.''
        subtitle='Trust nothing, verify everything'
        pricePerMonthUSD={3499}'
        implementationWeeks='4-8 weeks''
        roiNote='Reduce breach impact and lateral movement risk meet compliance faster'
        features={['
          'Policy-as-code and enforcement''
          'Identity-aware proxies and device posture''
          'Microsegmentation and service mesh integration''
          'Continuous authentication and authorization''
          'Visibility and audit for compliance''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          'Rollout playbooks and migration kits'
        ]}
        industries={['
          'Enterprise IT''
          'Financial Services''
          'Healthcare''
          'SaaS''
          'Public Sector'
<<<<<<< HEAD
        ]}
<<<<<<< HEAD
        canonical='https: //ziontechgroup.com/zero-trust-security-platform'
      />
    </>
=======
=======
        ]}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        canonical='https: //ziontechgroup && ziontechgroup.com/zero-trust-security-platform'
      />;
    </>;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
'
import Head from 'next/head','
import ServiceLanding from '../components/sections/ServiceLanding',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function ZeroTrustSecurityPlatformPage() {
=======





export default function ZeroTrustSecurityPlatformPage() {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
	return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>
				<meta name="description" content="Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege." />"
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />
			</Head>
			<ServiceLanding"
				title="Zero Trust Security Platform""
				description="Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.""
				subtitle="Trust nothing, verify everything"
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
				pricePerMonthUSD={3499}"
				implementationWeeks="4-8 weeks""
				roiNote="Reduce breach impact and lateral movement risk, meet compliance faster";
				features={[";
					"Policy-as-code and enforcement";"
					"Identity-aware proxies and device posture";"
					"Microsegmentation and service mesh integration";"
					"Continuous authentication and authorization";"
					"Visibility and audit for compliance";"
					"Rollout playbooks and migration kits"
				]}"
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
				canonical="https: //ziontechgroup.com/zero-trust-security-platform"
			/>
		</>
	)
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934



<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react';
import Head from 'next / head';
=======




'
import React from 'react';'
import Head from 'next / head';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import ServiceLanding from '../components / sections / ServiceLanding';
export default /**;
 * ZeroTrustSecurityPlatformPage - Function description;
 */
function ZeroTrustSecurityPlatformPage() {}
  return (
    <>;
      <Head>;
        <title > Zero Trust Security Platform | Zion Tech Group</title>;
        <meta;'
          name='description';'
          content='Design and enforce zero trust architecture: identity - first access, microsegmentation, continuous verification, and least privilege.';
        />;
        <link;'
          rel='canonical';'
          href='https://ziontechgroup.com / zero - trust - security - platform';
        />;
      </Head>;
      <ServiceLanding;'
        title='Zero Trust Security Platform';'
        description='Accelerate zero trust adoption with reference architectures, policy - as - code, identity - aware proxies, microsegmentation, and continuous verification across users, devices, and services.';'
        subtitle='Trust nothing, verify everything';
        pricePerMonthUSD={3499}'
        implementation_weeks='4 - 8 weeks';'
        roi_note='Reduce breach impact and lateral movement risk; meet compliance faster';
        features={[;'
          'Policy - as - code and enforcement','
          'Identity - aware proxies and device posture','
          'Microsegmentation and service mesh integration','
          'Continuous authentication and authorization','
          'Visibility and audit for compliance','
          'Rollout playbooks and migration kits',
        ]}
        industries={[;'
          'Enterprise IT','
          'Financial Services','
          'Healthcare','
          'SaaS','
          'Public Sector',
        ]}'
        canonical='https: //ziontechgroup.com / zero - trust - security - platform';
      />;
    </>);
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


				pricePerMonthUSD={3499}"
				implementationWeeks="4-8 weeks"
				features={[]
					&quot;Policy-as-code and enforcement&quot;,
					&quot;Identity-aware proxies and device posture&quot;,
					&quot;Microsegmentation and service mesh integration&quot;,
					&quot;Continuous authentication and authorization&quot;,
					&quot;Visibility and audit for compliance&quot;,
					&quot;Rollout playbooks and migration kits&quot;
				]}"
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]}"
				canonical="https: //ziontechgroup.com/zero-trust-security-platform"

			/>
		</>
	)
}
'
import React from 'react',';
import React from 'react';'
import Head from 'next/head';'
import ServiceLanding from '../components/sections/ServiceLanding';
export default function ZeroTrustSecurityPlatformPage() {}
  return (
    <>
      <Head>
        <title>Zero Trust Security Platform | Zion Tech Group</title>
        <meta'
          name='description''
          content='Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege.'
        />
        <link'
          rel='canonical''
          href='https://ziontechgroup.com/zero-trust-security-platform'
        />
      </Head>
      <ServiceLanding'
        title='Zero Trust Security Platform''
        description='Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.''
        subtitle='Trust nothing, verify everything'
        pricePerMonthUSD={3499}';
        implementationWeeks='4-8 weeks';'
        roiNote='Reduce breach impact and lateral movement risk; meet compliance faster'
        features={['
          'Policy-as-code and enforcement''
          'Identity-aware proxies and device posture''
          'Microsegmentation and service mesh integration''
          'Continuous authentication and authorization''
          'Visibility and audit for compliance''
          'Rollout playbooks and migration kits'
        ]}
        industries={['
          'Enterprise IT''
          'Financial Services''
          'Healthcare''
          'SaaS''
          'Public Sector'
        ]}'
        canonical='https: //ziontechgroup.com/zero-trust-security-platform'
      />
    </>
  );

}'
import React from 'react','
import Head from 'next/head','
import ServiceLanding from '../components/sections/ServiceLanding',
export default function ZeroTrustSecurityPlatformPage() {}
	return (
		<>
			<Head>
				<title>Zero Trust Security Platform | Zion Tech Group</title>"
				<meta name="description" content="Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege." />"
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />
			</Head>
			<ServiceLanding"
				title="Zero Trust Security Platform""
				description="Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.""
				subtitle="Trust nothing, verify everything";
				pricePerMonthUSD={3499  } catch (error) {";
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
				implementationWeeks="4-8 weeks""
				roiNote="Reduce breach impact and lateral movement risk, meet compliance faster"
				features={["
					"Policy-as-code and enforcement","
					"Identity-aware proxies and device posture","
					"Microsegmentation and service mesh integration","
					"Continuous authentication and authorization","
					"Visibility and audit for compliance","
					"Rollout playbooks and migration kits"'
import React from 'react';'
import Head from 'next/head';'
import ServiceLanding from '../components/sections/ServiceLanding';
export default function ZeroTrustSecurityPlatformPage(req, res) {}
  try {};
	return (;
		<>;
			<Head>;
				<title>Zero Trust Security Platform | Zion Tech Group</title>;"
				<meta name="description" content="Design and enforce zero trust architecture: identity-first access, microsegmentation, continuous verification, and least privilege." />;"
				<link rel="canonical" href="https://ziontechgroup.com/zero-trust-security-platform" />;
			</Head>;
			<ServiceLanding;"
				title="Zero Trust Security Platform";"
				description="Accelerate zero trust adoption with reference architectures, policy-as-code, identity-aware proxies, microsegmentation, and continuous verification across users, devices, and services.";"
				subtitle="Trust nothing, verify everything";
				pricePerMonthUSD={3499  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
				implementationWeeks="4-8 weeks";"
				roiNote="Reduce breach impact and lateral movement risk, meet compliance faster";
				features={[;"
					"Policy-as-code and enforcement",;"
					"Identity-aware proxies and device posture",;"
					"Microsegmentation and service mesh integration",;"
					"Continuous authentication and authorization";"
					"Visibility and audit for compliance";"
					"Rollout playbooks and migration kits";
				]  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
				industries={["Enterprise IT", "Financial Services", "Healthcare", "SaaS", "Public Sector"]  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
				canonical="https: //ziontechgroup.com/zero-trust-security-platform"
			/>
		</>
	)"
				canonical="https: //ziontechgroup.com/zero-trust-security-platform";
			/>;
		</>;
	);
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
export default function ZeroTrustSecurityPlatformPage() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======









'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
