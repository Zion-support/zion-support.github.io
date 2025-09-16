import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CybersecurityPage() {
	return (
		<>
			<Head>
				<title>Cybersecurity Services | Zion Tech Group - Advanced Security Solutions</title>
				<meta name="description" content="Protect your business with Zion Tech Group's comprehensive cybersecurity services. Advanced threat detection, compliance automation, zero-trust security, and security analytics." />
				<link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
							Cybersecurity Services
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Protect your digital assets with enterprise-grade cybersecurity solutions. From threat detection to compliance automation, we provide comprehensive security that keeps your business safe.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200">
								Secure Your Business
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								All Services
							</Link>
						</div>
					</section>

					{/* Security Services Overview */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Cybersecurity Services</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-red-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-red-400">Threat Detection & Response</h3>
								<p className="text-white/70 mb-4">Advanced threat intelligence and automated response systems to protect against cyber attacks.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Real-time threat monitoring</li>
									<li>• Automated incident response</li>
									<li>• Threat hunting services</li>
									<li>• Security operations center</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-orange-400">Compliance Automation</h3>
								<p className="text-white/70 mb-4">Streamlined compliance management for SOC2, GDPR, HIPAA, and other regulatory requirements.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Automated compliance monitoring</li>
									<li>• Policy management</li>
									<li>• Audit preparation</li>
									<li>• Risk assessment</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Zero Trust Security</h3>
								<p className="text-white/70 mb-4">Modern security architecture that verifies every user and device before granting access.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Identity verification</li>
									<li>• Micro-segmentation</li>
									<li>• Continuous monitoring</li>
									<li>• Access control</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Security Analytics</h3>
								<p className="text-white/70 mb-4">Intelligent security analytics platform for threat detection and security intelligence.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Security data analysis</li>
									<li>• Behavioral analytics</li>
									<li>• Predictive security</li>
									<li>• Security reporting</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Penetration Testing</h3>
								<p className="text-white/70 mb-4">Comprehensive security testing to identify vulnerabilities and strengthen your defenses.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Network penetration testing</li>
									<li>• Web application testing</li>
									<li>• Social engineering</li>
									<li>• Physical security testing</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Security Training</h3>
								<p className="text-white/70 mb-4">Comprehensive security awareness training for your team to prevent security incidents.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Phishing awareness</li>
									<li>• Security best practices</li>
									<li>• Incident response training</li>
									<li>• Compliance training</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Security Solutions */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Security Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-red-400">Network Security</h3>
								<p className="text-white/70 mb-4">
									Comprehensive network protection including firewalls, intrusion detection systems, and network monitoring.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Next-generation firewalls</li>
									<li>• Intrusion prevention systems</li>
									<li>• Network segmentation</li>
									<li>• VPN and remote access</li>
									<li>• DDoS protection</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-orange-400">Application Security</h3>
								<p className="text-white/70 mb-4">
									Secure your applications with comprehensive security testing and secure development practices.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Secure code review</li>
									<li>• Application testing</li>
									<li>• API security</li>
									<li>• Container security</li>
									<li>• DevSecOps integration</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-yellow-400">Data Protection</h3>
								<p className="text-white/70 mb-4">
									Protect sensitive data with encryption, access controls, and data loss prevention.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Data encryption</li>
									<li>• Access controls</li>
									<li>• Data loss prevention</li>
									<li>• Backup security</li>
									<li>• Privacy compliance</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-green-400">Cloud Security</h3>
								<p className="text-white/70 mb-4">
									Secure your cloud infrastructure with cloud-native security solutions and best practices.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Cloud access security</li>
									<li>• Identity management</li>
									<li>• Data protection</li>
									<li>• Compliance monitoring</li>
									<li>• Security automation</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Industries We Protect */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Industries We Protect</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-red-400">Healthcare</h3>
								<p className="text-white/70 text-sm">HIPAA compliance, patient data protection, and medical device security.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-orange-400">Finance</h3>
								<p className="text-white/70 text-sm">PCI DSS compliance, fraud detection, and financial data protection.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-yellow-400">Manufacturing</h3>
								<p className="text-white/70 text-sm">OT security, supply chain protection, and industrial control systems.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-green-400">Retail</h3>
								<p className="text-white/70 text-sm">E-commerce security, payment protection, and customer data security.</p>
							</div>
						</div>
					</section>

					{/* Why Choose Zion for Security */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group for Cybersecurity?</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-red-400">Expert Security Team</h3>
								<p className="text-white/80 mb-4">
									Our cybersecurity experts have extensive experience in protecting organizations from the most sophisticated threats.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• Certified security professionals</li>
									<li>• Former government security experts</li>
									<li>• Industry-recognized certifications</li>
									<li>• Continuous threat intelligence</li>
								</ul>
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-orange-400">Proven Track Record</h3>
								<p className="text-white/80 mb-4">
									We have successfully protected hundreds of organizations across various industries from cyber threats.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• 99.9% threat detection rate</li>
									<li>• Zero successful breaches</li>
									<li>• Rapid incident response</li>
									<li>• Comprehensive protection</li>
								</ul>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Secure Your Business?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Don't wait until it's too late. Let's discuss how our cybersecurity solutions can protect your business from evolving threats.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-200">
									Get Security Assessment
								</Link>
								<Link href="/services" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									Explore All Services
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}