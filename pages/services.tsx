import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Database,
  Server,
  Lock,
  BarChart3,
  Users,
  Globe,
  Code,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Services() {
	const title = 'Services — Zion Tech Group';
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className='bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl text-center'>
						<div className='flex items-center justify-center mb-4'>
							<Award className='h-6 w-6 text-blue-600 mr-2' />
							<span className='text-base font-semibold leading-7 text-blue-600'>Our Services</span>
						</div>
						<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Our Services
						</h1>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
						</p>
					</div>
				</div>
			</section>
			{/* Services Grid */}
			<section className='py-24 sm:py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='grid gap-8 lg:grid-cols-2'>
						{/* AI Autonomous Systems */}
						<div id='ai' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300'>
							<div className='flex items-center gap-x-3 mb-6'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors'>
									<Brain className='h-7 w-7 text-white' />
								</div>
								<div>
									<h2 className='text-xl font-semibold text-gray-900'>AI Autonomous Systems</h2>
									<p className='text-sm text-blue-600 font-medium'>Intelligent Automation</p>
								</div>
							</div>
							<p className='text-gray-600 mb-6'>
								Transform your operations with intelligent automation and AI-powered decision making.
							</p>
							<ul className='space-y-3 mb-6'>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-blue-600' />
									<span className='text-sm text-gray-700'>Sales/CS multi-agent copilots</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-blue-600' />
									<span className='text-sm text-gray-700'>RAG and workflow orchestration</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-blue-600' />
									<span className='text-sm text-gray-700'>Observability and guardrails</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-blue-600' />
									<span className='text-sm text-gray-700'>Intelligent process automation</span>
								</li>
							</ul>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-2 text-sm text-gray-500'>
									<Clock className='h-4 w-4' />
									<span>2-4 weeks delivery</span>
								</div>
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group'
									aria-label='Get started with AI services'
								>
									Get started with AI
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
								</Link>
							</div>
						</div>
						{/* Cloud Platforms */}
						<div id='cloud' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300'>
							<div className='flex items-center gap-x-3 mb-6'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors'>
									<Cloud className='h-7 w-7 text-white' />
								</div>
								<div>
									<h2 className='text-xl font-semibold text-gray-900'>Cloud Platforms</h2>
									<p className='text-sm text-green-600 font-medium'>Scalable Infrastructure</p>
								</div>
							</div>
							<p className='text-gray-600 mb-6'>
								Build scalable, resilient cloud infrastructure that grows with your business.
							</p>
							<ul className='space-y-3 mb-6'>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-green-600' />
									<span className='text-sm text-gray-700'>Serverless and Kubernetes</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-green-600' />
									<span className='text-sm text-gray-700'>Data pipelines and ML ops</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-green-600' />
									<span className='text-sm text-gray-700'>FinOps and SRE practices</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-green-600' />
									<span className='text-sm text-gray-700'>Multi-cloud architecture</span>
								</li>
							</ul>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-2 text-sm text-gray-500'>
									<Clock className='h-4 w-4' />
									<span>4-8 weeks delivery</span>
								</div>
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group'
									aria-label='Get started with cloud services'
								>
									Get started with Cloud
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
								</Link>
							</div>
						</div>
						{/* Cybersecurity */}
						<div id='cybersecurity' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300'>
							<div className='flex items-center gap-x-3 mb-6'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors'>
									<Shield className='h-7 w-7 text-white' />
								</div>
								<div>
									<h2 className='text-xl font-semibold text-gray-900'>Cybersecurity</h2>
									<p className='text-sm text-purple-600 font-medium'>Zero-Trust Security</p>
								</div>
							</div>
							<p className='text-gray-600 mb-6'>
								Protect your business with enterprise-grade security frameworks and compliance automation.
							</p>
							<ul className='space-y-3 mb-6'>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-purple-600' />
									<span className='text-sm text-gray-700'>Zero-trust architecture</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-purple-600' />
									<span className='text-sm text-gray-700'>Compliance automation</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-purple-600' />
									<span className='text-sm text-gray-700'>Incident response</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-purple-600' />
									<span className='text-sm text-gray-700'>Security audits</span>
								</li>
							</ul>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-2 text-sm text-gray-500'>
									<Clock className='h-4 w-4' />
									<span>3-6 weeks delivery</span>
								</div>
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group'
									aria-label='Get started with cybersecurity services'
								>
									Get started with Security
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
								</Link>
							</div>
						</div>
						{/* Micro SaaS */}
						<div id='saas' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300'>
							<div className='flex items-center gap-x-3 mb-6'>
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors'>
									<Code className='h-7 w-7 text-white' />
								</div>
								<div>
									<h2 className='text-xl font-semibold text-gray-900'>Micro SaaS</h2>
									<p className='text-sm text-orange-600 font-medium'>Custom Solutions</p>
								</div>
							</div>
							<p className='text-gray-600 mb-6'>
								Custom software solutions tailored to your specific business needs and workflows.
							</p>
							<ul className='space-y-3 mb-6'>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-orange-600' />
									<span className='text-sm text-gray-700'>Custom web applications</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-orange-600' />
									<span className='text-sm text-gray-700'>API development</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-orange-600' />
									<span className='text-sm text-gray-700'>Integration services</span>
								</li>
								<li className='flex items-center gap-x-3'>
									<CheckCircle className='h-4 w-4 text-orange-600' />
									<span className='text-sm text-gray-700'>Maintenance & support</span>
								</li>
							</ul>
							<div className='flex items-center justify-between'>
								<div className='flex items-center space-x-2 text-sm text-gray-500'>
									<Clock className='h-4 w-4' />
									<span>6-12 weeks delivery</span>
								</div>
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group'
									aria-label='Get started with custom software services'
								>
									Get started with SaaS
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Expanded Service Catalog */}
			<section className='py-24 sm:py-32 bg-white'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-3xl text-center mb-14'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Expanded Service Catalog</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							More real, production-ready services across AI, IT, and Micro SaaS. Transparent starting prices and clear outcomes. Visit our website at{' '}
							<a href='https://ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline' target='_blank' rel='noreferrer'>ziontechgroup.com</a>.
						</p>
						<p className='mt-3 text-sm text-gray-500'>
							Average market price ranges referenced from public agency rate cards and vendor quotes. For tailored pricing, see our{' '}
							<Link href='/pricing-guide' className='text-blue-600 hover:text-blue-500 underline'>Pricing Guide</Link>.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* AI Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Brain className='h-5 w-5 text-blue-600' />
								<h3 className='font-semibold text-gray-900'>Revenue AI Agents (Sales/CS)</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Multi-agent copilots for SDR, AM, and Support with guardrails.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Integrates CRM, Helpdesk, and Knowledge Base</li>
								<li>• Measurable pipeline lift and deflection</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-blue-600'>Starting $8k–$25k</span>
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Talk to us →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Database className='h-5 w-5 text-indigo-600' />
								<h3 className='font-semibold text-gray-900'>Data Engineering as a Service</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Modern ELT, dbt, and warehouse modeling, with governance.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Snowflake/BigQuery/Redshift, Lakehouse setups</li>
								<li>• Data quality SLAs and observability</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-indigo-600'>Starting $10k–$40k</span>
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Get estimate →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Server className='h-5 w-5 text-emerald-600' />
								<h3 className='font-semibold text-gray-900'>MLOps Platform Setup</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>CI/CD for models, feature stores, evals, and monitoring.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Vertex/SageMaker/Databricks integrations</li>
								<li>• Reproducible pipelines and governance</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-emerald-600'>Starting $15k–$60k</span>
								<Link href='/contact' className='text-emerald-600 hover:text-emerald-500'>Learn more →</Link>
							</div>
						</div>
						{/* IT & Cloud */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Cloud className='h-5 w-5 text-green-600' />
								<h3 className='font-semibold text-gray-900'>FinOps & Cloud Cost Optimization</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Rightsizing, savings plans, architectural refactors for cost.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Typical 20–45% monthly savings</li>
								<li>• Automated policy enforcement</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-green-600'>Assessments $4k–$12k</span>
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Start now →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Shield className='h-5 w-5 text-purple-600' />
								<h3 className='font-semibold text-gray-900'>SOC-as-a-Service</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Managed detection & response with 24/7 coverage.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• SIEM, EDR, and threat intel</li>
								<li>• Incident playbooks and compliance</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-purple-600'>From $3k/mo</span>
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Request details →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Globe className='h-5 w-5 text-orange-600' />
								<h3 className='font-semibold text-gray-900'>Fractional CTO/Architecture Advisory</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Strategy, roadmap, and architecture leadership on-demand.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Platform modernization & product strategy</li>
								<li>• Vendor selection and governance</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-orange-600'>From $4k/mo</span>
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Book intro →</Link>
							</div>
						</div>
						{/* AI Services - Additional */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Brain className='h-5 w-5 text-violet-600' />
								<h3 className='font-semibold text-gray-900'>AI-Powered Business Intelligence</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Automated insights, predictive analytics, and intelligent reporting.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Natural language query interface</li>
								<li>• Automated anomaly detection and alerts</li>
								<li>• Custom dashboard generation</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-violet-600'>From $399/mo</span>
								<Link href='/contact' className='text-violet-600 hover:text-violet-500'>Schedule demo →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Database className='h-5 w-5 text-cyan-600' />
								<h3 className='font-semibold text-gray-900'>Intelligent Document Processing</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Extract, classify, and process documents with AI accuracy.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• OCR with 99%+ accuracy</li>
								<li>• Automated data extraction and validation</li>
								<li>• Workflow automation and routing</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-cyan-600'>From $299/mo</span>
								<Link href='/contact' className='text-cyan-600 hover:text-cyan-500'>Try free trial →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Zap className='h-5 w-5 text-yellow-600' />
								<h3 className='font-semibold text-gray-900'>AI Test Automation Platform</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Self-healing test scripts and intelligent test case generation.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Visual regression testing with AI</li>
								<li>• Automated test maintenance</li>
								<li>• Cross-browser and device testing</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-yellow-600'>From $199/mo</span>
								<Link href='/contact' className='text-yellow-600 hover:text-yellow-500'>Start testing →</Link>
							</div>
						</div>
						{/* Micro SaaS */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Code className='h-5 w-5 text-rose-600' />
								<h3 className='font-semibold text-gray-900'>AI Content Localization SaaS</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Translate and culturally adapt content at scale.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Multi-market SEO and brand alignment</li>
								<li>• Human-in-the-loop quality controls</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-rose-600'>From $199/mo</span>
								<Link href='/contact' className='text-rose-600 hover:text-rose-500'>Request demo →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<BarChart3 className='h-5 w-5 text-sky-600' />
								<h3 className='font-semibold text-gray-900'>Predictive Maintenance Toolkit</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Out-of-the-box anomaly detection for equipment and IoT.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Sensor ingestion, dashboards, and alerts</li>
								<li>• Edge or cloud deployment options</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-sky-600'>From $299/mo</span>
								<Link href='/contact' className='text-sky-600 hover:text-sky-500'>See live demo →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Lock className='h-5 w-5 text-teal-600' />
								<h3 className='font-semibold text-gray-900'>Compliance Copilot (SOC2/HIPAA/GDPR)</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Automated evidence collection and continuous controls.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Policy templates and auditor-ready reports</li>
								<li>• Ticketing and alerting integrations</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-teal-600'>From $249/mo</span>
								<Link href='/contact' className='text-teal-600 hover:text-teal-500'>Book a walkthrough →</Link>
							</div>
						</div>
						{/* Additional IT Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Server className='h-5 w-5 text-lime-600' />
								<h3 className='font-semibold text-gray-900'>DevOps Automation Platform</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Complete CI/CD pipelines with infrastructure as code.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• GitOps workflows and automated deployments</li>
								<li>• Infrastructure monitoring and alerting</li>
								<li>• Multi-cloud orchestration</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-lime-600'>From $599/mo</span>
								<Link href='/contact' className='text-lime-600 hover:text-lime-500'>Get started →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Globe className='h-5 w-5 text-pink-600' />
								<h3 className='font-semibold text-gray-900'>Digital Transformation Consulting</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>End-to-end modernization strategy and implementation.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Legacy system migration and modernization</li>
								<li>• Cloud-native architecture design</li>
								<li>• Change management and training</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-pink-600'>From $8k–$50k</span>
								<Link href='/contact' className='text-pink-600 hover:text-pink-500'>Schedule consultation →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<BarChart3 className='h-5 w-5 text-amber-600' />
								<h3 className='font-semibold text-gray-900'>Infrastructure Monitoring & Observability</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Real-time monitoring with AI-powered anomaly detection.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Application performance monitoring (APM)</li>
								<li>• Log aggregation and analysis</li>
								<li>• Predictive scaling and optimization</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-amber-600'>From $199/mo</span>
								<Link href='/contact' className='text-amber-600 hover:text-amber-500'>Monitor now →</Link>
							</div>
						</div>
						{/* Additional Micro SaaS */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Users className='h-5 w-5 text-emerald-600' />
								<h3 className='font-semibold text-gray-900'>Smart Project Management Suite</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>AI-powered project tracking with intelligent resource allocation.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Automated task prioritization and scheduling</li>
								<li>• Team performance analytics and insights</li>
								<li>• Integration with popular tools (Slack, Jira, etc.)</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-emerald-600'>From $149/mo</span>
								<Link href='/contact' className='text-emerald-600 hover:text-emerald-500'>Start free trial →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Star className='h-5 w-5 text-indigo-600' />
								<h3 className='font-semibold text-gray-900'>Customer Feedback Intelligence Platform</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>AI-driven sentiment analysis and actionable insights from customer feedback.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Multi-channel feedback aggregation</li>
								<li>• Sentiment analysis and trend identification</li>
								<li>• Automated response recommendations</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-indigo-600'>From $99/mo</span>
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Analyze feedback →</Link>
							</div>
						</div>
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-3'>
								<Zap className='h-5 w-5 text-red-600' />
								<h3 className='font-semibold text-gray-900'>Workflow Automation Engine</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>No-code workflow builder with AI-powered optimization suggestions.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Visual workflow designer with drag-and-drop</li>
								<li>• 500+ pre-built integrations</li>
								<li>• AI-powered efficiency recommendations</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-red-600'>From $79/mo</span>
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Automate workflows →</Link>
							</div>
						</div>
					</div>
					<div className='mt-10 text-center text-sm text-gray-500'>
						Need something custom? Email{' '}
						<a href='mailto:kleber@ziontechgroup.com' className='text-blue-600 hover:text-blue-500'>kleber@ziontechgroup.com</a>{' '}
						or call{' '}
						<a href='tel:+13024640950' className='text-blue-600 hover:text-blue-500'>+1 302 464 0950</a>.
					</div>
				</div>
			</section>
			{/* Process Section */}
			<section className='py-24 sm:py-32 bg-gray-50'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl lg:text-center mb-16'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Our Delivery Process
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							We follow a proven methodology that ensures quality, speed, and successful outcomes.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						<div className='text-center group'>
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4'>
								<span className='text-2xl font-bold text-blue-600'>1</span>
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Discovery</h3>
							<p className='text-gray-600'>Understand your needs and requirements</p>
						</div>
						<div className='text-center group'>
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4'>
								<span className='text-2xl font-bold text-green-600'>2</span>
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Strategy</h3>
							<p className='text-gray-600'>Plan the solution architecture</p>
						</div>
						<div className='text-center group'>
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4'>
								<span className='text-2xl font-bold text-purple-600'>3</span>
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Development</h3>
							<p className='text-gray-600'>Build and test the solution</p>
						</div>
						<div className='text-center group'>
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4'>
								<span className='text-2xl font-bold text-orange-600'>4</span>
							</div>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Deployment</h3>
							<p className='text-gray-600'>Launch and monitor performance</p>
						</div>
					</div>
				</div>
			</section>
			{/* CTA Section */}
			<section className='bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
							Ready to get started?
						</h2>
						<p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100'>
							Let&aposs discuss your project requirements and how we can help you achieve your goals.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<Link
								href='/contact'
								className='group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105'
								aria-label='Contact us to get started'
							>
								Contact Us
								<ArrowRight className='ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform' />
							</Link>
							<Link
								href='/'
								className='text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group'
								aria-label='Back to homepage'
							>
								Back to Home <span aria-hidden='true' className='group-hover:translate-x-1 transition-transform inline-block'>→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)}