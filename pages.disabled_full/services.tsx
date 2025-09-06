
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
					</div>;
				</div>;
			</section>;
			{/* Services Grid */}
			<section className='py-16 sm:py-24'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='grid gap-6 lg:grid-cols-2'>;
						{/* AI Autonomous Systems */}
						<div id='ai' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors'>;
									<Brain className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>AI Autonomous Systems</h2>;
									<p className='text-sm text-blue-600 font-medium'>Intelligent Automation</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Transform your operations with intelligent automation and AI-powered decision making.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>Sales/CS multi-agent copilots</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>RAG and workflow orchestration</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>Observability and guardrails</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-blue-600' />;
									<span className='text-sm text-gray-700'>Intelligent process automation</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>2-4 weeks delivery</span>;
								</div>;
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group'
									aria-label='Get started with AI services'>;
									Get started with AI;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
						{/* Cloud Platforms */}
						<div id='cloud' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors'>;
									<Cloud className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>Cloud Platforms</h2>;
									<p className='text-sm text-green-600 font-medium'>Scalable Infrastructure</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Build scalable, resilient cloud infrastructure that grows with your business.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>Serverless and Kubernetes</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>Data pipelines and ML ops</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>FinOps and SRE practices</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-green-600' />;
									<span className='text-sm text-gray-700'>Multi-cloud architecture</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>4-8 weeks delivery</span>;
								</div>;
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group'
									aria-label='Get started with cloud services'>;
									Get started with Cloud;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
						{/* Cybersecurity */}
						<div id='cybersecurity' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors'>;
									<Shield className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>Cybersecurity</h2>;
									<p className='text-sm text-purple-600 font-medium'>Zero-Trust Security</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Protect your business with enterprise-grade security frameworks and compliance automation.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Zero-trust architecture</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Compliance automation</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Incident response</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;
									<span className='text-sm text-gray-700'>Security audits</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>3-6 weeks delivery</span>;
								</div>;
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group'
									aria-label='Get started with cybersecurity services'>;
									Get started with Security;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
						{/* Micro SaaS */}
						<div id='saas' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors'>;
									<Code className='h-7 w-7 text-white' />;
								</div>;
								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>Micro SaaS</h2>;
									<p className='text-sm text-orange-600 font-medium'>Custom Solutions</p>;
								</div>;
							</div>;
							<p className='text-gray-600 mb-6'>;
								Custom software solutions tailored to your specific business needs and workflows.;
							</p>;
							<ul className='space-y-3 mb-6'>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>Custom web applications</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>API development</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>Integration services</span>;
								</li>;
								<li className='flex items-center gap-x-3'>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;
									<span className='text-sm text-gray-700'>Maintenance & support</span>;
								</li>;
							</ul>;
							<div className='flex items-center justify-between'>;
								<div className='flex items-center space-x-2 text-sm text-gray-500'>;
									<Clock className='h-4 w-4' />;
									<span>6-12 weeks delivery</span>;
								</div>;
								<Link
									href='/contact'
									className='inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group'
									aria-label='Get started with custom software services'>;
									Get started with SaaS;
									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;
								</Link>;
							</div>;
						</div>;
					</div>;
				</div>;
			</section>;
			{/* Expanded Service Catalog */}
			<section className='py-16 sm:py-24 bg-white'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-4xl text-center mb-14'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Comprehensive Technology Solutions</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							Zion Tech Group delivers cutting-edge, production-ready services across AI, IT infrastructure, and Micro SaaS platforms. ;
							Our solutions are designed for enterprise scalability with transparent pricing and measurable outcomes. ;
							Explore our full capabilities at{' '}
							<a href='https://ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline font-semibold' target='_blank' rel='noreferrer'>ziontechgroup && ziontechgroup.com</a>.{' '}
							Check our latest additions in the{' '}
							<Link href='/additional-services' className='text-blue-600 hover:text-blue-500 underline font-semibold'>Expanded Services Catalog</Link>.;
						</p>;
						<div className='mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6'>;
							<h3 className='text-lg font-semibold text-blue-900 mb-3'>Ready to Get Started?</h3>;
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
								<div>;
									<p className='text-blue-800 text-sm mb-2'>Contact us for a free consultation:</p>;
									<div className='space-y-1 text-sm'>;
										<p className='text-blue-700'><strong>Phone:</strong> <a href='tel:+13024640950' className='hover:underline'>+1 302 464 0950</a></p>;
										<p className='text-blue-700'><strong>Email:</strong> <a href='mailto:kleber@ziontechgroup && ziontechgroup.com' className='hover:underline'>kleber@ziontechgroup && ziontechgroup.com</a></p>;
									</div>;
								</div>;
								<div>;
									<p className='text-blue-800 text-sm mb-2'>Our office location:</p>;
									<p className='text-blue-700 text-sm'>364 E Main St STE 1008<br />Middletown DE 19709</p>;
								</div>;
							</div>;
						</div>;
						<div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>;
							<div className='bg-blue-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-blue-900 mb-2'>AI & Machine Learning</h3>;
								<p className='text-blue-700'>Advanced AI solutions from computer vision to generative content creation</p>;
							</div>;
							<div className='bg-green-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-green-900 mb-2'>IT Infrastructure</h3>;
								<p className='text-green-700'>Next-gen technologies including edge computing, blockchain, and quantum readiness</p>;
							</div>;
							<div className='bg-purple-50 p-4 rounded-lg'>;
								<h3 className='font-semibold text-purple-900 mb-2'>Micro SaaS Platforms</h3>;
								<p className='text-purple-700'>Scalable software solutions from real-time analytics to mobile development</p>;
							</div>;
						</div>;
						<p className='mt-6 text-sm text-gray-500'>;
							Pricing based on market research from leading technology consultancies and enterprise software vendors. ;
							For custom enterprise solutions and volume discounts, see our{' '}
							<Link href='/pricing' className='text-blue-600 hover:text-blue-500 underline'>Enterprise Pricing Guide</Link>.;
						</p>;
					</div>;
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
						{/* AI Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Brain className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Revenue AI Agents (Sales/CS)</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Multi-agent copilots for SDR, AM, and Support with guardrails.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Database className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Data Engineering as a Service</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Modern ELT, dbt, and warehouse modeling, with governance.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Server className='h-5 w-5 text-emerald-600' />;
								<h3 className='font-semibold text-gray-900'>MLOps Platform Setup</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>CI/CD for models, feature stores, evals, and monitoring.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						{/* IT & Cloud */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Cloud className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>FinOps & Cloud Cost Optimization</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Rightsizing, savings plans, architectural refactors for cost.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Shield className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>SOC-as-a-Service</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Managed detection & response with 24/7 coverage.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Globe className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Fractional CTO/Architecture Advisory</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Strategy, roadmap, and architecture leadership on-demand.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						{/* AI Services - Additional */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Brain className='h-5 w-5 text-violet-600' />;
								<h3 className='font-semibold text-gray-900'>AI-Powered Business Intelligence</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Automated insights, predictive analytics, and intelligent reporting.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Database className='h-5 w-5 text-cyan-600' />;
								<h3 className='font-semibold text-gray-900'>Intelligent Document Processing</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Extract, classify, and process documents with AI accuracy.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Zap className='h-5 w-5 text-yellow-600' />;
								<h3 className='font-semibold text-gray-900'>AI Test Automation Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Self-healing test scripts and intelligent test case generation.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						{/* Micro SaaS */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Code className='h-5 w-5 text-rose-600' />;
								<h3 className='font-semibold text-gray-900'>AI Content Localization SaaS</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Translate and culturally adapt content at scale.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<BarChart3 className='h-5 w-5 text-sky-600' />;
								<h3 className='font-semibold text-gray-900'>Predictive Maintenance Toolkit</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Out-of-the-box anomaly detection for equipment and IoT.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Lock className='h-5 w-5 text-teal-600' />;
								<h3 className='font-semibold text-gray-900'>Compliance Copilot (SOC2/HIPAA/GDPR)</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Automated evidence collection and continuous controls.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						{/* Additional IT Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Server className='h-5 w-5 text-lime-600' />;
								<h3 className='font-semibold text-gray-900'>DevOps Automation Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Complete CI/CD pipelines with infrastructure as code.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Globe className='h-5 w-5 text-pink-600' />;
								<h3 className='font-semibold text-gray-900'>Digital Transformation Consulting</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>End-to-end modernization strategy and implementation.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<BarChart3 className='h-5 w-5 text-amber-600' />;
								<h3 className='font-semibold text-gray-900'>Infrastructure Monitoring & Observability</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Real-time monitoring with AI-powered anomaly detection.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						{/* Advanced AI Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Eye className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Computer Vision & Image Recognition</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Advanced image analysis, object detection, and visual content understanding.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<MessageSquare className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Natural Language Processing (NLP) Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Advanced text analysis, sentiment detection, and language understanding.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Palette className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Generative AI Content Studio</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered content creation for text, images, videos, and audio.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Bot className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Conversational AI & Chatbots</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Intelligent conversational agents with advanced reasoning capabilities.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<TrendingUp className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Predictive Analytics & Forecasting</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Advanced machine learning models for business forecasting and trend analysis.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Users className='h-5 w-5 text-emerald-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Project Management Suite</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered project tracking with intelligent resource allocation.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						{/* Advanced IT Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Cpu className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Edge Computing & IoT Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Distributed computing infrastructure for real-time data processing and IoT management.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Link2 className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Blockchain & Web3 Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Decentralized applications, smart contracts, and blockchain infrastructure.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Wifi className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>5G & Network Infrastructure</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Next-generation network infrastructure and connectivity solutions.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<HardDrive className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Quantum Computing Readiness</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Prepare your infrastructure for quantum computing and post-quantum cryptography.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Monitor className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Extended Reality (XR) Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Virtual, augmented, and mixed reality applications for enterprise and consumer use.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Star className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Customer Feedback Intelligence Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-driven sentiment analysis and actionable insights from customer feedback.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						{/* Innovative Micro SaaS Services */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Activity className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>Real-Time Analytics Dashboard</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Live business intelligence with instant insights and predictive alerts.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Settings className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>API Management & Gateway</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Enterprise-grade API management with security, monitoring, and monetization.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Terminal className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>Developer Tools & IDE Extensions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Productivity tools and extensions for modern development workflows.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<CreditCard className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>Fintech & Payment Solutions</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Secure payment processing and financial technology integrations.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Smartphone className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Mobile App Development Platform</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Cross-platform mobile app development with native performance.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Zap className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Workflow Automation Engine</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>No-code workflow builder with AI-powered optimization suggestions.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
							</div>;
						</div>;
					</div>;
					<div className='mt-10 text-center text-sm text-gray-500'>;
						Need something custom? Visit our website at{' '}
						<a href='https://ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline' target='_blank' rel='noreferrer'>ziontechgroup && ziontechgroup.com</a>{' '}
						or contact us directly: Email{' '}
						<a href='mailto:kleber@ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500'>kleber@ziontechgroup && ziontechgroup.com</a>{' '}
						| Phone{' '}
						<a href='tel:+13024640950' className='text-blue-600 hover:text-blue-500'>+1 302 464 0950</a>{' '}
						| Address: 364 E Main St STE 1008, Middletown DE 19709;
					</div>;
				</div>;
			</section>;
			{/* New Innovative Services Section */}
			<section className='py-24 sm:py-32 bg-gradient-to-br from-blue-50 to-indigo-50'>;
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
					<div className='mx-auto max-w-3xl text-center mb-16'>;
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Innovative AI & Automation Services</h2>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
							Cutting-edge AI solutions and automation tools that transform how businesses operate. ;
							Visit <a href='https://ziontechgroup && ziontechgroup.com' className='text-blue-600 hover:text-blue-500 underline' target='_blank' rel='noreferrer'>ziontechgroup && ziontechgroup.com</a> for live demos.;
						</p>;
					</div>;
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
						{/* AI Content Creation Tools */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Brain className='h-5 w-5 text-blue-600' />;
								<h3 className='font-semibold text-gray-900'>AI Content Creation Suite</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Generate high-quality content at scale with AI-powered writing tools.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li> Blog posts, articles, and marketing copy</li>;
								<li> SEO-optimized content with keyword research</li>;
								<li> Multi-language support and brand voice consistency</li>;
								<li> Content calendar and publishing automation</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-blue-600'>From $199/mo</span>;
								<Link href='/contact' className='text-blue-600 hover:text-blue-500'>Start free trial </Link>;
							</div>;
						</div>;
						{/* Email Automation Platform */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Mail className='h-5 w-5 text-green-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Email Automation</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>AI-powered email campaigns with personalized content and optimal send times.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li> Behavioral trigger automation</li>;
								<li> A/B testing and performance optimization</li>;
								<li> Lead scoring and segmentation</li>;
								<li> Integration with CRM and marketing tools</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-green-600'>From $149/mo</span>;
								<Link href='/contact' className='text-green-600 hover:text-green-500'>Automate now </Link>;
							</div>;
						</div>;
						{/* AI Email Responder */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Zap className='h-5 w-5 text-purple-600' />;
								<h3 className='font-semibold text-gray-900'>AI Email Assistant</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Intelligent email management with smart responses and priority detection.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li> Auto-respond to common inquiries</li>;
								<li> Priority flagging and urgent email alerts</li>;
								<li> Sentiment analysis and response suggestions</li>;
								<li> Calendar integration and meeting scheduling</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-purple-600'>From $99/mo</span>;
								<Link href='/contact' className='text-purple-600 hover:text-purple-500'>Try demo </Link>;
							</div>;
						</div>;
						{/* Customer Support Platform */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Users className='h-5 w-5 text-orange-600' />;
								<h3 className='font-semibold text-gray-900'>AI Customer Support Hub</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Comprehensive support platform with AI chatbots and ticket management.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li> 24/7 AI chatbot with human handoff</li>;
								<li> Multi-channel support (chat, email, phone)</li>;
								<li> Knowledge base and FAQ automation</li>;
								<li> Customer satisfaction tracking</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-orange-600'>From $299/mo</span>;
								<Link href='/contact' className='text-orange-600 hover:text-orange-500'>Setup support </Link>;
							</div>;
						</div>;
						{/* Event Management Dashboard */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Calendar className='h-5 w-5 text-red-600' />;
								<h3 className='font-semibold text-gray-900'>Smart Event Management</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>Complete event planning and management with AI-powered insights.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li> Event registration and ticketing</li>;
								<li> Automated email campaigns and reminders</li>;
								<li> Real-time analytics and attendee insights</li>;
								<li> Integration with payment and marketing tools</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-red-600'>From $179/mo</span>;
								<Link href='/contact' className='text-red-600 hover:text-red-500'>Plan events </Link>;
							</div>;
						</div>;
						{/* Workflow Automation Engine */}
						<div className='rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition bg-white'>;
							<div className='flex items-center gap-3 mb-3'>;
								<Settings className='h-5 w-5 text-indigo-600' />;
								<h3 className='font-semibold text-gray-900'>Business Process Automation</h3>;
							</div>;
							<p className='text-sm text-gray-600 mb-3'>No-code workflow automation with AI optimization recommendations.</p>;
							<ul className='text-sm text-gray-700 space-y-1 mb-4'>;
								<li> Visual workflow designer</li>;
								<li> 500+ pre-built integrations</li>;
								<li> AI-powered efficiency suggestions</li>;
								<li> Performance monitoring and optimization</li>;
							</ul>;
							<div className='flex items-center justify-between text-sm'>;
								<span className='font-semibold text-indigo-600'>From $79/mo</span>;
								<Link href='/contact' className='text-indigo-600 hover:text-indigo-500'>Automate workflows </Link>;
							</div>;
						</div>;
					</div>;
					<div className='mt-12 text-center'>;
						<p className='text-sm text-gray-600 mb-4'>;
							All services include 30-day free trial, setup assistance, and 24/7 support.;
						</p>;
						<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>;
							<Link
								href='/contact'
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
		</Layout>
	);
}
