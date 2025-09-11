
<<<<<<< HEAD
<<<<<<< HEAD
import Head from 'next / head';
import UltraFuturisticBackground from '../../components / ui / UltraFuturisticBackground';
import Button from '../../components / ui / Button';
import Card from '../../components / ui / Card';
import {Check, Mail, MapPin, Phone, ExternalLink} from 'lucide-react';
import {enhancedRealMicroSaasServices} from '../../data / enhanced - real - micro - saas - services';
import {extra_services} from '../../data / extra - services';
import {additionalEnhancedServices} from '../../data / additional - real - services';
import {newRealServices} from '../../data / new - real - services';
import {marketReadyServices} from '../../data / market - ready - services';
;
type Service = (typeof enhancedRealMicroSaasServices)[number];
;
const contact_info = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
function getAllServices (): Service[] {
  return enhancedRealMicroSaasServices.concat (
    extra_services as Service[],
    additionalEnhancedServices as Service[],
    newRealServices as Service[],
    marketReadyServices as Service[]);
;
function to_slug (value: string): string {
  return value;
    .toLowerCase ();
    .replace (/[^a - z0 - 9]+/g, '-');
    .replace (/(^-|-$)/g, '');
;
function extractServiceSlugFromLink (link: string): string | null {
  try {
    const url = new URL (link);
    const path = url.pathname.replace (/^\/+|\/+$/g, '');
    if () {) {
  $2
}
      return path.substring ('services/'.length);
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import React from 'react';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    }
    return null;
  } catch {;
    return null;
  }

<<<<<<< HEAD
=======
export async function getStaticPaths() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export async function getStaticPaths() {;
  const services = getAllServices();
  const slugs = new Set<string>();
<<<<<<< HEAD
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // Fall back to normalized id or name to provide a stable URL under /services/*;
    if (s && s.id) slugs && slugs.add(toSlug(s && s.id));
    else if (s && s.name) slugs && slugs.add(toSlug(s && s.name));
  }

  return {;
    paths: Array && Array.from(slugs).map(slug => ({ params: { slug } })),;
    fallback: false,;
  };
<<<<<<< HEAD
export async function getStaticProps(): any ({ params }: { params: { slug: string } }) {;
  const services = getAllServices();
  const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');
=======

export async function getStaticProps(): any ({ params }: { params: { slug: string } }) {;
  const services = getAllServices();
  const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  let service: Service | undefined = services && services.find(s => {;
    if (!s && s.link) return false;
    const fromLink = extractServiceSlugFromLink(s && s.link);
    return fromLink === incomingSlug;
  });
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!service) {;
    service = services && services.find(;
      s =>;
        toSlug(s && s.id || '') === incomingSlug ||;
        toSlug(s && s.name || '') === incomingSlug;
    );
  }
<<<<<<< HEAD
  if (!service) {;
    return { notFound: true };
  }
  return {;
    props: { service },;
  };
export default function ServiceDetailPage(): any ({ service }: { service: Service }) {;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  if (!service) {;
    return { notFound: true };
  }

  return {;
    props: { service },;
  };

export default function ServiceDetailPage(): any ({ service }: { service: Service }) {;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>;
      <Head>;
        <title>{service && service.name} | Zion Tech Group</title>;
        <meta
          name='description'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
                {service.price}
                <span className='text - base font - medium text - gray - 400'>;
                  {service.period}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                {service.price}
                <span className='text - base font - medium text - gray - 400'>;
                  {service.period}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          content={service && service.tagline || service && service.description}
        />;
        <link rel='canonical' href={service && service.link} />;
      </Head>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='container mx-auto px-4 py-16'>;
        <div className='text-center mb-10'>;
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>;
            {service && service.name}
          </h1>;
          <p className='text-gray-300 text-lg max-w-3xl mx-auto'>;
            {service && service.tagline || service && service.description}
          </p>;
        </div>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <Button
                  href='/contact'
                  className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white'>;
                  Contact Sales;
                </Button>;
                <Button
                  href={service && service.link}
                  variant='outline'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  className='flex-1 border border-gray-600 text-gray-200'>;
                  <ExternalLink className='w-4 h-4 mr-2' /> Learn More;
                </Button>;
              </div>;
            </Card>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <Card className='p-6 bg-black/40 border border-gray-700/50'>;
              <h3 className='text-white font-semibold mb-3'>Contact</h3>;
              <div className='space-y-3 text-sm'>;
                <div className='flex items-center gap-2 text-cyan-400'>;
                  <Phone className='w-4 h-4' />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </a>;
                </div>;
              </div>;
            </Card>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground',
import Button from '../../components/ui/Button',
import Card from '../../components/ui/Card';

import {Check, Mail, MapPin, Phone, ExternalLink} from 'lucide-react';
import {enhancedRealMicroSaasServices} from '../../data/enhanced-real-micro-saas-services';
import {extraServices} from '../../data/extra-services';
import {additionalEnhancedServices} from '../../data/additional-real-services';
import {newRealServices} from '../../data/new-real-services';
import {marketReadyServices} from '../../data/market-ready-services';
type Service = (typeof enhancedRealMicroSaasServices)[number];
const contactInfo = {
  mobile: '+1 302 464 0950'
  email: 'kleber@ziontechgroup.com'
  address: '364 E Main St STE 1008 Middletown DE 19709'
  website: 'https://ziontechgroup.com'
}
function getAllServices(): Service[] {
  return enhancedRealMicroSaasServices.concat(
    extraServices as Service[]
    additionalEnhancedServices as Service[]
    newRealServices as Service[]
    marketReadyServices as Service[]
  );
function toSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
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
export async function getStaticPaths() {

export async function getStaticPaths() {;
  const services = getAllServices();
  const slugs = new Set<string>();
    // Fall back to normalized id or name to provide a stable URL under /services/*
    if (s.id) slugs.add(toSlug(s.id));
    else if (s.name) slugs.add(toSlug(s.name));
  }
  return {
    paths: Array.from(slugs).map(slug => ({ params: { slug } }))
    fallback: false
  }
export async function getStaticProps({ params }: { params: { slug: string } }) {
    paths: Array.from(slugs).map(slug => ({ params: { slug } })),
    fallback: false,
  };

export async function getStaticProps({ params }: { params: { slug: string } }) {;
  const services = getAllServices();
  const incomingSlug = (params?.slug |'').replace(/^\/+|\/+$/g, '');
  let service: Service | undefined = services.find(s => {
    if (!s.link) return false;
    const fromLink = extractServiceSlugFromLink(s.link);
    return fromLink === incomingSlug;
  });
  if (!service) {
    service = services.find(
      s =>
        toSlug(s.id |'') === incomingSlug |
        toSlug(s.name |'') === incomingSlug
    );
  }

  if (!service) {
    return { notFound: true }
  }
  return {
    props: { service }
  }
export default function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta
          name='description'
          content={service.tagline |service.description}
        />
        <link rel='canonical' href={service.link} />
      </Head>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-10'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>
            {service.name}
          </h1>
          <p className='text-gray-300 text-lg max-w-3xl mx-auto'>
            {service.tagline |service.description}
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12'>
          <div className='lg:col-span-2 space-y-6'>
            <Card className='p-6 bg-black/40 border border-gray-700/50'>
              <h2 className='text-white text-xl font-semibold mb-3'>
                Overview
              </h2>
              <p className='text-gray-300 leading-relaxed'>
                {service.description}
              </p>
            </Card>
            <Card className='p-6 bg-black/40 border border-gray-700/50'>
              <h3 className='text-white text-lg font-semibold mb-4'>
                Key Features
              </h3>
              <ul className='space-y-2 text-gray-300'>
                {(service.features |[]).slice(0, 12).map((f: string) => (
                  <li key={f} className='flex items-start gap-2'>
                    <Check className='w-4 h-4 mt-0.5 text-emerald-400' />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className='space-y-6'>
            <Card className='p-6 bg-black/40 border border-gray-700/50'>
              <div className='text-sm text-gray-400 mb-1'>Pricing</div>
              <div className='text-3xl font-bold text-white'>
                {service.price}
                <span className='text-base font-medium text-gray-400'>
                  {service.period}
                </span>
              </div>
              <div className='text-sm text-gray-400 mt-2'>
                Trial: {service.trialDays |14} days • Setup:{' '}
                {service.setupTime |'Fast'}
              </div>
              <div className='mt-6 flex gap-3'>
                <Button
                  href='/contact'
                  className='flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                >
                  Contact Sales
                </Button>
                <Button
                  href={service.link}
                  variant='outline'
                  className='flex-1 border border-gray-600 text-gray-200'
                >
                  <ExternalLink className='w-4 h-4 mr-2' /> Learn More
                </Button>
              </div>
            </Card>
<Card className='p-6 bg-black/40 border border-gray-700/50'>
              <h3 className='text-white font-semibold mb-3'>Contact</h3>
              <div className='space-y-3 text-sm'>
                <div className='flex items-center gap-2 text-cyan-400'>
                  <Phone className='w-4 h-4' />
                  <a
                    href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`}
                    className='hover:underline'
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className='flex items-center gap-2 text-purple-400'>
                  <Mail className='w-4 h-4' />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className='hover:underline'
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className='flex items-center gap-2 text-green-400'>
                  <MapPin className='w-4 h-4' />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-xs hover:underline'
                  >
                    {contactInfo.address}
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>;
  );
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

}
}
}
}
}
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newRealServices } from '../../data/new-real-services';
import { marketReadyServices } from '../../data/market-ready-services';
type Service = typeof enhancedRealMicroSaasServices[number];
<<<<<<< HEAD
const contactInfo = {;
	mobile: '+1 302 464 0950';
	email: 'kleber@ziontechgroup.com';
	address: '364 E Main St STE 1008 Middletown DE 19709';
	website: 'https://ziontechgroup.com';
};
function getAllServices(): Service[] {;
	return enhancedRealMicroSaasServices;
		.concat(;
			extraServices as Service[],;
			additionalEnhancedServices as Service[],;
			newRealServices as Service[],;
			marketReadyServices as Service[];
		);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function toSlug(value: string): string {;
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function extractServiceSlugFromLink(link: string): string | null {;
	try {
		const url = new URL(link);
		const path = url.pathname.replace(/^\/+|\/+$/g, '');
		if (path.startsWith('services/')) {;
			return path.substring('services/'.length);
		  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
		return null;
	} catch {;
		return null;
	  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function getStaticPaths() {;
	const services = getAllServices();
	const slugs = new Set<string>();
	for (const s of services) {;
		// Prefer explicit link under /services/* when available;
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink) {;
			slugs.add(fromLink);
			continue;
		  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
		// Fall back to normalized id or name to provide a stable URL under /services/*;
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));
	  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
	return {;
		paths: Array.from(slugs).map((slug) => ({ params: { slug } }));
		fallback: false;
	  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export async function getStaticProps({ params }: { params: { slug: string } }) {;
	const services = getAllServices();
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, '');
	let service: Service | undefined = services.find((s) => {;
		if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
		props: { service   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
	  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default function ServiceDetailPage({ service }: { service: Service }) {
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.tagline || service.description} />
				<link rel="canonical" href={service.link} />
			</Head>
<<<<<<< HEAD
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{service.name  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
				</div>
=======

			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{service.name}
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
				</div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
					<div className="lg:col-span-2 space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{service.description}</p>
						</Card>
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{(service.features || []).slice(0, 12).map((f: string) => (
									<li key={f} className="flex items-start gap-2">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
										<span>{f}</span>
									</li>
<<<<<<< HEAD
								))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
							</ul>
						</Card>
					</div>
=======
								))}
							</ul>
						</Card>
					</div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</Link></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</Link></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</Link></div>
=======

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
							</div>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	)
<<<<<<< HEAD
    </UltraFuturisticBackground>);
;
<<<<<<< HEAD


    </UltraFuturisticBackground>);
;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </UltraFuturisticBackground>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
