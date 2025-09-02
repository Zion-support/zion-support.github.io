import React from
  'react'
import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, CheckCircle, Star, TrendingUp, Clock, Award, FileText, MessageCircle, TestTube, Phone, MapPin } from
  'lucide-react'
import PageTransition from
  '../src/components/PageTransition'

export default function Services() {
	const title =
  'Services — Zion Tech Group'
	const description =
  'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm: py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="flex items-center justify-center mb-4">
							<Award className="h-6 w-6 text-blue-600 mr-2" />
							<span className="text-base font-semibold leading-7 text-blue-600">Our Services</span>
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-24 sm: py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-2">
						{/* AI Autonomous Systems */}
						<div id="ai" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
									<Brain className="h-7 w-7 text-white" />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-gray-900">AI Autonomous Systems</h2>
									<p className="text-sm text-blue-600 font-medium">Intelligent Automation</p>
								</div>
							</div>
							<p className="text-gray-600 mb-6">
								Transform your operations with intelligent automation and AI-powered decision making. 
								Reduce manual work by 70% while improving accuracy and customer satisfaction.
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Sales/CS multi-agent copilots with 24/7 availability</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">RAG and workflow orchestration for seamless integration</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Advanced observability and safety guardrails</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Intelligent process automation with learning capabilities</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2 text-sm text-gray-500">
									<Clock className="h-4 w-4" />
									<span>2-4 weeks delivery</span>
								</div>
								<Link
									href="/contact"
									className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
									aria-label="Get started with AI services"
								>
									Get started with AI
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>

						{/* Cloud Platforms */}
						<div id="cloud" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
									<Cloud className="h-7 w-7 text-white" />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-gray-900">Cloud Platforms</h2>
									<p className="text-sm text-green-600 font-medium">Scalable Infrastructure</p>
								</div>
							</div>
							<p className="text-gray-600 mb-6">
								Build scalable, resilient cloud infrastructure that grows with your business. 
								Optimize costs by up to 45% while ensuring 99.9% uptime and security.
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Serverless and Kubernetes with auto-scaling</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Advanced data pipelines and ML ops automation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">FinOps and SRE practices for cost optimization</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Multi-cloud architecture for redundancy and compliance</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2 text-sm text-gray-500">
									<Clock className="h-4 w-4" />
									<span>4-8 weeks delivery</span>
								</div>
								<Link
									href="/contact"
									className="inline-flex items-center text-sm font-semibold text-green-600 hover: text-green-500 transition-colors group"
									aria-label="Get started with cloud services"
								>
									Get started with Cloud
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>

						{/* Cybersecurity */}
						<div id="cybersecurity" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
									<Shield className="h-7 w-7 text-white" />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-gray-900">Cybersecurity</h2>
									<p className="text-sm text-purple-600 font-medium">Zero-Trust Security</p>
								</div>
							</div>
							<p className="text-gray-600 mb-6">
								Protect your business with enterprise-grade security frameworks and compliance automation. 
								Reduce security risks by 90% with proactive threat detection and response.
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Zero-trust architecture with continuous verification</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Automated compliance for SOC2, HIPAA, GDPR</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">24/7 incident response and threat hunting</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Comprehensive security audits and penetration testing</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2 text-sm text-gray-500">
									<Clock className="h-4 w-4" />
									<span>3-6 weeks delivery</span>
								</div>
								<Link
									href="/contact"
									className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group"
									aria-label="Get started with cybersecurity services"
								>
									Get started with Security
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>

						{/* Micro SaaS */}
						<div id="saas" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors">
									<Code className="h-7 w-7 text-white" />
								</div>
								<div>
									<h2 className="text-xl font-semibold text-gray-900">Micro SaaS</h2>
									<p className="text-sm text-orange-600 font-medium">Custom Solutions</p>
								</div>
							</div>
							<p className="text-gray-600 mb-6">
								Custom software solutions tailored to your specific business needs and workflows. 
								Accelerate your digital transformation with scalable, maintainable applications.
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-orange-600" />
									<span className="text-sm text-gray-700">Custom web applications with modern frameworks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-orange-600" />
									<span className="text-sm text-gray-700">RESTful API development and documentation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-orange-600" />
									<span className="text-sm text-gray-700">Third-party integration services</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-orange-600" />
									<span className="text-sm text-gray-700">Ongoing maintenance & 24/7 support</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<div className="flex items-center space-x-2 text-sm text-gray-500">
									<Clock className="h-4 w-4" />
									<span>6-12 weeks delivery</span>
								</div>
								<Link
									href="/contact"
									className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group"
									aria-label="Get started with custom software services"
								>
									Get started with SaaS
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Expanded Service Catalog */}
			<section className="py-24 sm:py-32 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-3xl text-center mb-14">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Expanded Service Catalog</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							More real, production-ready services across AI, IT, and Micro SaaS. Transparent starting prices and clear outcomes. Visit our website at
							{' '}
							<a href="https: //ziontechgroup.com" className="text-blue-600 hover:text-blue-500 underline" target="_blank" rel="noreferrer">ziontechgroup.com</a>.
						</p>

						<p className="mt-3 text-sm text-gray-500">
							Average market price ranges referenced from public agency rate cards and vendor quotes.
							For tailored pricing, see our
							{' '}
							<Link href="/pricing-guide" className="text-blue-600 hover: text-blue-500 underline">Pricing Guide</Link>.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* AI Services */}
						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Brain className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Revenue AI Agents (Sales/CS)</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Multi-agent copilots for SDR, AM, and Support with guardrails.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Integrates CRM, Helpdesk, and Knowledge Base</li>
								<li>• Measurable pipeline lift and deflection</li>
								<li>• 24/7 intelligent lead qualification</li>
								<li>• Automated follow-up sequences</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-blue-600">Starting $8k–$25k</span>
								<Link href="/contact" className="text-blue-600 hover: text-blue-500">Talk to us →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Code className="h-5 w-5 text-violet-600" />
								<h3 className="font-semibold text-gray-900">AI-Powered Code Review Assistant</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Intelligent code analysis, security scanning, and performance optimization suggestions.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Real-time vulnerability detection</li>
								<li>• Code quality metrics and suggestions</li>
								<li>• Automated documentation generation</li>
								<li>• Integration with GitHub, GitLab, Bitbucket</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-violet-600">From $199/mo</span>
								<Link href="/contact" className="text-violet-600 hover: text-violet-500">Request demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<FileText className="h-5 w-5 text-amber-600" />
								<h3 className="font-semibold text-gray-900">Intelligent Document Processing</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Extract, analyze, and process documents with AI-powered OCR and NLP.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Invoice and contract processing</li>
								<li>• Automated data extraction and validation</li>
								<li>• Multi-language document support</li>
								<li>• Custom field mapping and workflows</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-amber-600">From $299/mo</span>
								<Link href="/contact" className="text-amber-600 hover: text-amber-500">See live demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<TrendingUp className="h-5 w-5 text-emerald-600" />
								<h3 className="font-semibold text-gray-900">Predictive Analytics Platform</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Advanced forecasting and trend analysis for business intelligence.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Sales forecasting and demand planning</li>
								<li>• Customer churn prediction</li>
								<li>• Market trend analysis</li>
								<li>• Automated reporting and alerts</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-emerald-600">From $399/mo</span>
								<Link href="/contact" className="text-emerald-600 hover: text-emerald-500">Get started →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<MessageCircle className="h-5 w-5 text-cyan-600" />
								<h3 className="font-semibold text-gray-900">AI Chatbot Builder Platform</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">No-code chatbot creation with advanced AI capabilities and integrations.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Multi-channel deployment (web, mobile, social)</li>
								<li>• Natural language understanding</li>
								<li>• Integration with CRM and helpdesk</li>
								<li>• Analytics and conversation insights</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-cyan-600">From $149/mo</span>
								<Link href="/contact" className="text-cyan-600 hover: text-cyan-500">Try free trial →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<TestTube className="h-5 w-5 text-pink-600" />
								<h3 className="font-semibold text-gray-900">Automated Testing AI</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">AI-driven test generation, execution, and maintenance for software quality.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Automated test case generation</li>
								<li>• Self-healing test scripts</li>
								<li>• Performance and load testing</li>
								<li>• CI/CD pipeline integration</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-pink-600">From $249/mo</span>
								<Link href="/contact" className="text-pink-600 hover: text-pink-500">Schedule demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Database className="h-5 w-5 text-indigo-600" />
								<h3 className="font-semibold text-gray-900">Data Engineering as a Service</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Modern ELT, dbt, and warehouse modeling, with governance.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Snowflake/BigQuery/Redshift, Lakehouse setups</li>
								<li>• Data quality SLAs and observability</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-indigo-600">Starting $10k–$40k</span>
								<Link href="/contact" className="text-indigo-600 hover: text-indigo-500">Get estimate →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Server className="h-5 w-5 text-emerald-600" />
								<h3 className="font-semibold text-gray-900">MLOps Platform Setup</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">CI/CD for models, feature stores, evals, and monitoring.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Vertex/SageMaker/Databricks integrations</li>
								<li>• Reproducible pipelines and governance</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-emerald-600">Starting $15k–$60k</span>
								<Link href="/contact" className="text-emerald-600 hover: text-emerald-500">Learn more →</Link>
							</div>
						</div>

						{/* IT & Cloud */}
						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Cloud className="h-5 w-5 text-green-600" />
								<h3 className="font-semibold text-gray-900">FinOps & Cloud Cost Optimization</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Rightsizing, savings plans, architectural refactors for cost.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Typical 20–45% monthly savings</li>
								<li>• Automated policy enforcement</li>
								<li>• Real-time cost monitoring and alerts</li>
								<li>• Reserved instance optimization</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-green-600">Assessments $4k–$12k</span>
								<Link href="/contact" className="text-green-600 hover: text-green-500">Start now →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Zap className="h-5 w-5 text-yellow-600" />
								<h3 className="font-semibold text-gray-900">DevOps Automation Platform</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Complete CI/CD pipeline setup with automated testing and deployment.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Infrastructure as Code (IaC) implementation</li>
								<li>• Automated testing and quality gates</li>
								<li>• Blue-green and canary deployments</li>
								<li>• Monitoring and rollback capabilities</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-yellow-600">From $5k–$20k</span>
								<Link href="/contact" className="text-yellow-600 hover: text-yellow-500">Get quote →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<BarChart3 className="h-5 w-5 text-indigo-600" />
								<h3 className="font-semibold text-gray-900">Infrastructure Monitoring Suite</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Comprehensive monitoring and alerting for applications and infrastructure.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Application performance monitoring (APM)</li>
								<li>• Infrastructure and log monitoring</li>
								<li>• Custom dashboards and reporting</li>
								<li>• 24/7 alerting and incident response</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-indigo-600">From $299/mo</span>
								<Link href="/contact" className="text-indigo-600 hover: text-indigo-500">Request demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Globe className="h-5 w-5 text-teal-600" />
								<h3 className="font-semibold text-gray-900">API Gateway Management</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Secure, scalable API management with rate limiting and analytics.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• API versioning and lifecycle management</li>
								<li>• Authentication and authorization</li>
								<li>• Rate limiting and throttling</li>
								<li>• Analytics and usage insights</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-teal-600">From $199/mo</span>
								<Link href="/contact" className="text-teal-600 hover: text-teal-500">Learn more →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Database className="h-5 w-5 text-purple-600" />
								<h3 className="font-semibold text-gray-900">Database Optimization Service</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Performance tuning, scaling, and maintenance for database systems.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Query optimization and indexing</li>
								<li>• Database migration and scaling</li>
								<li>• Backup and disaster recovery</li>
								<li>• Performance monitoring and tuning</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-purple-600">From $2k–$8k</span>
								<Link href="/contact" className="text-purple-600 hover: text-purple-500">Get assessment →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<TrendingUp className="h-5 w-5 text-orange-600" />
								<h3 className="font-semibold text-gray-900">Performance Tuning & Optimization</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Application and system performance optimization for better user experience.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Frontend and backend optimization</li>
								<li>• Caching strategies implementation</li>
								<li>• Load testing and capacity planning</li>
								<li>• Performance monitoring and alerts</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-orange-600">From $3k–$15k</span>
								<Link href="/contact" className="text-orange-600 hover: text-orange-500">Schedule audit →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Shield className="h-5 w-5 text-purple-600" />
								<h3 className="font-semibold text-gray-900">SOC-as-a-Service</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Managed detection & response with 24/7 coverage.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• SIEM, EDR, and threat intel</li>
								<li>• Incident playbooks and compliance</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-purple-600">From $3k/mo</span>
								<Link href="/contact" className="text-purple-600 hover: text-purple-500">Request details →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Globe className="h-5 w-5 text-orange-600" />
								<h3 className="font-semibold text-gray-900">Fractional CTO/Architecture Advisory</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Strategy, roadmap, and architecture leadership on-demand.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Platform modernization & product strategy</li>
								<li>• Vendor selection and governance</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-orange-600">From $4k/mo</span>
								<Link href="/contact" className="text-orange-600 hover: text-orange-500">Book intro →</Link>
							</div>
						</div>

						{/* Micro SaaS */}
						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Code className="h-5 w-5 text-rose-600" />
								<h3 className="font-semibold text-gray-900">AI Content Localization SaaS</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Translate and culturally adapt content at scale.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Multi-market SEO and brand alignment</li>
								<li>• Human-in-the-loop quality controls</li>
								<li>• 50+ language support</li>
								<li>• Brand voice consistency</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-rose-600">From $199/mo</span>
								<Link href="/contact" className="text-rose-600 hover:text-rose-500">Request demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Users className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Smart Project Management Suite</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">AI-powered project management with intelligent task allocation and progress tracking.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Automated task prioritization</li>
								<li>• Team workload balancing</li>
								<li>• Predictive deadline management</li>
								<li>• Integration with popular tools</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-blue-600">From $29/mo</span>
								<Link href="/contact" className="text-blue-600 hover: text-blue-500">Start free trial →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Clock className="h-5 w-5 text-green-600" />
								<h3 className="font-semibold text-gray-900">Intelligent Time Tracking Platform</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Automated time tracking with AI-powered productivity insights and billing.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Automatic activity detection</li>
								<li>• Productivity analytics and reports</li>
								<li>• Client billing and invoicing</li>
								<li>• Team performance insights</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-green-600">From $19/mo</span>
								<Link href="/contact" className="text-green-600 hover: text-green-500">Try demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<FileText className="h-5 w-5 text-purple-600" />
								<h3 className="font-semibold text-gray-900">Smart Invoice Generator</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">AI-powered invoice creation with automated follow-ups and payment tracking.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Automated invoice generation</li>
								<li>• Smart payment reminders</li>
								<li>• Multi-currency support</li>
								<li>• Tax calculation and compliance</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-purple-600">From $15/mo</span>
								<Link href="/contact" className="text-purple-600 hover: text-purple-500">Get started →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<MessageCircle className="h-5 w-5 text-orange-600" />
								<h3 className="font-semibold text-gray-900">Email Marketing Automation Hub</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Advanced email marketing with AI-driven personalization and campaign optimization.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• AI-powered content personalization</li>
								<li>• Behavioral trigger campaigns</li>
								<li>• A/B testing and optimization</li>
								<li>• Advanced segmentation</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-orange-600">From $39/mo</span>
								<Link href="/contact" className="text-orange-600 hover: text-orange-500">Request demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Globe className="h-5 w-5 text-cyan-600" />
								<h3 className="font-semibold text-gray-900">Social Media Scheduler Pro</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Intelligent social media management with optimal posting times and content suggestions.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• AI-optimized posting schedules</li>
								<li>• Content suggestion engine</li>
								<li>• Multi-platform management</li>
								<li>• Performance analytics</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-cyan-600">From $25/mo</span>
								<Link href="/contact" className="text-cyan-600 hover: text-cyan-500">Start trial →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<BarChart3 className="h-5 w-5 text-indigo-600" />
								<h3 className="font-semibold text-gray-900">Business Intelligence Dashboard</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Real-time business analytics with customizable dashboards and automated reporting.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Real-time data visualization</li>
								<li>• Custom KPI tracking</li>
								<li>• Automated report generation</li>
								<li>• Multi-source data integration</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-indigo-600">From $49/mo</span>
								<Link href="/contact" className="text-indigo-600 hover: text-indigo-500">View demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Shield className="h-5 w-5 text-red-600" />
								<h3 className="font-semibold text-gray-900">Password Manager for Teams</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Enterprise-grade password management with advanced security features and team collaboration.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Zero-knowledge encryption</li>
								<li>• Team sharing and permissions</li>
								<li>• Breach monitoring and alerts</li>
								<li>• SSO integration</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-red-600">From $35/mo</span>
								<Link href="/contact" className="text-red-600 hover: text-red-500">Learn more →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<BarChart3 className="h-5 w-5 text-sky-600" />
								<h3 className="font-semibold text-gray-900">Predictive Maintenance Toolkit</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Out-of-the-box anomaly detection for equipment and IoT.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Sensor ingestion, dashboards, and alerts</li>
								<li>• Edge or cloud deployment options</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-sky-600">From $299/mo</span>
								<Link href="/contact" className="text-sky-600 hover: text-sky-500">See live demo →</Link>
							</div>
						</div>

						<div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
							<div className="flex items-center gap-3 mb-3">
								<Lock className="h-5 w-5 text-teal-600" />
								<h3 className="font-semibold text-gray-900">Compliance Copilot (SOC2/HIPAA/GDPR)</h3>
							</div>
							<p className="text-sm text-gray-600 mb-3">Automated evidence collection and continuous controls.</p>
							<ul className="text-sm text-gray-700 space-y-1 mb-4">
								<li>• Policy templates and auditor-ready reports</li>
								<li>• Ticketing and alerting integrations</li>
							</ul>
							<div className="flex items-center justify-between text-sm">
								<span className="font-semibold text-teal-600">From $249/mo</span>
								<Link href="/contact" className="text-teal-600 hover: text-teal-500">Book a walkthrough →</Link>
							</div>
						</div>
					</div>

					<div className="mt-10 text-center">
						<div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
							<p className="text-gray-600 mb-6">
								Our team of experts is ready to help you implement cutting-edge solutions that drive real results. 
								Get in touch for a free consultation and custom quote tailored to your specific needs.
							</p>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
								<div className="flex items-center gap-2">
									<MessageCircle className="h-4 w-4 text-blue-600" />
									<a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-500 font-medium">
										kleber@ziontechgroup.com
									</a>
								</div>
								<div className="flex items-center gap-2">
									<Phone className="h-4 w-4 text-blue-600" />
									<a href="tel:+13024640950" className="text-blue-600 hover:text-blue-500 font-medium">
										+1 302 464 0950
									</a>
								</div>
								<div className="flex items-center gap-2">
									<MapPin className="h-4 w-4 text-blue-600" />
									<span className="text-gray-600">
										364 E Main St STE 1008, Middletown DE 19709
									</span>
								</div>
							</div>
							<div className="mt-4 text-xs text-gray-500">
								Visit our website: <a href="https://ziontechgroup.com" className="text-blue-600 hover:text-blue-500 underline" target="_blank" rel="noreferrer">ziontechgroup.com</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Delivery Process
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We follow a proven methodology that ensures quality, speed, and successful outcomes.
						</p>
					</div>
					<div className="grid grid-cols-1 md: grid-cols-4 gap-8">
						<div className="text-center group">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
								<span className="text-2xl font-bold text-blue-600">1</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
							<p className="text-gray-600">Understand your needs and requirements</p>
						</div>
						<div className="text-center group">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
								<span className="text-2xl font-bold text-green-600">2</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
							<p className="text-gray-600">Plan the solution architecture</p>
						</div>
						<div className="text-center group">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
								<span className="text-2xl font-bold text-purple-600">3</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
							<p className="text-gray-600">Build and test the solution</p>
						</div>
						<div className="text-center group">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
								<span className="text-2xl font-bold text-orange-600">4</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h3>
							<p className="text-gray-600">Launch and monitor performance</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to get started?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let&aposs discuss your project requirements and how we can help you achieve your goals.''
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								href="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover: bg-gray-50 transition-all duration-200 hover:scale-105"
								aria-label="Contact us to get started"
							>
								Contact Us
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link
								href="/"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
								aria-label="Back to homepage"
							>
								Back to Home <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
