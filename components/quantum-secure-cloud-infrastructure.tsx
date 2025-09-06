<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
				"NIST PQC roadmap alignment]}
			]}
			industries={["Financial Services", "Healthcare", "Government"]}
			url="https: //ziontechgroup.com/quantum-secure-cloud-infrastructure"
		/>
	)



<<<<<<< HEAD
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
=======
import React from 'react';
import { motion  } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network  } from 'lucide-react';
import SEO from '../components/SEO';
export default function QuantumSecureCloudInfrastructure() {
	return (
		<ServiceLanding
			title;
 import React from 'react';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
 import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components/SEO';
<<<<<<< HEAD
export default function QuantumSecureCloudInfrastructure() {;
	return (<ServiceLanding
=======
export default function QuantumSecureCloudInfrastructure() {
	return(<ServiceLanding
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
			features={[;
			features={[
				"PQC algorithms for data at-rest and in-transit";
				"Hybrid crypto transition plans";
				"HSM/KMS integrations and key rotation";
				"Zero Trust + PQC reference designs";
				"Threat modeling and validation";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
				"NIST PQC roadmap alignment]}
			]}
			industries={["Financial Services", "Healthcare", "Government"]}
			url="https: //ziontechgroup && ziontechgroup.com/quantum-secure-cloud-infrastructure"
		/>;
	);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

}

		/>
	)
}
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
