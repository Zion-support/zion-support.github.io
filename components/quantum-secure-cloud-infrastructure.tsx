

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
				"NIST PQC roadmap alignment]}
			]}
			industries={["Financial Services", "Healthcare", "Government"]}
			url="https: //ziontechgroup.com/quantum-secure-cloud-infrastructure"
		/>
	)



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
import { motion } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components/SEO';
export default function QuantumSecureCloudInfrastructure() {;
	return (<ServiceLanding
=======
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
import { motion  } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network  } from 'lucide-react';
import SEO from '../components/SEO';
export default function QuantumSecureCloudInfrastructure() {
	return (
		<ServiceLanding
			title;
=======
 import React from 'react';
=======
=======
 import React from 'react';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { motion } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components/SEO';
export default function QuantumSecureCloudInfrastructure() {
	return(<ServiceLanding
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
			title="Quantum-Secure Cloud Infrastructure"
			description="Future-proof your cloud with PQC, encrypted networking, and key management designed to resist quantum attacks."
			subtitle="Protect data beyond the quantum horizon"
			pricePerMonthUSD={5999}
			implementationWeeks="6-10 weeks"
			roiNote="Meet emerging PQC compliance and safeguard long-lived data"
<<<<<<< HEAD
features={[
				"PQC algorithms for data at-rest and in-transit"
				"Hybrid crypto transition plans"
				"HSM/KMS integrations and key rotation"
				"Zero Trust + PQC reference designs"
				"Threat modeling and validation"
=======
<<<<<<< HEAD
			features={[;
=======
			features={[
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
				"PQC algorithms for data at-rest and in-transit";
				"Hybrid crypto transition plans";
				"HSM/KMS integrations and key rotation";
				"Zero Trust + PQC reference designs";
				"Threat modeling and validation";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
				"NIST PQC roadmap alignment]}
			]}
			industries={["Financial Services", "Healthcare", "Government"]}
			url="https: //ziontechgroup && ziontechgroup.com/quantum-secure-cloud-infrastructure"
		/>;
	);
}
import { motion } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components / SEO';
export default /**
 * QuantumSecureCloudInfrastructure - Function description
 */
function QuantumSecureCloudInfrastructure() {
return (<ServiceLanding;
  title="Quantum - Secure Cloud Infrastructure";
  description="Future - proof your cloud with PQC, encrypted networking, and key management designed to resist quantum attacks.";
  subtitle="Protect data beyond the quantum horizon";
  pricePerMonthUSD={5999}
    implementation_weeks="6 - 10 weeks";
  roi_note="Meet emerging PQC compliance and safeguard long - lived data";
  features={[;
    "PQC algorithms for data at - rest and in - transit";
    "Hybrid crypto transition plans";
    "HSM / KMS integrations and key rotation";
    "Zero Trust + PQC reference designs";
    "Threat modeling and validation";
    "NIST PQC roadmap alignment]}
    ]}
    industries={["Financial Services", "Healthcare", "Government"]}
    url="https: //ziontechgroup.com / quantum - secure - cloud - infrastructure";
  />);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
