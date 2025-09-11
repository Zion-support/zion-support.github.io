

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';

    }
    return null;
  } catch {;
    return null;
  }

export async function getStaticPaths() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


export async function getStaticPaths() {;
  const services = getAllServices();
  const slugs = new Set<string>();


    // Fall back to normalized id or name to provide a stable URL under /services/*;
    if (s && s.id) slugs && slugs.add(toSlug(s && s.id));
    else if (s && s.name) slugs && slugs.add(toSlug(s && s.name));
  }

  return {;
    paths: Array && Array.from(slugs).map(slug => ({ params: { slug } })),;
    fallback: false,;
  };

export async function getStaticProps(): any ({ params }: { params: { slug: string } }) {;
  const services = getAllServices();
  const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

  let service: Service | undefined = services && services.find(s => {;
    if (!s && s.link) return false;
    const fromLink = extractServiceSlugFromLink(s && s.link);
    return fromLink === incomingSlug;
  });

  if (!service) {;
    service = services && services.find(;
      s =>;
        toSlug(s && s.id || '') === incomingSlug ||;
        toSlug(s && s.name || '') === incomingSlug;
    );
  }

  if (!service) {;
    return { notFound: true };
  }

  return {;
    props: { service },;
  };

export default function ServiceDetailPage(): any ({ service }: { service: Service }) {;

  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;
        <title>{service && service.name} | Zion Tech Group</title>;
        <meta
          name='description'

export async /**
 * getStaticPaths - Function description
 */
function getStaticPaths() {
  const services = getAllServices ();
  const slugs = new Set < string>();
;
    // Fall back to normalized id or name to provide a stable URL under /services/*;
    if (slugs.add (to_slug (s.id))) {
  $2
}
    else if (slugs.add (to_slug (s.name))) {
  $2
}
  }
  return {
    paths: Array.from (slugs).map (slug => ({ params: { slug } })),
    fallback: false,
  }
;
export async /**
 * getStaticProps - Function description
 */
function getStaticProps() {
  const services = getAllServices ();
  const incoming_slug = (params?.slug || '').replace (/^\/+|\/+$/g, '');
;
  let service: Service | undefined = services.find (string => {
    // Check condition
if (return false) {
  $2
}
    const from_link = extractServiceSlugFromLink (s.link);
    return from_link === incoming_slug;
  });
;
  // Check condition
if ( {) {
  $2
}
    service = services.find (
      string =>;
        to_slug (s.id || '') === incoming_slug ||;
        to_slug (s.name || '') === incoming_slug);
  }
  // Check condition
if ( {) {
  $2
}
    return { not_found: true }
  }
  return {
    props: { service },
  }
;
export default /**
 * ServiceDetailPage - Function description
 */
function ServiceDetailPage() {
  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;
        <title>{service.name} | Zion Tech Group</title>;
        <meta;
          name='description';
          content={service.tagline || service.description}
        />;
        <link rel='canonical' href={service.link} />;
      </Head>;
      <div className='container mx - auto px - 4 py - 16'>;
        <div className='text - center mb - 10'>;
          <h1 className='text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 4'>;
            {service.name}
          </h1>;
          <p className='text - gray - 300 text - lg max - w-3xl mx - auto'>;
            {service.tagline || service.description}
          </p>;
        </div>;
        <div className='grid grid - cols - 1 lg:grid - cols - 3 gap - 6 mb - 12'>;
          <div className='lg:col - span - 2 space - y-6'>;
            <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
              <h2 className='text - white text - xl font - semibold mb - 3'>;
                Overview;
              </h2>;
              <p className='text - gray - 300 leading - relaxed'>;
                {service.description}
              </p>;
            </Card>;
            <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
              <h3 className='text - white text - lg font - semibold mb - 4'>;
                Key Features;
              </h3>;
              <ul className='space - y-2 text - gray - 300'>;
                {(service.features || []).slice (0, 12).map ((function: string) => (
                  <li key={f} className='flex items - start gap - 2'>;
                    <Check className='w - 4 h - 4 mt - 0.5 text - emerald - 400' />;
                    <span>{f}</span>;
                  </li>))}
              </ul>;
            </Card>;
          </div>;
          <div className='space - y-6'>;
            <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
              <div className='text - sm text - gray - 400 mb - 1'>Pricing</div>;
              <div className='text - 3xl font - bold text - white'>;

                {service.price}
                <span className='text - base font - medium text - gray - 400'>;
                  {service.period}

          content={service && service.tagline || service && service.description}
        />;
        <link rel='canonical' href={service && service.link} />;
      </Head>;

      <div className='container mx-auto px-4 py-16'>;
        <div className='text-center mb-10'>;
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>;
            {service && service.name}
          </h1>;
          <p className='text-gray-300 text-lg max-w-3xl mx-auto'>;
            {service && service.tagline || service && service.description}
          </p>;
        </div>;

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>;
          <div className='lg:col-span-2 space-y-6'>;
            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
              <h2 className='text-white text-xl font-semibold mb-3'>;
                Overview;
              </h2>;
              <p className='text-gray-300 leading-relaxed'>;
                {service && service.description}
              </p>;
            </Card>;

            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
              <h3 className='text-white text-lg font-semibold mb-4'>;
                Key Features;
              </h3>;
              <ul className='space-y-2 text-gray-300'>;
                {(service && service.features || []).slice(0, 12).map((f: string) => (;
                  <li key={f} className='flex items-start gap-2'>;
                    <Check className='w-4 h-4 mt-0 && 0.5 text-emerald-400' />;
                    <span>{f}</span>;
                  </li>;
                ))}
              </ul>;
            </Card>;
          </div>;

          <div className='space-y-6'>;
            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
              <div className='text-sm text-gray-400 mb-1'>Pricing</div>;
              <div className='text-3xl font-bold text-white'>;
                {service && service.price}
                <span className='text-base font-medium text-gray-400'>;
                  {service && service.period}
                </span>;
              </div>;
              <div className='text-sm text-gray-400 mt-2'>;
                Trial: {service && service.trialDays || 14} days • Setup:{' '}
                {service && service.setupTime || 'Fast'}
              </div>;
              <div className='mt-6 flex gap-3'>;

                <Button
                  href='/contact'
                  className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
                  Contact Sales;
                </Button>;
                <Button
                  href={service && service.link}
                  variant='outline'

                  className='flex-1 border border-gray-600 text-gray-200'>;
                  <ExternalLink className='w-4 h-4 mr-2' /> Learn More;
                </Button>;
              </div>;
            </Card>;

            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
              <h3 className='text-white font-semibold mb-3'>Contact</h3>;
              <div className='space-y-3 text-sm'>;
                <div className='flex items-center gap-2 text-cyan-400'>;
                  <Phone className='w-4 h-4' />;

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

                    className='text-xs hover:underline'>;
                    {contactInfo && contactInfo.address}
=======
                </span>;
              </div>;
              <div className='text - sm text - gray - 400 mt - 2'>;
                Trial: {service.trial_days || 14} days • Setup:{' '}
                {service.setup_time || 'Fast'}
              </div>;
              <div className='mt - 6 flex gap - 3'>;
                <Button;
                  href='/contact';
                  className='flex - 1 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white';
                >;
                  Contact Sales;
                </Button>;
                <Button;
                  href={service.link}
                  variant='outline';
                  className='flex - 1 border border - gray - 600 text - gray - 200';
                >;
                  <ExternalLink className='w - 4 h - 4 mr - 2' /> Learn More;
                </Button>;
              </div>;
            </Card>;
<Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'>;
              <h3 className='text - white font - semibold mb - 3'>Contact</h3>;
              <div className='space - y-3 text - sm'>;
                <div className='flex items - center gap - 2 text - cyan - 400'>;
                  <Phone className='w - 4 h - 4' />;
                  <a;
                    href={`tel:${contact_info.mobile.replace (/[^+\\d]/g, '')}`}
                    className='hover:underline';
                  >;
                    {contact_info.mobile}
                  </a>;
                </div>;
                <div className='flex items - center gap - 2 text - purple - 400'>;
                  <Mail className='w - 4 h - 4' />;
                  <a;
                    href={`mailto:${contact_info.email}`}
                    className='hover:underline';
                  >;
                    {contact_info.email}
                  </a>;
                </div>;
                <div className='flex items - center gap - 2 text - green - 400'>;
                  <MapPin className='w - 4 h - 4' />;
                  <a;
                    href={`https://maps.google.com/?q=${encodeURIComponent (contact_info.address)}`}
                    target='_blank';
                    rel='noopener noreferrer';
                    className='text - xs hover:underline';
                  >;
                    {contact_info.address}

                  </a>;
                </div>;
              </div>;
            </Card>;
          </div>;
        </div>;
      </div>;


=======
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

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
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

export async function getStaticPaths() {
	const services = getAllServices();
	const slugs = new Set<string>();

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

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const services = getAllServices();
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

	let service: Service | undefined = services.find((s) => {
		if (!s.link) return false;
		const fromLink = extractServiceSlugFromLink(s.link);
		return fromLink === incomingSlug
	});

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </UltraFuturisticBackground>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
