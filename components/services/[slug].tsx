<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
}function getAllServices(): any () : Service[] {;
  return enhancedRealMicroSaasServices .concat (extraServices as Service[], additionalEnhancedServices as Service[]) .concat (newlyAddedServices as unknown as Service[]) .concat (curatedMarketServices as Service[]) .concat (new2025Services as unknown as Service[]) .concat (marketValidatedServices as unknown as Service[]) .concat (moreRealServices2025 as unknown as Service[]) .concat (verified2025Additions as unknown as Service[]) .concat (realServicesQ12025 as unknown as Service[]) ;
}return {;
  paths: Array && Array.from (slugs) .map ( (slug) => ({;
  params: {;
  slug ;
}) );
fallback: false ;
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
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
import { newVerifiedServicesQ22025 } from '../../data/real-verified-services-q2-2025';
type Service = typeof enhancedRealMicroSaasServices[number];
}export default function ServiceDetailPage(): any ({;
  service ;
}: {;
  service: Service ;
}) {;
  return (<Layout> <Head> <title> {;
  service && service.name ;
}| Zion Tech Group</title> ;
};
null;
2) ;
}/> </Head> </li>) ) ;
}</ul> </div>) ) ;
}</ul> </div> <div>) ) ;
}</div> </div> </div> </div> </div> </div> </div> <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Contact</h3> <div className="space-y-3 text-sm" > <div className="flex items-center gap-2 text-cyan-400" ><Phone className="w-4 h-4" /><ahref= {
  `tel:$ {
  contactInfo && contactInfo.mobile.replace (/[^+\\d]/g, '') 
}` 
}className="hover:underline"> {;
  contactInfo && contactInfo.mobile ;
}</a></div> <div className="flex items-center gap-2 text-purple-400" ><Mail className="w-4 h-4" /><ahref= {
  `mailto:$ {
  contactInfo && contactInfo.email 
}` 
}className="hover:underline"> {;
  contactInfo && contactInfo.email ;
}</a></div> <div className="flex items-center gap-2 text-green-400" ><MapPin className="w-4 h-4" /><ahref= {
  `https://maps && maps.google.com/?q=$ {
  encodeURIComponent (contactInfo && contactInfo.address) 
}` 
}target="blank" rel="noopener noreferrer" className="hover:underline"> {;
  contactInfo && contactInfo.address ;
}</a></div> </div> </div> {;
  /* Market Position & ROI */ ;
}<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Market & ROI</h3> <div className="space-y-3 text-sm text-gray-300" > {;
  service && service.marketPosition && <p className="leading-relaxed" ><span className="text-gray-400" >Position:</span> {;
  service && service.marketPosition ;
}</p> ;
}{;
  service && service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {;
  service && service.roi ;
}</p> ;
}{;
  service && service.competitors?.length ? () : null ;
}<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover: text-cyan-200">See average market prices →</a> return (<EnhancedLayout> <Head> <title>Service Not Found - Zion Tech Solutions</title> </Head> </div> </EnhancedLayout> return (<EnhancedLayout> <Head> <title> {;
  service && service.name ;
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link> ;
};
export default ServiceDetail ;
export default ServiceDetail;
}
export default ServiceDetail
}
  return enhancedRealMicroSaasServices .concat (extra_services as Service[], additionalEnhancedServices as Service[]) .concat (newlyAddedServices as unknown as Service[]) .concat (curatedMarketServices as Service[]) .concat (new2025Services as unknown as Service[]) .concat (marketValidatedServices as unknown as Service[]) .concat (moreRealServices2025 as unknown as Service[]) .concat (verified2025Additions as unknown as Service[]) .concat (realServicesQ12025 as unknown as Service[]);
}return {
  paths: Array.from (slugs) .map ( (slug) => ({
  params: {
  slug;
}) );
fallback: false;
}export default /**
 * ServiceDetailPage - Function description
 */
function ServiceDetailPage() {
  return (<Layout> <Head> <title> {
  service.name;
}| Zion Tech Group</title>;
}
null;
2);
}/> </Head> </li>) );
}</ul> </div>) );
}</ul> </div> <div>) );
}</div> </div> </div> </div> </div> </div> </div> <div className="p - 6 bg - black / 40 border border - gray - 700 / 50 rounded - lg" > <h3 className="text - white font - semibold mb - 3" >Contact</h3> <div className="space - y-3 text - sm" > <div className="flex items - center gap - 2 text - cyan - 400" ><Phone className="w - 4 h - 4" /><a href= {
  `tel:$ {
  contact_info.mobile.replace (/[^+\\d]/g, '');
}`;
}className="hover:underline" > {
  contact_info.mobile;
}</a></div> <div className="flex items - center gap - 2 text - purple - 400" ><Mail className="w - 4 h - 4" /><a href= {
  `mailto:$ {
  contact_info.email;
}`;
}className="hover:underline" > {
  contact_info.email;
}</a></div> <div className="flex items - center gap - 2 text - green - 400" ><MapPin className="w - 4 h - 4" /><a href= {
  `https://maps.google.com/?q=$ {
  encodeURIComponent (contact_info.address);
}`;
}target="blank" rel="noopener noreferrer" className="hover:underline" > {
  contact_info.address;
}</a></div> </div> </div> {
  /* Market Position & ROI */;
}<div className="p - 6 bg - black / 40 border border - gray - 700 / 50 rounded - lg" > <h3 className="text - white font - semibold mb - 3" >Market & ROI</h3> <div className="space - y-3 text - sm text - gray - 300" > {
  service.market_position && <p className="leading - relaxed" ><span className="text - gray - 400" >Position:</span> {
  service.market_position;
}</p>;
}{
  service.roi && <p className="leading - relaxed" ><span className="text - gray - 400" >ROI:</span> {
  service.roi;
}</p>;
}{
  service.competitors?.length ? () : null;
}<a href="/market - pricing" className="inline - block mt - 2 text - cyan - 300 hover: text - cyan - 200">See average market prices →</a> return (<EnhancedLayout> <Head> <title > Service Not Found - Zion Tech Solutions</title> </Head> </div> </EnhancedLayout> return (<EnhancedLayout> <Head> <title> {
  service.name;
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text - sm text - blue - 600 hover:underline">Back to Services</a></Link>;
}
export default ServiceDetail;
export default ServiceDetail;
}
}

