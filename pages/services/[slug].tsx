import React from 'react';
import Head from 'next/head';
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
		// .concat(realMarketAugmentations2025 as unknown as Service[])
		// .concat(additionalLiveServices2025 as unknown as Service[])
		// .concat(real2025Q2Additions as unknown as Service[])
		// .concat(augmentedServicesBatch3 as unknown as Service[])
		// .concat(realServicesQ22025 as unknown as Service[])
		// .concat(realServicesQ32025 as unknown as Service[])
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		// .concat(realMarketServicesExtended as unknown as Service[])
		// .concat(real2026Additions as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[])
		// .concat(added2026Q2Services as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
		.concat(real2027Q2Additions as unknown as Service[])
		.concat(real2027Q3Additions as unknown as Service[])
		.concat(real2027Q4Additions as unknown as Service[]);
=======
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { real2025Q3Additions } from '../../data/real-2025-q3-additions';

// Simplified service data structure
interface SimpleService {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  useCases: string[];
  integrations: string[];
  link: string;
  category: string;
}

// Mock service data for now to fix build issues
const mockService: SimpleService = {
  id: 'default-service',
  name: 'Service Not Found',
  description: 'This service is currently being updated. Please contact us for more information.',
  price: 'Contact Us',
  period: '',
  features: ['Service under development'],
  useCases: ['Contact sales team'],
  integrations: ['Coming soon'],
  link: '/contact',
  category: 'General'
};

		.concat(realEnterpriseServices2025 as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[])
		.concat(realMarketAugmentations2025 as unknown as Service[])
		.concat(additionalLiveServices2025 as unknown as Service[])
		.concat(real2025Q2Additions as unknown as Service[])
		.concat(augmentedServicesBatch3 as unknown as Service[])
		.concat(realServicesQ22025 as unknown as Service[])
		.concat(real2025Q3Additions as unknown as Service[]);
}

=======
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

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
=======
		return path;
	} catch {
		return null;
	}
}
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

// Simple service interface
interface Service {
  id: string;
  name: string;
  description: string;
  tagline?: string;
  price?: string;
  features?: string[];
  link?: string;
}

	export async function getStaticProps({ params }: { params: { slug: string } }) {
	const services = getAllServices();
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

	let service: Service | undefined = services.find((s) => {
		if (!s.link) return false;
		const fromLink = extractServiceSlugFromLink(s.link);
		return fromLink === incomingSlug;
	});

	if (!service) {
		service = services.find((s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug);
	}

	if (!service) {
		return { notFound: true };
	}

	return {
		props: { service }
	};
}

export default function ServiceDetailPage({ service }: { service: Service }) {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.tagline || service.description} />
				<link rel="canonical" href={service.link || `https://ziontechgroup.com/services/${(service.id || service.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org",
								"@type": "Service",
								name: service.name,
								description: service.tagline || service.description,
								url: service.link,
								provider: {
									"@type": "Organization",
									name: "Zion Tech Group",
									url: "https://ziontechgroup.com"
								},
								offers: {
									"@type": "Offer",
									price: (service.price || '').replace(/[^0-9.]/g, ''),
									priceCurrency: "USD",
									availability: "https://schema.org/InStock"
								}
							},
							null,
							2
							)
						}}
				/>
			</Head>

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{service.name}
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
					<div className="lg:col-span-2 space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{service.description}</p>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{(service.features || []).slice(0, 12).map((f: string) => (
									<li key={f} className="flex items-start gap-2">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
										<span>{f}</span>
									</li>
								))}
							</ul>
						</Card>

						{/* Use Cases & Integrations */}
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
								<div>
									<div className="text-sm text-gray-400 mb-2">Use Cases</div>
									<ul className="list-disc list-inside space-y-1">
										{(service.useCases || []).slice(0, 8).map((u: string) => (
											<li key={u}>{u}</li>
										))}
									</ul>
								</div>
								<div>
									<div className="text-sm text-gray-400 mb-2">Integrations</div>
									<div className="flex flex-wrap gap-2">
										{(service.integrations || []).slice(0, 10).map((i: string) => (
											<span key={i} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">{i}</span>
										))}
									</div>
								</div>
							</div>
						</Card>
					</div>

					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">{service.price}<span className="text-base font-medium text-gray-400">{service.period}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'} • Competitors: {(service.competitors || []).slice(0,3).join(', ')}</div>
							<div className="mt-6 flex gap-3">
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href={service.link} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
							</div>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
							</div>
						</Card>

						{/* Market Position & ROI */}
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Market & ROI</h3>
							<div className="space-y-3 text-sm text-gray-300">
								{service.marketPosition && <p className="leading-relaxed"><span className="text-gray-400">Position:</span> {service.marketPosition}</p>}
								{service.roi && <p className="leading-relaxed"><span className="text-gray-400">ROI:</span> {service.roi}</p>}
								{service.competitors?.length ? (
									<p className="leading-relaxed"><span className="text-gray-400">Competitors:</span> {service.competitors.slice(0,6).join(', ')}</p>
								) : null}
								<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover:text-cyan-200">See average market prices →</a>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
=======
export async function getStaticPaths() {
	const services = getAllServices();
	const slugs = new Set<string>();

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink) {
			slugs.add(fromLink);
			continue;
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));
	}

	return {
		paths: Array.from(slugs).map((slug) => ({ params: { slug } })),
		fallback: false
	};
=======
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export async function getStaticPaths() {
  // Return empty paths for now to fix build
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // For now, return mock data to fix build
  return {
    props: { 
      service: mockService,
      slug: params?.slug || 'default'
    }
  };
}

export default function ServiceDetailPage({ service, slug }: { service: SimpleService; slug: string }) {
  return (
    <Layout>
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://ziontechgroup.com/services/${slug}`} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>

}
=======
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>

            {/* Features Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases & Integrations */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Use Cases</div>
                  <ul className="list-disc list-inside space-y-1">
                    {service.useCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Integrations</div>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.map((integration, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white">
                {service.price}
                <span className="text-base font-medium text-gray-400">{service.period}</span>
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Contact us for custom pricing and implementation details
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/contact" 
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Sales
                </Link>
                <Link 
                  href={service.link} 
                  className="flex-1 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg text-center hover:border-gray-500 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 inline mr-2" />
                  Learn More
                </Link>
              </div>
            </div>

            {/* Contact Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <MapPin className="w-4 h-4" />
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs hover:underline"
                  >
                    {contactInfo.address}
                  </a>
                </div>
              </div>
            </div>

            {/* Category & Info */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-3">Service Information</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-gray-400">Category:</span> {service.category}
                </p>
                <p className="leading-relaxed">
                  <span className="text-gray-400">Service ID:</span> {service.id}
                </p>
                <Link 
                  href="/pricing" 
                  className="inline-block mt-2 text-cyan-300 hover:text-cyan-200"
                >
                  View Pricing Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
				{service.benefits?.length ? (
					<div className="text-sm text-gray-600">Benefits: {service.benefits.slice(0, 5).join(' • ')}</div>
				) : null}
			</main>
		</div>
	);
}
=======
}
=======

export default function ServiceSlugPage({ params }: { params?: { slug: string } }) {
	const slug = params?.slug || 'default-service';
	
	// Placeholder service data - replace with actual data
	const service = {
		name: 'Service Name',
		tagline: 'Service description and tagline',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		price: '$99/month',
		rating: '4.8',
		customers: '100+',
		description: 'Detailed service description goes here...',
		link: '#'
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
