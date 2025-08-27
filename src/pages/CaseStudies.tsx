import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Globe, Brain, Cloud, Shield, Zap, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function CaseStudies() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const categories = [
		{ id: 'all', name: 'All Cases', icon: Globe, count: 1 },
		{ id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 1 }
	];

	const caseStudies = [
		{
			id: 'ai-contact-center',
			title: 'AI-Powered Contact Center Optimization',
			company: 'Global Retail Corp',
			industry: 'Retail',
			category: 'ai-ml',
			description: 'Reduced average handle time by 35% and improved CSAT by 20% using AI.',
			results: ['35% faster AHT', '20% CSAT improvement', '24/7 automation'],
		}
	];

	const filtered = caseStudies.filter((s) => selectedCategory === 'all' || s.category === selectedCategory);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			<SEO title="Case Studies" description="Real-world success stories from Zion Tech Group." />
			<section className="py-20">
				<div className="container mx-auto px-4">
					<div className="text-center mb-10">
						<h1 className="text-4xl md:text-6xl font-bold text-white">Case Studies</h1>
						<p className="text-gray-300 mt-4">Our technology in action.</p>
					</div>

					<div className="flex flex-wrap gap-3 justify-center mb-12">
						{categories.map((c) => (
							<button
								key={c.id}
								onClick={() => setSelectedCategory(c.id)}
								className={`px-4 py-2 rounded-lg border text-sm transition ${
									selectedCategory === c.id
										? 'bg-cyan-600 text-white border-cyan-500'
										: 'bg-slate-800/50 text-gray-300 border-white/10 hover:border-cyan-400/40'
								}`}
							>
								<c.icon className="w-4 h-4 inline mr-2" />
								{c.name}
							</button>
						))}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{filtered.map((study) => (
							<motion.div
								key={study.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4 }}
								className="bg-slate-800/60 border border-white/10 rounded-xl p-6"
							>
								<div className="flex items-center justify-between mb-3">
									<span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">
										{study.industry}
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">{study.title}</h3>
								<p className="text-gray-300 mb-4">{study.description}</p>
								<ul className="space-y-1 mb-4">
									{study.results.map((r, i) => (
										<li key={i} className="text-sm text-gray-300 flex items-center">
											<CheckCircle className="w-3 h-3 text-cyan-300 mr-2" /> {r}
										</li>
									))}
								</ul>
								<button className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg">
									Read Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
								</button>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