function getAllServices(): Service[] {_return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], _additionalEnhancedServices as Service[])
		.concat(newlyAddedServices as unknown as Service[])
		.concat(curatedMarketServices as Service[])
		.concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[])
		.concat(moreRealServices2025 as unknown as Service[])
		.concat(verified2025Additions as unknown as Service[])
		.concat(realServicesQ12025 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[]),
		.concat(newVerifiedServicesQ22025 as unknown as Service[])
}

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function extractServiceSlugFromLink(link: string): string | null {
	try {
		const url = new URL(link)
		const path = url.pathname.replace(/^\/+|\/+$/g, ''),
		if (path.startsWith('services/')) {
			return path.substring('services/'.length)
		}
		return null
	} catch {
		return null
	}
}

export async function getStaticPaths() {
	const services = getAllServices()
	const slugs = new Set<string>()

	// Define static service slugs that should not be handled by this dynamic route
	const staticServiceSlugs = [
		'ai-evaluation-orchestratorai-support-triage-routerai-code-review-assistant-proai-revenue-forecasting-copilot'
	],

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null
		if (fromLink && !staticServiceSlugs.includes(fromLink)) {
			slugs.add(fromLink),
			continue
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		const idSlug = s.id ? toSlug(s.id) : ''
		const nameSlug = s.name ? toSlug(s.name) : ''
		
		if (idSlug && !staticServiceSlugs.includes(idSlug)) {
			slugs.add(idSlug)
		}
		if (nameSlug && !staticServiceSlugs.includes(nameSlug)) {
			slugs.add(nameSlug)
		}

	}

	return {_paths: Array.from(slugs).map(_(slug) => ({ params: { slug} })),
		fallback: false
	}
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const services = getAllServices()
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, ''),

	let service: Service | undefined = services.find((s) => {
		if (!s.link) return false,
		const fromLink = extractServiceSlugFromLink(s.link)
		return fromLink === incomingSlug
	}),

	if (!service) {
		service = services.find((s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug)
	}

	if (!service) {
		return { notFound: true }
	}

	return {
		props: { service }
	}
}

