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
  Award,
  Eye,
  MessageSquare,
  Bot,
  Link2,
  Wifi,
  Atom,
  Glasses,
  Plug,
  Heart,
  CreditCard,
  ShoppingCart,
  Factory,
  Home,
  GraduationCap,
  Activity,
  Share2,
  Mail,
  Ticket,
  Package,
  Timer
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
						
						{/* Service Category Links */}
						<div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
							<Link href='/ai-services' className='group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300'>
								<div className='flex items-center justify-center mb-4'>
									<Brain className='h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform' />
								</div>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>AI Services</h3>
								<p className='text-gray-600 text-sm mb-4'>Cutting-edge artificial intelligence solutions including machine learning, NLP, and computer vision.</p>
								<div className='text-blue-600 font-semibold group-hover:text-blue-700'>Explore AI Services →</div>
							</Link>
							
							<Link href='/it-services' className='group bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300'>
								<div className='flex items-center justify-center mb-4'>
									<Cloud className='h-12 w-12 text-green-600 group-hover:scale-110 transition-transform' />
								</div>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>IT Services</h3>
								<p className='text-gray-600 text-sm mb-4'>Comprehensive IT solutions including cloud infrastructure, cybersecurity, and network management.</p>
								<div className='text-green-600 font-semibold group-hover:text-green-700'>Explore IT Services →</div>
							</Link>
							
							<Link href='/micro-saas' className='group bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300'>
								<div className='flex items-center justify-center mb-4'>
									<Code className='h-12 w-12 text-orange-600 group-hover:scale-110 transition-transform' />
								</div>
								<h3 className='text-xl font-bold text-gray-900 mb-2'>Micro SaaS</h3>
								<p className='text-gray-600 text-sm mb-4'>Custom software solutions and micro SaaS applications tailored to your business needs.</p>
								<div className='text-orange-600 font-semibold group-hover:text-orange-700'>Explore Micro SaaS →</div>
							</Link>
						</div>
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
			{/* Advanced AI & Emerging Technologies */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-slate-50 to-indigo-50'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-3xl text-center mb-16'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Advanced AI & Emerging Technologies</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Cutting-edge solutions leveraging the latest in artificial intelligence, machine learning, and emerging technologies.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Computer Vision & Image Processing */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Eye className='h-5 w-5 text-blue-600' />
								<h3 className='font-semibold text-gray-900'>Computer Vision Solutions</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Advanced image recognition, object detection, and visual analytics.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Real-time object detection and tracking</li>
								<li>• Medical imaging analysis and diagnosis</li>
								<li>• Quality control and defect detection</li>
								<li>• Facial recognition and biometric systems</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-blue-600'>From $5k–$25k</span>
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Schedule demo →</Link>
							</div>
						</div>
						{/* Natural Language Processing */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<MessageSquare className='h-5 w-5 text-green-600' />
								<h3 className='font-semibold text-gray-900'>Advanced NLP & Language Models</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Custom language models, sentiment analysis, and text generation.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Custom GPT models for specific domains</li>
								<li>• Multi-language translation and localization</li>
								<li>• Automated content generation and summarization</li>
								<li>• Voice-to-text and speech recognition</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-green-600'>From $8k–$30k</span>
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Get started →</Link>
							</div>
						</div>
						{/* Predictive Analytics */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<TrendingUp className='h-5 w-5 text-purple-600' />
								<h3 className='font-semibold text-gray-900'>Predictive Analytics & Forecasting</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Advanced forecasting models for business intelligence and decision making.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Demand forecasting and inventory optimization</li>
								<li>• Financial risk assessment and fraud detection</li>
								<li>• Customer lifetime value prediction</li>
								<li>• Market trend analysis and forecasting</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-purple-600'>From $6k–$20k</span>
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Learn more →</Link>
							</div>
						</div>
						{/* AI Chatbots & Virtual Assistants */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Bot className='h-5 w-5 text-orange-600' />
								<h3 className='font-semibold text-gray-900'>Intelligent Chatbots & Virtual Assistants</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Advanced conversational AI with context awareness and multi-modal capabilities.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Multi-channel deployment (web, mobile, voice)</li>
								<li>• Context-aware conversations and memory</li>
								<li>• Integration with CRM and business systems</li>
								<li>• Voice synthesis and natural speech patterns</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-orange-600'>From $3k–$15k</span>
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Try demo →</Link>
							</div>
						</div>
						{/* Blockchain & Web3 */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Link2 className='h-5 w-5 text-indigo-600' />
								<h3 className='font-semibold text-gray-900'>Blockchain & Web3 Solutions</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Smart contracts, DeFi protocols, and decentralized applications.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Smart contract development and auditing</li>
								<li>• DeFi protocol design and implementation</li>
								<li>• NFT marketplace and tokenization</li>
								<li>• Cross-chain interoperability solutions</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-indigo-600'>From $10k–$50k</span>
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Explore Web3 →</Link>
							</div>
						</div>
						{/* IoT & Edge Computing */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Wifi className='h-5 w-5 text-teal-600' />
								<h3 className='font-semibold text-gray-900'>IoT & Edge Computing Platforms</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Connected device management and real-time edge processing.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Device connectivity and data ingestion</li>
								<li>• Edge AI processing and real-time analytics</li>
								<li>• Industrial IoT monitoring and control</li>
								<li>• Smart city and building automation</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-teal-600'>From $8k–$35k</span>
								<Link href='/contact' className='text-teal-600 hover:text-teal-500'>Connect devices →</Link>
							</div>
						</div>
						{/* Quantum Computing Preparation */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Atom className='h-5 w-5 text-pink-600' />
								<h3 className='font-semibold text-gray-900'>Quantum Computing Readiness</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Prepare your organization for the quantum computing revolution.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Quantum algorithm development and optimization</li>
								<li>• Hybrid classical-quantum system design</li>
								<li>• Quantum security and cryptography</li>
								<li>• Quantum machine learning applications</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-pink-600'>From $15k–$75k</span>
								<Link href='/contact' className='text-pink-600 hover:text-pink-500'>Future-proof now →</Link>
							</div>
						</div>
						{/* AR/VR & Metaverse */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Glasses className='h-5 w-5 text-cyan-600' />
								<h3 className='font-semibold text-gray-900'>AR/VR & Metaverse Solutions</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Immersive experiences and virtual world development.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Virtual reality training and simulations</li>
								<li>• Augmented reality mobile applications</li>
								<li>• Metaverse platform development</li>
								<li>• 3D asset creation and optimization</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-cyan-600'>From $12k–$40k</span>
								<Link href='/contact' className='text-cyan-600 hover:text-cyan-500'>Enter the metaverse →</Link>
							</div>
						</div>
						{/* API Management & Integration */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Plug className='h-5 w-5 text-red-600' />
								<h3 className='font-semibold text-gray-900'>Enterprise API Management</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Comprehensive API lifecycle management and integration platform.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• API gateway and security management</li>
								<li>• Microservices architecture and orchestration</li>
								<li>• Third-party integration and data synchronization</li>
								<li>• API analytics and performance monitoring</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-red-600'>From $5k–$25k</span>
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Integrate systems →</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Industry-Specific Solutions */}
			<section className='py-24 sm:py-32 bg-white'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-3xl text-center mb-16'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Industry-Specific Solutions</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Tailored technology solutions designed for specific industries and use cases.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Healthcare & Life Sciences */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-blue-50 to-indigo-50'>
							<div className='flex items-center gap-3 mb-3'>
								<Heart className='h-5 w-5 text-red-600' />
								<h3 className='font-semibold text-gray-900'>Healthcare & Life Sciences</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>HIPAA-compliant solutions for medical data and patient care.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Electronic Health Records (EHR) integration</li>
								<li>• Medical imaging AI and diagnostics</li>
								<li>• Clinical trial management systems</li>
								<li>• Telemedicine and remote monitoring</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-red-600'>From $15k–$100k</span>
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Healthcare solutions →</Link>
							</div>
						</div>
						{/* Financial Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-green-50 to-emerald-50'>
							<div className='flex items-center gap-3 mb-3'>
								<CreditCard className='h-5 w-5 text-green-600' />
								<h3 className='font-semibold text-gray-900'>Financial Services & FinTech</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Secure, compliant solutions for banking and financial institutions.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Payment processing and digital wallets</li>
								<li>• Fraud detection and risk management</li>
								<li>• Regulatory compliance automation</li>
								<li>• Algorithmic trading platforms</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-green-600'>From $20k–$150k</span>
								<Link href='/contact' className='text-green-600 hover:text-green-500'>FinTech solutions →</Link>
							</div>
						</div>
						{/* E-commerce & Retail */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-orange-50 to-amber-50'>
							<div className='flex items-center gap-3 mb-3'>
								<ShoppingCart className='h-5 w-5 text-orange-600' />
								<h3 className='font-semibold text-gray-900'>E-commerce & Retail</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Omnichannel solutions for modern retail and e-commerce.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Multi-platform marketplace integration</li>
								<li>• Inventory management and demand forecasting</li>
								<li>• Personalization and recommendation engines</li>
								<li>• Supply chain optimization</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-orange-600'>From $10k–$75k</span>
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Retail solutions →</Link>
							</div>
						</div>
						{/* Manufacturing & Industrial */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-gray-50 to-slate-50'>
							<div className='flex items-center gap-3 mb-3'>
								<Factory className='h-5 w-5 text-gray-600' />
								<h3 className='font-semibold text-gray-900'>Manufacturing & Industrial</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Smart manufacturing and industrial automation solutions.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Industrial IoT and sensor networks</li>
								<li>• Predictive maintenance and quality control</li>
								<li>• Supply chain visibility and optimization</li>
								<li>• Digital twin and simulation platforms</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-gray-600'>From $25k–$200k</span>
								<Link href='/contact' className='text-gray-600 hover:text-gray-500'>Industrial solutions →</Link>
							</div>
						</div>
						{/* Real Estate & PropTech */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-purple-50 to-violet-50'>
							<div className='flex items-center gap-3 mb-3'>
								<Home className='h-5 w-5 text-purple-600' />
								<h3 className='font-semibold text-gray-900'>Real Estate & PropTech</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Technology solutions for property management and real estate.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Property management platforms</li>
								<li>• Virtual tours and 3D visualization</li>
								<li>• Smart building automation</li>
								<li>• Real estate analytics and valuation</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-purple-600'>From $8k–$50k</span>
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>PropTech solutions →</Link>
							</div>
						</div>
						{/* Education & EdTech */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-gradient-to-br from-cyan-50 to-blue-50'>
							<div className='flex items-center gap-3 mb-3'>
								<GraduationCap className='h-5 w-5 text-cyan-600' />
								<h3 className='font-semibold text-gray-900'>Education & EdTech</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Digital learning platforms and educational technology solutions.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Learning Management Systems (LMS)</li>
								<li>• Virtual classrooms and remote learning</li>
								<li>• Adaptive learning and AI tutoring</li>
								<li>• Student analytics and assessment tools</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-cyan-600'>From $5k–$40k</span>
								<Link href='/contact' className='text-cyan-600 hover:text-cyan-500'>EdTech solutions →</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Specialized Micro SaaS Solutions */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-indigo-50 to-purple-50'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-3xl text-center mb-16'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Specialized Micro SaaS Solutions</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							Ready-to-deploy SaaS solutions that can be customized for your specific business needs.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{/* Real-time Analytics Dashboard */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Activity className='h-5 w-5 text-blue-600' />
								<h3 className='font-semibold text-gray-900'>Real-time Analytics Dashboard</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Live business intelligence with customizable metrics and alerts.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Real-time data visualization and reporting</li>
								<li>• Custom KPI tracking and goal setting</li>
								<li>• Automated alerts and notifications</li>
								<li>• Multi-source data integration</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-blue-600'>From $199/mo</span>
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>View demo →</Link>
							</div>
						</div>
						{/* Social Media Management Suite */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Share2 className='h-5 w-5 text-pink-600' />
								<h3 className='font-semibold text-gray-900'>Social Media Management Suite</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Comprehensive social media scheduling, analytics, and engagement tools.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Multi-platform content scheduling</li>
								<li>• AI-powered content suggestions</li>
								<li>• Engagement analytics and reporting</li>
								<li>• Influencer collaboration tools</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-pink-600'>From $149/mo</span>
								<Link href='/contact' className='text-pink-600 hover:text-pink-500'>Manage social →</Link>
							</div>
						</div>
						{/* Email Marketing Automation */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Mail className='h-5 w-5 text-green-600' />
								<h3 className='font-semibold text-gray-900'>Email Marketing Automation</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Advanced email campaigns with behavioral triggers and personalization.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Behavioral trigger automation</li>
								<li>• A/B testing and optimization</li>
								<li>• Advanced segmentation and targeting</li>
								<li>• Deliverability monitoring and optimization</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-green-600'>From $99/mo</span>
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Automate emails →</Link>
							</div>
						</div>
						{/* Customer Support Ticketing */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Ticket className='h-5 w-5 text-orange-600' />
								<h3 className='font-semibold text-gray-900'>Customer Support Ticketing</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>AI-powered customer support with intelligent routing and automation.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Intelligent ticket routing and prioritization</li>
								<li>• AI-powered response suggestions</li>
								<li>• Multi-channel support integration</li>
								<li>• Performance analytics and reporting</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-orange-600'>From $129/mo</span>
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Support customers →</Link>
							</div>
						</div>
						{/* Inventory Management System */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Package className='h-5 w-5 text-purple-600' />
								<h3 className='font-semibold text-gray-900'>Smart Inventory Management</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>AI-driven inventory optimization with demand forecasting.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Real-time inventory tracking and alerts</li>
								<li>• Demand forecasting and reorder automation</li>
								<li>• Multi-location inventory management</li>
								<li>• Supplier integration and procurement</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-purple-600'>From $179/mo</span>
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Manage inventory →</Link>
							</div>
						</div>
						{/* Time Tracking & Productivity */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>
							<div className='flex items-center gap-3 mb-3'>
								<Timer className='h-5 w-5 text-indigo-600' />
								<h3 className='font-semibold text-gray-900'>Time Tracking & Productivity</h3>
							</div>
							<p className='text-sm text-gray-600 mb-3'>Advanced time tracking with productivity insights and team management.</p>
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>
								<li>• Automatic time tracking and categorization</li>
								<li>• Productivity analytics and insights</li>
								<li>• Project time allocation and budgeting</li>
								<li>• Team performance monitoring</li>
							</ul>
							<div className='flex items-center justify-between text-sm'>
								<span className='font-semibold text-indigo-600'>From $89/mo</span>
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Track productivity →</Link>
							</div>
						</div>
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