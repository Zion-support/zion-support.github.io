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
  Smartphone,
  DollarSign,
  RotateCcw
} from 'lucide-react';

export default function Services() {
	const title = 'Services — Zion Tech Group';
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.';

	return (
		<>
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
					</div>
				</div>
			</section>

			{/* Contact CTA Section */}
			<section className='py-20 bg-gradient-to-r from-blue-600 to-purple-600'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<h2 className='text-3xl sm:text-4xl font-bold text-white mb-6'>
						Ready to Transform Your Business?
					</h2>
					<p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
						Contact us today for a free consultation and discover how our solutions can drive your success.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
						<a href='tel:+13024640950' className='flex items-center text-white hover:text-blue-200 transition-colors'>
							<Mail className='w-5 h-5 mr-2' />
							+1 302 464 0950
						</a>
						<a href='mailto:kleber@ziontechgroup.com' className='flex items-center text-white hover:text-blue-200 transition-colors'>
							<Mail className='w-5 h-5 mr-2' />
							kleber@ziontechgroup.com
						</a>
					</div>
				</div>
			</section>
		</>
	);
}