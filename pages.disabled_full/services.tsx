


import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import {
  // TODO: Implement
}
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

			<section className='bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32'>;
</section>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>;
</div>
					<div className='mx-auto max-w-2xl text-center'>;
						<div className='flex items-center justify-center mb-4'>;
							<Award className='h-6 w-6 text-blue-600 mr-2' />;

							<span className='text-base font-semibold leading-7 text-blue-600'>Our Services</span>;
						</div>;
						<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>;
</h1>
						</h1>;
						<p className='mt-6 text-lg leading-8 text-gray-600'>;
</p>
						</p>;
			</section>;
			<section className='py-16 sm:py-24'>;
					<div className='grid gap-6 lg:grid-cols-2'>;
						<div id='ai' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300'>;
							<div className='flex items-center gap-x-3 mb-6'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors'>;
									<Brain className='h-7 w-7 text-white' />;

								<div>;
									<h2 className='text-xl font-semibold text-gray-900'>AI Autonomous Systems</h2>;
									<p className='text-sm text-blue-600 font-medium'>Intelligent Automation</p>;
							<p className='text-gray-600 mb-6'>;
							<ul className='space-y-3 mb-6'>;
</ul>
								<li className='flex items-center gap-x-3'>;
</li>
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
								<Link;
									href='/contact
									className='inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group
									aria-label='Get started with AI services'>;

									<ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />;

								;
						<div id='cloud' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors'>;
									<Cloud className='h-7 w-7 text-white' />;

									<h2 className='text-xl font-semibold text-gray-900'>Cloud Platforms</h2>;
									<p className='text-sm text-green-600 font-medium'>Scalable Infrastructure</p>;
									<CheckCircle className='h-4 w-4 text-green-600' />;

									<span className='text-sm text-gray-700'>Serverless and Kubernetes</span>;

									<span className='text-sm text-gray-700'>Data pipelines and ML ops</span>;

									<span className='text-sm text-gray-700'>FinOps and SRE practices</span>;

									<span className='text-sm text-gray-700'>Multi-cloud architecture</span>;

									<span>4-8 weeks delivery</span>;
									className='inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group
									aria-label='Get started with cloud services'>;


						<div id='cybersecurity' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors'>;
									<Shield className='h-7 w-7 text-white' />;

									<h2 className='text-xl font-semibold text-gray-900'>Cybersecurity</h2>;
									<p className='text-sm text-purple-600 font-medium'>Zero-Trust Security</p>;
									<CheckCircle className='h-4 w-4 text-purple-600' />;

									<span className='text-sm text-gray-700'>Zero-trust architecture</span>;

									<span className='text-sm text-gray-700'>Compliance automation</span>;

									<span className='text-sm text-gray-700'>Incident response</span>;

									<span className='text-sm text-gray-700'>Security audits</span>;

									<span>3-6 weeks delivery</span>;
									className='inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group
									aria-label='Get started with cybersecurity services'>;


						<div id='saas' className='group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-300'>;
								<div className='flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 group-hover:bg-orange-700 transition-colors'>;
									<Code className='h-7 w-7 text-white' />;

									<h2 className='text-xl font-semibold text-gray-900'>Micro SaaS</h2>;
									<p className='text-sm text-orange-600 font-medium'>Custom Solutions</p>;
									<CheckCircle className='h-4 w-4 text-orange-600' />;

									<span className='text-sm text-gray-700'>Custom web applications</span>;

									<span className='text-sm text-gray-700'>API development</span>;

									<span className='text-sm text-gray-700'>Integration services</span>;

									<span className='text-sm text-gray-700'>Maintenance & support</span>;

									<span>6-12 weeks delivery</span>;
									className='inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-500 transition-colors group

			</section>;)