    }
    return null;
  } catch {;
    return null;
  }
  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;
        <title>{service && service.name} | Zion Tech Group</title>;
        <meta
          name='description'
                <Button
                  href='/contact'
                  className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
                  Contact Sales;
                </Button>;
                <Button
                  href={service && service.link}
                  variant='outline'
                  <a
                    href={`tel:${contactInfo && contactInfo.mobile.replace(/[^+\\d]/g, '')}`}
                    className='hover:underline'>;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className='flex items-center gap-2 text-purple-400'>;
                  <Mail className='w-4 h-4' />;
                  <a
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='hover:underline'>;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className='flex items-center gap-2 text-green-400'>;
                  <MapPin className='w-4 h-4' />;
                  <a
                    href={`https://maps && maps.google.com/?q=${encodeURIComponent(contactInfo && contactInfo.address)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  </a>;
                </div>;
              </div>;
            </Card>;
          </div>;
        </div>;
      </div>;
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newRealServices } from '../../data/new-real-services';
import { marketReadyServices } from '../../data/market-ready-services';
type Service = typeof enhancedRealMicroSaasServices[number];
const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};
function getAllServices(): Service[] {
	return enhancedRealMicroSaasServices
		.concat(
			extraServices as Service[];
			additionalEnhancedServices as Service[];
			newRealServices as Service[];
			marketReadyServices as Service[]
		)
}
function extractServiceSlugFromLink(link: string): string | null {
	try {
		const url = new URL(link);
		const path = url.pathname.replace(/^\/+|\/+$/g, '');
		if (path.startsWith('services/')) {
			return path.substring('services/'.length)
		}
		return null
	} catch {
		return null
	}
}
	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink) {
			slugs.add(fromLink);
			continue
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name))
	}
	return {
		paths: Array.from(slugs).map((slug) => ({ params: { slug } })),
		fallback: false
	}
}
	let service: Service | undefined = services.find((s) => {
		if (!s.link) return false;
		const fromLink = extractServiceSlugFromLink(s.link);
		return fromLink === incomingSlug
	});
export default function ServiceDetailPage({ service }: { service: Service }) {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.tagline || service.description} />
				<link rel="canonical" href={service.link} />
			</Head>
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{service.name}
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
					</div>
					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">{service.price}<span className="text-base font-medium text-gray-400">{service.period}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'}</div>
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
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	)
}
    </UltraFuturisticBackground>);
;
