import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Shield, Lock, Zap, Users, Target, ArrowRight, Check, Star, Globe, Cpu, Network } from 'lucide-react';
import SEO from '../components/SEO';

export default function QuantumSecureCloudInfrastructure() {
	return (
		<ServiceLanding
			title=&quot;Quantum-Secure Cloud Infrastructure&quot;
			description=&quot;Future-proof your cloud with PQC, encrypted networking, and key management designed to resist quantum attacks.&quot;
			subtitle=&quot;Protect data beyond the quantum horizon&quot;
			pricePerMonthUSD={5999}
			implementationWeeks=&quot;6-10 weeks&quot;
			roiNote=&quot;Meet emerging PQC compliance and safeguard long-lived data&quot;
			features={[
				&quot;PQC algorithms for data at-rest and in-transit&quot;,
				&quot;Hybrid crypto transition plans&quot;,
				&quot;HSM/KMS integrations and key rotation&quot;,
				&quot;Zero Trust + PQC reference designs&quot;,
				&quot;Threat modeling and validation&quot;,
				&quot;NIST PQC roadmap alignment]}
			]}
			industries={[&quot;Financial Services&quot;, &quot;Healthcare&quot;, &quot;Government&quot;]}
			url=&quot;https://ziontechgroup.com/quantum-secure-cloud-infrastructure"
		/>
	);
}
