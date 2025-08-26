import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { realQ4Services2025, } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2027Q3Additions } from '../../data/real-2027-q3-additions';
import { real2027Q4Additions } from '../../data/real-2027-q4-additions';
import { innovativeMicroSaasServices2025 } from '../../src/data/innovativeMicroSaasServices2025';
import { enhancedMicroSaasServices2025 } from '../../src/data/enhancedMicroSaasServices2025';
import { ultimateInnovativeServices2026 } from '../../data/2026-ultimate-innovative-services';

type Service = typeof enhancedRealMicroSaasServices[number];

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

function getAllServices(): Service[] {
	return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], additionalEnhancedServices as Service[])
		.concat(newlyAddedServices as unknown as Service[])
		.concat(curatedMarketServices as Service[])
		.concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[])
		.concat(moreRealServices2025 as unknown as Service[])
		.concat(verified2025Additions as unknown as Service[])
		.concat(realServicesQ12025 as unknown as Service[])
		.concat(realEnterpriseServices2025 as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[])
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
		.concat(real2027Q2Additions as unknown as Service[])
		.concat(real2027Q3Additions as unknown as Service[])
		.concat(real2027Q4Additions as unknown as Service[])
		.concat(innovativeMicroSaasServices2025 as Service[])
		.concat(enhancedMicroSaasServices2025 as Service[]);
}

function toSlug(value: string | undefined | null): string {
	if (!value || typeof value !== 'string') return '';
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = SERVICES.map((service) => ({
    params: {
      slug: slugify(service.title),
    },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<ServiceProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const service = SERVICES.find((s) => slugify(s.title) === slug) || null;

	return {
		paths: Array.from(slugs).map((slug) => ({ params: { slug } })),
		fallback: false
	};

	return (
		<>
			<Head>
				<title>{service.name} — Zion Tech Group</title>
				<meta name="description" content={service.tagline} />
			</Head>
			
			<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<main className="container mx-auto px-6 py-12">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							{service.name}
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							{service.tagline}
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
								Get Started
							</a>
							<a href="/services" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300">
								View All Services
							</a>
						</div>
					</section>

					{/* Service Details */}
					<section className="mb-16">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* Main Content */}
							<div className="lg:col-span-2">
								<div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
									<h2 className="text-2xl font-bold mb-6 text-cyan-400">About This Service</h2>
									<p className="text-white/80 mb-6">
										{service.description}
									</p>
									
									<h3 className="text-xl font-semibold mb-4 text-white">Key Features</h3>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
										{service.features.map((feature, index) => (
											<div key={index} className="flex items-center gap-3">
												<Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
												<span className="text-white/80">{feature}</span>
											</div>
										))}
									</div>

									<div className="flex flex-wrap gap-4">
										<div className="text-center">
											<div className="text-3xl font-bold text-cyan-400 mb-1">{service.rating}</div>
											<div className="text-white/70 text-sm">Rating</div>
										</div>
										<div className="text-center">
											<div className="text-3xl font-bold text-purple-400 mb-1">{service.customers}</div>
											<div className="text-white/70 text-sm">Customers</div>
										</div>
										<div className="text-center">
											<div className="text-3xl font-bold text-green-400 mb-1">{service.price}</div>
											<div className="text-white/70 text-sm">Starting Price</div>
										</div>
									</div>
								</div>
							</div>

							{/* Sidebar */}
							<div className="space-y-6">
								{/* Contact Card */}
								<div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6">
									<h3 className="text-xl font-bold mb-4 text-cyan-400">Get In Touch</h3>
									<div className="space-y-4">
										<div className="flex items-center gap-3">
											<Phone className="w-5 h-5 text-cyan-400" />
											<span className="text-white/80">{contactInfo.mobile}</span>
										</div>
										<div className="flex items-center gap-3">
											<Mail className="w-5 h-5 text-cyan-400" />
											<span className="text-white/80">{contactInfo.email}</span>
										</div>
										<div className="flex items-center gap-3">
											<MapPin className="w-5 h-5 text-cyan-400" />
											<span className="text-white/80">{contactInfo.address}</span>
										</div>
									</div>
									
									<a
										href="/contact"
										className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mt-6"
									>
										Contact Us
									</a>
								</div>

								{/* Quick Actions */}
								<div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
									<h3 className="text-xl font-bold mb-4 text-purple-400">Quick Actions</h3>
									<div className="space-y-3">
										<a
											href="/case-studies"
											className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2 rounded-lg font-medium transition-all duration-300"
										>
											View Case Studies
										</a>
										<a
											href="/services"
											className="block w-full text-center bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2 rounded-lg font-medium transition-all duration-300"
										>
											Browse Services
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
						<p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
							Join hundreds of companies that have already transformed their business with our cutting-edge solutions.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a
								href="/contact"
								className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg"
							>
								Start Your Project
							</a>
							<a
								href="/case-studies"
								className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-300 text-lg"
							>
								View Case Studies
							</a>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}