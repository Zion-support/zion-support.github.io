import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';

// Infer item type from one of the arrays
type Service = typeof enhancedRealMicroSaasServices[number];

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

function getAllServices(): Service[] {
	return []
		.concat(enhancedRealMicroSaasServices as Service[])
		.concat(additionalEnhancedServices as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
		.concat(real2027Q2Additions as unknown as Service[]);
}

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractServiceSlugFromLink(link: string): string | null {
	try {
		const url = new URL(link);
		const path = url.pathname.replace(/^\/+|\/+$/g, '');
		if (path.startsWith('services/')) {
			return path.substring('services/'.length);
		}
		return null;
	} catch {
		return null;
	}
}

export default function ServiceSlugPage({ params }: { params?: { slug: string } }) {
	const allServices = React.useMemo(() => getAllServices(), []);
	const slug = params?.slug || '';

	const service = React.useMemo(() => {
		if (!slug) return null;
		// try match by provided slug
		const bySlug = allServices.find(s => {
			const sSlug = extractServiceSlugFromLink((s as any).link || '') || toSlug((s as any).id || (s as any).name || '');
			return sSlug === slug;
		});
		if (bySlug) return bySlug;
		// fallback: try id or name direct
		return allServices.find(s => (s as any).id === slug || toSlug((s as any).name || '') === slug) || null;
	}, [allServices, slug]);

	const title = service ? (service as any).name : 'Service';
	const tagline = service ? ((service as any).tagline || (service as any).description || '') : '';
	const price = service ? `${(service as any).price || ''}${(service as any).period || ''}` : '';
	const features: string[] = service ? ((service as any).features || []) : [];
	const link = service ? ((service as any).link || '/services') : '/services';

	return (
		<>
			<Head>
				<title>{title} — Zion Tech Group</title>
				<meta name="description" content={tagline} />
				<link rel="canonical" href={`https://ziontechgroup.com/services/${slug || 'service'}`} />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<main className="container mx-auto px-6 py-12">
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{title}</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">{tagline}</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a href={link} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
								Visit Product Page
							</a>
							<a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
								View All Services
							</a>
						</div>
					</section>

					{/* Features */}
					{features.length > 0 && (
						<section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
							{features.slice(0, 8).map((f, idx) => (
								<Card key={idx} className="bg-white/5 border border-white/10 p-6">
									<div className="flex items-start gap-3">
										<Check className="w-5 h-5 text-cyan-400 mt-1" />
										<div>
											<p className="text-white font-medium">{f}</p>
										</div>
									</div>
								</Card>
							))}
						</section>
					)}

					{/* Contact */}
					<section className="mt-16 text-center text-white/80">
						<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
							<a href={`tel:+13024640950`} className="inline-flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" /> {contactInfo.mobile}</a>
							<a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" /> {contactInfo.email}</a>
							<span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {contactInfo.address}</span>
							<a href={contactInfo.website} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><ExternalLink className="w-4 h-4" /> ziontechgroup.com</a>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