export default function ServiceDetailPage(_{_service}: {_service: Service}) {_return (
		<Layout>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name=&quot;description&quot; content={service.tagline || service.description} />
				<link rel=&quot;canonical&quot; href={service.link} />
				<script
					type=&quot;application/ld+json&quot;
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								&quot;@context&quot;: &quot;https://schema.org&quot;,
								&quot;@type&quot;: &quot;Service&quot;,
								name: service.name,
								description: service.tagline || service.description,
								url: service.link,
								provider: {
									&quot;@type&quot;: &quot;Organization&quot;,
									name: &quot;Zion Tech Group&quot;,
									url: &quot;https://ziontechgroup.com&quot;
								},
								offers: {
									&quot;@type&quot;: &quot;Offer&quot;,
									        price: &quot;99&quot;,
									priceCurrency: &quot;USD&quot;,
									availability: &quot;https://schema.org/InStock&quot;
								}
							},
							null,
							2
							)
						}}
				/>
			</Head>

			<div className=&quot;container mx-auto px-4 py-16&quot;>
				<div className=&quot;text-center mb-10&quot;>
					<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4&quot;>
						{service.name}
					</h1>
					<p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>{service.tagline || service.description}</p>
				</div>

				<div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
					<div className=&quot;lg:col-span-2 space-y-6&quot;>
						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<h2 className=&quot;text-white text-xl font-semibold mb-3&quot;>Overview</h2>
							<p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}</p>
						</div>

						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<h3 className=&quot;text-white text-lg font-semibold mb-4&quot;>Key Features</h3>
							<ul className=&quot;space-y-2 text-gray-300&quot;>
								{(service.features || []).slice(0, 12).map((f: string) => (
									<li key={f} className=&quot;flex items-start gap-2&quot;>
										<Check className=&quot;w-4 h-4 mt-0.5 text-emerald-400&quot; />
										<span>{f}</span>
									</li>
								))}
							</ul>
						</div>

						{/* Use Cases & Integrations */}
						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<h3 className=&quot;text-white text-lg font-semibold mb-4&quot;>Use Cases & Integrations</h3>
							<div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300&quot;>
								<div>
									<div className=&quot;text-sm text-gray-400 mb-2&quot;>Use Cases</div>
									<ul className=&quot;list-disc list-inside space-y-1&quot;>
										{(service.useCases || []).slice(0, 8).map((u: string) => (
											<li key={u}>{u}</li>
										))}
									</ul>
								</div>
								<div>
									<div className=&quot;text-sm text-gray-400 mb-2&quot;>Integrations</div>
									<div className=&quot;flex flex-wrap gap-2&quot;>
										{(service.integrations || []).slice(0, 10).map((i: string) => (
											<span key={i} className=&quot;px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs&quot;>{i}</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	),
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import EnhancedLayout from '@/components/layout/EnhancedLayout'
import services from '@/data/services/services.json'
const ServiceDetail: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query as { slug?: string }
  const items = services as any[]
  const service = items.find((s) => s.slug === slug)

  if (!service) {_return (
      <EnhancedLayout>
        <Head>
          <title>Service Not Found - Zion Tech Solutions</title>
        </Head>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Service not found</h1>
          <Link href="/services"><a className="text-blue-600 hover: underline">Back to Services</a></Link>
    )
  }

  const priceRange = `$${service.priceRangeUSD[0]} - $${service.priceRangeUSD[1]}`

  return (
    <EnhancedLayout>
      <Head>
        <title>{_service.name} - Zion Tech Solutions</title>
      </Head>
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
        <div className=&quot;md:col-span-2 space-y-4&quot;>
          <img src={`https://picsum.photos/seed/${encodeURIComponent(service.slug)}/1200/600`} alt={service.name} className=&quot;w-full rounded-lg border border-gray-200 dark:border-gray-800&quot; />
          <div>
            <h1 className=&quot;text-2xl font-semibold&quot;>{service.name}</h1>
            <p className=&quot;opacity-80&quot;>Category: {service.category}</p>
          </div>
          <p className=&quot;leading-relaxed&quot;>{service.description}</p>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            <span className=&quot;text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700&quot;>{service.category}</span>
          </div>
        </div>
        <aside className=&quot;md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max&quot;>
          <div className=&quot;text-sm opacity-70&quot;>Price Range</div>
          <div className=&quot;text-xl font-semibold&quot;>{priceRange}</div>
          <Link href={`/contact?subject=${encodeURIComponent('Quote request: ' + service.name)}`}>
          </Link>
          <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>
            <a className=&quot;inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700&quot;>Request Quote</a>
          </a>
          <Link href=&quot;/services&quot;><a className=&quot;text-sm text-blue-600 hover:underline&quot;>Back to Services</a></a>

        </aside>
      </div>
    </EnhancedLayout>
  )
},

export default ServiceDetail
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

 
 
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}function getAllServices () : Service[] {
  return enhancedRealMicroSaasServices .concat (extraServices as Service[], additionalEnhancedServices as Service[]) .concat (newlyAddedServices as unknown as Service[]) .concat (curatedMarketServices as Service[]) .concat (new2025Services as unknown as Service[]) .concat (marketValidatedServices as unknown as Service[]) .concat (moreRealServices2025 as unknown as Service[]) .concat (verified2025Additions as unknown as Service[]) .concat (realServicesQ12025 as unknown as Service[])
}return {
  paths: Array.from (slugs) .map ( (slug) => ({
  params: {
  slug
}) );
fallback: false
}export default function ServiceDetailPage ({
  service
}: {
  service: Service
}) {
  return (<Layout> <Head> <title> {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}function getAllServices () : Service[] {


2) 
=======
  service.name 
}| Zion Tech Group</title> ;
};
null;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  service.name
}| Zion Tech Group</title>
}
null;
2)
}/> </Head> </li>) )
}</ul> </div>) )
}</ul> </div> <div>) )
2) 
  service.name 
}| Zion Tech Group</title> ;
};
null;
2)
2) 
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

}/> </Head> </li>) ) 
}</ul> </div>) ) 
}</ul> </div> <div>) ) 
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}</div> </div> </div> </div> </div> </div> </div> <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Contact</h3> <div className="space-y-3 text-sm" > <div className="flex items-center gap-2 text-cyan-400" ><Phone className="w-4 h-4" /><a href= {
  `tel:$ {
  contactInfo.mobile.replace (/[^+\\d]/g, '')
}`
}className="hover:underline" > {
  contactInfo.mobile
}</a></div> <div className="flex items-center gap-2 text-purple-400" ><Mail className="w-4 h-4" /><a href= {
  `mailto:$ {
  contactInfo.email
}`
}className="hover:underline" > {
  contactInfo.email
}</a></div> <div className="flex items-center gap-2 text-green-400" ><MapPin className="w-4 h-4" /><a href= {
  `https://maps.google.com/?q=$ {
  encodeURIComponent (contactInfo.address)
}`
}target="blank" rel="noopener noreferrer" className="hover:underline" > {
  contactInfo.address
}</a></div> </div> </div> {
  /* Market Position & ROI */
}<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Market & ROI</h3> <div className="space-y-3 text-sm text-gray-300" > {
  service.marketPosition && <p className="leading-relaxed" ><span className="text-gray-400" >Position:</span> {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

  service.marketPosition 
}</p>
}{
  service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {
  service.roi 


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  service.marketPosition
}</p>
}{
  service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {
  service.roi
  service.marketPosition 
}</p>
}{
  service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {
  service.roi 
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}</p>
}{
  service.competitors?.length ? () : null
}<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover: text-cyan-200">See average market prices →</a> return (<EnhancedLayout> <Head> <title>Service Not Found - Zion Tech Solutions</title> </Head> </div> </EnhancedLayout> return (<EnhancedLayout> <Head> <title> {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
}function getAllServices(): any () : Service[] {;
  return enhancedRealMicroSaasServices .concat (extraServices as Service[], additionalEnhancedServices as Service[]) .concat (newlyAddedServices as unknown as Service[]) .concat (curatedMarketServices as Service[]) .concat (new2025Services as unknown as Service[]) .concat (marketValidatedServices as unknown as Service[]) .concat (moreRealServices2025 as unknown as Service[]) .concat (verified2025Additions as unknown as Service[]) .concat (realServicesQ12025 as unknown as Service[]) ;
}return {;
  paths: Array && Array.from (slugs) .map ( (slug) => ({;
  params: {;
  slug ;
}) );
fallback: false ;
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';
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
import { newVerifiedServicesQ22025 } from '../../data/real-verified-services-q2-2025';
type Service = typeof enhancedRealMicroSaasServices[number];


}export default function ServiceDetailPage(): any ({;
  service ;
}: {;
  service: Service ;
}) {;
  return (<Layout> <Head> <title> {;
  service && service.name ;
}| Zion Tech Group</title> ;
};
null;
2) ;

}/> </Head> </li>) ) ;
}</ul> </div>) ) ;
}</ul> </div> <div>) ) ;
}</div> </div> </div> </div> </div> </div> </div> <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Contact</h3> <div className="space-y-3 text-sm" > <div className="flex items-center gap-2 text-cyan-400" ><Phone className="w-4 h-4" /><ahref= {
  `tel:$ {
  contactInfo && contactInfo.mobile.replace (/[^+\\d]/g, '') 
}` 
}className="hover:underline"> {;
  contactInfo && contactInfo.mobile ;
}</a></div> <div className="flex items-center gap-2 text-purple-400" ><Mail className="w-4 h-4" /><ahref= {
  `mailto:$ {
  contactInfo && contactInfo.email 
}` 
}className="hover:underline"> {;
  contactInfo && contactInfo.email ;
}</a></div> <div className="flex items-center gap-2 text-green-400" ><MapPin className="w-4 h-4" /><ahref= {
  `https://maps && maps.google.com/?q=$ {
  encodeURIComponent (contactInfo && contactInfo.address) 
}` 
}target="blank" rel="noopener noreferrer" className="hover:underline"> {;
  contactInfo && contactInfo.address ;
}</a></div> </div> </div> {;
  /* Market Position & ROI */ ;
}<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg" > <h3 className="text-white font-semibold mb-3" >Market & ROI</h3> <div className="space-y-3 text-sm text-gray-300" > {;
  service && service.marketPosition && <p className="leading-relaxed" ><span className="text-gray-400" >Position:</span> {;
  service && service.marketPosition ;
}</p> ;
}{;
  service && service.roi && <p className="leading-relaxed" ><span className="text-gray-400" >ROI:</span> {;
  service && service.roi ;
}</p> ;
}{;
  service && service.competitors?.length ? () : null ;
}<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover: text-cyan-200">See average market prices →</a> return (<EnhancedLayout> <Head> <title>Service Not Found - Zion Tech Solutions</title> </Head> </div> </EnhancedLayout> return (<EnhancedLayout> <Head> <title> {;
  service && service.name ;
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link> ;
};
export default ServiceDetail ;
export default ServiceDetail;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  service.name
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}

export default ServiceDetail
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
export default ServiceDetail
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  service.name 
}- Zion Tech Solutions</title> </Head> </Link> <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>
};
export default ServiceDetail 
export default ServiceDetail
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
};
;
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
