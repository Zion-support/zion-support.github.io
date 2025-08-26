import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CloudDevOpsPage() {
	return (
		<>
			<Head>
				<title>Cloud & DevOps Services | Zion Tech Group - Scalable Infrastructure Solutions</title>
				<meta name="description" content="Transform your infrastructure with Zion Tech Group's cloud and DevOps services. Scalable cloud solutions, automation, CI/CD pipelines, and infrastructure as code." />
				<link rel="canonical" href="https://ziontechgroup.com/services/cloud-devops" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
							Cloud & DevOps Services
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Build, deploy, and scale with confidence. Our cloud and DevOps expertise helps you create resilient, scalable infrastructure that accelerates development and reduces operational overhead.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200">
								Get Started
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								All Services
							</Link>
						</div>
					</section>

					{/* Cloud Services Overview */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Cloud Services</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Cloud Infrastructure</h3>
								<p className="text-white/70 mb-4">Design and implement scalable cloud architectures across major cloud providers.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• AWS, Azure, GCP expertise</li>
									<li>• Multi-cloud strategies</li>
									<li>• Cloud migration services</li>
									<li>• Cost optimization</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">DevOps Automation</h3>
								<p className="text-white/70 mb-4">Streamline development and operations with automated CI/CD pipelines and infrastructure management.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• CI/CD pipeline setup</li>
									<li>• Infrastructure as Code</li>
									<li>• Automated testing</li>
									<li>• Deployment automation</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Container Orchestration</h3>
								<p className="text-white/70 mb-4">Deploy and manage containerized applications with Kubernetes and Docker expertise.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Kubernetes deployment</li>
									<li>• Docker containerization</li>
									<li>• Microservices architecture</li>
									<li>• Service mesh implementation</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Monitoring & Observability</h3>
								<p className="text-white/70 mb-4">Comprehensive monitoring solutions for infrastructure, applications, and business metrics.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Infrastructure monitoring</li>
									<li>• Application performance</li>
									<li>• Log aggregation</li>
									<li>• Alerting systems</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Security & Compliance</h3>
								<p className="text-white/70 mb-4">Secure cloud infrastructure with compliance automation and security best practices.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Cloud security assessment</li>
									<li>• Compliance automation</li>
									<li>• Identity management</li>
									<li>• Security monitoring</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-red-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-red-400">Disaster Recovery</h3>
								<p className="text-white/70 mb-4">Robust backup and disaster recovery solutions to ensure business continuity.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Backup strategies</li>
									<li>• Disaster recovery planning</li>
									<li>• Business continuity</li>
									<li>• Recovery testing</li>
								</ul>
							</div>
						</div>
					</section>

					{/* DevOps Practices */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">DevOps Best Practices</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-blue-400">Continuous Integration/Deployment</h3>
								<p className="text-white/70 mb-4">
									Automate your software delivery pipeline from code commit to production deployment.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Automated testing pipelines</li>
									<li>• Code quality gates</li>
									<li>• Automated deployments</li>
									<li>• Rollback capabilities</li>
									<li>• Environment management</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-cyan-400">Infrastructure as Code</h3>
								<p className="text-white/70 mb-4">
									Manage your infrastructure using code and version control for consistency and reliability.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Terraform configurations</li>
									<li>• CloudFormation templates</li>
									<li>• Ansible playbooks</li>
									<li>• Infrastructure testing</li>
									<li>• Version control</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-purple-400">Microservices Architecture</h3>
								<p className="text-white/70 mb-4">
									Design and implement scalable, maintainable microservices architectures.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Service decomposition</li>
									<li>• API design</li>
									<li>• Service discovery</li>
									<li>• Load balancing</li>
									<li>• Circuit breakers</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-green-400">Monitoring & Alerting</h3>
								<p className="text-white/70 mb-4">
									Comprehensive monitoring solutions for proactive issue detection and resolution.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Real-time monitoring</li>
									<li>• Custom dashboards</li>
									<li>• Intelligent alerting</li>
									<li>• Performance optimization</li>
									<li>• Capacity planning</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Cloud Platforms */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Cloud Platforms We Support</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Amazon Web Services</h3>
								<p className="text-white/70 mb-4">Comprehensive AWS solutions including EC2, S3, Lambda, and more.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Compute & Storage</li>
									<li>• Serverless Architecture</li>
									<li>• AI & Machine Learning</li>
									<li>• Security & Compliance</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Microsoft Azure</h3>
								<p className="text-white/70 mb-4">Enterprise-grade cloud solutions with hybrid cloud capabilities.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Virtual Machines</li>
									<li>• Azure DevOps</li>
									<li>• Cognitive Services</li>
									<li>• Enterprise Integration</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Google Cloud Platform</h3>
								<p className="text-white/70 mb-4">Advanced cloud services with AI and data analytics capabilities.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Compute Engine</li>
									<li>• BigQuery Analytics</li>
									<li>• AI Platform</li>
									<li>• Kubernetes Engine</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Why Choose Zion for Cloud & DevOps */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group for Cloud & DevOps?</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-blue-400">Expert Cloud Engineers</h3>
								<p className="text-white/80 mb-4">
									Our team includes certified cloud architects and DevOps engineers with extensive experience across all major cloud platforms.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• AWS, Azure, GCP certified professionals</li>
									<li>• Kubernetes certified administrators</li>
									<li>• Terraform certified professionals</li>
									<li>• DevOps culture experts</li>
								</ul>
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-cyan-400">Proven Methodologies</h3>
								<p className="text-white/80 mb-4">
									We follow industry best practices and proven methodologies to ensure successful cloud transformations and DevOps implementations.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• Agile development practices</li>
									<li>• Infrastructure as Code principles</li>
									<li>• Security-first approach</li>
									<li>• Continuous improvement</li>
								</ul>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Infrastructure?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our cloud and DevOps expertise can help you build scalable, reliable infrastructure that accelerates your development.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200">
									Start Your Cloud Journey
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