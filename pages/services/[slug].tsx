
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
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import {Check, Mail, MapPin, Phone, ExternalLink} from 'lucide-react';
import {enhancedRealMicroSaasServices} from '../../data/enhanced-real-micro-saas-services';
import {extraServices} from '../../data/extra-services';
import {additionalEnhancedServices} from '../../data/additional-real-services';
import {newRealServices} from '../../data/new-real-services';
import {marketReadyServices} from '../../data/market-ready-services';

type Service = (typeof enhancedRealMicroSaasServices)[number];

const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
};

function getAllServices(): any (): Service[] {;
  return enhancedRealMicroSaasServices && enhancedRealMicroSaasServices.concat(;
    extraServices as Service[],;
    additionalEnhancedServices as Service[],;
    newRealServices as Service[],;
    marketReadyServices as Service[];
  );

function toSlug(): any (value: string): string {;
  return value;
    .toLowerCase();
    .replace(/[^a-z0-9]+/g, '-');
    .replace(/(^-|-$)/g, '');

function extractServiceSlugFromLink(): any (link: string): string | null {;
  try {;
    const url = new URL(link);
    const path = url && url.pathname.replace(/^\/+|\/+$/g, '');
    if (path && path.startsWith('services/')) {;
      return path && path.substring('services/'.length);
    }
    return null;
  } catch {;
    return null;
  }

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
                  </a>;
                </div>;
              </div>;
            </Card>;
          </div>;
        </div>;
      </div>;
    </UltraFuturisticBackground>;
  );
