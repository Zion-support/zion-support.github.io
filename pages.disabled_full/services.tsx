main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
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
  Mail,
  Calendar,
  Settings,
  Eye,
  MessageSquare,
  Palette,
  Bot,
  Cpu,
  Link2,
  Wifi,
  HardDrive,
  Monitor,
  Activity,
  Terminal,
  CreditCard,
  Smartphone;
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Services() {;
	const title = 'Services — Zion Tech Group';
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

	return (
		<Layout>;
			<PageTransition>;
			{/* Hero Section */}
			<section className='bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-2xl text-center'>;
						<div className='flex items-center justify-center mb-4'>;
							<Award className='h-6 w-6 text-blue-600 mr-2' />;
							<span className='text-base font-semibold leading-7 text-blue-600'>Our Services</span>;
						</div>;
						<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>;
							Our Services;
						</h1>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.;
						</p>;
			</section>;
			{/* Services Grid */}
			<section className='py-16 sm:py-24'>;
					<div className='grid gap-6 lg:grid-cols-2'>;
						{/* AI Autonomous Systems */}
						<div id='ai' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors'>;
									<Brain className='h-7 w-7 text-white' />;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>AI Autonomous Systems</h2>;
									<p className='text-sm text-blue-600 font-medium'>Intelligent Automation</p>;
							<p className='text-gray-600 mb-6'>;
								Transform your operations with intelligent automation and AI-powered decision making.;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>Sales/CS multi-agent copilots</span>;
								</li>;
									<span className='text-sm text-gray-700'>RAG and workflow orchestration</span>;
									<span className='text-sm text-gray-700'>Observability and guardrails</span>;
									<span className='text-sm text-gray-700'>Intelligent process automation</span>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>2-4 weeks delivery</span>;
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group'
									aria-label='Get started with AI services'>;
									Get started with AI;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
						{/* Cloud Platforms */}
						<div id='cloud' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors'>;
									<Cloud className='h-7 w-7 text-white' />;
									<h2 className='text-xl font-semibold text-gray-900'>Cloud Platforms</h2>;
									<p className='text-sm text-green-600 font-medium'>Scalable Infrastructure</p>;
								Build scalable, resilient cloud infrastructure that grows with your business.;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>Serverless and Kubernetes</span>;
									<span className='text-sm text-gray-700'>Data pipelines and ML ops</span>;
									<span className='text-sm text-gray-700'>FinOps and SRE practices</span>;
									<span className='text-sm text-gray-700'>Multi-cloud architecture</span>;
									<span>4-8 weeks delivery</span>;
									className='inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group'
									aria-label='Get started with cloud services'>;
									Get started with Cloud;
						{/* Cybersecurity */}
						<div id='cybersecurity' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors'>;
									<Shield className='h-7 w-7 text-white' />;
									<h2 className='text-xl font-semibold text-gray-900'>Cybersecurity</h2>;
									<p className='text-sm text-purple-600 font-medium'>Zero-Trust Security</p>;
								Protect your business with enterprise-grade security frameworks and compliance automation.;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Zero-trust architecture</span>;
									<span className='text-sm text-gray-700'>Compliance automation</span>;
									<span className='text-sm text-gray-700'>Incident response</span>;
									<span className='text-sm text-gray-700'>Security audits</span>;
									<span>3-6 weeks delivery</span>;
									className='inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group'
									aria-label='Get started with cybersecurity services'>;
									Get started with Security;
						{/* Micro SaaS */}
						<div id='saas' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors'>;
									<Code className='h-7 w-7 text-white' />;
									<h2 className='text-xl font-semibold text-gray-900'>Micro SaaS</h2>;
									<p className='text-sm text-orange-600 font-medium'>Custom Solutions</p>;
								Custom software solutions tailored to your specific business needs and workflows.;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>Custom web applications</span>;
									<span className='text-sm text-gray-700'>API development</span>;
									<span className='text-sm text-gray-700'>Integration services</span>;
									<span className='text-sm text-gray-700'>Maintenance & support</span>;
									<span>6-12 weeks delivery</span>;
									className='inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group'
									aria-label='Get started with custom software services'>;
									Get started with SaaS;
			{/* Expanded Service Catalog */}
			<section className='py-16 sm:py-24 bg-white'>;
					<div className='mx-auto max-w-4xl text-center mb-14'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Comprehensive Technology Solutions</h2>;
							Zion Tech Group delivers cutting-edge, production-ready services across AI, IT infrastructure, and Micro SaaS platforms. ;
							Our solutions are designed for enterprise scalability with transparent pricing and measurable outcomes. ;
							Explore our full capabilities at{' '}
							<a href='https://ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline font-semibold' target='_blank' rel='noreferrer'>ziontechgroup && ziontechgroup.com</a>.{' '}
							Check our latest additions in the{' '}
							<Link href='/additional-services' className='text-blue-600 hover:text-blue-500 underline font-semibold'>Expanded Services Catalog</Link>.;
						<div className='mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6'>;
							<h3 className='text-lg font-semibold text-blue-900 mb-3'>Ready to Get Started?</h3>;
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
									<p className='text-blue-800 text-sm mb-2'>Contact us for a free consultation:</p>;
									<div className='space-y-1 text-sm'>;
										<p className='text-blue-700'><strong>Phone:</strong> <a href='tel:+13024640950' className='hover:underline'>+1 302 464 0950</a></p>;
										<p className='text-blue-700'><strong>Email:</strong> <a href='mailto:kleber@ziontechgroup && ziontechgroup.com' className='hover:underline'>kleber@ziontechgroup && ziontechgroup.com</a></p>;
									<p className='text-blue-800 text-sm mb-2'>Our office location:</p>;
									<p className='text-blue-700 text-sm'>364 E Main St STE 1008<br />Middletown DE 19709</p>;
						<div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>;
							<div className='bg-blue-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-blue-900 mb-2'>AI & Machine Learning</h3>;
								<p className='text-blue-700'>Advanced AI solutions from computer vision to generative content creation</p>;
							<div className='bg-green-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-green-900 mb-2'>IT Infrastructure</h3>;
								<p className='text-green-700'>Next-gen technologies including edge computing, blockchain, and quantum readiness</p>;
							<div className='bg-purple-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-purple-900 mb-2'>Micro SaaS Platforms</h3>;
								<p className='text-purple-700'>Scalable software solutions from real-time analytics to mobile development</p>;
						<p className='mt-6 text-sm text-gray-500'>;
							Pricing based on market research from leading technology consultancies and enterprise software vendors. ;
							For custom enterprise solutions and volume discounts, see our{' '}
							<Link href='/pricing' className='text-blue-600 hover:text-blue-500 underline'>Enterprise Pricing Guide</Link>.;
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
						{/* AI Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Brain className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Revenue AI Agents (Sales/CS)</h3>;
							<p className='text-sm text-gray-600 mb-3'>Multi-agent copilots for SDR, AM, and Support with guardrails.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li>• Integrates CRM, Helpdesk, and Knowledge Base</li>;
								<li>• Measurable pipeline lift and deflection</li>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>Starting $8k–$25k</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Talk to us →</Link>;
								<Database className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Data Engineering as a Service</h3>;
							<p className='text-sm text-gray-600 mb-3'>Modern ELT, dbt, and warehouse modeling, with governance.</p>;
								<li>• Snowflake/BigQuery/Redshift, Lakehouse setups</li>;
								<li>• Data quality SLAs and observability</li>;
								<span className='font-semibold text-indigo-600'>Starting $10k–$40k</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Get estimate →</Link>;
								<Server className='h-5 w-5 text-emerald-600' />;
								<h3 className='font-semibold text-gray-900'>MLOps Platform Setup</h3>;
							<p className='text-sm text-gray-600 mb-3'>CI/CD for models, feature stores, evals, and monitoring.</p>;
								<li>• Vertex/SageMaker/Databricks integrations</li>;
								<li>• Reproducible pipelines and governance</li>;
								<span className='font-semibold text-emerald-600'>Starting $15k–$60k</span>;
								<Link href='/contact' className='text-emerald-600 hover:text-emerald-500'>Learn more →</Link>;
						{/* IT & Cloud */}
								<Cloud className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>FinOps & Cloud Cost Optimization</h3>;
							<p className='text-sm text-gray-600 mb-3'>Rightsizing, savings plans, architectural refactors for cost.</p>;
								<li>• Typical 20–45% monthly savings</li>;
								<li>• Automated policy enforcement</li>;
								<span className='font-semibold text-green-600'>Assessments $4k–$12k</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Start now →</Link>;
								<Shield className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>SOC-as-a-Service</h3>;
							<p className='text-sm text-gray-600 mb-3'>Managed detection & response with 24/7 coverage.</p>;
								<li>• SIEM, EDR, and threat intel</li>;
								<li>• Incident playbooks and compliance</li>;
								<span className='font-semibold text-purple-600'>From $3k/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Request details →</Link>;
								<Globe className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Fractional CTO/Architecture Advisory</h3>;
							<p className='text-sm text-gray-600 mb-3'>Strategy, roadmap, and architecture leadership on-demand.</p>;
								<li>• Platform modernization & product strategy</li>;
								<li>• Vendor selection and governance</li>;
								<span className='font-semibold text-orange-600'>From $4k/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Book intro →</Link>;
						{/* AI Services - Additional */}
								<Brain className='h-5 w-5 text-violet-600' />;
								<h3 className='font-semibold text-gray-900'>AI-Powered Business Intelligence</h3>;
							<p className='text-sm text-gray-600 mb-3'>Automated insights, predictive analytics, and intelligent reporting.</p>;
								<li>• Natural language query interface</li>;
								<li>• Automated anomaly detection and alerts</li>;
								<li>• Custom dashboard generation</li>;
								<span className='font-semibold text-violet-600'>From $399/mo</span>;
								<Link href='/contact' className='text-violet-600 hover:text-violet-500'>Schedule demo →</Link>;
								<Database className='h-5 w-5 text-cyan-600' />;
								<h3 className='font-semibold text-gray-900'>Intelligent Document Processing</h3>;
							<p className='text-sm text-gray-600 mb-3'>Extract, classify, and process documents with AI accuracy.</p>;
								<li>• OCR with 99%+ accuracy</li>;
								<li>• Automated data extraction and validation</li>;
								<li>• Workflow automation and routing</li>;
								<span className='font-semibold text-cyan-600'>From $299/mo</span>;
								<Link href='/contact' className='text-cyan-600 hover:text-cyan-500'>Try free trial →</Link>;
								<Zap className='h-5 w-5 text-yellow-600' />;
								<h3 className='font-semibold text-gray-900'>AI Test Automation Platform</h3>;
							<p className='text-sm text-gray-600 mb-3'>Self-healing test scripts and intelligent test case generation.</p>;
								<li>• Visual regression testing with AI</li>;
								<li>• Automated test maintenance</li>;
								<li>• Cross-browser and device testing</li>;
								<span className='font-semibold text-yellow-600'>From $199/mo</span>;
								<Link href='/contact' className='text-yellow-600 hover:text-yellow-500'>Start testing →</Link>;
								<Code className='h-5 w-5 text-rose-600' />;
								<h3 className='font-semibold text-gray-900'>AI Content Localization SaaS</h3>;
							<p className='text-sm text-gray-600 mb-3'>Translate and culturally adapt content at scale.</p>;
								<li>• Multi-market SEO and brand alignment</li>;
								<li>• Human-in-the-loop quality controls</li>;
								<span className='font-semibold text-rose-600'>From $199/mo</span>;
								<Link href='/contact' className='text-rose-600 hover:text-rose-500'>Request demo →</Link>;
								<BarChart3 className='h-5 w-5 text-sky-600' />;
								<h3 className='font-semibold text-gray-900'>Predictive Maintenance Toolkit</h3>;
							<p className='text-sm text-gray-600 mb-3'>Out-of-the-box anomaly detection for equipment and IoT.</p>;
								<li>• Sensor ingestion, dashboards, and alerts</li>;
								<li>• Edge or cloud deployment options</li>;
								<span className='font-semibold text-sky-600'>From $299/mo</span>;
								<Link href='/contact' className='text-sky-600 hover:text-sky-500'>See live demo →</Link>;
								<Lock className='h-5 w-5 text-teal-600' />;
								<h3 className='font-semibold text-gray-900'>Compliance Copilot (SOC2/HIPAA/GDPR)</h3>;
							<p className='text-sm text-gray-600 mb-3'>Automated evidence collection and continuous controls.</p>;
								<li>• Policy templates and auditor-ready reports</li>;
								<li>• Ticketing and alerting integrations</li>;
								<span className='font-semibold text-teal-600'>From $249/mo</span>;
								<Link href='/contact' className='text-teal-600 hover:text-teal-500'>Book a walkthrough →</Link>;
						{/* Additional IT Services */}
								<Server className='h-5 w-5 text-lime-600' />;
								<h3 className='font-semibold text-gray-900'>DevOps Automation Platform</h3>;
							<p className='text-sm text-gray-600 mb-3'>Complete CI/CD pipelines with infrastructure as code.</p>;
								<li>• GitOps workflows and automated deployments</li>;
								<li>• Infrastructure monitoring and alerting</li>;
								<li>• Multi-cloud orchestration</li>;
								<span className='font-semibold text-lime-600'>From $599/mo</span>;
								<Link href='/contact' className='text-lime-600 hover:text-lime-500'>Get started →</Link>;
								<Globe className='h-5 w-5 text-pink-600' />;
								<h3 className='font-semibold text-gray-900'>Digital Transformation Consulting</h3>;
							<p className='text-sm text-gray-600 mb-3'>End-to-end modernization strategy and implementation.</p>;
								<li>• Legacy system migration and modernization</li>;
								<li>• Cloud-native architecture design</li>;
								<li>• Change management and training</li>;
								<span className='font-semibold text-pink-600'>From $8k–$50k</span>;
								<Link href='/contact' className='text-pink-600 hover:text-pink-500'>Schedule consultation →</Link>;
								<BarChart3 className='h-5 w-5 text-amber-600' />;
								<h3 className='font-semibold text-gray-900'>Infrastructure Monitoring & Observability</h3>;
							<p className='text-sm text-gray-600 mb-3'>Real-time monitoring with AI-powered anomaly detection.</p>;
								<li>• Application performance monitoring (APM)</li>;
								<li>• Log aggregation and analysis</li>;
								<li>• Predictive scaling and optimization</li>;
								<span className='font-semibold text-amber-600'>From $199/mo</span>;
								<Link href='/contact' className='text-amber-600 hover:text-amber-500'>Monitor now →</Link>;
						{/* Advanced AI Services */}
								<Eye className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Computer Vision & Image Recognition</h3>;
							<p className='text-sm text-gray-600 mb-3'>Advanced image analysis, object detection, and visual content understanding.</p>;
								<li>• Real-time object detection and classification</li>;
								<li>• Facial recognition and biometric authentication</li>;
								<li>• Medical imaging analysis and diagnostics</li>;
								<li>• Quality control and defect detection</li>;
								<span className='font-semibold text-blue-600'>From $2,500/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Schedule demo →</Link>;
								<MessageSquare className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Natural Language Processing (NLP) Platform</h3>;
							<p className='text-sm text-gray-600 mb-3'>Advanced text analysis, sentiment detection, and language understanding.</p>;
								<li>• Multi-language text classification and extraction</li>;
								<li>• Sentiment analysis and emotion detection</li>;
								<li>• Named entity recognition and knowledge graphs</li>;
								<li>• Automated content moderation and filtering</li>;
								<span className='font-semibold text-green-600'>From $1,800/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Try API →</Link>;
								<Palette className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Generative AI Content Studio</h3>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered content creation for text, images, videos, and audio.</p>;
								<li>• Custom GPT models for brand-specific content</li>;
								<li>• AI image generation and video synthesis</li>;
								<li>• Voice cloning and audio generation</li>;
								<li>• Multi-modal content orchestration</li>;
								<span className='font-semibold text-purple-600'>From $3,200/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Create content →</Link>;
								<Bot className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Conversational AI & Chatbots</h3>;
							<p className='text-sm text-gray-600 mb-3'>Intelligent conversational agents with advanced reasoning capabilities.</p>;
								<li>• Multi-turn conversation management</li>;
								<li>• Context-aware response generation</li>;
								<li>• Integration with business systems and APIs</li>;
								<li>• Voice and text conversation support</li>;
								<span className='font-semibold text-orange-600'>From $1,200/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Build chatbot →</Link>;
								<TrendingUp className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Predictive Analytics & Forecasting</h3>;
							<p className='text-sm text-gray-600 mb-3'>Advanced machine learning models for business forecasting and trend analysis.</p>;
								<li>• Time series forecasting and anomaly detection</li>;
								<li>• Customer lifetime value prediction</li>;
								<li>• Demand forecasting and inventory optimization</li>;
								<li>• Risk assessment and fraud detection</li>;
								<span className='font-semibold text-red-600'>From $2,800/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Predict trends →</Link>;
								<Users className='h-5 w-5 text-emerald-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Project Management Suite</h3>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered project tracking with intelligent resource allocation.</p>;
								<li>• Automated task prioritization and scheduling</li>;
								<li>• Team performance analytics and insights</li>;
								<li>• Integration with popular tools (Slack, Jira, etc.)</li>;
								<span className='font-semibold text-emerald-600'>From $149/mo</span>;
								<Link href='/contact' className='text-emerald-600 hover:text-emerald-500'>Start free trial →</Link>;
						{/* Advanced IT Services */}
								<Cpu className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Edge Computing & IoT Solutions</h3>;
							<p className='text-sm text-gray-600 mb-3'>Distributed computing infrastructure for real-time data processing and IoT management.</p>;
								<li>• Edge server deployment and management</li>;
								<li>• IoT device connectivity and data collection</li>;
								<li>• Real-time analytics and decision making</li>;
								<li>• Low-latency application deployment</li>;
								<span className='font-semibold text-blue-600'>From $4,500/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Deploy edge →</Link>;
								<Link2 className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Blockchain & Web3 Solutions</h3>;
							<p className='text-sm text-gray-600 mb-3'>Decentralized applications, smart contracts, and blockchain infrastructure.</p>;
								<li>• Smart contract development and auditing</li>;
								<li>• DeFi protocol integration and development</li>;
								<li>• NFT marketplace and tokenization</li>;
								<li>• Cross-chain interoperability solutions</li>;
								<span className='font-semibold text-green-600'>From $8,000/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Build Web3 →</Link>;
								<Wifi className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>5G & Network Infrastructure</h3>;
							<p className='text-sm text-gray-600 mb-3'>Next-generation network infrastructure and connectivity solutions.</p>;
								<li>• 5G network planning and optimization</li>;
								<li>• Software-defined networking (SDN)</li>;
								<li>• Network function virtualization(): any (NFV)</li>;
								<li>• Private 5G network deployment</li>;
								<span className='font-semibold text-purple-600'>From $12,000/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Upgrade network →</Link>;
								<HardDrive className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Quantum Computing Readiness</h3>;
							<p className='text-sm text-gray-600 mb-3'>Prepare your infrastructure for quantum computing and post-quantum cryptography.</p>;
								<li>• Quantum algorithm development and testing</li>;
								<li>• Post-quantum cryptography implementation</li>;
								<li>• Quantum simulation and optimization</li>;
								<li>• Hybrid classical-quantum workflows</li>;
								<span className='font-semibold text-orange-600'>From $15,000/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Go quantum →</Link>;
								<Monitor className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Extended Reality (XR) Solutions</h3>;
							<p className='text-sm text-gray-600 mb-3'>Virtual, augmented, and mixed reality applications for enterprise and consumer use.</p>;
								<li>• VR/AR application development</li>;
								<li>• 3D modeling and spatial computing</li>;
								<li>• Metaverse platform development</li>;
								<li>• XR training and simulation systems</li>;
								<span className='font-semibold text-red-600'>From $6,500/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Enter XR →</Link>;
								<Star className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Customer Feedback Intelligence Platform</h3>;
							<p className='text-sm text-gray-600 mb-3'>AI-driven sentiment analysis and actionable insights from customer feedback.</p>;
								<li>• Multi-channel feedback aggregation</li>;
								<li>• Sentiment analysis and trend identification</li>;
								<li>• Automated response recommendations</li>;
								<span className='font-semibold text-indigo-600'>From $99/mo</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Analyze feedback →</Link>;
						{/* Innovative Micro SaaS Services */}
								<Activity className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Real-Time Analytics Dashboard</h3>;
							<p className='text-sm text-gray-600 mb-3'>Live business intelligence with instant insights and predictive alerts.</p>;
								<li>• Real-time data streaming and visualization</li>;
								<li>• Custom KPI tracking and alerting</li>;
								<li>• Multi-source data integration</li>;
								<li>• Mobile-responsive dashboards</li>;
								<span className='font-semibold text-blue-600'>From $299/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>View demo →</Link>;
								<Settings className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>API Management & Gateway</h3>;
							<p className='text-sm text-gray-600 mb-3'>Enterprise-grade API management with security, monitoring, and monetization.</p>;
								<li>• API gateway with rate limiting and authentication</li>;
								<li>• Developer portal and documentation</li>;
								<li>• Usage analytics and billing management</li>;
								<li>• API versioning and lifecycle management</li>;
								<span className='font-semibold text-green-600'>From $499/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Manage APIs →</Link>;
								<Terminal className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Developer Tools & IDE Extensions</h3>;
							<p className='text-sm text-gray-600 mb-3'>Productivity tools and extensions for modern development workflows.</p>;
								<li>• VS Code extensions and plugins</li>;
								<li>• Code quality and security scanning</li>;
								<li>• Automated testing and deployment tools</li>;
								<li>• Team collaboration and code review tools</li>;
								<span className='font-semibold text-purple-600'>From $199/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Boost productivity →</Link>;
								<CreditCard className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Fintech & Payment Solutions</h3>;
							<p className='text-sm text-gray-600 mb-3'>Secure payment processing and financial technology integrations.</p>;
								<li>• Multi-currency payment processing</li>;
								<li>• Cryptocurrency payment integration</li>;
								<li>• Fraud detection and risk management</li>;
								<li>• Financial reporting and compliance tools</li>;
								<span className='font-semibold text-orange-600'>From $799/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Process payments →</Link>;
								<Smartphone className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Mobile App Development Platform</h3>;
							<p className='text-sm text-gray-600 mb-3'>Cross-platform mobile app development with native performance.</p>;
								<li>• React Native and Flutter development</li>;
								<li>• Progressive Web App (PWA) creation</li>;
								<li>• App store optimization and deployment</li>;
								<li>• Push notifications and analytics</li>;
								<span className='font-semibold text-red-600'>From $1,299/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Build apps →</Link>;
								<Zap className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Workflow Automation Engine</h3>;
							<p className='text-sm text-gray-600 mb-3'>No-code workflow builder with AI-powered optimization suggestions.</p>;
								<li>• Visual workflow designer with drag-and-drop</li>;
								<li>• 500+ pre-built integrations</li>;
								<li>• AI-powered efficiency recommendations</li>;
								<span className='font-semibold text-red-600'>From $79/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Automate workflows →</Link>;
					<div className='mt-10 text-center text-sm text-gray-500'>;
						Need something custom? Visit our website at{' '}
						<a href='https://ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline' target='_blank' rel='noreferrer'>ziontechgroup && ziontechgroup.com</a>{' '}
						or contact us directly: Email{' '}
						<a href='mailto:kleber@ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500'>kleber@ziontechgroup && ziontechgroup.com</a>{' '}
						| Phone{' '}
						<a href='tel:+13024640950' className='text-blue-600 hover:text-blue-500'>+1 302 464 0950</a>{' '}
						| Address: 364 E Main St STE 1008, Middletown DE 19709;
			{/* New Innovative Services Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50'>;
					<div className='mx-auto max-w-3xl text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Innovative AI & Automation Services</h2>;
							Cutting-edge AI solutions and automation tools that transform how businesses operate. ;
							Visit <a href='https://ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline' target='_blank' rel='noreferrer'>ziontechgroup && ziontechgroup.com</a> for live demos.;
						{/* AI Content Creation Tools */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
								<h3 className='font-semibold text-gray-900'>AI Content Creation Suite</h3>;
							<p className='text-sm text-gray-600 mb-3'>Generate high-quality content at scale with AI-powered writing tools.</p>;
								<li>• Blog posts, articles, and marketing copy</li>;
								<li>• SEO-optimized content with keyword research</li>;
								<li>• Multi-language support and brand voice consistency</li>;
								<li>• Content calendar and publishing automation</li>;
								<span className='font-semibold text-blue-600'>From $199/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Start free trial →</Link>;
						{/* Email Automation Platform */}
								<Mail className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Email Automation</h3>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered email campaigns with personalized content and optimal send times.</p>;
								<li>• Behavioral trigger automation</li>;
								<li>• A/B testing and performance optimization</li>;
								<li>• Lead scoring and segmentation</li>;
								<li>• Integration with CRM and marketing tools</li>;
								<span className='font-semibold text-green-600'>From $149/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Automate now →</Link>;
						{/* AI Email Responder */}
								<Zap className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>AI Email Assistant</h3>;
							<p className='text-sm text-gray-600 mb-3'>Intelligent email management with smart responses and priority detection.</p>;
								<li>• Auto-respond to common inquiries</li>;
								<li>• Priority flagging and urgent email alerts</li>;
								<li>• Sentiment analysis and response suggestions</li>;
								<li>• Calendar integration and meeting scheduling</li>;
								<span className='font-semibold text-purple-600'>From $99/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Try demo →</Link>;
						{/* Customer Support Platform */}
								<Users className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>AI Customer Support Hub</h3>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive support platform with AI chatbots and ticket management.</p>;
								<li>• 24/7 AI chatbot with human handoff</li>;
								<li>• Multi-channel support (chat, email, phone)</li>;
								<li>• Knowledge base and FAQ automation</li>;
								<li>• Customer satisfaction tracking</li>;
								<span className='font-semibold text-orange-600'>From $299/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Setup support →</Link>;
						{/* Event Management Dashboard */}
								<Calendar className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Event Management</h3>;
							<p className='text-sm text-gray-600 mb-3'>Complete event planning and management with AI-powered insights.</p>;
								<li>• Event registration and ticketing</li>;
								<li>• Automated email campaigns and reminders</li>;
								<li>• Real-time analytics and attendee insights</li>;
								<li>• Integration with payment and marketing tools</li>;
								<span className='font-semibold text-red-600'>From $179/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Plan events →</Link>;
						{/* Workflow Automation Engine */}
								<Settings className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Business Process Automation</h3>;
							<p className='text-sm text-gray-600 mb-3'>No-code workflow automation with AI optimization recommendations.</p>;
								<li>• Visual workflow designer</li>;
								<li>• AI-powered efficiency suggestions</li>;
								<li>• Performance monitoring and optimization</li>;
								<span className='font-semibold text-indigo-600'>From $79/mo</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Automate workflows →</Link>;
					<div className='mt-12 text-center'>;
						<p className='text-sm text-gray-600 mb-4'>;
							All services include 30-day free trial, setup assistance, and 24/7 support.;
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
								className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'>;
								Get Started Today;
								<ArrowRight className='ml-2 h-4 w-4' />;
								href='https://ziontechgroup && ziontechgroup.com'
								target='_blank'
								rel='noreferrer'
								className='inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors'>;
								Visit Live Demo;
								<Globe className='ml-2 h-4 w-4' />;
			{/* Advanced IT Services Section */}
			<section className='py-24 sm:py-32 bg-white'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Advanced IT & Infrastructure Services</h2>;
							Enterprise-grade IT solutions and infrastructure management services. ;
							Professional implementation with 99 && 99.9% uptime guarantee.;
						{/* DevOps Automation Platform */}
								<Server className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>DevOps Automation Suite</h3>;
							<p className='text-sm text-gray-600 mb-3'>Complete CI/CD pipelines with infrastructure as code and automated deployments.</p>;
								<li>• Multi-cloud orchestration (AWS, Azure, GCP)</li>;
								<li>• Security scanning and compliance automation</li>;
								<span className='font-semibold text-blue-600'>From $599/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Get started →</Link>;
						{/* Infrastructure Monitoring */}
								<BarChart3 className='h-5 w-5 text-green-600' />;
							<p className='text-sm text-gray-600 mb-3'>Real-time monitoring with AI-powered anomaly detection and predictive scaling.</p>;
								<li>• Custom dashboards and alerting</li>;
								<span className='font-semibold text-green-600'>From $199/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Monitor now →</Link>;
						{/* API Management */}
								<Globe className='h-5 w-5 text-purple-600' />;
							<p className='text-sm text-gray-600 mb-3'>Enterprise API gateway with rate limiting, authentication, and analytics.</p>;
								<li>• Rate limiting and throttling</li>;
								<li>• OAuth 2 && 2.0 and JWT authentication</li>;
								<li>• API analytics and usage insights</li>;
								<span className='font-semibold text-purple-600'>From $299/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Manage APIs →</Link>;
						{/* Database Optimization */}
								<Database className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Database Performance Optimization</h3>;
							<p className='text-sm text-gray-600 mb-3'>Database tuning, optimization, and migration services for peak performance.</p>;
								<li>• Query optimization and indexing</li>;
								<li>• Database migration and scaling</li>;
								<li>• Backup and disaster recovery</li>;
								<li>• Performance monitoring and tuning</li>;
								<span className='font-semibold text-orange-600'>From $399/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Optimize DB →</Link>;
						{/* Security Assessment */}
								<Shield className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Security Assessment & Penetration Testing</h3>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive security audits and penetration testing for applications and infrastructure.</p>;
								<li>• Web application security testing</li>;
								<li>• Network penetration testing</li>;
								<li>• Vulnerability assessment and remediation</li>;
								<li>• Compliance audits (SOC2, HIPAA, GDPR)</li>;
								<span className='font-semibold text-red-600'>From $2,500/project</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Secure now →</Link>;
						{/* Cloud Migration */}
								<Cloud className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Cloud Migration & Modernization</h3>;
							<p className='text-sm text-gray-600 mb-3'>Seamless migration to cloud platforms with modernization and optimization.</p>;
								<li>• Lift-and-shift and re-platforming</li>;
								<li>• Containerization and microservices</li>;
								<li>• Cost optimization and FinOps</li>;
								<li>• Training and knowledge transfer</li>;
								<span className='font-semibold text-indigo-600'>From $15k–$100k</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Migrate to cloud →</Link>;
							All IT services include 24/7 monitoring, regular maintenance, and expert support.;
								className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors'>;
								Get IT Consultation;
								View Case Studies;
			{/* Micro SaaS Solutions Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-purple-50 to-pink-50'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Micro SaaS Solutions</h2>;
							Specialized software solutions designed to solve specific business challenges. ;
							Ready-to-deploy tools with customizable features and integrations.;
						{/* Project Management Suite */}
								<Users className='h-5 w-5 text-blue-600' />;
							<p className='text-sm text-gray-600 mb-3'>AI-powered project tracking with intelligent resource allocation and team collaboration.</p>;
								<li>• Real-time collaboration and communication</li>;
								<span className='font-semibold text-blue-600'>From $149/mo</span>;
						{/* Analytics Platform */}
								<h3 className='font-semibold text-gray-900'>Business Analytics Dashboard</h3>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive analytics platform with customizable dashboards and automated reporting.</p>;
								<li>• Real-time data visualization and insights</li>;
								<li>• Automated report generation and scheduling</li>;
								<li>• Custom KPI tracking and alerts</li>;
								<li>• Data integration from multiple sources</li>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Analyze data →</Link>;
						{/* Customer Feedback Platform */}
								<Star className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Customer Feedback Intelligence</h3>;
							<p className='text-sm text-gray-600 mb-3'>AI-driven sentiment analysis and actionable insights from customer feedback across channels.</p>;
								<li>• Customer satisfaction tracking and NPS</li>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Analyze feedback →</Link>;
						{/* Inventory Management */}
								<h3 className='font-semibold text-gray-900'>Smart Inventory Management</h3>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered inventory tracking with predictive analytics and automated reordering.</p>;
								<li>• Real-time inventory tracking and alerts</li>;
								<li>• Predictive analytics for demand forecasting</li>;
								<li>• Automated reorder points and purchase orders</li>;
								<li>• Multi-location and warehouse management</li>;
								<span className='font-semibold text-orange-600'>From $179/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Manage inventory →</Link>;
						{/* HR Management System */}
								<Users className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>HR Management Platform</h3>;
							<p className='text-sm text-gray-600 mb-3'>Complete HR solution with employee management, payroll, and performance tracking.</p>;
								<li>• Employee onboarding and offboarding</li>;
								<li>• Time tracking and attendance management</li>;
								<li>• Performance reviews and goal setting</li>;
								<li>• Payroll integration and benefits management</li>;
								<span className='font-semibold text-red-600'>From $249/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Manage HR →</Link>;
						{/* Financial Management */}
								<TrendingUp className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Financial Management Suite</h3>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive financial tracking with invoicing, expense management, and reporting.</p>;
								<li>• Automated invoicing and payment tracking</li>;
								<li>• Expense management and receipt scanning</li>;
								<li>• Financial reporting and tax preparation</li>;
								<li>• Integration with accounting software</li>;
								<span className='font-semibold text-indigo-600'>From $199/mo</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Manage finances →</Link>;
							All Micro SaaS solutions include free setup, training, and 30-day money-back guarantee.;
								className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors'>;
								Get Custom Solution;
								View Live Demos;
			{/* Process Section */}
			<section className='py-24 sm:py-32 bg-gray-50'>;
					<div className='mx-auto max-w-2xl lg:text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>;
							Our Delivery Process;
						</h2>;
							We follow a proven methodology that ensures quality, speed, and successful outcomes.;
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>;
						<div className='text-center group'>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-blue-600'>1</span>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Discovery</h3>;
							<p className='text-gray-600'>Understand your needs and requirements</p>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-green-600'>2</span>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Strategy</h3>;
							<p className='text-gray-600'>Plan the solution architecture</p>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-purple-600'>3</span>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Development</h3>;
							<p className='text-gray-600'>Build and test the solution</p>;
							<div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4'>;
								<span className='text-2xl font-bold text-orange-600'>4</span>;
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>Deployment</h3>;
							<p className='text-gray-600'>Launch and monitor performance</p>;
			{/* Pricing & Market Positioning Section */}
					<div className='mx-auto max-w-2xl text-center mb-16'>;
							Competitive Pricing & Market Leadership;
							Our pricing reflects the true value of cutting-edge technology solutions, with transparent costs and exceptional ROI.;

					{/* Pricing Tiers */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16'>;
						<div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300'>;
							<div className='text-center mb-6'>;
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>Micro SaaS Solutions</h3>;
								<div className='text-3xl font-bold text-blue-600 mb-2'>$300 - $8,000</div>;
								<div className='text-sm text-gray-500'>per month</div>;
								<li className='flex items-center text-sm text-gray-600'>;
									<CheckCircle className='h-4 w-4 text-green-500 mr-2 flex-shrink-0' />;
									Rapid deployment (1-8 weeks);
									Industry-specific solutions;
									AI-powered automation;
									Scalable architecture;
							<div className='text-center'>;
								<div className='text-xs text-gray-500 mb-2'>Market Average: $1,200 - $15,000/month</div>;
								<div className='text-sm font-medium text-green-600'>Save up to 60%</div>;

						<div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300 ring-2 ring-blue-500'>;
								<div className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2'>;
									Most Popular;
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>AI Services</h3>;
								<div className='text-3xl font-bold text-blue-600 mb-2'>$1,500 - $75,000</div>;
									Cutting-edge AI technology;
									Custom model development;
									Real-time processing;
									Advanced analytics;
								<div className='text-xs text-gray-500 mb-2'>Market Average: $5,000 - $100,000/month</div>;
								<div className='text-sm font-medium text-green-600'>Save up to 40%</div>;

								<h3 className='text-xl font-semibold text-gray-900 mb-2'>IT Services</h3>;
								<div className='text-3xl font-bold text-blue-600 mb-2'>$4,000 - $150,000</div>;
									Enterprise-grade solutions;
									24/7 support & monitoring;
									Advanced security;
									Scalable infrastructure;
								<div className='text-xs text-gray-500 mb-2'>Market Average: $8,000 - $200,000/month</div>;
								<div className='text-sm font-medium text-green-600'>Save up to 50%</div>;

					{/* Market Positioning */}
					<div className='bg-white rounded-2xl border border-gray-200 p-8 shadow-sm'>;
						<div className='text-center mb-8'>;
							<h3 className='text-2xl font-bold text-gray-900 mb-4'>Why Choose Zion Tech Group?</h3>;
							<p className='text-lg text-gray-600 max-w-3xl mx-auto'>;
								We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.;

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4'>;
									<Award className='h-6 w-6 text-blue-600' />;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Industry Leaders</h4>;
								<p className='text-sm text-gray-600'>500+ successful projects across diverse industries</p>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4'>;
									<Zap className='h-6 w-6 text-green-600' />;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Rapid Delivery</h4>;
								<p className='text-sm text-gray-600'>50% faster deployment than industry average</p>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4'>;
									<Shield className='h-6 w-6 text-purple-600' />;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Enterprise Security</h4>;
								<p className='text-sm text-gray-600'>99 && 99.9% uptime with enterprise-grade security</p>;
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4'>;
									<TrendingUp className='h-6 w-6 text-orange-600' />;
								<h4 className='text-lg font-semibold text-gray-900 mb-2'>Proven ROI</h4>;
								<p className='text-sm text-gray-600'>Average 300% ROI within first year</p>;

			{/* CTA Section */}

			<section className='bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm: py-32'>;
						<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>;
							Ready to get started?;
						<p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100'>;
							Let&aposs discuss your project requirements and how we can help you achieve your goals.;
						<div className='mt-10 flex items-center justify-center gap-x-6'>;

								className='group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105'
								aria-label='Contact us to get started'>;
								Contact Us;
								<ArrowRight className='ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform' />;
								href='/'
								className='text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group'
								aria-label='Back to homepage'
							>
								Back to Home <span aria-hidden='true' className='group-hover:translate-x-1 transition-transform inline-block'>→</span>
							</Link>
						</div>
			</section>
		</PageTransition>
		</Layout>
	);
}
origin/chore/merge-open-prs
